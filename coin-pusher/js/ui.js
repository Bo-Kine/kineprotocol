'use strict';

/* DOM-laag: HUD, muntkeuze, winkel-modal, toasts. */
const UI = (() => {
  const ICONS = {
    coin: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#d9a441"/><circle cx="12" cy="12" r="9.2" fill="none" stroke="#f4c95d" stroke-width="0.9"/><circle cx="12" cy="12" r="6.6" fill="none" stroke="#8a6420" stroke-width="1.8"/><path d="M12 5.2v2M12 16.8v2M5.2 12h2M16.8 12h2" stroke="#8a6420" stroke-width="1.4"/></svg>',
    bolt: '<svg viewBox="0 0 24 24"><path d="M13 2 4 14h6l-1 8 9-12h-6z" fill="currentColor"/></svg>',
    star: '<svg viewBox="0 0 24 24"><path d="m12 2 3 7 7 .6-5.3 4.6L18.5 21 12 17l-6.5 4 1.8-6.8L2 9.6 9 9z" fill="currentColor"/></svg>',
    shield: '<svg viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5z" fill="currentColor"/></svg>',
    clover: '<svg viewBox="0 0 24 24"><circle cx="8.2" cy="8.2" r="4.4" fill="currentColor"/><circle cx="15.8" cy="8.2" r="4.4" fill="currentColor"/><circle cx="8.2" cy="15.8" r="4.4" fill="currentColor"/><circle cx="15.8" cy="15.8" r="4.4" fill="currentColor"/></svg>',
    timer: '<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M12 13V8.5M9.5 2.5h5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    gem: '<svg viewBox="0 0 24 24"><path d="M6.5 3h11L22 9l-10 12L2 9z" fill="currentColor"/></svg>',
    lock: '<svg viewBox="0 0 24 24"><rect x="5" y="10.5" width="14" height="10" rx="2" fill="currentColor"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>',
    trophy: '<svg viewBox="0 0 24 24"><path d="M7 3h10v6a5 5 0 0 1-10 0zM7 4H3c0 4 1.8 6 4 6M17 4h4c0 4-1.8 6-4 6M10 14h4v3h-4zM7 19h10v2H7z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg>',
    soundOn: '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.6 5.8a9 9 0 0 1 0 12.4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
    soundOff: '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"/><path d="m16 9 5 6m0-6-5 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  };

  const nf = new Intl.NumberFormat('nl-NL');
  const $ = id => document.getElementById(id);
  const el = {};
  let shownBalance = 0;
  let activeTab = 'upgrades';
  let confirmingPrestige = false;

  function init() {
    ['balance', 'balance-chip', 'level-label', 'xp-label', 'xp-fill', 'prestige-mult',
     'btn-sound', 'btn-shop', 'btn-close', 'modal', 'modal-body', 'tier-select',
     'toasts', 'boost-badge', 'boost-time', 'hint'].forEach(id => { el[id] = $(id); });

    document.querySelectorAll('[data-icon]').forEach(s => { s.innerHTML = ICONS[s.dataset.icon]; });
    el['btn-close'].innerHTML = ICONS.close;
    shownBalance = State.get().balance;

    el['btn-shop'].addEventListener('click', () => openShop());
    el['btn-close'].addEventListener('click', closeShop);
    el.modal.addEventListener('click', e => { if (e.target === el.modal) closeShop(); });
    el['btn-sound'].addEventListener('click', () => {
      State.get().muted = !State.get().muted;
      updateSoundBtn();
      State.save();
    });
    document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
      activeTab = t.dataset.tab;
      document.querySelectorAll('.tab').forEach(x => x.classList.toggle('active', x === t));
      renderShop();
    }));

    updateSoundBtn();
    renderTierSelect();
    refresh();
  }

  function updateSoundBtn() {
    el['btn-sound'].innerHTML = State.get().muted ? ICONS.soundOff : ICONS.soundOn;
  }

  /* Saldo-teller loopt vloeiend naar de echte waarde toe. */
  function tick() {
    const target = State.get().balance;
    if (shownBalance !== target) {
      const diff = target - shownBalance;
      shownBalance = Math.abs(diff) < 1 ? target : shownBalance + diff * 0.18;
      el.balance.textContent = nf.format(Math.round(shownBalance));
    }
  }

  function refresh() {
    const d = State.get();
    el.balance.textContent = nf.format(Math.round(shownBalance));
    el['level-label'].textContent = `Niveau ${d.level}`;
    el['xp-label'].textContent = `${nf.format(d.xp)} / ${nf.format(Progress.xpNeeded(d.level))} XP`;
    el['xp-fill'].style.width = `${Math.min(100, (d.xp / Progress.xpNeeded(d.level)) * 100)}%`;
    el['prestige-mult'].textContent = `×${State.prestigeMult().toFixed(1)}`;
    renderTierSelect();
    if (!el.modal.classList.contains('hidden')) renderShop();
  }

  function flashBalance() {
    el['balance-chip'].classList.remove('flash-red');
    void el['balance-chip'].offsetWidth; // herstart animatie
    el['balance-chip'].classList.add('flash-red');
  }

  /* --- Muntkeuze --- */

  function coinSwatch(t) {
    return `<span class="coin-swatch" style="background:radial-gradient(circle at 35% 30%, ${t.c.light}, ${t.c.base} 55%, ${t.c.dark})"></span>`;
  }

  function renderTierSelect() {
    const d = State.get();
    el['tier-select'].innerHTML = Config.tiers.map((t, i) => {
      const unlocked = d.unlockedTiers[i];
      const sel = d.selectedTier === i ? ' selected' : '';
      const lock = unlocked ? '' : `<span class="tier-lock">${ICONS.lock}${nf.format(t.unlock)}</span>`;
      return `<button class="tier-btn${sel}${unlocked ? '' : ' locked'}" data-tier="${i}">
        ${coinSwatch(t)}<span class="tier-name">${t.name}</span>
        <span class="tier-value">${nf.format(t.value)}</span>${lock}</button>`;
    }).join('');
    el['tier-select'].querySelectorAll('.tier-btn').forEach(btn => {
      btn.addEventListener('click', () => Game.onTierClick(+btn.dataset.tier));
    });
  }

  /* --- Winkel-modal --- */

  function openShop() {
    confirmingPrestige = false;
    el.modal.classList.remove('hidden');
    renderShop();
  }
  function closeShop() { el.modal.classList.add('hidden'); }

  function pips(lv, max) {
    let s = '<span class="pips">';
    for (let i = 0; i < max; i++) s += `<i class="${i < lv ? 'on' : ''}"></i>`;
    return s + '</span>';
  }

  function renderShop() {
    const d = State.get();
    let html = '';

    if (activeTab === 'upgrades') {
      html = Upgrades.DEFS.map(u => {
        const lv = Upgrades.level(u.id), max = Upgrades.isMax(u.id);
        const c = Upgrades.cost(u.id);
        const btn = max
          ? '<button class="btn btn-max" disabled>MAX</button>'
          : `<button class="btn btn-gold buy-upg" data-id="${u.id}" ${State.canAfford(c) ? '' : 'disabled'}>
               <span class="mini-coin">${ICONS.coin}</span>${nf.format(c)}</button>`;
        return `<div class="row">
          <span class="row-icon">${ICONS[u.icon]}</span>
          <div class="row-main"><b>${u.name}</b><small>${u.desc}</small>${pips(lv, u.max)}</div>
          ${btn}</div>`;
      }).join('');
      html += '<h3 class="shop-sub">Munten ontgrendelen</h3>';
      html += Config.tiers.slice(1).map((t, idx) => {
        const i = idx + 1;
        const owned = d.unlockedTiers[i];
        const btn = owned
          ? '<button class="btn btn-max" disabled>✓</button>'
          : `<button class="btn btn-gold buy-tier" data-tier="${i}" ${State.canAfford(t.unlock) ? '' : 'disabled'}>
               <span class="mini-coin">${ICONS.coin}</span>${nf.format(t.unlock)}</button>`;
        return `<div class="row">${coinSwatch(t)}
          <div class="row-main"><b>${t.name}en munt</b><small>Waarde ${nf.format(t.value)} per munt</small></div>
          ${btn}</div>`;
      }).join('');
    } else if (activeTab === 'achievements') {
      const got = Object.keys(d.achievements).length;
      html = `<p class="shop-intro">${got} van ${Progress.ACH.length} behaald</p>`;
      html += Progress.ACH.map(a => {
        const done = !!d.achievements[a.id];
        return `<div class="row ach${done ? ' done' : ''}">
          <span class="row-icon">${ICONS.trophy}</span>
          <div class="row-main"><b>${a.name}</b><small>${a.desc}</small></div>
          <span class="ach-reward"><span class="mini-coin">${ICONS.coin}</span>+${a.reward}</span></div>`;
      }).join('');
    } else {
      const can = Progress.canPrestige();
      const gain = Progress.pointsGain();
      html = `
        <div class="prestige-panel">
          <span class="prestige-gem">${ICONS.gem}</span>
          <p>Reset je saldo, upgrades en niveau in ruil voor <b>prestigepunten</b>.
             Elk punt geeft permanent <b>+10%</b> op alle uitbetalingen.</p>
          <div class="prestige-stats">
            <div><small>Punten</small><b>${d.prestige.points}</b></div>
            <div><small>Multiplier</small><b>×${State.prestigeMult().toFixed(1)}</b></div>
            <div><small>Bij reset</small><b>+${gain}</b></div>
          </div>
          <p class="shop-intro">Vereist ${nf.format(Config.prestige.threshold)} verdiend deze run
             (nu: ${nf.format(d.stats.earnedRun)})</p>
          <button class="btn ${confirmingPrestige ? 'btn-danger' : 'btn-gold'}" id="btn-prestige" ${can ? '' : 'disabled'}>
            ${confirmingPrestige ? 'Zeker weten? Klik nogmaals' : `Prestigeer (+${gain} punten)`}</button>
          <button class="btn btn-ghost" id="btn-wipe">Volledige reset (wist alles)</button>
        </div>`;
    }

    el['modal-body'].innerHTML = html;

    el['modal-body'].querySelectorAll('.buy-upg').forEach(b =>
      b.addEventListener('click', () => Game.onBuyUpgrade(b.dataset.id)));
    el['modal-body'].querySelectorAll('.buy-tier').forEach(b =>
      b.addEventListener('click', () => Game.onUnlockTier(+b.dataset.tier)));
    const bp = $('btn-prestige');
    if (bp) bp.addEventListener('click', () => {
      if (!confirmingPrestige) { confirmingPrestige = true; renderShop(); return; }
      confirmingPrestige = false;
      Game.onPrestige();
    });
    const bw = $('btn-wipe');
    if (bw) bw.addEventListener('click', () => {
      if (!bw.dataset.arm) { bw.dataset.arm = '1'; bw.textContent = 'Zeker weten? Klik nogmaals'; return; }
      Game.onWipe();
    });
  }

  /* --- Toasts & badges --- */

  function toast(msg, type = 'info') {
    const t = document.createElement('div');
    t.className = `toast toast-${type}`;
    t.innerHTML = msg;
    el.toasts.appendChild(t);
    setTimeout(() => t.classList.add('out'), 3200);
    setTimeout(() => t.remove(), 3700);
  }

  function setBoost(msLeft) {
    const on = msLeft > 0;
    el['boost-badge'].classList.toggle('hidden', !on);
    if (on) el['boost-time'].textContent = Math.ceil(msLeft / 1000);
  }

  function setHint(msg) { el.hint.textContent = msg; }

  return { init, tick, refresh, flashBalance, toast, setBoost, setHint, closeShop, ICONS };
})();
