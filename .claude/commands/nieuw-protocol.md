# /nieuw-protocol

Maak een volledig nieuw revalidatieprotocol aan voor KineProtocol.

## Argumenten
`$ARGUMENTS` bevat de naam/omschrijving van het protocol. Bijvoorbeeld: "Achillespees Ruptuur" of "Schouder Bankart Repair postoperatief"

## Jouw taak

1. **Analyseer** `$ARGUMENTS` om te bepalen:
   - Welk lichaamsdeel / diagnose
   - Of het postoperatief, conservatief, of chronisch is
   - Hoeveel fasen logisch zijn (typ. 4–6)

2. **Lees** `/home/user/kineprotocol/protocols.js` om:
   - De exacte JS-objectstructuur te begrijpen
   - Een unieke `id` te kiezen (2–4 lowercase letters, nog niet in gebruik)
   - Een passende `color` te kiezen (kies een hex-kleur die nog niet gebruikt wordt)

3. **Genereer** een volledig protocol-object in exact dezelfde structuur als de bestaande protocollen:

```js
nieuwid:{
  id:'nieuwid',
  title:'Volledige Naam Protocol',
  subtitle:'Korte klinische omschrijving met indicatie',
  color:'#hexkleur',
  phases:[
    {
      label:'Fase 1',
      title:'Naam van de fase',
      weeks:'Week 0–2',
      goals:['Doel 1','Doel 2','Doel 3'],
      exercises:[
        {name:'Naam oefening',params:[['Sets','3'],['Reps','10–15'],['Freq','2×/dag']],note:'Klinische richtlijn of aanpassing.',cat:'kracht'},
        // minimaal 5 oefeningen per fase
      ],
      criteria_go:['Criterium 1','Criterium 2','Criterium 3'],
      evidence:'Evidencetekst met <strong>sleutelbevindingen</strong> en referenties (Auteur et al., jaar).'
    },
    // herhaal voor elke fase
  ],
  scores:[], // laat leeg tenzij er een specifieke vragenlijst bij hoort
  spiergroep:'relevante spiergroep voor bibliotheekfilter'
}
```

### Vereisten per fase:
- **goals**: 3–5 concrete, meetbare doelen
- **exercises**: minimaal 5 oefeningen, mix van `cat` waarden: `'kracht'`, `'mobiliteit'`, `'stabiliteit'`, `'cardio'`, `'neuromusculair'`
- **params**: altijd arrays van `[label, waarde]` paren — sets, reps, hold, duur, freq
- **criteria_go**: 4–6 objectieve, klinisch meetbare doorstroomcriteria
- **evidence**: minimaal 2 evidenced-based referenties met `<strong>` voor sleutelbegrippen
- **weeks**: realistische tijdspanne per fase

4. **Voeg het protocol toe** aan `/home/user/kineprotocol/protocols.js`:
   - Zoek de `const PROTOCOLS = {` declaratie
   - Voeg het nieuwe object toe aan het einde van de lijst (vóór de sluitende `}`)
   - Zorg dat de komma's correct staan

5. **Voeg de kleur toe** aan de CSS-variabelen in `/home/user/kineprotocol/index.html`:
   - Zoek `:root{` in de `<style>` tag
   - Voeg `--nieuwid:#hexkleur;` toe aan de variabelenlijst

6. **Bump de app-versie**:
   - `app.js`: verhoog `const V = 'X'` met 1
   - `sw.js`: verhoog `kineprotocol-vX` met 1
   - `index.html`: verhoog `bg.webp?v=X` met 1

7. **Commit en push**:
```bash
git add protocols.js index.html app.js sw.js
git commit -m "Nieuw protocol: [naam] — [aantal] fasen, [aantal] oefeningen"
git push origin main
```

8. **Rapporteer**: geef een overzicht van het aangemaakte protocol met alle fasestitels en het aantal oefeningen per fase.
