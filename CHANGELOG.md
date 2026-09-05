# Changelog

Inhoudelijke wijzigingen aan protocollen, oefeningen en bronnen.
Formaat per regel: wat · waarom · bron.

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
