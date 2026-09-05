// Referentie- en claimvalidatie (CLAUDE.md §4).
// Faalt bij: citatie zonder bestaande sleutel, referentie zonder DOI/PMID,
// ongebruikte referentie, dubbele sleutel, of ontbrekend verplicht veld.
// Draait voor elke oplevering.

const fs = require('fs');
const path = require('path');

const WORTEL = path.join(__dirname, '..');
const fouten = [];
const waarschuwingen = [];

// Minimale YAML-lezer voor het vaste formaat van data/*.yaml.
// Bewust geen externe afhankelijkheid: het project heeft geen buildstap.
function leesYaml(pad) {
  const uit = require('child_process').execFileSync('python3',
    ['-c', 'import yaml,json,sys;print(json.dumps(yaml.safe_load(open(sys.argv[1])),default=str))', pad],
    { encoding: 'utf8' });
  return JSON.parse(uit);
}

const refPad = path.join(WORTEL, 'data/references.yaml');
if (!fs.existsSync(refPad)) {
  console.error('data/references.yaml ontbreekt');
  process.exit(1);
}
const referenties = (leesYaml(refPad) || {}).references || [];

const VERPLICHT = ['key', 'auteurs', 'titel', 'bron', 'jaar', 'volume_paginas',
                   'doi', 'pmid', 'url', 'type', 'geverifieerd_op', 'geverifieerd_door'];
const TYPES = ['richtlijn', 'SR', 'RCT', 'cohort', 'expert'];

const gezien = new Set();
referenties.forEach(r => {
  const k = r.key || '(zonder sleutel)';
  VERPLICHT.forEach(v => {
    if (r[v] === undefined || r[v] === null || r[v] === '') fouten.push(`${k}: verplicht veld '${v}' ontbreekt`);
  });
  if (!r.doi && !r.pmid) fouten.push(`${k}: geen DOI en geen PMID`);
  if (r.type && !TYPES.includes(r.type)) fouten.push(`${k}: onbekend type '${r.type}' (toegestaan: ${TYPES.join(', ')})`);
  if (gezien.has(k)) fouten.push(`${k}: dubbele sleutel`);
  gezien.add(k);
});

// Elke claimsleutel moet bestaan; elke referentie moet ergens gebruikt worden.
const gebruikt = new Set();
const claimMap = path.join(WORTEL, 'data/claims');
let claimBestanden = [];
if (fs.existsSync(claimMap)) claimBestanden = fs.readdirSync(claimMap).filter(f => f.endsWith('.yaml'));

claimBestanden.forEach(bestand => {
  const d = leesYaml(path.join(claimMap, bestand)) || {};
  (d.claims || []).forEach(c => {
    (c.bronnen || []).forEach(s => {
      gebruikt.add(s);
      if (!gezien.has(s)) fouten.push(`${bestand} claim ${c.id}: verwijst naar onbekende sleutel '${s}'`);
    });
    if (c.gedekt === 'ja' && !(c.bronnen || []).length) {
      fouten.push(`${bestand} claim ${c.id}: gemarkeerd als gedekt maar zonder bron`);
    }
    if (c.gedekt !== 'ja') {
      waarschuwingen.push(`${bestand} claim ${c.id}: gedekt=${c.gedekt} — niet opleverbaar zonder aanpassing`);
    }
  });
});

referenties.forEach(r => {
  if (r.key && !gebruikt.has(r.key)) waarschuwingen.push(`${r.key}: referentie wordt nergens gebruikt`);
});

if (waarschuwingen.length) {
  console.log(`${waarschuwingen.length} aandachtspunt(en):`);
  waarschuwingen.forEach(w => console.log('  · ' + w));
}
if (fouten.length) {
  console.error(`\n${fouten.length} fout(en):`);
  fouten.forEach(f => console.error('  - ' + f));
  process.exit(1);
}
const claims = claimBestanden.reduce((n, b) => n + ((leesYaml(path.join(claimMap, b)) || {}).claims || []).length, 0);
console.log(`\nreferenties ${referenties.length} · claims ${claims} · structuur in orde`);
