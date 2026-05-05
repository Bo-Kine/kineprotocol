// KineProtocol — Patiënten: CRUD, UI, sessienotities


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
  const colors = {acl:'#22d3ee',tka:'#a78bfa',pfps:'#f97316',lh:'#34d399',rc:'#f43f5e',pt:'#fb923c',at:'#e879f9',bureau:'#60a5fa',enkel:'#f59e0b',over:'#10b981'};
  return colors[pid] || '#71717a';
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


// ── PATIËNTEN SCHERM ──
function showPatients() {
  hideAllScreens();
  document.getElementById('screen-patients').style.display = '';
  setNav('patients');
  renderPatientList();
}
function renderPatientList() {
  const pts = loadPatients();
  const container = document.getElementById('pat-list-container');
  if(!pts.length) {
    container.innerHTML = `<div class="pat-empty"><div class="pat-empty-icon">👥</div><div class="pat-empty-text">Nog geen patiënten</div><div class="pat-empty-sub">Voeg een patiënt toe om hun traject bij te houden.</div></div>`;
    return;
  }
  container.innerHTML = `<div class="pat-list">${pts.map(pt => {
    const p = protocols[pt.protoId];
    if(!p) return '';
    const color = getProtoColor(pt.protoId);
    const phaseIdx = pt.phaseIndex || 0;
    const ph = p.phases[phaseIdx];
    const progress = Math.round(((phaseIdx) / p.phases.length) * 100);
    const age = pt.dob ? calcAge(pt.dob) : null;
    const lastNote = pt.sessions && pt.sessions.length ? pt.sessions[pt.sessions.length-1].note : '';
    return `<div class="pat-card" onclick="showPatientDetail('${pt.id}')">
      <div class="pat-card-top">
        <div class="pat-avatar" style="background:${color}22;color:${color}">${getInitials(pt.name)}</div>
        <div style="flex:1">
          <div class="pat-name">${pt.name}</div>
          <div class="pat-meta">${age ? age + 'j · ' : ''}Start: ${formatDate(pt.startDate) || '—'}</div>
        </div>
        <div class="pat-proto-badge" style="background:${color}18;color:${color}">${pt.protoId.toUpperCase()}</div>
      </div>
      <div class="pat-progress">
        <div class="pat-phase-label">${ph ? ph.label + ' — ' + ph.title : '—'}</div>
        <div class="pat-progress-label">${phaseIdx+1}/${p.phases.length}</div>
      </div>
      <div class="pat-progress" style="margin-top:5px;">
        <div class="pat-progress-bar"><div class="pat-progress-fill" style="width:${progress}%;background:${color}"></div></div>
        <div class="pat-progress-label">${progress}%</div>
      </div>
      ${lastNote ? `<div class="pat-notes-preview">📝 ${lastNote}</div>` : ''}
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

    // Mini chart if 2+ measurements
    if(history.length >= 2) {
      html += renderMiniChart(history, sc, color);
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
function renderMiniChart(history, sc, color) {
  const W = 280, H = 60, PAD = 8;
  const vals = history.map(h => h.value);
  const minV = Math.min(...vals, 0);
  const maxV = Math.max(...vals, sc.max);
  const range = maxV - minV || 1;
  const xStep = (W - PAD*2) / (history.length - 1 || 1);

  // Points
  const points = history.map((h, i) => ({
    x: PAD + i * xStep,
    y: H - PAD - ((h.value - minV) / range) * (H - PAD*2)
  }));

  // Polyline
  const polyline = points.map(p => p.x + ',' + p.y).join(' ');

  // RTS threshold line (first range boundary)
  const rtsVal = sc.invert ? sc.ranges[0].max : sc.ranges[0].min;
  const rtsY = H - PAD - ((rtsVal - minV) / range) * (H - PAD*2);

  let svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;height:60px;margin-bottom:8px;display:block;">';
  svg += '<rect width="' + W + '" height="' + H + '" fill="var(--surface2)" rx="4"/>';
  // RTS line
  if(rtsY >= PAD && rtsY <= H-PAD) {
    svg += '<line x1="' + PAD + '" y1="' + rtsY + '" x2="' + (W-PAD) + '" y2="' + rtsY + '" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>';
    svg += '<text x="' + (W-PAD-2) + '" y="' + (rtsY-2) + '" font-size="7" fill="#22c55e" text-anchor="end" opacity="0.7">RTS</text>';
  }
  // Area fill
  if(points.length > 1) {
    const areaPath = 'M ' + points[0].x + ' ' + (H-PAD) + ' L ' + points.map(p => p.x + ' ' + p.y).join(' L ') + ' L ' + points[points.length-1].x + ' ' + (H-PAD) + ' Z';
    svg += '<path d="' + areaPath + '" fill="' + color + '" opacity="0.12"/>';
    svg += '<polyline points="' + polyline + '" fill="none" stroke="' + color + '" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>';
  }
  // Dots
  points.forEach((p, i) => {
    svg += '<circle cx="' + p.x + '" cy="' + p.y + '" r="3" fill="' + color + '"/>';
    svg += '<text x="' + p.x + '" y="' + (H-1) + '" font-size="7" fill="var(--muted2)" text-anchor="middle" font-family="monospace">' + formatDate(history[i].date).slice(0,5) + '</text>';
  });
  svg += '</svg>';
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
    <div class="pat-detail-avatar" style="background:${color}22;color:${color}">${getInitials(pt.name)}</div>
    <div style="flex:1">
      <div class="pat-detail-name">${pt.name}</div>
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
        <div style="font-size:10px;color:var(--muted2);font-family:Geist Mono,monospace">${phase.weeks}</div>
      </div>
      ${isCurrent ? `<div style="margin-left:4px;font-size:9px;background:${color};color:#000;padding:1px 6px;border-radius:8px;font-weight:700;font-family:Geist Mono,monospace">NU</div>` : ''}
      ${isDone ? `<div style="margin-left:4px;font-size:12px;opacity:.6">✓</div>` : ''}
    </div>`;
  });
  html += `</div>`;

  // Sessie log
  html += `<div class="slabel">Sessienotities</div>`;
  if(sessions.length) {
    html += `<div class="session-list">`;
    sessions.slice().reverse().forEach((s, ri) => {
      const idx = sessions.length - 1 - ri;
      html += `<div class="session-item">
        <div class="session-date">${formatDate(s.date)} · ${p.phases[s.phaseIdx]?.label || ''}</div>
        <div class="session-note">${s.note}</div>
        <div class="session-actions"><button class="session-del" onclick="deleteSession('${pt.id}',${idx})">Verwijder</button></div>
      </div>`;
    });
    html += `</div>`;
  } else {
    html += `<div style="color:var(--muted);font-size:12px;padding:12px 0;">Nog geen sessies geregistreerd.</div>`;
  }

  html += `<textarea class="add-session-area" id="new-session-text" placeholder="Sessienotitie toevoegen... (bijv. fase 2 gestart, LSI quad 74%, klachten afgenomen)"></textarea>
  <button class="add-session-btn" onclick="addSession('${pt.id}')">+ Notitie opslaan</button>`;

  // Scores section
  html += renderScoreSection(pt, p);

  // Testformulieren sectie
  var ptProtoForms = Object.entries(FORMS).filter(function(e){return e[1].protocol===p.id;});
  if(ptProtoForms.length > 0) {
    html += '<div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);">';
    html += '<div class="slabel">Testformulieren</div><div style="display:flex;gap:8px;flex-wrap:wrap;">';
    ptProtoForms.forEach(function(entry) {
      var fId=entry[0],frm=entry[1];
      html += '<button onclick="openForm(\''+fId+'\',\''+pt.id+'\''+')" style="background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.2);color:#a78bfa;padding:8px 14px;border-radius:6px;font-size:12px;cursor:pointer;font-family:Geist,sans-serif;font-weight:500;">\u{1F4DD} '+frm.name+'</button>';
    });
    html += '</div></div>';
  }
  // Export
  html += `<div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);display:flex;gap:8px;flex-wrap:wrap;">
    <button onclick="exportPatient('${pt.id}')" style="background:var(--surface2);border:1px solid var(--border);color:var(--text);padding:8px 14px;border-radius:6px;font-size:12px;cursor:pointer;font-family:Geist,sans-serif;">📄 Exporteer traject</button>
    <button onclick="printPatient('${pt.id}')" style="background:var(--surface2);border:1px solid var(--border);color:var(--text);padding:8px 14px;border-radius:6px;font-size:12px;cursor:pointer;font-family:Geist,sans-serif;">🖨 Afdrukken</button>
  </div>`;

  document.getElementById('pat-detail-body').innerHTML = html;
}
function setPatientPhase(patId, phaseIdx) {
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(!pt) return;
  pt.phaseIndex = phaseIdx;
  savePatients(pts);
  const p = protocols[pt.protoId];
  renderPatientDetail(pt, p);
}
function addSession(patId) {
  const note = document.getElementById('new-session-text')?.value?.trim();
  if(!note) return;
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(!pt) return;
  if(!pt.sessions) pt.sessions = [];
  pt.sessions.push({date: new Date().toISOString().slice(0,10), note, phaseIdx: pt.phaseIndex || 0});
  savePatients(pts);
  const p = protocols[pt.protoId];
  renderPatientDetail(pt, p);
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
    const newPt = {id: genId(), name, dob, startDate, protoId, phaseIndex, sessions: []};
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
        <div style="width:34px;height:34px;border-radius:50%;background:${color}22;color:${color};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700">${getInitials(pt.name)}</div>
        <div style="flex:1"><div style="font-size:13px;font-weight:600">${pt.name}</div><div style="font-size:10.5px;color:var(--muted);font-family:Geist Mono,monospace">${ph?ph.label+' · ':''} Start: ${formatDate(pt.startDate)||'—'}</div></div>
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
