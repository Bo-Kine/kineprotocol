// KineProtocol — App: navigatie, rendering, formulieren, zoeken, swipe, init

// ── VERSION CHECK: forces hard reload when app is updated ──
(function(){
  const V = '13';
  if(localStorage.getItem('kp_app_v') !== V) {
    localStorage.setItem('kp_app_v', V);
    window.location.replace(window.location.pathname + '?v=' + V + '&t=' + Date.now());
  }
})();

let currentProto = null;
let deferredPrompt = null;
let editingPatientId = null;


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
  let html = '<div class="section-label" style="padding:0;margin-bottom:10px;">RECENTELIJK BEKEKEN</div><div class="recent-row">';
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
const REGIO_PROTOS = {
  knie: ['acl','tka','pfps','pt','gmt','hsi'],
  schouder: ['rc','si','elb'],
  rug: ['lh','bureau'],
  enkel: ['at','enkel','over','mtss'],
  pols: ['orif','dq','cts'],
};

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
    const bg = `linear-gradient(135deg,${color}2a 0%,${color}0f 100%)`;
    const border = `border:1px solid ${color}28;`;
    return `<div class="featured-card" style="background:${bg};${border}" onclick="showProto('${id}')">
      <div class="featured-card-top">
        <span class="featured-card-icon">${p.icon||'📋'}</span>
        <span class="featured-card-title">${p.title}</span>
        <span class="featured-card-badge" style="background:${color}1e;color:${color}">${id.toUpperCase()}</span>
      </div>
      <div class="featured-card-footer">
        ${phases ? `<span class="featured-card-tag">${phases} fasen</span>` : ''}
        ${exCount ? `<span class="featured-card-tag">${exCount} oefeningen</span>` : ''}
        <span class="featured-card-arrow">→</span>
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
function setNav(id) {
  document.querySelectorAll('[id^="nav-"],[id^="bnav-"]').forEach(n => n.classList.remove('active'));
  const s = document.getElementById('nav-'+id), b = document.getElementById('bnav-'+id);
  if(s) s.classList.add('active');
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
  renderRecent();
  filterFeatured('knie');
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

  // Tabs: fasen + Scores + Referenties
  const tabs = document.getElementById('proto-tabs');
  const hasScores = SCORES[id] && SCORES[id].length > 0;
  const tabsHtml = p.phases.map((ph,i) => {
    const cls = i===0 ? 'vtab active' : 'vtab';
    return '<div class="' + cls + '" onclick="showPhase(' + i + ')">' + ph.label + '</div>';
  }).join('');
  const scoresTab = hasScores ? '<div class="vtab" onclick="showScores(\'' + id + '\')"> Scores</div>' : '';
  const protoForms = Object.entries(FORMS).filter(([k,f]) => f.protocol === id);
  const formsTab = protoForms.length ? '<div class="vtab" onclick="showFormsTab(\'' + id + '\')">📝 Formulieren</div>' : '';
  const refsTab = '<div class="vtab" onclick="showRefs(\'' + id + '\')">Referenties</div>';
  tabs.innerHTML = tabsHtml + scoresTab + (typeof formsTab !== 'undefined' ? formsTab : '') + refsTab;
  renderPhase(0);
  renderTimeline(0);
  setNav(id);
  const totalFlags = p.phases.reduce((s,ph) => s + (ph.redflags ? ph.redflags.length : 0), 0);
  const rfCount = document.getElementById('rf-count');
  if(rfCount) rfCount.textContent = totalFlags;
  // Show beslisboom button if available
  const bbBtn = document.getElementById('beslisboom-btn');
  if(bbBtn) bbBtn.style.display = BESLISBOOM[id] ? 'flex' : 'none';
}
function showPhase(i) {
  document.querySelectorAll('.vtab').forEach((t,j) => t.classList.toggle('active', j===i));
  renderPhase(i);
  renderTimeline(i);
  document.getElementById('proto-body').scrollTop = 0;
}
function showRefs(id) {
  const p = protocols[id];
  const tabCount = p.phases.length + (SCORES[id]?.length ? 1 : 0);
  document.querySelectorAll('.vtab').forEach((t,j) => t.classList.toggle('active', j===tabCount));
  document.getElementById('proto-body').innerHTML = `<div class="ref-box"><div class="ref-label">Sleutelreferenties</div><div class="ref-text">${p.refs.split('|').map(r=>`<div style="margin-bottom:10px">${r.trim()}</div>`).join('')}</div></div>`;
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
    html += `<div style="margin-left:12px;font-size:10px;color:#4ade80;font-family:Geist Mono,monospace;white-space:nowrap;align-self:flex-start;margin-top:2px">👤 ${linked.name.split(' ')[0]}</div>`;
  }
  tl.innerHTML = html;
}

// ── SCORES TAB ──
function showFormsTab(protoId) {
  const p = protocols[protoId];
  const tabCount = p.phases.length + (SCORES[protoId]?.length ? 1 : 0);
  document.querySelectorAll('.vtab').forEach((t,j) => t.classList.toggle('active', j===tabCount));
  const protoForms = Object.entries(FORMS).filter(([k,f]) => f.protocol === protoId);
  const color = p.color;
  let html = '<div class="slabel">Testformulieren — ' + p.title + '</div>';
  html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin-bottom:20px;">';
  protoForms.forEach(([formId, form]) => {
    html += '<div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:14px 16px;cursor:pointer;" onclick="openForm(\''+formId+'\',null)" onmouseover="this.style.borderColor=\'var(--border2)\'" onmouseout="this.style.borderColor=\'var(--border)\'">';
    html += '<div style="font-size:14px;font-weight:600;margin-bottom:4px;">' + form.name + '</div>';
    html += '<div style="font-size:11px;color:var(--muted);margin-bottom:10px;line-height:1.4">' + form.full + '</div>';
    html += '<div style="font-size:10.5px;color:var(--muted2);font-family:Geist Mono,monospace;margin-bottom:10px">Max: ' + form.max + ' · RTS: ' + form.rts + '</div>';
    html += '<div style="background:' + color + '22;color:' + color + ';border:1px solid ' + color + '44;padding:6px 12px;border-radius:5px;font-size:11.5px;font-weight:600;text-align:center;">📝 Formulier invullen</div>';
    html += '</div>';
  });
  html += '</div>';
  html += '<div style="font-size:12px;color:var(--muted);padding:10px 14px;background:var(--surface2);border-radius:6px;border:1px solid var(--border)">💡 Koppel een patiënt via de "👤 Koppel patiënt" knop om een ingevuld formulier automatisch aan hun dossier te koppelen.</div>';
  document.getElementById('proto-body').innerHTML = html;
  document.getElementById('proto-body').scrollTop = 0;
}

function showScores(id) {
  const p = protocols[id];
  const tabCount = p.phases.length;
  document.querySelectorAll('.vtab').forEach((t,j) => t.classList.toggle('active', j===tabCount));
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
    if(sc.rts) html += `<div style="font-size:10.5px;color:var(--muted);margin-bottom:10px;padding:5px 8px;background:var(--surface2);border-radius:4px;font-family:Geist Mono,monospace">RTS: ${sc.rts}</div>`;
    if(sc.mcid) html += `<div style="font-size:10px;color:var(--muted2);margin-bottom:10px;font-family:Geist Mono,monospace">MCID: ${sc.mcid} ${sc.unit}</div>`;
    html += `<div class="score-input-row">
      <input class="score-input" id="score-input-${si}" type="number" min="0" max="${sc.max}" placeholder="Score (0–${sc.max})">
      <button class="score-btn" onclick="calcScore('${id}',${si})">Interpreteer</button>
    </div>
    <div class="score-result" id="score-result-${si}"></div>
    </div>`;
  });
  html += `</div>`;
  document.getElementById('proto-body').innerHTML = html;
  document.getElementById('proto-body').scrollTop = 0;
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
  const colorMap = {'#22c55e':'good','#f59e0b':'warn','#ef4444':'bad'};
  const cls = colorMap[matched.color] || 'warn';
  res.className = `score-result show ${cls}`;
  res.textContent = `${val} ${sc.unit} → ${matched.label}`;
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
  document.getElementById('rf-modal-title').textContent = '🚨 Rode vlaggen — ' + p.title;
  if(!allFlags.length) {
    document.getElementById('rf-modal-body').innerHTML = '<div style="color:var(--muted);font-size:13px;padding:20px 0;text-align:center;">Geen rode vlaggen geregistreerd.</div>';
  } else {
    let html = ''; let lastFase = '';
    allFlags.forEach(({fase, flag}) => {
      if(fase !== lastFase) {
        html += `<div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted2);font-family:Geist Mono,monospace;margin:${lastFase?'16px':0} 0 6px">${fase}</div>`;
        lastFase = fase;
      }
      const urgent = flag.includes('SPOED') || flag.includes('spoed') || flag.includes('CAUDA');
      html += `<div style="display:flex;gap:10px;align-items:flex-start;padding:8px 12px;background:rgba(239,68,68,${urgent?.1:.05});border:1px solid rgba(239,68,68,${urgent?.25:.15});border-radius:5px;margin-bottom:6px;">
        <span style="color:#ef4444;font-weight:700;flex-shrink:0;font-size:${urgent?16:13}px;">${urgent?'🚨':'!'}</span>
        <span style="font-size:12.5px;color:var(--text);line-height:1.5;${urgent?'font-weight:600':''}">${flag}</span>
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
  const tabs = document.querySelectorAll('.vtab');
  let activeIdx = 0;
  tabs.forEach((t,i) => { if(t.classList.contains('active')) activeIdx = i; });
  fichePhaseIndex = activeIdx < currentProto.phases.length ? activeIdx : 0;
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
  document.getElementById('fiche-modal-title').textContent = '📋 ' + p.title;
  let html = `<div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap;">`;
  html += `<button onclick="setFicheScope('fase')" style="flex:1;padding:7px 10px;border-radius:6px;font-size:11.5px;font-family:Geist,sans-serif;cursor:pointer;font-weight:600;border:1px solid ${ficheScope==='fase'?'var(--proto-color)':'var(--border)'};background:${ficheScope==='fase'?'var(--surface3)':'var(--surface2)'};color:${ficheScope==='fase'?'var(--proto-color)':'var(--muted)'};">Huidige fase</button>`;
  html += `<button onclick="setFicheScope('all')" style="flex:1;padding:7px 10px;border-radius:6px;font-size:11.5px;font-family:Geist,sans-serif;cursor:pointer;font-weight:600;border:1px solid ${ficheScope==='all'?'var(--proto-color)':'var(--border)'};background:${ficheScope==='all'?'var(--surface3)':'var(--surface2)'};color:${ficheScope==='all'?'var(--proto-color)':'var(--muted)'};">Volledig protocol</button>`;
  html += `</div>`;
  if(ficheScope === 'fase') {
    html += `<div style="display:flex;gap:4px;margin-bottom:14px;overflow-x:auto;scrollbar-width:none;">`;
    p.phases.forEach((ph,i) => {
      html += `<button onclick="fichePhaseIndex=${i};renderFicheModal()" style="flex-shrink:0;padding:4px 10px;border-radius:5px;font-size:10.5px;font-family:Geist Mono,monospace;cursor:pointer;border:1px solid ${i===fichePhaseIndex?'var(--proto-color)':'var(--border)'};background:${i===fichePhaseIndex?'var(--surface3)':'var(--surface2)'};color:${i===fichePhaseIndex?'var(--text)':'var(--muted)'};">${ph.label}</button>`;
    });
    html += `</div>`;
  }
  phases.forEach(ph => {
    html += `<div style="margin-bottom:18px;">`;
    html += `<div style="background:var(--surface2);border:1px solid var(--border);border-left:3px solid var(--proto-color);border-radius:4px;padding:10px 14px;margin-bottom:10px;"><div style="font-size:12px;font-weight:700;">${ph.label} — ${ph.title}</div><div style="font-size:10.5px;color:var(--muted);font-family:Geist Mono,monospace;margin-top:2px">${ph.weeks}</div></div>`;
    if(ph.goals?.length) {
      html += `<div style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted2);font-family:Geist Mono,monospace;margin-bottom:6px;">Doelstellingen</div><ul style="list-style:none;margin-bottom:12px;">`;
      ph.goals.forEach(g => html += `<li class="fiche-goal-item">${g}</li>`);
      html += `</ul>`;
    }
    if(ph.exercises?.length) {
      html += `<div style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted2);font-family:Geist Mono,monospace;margin-bottom:6px;">Oefeningen</div>`;
      ph.exercises.forEach(ex => {
        html += `<div class="fiche-ex-row"><div style="flex:1"><div class="fiche-ex-name">${ex.name}</div>`;
        if(ex.params?.length) html += `<div class="fiche-ex-params">${ex.params.map(([k,v])=>`${k}: ${v}`).join(' · ')}</div>`;
        if(ex.note) html += `<div style="font-size:11px;color:var(--muted);margin-top:3px;line-height:1.5">${ex.note}</div>`;
        html += `</div></div>`;
      });
    }
    html += `</div>`;
  });
  html += `<div style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted2);font-family:Geist Mono,monospace;margin-bottom:6px;">Notities voor patiënt</div>`;
  html += `<textarea class="fiche-notes-area" id="fiche-notes" placeholder="Voeg persoonlijke notities toe..."></textarea>`;
  document.getElementById('fiche-modal-body').innerHTML = html;
}

const PRINT_CSS = `
  body{font-family:Arial,Helvetica,sans-serif;color:#000;background:#fff;padding:20px;margin:0;font-size:13px;}
  h1{font-size:20px;font-weight:700;margin:0 0 4px;}
  .pf-meta{font-size:12px;color:#555;margin-bottom:16px;border-bottom:1px solid #eee;padding-bottom:8px;}
  h2{font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:#555;border-bottom:1px solid #ddd;padding-bottom:3px;margin:16px 0 6px;}
  .pf-ex{display:flex;gap:12px;padding:5px 0;border-bottom:1px solid #f0f0f0;align-items:baseline;}
  .pf-ex-name{font-weight:600;font-size:12px;flex:1;}
  .pf-ex-params{font-size:11px;color:#555;font-family:monospace;white-space:nowrap;}
  .pf-goal{font-size:11px;color:#333;padding:2px 0 2px 8px;}
  .pf-notes{font-size:11px;border:1px solid #ccc;padding:8px;border-radius:4px;min-height:60px;margin-top:8px;white-space:pre-wrap;}
  .pf-footer{margin-top:20px;font-size:10px;color:#999;border-top:1px solid #ddd;padding-top:6px;}
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
    html += `<h2>${ph.label} — ${ph.title} <span style="font-weight:400;font-size:11px;color:#888">${ph.weeks}</span></h2>`;
    if(ph.goals?.length) { html += `<div style="font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:#888;margin-bottom:4px">Doelstellingen</div>`; ph.goals.forEach(g => html += `<div class="pf-goal">→ ${g}</div>`); }
    if(ph.exercises?.length) {
      html += `<div style="font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:#888;margin:10px 0 4px">Oefeningen</div>`;
      ph.exercises.forEach(ex => {
        html += `<div class="pf-ex"><div class="pf-ex-name">${ex.name}</div><div class="pf-ex-params">${ex.params?ex.params.map(([k,v])=>`${k}: ${v}`).join(' · '):''}</div></div>`;
        if(ex.note) html += `<div style="font-size:10px;color:#666;padding:2px 0 4px 8px;font-style:italic">${ex.note}</div>`;
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
      ph.goals.forEach(function(g) { text += '  → ' + g + '\n'; });
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
    if(btn) { btn.textContent = '✓ Gekopieerd!'; setTimeout(function(){ btn.textContent = '📋 Kopieer tekst'; }, 2000); }
  }).catch(function() {
    var ta = document.createElement('textarea'); ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    var btn = document.querySelector('.kmodal-action.secondary');
    if(btn) { btn.textContent = '✓ Gekopieerd!'; setTimeout(function(){ btn.textContent = '📋 Kopieer tekst'; }, 2000); }
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
    html += '<button onclick="beslisboomTerug(\'' + protoId + '\')" style="background:var(--surface2);border:1px solid var(--border);color:var(--muted);padding:5px 10px;border-radius:6px;font-size:11px;cursor:pointer;font-family:Geist,sans-serif;margin-bottom:12px;">← Terug</button>';
  }
  // Vraag
  html += '<div style="background:var(--surface2);border:1px solid var(--border);border-left:3px solid ' + color + ';border-radius:6px;padding:14px 16px;margin-bottom:14px;">';
  html += '<div style="font-size:14px;font-weight:600;margin-bottom:6px;">' + stap.vraag + '</div>';
  if(stap.info) html += '<div style="font-size:12px;color:var(--muted);line-height:1.5">' + stap.info + '</div>';
  html += '</div>';
  // Opties
  stap.opties.forEach(opt => {
    if(opt.advies) {
      // Terminal node
      html += '<div onclick="renderBeslisboomAdvies(\'' + protoId + '\',this)" data-advies="' + opt.advies.replace(/"/g,'&quot;') + '" data-color="' + opt.color + '" style="cursor:pointer;padding:12px 14px;border-radius:7px;border:2px solid ' + opt.color + '33;background:' + opt.color + '11;margin-bottom:8px;transition:all .15s;" onmouseover="this.style.background=\'' + opt.color + '22\'" onmouseout="this.style.background=\'' + opt.color + '11\'">';
      html += '<div style="display:flex;align-items:center;gap:8px;"><div style="width:10px;height:10px;border-radius:50%;background:' + opt.color + ';flex-shrink:0"></div><div style="font-size:13px;font-weight:500">' + opt.label + '</div></div></div>';
    } else if(opt.next) {
      html += '<div onclick="renderBeslisboomStap(\'' + protoId + '\',\'' + opt.next + '\')" style="cursor:pointer;padding:12px 14px;border-radius:7px;border:2px solid ' + opt.color + '33;background:' + opt.color + '11;margin-bottom:8px;transition:all .15s;" onmouseover="this.style.background=\'' + opt.color + '22\'" onmouseout="this.style.background=\'' + opt.color + '11\'">';
      html += '<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;"><div style="display:flex;align-items:center;gap:8px;"><div style="width:10px;height:10px;border-radius:50%;background:' + opt.color + ';flex-shrink:0"></div><div style="font-size:13px;font-weight:500">' + opt.label + '</div></div><span style="color:var(--muted);font-size:12px;">→</span></div></div>';
    }
  });
  document.getElementById('bb-modal-body').innerHTML = html;
}
function renderBeslisboomAdvies(protoId, el) {
  const advies = el.dataset.advies;
  const color = el.dataset.color;
  const p = protocols[protoId];
  let html = '<button onclick="beslisboomTerug(\'' + protoId + '\')" style="background:var(--surface2);border:1px solid var(--border);color:var(--muted);padding:5px 10px;border-radius:6px;font-size:11px;cursor:pointer;font-family:Geist,sans-serif;margin-bottom:12px;">← Terug</button>';
  html += '<div style="background:' + color + '15;border:2px solid ' + color + '44;border-radius:8px;padding:16px 18px;">';
  html += '<div style="font-size:12px;font-weight:700;color:' + color + ';text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;font-family:Geist Mono,monospace">Klinisch advies</div>';
  html += '<div style="font-size:13px;color:var(--text);line-height:1.6">' + advies + '</div>';
  html += '</div>';
  html += '<button onclick="closeBeslisboom()" style="width:100%;margin-top:12px;background:var(--surface2);border:1px solid var(--border);color:var(--text);padding:9px;border-radius:6px;font-size:12px;cursor:pointer;font-family:Geist,sans-serif;">Sluiten</button>';
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
  const color = pt ? getProtoColor(pt.protoId) : '#a78bfa';
  let html = '';
  // Header
  html += '<div style="background:var(--surface2);border:1px solid var(--border);border-radius:6px;padding:10px 14px;margin-bottom:16px;">';
  html += '<div style="font-size:13px;font-weight:600">' + form.full + '</div>';
  html += '<div style="font-size:11px;color:var(--muted);font-family:Geist Mono,monospace;margin-top:2px">Max: ' + form.max + ' punten · RTS: ' + form.rts + '</div>';
  if(pt) html += '<div style="font-size:11px;color:var(--muted);margin-top:2px">Patiënt: <strong style="color:var(--text)">' + pt.name + '</strong> · ' + datum + '</div>';
  html += '</div>';
  html += '<div style="font-size:12px;color:var(--muted);margin-bottom:14px;line-height:1.5">' + form.intro + '</div>';
  // Questions
  let sportSection = false;
  form.vragen.forEach((v, vi) => {
    if(v.sport && !sportSection) {
      sportSection = true;
      html += '<div style="font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:var(--muted2);font-family:Geist Mono,monospace;margin:14px 0 8px;padding-bottom:4px;border-bottom:1px solid var(--border)">Sportspecifieke activiteiten</div>';
    }
    html += '<div style="margin-bottom:14px;" id="q-' + v.id + '">';
    html += '<div style="font-size:12.5px;font-weight:600;margin-bottom:7px;color:var(--text)">' + (vi+1) + '. ' + v.tekst + '</div>';
    if(v.type === 'keuze') {
      html += '<div style="display:flex;flex-direction:column;gap:4px;">';
      v.opties.forEach((opt, oi) => {
        const inputId = 'inp-' + v.id + '-' + oi;
        html += '<label style="display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:5px;border:1px solid var(--border);cursor:pointer;transition:all .1s;" onmouseover="this.style.borderColor=\'var(--border2)\'" onmouseout="this.style.borderColor=\'var(--border)\'">';
        html += '<input type="radio" name="' + v.id + '" id="' + inputId + '" value="' + oi + '" onchange="setFormAnswer(\'' + v.id + '\',' + oi + ',' + JSON.stringify(opt.score) + ')" style="flex-shrink:0">';
        html += '<span style="font-size:12px">' + opt.label + '</span>';
        html += '</label>';
      });
      html += '</div>';
    } else if(v.type === 'slider') {
      html += '<div style="padding:0 4px;">';
      html += '<input type="range" min="' + v.min + '" max="' + v.max + '" value="' + Math.round(v.max/2) + '" style="width:100%;accent-color:' + color + '" oninput="updateSlider(\'' + v.id + '\',this.value,' + v.gewicht + ',\'' + color + '\')" id="slider-' + v.id + '">';
      html += '<div style="display:flex;justify-content:space-between;margin-top:3px;">';
      html += '<span style="font-size:10px;color:var(--muted)">' + v.links + '</span>';
      html += '<span id="slider-val-' + v.id + '" style="font-size:12px;font-weight:700;color:' + color + '">' + Math.round(v.max/2) + '</span>';
      html += '<span style="font-size:10px;color:var(--muted)">' + v.rechts + '</span>';
      html += '</div></div>';
      // Initialize answer
      formAnswers[v.id] = {score: Math.round(v.max/2), rawScore: Math.round(v.max/2)};
    }
    html += '</div>';
  });
  // Score preview
  html += '<div id="form-score-preview" style="background:var(--surface2);border:1px solid var(--border);border-radius:6px;padding:10px 14px;margin-top:8px;text-align:center;font-family:Geist Mono,monospace;font-size:13px;color:var(--muted)">Score: vul alle vragen in</div>';
  document.getElementById('form-modal-body').innerHTML = html;
}
function setFormAnswer(qId, optIdx, score) {
  formAnswers[qId] = {optIdx, score};
  // Highlight selected
  const label = document.querySelector('input[name="' + qId + '"]:checked')?.parentElement;
  document.querySelectorAll('input[name="' + qId + '"]').forEach(inp => {
    if(inp.parentElement) inp.parentElement.style.background = 'transparent';
  });
  if(label) label.style.background = 'var(--surface3)';
  updateFormScore();
}
function updateSlider(qId, val, gewicht, color) {
  document.getElementById('slider-val-' + qId).textContent = val;
  formAnswers[qId] = {score: parseFloat(val), rawScore: parseFloat(val)};
  updateFormScore();
}
function updateFormScore() {
  const form = FORMS[activeForm];
  if(!form) return;
  const allAnswered = form.vragen.every(v => {
    if(v.type === 'keuze' && v.opties.some(o => o.score === null)) return formAnswers[v.id] !== undefined; // optional
    return formAnswers[v.id] !== undefined;
  });
  const total = Object.values(formAnswers).reduce((s, a) => s + (a.score !== null ? (a.score || 0) : 0), 0);
  const maxPossible = form.max;
  const pct = Math.min(100, Math.round((total / maxPossible) * 100));
  const rtsVal = form.invert ? parseInt(form.rts) : parseInt(form.rts);
  const isGood = form.invert ? total <= rtsVal : total >= rtsVal;
  const scoreEl = document.getElementById('form-score-preview');
  if(scoreEl) {
    scoreEl.style.color = allAnswered ? (isGood ? '#22c55e' : '#f59e0b') : 'var(--muted)';
    scoreEl.style.borderColor = allAnswered ? (isGood ? '#22c55e44' : '#f59e0b44') : 'var(--border)';
    scoreEl.textContent = 'Huidige score: ' + total + ' / ' + maxPossible + (allAnswered ? (isGood ? ' ✓ ' + form.rts : ' — nog niet: ' + form.rts) : ' (niet volledig ingevuld)');
  }
}
function calcFormScore() {
  const form = FORMS[activeForm];
  if(!form) return {total:0, max:form?.max||100};
  const total = Object.values(formAnswers).reduce((s, a) => s + (a.score !== null ? (a.score || 0) : 0), 0);
  return {total, max: form.max};
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
  const rtsVal = parseInt(form.rts);
  const isGood = form.invert ? total <= rtsVal : total >= rtsVal;
  html += '<div style="margin-top:12px;padding:8px 12px;border-radius:4px;background:' + (isGood?'#dcfce7':'#fef3c7') + ';border:1px solid ' + (isGood?'#86efac':'#fcd34d') + ';">';
  html += '<strong>Totaalscore: ' + total + '/' + max + '</strong> — ' + (isGood ? '✓ Drempel behaald (' + form.rts + ')' : '⚠ Drempel nog niet behaald (' + form.rts + ')') + '</div>';
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
  html += '<div style="background:' + color + '15;border:1px solid ' + color + '33;border-radius:8px;padding:12px 16px;margin-bottom:16px;">';
  html += '<div style="font-size:13px;font-weight:700;color:' + color + '">' + form.regio + '</div>';
  if(pt) html += '<div style="font-size:11px;color:var(--muted);font-family:Geist Mono,monospace;margin-top:2px">Patiënt: <strong style="color:var(--text)">' + pt.name + '</strong> · ' + datum + '</div>';
  else html += '<div style="font-size:11px;color:var(--muted);font-family:Geist Mono,monospace;margin-top:2px">' + datum + '</div>';
  html += '</div>';
  // Sections
  form.secties.forEach(sectie => {
    html += '<div style="margin-bottom:18px;">';
    html += '<div style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted2);font-family:Geist Mono,monospace;font-weight:700;margin-bottom:8px;padding-bottom:5px;border-bottom:1px solid var(--border)">' + sectie.titel + '</div>';
    sectie.velden.forEach(veld => {
      html += renderEvalVeld(veld, form.id);
    });
    html += '</div>';
  });
  document.getElementById('eval-modal-body').innerHTML = html;
}

function renderEvalVeld(veld, formId) {
  let html = '<div style="margin-bottom:10px;" id="evalveld-' + veld.id + '">';
  html += '<div style="font-size:12px;font-weight:600;color:var(--text);margin-bottom:4px;">' + veld.label;
  if(veld.info) html += ' <span style="font-size:10px;color:var(--muted);font-weight:400;font-style:italic">— ' + veld.info + '</span>';
  if(veld.norm) html += ' <span style="font-size:10px;color:var(--muted2);font-family:Geist Mono,monospace;margin-left:4px">norm: ' + veld.norm + '</span>';
  html += '</div>';

  if(veld.type === 'pn') {
    // Positief / Negatief / Niet getest
    html += '<div style="display:flex;gap:6px;">';
    ['Negatief','Positief','Niet getest'].forEach(opt => {
      const bg = opt === 'Positief' ? 'rgba(239,68,68,.1)' : opt === 'Negatief' ? 'rgba(34,197,94,.1)' : 'var(--surface2)';
      const bc = opt === 'Positief' ? 'rgba(239,68,68,.3)' : opt === 'Negatief' ? 'rgba(34,197,94,.3)' : 'var(--border)';
      const col = opt === 'Positief' ? '#ef4444' : opt === 'Negatief' ? '#22c55e' : 'var(--muted)';
      html += '<button onclick="setEvalAnswer(\'' + formId + '\',\'' + veld.id + '\',\'' + opt + '\')" id="evbtn-' + veld.id + '-' + opt.replace(/ /g,'_') + '" style="flex:1;padding:6px 4px;border-radius:5px;border:1px solid ' + bc + ';background:' + bg + ';color:' + col + ';font-size:11px;font-weight:600;cursor:pointer;font-family:Geist,sans-serif;transition:opacity .1s;">' + opt + '</button>';
    });
    html += '</div>';
  } else if(veld.type === 'pn_bevinding') {
    html += '<div style="display:flex;gap:6px;margin-bottom:5px;">';
    ['Negatief','Positief','Niet getest'].forEach(opt => {
      const bg = opt === 'Positief' ? 'rgba(239,68,68,.1)' : opt === 'Negatief' ? 'rgba(34,197,94,.1)' : 'var(--surface2)';
      const bc = opt === 'Positief' ? 'rgba(239,68,68,.3)' : opt === 'Negatief' ? 'rgba(34,197,94,.3)' : 'var(--border)';
      const col = opt === 'Positief' ? '#ef4444' : opt === 'Negatief' ? '#22c55e' : 'var(--muted)';
      html += '<button onclick="setEvalAnswer(\'' + formId + '\',\'' + veld.id + '\',\'' + opt + '\')" id="evbtn-' + veld.id + '-' + opt.replace(/ /g,'_') + '" style="flex:1;padding:6px 4px;border-radius:5px;border:1px solid ' + bc + ';background:' + bg + ';color:' + col + ';font-size:11px;font-weight:600;cursor:pointer;font-family:Geist,sans-serif;">' + opt + '</button>';
    });
    html += '</div>';
    html += '<input type="text" id="evtxt-' + veld.id + '" placeholder="Bevinding / opmerking..." onchange="setEvalAnswerTxt(\'' + formId + '\',\'' + veld.id + '_bevinding\',this.value)" style="width:100%;background:var(--surface2);border:1px solid var(--border);border-radius:5px;padding:5px 10px;color:var(--text);font-family:Geist,sans-serif;font-size:12px;outline:none;">';
  } else if(veld.type === 'pn_graden') {
    html += '<div style="display:flex;gap:6px;margin-bottom:5px;">';
    ['Negatief','Positief','Niet getest'].forEach(opt => {
      const bg = opt === 'Positief' ? 'rgba(239,68,68,.1)' : opt === 'Negatief' ? 'rgba(34,197,94,.1)' : 'var(--surface2)';
      const bc = opt === 'Positief' ? 'rgba(239,68,68,.3)' : opt === 'Negatief' ? 'rgba(34,197,94,.3)' : 'var(--border)';
      const col = opt === 'Positief' ? '#ef4444' : opt === 'Negatief' ? '#22c55e' : 'var(--muted)';
      html += '<button onclick="setEvalAnswer(\'' + formId + '\',\'' + veld.id + '\',\'' + opt + '\')" id="evbtn-' + veld.id + '-' + opt.replace(/ /g,'_') + '" style="flex:1;padding:6px 4px;border-radius:5px;border:1px solid ' + bc + ';background:' + bg + ';color:' + col + ';font-size:11px;font-weight:600;cursor:pointer;font-family:Geist,sans-serif;">' + opt + '</button>';
    });
    html += '</div>';
    html += '<input type="text" id="evtxt-' + veld.id + '" placeholder="° graden / details..." onchange="setEvalAnswerTxt(\'' + formId + '\',\'' + veld.id + '_detail\',this.value)" style="width:100%;background:var(--surface2);border:1px solid var(--border);border-radius:5px;padding:5px 10px;color:var(--text);font-family:Geist,sans-serif;font-size:12px;outline:none;">';
  } else if(veld.type === 'rom') {
    html += '<div style="display:flex;gap:8px;align-items:center;">';
    html += '<input type="number" min="0" max="360" placeholder="°" onchange="setEvalAnswerTxt(\'' + formId + '\',\'' + veld.id + '\',this.value+\'°\')" style="width:80px;background:var(--surface2);border:1px solid var(--border);border-radius:5px;padding:5px 10px;color:var(--text);font-family:Geist Mono,sans-serif;font-size:12px;outline:none;">';
    html += '<span style="font-size:11px;color:var(--muted)">graden</span>';
    ['Pijnvrij','Pijn bij eindstand','Pijn in traject','Beperkt'].forEach(opt => {
      html += '<button onclick="setEvalAnswer(\'' + formId + '\',\'' + veld.id + '_kwal\',\'' + opt + '\')" id="evbtn-' + veld.id + '-' + opt.replace(/ /g,'_') + '" style="flex:1;padding:4px 6px;border-radius:5px;border:1px solid var(--border);background:var(--surface2);color:var(--muted);font-size:10px;cursor:pointer;font-family:Geist,sans-serif;">' + opt + '</button>';
    });
    html += '</div>';
  } else if(veld.type === 'mrc') {
    html += '<div style="display:flex;gap:4px;">';
    ['0','1','2','3','4','5'].forEach(score => {
      const labels = {0:'0\nGeen',1:'1\nTrace',2:'2\nGrav',3:'3\nAnti-grav',4:'4\nWeerstand',5:'5\nNormaal'};
      html += '<button onclick="setEvalAnswer(\'' + formId + '\',\'' + veld.id + '\',\'' + score + '\')" id="evbtn-' + veld.id + '-' + score + '" style="flex:1;padding:4px 2px;border-radius:5px;border:1px solid var(--border);background:var(--surface2);color:var(--muted);font-size:10px;cursor:pointer;font-family:Geist Mono,monospace;line-height:1.2;white-space:pre;">' + labels[score] + '</button>';
    });
    html += '</div>';
  } else if(veld.type === 'reflex') {
    html += '<div style="display:flex;gap:6px;">';
    ['Normaal (++)','Versterkt (+++/++++)','Verminderd (+)','Afwezig (0)','Niet getest'].forEach(opt => {
      const key = opt.replace(/[^a-z0-9]/gi,'_');
      html += '<button onclick="setEvalAnswer(\'' + formId + '\',\'' + veld.id + '\',\'' + opt + '\')" id="evbtn-' + veld.id + '-' + key + '" style="flex:1;padding:5px 3px;border-radius:5px;border:1px solid var(--border);background:var(--surface2);color:var(--muted);font-size:10px;cursor:pointer;font-family:Geist,sans-serif;">' + opt + '</button>';
    });
    html += '</div>';
  } else if(veld.type === 'keuze3') {
    html += '<div style="display:flex;flex-wrap:wrap;gap:5px;">';
    veld.opties.forEach(opt => {
      const key = opt.replace(/[^a-z0-9]/gi,'_');
      html += '<button onclick="setEvalAnswer(\'' + formId + '\',\'' + veld.id + '\',\'' + opt + '\')" id="evbtn-' + veld.id + '-' + key + '" style="padding:5px 10px;border-radius:5px;border:1px solid var(--border);background:var(--surface2);color:var(--muted);font-size:11px;cursor:pointer;font-family:Geist,sans-serif;">' + opt + '</button>';
    });
    html += '</div>';
  } else if(veld.type === 'tekst') {
    html += '<input type="text" placeholder="' + (veld.placeholder||'') + '" onchange="setEvalAnswerTxt(\'' + formId + '\',\'' + veld.id + '\',this.value)" style="width:100%;background:var(--surface2);border:1px solid var(--border);border-radius:5px;padding:7px 10px;color:var(--text);font-family:Geist,sans-serif;font-size:12px;outline:none;">';
  } else if(veld.type === 'tekst_groot') {
    html += '<textarea placeholder="' + (veld.placeholder||'') + '" onchange="setEvalAnswerTxt(\'' + formId + '\',\'' + veld.id + '\',this.value)" style="width:100%;background:var(--surface2);border:1px solid var(--border);border-radius:5px;padding:7px 10px;color:var(--text);font-family:Geist,sans-serif;font-size:12px;outline:none;min-height:70px;resize:vertical;"></textarea>';
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
    btn.style.background = isActive ? (waarde==='Positief'?'rgba(239,68,68,.25)':waarde==='Negatief'?'rgba(34,197,94,.25)':'var(--surface3)') : '';
    btn.style.color = isActive ? (waarde==='Positief'?'#ef4444':waarde==='Negatief'?'#22c55e':'var(--text)') : '';
    btn.style.borderColor = isActive ? (waarde==='Positief'?'rgba(239,68,68,.5)':waarde==='Negatief'?'rgba(34,197,94,.5)':'var(--border2)') : '';
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
      const kleur = ans === 'Positief' ? '#dc2626' : ans === 'Negatief' ? '#16a34a' : '#374151';
      html += '<div class="pf-ex" style="border-bottom:1px solid #e5e7eb;padding:5px 0;">';
      html += '<div class="pf-ex-name" style="font-weight:600;font-size:12px;flex:1;">' + veld.label + '</div>';
      html += '<div style="font-size:11px;color:' + kleur + ';font-weight:' + (ans?'700':'400') + ';min-width:160px;text-align:right;">' + antwoord + '</div>';
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
      html += '<div class="pf-ex" style="border-bottom:1px solid #e5e7eb;padding:5px 0;min-height:26px;">';
      html += '<div class="pf-ex-name" style="font-weight:600;font-size:12px;flex:1;">' + veld.label;
      if(veld.info) html += '<br><span style="font-weight:400;font-size:10px;color:#6b7280;font-style:italic">' + veld.info + '</span>';
      if(veld.norm) html += '<span style="font-weight:400;font-size:10px;color:#9ca3af;margin-left:6px">norm: ' + veld.norm + '</span>';
      html += '</div>';
      if(veld.type === 'pn' || veld.type === 'pn_bevinding' || veld.type === 'pn_graden') {
        html += '<div style="display:flex;gap:12px;align-items:center;font-size:11px;">';
        html += '<label style="display:flex;align-items:center;gap:4px;"><input type="checkbox"> Negatief</label>';
        html += '<label style="display:flex;align-items:center;gap:4px;"><input type="checkbox"> Positief</label>';
        html += '<label style="display:flex;align-items:center;gap:4px;"><input type="checkbox"> Niet getest</label>';
        html += '<span style="flex:1;border-bottom:1px solid #d1d5db;margin-left:8px;">&nbsp;</span>';
        html += '</div>';
      } else if(veld.type === 'rom') {
        html += '<div style="display:flex;gap:8px;align-items:center;font-size:11px;">';
        html += '<span>_____° &nbsp;</span>';
        ['Pijnvrij','Pijn bij eindstand','Pijn in traject','Beperkt'].forEach(o => {
          html += '<label style="display:flex;align-items:center;gap:3px;"><input type="checkbox"> ' + o + '</label>';
        });
        html += '</div>';
      } else if(veld.type === 'mrc') {
        html += '<div style="display:flex;gap:8px;font-size:11px;">';
        ['0','1','2','3','4','5'].forEach(s => html += '<label><input type="checkbox"> ' + s + '</label>');
        html += '</div>';
      } else if(veld.type === 'reflex') {
        html += '<div style="font-size:11px;">0 &nbsp;/&nbsp; + &nbsp;/&nbsp; ++ &nbsp;/&nbsp; +++ &nbsp;/&nbsp; ++++ &nbsp; &nbsp;<span style="border-bottom:1px solid #d1d5db">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>';
      } else if(veld.type === 'keuze3') {
        html += '<div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;">';
        veld.opties.forEach(o => html += '<label style="display:flex;align-items:center;gap:3px;"><input type="checkbox"> ' + o + '</label>');
        html += '</div>';
      } else if(veld.type === 'tekst' || veld.type === 'tekst_groot') {
        const lines = veld.type === 'tekst_groot' ? 3 : 1;
        for(let i=0;i<lines;i++) html += '<div style="border-bottom:1px solid #d1d5db;min-height:18px;margin-top:2px;">&nbsp;</div>';
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

function buildExerciseLibrary() {
  if(libCache) return libCache;
  const seen = new Set();
  const lib = [];
  Object.values(protocols).forEach(p => {
    const regio = REGIO_MAP[p.id] || 'Overig';
    p.phases.forEach(ph => {
      (ph.exercises || []).forEach(ex => {
        if(seen.has(ex.name)) return;
        seen.add(ex.name);
        const nameLow = ex.name.toLowerCase();
        const noteLow = (ex.note || '').toLowerCase();
        const spieren = SPIER_KEYWORDS
          .filter(s => s.kw.some(kw => nameLow.includes(kw.toLowerCase()) || noteLow.includes(kw.toLowerCase())))
          .map(s => ({spier: s.spier, color: s.color}));
        lib.push({
          name: ex.name,
          params: ex.params || [],
          note: ex.note || '',
          cat: ex.cat || '',
          protoId: p.id,
          protoTitle: p.title,
          protoColor: p.color,
          phaseLabel: ph.label,
          regio,
          spieren: spieren.length ? spieren : [{spier:'Overig', color:'#52525b'}],
        });
      });
    });
  });
  libCache = lib;
  // Update badge
  const badge = document.getElementById('lib-count-badge');
  if(badge) badge.textContent = lib.length + ' oef.';
  return lib;
}

function showLibrary() {
  hideAllScreens();
  const el = document.getElementById('screen-library');
  el.style.display = 'flex';
  setNav('library');
  buildExerciseLibrary();
  renderLibrary('');
}

function setLibGroup(mode) {
  libGroupBy = mode;
  document.getElementById('lib-btn-regio').classList.toggle('active', mode === 'regio');
  document.getElementById('lib-btn-spier').classList.toggle('active', mode === 'spier');
  renderLibrary(document.getElementById('lib-search')?.value || '');
}

function filterLibrary(query) {
  renderLibrary(query);
}

function renderLibrary(query) {
  const body = document.getElementById('lib-body');
  if(!body) return;
  const lib = buildExerciseLibrary();
  const q = (query || '').toLowerCase().trim();
  const filtered = q ? lib.filter(ex =>
    ex.name.toLowerCase().includes(q) ||
    ex.regio.toLowerCase().includes(q) ||
    ex.spieren.some(s => s.spier.toLowerCase().includes(q)) ||
    ex.protoTitle.toLowerCase().includes(q) ||
    (ex.note && ex.note.toLowerCase().includes(q))
  ) : lib;

  // Group
  const groups = {};
  filtered.forEach(ex => {
    const keys = libGroupBy === 'spier'
      ? ex.spieren.map(s => s.spier)
      : [ex.regio];
    keys.forEach(key => {
      if(!groups[key]) groups[key] = {items:[], color: libGroupBy === 'spier'
        ? ex.spieren.find(s => s.spier === key)?.color || '#52525b'
        : '#71717a'};
      // Avoid duplicates within group
      if(!groups[key].items.find(e => e.name === ex.name)) groups[key].items.push(ex);
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
    body.innerHTML = `<div style="color:var(--muted);font-size:13px;padding:24px 0;text-align:center;">Geen oefeningen gevonden voor "${q}"</div>`;
    return;
  }

  const CAT_ICONS = {kracht:'💪',mobiliteit:'🔄',stabiliteit:'⚖',neuro:'🧠',cardio:'🏃',manueel:'🤲',test:'📏'};

  body.innerHTML = sortedKeys.map((key, gi) => {
    const g = groups[key];
    const isOpen = q || gi < 3; // auto-open first 3 groups or when searching
    const exHtml = g.items.map(ex => {
      const paramsStr = ex.params.slice(0,3).map(p => `<span>${p[0]}: <strong>${p[1]}</strong></span>`).join(' · ');
      const catIcon = CAT_ICONS[ex.cat] || '';
      // Spier badges (when grouped by regio show spieren, when by spier show protocol)
      const badges = libGroupBy === 'regio'
        ? ex.spieren.slice(0,2).map(s => `<span class="lib-ex-badge" style="background:${s.color}15;border-color:${s.color}33;color:${s.color};">${s.spier}</span>`).join('')
        : `<span class="lib-ex-badge" style="background:${ex.protoColor}15;border-color:${ex.protoColor}33;color:${ex.protoColor};">${ex.protoId.toUpperCase()}</span>`;
      return `<div class="lib-ex" onclick="this.classList.toggle('expanded')">
        <div class="lib-ex-dot" style="background:${ex.protoColor}"></div>
        <div class="lib-ex-main">
          <div class="lib-ex-name">${ex.name} ${catIcon ? `<span style="font-size:10px;opacity:.6">${catIcon}</span>` : ''}</div>
          <div class="lib-ex-badges">${badges}
            <span class="lib-ex-badge" style="background:var(--surface3);border-color:var(--border);color:var(--muted);">${ex.phaseLabel} · ${ex.protoTitle.split(' ').slice(0,2).join(' ')}</span>
          </div>
          ${paramsStr ? `<div class="lib-ex-params">${paramsStr}</div>` : ''}
          ${ex.note ? `<div class="lib-ex-note">${ex.note}</div>` : ''}
        </div>
      </div>`;
    }).join('');

    return `<div class="lib-group">
      <div class="lib-group-head" onclick="toggleLibGroup(${gi})">
        <div class="lib-group-dot" style="background:${g.color}"></div>
        <div class="lib-group-name">${key}</div>
        <div class="lib-group-count">${g.items.length} oefeningen</div>
        <div class="lib-group-arrow ${isOpen?'open':''}" id="lib-arr-${gi}">▶</div>
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
  const color_map = {nek:'#60a5fa', lage_rug:'#34d399', knie:'#22d3ee', schouder:'#f43f5e', bekken:'#a78bfa'};
  let html = '';
  Object.values(EVAL_FORMS).forEach(form => {
    const c = form.color;
    const telVelden = form.secties.reduce((s,sec) => s + sec.velden.length, 0);
    const telTesten = form.secties.find(s => s.id === 's_ortho')?.velden.length || 0;
    html += '<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;margin-bottom:12px;">';
    html += '<div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;">';
    html += '<div>';
    html += '<div style="font-family:Instrument Serif,serif;font-size:17px;font-weight:400;">' + form.titel + '</div>';
    html += '<div style="font-size:11px;color:var(--muted);font-family:Geist Mono,monospace;margin-top:2px">' + form.secties.length + ' secties · ' + telVelden + ' velden · ' + telTesten + ' testen</div>';
    html += '</div>';
    html += '<div style="font-size:10px;padding:3px 10px;border-radius:10px;background:' + c + '15;color:' + c + ';border:1px solid ' + c + '33;font-family:Geist Mono,monospace;font-weight:600;">' + form.regio + '</div>';
    html += '</div>';
    html += '<div style="display:flex;gap:8px;flex-wrap:wrap;">';
    html += '<button onclick="openEvalForm(\'' + form.id + '\',null)" style="flex:1;min-width:140px;padding:8px 14px;background:' + c + '18;border:1px solid ' + c + '33;color:' + c + ';border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;font-family:Geist,sans-serif;">📝 Digitaal invullen</button>';
    html += '<button onclick="printBlankEvalForm(\'' + form.id + '\')" style="flex:1;min-width:140px;padding:8px 14px;background:var(--surface2);border:1px solid var(--border);color:var(--muted);border-radius:6px;font-size:12px;cursor:pointer;font-family:Geist,sans-serif;">🖨 Leeg afdrukken</button>';
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
  html += `<div class="ev-box"><div class="ev-label">Evidence-basis</div><div class="ev-text">${ph.evidence}</div></div>`;
  html += `<div class="goals-box"><div class="goals-label">Doelstellingen — ${ph.title}</div><ul class="glist">${ph.goals.map(g=>`<li>${g}</li>`).join('')}</ul></div>`;
  if(ph.exercises?.length) {
    html += `<div class="slabel">Oefenprogramma</div><div class="ex-grid">`;
    ph.exercises.forEach(ex => {
      const cat = ex.cat ? CAT[ex.cat] : null;
      html += `<div class="ex-card"><div class="ex-header"><div class="ex-name">${ex.name}</div>`;
      if(cat) html += `<span class="ex-cat" style="background:${cat.color}22;color:${cat.color};border-color:${cat.color}44">${cat.icon} ${cat.label}</span>`;
      html += `</div>`;
      if(ex.params?.length) html += `<div class="ex-params">${ex.params.map(([k,v])=>`<div class="ep">${k}: <span>${v}</span></div>`).join('')}</div>`;
      if(ex.note) html += `<div class="ex-note">${ex.note}</div>`;
      if(ex.yt) html += `<button class="yt-btn" onclick="openYT('${ex.yt}','${ex.name.replace(/'/g,"'")}')">▶ Bekijk video</button>`;
      html += `</div>`;
    });
    html += `</div>`;
  }
  if(ph.criteria_go?.length || ph.criteria_stop?.length) {
    html += `<div class="slabel">Doorstroomcriteria</div><div class="criteria-grid">`;
    if(ph.criteria_go?.length) html += `<div class="cbox go"><div class="ctitle go">Vereist ✓</div><ul class="clist go">${ph.criteria_go.map(c=>`<li>${c}</li>`).join('')}</ul></div>`;
    if(ph.criteria_stop?.length) html += `<div class="cbox stop"><div class="ctitle stop">Vertraag ⚠</div><ul class="clist stop">${ph.criteria_stop.map(c=>`<li>${c}</li>`).join('')}</ul></div>`;
    html += `</div>`;
  }
  if(ph.redflags?.length) html += `<div class="rf-box"><div class="rf-label">Rode vlaggen</div><ul class="rf-list">${ph.redflags.map(r=>`<li>${r}</li>`).join('')}</ul></div>`;
  document.getElementById('proto-body').innerHTML = html;
}

// ── SEARCH ──
function handleSearch(q) {
  if(!q.trim()) {
    document.getElementById('screen-search').style.display = 'none';
    if(currentProto) document.getElementById('screen-proto').style.display = 'flex';
    else document.getElementById('screen-home').style.display = '';
    return;
  }
  hideAllScreens();
  document.getElementById('screen-search').style.display = '';
  const ql = q.toLowerCase(); let res = [];
  Object.values(protocols).forEach(p => {
    p.phases.forEach((ph, pi) => {
      ph.exercises.forEach(ex => {
        if([ex.name, ex.note||''].join(' ').toLowerCase().includes(ql))
          res.push({p, ph, pi, match: ex.name, type: 'Oefening', detail: ex.note||''});
      });
      ph.goals.forEach(g => {
        if(g.toLowerCase().includes(ql)) res.push({p, ph, pi, match: g, type: 'Doel', detail: ''});
      });
    });
  });
  const el = document.getElementById('search-results');
  if(!res.length) { el.innerHTML = `<div class="no-results">Geen resultaten voor "<strong style="color:var(--text)">${q}</strong>"</div>`; return; }
  el.innerHTML = res.map(r => `
    <div onclick="showProto('${r.p.id}');showPhase(${r.pi});" style="background:var(--surface);border:1px solid var(--border);border-radius:7px;padding:12px 14px;margin-bottom:8px;cursor:pointer;" onmouseover="this.style.borderColor='var(--border2)'" onmouseout="this.style.borderColor='var(--border)'">
      <div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;">
        <div style="width:7px;height:7px;border-radius:50%;background:${r.p.color};flex-shrink:0"></div>
        <span style="font-size:12px;font-weight:600">${r.p.title}</span>
        <span style="font-size:10px;color:var(--muted);font-family:Geist Mono,monospace;background:var(--surface2);padding:1px 6px;border-radius:3px">${r.ph.label}</span>
        <span style="font-size:10px;color:var(--muted2);font-family:Geist Mono,monospace">${r.type}</span>
      </div>
      <div style="font-size:13px">${r.match}</div>
      ${r.detail ? `<div style="font-size:11px;color:var(--muted);margin-top:3px">${r.detail.substring(0,110)}${r.detail.length>110?'...':''}</div>` : ''}
    </div>`).join('');
}

// ── SERVICE WORKER ──
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(()=>{}));
  navigator.serviceWorker.addEventListener('message', e => {
    if(e.data && e.data.type === 'SW_UPDATED') window.location.reload();
  });
}

// ── SWIPE NAVIGATIE ──
let swipeStartX = 0;
let swipeStartY = 0;
let swipeStartTime = 0;
let isSwiping = false;
let currentPhaseIndex = 0;

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
const _origShowPhase = showPhase;
window.showPhase = function(i) {
  currentPhaseIndex = i;
  _origShowPhase(i);
};

// ── INIT ──
async function initApp() {
  initSwipe();
  renderRecent();
  filterFeatured('knie');
  // Try to restore session
  const stored = JSON.parse(localStorage.getItem('kp_session') || 'null');
  if(stored && stored.refresh_token) {
    const ok = await refreshSession();
    if(ok) {
      hideLoginScreen();
      updatePatientBadge();
      await loadFromSupabase();
      return;
    }
  }
  // No valid session — show login
  showLoginScreen();
  updatePatientBadge();
}
initApp();
