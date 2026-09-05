# PROJECTINSTRUCTIES — Oefenschema's & klinische inhoud

> Plaats dit bestand als `CLAUDE.md` in de root van het project.

---

## 0. Context en rol

Je werkt aan: **KineProtocol** — een offline-first PWA voor kinesitherapeuten met evidence-based
revalidatieprotocollen per aandoening en per fase, een patiëntendossier, een oefenbibliotheek en
printbare thuisoefenbladen. De app draait volledig lokaal in de browser (geen account, geen server);
alle inhoud staat nu nog in `protocols.js`. Output: webapp, A4-oefenblad voor de patiënt,
evaluatieformulieren en een JSON-backup van de patiëntendata.

Opdrachtgever is een kinesitherapeut. De output wordt gebruikt in **patiëntenzorg**: oefenschema's, doseringen en klinische uitspraken belanden bij echte patiënten. Een fout is geen cosmetisch probleem maar een klinisch risico. Behandel elke inhoudelijke uitspraak alsof ze morgen door een collega-kinesitherapeut, een arts of een verzekeraar wordt nagekeken.

Taal van alle inhoud: **Nederlands** (Vlaamse terminologie: kinesitherapeut, oefentherapie, RIZIV-context). Code, bestandsnamen en commits in het Engels.

De eindverantwoordelijkheid ligt bij de kinesitherapeut. Jouw taak is niet "iets plausibels afleveren", maar **verifieerbaar materiaal aanleveren met een expliciete audit-trail**, zodat nakijken snel gaat.

---

## 1. Harde regels — niet onderhandelbaar

1. **Geen klinische claim zonder verifieerbare bron.** Doseringen, indicaties, contra-indicaties, tijdslijnen na letsel/operatie, effectgroottes en veiligheidsuitspraken worden altijd onderbouwd.
2. **Nooit een referentie uit het geheugen opschrijven.** Elke referentie wordt tijdens de taak live opgezocht en gecontroleerd (PubMed / DOI / uitgeverssite). Kan je een bron niet verifiëren → bron én claim schrappen, niet "voorlopig laten staan".
3. **Nooit bibliografische gegevens reconstrueren.** DOI, PMID, auteurslijst, jaartal, tijdschrift, volume, paginanummers en titel worden letterlijk overgenomen uit de opgehaalde bron. Een verzonnen of "waarschijnlijk correcte" DOI is een kritieke fout, ernstiger dan geen bron.
4. **De bron moet de claim écht dekken.** Controleer dat het cijfer, de populatie en de conclusie in de bron staan — niet in het abstract van een ander artikel, niet in een citaat-van-een-citaat. Ga naar de primaire bron.
5. **Geen extrapolatie buiten de onderzochte populatie of indicatie.** Wat aangetoond is bij post-operatieve VKB-revalidatie geldt niet automatisch bij conservatief beleid, bij ouderen of bij een andere pathologie. Als je toch veralgemeent, benoem je dat expliciet als klinische redenering, niet als evidentie.
6. **Getallen worden nooit "afgerond naar wat logisch klinkt".** Neem de dosering over zoals ze in de bron/richtlijn staat, met bereik en eenheid.
7. **Geen stille aannames.** Ontbrekende informatie → één gerichte vraag stellen. Nooit invullen en doorgaan.
8. **Onzekerheid wordt zichtbaar gemaakt**, niet weggeschreven. Gebruik de markering `⚠️ TE VERIFIËREN: <reden>` in de output. Liever tien markeringen dan één gladde zin die niet klopt.
9. **Nooit tegenstrijdige evidentie verstoppen.** Als richtlijnen of reviews van mening verschillen, geef je beide standpunten met de sterkte van het bewijs.

---

## 2. Toegestane bronnen en evidentie-hiërarchie

Werk van boven naar beneden. Ga pas een niveau lager als er hogerop niets bestaat, en vermeld dan het niveau.

1. Klinische richtlijnen: KNGF, NICE, KCE, Domus Medica, Axxon, internationale vakverenigingen (bv. JOSPT Clinical Practice Guidelines).
2. Systematische reviews en meta-analyses (Cochrane bij voorkeur).
3. Gerandomiseerde gecontroleerde studies.
4. Prospectieve cohortstudies.
5. Consensusdocumenten / expert opinion — enkel expliciet als zodanig gelabeld.

**Verboden als bron:** blogs, contentfarms, commerciële producten- of praktijksites, YouTube, samenvattingen van AI-tools, "algemeen aanvaard in de praktijk". Ook Wikipedia niet als bron — hoogstens om de primaire referentie terug te vinden.

**Recentheid:** bij voorkeur ≤ 10 jaar, tenzij het een landmark-studie of nog geldende richtlijn is. Controleer altijd of een richtlijn niet ingetrokken of herzien is.

Beschikbare tools hiervoor (gebruik ze, gok niet): PubMed-zoekopdrachten, DOI-resolutie, full-text ophalen waar toegestaan, en de webzoekfunctie voor richtlijnen.

---

## 3. Verplichte verificatie-workflow

Elke inhoudelijke deliverable doorloopt drie fasen. Fase B wordt **door een andere agent met een schone context** gedaan dan fase A — een schrijver die zichzelf nakijkt bevestigt vooral zichzelf.

**Fase A — Opstellen.** Zoek bronnen, lees, schrijf. Noteer per claim meteen de referentiesleutel.

**Fase B — Onafhankelijke verificatie.** Een verificator-agent krijgt: (1) de geschreven tekst, (2) de lijst met bronnen. Opdracht: controleer elke claim tegen de bron, controleer elke referentie op bestaan en juistheid (DOI/PMID oplossen, auteurs en jaartal vergelijken), meld alles wat niet klopt of niet gedekt is. De verificator schrijft niets nieuw en herformuleert niets — hij rapporteert alleen.

**Fase C — Verificatierapport.** Lever bij elke inhoudelijke deliverable een tabel:

| # | Claim | Bronsleutel | Gedekt door bron? | Opmerking |
|---|-------|-------------|-------------------|-----------|

Regels die niet volledig gedekt zijn, worden aangepast of geschrapt vóór oplevering.

**Proportionaliteit (bewuste keuze voor efficiëntie):** de volledige twee-fasen-controle geldt voor alles met klinische impact — doseringen, contra-indicaties, veiligheids- en timingsuitspraken, effectclaims. Didactische of beschrijvende tekst (uitvoering van een beweging, uitleg over materiaal, layout) krijgt een lichte controle in één beurt. Verwar de twee niet: bij twijfel behandel je de tekst als klinisch.

---

## 4. Referenties — één bron van waarheid

- Alle referenties staan centraal in `data/references.yaml` (of `.bib`). **Nergens anders.**
- Inhoudelijke bestanden verwijzen enkel naar sleutels, bv. `bronnen: [kngf_knie_2023, cook2016_tendinopathy]`.
- Sleutelformaat: `eersteauteur_jaar_kernwoord`, uniek, nooit hergebruikt.
- Verplichte velden per referentie: `key`, `auteurs`, `titel`, `bron` (tijdschrift/uitgever), `jaar`, `volume_paginas`, `doi`, `pmid`, `url`, `type` (richtlijn / SR / RCT / cohort / review / commentary / expert), `geverifieerd_op` (datum), `geverifieerd_door` (tool/agent).
- Weergaveformaat naar de gebruiker: **Vancouver**, met klikbare DOI.
- Er draait een validatiescript dat faalt bij: een citatie in de tekst zonder bestaande sleutel, een referentie zonder DOI/PMID, een referentie die nergens gebruikt wordt, of een dubbele sleutel. **Dit script draait vóór elke oplevering.**

---

## 5. Oefenschema's — overzichtelijk en bewerkbaar

### 5.1 Structuur

Inhoud staat strikt gescheiden van presentatie en van code:

```
data/oefeningen/*.yaml     één oefening per bestand
data/schemas/*.yaml        schema's = combinaties van oefeningen + parameters
data/references.yaml       alle bronnen
templates/                 opmaak: patiënt-PDF, print, web
scripts/validate.*         schemavalidatie + referentiecontrole
```

**Nooit** inhoud hardcoderen in code, in templates of enkel in een database zonder platte-tekst-export. De kinesitherapeut moet een oefening kunnen aanpassen zonder één regel code aan te raken.

### 5.2 Vaste velden per oefening

`id` · `naam` · `synoniemen` · `categorie` · `doel` · `indicaties` · `revalidatiefase` · `spiergroepen` · `uitgangshouding` · `uitvoering` (genummerde stappen, één handeling per stap) · `veelgemaakte_fouten` · `dosering` (sets, herhalingen, tempo, rust, weerstand/RPE, frequentie per week) · `progressie` · `regressie` · `contra_indicaties` · `materiaal` · `media` · `bronnen` · `laatst_gecontroleerd` · `versie`

Velden zijn **altijd aanwezig**, ook als ze leeg zijn (`null` of `n.v.t.`) — zo blijft de structuur voorspelbaar en zie je meteen wat nog ontbreekt.

### 5.3 Bewerkbaarheid — concrete eisen

- Platte YAML, korte regels, één waarde per regel: diffs blijven leesbaar en een wijziging is in één oogopslag te zien.
- `id` is stabiel en wordt nooit hergebruikt of hernummerd; hernoemen mag enkel via een alias.
- Wijzigingen aan inhoud gaan altijd samen met een regel in `CHANGELOG.md`: wat, waarom, welke bron.
- Consistente terminologie: houd `data/terminologie.yaml` bij en gebruik overal dezelfde term (niet afwisselend "herhalingen", "reps" en "hh").
- Een schema verwijst naar oefening-id's en overschrijft enkel de parameters (sets/reps/weerstand). Zo blijft één oefening op één plaats onderhouden.
- Validatiescript controleert verplichte velden, toegestane waarden en bestaande referentiesleutels.

### 5.4 Output naar de patiënt

- Eén oefening = één visueel blok: naam, afbeelding, doel in één zin, uitvoering in stappen, dosering in een duidelijke tabel, opmerkingsveld.
- Doseringstabel altijd dezelfde kolomvolgorde: **oefening | sets × herhalingen | frequentie | weerstand/RPE | opmerking**.
- Maximaal wat op één A4 leesbaar past; taalniveau B1, geen vakjargon zonder uitleg.
- Referenties komen **niet** op het patiëntenblad, wel in de interne versie van het schema.
- Elke export bevat: versienummer, datum, naam van de kinesitherapeut.

---

## 6. Efficiëntie: agents, credits en verbruik

Uitgangspunt: **minimaal aantal tokens per geverifieerde eenheid output.** Kwaliteit inleveren om credits te sparen mag niet; verspilling evenmin.

### Plannen
- Voor elke niet-triviale taak eerst een plan van maximaal 10 regels: aanpak, te raken bestanden, geschat aantal tool-calls. Pas uitvoeren na akkoord als de taak meer dan 5 bestanden raakt of meer dan ~20 tool-calls vraagt.
- Werk incrementeel: lever eerst één oefening of één module volledig af, laat die valideren, en pas dan het patroon toe op de rest. Nooit 40 schema's in één keer produceren die daarna allemaal fout blijken.
- Stop en stel één gerichte vraag bij onduidelijkheid. Een vraag kost enkele tokens, een verkeerde aanname kost een volledige herwerking.

### Agents en subagents
- Doe het eenvoudigste dat werkt. **Geen subagent** voor iets wat één agent in één beurt afhandelt.
- Subagents enkel bij: (a) echt onafhankelijke, parallelle deeltaken, (b) omvangrijk zoek- en leeswerk dat de hoofdcontext zou vervuilen, (c) de onafhankelijke verificatie uit §3, die een schone context nodig heeft.
- Elke subagent krijgt: een scherp afgebakende opdracht, de exacte bestanden/queries, en een **verplicht outputformaat met maximale lengte**. Hij levert conclusies + bronsleutels terug, niet het ruwe materiaal.
- Draai nooit meerdere subagents op dezelfde vraag "voor de zekerheid".

### Modelkeuze
- Licht/snel model: zoeken, filteren, mechanisch herschrijven, bestanden hernoemen, formatteren, YAML-validatie.
- Sterk model: klinische synthese, interpretatie van evidentie, en de eindverificatie.
- Kies bewust en vermeld de keuze in het plan.

### Context en tool-gebruik
- Zoek gericht: eerst `grep`/`glob`, dan enkel de relevante regels lezen. Nooit een hele map of een groot bestand "voor de zekerheid" inlezen.
- Batch onafhankelijke tool-calls in één beurt.
- Lees nooit twee keer hetzelfde bestand binnen dezelfde taak; onthoud wat je al gezien hebt.
- Bewerk met kleine, gerichte diffs. Nooit een volledig bestand herschrijven voor een kleine wijziging.
- Kopieer geen bestandsinhoud in je antwoord — verwijs naar pad en regelnummers.
- Houd dit instructiebestand kort en stabiel (cache-vriendelijk). Details horen in aparte documenten die alleen op aanvraag gelezen worden.
- Start een nieuwe, schone context per afgebakende taak in plaats van één sessie eindeloos te laten aangroeien.

### Output-discipline
- Antwoord kort: wat je gedaan hebt, wat er nog open staat, waar het staat. Het werk zit in de bestanden, niet in de chat.
- Geen ongevraagde extra's: geen bijkomende bestanden, geen README's, geen tests, geen refactors die niemand vroeg.
- Geen samenvatting van wat je net geschreven hebt, geen herhaling van de opdracht, geen verontschuldigingen.

---

## 7. Definition of done

Een deliverable is pas af als **alle** punten afgevinkt zijn:

- [ ] Elke klinische claim heeft een referentiesleutel
- [ ] Elke referentie is live geverifieerd (DOI/PMID opgelost, auteurs + jaar + titel kloppen)
- [ ] Onafhankelijke verificatiefase uitgevoerd, verificatietabel bijgeleverd
- [ ] Alle `⚠️ TE VERIFIËREN`-punten opgelost of expliciet doorgegeven ter beoordeling
- [ ] Validatiescript draait zonder fouten (verplichte velden + referenties)
- [ ] Terminologie consistent met `data/terminologie.yaml`
- [ ] `CHANGELOG.md` bijgewerkt, `laatst_gecontroleerd` en `versie` aangepast
- [ ] Patiëntoutput gecontroleerd op leesbaarheid en op afwezigheid van interne notities

---

## 8. Wat je nooit doet

- Een DOI, PMID of referentie verzinnen, aanvullen of "corrigeren" uit het geheugen
- Een claim schrijven die plausibel klinkt maar niet nagekeken is
- Een bron citeren die je enkel via een abstract of een secundaire vermelding kent
- Een dosering aanpassen "omdat het logischer is" zonder bron
- Een ontbrekend gegeven zelf invullen
- Inhoud hardcoderen in code of templates
- Een volledig bestand herschrijven voor een kleine wijziging
- Subagents inzetten voor werk dat in één beurt kan
- Ongevraagd bestanden, tests of refactors toevoegen

---

## 9. Projectgegevens

- **Doelgroep / pathologieën:** musculoskeletale revalidatie bij volwassenen, verdeeld over vijf regio's —
  knie & heup (12 protocollen), schouder & arm (6), enkel & voet (5), lumbaal & cervicaal (4), pols & hand (3).
  Zowel postoperatief als conservatief.
- **Output-formaten:** PWA (offline), printbaar A4-thuisoefenblad, printbare evaluatieformulieren en
  vragenlijsten, JSON-export van patiëntendata. Geen EPD-koppeling.
- **Beschikbare tools/MCP's:** PubMed (zoeken, metadata, full text, ID-conversie), Scite (literatuurzoek,
  citaties), webzoekfunctie en WebFetch voor richtlijnen, GitHub.
- **Voorkeursrichtlijnen:** ⚠️ TE VERIFIËREN: nog te bevestigen door de kinesitherapeut. Tot dan geldt de
  hiërarchie uit §2, met KNGF en JOSPT Clinical Practice Guidelines als eerste ingang voor musculoskeletale
  revalidatie en Cochrane voor effectvragen.
