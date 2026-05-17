# /fetch-images

Haal automatisch afbeeldingen op van Pexels voor alle oefeningen in KineProtocol.

## Argumenten
`$ARGUMENTS` kan een Pexels API key bevatten, of leeg zijn als de key al ingesteld is.

## Jouw taak

1. **Controleer of de API key beschikbaar is:**
   - Als `$ARGUMENTS` een key bevat (begint met letters/cijfers, ~32 tekens): gebruik die
   - Anders: check of `PEXELS_API_KEY` in de omgeving staat: `echo $PEXELS_API_KEY`
   - Als geen key gevonden: informeer de gebruiker om naar https://www.pexels.com/api/ te gaan en gratis te registreren

2. **Controleer hoeveel oefeningen nog geen afbeelding hebben:**
   ```bash
   python3 -c "
   import json, re
   with open('protocols.js') as f: c = f.read()
   names = set(n for n in re.findall(r\"name:'([^']+)'\", c) if len(n)>8)
   try:
       imgs = json.load(open('exercise-images.json'))
   except: imgs = {}
   missing = [n for n in names if n not in imgs]
   print(f'Totaal: {len(names)}, Met afbeelding: {len(imgs)}, Ontbreekt: {len(missing)}')
   "
   ```

3. **Voer het script uit:**
   - Als `exercise-images.json` leeg is of < 50 entries: volledig run
     ```bash
     python3 fetch-exercise-images.py --key JOUW_KEY
     ```
   - Als er al entries zijn: alleen nieuwe toevoegen
     ```bash
     python3 fetch-exercise-images.py --key JOUW_KEY --update
     ```
   - Voor een snelle test (eerste 10):
     ```bash
     python3 fetch-exercise-images.py --key JOUW_KEY --limit 10
     ```

4. **Na afloop: commit en push**
   ```bash
   git add exercise-images.json
   git commit -m "Oefening-afbeeldingen bijgewerkt via Pexels (X/452)"
   git push origin main
   ```

5. **Rapporteer:** hoeveel oefeningen succesvol een afbeelding hebben, hoeveel mislukt zijn, en of de app opnieuw geladen moet worden.

## Pexels API key aanmaken
1. Ga naar https://www.pexels.com/api/
2. Klik "Get Started" → gratis account aanmaken
3. Na registratie: ga naar https://www.pexels.com/api/ → kopieer je key
4. Geef de key mee als argument: `/fetch-images jouw_key_hier`
