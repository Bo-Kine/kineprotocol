# /pro-prompt

Transformeer een ruwe instructie of idee naar een gestructureerde, professionele prompt die Claude optimaal aanstuurt.

## Input
`$ARGUMENTS` is de ruwe beschrijving van wat de gebruiker wil bereiken.

## Jouw taak

Analyseer `$ARGUMENTS` en schrijf een professionele prompt op basis van de volgende principes:

### 1. Bepaal het type taak
- **Implementatie**: code schrijven, bestanden aanpassen, feature toevoegen
- **Analyse**: code reviewen, problemen diagnosticeren, onderzoek
- **Generatie**: content maken, templates, documentatie
- **Optimalisatie**: bestaande code verbeteren, refactoren

### 2. Schrijf de professionele prompt met deze structuur:

```
## Context
[Wat is de achtergrondsituatie? Welk project, welke stack, welke beperkingen?]

## Doel
[Wat moet het eindresultaat zijn? Concreet en meetbaar.]

## Vereisten
- [Vereiste 1 — functioneel]
- [Vereiste 2 — technisch]
- [Vereiste 3 — kwaliteit / stijl]

## Beperkingen
- [Wat mag NIET veranderd worden]
- [Welke bestaande patronen moeten gevolgd worden]
- [Performance/security constraints]

## Verwacht resultaat
[Beschrijf precies hoe het eindresultaat eruitziet of werkt]

## Extra context
[Relevante bestanden, functies, of code-patronen die van toepassing zijn]
```

### 3. Regels voor de prompt:
- Gebruik **actieve taal** ("schrijf", "voeg toe", "zorg dat") — geen passieve omschrijvingen
- Maak vereisten **concreet en testbaar** — niet "goed" maar "laadtijd < 200ms"
- Vermeld altijd **welke bestanden** geraakt worden als dat van toepassing is
- Bij UI-taken: beschrijf visueel gedrag, niet alleen functionaliteit
- Bij bugs: beschrijf het **verwacht gedrag** én het **huidige foute gedrag**
- Voeg een **definitie van klaar** toe als de taak complex is

### 4. Output format
Geef de professionele prompt terug in een **markdown codeblok** zodat de gebruiker hem makkelijk kan kopiëren en plakken.

Daarna geef je een **korte toelichting** (max 3 regels) waarom de prompt zo gestructureerd is.
