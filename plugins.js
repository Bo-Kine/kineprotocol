// KineProtocol — Plugin-systeem
// Laat protocollen los registreren i.p.v. hardcoded in protocols.js.
//
// Twee gebruikers:
//   1. Ontwikkelaar — roept registerProtocol({...}) aan vanuit een eigen <script>
//      of de console; het protocol wordt in de bestaande datamaps gemengd.
//   2. Gebruiker — importeert/exporteert protocol-plugins als JSON via de UI
//      (Meer → Protocol-plugins). Geïmporteerde plugins staan lokaal in
//      localStorage en overleven herladen, volledig in lijn met het
//      local-first karakter van de app.
//
// Laadvolgorde (index.html): version.js → protocols.js → patients.js →
// plugins.js → app.js. Deze module draait dus NA de datamaps maar VÓÓR
// initApp()/buildNav(), zodat geregistreerde protocollen automatisch in de
// navigatie, zoekfunctie en statistieken verschijnen zonder extra code.

// ── CONSTANTEN ──────────────────────────────────────────────────────────────
const KP_PLUGIN_STORE = 'kp_plugins';   // localStorage-sleutel (array van plugin-defs)
const KP_PLUGIN_SCHEMA = 1;             // bumpen bij breaking changes aan het formaat

// De ingebouwde (curatieve) protocollen: vastgelegd zodra deze module laadt,
// dus vóór er ook maar één plugin geregistreerd is. Plugins mogen deze niet
// overschrijven — zo blijft verwijderen van een plugin altijd veilig.
const KP_BUILTIN_IDS = new Set(Object.keys(typeof protocols !== 'undefined' ? protocols : {}));

// Registry van actief geregistreerde plugins (id → metadata) voor de beheer-UI.
const kpPlugins = {};

// Eigen escape zodat deze module niet afhangt van laadvolgorde t.o.v. patients.js.
function kpEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ── VALIDATIE ────────────────────────────────────────────────────────────────
// Controleert een protocol-plugin op dezelfde structurele eisen als scripts/validate.js.
// Geeft { ok:boolean, errors:string[] } terug — nooit een throw, zodat de UI
// nette meldingen kan tonen.
function validateProtocolPlugin(def) {
  const errors = [];
  if (!def || typeof def !== 'object' || Array.isArray(def)) {
    return { ok: false, errors: ['Plugin is geen geldig object.'] };
  }

  const id = def.id || (def.protocol && def.protocol.id);
  if (!id || typeof id !== 'string') {
    errors.push('id ontbreekt.');
  } else if (!/^[a-z][a-z0-9_]*$/i.test(id)) {
    errors.push("id '" + id + "' is ongeldig (gebruik letters, cijfers en _ ; start met een letter).");
  }

  const p = def.protocol;
  if (!p || typeof p !== 'object') {
    errors.push('protocol-object ontbreekt.');
  } else {
    if (p.id && id && p.id !== id) {
      errors.push("protocol.id ('" + p.id + "') komt niet overeen met plugin-id ('" + id + "').");
    }
    if (!p.title) errors.push('protocol.title ontbreekt.');
    if (!/^#[0-9a-f]{6}$/i.test(p.color || '')) {
      errors.push("protocol.color ('" + (p.color || '') + "') moet een #rrggbb-hexkleur zijn.");
    }
    if (!Array.isArray(p.phases) || !p.phases.length) {
      errors.push('protocol.phases ontbreekt of is leeg.');
    } else {
      p.phases.forEach((f, i) => {
        if (!f || !Array.isArray(f.exercises) || !f.exercises.length) {
          errors.push('fase ' + (i + 1) + ' heeft geen oefeningen.');
        }
      });
    }
  }

  // Optionele blokken: als aanwezig, dan structureel juist.
  if (def.beschrijving && (!def.beschrijving.kenmerken || !def.beschrijving.oorzaken)) {
    errors.push('beschrijving mist kenmerken of oorzaken.');
  }

  return { ok: errors.length === 0, errors };
}

// ── REGISTRATIE ──────────────────────────────────────────────────────────────
// Mengt een gevalideerde plugin in de globale datamaps (protocols, REGIO_MAP,
// NAV_INFO, BESCHRIJVING). Weigert het overschrijven van ingebouwde protocollen.
//
//   registerProtocol({
//     id: 'mijnprot',
//     regio: 'Knie & Heup',                        // sectie in de navigatie
//     nav: { naam: '...', badge: 'MP', duur: '...' },
//     beschrijving: { kenmerken: '...', oorzaken: '...' },   // optioneel
//     protocol: { id:'mijnprot', title:'...', color:'#22d3ee', phases:[...] }
//   }, { source: 'user' })
//
// Geeft { ok, id, errors } terug.
function registerProtocol(def, opts) {
  opts = opts || {};
  const source = opts.source || 'runtime';

  const check = validateProtocolPlugin(def);
  if (!check.ok) {
    if (!opts.silent) console.warn('[plugins] protocol geweigerd:', check.errors);
    return { ok: false, id: def && def.id, errors: check.errors };
  }

  const id = def.id || def.protocol.id;

  if (KP_BUILTIN_IDS.has(id)) {
    const msg = "'" + id + "' is een ingebouwd protocol en kan niet worden overschreven. Gebruik een andere id.";
    if (!opts.silent) console.warn('[plugins] ' + msg);
    return { ok: false, id, errors: [msg] };
  }

  // Protocol registreren (protocol.id gelijktrekken met de plugin-id).
  const proto = Object.assign({}, def.protocol, { id });
  protocols[id] = proto;

  // Navigatie-registratie. Zonder regio valt het protocol onder 'Overig'
  // (buildNav heeft daar al een vangnet voor).
  if (def.regio) REGIO_MAP[id] = def.regio;
  NAV_INFO[id] = def.nav || { naam: proto.title };
  if (def.beschrijving) BESCHRIJVING[id] = def.beschrijving;

  kpPlugins[id] = { id, source, title: proto.title, regio: def.regio || 'Overig' };
  return { ok: true, id, errors: [] };
}

// Verwijdert een geregistreerde gebruiker-plugin volledig uit de live datamaps.
// (Ingebouwde protocollen komen hier nooit door — die staan niet in kpPlugins.)
function unregisterProtocol(id) {
  if (!kpPlugins[id] || KP_BUILTIN_IDS.has(id)) return false;
  delete protocols[id];
  delete REGIO_MAP[id];
  delete NAV_INFO[id];
  delete BESCHRIJVING[id];
  delete kpPlugins[id];
  // Favoriet opruimen zodat er geen wees-verwijzing achterblijft.
  try {
    const favs = JSON.parse(localStorage.getItem('kp_favs') || '[]').filter(f => f !== id);
    localStorage.setItem('kp_favs', JSON.stringify(favs));
  } catch (e) {}
  return true;
}

// ── PERSISTENTIE (gebruiker-plugins) ─────────────────────────────────────────
function loadUserPlugins() {
  try {
    const raw = JSON.parse(localStorage.getItem(KP_PLUGIN_STORE) || '[]');
    return Array.isArray(raw) ? raw : [];
  } catch (e) { return []; }
}

function saveUserPlugins(list) {
  try { localStorage.setItem(KP_PLUGIN_STORE, JSON.stringify(list)); return true; }
  catch (e) { console.warn('[plugins] opslaan mislukt (quota?):', e); return false; }
}

// Registreert alle opgeslagen gebruiker-plugins. Draait éénmalig bij het laden
// van deze module, vóór app.js. Ongeldige of botsende entries worden overgeslagen
// (met een waarschuwing) zodat één kapotte plugin de app niet blokkeert.
function applyUserPlugins() {
  const list = loadUserPlugins();
  let ok = 0;
  list.forEach(def => {
    const res = registerProtocol(def, { source: 'user', silent: true });
    if (res.ok) ok++;
    else console.warn('[plugins] plugin overgeslagen (' + (def && def.id) + '):', res.errors);
  });
  if (list.length) console.info('[plugins] ' + ok + '/' + list.length + ' gebruiker-plugin(s) geladen.');
}

// ── IMPORT / EXPORT ──────────────────────────────────────────────────────────
// Bouwt een deelbaar plugin-bestand uit een bestaand (ingebouwd of geïmporteerd)
// protocol, zodat gebruikers protocollen kunnen exporteren, aanpassen en her-importeren.
function buildPluginObject(id) {
  const proto = protocols[id];
  if (!proto) return null;
  const def = {
    app: 'KineProtocol',
    type: 'protocol-plugin',
    schema: KP_PLUGIN_SCHEMA,
    id,
    protocol: proto,
  };
  if (REGIO_MAP[id]) def.regio = REGIO_MAP[id];
  if (NAV_INFO[id]) def.nav = NAV_INFO[id];
  if (BESCHRIJVING[id]) def.beschrijving = BESCHRIJVING[id];
  return def;
}

function exportProtocolPlugin(id) {
  const def = buildPluginObject(id);
  if (!def) { alert('Protocol niet gevonden: ' + id); return; }
  const blob = new Blob([JSON.stringify(def, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'kineprotocol-plugin-' + id + '.json';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}

// Leest een gekozen JSON-bestand, valideert het en installeert het als
// gebruiker-plugin (persistent). Ondersteunt zowel één plugin als een array.
function importPluginFile(input) {
  const file = input.files && input.files[0];
  input.value = '';
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    let data;
    try { data = JSON.parse(reader.result); }
    catch (e) { alert('Ongeldig plugin-bestand (geen geldige JSON).'); return; }

    const defs = Array.isArray(data) ? data : [data];
    const stored = loadUserPlugins();
    const added = [];
    const skipped = [];

    defs.forEach(def => {
      // Alleen het relevante deel bewaren; extra metavelden negeren we bij validatie.
      const check = validateProtocolPlugin(def);
      const id = def && (def.id || (def.protocol && def.protocol.id));
      if (!check.ok) { skipped.push((id || '?') + ': ' + check.errors.join(' ')); return; }
      if (KP_BUILTIN_IDS.has(id)) { skipped.push(id + ': botst met een ingebouwd protocol.'); return; }

      const exists = stored.findIndex(d => (d.id || (d.protocol && d.protocol.id)) === id);
      if (exists >= 0) {
        if (!confirm("Plugin '" + id + "' bestaat al. Vervangen?")) { skipped.push(id + ': overgeslagen.'); return; }
        unregisterProtocol(id);
        stored.splice(exists, 1);
      }
      const res = registerProtocol(def, { source: 'user' });
      if (res.ok) { stored.push(def); added.push(id); }
      else skipped.push(id + ': ' + res.errors.join(' '));
    });

    if (added.length) saveUserPlugins(stored);
    if (typeof buildNav === 'function') buildNav();
    renderPluginManager();

    let msg = added.length ? added.length + ' plugin(s) geïnstalleerd: ' + added.join(', ') + '.' : 'Geen plugins geïnstalleerd.';
    if (skipped.length) msg += '\n\nOvergeslagen:\n- ' + skipped.join('\n- ');
    alert(msg);
  };
  reader.readAsText(file);
}

function removeUserPlugin(id) {
  if (!kpPlugins[id]) return;
  if (!confirm("Plugin '" + id + "' verwijderen van dit toestel?")) return;
  const stored = loadUserPlugins().filter(d => (d.id || (d.protocol && d.protocol.id)) !== id);
  saveUserPlugins(stored);
  unregisterProtocol(id);
  if (typeof buildNav === 'function') buildNav();
  renderPluginManager();
}

// ── BEHEER-UI ────────────────────────────────────────────────────────────────
function openPluginManager() {
  if (typeof closeMoreSheet === 'function') closeMoreSheet();
  renderPluginManager();
  const m = document.getElementById('plugin-modal');
  if (m) m.classList.add('open');
}

function closePluginManager() {
  const m = document.getElementById('plugin-modal');
  if (m) m.classList.remove('open');
}

function renderPluginManager() {
  const body = document.getElementById('plugin-modal-body');
  if (!body) return;

  const userIds = Object.keys(kpPlugins).filter(id => kpPlugins[id].source === 'user');
  const builtinIds = Array.from(KP_BUILTIN_IDS);

  const dot = c => '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:' + c + ';flex:0 0 auto;"></span>';

  // Geïnstalleerde gebruiker-plugins
  let userHtml;
  if (!userIds.length) {
    userHtml = '<div style="color:var(--muted);font-size:12.5px;padding:10px 0;">Nog geen eigen protocollen geïnstalleerd. Importeer een <code>.json</code>-plugin of exporteer hieronder een bestaand protocol als startpunt.</div>';
  } else {
    userHtml = userIds.map(id => {
      const p = protocols[id];
      return '<div style="display:flex;align-items:center;gap:9px;padding:9px 0;border-bottom:1px solid var(--border);">'
        + dot(p.color)
        + '<div style="flex:1;min-width:0;"><div style="font-size:13px;font-weight:500;">' + kpEsc(p.title) + '</div>'
        + '<div style="font-size:11px;color:var(--muted);font-family:Geist Mono,monospace;">' + kpEsc(id) + ' · ' + kpEsc(kpPlugins[id].regio) + ' · ' + p.phases.length + ' fasen</div></div>'
        + '<button onclick="exportProtocolPlugin(\'' + id + '\')" title="Exporteer als bestand" style="background:var(--surface2);border:1px solid var(--border);color:var(--muted);padding:6px 9px;border-radius:6px;font-size:11px;cursor:pointer;">⬇</button>'
        + '<button onclick="removeUserPlugin(\'' + id + '\')" title="Verwijder" style="background:var(--surface2);border:1px solid var(--border);color:#ef4444;padding:6px 9px;border-radius:6px;font-size:11px;cursor:pointer;">🗑</button>'
        + '</div>';
    }).join('');
  }

  // Ingebouwde protocollen (alleen exporteerbaar — dienen als sjabloon).
  const builtinHtml = builtinIds.map(id => {
    const p = protocols[id];
    if (!p) return '';
    return '<button onclick="exportProtocolPlugin(\'' + id + '\')" title="Exporteer als sjabloon" '
      + 'style="display:flex;align-items:center;gap:7px;background:var(--surface2);border:1px solid var(--border);color:var(--text);padding:6px 10px;border-radius:20px;font-size:11.5px;cursor:pointer;font-family:Geist,sans-serif;">'
      + dot(p.color) + kpEsc((NAV_INFO[id] || {}).badge || id.toUpperCase()) + ' ⬇</button>';
  }).join('');

  body.innerHTML =
    '<p style="font-size:12.5px;color:var(--muted);margin:0 0 14px;line-height:1.55;">'
    + 'Voeg je eigen revalidatieprotocollen toe als <strong>plugin</strong> — een JSON-bestand dat lokaal op dit toestel wordt bewaard. '
    + 'Exporteer een bestaand protocol als sjabloon, pas het aan (geef het een <em>nieuwe id</em>) en importeer het terug.</p>'

    + '<div style="display:flex;gap:8px;margin-bottom:18px;">'
    + '<button onclick="document.getElementById(\'plugin-file-input\').click()" style="flex:1;background:var(--accent,#22d3ee);border:none;color:#0a0a0b;padding:10px;border-radius:8px;font-size:12.5px;font-weight:600;cursor:pointer;font-family:Geist,sans-serif;">⬆ Plugin importeren</button>'
    + '</div>'
    + '<input type="file" id="plugin-file-input" accept=".json,application/json" style="display:none;" onchange="importPluginFile(this)">'

    + '<div style="font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin-bottom:6px;">Geïnstalleerde plugins</div>'
    + userHtml

    + '<div style="font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin:20px 0 8px;">Exporteer een ingebouwd protocol als sjabloon</div>'
    + '<div style="display:flex;flex-wrap:wrap;gap:6px;">' + builtinHtml + '</div>';
}

// ── INIT ─────────────────────────────────────────────────────────────────────
// Direct bij het laden van deze module registreren, dus vóór app.js/initApp.
applyUserPlugins();
