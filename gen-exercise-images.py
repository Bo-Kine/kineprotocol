#!/usr/bin/env python3
"""
KineProtocol — Genereer exercise-images.json vanuit de map exercise-images/

Gebruik:
  python3 gen-exercise-images.py          # scan en match, overschrijf JSON
  python3 gen-exercise-images.py --dry    # toon matches zonder te schrijven
  python3 gen-exercise-images.py --list   # toon alle oefeningen zonder afbeelding

Bestandsnaamconventie (hoofdletterongevoelig):
  squat.jpg              → "Squat"
  nordic-walking.jpg     → "Nordic walking"
  romanian-deadlift.jpg  → "Romanian deadlift"
  glute-bridge.jpg       → "Glute bridge"

Ondersteunde formaten: jpg, jpeg, png, webp, avif, gif
"""

import os, re, json, argparse, unicodedata

IMG_DIR        = 'exercise-images'
PROTOCOLS_FILE = 'protocols.js'
OUTPUT_FILE    = 'exercise-images.json'
IMG_EXTS       = {'.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'}


def normalize(s: str) -> str:
    """Verwijder accenten, leestekens, lowercase — voor fuzzy matching."""
    s = unicodedata.normalize('NFD', s)
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    s = s.lower()
    s = re.sub(r'[^a-z0-9 ]', ' ', s)
    return re.sub(r'\s+', ' ', s).strip()


def filename_to_slug(fname: str) -> str:
    """'nordic-walking.jpg' → 'nordic walking'"""
    stem = os.path.splitext(fname)[0]
    return re.sub(r'[-_]+', ' ', stem).lower().strip()


def extract_exercises(js_file: str) -> list[str]:
    with open(js_file, 'r') as f:
        content = f.read()
    names = re.findall(r"name:'([^']+)'", content)
    seen, result = set(), []
    for n in names:
        if n not in seen and len(n) > 2:
            seen.add(n)
            result.append(n)
    return sorted(result)


def build_index(exercises: list[str]) -> dict:
    """Bouw een lookup: genormaliseerde naam → originele naam."""
    return {normalize(n): n for n in exercises}


def match_exercise(slug: str, norm_index: dict, exercises: list[str]) -> str | None:
    """Zoek de beste oefening voor een bestandsnaam-slug."""
    # 1. Exacte genormaliseerde match
    if slug in norm_index:
        return norm_index[slug]

    # 2. Oefening begint met slug (bv. slug='squat' → 'Squat (oefening)')
    for norm, orig in norm_index.items():
        if norm.startswith(slug) or slug.startswith(norm):
            return orig

    # 3. Alle woorden van slug zitten in de genormaliseerde naam
    slug_words = set(slug.split())
    if len(slug_words) >= 2:
        for norm, orig in norm_index.items():
            norm_words = set(norm.split())
            if slug_words.issubset(norm_words):
                return orig

    return None


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--dry',  action='store_true', help='Toon matches, schrijf niets')
    parser.add_argument('--list', action='store_true', help='Toon oefeningen zonder afbeelding')
    args = parser.parse_args()

    exercises  = extract_exercises(PROTOCOLS_FILE)
    norm_index = build_index(exercises)
    print(f'Oefeningen in protocols.js : {len(exercises)}')

    # Laad bestaande JSON
    try:
        with open(OUTPUT_FILE) as f:
            images = json.load(f)
        print(f'Bestaande entries in JSON  : {len(images)}')
    except FileNotFoundError:
        images = {}

    # Scan map
    if not os.path.isdir(IMG_DIR):
        print(f'\nMap "{IMG_DIR}/" niet gevonden. Maak de map aan en zet er afbeeldingen in.')
        return

    img_files = sorted(
        f for f in os.listdir(IMG_DIR)
        if os.path.splitext(f)[1].lower() in IMG_EXTS
    )
    print(f'Afbeeldingen in map        : {len(img_files)}\n')

    matched, unmatched = [], []

    for fname in img_files:
        slug    = filename_to_slug(fname)
        ex_name = match_exercise(slug, norm_index, exercises)
        rel_url = f'./{IMG_DIR}/{fname}'

        if ex_name:
            matched.append((ex_name, fname))
            print(f'  ✓  {fname:<40} → {ex_name}')
            if not args.dry:
                images[ex_name] = {
                    'url': rel_url,
                    'alt': ex_name,
                }
        else:
            unmatched.append(fname)
            print(f'  ✗  {fname:<40} → geen match gevonden')

    print(f'\nGematcht : {len(matched)}')
    print(f'Geen match: {len(unmatched)}')

    if unmatched:
        print('\nTip voor niet-gematchte bestanden:')
        print('  Hernoem het bestand zodat het de oefeningnaam benadert,')
        print('  of voeg een regel toe in exercise-images.json:')
        for f in unmatched[:3]:
            print(f'    "Exacte Oefeningnaam": {{"url": "./{IMG_DIR}/{f}", "alt": "..."}},')

    if args.list:
        covered = set(images.keys())
        missing = [e for e in exercises if e not in covered]
        print(f'\nOefeningen zonder afbeelding ({len(missing)}):')
        for m in missing:
            print(f'  • {m}')

    if not args.dry:
        with open(OUTPUT_FILE, 'w') as f:
            json.dump(images, f, ensure_ascii=False, indent=2)
        print(f'\n✓ {OUTPUT_FILE} geschreven ({len(images)} entries)')
    else:
        print('\n(--dry: niets geschreven)')


if __name__ == '__main__':
    main()
