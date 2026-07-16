'use strict';

/* Game state + persistentie (localStorage). */
const State = (() => {
  let data = null;

  function defaults() {
    return {
      balance: Config.startBalance,
      selectedTier: 0,
      unlockedTiers: [true, false, false, false],
      upgrades: { speed: 0, multiplier: 0, guards: 0, luck: 0, cooldown: 0 },
      xp: 0,
      level: 1,
      stats: {
        dropped: 0, collected: 0, lost: 0,
        earned: 0, earnedRun: 0, spent: 0,
        powerups: 0, upgradesBought: 0,
      },
      achievements: {},
      prestige: { count: 0, points: 0 },
      muted: false,
      table: null, // opgeslagen muntposities [{x,y,t}]
    };
  }

  function load() {
    try {
      const raw = localStorage.getItem(Config.saveKey);
      data = raw ? Object.assign(defaults(), JSON.parse(raw)) : defaults();
      const d = defaults();
      for (const k of ['upgrades', 'stats', 'prestige']) {
        data[k] = Object.assign(d[k], data[k]);
      }
    } catch (e) {
      data = defaults();
    }
    return data;
  }

  function save(table) {
    if (table) data.table = table;
    try { localStorage.setItem(Config.saveKey, JSON.stringify(data)); } catch (e) { /* opslag vol/uit */ }
  }

  function wipe() {
    try { localStorage.removeItem(Config.saveKey); } catch (e) {}
  }

  return {
    get: () => data,
    load, save, wipe, defaults,
    canAfford: n => data.balance >= n,
    spend(n) {
      if (data.balance < n) return false;
      data.balance -= n;
      data.stats.spent += n;
      return true;
    },
    earn(n) {
      data.balance += n;
      data.stats.earned += n;
      data.stats.earnedRun += n;
    },
    prestigeMult: () => 1 + data.prestige.points * Config.prestige.multPerPoint,
  };
})();
