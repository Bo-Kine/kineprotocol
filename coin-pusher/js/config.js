'use strict';

/* Alle spelconstanten op één plek. Afmetingen in logische canvas-pixels. */
const Config = {
  W: 480,
  H: 760,
  WALL: 18,            // dikte zijwanden
  EDGE_Y: 520,         // voorrand: hier vallen munten in de opvangbak
  DROP_Y: 215,         // landingshoogte: ín het slagbereik, zodat de pusher munten meedraagt
  STEP: 1000 / 60,     // vaste physics-tijdstap (ms)

  // Lange slag + korte tafel: munten bewegen door volumedruk van de stapel
  pusher: { w: 480 - 2 * 18, h: 130, backY: 60, frontY: 230, basePeriod: 4.2 },

  // Zijgaten waar munten verloren gaan; 'guards'-upgrade maakt ze kleiner
  gutter: { centerY: 410, baseOpen: 68, perGuard: 12, minOpen: 10 },

  // Multiplierzone in het midden van de voorrand
  zone: { widthFrac: 0.34 },

  tiers: [
    { id: 'bronze',   name: 'Brons',   value: 1,   r: 14, unlock: 0,
      c: { light: '#f0a75a', base: '#cd7f32', dark: '#8a4d15', text: '#4a2a06' } },
    { id: 'silver',   name: 'Zilver',  value: 5,   r: 16, unlock: 250,
      c: { light: '#f4f7fa', base: '#c0c8d0', dark: '#7e8a96', text: '#3f4954' } },
    { id: 'gold',     name: 'Goud',    value: 25,  r: 18, unlock: 2000,
      c: { light: '#ffe9a3', base: '#f2c433', dark: '#a97b0a', text: '#5e4303' } },
    { id: 'platinum', name: 'Platina', value: 100, r: 20, unlock: 12000,
      c: { light: '#eefcff', base: '#9fd8e8', dark: '#4f93a8', text: '#1f4a58' } },
  ],

  seed: { yStart: 150, yEnd: 516, step: 28.5, fill: 0.95, warmupMs: 15000 },

  dropCooldown: 420,   // ms, vóór de 'cooldown'-upgrade
  startBalance: 60,

  powerup: { minDelay: 45e3, maxDelay: 90e3, boostMs: 30e3, rainCoins: 8, jackpotBase: 50 },

  xp: { base: 60, exp: 1.35, rewardPerLevel: 15 },

  prestige: { threshold: 5000, divisor: 500, multPerPoint: 0.1 },

  saveKey: 'coin-pusher-save-v1',
};
