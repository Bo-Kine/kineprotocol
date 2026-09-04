// KineProtocol — App: navigatie, rendering, formulieren, zoeken, swipe, init

// ── VERSIECONTROLE ──
// Alles in try/catch: in privémodus of bij geblokkeerde opslag gooit localStorage,
// en zonder afvangst stopte de app hier voordat er iets gerenderd was.
(function(){
  try {
    const V = APP_VERSION;
    if(localStorage.getItem('kp_app_v') !== V) {
      localStorage.setItem('kp_app_v', V);
      // Stabiele URL zonder tijdstempel: de service worker serveert index.html
      // met ignoreSearch, dus een unieke querystring is niet nodig en zou de
      // cachetreffer alleen maar bemoeilijken.
      if(!/[?&]v=/.test(window.location.search)) {
        window.location.replace(window.location.pathname + '?v=' + V);
      }
    }
  } catch(e) { /* opslag niet beschikbaar — gewoon doorstarten */ }
})();

let currentProto = null;
let currentPhaseIndex = 0;
let deferredPrompt = null;
let editingPatientId = null;
let exerciseImages = {};

async function loadExerciseImages() {
  try {
    const r = await fetch('./exercise-images.json?v=' + APP_VERSION);
    if (r.ok) exerciseImages = await r.json();
  } catch(e) {}
}

// ── PWA INSTALL ──
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault(); deferredPrompt = e;
  document.getElementById('installBtn').classList.add('visible');
  document.getElementById('installBanner').classList.add('show');
});
window.addEventListener('appinstalled', () => {
  document.getElementById('installBtn').classList.remove('visible');
  document.getElementById('installBanner').classList.remove('show');
  deferredPrompt = null;
});
function installApp() {
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(() => { deferredPrompt = null; });
}
window.addEventListener('offline', () => document.getElementById('offlineBadge').classList.add('show'));
window.addEventListener('online', () => document.getElementById('offlineBadge').classList.remove('show'));

// ── YOUTUBE MODAL ──
function openYT(videoId, title) {
  document.getElementById('yt-title').textContent = title;
  document.getElementById('yt-frame').src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  document.getElementById('yt-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeYT() {
  document.getElementById('yt-modal').classList.remove('open');
  document.getElementById('yt-frame').src = '';
  document.body.style.overflow = '';
}

// ── RECENTE PROTOCOLLEN ──
const RECENT_KEY = 'kp_recent';
function trackRecent(id) {
  let recent = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
  recent = [id, ...recent.filter(r => r !== id)].slice(0, 3);
  localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
}
function renderRecent() {
  const container = document.getElementById('recent-section');
  if(!container) return;
  const recent = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]').filter(id => protocols[id]);
  if(!recent.length) { container.style.display = 'none'; return; }
  container.style.display = '';
  let html = '<div class="section-label" style="padding:0;margin-bottom:10px;">Recent bekeken</div><div class="recent-row">';
  recent.forEach(id => {
    const p = protocols[id];
    html += `<div class="recent-chip" onclick="showProto('${id}')">
      <div class="recent-chip-dot" style="background:${p.color}"></div>
      <div class="recent-chip-name">${p.title}</div>
    </div>`;
  });
  html += '</div>';
  container.innerHTML = html;
}

// ── FILTER PROTOCOLLEN (legacy, sidebar still uses filterProtos) ──
function filterProtos(regio) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.toggle('active', t.dataset.regio === regio));
  document.querySelectorAll('.protocol-card[data-regio]').forEach(card => {
    card.style.display = (regio === 'alles' || card.dataset.regio === regio) ? '' : 'none';
  });
}

// ── FEATURED HOME ──
// Afgeleid uit REGIO_MAP zodat nieuwe protocollen automatisch in de featured-sectie verschijnen
const REGIO_LABELS = { knie:'Knie & Heup', schouder:'Schouder & Arm', rug:'Lumbaal & Cervicaal', enkel:'Enkel & Voet', pols:'Pols & Hand' };
const REGIO_PROTOS = {};
Object.keys(REGIO_LABELS).forEach(k => {
  REGIO_PROTOS[k] = Object.keys(REGIO_MAP).filter(id => REGIO_MAP[id] === REGIO_LABELS[k] && protocols[id]);
});

function filterFeatured(regio) {
  document.querySelectorAll('.regio-card').forEach(c => c.classList.toggle('active', c.dataset.regio === regio));
  renderFeatured(regio);
}

function renderFeatured(regio) {
  const ids = REGIO_PROTOS[regio] || [];
  const list = document.getElementById('featured-list');
  if(!list) return;
  list.innerHTML = ids.map(id => {
    const p = protocols[id]; if(!p) return '';
    const phases = p.phases ? p.phases.length : 0;
    const exCount = p.phases ? p.phases.reduce((a,ph) => a + (ph.exercises ? ph.exercises.length : 0), 0) : 0;
    const color = p.color || '#888';
    const bg = `var(--surface-2)`;
    const border = `border:1px solid ${color}28;`;
    return `<div class="featured-card" style="background:${bg};${border}" onclick="showProto('${id}')">
      <div class="featured-card-top">
        <span class="featured-card-icon">${p.icon||icon('klembord') + ''}</span>
        <span class="featured-card-title">${p.title}</span>
        <span class="featured-card-badge" style="background:${color}1e;color:${color}">${id.toUpperCase()}</span>
      </div>
      <div class="featured-card-footer">
        ${phases ? `<span class="featured-card-tag">${phases} fasen</span>` : ''}
        ${exCount ? `<span class="featured-card-tag">${exCount} oefeningen</span>` : ''}
        <span class="featured-card-arrow">${icon('pijl-rechts')}</span>
      </div>
    </div>`;
  }).join('');
}

// ── NAVIGATION ──
function hideAllScreens() {
  ['screen-home','screen-proto','screen-patients','screen-patient-detail','screen-eval-forms','screen-library','screen-search'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.style.display = 'none';
  });
}
function toggleNavSec(el) {
  const sec = el.dataset.sec;
  const open = !el.classList.contains('open');
  document.querySelectorAll('[data-sec="' + sec.replace(/"/g, '\\"') + '"]').forEach(e => e.classList.toggle('open', open));
  const set = new Set(JSON.parse(localStorage.getItem('kp_nav_open') || '[]'));
  open ? set.add(sec) : set.delete(sec);
  localStorage.setItem('kp_nav_open', JSON.stringify([...set]));
}
function setNav(id) {
  document.querySelectorAll('[id^="nav-"],[id^="bnav-"]').forEach(n => n.classList.remove('active'));
  const s = document.getElementById('nav-'+id), b = document.getElementById('bnav-'+id);
  if(s) {
    s.classList.add('active');
    // Sectie van het actieve protocol openklappen zodat het item zichtbaar is
    const sec = s.closest('.nav-sec');
    if(sec) sec.classList.add('open');
  }
  if(b) {
    b.classList.add('active');
  } else {
    // Map to mobile 5-tab nav
    const mobileTab = protocols && protocols[id] ? 'protocollen'
      : (id === 'eval-forms' || id === 'search') ? 'more' : null;
    if(mobileTab) {
      const bt = document.getElementById('bnav-'+mobileTab);
      if(bt) bt.classList.add('active');
    }
  }
}

function openProtoSheet() {
  document.getElementById('proto-sheet').classList.add('open');
  document.body.style.overflow = '';
}
function closeProtoSheet() {
  document.getElementById('proto-sheet').classList.remove('open');
}
function openMoreSheet() {
  document.getElementById('more-sheet').classList.add('open');
}
function closeMoreSheet() {
  document.getElementById('more-sheet').classList.remove('open');
}
function showHome() {
  hideAllScreens();
  document.getElementById('screen-home').style.display = '';
  document.getElementById('searchInput').value = '';
  setNav('home'); currentProto = null;
  renderVandaag();
  renderRecent();
  filterFeatured('knie');
}

// ── VANDAAG: patiënten die aandacht vragen ──
function renderVandaag() {
  const el = document.getElementById('vandaag-section');
  if(!el || typeof loadPatients !== 'function') return;
  const pts = loadPatients();
  const alerts = [];
  const now = Date.now();
  pts.forEach(pt => {
    const p = protocols[pt.protoId];
    if(!p) return;
    // 1. Geen sessie in > 7 dagen (of nog nooit, > 7 dagen na start)
    const days = getDaysSinceLastSession(pt);
    if(days !== null && days > 7) alerts.push({pt, prio: days, icon: icon('let-op') + '', msg: `geen sessie sinds ${days} dagen`});
    // 2. Faseduur verstreken  doorstroomcriteria evalueren
    const phaseIdx = pt.phaseIndex || 0;
    const ph = p.phases[phaseIdx];
    const startISO = (pt.phaseHistory || {})[phaseIdx] || pt.startDate;
    if(ph && startISO && phaseIdx < p.phases.length - 1) {
      const m = (ph.weeks || '').match(/(\d+)\s*$/) || (ph.weeks || '').match(/(\d+)\+?\s*$/);
      const maxWkn = m ? parseInt(m[1]) : null;
      if(maxWkn && !(ph.weeks || '').includes('+')) {
        const wknInFase = (now - new Date(startISO).getTime()) / 6048e5;
        if(wknInFase > maxWkn) alerts.push({pt, prio: 5 + wknInFase - maxWkn, icon: icon('meetlat') + '', msg: `${ph.label} (${ph.weeks}) verstreken — evalueer doorstroomcriteria`});
      }
    }
    // 3. Laatste uitkomstmaat ouder dan 28 dagen
    const scores = (typeof getPatientScores === 'function') ? getPatientScores(pt.id) : {};
    const dates = Object.values(scores).flat().map(s => s.date).filter(Boolean).sort();
    if(dates.length) {
      const d = Math.floor((now - new Date(dates[dates.length-1]).getTime()) / 864e5);
      if(d > 28) alerts.push({pt, prio: 3, icon: icon('meetlat') + '', msg: `laatste score ${d} dagen oud — neem uitkomstmaat opnieuw af`});
    }
  });
  if(!alerts.length) { el.style.display = 'none'; return; }
  alerts.sort((a, b) => b.prio - a.prio);
  el.style.display = '';
  el.innerHTML = `<div class="section-label" style="margin:0 0 8px;padding:0;">Vandaag · ${alerts.length} aandachtspunt${alerts.length > 1 ? 'en' : ''}</div>`
    + alerts.slice(0, 6).map(a => {
      const color = getProtoColor(a.pt.protoId);
      return `<div onclick="showPatientDetail('${a.pt.id}')" style="display:flex;align-items:center;gap:10px;background:var(--surface);border:1px solid var(--line);border-left:3px solid ${color};border-radius:6px;padding:9px 12px;margin-bottom:6px;cursor:pointer;" onmouseover="this.style.borderColor='var(--line-strong)'" onmouseout="this.style.borderColor='var(--line)';this.style.borderLeftColor='${color}'">
        <span style="font-size:15px;">${a.icon}</span>
        <div style="flex:1;min-width:0;">
          <span style="font-size:12px;font-weight:600;">${esc(a.pt.name)}</span>
          <span style="font-size:12px;color:var(--ink-2);"> — ${a.msg}</span>
        </div>
        <span style="font-size:12px;color:var(--ink-3);">${icon('pijl-rechts')}</span>
      </div>`;
    }).join('')
    + (alerts.length > 6 ? `<div style="font-size:12px;color:var(--ink-3);text-align:center;padding:2px;">+ ${alerts.length - 6} meer in het patiëntendashboard</div>` : '');
}
function showProto(id) {
  const p = protocols[id]; if(!p) return;
  currentProto = p;
  trackRecent(id);
  hideAllScreens();
  document.getElementById('screen-proto').style.display = 'flex';
  document.getElementById('proto-breadcrumb').textContent = p.title;
  document.getElementById('proto-title').textContent = p.title;
  document.getElementById('proto-subtitle').textContent = p.subtitle;
  document.getElementById('proto-dot').style.background = p.color;
  document.documentElement.style.setProperty('--proto-color', p.color);

  // Tabs: fasen + Aandoening + Manuele therapie + Scores + Formulieren + Referenties.
  // Elke tab draagt data-tab; activeren gebeurt op naam (setActiveTab) i.p.v. op
  // een herberekende index — dat laatste liep uit de pas zodra er een tab bijkwam.
  const tabs = document.getElementById('proto-tabs');
  const hasScores = SCORES[id] && SCORES[id].length > 0;
  const tabsHtml = p.phases.map((ph,i) => {
    const cls = i===0 ? 'vtab active' : 'vtab';
    return '<div class="' + cls + '" data-tab="fase-' + i + '" onclick="showPhase(' + i + ')">' + ph.label + '</div>';
  }).join('');
  const scoresTab = hasScores ? '<div class="vtab" data-tab="scores" onclick="showScores(\'' + id + '\')"> Scores</div>' : '';
  const protoForms = Object.entries(FORMS).filter(([k,f]) => f.protocol === id);
  const formsTab = protoForms.length ? '<div class="vtab" data-tab="forms" onclick="showFormsTab(\'' + id + '\')">' + icon('fiche') + ' Formulieren</div>' : '';
  const refsTab = '<div class="vtab" data-tab="refs" onclick="showRefs(\'' + id + '\')">Referenties</div>';
  // typeof-controle: bij een half bijgewerkte cache kan protocols.js ouder zijn
  // dan app.js. Zonder deze guard gooit dat een ReferenceError midden in
  // showProto, waardoor tabs en inhoud van het vorige protocol blijven staan.
  const heeftInfo = typeof BESCHRIJVING !== 'undefined' && BESCHRIJVING[id];
  const heeftManueel = typeof MANUEEL !== 'undefined' && MANUEEL[id];
  const infoTab = heeftInfo ? '<div class="vtab" data-tab="info" onclick="showBeschrijving(\'' + id + '\')">' + icon('stethoscoop') + ' Aandoening</div>' : '';
  const manueelTab = heeftManueel ? '<div class="vtab" data-tab="manueel" onclick="showManueel(\'' + id + '\')">' + icon('hand') + ' Manuele therapie</div>' : '';
  // Regelafbreking tussen de fasetabs en de overige tabs, zodat die laatste
  // altijd als eigen groep zichtbaar zijn en niet achter de fasen wegvallen.
  const extraTabs = infoTab + manueelTab + scoresTab + formsTab + refsTab;
  tabs.innerHTML = tabsHtml + (extraTabs ? '<div class="vtab-sep"></div>' + extraTabs : '');
  currentPhaseIndex = 0;
  renderPhase(0);
  renderTimeline(0);
  setNav(id);
  updateFavBtn(id);
  const totalFlags = p.phases.reduce((s,ph) => s + (ph.redflags ? ph.redflags.length : 0), 0);
  const rfCount = document.getElementById('rf-count');
  if(rfCount) rfCount.textContent = totalFlags;
  // Show beslisboom button if available
  const bbBtn = document.getElementById('beslisboom-btn');
  if(bbBtn) bbBtn.style.display = BESLISBOOM[id] ? 'flex' : 'none';
}
// Markeert de tab met deze data-tab-naam als actief
function setActiveTab(name) {
  document.querySelectorAll('.vtab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
}
function showPhase(i) {
  currentPhaseIndex = i;
  setActiveTab('fase-' + i);
  renderPhase(i);
  renderTimeline(i);
  document.getElementById('viewer-scroll').scrollTop = 0;
}
function showRefs(id) {
  const p = protocols[id];
  setActiveTab('refs');
  document.getElementById('proto-body').innerHTML = `<div class="ref-box"><div class="ref-label">Sleutelreferenties</div><div class="ref-text">${(p.refs||'').split('|').map(r=>`<div style="margin-bottom:10px">${r.trim()}</div>`).join('')}</div></div>`;
}

function showBeschrijving(id) {
  const b = BESCHRIJVING[id]; if(!b) return;
  setActiveTab('info');
  document.getElementById('proto-body').innerHTML = `
    <div class="ev-box" style="margin-bottom:14px;">
      <div class="ev-label" style="display:flex;align-items:center;gap:7px;">${icon('stethoscoop')} Klinische kenmerken & presentatie</div>
      <div class="ev-text" style="line-height:1.7">${b.kenmerken}</div>
    </div>
    <div class="ev-box">
      <div class="ev-label" style="display:flex;align-items:center;gap:7px;">️ Etiologie & oorzaken</div>
      <div class="ev-text" style="line-height:1.7">${b.oorzaken}</div>
    </div>`;
  document.getElementById('viewer-scroll').scrollTop = 0;
}

// ── MANUELE THERAPIE TAB ──
function showManueel(id) {
  const m = MANUEEL[id]; if(!m) return;
  setActiveTab('manueel');
  const color = (protocols[id] || {}).color || 'var(--ink-2)';

  const technieken = (m.technieken || []).map(t => `
    <div class="mt-card">
      <div class="mt-head">
        <div class="mt-naam">${t.naam}</div>
        ${t.fase ? `<span class="mt-fase" style="background:${hexToRgba(color,.12)};color:${color};border-color:${hexToRgba(color,.28)}">${t.fase}</span>` : ''}
      </div>
      ${t.doel ? `<div class="mt-rij"><span class="mt-label">Doel</span><span class="mt-tekst">${t.doel}</span></div>` : ''}
      ${t.uitvoering ? `<div class="mt-rij"><span class="mt-label">Uitvoering</span><span class="mt-tekst">${t.uitvoering}</span></div>` : ''}
      ${t.dosering ? `<div class="mt-rij"><span class="mt-label">Dosering</span><span class="mt-tekst mt-dosering">${t.dosering}</span></div>` : ''}
      ${t.let_op ? `<div class="mt-letop">${icon('let-op')} ${t.let_op}</div>` : ''}
    </div>`).join('');

  document.getElementById('proto-body').innerHTML = `
    ${m.intro ? `<div class="ev-box" style="margin-bottom:16px;">
      <div class="ev-label" style="display:flex;align-items:center;gap:7px;">${icon('hand')} Rol van manuele therapie</div>
      <div class="ev-text" style="line-height:1.7">${m.intro}</div>
    </div>` : ''}
    <div class="slabel">Technieken · ${(m.technieken || []).length}</div>
    <div class="mt-grid">${technieken}</div>
    ${(m.contraindicaties || []).length ? `<div class="rf-box" style="margin-top:18px;">
      <div class="rf-label">Contra-indicaties & voorzorgen</div>
      <ul class="rf-list">${m.contraindicaties.map(c => `<li>${c}</li>`).join('')}</ul>
    </div>` : ''}
    ${m.evidentie ? `<div class="ev-box" style="margin-top:16px;">
      <div class="ev-label">Evidentie</div>
      <div class="ev-text" style="line-height:1.7">${m.evidentie}</div>
    </div>` : ''}`;
  document.getElementById('viewer-scroll').scrollTop = 0;
}

// ── FASE TIJDLIJN ──
function renderTimeline(activeIdx) {
  const p = currentProto; if(!p) return;
  const tl = document.getElementById('phase-timeline'); if(!tl) return;
  // Check if a patient is linked to this protocol
  const pts = loadPatients();
  const linked = pts.find(pt => pt.protoId === p.id);
  const patPhase = linked ? (linked.phaseIndex || 0) : null;
  let html = '';
  p.phases.forEach((ph, i) => {
    const isActive = i === activeIdx;
    const isDone = patPhase !== null && i < patPhase;
    const isPatCurrent = patPhase !== null && i === patPhase;
    let cls = 'pt-dot';
    if(isActive) cls += ' active';
    if(isDone) cls += ' done';
    if(isPatCurrent && !isActive) cls += ' patient-current';
    const lineClass = isDone ? 'pt-line done' : 'pt-line';
    const label = ph.label.replace('Fase ','F').replace('Preop + Dag 0–3','Pre').replace('Diagnostiek','D0');
    html += `<div class="pt-step">
      <div style="display:flex;flex-direction:column;align-items:center;">
        <div class="${cls}" onclick="showPhase(${i})" title="${ph.label}: ${ph.title}">${i+1}</div>
        <div class="pt-label">${label}</div>
      </div>
      ${i < p.phases.length-1 ? `<div class="${lineClass}"></div>` : ''}
    </div>`;
  });
  if(linked) {
    html += `<div style="margin-left:12px;font-size:12px;color:var(--ok);font-variant-numeric:tabular-nums;white-space:nowrap;align-self:flex-start;margin-top:2px">${icon('persoon')} ${linked.name.split(' ')[0]}</div>`;
  }
  tl.innerHTML = html;
}

// ── SCORES TAB ──
function showFormsTab(protoId) {
  const p = protocols[protoId];
  setActiveTab('forms');
  const protoForms = Object.entries(FORMS).filter(([k,f]) => f.protocol === protoId);
  const color = p.color;
  let html = '<div class="slabel">Testformulieren — ' + p.title + '</div>';
  html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin-bottom:20px;">';
  protoForms.forEach(([formId, form]) => {
    html += '<div style="background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:14px 16px;cursor:pointer;" onclick="openForm(\''+formId+'\',null)" onmouseover="this.style.borderColor=\'var(--line-strong)\'" onmouseout="this.style.borderColor=\'var(--line)\'">';
    html += '<div style="font-size:15px;font-weight:600;margin-bottom:4px;">' + form.name + '</div>';
    html += '<div style="font-size:12px;color:var(--ink-2);margin-bottom:10px;line-height:1.4">' + form.full + '</div>';
    html += '<div style="font-size:12px;color:var(--ink-3);font-variant-numeric:tabular-nums;margin-bottom:10px">Max: ' + form.max + ' · RTS: ' + form.rts + '</div>';
    html += '<div style="background:' + color + '22;color:' + color + ';border:1px solid ' + color + '44;padding:6px 12px;border-radius:6px;font-size:12px;font-weight:600;text-align:center;">' + icon('fiche') + ' Formulier invullen</div>';
    html += '</div>';
  });
  html += '</div>';
  html += '<div style="font-size:12px;color:var(--ink-2);padding:10px 14px;background:var(--surface-2);border-radius:6px;border:1px solid var(--line)"> Koppel een patiënt via de "' + icon('persoon') + ' Koppel patiënt" knop om een ingevuld formulier automatisch aan hun dossier te koppelen.</div>';
  document.getElementById('proto-body').innerHTML = html;
  document.getElementById('viewer-scroll').scrollTop = 0;
}

function showScores(id) {
  const p = protocols[id];
  setActiveTab('scores');
  const scores = SCORES[id] || [];
  let html = `<div class="slabel">Uitkomstmaten — ${p.title}</div>`;
  html += `<div class="scores-grid">`;
  scores.forEach((sc, si) => {
    html += `<div class="score-card">
      <div class="score-name">${sc.name}</div>
      <div class="score-full">${sc.full}</div>
      <div class="score-ranges">`;
    sc.ranges.forEach(r => {
      html += `<div class="score-range">
        <div class="score-range-dot" style="background:${r.color}"></div>
        <div class="score-range-label">${r.label}</div>
        <div class="score-range-val">${r.min}–${r.max} ${sc.unit}</div>
      </div>`;
    });
    html += `</div>`;
    if(sc.rts) html += `<div style="font-size:12px;color:var(--ink-2);margin-bottom:10px;padding:5px 8px;background:var(--surface-2);border-radius:4px;font-variant-numeric:tabular-nums">RTS: ${sc.rts}</div>`;
    if(sc.mcid) html += `<div style="font-size:12px;color:var(--ink-3);margin-bottom:10px;font-variant-numeric:tabular-nums">MCID: ${sc.mcid} ${sc.unit}</div>`;
    html += `<div class="score-input-row">
      <input class="score-input" id="score-input-${si}" type="number" min="0" max="${sc.max}" placeholder="Score (0–${sc.max})">
      <button class="score-btn" onclick="calcScore('${id}',${si})">Interpreteer</button>
    </div>
    <div class="score-result" id="score-result-${si}"></div>
    </div>`;
  });
  html += `</div>`;
  document.getElementById('proto-body').innerHTML = html;
  document.getElementById('viewer-scroll').scrollTop = 0;
}
function calcScore(protoId, si) {
  const sc = SCORES[protoId][si];
  const val = parseFloat(document.getElementById(`score-input-${si}`).value);
  const res = document.getElementById(`score-result-${si}`);
  if(isNaN(val) || val < 0 || val > sc.max) {
    res.className = 'score-result show warn';
    res.textContent = `Voer een geldige score in (0–${sc.max})`;
    return;
  }
  let matched = null;
  if(sc.invert) {
    matched = sc.ranges.find(r => val >= r.min && val <= r.max);
  } else {
    matched = sc.ranges.slice().reverse().find(r => val >= r.min && val <= r.max);
    if(!matched) matched = sc.ranges[sc.ranges.length-1];
  }
  if(!matched) matched = sc.ranges[0];
  const colorMap = {'var(--ok)':'good','var(--warn)':'warn','var(--stop)':'bad'};
  const cls = colorMap[matched.color] || 'warn';
  res.className = `score-result show ${cls}`;
  res.innerHTML = esc(String(val)) + ' ' + esc(sc.unit) + ' ' + icon('pijl-rechts') + ' ' + esc(matched.label);
  if(sc.mcid) {
    res.textContent += ` · MCID: ${sc.mcid}`;
  }
}

// ── RODE VLAGGEN MODAL ──
function openRF() {
  if(!currentProto) return;
  const p = currentProto;
  const allFlags = [];
  p.phases.forEach(ph => {
    if(ph.redflags && ph.redflags.length)
      ph.redflags.forEach(f => allFlags.push({fase: ph.label + ' — ' + ph.title, flag: f}));
  });
  document.getElementById('rf-modal-title').innerHTML = icon('vlag') + ' Rode vlaggen: ' + esc(p.title);
  if(!allFlags.length) {
    document.getElementById('rf-modal-body').innerHTML = '<div style="color:var(--ink-2);font-size:13px;padding:20px 0;text-align:center;">Geen rode vlaggen geregistreerd.</div>';
  } else {
    let html = ''; let lastFase = '';
    allFlags.forEach(({fase, flag}) => {
      if(fase !== lastFase) {
        html += `<div style="font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);font-variant-numeric:tabular-nums;margin:${lastFase?'16px':0} 0 6px">${fase}</div>`;
        lastFase = fase;
      }
      const urgent = flag.includes('SPOED') || flag.includes('spoed') || flag.includes('CAUDA');
      html += `<div style="display:flex;gap:10px;align-items:flex-start;padding:8px 12px;background:rgba(239,68,68,${urgent?.1:.05});border:1px solid rgba(239,68,68,${urgent?.25:.15});border-radius:6px;margin-bottom:6px;">
        <span style="color:var(--stop);font-weight:700;flex-shrink:0;font-size:${urgent?16:13}px;">${urgent?icon('vlag') + '':'!'}</span>
        <span style="font-size:12px;color:var(--ink);line-height:1.5;${urgent?'font-weight:600':''}">${flag}</span>
      </div>`;
    });
    document.getElementById('rf-modal-body').innerHTML = html;
  }
  document.getElementById('rf-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeRF() { document.getElementById('rf-modal').classList.remove('open'); document.body.style.overflow = ''; }

// ── PATIËNTENFICHE ──
let ficheScope = 'fase';
let fichePhaseIndex = 0;
function openFiche() {
  if(!currentProto) return;
  // Fase-index uit de state, niet uit een telling van .vtab-elementen: sinds er
  // tabs achter de fasen staan (Aandoening, Manuele therapie, ...) wees die
  // telling bij zes fasen naar de verkeerde fase.
  fichePhaseIndex = Math.min(currentPhaseIndex, currentProto.phases.length - 1);
  if(!(fichePhaseIndex >= 0)) fichePhaseIndex = 0;
  ficheScope = 'fase';
  renderFicheModal();
  document.getElementById('fiche-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeFiche() { document.getElementById('fiche-modal').classList.remove('open'); document.body.style.overflow = ''; }
function setFicheScope(scope) { ficheScope = scope; renderFicheModal(); }
function renderFicheModal() {
  const p = currentProto;
  const phases = ficheScope === 'all' ? p.phases : [p.phases[fichePhaseIndex]];
  document.getElementById('fiche-modal-title').innerHTML = icon('klembord') + ' ' + esc(p.title);
  let html = `<div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap;">`;
  html += `<button onclick="setFicheScope('fase')" style="flex:1;padding:7px 10px;border-radius:6px;font-size:12px;cursor:pointer;font-weight:600;border:1px solid ${ficheScope==='fase'?'var(--proto-color)':'var(--line)'};background:${ficheScope==='fase'?'var(--surface-3)':'var(--surface-2)'};color:${ficheScope==='fase'?'var(--proto-color)':'var(--ink-2)'};">Huidige fase</button>`;
  html += `<button onclick="setFicheScope('all')" style="flex:1;padding:7px 10px;border-radius:6px;font-size:12px;cursor:pointer;font-weight:600;border:1px solid ${ficheScope==='all'?'var(--proto-color)':'var(--line)'};background:${ficheScope==='all'?'var(--surface-3)':'var(--surface-2)'};color:${ficheScope==='all'?'var(--proto-color)':'var(--ink-2)'};">Volledig protocol</button>`;
  html += `</div>`;
  if(ficheScope === 'fase') {
    html += `<div style="display:flex;gap:4px;margin-bottom:14px;overflow-x:auto;scrollbar-width:none;">`;
    p.phases.forEach((ph,i) => {
      html += `<button onclick="fichePhaseIndex=${i};renderFicheModal()" style="flex-shrink:0;padding:4px 10px;border-radius:6px;font-size:12px;font-variant-numeric:tabular-nums;cursor:pointer;border:1px solid ${i===fichePhaseIndex?'var(--proto-color)':'var(--line)'};background:${i===fichePhaseIndex?'var(--surface-3)':'var(--surface-2)'};color:${i===fichePhaseIndex?'var(--ink)':'var(--ink-2)'};">${ph.label}</button>`;
    });
    html += `</div>`;
  }
  phases.forEach(ph => {
    html += `<div style="margin-bottom:18px;">`;
    html += `<div style="background:var(--surface-2);border:1px solid var(--line);border-left:3px solid var(--proto-color);border-radius:4px;padding:10px 14px;margin-bottom:10px;"><div style="font-size:12px;font-weight:700;">${ph.label} — ${ph.title}</div><div style="font-size:12px;color:var(--ink-2);font-variant-numeric:tabular-nums;margin-top:2px">${ph.weeks}</div></div>`;
    if(ph.goals?.length) {
      html += `<div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3);font-variant-numeric:tabular-nums;margin-bottom:6px;">Doelstellingen</div><ul style="list-style:none;margin-bottom:12px;">`;
      ph.goals.forEach(g => html += `<li class="fiche-goal-item">${g}</li>`);
      html += `</ul>`;
    }
    if(ph.exercises?.length) {
      html += `<div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3);font-variant-numeric:tabular-nums;margin-bottom:6px;">Oefeningen</div>`;
      ph.exercises.forEach(ex => {
        html += `<div class="fiche-ex-row"><div style="flex:1"><div class="fiche-ex-name">${ex.name}</div>`;
        if(ex.params?.length) html += `<div class="fiche-ex-params">${ex.params.map(([k,v])=>`${k}: ${v}`).join(' · ')}</div>`;
        if(ex.note) html += `<div style="font-size:12px;color:var(--ink-2);margin-top:3px;line-height:1.5">${ex.note}</div>`;
        html += `</div></div>`;
      });
    }
    html += `</div>`;
  });
  html += `<div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3);font-variant-numeric:tabular-nums;margin-bottom:6px;">Notities voor patiënt</div>`;
  html += `<textarea class="fiche-notes-area" id="fiche-notes" placeholder="Voeg persoonlijke notities toe..."></textarea>`;
  document.getElementById('fiche-modal-body').innerHTML = html;
}

const PRINT_CSS = `
  body{font-family:'IBM Plex Sans',system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;color:#000;background:#fff;padding:20px;margin:0;font-size:13px;font-variant-numeric:tabular-nums;}
  h1{font-size:21px;font-weight:700;margin:0 0 4px;}
  .pf-meta{font-size:12px;color:#555;margin-bottom:16px;border-bottom:1px solid #eee;padding-bottom:8px;}
  h2{font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:#555;border-bottom:1px solid #ddd;padding-bottom:3px;margin:16px 0 6px;}
  .pf-ex{display:flex;gap:12px;padding:5px 0;border-bottom:1px solid #f0f0f0;align-items:baseline;}
  .pf-ex-name{font-weight:600;font-size:12px;flex:1;}
  .pf-ex-params{font-size:12px;color:#444;font-variant-numeric:tabular-nums;white-space:nowrap;}
  .pf-goal{font-size:12px;color:#333;padding:2px 0 2px 8px;}
  .pf-notes{font-size:12px;border:1px solid #ccc;padding:8px;border-radius:4px;min-height:60px;margin-top:8px;white-space:pre-wrap;}
  .pf-footer{margin-top:20px;font-size:12px;color:#999;border-top:1px solid #ddd;padding-top:6px;}
  @media print{body{padding:0;}}
`;

function triggerPrint(bodyHtml) {
  let frame = document.getElementById('kp-print-frame');
  if (frame) frame.remove();
  frame = document.createElement('iframe');
  frame.id = 'kp-print-frame';
  frame.style.cssText = 'position:fixed;right:-9999px;bottom:0;width:1px;height:1px;border:0;visibility:hidden;';
  document.body.appendChild(frame);
  const doc = frame.contentDocument || frame.contentWindow.document;
  doc.open();
  doc.write('<!DOCTYPE html><html><head><meta charset="utf-8"><style>' + PRINT_CSS + '</style></head><body>' + bodyHtml + '</body></html>');
  doc.close();
  setTimeout(() => {
    frame.contentWindow.focus();
    frame.contentWindow.print();
  }, 250);
}

function printFiche() {
  if(!currentProto) return;
  const p = currentProto;
  const phases = ficheScope === 'all' ? p.phases : [p.phases[fichePhaseIndex]];
  const notes = document.getElementById('fiche-notes')?.value || '';
  const datum = new Date().toLocaleDateString('nl-BE',{day:'2-digit',month:'2-digit',year:'numeric'});
  let html = `<h1>${p.title}</h1><div class="pf-meta">Patiëntenfiche · ${ficheScope==='all'?'Volledig protocol':phases[0].label} · ${datum}</div>`;
  phases.forEach(ph => {
    html += `<h2>${ph.label} — ${ph.title} <span style="font-weight:400;font-size:12px;color:#888">${ph.weeks}</span></h2>`;
    if(ph.goals?.length) { html += `<div style="font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#888;margin-bottom:4px">Doelstellingen</div>`; ph.goals.forEach(g => html += `<div class="pf-goal">${icon('pijl-rechts')} ${g}</div>`); }
    if(ph.exercises?.length) {
      html += `<div style="font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#888;margin:10px 0 4px">Oefeningen</div>`;
      ph.exercises.forEach(ex => {
        html += `<div class="pf-ex"><div class="pf-ex-name">${ex.name}</div><div class="pf-ex-params">${ex.params?ex.params.map(([k,v])=>`${k}: ${v}`).join(' · '):''}</div></div>`;
        if(ex.note) html += `<div style="font-size:12px;color:#666;padding:2px 0 4px 8px;font-style:italic">${ex.note}</div>`;
      });
    }
  });
  if(notes) html += `<h2>Notities</h2><div class="pf-notes">${notes}</div>`;
  html += `<div class="pf-footer">KineProtocol · Evidence-based revalidatie · ${datum}</div>`;
  triggerPrint(html);
}
function copyFiche() {
  if(!currentProto) return;
  const p = currentProto;
  const phases = ficheScope === 'all' ? p.phases : [p.phases[fichePhaseIndex]];
  const notes = document.getElementById('fiche-notes') ? document.getElementById('fiche-notes').value : '';
  const datum = new Date().toLocaleDateString('nl-BE',{day:'2-digit',month:'2-digit',year:'numeric'});
  let text = p.title + ' — Patientenfiche (' + datum + ')\n' + '='.repeat(50) + '\n\n';
  phases.forEach(function(ph) {
    text += ph.label + ' — ' + ph.title + ' (' + ph.weeks + ')\n' + '-'.repeat(40) + '\n';
    if(ph.goals && ph.goals.length) {
      text += '\nDoelstellingen:\n';
      ph.goals.forEach(function(g) { text += '  ' + icon('pijl-rechts') + ' ' + g + '\n'; });
    }
    if(ph.exercises && ph.exercises.length) {
      text += '\nOefeningen:\n';
      ph.exercises.forEach(function(ex) {
        var params = ex.params ? ' — ' + ex.params.map(function(kv){return kv[0]+': '+kv[1];}).join(' · ') : '';
        text += '  • ' + ex.name + params + '\n';
        if(ex.note) text += '    ' + ex.note + '\n';
      });
    }
    text += '\n';
  });
  if(notes) text += 'Notities:\n' + notes + '\n\n';
  text += 'KineProtocol · ' + datum;
  navigator.clipboard.writeText(text).then(function() {
    var btn = document.querySelector('.kmodal-action.secondary');
    if(btn) { btn.innerHTML = icon('check') + ' Gekopieerd'; setTimeout(function(){ btn.innerHTML = icon('klembord') + ' Kopieer tekst'; }, 2000); }
  }).catch(function() {
    var ta = document.createElement('textarea'); ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    var btn = document.querySelector('.kmodal-action.secondary');
    if(btn) { btn.innerHTML = icon('check') + ' Gekopieerd'; setTimeout(function(){ btn.innerHTML = icon('klembord') + ' Kopieer tekst'; }, 2000); }
  });
}


// ── STATE FORMULIEREN ──
let activeForm = null;
let activeFormPatId = null;
let formAnswers = {};
let beslisboomStack = [];

// ── BESLISBOOM FUNCTIES ──
function openBeslisboom(protoId) {
  const boom = BESLISBOOM[protoId];
  if(!boom) return;
  beslisboomStack = [];
  document.getElementById('bb-modal-title').textContent = boom.title;
  renderBeslisboomStap(protoId, boom.stappen[0].id);
  document.getElementById('bb-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeBeslisboom() {
  document.getElementById('bb-modal').classList.remove('open');
  document.body.style.overflow = '';
}
function renderBeslisboomStap(protoId, stapId) {
  const boom = BESLISBOOM[protoId];
  const stap = boom.stappen.find(s => s.id === stapId);
  if(!stap) return;
  beslisboomStack.push(stapId);
  const p = protocols[protoId];
  const color = p ? p.color : '#fff';
  let html = '';
  // Breadcrumb
  if(beslisboomStack.length > 1) {
    html += '<button onclick="beslisboomTerug(\'' + protoId + '\')" style="background:var(--surface-2);border:1px solid var(--line);color:var(--ink-2);padding:5px 10px;border-radius:6px;font-size:12px;cursor:pointer;margin-bottom:12px;"'+icon('chevron','ic-terug')+' Terug</button>';
  }
  // Vraag
  html += '<div style="background:var(--surface-2);border:1px solid var(--line);border-left:3px solid ' + color + ';border-radius:6px;padding:14px 16px;margin-bottom:14px;">';
  html += '<div style="font-size:15px;font-weight:600;margin-bottom:6px;">' + stap.vraag + '</div>';
  if(stap.info) html += '<div style="font-size:12px;color:var(--ink-2);line-height:1.5">' + stap.info + '</div>';
  html += '</div>';
  // Opties
  stap.opties.forEach(opt => {
    if(opt.advies) {
      // Terminal node
      html += '<div onclick="renderBeslisboomAdvies(\'' + protoId + '\',this)" data-advies="' + opt.advies.replace(/"/g,'&quot;') + '" data-color="' + opt.color + '" style="cursor:pointer;padding:12px 14px;border-radius:6px;border:2px solid ' + opt.color + '33;background:' + opt.color + '11;margin-bottom:8px;transition:all .15s;" onmouseover="this.style.background=\'' + opt.color + '22\'" onmouseout="this.style.background=\'' + opt.color + '11\'">';
      html += '<div style="display:flex;align-items:center;gap:8px;"><div style="width:10px;height:10px;border-radius:50%;background:' + opt.color + ';flex-shrink:0"></div><div style="font-size:13px;font-weight:500">' + opt.label + '</div></div></div>';
    } else if(opt.next) {
      html += '<div onclick="renderBeslisboomStap(\'' + protoId + '\',\'' + opt.next + '\')" style="cursor:pointer;padding:12px 14px;border-radius:6px;border:2px solid ' + opt.color + '33;background:' + opt.color + '11;margin-bottom:8px;transition:all .15s;" onmouseover="this.style.background=\'' + opt.color + '22\'" onmouseout="this.style.background=\'' + opt.color + '11\'">';
      html += '<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;"><div style="display:flex;align-items:center;gap:8px;"><div style="width:10px;height:10px;border-radius:50%;background:' + opt.color + ';flex-shrink:0"></div><div style="font-size:13px;font-weight:500">' + opt.label + '</div></div><span style="color:var(--ink-2);font-size:12px;">' + icon('pijl-rechts') + '</span></div></div>';
    }
  });
  document.getElementById('bb-modal-body').innerHTML = html;
}
function renderBeslisboomAdvies(protoId, el) {
  const advies = el.dataset.advies;
  const color = el.dataset.color;
  const p = protocols[protoId];
  let html = '<button onclick="beslisboomTerug(\'' + protoId + '\')" style="background:var(--surface-2);border:1px solid var(--line);color:var(--ink-2);padding:5px 10px;border-radius:6px;font-size:12px;cursor:pointer;margin-bottom:12px;"'+icon('chevron','ic-terug')+' Terug</button>';
  html += '<div style="background:' + color + '15;border:2px solid ' + color + '44;border-radius:10px;padding:16px 18px;">';
  html += '<div style="font-size:12px;font-weight:700;color:' + color + ';text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;font-variant-numeric:tabular-nums">Klinisch advies</div>';
  html += '<div style="font-size:13px;color:var(--ink);line-height:1.6">' + advies + '</div>';
  html += '</div>';
  html += '<button onclick="closeBeslisboom()" style="width:100%;margin-top:12px;background:var(--surface-2);border:1px solid var(--line);color:var(--ink);padding:9px;border-radius:6px;font-size:12px;cursor:pointer;">Sluiten</button>';
  document.getElementById('bb-modal-body').innerHTML = html;
}
function beslisboomTerug(protoId) {
  beslisboomStack.pop(); // remove current
  const prev = beslisboomStack.pop(); // get prev (will be re-added by render)
  if(prev) renderBeslisboomStap(protoId, prev);
  else {
    const boom = BESLISBOOM[protoId];
    beslisboomStack = [];
    renderBeslisboomStap(protoId, boom.stappen[0].id);
  }
}

// ── TESTFORMULIEREN FUNCTIES ──
function openForm(formId, patId) {
  const form = FORMS[formId];
  if(!form) return;
  activeForm = formId;
  activeFormPatId = patId || null;
  formAnswers = {};
  const pts = loadPatients();
  const pt = patId ? pts.find(p => p.id === patId) : null;
  const datum = new Date().toLocaleDateString('nl-BE',{day:'2-digit',month:'2-digit',year:'numeric'});
  document.getElementById('form-modal-title').textContent = form.name + (pt ? ' — ' + pt.name : '');
  renderFormBody(form, pt, datum);
  document.getElementById('form-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeForm() {
  document.getElementById('form-modal').classList.remove('open');
  document.body.style.overflow = '';
}
function renderFormBody(form, pt, datum) {
  const color = pt ? getProtoColor(pt.protoId) : 'var(--accent)';
  let html = '';
  // Header
  html += '<div style="background:var(--surface-2);border:1px solid var(--line);border-radius:6px;padding:10px 14px;margin-bottom:16px;">';
  html += '<div style="font-size:13px;font-weight:600">' + form.full + '</div>';
  html += '<div style="font-size:12px;color:var(--ink-2);font-variant-numeric:tabular-nums;margin-top:2px">Max: ' + form.max + ' punten · RTS: ' + form.rts + '</div>';
  if(pt) html += '<div style="font-size:12px;color:var(--ink-2);margin-top:2px">Patiënt: <strong style="color:var(--ink)">' + pt.name + '</strong> · ' + datum + '</div>';
  html += '</div>';
  html += '<div style="font-size:12px;color:var(--ink-2);margin-bottom:14px;line-height:1.5">' + form.intro + '</div>';
  // Questions
  let sportSection = false;
  form.vragen.forEach((v, vi) => {
    if(v.sport && !sportSection) {
      sportSection = true;
      html += '<div style="font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:var(--ink-3);font-variant-numeric:tabular-nums;margin:14px 0 8px;padding-bottom:4px;border-bottom:1px solid var(--line)">Sportspecifieke activiteiten</div>';
    }
    html += '<div style="margin-bottom:14px;" id="q-' + v.id + '">';
    html += '<div style="font-size:12px;font-weight:600;margin-bottom:7px;color:var(--ink)">' + (vi+1) + '. ' + v.tekst + '</div>';
    if(v.type === 'keuze') {
      html += '<div style="display:flex;flex-direction:column;gap:4px;">';
      v.opties.forEach((opt, oi) => {
        const inputId = 'inp-' + v.id + '-' + oi;
        html += '<label style="display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:6px;border:1px solid var(--line);cursor:pointer;transition:all .1s;" onmouseover="this.style.borderColor=\'var(--line-strong)\'" onmouseout="this.style.borderColor=\'var(--line)\'">';
        html += '<input type="radio" name="' + v.id + '" id="' + inputId + '" value="' + oi + '" onchange="setFormAnswer(\'' + v.id + '\',' + oi + ',' + JSON.stringify(opt.score) + ')" style="flex-shrink:0">';
        html += '<span style="font-size:12px">' + opt.label + '</span>';
        html += '</label>';
      });
      html += '</div>';
    } else if(v.type === 'slider') {
      html += '<div style="padding:0 4px;">';
      // Start op het minimum met een streepje als weergave: een schuifknop die
      // vooringevuld op de middenwaarde staat, suggereert een antwoord dat
      // niemand gegeven heeft en telde bovendien niet mee in de score.
      html += '<input type="range" min="' + v.min + '" max="' + v.max + '" value="' + v.min + '" style="width:100%;accent-color:' + color + '" oninput="updateSlider(\'' + v.id + '\',this.value,' + v.gewicht + ',\'' + color + '\')" id="slider-' + v.id + '">';
      html += '<div style="display:flex;justify-content:space-between;margin-top:3px;">';
      html += '<span style="font-size:12px;color:var(--ink-2)">' + v.links + '</span>';
      html += '<span id="slider-val-' + v.id + '" style="font-size:12px;font-weight:700;color:var(--ink-2)">—</span>';
      html += '<span style="font-size:12px;color:var(--ink-2)">' + v.rechts + '</span>';
      html += '</div></div>';
      // Initialize answer
      formAnswers[v.id] = {score: Math.round(v.max/2), rawScore: Math.round(v.max/2)};
    }
    html += '</div>';
  });
  // Score preview
  html += '<div id="form-score-preview" style="background:var(--surface-2);border:1px solid var(--line);border-radius:6px;padding:10px 14px;margin-top:8px;text-align:center;font-variant-numeric:tabular-nums;font-size:13px;color:var(--ink-2)">Score: vul alle vragen in</div>';
  document.getElementById('form-modal-body').innerHTML = html;
}
function setFormAnswer(qId, optIdx, score) {
  formAnswers[qId] = {optIdx, score};
  // Highlight selected
  const label = document.querySelector('input[name="' + qId + '"]:checked')?.parentElement;
  document.querySelectorAll('input[name="' + qId + '"]').forEach(inp => {
    if(inp.parentElement) inp.parentElement.style.background = 'transparent';
  });
  if(label) label.style.background = 'var(--surface-3)';
  updateFormScore();
}
function updateSlider(qId, val, gewicht, color) {
  const el = document.getElementById('slider-val-' + qId);
  el.textContent = val;
  el.style.color = color;
  formAnswers[qId] = {score: parseFloat(val), rawScore: parseFloat(val)};
  updateFormScore();
}
// ── SCOREBEREKENING VRAGENLIJSTEN ──
// Officiële maxima van de volledige instrumenten. Wijkt onze itemset hiervan af,
// dan is het een ingekorte versie en mag de gepubliceerde afkapwaarde niet als
// oordeel getoond worden — dat zou een klinische uitspraak suggereren die de
// afgenomen vragenlijst niet kan dragen.
const FORM_OFFICIEEL_MAX = {visa_p:100, visa_a:100, ikdc:100, ndi:50, faam:100, wosi:2100, prwe:150, bctq:5};

// Bereikbaar bereik uit de vragen zelf berekenen; het gedeclareerde form.max
// klopte bij vier van de acht instrumenten niet (BCTQ 5 vs 95, FAAM 100 vs 68,
// VISA-A 100 vs 111), waardoor scores in de verkeerde interpretatieband vielen.
function formSchaal(form) {
  let min = 0, max = 0;
  (form.vragen || []).forEach(v => {
    if(v.type === 'slider') { min += v.min; max += v.max; }
    else if(v.type === 'keuze') {
      const sc = (v.opties || []).map(o => o.score).filter(s => typeof s === 'number');
      if(sc.length) { min += Math.min.apply(null, sc); max += Math.max.apply(null, sc); }
    }
  });
  return {min: min, max: max};
}

// Drempel uit de rts-tekst halen. parseInt() gaf hier NaN op alle acht de
// instrumenten omdat elke string met ≥, ≤ of < begint — waardoor het oordeel
// altijd "niet behaald" werd, ook bij een perfecte score.
function formDrempel(form) {
  const m = String(form.rts || '').match(/([≥≤<>])\s*([\d]+(?:[.,][\d]+)?)/);
  if(!m) return null;
  const waarde = parseFloat(m[2].replace(',', '.'));
  if(!isFinite(waarde)) return null;
  return {waarde: waarde, richting: (m[1] === '≥' || m[1] === '>') ? 'hoger' : 'lager'};
}

function formVolledigIngevuld(form) {
  return (form.vragen || []).every(v => formAnswers[v.id] !== undefined);
}

// Eén bron van waarheid voor score, schaal en oordeel.
function beoordeelFormulier() {
  const form = FORMS[activeForm];
  if(!form) return null;
  const schaal = formSchaal(form);
  const totaal = Object.values(formAnswers).reduce((s, a) => s + (typeof a.score === 'number' ? a.score : 0), 0);
  const volledig = formVolledigIngevuld(form);
  const drempel = formDrempel(form);
  const officieel = FORM_OFFICIEEL_MAX[activeForm];
  // Alleen oordelen als de vragenlijst volledig is afgenomen én onze itemset
  // overeenkomt met het volledige instrument waarvoor de afkapwaarde geldt.
  const ingekort = typeof officieel === 'number' && schaal.max !== officieel;
  const oordeelbaar = volledig && drempel !== null && !ingekort;
  const behaald = oordeelbaar
    ? (drempel.richting === 'hoger' ? totaal >= drempel.waarde : totaal <= drempel.waarde)
    : null;
  return {totaal: totaal, max: schaal.max, volledig: volledig, drempel: drempel,
          ingekort: ingekort, oordeelbaar: oordeelbaar, behaald: behaald, rts: form.rts};
}

function updateFormScore() {
  const b = beoordeelFormulier();
  if(!b) return;
  const scoreEl = document.getElementById('form-score-preview');
  if(!scoreEl) return;
  let tekst = 'Score: ' + b.totaal + ' / ' + b.max;
  let kleur = 'var(--ink-2)', rand = 'var(--line)';
  if(!b.volledig) {
    tekst += ' · nog niet volledig ingevuld';
  } else if(b.oordeelbaar) {
    tekst += b.behaald
      ? ' · op of boven de drempel (' + b.rts + ')'
      : ' · onder de drempel (' + b.rts + ')';
    kleur = b.behaald ? 'var(--ok)' : 'var(--warn)';
    rand = b.behaald ? 'var(--ok)44' : 'var(--warn)44';
  } else if(b.ingekort) {
    tekst += ' · verkorte versie, gepubliceerde afkapwaarde niet van toepassing';
  }
  scoreEl.style.color = kleur;
  scoreEl.style.borderColor = rand;
  scoreEl.textContent = tekst;
}

function calcFormScore() {
  const b = beoordeelFormulier();
  return b ? {total: b.totaal, max: b.max} : {total: 0, max: 0};
}
function saveAndPrintForm() {
  const form = FORMS[activeForm];
  if(!form) return;
  const {total, max} = calcFormScore();
  const datum = new Date().toLocaleDateString('nl-BE',{day:'2-digit',month:'2-digit',year:'numeric'});
  const pts = loadPatients();
  const pt = activeFormPatId ? pts.find(p => p.id === activeFormPatId) : null;
  // Save score to patient
  if(pt) {
    savePatientScore(pt.id, form.name, total, new Date().toISOString().slice(0,10));
  }
  // Build print HTML
  let html = '<h1>' + form.name + ' — ' + form.full + '</h1>';
  html += '<div class="pf-meta">' + (pt ? 'Patiënt: ' + pt.name + ' · ' : '') + datum + ' · Score: ' + total + '/' + max + '</div>';
  form.vragen.forEach((v, vi) => {
    const ans = formAnswers[v.id];
    let antwoord = '—';
    if(ans !== undefined) {
      if(v.type === 'keuze') antwoord = v.opties[ans.optIdx]?.label || '—';
      else if(v.type === 'slider') antwoord = ans.score + '/' + v.max;
    }
    html += '<div class="pf-ex"><div class="pf-ex-name">' + (vi+1) + '. ' + v.tekst + '</div><div class="pf-ex-params">' + antwoord + '</div></div>';
  });
  const b = beoordeelFormulier();
  const neutraal = !b || !b.oordeelbaar;
  const goed = b && b.behaald;
  html += '<div style="margin-top:12px;padding:8px 12px;border-radius:4px;background:' + (neutraal ? '#f1f5f9' : (goed ? '#dcfce7' : '#fef3c7')) + ';border:1px solid ' + (neutraal ? '#cbd5e1' : (goed ? '#86efac' : '#fcd34d')) + ';">';
  html += '<strong>Totaalscore: ' + total + '/' + max + '</strong>';
  if(b && !b.volledig) html += ' — niet volledig ingevuld, score onvolledig';
  else if(b && b.ingekort) html += ' — verkorte versie; de gepubliceerde afkapwaarde (' + esc(String(form.rts)) + ') geldt voor het volledige instrument en is hier niet van toepassing';
  else if(b && b.oordeelbaar) html += ' — ' + (goed ? 'op of boven' : 'onder') + ' de drempel van ' + esc(String(form.rts));
  html += '</div>';
  html += '<div class="pf-footer">KineProtocol · ' + datum + '</div>';
  closeForm();
  triggerPrint(html);
}



// ── EVAL FORM STATE ──
let activeEvalForm = null;
let activeEvalPatId = null;
let evalAnswers = {};

// ── EVAL FORM OPENEN ──
function openEvalForm(formId, patId) {
  const form = EVAL_FORMS[formId];
  if(!form) return;
  activeEvalForm = formId;
  activeEvalPatId = patId || null;
  evalAnswers = {};
  const pts = loadPatients();
  const pt = patId ? pts.find(p => p.id === patId) : null;
  const datum = new Date().toLocaleDateString('nl-BE',{day:'2-digit',month:'2-digit',year:'numeric'});
  document.getElementById('eval-modal-title').textContent = form.titel;
  renderEvalFormBody(form, pt, datum);
  document.getElementById('eval-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeEvalForm() {
  document.getElementById('eval-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function renderEvalFormBody(form, pt, datum) {
  const color = form.color;
  let html = '';
  // Header
  html += '<div style="background:' + color + '15;border:1px solid ' + color + '33;border-radius:10px;padding:12px 16px;margin-bottom:16px;">';
  html += '<div style="font-size:13px;font-weight:700;color:' + color + '">' + form.regio + '</div>';
  if(pt) html += '<div style="font-size:12px;color:var(--ink-2);font-variant-numeric:tabular-nums;margin-top:2px">Patiënt: <strong style="color:var(--ink)">' + pt.name + '</strong> · ' + datum + '</div>';
  else html += '<div style="font-size:12px;color:var(--ink-2);font-variant-numeric:tabular-nums;margin-top:2px">' + datum + '</div>';
  html += '</div>';
  // Sections
  form.secties.forEach(sectie => {
    html += '<div style="margin-bottom:18px;">';
    html += '<div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3);font-variant-numeric:tabular-nums;font-weight:700;margin-bottom:8px;padding-bottom:5px;border-bottom:1px solid var(--line)">' + sectie.titel + '</div>';
    sectie.velden.forEach(veld => {
      html += renderEvalVeld(veld, form.id);
    });
    html += '</div>';
  });
  document.getElementById('eval-modal-body').innerHTML = html;
}

function renderEvalVeld(veld, formId) {
  let html = '<div style="margin-bottom:10px;" id="evalveld-' + veld.id + '">';
  html += '<div style="font-size:12px;font-weight:600;color:var(--ink);margin-bottom:4px;">' + veld.label;
  if(veld.info) html += ' <span style="font-size:12px;color:var(--ink-2);font-weight:400;font-style:italic">— ' + veld.info + '</span>';
  if(veld.norm) html += ' <span style="font-size:12px;color:var(--ink-3);font-variant-numeric:tabular-nums;margin-left:4px">norm: ' + veld.norm + '</span>';
  html += '</div>';

  if(veld.type === 'pn') {
    // Positief / Negatief / Niet getest
    html += '<div style="display:flex;gap:6px;">';
    ['Negatief','Positief','Niet getest'].forEach(opt => {
      const bg = opt === 'Positief' ? 'rgba(239,68,68,.1)' : opt === 'Negatief' ? 'rgba(34,197,94,.1)' : 'var(--surface-2)';
      const bc = opt === 'Positief' ? 'rgba(239,68,68,.3)' : opt === 'Negatief' ? 'rgba(34,197,94,.3)' : 'var(--line)';
      const col = opt === 'Positief' ? 'var(--stop)' : opt === 'Negatief' ? 'var(--ok)' : 'var(--ink-2)';
      html += '<button onclick="setEvalAnswer(\'' + formId + '\',\'' + veld.id + '\',\'' + opt + '\')" id="evbtn-' + veld.id + '-' + opt.replace(/ /g,'_') + '" style="flex:1;padding:6px 4px;border-radius:6px;border:1px solid ' + bc + ';background:' + bg + ';color:' + col + ';font-size:12px;font-weight:600;cursor:pointer;transition:opacity .1s;">' + opt + '</button>';
    });
    html += '</div>';
  } else if(veld.type === 'pn_bevinding') {
    html += '<div style="display:flex;gap:6px;margin-bottom:5px;">';
    ['Negatief','Positief','Niet getest'].forEach(opt => {
      const bg = opt === 'Positief' ? 'rgba(239,68,68,.1)' : opt === 'Negatief' ? 'rgba(34,197,94,.1)' : 'var(--surface-2)';
      const bc = opt === 'Positief' ? 'rgba(239,68,68,.3)' : opt === 'Negatief' ? 'rgba(34,197,94,.3)' : 'var(--line)';
      const col = opt === 'Positief' ? 'var(--stop)' : opt === 'Negatief' ? 'var(--ok)' : 'var(--ink-2)';
      html += '<button onclick="setEvalAnswer(\'' + formId + '\',\'' + veld.id + '\',\'' + opt + '\')" id="evbtn-' + veld.id + '-' + opt.replace(/ /g,'_') + '" style="flex:1;padding:6px 4px;border-radius:6px;border:1px solid ' + bc + ';background:' + bg + ';color:' + col + ';font-size:12px;font-weight:600;cursor:pointer;">' + opt + '</button>';
    });
    html += '</div>';
    html += '<input type="text" id="evtxt-' + veld.id + '" placeholder="Bevinding / opmerking..." onchange="setEvalAnswerTxt(\'' + formId + '\',\'' + veld.id + '_bevinding\',this.value)" style="width:100%;background:var(--surface-2);border:1px solid var(--line);border-radius:6px;padding:5px 10px;color:var(--ink);font-size:16px;outline:none;">';
  } else if(veld.type === 'pn_graden') {
    html += '<div style="display:flex;gap:6px;margin-bottom:5px;">';
    ['Negatief','Positief','Niet getest'].forEach(opt => {
      const bg = opt === 'Positief' ? 'rgba(239,68,68,.1)' : opt === 'Negatief' ? 'rgba(34,197,94,.1)' : 'var(--surface-2)';
      const bc = opt === 'Positief' ? 'rgba(239,68,68,.3)' : opt === 'Negatief' ? 'rgba(34,197,94,.3)' : 'var(--line)';
      const col = opt === 'Positief' ? 'var(--stop)' : opt === 'Negatief' ? 'var(--ok)' : 'var(--ink-2)';
      html += '<button onclick="setEvalAnswer(\'' + formId + '\',\'' + veld.id + '\',\'' + opt + '\')" id="evbtn-' + veld.id + '-' + opt.replace(/ /g,'_') + '" style="flex:1;padding:6px 4px;border-radius:6px;border:1px solid ' + bc + ';background:' + bg + ';color:' + col + ';font-size:12px;font-weight:600;cursor:pointer;">' + opt + '</button>';
    });
    html += '</div>';
    html += '<input type="text" id="evtxt-' + veld.id + '" placeholder="° graden / details..." onchange="setEvalAnswerTxt(\'' + formId + '\',\'' + veld.id + '_detail\',this.value)" style="width:100%;background:var(--surface-2);border:1px solid var(--line);border-radius:6px;padding:5px 10px;color:var(--ink);font-size:16px;outline:none;">';
  } else if(veld.type === 'rom') {
    html += '<div style="display:flex;gap:8px;align-items:center;">';
    html += '<input type="number" min="0" max="360" placeholder="°" onchange="setEvalAnswerTxt(\'' + formId + '\',\'' + veld.id + '\',this.value+\'°\')" style="width:80px;background:var(--surface-2);border:1px solid var(--line);border-radius:6px;padding:5px 10px;color:var(--ink);font-variant-numeric:tabular-nums;font-size:16px;outline:none;">';
    html += '<span style="font-size:12px;color:var(--ink-2)">graden</span>';
    ['Pijnvrij','Pijn bij eindstand','Pijn in traject','Beperkt'].forEach(opt => {
      html += '<button onclick="setEvalAnswer(\'' + formId + '\',\'' + veld.id + '_kwal\',\'' + opt + '\')" id="evbtn-' + veld.id + '-' + opt.replace(/ /g,'_') + '" style="flex:1;padding:4px 6px;border-radius:6px;border:1px solid var(--line);background:var(--surface-2);color:var(--ink-2);font-size:12px;cursor:pointer;">' + opt + '</button>';
    });
    html += '</div>';
  } else if(veld.type === 'mrc') {
    html += '<div style="display:flex;gap:4px;">';
    ['0','1','2','3','4','5'].forEach(score => {
      const labels = {0:'0\nGeen',1:'1\nTrace',2:'2\nGrav',3:'3\nAnti-grav',4:'4\nWeerstand',5:'5\nNormaal'};
      html += '<button onclick="setEvalAnswer(\'' + formId + '\',\'' + veld.id + '\',\'' + score + '\')" id="evbtn-' + veld.id + '-' + score + '" style="flex:1;padding:4px 2px;border-radius:6px;border:1px solid var(--line);background:var(--surface-2);color:var(--ink-2);font-size:12px;cursor:pointer;font-variant-numeric:tabular-nums;line-height:1.2;white-space:pre;">' + labels[score] + '</button>';
    });
    html += '</div>';
  } else if(veld.type === 'reflex') {
    html += '<div style="display:flex;gap:6px;">';
    ['Normaal (++)','Versterkt (+++/++++)','Verminderd (+)','Afwezig (0)','Niet getest'].forEach(opt => {
      const key = opt.replace(/[^a-z0-9]/gi,'_');
      html += '<button onclick="setEvalAnswer(\'' + formId + '\',\'' + veld.id + '\',\'' + opt + '\')" id="evbtn-' + veld.id + '-' + key + '" style="flex:1;padding:5px 3px;border-radius:6px;border:1px solid var(--line);background:var(--surface-2);color:var(--ink-2);font-size:12px;cursor:pointer;">' + opt + '</button>';
    });
    html += '</div>';
  } else if(veld.type === 'keuze3') {
    html += '<div style="display:flex;flex-wrap:wrap;gap:5px;">';
    veld.opties.forEach(opt => {
      const key = opt.replace(/[^a-z0-9]/gi,'_');
      html += '<button onclick="setEvalAnswer(\'' + formId + '\',\'' + veld.id + '\',\'' + opt + '\')" id="evbtn-' + veld.id + '-' + key + '" style="padding:5px 10px;border-radius:6px;border:1px solid var(--line);background:var(--surface-2);color:var(--ink-2);font-size:12px;cursor:pointer;">' + opt + '</button>';
    });
    html += '</div>';
  } else if(veld.type === 'tekst') {
    html += '<input type="text" placeholder="' + (veld.placeholder||'') + '" onchange="setEvalAnswerTxt(\'' + formId + '\',\'' + veld.id + '\',this.value)" style="width:100%;background:var(--surface-2);border:1px solid var(--line);border-radius:6px;padding:7px 10px;color:var(--ink);font-size:16px;outline:none;">';
  } else if(veld.type === 'tekst_groot') {
    html += '<textarea placeholder="' + (veld.placeholder||'') + '" onchange="setEvalAnswerTxt(\'' + formId + '\',\'' + veld.id + '\',this.value)" style="width:100%;background:var(--surface-2);border:1px solid var(--line);border-radius:6px;padding:7px 10px;color:var(--ink);font-size:16px;outline:none;min-height:70px;resize:vertical;"></textarea>';
  }
  html += '</div>';
  return html;
}

function setEvalAnswer(formId, veldId, waarde) {
  evalAnswers[veldId] = waarde;
  // Visual feedback - highlight active button
  const prefix = 'evbtn-' + veldId + '-';
  document.querySelectorAll('[id^="' + prefix + '"]').forEach(btn => {
    const isActive = btn.id === prefix + waarde.replace(/ /g,'_').replace(/[^a-z0-9_]/gi,'_');
    btn.style.background = isActive ? (waarde==='Positief'?'rgba(239,68,68,.25)':waarde==='Negatief'?'rgba(34,197,94,.25)':'var(--surface-3)') : '';
    btn.style.color = isActive ? (waarde==='Positief'?'var(--stop)':waarde==='Negatief'?'var(--ok)':'var(--ink)') : '';
    btn.style.borderColor = isActive ? (waarde==='Positief'?'rgba(239,68,68,.5)':waarde==='Negatief'?'rgba(34,197,94,.5)':'var(--line-strong)') : '';
  });
}
function setEvalAnswerTxt(formId, veldId, waarde) {
  evalAnswers[veldId] = waarde;
}

function printEvalForm() {
  const form = EVAL_FORMS[activeEvalForm];
  if(!form) return;
  const pts = loadPatients();
  const pt = activeEvalPatId ? pts.find(p => p.id === activeEvalPatId) : null;
  const datum = new Date().toLocaleDateString('nl-BE',{day:'2-digit',month:'2-digit',year:'numeric'});
  let html = '<h1>' + form.titel + '</h1>';
  html += '<div class="pf-meta">Regio: ' + form.regio + (pt ? ' · Patiënt: ' + pt.name : '') + ' · ' + datum + '</div>';
  form.secties.forEach(sectie => {
    html += '<h2>' + sectie.titel + '</h2>';
    sectie.velden.forEach(veld => {
      const ans = evalAnswers[veld.id];
      const ansBev = evalAnswers[veld.id + '_bevinding'];
      const ansDetail = evalAnswers[veld.id + '_detail'];
      const ansKwal = evalAnswers[veld.id + '_kwal'];
      let antwoord = ans || '_______________';
      if(ansBev) antwoord += ' — ' + ansBev;
      if(ansDetail) antwoord += ' (' + ansDetail + '°)';
      if(ansKwal) antwoord += ' · ' + ansKwal;
      const kleur = ans === 'Positief' ? '#dc2626' : ans === 'Negatief' ? 'var(--ok)' : '#374151';
      html += '<div class="pf-ex" style="border-bottom:1px solid var(--line);padding:5px 0;">';
      html += '<div class="pf-ex-name" style="font-weight:600;font-size:12px;flex:1;">' + veld.label + '</div>';
      html += '<div style="font-size:12px;color:' + kleur + ';font-weight:' + (ans?'700':'400') + ';min-width:160px;text-align:right;">' + antwoord + '</div>';
      html += '</div>';
    });
  });
  html += '<div class="pf-footer">KineProtocol · Klinisch Evaluatieformulier · ' + datum + '</div>';
  closeEvalForm();
  triggerPrint(html);
}

function printBlankEvalForm(formId) {
  const form = EVAL_FORMS[formId];
  if(!form) return;
  const datum = new Date().toLocaleDateString('nl-BE',{day:'2-digit',month:'2-digit',year:'numeric'});
  let html = '<h1>' + form.titel + '</h1>';
  html += '<div class="pf-meta">Patiënt: _________________________ &nbsp;&nbsp; Datum: _________________ &nbsp;&nbsp; Kinesist: _________________</div>';
  form.secties.forEach(sectie => {
    html += '<h2>' + sectie.titel + '</h2>';
    sectie.velden.forEach(veld => {
      html += '<div class="pf-ex" style="border-bottom:1px solid var(--line);padding:5px 0;min-height:26px;">';
      html += '<div class="pf-ex-name" style="font-weight:600;font-size:12px;flex:1;">' + veld.label;
      if(veld.info) html += '<br><span style="font-weight:400;font-size:12px;color:#6b7280;font-style:italic">' + veld.info + '</span>';
      if(veld.norm) html += '<span style="font-weight:400;font-size:12px;color:#9ca3af;margin-left:6px">norm: ' + veld.norm + '</span>';
      html += '</div>';
      if(veld.type === 'pn' || veld.type === 'pn_bevinding' || veld.type === 'pn_graden') {
        html += '<div style="display:flex;gap:12px;align-items:center;font-size:12px;">';
        html += '<label style="display:flex;align-items:center;gap:4px;"><input type="checkbox"> Negatief</label>';
        html += '<label style="display:flex;align-items:center;gap:4px;"><input type="checkbox"> Positief</label>';
        html += '<label style="display:flex;align-items:center;gap:4px;"><input type="checkbox"> Niet getest</label>';
        html += '<span style="flex:1;border-bottom:1px solid var(--line-strong);margin-left:8px;">&nbsp;</span>';
        html += '</div>';
      } else if(veld.type === 'rom') {
        html += '<div style="display:flex;gap:8px;align-items:center;font-size:12px;">';
        html += '<span>_____° &nbsp;</span>';
        ['Pijnvrij','Pijn bij eindstand','Pijn in traject','Beperkt'].forEach(o => {
          html += '<label style="display:flex;align-items:center;gap:3px;"><input type="checkbox"> ' + o + '</label>';
        });
        html += '</div>';
      } else if(veld.type === 'mrc') {
        html += '<div style="display:flex;gap:8px;font-size:12px;">';
        ['0','1','2','3','4','5'].forEach(s => html += '<label><input type="checkbox"> ' + s + '</label>');
        html += '</div>';
      } else if(veld.type === 'reflex') {
        html += '<div style="font-size:12px;">0 &nbsp;/&nbsp; + &nbsp;/&nbsp; ++ &nbsp;/&nbsp; +++ &nbsp;/&nbsp; ++++ &nbsp; &nbsp;<span style="border-bottom:1px solid var(--line-strong)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>';
      } else if(veld.type === 'keuze3') {
        html += '<div style="display:flex;flex-wrap:wrap;gap:8px;font-size:12px;">';
        veld.opties.forEach(o => html += '<label style="display:flex;align-items:center;gap:3px;"><input type="checkbox"> ' + o + '</label>');
        html += '</div>';
      } else if(veld.type === 'tekst' || veld.type === 'tekst_groot') {
        const lines = veld.type === 'tekst_groot' ? 3 : 1;
        for(let i=0;i<lines;i++) html += '<div style="border-bottom:1px solid var(--line-strong);min-height:18px;margin-top:2px;">&nbsp;</div>';
      }
      html += '</div>';
    });
  });
  html += '<div class="pf-footer">KineProtocol · Klinisch Evaluatieformulier · ' + datum + '</div>';
  triggerPrint(html);
}

// ── OEFENBIBLIOTHEEK ──
let libGroupBy = 'regio';
let libCache = null;

// Gecureerde aliassen: varianten van dezelfde oefening bundelen (géén combo-oefeningen)
const LIB_ALIAS = {
  'belastingsmonitoring srpe':'belastingsmonitoring',
  'clamshell met weerstandsband':'clamshell',
  'clamshell & heupabductie zijlig':'clamshell',
  'continu hardlopen progressief':'continu hardlopen',
  'cryotherapie eerste dorsale compartiment':'cryotherapie',
  'cryotherapie na activiteit':'cryotherapie',
  'cryotherapie post-sessie':'cryotherapie',
  'diafragmatische ademhaling + houdingscorrectie':'diafragmatische ademhaling',
  'enkel-been balans op schuimmat / bosu':'enkel-been balans',
  'enkel-been balans op stabiel vlak':'enkel-been balans',
  'enkel-pompen & beencirkels':'enkel-pompen',
  'fietsen buiten':'fietsen',
  'fietsen progressief':'fietsen',
  'interval throwing program compleet':'interval throwing program',
  'interval throwing program stap 1':'interval throwing program',
  'ruglig knie-naar-borst stretch':'knie-naar-borst stretch',
  'kuitversterking bilateraal':'kuitversterking',
  'mini-squat bilateraal':'mini-squat',
  'nordic hamstring curl':'nordic hamstring',
  'nordic hamstring exercise':'nordic hamstring',
  'nordic hamstring onderhoud':'nordic hamstring',
  'onderhoudsprogramma bureauwerker':'onderhoudsprogramma',
  'onderhoudsprogramma rc':'onderhoudsprogramma',
  'overhead press met dumbbells':'overhead press',
  'pesglijden progressief':'pesglijden',
  'pincetgreep kracht & fijnmotoriek':'pincetgreep kracht',
  'pols arom flexie/extensie':'pols arom',
  'pols arom radiale & ulnaire deviatie':'pols arom',
  'prone er in 90/90 positie':'prone er',
  'prone y-t-w-l':'prone y/t/w',
  'prone y':'prone y/t/w',
  'serratus push-up plus':'push-up plus',
  'wall push-up plus':'push-up plus',
  'rhythmic stabilization 90/90° abductie':'rhythmic stabilization',
  'romanian deadlift licht':'romanian deadlift',
  'scapulaire retractie & depressie':'scapulaire retractie',
  'scapulaire retractie + depressie met elastiek':'scapulaire retractie',
  'scapulaire retractie isometrisch':'scapulaire retractie',
  'schouderstabilisatie in plankpositie':'schouderstabilisatie',
  'single leg heel raise test':'single leg heel raise',
  'single leg squat met gluteusactivatie':'single leg squat',
  'sportspecifieke training bovenste extremiteit':'sportspecifieke training',
  'step-up anterieur':'step-up',
  'transversus abdominis activatie':'transversus abdominis',
  'wandelen met progressie':'wandelen',
  'wandelen met tempoprogressie':'wandelen',
  'wandelen normaal gangpatroon':'wandelen',
  'wandelen op oneffen terrein':'wandelen',
  'wandelen progressief':'wandelen',
};

// Basisnaam voor variantengroepering: haakjes en specificaties na —/–/: strippen, dan aliassen toepassen
function libBaseKey(name) {
  const k = name.toLowerCase()
    .replace(/\(.*?\)/g, ' ')
    .replace(/[—–:].*$/, ' ')
    .replace(/\s+/g, ' ').trim();
  return LIB_ALIAS[k] || k;
}

function buildExerciseLibrary() {
  if(libCache) return libCache;
  const byBase = new Map();
  Object.values(protocols).forEach(p => {
    const regio = REGIO_MAP[p.id] || 'Overig';
    p.phases.forEach(ph => {
      (ph.exercises || []).forEach(ex => {
        const key = libBaseKey(ex.name) || ex.name.toLowerCase();
        if(!byBase.has(key)) byBase.set(key, {key, name: ex.name, variants: [], regios: new Set(), spierMap: new Map(), cats: new Set()});
        const g = byBase.get(key);
        // Kortste variantnaam als weergavenaam (meestal de basisvorm)
        if(ex.name.length < g.name.length) g.name = ex.name;
        // Eén variant per naam+protocol (zelfde oefening in meerdere fasen telt niet dubbel)
        if(!g.variants.find(v => v.name === ex.name && v.protoId === p.id)) {
          g.variants.push({
            name: ex.name, params: ex.params || [], note: ex.note || '', cat: ex.cat || '',
            protoId: p.id, protoTitle: p.title, protoColor: p.color, phaseLabel: ph.label,
          });
        }
        g.regios.add(regio);
        if(ex.cat) g.cats.add(ex.cat);
        const nameLow = ex.name.toLowerCase(), noteLow = (ex.note || '').toLowerCase();
        SPIER_KEYWORDS
          .filter(s => s.kw.some(kw => nameLow.includes(kw.toLowerCase()) || noteLow.includes(kw.toLowerCase())))
          .forEach(s => g.spierMap.set(s.spier, s.color));
      });
    });
  });
  libCache = [...byBase.values()].map(g => ({
    key: g.key,
    name: g.name,
    variants: g.variants,
    regios: [...g.regios],
    cats: [...g.cats],
    protoIds: [...new Set(g.variants.map(v => v.protoId))],
    spieren: g.spierMap.size ? [...g.spierMap].map(([spier, color]) => ({spier, color})) : [{spier:'Overig', color:'var(--ink-3)'}],
  })).sort((a, b) => a.name.localeCompare(b.name, 'nl'));
  const badge = document.getElementById('lib-count-badge');
  if(badge) badge.textContent = libCache.length + ' oef.';
  return libCache;
}

let libCatFilter = '';
const LIB_CATS = [['','Alle'],['kracht',icon('kracht') + ' Kracht'],['mobiliteit',icon('mobiliteit') + ' Mobiliteit'],['stabiliteit',icon('stabiliteit') + ' Stabiliteit'],['cardio',icon('cardio') + ' Cardio'],['neuromusculair',icon('neuro') + ' Neuromusculair']];

function renderLibCatChips() {
  const el = document.getElementById('lib-cat-chips');
  if(!el) return;
  el.innerHTML = LIB_CATS.map(([cat, label]) => {
    const active = libCatFilter === cat;
    return `<button onclick="setLibCat('${cat}')" style="padding:4px 12px;border-radius:16px;font-size:12px;cursor:pointer;border:1px solid ${active ? 'var(--line-strong)' : 'var(--line)'};background:${active ? 'var(--surface-3)' : 'var(--surface-2)'};color:${active ? 'var(--ink)' : 'var(--ink-2)'};font-weight:${active ? 600 : 400};">${label}</button>`;
  }).join('');
}
function setLibCat(cat) {
  libCatFilter = cat;
  renderLibCatChips();
  renderLibrary(document.getElementById('lib-search')?.value || '');
}

function showLibrary() {
  hideAllScreens();
  const el = document.getElementById('screen-library');
  el.style.display = 'flex';
  setNav('library');
  buildExerciseLibrary();
  renderLibCatChips();
  renderLibrary('');
}

function setLibGroup(mode) {
  libGroupBy = mode;
  document.getElementById('lib-btn-regio').classList.toggle('active', mode === 'regio');
  document.getElementById('lib-btn-spier').classList.toggle('active', mode === 'spier');
  renderLibrary(document.getElementById('lib-search')?.value || '');
}

function filterLibrary(query) {
  clearTimeout(filterLibrary._t);
  filterLibrary._t = setTimeout(() => renderLibrary(query), 200);
}

function renderLibrary(query) {
  const body = document.getElementById('lib-body');
  if(!body) return;
  const lib = buildExerciseLibrary();
  const q = (query || '').toLowerCase().trim();
  let filtered = q ? lib.filter(ex =>
    ex.name.toLowerCase().includes(q) ||
    ex.regios.some(r => r.toLowerCase().includes(q)) ||
    ex.spieren.some(s => s.spier.toLowerCase().includes(q)) ||
    ex.variants.some(v => v.name.toLowerCase().includes(q) || v.protoTitle.toLowerCase().includes(q) || (v.note && v.note.toLowerCase().includes(q)))
  ) : lib;
  if(libCatFilter) filtered = filtered.filter(ex => ex.cats.includes(libCatFilter));

  // Group
  const groups = {};
  filtered.forEach(ex => {
    const keys = libGroupBy === 'spier'
      ? ex.spieren.map(s => s.spier)
      : ex.regios;
    keys.forEach(key => {
      if(!groups[key]) groups[key] = {items:[], color: libGroupBy === 'spier'
        ? ex.spieren.find(s => s.spier === key)?.color || 'var(--ink-3)'
        : 'var(--ink-2)'};
      // Avoid duplicates within group
      if(!groups[key].items.find(e => e.key === ex.key)) groups[key].items.push(ex);
    });
  });

  // Sort group keys
  const regio_order = ['Knie & Heup','Lumbaal & Cervicaal','Schouder & Arm','Enkel & Voet','Pols & Hand','Overig'];
  const spier_order = SPIER_KEYWORDS.map(s => s.spier).concat(['Overig']);
  const order = libGroupBy === 'spier' ? spier_order : regio_order;
  const sortedKeys = Object.keys(groups).sort((a, b) => {
    const ia = order.indexOf(a), ib = order.indexOf(b);
    return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib);
  });

  if(!sortedKeys.length) {
    body.innerHTML = `<div style="color:var(--ink-2);font-size:13px;padding:24px 0;text-align:center;">Geen oefeningen gevonden voor "${q}"</div>`;
    return;
  }

  const CAT_ICONS = {kracht:icon('kracht') + '',mobiliteit:icon('mobiliteit') + '',stabiliteit:icon('stabiliteit') + '',neuro:icon('neuro') + '',cardio:icon('cardio') + '',manueel:icon('hand') + '',test:icon('meetlat') + ''};

  body.innerHTML = sortedKeys.map((key, gi) => {
    const g = groups[key];
    const isOpen = !!q || sortedKeys.length === 1; // dicht tenzij er gezocht wordt of er maar één groep is
    const exHtml = g.items.map(ex => {
      const first = ex.variants[0];
      const catIcons = ex.cats.map(c => CAT_ICONS[c] || '').filter(Boolean).join('');
      const badges = ex.spieren.slice(0,2).map(s => `<span class="lib-ex-badge" style="background:${s.color}15;border-color:${s.color}33;color:${s.color};">${s.spier}</span>`).join('');
      const countBadge = ex.variants.length > 1
        ? `<span class="lib-ex-varcount">${ex.variants.length} varianten · ${ex.protoIds.length} protocollen</span>`
        : `<span class="lib-ex-varcount">${first.protoId.toUpperCase()} · ${first.phaseLabel}</span>`;
      const imgEntry = exerciseImages[ex.name] || exerciseImages[first.name];
      const imgHtml = imgEntry ? `<img class="lib-ex-img" src="${imgEntry.url}" alt="${imgEntry.alt || ex.name}" loading="lazy" onerror="this.style.display='none'">` : '';
      const variantsHtml = ex.variants.map(v => {
        const paramsStr = v.params.slice(0,4).map(p => `${p[0]}: ${p[1]}`).join(' · ');
        return `<div class="lib-var">
          <div class="lib-var-head">
            <span class="lib-ex-badge" style="background:${v.protoColor}15;border-color:${v.protoColor}33;color:${v.protoColor};">${v.protoId.toUpperCase()}</span>
            <span>${v.name}</span>
            <span style="font-size:12px;color:var(--ink-3);font-variant-numeric:tabular-nums">${v.phaseLabel}</span>
          </div>
          ${paramsStr ? `<div class="lib-var-params">${paramsStr}</div>` : ''}
          ${v.note ? `<div class="lib-var-note">${v.note}</div>` : ''}
        </div>`;
      }).join('');
      return `<div class="lib-ex" onclick="this.classList.toggle('expanded')">
        <div class="lib-ex-dot" style="background:${first.protoColor}"></div>
        <div class="lib-ex-main">
          <div class="lib-ex-name" style="display:flex;align-items:center;gap:7px;flex-wrap:wrap;">${ex.name} ${catIcons ? `<span style="font-size:12px;opacity:.6">${catIcons}</span>` : ''} ${countBadge}</div>
          <div class="lib-ex-badges">${badges}</div>
          ${imgHtml}
          <div class="lib-ex-variants">${variantsHtml}</div>
        </div>
      </div>`;
    }).join('');

    return `<div class="lib-group">
      <div class="lib-group-head" onclick="toggleLibGroup(${gi})">
        <div class="lib-group-dot" style="background:${g.color}"></div>
        <div class="lib-group-name">${key}</div>
        <div class="lib-group-count">${g.items.length} oefeningen</div>
        <div class="lib-group-arrow ${isOpen?'open':''}" id="lib-arr-${gi}">${icon('video')}</div>
      </div>
      <div class="lib-group-body ${isOpen?'open':''}" id="lib-grp-${gi}">${exHtml}</div>
    </div>`;
  }).join('');
}

function toggleLibGroup(gi) {
  const body = document.getElementById('lib-grp-' + gi);
  const arrow = document.getElementById('lib-arr-' + gi);
  if(!body) return;
  const open = body.classList.toggle('open');
  if(arrow) arrow.classList.toggle('open', open);
}

// ── EVALUATIEFORMULIEREN SCHERM ──
function showEvalFormsScreen() {
  hideAllScreens();
  document.getElementById('screen-eval-forms').style.display = '';
  setNav('eval-forms');
  renderEvalFormsScreen();
}
function renderEvalFormsScreen() {
  const color_map = {nek:'#60a5fa', lage_rug:'#34d399', knie:'#22d3ee', schouder:'#f43f5e', bekken:'var(--accent)'};
  let html = '';
  Object.values(EVAL_FORMS).forEach(form => {
    const c = form.color;
    const telVelden = form.secties.reduce((s,sec) => s + sec.velden.length, 0);
    const telTesten = form.secties.find(s => s.id === 's_ortho')?.velden.length || 0;
    html += '<div style="background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:16px;margin-bottom:12px;">';
    html += '<div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;">';
    html += '<div>';
    html += '<div style="font-weight:600;font-size:17px;font-weight:400;">' + form.titel + '</div>';
    html += '<div style="font-size:12px;color:var(--ink-2);font-variant-numeric:tabular-nums;margin-top:2px">' + form.secties.length + ' secties · ' + telVelden + ' velden · ' + telTesten + ' testen</div>';
    html += '</div>';
    html += '<div style="font-size:12px;padding:3px 10px;border-radius:10px;background:' + c + '15;color:' + c + ';border:1px solid ' + c + '33;font-variant-numeric:tabular-nums;font-weight:600;">' + form.regio + '</div>';
    html += '</div>';
    html += '<div style="display:flex;gap:8px;flex-wrap:wrap;">';
    html += '<button onclick="openEvalForm(\'' + form.id + '\',null)" style="flex:1;min-width:140px;padding:8px 14px;background:' + c + '18;border:1px solid ' + c + '33;color:' + c + ';border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;">' + icon('fiche') + ' Digitaal invullen</button>';
    html += '<button onclick="printBlankEvalForm(\'' + form.id + '\')" style="flex:1;min-width:140px;padding:8px 14px;background:var(--surface-2);border:1px solid var(--line);color:var(--ink-2);border-radius:6px;font-size:12px;cursor:pointer;"'+icon('print')+' Leeg afdrukken</button>';
    html += '</div></div>';
  });
  document.getElementById('eval-forms-list').innerHTML = html;
}


// ── ESC closes all modals ──
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') { closeYT(); closeRF(); closeFiche(); closePatNew(); closePatLink(); closeBeslisboom(); closeForm(); closeEvalForm(); }
});

// ── RENDER PHASE ──
function renderPhase(i) {
  const ph = currentProto.phases[i];
  let html = '';
  // Evidence standaard geklemd op 2 regels; klik om uit te vouwen
  html += `<div class="ev-box clamp" onclick="this.classList.toggle('expanded')"><div class="ev-label">Evidence-basis</div><div class="ev-text">${ph.evidence}</div><div class="ev-hint"> lees volledige evidence</div></div>`;
  html += `<div class="goals-box"><div class="goals-label">Doelstellingen — ${ph.title}</div><ul class="glist">${ph.goals.map(g=>`<li>${g}</li>`).join('')}</ul></div>`;
  if(ph.exercises?.length) {
    html += `<div class="slabel">Oefenprogramma</div><div class="ex-grid">`;
    ph.exercises.forEach(ex => {
      const cat = ex.cat ? CAT[ex.cat] : null;
      const hasMore = !!(ex.note || ex.yt);
      // Compacte kaart: naam + dosering zichtbaar, toelichting/video achter een klik
      html += `<div class="ex-card${hasMore ? ' compact" onclick="this.classList.toggle(\'expanded\')"' : '"'}><div class="ex-header"><div class="ex-name">${ex.name}</div>`;
      if(cat) html += `<span class="ex-cat" style="background:${cat.color}22;color:${cat.color};border-color:${cat.color}44">${cat.icon} ${cat.label}</span>`;
      html += `</div>`;
      if(ex.params?.length) html += `<div class="ex-params">${ex.params.map(([k,v])=>`<div class="ep">${k}: <span>${v}</span></div>`).join('')}</div>`;
      if(ex.note) html += `<div class="ex-note">${ex.note}</div>`;
      if(ex.yt) html += `<button class="yt-btn" onclick="event.stopPropagation();openYT('${ex.yt}','${ex.name.replace(/'/g,"'")}')">${icon('video')} Bekijk video</button>`;
      if(hasMore) html += `<div class="ex-more"> meer info${ex.yt ? ' · video' : ''}</div>`;
      html += `</div>`;
    });
    html += `</div>`;
  }
  if(ph.criteria_go?.length || ph.criteria_stop?.length) {
    html += `<div class="slabel">Doorstroomcriteria</div><div class="criteria-grid">`;
    if(ph.criteria_go?.length) html += `<div class="cbox go"><div class="ctitle go">Vereist ${icon('check')}</div><ul class="clist go">${ph.criteria_go.map(c=>`<li>${c}</li>`).join('')}</ul></div>`;
    if(ph.criteria_stop?.length) html += `<div class="cbox stop"><div class="ctitle stop">Vertraag ${icon('let-op')}</div><ul class="clist stop">${ph.criteria_stop.map(c=>`<li>${c}</li>`).join('')}</ul></div>`;
    html += `</div>`;
  }
  if(ph.redflags?.length) html += `<div class="rf-box"><div class="rf-label">Rode vlaggen</div><ul class="rf-list">${ph.redflags.map(r=>`<li>${r}</li>`).join('')}</ul></div>`;
  document.getElementById('proto-body').innerHTML = html;
}

// ── SEARCH ──
let _zoekTimer = null;
// Wacht kort met zoeken tot het typen stilvalt; anders scant elke toetsaanslag
// de volledige protocoldata.
function handleSearch(q) {
  clearTimeout(_zoekTimer);
  if(!q.trim()) return voerZoekopdrachtUit(q);
  _zoekTimer = setTimeout(() => voerZoekopdrachtUit(q), 180);
}
function voerZoekopdrachtUit(q) {
  if(!q.trim()) {
    document.getElementById('screen-search').style.display = 'none';
    if(currentProto) document.getElementById('screen-proto').style.display = 'flex';
    else document.getElementById('screen-home').style.display = '';
    return;
  }
  hideAllScreens();
  document.getElementById('screen-search').style.display = '';
  const ql = q.toLowerCase();
  const strip = s => (s || '').replace(/<[^>]*>/g, '').replace(/&#39;/g, '’').replace(/&amp;/g, '&');
  // Fragment rond de eerste match, met wat context ervoor en erna
  const excerpt = (txt, max) => {
    const i = txt.toLowerCase().indexOf(ql);
    if(i < 0) return txt.substring(0, max) + (txt.length > max ? '…' : '');
    const start = Math.max(0, i - 50);
    let s = (start > 0 ? '…' : '') + txt.substring(start, start + max);
    if(start + max < txt.length) s += '…';
    return s;
  };

  const protoRes = [], condRes = [], mtRes = [], detailRes = [], patRes = [];
  Object.values(protocols).forEach(p => {
    const info = NAV_INFO[p.id] || {};
    const protoHay = [p.title, p.subtitle || '', strip(info.naam || ''), info.badge || ''].join(' ').toLowerCase();
    if(protoHay.includes(ql)) protoRes.push(p);
    const b = BESCHRIJVING[p.id];
    if(b) {
      const kt = strip(b.kenmerken), ot = strip(b.oorzaken);
      if(kt.toLowerCase().includes(ql)) condRes.push({p, bron: 'Kenmerken', snippet: excerpt(kt, 140)});
      else if(ot.toLowerCase().includes(ql)) condRes.push({p, bron: 'Oorzaken', snippet: excerpt(ot, 140)});
    }
    const m = MANUEEL[p.id];
    if(m) {
      (m.technieken || []).forEach(t => {
        const hay = [t.naam, t.doel || '', t.uitvoering || ''].join(' ');
        if(strip(hay).toLowerCase().includes(ql)) mtRes.push({p, naam: t.naam, fase: t.fase || '', doel: strip(t.doel || '')});
      });
      if(!mtRes.some(r => r.p.id === p.id) && strip(m.intro || '').toLowerCase().includes(ql))
        mtRes.push({p, naam: 'Rol van manuele therapie', fase: '', doel: excerpt(strip(m.intro), 140)});
    }
    p.phases.forEach((ph, pi) => {
      ph.exercises.forEach(ex => {
        if([ex.name, ex.note || ''].join(' ').toLowerCase().includes(ql))
          detailRes.push({p, ph, pi, match: ex.name, type: 'Oefening', detail: ex.note || ''});
      });
      ph.goals.forEach(g => {
        if(g.toLowerCase().includes(ql)) detailRes.push({p, ph, pi, match: g, type: 'Doel', detail: ''});
      });
      (ph.criteria_go || []).forEach(c => {
        if(strip(c).toLowerCase().includes(ql)) detailRes.push({p, ph, pi, match: strip(c), type: 'Criterium', detail: ''});
      });
    });
  });
  if(typeof loadPatients === 'function') {
    loadPatients().forEach(pt => { if((pt.name || '').toLowerCase().includes(ql)) patRes.push(pt); });
  }

  const el = document.getElementById('search-results');
  const total = protoRes.length + condRes.length + mtRes.length + detailRes.length + patRes.length;
  if(!total) { el.innerHTML = `<div class="no-results">Geen resultaten voor "<strong style="color:var(--ink)">${esc(q)}</strong>"</div>`; return; }

  const card = (onclick, inner) => `<div onclick="${onclick}" style="background:var(--surface);border:1px solid var(--line);border-radius:6px;padding:12px 14px;margin-bottom:8px;cursor:pointer;" onmouseover="this.style.borderColor='var(--line-strong)'" onmouseout="this.style.borderColor='var(--line)'">${inner}</div>`;
  const groupLabel = t => `<div class="slabel" style="margin:14px 0 8px;">${t}</div>`;
  let html = '';

  if(protoRes.length) {
    html += groupLabel('Protocollen');
    html += protoRes.map(p => card(`showProto('${p.id}')`, `
      <div style="display:flex;align-items:center;gap:8px;">
        <div style="width:9px;height:9px;border-radius:50%;background:${p.color};flex-shrink:0"></div>
        <span style="font-size:13px;font-weight:600">${p.title}</span>
        <span style="font-size:12px;color:${p.color};background:${hexToRgba(p.color,.1)};padding:1px 7px;border-radius:10px;font-variant-numeric:tabular-nums">${(NAV_INFO[p.id]||{}).badge || p.id.toUpperCase()}</span>
      </div>
      <div style="font-size:12px;color:var(--ink-2);margin-top:4px">${p.subtitle || ''}</div>`)).join('');
  }
  if(patRes.length) {
    html += groupLabel('Patiënten');
    html += patRes.map(pt => card(`showPatientDetail('${pt.id}')`, `
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="font-size:13px;">${icon('persoon')}</span><span style="font-size:13px;font-weight:600">${esc(pt.name)}</span>
        <span style="font-size:12px;color:var(--ink-2)">${(protocols[pt.protoId]||{}).title || ''}</span>
      </div>`)).join('');
  }
  if(condRes.length) {
    html += groupLabel('Aandoeningen');
    html += condRes.map(r => card(`showProto('${r.p.id}');showBeschrijving('${r.p.id}')`, `
      <div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;">
        <div style="width:7px;height:7px;border-radius:50%;background:${r.p.color};flex-shrink:0"></div>
        <span style="font-size:12px;font-weight:600">${r.p.title}</span>
        <span style="font-size:12px;color:var(--ink-3);font-variant-numeric:tabular-nums">${icon('stethoscoop')} ${r.bron}</span>
      </div>
      <div style="font-size:12px;color:var(--ink-2);line-height:1.5">${esc(r.snippet)}</div>`)).join('');
  }
  if(mtRes.length) {
    html += groupLabel('Manuele therapie');
    html += mtRes.slice(0, 12).map(r => card(`showProto('${r.p.id}');showManueel('${r.p.id}')`, `
      <div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;flex-wrap:wrap;">
        <div style="width:7px;height:7px;border-radius:50%;background:${r.p.color};flex-shrink:0"></div>
        <span style="font-size:12px;font-weight:600">${r.p.title}</span>
        <span style="font-size:12px;color:var(--ink-3);font-variant-numeric:tabular-nums">${icon('hand')} ${r.fase || 'Techniek'}</span>
      </div>
      <div style="font-size:13px">${r.naam}</div>
      ${r.doel ? `<div style="font-size:12px;color:var(--ink-2);margin-top:3px">${esc(r.doel.substring(0,120))}${r.doel.length>120?'…':''}</div>` : ''}`)).join('');
  }
  if(detailRes.length) {
    html += groupLabel(`In protocollen (${detailRes.length})`);
    html += detailRes.slice(0, 40).map(r => card(`showProto('${r.p.id}');showPhase(${r.pi})`, `
      <div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;">
        <div style="width:7px;height:7px;border-radius:50%;background:${r.p.color};flex-shrink:0"></div>
        <span style="font-size:12px;font-weight:600">${r.p.title}</span>
        <span style="font-size:12px;color:var(--ink-2);font-variant-numeric:tabular-nums;background:var(--surface-2);padding:1px 6px;border-radius:4px">${r.ph.label}</span>
        <span style="font-size:12px;color:var(--ink-3);font-variant-numeric:tabular-nums">${r.type}</span>
      </div>
      <div style="font-size:13px">${r.match}</div>
      ${r.detail ? `<div style="font-size:12px;color:var(--ink-2);margin-top:3px">${r.detail.substring(0,110)}${r.detail.length>110?'…':''}</div>` : ''}`)).join('');
    if(detailRes.length > 40) html += `<div style="font-size:12px;color:var(--ink-3);text-align:center;padding:6px;">${detailRes.length - 40} resultaten verborgen — verfijn je zoekopdracht</div>`;
  }
  el.innerHTML = html;
}

loadExerciseImages();

// ── SERVICE WORKER ──

let swRegistratie = null;

if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => { swRegistratie = reg; reg.update().catch(()=>{}); })
      .catch(()=>{});
  });
  // Actief op updates controleren zodra de app weer op de voorgrond komt.
  // Zonder dit checkt de browser sw.js soms pas na uren, waardoor een nieuwe
  // versie lang onopgemerkt blijft op een geïnstalleerde PWA.
  document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible' && swRegistratie) swRegistratie.update().catch(()=>{});
  });
  navigator.serviceWorker.addEventListener('message', e => {
    if(e.data && e.data.type === 'SW_UPDATED') window.location.reload();
  });
}

// Detecteert een half bijgewerkte installatie (app.js nieuwer dan protocols.js).
// Herstelt zichzelf eenmalig; lukt dat niet, dan verschijnt een duidelijke melding
// in plaats van stilzwijgend ontbrekende onderdelen.
function controleerDataConsistentie() {
  const ontbreekt = [];
  if(typeof MANUEEL === 'undefined' || !Object.keys(MANUEEL).length) ontbreekt.push('manuele therapie');
  if(typeof BESCHRIJVING === 'undefined' || !Object.keys(BESCHRIJVING).length) ontbreekt.push('aandoeningen');
  if(!ontbreekt.length) { sessionStorage.removeItem('kp_herstelpoging'); return; }

  // Nooit automatisch de cache wissen: als de app hier komt is de cache al
  // onvolledig, en zonder netwerk maakt wissen de installatie onbruikbaar.
  // De gebruiker beslist, met de knop hieronder.
  const balk = document.createElement('div');
  balk.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:10000;background:var(--warn);color:#fff;padding:10px 14px;font-size:12px;display:flex;gap:10px;align-items:center;justify-content:center;flex-wrap:wrap;';
  balk.innerHTML = '<span>App-bestanden zijn niet in sync (' + ontbreekt.join(' en ') + ' ontbreken). Sluit de app volledig af en open opnieuw met internet.</span>'
    + '<button onclick="forceerUpdate()" style="background:#fff;color:var(--warn);border:none;padding:4px 12px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;">' + icon('ververs') + ' Opnieuw proberen</button>';
  document.body.appendChild(balk);
}

// Handmatige noodrem: forceert een controle en herlaadt met cache-omzeiling.
async function forceerUpdate() {
  // Zonder netwerk niets wissen: de cache is dan het enige wat de app nog heeft.
  if(navigator.onLine === false) {
    alert('Geen internetverbinding. Verbind eerst met internet en probeer opnieuw — de app blijft intussen offline werken.');
    return;
  }
  try {
    // Eerst de nieuwe versie binnenhalen, pas daarna opruimen. Wissen vóór het
    // ophalen liet de app zonder bestanden achter als het netwerk halverwege wegviel.
    if(swRegistratie) {
      await swRegistratie.update();
      if(swRegistratie.installing || swRegistratie.waiting) {
        await new Promise(res => {
          const sw = swRegistratie.installing || swRegistratie.waiting;
          if(!sw) return res();
          sw.addEventListener('statechange', () => { if(sw.state === 'activated') res(); });
          setTimeout(res, 8000);
        });
      }
    }
    // Alleen caches van ándere versies opruimen; de actuele blijft intact.
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== 'kineprotocol-v' + APP_VERSION).map(k => caches.delete(k)));
  } catch(e) {}
  window.location.replace(window.location.pathname + '?v=' + APP_VERSION);
}

// ── SWIPE NAVIGATIE ──
let swipeStartX = 0;
let swipeStartY = 0;
let swipeStartTime = 0;
let isSwiping = false;

function initSwipe() {
  const body = document.getElementById('proto-body');
  if(!body) return;

  body.addEventListener('touchstart', e => {
    swipeStartX = e.touches[0].clientX;
    swipeStartY = e.touches[0].clientY;
    swipeStartTime = Date.now();
    isSwiping = true;
  }, {passive: true});

  body.addEventListener('touchmove', e => {
    if(!isSwiping) return;
    const dx = e.touches[0].clientX - swipeStartX;
    const dy = e.touches[0].clientY - swipeStartY;
    // Als verticaal scrollen domineert, annuleer swipe
    if(Math.abs(dy) > Math.abs(dx) * 1.5) isSwiping = false;
  }, {passive: true});

  body.addEventListener('touchend', e => {
    if(!isSwiping || !currentProto) { isSwiping = false; return; }
    const dx = e.changedTouches[0].clientX - swipeStartX;
    const dy = e.changedTouches[0].clientY - swipeStartY;
    const dt = Date.now() - swipeStartTime;
    // Vereisten: min 60px horizontaal, max 120px verticaal, max 400ms
    if(Math.abs(dx) < 60 || Math.abs(dy) > 120 || dt > 400) { isSwiping = false; return; }
    const totalTabs = currentProto.phases.length;
    if(dx < 0) {
      // Swipe links = volgende fase
      if(currentPhaseIndex < totalTabs - 1) {
        showPhaseSwipe(currentPhaseIndex + 1, 'left');
      }
    } else {
      // Swipe rechts = vorige fase
      if(currentPhaseIndex > 0) {
        showPhaseSwipe(currentPhaseIndex - 1, 'right');
      }
    }
    isSwiping = false;
  }, {passive: true});
}

function showPhaseSwipe(i, direction) {
  const body = document.getElementById('proto-body');
  if(!body) { showPhase(i); return; }
  // Slide animatie
  const outClass = direction === 'left' ? 'slide-out-left' : 'slide-out-right';
  const inClass  = direction === 'left' ? 'slide-in-right' : 'slide-in-left';
  body.classList.add(outClass);
  setTimeout(() => {
    body.classList.remove(outClass);
    showPhase(i);
    body.classList.add(inClass);
    setTimeout(() => body.classList.remove(inClass), 250);
  }, 180);
}

// Track huidige fase index voor swipe
// showPhase houdt currentPhaseIndex nu zelf bij; de vroegere monkeypatch is vervallen.

// ── FAVORIETEN ──
function getFavs() { return JSON.parse(localStorage.getItem('kp_favs') || '[]').filter(id => protocols[id]); }
function toggleFav(id) {
  id = id || (currentProto && currentProto.id);
  if(!id) return;
  const favs = getFavs();
  const i = favs.indexOf(id);
  i >= 0 ? favs.splice(i, 1) : favs.push(id);
  localStorage.setItem('kp_favs', JSON.stringify(favs));
  buildNav();
  updateFavBtn(id);
  if(currentProto) setNav(currentProto.id);
}
function updateFavBtn(id) {
  const btn = document.getElementById('fav-btn');
  if(!btn) return;
  const isFav = getFavs().includes(id);
  btn.innerHTML = icon('ster', isFav ? 'is-on' : '') + ' Favoriet';
  btn.style.color = isFav ? 'var(--accent)' : '';
}

// ── NAVIGATIE GENEREREN (sidebar + bottom sheet) ──
// Bron: protocols (title/color/phases), REGIO_MAP (groepering), NAV_INFO (badge/duur).
// Een nieuw protocol is dus zichtbaar zodra het in protocols.js + REGIO_MAP staat.
function hexToRgba(hex, a) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex || '');
  if(!m) return 'rgba(255,255,255,' + a + ')';
  return 'rgba(' + parseInt(m[1],16) + ',' + parseInt(m[2],16) + ',' + parseInt(m[3],16) + ',' + a + ')';
}

function buildNav() {
  const sections = [];
  const byRegio = {};
  const add = (id, regio) => {
    if(!byRegio[regio]) { byRegio[regio] = []; sections.push(regio); }
    byRegio[regio].push(id);
  };
  // Favorieten als vastgepinde eerste sectie (altijd open)
  const favs = getFavs();
  favs.forEach(id => add(id, 'Favorieten'));
  Object.keys(REGIO_MAP).forEach(id => { if(protocols[id]) add(id, REGIO_MAP[id]); });
  // Vangnet: protocollen zonder REGIO_MAP-entry komen onder 'Overig' i.p.v. onzichtbaar te blijven
  Object.keys(protocols).forEach(id => { if(!REGIO_MAP[id]) add(id, 'Overig'); });

  // Secties zijn inklapbaar; open-status wordt onthouden en gedeeld tussen sidebar en bottom sheet
  const openSecs = new Set(JSON.parse(localStorage.getItem('kp_nav_open') || '[]'));
  let sideHtml = '', bsHtml = '';
  sections.forEach(sec => {
    const isFavSec = sec === 'Favorieten';
    const secLabel = sec.replace(/&/g, '&amp;');
    const isOpen = isFavSec || openSecs.has(sec);
    let itemsHtml = '', bsItemsHtml = '';
    byRegio[sec].forEach(id => {
      const p = protocols[id];
      const info = NAV_INFO[id] || {};
      const naam = info.naam || p.title;
      const badge = info.badge || id.toUpperCase();
      const sub = p.phases.length + ' fasen' + (info.duur ? ' · ' + info.duur : '');
      const bg = hexToRgba(p.color, .1);
      // Favorieten-items krijgen geen id (het protocol staat ook in zijn regiosectie; dubbele ids vermijden)
      itemsHtml += '<div class="nav-item"' + (isFavSec ? '' : ' id="nav-' + id + '"') + ' onclick="showProto(\'' + id + '\')">'
        + '<div class="nav-dot" style="background:' + p.color + '"></div>'
        + '<div style="flex:1"><div class="nav-title">' + naam + '</div><div class="nav-sub">' + sub + '</div></div>'
        + '<span class="nav-badge" style="background:' + bg + ';color:' + p.color + '">' + badge + '</span></div>';
      bsItemsHtml += '<button class="bs-item" onclick="closeProtoSheet();showProto(\'' + id + '\')">'
        + '<div class="bs-item-dot" style="background:' + p.color + '"></div>'
        + '<span class="bs-item-name">' + naam + '</span>'
        + '<span class="bs-item-badge" style="background:' + bg + ';color:' + p.color + '">' + badge + '</span></button>';
    });
    const head = '<span class="nav-sec-arrow">' + icon('video') + '</span><span>' + secLabel + '</span><span class="nav-sec-count">' + byRegio[sec].length + '</span>';
    sideHtml += '<div class="nav-sec' + (isOpen ? ' open' : '') + '" data-sec="' + secLabel + '">'
      + '<div class="nav-sec-head" onclick="toggleNavSec(this.parentNode)">' + head + '</div>'
      + '<div class="nav-sec-body">' + itemsHtml + '</div></div>';
    bsHtml += '<div class="bs-sec nav-sec' + (isOpen ? ' open' : '') + '" data-sec="' + secLabel + '">'
      + '<div class="bs-section nav-sec-head" style="display:flex;align-items:center;gap:7px;cursor:pointer;" onclick="toggleNavSec(this.parentNode)">' + head + '</div>'
      + '<div class="bs-sec-body">' + bsItemsHtml + '</div></div>';
  });
  document.getElementById('nav-proto-sections').innerHTML = sideHtml;
  document.getElementById('bs-proto-body').innerHTML = bsHtml;

  // Home-statistieken uit de data berekenen
  const ids = Object.keys(protocols);
  let phases = 0, exercises = 0;
  ids.forEach(id => {
    phases += protocols[id].phases.length;
    protocols[id].phases.forEach(f => { exercises += (f.exercises || []).length; });
  });
  const set = (elId, v) => { const el = document.getElementById(elId); if(el) el.textContent = v; };
  set('stat-protocols', ids.length);
  set('stat-phases', phases);
  set('stat-exercises', exercises);
}


// ── TOEGANKELIJKHEID ──────────────────────────────────────────────
// De app genereert honderden klikbare elementen die geen <button> zijn. In
// plaats van elk generatiepunt aan te passen, krijgen ze hier centraal een rol
// en toetsenbordbediening. Een observer vangt ook alles op wat later gerenderd wordt.
function maakKlikbaarToegankelijk(root) {
  const scope = root && root.querySelectorAll ? root : document;
  scope.querySelectorAll('[onclick]:not(button):not(a):not(input):not([role])').forEach(el => {
    el.setAttribute('role', 'button');
    if(!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
  });
}

document.addEventListener('keydown', e => {
  // Enter en spatie bedienen elementen die als knop fungeren
  if(e.key === 'Enter' || e.key === ' ') {
    const el = document.activeElement;
    if(el && el.tagName !== 'BUTTON' && el.getAttribute && el.getAttribute('role') === 'button') {
      e.preventDefault();
      el.click();
    }
    return;
  }
  // Escape sluit de bovenste overlay
  if(e.key === 'Escape') {
    const open = [...document.querySelectorAll('.kmodal.open, .bottom-sheet.open')].pop();
    if(!open) return;
    e.preventDefault();
    const sluit = {'proto-sheet': closeProtoSheet, 'more-sheet': closeMoreSheet,
                   'yt-modal': closeYT, 'rf-modal': closeRF, 'fiche-modal': closeFiche};
    const fn = sluit[open.id];
    if(typeof fn === 'function') fn();
    else { open.classList.remove('open'); document.body.style.overflow = ''; }
  }
});

if(typeof MutationObserver === 'function') {
  new MutationObserver(muts => {
    muts.forEach(mut => mut.addedNodes.forEach(n => {
      if(n.nodeType === 1) maakKlikbaarToegankelijk(n);
    }));
  }).observe(document.documentElement, { childList: true, subtree: true });
}


// ── THEMA ─────────────────────────────────────────────────────────
// Donker is de standaard: de anatomie-achtergrond is een donkere afbeelding en
// komt alleen daar tot zijn recht. Licht blijft beschikbaar voor wie aan een
// verlichte behandeltafel werkt of het blad wil laten aansluiten op de afdruk.
function huidigThema() {
  try { return localStorage.getItem('kp_thema') || 'dark'; } catch(e) { return 'dark'; }
}
function pasThemaToe(thema) {
  document.documentElement.setAttribute('data-theme', thema);
  const meta = document.querySelector('meta[name="theme-color"]:not([media])')
            || document.querySelector('meta[name="theme-color"]');
  if(meta) meta.setAttribute('content', thema === 'dark' ? '#14171A' : '#F4F5F7');
  const knop = document.getElementById('thema-knop');
  if(knop) {
    knop.innerHTML = icon(thema === 'dark' ? 'stethoscoop' : 'stethoscoop') + (thema === 'dark' ? 'Donker' : 'Licht');
    knop.setAttribute('aria-label', 'Thema wisselen, nu ' + (thema === 'dark' ? 'donker' : 'licht'));
  }
}
function wisselThema() {
  const nieuw = huidigThema() === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('kp_thema', nieuw); } catch(e) {}
  pasThemaToe(nieuw);
}

// ── INIT ──
// Volledig lokale app: geen account of login — alle data staat in localStorage
// (bewaar regelmatig een backup via het patiëntendashboard).
function initApp() {
  localStorage.removeItem('kp_session'); // restant van de vroegere accountversie opruimen
  ['app-version-label', 'more-version-label'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = 'v' + APP_VERSION;
  });
  pasThemaToe(huidigThema());
  controleerDataConsistentie();
  buildNav();
  maakKlikbaarToegankelijk(document);
  initSwipe();
  renderVandaag();
  renderRecent();
  filterFeatured('knie');
  updatePatientBadge();
}
initApp();
