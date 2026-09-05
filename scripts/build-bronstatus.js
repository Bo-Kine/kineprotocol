// Genereert bronstatus.js uit data/claims/*.yaml.
//
// De app moet eerlijk tonen welke protocollen een bronaudit hebben gehad en
// welke niet. Zonder dat onderscheid zien 290 ongecontroleerde citaties er in
// de app precies hetzelfde uit als de dertig die wél tegen de primaire bron
// gelegd zijn — dat wekt vertrouwen dat er niet is.
//
// De inhoud blijft in de YAML staan (CLAUDE.md §5.1: geen inhoud hardcoderen
// in code); dit script schrijft alleen een afgeleide, machinaal gegenereerde
// kopie die de browser kan inladen. Draaien na elke wijziging aan data/claims.

const fs = require('fs');
const path = require('path');

const WORTEL = path.join(__dirname, '..');
const CLAIMS = path.join(WORTEL, 'data/claims');

function leesYaml(pad) {
  const uit = require('child_process').execFileSync('python3',
    ['-c', 'import yaml,json,sys;print(json.dumps(yaml.safe_load(open(sys.argv[1])),default=str))', pad],
    { encoding: 'utf8' });
  return JSON.parse(uit);
}

const status = {};
for (const bestand of fs.readdirSync(CLAIMS).filter(f => f.endsWith('.yaml')).sort()) {
  const doc = leesYaml(path.join(CLAIMS, bestand)) || {};
  const claims = doc.claims || [];
  status[doc.protocol || path.basename(bestand, '.yaml')] = {
    gecontroleerd: claims.length,
    gedekt: claims.filter(c => c.gedekt === 'ja').length,
    deels: claims.filter(c => c.gedekt === 'deels').length,
    open: claims.filter(c => c.gedekt !== 'ja' && !c.verwerkt).length,
    datum: doc.laatst_gecontroleerd || null,
  };
}

const uit = `// GEGENEREERD BESTAND — niet met de hand bewerken.
// Bron: data/claims/*.yaml · genereren met: node scripts/build-bronstatus.js
// Protocollen die hier niet in staan, hebben nog geen bronaudit gehad.
const BRONSTATUS = ${JSON.stringify(status, null, 2)};
`;

fs.writeFileSync(path.join(WORTEL, 'bronstatus.js'), uit);
console.log(`bronstatus.js geschreven — ${Object.keys(status).length} geauditeerde protocollen`);
