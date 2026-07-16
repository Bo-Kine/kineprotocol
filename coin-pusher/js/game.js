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

  const PAINT = 'rgba(243,229,194,';   // ivoorverf op het vilt
  const FONT_DISPLAY = "'Rye', Georgia, serif";
  let coinSprites = null;
  let feltPattern = null;

  function starPath(g, cx, cy, points, outer, inner) {
    g.beginPath();
    for (let i = 0; i < points * 2; i++) {
      const rad = i % 2 === 0 ? outer : inner;
      const a = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
      g[i === 0 ? 'moveTo' : 'lineTo'](cx + Math.cos(a) * rad, cy + Math.sin(a) * rad);
    }
    g.closePath();
  }

  /* Muntsprite per tier: gefreesde rand, bevel, gestempelde sterren, gegraveerde waarde. */
  function makeCoinSprite(t) {
    const S = 4, r = t.r, pad = 2;
    const c = document.createElement('canvas');
    c.width = c.height = (r + pad) * 2 * S;
    const g = c.getContext('2d');
    g.scale(S, S);
    const cx = r + pad, cy = r + pad;
    g.fillStyle = t.c.dark;
    g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.fill();
    // muntlichaam
    const bg = g.createLinearGradient(cx - r, cy - r, cx + r, cy + r);
    bg.addColorStop(0, t.c.light);
    bg.addColorStop(0.55, t.c.base);
    bg.addColorStop(1, t.c.dark);
    g.fillStyle = bg;
    g.beginPath(); g.arc(cx, cy, r - 1.4, 0, Math.PI * 2); g.fill();
    // fijne gefreesde randribbels
    g.strokeStyle = 'rgba(0,0,0,0.22)';
    g.lineWidth = 0.8;
    const ticks = Math.round(r * 2.6);
    for (let i = 0; i < ticks; i++) {
      const a = (i / ticks) * Math.PI * 2;
      g.beginPath();
      g.moveTo(cx + Math.cos(a) * (r - 3.1), cy + Math.sin(a) * (r - 3.1));
      g.lineTo(cx + Math.cos(a) * (r - 1.2), cy + Math.sin(a) * (r - 1.2));
      g.stroke();
    }
    // bevel van de binnenschijf
    g.lineWidth = 1;
    g.strokeStyle = 'rgba(0,0,0,0.32)';
    g.beginPath(); g.arc(cx, cy, r - 4.4, 0, Math.PI * 2); g.stroke();
    g.strokeStyle = 'rgba(255,255,255,0.45)';
    g.beginPath(); g.arc(cx, cy, r - 5.3, 0, Math.PI * 2); g.stroke();
    // gestempelde sterren
    g.fillStyle = 'rgba(0,0,0,0.26)';
    starPath(g, cx, cy - r + 8, 5, 2.7, 1.15); g.fill();
    starPath(g, cx, cy + r - 8, 5, 2.7, 1.15); g.fill();
    // waarde, gegraveerd (licht randje onder, donker cijfer erop)
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.font = `700 ${Math.round(r * 0.92)}px Georgia, serif`;
    g.fillStyle = 'rgba(255,255,255,0.4)';
    g.fillText(String(t.value), cx, cy + 1.8);
    g.fillStyle = t.c.text;
    g.fillText(String(t.value), cx, cy + 0.9);
    return c;
  }

  function buildTextures() {
    const n = document.createElement('canvas');
    n.width = n.height = 96;
    const nx = n.getContext('2d');
    for (let i = 0; i < 1100; i++) {
      nx.fillStyle = Math.random() < 0.55 ? 'rgba(0,0,0,0.06)' : 'rgba(243,229,194,0.035)';
      nx.fillRect(Math.random() * 96, Math.random() * 96, 1, 1);
    }
    feltPattern = ctx.createPattern(n, 'repeat');
    coinSprites = Config.tiers.map(makeCoinSprite);
  }

  function draw(now) {
    ctx.clearRect(0, 0, W, H);
    drawTable();
    drawZones(now);
    drawGutters();
    drawPusher();
    drawFallAnims();
    drawCoins(now);
    drawGhost(now);
    drawLighting();
    drawFloats();
    drawConfetti();
  }

  function drawTable() {
    // groen vilt
    let g = ctx.createLinearGradient(0, 0, 0, EDGE);
    g.addColorStop(0, '#256048');
    g.addColorStop(0.6, '#1c4534');
    g.addColorStop(1, '#143527');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, EDGE);
    if (feltPattern) {
      ctx.fillStyle = feltPattern;
      ctx.fillRect(0, 0, W, EDGE);
    }
    // geschilderde sierlijnen langs de rails
    ctx.strokeStyle = PAINT + '0.13)';
    ctx.lineWidth = 2;
    for (const x of [WALL + 9, W - WALL - 9]) {
      ctx.beginPath();
      ctx.moveTo(x, 150);
      ctx.lineTo(x, EDGE - 10);
      ctx.stroke();
    }
    // geschilderde sterren op het vilt
    ctx.fillStyle = PAINT + '0.10)';
    for (const [sx, sy] of [[WALL + 34, EDGE - 34], [W - WALL - 34, EDGE - 34]]) {
      starPath(ctx, sx, sy, 5, 11, 4.6);
      ctx.fill();
    }
    // opvangbak: donker metaal
    g = ctx.createLinearGradient(0, EDGE, 0, H);
    g.addColorStop(0, '#0b0805');
    g.addColorStop(0.3, '#171008');
    g.addColorStop(1, '#241a0c');
    ctx.fillStyle = g;
    ctx.fillRect(0, EDGE, W, H - EDGE);
    // geborstelde structuur in de bak
    ctx.strokeStyle = 'rgba(243,229,194,0.03)';
    ctx.lineWidth = 1;
    for (let y = EDGE + 14; y < H - 8; y += 9) {
      ctx.beginPath();
      ctx.moveTo(WALL, y);
      ctx.lineTo(W - WALL, y);
      ctx.stroke();
    }
    // valschaduw net boven de rand
    g = ctx.createLinearGradient(0, EDGE - 26, 0, EDGE);
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(1, 'rgba(0,0,0,0.42)');
    ctx.fillStyle = g;
    ctx.fillRect(WALL, EDGE - 26, W - 2 * WALL, 26);
    // messing lip op de voorrand
    g = ctx.createLinearGradient(0, EDGE - 2, 0, EDGE + 6);
    g.addColorStop(0, '#f4c95d');
    g.addColorStop(0.5, '#d9a441');
    g.addColorStop(1, '#8a6420');
    ctx.fillStyle = g;
    ctx.fillRect(WALL, EDGE - 2, W - 2 * WALL, 8);
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.fillRect(WALL, EDGE - 2, W - 2 * WALL, 1.5);
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(WALL, EDGE + 6, W - 2 * WALL, 3);
    // houten zijrails met messing binnenrand
    for (const x of [0, W - WALL]) {
      const rg = ctx.createLinearGradient(x, 0, x + WALL, 0);
      rg.addColorStop(0, x === 0 ? '#4d3118' : '#1f1206');
      rg.addColorStop(0.5, '#33200f');
      rg.addColorStop(1, x === 0 ? '#1f1206' : '#4d3118');
      ctx.fillStyle = rg;
      ctx.fillRect(x, 0, WALL, H);
      const bx = x === 0 ? WALL - 3 : W - WALL;
      const bg2 = ctx.createLinearGradient(bx, 0, bx + 3, 0);
      bg2.addColorStop(0, x === 0 ? '#8a6420' : '#f4c95d');
      bg2.addColorStop(1, x === 0 ? '#d9a441' : '#8a6420');
      ctx.fillStyle = bg2;
      ctx.fillRect(bx, 0, 3, H);
    }
    // geschilderd label in de bak + messing onderrail
    ctx.fillStyle = PAINT + '0.28)';
    ctx.font = `15px ${FONT_DISPLAY}`;
    ctx.textAlign = 'center';
    ctx.fillText('— OPVANGBAK —', W / 2, H - 20);
    ctx.fillStyle = '#8a6420';
    ctx.fillRect(WALL, H - 6, W - 2 * WALL, 3);
  }

  function drawZones(now) {
    const m = Upgrades.zoneMult();
    if (m <= 1) return;
    const z = zoneBounds();
    const pulse = 0.14 + 0.06 * Math.sin(now / 380);
    // geschilderde bonusbaan op het vilt (verdwijnt onder de munten)
    ctx.fillStyle = `rgba(244,201,93,${pulse * 0.55})`;
    ctx.fillRect(z.x0, EDGE - 58, z.x1 - z.x0, 56);
    ctx.strokeStyle = PAINT + '0.4)';
    ctx.setLineDash([7, 6]);
    ctx.lineWidth = 2;
    ctx.strokeRect(z.x0 + 1, EDGE - 58, z.x1 - z.x0 - 2, 54);
    ctx.setLineDash([]);
    // messing bonusplaat in de opvangbak, altijd zichtbaar
    const g = ctx.createLinearGradient(0, EDGE + 10, 0, EDGE + 44);
    g.addColorStop(0, `rgba(244,201,93,${0.28 + pulse})`);
    g.addColorStop(1, `rgba(138,100,32,${0.28 + pulse})`);
    ctx.fillStyle = g;
    ctx.fillRect(z.x0, EDGE + 10, z.x1 - z.x0, 34);
    ctx.strokeStyle = 'rgba(244,201,93,0.8)';
    ctx.lineWidth = 1.6;
    ctx.strokeRect(z.x0, EDGE + 10, z.x1 - z.x0, 34);
    ctx.fillStyle = '#f3e5c2';
    ctx.font = `20px ${FONT_DISPLAY}`;
    ctx.textAlign = 'center';
    ctx.fillText(`${m}x BONUS`, W / 2, EDGE + 35);
    ctx.fillStyle = 'rgba(142,31,47,0.9)';
    starPath(ctx, z.x0 + 16, EDGE + 27, 5, 7, 3);
    ctx.fill();
    starPath(ctx, z.x1 - 16, EDGE + 27, 5, 7, 3);
    ctx.fill();
  }

  function drawGutters() {
    const open = Physics.gutterOpening(Upgrades.level('guards'));
    const gy = Config.gutter.centerY;
    for (const x of [0, W - WALL]) {
      // donkere sleuf met messing omlijsting
      const g = ctx.createLinearGradient(x, 0, x + WALL, 0);
      g.addColorStop(x === 0 ? 0 : 1, '#000');
      g.addColorStop(x === 0 ? 1 : 0, '#170e04');
      ctx.fillStyle = g;
      ctx.fillRect(x, gy - open / 2, WALL, open);
      ctx.fillStyle = '#d9a441';
      ctx.fillRect(x, gy - open / 2 - 2.5, WALL, 2.5);
      ctx.fillRect(x, gy + open / 2, WALL, 2.5);
    }
  }

  function drawPusher() {
    const p = Physics.pusherRect();
    const top = -10, front = p.y + p.h / 2;
    // schaduw vóór het plateau
    const sh = ctx.createLinearGradient(0, front, 0, front + 16);
    sh.addColorStop(0, 'rgba(0,0,0,0.5)');
    sh.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = sh;
    ctx.fillRect(WALL, front, W - 2 * WALL, 16);
    // gietijzeren plaat, kermisrood gelakt
    let g = ctx.createLinearGradient(0, top, 0, front);
    g.addColorStop(0, '#5c1420');
    g.addColorStop(0.55, '#8e1f2f');
    g.addColorStop(0.9, '#a92c3e');
    g.addColorStop(1, '#6b1722');
    ctx.fillStyle = g;
    ctx.fillRect(WALL, top, W - 2 * WALL, front - top);
    // ivoorkleurige pinstripe-bies
    ctx.strokeStyle = PAINT + '0.5)';
    ctx.lineWidth = 1.8;
    ctx.strokeRect(WALL + 10, top + 16, W - 2 * WALL - 20, front - top - 30);
    // opdruk
    ctx.fillStyle = PAINT + '0.85)';
    ctx.font = `17px ${FONT_DISPLAY}`;
    ctx.textAlign = 'center';
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.6)';
    ctx.shadowOffsetY = 1.5;
    ctx.fillText('★ COIN PUSHER ★', W / 2, front - 34);
    ctx.restore();
    // messing voorlip met klinknagels
    g = ctx.createLinearGradient(0, front - 9, 0, front);
    g.addColorStop(0, '#f4c95d');
    g.addColorStop(0.55, '#d9a441');
    g.addColorStop(1, '#8a6420');
    ctx.fillStyle = g;
    ctx.fillRect(WALL, front - 9, W - 2 * WALL, 9);
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.fillRect(WALL, front - 9, W - 2 * WALL, 1.5);
    for (let x = WALL + 22; x < W - WALL - 12; x += 40) {
      const rg = ctx.createRadialGradient(x - 0.8, front - 5.3, 0.4, x, front - 4.5, 2.6);
      rg.addColorStop(0, '#fff3cf');
      rg.addColorStop(1, '#7a5a1d');
      ctx.fillStyle = rg;
      ctx.beginPath();
      ctx.arc(x, front - 4.5, 2.4, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  /* lift 0..1: val-animatie van een zojuist gedropte munt */
  function drawCoinShape(x, y, r, tier, angle, alpha = 1, lift = 0) {
    const spr = coinSprites[tier];
    const scale = 1 + lift * 0.45;
    ctx.save();
    ctx.globalAlpha = alpha;
    // slagschaduw (blijft op tafel liggen terwijl de munt "zweeft")
    ctx.fillStyle = `rgba(0,0,0,${Math.max(0.1, 0.34 - lift * 0.2)})`;
    ctx.beginPath();
    ctx.ellipse(x + 2 + lift * 5, y + 3 + lift * 7, r * (1 - lift * 0.3), r * 0.9 * (1 - lift * 0.3), 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.translate(x, y - lift * 12);
    ctx.rotate(angle);
    const d = (r + 2) * 2 * scale;
    ctx.drawImage(spr, -d / 2, -d / 2, d, d);
    ctx.rotate(-angle);
    // vaste lichtinval: de glans draait niet mee met de munt
    const rr = (r - 0.5) * scale;
    const hg = ctx.createRadialGradient(-rr * 0.42, -rr * 0.48, rr * 0.08, 0, 0, rr);
    hg.addColorStop(0, 'rgba(255,244,214,0.38)');
    hg.addColorStop(0.45, 'rgba(255,244,214,0.06)');
    hg.addColorStop(0.8, 'rgba(0,0,0,0)');
    hg.addColorStop(1, 'rgba(0,0,0,0.2)');
    ctx.fillStyle = hg;
    ctx.beginPath();
    ctx.arc(0, 0, rr, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  /* Power-up als geëmailleerde kermisbadge met messing ring */
  function drawPowerupToken(b, now) {
    const { x, y } = b.position, r = b.circleRadius;
    const sub = b.plugin.sub;
    const enamel = { boost: '#c23b22', rain: '#2e6f8e', jackpot: '#8e1f2f' }[sub];
    const pulse = 8 + 4 * Math.sin(now / 190);
    ctx.save();
    ctx.shadowColor = '#ffe9a3';
    ctx.shadowBlur = pulse;
    // messing ring
    let g = ctx.createLinearGradient(x - r, y - r, x + r, y + r);
    g.addColorStop(0, '#f4c95d');
    g.addColorStop(0.6, '#d9a441');
    g.addColorStop(1, '#8a6420');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    // emaille hart
    g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.35, r * 0.15, x, y, r - 3);
    g.addColorStop(0, 'rgba(255,255,255,0.35)');
    g.addColorStop(0.25, enamel);
    g.addColorStop(1, enamel);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r - 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f3e5c2';
    if (sub === 'boost') {
      ctx.font = `700 ${Math.round(r * 0.95)}px Georgia, serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('×2', x, y + 1);
      ctx.textBaseline = 'alphabetic';
    } else if (sub === 'rain') {
      for (const [dx, dy] of [[-5.5, 2], [0, -4.5], [5.5, 2]]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, 3.1, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      starPath(ctx, x, y, 5, r * 0.62, r * 0.27);
      ctx.fill();
    }
    ctx.restore();
  }

  const DROP_ANIM_MS = 340;

  function drawCoins(now) {
    for (const b of Physics.getCoins()) {
      if (b.plugin.kind === 'powerup') {
        drawPowerupToken(b, now);
      } else {
        const age = now - (b.plugin.born || 0);
        const lift = age < DROP_ANIM_MS ? Math.pow(1 - age / DROP_ANIM_MS, 2) : 0;
        drawCoinShape(b.position.x, b.position.y, b.circleRadius, b.plugin.tier, b.angle, 1, lift);
      }
    }
  }

  /* Warme lichtval van de marquee + vignet over het hele veld */
  function drawLighting() {
    let g = ctx.createRadialGradient(W / 2, -70, 40, W / 2, -70, 560);
    g.addColorStop(0, 'rgba(255,233,163,0.15)');
    g.addColorStop(1, 'rgba(255,233,163,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    g = ctx.createRadialGradient(W / 2, H * 0.46, W * 0.42, W / 2, H * 0.5, W * 0.98);
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(1, 'rgba(0,0,0,0.36)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
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
        ctx.fillStyle = '#2c1c0e';
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
    ctx.strokeStyle = `rgba(243,229,194,${ready ? 0.4 : 0.16})`;
    ctx.setLineDash([4, 6]);
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, Config.DROP_Y - t.r - 4);
    ctx.stroke();
    ctx.setLineDash([]);
    if (cdLeft > 0) {
      ctx.strokeStyle = 'rgba(243,229,194,0.65)';
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
      ctx.strokeStyle = 'rgba(74,16,24,0.8)';
      ctx.lineWidth = 3;
      ctx.strokeText(f.text, f.x, f.y);
      ctx.fillText(f.text, f.x, f.y);
      ctx.restore();
    }
    floats = floats.filter(f => f.life > 0);
  }

  function burstConfetti(x, y, n) {
    const colors = ['#f4c95d', '#a92c3e', '#f3e5c2', '#2e6f8e', '#d9a441'];
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
    const pad = 46; // ruimte voor houten kastrand + stage-padding
    const availW = stage.clientWidth - pad, availH = stage.clientHeight - pad;
    const scale = Math.min(availW / W, availH / H);
    canvas.style.width = `${Math.floor(W * scale)}px`;
    canvas.style.height = `${Math.floor(H * scale)}px`;
  }

  function init() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    // render op devicePixelRatio voor scherpe munten op mobiel/retina
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildTextures();
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
