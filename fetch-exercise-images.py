#!/usr/bin/env python3
"""
KineProtocol — Fetch Exercise Images via Wikipedia
Zoekt per oefening een exacte Wikipedia-pagina en haalt de bijbehorende afbeelding op.
Geen API-sleutel vereist.

Gebruik:
  python3 fetch-exercise-images.py
  python3 fetch-exercise-images.py --update   # enkel nieuwe toevoegen
  python3 fetch-exercise-images.py --limit 20
"""

import re, json, time, argparse, urllib.request, urllib.parse

PROTOCOLS_FILE = 'protocols.js'
OUTPUT_FILE    = 'exercise-images.json'
DELAY          = 0.4
WIKI_API       = 'https://en.wikipedia.org/w/api.php'

# Directe mapping: exacte oefeningnaam → Wikipedia paginatitel (Engels)
# Enkel oefeningen met een echte, relevante Wikipedia-pagina
EXACT_WIKI_TITLES = {
    'Squat':                              'Squat (exercise)',
    'Deadlift':                           'Deadlift',
    'Romanian Deadlift (RDL)':            'Deadlift',
    'Romanian deadlift':                  'Deadlift',
    'Plank':                              'Plank (exercise)',
    'Lunge':                              'Lunge (exercise)',
    'Push-up':                            'Push-up',
    'Pull-up':                            'Pull-up (exercise)',
    'Chin-up':                            'Chin-up',
    'Sit-up':                             'Sit-up',
    'Burpee':                             'Burpee (exercise)',
    'Nordic walking':                     'Nordic walking',
    'Aquajogging (diep water)':           'Aqua jogging',
    'Foam rolling':                       'Foam roller',
    'Yoga':                               'Yoga as exercise',
    'Pilates':                            'Pilates',
    'Cat-Cow (felino)':                   'Cat–cow stretch',
    'Bird-dog':                           'Bird dog (exercise)',
    'Glute bridge':                       'Glute bridge',
    'Heupbrug':                           'Glute bridge',
    'Glute bridge (isometrisch)':         'Glute bridge',
    'Wall squat (muurzit)':               'Wall sit',
    'Wall squat':                         'Wall sit',
    'Calf raise':                         'Calf raise',
    'Single leg heel raise':              'Calf raise',
    'Step-up':                            'Step aerobics',
    'Straight Leg Raise (SLR)':           'Straight leg raise',
    'Nordic Hamstring Exercise':          'Nordic hamstring exercise',
    'Nordic Hamstring Curl':              'Nordic hamstring exercise',
    'Foam rol lumbaal':                   'Foam roller',
    'Foam rol thoracaal':                 'Foam roller',
    'Wandelen':                           'Walking',
    'Pijnvrij wandelen':                  'Walking',
    'Wandelen met tempoprogressie':       'Walking',
    'Fietsen':                            'Cycling',
    'Zwemmen':                            'Swimming (sport)',
    'Progressief fietsen of zwemmen':     'Cycling',
    'Beenpers bilateraal':                'Leg press',
    'Leg press':                          'Leg press',
    'Kniebuiging':                        'Squat (exercise)',
    'Single leg squat':                   'Squat (exercise)',
    'Single leg squat (10–20 cm box)':    'Squat (exercise)',
    'Uitvalspas':                         'Lunge (exercise)',
    'Reverse lunge':                      'Lunge (exercise)',
    'Shoulder press (standing)':          'Overhead press',
    'Shoulder press':                     'Overhead press',
    'Bench press':                        'Bench press',
    'Bankdrukken':                        'Bench press',
    'Biceps curl':                        'Biceps curl',
    'Triceps extensie':                   'Triceps extension',
    'Rowing machine':                     'Rowing machine',
    'Elliptical':                         'Elliptical trainer',
    'Treadmill':                          'Treadmill',
    'HIIT':                               'High-intensity interval training',
    'Stretching':                         'Stretching',
    'Foam rolling thoracaal':             'Foam roller',
    'Side plank':                         'Plank (exercise)',
    'Zijplank':                           'Plank (exercise)',
    'Dead bug':                           'Dead bug exercise',
    'Hollow body hold':                   'Plank (exercise)',
    'Diafragmatische ademhaling':         'Diaphragmatic breathing',
    'Progressieve spierontspanning':      'Progressive muscle relaxation',
    'Mindfulness':                        'Mindfulness',
    'Tai chi':                            'Tai chi',
    'Taichi':                             'Tai chi',
    'Massage':                            'Massage',
    'Kinesiotaping':                      'Kinesiology tape',
    'Kinesio tape':                       'Kinesiology tape',
    'TENS':                               'Transcutaneous electrical nerve stimulation',
    'Ultrasound therapie':                'Therapeutic ultrasound',
    'Manuele therapie':                   'Manual therapy',
    'Ergonomie':                          'Ergonomics',
    'Krachttraining':                     'Weight training',
    'Weerstandstraining':                 'Resistance training',
    'Intervaltraining':                   'Interval training',
    'Plyometrie':                         'Plyometrics',
    'Balance training':                   'Balance board',
    'Proprioceptie':                      'Proprioception',
}

# Sleutelwoord → Wikipedia titel (fallback als exacte match ontbreekt)
KEYWORD_WIKI = [
    (['squat','kniebuig'],                'Squat (exercise)'),
    (['deadlift','rdl','deadlif'],        'Deadlift'),
    (['lunge','uitval'],                  'Lunge (exercise)'),
    (['plank','zijplank','side plank'],   'Plank (exercise)'),
    (['push-up','pushup','push up'],      'Push-up'),
    (['pull-up','pullup','pull up'],      'Pull-up (exercise)'),
    (['bridge','brug','heupbrug'],        'Glute bridge'),
    (['nordic walk'],                     'Nordic walking'),
    (['foam rol','foam roll'],            'Foam roller'),
    (['yoga'],                            'Yoga as exercise'),
    (['pilates'],                         'Pilates'),
    (['wandel','lopen','walk'],           'Walking'),
    (['fiets','cycl'],                    'Cycling'),
    (['zwem','swim'],                     'Swimming (sport)'),
    (['leg press','beenpers'],            'Leg press'),
    (['calf raise','kuitheffen'],         'Calf raise'),
    (['step-up','step up','staptraining'],'Step aerobics'),
    (['bird-dog','bird dog'],             'Bird dog (exercise)'),
    (['dead bug'],                        'Dead bug exercise'),
    (['cat-cow','cat cow'],               'Cat–cow stretch'),
    (['shoulder press','schouderpress'],  'Overhead press'),
    (['bench press','bankdruk'],          'Bench press'),
    (['biceps curl'],                     'Biceps curl'),
    (['triceps'],                         'Triceps extension'),
    (['rowing','roei'],                   'Rowing machine'),
    (['stretch','rek '],                  'Stretching'),
    (['yoga'],                            'Yoga as exercise'),
    (['plyometr'],                        'Plyometrics'),
    (['balance','balans','propriocep'],   'Proprioception'),
    (['ademhal','breath'],                'Diaphragmatic breathing'),
    (['massage'],                         'Massage'),
    (['kinesio','tape'],                  'Kinesiology tape'),
    (['weerstand','resistance'],          'Resistance training'),
    (['interval','hiit'],                 'Interval training'),
    (['krachttraining','weight train'],   'Weight training'),
]


def get_wiki_title(name: str) -> str | None:
    """Zoek de beste Wikipedia-paginatitel voor een oefeningnaam."""
    # 1. Exacte match
    if name in EXACT_WIKI_TITLES:
        return EXACT_WIKI_TITLES[name]

    # 2. Partiële exacte match (naam begint met key)
    name_lower = name.lower()
    for key, title in EXACT_WIKI_TITLES.items():
        if name_lower.startswith(key.lower()) or key.lower() in name_lower:
            return title

    # 3. Sleutelwoordmatch
    for keywords, title in KEYWORD_WIKI:
        if any(kw in name_lower for kw in keywords):
            return title

    return None


def fetch_wiki_image(wiki_title: str) -> dict | None:
    """Haal thumbnail op van een Wikipedia-pagina op naam."""
    params = urllib.parse.urlencode({
        'action': 'query',
        'titles': wiki_title,
        'prop': 'pageimages',
        'piprop': 'thumbnail',
        'pithumbsize': '500',
        'format': 'json',
        'origin': '*',
    })
    req = urllib.request.Request(
        f'{WIKI_API}?{params}',
        headers={'User-Agent': 'KineProtocol/1.0 (educational physiotherapy app)'}
    )
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.loads(r.read())
    except Exception as e:
        return None

    pages = data.get('query', {}).get('pages', {})
    for page in pages.values():
        if page.get('pageid', -1) == -1:
            return None  # Pagina bestaat niet
        thumb = page.get('thumbnail')
        if thumb:
            return {
                'url': thumb['source'],
                'alt': wiki_title,
                'credit': f'Wikipedia: {wiki_title}',
                'wiki': f'https://en.wikipedia.org/wiki/{urllib.parse.quote(wiki_title)}',
            }
    return None


def extract_exercises(js_file: str) -> list[dict]:
    with open(js_file, 'r') as f:
        content = f.read()
    blocks = re.findall(r"\{name:'([^']+)'[^}]*?cat:'([^']*)'\}", content, re.DOTALL)
    seen, result = set(), []
    for name, cat in blocks:
        if name not in seen and len(name) > 8:
            seen.add(name)
            result.append({'name': name, 'cat': cat})
    return sorted(result, key=lambda x: x['name'])


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--update', action='store_true')
    parser.add_argument('--limit', type=int, default=0)
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

    total, done, skipped, failed = len(exercises), 0, 0, []

    for i, ex in enumerate(exercises, 1):
        name = ex['name']
        wiki_title = get_wiki_title(name)

        if not wiki_title:
            skipped += 1
            if i <= 20 or i % 50 == 0:
                print(f'[{i}/{total}] {name[:50]:<50} — geen Wiki-titel')
            continue

        print(f'[{i}/{total}] {name[:45]:<45} → {wiki_title[:35]}', end=' ', flush=True)
        result = fetch_wiki_image(wiki_title)
        if result:
            images[name] = result
            print('✓')
            done += 1
        else:
            failed.append(name)
            print('✗')

        if i % 25 == 0:
            with open(OUTPUT_FILE, 'w') as f:
                json.dump(images, f, ensure_ascii=False, indent=2)

        time.sleep(DELAY)

    with open(OUTPUT_FILE, 'w') as f:
        json.dump(images, f, ensure_ascii=False, indent=2)

    print(f'\n─── Klaar ───────────────────')
    print(f'Succesvol : {done}')
    print(f'Overgeslagen (geen mapping): {skipped}')
    print(f'Mislukt   : {len(failed)}')
    print(f'Output    : {OUTPUT_FILE} ({len(images)} totale entries)')


if __name__ == '__main__':
    main()
