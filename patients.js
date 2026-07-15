// KineProtocol — Patiënten: CRUD, UI, sessienotities

const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

// ── PATIENTS (Supabase + localStorage fallback) ──
function loadPatients() {
  try { return JSON.parse(localStorage.getItem('kp_patients') || '[]'); } catch(e) { return []; }
}

function savePatients(pts) {
  try { localStorage.setItem('kp_patients', JSON.stringify(pts)); } catch(e) {}
  updatePatientBadge();
  if(currentUser) syncToSupabase(pts);
}

async function syncToSupabase(pts) {
  if(!currentUser) return;
  setSyncStatus('syncing', 'Opslaan...');
  try {
    const uid = currentUser.id;
    const headers = getAuthHeaders();
    // Delete and re-insert patients row for this user
    await fetch(SUPA_URL + '/rest/v1/patients?id=eq.all_' + uid, {method:'DELETE', headers});
    await fetch(SUPA_URL + '/rest/v1/patients', {
      method: 'POST',
      headers: {...headers, 'Prefer':'return=minimal'},
      body: JSON.stringify({id: 'all_' + uid, user_id: uid, data: pts})
    });
    // Sync scores
    const scoreKeys = Object.keys(localStorage).filter(k => k.startsWith('kp_scores_'));
    const scoresObj = {};
    scoreKeys.forEach(k => { try { scoresObj[k] = JSON.parse(localStorage.getItem(k)); } catch(e) {} });
    await fetch(SUPA_URL + '/rest/v1/patients?id=eq.scores_' + uid, {method:'DELETE', headers});
    await fetch(SUPA_URL + '/rest/v1/patients', {
      method: 'POST',
      headers: {...headers, 'Prefer':'return=minimal'},
      body: JSON.stringify({id: 'scores_' + uid, user_id: uid, data: scoresObj})
    });
    setSyncStatus('ok', 'Opgeslagen');
  } catch(e) {
    setSyncStatus('error', 'Sync mislukt');
    console.error('Supabase sync error:', e);
  }
}

async function loadFromSupabase() {
  if(!currentUser) return;
  setSyncStatus('syncing', 'Laden...');
  const uid = currentUser.id;
  const headers = getAuthHeaders();
  try {
    const res = await fetch(SUPA_URL + '/rest/v1/patients?id=eq.all_' + uid + '&select=data', {headers});
    if(!res.ok) throw new Error('HTTP ' + res.status);
    const rows = await res.json();
    if(rows && rows.length > 0 && rows[0].data) {
      localStorage.setItem('kp_patients', JSON.stringify(rows[0].data));
    }
    const sRes = await fetch(SUPA_URL + '/rest/v1/patients?id=eq.scores_' + uid + '&select=data', {headers});
    if(sRes.ok) {
      const sRows = await sRes.json();
      if(sRows && sRows.length > 0 && sRows[0].data) {
        Object.entries(sRows[0].data).forEach(([k,v]) => {
          try { localStorage.setItem(k, JSON.stringify(v)); } catch(e) {}
        });
      }
    }
    setSyncStatus('ok', 'Gesynchroniseerd');
    updatePatientBadge();
    const ps = document.getElementById('screen-patients');
    if(ps && ps.style.display !== 'none') renderPatientList();
  } catch(e) {
    setSyncStatus('error', 'Geen verbinding');
    console.error('Supabase load error:', e);
  }
}
function updatePatientBadge() {
  const pts = loadPatients();
  const count = pts.length;
  const badge = document.getElementById('pat-count-badge');
  const stat = document.getElementById('stat-patients');
  if(badge) { badge.textContent = count; badge.style.display = count > 0 ? '' : 'none'; }
  if(stat) stat.textContent = count;
}
function genId() { return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }
function getInitials(name) {
  return name.split(' ').filter(Boolean).map(w=>w[0].toUpperCase()).slice(0,2).join('');
}
function getProtoColor(pid) {
  return protocols[pid]?.color || '#71717a';
}
function formatDate(iso) {
  if(!iso) return '';
  try { return new Date(iso).toLocaleDateString('nl-BE',{day:'2-digit',month:'2-digit',year:'numeric'}); } catch(e) { return iso; }
}
function calcAge(dob) {
  if(!dob) return null;
  const today = new Date(), birth = new Date(dob);
  let age = today.getFullYear() - birth.getFullYear();
  if(today.getMonth() < birth.getMonth() || (today.getMonth()===birth.getMonth() && today.getDate()<birth.getDate())) age--;
  return age;
}


// ── DASHBOARD HELPERS ──
function getDaysSinceLastSession(pt) {
  if(!pt.sessions || !pt.sessions.length) return null;
  const last = pt.sessions[pt.sessions.length - 1];
  if(!last.date) return null;
  return Math.round((Date.now() - new Date(last.date)) / 86400000);
}
function getScoreTrend(pt) {
  const sc = (SCORES[pt.protoId] || [])[0];
  if(!sc) return null;
  const hist = (getPatientScores(pt.id)[sc.name] || []);
  if(hist.length < 2) return null;
  const diff = hist[hist.length-1].value - hist[hist.length-2].value;
  if(Math.abs(diff) < 2) return 'stable';
  return sc.invert ? (diff < 0 ? 'up' : 'down') : (diff > 0 ? 'up' : 'down');
}
function getCriteriaProgress(pt) {
  const p = protocols[pt.protoId];
  if(!p) return {done:0, total:0};
  const phaseIdx = pt.phaseIndex || 0;
  const go = p.phases[phaseIdx]?.criteria_go || [];
  const state = (pt.criteria || {})[phaseIdx] || [];
  return {done: state.filter(Boolean).length, total: go.length};
}

// ── CRITERIA TOGGLE ──
function toggleCriteria(patId, phaseIdx, idx) {
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(!pt) return;
  if(!pt.criteria) pt.criteria = {};
  const key = String(phaseIdx);
  const total = protocols[pt.protoId]?.phases[phaseIdx]?.criteria_go?.length || 0;
  if(!pt.criteria[key]) pt.criteria[key] = new Array(total).fill(false);
  pt.criteria[key][idx] = !pt.criteria[key][idx];
  savePatients(pts);
  renderPatientDetail(pt, protocols[pt.protoId]);
}

// ── CRITERIA SECTIE ──
function renderCriteriaSection(pt, p) {
  const phaseIdx = pt.phaseIndex || 0;
  const ph = p.phases[phaseIdx];
  if(!ph) return '';
  const color = getProtoColor(pt.protoId);
  const criteriaGo = ph.criteria_go || [];
  const criteriaStop = ph.criteria_stop || [];
  const redFlags = ph.redflags || [];
  const state = (pt.criteria || {})[phaseIdx] || [];
  const doneCnt = state.filter(Boolean).length;
  const totalCnt = criteriaGo.length;
  const allDone = totalCnt > 0 && doneCnt === totalCnt;

  let html = `<div class="criteria-section">`;
  html += `<div class="slabel">Fase-criteria <span style="font-weight:400;color:var(--muted2);font-size:10px;">${ph.label}</span></div>`;

  if(allDone) {
    html += `<div class="criteria-go-banner">
      <div style="font-size:22px;line-height:1">✅</div>
      <div>
        <div style="font-size:13px;font-weight:700;color:#22c55e;">Klaar voor volgende fase</div>
        <div style="font-size:11px;color:var(--muted);margin-top:2px;">Alle go-criteria gehaald — bespreek fase-overgang met patiënt.</div>
      </div>
    </div>`;
  }

  if(criteriaGo.length) {
    html += `<div style="margin-bottom:14px;">`;
    html += `<div class="criteria-sub-label" style="color:var(--muted2)">Go-criteria <span style="color:${allDone?'#22c55e':'var(--muted2)'}">${doneCnt}/${totalCnt}</span></div>`;
    criteriaGo.forEach((c, i) => {
      const checked = state[i] === true;
      html += `<div class="criteria-item" onclick="toggleCriteria('${pt.id}',${phaseIdx},${i})" style="cursor:pointer;background:${checked?color+'12':'var(--surface2)'};border:1px solid ${checked?color+'33':'var(--border)'};">
        <div class="criteria-check" style="border-color:${checked?color:'var(--border2)'};background:${checked?color:'transparent'};">
          ${checked ? `<svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#000" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>` : ''}
        </div>
        <div class="criteria-label" style="color:${checked?'var(--muted)':'var(--text)'};text-decoration:${checked?'line-through':'none'}">${c}</div>
      </div>`;
    });
    html += `</div>`;
  }

  if(criteriaStop.length) {
    html += `<div style="margin-bottom:12px;">`;
    html += `<div class="criteria-sub-label" style="color:#f59e0b;">Stop-criteria</div>`;
    criteriaStop.forEach(c => {
      html += `<div class="criteria-stop-item">
        <div style="color:#f59e0b;font-size:11px;flex-shrink:0;margin-top:2px;">⚠</div>
        <div style="font-size:12px;color:var(--muted);line-height:1.5;">${c}</div>
      </div>`;
    });
    html += `</div>`;
  }

  if(redFlags.length) {
    html += `<div class="criteria-sub-label" style="color:#ef4444;">🚩 Red flags</div>`;
    redFlags.forEach(f => {
      html += `<div class="criteria-rf-item">
        <div style="color:#ef4444;font-size:11px;flex-shrink:0;margin-top:2px;">⛔</div>
        <div style="font-size:12px;color:var(--muted);line-height:1.5;">${f}</div>
      </div>`;
    });
  }

  html += `</div>`;
  return html;
}

// ── PATIËNTEN SCHERM ──
function showPatients() {
  hideAllScreens();
  document.getElementById('screen-patients').style.display = '';
  setNav('patients');
  renderPatientList();
  renderDashSummary();
}
function renderDashSummary() {
  const bar = document.getElementById('dash-summary-bar');
  if(!bar) return;
  const pts = loadPatients();
  if(!pts.length) { bar.style.display = 'none'; return; }
  const overdue = pts.filter(pt => { const d = getDaysSinceLastSession(pt); return d !== null && d > 7; }).length;
  const goReady = pts.filter(pt => { const c = getCriteriaProgress(pt); return c.total > 0 && c.done === c.total; }).length;
  const noSession = pts.filter(pt => getDaysSinceLastSession(pt) === null).length;
  bar.style.display = 'flex';
  bar.innerHTML = [
    {label:'Totaal', val: pts.length, color:'var(--muted)', bg:'var(--surface2)'},
    overdue > 0 ? {label:'Overdue', val: overdue, color:'#ef4444', bg:'rgba(239,68,68,.1)'} : null,
    goReady > 0 ? {label:'Klaar voor upgrade', val: goReady, color:'#22c55e', bg:'rgba(34,197,94,.1)'} : null,
    noSession > 0 ? {label:'Geen sessie', val: noSession, color:'var(--muted2)', bg:'var(--surface3)'} : null,
  ].filter(Boolean).map(s =>
    `<div style="background:${s.bg};border:1px solid ${s.color}33;border-radius:7px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <div style="font-size:18px;font-weight:700;font-family:'Geist Mono',monospace;color:${s.color};line-height:1;">${s.val}</div>
      <div style="font-size:10.5px;color:${s.color};font-family:'Geist Mono',monospace;white-space:nowrap;">${s.label}</div>
    </div>`
  ).join('');
}
function renderPatientList() {
  const pts = loadPatients();
  const container = document.getElementById('pat-list-container');
  if(!pts.length) {
    container.innerHTML = `<div class="pat-empty"><div class="pat-empty-icon">👥</div><div class="pat-empty-text">Nog geen patiënten</div><div class="pat-empty-sub">Voeg een patiënt toe om hun traject bij te houden.</div></div>`;
    return;
  }

  // Sort: overdue (> 7d) first, then by days since last session desc
  const sorted = pts.slice().sort((a, b) => {
    const dA = getDaysSinceLastSession(a) ?? 999;
    const dB = getDaysSinceLastSession(b) ?? 999;
    return dB - dA;
  });

  const trendIcon = t => t === 'up' ? '<span style="color:#22c55e;font-size:13px;" title="Score verbeterd">↑</span>'
    : t === 'down' ? '<span style="color:#ef4444;font-size:13px;" title="Score verslechterd">↓</span>'
    : t === 'stable' ? '<span style="color:#f59e0b;font-size:13px;" title="Score stabiel">→</span>' : '';

  container.innerHTML = `<div class="dash-grid">${sorted.map(pt => {
    const p = protocols[pt.protoId];
    if(!p) return '';
    const color = getProtoColor(pt.protoId);
    const phaseIdx = pt.phaseIndex || 0;
    const ph = p.phases[phaseIdx];
    const days = getDaysSinceLastSession(pt);
    const trend = getScoreTrend(pt);
    const crit = getCriteriaProgress(pt);
    const progress = Math.round((phaseIdx / p.phases.length) * 100);
    const age = pt.dob ? calcAge(pt.dob) : null;
    const isOverdue = days !== null && days > 7;
    const noSession = days === null;
    const allCritDone = crit.total > 0 && crit.done === crit.total;

    const daysBadge = noSession
      ? `<span class="dash-badge dash-badge-muted">Geen sessie</span>`
      : isOverdue
        ? `<span class="dash-badge dash-badge-warn">${days}d geleden ⚠</span>`
        : `<span class="dash-badge dash-badge-ok">${days === 0 ? 'Vandaag' : days + 'd geleden'}</span>`;

    const critBlock = crit.total > 0
      ? `<div class="dash-crit" style="border-color:${allCritDone?'rgba(34,197,94,.3)':'var(--border)'};background:${allCritDone?'rgba(34,197,94,.07)':'var(--surface2)'};">
          <div style="font-size:9.5px;color:var(--muted2);font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.05em;">Criteria</div>
          <div style="font-size:18px;font-weight:700;line-height:1;color:${allCritDone?'#22c55e':'var(--text)'};">${crit.done}/${crit.total}</div>
          ${allCritDone ? `<div style="font-size:8.5px;color:#22c55e;font-family:'Geist Mono',monospace;font-weight:700;">✓ GO</div>` : ''}
         </div>` : '';

    return `<div class="dash-card" onclick="showPatientDetail('${pt.id}')"
        style="border-color:${isOverdue?'rgba(239,68,68,.28)':allCritDone?'rgba(34,197,94,.2)':'var(--border)'};background:${isOverdue?'rgba(239,68,68,.03)':allCritDone?'rgba(34,197,94,.02)':'var(--surface)'};">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
        <div style="width:38px;height:38px;border-radius:50%;background:${color}22;color:${color};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;">${getInitials(esc(pt.name))}</div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:13.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${esc(pt.name)}</div>
          <div style="font-size:10.5px;color:var(--muted);font-family:'Geist Mono',monospace;">${age ? age + 'j · ' : ''}${p.title.split(' ').slice(0,2).join(' ')}</div>
        </div>
        <div style="background:${color}18;color:${color};padding:2px 8px;border-radius:10px;font-size:10px;font-family:'Geist Mono',monospace;font-weight:700;flex-shrink:0;">${pt.protoId.toUpperCase()}</div>
      </div>
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;flex-wrap:wrap;">
        <div style="background:${color}15;border:1px solid ${color}33;color:${color};padding:3px 9px;border-radius:5px;font-size:11px;font-weight:600;">${ph ? ph.label : '—'}</div>
        <div style="font-size:10.5px;color:var(--muted2);font-family:'Geist Mono',monospace;flex:1;">${ph ? ph.weeks : ''}</div>
        ${trendIcon(trend)}
      </div>
      <div style="display:flex;gap:6px;margin-bottom:12px;align-items:stretch;">
        <div class="dash-stat">
          <div style="font-size:9.5px;color:var(--muted2);font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.05em;">Sessies</div>
          <div style="font-size:20px;font-weight:700;color:var(--text);line-height:1;">${(pt.sessions||[]).length}</div>
        </div>
        ${critBlock}
        <div class="dash-stat" style="flex:1;justify-content:center;">
          <div style="font-size:9.5px;color:var(--muted2);font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.05em;">Laatste sessie</div>
          ${daysBadge}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <div style="flex:1;height:4px;background:var(--surface3);border-radius:2px;overflow:hidden;">
          <div style="height:100%;width:${progress}%;background:${color};border-radius:2px;"></div>
        </div>
        <div style="font-size:10px;color:var(--muted2);font-family:'Geist Mono',monospace;white-space:nowrap;">${phaseIdx+1} / ${p.phases.length} fasen</div>
      </div>
    </div>`;
  }).join('')}</div>`;
}


// ── SCORE TRACKING PER PATIENT ──
function getPatientScores(patId) {
  try { return JSON.parse(localStorage.getItem('kp_scores_' + patId) || '{}'); } catch(e) { return {}; }
}
function savePatientScore(patId, scoreName, value, date) {
  const scores = getPatientScores(patId);
  if(!scores[scoreName]) scores[scoreName] = [];
  scores[scoreName].push({date: date || new Date().toISOString().slice(0,10), value: parseFloat(value)});
  // Sort by date
  scores[scoreName].sort((a,b) => a.date.localeCompare(b.date));
  try { localStorage.setItem('kp_scores_' + patId, JSON.stringify(scores)); } catch(e) {}
}
function deletePatientScore(patId, scoreName, idx) {
  const scores = getPatientScores(patId);
  if(scores[scoreName]) {
    scores[scoreName].splice(idx, 1);
    if(scores[scoreName].length === 0) delete scores[scoreName];
  }
  try { localStorage.setItem('kp_scores_' + patId, JSON.stringify(scores)); } catch(e) {}
  // Re-render detail
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(pt) renderPatientDetail(pt, protocols[pt.protoId]);
}
function addPatientScore(patId) {
  const scName = document.getElementById('score-track-name-' + patId);
  const scVal = document.getElementById('score-track-val-' + patId);
  const scDate = document.getElementById('score-track-date-' + patId);
  if(!scName || !scVal) return;
  const val = parseFloat(scVal.value);
  if(isNaN(val)) { scVal.focus(); return; }
  savePatientScore(patId, scName.value, val, scDate ? scDate.value : null);
  scVal.value = '';
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(pt) renderPatientDetail(pt, protocols[pt.protoId]);
}
function renderScoreSection(pt, p) {
  const scores = SCORES[p.id] || [];
  if(!scores.length) return '';
  const patScores = getPatientScores(pt.id);
  const color = getProtoColor(p.id);

  let html = '<div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);">';
  html += '<div class="slabel">Uitkomstmaten bijhouden</div>';

  scores.forEach(sc => {
    const history = patScores[sc.name] || [];
    html += '<div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:12px;">';
    html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">';
    html += '<div><div style="font-size:13px;font-weight:600;">' + sc.name + '</div>';
    html += '<div style="font-size:10.5px;color:var(--muted);font-family:Geist Mono,monospace">' + sc.full + ' · max ' + sc.max + ' · RTS: ' + sc.rts + '</div></div>';
    // Latest value badge
    if(history.length > 0) {
      const latest = history[history.length-1];
      const range = sc.ranges.slice().find(r => sc.invert ? latest.value <= r.max && latest.value >= r.min : latest.value >= r.min && latest.value <= r.max)
        || (sc.invert ? sc.ranges[0] : sc.ranges[sc.ranges.length-1]);
      html += '<div style="background:' + (range ? range.color + '22' : 'var(--surface2)') + ';border:1px solid ' + (range ? range.color + '44' : 'var(--border)') + ';color:' + (range ? range.color : 'var(--muted)') + ';padding:4px 12px;border-radius:20px;font-size:13px;font-weight:700;font-family:Geist Mono,monospace">' + latest.value + ' ' + sc.unit + '</div>';
    }
    html += '</div>';

    // Chart from 1+ measurements
    if(history.length >= 1) {
      html += renderScoreChart(history, sc, color);
    }

    // History table
    if(history.length > 0) {
      html += '<div style="margin-bottom:10px;">';
      html += history.map((h, idx) => {
        const range = sc.ranges.slice().find(r => sc.invert ? h.value <= r.max && h.value >= r.min : h.value >= r.min && h.value <= r.max)
          || (sc.invert ? sc.ranges[0] : sc.ranges[sc.ranges.length-1]);
        const dotColor = range ? range.color : '#71717a';
        return '<div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid var(--border);">' +
          '<div style="width:7px;height:7px;border-radius:50%;background:' + dotColor + ';flex-shrink:0"></div>' +
          '<div style="font-size:11px;color:var(--muted);font-family:Geist Mono,monospace;width:80px;flex-shrink:0">' + formatDate(h.date) + '</div>' +
          '<div style="font-size:12.5px;font-weight:600;color:' + dotColor + '">' + h.value + ' ' + sc.unit + '</div>' +
          '<div style="font-size:11px;color:var(--muted);margin-left:4px">' + (range ? range.label : '') + '</div>' +
          '<button onclick="(function(b){deletePatientScore(b.dataset.p,b.dataset.s,parseInt(b.dataset.i))})(this)" data-p="' + pt.id + '" data-s="' + sc.name + '" data-i="' + idx + '" style="margin-left:auto;background:none;border:none;color:var(--muted2);font-size:11px;cursor:pointer;padding:2px 6px;border-radius:4px;">✕</button>' +
          '</div>';
      }).join('');
      html += '</div>';
    } else {
      html += '<div style="font-size:11.5px;color:var(--muted2);padding:6px 0 10px;font-style:italic">Nog geen metingen geregistreerd.</div>';
    }

    // Add measurement form
    html += '<div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">' +
      '<input id="score-track-val-' + pt.id + '-' + sc.name + '" type="number" min="0" max="' + sc.max + '" placeholder="Score (0–' + sc.max + ')" style="flex:1;min-width:100px;background:var(--surface2);border:1px solid var(--border);border-radius:5px;padding:6px 10px;color:var(--text);font-family:Geist Mono,monospace;font-size:12px;outline:none;">' +
      '<input id="score-track-date-' + pt.id + '-' + sc.name + '" type="date" value="' + new Date().toISOString().slice(0,10) + '" style="background:var(--surface2);border:1px solid var(--border);border-radius:5px;padding:6px 10px;color:var(--text);font-family:Geist,sans-serif;font-size:12px;outline:none;">' +
      '<button onclick="(function(b){addPatientScoreByName(b.dataset.p,b.dataset.s)})(this)" data-p="' + pt.id + '" data-s="' + sc.name + '" style="background:' + color + '22;border:1px solid ' + color + '44;color:' + color + ';padding:6px 12px;border-radius:5px;font-size:12px;font-weight:600;cursor:pointer;font-family:Geist,sans-serif;white-space:nowrap;">+ Toevoegen</button>' +
      '</div>';
    html += '</div>';
  });

  html += '</div>';
  return html;
}
function addPatientScoreByName(patId, scoreName) {
  const valEl = document.getElementById('score-track-val-' + patId + '-' + scoreName);
  const dateEl = document.getElementById('score-track-date-' + patId + '-' + scoreName);
  if(!valEl) return;
  const val = parseFloat(valEl.value);
  if(isNaN(val)) { valEl.focus(); return; }
  savePatientScore(patId, scoreName, val, dateEl ? dateEl.value : null);
  valEl.value = '';
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(pt) renderPatientDetail(pt, protocols[pt.protoId]);
}
function renderScoreChart(history, sc, color) {
  const W = 400, H = 110, PL = 34, PR = 10, PT = 10, PB = 22;
  const iW = W - PL - PR, iH = H - PT - PB;
  const vMin = 0, vMax = sc.max, vRange = vMax - vMin || 1;
  const toX = i => PL + i * (iW / Math.max(history.length - 1, 1));
  const toY = v => PT + iH - ((v - vMin) / vRange) * iH;

  let svg = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:110px;display:block;margin-bottom:10px;" role="img">`;

  // Colored range bands
  sc.ranges.forEach(r => {
    const y1 = Math.max(PT, toY(r.max));
    const y2 = Math.min(PT + iH, toY(r.min));
    if(y2 > y1) svg += `<rect x="${PL}" y="${y1}" width="${iW}" height="${y2 - y1}" fill="${r.color}" opacity="0.07"/>`;
  });

  // Horizontal grid lines + Y-axis labels
  [0, 0.25, 0.5, 0.75, 1].forEach(t => {
    const y = PT + iH * (1 - t);
    const v = Math.round(vMin + t * vRange);
    svg += `<line x1="${PL}" y1="${y}" x2="${W - PR}" y2="${y}" stroke="var(--border)" stroke-width="0.5" opacity="0.6"/>`;
    svg += `<text x="${PL - 4}" y="${y + 3.5}" font-size="7" fill="var(--muted2)" text-anchor="end" font-family="monospace">${v}</text>`;
  });

  // RTS threshold line
  const rtsVal = sc.invert ? sc.ranges[0].max : sc.ranges[sc.ranges.length - 1].min;
  const rtsY = toY(rtsVal);
  if(rtsY >= PT && rtsY <= PT + iH) {
    svg += `<line x1="${PL}" y1="${rtsY}" x2="${W - PR}" y2="${rtsY}" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.7"/>`;
    svg += `<text x="${W - PR - 3}" y="${rtsY - 4}" font-size="7.5" fill="#22c55e" text-anchor="end" font-weight="600" font-family="monospace">RTS</text>`;
  }

  const pts = history.map((h, i) => ({ x: toX(i), y: toY(h.value) }));

  // Area + line (2+ points)
  if(pts.length >= 2) {
    const area = `M ${pts[0].x} ${PT + iH} L ${pts.map(p => `${p.x} ${p.y}`).join(' L ')} L ${pts[pts.length-1].x} ${PT + iH} Z`;
    svg += `<path d="${area}" fill="${color}" opacity="0.12"/>`;
    svg += `<polyline points="${pts.map(p => `${p.x},${p.y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
  }

  // Data points + value labels + date labels
  pts.forEach((p, i) => {
    const h = history[i];
    const band = sc.ranges.find(r => sc.invert ? h.value <= r.max && h.value >= r.min : h.value >= r.min && h.value <= r.max);
    const dc = band ? band.color : color;
    svg += `<circle cx="${p.x}" cy="${p.y}" r="4.5" fill="${dc}" stroke="var(--surface)" stroke-width="2"/>`;
    svg += `<text x="${p.x}" y="${p.y - 9}" font-size="8.5" fill="${dc}" text-anchor="middle" font-weight="700" font-family="monospace">${h.value}</text>`;
    svg += `<text x="${p.x}" y="${H - 3}" font-size="7" fill="var(--muted2)" text-anchor="middle" font-family="monospace">${formatDate(h.date).slice(0, 5)}</text>`;
  });

  // Chart border
  svg += `<rect x="${PL}" y="${PT}" width="${iW}" height="${iH}" fill="none" stroke="var(--border)" stroke-width="0.5" rx="2"/>`;
  svg += `</svg>`;
  return svg;
}

// ── PATIËNT DETAIL ──
function showPatientDetail(patId) {
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(!pt) return;
  const p = protocols[pt.protoId];
  if(!p) return;
  hideAllScreens();
  document.getElementById('screen-patient-detail').style.display = '';
  renderPatientDetail(pt, p);
}
function renderPatientDetail(pt, p) {
  const color = getProtoColor(pt.protoId);
  const age = pt.dob ? calcAge(pt.dob) : null;
  const phaseIdx = pt.phaseIndex || 0;
  const ph = p.phases[phaseIdx];
  const sessions = pt.sessions || [];

  let html = `<div class="pat-detail-header">
    <div class="pat-detail-avatar" style="background:${color}22;color:${color}">${getInitials(esc(pt.name))}</div>
    <div style="flex:1">
      <div class="pat-detail-name">${esc(pt.name)}</div>
      <div class="pat-detail-meta">${age ? age + ' jaar · ' : ''}${pt.dob ? formatDate(pt.dob) + ' · ' : ''}Start: ${formatDate(pt.startDate) || '—'}</div>
    </div>
    <div class="pat-detail-actions">
      <button onclick="showProto('${pt.protoId}')" style="background:${color}18;border:1px solid ${color}33;color:${color};padding:7px 12px;border-radius:6px;font-size:11.5px;cursor:pointer;font-family:Geist,sans-serif;font-weight:600;">${p.title.split(' ').slice(0,2).join(' ')} →</button>
      <button onclick="openPatNew('${pt.id}')" style="background:var(--surface2);border:1px solid var(--border);color:var(--muted);padding:7px 12px;border-radius:6px;font-size:11.5px;cursor:pointer;font-family:Geist,sans-serif;">✏️</button>
      <button onclick="deletePatient('${pt.id}')" style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.2);color:#ef4444;padding:7px 12px;border-radius:6px;font-size:11.5px;cursor:pointer;font-family:Geist,sans-serif;">🗑</button>
    </div>
  </div>
  <div style="margin-bottom:6px;cursor:pointer;font-size:11px;color:var(--muted)" onclick="showPatients()">← Terug naar patiënten</div>`;

  // Fase tijdlijn (groot)
  html += `<div class="slabel" style="margin-top:16px">Voortgang protocol</div>`;
  html += `<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;">`;
  p.phases.forEach((phase, i) => {
    const isCurrent = i === phaseIdx;
    const isDone = i < phaseIdx;
    html += `<div onclick="setPatientPhase('${pt.id}',${i})" style="display:flex;align-items:center;gap:7px;padding:8px 12px;border-radius:7px;border:1px solid ${isCurrent?color:isDone?color+'55':'var(--border)'};background:${isCurrent?color+'18':isDone?color+'08':'var(--surface2)'};cursor:pointer;transition:all .12s;">
      <div style="width:10px;height:10px;border-radius:50%;background:${isCurrent?color:isDone?color:'var(--border2)'};flex-shrink:0;${isDone?'opacity:.6':''}"></div>
      <div>
        <div style="font-size:12px;font-weight:${isCurrent?700:500};color:${isCurrent?'var(--text)':'var(--muted)'}">${phase.label}</div>
        <div style="font-size:10px;color:var(--muted2);font-family:Geist Mono,monospace">${phase.weeks}${(pt.phaseHistory||{})[i] ? ' · ' + formatDate(pt.phaseHistory[i]) : ''}</div>
      </div>
      ${isCurrent ? `<div style="margin-left:4px;font-size:9px;background:${color};color:#000;padding:1px 6px;border-radius:8px;font-weight:700;font-family:Geist Mono,monospace">NU</div>` : ''}
      ${isDone ? `<div style="margin-left:4px;font-size:12px;opacity:.6">✓</div>` : ''}
    </div>`;
  });
  html += `</div>`;

  // Criteria checklist (go/stop/redflags voor huidige fase)
  html += renderCriteriaSection(pt, p);

  // Sessie log
  html += renderSessionSection(pt, p);

  // Scores section
  html += renderScoreSection(pt, p);

  // Testformulieren sectie
  const ptProtoForms = Object.entries(FORMS).filter(e => e[1].protocol === p.id);
  if(ptProtoForms.length > 0) {
    html += '<div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);">';
    html += '<div class="slabel">Testformulieren</div><div style="display:flex;gap:8px;flex-wrap:wrap;">';
    ptProtoForms.forEach(([fId, frm]) => {
      html += `<button onclick="openForm('${fId}','${pt.id}')" style="background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.2);color:#a78bfa;padding:8px 14px;border-radius:6px;font-size:12px;cursor:pointer;font-family:Geist,sans-serif;font-weight:500;">📝 ${frm.name}</button>`;
    });
    html += '</div></div>';
  }

  // Export + print
  html += `<div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);display:flex;gap:8px;flex-wrap:wrap;">
    <button onclick="printOefenblad('${pt.id}')" style="background:${color}18;border:1px solid ${color}44;color:${color};padding:8px 14px;border-radius:6px;font-size:12px;cursor:pointer;font-family:Geist,sans-serif;font-weight:600;">📋 Oefenblad afdrukken</button>
    <button onclick="exportPatient('${pt.id}')" style="background:var(--surface2);border:1px solid var(--border);color:var(--text);padding:8px 14px;border-radius:6px;font-size:12px;cursor:pointer;font-family:Geist,sans-serif;">📄 Exporteer traject</button>
  </div>`;

  document.getElementById('pat-detail-body').innerHTML = html;
}
function setPatientPhase(patId, phaseIdx) {
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(!pt) return;
  pt.phaseIndex = phaseIdx;
  // Datum van fase-overgang vastleggen (alleen bij eerste keer bereiken)
  pt.phaseHistory = pt.phaseHistory || {};
  if(!pt.phaseHistory[phaseIdx]) pt.phaseHistory[phaseIdx] = new Date().toISOString().slice(0, 10);
  savePatients(pts);
  const p = protocols[pt.protoId];
  renderPatientDetail(pt, p);
}
// ── SESSIE-LOG ──
function renderSessionSection(pt, p) {
  const sessions = pt.sessions || [];
  const phaseIdx = pt.phaseIndex || 0;
  const ph = p.phases[phaseIdx];
  const exs = ph ? ph.exercises : [];
  const color = protocols[pt.protoId]?.color || '#71717a';
  const today = new Date().toISOString().slice(0, 10);

  let html = `<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
    <div class="slabel" style="margin-bottom:0">Sessie-log <span style="font-weight:400;color:var(--muted2);font-size:10px;">(${sessions.length} sessies)</span></div>
    <button class="session-new-btn" id="sf-toggle-${pt.id}" onclick="toggleSessionForm('${pt.id}',true)">+ Nieuwe sessie</button>
  </div>`;

  // Inline sessie-formulier
  html += `<div id="sf-form-${pt.id}" style="display:none;">
    <div class="session-form-card">
      <div class="session-form-title">Sessie registreren — ${ph ? ph.label : ''}</div>
      <div class="session-form-grid">
        <div>
          <div class="form-label">Datum</div>
          <input type="date" id="sf-date-${pt.id}" value="${today}" class="form-input" style="font-size:12px;padding:7px 10px;">
        </div>
        <div>
          <div class="form-label">NRS Pijn (0–10)</div>
          <div style="display:flex;align-items:center;gap:10px;margin-top:8px;">
            <input type="range" id="sf-nrs-${pt.id}" min="0" max="10" value="3" style="flex:1;accent-color:${color};"
              oninput="const v=this.value,el=document.getElementById('sf-nrsv-${pt.id}');el.textContent=v;el.style.color=v<=3?'#22c55e':v<=6?'#f59e0b':'#ef4444'">
            <span id="sf-nrsv-${pt.id}" style="font-size:20px;font-weight:700;font-family:Geist Mono,monospace;color:#22c55e;min-width:24px;text-align:right;">3</span>
          </div>
        </div>
        <div>
          <div class="form-label">Duur (min)</div>
          <input type="number" id="sf-duur-${pt.id}" value="45" min="5" max="180" class="form-input" style="font-size:12px;padding:7px 10px;">
        </div>
      </div>
      ${exs.length ? `<div style="margin-bottom:12px;">
        <div class="form-label" style="margin-bottom:8px;">Oefeningen uitgevoerd</div>
        <div class="session-ex-grid">
          ${exs.map((ex, i) => `<label class="session-ex-check">
            <input type="checkbox" id="sf-ex-${pt.id}-${i}" value="${ex.name}" style="accent-color:${color};flex-shrink:0;">
            <span>${ex.name}</span>
          </label>`).join('')}
        </div>
      </div>` : ''}
      <div class="form-label">Klinische notitie</div>
      <textarea id="sf-note-${pt.id}" class="add-session-area" style="margin-top:6px;min-height:72px;" placeholder="Bijv: goede tolerantie, NRS daalt naar 3, LSI quad 82%, ROM 130°..."></textarea>
      <div style="display:flex;gap:8px;margin-top:12px;">
        <button onclick="saveSession('${pt.id}')" style="background:${color};color:#000;border:none;padding:9px 18px;border-radius:6px;font-size:12.5px;font-weight:700;cursor:pointer;font-family:Geist,sans-serif;">Sessie opslaan</button>
        <button onclick="toggleSessionForm('${pt.id}',false)" style="background:var(--surface3);border:1px solid var(--border);color:var(--muted);padding:9px 14px;border-radius:6px;font-size:12px;cursor:pointer;font-family:Geist,sans-serif;">Annuleren</button>
      </div>
    </div>
  </div>`;

  if(sessions.length) {
    html += `<div class="session-list">`;
    sessions.slice().reverse().forEach((s, ri) => {
      const idx = sessions.length - 1 - ri;
      const sPhLabel = p.phases[s.phaseIdx]?.label || '';
      const nrs = s.nrs != null ? parseInt(s.nrs) : null;
      const nrsColor = nrs == null ? null : nrs <= 3 ? '#22c55e' : nrs <= 6 ? '#f59e0b' : '#ef4444';
      html += `<div class="session-card">
        <div class="session-card-header">
          <span class="session-date-badge">${formatDate(s.date)}</span>
          ${sPhLabel ? `<span class="session-phase-tag">${sPhLabel}</span>` : ''}
          ${s.duur ? `<span class="session-meta-tag">⏱ ${s.duur} min</span>` : ''}
          ${nrs != null ? `<span class="session-nrs-badge" style="background:${nrsColor}22;border-color:${nrsColor}55;color:${nrsColor};">NRS ${nrs}</span>` : ''}
          <button class="session-del" onclick="deleteSession('${pt.id}',${idx})" title="Verwijder">✕</button>
        </div>
        ${s.exs && s.exs.length ? `<div class="session-exs">${s.exs.map(e => `<span class="session-ex-tag">${e}</span>`).join('')}</div>` : ''}
        ${s.note ? `<div class="session-note">${s.note}</div>` : ''}
      </div>`;
    });
    html += `</div>`;
  } else {
    html += `<div class="session-empty">Nog geen sessies. Klik op "+ Nieuwe sessie" om te starten.</div>`;
  }
  return html;
}

function toggleSessionForm(patId, show) {
  const form = document.getElementById('sf-form-' + patId);
  const btn = document.getElementById('sf-toggle-' + patId);
  if(!form) return;
  form.style.display = show ? '' : 'none';
  if(btn) btn.style.display = show ? 'none' : '';
  if(show) setTimeout(() => form.scrollIntoView({behavior:'smooth', block:'nearest'}), 50);
}

function saveSession(patId) {
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(!pt) return;
  const phaseIdx = pt.phaseIndex || 0;
  const exs = protocols[pt.protoId]?.phases[phaseIdx]?.exercises || [];
  const selectedExs = exs.map((ex, i) => {
    const cb = document.getElementById(`sf-ex-${patId}-${i}`);
    return cb?.checked ? ex.name : null;
  }).filter(Boolean);
  const session = {
    id: genId(),
    date: document.getElementById(`sf-date-${patId}`)?.value || new Date().toISOString().slice(0, 10),
    phaseIdx,
    nrs: parseInt(document.getElementById(`sf-nrs-${patId}`)?.value) ?? null,
    duur: parseInt(document.getElementById(`sf-duur-${patId}`)?.value) || null,
    exs: selectedExs,
    note: document.getElementById(`sf-note-${patId}`)?.value?.trim() || ''
  };
  if(!pt.sessions) pt.sessions = [];
  pt.sessions.push(session);
  savePatients(pts);
  renderPatientDetail(pt, protocols[pt.protoId]);
}

function deleteSession(patId, idx) {
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(!pt || !pt.sessions) return;
  pt.sessions.splice(idx, 1);
  savePatients(pts);
  renderPatientDetail(pt, protocols[pt.protoId]);
}
function deletePatient(patId) {
  if(!confirm('Patiënt verwijderen? Dit kan niet ongedaan worden.')) return;
  const pts = loadPatients().filter(p => p.id !== patId);
  savePatients(pts);
  try { localStorage.removeItem('kp_scores_' + patId); } catch(e) {}
  // Sync deletion to Supabase
  syncToSupabase(loadPatients());
  showPatients();
}

// ── NIEUWE / BEWERK PATIËNT MODAL ──
function openPatNew(editId) {
  editingPatientId = editId || null;
  const title = editId ? 'Patiënt bewerken' : 'Nieuwe patiënt';
  document.getElementById('pat-new-title').textContent = title;
  // Fill protocol selector
  const sel = document.getElementById('pat-form-proto');
  sel.innerHTML = Object.values(protocols).map(p => `<option value="${p.id}">${p.title}</option>`).join('');
  sel.onchange = updatePhaseOptions;
  // Fill phase selector
  updatePhaseOptions();
  // Set today as default dates
  const today = new Date().toISOString().slice(0,10);
  if(!editId) {
    document.getElementById('pat-form-name').value = '';
    document.getElementById('pat-form-dob').value = '';
    document.getElementById('pat-form-start').value = today;
    document.getElementById('pat-form-phase').value = '0';
    document.getElementById('pat-form-note').value = '';
  } else {
    const pts = loadPatients();
    const pt = pts.find(p => p.id === editId);
    if(pt) {
      document.getElementById('pat-form-name').value = pt.name;
      document.getElementById('pat-form-dob').value = pt.dob || '';
      document.getElementById('pat-form-start').value = pt.startDate || today;
      document.getElementById('pat-form-proto').value = pt.protoId;
      updatePhaseOptions();
      document.getElementById('pat-form-phase').value = pt.phaseIndex || 0;
      document.getElementById('pat-form-note').value = '';
    }
  }
  document.getElementById('pat-new-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('pat-form-name').focus(), 100);
}
function closePatNew() { document.getElementById('pat-new-modal').classList.remove('open'); document.body.style.overflow = ''; }
function updatePhaseOptions() {
  const pid = document.getElementById('pat-form-proto').value;
  const p = protocols[pid];
  const sel = document.getElementById('pat-form-phase');
  if(p) sel.innerHTML = p.phases.map((ph,i) => `<option value="${i}">${ph.label} — ${ph.title}</option>`).join('');
}
function savePatient() {
  const name = document.getElementById('pat-form-name').value.trim();
  if(!name) { document.getElementById('pat-form-name').focus(); return; }
  const protoId = document.getElementById('pat-form-proto').value;
  const dob = document.getElementById('pat-form-dob').value;
  const startDate = document.getElementById('pat-form-start').value;
  const phaseIndex = parseInt(document.getElementById('pat-form-phase').value) || 0;
  const note = document.getElementById('pat-form-note').value.trim();
  const pts = loadPatients();
  if(editingPatientId) {
    const pt = pts.find(p => p.id === editingPatientId);
    if(pt) { pt.name = name; pt.dob = dob; pt.startDate = startDate; pt.protoId = protoId; pt.phaseIndex = phaseIndex; }
  } else {
    const newPt = {id: genId(), name, dob, startDate, protoId, phaseIndex, sessions: [],
      phaseHistory: {[phaseIndex]: startDate || new Date().toISOString().slice(0,10)}};
    if(note) newPt.sessions.push({date: startDate || new Date().toISOString().slice(0,10), note, phaseIdx: phaseIndex});
    pts.push(newPt);
  }
  savePatients(pts);
  closePatNew();
  if(editingPatientId) {
    const pt = pts.find(p => p.id === editingPatientId);
    if(pt) showPatientDetail(pt.id);
  } else {
    showPatients();
  }
}

// ── KOPPEL PATIËNT AAN PROTOCOL ──
function openPatLink() {
  if(!currentProto) return;
  const pts = loadPatients().filter(p => p.protoId === currentProto.id);
  const body = document.getElementById('pat-link-body');
  if(!pts.length) {
    body.innerHTML = `<div style="color:var(--muted);font-size:13px;padding:12px 0;">Geen patiënten gekoppeld aan dit protocol.<br><br><button onclick="closePatLink();openPatNew()" style="background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.3);color:#4ade80;padding:8px 14px;border-radius:6px;font-size:12px;cursor:pointer;font-family:Geist,sans-serif;font-weight:600;">+ Nieuwe patiënt aanmaken</button></div>`;
  } else {
    body.innerHTML = `<div style="color:var(--muted);font-size:12px;margin-bottom:12px;">Patiënten met ${currentProto.title} protocol:</div>` +
    pts.map(pt => {
      const color = getProtoColor(pt.protoId);
      const ph = protocols[pt.protoId]?.phases[pt.phaseIndex||0];
      return `<div onclick="closePatLink();showPatientDetail('${pt.id}')" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:7px;border:1px solid var(--border);margin-bottom:8px;cursor:pointer;transition:border-color .12s;" onmouseover="this.style.borderColor='var(--border2)'" onmouseout="this.style.borderColor='var(--border)'">
        <div style="width:34px;height:34px;border-radius:50%;background:${color}22;color:${color};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700">${getInitials(esc(pt.name))}</div>
        <div style="flex:1"><div style="font-size:13px;font-weight:600">${esc(pt.name)}</div><div style="font-size:10.5px;color:var(--muted);font-family:Geist Mono,monospace">${ph?ph.label+' · ':''} Start: ${formatDate(pt.startDate)||'—'}</div></div>
        <div style="font-size:11px;color:var(--muted)">→</div>
      </div>`;
    }).join('') +
    `<button onclick="closePatLink();openPatNew()" style="width:100%;margin-top:6px;background:rgba(74,222,128,.08);border:1px solid rgba(74,222,128,.2);color:#4ade80;padding:8px;border-radius:6px;font-size:12px;cursor:pointer;font-family:Geist,sans-serif;font-weight:500;">+ Nieuwe patiënt toevoegen</button>`;
  }
  document.getElementById('pat-link-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closePatLink() { document.getElementById('pat-link-modal').classList.remove('open'); document.body.style.overflow = ''; }

// ── EXPORT PATIËNT ──
function exportPatient(patId) {
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(!pt) return;
  const p = protocols[pt.protoId];
  const ph = p.phases[pt.phaseIndex||0];
  const age = pt.dob ? calcAge(pt.dob) : null;
  const datum = new Date().toLocaleDateString('nl-BE',{day:'2-digit',month:'2-digit',year:'numeric'});
  let text = `KINEPROTOCOL — PATIËNTENTRAJECT
${'='.repeat(50)}
`;
  text += `Patiënt:     ${pt.name}
`;
  if(age) text += `Leeftijd:    ${age} jaar (${formatDate(pt.dob)})
`;
  text += `Protocol:    ${p.title}
`;
  text += `Startdatum:  ${formatDate(pt.startDate) || '—'}
`;
  text += `Huidige fase: ${ph ? ph.label + ' — ' + ph.title : '—'}
`;
  text += `Gegenereerd: ${datum}

`;
  if(pt.sessions?.length) {
    text += `SESSIENOTITIES
${'-'.repeat(40)}
`;
    pt.sessions.forEach(s => {
      const sPh = p.phases[s.phaseIdx];
      text += `${formatDate(s.date)} · ${sPh ? sPh.label : ''}
${s.note}

`;
    });
  }
  text += `KineProtocol · ${datum}`;
  navigator.clipboard.writeText(text).then(() => alert('Gekopieerd naar klembord!')).catch(() => {
    const ta = document.createElement('textarea'); ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    alert('Gekopieerd naar klembord!');
  });
}
function printPatient(patId) {
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(!pt) return;
  const p = protocols[pt.protoId];
  const ph = p.phases[pt.phaseIndex||0];
  const age = pt.dob ? calcAge(pt.dob) : null;
  const datum = new Date().toLocaleDateString('nl-BE',{day:'2-digit',month:'2-digit',year:'numeric'});
  let html = `<h1>Patiëntentraject — ${pt.name}</h1>`;
  html += `<div class="pf-meta">Protocol: ${p.title} · Fase: ${ph?ph.label:'—'} · Start: ${formatDate(pt.startDate)||'—'} · ${age?age+' jaar · ':''}${datum}</div>`;
  if(pt.sessions?.length) {
    html += `<h2>Sessienotities</h2>`;
    pt.sessions.forEach(s => {
      const sPh = p.phases[s.phaseIdx];
      html += `<div class="pf-ex"><div class="pf-ex-name">${formatDate(s.date)} · ${sPh?sPh.label:''}</div></div><div style="font-size:11px;color:#333;padding:2px 0 8px 8px">${s.note}</div>`;
    });
  }
  html += `<div class="pf-footer">KineProtocol · ${datum}</div>`;
  document.getElementById('print-fiche').innerHTML = html;
  window.print();
}

// ── THUISOEFENBLAD ──
// ── BACKUP & HERSTEL ──
function exportBackup() {
  const pts = loadPatients();
  const scores = {};
  pts.forEach(pt => { scores[pt.id] = getPatientScores(pt.id); });
  const data = {
    app: 'KineProtocol', backupVersion: 1, appVersion: (typeof APP_VERSION !== 'undefined' ? APP_VERSION : '?'),
    date: new Date().toISOString(),
    patients: pts, scores,
    favs: JSON.parse(localStorage.getItem('kp_favs') || '[]'),
  };
  const blob = new Blob([JSON.stringify(data, null, 1)], {type: 'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'kineprotocol-backup-' + new Date().toISOString().slice(0,10) + '.json';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}

function importBackupFile(input) {
  const file = input.files && input.files[0];
  input.value = '';
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    let data;
    try { data = JSON.parse(reader.result); } catch(e) { alert('Ongeldig backupbestand (geen geldige JSON).'); return; }
    if(!data || data.app !== 'KineProtocol' || !Array.isArray(data.patients)) { alert('Dit is geen KineProtocol-backup.'); return; }
    const huidige = loadPatients().length;
    if(!confirm(`Backup van ${formatDate(data.date?.slice(0,10)) || '?'} met ${data.patients.length} patiënt(en) terugzetten?\n\nDit VERVANGT de huidige ${huidige} patiënt(en) op dit toestel.`)) return;
    savePatients(data.patients);
    Object.keys(localStorage).filter(k => k.startsWith('kp_scores_')).forEach(k => localStorage.removeItem(k));
    Object.entries(data.scores || {}).forEach(([patId, sc]) => {
      try { localStorage.setItem('kp_scores_' + patId, JSON.stringify(sc)); } catch(e) {}
    });
    if(Array.isArray(data.favs)) localStorage.setItem('kp_favs', JSON.stringify(data.favs));
    updatePatientBadge();
    if(typeof buildNav === 'function') buildNav();
    renderPatientList(); renderDashSummary();
    alert(`Backup teruggezet: ${data.patients.length} patiënt(en).`);
  };
  reader.readAsText(file);
}

function printOefenblad(patId) {
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(!pt) return;
  const p = protocols[pt.protoId];
  const phaseIdx = pt.phaseIndex || 0;
  const ph = p.phases[phaseIdx];
  const age = pt.dob ? calcAge(pt.dob) : null;
  const datum = new Date().toLocaleDateString('nl-BE', {day:'2-digit', month:'2-digit', year:'numeric'});
  const color = p.color;
  const exs = ph ? ph.exercises : [];

  const dagen = ['ma','di','wo','do','vr','za','zo'];
  const weekTrack = `<div class="week-track">
    <span class="wt-label">Weekschema</span>
    ${dagen.map(d => `<span class="wt-day"><span class="wt-box"></span>${d}</span>`).join('')}
  </div>`;

  const exsHtml = exs.map((ex, i) => {
    const params = ex.params ? ex.params.map(([k,v]) => `<span class="param"><strong>${k}</strong> ${v}</span>`).join('') : '';
    const catLabel = ex.cat ? `<span class="ex-cat">${ex.cat}</span>` : '';
    // Afbeelding indien beschikbaar; relatieve paden absoluut maken (printvenster is about:blank)
    const imgEntry = (typeof exerciseImages !== 'undefined') ? exerciseImages[ex.name] : null;
    const imgHtml = imgEntry && imgEntry.url
      ? `<div class="ex-img"><img src="${new URL(imgEntry.url, window.location.href).href}" alt="${esc(imgEntry.alt || ex.name)}" onerror="this.parentNode.style.display='none'"></div>`
      : '';
    return `<div class="ex-card">
      <div class="ex-row">
        <div class="ex-main">
          <div class="ex-header">
            <div class="ex-num">${i + 1}</div>
            <div class="ex-content">
              <div class="ex-name">${ex.name}</div>
              ${catLabel}
            </div>
          </div>
          ${params ? `<div class="ex-params">${params}</div>` : ''}
          ${ex.note ? `<div class="ex-note">${ex.note}</div>` : ''}
        </div>
        ${imgHtml}
      </div>
      ${weekTrack}
    </div>`;
  }).join('');

  const goalsHtml = ph?.goals?.length ? `<div class="goals-box">
    <div class="goals-title">Doelstellingen — ${ph.label}</div>
    ${ph.goals.map(g => `<div class="goal-row"><span class="goal-bullet" style="color:${color}">▸</span><span>${g}</span></div>`).join('')}
  </div>` : '';

  const html = `<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<title>Oefenblad — ${pt.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist+Mono:wght@400;500&family=Geist:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Geist',sans-serif;color:#111;background:#fff;font-size:13px;line-height:1.5;}
  .page{max-width:780px;margin:0 auto;padding:36px 44px;}
  header{display:flex;align-items:flex-start;justify-content:space-between;padding-bottom:16px;margin-bottom:20px;border-bottom:3px solid ${color};}
  .hdr-title{font-family:'Instrument Serif',serif;font-size:28px;font-weight:400;color:${color};margin-bottom:4px;letter-spacing:-.02em;}
  .hdr-proto{font-size:13px;color:#555;margin-bottom:10px;}
  .hdr-meta{font-size:11.5px;color:#444;font-family:'Geist Mono',monospace;display:flex;flex-direction:column;gap:2px;}
  .hdr-right{text-align:right;}
  .hdr-logo{font-family:'Instrument Serif',serif;font-size:20px;color:#111;margin-bottom:2px;}
  .hdr-sub{font-size:10px;color:#999;font-family:'Geist Mono',monospace;}
  .hdr-date{font-size:11px;color:#aaa;margin-top:8px;font-family:'Geist Mono',monospace;}
  .phase-banner{display:flex;align-items:center;gap:12px;background:${color}0d;border:1.5px solid ${color}44;border-radius:8px;padding:11px 16px;margin-bottom:16px;}
  .phase-dot{width:12px;height:12px;border-radius:50%;background:${color};flex-shrink:0;}
  .phase-label{font-size:11px;color:${color};font-family:'Geist Mono',monospace;font-weight:600;margin-bottom:2px;}
  .phase-title{font-size:15px;font-weight:600;}
  .phase-weeks{font-size:11px;color:#888;font-family:'Geist Mono',monospace;margin-left:10px;}
  .goals-box{background:#f7f7f7;border-radius:8px;padding:12px 16px;margin-bottom:18px;}
  .goals-title{font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:#888;font-family:'Geist Mono',monospace;margin-bottom:8px;}
  .goal-row{display:flex;gap:8px;font-size:12px;color:#333;margin-bottom:3px;}
  .goal-bullet{flex-shrink:0;font-weight:700;}
  .section-label{font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:#aaa;font-family:'Geist Mono',monospace;margin-bottom:12px;}
  .ex-card{border:1px solid #e5e5e5;border-radius:8px;padding:14px 16px;margin-bottom:11px;break-inside:avoid;page-break-inside:avoid;}
  .ex-header{display:flex;align-items:flex-start;gap:10px;margin-bottom:8px;}
  .ex-num{width:26px;height:26px;border-radius:50%;background:${color};color:#000;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;margin-top:1px;}
  .ex-content{flex:1;}
  .ex-name{font-size:14px;font-weight:600;margin-bottom:2px;}
  .ex-cat{font-size:10px;color:${color};font-family:'Geist Mono',monospace;text-transform:uppercase;letter-spacing:.08em;}
  .ex-params{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px;}
  .param{background:${color}12;border:1px solid ${color}30;border-radius:4px;padding:3px 9px;font-size:11.5px;font-family:'Geist Mono',monospace;}
  .ex-note{font-size:11.5px;color:#666;line-height:1.55;font-style:italic;}
  .ex-row{display:flex;gap:14px;align-items:flex-start;}
  .ex-main{flex:1;min-width:0;}
  .ex-img{width:92px;flex-shrink:0;border:1px solid #eee;border-radius:6px;overflow:hidden;background:#fafafa;}
  .ex-img img{width:100%;height:80px;object-fit:contain;display:block;padding:4px;box-sizing:border-box;}
  .week-track{display:flex;align-items:center;gap:10px;margin-top:10px;padding-top:9px;border-top:1px dashed #e8e8e8;}
  .wt-label{font-size:9px;color:#aaa;text-transform:uppercase;letter-spacing:.08em;margin-right:2px;}
  .wt-day{display:inline-flex;align-items:center;gap:4px;font-size:10px;color:#888;font-family:'Geist Mono',monospace;}
  .wt-box{width:13px;height:13px;border:1.5px solid #ccc;border-radius:3px;display:inline-block;}
  footer{margin-top:28px;padding-top:12px;border-top:1px solid #eee;display:flex;justify-content:space-between;align-items:flex-start;gap:16px;}
  .footer-info{font-size:10px;color:#bbb;}
  .footer-info strong{color:#999;}
  .footer-warning{font-size:10.5px;color:#d97706;background:#fffbeb;border:1px solid #fde68a;border-radius:5px;padding:5px 10px;}
  @media print{
    *{-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    .page{padding:0;max-width:none;}
    body{font-size:12px;padding-bottom:34px;}
    @page{margin:1.4cm 1.6cm;}
    .goals-box,.phase-banner{break-inside:avoid;page-break-inside:avoid;}
    footer{position:fixed;bottom:0;left:0;right:0;background:#fff;margin:0;padding:6px 0;border-top:1px solid #eee;}
  }
</style>
</head>
<body>
<div class="page">
  <header>
    <div>
      <div class="hdr-title">Thuisoefenprogramma</div>
      <div class="hdr-proto">${p.title}</div>
      <div class="hdr-meta">
        <div>Patiënt: <strong>${pt.name}</strong>${age ? ' · ' + age + ' jaar' : ''}</div>
        <div>Startdatum: <strong>${formatDate(pt.startDate) || '—'}</strong></div>
      </div>
    </div>
    <div class="hdr-right">
      <div class="hdr-logo">KineProtocol</div>
      <div class="hdr-sub">Evidence-based revalidatie</div>
      <div class="hdr-date">Aangemaakt: ${datum}</div>
    </div>
  </header>

  ${ph ? `<div class="phase-banner">
    <div class="phase-dot"></div>
    <div style="flex:1;">
      <div style="display:flex;align-items:center;gap:10px;">
        <div class="phase-label">${ph.label}</div>
        <div class="phase-title">${ph.title}</div>
        <div class="phase-weeks">${ph.weeks}</div>
      </div>
    </div>
  </div>` : ''}

  ${goalsHtml}

  <div class="section-label">${exs.length} oefeningen · ${ph ? ph.label : 'Huidig programma'}</div>
  ${exsHtml}

  <footer>
    <div class="footer-info">KineProtocol · ${datum} · <strong>${pt.name}</strong> · <strong>${p.title}</strong></div>
    <div class="footer-warning">⚠ Stop bij toename van klachten en contacteer uw kinesitherapeut.</div>
  </footer>
</div>
<script>window.addEventListener('load',()=>window.print());<\/script>
</body>
</html>`;

  const win = window.open('', '_blank');
  if(!win) { alert('Pop-up geblokkeerd. Sta pop-ups toe voor KineProtocol.'); return; }
  win.document.write(html);
  win.document.close();
}
