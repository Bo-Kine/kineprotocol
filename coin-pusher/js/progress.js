'use strict';

/* Progressie: XP/levels, achievements en prestige. */
const Progress = (() => {
  const ACH = [
    { id: 'drop1',      name: 'Eerste worp',     desc: 'Laat je eerste munt vallen',        reward: 10,  test: d => d.stats.dropped >= 1 },
    { id: 'drop100',    name: 'Muntenkanon',     desc: 'Laat 100 munten vallen',            reward: 50,  test: d => d.stats.dropped >= 100 },
    { id: 'collect50',  name: 'Verzamelaar',     desc: 'Vang 50 munten op',                 reward: 25,  test: d => d.stats.collected >= 50 },
    { id: 'collect500', name: 'Muntenmagnaat',   desc: 'Vang 500 munten op',                reward: 150, test: d => d.stats.collected >= 500 },
    { id: 'earn1000',   name: 'Duizendpoot',     desc: 'Verdien in totaal 1.000 munten',    reward: 100, test: d => d.stats.earned >= 1000 },
    { id: 'gold',       name: 'Goudkoorts',      desc: 'Ontgrendel gouden munten',          reward: 100, test: d => d.unlockedTiers[2] },
    { id: 'plat',       name: 'Platina-lid',     desc: 'Ontgrendel platina munten',         reward: 250, test: d => d.unlockedTiers[3] },
    { id: 'upg5',       name: 'Handige Harry',   desc: 'Koop 5 upgrades',                   reward: 75,  test: d => d.stats.upgradesBought >= 5 },
    { id: 'power5',     name: 'Krachtpatser',    desc: 'Verzamel 5 power-ups',              reward: 75,  test: d => d.stats.powerups >= 5 },
    { id: 'lvl5',       name: 'Niveau 5',        desc: 'Bereik niveau 5',                   reward: 100, test: d => d.level >= 5 },
    { id: 'lvl10',      name: 'Niveau 10',       desc: 'Bereik niveau 10',                  reward: 250, test: d => d.level >= 10 },
    { id: 'prestige1',  name: 'Herboren',        desc: 'Prestigeer één keer',               reward: 500, test: d => d.prestige.count >= 1 },
  ];

  const xpNeeded = level => Math.round(Config.xp.base * Math.pow(level, Config.xp.exp));

  /* Geeft het aantal behaalde level-ups terug. */
  function addXp(n) {
    const d = State.get();
    d.xp += n;
    let ups = 0;
    while (d.xp >= xpNeeded(d.level)) {
      d.xp -= xpNeeded(d.level);
      d.level++;
      ups++;
    }
    return ups;
  }

  /* Geeft nieuw behaalde achievements terug (beloning wordt door de game uitgekeerd). */
  function check() {
    const d = State.get();
    const fresh = [];
    for (const a of ACH) {
      if (!d.achievements[a.id] && a.test(d)) {
        d.achievements[a.id] = true;
        fresh.push(a);
      }
    }
    return fresh;
  }

  const canPrestige = () => State.get().stats.earnedRun >= Config.prestige.threshold;
  const pointsGain = () => Math.floor(Math.sqrt(State.get().stats.earnedRun / Config.prestige.divisor));

  /* Muteert alleen state; tafel-reset en UI doet game.js. */
  function doPrestige() {
    const d = State.get();
    d.prestige.count++;
    d.prestige.points += pointsGain();
    d.balance = Config.startBalance;
    d.selectedTier = 0;
    d.unlockedTiers = [true, false, false, false];
    d.upgrades = { speed: 0, multiplier: 0, guards: 0, luck: 0, cooldown: 0 };
    d.xp = 0;
    d.level = 1;
    d.stats.earnedRun = 0;
    d.table = null;
  }

  return { ACH, xpNeeded, addXp, check, canPrestige, pointsGain, doPrestige };
})();
