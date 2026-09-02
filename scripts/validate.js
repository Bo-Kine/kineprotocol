// KineProtocol — data-consistentiecheck (draait in CI en lokaal: node scripts/validate.js)
// Controleert dat elk protocol volledig geregistreerd is en dat de versie uit één bron komt.

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

const errors = [];
const fail = msg => errors.push(msg);

// ── protocols.js laden en de const-declaraties eruit halen ──
let d;
try {
  const src = read('protocols.js') + ';({protocols, REGIO_MAP, NAV_INFO, BESCHRIJVING, MANUEEL})';
  d = vm.runInNewContext(src, { console }, { filename: 'protocols.js' });
} catch (e) {
  console.error('❌ protocols.js kan niet geladen worden: ' + e.message);
  process.exit(1);
}

const ids = Object.keys(d.protocols);

// ── per protocol: registratie in alle mappen + structurele velden ──
ids.forEach(id => {
  const p = d.protocols[id];
  if (!d.REGIO_MAP[id]) fail(`${id}: ontbreekt in REGIO_MAP (valt terug op sectie 'Overig')`);
  if (!d.NAV_INFO[id]) fail(`${id}: ontbreekt in NAV_INFO (badge/duurlabel)`);
  if (!d.BESCHRIJVING[id]) fail(`${id}: ontbreekt in BESCHRIJVING (🔬 Aandoening-tab blijft leeg)`);
  if (p.id !== id) fail(`${id}: id-veld ('${p.id}') komt niet overeen met de sleutel`);
  if (!/^#[0-9a-f]{6}$/i.test(p.color || '')) fail(`${id}: color '${p.color}' is geen #rrggbb-hexkleur`);
  if (!Array.isArray(p.phases) || !p.phases.length) fail(`${id}: geen fasen`);
  (p.phases || []).forEach((f, i) => {
    if (!Array.isArray(f.exercises) || !f.exercises.length) fail(`${id} fase ${i + 1}: geen oefeningen`);
  });
  const b = d.BESCHRIJVING[id];
  if (b && (!b.kenmerken || !b.oorzaken)) fail(`${id}: BESCHRIJVING mist kenmerken of oorzaken`);

  const m = d.MANUEEL[id];
  if (!m) {
    fail(`${id}: ontbreekt in MANUEEL (tab 🤲 Manuele therapie wordt niet getoond)`);
  } else {
    if (!m.intro) fail(`${id}: MANUEEL mist intro`);
    if (!m.evidentie) fail(`${id}: MANUEEL mist evidentie`);
    if (!Array.isArray(m.technieken) || m.technieken.length < 4) fail(`${id}: MANUEEL heeft minder dan 4 technieken`);
    if (!Array.isArray(m.contraindicaties) || !m.contraindicaties.length) fail(`${id}: MANUEEL mist contra-indicaties`);
    (m.technieken || []).forEach((t, i) => {
      ['naam', 'fase', 'doel', 'uitvoering', 'dosering'].forEach(k => {
        if (!t[k]) fail(`${id}: MANUEEL techniek ${i + 1} (${t.naam || '?'}) mist veld '${k}'`);
      });
    });
  }
});

// ── omgekeerd: geen wees-entries in de mappen ──
['REGIO_MAP', 'NAV_INFO', 'BESCHRIJVING', 'MANUEEL'].forEach(map => {
  Object.keys(d[map]).forEach(id => {
    if (!d.protocols[id]) fail(`${map}.${id}: verwijst naar een protocol dat niet bestaat`);
  });
});

// ── versienummer: alleen version.js mag het bevatten ──
const vsrc = read('version.js');
const vm_ = /const APP_VERSION = '(\d+)'/.exec(vsrc);
if (!vm_) fail("version.js: geen `const APP_VERSION = '<nummer>'` gevonden");
if (!/importScripts\('\.\/version\.js'\)/.test(read('sw.js'))) fail('sw.js: importScripts(./version.js) ontbreekt');
if (/kineprotocol-v\d/.test(read('sw.js'))) fail('sw.js: hardcoded versienummer gevonden — hoort alleen in version.js');
if (/const V = '\d/.test(read('app.js'))) fail('app.js: hardcoded versienummer gevonden — gebruik APP_VERSION');
if (!/src="version\.js"/.test(read('index.html'))) fail('index.html: <script src="version.js"> ontbreekt');
if (!/'\.\/version\.js'/.test(read('sw.js'))) fail('sw.js: version.js ontbreekt in PRECACHE');

// ── resultaat ──
if (errors.length) {
  console.error(`❌ ${errors.length} probleem(en):`);
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
}
const fasen = ids.reduce((n, id) => n + d.protocols[id].phases.length, 0);
const oef = ids.reduce((n, id) => n + d.protocols[id].phases.reduce((m, f) => m + f.exercises.length, 0), 0);
console.log(`✅ OK — ${ids.length} protocollen, ${fasen} fasen, ${oef} oefeningen, versie ${vm_[1]}`);
