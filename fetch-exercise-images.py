#!/usr/bin/env python3
"""
KineProtocol — Fetch Exercise Images via Wikimedia Commons
Geen API-sleutel vereist. Zoekt Wikipedia/Commons voor elke oefening.

Gebruik:
  python3 fetch-exercise-images.py
  python3 fetch-exercise-images.py --update   # enkel nieuwe toevoegen
  python3 fetch-exercise-images.py --limit 20 # test met 20 oefeningen
"""

import re, json, time, argparse, urllib.request, urllib.parse

PROTOCOLS_FILE = 'protocols.js'
OUTPUT_FILE    = 'exercise-images.json'
DELAY          = 0.4   # seconden tussen requests

WIKI_API   = 'https://en.wikipedia.org/w/api.php'
COMMONS_API = 'https://commons.wikimedia.org/w/api.php'

# Vertaling Nederlandse oefenterminologie → Engels voor Wikipedia/Commons zoeken
NL_TO_EN = {
    'kniebuiging':'squat','squat':'squat','deadlift':'deadlift','plank':'plank',
    'bridge':'bridge exercise','lunge':'lunge exercise','uitval':'lunge',
    'step-up':'step up exercise','step up':'step up exercise',
    'knie-extensie':'knee extension','knieflexie':'knee flexion',
    'heupflexie':'hip flexion','heupextensie':'hip extension',
    'beenheffen':'leg raise','straight leg raise':'straight leg raise',
    'cat-cow':'cat cow yoga','cat cow':'cat cow yoga',
    'bird-dog':'bird dog exercise','dead bug':'dead bug exercise',
    'pallof press':'pallof press','farmers carry':'farmers carry',
    'nordic walk':'nordic walking','aquajogging':'aqua jogging',
    'foam rol':'foam rolling','foam roller':'foam rolling',
    'schouderpress':'shoulder press','bankdrukken':'bench press',
    'rowing':'rowing exercise','roeien':'rowing',
    'triceps':'triceps exercise','biceps curl':'biceps curl',
    'calf raise':'calf raise','kuitheffen':'calf raise',
    'romanian deadlift':'romanian deadlift','rdl':'romanian deadlift',
    'glute bridge':'glute bridge','heupbrug':'glute bridge',
    'side plank':'side plank','zijplank':'side plank',
    'wall squat':'wall sit exercise','muurzit':'wall sit exercise',
    'wandelen':'walking exercise','lopen':'running','fietsen':'cycling',
    'zwemmen':'swimming','yoga':'yoga','pilates':'pilates',
    'ademhaling':'breathing exercise diaphragm',
    'hamstring':'hamstring stretch','quadriceps':'quadriceps exercise',
    'gluteus':'gluteus exercise','heup':'hip exercise',
    'schouder':'shoulder exercise','nek':'neck exercise',
    'rug':'back exercise','core':'core exercise',
    'pols':'wrist exercise','enkel':'ankle exercise',
    'knie':'knee exercise','bekken':'pelvic exercise',
    'mobilisatie':'joint mobilization','stretching':'stretching',
    'massage':'massage therapy','tape':'kinesio taping',
    'ergonomie':'ergonomics office posture',
    'multifidus':'multifidus exercise spine',
    'transversus':'transverse abdominis exercise',
}

# Fallback zoektermen per categorie
CAT_FALLBACK = {
    'kracht':      'strength training exercise gym',
    'mobiliteit':  'flexibility stretching exercise',
    'stabiliteit': 'core stability balance exercise',
    'cardio':      'cardio fitness exercise',
    'neuromusculair': 'balance proprioception exercise',
}


def to_english(name: str) -> str:
    """Vertaal Nederlandse oefeningnaam naar Engelse zoekterm."""
    clean = re.sub(r'\([^)]{1,15}\)', '', name)
    clean = re.sub(r'[\/\-–—&+°\d]', ' ', clean).strip().lower()
    words = clean.split()
    result = []
    skip = 0
    for i, w in enumerate(words):
        if skip:
            skip -= 1
            continue
        # Probeer tweewoordcombinaties eerst
        two = ' '.join(words[i:i+2]) if i+1 < len(words) else ''
        if two in NL_TO_EN:
            result.append(NL_TO_EN[two])
            skip = 1
        elif w in NL_TO_EN:
            result.append(NL_TO_EN[w])
        elif len(w) > 3:
            result.append(w)
    query = ' '.join(result[:5]) if result else name[:40]
    return query


def fetch_wiki_image(query: str) -> dict | None:
    """Zoek een afbeelding op Wikipedia voor de gegeven zoekterm."""
    params = urllib.parse.urlencode({
        'action': 'query',
        'list': 'search',
        'srsearch': query,
        'srnamespace': '0',
        'srlimit': '3',
        'format': 'json',
        'origin': '*',
    })
    req = urllib.request.Request(
        f'{WIKI_API}?{params}',
        headers={'User-Agent': 'KineProtocol/1.0 (kinesitherapie app; educational use)'}
    )
    try:
        with urllib.request.urlopen(req, timeout=8) as r:
            data = json.loads(r.read())
    except Exception:
        return None

    results = data.get('query', {}).get('search', [])
    if not results:
        return None

    # Haal pagina-afbeelding op van eerste resultaat
    title = results[0]['title']
    params2 = urllib.parse.urlencode({
        'action': 'query',
        'titles': title,
        'prop': 'pageimages',
        'piprop': 'thumbnail',
        'pithumbsize': '500',
        'format': 'json',
        'origin': '*',
    })
    req2 = urllib.request.Request(
        f'{WIKI_API}?{params2}',
        headers={'User-Agent': 'KineProtocol/1.0 (kinesitherapie app; educational use)'}
    )
    try:
        with urllib.request.urlopen(req2, timeout=8) as r2:
            data2 = json.loads(r2.read())
    except Exception:
        return None

    pages = data2.get('query', {}).get('pages', {})
    for page in pages.values():
        thumb = page.get('thumbnail')
        if thumb:
            return {
                'url': thumb['source'],
                'alt': title,
                'credit': f'Wikipedia: {title}',
                'wiki': f'https://en.wikipedia.org/wiki/{urllib.parse.quote(title)}',
            }
    return None


def fetch_commons_image(query: str) -> dict | None:
    """Zoek een afbeelding direct op Wikimedia Commons."""
    params = urllib.parse.urlencode({
        'action': 'query',
        'generator': 'search',
        'gsrsearch': f'filetype:bitmap {query}',
        'gsrnamespace': '6',
        'gsrlimit': '3',
        'prop': 'imageinfo',
        'iiprop': 'url|mime',
        'iiurlwidth': '500',
        'format': 'json',
        'origin': '*',
    })
    req = urllib.request.Request(
        f'{COMMONS_API}?{params}',
        headers={'User-Agent': 'KineProtocol/1.0 (kinesitherapie app; educational use)'}
    )
    try:
        with urllib.request.urlopen(req, timeout=8) as r:
            data = json.loads(r.read())
    except Exception:
        return None

    pages = data.get('query', {}).get('pages', {})
    for page in pages.values():
        info = page.get('imageinfo', [{}])[0]
        url = info.get('thumburl') or info.get('url', '')
        if url and not url.endswith('.svg') and not url.endswith('.ogg'):
            title = page.get('title', query).replace('File:', '')
            return {
                'url': url,
                'alt': query,
                'credit': f'Wikimedia Commons: {title}',
                'wiki': f'https://commons.wikimedia.org/wiki/{urllib.parse.quote(page.get("title",""))}',
            }
    return None


def get_image(name: str, cat: str = '') -> dict | None:
    """Haal afbeelding op: Wikipedia eerst, dan Commons, dan cat-fallback."""
    en_query = to_english(name)

    # 1. Wikipedia
    result = fetch_wiki_image(en_query)
    if result:
        return result
    time.sleep(0.2)

    # 2. Wikimedia Commons
    result = fetch_commons_image(en_query)
    if result:
        return result
    time.sleep(0.2)

    # 3. Fallback op categorie
    if cat and cat in CAT_FALLBACK:
        result = fetch_wiki_image(CAT_FALLBACK[cat])
        if result:
            return result

    return None


def extract_exercises(js_file: str) -> list[dict]:
    """Haal unieke oefeningen (naam + cat) op uit protocols.js."""
    with open(js_file, 'r') as f:
        content = f.read()
    # Match {name:'...', ..., cat:'...'} blokken
    blocks = re.findall(r"\{name:'([^']+)'[^}]*?cat:'([^']*)'\}", content, re.DOTALL)
    seen, result = set(), []
    for name, cat in blocks:
        if name not in seen and len(name) > 8:
            seen.add(name)
            result.append({'name': name, 'cat': cat})
    return sorted(result, key=lambda x: x['name'])


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--update', action='store_true', help='Sla bestaande over')
    parser.add_argument('--limit',  type=int, default=0)
    args = parser.parse_args()

    exercises = extract_exercises(PROTOCOLS_FILE)
    print(f'Gevonden: {len(exercises)} unieke oefeningen')

    try:
        with open(OUTPUT_FILE, 'r') as f:
            images = json.load(f)
        print(f'Bestaand {OUTPUT_FILE}: {len(images)} entries')
    except FileNotFoundError:
        images = {}

    if args.update:
        exercises = [e for e in exercises if e['name'] not in images]
        print(f'Na --update: {len(exercises)} nieuwe te verwerken')

    if args.limit:
        exercises = exercises[:args.limit]

    total, done, failed = len(exercises), 0, []

    for i, ex in enumerate(exercises, 1):
        name, cat = ex['name'], ex['cat']
        print(f'[{i}/{total}] {name[:55]:<55}', end=' ', flush=True)
        result = get_image(name, cat)
        if result:
            images[name] = result
            print(f'✓  ({result["credit"][:50]})')
            done += 1
        else:
            failed.append(name)
            print('✗')

        if i % 25 == 0:
            with open(OUTPUT_FILE, 'w') as f:
                json.dump(images, f, ensure_ascii=False, indent=2)
            print(f'  → Tussenstand opgeslagen ({len(images)} entries)')

        time.sleep(DELAY)

    with open(OUTPUT_FILE, 'w') as f:
        json.dump(images, f, ensure_ascii=False, indent=2)

    print(f'\n─── Klaar ───────────────────')
    print(f'Succesvol : {done}/{total}')
    print(f'Mislukt   : {len(failed)}')
    if failed:
        print('  ' + ', '.join(failed[:10]) + ('...' if len(failed) > 10 else ''))
    print(f'Output    : {OUTPUT_FILE} ({len(images)} totale entries)')


if __name__ == '__main__':
    main()
