#!/usr/bin/env python3
"""
KineProtocol — Fetch Exercise Images via Pexels API
Haalt een passende afbeelding op voor elke unieke oefening in protocols.js
en slaat de URLs op in exercise-images.json.

Gebruik:
  python3 fetch-exercise-images.py --key JOUW_PEXELS_API_KEY
  python3 fetch-exercise-images.py --key JOUW_PEXELS_API_KEY --update  # enkel nieuwe toevoegen
"""

import re, json, time, argparse, sys, urllib.request, urllib.parse

PROTOCOLS_FILE = 'protocols.js'
OUTPUT_FILE    = 'exercise-images.json'
PEXELS_SEARCH  = 'https://api.pexels.com/v1/search'
IMG_WIDTH      = 400  # pixels (Pexels auto-resize)
DELAY          = 0.35  # seconden tussen requests (respecteer rate limit)

# Vertaling/vereenvoudiging voor betere Pexels-zoekresultaten
TERM_MAP = {
    'isometrisch': 'isometric', 'oefen': 'exercise', 'oefening': 'exercise',
    'stretch': 'stretch', 'kracht': 'strength', 'mobiliteit': 'mobility',
    'stabilisatie': 'stability', 'stabiliteit': 'stability',
    'kniebuiging': 'squat', 'knie': 'knee', 'heup': 'hip', 'enkel': 'ankle',
    'schouder': 'shoulder', 'rug': 'back', 'nek': 'neck', 'pols': 'wrist',
    'been': 'leg', 'arm': 'arm', 'buik': 'core', 'borst': 'chest',
    'lumbaal': 'lower back', 'cervicaal': 'neck', 'thoracaal': 'upper back',
    'quad': 'quadriceps', 'hamstring': 'hamstring', 'kuit': 'calf',
    'gluteus': 'glute', 'glutei': 'glutes', 'biceps': 'biceps', 'triceps': 'triceps',
    'wandelen': 'walking', 'lopen': 'running', 'fietsen': 'cycling', 'zwemmen': 'swimming',
    'yoga': 'yoga', 'pilates': 'pilates', 'squat': 'squat', 'deadlift': 'deadlift',
    'plank': 'plank', 'bridge': 'bridge', 'press': 'press', 'row': 'rowing',
    'lunge': 'lunge', 'uitval': 'lunge', 'step': 'step up',
    'massage': 'massage', 'foam': 'foam roller', 'tape': 'kinesio tape',
    'ademhaling': 'breathing', 'ontspanning': 'relaxation', 'meditatie': 'meditation',
    'ergonomie': 'ergonomics office', 'bureau': 'office desk',
    'nordic': 'nordic walking', 'aqua': 'aqua therapy pool',
}

FALLBACK_TERMS = {
    'kracht': 'strength training gym',
    'mobiliteit': 'flexibility stretching',
    'stabiliteit': 'core stability exercise',
    'cardio': 'cardio exercise fitness',
    'neuromusculair': 'balance training exercise',
}


def simplify_query(name: str) -> str:
    """Zet Nederlandse oefeningnaam om naar een zoekbare Engelse zoekopdracht."""
    # Verwijder toelichting in haakjes (SLR), graden, afkortingen
    clean = re.sub(r'\([^)]{1,10}\)', '', name)  # korte afkortingen verwijderen
    clean = re.sub(r'\d+°', '', clean)
    clean = re.sub(r'[\/\-–—&+]', ' ', clean)
    clean = clean.strip()

    # Vertaal Nederlandse sleutelwoorden
    words = clean.lower().split()
    translated = []
    for w in words:
        mapped = TERM_MAP.get(w)
        if mapped:
            translated.append(mapped)
        elif len(w) > 3:
            translated.append(w)

    query = ' '.join(translated[:5])  # max 5 woorden
    if not query or len(query) < 4:
        query = name[:30]

    return query + ' exercise'


def fetch_image(name: str, api_key: str) -> dict | None:
    """Zoek één afbeelding op Pexels voor de gegeven oefeningnaam."""
    query = simplify_query(name)
    params = urllib.parse.urlencode({
        'query': query,
        'per_page': 3,
        'orientation': 'landscape',
        'size': 'medium',
    })
    url = f'{PEXELS_SEARCH}?{params}'
    req = urllib.request.Request(url, headers={'Authorization': api_key})

    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read())
    except Exception as e:
        print(f'  ⚠ Request fout voor "{name}": {e}')
        return None

    photos = data.get('photos', [])
    if not photos:
        # Tweede poging met bredere zoekterm
        cat_guess = next((v for k, v in FALLBACK_TERMS.items() if k in name.lower()), 'physical therapy exercise')
        params2 = urllib.parse.urlencode({'query': cat_guess, 'per_page': 1, 'orientation': 'landscape'})
        req2 = urllib.request.Request(f'{PEXELS_SEARCH}?{params2}', headers={'Authorization': api_key})
        try:
            with urllib.request.urlopen(req2, timeout=10) as resp2:
                data2 = json.loads(resp2.read())
                photos = data2.get('photos', [])
        except Exception:
            pass

    if not photos:
        return None

    photo = photos[0]
    return {
        'url': photo['src']['medium'],  # ~350-700px breedte
        'alt': photo.get('alt', name),
        'credit': photo['photographer'],
        'pexels': photo['url'],
    }


def extract_exercises(js_file: str) -> list[str]:
    """Haal alle unieke oefeningnamen op uit protocols.js."""
    with open(js_file, 'r') as f:
        content = f.read()
    names = re.findall(r"name:'([^']+)'", content)
    return sorted(set(n for n in names if len(n) > 8 and not n.startswith('n_') and not n.startswith('s_')))


def main():
    parser = argparse.ArgumentParser(description='Haal Pexels-afbeeldingen op voor KineProtocol oefeningen')
    parser.add_argument('--key', required=True, help='Pexels API key')
    parser.add_argument('--update', action='store_true', help='Sla reeds verwerkte oefeningen over')
    parser.add_argument('--limit', type=int, default=0, help='Max aantal oefeningen (0 = alle)')
    args = parser.parse_args()

    exercises = extract_exercises(PROTOCOLS_FILE)
    print(f'Gevonden: {len(exercises)} unieke oefeningen in {PROTOCOLS_FILE}')

    # Laad bestaande resultaten
    try:
        with open(OUTPUT_FILE, 'r') as f:
            images = json.load(f)
        print(f'Bestaand {OUTPUT_FILE}: {len(images)} entries')
    except FileNotFoundError:
        images = {}

    if args.update:
        exercises = [e for e in exercises if e not in images]
        print(f'Na --update filter: {len(exercises)} nieuwe oefeningen te verwerken')

    if args.limit:
        exercises = exercises[:args.limit]
        print(f'Beperkt tot {args.limit} oefeningen via --limit')

    total  = len(exercises)
    done   = 0
    failed = []

    for i, name in enumerate(exercises, 1):
        print(f'[{i}/{total}] {name[:55]:<55}', end=' ', flush=True)
        result = fetch_image(name, args.key)
        if result:
            images[name] = result
            print(f'✓  ({result["credit"]})')
            done += 1
        else:
            failed.append(name)
            print('✗  geen resultaat')

        # Sla tussenstand op elke 25 oefeningen
        if i % 25 == 0:
            with open(OUTPUT_FILE, 'w') as f:
                json.dump(images, f, ensure_ascii=False, indent=2)
            print(f'  → Tussenstand opgeslagen ({len(images)} entries)')

        time.sleep(DELAY)

    # Eindopslag
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(images, f, ensure_ascii=False, indent=2)

    print(f'\n─── Klaar ───────────────────────────────')
    print(f'Succesvol: {done}/{total}')
    print(f'Mislukt ({len(failed)}): {", ".join(failed[:10])}{"..." if len(failed) > 10 else ""}')
    print(f'Output: {OUTPUT_FILE} ({len(images)} totale entries)')
    print(f'\nVergeet niet te committen:')
    print(f'  git add {OUTPUT_FILE} && git commit -m "Oefening-afbeeldingen bijgewerkt"')


if __name__ == '__main__':
    main()
