'use strict';

/* Hoofdmodule: game-loop, canvas-rendering, input, power-ups, geluid. */
const Game = (() => {
  const W = Config.W, H = Config.H, WALL = Config.WALL, EDGE = Config.EDGE_Y;
  let canvas, ctx;
  let lastTime = 0, acc = 0;
  let lastDrop = -1e9;
  let ghostX = W / 2, pointerIn = false;
  let boostUntil = 0;
  let nextPowerupAt = 0;
  let fallAnims = [];   // munten die in de bak vallen
  let floats = [];      // zwevende "+n"-teksten
  let confetti = [];
  let toastCooldown = 0;

  /* ---------- Geluid (WebAudio, geen assets) ---------- */
  const Sound = (() => {
    let ac = null;
    function play(freq, dur = 0.08, type = 'sine', gain = 0.14, slide = 0) {
      if (State.get().muted) return;
      try {
        ac = ac || new (window.AudioContext || window.webkitAudioContext)();
        const o = ac.createOscillator(), g = ac.createGain();
        o.type = type;
        o.frequency.setValueAtTime(freq, ac.currentTime);
        if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), ac.currentTime + dur);
        g.gain.setValueAtTime(gain, ac.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
        o.connect(g).connect(ac.destination);
        o.start();
        o.stop(ac.currentTime + dur);
      } catch (e) {}
    }
    const seq = (freqs, step, dur, type, gain) =>
      freqs.forEach((f, i) => setTimeout(() => play(f, dur, type, gain), i * step));
    return {
      drop: () => play(300, 0.06, 'triangle', 0.1, -120),
      collect: () => { play(700 + Math.random() * 250, 0.1, 'sine', 0.13); play(1400, 0.05, 'sine', 0.04); },
      lost: () => play(150, 0.16, 'sawtooth', 0.07, -70),
      buy: () => seq([520, 780], 70, 0.09, 'triangle', 0.12),
      powerup: () => seq([660, 880, 1100], 80, 0.12, 'square', 0.06),
      levelup: () => seq([523, 659, 784, 1046], 90, 0.14, 'triangle', 0.11),
      denied: () => play(180, 0.12, 'square', 0.05),
    };
  })();

  /* ---------- Economie-helpers ---------- */

  const boostActive = () => performance.now() < boostUntil;

  function zoneBounds() {
    const inner = W - 2 * WALL;
    const zw = inner * Config.zone.widthFrac;
    return { x0: W / 2 - zw / 2, x1: W / 2 + zw / 2 };
  }

  function zoneMultAt(x) {
    const m = Upgrades.zoneMult();
    if (m <= 1) return 1;
    const z = zoneBounds();
    return (x >= z.x0 && x <= z.x1) ? m : 1;
  }

  function payout(tierIdx, x) {
    const base = Config.tiers[tierIdx].value;
    return Math.max(1, Math.round(base * zoneMultAt(x) * (boostActive() ? 2 : 1) * State.prestigeMult()));
  }

  /* ---------- Gebeurtenissen uit de physics ---------- */

  function handleCollected(c) {
    if (c.kind === 'powerup') {
      applyPowerup(c.sub, c.x);
      return;
    }
    const d = State.get();
    const val = payout(c.tier, c.x);
    State.earn(val);
    d.stats.collected++;
    const ups = Progress.addXp(val);
    fallAnims.push({ x: c.x, y: EDGE + 4, vy: 2.2, tier: c.tier, alpha: 1 });
    floats.push({ x: c.x, y: EDGE - 12, vy: -0.8, life: 1, text: `+${val}`, color: '#ffd75e', size: zoneMultAt(c.x) > 1 ? 20 : 15 });
    Sound.collect();
    for (let i = 0; i < ups; i++) onLevelUp();
    afterEvent();
  }

  function handleLost(c) {
    if (c.kind === 'powerup') return;
    State.get().stats.lost++;
    fallAnims.push({ x: c.x < W / 2 ? WALL + 4 : W - WALL - 4, y: c.y, vy: 1.5, tier: c.tier, alpha: 0.7, lost: true });
    Sound.lost();
  }

  function onLevelUp() {
    const d = State.get();
    const reward = Config.xp.rewardPerLevel * d.level;
    State.earn(reward);
    UI.toast(`🎉 <b>Niveau ${d.level}!</b> Beloning: +${reward} munten`, 'gold');
    Sound.levelup();
    burstConfetti(W / 2, EDGE + 40, 40);
  }

  function afterEvent() {
    for (const a of Progress.check()) {
      State.earn(a.reward);
      UI.toast(`🏆 <b>${a.name}</b><br>${a.desc} — +${a.reward} munten`, 'ach');
      Sound.levelup();
    }
    UI.refresh();
  }

  /* ---------- Power-ups ---------- */

  function scheduleNextPowerup() {
    const p = Config.powerup;
    const delay = (p.minDelay + Math.random() * (p.maxDelay - p.minDelay)) / Upgrades.luckFactor();
    nextPowerupAt = performance.now() + delay;
  }

  function spawnPowerup() {
    const subs = ['boost', 'rain', 'jackpot'];
    const sub = subs[Math.floor(Math.random() * subs.length)];
    const x = WALL + 40 + Math.random() * (W - 2 * WALL - 80);
    Physics.spawnCoin(x, Config.DROP_Y, 0, 'powerup', sub);
    UI.toast('✨ Er is een power-up op het veld verschenen!', 'info');
    scheduleNextPowerup();
  }

  function applyPowerup(sub, x) {
    const d = State.get();
    d.stats.powerups++;
    Sound.powerup();
    if (sub === 'boost') {
      boostUntil = performance.now() + Config.powerup.boostMs;
      UI.toast('⚡ <b>×2 boost</b> — 30 seconden dubbele uitbetaling!', 'gold');
    } else if (sub === 'rain') {
      UI.toast('🌧 <b>Muntenregen!</b> Gratis munten vallen op het veld', 'gold');
      for (let i = 0; i < Config.powerup.rainCoins; i++) {
        setTimeout(() => {
          const rx = WALL + 30 + Math.random() * (W - 2 * WALL - 60);
          Physics.spawnCoin(rx, Config.DROP_Y + Math.random() * 60, 0);
        }, i * 140);
      }
    } else {
      const amount = Math.round(Config.powerup.jackpotBase * Upgrades.zoneMult() * State.prestigeMult());
      State.earn(amount);
      UI.toast(`⭐ <b>JACKPOT!</b> +${amount} munten`, 'gold');
      burstConfetti(x, EDGE + 40, 60);
      floats.push({ x, y: EDGE - 12, vy: -0.9, life: 1, text: `+${amount}`, color: '#ffe9a3', size: 24 });
    }
    afterEvent();
  }

  /* ---------- Input ---------- */

  function canvasPos(e) {
    const r = canvas.getBoundingClientRect();
    return { x: (e.clientX - r.left) * (W / r.width), y: (e.clientY - r.top) * (H / r.height) };
  }

  function tryDrop(x) {
    const d = State.get();
    const tier = Config.tiers[d.selectedTier];
    const now = performance.now();
    if (now - lastDrop < Upgrades.cooldownMs()) return;
    if (!State.spend(tier.value)) {
      if (now > toastCooldown) {
        toastCooldown = now + 1500;
        UI.toast('Niet genoeg munten — vang eerst munten op!', 'warn');
        UI.flashBalance();
        Sound.denied();
      }
      return;
    }
    lastDrop = now;
    const cx = Math.min(W - WALL - tier.r - 2, Math.max(WALL + tier.r + 2, x));
    Physics.spawnCoin(cx, Config.DROP_Y, d.selectedTier);
    d.stats.dropped++;
    Sound.drop();
    afterEvent();
  }

  function bindInput() {
    canvas.addEventListener('pointerdown', e => { pointerIn = true; ghostX = canvasPos(e).x; tryDrop(ghostX); });
    canvas.addEventListener('pointermove', e => { pointerIn = true; ghostX = canvasPos(e).x; });
    canvas.addEventListener('pointerleave', () => { pointerIn = false; });
  }

  /* ---------- UI-callbacks ---------- */

  function onTierClick(i) {
    const d = State.get();
    if (d.unlockedTiers[i]) {
      d.selectedTier = i;
      UI.refresh();
      return;
    }
    if (Upgrades.unlockTier(i)) {
      UI.toast(`${Config.tiers[i].name}en munten ontgrendeld!`, 'gold');
      Sound.buy();
      afterEvent();
    } else {
      UI.flashBalance();
      Sound.denied();
    }
  }

  function onBuyUpgrade(id) {
    if (Upgrades.buy(id)) { Sound.buy(); afterEvent(); }
    else Sound.denied();
  }

  function onUnlockTier(i) { onTierClick(i); }

  function onPrestige() {
    if (!Progress.canPrestige()) return;
    const gain = Progress.pointsGain();
    Progress.doPrestige();
    Physics.clearCoins();
    Upgrades.applyAll();
    Physics.seedTable();
    Physics.warmup(Config.seed.warmupMs);
    boostUntil = 0;
    UI.closeShop();
    UI.toast(`💎 <b>Prestige!</b> +${gain} punten — multiplier is nu ×${State.prestigeMult().toFixed(1)}`, 'gold');
    burstConfetti(W / 2, H / 2, 90);
    afterEvent();
    save();
  }

  function onWipe() {
    State.wipe();
    location.reload();
  }

  /* ---------- Rendering ---------- */

  function draw(now) {
    ctx.clearRect(0, 0, W, H);
    drawTable(now);
    drawZones(now);
    drawGutters();
    drawPusher();
    drawFallAnims();
    drawCoins(now);
    drawGhost(now);
    drawFloats();
    drawConfetti();
  }

  function drawTable() {
    // speelveld
    let g = ctx.createLinearGradient(0, 0, 0, EDGE);
    g.addColorStop(0, '#26335f');
    g.addColorStop(1, '#1a2445');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, EDGE);
    // opvangbak
    g = ctx.createLinearGradient(0, EDGE, 0, H);
    g.addColorStop(0, '#05070f');
    g.addColorStop(0.25, '#0b101f');
    g.addColorStop(1, '#101728');
    ctx.fillStyle = g;
    ctx.fillRect(0, EDGE, W, H - EDGE);
    // schaduw net boven de rand + gouden LED-rand
    g = ctx.createLinearGradient(0, EDGE - 26, 0, EDGE);
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(1, 'rgba(0,0,0,0.4)');
    ctx.fillStyle = g;
    ctx.fillRect(WALL, EDGE - 26, W - 2 * WALL, 26);
    ctx.fillStyle = '#f2c433';
    ctx.fillRect(WALL, EDGE, W - 2 * WALL, 3);
    // zijrails
    for (const x of [0, W - WALL]) {
      const rg = ctx.createLinearGradient(x, 0, x + WALL, 0);
      rg.addColorStop(0, x === 0 ? '#3a4a80' : '#151d38');
      rg.addColorStop(1, x === 0 ? '#151d38' : '#3a4a80');
      ctx.fillStyle = rg;
      ctx.fillRect(x, 0, WALL, EDGE + 40);
    }
    // label in de bak
    ctx.fillStyle = 'rgba(242,196,51,0.25)';
    ctx.font = '700 13px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('— OPVANGBAK —', W / 2, H - 18);
  }

  function drawZones(now) {
    const m = Upgrades.zoneMult();
    if (m <= 1) return;
    const z = zoneBounds();
    const pulse = 0.16 + 0.07 * Math.sin(now / 350);
    // subtiele strook op de tafel (verdwijnt grotendeels onder de munten)
    ctx.fillStyle = `rgba(242,196,51,${pulse * 0.6})`;
    ctx.fillRect(z.x0, EDGE - 60, z.x1 - z.x0, 60);
    // duidelijke zone-indicator in de opvangbak, altijd zichtbaar
    ctx.fillStyle = `rgba(242,196,51,${pulse + 0.08})`;
    ctx.fillRect(z.x0, EDGE + 3, z.x1 - z.x0, 34);
    ctx.strokeStyle = 'rgba(242,196,51,0.75)';
    ctx.setLineDash([6, 5]);
    ctx.lineWidth = 1.6;
    ctx.strokeRect(z.x0, EDGE + 3, z.x1 - z.x0, 34);
    ctx.setLineDash([]);
    ctx.fillStyle = 'rgba(255,231,150,0.95)';
    ctx.font = '800 22px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`×${m}`, W / 2, EDGE + 29);
  }

  function drawGutters() {
    const open = Physics.gutterOpening(Upgrades.level('guards'));
    const gy = Config.gutter.centerY;
    for (const x of [0, W - WALL]) {
      ctx.fillStyle = '#04060c';
      ctx.fillRect(x, gy - open / 2, WALL, open);
      ctx.fillStyle = 'rgba(255,90,90,0.55)';
      ctx.fillRect(x, gy - open / 2 - 3, WALL, 3);
      ctx.fillRect(x, gy + open / 2, WALL, 3);
    }
  }

  function drawPusher() {
    const p = Physics.pusherRect();
    const top = -10, front = p.y + p.h / 2;
    // schaduw vóór het platform
    const sh = ctx.createLinearGradient(0, front, 0, front + 14);
    sh.addColorStop(0, 'rgba(0,0,0,0.45)');
    sh.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = sh;
    ctx.fillRect(WALL, front, W - 2 * WALL, 14);
    // blok
    const g = ctx.createLinearGradient(0, top, 0, front);
    g.addColorStop(0, '#4c5c96');
    g.addColorStop(0.75, '#39476e');
    g.addColorStop(1, '#2c375a');
    ctx.fillStyle = g;
    ctx.fillRect(WALL, top, W - 2 * WALL, front - top);
    // voorrand
    ctx.fillStyle = '#f2c433';
    ctx.fillRect(WALL, front - 6, W - 2 * WALL, 6);
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.fillRect(WALL, front - 6, W - 2 * WALL, 2);
    // opdruk
    ctx.fillStyle = 'rgba(255,255,255,0.18)';
    ctx.font = '800 15px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('★  COIN PUSHER DELUXE  ★', W / 2, front - 22);
  }

  function drawCoinShape(x, y, r, tier, angle, alpha = 1) {
    const t = Config.tiers[tier];
    ctx.save();
    ctx.globalAlpha = alpha;
    // schaduw
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.ellipse(x + 2, y + 3, r, r * 0.92, 0, 0, Math.PI * 2);
    ctx.fill();
    // munt
    const g = ctx.createRadialGradient(x - r * 0.35, y - r * 0.4, r * 0.15, x, y, r);
    g.addColorStop(0, t.c.light);
    g.addColorStop(0.6, t.c.base);
    g.addColorStop(1, t.c.dark);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = t.c.dark;
    ctx.lineWidth = 1.6;
    ctx.stroke();
    // ribbels op de rand (draaien mee met de physics-hoek)
    ctx.strokeStyle = 'rgba(0,0,0,0.28)';
    ctx.lineWidth = 1.4;
    for (let i = 0; i < 12; i++) {
      const a = angle + (i / 12) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(x + Math.cos(a) * (r - 3.5), y + Math.sin(a) * (r - 3.5));
      ctx.lineTo(x + Math.cos(a) * (r - 0.8), y + Math.sin(a) * (r - 0.8));
      ctx.stroke();
    }
    // binnenring + waarde
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(x, y, r - 4.5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = t.c.text;
    ctx.font = `800 ${Math.round(r * 0.85)}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(t.value), x, y + 1);
    ctx.restore();
    ctx.textBaseline = 'alphabetic';
  }

  function drawPowerupToken(b, now) {
    const { x, y } = b.position, r = b.circleRadius;
    const sub = b.plugin.sub;
    const colors = { boost: '#ff9b3d', rain: '#5bc4ff', jackpot: '#f2c433' };
    const pulse = 4 + 2.5 * Math.sin(now / 180);
    ctx.save();
    ctx.shadowColor = colors[sub];
    ctx.shadowBlur = 10 + pulse;
    const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.35, r * 0.2, x, y, r);
    g.addColorStop(0, '#ffffff');
    g.addColorStop(1, colors[sub]);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = 'rgba(0,0,0,0.35)';
    ctx.lineWidth = 1.6;
    ctx.stroke();
    ctx.fillStyle = '#1a1f33';
    if (sub === 'boost') {
      ctx.font = `900 ${r}px system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('×2', x, y + 1);
    } else if (sub === 'rain') {
      for (const [dx, dy] of [[-5, 2], [0, -4], [5, 2]]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, 3.2, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      drawStar(x, y, 5, r * 0.62, r * 0.28);
    }
    ctx.restore();
    ctx.textBaseline = 'alphabetic';
  }

  function drawStar(cx, cy, points, outer, inner) {
    ctx.beginPath();
    for (let i = 0; i < points * 2; i++) {
      const rad = i % 2 === 0 ? outer : inner;
      const a = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
      ctx[i === 0 ? 'moveTo' : 'lineTo'](cx + Math.cos(a) * rad, cy + Math.sin(a) * rad);
    }
    ctx.closePath();
    ctx.fill();
  }

  function drawCoins(now) {
    for (const b of Physics.getCoins()) {
      if (b.plugin.kind === 'powerup') drawPowerupToken(b, now);
      else drawCoinShape(b.position.x, b.position.y, b.circleRadius, b.plugin.tier, b.angle);
    }
  }

  function drawFallAnims() {
    for (const a of fallAnims) {
      a.y += a.vy;
      a.vy += 0.3;
      if (a.y > H - 60) a.alpha -= 0.07;
      const r = Config.tiers[a.tier].r;
      if (a.lost) {
        ctx.save();
        ctx.globalAlpha = Math.max(0, a.alpha);
        ctx.fillStyle = '#3c4560';
        ctx.beginPath();
        ctx.arc(a.x, a.y, r * 0.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        a.alpha -= 0.03;
      } else {
        drawCoinShape(a.x, a.y, r, a.tier, a.y * 0.05, Math.max(0, a.alpha));
      }
    }
    fallAnims = fallAnims.filter(a => a.alpha > 0 && a.y < H + 30);
  }

  function drawGhost(now) {
    if (!pointerIn) return;
    const d = State.get();
    const t = Config.tiers[d.selectedTier];
    const x = Math.min(W - WALL - t.r - 2, Math.max(WALL + t.r + 2, ghostX));
    const cdLeft = Math.max(0, Upgrades.cooldownMs() - (now - lastDrop));
    const ready = cdLeft <= 0 && State.canAfford(t.value);
    ctx.save();
    ctx.globalAlpha = ready ? 0.55 : 0.25;
    drawCoinShape(x, Config.DROP_Y, t.r, d.selectedTier, 0, 1);
    ctx.restore();
    ctx.strokeStyle = `rgba(255,255,255,${ready ? 0.35 : 0.15})`;
    ctx.setLineDash([4, 6]);
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, Config.DROP_Y - t.r - 4);
    ctx.stroke();
    ctx.setLineDash([]);
    if (cdLeft > 0) {
      ctx.strokeStyle = 'rgba(255,255,255,0.6)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(x, Config.DROP_Y, t.r + 6, -Math.PI / 2, -Math.PI / 2 + (1 - cdLeft / Upgrades.cooldownMs()) * Math.PI * 2);
      ctx.stroke();
    }
  }

  function drawFloats() {
    ctx.textAlign = 'center';
    for (const f of floats) {
      f.y += f.vy;
      f.life -= 0.014;
      ctx.save();
      ctx.globalAlpha = Math.max(0, f.life);
      ctx.font = `800 ${f.size}px system-ui, sans-serif`;
      ctx.fillStyle = f.color;
      ctx.strokeStyle = 'rgba(0,0,0,0.5)';
      ctx.lineWidth = 3;
      ctx.strokeText(f.text, f.x, f.y);
      ctx.fillText(f.text, f.x, f.y);
      ctx.restore();
    }
    floats = floats.filter(f => f.life > 0);
  }

  function burstConfetti(x, y, n) {
    const colors = ['#f2c433', '#ff9b3d', '#5bc4ff', '#7ee08a', '#ff6b9d'];
    for (let i = 0; i < n; i++) {
      confetti.push({
        x, y,
        vx: (Math.random() - 0.5) * 7,
        vy: -Math.random() * 6 - 2,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.3,
        life: 1,
        color: colors[i % colors.length],
      });
    }
  }

  function drawConfetti() {
    for (const c of confetti) {
      c.x += c.vx;
      c.y += c.vy;
      c.vy += 0.18;
      c.rot += c.vr;
      c.life -= 0.011;
      ctx.save();
      ctx.globalAlpha = Math.max(0, c.life);
      ctx.translate(c.x, c.y);
      ctx.rotate(c.rot);
      ctx.fillStyle = c.color;
      ctx.fillRect(-4, -2.5, 8, 5);
      ctx.restore();
    }
    confetti = confetti.filter(c => c.life > 0 && c.y < H + 20);
  }

  /* ---------- Loop, opslag, layout ---------- */

  function frame(now) {
    const dt = Math.min(100, now - (lastTime || now));
    lastTime = now;
    acc += dt;
    while (acc >= Config.STEP) {
      const res = Physics.step(Config.STEP);
      acc -= Config.STEP;
      for (const c of res.collected) handleCollected(c);
      for (const c of res.lost) handleLost(c);
    }
    if (now >= nextPowerupAt) spawnPowerup();
    UI.setBoost(boostUntil - now);
    UI.tick();
    draw(now);
    requestAnimationFrame(frame);
  }

  function save() {
    State.save(Physics.serializeTable());
  }

  /* Vangnet tegen vastlopen: bijna leeg veld + leeg saldo → noodfonds. */
  function pityCheck() {
    const d = State.get();
    if (d.balance <= 0 && Physics.coinCount() < 5) {
      State.earn(25);
      UI.toast('🤝 Noodfonds: +25 munten. Nieuwe ronde, nieuwe kansen!', 'info');
      UI.refresh();
    }
  }

  function fitCanvas() {
    const stage = document.getElementById('stage');
    const pad = 8;
    const availW = stage.clientWidth - pad, availH = stage.clientHeight - pad;
    const scale = Math.min(availW / W, availH / H);
    canvas.style.width = `${Math.floor(W * scale)}px`;
    canvas.style.height = `${Math.floor(H * scale)}px`;
  }

  function init() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    State.load();
    Physics.init();
    Upgrades.applyAll();

    const d = State.get();
    if (Array.isArray(d.table) && d.table.length) {
      Physics.restoreTable(d.table);
    } else {
      Physics.seedTable();
      Physics.warmup(Config.seed.warmupMs);
    }

    UI.init();
    bindInput();
    fitCanvas();
    window.addEventListener('resize', fitCanvas);

    scheduleNextPowerup();
    setInterval(save, 5000);
    setInterval(pityCheck, 4000);
    window.addEventListener('beforeunload', save);
    document.addEventListener('visibilitychange', () => { if (document.hidden) save(); });

    if (d.stats.dropped === 0) {
      UI.toast('Welkom! Tik op het veld om munten te laten vallen 🪙', 'info');
    }
    requestAnimationFrame(frame);
  }

  return { init, onTierClick, onBuyUpgrade, onUnlockTier, onPrestige, onWipe };
})();

window.addEventListener('DOMContentLoaded', Game.init);
