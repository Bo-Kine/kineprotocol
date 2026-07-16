'use strict';

/* Upgrade-definities, kosten en effecten. */
const Upgrades = (() => {
  const DEFS = [
    { id: 'speed',      icon: 'bolt',   name: 'Platformsnelheid', desc: '+15% duwsnelheid per niveau',            max: 8, base: 60,  growth: 1.7 },
    { id: 'multiplier', icon: 'star',   name: 'Multiplierzone',   desc: 'Middenzone betaalt ×(1 + niveau) uit',   max: 4, base: 150, growth: 2.4 },
    { id: 'guards',     icon: 'shield', name: 'Zijschermen',      desc: 'Kleinere zijgaten, minder verlies',      max: 5, base: 120, growth: 1.9 },
    { id: 'luck',       icon: 'clover', name: 'Geluksmagneet',    desc: 'Power-ups verschijnen 20% vaker/niveau', max: 5, base: 200, growth: 2.0 },
    { id: 'cooldown',   icon: 'timer',  name: 'Snellader',        desc: '12% minder wachttijd per niveau',        max: 5, base: 80,  growth: 1.8 },
  ];

  const byId = Object.fromEntries(DEFS.map(d => [d.id, d]));

  const level = id => State.get().upgrades[id] || 0;
  const isMax = id => level(id) >= byId[id].max;
  const cost = id => Math.round(byId[id].base * Math.pow(byId[id].growth, level(id)));

  function applySideEffects(id) {
    if (id === 'speed') Physics.setSpeedFactor(speedFactor());
    if (id === 'guards') Physics.rebuildSideWalls(level('guards'));
  }

  function buy(id) {
    if (isMax(id) || !State.spend(cost(id))) return false;
    State.get().upgrades[id]++;
    State.get().stats.upgradesBought++;
    applySideEffects(id);
    return true;
  }

  function unlockTier(i) {
    const d = State.get();
    if (d.unlockedTiers[i] || !State.spend(Config.tiers[i].unlock)) return false;
    d.unlockedTiers[i] = true;
    d.selectedTier = i;
    return true;
  }

  /* Effect-helpers */
  const speedFactor = () => 1 + level('speed') * 0.15;
  const zoneMult    = () => 1 + level('multiplier');
  const luckFactor  = () => 1 + level('luck') * 0.2;
  const cooldownMs  = () => Config.dropCooldown * Math.pow(0.88, level('cooldown'));

  function applyAll() {
    Physics.setSpeedFactor(speedFactor());
    Physics.rebuildSideWalls(level('guards'));
  }

  return { DEFS, level, isMax, cost, buy, unlockTier, speedFactor, zoneMult, luckFactor, cooldownMs, applyAll };
})();
