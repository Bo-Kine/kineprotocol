#!/usr/bin/env python3
"""
KINEBO — foto's uit free-exercise-db koppelen aan oefeningen

Leest data/afbeeldingen-fedb.yaml, downloadt per koppeling de gekozen foto naar
exercise-images/fedb/ en werkt exercise-images.json bij. Bestaande afbeeldingen
uit andere bronnen worden nooit overschreven.

Gebruik:
  python3 scripts/fetch-fedb-images.py          # downloaden en JSON bijwerken
  python3 scripts/fetch-fedb-images.py --dry    # alleen controleren, niets schrijven
"""

import json, os, re, sys, urllib.request
import yaml

MAPPING   = 'data/afbeeldingen-fedb.yaml'
PROTOCOLS = 'protocols.js'
OUT_JSON  = 'exercise-images.json'
IMG_DIR   = 'exercise-images/fedb'
RAW       = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/'
REPO      = 'https://github.com/yuhonas/free-exercise-db'
CREDIT    = 'free-exercise-db (Unlicense)'


def exercise_names():
    """Alle oefeningnamen uit protocols.js (name:'...')."""
    src = open(PROTOCOLS, encoding='utf-8').read()
    return {m.replace('&#39;', "'") for m in re.findall(r"\{name:'((?:[^'\\]|\\.)*)'", src)}


def main():
    dry = '--dry' in sys.argv
    koppelingen = yaml.safe_load(open(MAPPING, encoding='utf-8'))['koppelingen']
    namen = exercise_names()
    images = json.load(open(OUT_JSON, encoding='utf-8'))

    fouten = []
    for k in koppelingen:
        if k['oefening'] not in namen:
            fouten.append(f"onbekende oefening: {k['oefening']}")
        if k.get('foto') not in (0, 1):
            fouten.append(f"foto moet 0 of 1 zijn: {k['oefening']}")
        bestaand = images.get(k['oefening'])
        if bestaand and bestaand.get('credit') != CREDIT:
            fouten.append(f"heeft al een afbeelding uit een andere bron: {k['oefening']}")
    if fouten:
        print('FOUT:\n  ' + '\n  '.join(fouten))
        sys.exit(1)

    # Koppelingen die uit het bestand geschrapt zijn, ook uit de JSON halen
    gekoppeld = {k['oefening'] for k in koppelingen}
    weg = [n for n, v in images.items() if v.get('credit') == CREDIT and n not in gekoppeld]

    if dry:
        print(f"OK — {len(koppelingen)} koppelingen geldig, {len(weg)} te verwijderen")
        return

    os.makedirs(IMG_DIR, exist_ok=True)
    for k in koppelingen:
        bestand = f"{k['fedb_id']}_{k['foto']}.jpg"
        pad = os.path.join(IMG_DIR, bestand)
        if not os.path.exists(pad):
            urllib.request.urlretrieve(f"{RAW}{k['fedb_id']}/{k['foto']}.jpg", pad)
        images[k['oefening']] = {
            'url': f'./{IMG_DIR}/{bestand}',
            'alt': k['oefening'],
            'credit': CREDIT,
            'bron': f"{REPO}/tree/main/exercises/{k['fedb_id']}",
        }
    for n in weg:
        del images[n]

    with open(OUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(images, f, ensure_ascii=False, indent=2)
        f.write('\n')
    print(f"{len(koppelingen)} koppelingen verwerkt, {len(weg)} verwijderd → {OUT_JSON}")


if __name__ == '__main__':
    main()
