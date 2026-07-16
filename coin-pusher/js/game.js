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
    fallAnims.push({ x: c.x, y: SEDGE + 8, vy: 2, tier: c.tier, alpha: 1, spin: Math.random() * Math.PI });
    floats.push({ x: c.x, y: SEDGE - 16, vy: -0.8, life: 1, text: `+${val}`, color: '#ffd75e', size: zoneMultAt(c.x) > 1 ? 20 : 15 });
    Sound.collect();
    for (let i = 0; i < ups; i++) onLevelUp();
    afterEvent();
  }

  function handleLost(c) {
    if (c.kind === 'powerup') return;
    State.get().stats.lost++;
    const pp = proj(c.x < W / 2 ? WALL + 6 : W - WALL - 6, c.y);
    fallAnims.push({ x: pp.x, y: pp.y, tier: c.tier, alpha: 0.8, lost: true, dir: c.x < W / 2 ? -1 : 1 });
    Sound.lost();
  }

  function onLevelUp() {
    const d = State.get();
    const reward = Config.xp.rewardPerLevel * d.level;
    State.earn(reward);
    UI.toast(`🎉 <b>Niveau ${d.level}!</b> Beloning: +${reward} munten`, 'gold');
    Sound.levelup();
    burstConfetti(W / 2, SEDGE + 40, 40);
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
      burstConfetti(x, SEDGE + 40, 60);
      floats.push({ x, y: SEDGE - 16, vy: -0.9, life: 1, text: `+${amount}`, color: '#ffe9a3', size: 24 });
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
    // klikpositie op het scherm → wereldcoördinaat op de droplijn
    const toWorld = e => unprojX(canvasPos(e).x, Config.DROP_Y);
    canvas.addEventListener('pointerdown', e => { pointerIn = true; ghostX = toWorld(e); tryDrop(ghostX); });
    canvas.addEventListener('pointermove', e => { pointerIn = true; ghostX = toWorld(e); });
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
    if (Upgrades.buy(id)) {
      if (id === 'guards') rebuildLayers(); // zijgaten zitten in de statische laag
      Sound.buy();
      afterEvent();
    } else {
      Sound.denied();
    }
  }

  function onUnlockTier(i) { onTierClick(i); }

  function onPrestige() {
    if (!Progress.canPrestige()) return;
    const gain = Progress.pointsGain();
    Progress.doPrestige();
    Physics.clearCoins();
    Upgrades.applyAll();
    rebuildLayers(); // zijgaten terug naar beginstand
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
  let feltNoise = null;

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
    feltNoise = n;
    coinSprites = Config.tiers.map(makeCoinSprite);
    // gradients op eenheidsschaal, één keer aangemaakt (perf: 150+ munten/frame)
    specGrad = ctx.createRadialGradient(-0.42, -0.48, 0.08, 0, 0, 1);
    specGrad.addColorStop(0, 'rgba(255,244,214,0.36)');
    specGrad.addColorStop(0.45, 'rgba(255,244,214,0.05)');
    specGrad.addColorStop(0.8, 'rgba(0,0,0,0)');
    specGrad.addColorStop(1, 'rgba(0,0,0,0.2)');
    edgeGrads = Config.tiers.map(t => {
      const g = ctx.createLinearGradient(-1, 0, 1, 0);
      g.addColorStop(0, t.c.dark);
      g.addColorStop(0.5, t.c.base);
      g.addColorStop(1, t.c.dark);
      return g;
    });
  }
  let specGrad = null, edgeGrads = null;

  /* ---------- Perspectiefprojectie (camera schuin van voren) ---------- */
  const CAM = { F: 1500, KS: 0.82 };   // brandpuntsafstand + verticale compressie
  const SEDGE = 540;                   // schermpositie van de voorrand
  const FACE_BOT = 596;                // onderkant van het voorpaneel
  const PUSH_H = 30;                   // visuele hoogte van het duwplateau (wereld-px)

  function proj(px, py) {
    const z = EDGE - py;
    const s = CAM.F / (CAM.F + z);
    return { x: W / 2 + (px - W / 2) * s, y: SEDGE - z * CAM.KS * s, s };
  }
  function unprojX(sx, py) {
    const s = CAM.F / (CAM.F + (EDGE - py));
    return W / 2 + (sx - W / 2) / s;
  }
  const YBACK = proj(0, 0).y;

  function quad(a, b, c, d) {
    ctx.beginPath();
    ctx.moveTo(a[0], a[1]);
    ctx.lineTo(b[0], b[1]);
    ctx.lineTo(c[0], c[1]);
    ctx.lineTo(d[0], d[1]);
    ctx.closePath();
  }

  /* Statische lagen (kast, vilt, bak, belichting) worden één keer offscreen
     gerenderd en per frame geblit; alleen pusher, munten en accenten zijn live. */
  let bgLayer = null, fxLayer = null, dpr = 1;

  function renderToLayer(layer, fn) {
    const main = ctx;
    ctx = layer.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    fn();
    ctx = main;
  }

  function rebuildLayers() {
    if (!bgLayer) {
      bgLayer = document.createElement('canvas');
      fxLayer = document.createElement('canvas');
      bgLayer.width = fxLayer.width = W * dpr;
      bgLayer.height = fxLayer.height = H * dpr;
    }
    renderToLayer(bgLayer, () => { drawCabinet(); drawFelt(); drawFrontAndTray(); });
    renderToLayer(fxLayer, drawLighting);
  }

  function draw(now) {
    ctx.drawImage(bgLayer, 0, 0, W, H);
    drawBulbs(now);
    drawZoneDynamic(now);
    drawPusher();
    drawCoins(now);
    drawFallAnims();
    drawGhost(now);
    ctx.drawImage(fxLayer, 0, 0, W, H);
    drawFloats();
    drawConfetti();
  }

  /* Kastinterieur: achterbord met lampjes + convergerende zijwanden */
  function drawCabinet() {
    let g = ctx.createLinearGradient(0, 0, 0, SEDGE);
    g.addColorStop(0, '#191009');
    g.addColorStop(1, '#0a0603');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, SEDGE);
    const bl = proj(0, 0), br = proj(W, 0);
    // zijwanden (kijkrichting de kast in)
    for (const side of [[0, bl.x], [W, br.x]]) {
      g = ctx.createLinearGradient(side[0], 0, side[1], 0);
      g.addColorStop(side[0] === 0 ? 0 : 1, '#31200e');
      g.addColorStop(side[0] === 0 ? 1 : 0, '#150c04');
      ctx.fillStyle = g;
      quad([side[0], SEDGE], [side[1], YBACK], [side[1], 0], [side[0], 0]);
      ctx.fill();
    }
    // interieurranden in messing
    ctx.strokeStyle = 'rgba(217,164,65,0.22)';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(0, SEDGE); ctx.lineTo(bl.x, YBACK);
    ctx.moveTo(W, SEDGE); ctx.lineTo(br.x, YBACK);
    ctx.stroke();
    // achterbord
    g = ctx.createLinearGradient(0, 0, 0, YBACK);
    g.addColorStop(0, '#a92c3e');
    g.addColorStop(0.6, '#8e1f2f');
    g.addColorStop(1, '#5c1420');
    ctx.fillStyle = g;
    ctx.fillRect(bl.x, 4, br.x - bl.x, YBACK - 4);
    ctx.strokeStyle = '#8a6420';
    ctx.lineWidth = 3;
    ctx.strokeRect(bl.x + 4, 8, br.x - bl.x - 8, YBACK - 14);
    ctx.strokeStyle = 'rgba(244,201,93,0.65)';
    ctx.lineWidth = 1.2;
    ctx.strokeRect(bl.x + 8, 12, br.x - bl.x - 16, YBACK - 22);
    // opschrift
    ctx.textAlign = 'center';
    ctx.fillStyle = PAINT + '0.95)';
    ctx.font = `34px ${FONT_DISPLAY}`;
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.65)';
    ctx.shadowOffsetY = 2;
    ctx.fillText('LUNAPARK', W / 2, 92);
    ctx.restore();
    ctx.fillStyle = 'rgba(244,201,93,0.9)';
    ctx.font = `13px ${FONT_DISPLAY}`;
    ctx.fillText('★  ELKE WORP PRIJS  ★', W / 2, 122);
  }

  /* Twinkelende gloeilampjes op het achterbord (per frame, goedkoop) */
  function drawBulbs(now) {
    const bl = proj(0, 0), br = proj(W, 0);
    for (let i = 0; i < 15; i++) {
      const x = bl.x + 22 + (i / 14) * (br.x - bl.x - 44);
      const on = 0.55 + 0.45 * Math.sin(now / 260 + i * 1.7);
      ctx.fillStyle = `rgba(255,220,120,${0.22 * on})`;
      ctx.beginPath();
      ctx.arc(x, YBACK - 26, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = `rgba(255,236,170,${0.35 + 0.6 * on})`;
      ctx.beginPath();
      ctx.arc(x, YBACK - 26, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  /* Vilt-trapezium, houten rails, zijgaten en geschilderde markeringen */
  function drawFelt() {
    const fl = proj(WALL, EDGE), fr = proj(W - WALL, EDGE);
    const rl = proj(WALL, 0), rr = proj(W - WALL, 0);
    let g = ctx.createLinearGradient(0, YBACK, 0, SEDGE);
    g.addColorStop(0, '#16382a');
    g.addColorStop(0.5, '#1c4534');
    g.addColorStop(1, '#245741');
    ctx.fillStyle = g;
    quad([rl.x, rl.y], [rr.x, rr.y], [fr.x, fr.y], [fl.x, fl.y]);
    ctx.fill();
    if (feltNoise) {
      ctx.save();
      quad([rl.x, rl.y], [rr.x, rr.y], [fr.x, fr.y], [fl.x, fl.y]);
      ctx.clip();
      ctx.fillStyle = ctx.createPattern(feltNoise, 'repeat');
      ctx.fillRect(0, YBACK, W, SEDGE - YBACK);
      ctx.restore();
    }
    // geschilderde sierlijnen langs de rails
    ctx.strokeStyle = PAINT + '0.13)';
    ctx.lineWidth = 1.6;
    for (const x of [WALL + 10, W - WALL - 10]) {
      const a = proj(x, 140), b = proj(x, EDGE - 8);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
    // geschilderde sterren
    ctx.fillStyle = PAINT + '0.10)';
    for (const [px, py] of [[WALL + 36, EDGE - 36], [W - WALL - 36, EDGE - 36]]) {
      const p = proj(px, py);
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.scale(1, CAM.KS);
      starPath(ctx, 0, 0, 5, 11 * p.s, 4.6 * p.s);
      ctx.fill();
      ctx.restore();
    }
    // houten rails
    for (const side of [[0, WALL], [W, W - WALL]]) {
      const ob = proj(side[0], 0), of = proj(side[0], EDGE);
      const ib = proj(side[1], 0), iff = proj(side[1], EDGE);
      g = ctx.createLinearGradient(of.x, 0, iff.x, 0);
      g.addColorStop(0, '#4d3118');
      g.addColorStop(1, '#241505');
      ctx.fillStyle = g;
      quad([ob.x, ob.y], [ib.x, ib.y], [iff.x, iff.y], [of.x, of.y]);
      ctx.fill();
      // messing binnenrand
      ctx.strokeStyle = '#8a6420';
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(ib.x, ib.y);
      ctx.lineTo(iff.x, iff.y);
      ctx.stroke();
      ctx.strokeStyle = 'rgba(244,201,93,0.55)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    // zijgaten in de rails
    const open = Physics.gutterOpening(Upgrades.level('guards'));
    const gy = Config.gutter.centerY;
    for (const side of [[0, WALL], [W, W - WALL]]) {
      const i1 = proj(side[1], gy - open / 2), i2 = proj(side[1], gy + open / 2);
      const o1 = proj(side[0], gy - open / 2), o2 = proj(side[0], gy + open / 2);
      ctx.fillStyle = '#050302';
      quad([i1.x, i1.y], [i2.x, i2.y], [o2.x, o2.y], [o1.x, o1.y]);
      ctx.fill();
      ctx.strokeStyle = '#d9a441';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(i1.x, i1.y); ctx.lineTo(o1.x, o1.y);
      ctx.moveTo(i2.x, i2.y); ctx.lineTo(o2.x, o2.y);
      ctx.stroke();
    }
  }

  /* Bonuszone: pulserende baan op het vilt + messing plaat op het voorpaneel */
  function drawZoneDynamic(now) {
    const m = Upgrades.zoneMult();
    if (m <= 1) return;
    const z = zoneBounds();
    const pulse = 0.12 + 0.05 * Math.sin(now / 380);
    const a = proj(z.x0, EDGE - 58), b = proj(z.x1, EDGE - 58);
    const c = proj(z.x1, EDGE), d = proj(z.x0, EDGE);
    ctx.fillStyle = `rgba(244,201,93,${pulse * 0.6})`;
    quad([a.x, a.y], [b.x, b.y], [c.x, c.y], [d.x, d.y]);
    ctx.fill();
    ctx.strokeStyle = PAINT + '0.35)';
    ctx.setLineDash([7, 6]);
    ctx.lineWidth = 1.6;
    ctx.stroke();
    ctx.setLineDash([]);
    // plaat op het voorpaneel, altijd zichtbaar
    const p2 = 0.3 + 0.14 * Math.sin(now / 380);
    const g = ctx.createLinearGradient(0, SEDGE + 12, 0, FACE_BOT - 6);
    g.addColorStop(0, `rgba(244,201,93,${p2 + 0.15})`);
    g.addColorStop(1, `rgba(138,100,32,${p2 + 0.15})`);
    ctx.fillStyle = g;
    ctx.fillRect(z.x0, SEDGE + 12, z.x1 - z.x0, FACE_BOT - SEDGE - 20);
    ctx.strokeStyle = 'rgba(244,201,93,0.85)';
    ctx.lineWidth = 1.6;
    ctx.strokeRect(z.x0, SEDGE + 12, z.x1 - z.x0, FACE_BOT - SEDGE - 20);
    ctx.fillStyle = '#f3e5c2';
    ctx.font = `19px ${FONT_DISPLAY}`;
    ctx.textAlign = 'center';
    ctx.fillText(`${m}x BONUS`, W / 2, FACE_BOT - 16);
    ctx.fillStyle = 'rgba(142,31,47,0.9)';
    starPath(ctx, z.x0 + 15, SEDGE + 32, 5, 6.5, 2.8);
    ctx.fill();
    starPath(ctx, z.x1 - 15, SEDGE + 32, 5, 6.5, 2.8);
    ctx.fill();
  }

  /* Duwplateau als 3D-blok: rood bovenvlak + voorvlak met messing lip */
  function drawPusher() {
    const p = Physics.pusherRect();
    const front = p.y + p.h / 2;
    const fl = proj(WALL, front), fr = proj(W - WALL, front);
    const bl = proj(WALL, 0), br = proj(W - WALL, 0);
    const liftF = PUSH_H * CAM.KS * fl.s, liftB = PUSH_H * CAM.KS * bl.s;
    // schaduw op het vilt vóór het plateau
    const sh = ctx.createLinearGradient(0, fl.y, 0, fl.y + 15);
    sh.addColorStop(0, 'rgba(0,0,0,0.5)');
    sh.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = sh;
    quad([fl.x, fl.y], [fr.x, fr.y], [fr.x + 2, fr.y + 15], [fl.x - 2, fl.y + 15]);
    ctx.fill();
    // bovenvlak
    let g = ctx.createLinearGradient(0, bl.y - liftB, 0, fl.y - liftF);
    g.addColorStop(0, '#6b1722');
    g.addColorStop(0.6, '#8e1f2f');
    g.addColorStop(1, '#a92c3e');
    ctx.fillStyle = g;
    quad([bl.x, bl.y - liftB], [br.x, br.y - liftB], [fr.x, fr.y - liftF], [fl.x, fl.y - liftF]);
    ctx.fill();
    // pinstripe-bies op het bovenvlak
    const inset = (t, a, b) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
    const c1 = [bl.x, bl.y - liftB], c2 = [br.x, br.y - liftB];
    const c3 = [fr.x, fr.y - liftF], c4 = [fl.x, fl.y - liftF];
    ctx.strokeStyle = PAINT + '0.45)';
    ctx.lineWidth = 1.5;
    quad(inset(0.08, c1, c3), inset(0.08, c2, c4), inset(0.12, c3, c1), inset(0.12, c4, c2));
    ctx.stroke();
    // sterren op het bovenvlak
    ctx.fillStyle = PAINT + '0.5)';
    const midY = (bl.y - liftB + fl.y - liftF) / 2;
    for (const dx of [-60, 0, 60]) {
      ctx.save();
      ctx.translate(W / 2 + dx * ((bl.s + fl.s) / 2), midY);
      ctx.scale(1, CAM.KS);
      starPath(ctx, 0, 0, 5, 7, 3);
      ctx.fill();
      ctx.restore();
    }
    // voorvlak
    g = ctx.createLinearGradient(0, fl.y - liftF, 0, fl.y);
    g.addColorStop(0, '#a92c3e');
    g.addColorStop(0.25, '#8e1f2f');
    g.addColorStop(1, '#4a0f18');
    ctx.fillStyle = g;
    quad([fl.x, fl.y - liftF], [fr.x, fr.y - liftF], [fr.x, fr.y], [fl.x, fl.y]);
    ctx.fill();
    // messing lip op de bovenrand van het voorvlak
    g = ctx.createLinearGradient(0, fl.y - liftF, 0, fl.y - liftF + 5);
    g.addColorStop(0, '#f4c95d');
    g.addColorStop(1, '#8a6420');
    ctx.fillStyle = g;
    quad([fl.x, fl.y - liftF], [fr.x, fr.y - liftF], [fr.x, fr.y - liftF + 5], [fl.x, fl.y - liftF + 5]);
    ctx.fill();
    // klinknagels op het voorvlak
    ctx.fillStyle = 'rgba(244,201,93,0.75)';
    for (let i = 0; i <= 8; i++) {
      const x = fl.x + (i / 8) * (fr.x - fl.x);
      ctx.beginPath();
      ctx.arc(x, fl.y - liftF * 0.45, 1.8, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  /* Voorrand, voorpaneel en de opvangbak */
  function drawFrontAndTray() {
    // valschaduw op het vilt net boven de rand
    let g = ctx.createLinearGradient(0, SEDGE - 22, 0, SEDGE);
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(1, 'rgba(0,0,0,0.4)');
    ctx.fillStyle = g;
    ctx.fillRect(WALL, SEDGE - 22, W - 2 * WALL, 22);
    // messing lip over de volle breedte
    g = ctx.createLinearGradient(0, SEDGE - 3, 0, SEDGE + 6);
    g.addColorStop(0, '#f4c95d');
    g.addColorStop(0.5, '#d9a441');
    g.addColorStop(1, '#8a6420');
    ctx.fillStyle = g;
    ctx.fillRect(0, SEDGE - 3, W, 9);
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.fillRect(0, SEDGE - 3, W, 1.5);
    // voorpaneel
    g = ctx.createLinearGradient(0, SEDGE + 6, 0, FACE_BOT);
    g.addColorStop(0, '#3a2410');
    g.addColorStop(1, '#241505');
    ctx.fillStyle = g;
    ctx.fillRect(0, SEDGE + 6, W, FACE_BOT - SEDGE - 6);
    // opvangbak
    g = ctx.createLinearGradient(0, FACE_BOT, 0, H);
    g.addColorStop(0, '#0a0704');
    g.addColorStop(0.4, '#171008');
    g.addColorStop(1, '#241a0c');
    ctx.fillStyle = g;
    ctx.fillRect(0, FACE_BOT, W, H - FACE_BOT);
    ctx.strokeStyle = 'rgba(243,229,194,0.03)';
    ctx.lineWidth = 1;
    for (let y = FACE_BOT + 12; y < H - 10; y += 9) {
      ctx.beginPath();
      ctx.moveTo(10, y);
      ctx.lineTo(W - 10, y);
      ctx.stroke();
    }
    ctx.fillStyle = PAINT + '0.26)';
    ctx.font = `15px ${FONT_DISPLAY}`;
    ctx.textAlign = 'center';
    ctx.fillText('— OPVANGBAK —', W / 2, H - 18);
    ctx.fillStyle = '#8a6420';
    ctx.fillRect(8, H - 6, W - 16, 3);
  }

  /* Muntweergave in schermruimte: rand (dikte) + gezicht + vaste glans.
     Werkt op eenheidsschaal zodat de gecachte gradients hergebruikt worden. */
  function drawCoinFace(sx, sy, rs, tier, angle, squash, th, alpha) {
    const spr = coinSprites[tier];
    const t = Config.tiers[tier];
    const thu = th / rs;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(sx, sy);
    ctx.scale(rs, rs);
    // zijkant van de munt
    if (th > 0.5) {
      ctx.fillStyle = edgeGrads[tier];
      ctx.beginPath();
      ctx.ellipse(0, thu, 1, squash, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(-1, 0, 2, thu);
    }
    // gezicht (draait mee met de physics-hoek)
    ctx.save();
    ctx.scale(1, squash);
    ctx.rotate(angle);
    const dd = 2 * (t.r + 2) / t.r;
    ctx.drawImage(spr, -dd / 2, -dd / 2, dd, dd);
    ctx.rotate(-angle);
    // vaste lichtinval, in dezelfde ellipsvorm als het gezicht
    ctx.fillStyle = specGrad;
    ctx.beginPath();
    ctx.arc(0, 0, 0.98, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.restore();
  }

  /* lift 0..1: val vanaf de muntinworp bovenin */
  function drawCoin3D(px, py, r, tier, angle, lift) {
    const p = proj(px, py);
    const rs = r * p.s;
    const th = Math.max(2.2, 4.6 * p.s);
    const liftPx = lift * 52 * p.s;
    // slagschaduw op het vilt
    ctx.fillStyle = `rgba(0,0,0,${Math.max(0.08, 0.3 - lift * 0.18)})`;
    ctx.beginPath();
    ctx.ellipse(p.x + 1.5, p.y + 2, rs * (1 - lift * 0.3), rs * CAM.KS * 0.9 * (1 - lift * 0.3), 0, 0, Math.PI * 2);
    ctx.fill();
    drawCoinFace(p.x, p.y - liftPx, rs, tier, angle, CAM.KS, th, 1);
  }

  /* Power-up als geëmailleerde kermisbadge, in perspectief */
  function drawPowerup3D(b, now) {
    const p = proj(b.position.x, b.position.y);
    const r = b.circleRadius * p.s;
    const sub = b.plugin.sub;
    const enamel = { boost: '#c23b22', rain: '#2e6f8e', jackpot: '#8e1f2f' }[sub];
    const pulse = 8 + 4 * Math.sin(now / 190);
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.scale(1, CAM.KS);
    ctx.shadowColor = '#ffe9a3';
    ctx.shadowBlur = pulse;
    let g = ctx.createLinearGradient(-r, -r, r, r);
    g.addColorStop(0, '#f4c95d');
    g.addColorStop(0.6, '#d9a441');
    g.addColorStop(1, '#8a6420');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    g = ctx.createRadialGradient(-r * 0.3, -r * 0.35, r * 0.15, 0, 0, r - 3);
    g.addColorStop(0, 'rgba(255,255,255,0.35)');
    g.addColorStop(0.25, enamel);
    g.addColorStop(1, enamel);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(0, 0, r - 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f3e5c2';
    if (sub === 'boost') {
      ctx.font = `700 ${Math.round(r * 0.95)}px Georgia, serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('×2', 0, 1);
      ctx.textBaseline = 'alphabetic';
    } else if (sub === 'rain') {
      for (const [dx, dy] of [[-5.5, 2], [0, -4.5], [5.5, 2]]) {
        ctx.beginPath();
        ctx.arc(dx, dy, 3.1, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      starPath(ctx, 0, 0, 5, r * 0.62, r * 0.27);
      ctx.fill();
    }
    ctx.restore();
  }

  const DROP_ANIM_MS = 380;

  function drawCoins(now) {
    // van achter naar voren tekenen zodat munten elkaar correct overlappen
    const list = [...Physics.getCoins()].sort((a, b) => a.position.y - b.position.y);
    for (const b of list) {
      if (b.plugin.kind === 'powerup') {
        drawPowerup3D(b, now);
      } else {
        const age = now - (b.plugin.born || 0);
        const lift = age < DROP_ANIM_MS ? Math.pow(1 - age / DROP_ANIM_MS, 2) : 0;
        drawCoin3D(b.position.x, b.position.y, b.circleRadius, b.plugin.tier, b.angle, lift);
      }
    }
  }

  /* Warme lichtval, vignet en een subtiele glasreflectie */
  function drawLighting() {
    let g = ctx.createRadialGradient(W / 2, -70, 40, W / 2, -70, 560);
    g.addColorStop(0, 'rgba(255,233,163,0.14)');
    g.addColorStop(1, 'rgba(255,233,163,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    g = ctx.createRadialGradient(W / 2, H * 0.46, W * 0.42, W / 2, H * 0.5, W * 0.98);
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(1, 'rgba(0,0,0,0.36)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    // glans van de glasplaat
    ctx.fillStyle = 'rgba(255,255,255,0.028)';
    quad([W * 0.12, 0], [W * 0.34, 0], [W * 0.06, H], [-W * 0.16, H]);
    ctx.fill();
    quad([W * 0.44, 0], [W * 0.52, 0], [W * 0.24, H], [W * 0.16, H]);
    ctx.fill();
  }

  function drawFallAnims() {
    for (const a of fallAnims) {
      const r = Config.tiers[a.tier].r;
      if (a.lost) {
        // munt glijdt zijwaarts weg door het zijgat
        a.x += a.dir * 1.4;
        a.alpha -= 0.05;
        ctx.save();
        ctx.globalAlpha = Math.max(0, a.alpha);
        ctx.fillStyle = '#1c1207';
        ctx.beginPath();
        ctx.ellipse(a.x, a.y, r * 0.75, r * 0.55, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      } else {
        // munt tuimelt de opvangbak in
        a.y += a.vy;
        a.vy += 0.34;
        a.spin += 0.22;
        if (a.y > H - 55) a.alpha -= 0.08;
        const sq = 0.1 + CAM.KS * Math.abs(Math.cos(a.spin));
        drawCoinFace(a.x, a.y, r, a.tier, a.spin * 0.6, sq, 3, Math.max(0, a.alpha));
      }
    }
    fallAnims = fallAnims.filter(a => a.alpha > 0 && a.y < H + 30 && a.x > -40 && a.x < W + 40);
  }

  function drawGhost(now) {
    if (!pointerIn) return;
    const d = State.get();
    const t = Config.tiers[d.selectedTier];
    const x = Math.min(W - WALL - t.r - 2, Math.max(WALL + t.r + 2, ghostX));
    const p = proj(x, Config.DROP_Y);
    const rs = t.r * p.s;
    const hover = 34;
    const cdLeft = Math.max(0, Upgrades.cooldownMs() - (now - lastDrop));
    const ready = cdLeft <= 0 && State.canAfford(t.value);
    // miklijn vanaf het achterbord
    ctx.strokeStyle = `rgba(243,229,194,${ready ? 0.4 : 0.16})`;
    ctx.setLineDash([4, 6]);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(p.x, 132);
    ctx.lineTo(p.x, p.y - hover - rs - 5);
    ctx.stroke();
    ctx.setLineDash([]);
    // schaduw op het vilt onder de zwevende munt
    ctx.fillStyle = `rgba(0,0,0,${ready ? 0.2 : 0.1})`;
    ctx.beginPath();
    ctx.ellipse(p.x, p.y, rs * 0.75, rs * CAM.KS * 0.65, 0, 0, Math.PI * 2);
    ctx.fill();
    // zwevende munt
    drawCoinFace(p.x, p.y - hover, rs, d.selectedTier, 0, CAM.KS, 3, ready ? 0.6 : 0.28);
    if (cdLeft > 0) {
      ctx.strokeStyle = 'rgba(243,229,194,0.65)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(p.x, p.y - hover, rs + 7, -Math.PI / 2, -Math.PI / 2 + (1 - cdLeft / Upgrades.cooldownMs()) * Math.PI * 2);
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
    dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildTextures();
    State.load();
    Physics.init();
    Upgrades.applyAll();
    rebuildLayers();

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
