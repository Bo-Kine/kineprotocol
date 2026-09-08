# Changelog

Inhoudelijke wijzigingen aan protocollen, oefeningen en bronnen.
Formaat per regel: wat · waarom · bron.

## 2026-09-08 — app hernoemd naar KINEBO, nieuw logo (v86)

- Het B-merk uit het aangeleverde logo is uitgesneden (x 600-813, y 154-537 uit het bronbeeld) en omgezet naar alle acht PWA-iconen · het merk vult 62% van de zijde, zodat het bij `purpose: any maskable` binnen de veilige cirkel blijft die Android en iOS uitsnijden
- De topbar toont nu datzelfde merk op een cremekleurige tegel in plaats van het bot-emoji · op de donkere balk gaf het merk zonder achtergrond te weinig contrast: de B loopt van bijna zwart (39,0,0) tot lichte metaalglans, en de donkere helft zou wegvallen
- `logo-mark.png` toegevoegd aan de offline-cachelijst, bij de optionele bestanden — een ontbrekend icoon mag de installatie niet blokkeren
- Naam vervangen in index.html, app.js, patients.js, sw.js, protocols.js, manifest.json, version.js en scripts/validate.js · CHANGELOG.md en data/claims/*.yaml zijn ONGEMOEID gelaten: die documenteren wat er gebeurd is en horen niet met terugwerkende kracht herschreven te worden
- DATAVERLIES VOORKOMEN · de JSON-back-up van patiëntendossiers gebruikt de app-naam als kenmerk, en de import weigerde alles wat niet 'KineProtocol' heette · een blinde hernoeming had elke reeds gemaakte back-up onleesbaar gemaakt · de export schrijft nu 'KINEBO', de import aanvaardt beide, en die legacy-waarde staat gemarkeerd zodat ze bij een volgende hernoeming niet meevervangen wordt
- Gecontroleerd in de browser · titel, topbar, apple-mobile-web-app-title en manifest tonen KINEBO, het logo laadt, geen console-fouten, geen 404's, en de oude naam komt nergens meer in beeld

## 2026-09-07 — protocolkop scrolt mee (v85)

- De kop van een protocol — breadcrumb, titel, fasetijdlijn en de knoppenrij — stond BUITEN de scrollcontainer met `flex-shrink:0` en kon daardoor per definitie niet meebewegen · hij is nu naar binnen verplaatst, zodat hij bij het scrollen gewoon mee omhoog schuift en je meer scherm overhoudt voor de inhoud
- De fasetabs (`.viewer-tabs`) blijven wél sticky · van fase wisselen moet mogelijk blijven wanneer je onderaan een lange fase staat
- Bijkomend opgelost · die tabbalk stond op 94% dekking, wat volstond zolang de kop erboven vastzat · nu er inhoud onderdoor schuift, schemerde de tekst er zichtbaar doorheen · balk is dekkend gemaakt, met behoud van de blur
- Gecontroleerd in de browser · kop verdwijnt volledig uit beeld bij scrollen, tabs klemmen exact op de bovenrand van de scroller zonder gat, geen console-fouten, en home/protocol/fasewissel werken onveranderd

## 2026-09-07 — service-workerupdates kwamen niet door (oorzaak van de v59-melding)

- DE CACHENAAM WAS NIET HET PROBLEEM · `sw.js` leidt die al af uit `APP_VERSION`, dus die was allang `kineprotocol-v84` · het probleem zat in de UPDATECHECK
- OORZAAK · `navigator.serviceWorker.register('./sw.js')` gebruikte de standaardwaarde `updateViaCache: 'imports'` · daarmee haalt de browser bij een updatecheck het via `importScripts` geladen `version.js` uit zijn HTTP-cache · omdat `sw.js` zélf dan byte-identiek is, besluit de browser dat er geen nieuwe versie is en blijft het toestel op de oude cache hangen — ook al staat de nieuwe versie op de server · dat is precies waarom een toestel op v59 bleef staan terwijl de repo op v84 stond
- FIX 1 · geregistreerd met `updateViaCache: 'none'`, zodat `sw.js` én de geïmporteerde scripts bij elke controle vers worden opgehaald
- FIX 2 · een `// VERSIESTEMPEL: <nummer>`-regel in `sw.js` die meebumpt met `version.js` · browsers vergelijken de BYTES van sw.js om een update te detecteren; deze stempel garandeert dat er iets verandert, ook voor toestellen die nog met de oude registratie draaien
- VANGNET · `scripts/validate.js` faalt nu als de stempel en `version.js` uit elkaar lopen, en als de registratie `updateViaCache:'none'` mist · beide controles getest door ze bewust te laten falen
- GEVERIFIEERD IN EEN ECHTE BROWSER · verse installatie geeft `updateViaCache: 'none'`, actieve worker en cache `kineprotocol-v84` met 18 bestanden · en de upgradeweg zelf: een toestel dat al op v84 stond, kwam na een server-side bump terug op `kineprotocol-v85` met de oude cache opgeruimd

## 2026-09-07 — drie ACL-claims geschrapt · SLR-omkering · beslisbomen alsnog nagekeken

**Op beslissing van de kinesitherapeut zijn de drie wachtende ACL-claims geschrapt** in plaats van in wachtstand gehouden, conform §1.2.

- `acl_c10` · de bronvermelding bij de isometrische knie-extensie op 60° was al verwijderd; de oefening blijft staan, nu uitdrukkelijk als klinische richtlijn zonder onderbouwing
- `acl_c11` · de ACL-RSI-drempels 56 en 65 zijn uit de fasedoelen en doorstroomcriteria verwijderd; de vragenlijst blijft als meting staan zonder afkapwaarde · de STOPcriteria die een verwijzing naar psychologische begeleiding sturen (< 40 en < 50) zijn BEHOUDEN maar gelabeld als praktijkafspraak — een lage score is een reden tot gesprek, en die vangnetfunctie schrappen zou de zorg verslechteren
- `acl_c12` · de IKDC-drempel van 85 idem verwijderd; het MCID van 11,5 werd nergens als criterium gebruikt en verviel daarmee

**TWEE VONDSTEN DIE PAS BIJ HET KIJKEN NAAR HET SCHERM BOVENKWAMEN**

- De SLR-oefening bij lumbale hernia toonde nog altijd "Positief: < 70°" en "Specificiteit: hoog" — de omkering die fase B had aangewezen. Bij het verwerken corrigeerde ik de slumptest ernaast en niet de SLR zelf. Beide bronnen geven juist een LAGE specificiteit (0,26 en 0,28). De parameters stonden direct onder een evidencetekst die het tegenovergestelde zei. **Les: een afgevinkt claimdossier garandeert niet dat de app het toont — de laatste controle hoort in de app zelf.**
- **De klinische beslisbomen zaten nooit in de audit.** Dat is de structuur die bij de triage gebruikt wordt, en ze herhaalden claims die in de protocollen al weerlegd waren: "spontaan herstel bij 75% binnen 12 weken (Weber 1983)" — Weber bevat geen herstelpercentage; "Kukkonen: conservatief = chirurgisch bij < 50% dikte boven 55 jaar" — die trial hanteert geen van beide grenzen; "Walker 2000: 60-70% symptoomreductie" — staat er niet in; "Ottawa sensitiviteit 96-99%" — het bereik dat elders al geschrapt was; plus recidiefpercentages per leeftijdsgroep en het Ilyas-cijfer van 50% · zeven teksten gecorrigeerd of gelabeld
- **Eén vermelding verdient het om genoemd te worden omdat ze wél klopte:** de beslisboom bij schouderinstabiliteit gaf Burkhead & Rockwood correct weer — 80% succes bij AMBRI tegenover 16% bij TUBS — precies zoals geverifieerd. Die is ongemoeid gelaten.

**Badge leesbaar gemaakt** · op een telefoon liep de tekst van het scherm af (`white-space:nowrap`); ze breekt nu af en is ingekort tot "21 claims · 17 niet gedekt", met de volledige uitleg in de tooltip

## 2026-09-07 — EINDBALANS VAN DE BRONAUDIT

Alle 30 protocollen zijn door fase A (opstellen) en fase B (onafhankelijke verificatie
met schone context) gegaan. 178 referenties zijn live opgehaald en bibliografisch
gecontroleerd; 461 inhoudelijke claims zijn tegen hun aangehaalde bron gelegd.

**De uitkomst in één regel: van de 461 gecontroleerde claims bleken er 31 volledig
gedekt door de bron die erbij stond, 57 gedeeltelijk en 373 niet.**

"Niet gedekt" betekent niet dat de uitspraak onjuist is. Het betekent dat de
aangehaalde bron haar niet ondersteunde. In veruit de meeste gevallen ging het om
gangbare, verdedigbare kinesitherapeutische praktijk waar een bron bij was gezet die
er niet over ging. Die uitspraken staan nu in de app als klinische redenering of
praktijkafspraak, niet langer als evidentie.

**Vijf terugkerende foutpatronen**

1. *Bronverwisseling tussen weefsels.* `rio_2015_isometrie` (patellapees) dekte negen
   claims niet en werd aan zes verschillende pezen toegeschreven; `beyer_2015_hsr_achilles`
   (achillespees) zes, tot in de duimpezen toe. De onderliggende oefening blijft
   verdedigbaar, maar het bewijs komt van een ander weefsel.
2. *Omgekeerde effectrichting.* Ruim vijftien keer concludeerde de bron het tegendeel
   van wat de app schreef. De zwaarste: de volledige fase 2 van het frozen-shoulder-
   protocol was op capsulaire rek gebouwd terwijl de aangehaalde studie supervised
   neglect beter vond (89% tegenover 63%); het shin-splintsprotocol rustte op een
   tractiemodel dat zijn eigen hoofdbron uitdrukkelijk verwerpt; en `huisstede_2010_cts_chirurgie`
   werd viermaal aangehaald als bewijs dát postoperatieve handtherapie werkt, terwijl
   die review juist géén bewijs daarvoor vond.
3. *Weggelaten tegenstrijdige evidentie (§1.9).* Telkens werd de gunstige helft van een
   bron overgenomen en de ongunstige niet: Coombes 2013 (kinesitherapie gaf na een jaar
   geen significant verschil), Mellor 2018 (op 52 weken geen verschil in pijn), Moen 2009
   (rust gelijkwaardig aan elke interventie), Artz 2015 (geen langetermijneffect),
   Hupperets 2009 (geen effect bij medisch behandelde sporters).
4. *Niet-significante bevindingen als vaststaand.* Grindem (p = 0,075), Wilk (p = 0,17)
   en Hancock werden zonder hun p-waarde overgenomen.
5. *Het lek naar de oefeningvelden.* In élk protocol bleven gecorrigeerde claims in hun
   oude vorm staan in de `note`-, `params`-, `goals`- en `criteria`-velden — precies wat
   de kinesitherapeut tijdens de behandeling leest. Fase B ving dat consequent op.

**Wat nog openstaat**

- Drie ACL-claims wachten op een bron van de kinesitherapeut: `acl_c10` (isometrische
  quadriceps op 60°), `acl_c11` (ACL-RSI-drempels 56 en 65) en `acl_c12` (IKDC MCID 11,5
  en drempel 85). In protocols.js staat bij die criteria "(bron nog aan te leveren)".
- Ongeveer veertig citaties konden niet worden opgehaald en zijn als zodanig gelabeld.
  Ze zijn niet weerlegd — enkel niet geverifieerd.

## 2026-09-07 — fase B op ORIF, de Quervain en carpaaltunnel + eerlijker bronbadge

- DE HUISSTEDE-OMKERING VOOR DE VIERDE KEER, NU MET EEN VERZONNEN PERCENTAGE · een oefeningnote las "Huisstede 2010: begeleide krachttraining na CTS-release geeft 35% meer gripkracht op 8 weken vs geen therapie" · dezelfde review besluit dat er GEEN bewijs is voor postoperatieve behandelprogramma's, en die 35% staat er nergens in · fase 3 en 4 corrigeerden dit in het evidence-veld, de note bleef staan — en dat is de tekst bij de oefening die wordt voorgeschreven
- Tweede verzonnen vergelijking uit Walker 2000 · "neutraalspalk 0° significant beter dan extensiespalk 20°" · die trial vergeleek nachtelijk met voltijds dragen; twee spalkhoeken komen er niet in voor
- Verder gelabeld of geschrapt · "NICE 2022: work hardening vermindert verzuim met 40%", "Shiels 2016: littekenmassage reduceert overgevoeligheid significant", "Bland 2007: verhindert peesverkleving", "Cavaleri 2016 toont meer pijnreductie bij trouwe spalkdracht", "Ilyas 2007: 50% recidief onder 10 weken" (het cijfer dat fase 3 net had geschrapt), "Chern 2014: 34% eigen EPB-subcompartiment", en een "Beyer 2015-principe" voor collageensynthese in de duimpezen — de zevende plaats waar die achillespeesbron bij een andere pees opduikt
- Ongelabelde harde getallen alsnog gemarkeerd · double crush 15-20%, recidief 3-10%/2-7%, grip < 75% na 16 weken (triggert verwijzing), flick sign 93%, Phalen 68-73%, Finkelstein 89%/90%, sporthervattingsweken voor golf, tennis en gewichtheffen, en de operatie-indicatiewaarden bij ORIF (grip < 30%, ROM < 50%, verkorting > 5 mm, kanteling > 20°)

**BRONBADGE TOONT NU DE UITKOMST, NIET ALLEEN HET FEIT VAN DE AUDIT**

- Het probleem · met alle 30 protocollen geauditeerd stond overal een groene badge "bronaudit · 21 claims" · dat leest als kwaliteitskeurmerk, terwijl bij lumbale hernia 17 van die 21 claims juist NIET gedekt bleken door de aangehaalde bron
- De badge toont nu "21 claims · 17 niet gedekt door de aangehaalde bron" en wordt oranje zodra het aantal niet-gedekte claims dat van de gedekte overtreft · de tooltip legt uit dat niet-gedekt niet betekent dat de uitspraak onjuist is, maar dat ze nu als klinische redenering of praktijkafspraak in de tekst staat in plaats van als evidentie
- `scripts/build-bronstatus.js` telt daarvoor een nieuw veld `niet_gedekt` mee

## 2026-09-07 — bronaudit de Quervain + carpaaltunnelsyndroom — ALLE 30 PROTOCOLLEN GEAUDITEERD

- DRIEMAAL DEZELFDE OMKERING, UIT ÉÉN BRON · `huisstede_2010_cts_chirurgie` besluit letterlijk "No evidence was found for the efficacy of various presurgical or POSTsurgical treatment programs, including splinting" · het carpaaltunnelprotocol haalt die review DRIEMAAL aan als bewijs dát postoperatieve handtherapie werkt: "vroege mobilisatie superieur aan immobilisatie", "handtherapie verbetert grijpkracht en BCTQ sneller dan geen therapie" en "geen evidentie boven 8 weken" · de derde klopt qua richting maar is te zwak: er is geen bewijs voor postoperatieve programma's ín het algemeen · de hele derde fase van dat protocol rust op de tweede claim
- Alle drie keer bovendien als "(Cochrane)" aangeduid, terwijl de review in Archives of Physical Medicine and Rehabilitation verscheen
- De spalktrial vergeleek iets anders dan de app schreef · `walker_2000_polsspalk_cts` zet NACHTELIJK tegenover VOLTIJDS dragen; er is géén controlegroep zonder behandeling, dus "spalk beter dan geen behandeling" bestaat niet · de uitkomstmaten zijn de Levine-vragenlijst en de distale latentie, niet NRS of BCTQ-SSS, en de cijfers -2,1 en -0,5 komen er niet in voor · 21 ingesloten patiënten, 17 voltooiden
- De Quervain · `cavaleri_2016_dequervain` bevat precies de bevinding die de kinesitherapeut aangaat, en die ontbrak: injectie en handtherapie verbeterden beide pijn en functie, maar het VERSCHIL TUSSEN BEIDE was over zes studies NIET significant · wat wél significant was, is de combinatie boven elk apart (RR 0,53 tegenover orthese alleen; 0,76 tegenover injectie alleen) · het aangehaalde number needed to treat van 3 staat er niet in
- Dezelfde bron werd in fase 2 gebruikt voor een vergelijking tussen krachttraining en immobilisatie die er niet in voorkomt

**Daarmee zijn alle 30 protocollen door fase A gegaan: 178 live geverifieerde referenties en 452 gedocumenteerde claims.**

## 2026-09-07 — bronaudit ORIF distale radius + fase B labrumscheur

- DE BELANGRIJKSTE VONDST IS EEN GEMISTE BEVINDING, GEEN FOUT CIJFER · het refs-veld beschreef `lozanocalderon_2008_polsmobilisatie` als "Quality and strength of evidence for etiology in orthopaedic research", een methodologisch stuk · in werkelijkheid is het een RCT bij 60 patiënten over precies de vraag die dit protocol beantwoordt — wanneer starten met polsmobilisatie — en het antwoord ontbrak volledig: GÉÉN verschil tussen starten binnen twee weken en pas na zes weken, niet in flexie-extensieboog na 3 maanden (104 tegenover 107°; p = 0,61) of 6 maanden (124 tegenover 126°; p = 0,65), en evenmin in grijpkracht, DASH of pijn
- TEGENSTRIJDIGE EVIDENTIE, NU BEIDE VERMELD (§1.9) · `quadlbauer_2017_vroege_revalidatie` is een PILOT met 30 patiënten die onmiddellijke mobilisatie vergeleek met vijf weken immobilisatie en wél voordeel vond · de app gaf alleen die gunstige helft · vroeg starten blijft veilig en verdedigbaar, maar de winst ervan is niet vastgesteld
- Verder gelabeld · "grijpkracht < 75% correleert sterk met functieverlies (MacDermid 2004)" — het refs-veld beschrijft die publicatie als een validatiestudie van de PRWE-vragenlijst, een ander onderwerp · "HSR effectiever dan lage weerstand voor BOTGENEZING" en "2×/dag superieur aan 1×/dag" — twee vergelijkende effectclaims zonder bron · de PRWE-drempel van 20 die de vrijgave voor werk en sport bepaalt

- FASE B LABRUMSCHEUR · alle vier bronsleutels en alle vijf gecorrigeerde evidenceteksten letterlijk gedekt, inclusief de opgenomen voorbehouden · maar de ER/IR-verhouding 0,66 stond nog op drie plaatsen als hard doel of criterium, en "GIRD keert binnen weken terug zonder onderhoud" sprak het evidence-veld van dezelfde fase rechtstreeks tegen
- Twee onverenigbare drempels voor het totale rotatiedeficit binnen één protocol: 10° in fase 2 en 5° in fase 4 en 5 · alleen "> 5°" is in Wilk terug te vinden
- Redactioneel maar zichtbaar voor de gebruiker · een oefeningnote eindigde op de afgebroken zin "Bedoeld om het blessurerisico aanzienl" — restant van een geschrapte effectclaim

## 2026-09-07 — bronaudit anterosuperieure labrumscheur

- EEN NIET-SIGNIFICANTE BEVINDING ALS VASTSTAAND GEPRESENTEERD · "GIRD ≥ 20° gaat gepaard met 1,9× hoger blessurerisico (Wilk 2011)" · het abstract zegt letterlijk "nearly twice as likely to be injured ... BUT WITHOUT STATISTICAL SIGNIFICANCE (p = 0,17)" · de factor 2,5 voor het totale rotatiedeficit staat er helemaal niet in · het is bovendien een case series met bewijsniveau 4 · zelfde foutpatroon als de Grindem-uitspraak eerder in deze audit
- Het cijfer dat voor déze patiënten telt, ontbrak tweemaal · `edwards_2010_conservatief_slap`: de app nam "71% terugkeer" over, maar dat geldt voor ÁLLE sporters — voor BOVENHANDSE sporters was het 66%, en dit protocol gaat juist over bovenhandse sporters · bovendien rust dat cijfer op een postenquête met 16,4% responsgraad en slechts negentien conservatief behandelde patiënten
- `provencher_2013_slap_herstel` · faalpercentage 36,8% en leeftijdsgrens kloppen (RR 3,45; 95% BI 2,0-4,9), maar de aanbeveling "bij ouderen verdient tenodese de voorkeur" staat er niet in — de auteurs besluiten juist dat verder onderzoek nodig is · weggelaten: 28% heringrepen, en de postoperatieve bewegingsuitslag was KLEINER dan preoperatief
- DE VERHOUDING 0,66 VOOR DE DERDE KEER TOEGESCHREVEN AAN EEN BRON DIE ZE NIET BEVAT · na Cools 2007 in het rotatorenmanchet- en het schouderinstabiliteitsprotocol nu ook Cools 2014 hier · de drempel is klinisch gangbaar maar heeft in dit dossier nergens een bron
- Positief te vermelden · dit protocol is beter gerefereerd dan de meeste: volledige volume- en paginanummers, en alle vier de gecontroleerde bronnen bestaan én handelen over het juiste onderwerp · de fouten zitten uitsluitend in de weergave

## 2026-09-07 — bronaudit gluteus tendinopathie + fase B knieprothese

- EEN CASE-CONTROLSTUDIE ZONDER BEHANDELING ALS BEHANDELBEWIJS · "progressieve isotone abductietraining vermindert pijn en verbetert het functioneren (Allison 2016)" · die studie bevat géén enkele interventie: ze vergelijkt de abductiekracht van 50 patiënten met 50 controles · bevinding: mensen met gluteale tendinopathie zijn BEIDERZIJDS zwakker (32% symptomatisch, 23% asymptomatisch), en de auteurs stellen uitdrukkelijk dat onduidelijk is of die zwakte oorzaak dan wel gevolg is
- Een vergelijking die in de trial niet bestaat · "hoogbelaste krachttraining is superieur aan rekoefeningen (Mellor 2018)" · die trial heeft drie armen — educatie plus oefening, corticosteroïdinjectie en afwachten — en géén rekarm
- Een drempel uit een commentaar · "LSI ≥ 90% is de RTS-drempel (Grimaldi & Fearon 2015)" · dat is een klinisch commentaar waarin de auteurs zelf schrijven dat hun aanbevelingen op beperkt bewijs en eigen ervaring berusten; er staat geen enkele LSI-drempel in
- Wat wél klopte, en nu met cijfers · Mellor 2018 is een sterke trial: op acht weken succes bij 51 van 66 met educatie plus oefening tegenover 38 van 65 na injectie en 20 van 68 bij afwachten, met een number needed to treat van 2,0 · MAAR de nuance die de patiënt het meest aangaat ontbrak: op 52 weken was er géén verschil meer in PIJNintensiteit tussen oefening en injectie

- FASE B KNIEPROTHESE · de verificator betrapte mij op dezelfde §1.9-fout in spiegelbeeld: ik nam wel de ongunstige helft van de cryotherapie-review over, maar liet de énige gunstige uitkomst weg (11,4° meer flexie bij ontslag) · toegevoegd
- Ook mijn "géén langetermijneffecten" was te absoluut · bij pooling van enkel de hoogwaardige studies bleef de winst tot zes maanden zichtbaar, en één loopvaardigheidsstudie gaf wél langetermijnwinst
- Het lek · cryotherapie stond nog "na elke sessie" voorgeschreven zonder voorbehoud, en "70-80% 1RM" ongewijzigd in het parameterveld dat op het patiëntenblad terechtkomt · MUA-drempels die een chirurgische ingreep triggeren (flexie < 80° na 2 weken, < 90° na week 6-8, timing vóór week 12) stonden zonder enige bron · het hele beschrijvingenblok bleef ongelabeld, met drie citaties zonder sleutel (NICE 2020, Blagojevic 2010, JAMA 2017) en zeven ongedekte getallen waaronder de indicatiecriteria voor de operatie zelf

## 2026-09-07 — bronaudit totale knieprothese + fase B overpronatie

- DE HOOFDBRON TWEEMAAL VERKEERD GECITEERD, EENMAAL OMGEKEERD · "ambulante kinesitherapie 3×/week is superieur" · `artz_2015_kinesitherapie_tka` vond juist GEEN verschil tussen ambulante en thuisbehandeling voor functie of pijn, en op korte termijn een voordeel VÓÓR thuisbehandeling wat de flexie-mobiliteit betreft · dat raakt de zorgorganisatie rechtstreeks: het protocol stuurde patiënten naar de praktijk op grond van een bevinding die het tegendeel zegt · dezelfde review werd ook aangehaald voor "70-80% 1RM veilig en effectief", terwijl ze weerstandsintensiteit nergens evalueert
- Weggelaten uit diezelfde review · de winst geldt op 3-4 maanden (functie SMD -0,37; pijn SMD -0,45) maar er werden GEEN langetermijneffecten gevonden, en de conclusie berust op een klein aantal onvoldoende gepowerde studies
- Van twee Cochrane-reviews telkens de positieve helft overgenomen · "cryotherapie reduceert pijn" — `adie_2012_cryotherapie_tka` vond bewijs van ZEER LAGE kwaliteit voor pijnreductie ná 48 uur maar niet na 24 of 72 uur, en besluit dat de voordelen "te klein kunnen zijn om het gebruik te rechtvaardigen" · bij "CPM niet aanbevolen" ontbrak omgekeerd de gunstige nuance dat CPM het risico op manipulatie onder narcose mogelijk verlaagt (7,2% naar 1,6%)

- FASE B OVERPRONATIE · DE ZWAARSTE OMKERING VAN DIT PROTOCOL STOND IN EEN OEFENINGNOTE · "supinated single heel rise = meest selectieve TP-activatie" · Kulig 2004 zegt het tegenovergestelde: bij de hielheffing wordt de tibialis posterior (+27%) juist overvleugeld door gastrocnemius (+99%) en peroneus longus (+57%) · de gebruiker leest die note bij de oefening die hij voorschrijft
- Het geschrapte excentrische PTTD-protocol stond nog volledig in twee oefeningnotes, mét dosering en mét Kulig als bron — claimdossier en code liepen uiteen
- Zes ongelabelde diagnostische waarden in de parameters (FPI-afkapwaarden, navicular drop 10 mm, ICC's, normbereik 4-9 mm, eversie < 5°, SHRT-grens 20 reps), precies de waarden die het evidence-veld als niet-nagekeken markeert · en FPI > +9 als drempel voor maatorthesen, inconsistent met de eigen hyperpronatiegrens ≥ +10

## 2026-09-07 — bronaudit overpronatie syndroom

- GEEN VAN DE DRIE OPHAALBARE BRONNEN ONDERSTEUNDE DE CLAIM WAARVOOR ZE WERD AANGEHAALD
- `kulig_2004_tibialis_posterior` · aangehaald voor "excentrisch superieur aan concentrisch bij PTTD stadium I-II" · het is een MRI-studie bij VIJF GEZONDE volwassenen over selectieve activatie, zonder excentrisch protocol, zonder PTTD-patiënten en zonder die vergelijking · wat er wél in staat is klinisch bruikbaarder en ontbrak: gesloten-keten voetadductie activeert de tibialis posterior veruit het sterkst (+50%), terwijl bij de HIELHEFFING de mediale gastrocnemius (+99%), peroneus longus (+57%) en soleus (+39%) de TP (+27%) overvleugelen — wie de TP gericht wil trainen kiest dus níet de hielheffing
- `hara_2023_short_foot` · aangehaald voor proprioceptietraining op instabiel vlak en verlaagde rearfoot eversie tijdens het gaan · die review gaat over SHORT FOOT EXERCISES en bevat geen van beide · haar werkelijke inhoud is nu in fase 2 opgenomen, mét de voorbehouden van de auteurs: geen consensus over dosering, mechanisme onduidelijk
- `barton_2011_rearfoot_orthesen` · de drempel van "meer dan 3° rearfoot eversie" staat er niet in · het cijfer dat er wél in staat ontbrak: van de 25 deelnemers meldde na twaalf weken SLECHTS 28% duidelijke verbetering, en de auteurs noemen hun bevinding zelf voorlopig bewijs · dat is precies wat een patiënt moet horen vóór hij inlegzolen aanschaft
- TWEE REFERENTIES ZONDER AUTEURS · het bronnenbestand bevatte "Network meta-analysis (2024)" en "Wetenschappers Sci Reports, 2024" · een referentie zonder auteurs is principieel niet naspeurbaar en voldoet niet aan §4 · toch droegen ze vier klinische claims, waaronder de aanduiding van de "meest effectieve interventie" van het hele protocol

## 2026-09-07 — fase B shin splints

- DE ERNSTIGSTE VORM VAN HET LEK TOT NU TOE · het verworpen tractiemodel stond niet alleen nog in het beschrijvingenblok, het had `moen_2009_mtss_review` als bronvermelding áchter zich — precies de review die dat model verwerpt · dat is de tekst die de gebruiker onder "oorzaken" leest, terwijl de correctie in het evidence-veld van fase 1 zat · blok volledig herschreven naar het resorptiemodel
- De MRI-gradatie 1-4 stuurde nog op zeven plaatsen fasedoelen, doorstroomcriteria, stopcriteria en rode vlaggen, terwijl fase 1 diezelfde gradatie als niet-opgehaald én strijdig met Moen bestempelt
- Een nieuw cijfer in een oefeningnote · "cadans +5-10% vermindert de tibiale belasting met 20-30%" · die 20-30% komt nergens anders in het dossier voor en spreekt het evidence-veld van dezelfde fase tegen
- Voedingsadvies zonder bron én buiten het eigen domein · vitamine D ≥ 75 nmol/L en calcium 1000-1300 mg/dag stonden als aanbeveling in een oefeningnote · gelabeld en doorverwezen naar arts of diëtist
- Extrapolatie naar een andere spiergroep én pathologie (§1.5) · het preventieve effect van de Nordic Shin werd afgeleid uit de Nordic Hamstring · en "loopjournaal → 40% minder overbelastingsblessures" schreef zichzelf in dezelfde zin toe aan trainervaring
- Twee onderling strijdige kilometergrenzen voor schoenvervanging binnen één protocol (600 tegenover 600-800 km), en de 10%-regel als voorschrift in de notes terwijl de evidenceteksten haar als praktijkafspraak labelen

## 2026-09-07 — bronaudit shin splints (MTSS)

- HET MECHANISME WAAROP HET PROTOCOL GEBOUWD IS, WORDT DOOR DE EIGEN HOOFDBRON VERWORPEN · de app beschreef MTSS als periostale tractie door soleus en FDL · `moen_2009_mtss_review` stelt letterlijk dat histologisch onderzoek dáár géén bewijs voor levert en dat de oorzaak botresorptie is die de botaanmaak van de tibiale cortex overtreft · dat is geen detail: het tractiemodel stuurt de behandeling naar rekken en kuitspieren, het resorptiemodel naar botbelastbaarheid
- HET MEEST ONGEMAKKELIJKE GEGEVEN ONTBRAK VOLLEDIG · dezelfde review meldt dat RUST in drie gerandomiseerde studies gelijkwaardig was aan élke onderzochte interventie · in een protocol met vier fasen oefentherapie hoort dat erin, en de bron stond al in de referentielijst · wat er volgens diezelfde review wél preventief werkt — neopreen of semi-rigide orthesen — stond er evenmin in
- `nielsen_2012_trainingsfouten` concludeert het tegendeel van waarvoor het geciteerd wordt · de 10%-regel steunde op een review die besluit dat de resultaten tegenstrijdig waren en dat het NIET mogelijk was vast te stellen welke trainingsfouten met loopblessures samenhangen
- Eén bron, twee verschillende foute beschrijvingen · `wille_2014_loopkinematica` werd in de evidencetekst aangehaald voor "cadansverhoging verlaagt de tibiale belasting" en in het refs-veld beschreven als een ECHOGRAFIE-studie over het identificeren van MTSS · het is geen van beide: een laboratoriumstudie bij 45 lopers over het SCHATTEN van kinetiek uit sagittale kinematica, waarbij net de verticale belastingssnelheid zich slecht liet schatten (R² = 0,04)
- Verder gecorrigeerd · incidentie is 4-35% bij militairen en sporters, niet 13-20% bij lopers · "MRI is de gouden standaard" staat haaks op Moen, die beeldvorming van beperkte waarde noemt omdat afwijkingen ook bij klachtenvrije personen voorkomen — terwijl de tijdcriteria voor loophervatting volledig aan die gradatie hangen · "asfalt geeft 10-15× hogere grondreactiekrachten" geschrapt: geen bron en biomechanisch niet plausibel · 60 km-drempel, schoenvervanging na 600-800 km en RED-S-screening gelabeld
- Toegevoegd wat de bron wél bevestigt · vrouwelijk geslacht en overmatige pronatie bij staan als intrinsieke risicofactoren uit meerdere prospectieve studies, en een voorgeschiedenis van MTSS als extrinsieke risicofactor

## 2026-09-07 — fase B hamstringblessure

- EEN CLAIM DIE HAAR EIGEN BRON TEGENSPREEKT · "leeftijd > 24 jaar = verhoogd hamstringrisico (Ekstrand 2011)" · die studie vond de incidentiestijging met leeftijd uitsluitend voor KUITletsels en sluit hamstrings, quadriceps en liesletsels daar uitdrukkelijk van uit · ook "biceps femoris in 81% van de gevallen" staat er niet in, en het tijdschrift is AJSM, niet BJSM
- Het lek opnieuw · de oefeningnote bij het Nordic-onderhoudsprogramma hield "51% reductie van herletsel" — verkeerd cijfer én verkeerde uitkomstmaat — terwijl het evidence-veld van hetzelfde protocol dat cijfer net geschrapt had
- Drie onverenigbare herstelduren binnen één protocol · graad II stond als 3-8, 4-8 én ≥ 6-8 weken; graad III als 8-16, 8-20+ én ≥ 12 weken · daarnaast staan twee graderingssystemen (vezelpercentage en BAMIC) naast elkaar zonder uitleg · voor wie de prognose met de patiënt bespreekt is dat onbruikbaar · alles gelijkgetrokken op 1-2 / 3-8 / 8-16 weken en als praktijkafspraak gelabeld
- Interne tegenspraak in de pijndrempel · het evidence-veld van fase 2 hanteerde 5/10, alle oefeningen en criteria van diezelfde fase 3/10 · gelijkgetrokken op 3/10
- De H-test bleef in drie velden aan Askling 2013 toegeschreven, terwijl het evidence-veld net vaststelt dat die publicatie over totale proximale rupturen na chirurgie gaat
- Eigen omrekening gemarkeerd · "ongeveer 72%" is onze afleiding uit de odds ratio en staat niet letterlijk in van der Horst 2015 · "geen effect op ernst" afgezwakt tot "geen statistisch significant verschil"
- Administratief · van Dyk 2019 werd geciteerd maar stond niet in het refs-veld — nu toegevoegd · `bayer_2017_vroege_revalidatie` hertypeerd van RCT naar commentary, omdat PubMed het primair als Letter typeert

## 2026-09-06 — bronaudit hamstringblessure + fase B enkeldistorsie

- TWEE BRONNEN ZIJN ANDERE PUBLICATIES DAN HET REFS-VELD BESCHREEF · `askling_2013_proximale_ruptuur` in KSSTA gaat over TOTALE PROXIMALE RUPTUREN na chirurgie en is een review met bewijsniveau V — de drie H-testen die eraan werden toegeschreven staan er niet in · `bayer_2017_vroege_revalidatie` is CORRESPONDENTIE in de NEJM, niet een artikel in Orthopaedic Journal of Sports Medicine, en PubMed levert er geen abstract bij, dus de claim over vroege isometrische belasting kon niet tegen de bron gelegd worden
- Het kerncijfer van het protocol hoorde bij een andere studie · "Nordic Hamstring reduceert het HERLETSELrisico met 51% (van der Horst 2015)" · die RCT onderzocht PRIMAIRE preventie bij 579 amateurvoetballers, het effect is grōter (odds ratio 0,282; 95% BI 0,110-0,721 — ongeveer 72%), en de 51% hoort bij `vandyk_2019_nordic` · dat is dezelfde 51% die eerder in deze audit al bij een ander protocol moest worden rechtgezet · weggelaten was bovendien dat de ERNST van de blessures niet significant verschilde
- `ekstrand_2011_spierletsels_voetbal` kreeg twee claims toegeschreven die er niet in staan · dat MRI de gouden standaard voor gradatie is, en dat prematuur sprinten de meest voorkomende oorzaak van recidief is · wat er wél in staat en klinisch nuttiger is: hamstrings vormen 37% van de spierletsels in het profvoetbal, 16% zijn herletsels, en die geven significant langere afwezigheid

- FASE B ENKELDISTORSIE · alle zes bronsleutels en alle zes gecorrigeerde evidenceteksten letterlijk gedekt, maar de foute cijfers stonden nog ONGEWIJZIGD in de oefening-, parameter- en beschrijvingsvelden · "Sens 96-99%" in een parameterveld drie regels onder een evidencetekst die dat bereik net schrapt · "47%" op twee plaatsen na correctie naar 35% · "53%" en "geen prestatievermindering" na correctie naar 69% · "35-50%" bij het FIFA-programma · "peroneale reactietijd verminderd bij 90%+" na schrapping · het label bereikt de gebruiker dus niet, want die leest de oefeningnote
- In de beschrijving stonden vier ongedekte getallen · Ottawa 97%, CAI bij 40%, anterior drawer 73% en talar tilt 90% — die laatste twee wijken bovendien af van de 0,71 en 0,33 in fase 1, twee cijferparen voor dezelfde tests binnen één protocol · en in de oorzaken: ATFL-ruptuur bij ~140 N, herletselrisico ×2,4 en reactietijd > 62 ms (Konradsen & Ravn 1990, niet opgehaald), waarbij 62 ms botst met de 70 ms elders in het protocol

## 2026-09-06 — bronaudit enkeldistorsie + fase B epicondylalgie

- HET PROTOCOL DAT ER HET BEST ONDERBOUWD UITZAG, IS HET SLECHTST · het refs-veld bevat volledige volume- en paginanummers, wat vertrouwen wekt · van de zeven nagekeken cijfers klopten er vijf niet
- `dizon_2010_enkelbraces` · "53% recidiefreductie" stond op DRIE plaatsen · het werkelijke effect is grōter: 69% met brace (OR 0,31; 95% BI 0,18-0,51) en 71% met tape (0,29; 0,14-0,57), en enkel bij REEDS EERDER GEBLESSEERDE sporters · de toevoeging "zonder prestatieverlies" is in die review niet onderzocht
- `gribble_2016_enkelconsensus` · "CAI bij 25-40% na eerste distorsie, 50-60% na recidief" op drie plaatsen · geen van beide cijfers staat in dat abstract, dat spreekt van "een groot percentage" · ook de CAI-definitie van ≥ 12 maanden staat er niet in
- `doherty_2014_enkelepidemiologie` · VIER claims toegeschreven die er geen van alle in staan: "85% van alle distorsies", "ATFL 70-85%", "peroneale zwakte bij > 90% bij CAI" en "reactietijd versnelt pas na 4-6 weken" · het is een zuiver epidemiologische incidentiemeta-analyse zonder anatomie of spierfunctie
- `schiftan_2015_proprioceptieve_training` OMGEKEERD GEBRUIKT · geciteerd onder "primaire preventie" met 35-50%, terwijl de auteurs juist besluiten dat het bewijs voor PRIMAIRE preventie ONDUIDELIJK blijft (gepoold risico 0,57 uit twee op zichzelf niet-significante trials) · het aangetoonde effect van 35% geldt voor de hele groep en 36% bij mensen mét voorgeschiedenis · het gaat bovendien om proprioceptieve training, niet om een opwarmprogramma
- `hupperets_2009_proprioceptief_thuisprogramma` · de reductie is 35%, niet 47% (22% tegenover 33%; RR 0,63; NNT 9) · en de beperking die het meest telt ontbrak: bij sporters die WÉL medisch behandeld waren was er géén significant verschil — in een kinesitherapeutisch protocol is dat net de omgekeerde populatie
- `bachmann_2003_ottawa` · "sensitiviteit 96-99%" staat er niet in; de auteurs poolden negatieve likelihood ratio's (0,08; 95% BI 0,03-0,18) en spreken van een sensitiviteit van bijna 100% met matige specificiteit

- FASE B EPICONDYLALGIE · alle zeven bronsleutels en alle drie evidenceteksten letterlijk gedekt · maar een RODE VLAG BEVATTE EEN FEITELIJKE FOUT: "geelkleuring van de huid → post-injectie vetatrofie" · huidverandering na corticosteroïdinjectie is DEPIGMENTATIE — bleek of wit, met inzinking — wie op geel wacht, mist het beeld
- Verder in de epicondylalgie gecorrigeerd · "35% van de LE-patiënten heeft scapulaire dyskinese" (geen bron) · zeven PRTEE- en knijpkrachtdrempels die fase-overgangen én een doorverwijzing naar PRP of chirurgie stuurden, zonder bron of label · de stopregel "PRTEE > 40 na 12 weken" botste met de eigen tekst over 6-12 maanden behandelduur · "Cozen 84%", "PRTEE > 30", "echo-afwijking 30%", "60% niet-sporters" en de citatie Nirschl & Pettrone 1979 in de beschrijving · de claim dat manuele technieken zónder oefenprogramma tot herval leiden

## 2026-09-06 — bronaudit laterale epicondylalgie

- DRIE VAN DE VIJF BRONNEN STONDEN IN HET VERKEERDE TIJDSCHRIFT · `bisset_2006_tenniselleboog` verscheen in BMJ, niet in the Lancet · `coombes_2013_injectie_kinesitherapie` in JAMA, niet in the Lancet · `tyler_2010_excentrisch_polsextensoren` in J Shoulder Elbow Surg, niet in JOSPT — die laatste stond zowel in de evidencetekst als in het refs-veld fout
- TEGENSTRIJDIGE EVIDENTIE VERZWEGEN (§1.9) · uit Coombes 2013 werd wél overgenomen dat corticosteroïd op lange termijn slechter uitpakt, maar níet dat KINESITHERAPIE in diezelfde trial na één jaar geen significant verschil gaf (91% tegenover 88%; p = 0,56) en bovenop een injectie niets toevoegde · dat resultaat is ongunstig voor dit protocol en stond nergens in de app
- Verzonnen percentage · "wait and see is effectief op 1 jaar (78% herstel)" · Bisset 2006 geeft geen percentage voor de afwachtgroep · het wél bestaande cijfer komt uit `smidt_2002_epicondylitis`: 83% na afwachten tegenover 91% na kinesitherapie, een verschil dat NIET significant was — die trial stond in het refs-veld maar werd in geen enkele evidencetekst gebruikt
- Tyler 2010 nauwkeuriger weergegeven · de percentages 81 en 22 kloppen, maar de trial telde slechts 21 patiënten (11 tegenover 10), duurde 7,2 en 7,0 weken in plaats van zes, en voegde de oefening TOE aan de standaardbehandeling in plaats van ze ermee te vergelijken
- Beyer 2015 voor de zesde keer bij een andere pees · hier als onderbouwing voor HSR aan de elleboog, terwijl het onderzoek aan de achillespees gebeurde · Rio 2015 idem, patellapees
- `coombes_2015_lateraal_elleboog` correcter benoemd · het is een narratieve review met expert opinion en een PRELIMINAIR algoritme, die zelf stelt dat de pathofysiologie onvoldoende begrepen is · de titel luidt "One Size Does Not Fit All", niet "one model fits all?" · de opgesomde krachtdeficieten staan er niet in; wél nekpijn, peesscheuren en centrale sensitisatie als prognostische factoren
- Zonder bron en nu gelabeld · behandelduur 6-12 maanden · PRTEE-drempels 20 en 10 · "Rethnam & Tugh (2010)" voor racketaanpassingen

## 2026-09-06 — fase B schouderinstabiliteit

- Alle negen bronsleutels bibliografisch bevestigd en alle vijf evidenceteksten gedekt · het lek zit opnieuw in de doel-, criteria- en beschrijvingsvelden
- Ongelabelde harde drempels · ER/IR ≥ 0,66 als doel, doorstroom- én stopcriterium (< 0,60 na 14 weken), terwijl het evidence-veld net erkent dat `ellenbecker_1997_isokinetisch_werpers` géén afkapwaarde geeft · JPS-fout < 5° · krachtasymmetrie ≤ 20% en ≤ 10% · WOSI ≤ 630 en ≤ 420 met omrekening naar "70%" en "≥ 80% van normaal" — noch de drempels noch de omrekening hebben een bron
- Twee citaties zonder sleutel in de beschrijving · "specificiteit apprehension-test 94% (Lo et al., 2004)" en "herletselrisico 80-90% bij < 20 jaar (te Slaa et al., 2004)" · dat laatste cijfer strookt bovendien niet met `itoi_2007_externe_rotatie`, dat voor jonge patiënten 66-94% noemt · ook "Bankart-laesie bij 85-90%" is niet nagekeken
- Twee formuleringen net sterker dan de bron · Uhl schrijft "throughout most of the exercise positions", niet "de actiefste spier" · Ellenbecker schrijft "no significant difference", wat niet hetzelfde is als "links en rechts gelijk"
- Rode vlag n. axillaris · het percentage van 5-14% is gelabeld, de rode vlag zelf blijft onverkort gelden

## 2026-09-06 — bronaudit schouderinstabiliteit

- TWEE TRIALS ONDERLING VERWISSELD · het protocol noemde `itoi_2007_externe_rotatie` een "kleine RCT" met "0% recidief tegenover 30%", en gaf háár aantal van 198 aan `liavaag_2011_externe_rotatie` · Itoi telde 198 patiënten en vond 26% tegenover 42% (p = 0,033; relatieve risicoreductie 38,2%) · Liavaag telde er 188 en vond géén verschil (24,7% tegenover 30,8%; p = 0,36) · de cijfers 0% en 30% bestaan in geen van beide
- KLINISCH ZWAARSTE OMISSIE · `burkhead_1992_oefenprogramma_instabiliteit` werd aangehaald voor "80-90% goed resultaat bij AMBRI" · de bovengrens van 90% staat er niet in, maar veel belangrijker is wat wél in de studie staat en werd weggelaten: hetzelfde oefenprogramma slaagde bij 80% van de ATRAUMATISCHE subluxaties (53/66) en bij slechts 16% van de traumatische (12/74) · dat contrast is net de reden om AMBRI anders te behandelen dan TUBS
- Preventieclaim uit een normwaardenstudie · "ER/IR-verhouding ≥ 0,66 is preventief voor anterieure instabiliteit" · `ellenbecker_1997_isokinetisch_werpers` is een beschrijvende isokinetische meting bij 125 GEZONDE honkbalwerpers, zonder één patiënt met instabiliteit, zonder preventieve uitkomst en zonder die afkapwaarde
- Omgekeerde conclusie · "proprioceptieve deficieten persisteren tot 6 maanden (Lephart 1994)" · die studie heeft géén opvolging in de tijd, en besluit net dat reconstructieve chirurgie een deel van de proprioceptie HERSTELT
- Vergelijking die niet bestaat · "gesloten keten verbetert de coactivatie effectiever dan open keten (Uhl 2003)" · dat is een EMG-meting van zeven statische posities bij 18 gezonde studenten, zónder open-ketenvergelijking, zonder bovenhandse oefening en zonder patiënten
- Verzonnen cijfer, tweede variant · "scapulaire dyskinese bij 67% na instabiliteit (Kibler 2013)" · in het rotatorenmanchetprotocol stond dezelfde bron met 68% — twee verschillende percentages uit dezelfde niet-bestaande passage
- Weggelaten cijfer dat het protocol sterker had gemaakt · `brophy_2009_anterieure_instabiliteit` geeft na een EERSTE traumatische luxatie bij jonge patiënten 7% herval na chirurgie tegenover 46% conservatief, en 10% tegenover 58% op langere termijn · het protocol citeerde alleen de hervalcijfers ná operatie, plus een cijfer van 15-20% voor contactsporters dat er niet in staat
- `balg_2007_isis` aangevuld · boven 6 punten bedroeg het recidief 70% (p < 0,001) en beschouwen de auteurs een artroscopische Bankart als gecontra-indiceerd, met een Bristow-Latarjet als alternatief — een behandelconsequentie, geen loutere risicomelding
- Acht nieuwe referenties, alle live geverifieerd via PubMed

## 2026-09-06 — fase B rotatorenmanchet

- Alle tien bronsleutels bibliografisch bevestigd en alle zes evidenceteksten gedekt · het lek zit opnieuw volledig in de oefening-, parameter-, doel- en criteriavelden
- Labels stonden precies omgekeerd · Neer (0,72/0,60) en Hawkins-Kennedy (0,79/0,59) droegen het label "niet onderbouwd" terwijl die cijfers wél letterlijk in `hegedus_2012_schoudertests` staan · empty can, ER lag sign en lift-off droegen alleen op de SENSITIVITEIT een voorbehoud, terwijl geen van hun zes cijfers in die meta-analyse voorkomt
- In strijd met de eigen bron · "wall slide geeft de laagste trapezius-serratusverhouding van alle oefeningen" · `cools_2007_scapulaoefeningen` onderzocht de wall slide niet, en géén van de twaalf oefeningen haalde het vooropgestelde criterium
- Geschrapte claims die in de parameters bleven staan · de achillespeesadaptatie van Beyer bij de side-lying ER, de belasting van 60-75% 1RM bij de full can, de ER/IR-verhouding van 0,66 als doel én doorstroomcriterium, het ASMI-schema en de drempel van 9 maanden als stopcriterium
- Verder gelabeld · tillimiet van 23 kg (van Rijn noemt >20 kg als RISICOFACTOR, geen limiet) · slaapmechanisme met 6-8 uur ischemie · echografie-accuraatheid van 84% · de citatie "Ludewig & Cook, 2000" zonder sleutel
- refs-veld aangevuld met Bernhardsson, Burkhart en van Rijn, die wel geciteerd werden maar er niet in stonden · bij Beyer staat nu expliciet "achillespees"
- Bibliografisch bijgewerkt · Kukkonen "Tuominen EK" en "Äärimaa V" · van Rijn "Huisstede BMa" · bij Cools genoteerd dat PubMed het als Controlled Clinical Trial typeert, een waarde die onze typelijst niet kent, en dat RCT de opzet zou overdrijven

## 2026-09-06 — bronaudit rotatorenmanchet + fase B lumbale hernia

- DRIE BRONNEN DIE IETS ANDERS ZEGGEN DAN WAARVOOR ZE GECITEERD WORDEN · `vanrijn_2010_werkfactoren_schouder` is een review over RISICOFACTOREN zonder één interventie erin, terwijl het protocol er "ergonomische interventies reduceren manchetpathologie" op baseerde — en geen van de ingesloten studies onderzocht zelfs manchetSCHEUREN · `vandermeijden_2012_postoperatieve_revalidatie` besluit letterlijk dat er weinig bewijs is om de timing van postoperatieve revalidatie te sturen, en werd aangehaald voor een drempel van 9-12 maanden · `burkhart_2003_sick_scapula` is een narratieve review zonder uitkomstgegevens, aangehaald voor een herletselreductie
- Verzonnen cijfer · "serratusatrofie bij 68% van de schouderpatiënten (Cools et al., 2007)" · dat is een EMG-studie bij 45 GEZONDE proefpersonen over oefenselectie: geen patiënten, geen atrofiemeting, geen 68% · ook de ER/IR-verhouding van 0,66 komt daar niet uit
- Veiligheidsrelevante omissie bij `kukkonen_2015_rotatorenmanchet` · de klinische gelijkwaardigheid na twee jaar klopt (p = 0,38), maar de scheur was zonder herstel significant GROTER (11,0 tegenover 4,2 mm; p < 0,01) en de auteurs waarschuwen voor die progressie · de trial hanteert bovendien geen grens van 1 cm en gaat niet over partiële scheuren maar over niet-traumatische supraspinatusscheuren bij oudere patiënten
- Hawkins-Kennedy · specificiteit 59%, niet 66% · en de conclusie van `hegedus_2012_schoudertests` dat combinaties van tests slechts "marginally so" beter zijn, ontbrak
- Rio 2015 (patellapees) en Beyer 2015 (achillespees) opnieuw aan de schouder toegeschreven · vierde en vijfde keer dat deze twee bronnen in dit dossier bij de verkeerde pees opduiken

- FASE B LUMBALE HERNIA · alle elf bronsleutels bibliografisch bevestigd, maar zeven gecorrigeerde claims bleken gelekt naar de oefening-, doel- en criteriavelden · ZWAARSTE: de SLR-oefening claimde "specificiteit hoog" en een drempel van 70°, drie regels onder een evidencetekst die net de LAGE specificiteit (0,26/0,28) vermeldt · de drempel van 60° keerde terug als fasedoel én doorstroomcriterium · "2×/week volstaat" en het directe pijnmodulerende effect van aerobe training stonden in de oefeningnotes nog zoals ze in het evidence-veld geschrapt waren
- Onmogelijke afkapwaarde · "hoog chroniciteitsrisico: FABQ > 44" · de werkschaal van de FABQ loopt tot maximaal 42
- "Berglund 2015" bij de deadlift · niet opgehaald, en Berglund is de tweede auteur van `aasa_2015_motorcontrole` — dezelfde trial die juist vond dat de LAAGbelaste groep meer verbeterde
- Bibliografisch bijgewerkt · paginabereik van `aasa_2015_motorcontrole` naar "45(2):77-85, B1-4" · Devillé met accent gespeld · `vanderwindt_2010_lichamelijk_onderzoek` en `naugle_2012_hypoalgesie` toegevoegd aan het refs-veld van lh, waar ze ontbraken

## 2026-09-06 — bronaudit lumbale discushernia

- TWEE TOEGESCHREVEN CIJFERS BESTAAN NIET IN DE BRON · "90% herstelt spontaan binnen 6-12 weken (Weber, 1983)" staat daar niet in — die trial vond dat de GEOPEREERDE groep het na één jaar significant beter deed en na vier jaar beter maar niet meer significant · "vroege werkhervatting vermindert het verzuim met 45% (Schaafsma et al., 2013)" staat er evenmin in — die Cochrane-review besluit dat de effectiviteit ONZEKER blijft
- Derde omkering van `aasa_2015_motorcontrole` in dit dossier · het protocol claimde dat progressieve krachttraining superieur is aan rompstabilisatie, terwijl de LAAGBELASTE motorcontrolegroep méér verbeterde op de functieschaal (4,2 tegenover 2,5 punten; p < 0,001)
- Verkeerd tijdschrift én verkeerd cijfer bij de Lasègue-test · "sensitiviteit 91% (van der Windt et al., 2010 — Ann Fam Med)" · het is een COCHRANE-review, de gepoolde sensitiviteit is 0,92 en 0,91 is het cijfer van `deville_2000_lasegue` — de twee reviews werden door elkaar gehaald · beide reviews noemen geen drempel van 60° · toegevoegd: de gepoolde specificiteit van 0,28 en de conclusie van de auteurs dat de diagnostische waarde van de meeste lichamelijke tests zwak is
- `nee_2012_neurale_mobilisatie` gaat over NEK- EN ARMPIJN, niet over lumbale radiculopathie · het refs-veld van het protocol zei dat zelf al ("cervicobrachial pain") terwijl de evidencetekst het op het been toepaste · op beide plaatsen als klinische redenering gelabeld
- `donelson_1997_centralisatie` is een DIAGNOSTISCHE studie, geen effectstudie · bij 50% centraliseerde de pijn, van wie 74% een positief discogram had — dat zegt niets over de uitkomst van de McKenzie-behandeling
- Verder gecorrigeerd · de controlegroep bij `hides_2001_stabilisatie` kreeg medische zorg plus normale activiteit, geen algemene oefentherapie · `steffens_2016_preventie` noemt geen frequentie van tweemaal per week · de slumptest komt in Devillé 2000 niet voor · "95% van de herniaties op L4-L5 en L5-S1" is nergens tegen een primaire bron gelegd
- Nieuwe referentie · `vanderwindt_2010_lichamelijk_onderzoek` (Cochrane, PMID 20166095), live geverifieerd

## 2026-09-06 — bronaudit adductor-gerelateerde liespijn + fase B frozen shoulder

- EERSTE PROTOCOL WAARVAN DE KERNCIJFERS KLOPPEN · `ishoi_2016_copenhagen_kracht` (35,7% toename excentrische adductiekracht) en `haroy_2019_adductorprogramma` (41% lager risico) zijn letterlijk gedekt, evenals de EMG-bovengrens van 108% en de HAGOS-validatie · dit protocol is aantoonbaar met de literatuur in de hand geschreven
- Wel drie preciseringen · de percentages 79% en 14% van `holmich_1999_actieve_training` staan niet in het abstract; daar staan de AANTALLEN 23 tegenover 4 met een odds ratio van 12,7 (95% BI 3,4-47,2) · de 41% is een RISICOreductie, niet de daling van de prevalentie (die ging van 21,3% naar 13,5%) · en het preventieprogramma bestond uit één enkele oefening, NIET geïntegreerd in het FIFA 11+-kader
- Vergelijking geschrapt die in de bron niet bestaat · "criteriumgestuurde terugkeer geeft betere uitkomsten dan tijdgestuurde" · `serner_2020_terugkeer` is een prognostisch cohort waarin ALLE 81 sporters hetzelfde programma kregen, zonder vergelijkingsgroep en zonder hervalcijfers · wel opgenomen: mediaan 15 dagen tot pijnvrij, 24 dagen tot gecontroleerde sporttraining
- Klinisch bruikbare nuance toegevoegd bij de HAGOS · het kleinste detecteerbare verschil is 2,7 tot 5,2 punten op GROEPSniveau maar 17,7 tot 33,8 punten op INDIVIDUEEL niveau — bij één patiënt is een kleine verandering dus niet interpreteerbaar
- Doha-taxonomie aangevuld · drie hoofdcategorieën, niet vier entiteiten

- Fase B op frozen shoulder · alle 8 citaties en het refs-veld correct · TWEE NIEUWE SPOOKCITATIES gevonden: "(Leung et al., 2008)" met een concreet cijfer van 30-40% pijnreductie, en "(Bunker & Anthony, 1995 — JBJS)" in de beschrijving · na "(Dye et al., 2017)" in het supraspinatusprotocol is dit de tweede en derde citatie die nergens in het dossier bestaat
- Onnauwkeurigheid van mijzelf · ik schreef dat er bij `carette_2003_injectie_kinesitherapie` op geen enkel meetmoment verschil was tussen kinesitherapie en placebo, terwijl het abstract een uitzondering noemt (meer flexie na drie maanden) · die stond wel in references.yaml maar niet in de protocoltekst

## 2026-09-06 — bronaudit frozen shoulder + fase B supraspinatus

- ZWAARSTE OMKERING VAN DE HELE AUDIT · de volledige fase 2 van het frozen-shoulderprotocol draait om capsulaire rek, onderbouwd met `diercks_2004_supervised_neglect` — die studie vond precies het OMGEKEERDE · bij 77 patiënten haalde de groep met SUPERVISED NEGLECT (oefenen BINNEN de pijngrens) na 24 maanden in 89% een normale of bijna normale pijnvrije schouder, tegenover 63% met intensieve kinesitherapie inclusief passief rekken · de auteurs besluiten letterlijk dat supervised neglect BETERE uitkomsten geeft · dit raakt de behandelkeuze rechtstreeks en staat nu bovenaan de fase
- Prognose fors te optimistisch · "90% volledig ROM-herstel binnen 18-24 maanden" · `hand_2008_langetermijn` vond na gemiddeld 4,4 jaar 59% met een normale of bijna normale schouder en 41% met restklachten, en `dias_2005_frozenshoulder` stelt dat patiënten mogelijk NOOIT hun volledige bewegingsuitslag terugkrijgen
- Recidiefclaim onmogelijk · "preventief programma reduceert recidiefkans met 40-60%" verwees naar een cohort waarin GEEN ENKEL recidief voorkwam
- Kernbevinding verzwegen bij de injectiestudie · `carette_2003_injectie_kinesitherapie` vond tussen gesuperviseerde kinesitherapie en placebo op GEEN ENKEL meetmoment verschil, besluit dat kinesitherapie alléén van beperkte werkzaamheid is, en meldt dat na 12 maanden alle groepen gelijk verbeterd waren · voor een kinesitherapieprotocol is dat wezenlijke informatie
- Derde misbruik van dezelfde bron · `tyler_2010_posterieure_strakheid` (22 patiënten met INTERN impingement) moest hier een prevalentiecijfer van 80-90% posterieure capsulaire contractuur bij adhesieve capsulitis schragen
- Dezelfde validatiestudie met twee verschillende onjuiste tijdschriften · `beaton_2001_dash` staat in het supraspinatusprotocol als CORR en hier als Annals of the Rheumatic Diseases; het is Journal of Hand Therapy

- Fase B op supraspinatus · alle 8 citaties en het volledige refs-veld correct · 11 problemen daarbuiten, waaronder een SPOOKCITATIE: "(Dye et al., 2017)" stond als onderbouwing in een oefennotitie maar bestaat nergens in het dossier · verder vier notities en de beschrijving die opnieuw als bewijs presenteerden wat de evidencetekst van dezelfde fase juist als niet-gedekt markeert

## 2026-09-06 — bronaudit supraspinatus + fase B achillespees

- DEZELFDE BRON BIJ EEN DERDE PEES · `rio_2015_isometrie` — 6 volleyballers met PATELLApeestendinopathie — wordt in deze app gebruikt bij de patellapees (terecht), de achillespees en nu ook de rotatorenmanchet · elke toepassing buiten de patellapees is nu als extrapolatie gelabeld
- Oorzakelijkheid overschat bij scapulaire dyskinese · `kibler_2013_scapulaconsensus` stelt uitdrukkelijk dat de exacte rol van de dyskinese bij het ontstaan of verergeren van schouderdisfunctie NIET DUIDELIJK OMSCHREVEN is en dat zij het best gezien wordt als een MOGELIJKE stoornis · de app presenteerde haar als vastgestelde te corrigeren oorzaak, met een cijfer van 68% dat er niet in staat
- Een vergelijking die in de bron niet bestaat · "scaption geeft minder subacromiale contactdruk dan frontale of sagittale elevatie" · in `flatow_1994_subacromiaal_contact` werd UITSLUITEND in het scapulaire vlak geheven · wel bruikbaar en nu opgenomen: het contact is het nauwst tussen 60 en 120 graden en de acromiohumerale afstand daalt van 11,1 naar 5,7 mm — dat onderbouwt de pijnboog in de beschrijving
- `cools_2007_scapulaoefeningen` opnieuw misbruikt · dezelfde EMG-studie bij 45 GEZONDE proefpersonen die in het bureauprotocol een prevalentiecijfer moest schragen, staat hier als bewijs dat serratuszwakte de sterkste voorspeller is · geen patiënten, geen predictoranalyse
- Verkeerde publicatie · de claim over scapulair ritme verwees naar de INLEIDING van een consensusbijeenkomst, niet naar onderzoek
- Fase B op de achillespees · alle 8 citaties correct · maar VIER OEFENNOTITIES PRESENTEERDEN ALS BEWIJS WAT IK IN DEZELFDE FASE NET HAD GESCHRAPT (de Willy-citatie, "bewezen effectief" met de patellapeesbron, de schoenzooldrop, de vaste stapfrequenties) · plus een interne tegenstrijdigheid over de Royal London-test tussen beschrijving en notitie
- Diagnostische testeigenschappen in oefenparameters gemarkeerd · negen tests in de hele app toonden sensitiviteit en specificiteit als harde waarden zonder bron

## 2026-09-06 — bronaudit achillespees-tendinopathie + fase B patellapees

- DE APP WISSELT DE TWEE PEZEN IN BEIDE RICHTINGEN OM · het patellapeesprotocol citeerde een achillespeesstudie voor het meetinstrument, en dit achillespeesprotocol citeert `rio_2017_isometrie_patella` — een RCT bij 20 springatleten met PATELLApeestendinopathie — voor isometrie van de kuit · beide zijn nu benoemd en gelabeld als extrapolatie
- Volledig verkeerde publicatie · de return-to-sport-criteria werden toegeschreven aan een "consensusstatement 2020" · die publicatie is een scoping review over de BESCHRIJVING van weerstandsoefeningen na een achillespees-RUPTUUR
- Drie afwijkingen in één zin over het Alfredson-protocol · het is GEEN RCT maar een prospectieve serie van 15 sporters, en het percentage 82% komt er niet in voor: ALLE 15 keerden terug, terwijl in de conventioneel behandelde groep GEEN ENKELE patiënt slaagde · wat het protocol wel schraagt is `habets_2015_excentrische_protocollen`, met sterk bewijs voor het schema
- Kerncijfer toegevoegd dat ontbrak · bij INSERTIONELE tendinopathie had slechts 32% een goed resultaat met belasting tot in volledige dorsaalflexie, tegenover 67% zonder · dat maakt het onderscheid tussen de subtypes concreet in plaats van stellend
- Beloop eerlijker weergegeven · "onderhoudstraining houdt 90% symptoomvrij op vijf jaar" is niet onderbouwd · `alfredson_2000_tendinose` meldt juist dat ongeveer 25% uiteindelijk geopereerd wordt en dat het aan onderbouwing ontbreekt voor de meeste niet-chirurgische regimes
- `silbernagel_2007_pijnmonitoring` genuanceerd · doorgaan met lopen en springen onder pijnmonitoring is VEILIG (geen verschil met zes weken staken, beide groepen verbeterden), maar niet aantoonbaar beter of noodzakelijk
- Tien ongebronde numerieke waarden geschrapt of gelabeld, waaronder drie belastingsveelvouden die elkaar tegenspraken (6-8x tegenover 12x voor vergelijkbare activiteiten)

- Fase B op de patellapees · alle 10 citaties en het volledige refs-veld bevestigd als correct · 14 problemen daarbuiten, waaronder EEN IN MIJN EIGEN BRONBESTAND: de opmerking bij `rio_2015_isometrie` was innerlijk tegenstrijdig geformuleerd (de ratio stijgt, de inhibitie daalt) · verder twee superlatieven die de voorbehouden in de evidencetekst erboven tegenspraken, en een interne tegenstrijdigheid tussen "verminderde peesvascularisatie" en "neovascularisatie" binnen dezelfde beschrijving

## 2026-09-05 — bronaudit patellapees-tendinopathie

- 11 claims beoordeeld, 7 bronnen eerstehands opgehaald en geverifieerd via PubMed · dit protocol bevatte twee bronnen over de ACHILLESPEES die als patellapees-bewijs waren gepresenteerd
- VERKEERD MEETINSTRUMENT · de app noemde de VISA-P de goudstandaard en citeerde daarvoor `robinson_2001_visa_a` — dat is de validatie van de VISA-A voor de ACHILLESPEES · die auteurs vermelden bovendien dat de vragenlijst niet diagnostisch bedoeld is
- VERKEERDE PEES · `beyer_2015_hsr_achilles` betreft 58 patiënten met ACHILLESpeestendinopathie, niet 59 met patellapeesklachten · geen enkele klinische uitkomst verschilde tussen de groepen; de hogere tevredenheid was een TREND (p = 0,052) die na 52 weken verdween, de hogere therapietrouw was wel significant
- MECHANISME OMGEKEERD, VOOR DE TWEEDE KEER IN DE APP · "gemiddeld 40% pijnreductie via verhoogde corticale inhibitie (n = 20)" · `rio_2015_isometrie` had 6 deelnemers, een pijndaling van 6,8 op 10, en de corticale inhibitie NAM AF · dezelfde omkering stond ook in het patellofemorale protocol
- DE AANGEHAALDE BRON SPRAK DE RISICOFACTORCLAIM TEGEN · `vanderworp_2011_risicofactoren` vond GEEN sterk of matig bewijs dat welke onderzochte risicofactor dan ook samenhangt met deze aandoening, terwijl de app seizoensgebonden piekbelasting "de sterkste risicofactor" noemde · die factor staat niet eens in de lijst van negen met beperkt bewijs
- CIJFER VOLLEDIG VERZONNEN · "onderhoudstraining 2x/week voorkomt recidief bij 70% op 5 jaar" · `visnes_2007_excentrisch` bevat geen recidiefpercentage, geen onderhoudstraining en geen vijfjaarsopvolging, en besluit juist dat een specifiek protocol niet aan te bevelen valt
- Genuanceerd waar de app overdreef · `kongsgaard_2009_patellapees` toont dat de winst na een half jaar behouden bleef bij ZOWEL excentrische ALS zware langzame weerstandstraining; alleen na corticosteroidinjectie verslechterde zij · excentrische training is dus niet achterhaald
- Waarschuwing van de auteurs toegevoegd die in de app ontbrak · `malliaras_2015_patellapees` waarschuwt uitdrukkelijk voor onrealistische hersteltermijnen en voor te veel leunen op passieve behandelingen

## 2026-09-05 — bronaudit patellofemoraal pijnsyndroom

- 10 claims beoordeeld, 6 bronnen eerstehands opgehaald en geverifieerd via PubMed
- DE OORZAKELIJKE REDENERING VAN HET PROTOCOL OMGEKEERD · `rathleff_2014_heupkracht` toont matig tot sterk bewijs uit PROSPECTIEVE studies dat er GEEN verband is tussen isometrische heupkracht en het risico op het ontwikkelen van patellofemorale pijn · cross-sectioneel is de kracht wel lager, waaruit de auteurs besluiten dat het krachttekort eerder een GEVOLG dan een oorzaak kan zijn · heuptraining blijft als behandeling goed onderbouwd (`lack_2015_proximale_revalidatie`), maar niet als correctie van een oorzaak — dat onderscheid ontbrak volledig
- De eigen geciteerde bron sprak een risicofactor tegen · `witvrouw_2000_risicofactoren` vond de Q-hoek NIET als significante risicofactor, terwijl de app een drempel van 20 graden noemde en daarmee de hogere prevalentie bij vrouwen verklaarde
- Mechanisme verkeerd weergegeven · niet VMO-hypotrofie maar een veranderde REFLEXRESPONSTIJD van de vastus medialis obliquus was in die prospectieve studie de risicofactor, naast een verkorte quadriceps, verminderde explosieve kracht en een hypermobiele patella
- Belangrijkste bevinding over voetorthesen ontbrak · `collins_2008_voetorthesen` toont wel meerwaarde boven vlakke inlegzolen (NNT 4), maar GEEN verschil met kinesitherapie, en orthesen bovenop kinesitherapie voegden niets toe · bovendien werden deelnemers niet geselecteerd op pronatie, terwijl de app dat als indicatie presenteerde
- Superlatief en cijfers geschrapt · stapfrequentie +10% als "meest bewezen interventie" (`neal_2016_looptechniek` spreekt van BEPERKT bewijs en noemt die 10% niet), compressiereductie 20-30%, en het deelnemersaantal 690 dat niet in de meta-analyse staat

- Fase B op patellofemorale pijn · alle 8 citaties in de evidenceteksten en de beschrijving bevestigd als correct · 11 problemen in oefennotities en populatievermeldingen
- Twee fouten in één korte oefennotitie · "reduceert corticale pijninhibitie (Rio et al., 2015)" · die bron betreft 6 volleyballers met PATELLAPEESTENDINOPATHIE, niet patellofemorale pijn, en de formulering draait de betekenis om: de bron meet corticale INHIBITIE, die na isometrie juist afnam
- Een oefennotitie stond haaks op de nuance elders in hetzelfde protocol · "single leg squat: goudstandaard, correleert met heupabductorzwakte" tegenover de zojuist toegevoegde bevinding dat er prospectief géén verband is tussen heupkracht en het ontstaan van de klacht
- Interne inconsistentie in de cadansoefening · de oefening heet "+10%", de parameter zegt "+5-10%" en het voorbeeld 170 naar 185 komt neer op +8,8% · vervangen door een relatieve verhoging vanaf de gemeten uitgangswaarde
- Populatiebeperkingen toegevoegd · het cross-sectionele krachttekort geldt voor VOLWASSENEN (bij adolescenten niet gevonden) en de conclusies over looptraining betreffen VROUWELIJKE lopers

## 2026-09-05 — bronaudit facettaire blokkade lumbaal

- 13 claims beoordeeld, 4 nieuwe bronnen eerstehands opgehaald en geverifieerd via PubMed · zeven van de twaalf citaties konden niet eenduidig opgehaald worden, waaronder BEIDE bronnen onder de kernaanname van dit protocol: het pijnarme venster van 6-12 weken na de blokkade
- EFFECTRICHTING OMGEKEERD · `saner_2015_motorcontrole` besluit letterlijk dat er GEEN meerwaarde is van specifieke oefeningen gericht op bewegingscontrole boven algemene oefentherapie, op geen enkel meetmoment tot een jaar · de app claimde het tegendeel · beide groepen verbeterden wel significant, wat de klinische keuze verdedigbaar houdt maar niet de superioriteitsclaim
- Verkeerde toeschrijving met genegeerde relativering · `steiger_2012_oefentherapie` vergelijkt oefentherapie niet met passieve behandeling, maar onderzoekt of klinische verbetering samenhangt met verbetering van de getrainde eigenschap — en vindt daarvoor weinig bewijs · de auteurs stellen bovendien dat de effectgrootte van oefentherapie bij chronische aspecifieke lage rugpijn slechts BESCHEIDEN is
- Cijfer en populatie klopten niet · "multifidusatrofie bij 80% van de patiënten met chronische facetpijn" · geen van beide Hides-publicaties bevat dat percentage, en beide gaan over ACUTE rugpijn, niet over chronische facetpijn
- Drempelwaarde verzonnen · "ODI ≤ 20 correleert met volledig herstel" · `fritz_2001_oswestry` rapporteert een minimaal klinisch relevant VERSCHIL van circa 6 punten, geen absolute drempel van 20
- VEILIGHEIDSBEVINDING TOEGEVOEGD (CLAUDE.md 1.9) · `wieland_2017_yoga` vond dat de pijnwinst van yoga de vooraf bepaalde drempel van klinische relevantie NIET haalde, en dat het risico op ongewenste voorvallen — vooral TOENAME VAN RUGPIJN — hoger lag dan bij niet-oefencontroles (risicoverschil 5%; 95% BI 2-8%) · de app noemde alleen de gunstige kant
- Verzonnen cijfers geschrapt · recidiefreductie 45%, facetbelastingsreductie 40-60%, 35% minder recidief met ergonomisch plan, RFD-duur 9-18 maanden
- Dit protocol had als enige helemaal GEEN literatuurlijst, terwijl de evidenceteksten twaalf citaties bevatten · refs-veld aangelegd met de zeven geverifieerde bronnen

- Fase B op de facettaire blokkade · alle 9 citaties en het volledige refs-veld bevestigd als correct · 21 ongelabelde uitspraken daarbuiten
- TWEEDE STRUCTURELE OPLOSSING · in vijf protocollen op rij bleken de oefennotities het lek: mechanisme-, effect- en veiligheidsuitspraken zonder bron · per notitie labelen lost het alleen lokaal op en herhaalt zich bij elk protocol · onder elk oefenprogramma staat nu een vaste voetnoot dat de toelichting bij een oefening klinische richtlijn is tenzij er een bron bij vermeld staat — geldig voor alle 30 protocollen, ook de nog niet geauditeerde
- Twee onnauwkeurigheden van mijzelf gecorrigeerd · "op geen enkel meetmoment tot een jaar" betreft de PRIMAIRE uitkomstmaat van `saner_2015_motorcontrole`, niet alle uitkomsten · en bij `wieland_2017_yoga` berust de vergelijking met niet-oefencontroles op negen van de twaalf trials, de bijwerkingenanalyse op zes
- Vier cijfers apart gelabeld · de ODI-drempel van 20 die uit de evidencetekst was geschrapt maar in de doelstellingen bleef staan, de RFD-hersteltermijn, de indicatietermijn van drie maanden en de timing van circulatieoefeningen na injectie
- Bij de indicatiestelling toegevoegd dat klinisch onderzoek, de Kemp-test inbegrepen, de diagnose facetpijn volgens `cohen_2007_facetpijn` niet kan stellen

## 2026-09-05 — bronaudit bureauhouding en nekklachten

- 14 claims beoordeeld, 9 bronnen eerstehands opgehaald en geverifieerd via PubMed · dit is het slechtst onderbouwde protocol tot nu toe: van de gecontroleerde citaties hield er één volledig stand
- WARMTE-CLAIM DUBBEL ONGEDEKT · `french_2006_warmte_koude` gaat over LAGE RUGPIJN, niet over nekpijn, en besluit dat er tegenstrijdig bewijs is over het verschil tussen warmte en koude · het refs-veld van het protocol beschreef de bron zelf al correct als "Superficial heat for LBP", terwijl de evidencetekst hem voor nekpijn gebruikte — de inconsistentie stond dus al in het protocol
- COMBINATIE-CLAIM OMGEKEERD · `jull_2002_cervicogene_hoofdpijn` besluit dat de combinatie van manuele therapie en oefentherapie NIET significant superieur was aan elk afzonderlijk, terwijl de app het tegendeel stelde
- VIER FOUTEN IN ÉÉN ZIN · "neck-specifieke training (6 weken, 3x/week) resulteert in 75% pijnreductie, superieur aan algemene fitness (n=198)" · `andersen_2008_nekschoudertraining` duurde EEN JAAR, had 549 deelnemers, gaf een daling van 5,0 naar 3,4 (circa 32%), en algemene fysieke training werkte even goed (5,0 naar 3,6)
- Volledig onjuiste toeschrijving · "verminderde lower trap-activatie bij 78% van bureauwerkers met nekpijn" verwijst naar `cools_2007_scapulaoefeningen`, een EMG-studie bij 45 GEZONDE proefpersonen over oefenselectie — geen bureauwerkers, geen nekpijn, geen 78%
- Verzonnen cijfers geschrapt · 96% zwakke diepe nekflexoren, 38% pijnreductie door pauzes, 42% door mindfulness, 55% recidiefreductie door micro-pauzes
- Tegenstrijdige evidentie toegevoegd die de onderbouwing van het hele protocol raakt (CLAUDE.md 1.9) · `verhagen_2013_werkgerelateerd` vond ZEER LAAG bewijs dat oefeningen de pijn NIET verbeterden ten opzichte van geen behandeling, en specifieke oefeningen gaven op korte termijn zelfs meer pijn dan algemene · dat staat nu in de tekst, met de vermelding dat dit protocol in belangrijke mate op klinische redenering berust
- Ook relevant voor de praktijk · in `galinsky_2007_pauzes` gaven rekoefeningen tijdens de pauzes GEEN significant effect, mede door lage therapietrouw (25 tot 39%), en in `andersen_2008_nekschoudertraining` daalde de therapietrouw over een jaar van 54% naar 35%
- Zes citaties konden niet eenduidig opgehaald worden, waaronder de twee waarop de kernoefeningen berusten (Jull 2009 voor de diepe nekflexoren, Cleland 2007 voor thoracale mobilisatie) · alle zes als zodanig gemarkeerd

- Fase B op bureauhouding · alle 10 citaties in de evidenceteksten EN het volledige refs-veld bevestigd als correct · 17 problemen daarbuiten
- Fout van mijzelf · ik presenteerde de daling van de therapietrouw (54% naar 35%) als geldend voor de hele trial van `andersen_2008_nekschoudertraining`, terwijl die alleen de specifieke-trainingsgroep betreft · algemene training 31% naar 28%, referentiegroep 16% naar 9% · alle drie nu apart vermeld
- Diagnostische en doseringsdrempels zonder bron gelabeld · NDI-MCID van 7/50, de CCFT-drukwaarden 22 tot 30 mmHg met "onder 24 mmHg is significante zwakte", ROM-normen en 20-30% MVC · de CCFT-drempels wegen het zwaarst omdat zij een doorstroomcriterium sturen terwijl de onderliggende publicatie in ditzelfde protocol al als niet-geverifieerd staat gemarkeerd
- Zes superlatieven en effectclaims in oefennotities aangepakt, plus drie mechanistische verklaringen in de beschrijving (Cinderella-hypothese, neurale sensitisatie, drempel van 6 uur schermwerk)
- Het pauze-interval van 30 tot 45 minuten, dat ik in de evidencetekst had geschrapt, bleef in de fasedoelstelling en de oefenparameters staan · hetzelfde lek als in de vorige protocollen

## 2026-09-05 — bronaudit plantaire fasciopathie

- 14 claims beoordeeld, 9 bronnen eerstehands opgehaald en geverifieerd via PubMed · dit protocol oogde het meest verzorgd van alle tot nu toe geauditeerde, maar bevatte vier zware fouten
- PROGNOSE FORS TE GUNSTIG VOORGESTELD · de app stelde dat 40-50% na een jaar nog restklachten heeft · in het cohort van `hansen_2018_prognose` was dat 80,5% NA EEN JAAR; de 45,6% geldt pas na tien jaar · dit is een fout in de richting die patiëntverwachtingen scheeftrekt
- EFFECT OP ÉÉN MEETMOMENT GEPRESENTEERD ALS DUURZAAM · `rathleff_2015_highload` toont een voordeel van 29 punten op de Foot Function Index uitsluitend op 3 maanden; na 1, 6 en 12 maanden was er GEEN verschil meer (p > 0,34) · de app beweerde in fase 3 juist dat het effect "vooral optreedt tussen 3 en 12 maanden" — het omgekeerde van wat de trial laat zien · bovendien kregen BEIDE armen inlegzolen, wat de vergelijking anders maakt dan de app suggereerde
- Zelfde patroon bij de rekoefening · `digiovanni_2006_fasciarek` toont na twee jaar GEEN significant groepsverschil meer, mede doordat na acht weken alle deelnemers hetzelfde protocol kregen · het "blijvend voordeel na 2 jaar" is geschrapt
- Redactioneel commentaar geciteerd als onderzoeksbron, drie keer · "Riel et al., 2019 - BJSM" verwijst naar een editorial over pijnrapportage in oefentherapie-trials, niet naar onderzoek dat ochtendpijn als meest responsieve parameter vaststelt
- Tegenstrijdige evidentie toegevoegd over de hielspoor (CLAUDE.md 1.9) · de app noemde hem een misvatting · `hansen_2018_prognose` vond inderdaad geen invloed op de prognose, maar `mcmillan_2009_beeldvorming` vond juist een sterke associatie met hielpijn (OR 8,52; 95% BI 4,08-17,77) · beide standpunten staan nu in de tekst
- Diagnostische nuance hersteld · de windlass-test was slechts bij 31,8% van de patiënten positief in belasting en 13,6% zonder; de auteurs waarschuwen dat de lage sensitiviteit de bruikbaarheid beperkt · de app presenteerde de test als bevestigend
- BMI-drempel gecorrigeerd van 27 naar 30 kg/m2 op drie plaatsen · `riddle_2003_risicofactoren` onderzocht 30 (OR 5,6), niet 27 · de odds ratio's voor dorsaalflexie (23,3) en staand werk (3,6) zijn wel correct
- Twee belastingsveelvouden spraken elkaar tegen binnen hetzelfde protocol · 2-3x lichaamsgewicht in de fasetekst tegenover 8x in een oefennotitie van diezelfde fase · beide geschrapt wegens ontbrekende bron

- Fase B op plantaire fasciopathie · ALLE 18 citaties bevestigd als correct, het tweede protocol dat die toets schoon doorstaat · 11 problemen daarbuiten
- INTERNE TEGENSPRAAK GEVONDEN · de evidencetekst van fase 3 vermeldt na deze audit correct dat `nielsen_2014_loopvolume` geen significante verschillen tussen opbouwsnelheden vond en minder dan 30% per twee weken adviseert, terwijl de oefennotities van fase 2 en 4 de 10%-regel als vaste regel bleven presenteren · dezelfde bron werd in hetzelfde protocol voor en tegen zichzelf gebruikt
- Vaste voetnoot uitgebreid · zij dekte alleen de doorstroomcriteria, niet de fasedoelstellingen, waar dezelfde ongebronde drempels staan · nu gelden beide, voor alle 30 protocollen
- Zeven ongebronde uitspraken in notities en beschrijving aangepakt, waarvan vier superlatieven · schoeisel 600-800 km, volumereductie 20-30%, "belangrijkste mobiliteitsdeficit", "grootste aandeel in plantairflexiekracht", "hoogste fasciabelasting", "pathognomonisch symptoom" en "volledige rust is gecontra-indiceerd"
- `nielsen_2014_loopvolume` ontbrak in het refs-veld van dit protocol hoewel het in fase 3 geciteerd wordt · toegevoegd

## 2026-09-05 — bronaudit totale heupprothese

- 16 claims beoordeeld, 15 bronnen eerstehands opgehaald en geverifieerd via PubMed · dit protocol was inhoudelijk beter opgebouwd dan de vorige twee: drie claims hielden volledig stand (`vanderweegen_2016_restricties`, `meermans_2017_anterieur`, en het levenslange artroserisico uit `murphy_2010_levenslangrisico`)
- TWEE EFFECTRICHTINGEN STONDEN OMGEKEERD · `mcdonald_2014_preoperatieve_educatie` besluit dat het ONZEKER is of preoperatieve educatie meerwaarde heeft boven gebruikelijke zorg — alle effectschattingen niet significant, lage bewijskracht — terwijl de app stelde dat ze angst vermindert en functie verbetert · `coulter_2013_oefentherapie` besluit dat oefeningen even effectief zijn ONBEGELEID THUIS als onder supervisie, terwijl de app supervisie als superieur presenteerde
- Luxatierisico fundamenteel anders weergegeven · de app schreef het verhoogde risico toe aan de posterieure benadering · `kwon_2006_luxatie` toont dat de WEKE-DELENRECONSTRUCTIE beslissend is: posterieur zonder herstel 4,46% tegenover 0,49% met herstel (RR 8,21), en mét herstel zijn anterolateraal (0,70%), direct lateraal (0,43%) en posterieur (1,01%) vergelijkbaar
- Superlatief zonder grond, met weggelaten kernboodschap · `hardcastle_1985_trendelenburg` noemt de test nergens de meest sensitieve marker en waarschuwt juist uitvoerig voor vals-positieven (pijn, gebrekkige medewerking) en vals-negatieven (compensatie) · klinisch relevant omdat het protocol de test als doorstroomcriterium gebruikt
- Bevindingen van verschillende studies waren aan elkaar geknoopt · `husby_2009_krachttraining` vond juist GEEN verschil in gangpatroon en mat traplopen niet; loopsnelheid en cadans komen uit `coulter_2013_oefentherapie` (6 m/min en 20 stappen/min)
- Verder gecorrigeerd · trombosereductie geschrapt (geen uitkomstmaat in `guerra_2015_vroegemobilisatie`, dat wel 1,8 dagen kortere ligduur toont) · abductortekort "20-25% tot 2 jaar" → 6% na twee jaar volgens `rasch_2010_spierkracht`, dat bovendien herstel van gang en balans binnen zes maanden toont · sporthervatting "binnen 6 maanden" → 16 tot 28 weken · gangfunctie → houdingsstabiliteit bij `trudellejackson_2004_laatfase` · ERAS-jaartal 2020 → 2019 (2020 was een erratum)
- Tegenstrijdige evidentie toegevoegd (CLAUDE.md 1.9) · `murphy_2010_levenslangrisico` vond GEEN verband tussen BMI en heupartrose, terwijl de app obesitas als belangrijke risicofactor bij die bron vermeldde · en de ERAS-consensus stelt dat er onvoldoende bewijs is dat de chirurgische techniek op zich de ontslagcriteria beinvloedt
- Zeven citaties konden niet eenduidig geverifieerd worden en zijn als zodanig in de tekst gemarkeerd · Bandholm & Kehlet 2012, Mikkelsen 2014, Winther 2016, Heiberg 2012, Klein 2007, Ganz 2008 en het registerjaarrapport

- Fase B op de heupprothese · ALLE 14 citaties in de evidenceteksten bevestigd als correct — de eerste keer dat een protocol die toets volledig doorstaat · de 15 gevonden problemen zaten allemaal daarbuiten
- STRUCTURELE OPLOSSING voor doorstroomcriteria · in drie protocollen op rij bleken de numerieke doorstroomcriteria (VAS-drempels, afstanden, ROM, LSI, TUG, vragenlijstscores, percentages van 1RM) ongebrond en ongelabeld · per criterium een label toevoegen maakt de tekst onleesbaar en lost het alleen lokaal op · daarom staat er nu onder elk blok doorstroomcriteria een vaste voetnoot dat deze drempels praktijkafspraken zijn tenzij er een bron bij vermeld staat — geldig voor alle 30 protocollen, ook de nog niet geauditeerde
- Twee claims die ik in de evidencetekst had gecorrigeerd, bleken te herleven in de oefennotities · de tromboseclaim bij enkelpompen en de osseo-integratieclaim bij het wandelprogramma · dat bevestigt dat notities een aparte controleronde nodig hebben
- Timing gecorrigeerd · "gangrevalidatie bij voorkeur op operatiedag zelf" · in `guerra_2015_vroegemobilisatie` zat de interventiegroep in 4 van de 5 trials binnen 24 uur uit bed en liep zij in 4 van de 5 pas binnen 48 uur; dag 0 komt er niet in voor
- Het refs-veld onderaan het protocol was niet meegenomen in de audit · het vermeldde nog het onjuiste jaartal 2020 en een niet-geverifieerde citatie · vervangen door de vijf eerstehands geverifieerde bronnen met volledige vindplaats · dit veld wordt vanaf nu standaard meegenomen

## 2026-09-05 — bronaudit facetartrose lumbaal

- 18 claims beoordeeld, 13 bronnen eerstehands opgehaald en geverifieerd via PubMed · dit protocol bleek er aanzienlijk slechter aan toe dan het meniscusprotocol: geen enkele claim was volledig gedekt
- DRIE EFFECTRICHTINGEN STONDEN OMGEKEERD IN DE APP · `rubinstein_2012_manipulatie` besluit dat manipulatieve therapie NIET effectiever is dan sham, terwijl de app kortetermijnverlichting claimde · `aasa_2015_motorcontrole` toont dat LAAGBELASTE motorcontroletraining beter scoorde dan zwaar tillen, terwijl de app het omgekeerde beweerde · `cohen_2007_facetpijn` stelt dat anamnese en klinisch onderzoek de diagnose facetpijn NIET kunnen stellen, terwijl de app de Kemp-test als reproducerend en de facetblokkade als bevestigend presenteerde
- Volledig onjuiste toeschrijving geschrapt · `hancock_2007_diclofenac_smt` onderzocht diclofenac en manipulatie bij acute rugpijn en vond geen versneld herstel (HR 1,01; p = 0,955) — niet lumbale extensiemobilisatie bij facetartrose versus sham
- Verwisseling van getallen · de app vermeldde "Steffens 2016 — Cochrane, n=6133" · 6133 is het aantal in de zoekopdracht gevonden STUDIES, niet deelnemers; het artikel staat in JAMA Internal Medicine en omvat 21 trials met 30.850 deelnemers, met RR 0,55 voor oefening met educatie · de 47% komt er niet in voor
- Verder gecorrigeerd · facetartrose 15-45% → tot 15% · McKenzie "60% respondratio" → diagnostische studie waarin 50% centraliseerde, over discogene pijn · wandelen "meta-analyse n=2206, meest kosteneffectief" → systematische review met vier studies, laag tot matig bewijs, sterkste studie zonder effect · Sorensen "r=0,78, beste recidiefpredictor" → voorkomt een eerste episode bij mannen, r-waarde komt niet voor · multifidusatrofie 31 ± 8% toegevoegd, uitblijven van spontaan herstel geschrapt
- Tegenstrijdige evidentie toegevoegd (CLAUDE.md 1.9) · `naugle_2012_hypoalgesie` toont bij CHRONISCHE pijn naast hypoalgesie ook HYPERALGESIE — klinisch relevant voor deze populatie · en in `malmivaara_1995_activiteit` herstelde ook de OEFENgroep trager dan de groep met gewone activiteit
- Vier uitspraken toegeschreven aan handboeken (Neumann, McGill) gelabeld als klinische redenering · zonder DOI of PMID is de dekking hier niet controleerbaar
- Vijf ongebronde uitspraken buiten de evidenceteksten aangepakt, waarvan drie met een superlatief · SPECT als meest sensitieve test, blokkade met meer dan 80% pijnreductie, leeftijdsgrens 50 jaar, bewustzijn als sterkste preventieve factor, dagelijkse uitvoering als sterkste predictor

- Fase B op facetartrose · 14 citaties gecontroleerd, 1 onjuiste cijfertoeschrijving, 2 bronstrijdige effectclaims en 10 ongelabelde uitspraken gevonden, alle verwerkt
- Fout van mijzelf · ik gaf een van de twee hazard ratio's van `hancock_2007_diclofenac_smt` voor beide interventiearmen · manipulatie HR 1,01 (p = 0,955), diclofenac HR 1,09 (p = 0,516) · beide nu apart vermeld
- Twee oefennotities spraken de eigen evidencetekst tegen · zij claimden een "directe" en "aantoonbaar" pijnmodulerend effect van aerobe training, terwijl `naugle_2012_hypoalgesie` bij chronische pijn juist een wisselende richting en soms hyperalgesie toont · in lijn gebracht
- Tien ongelabelde uitspraken in oefennotities en doorstroomcriteria aangepakt · dit is de tweede keer dat de notities het lek zijn, na hetzelfde patroon in het meniscusprotocol · zwaarstwegend was de contra-indicatie voor Sarvangasana, een veiligheidsuitspraak zonder bron
- Inconsistentie tussen protocollen rechtgezet · de drempel van 80% pijnreductie na facetblokkade stond in `fbl` nog als vaststaand feit terwijl ze in `faz` als niet-onderbouwd was gemarkeerd · `fbl` is nog niet geauditeerd, maar een rechtstreeks tegenstrijdige uitspraak laten staan is slechter dan ze meteen rechtzetten

## 2026-09-05 — bronaudit meniscusprotocol + zichtbare auditstatus in de app

- Omvang van het probleem gemeten · 320 citatie-instanties over 30 protocollen, 305 uniek — er is nauwelijks overlap tussen protocollen, dus geen snelkoppeling via ontdubbeling
- Auditstatus zichtbaar gemaakt in de app · elke fase toont nu of de citaties tegen de primaire bron zijn gelegd · `bronstatus.js` wordt gegenereerd uit `data/claims/*.yaml` door `scripts/build-bronstatus.js`, zodat de YAML de enige bron van waarheid blijft
- Meniscusprotocol geauditeerd · 18 claims, 15 bronnen eerstehands opgehaald en geverifieerd via PubMed
- Vier claims volledig gedekt · ESCAPE (`vandegraaf_2018_escape`), FIDELITY (`sihvonen_2013_fidelity`), Kise (`kise_2016_oefentherapie`) en Paxton (`paxton_2011_hechting`)
- Diagnostische testwaarden gecorrigeerd — klinisch het zwaarst · gewrichtsspleetpijn 83% → gepoolde sensitiviteit 63% en specificiteit 77%, McMurray 94% specificiteit → 70% en 71% · en de conclusie omgekeerd: de bron stelt dat geen enkele afzonderlijke test accuraat diagnosticeert en dat de waarde van anamnese plus onderzoek onbekend is, terwijl de app het tegenovergestelde beweerde · `hegedus_2007_meniscustests`
- Verwijderde ongebronde cijfers · 85-90% compressielast posterieure hoorns, 20% krachtdeficit na vier jaar, faalkans hechting 10-25%, 35% asymptomatische scheuren, aandeel 75% mediale letsels
- Gecorrigeerde cijfers · artrose 10-15 jaar → 10-20 jaar en gemiddeld 50% na VKB- OF meniscusscheur, niet specifiek na meniscectomie · rood-rode zone 10-30% → 10-25% · FIFA 11+ 30-50% ernstige knieletsels → 39% totale letselincidentie in het voetbal (IRR 0,61) · sporthervatting na hechting 5-6 maanden → 4,3-6,5 maanden met 21% gepoolde faalkans
- Overschatting teruggebracht · Kise toont een GELIJKWAARDIGE kniefunctie en enkel betere spierkracht op korte termijn, niet een betere kniefunctie
- Tegenstrijdige evidentie toegevoegd (CLAUDE.md 1.9) · Lohmander stelt uitdrukkelijk dat bescherming tegen artrose door hechting of reconstructie niet aangetoond is, naast de claim dat hechting beter is · en de review over belasten na hechting vindt geen meerwaarde van belastingsbeperking (70-94% tegenover 64-96% goede resultaten)
- Twee citaties geschrapt wegens verkeerde toeschrijving · Ardern 2013 (de vindbare publicatie gaat over houdingscontrole na VKB-reconstructie) en Makris 2011 (review over weefselengineering, bevat de anatomische vergelijking niet) · Stensrud 2012 en Beaufils & Pujol 2017 waren niet eenduidig terug te vinden
- Twee bronnen vermeld met de beperking dat enkel het abstract gecontroleerd is · de JOSPT-praktijkrichtlijn en de narratieve review over revalidatie na hechting bevatten in hun abstract niet de uitspraken die eraan werden toegeschreven

- Fase B op het meniscusprotocol · 17 citaties gecontroleerd, 3 inhoudelijke fouten en 8 ongelabelde cijfers gevonden, alle verwerkt
- TWEEDE FOUT VAN MIJZELF GECORRIGEERD, OP TWEE PLAATSEN · ik schreef de 84% herletselreductie van `grindem_2016_rtscriteria` toe aan het halen van krachtcriteria · die 84% (HR 0,16) hoort bij het slagen voor de VOLLEDIGE testbatterij en was NIET statistisch significant (p = 0,075) · significant waren wel: 51% risicoreductie per maand uitstel tot negen maanden, en een symmetrischer quadricepskracht voor terugkeer · eerstehands nagekeken, gecorrigeerd in zowel het meniscus- als het MCL-protocol
- `thorborg_2017_fifa11` gepreciseerd · de 39% (IRR 0,61) komt uit de pooling van enkel de vier FIFA 11+-studies; de zes trials samen gaven een risicoratio van 0,75 · beide analyses nu apart vermeld
- `walker_1975_krachtoverdracht` genuanceerd · de verschuiving naar posterolateraal bij 90 graden geldt in de bron voor de ONBELASTE toestand, wat ik had weggelaten terwijl de zin een belastingsbeperking rechtvaardigt
- Acht ongebronde cijfers buiten de evidenceteksten gelabeld of verwijderd · hemartros binnen 2 uur, VKB-ruptuur bij 50%, verdubbeld meniscusrisico, exponentiele drukstijging voorbij 60-90 graden, weerstandsflexie vanaf week 6, en de kniebelasting per kilogram — die laatste nu onderbouwd met `messier_2005_knielast`

## 2026-09-05 — tweede auditronde en toepassing route B op MCL, pes anserinus en ITB

- Auditomvang uitgebreid van 24 naar 61 claims · de eerste ronde dekte ongeveer veertien van de vijfendertig citaties in deze drie protocollen; de overige circa eenentwintig zijn nu eveneens tegen de primaire bron gecontroleerd
- Vijf nieuwe bronnen live opgehaald en geverifieerd via PubMed · `rio_2015_isometrie`, `messier_2005_knielast`, `fredericson_2006_itbfs`, `schubert_2014_stapfrequentie`, `nielsen_2014_loopvolume`
- Route B toegepast op de volledige evidencetekst van MCL, pes anserinus en ITB · niet-gedekte klinische uitspraken blijven staan maar zijn expliciet gelabeld als klinische redenering; ongebronde cijfers zijn verwijderd, omdat een percentage geen vakinhoudelijk oordeel is maar een empirische bewering
- Verwijderde ongebronde cijfers · zwellingsreductie 30-40%, quadricepsverlies 50-70%, recidieffactor 3,8, MCL-recidief 12-18%, letselreductie 30% via sRPE, knieadductiemoment -14%, pijnreductie 25-30%, gewichtsverlies 5% → -20%, recidiefkans 40-60%, ACWR-drempel 1,5, symptoomresolutie 92% versus 67%, gait retraining 79%, herval 30-40%, cadans 5% → 14-20%, pasfrequentiedrempel 170 spm
- Gecorrigeerde cijfers · Nordic hamstring 51% → 71% (RR 0,293) en uitsluitend voor hamstringletsel · stapfrequentie 5-10% → uitsluitend 10% bij gezonde lopers · pes anserinus 2,5-19% → 20% van 170 artroseknieen, met de tegenstrijdige case-controlstudie ernaast · `rio_2015_isometrie`, `heiderscheit_2011_stapfrequentie`, `uysal_2014_pab`, `alvareznemegyei_2007_risicofactoren`, `vandyk_2019_nordic`
- Geschrapte citaties wegens verkeerde toeschrijving of populatie · foam rollen TFL (studie over spierpijn bij gezonde mannen), TFL-flexibiliteit als predictor (Ober-test bij gezonden), gait retraining bij ITBS (studie over patellofemorale pijn), pasfrequentie 170 spm (casusrapport over de achillespees), relatieve rust Docking & Cook 2019 (publicatie niet terug te vinden in PubMed)
- Tegenstrijdige evidentie nu zichtbaar in de app · `nielsen_2014_loopvolume` spreekt de 10%-regel tegen: over de groepen heen geen significante verschillen, en het verschil voor afstandsgebonden letsels was niet significant (HR 1,59; 95% BI 0,96-2,66; p = 0,07)
- Bewijsniveau expliciet vermeld waar het laag is · `fredericson_2000_heupabductoren` is een case series zonder controlegroep, `fredericson_2006_itbfs` een narratieve praktijkbeschrijving op expertniveau
- Elke claim heeft nu een veld `verwerkt` dat vastlegt hoe hij in `protocols.js` is opgelost · `scripts/validate-references.js` waarschuwt enkel nog voor claims zonder die verwerking
- Openstaand · drie ACL-claims (`acl_c10`, `acl_c11`, `acl_c12`) wachten op bronaanwijzing door de kinesitherapeut · de resterende zesentwintig protocollen zijn nog niet geauditeerd
- Fase B uitgevoerd op de herschreven tekst door een onafhankelijke verificator met schone context · 20 citaties gecontroleerd, 7 problemen gevonden, alle opgelost
- FOUT IN MIJN EIGEN HERSCHRIJVING GECORRIGEERD · `vandyk_2019_nordic` kreeg de cijfers van een andere studie toegeschreven (n = 942, RR 0,293, 71%) · de meta-analyse omvat 15 studies en 8459 sporters, RR 0,49 (95% BI 0,32-0,74), reductie tot 51% · eerstehands nagekeken via PubMed
- Zes resterende ongebronde cijfers alsnog gelabeld of verwijderd · BMI-drempel 30 en het AGE-mechanisme bij diabetes (pes anserinus), loopvolumedrempel 10%, beenlengteverschil 1 cm en de verhouding 2x bij vrouwen (ITB), en de oefennoot in MCL fase 5 die de 10%-regel als harde grens presenteerde


## 2026-09-05 — bronaudit knieprotocollen: MCL, pes anserinus, ITB

- `data/claims/mcl.yaml`, `pa.yaml`, `itb.yaml` aangelegd · audit-trail per claim · 24 claims beoordeeld, elf nieuwe bronnen live opgehaald via PubMed
- MCL · 0 van 11 claims volledig gedekt · vier cijfers zonder enige vindbare bron (zwellingsreductie 30-40%, H/Q-drempel 0,60, recidiefrisico 12-18%, proprioceptief deficit), twee extrapolaties vanuit ACL-onderzoek naar MCL-letsel (herletselreductie 84% en de ACL-RSI-drempels)
- Pes anserinus · 0 van 7 claims gedekt · het cijfer 2,5-19% klopt niet en er is tegenstrijdige evidentie: één case-controlstudie vond juist geen associatie met gonartrose · uysal_2014_pab, alvareznemegyei_2007_risicofactoren
- ITB · 2 van 6 gedekt · de compressietheorie en het effect van heupabductorversterking zijn goed onderbouwd; het cijfer 24% krachtverschil en de 20% momentdaling staan niet in de bronnen · fairclough_2006_anatomie, fairclough_2006_frictie, sanchezalvarado_2024_itbs
- Validator aangepast · een referentie zonder DOI maar mét PMID is nu geldig · §4 laat falen bij ontbreken van DOI/PMID, dus van beide · barber_1990_hoptest heeft geen DOI in PubMed
- Fase B uitgevoerd door een onafhankelijke verificator met schone context · alle elf PMID's wijzen naar het vermelde artikel en elk geciteerd cijfer staat letterlijk in de bron · vijf correcties op fase A doorgevoerd
- `itb_c01` bijgesteld van gedekt naar deels · de bron formuleert compressie als hypothese, niet als vastgesteld oorzakelijk verband, en "de compressietheorie verving de frictietheorie" volgt niet uit twee publicaties van dezelfde auteursgroep
- `itb_c05` opmerking gecorrigeerd · de effectbereiken 27-100% en 10-57% gelden voor alle onderzochte interventies samen, niet voor heupabductorversterking alleen
- `fairclough_2006_frictie` paginering aangevuld met het discussiegedeelte · letterlijk zoals PubMed die geeft
- `uysal_2014_pab` auteursnamen met diakritische tekens hersteld · Gökmen en Reşorlu
- Drie referenties gemarkeerd met TE VERIFIEREN op het jaartal · PubMed geeft de elektronische publicatiedatum terwijl het tijdschriftnummer bij het jaar erna hoort · niet zelf ingevuld
- Twee kadaverstudies gemarkeerd met TE VERIFIEREN op het type · de typelijst in §4 kent geen categorie voor kadaver- of laboratoriumonderzoek, nu als cohort gelabeld wat te sterk is
- `protocols.js` nog niet aangepast · de omvang van de niet-gedekte claims vraagt een beslissing van de kinesitherapeut


- Fase 3 · OKC-oefening hernoemd naar 45–90° met start vanaf week 4 · onze parameter (90–40°, week 4–6) week af van de bron · fukuda_2013_okc
- Fase 3 · evidencetekst meldt nu dat het krachtverschil tussen de groepen niet significant was en dat de populatie uitsluitend hamstringgraft betrof · overdrijving weggenomen · fukuda_2013_okc, hughes_2019_bfr_rct
- Fase 4 en 5 · doorstroomcriteria vervangen door de volledige testbatterij van de bron: scores boven 90 op quadricepskracht, hoptests, KOS-ADLS en global rating scale · ons criterium dekte maar twee van de vier tests en gebruikte ≥ in plaats van > · grindem_2016_rtscriteria
- Fase 5 · "factor 4–6" geschrapt en vervangen door de werkelijke cijfers: 4,32× bij terugkeer naar niveau I-sport en 51% risicoreductie per maand uitstel tot 9 maanden · het geschrapte cijfer stond nergens in de bron · grindem_2016_rtscriteria
- Fase 1 · superlatief "grootste limiterende factor" vervangen door "een belangrijke barrière", jaartal 2019 gecorrigeerd naar 2010, populatiebeperking toegevoegd · rice_2010_ami
- Fase 4 · plyometriebron gecorrigeerd van Buckthorpe & Roi 2017 naar Buckthorpe & Della Villa 2021 en gelabeld als expert opinion · de oude verwijzing gaat over rate of force development, niet over plyometriestadia · buckthorpe_2021_plyometrie
- Fase 2 · onjuiste bronvermelding bij isometrie op 60° verwijderd · de vermelde publicatie dekt de uitspraak niet · bron wordt aangeleverd
- Referentielijst omgezet naar Vancouver met DOI · zes bronnen, alle live geverifieerd · CLAUDE.md §4
- CLAUDE.md §4 · typelijst uitgebreid met `review` en `commentary` · narratieve reviews en clinical commentaries pasten in geen enkele bestaande categorie
- Openstaand: ACL-RSI-drempels (56 en 65), IKDC MCID 11,5 en drempel 85, en isometrie op 60° · gemarkeerd in de app als "bron nog aan te leveren" · WACHT OP BRON

## 2026-09-05 — infrastructuur

- `data/references.yaml` aangelegd · centrale bronnenlijst verplicht volgens CLAUDE.md §4 · zeven bronnen live opgehaald en geverifieerd via PubMed
- `data/claims/acl.yaml` aangelegd · audit-trail claim naar bron voor het ACL-protocol (§3 fase C) · twaalf claims beoordeeld
- `data/terminologie.yaml` aangelegd · consistente terminologie verplicht volgens §5.3 · nog te bevestigen keuzes gemarkeerd
- `scripts/validate-references.js` toegevoegd · validatie verplicht vóór elke oplevering volgens §4 · controleert verplichte velden, DOI/PMID, onbekende en ongebruikte sleutels
- Bevinding: vier van de twaalf ACL-claims zijn gedekt, één deels, zeven niet · zie `data/claims/acl.yaml` · protocolinhoud nog niet aangepast, wacht op beoordeling door de kinesitherapeut
- Fase B uitgevoerd door een onafhankelijke verificator met schone context · verplicht volgens CLAUDE.md §3 · zeven correcties op fase A: `acl_c04` van gedekt naar niet gedekt (bron hanteert >90 op vier tests, verschil niet significant p=0,075), `acl_c07` overdrijving verwijderd (geen significant krachtverschil tussen groepen), `acl_c08` aantallen gecorrigeerd naar 24 geanalyseerd en graftbeperking toegevoegd, `acl_c09` van niet gedekt naar gedekt onder de juiste bron, `acl_c10` en `acl_c11` motivering feitelijk gecorrigeerd, `rice_2010_ami` jaartal 2009 naar 2010 en type SR naar expert
- `buckthorpe_2021_plyometrie` toegevoegd · dekt het vierstadia-plyometrieprogramma · Int J Sports Phys Ther 2021;16(3):879-895, PMID 34123540
- `hughes_2019_bfr_pijn` en `webster_2022_aclrsi_adolescent` verwijderd · werden door geen enkele claim gebruikt, wat het validatiescript volgens §4 doet falen
