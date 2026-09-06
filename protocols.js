// KineProtocol — Data: protocols, uitkomstmaten, beslisbomen, formulieren, evaluatieformulieren

const protocols = {

  acl:{id:'acl',title:'ACL Reconstructie',subtitle:'Postoperatief revalidatieprotocol voor VKB-reconstructie (BPTB / STG / QT)',color:'#22d3ee',
    phases:[
      {label:'Fase 1',title:'Vroeg Postoperatief',weeks:'Week 0–2',
       evidence:'Vroege volle ROM en gewichtsdragen zijn geassocieerd met betere uitkomsten. <strong>Artrogene spierinhibitie (AMI)</strong> is een belangrijke barrière voor effectieve revalidatie na knieletsel en kniechirurgie; vroege neuromotorische activatie is daarom prioritair (Rice &amp; McNair, 2010 — narratieve review over knieletsel en kniechirurgie in het algemeen, niet ACL-specifiek).',
       goals:['Inflammatie en pijncontrole (VAS ≤ 3/10 in rust)','Volledige extensie ROM (0°) — prioriteit boven flexie','Flexie ROM ≥ 90° aan einde fase 1','Lopen zonder krukken (indien goedgekeurd)','Eerste quadricepssamentrekking via NMES of biofeedback','Geen effusie (graad 1 max)'],
       exercises:[
         {name:'Passieve knie-extensie (handdoekrol)',params:[['Sets','3–5'],['Duur','10–15 min'],['Freq','3–4×/dag']],note:'Rol onder hiel, zwaartekracht creëert passieve extensie. Dagelijks meten.',cat:'mobiliteit'},
         {name:'Quadriceps setting (isometrisch)',params:[['Reps','10–15'],['Hold','5–10 sec'],['Sets','3'],['Freq','4–6×/dag']],note:'Knie in ~10° flexie. Eventueel NMES bij sterke inhibitie.',cat:'kracht'},
         {name:'Straight Leg Raise (SLR)',params:[['Reps','15–20'],['Sets','3'],['Freq','2–3×/dag']],note:'Enkel in dorsaalflexie, knie gestrekt. Wacht tot extensielag < 10°.',cat:'kracht'},
         {name:'Actief-geassisteerde knieflexie',params:[['Reps','10–15'],['Sets','2–3'],['Freq','2–3×/dag']],note:'Gezonde been helpt. Target: 90° einde week 1, 120° einde week 2.',cat:'mobiliteit'},
         {name:'Enkel-pompen',params:[['Reps','20–25'],['Freq','elk uur']],note:'DVT-preventie en lymfedrainage.',cat:'mobiliteit'},
         {name:'Gluteale isometrie (zijlig)',params:[['Reps','10–12'],['Hold','5 sec'],['Sets','3']],note:'Abductie + extensie heup isometrisch.',cat:'kracht'}],
       criteria_go:['Extensie 0° of < 5° deficit','Flexie ≥ 90°','Lopen zonder hinken','Effusie graad ≤ 1','VAS ≤ 3/10','Zichtbare quadricepscontractie'],
       criteria_stop:['Toename effusie na oefening','Extensielag > 10° zonder verbetering','Koorts of warmte rond gewricht'],
       redflags:['DVT: kuitpijn, warmte, roodheid → directe doorverwijzing','Plotse pop-gevoel → graftruptuur → chirurg contacteren']},
      {label:'Fase 2',title:'Spierherstel & ROM',weeks:'Week 2–6',
       evidence:'Graftligamentisatie nog niet voltooid. <strong>CKC-oefeningen</strong> veiliger dan OKC. Quad LSI betere indicator dan tijd (van Melick et al., 2016).',
       goals:['Volledige ROM (0–135°+)','Normaal looppatroon','Quad LSI ≥ 60%','Fietsen op stationaire fiets','Basale proprioceptie','Geen effusie na activiteit'],
       exercises:[
         {name:'Stationaire fiets',params:[['Duur','10–20 min'],['Weerstand','laag'],['Freq','dagelijks']],note:'Start hoog zadel, verlaag progressief.',cat:'cardio'},
         {name:'Mini-squat (0–45°)',params:[['Reps','12–15'],['Sets','3'],['Tempo','3-1-3']],note:'Bilateraal. Controleer valgus. Progressief dieper.',cat:'kracht'},
         {name:'Beenpers bilateraal',params:[['Reps','10–12'],['Sets','3–4'],['Belasting','60–75% 1RM']],note:'CKC, laag shear op graft.',cat:'kracht'},
         {name:'Isometrische knie-extensie (60°)',params:[['Reps','5–8'],['Hold','5 sec'],['Sets','3']],note:'Bronvermelding verwijderd: de eerder vermelde publicatie dekt deze uitspraak niet. Bron nog aan te leveren.',cat:'kracht'},
         {name:'Step-up anterieur (10 cm)',params:[['Reps','10–15'],['Sets','3']],note:'Functioneel CKC. Controleer knietracking.',cat:'kracht'},
         {name:'Enkel-been balans',params:[['Duur','30–60 sec'],['Sets','3'],['Ogen','open → gesloten']],note:'Progressie: schuimmat → perturbed surface.',cat:'stabiliteit'}],
       criteria_go:['ROM 0–130°','Normaal lopen','Quad LSI ≥ 60%','SLS 30° zonder valgus','Geen effusie na 30 min'],
       criteria_stop:['LSI < 60% na 6 wkn → NMES/BFR','ROM-stagnatie → manuele therapie'],redflags:[]},
      {label:'Fase 3',title:'Functioneel Herstel',weeks:'Week 6–12',
       evidence:'<strong>OKC knie-extensie</strong> in een beperkt bereik van 45–90° vanaf week 4 gaf geen toename van anterieure knielaxiteit ten opzichte van een late start (Fukuda et al., 2013 — RCT, hamstringgraft); het krachtverschil tussen de groepen was niet significant. <strong>BFR-training</strong> bij quadricepshypotrofie gaf vergelijkbare kracht- en hypertrofiewinst als zware weerstandstraining, met minder kniepijn en effusie (Hughes et al., 2019 — RCT, uitsluitend hamstringgraft).',
       goals:['Quad LSI ≥ 80%','Hamstring LSI ≥ 80%','SLS technisch correct','Lateral step-down zonder compensatie','ACL-RSI ≥ 56/100'],
       exercises:[
         {name:'Unilateraal been-press',params:[['Reps','8–10'],['Sets','4'],['Belasting','70–85% 1RM']],note:'Prioriteitsoefening voor LSI.',cat:'kracht'},
         {name:'OKC Knie-extensie (45–90°)',params:[['Reps','10–12'],['Sets','3–4'],['Start','vanaf week 4']],note:'Beperkt bereik zoals onderzocht door Fukuda et al. (2013): 45–90° vanaf week 4. Bereik pas uitbreiden op geleide van de doorstroomcriteria.',cat:'kracht'},
         {name:'RDL unilateraal',params:[['Reps','8–10'],['Sets','3']],note:'Bij STG-graft uitstellen tot week 10–12.',cat:'kracht'},
         {name:'BFR Quadriceps',params:[['Reps','30-15-15-15'],['Druk','60–80% LOP']],note:'Bij LSI-stagnatie < 70%.',cat:'kracht'},
         {name:'Lateral step-down (20 cm)',params:[['Reps','10–15'],['Sets','3']],note:'Meetinstrument én oefening.',cat:'kracht'},
         {name:'Proprioceptie instabiel vlak',params:[['Duur','45 sec'],['Sets','3–5']],note:'BOSU → ogen gesloten → dubbeltaak.',cat:'stabiliteit'}],
       criteria_go:['Quad LSI ≥ 80%','Hamstring LSI ≥ 80%','Geen effusie','SLS zonder valgus','≥ 12 weken postop'],
       criteria_stop:['LSI < 70% → BFR','ACL-RSI < 40 → psychologische begeleiding'],redflags:[]},
      {label:'Fase 4',title:'Looptraining & Plyometrie',weeks:'Week 12–20',
       evidence:'<strong>Plyometrie in 4 stadia</strong> als onderdeel van criteriumgebaseerde revalidatie (Buckthorpe &amp; Della Villa, 2021 — clinical commentary, expert opinion). Voor terugkeer naar sport hanteerde Grindem et al. (2016) een testbatterij met scores boven 90 op vier tests.',
       goals:['Continu joggen 20–30 min','Plyometrisch stadium 1–3 voltooid','LSI plyometrie ≥ 85–90%','Quad LSI ≥ 90%'],
       exercises:[
         {name:'Jog-walk protocol',params:[['Duur','20 min'],['Verhouding','1 min jog / 1 min walk']],note:'Week 12–13. Snelheid ~7–8 km/u.',cat:'cardio'},
         {name:'Continu joggen',params:[['Opbouw','10 → 20 → 30 min'],['Freq','3×/week']],note:'10%-regel. Bochten na 2 weken rechte lijn.',cat:'cardio'},
         {name:'Bipodale + unipodale opvang',params:[['Reps','8–10 → 6–8/been'],['Sets','3']],note:'Week 12–16. Zachte landing, geen valgus.',cat:'neuro'},
         {name:'Laterale sprongen + SSC',params:[['Vb','skater jumps, depth jump'],['RSI','meten']],note:'Week 16–20. RSI = hoogte/contacttijd.',cat:'neuro'}],
       criteria_go:['Continu joggen 30 min','Quadricepskracht symmetrie > 90%','Hoptestbatterij symmetrie > 90%','Knee Outcome Survey ADL Scale > 90','Global rating scale of function > 90'],
       criteria_stop:['Pijn bij jogging > VAS 3 → fase 3 consolideren'],redflags:[]},
      {label:'Fase 5',title:'Return to Sport',weeks:'Mnd 5–12',
       evidence:'Terugkeer naar niveau I-sport gaf een <strong>4,32× hoger herletselpercentage</strong> dan niet terugkeren; het herletselpercentage daalde met <strong>51% per maand uitstel tot 9 maanden</strong> na de operatie, daarna zonder verdere risicoreductie (Grindem et al., 2016 — cohort, 106 pivoting-sporters). De KNGF-richtlijn beveelt <strong>9–12 maanden</strong> revalidatie aan (van Melick et al., 2016).',
       goals:['Hop-testbatterij LSI ≥ 90%','Quad + Ham LSI ≥ 90%','ACL-RSI ≥ 65/100','IKDC ≥ 85/100','Minimum 9 maanden postoperatief'],
       exercises:[
         {name:'Single Leg Hop + Triple Hop + 6m Timed',params:[['LSI','≥ 90%']],note:'Volledige hop-testbatterij vóór RTS.',cat:'test'},
         {name:'FIFA 11+ (preventie)',params:[['Duur','20 min'],['Freq','elk trainingsmoment']],note:'50% reductie herletsel (Silvers-Granelli 2015).',cat:'neuro'},
         {name:'Nordic Hamstring (onderhoud)',params:[['Reps','6–8'],['Freq','1–2×/week']],note:'Levenslang onderhoud.',cat:'kracht'}],
       criteria_go:['Alle vier de tests van Grindem > 90 (quadricepskracht, hoptests, KOS-ADLS, global rating scale)','≥ 9 maanden postoperatief','ACL-RSI ≥ 65 (bron nog aan te leveren)','IKDC ≥ 85 (bron nog aan te leveren)'],
       criteria_stop:['ACL-RSI < 50 → psycholoog'],
       redflags:['Nieuwe instabiliteitsepisode → stop sport, evalueer ACL','Contralateraal risico 3–6× verhoogd → bilateraal preventief programma']}
    ],
    refs:'van Melick N, van Cingel REH, Brooijmans F, et al. Evidence-based clinical practice update: practice guidelines for anterior cruciate ligament rehabilitation based on a systematic review and multidisciplinary consensus. Br J Sports Med. 2016;50(24):1506-1515. doi:10.1136/bjsports-2015-095898 | Grindem H, Snyder-Mackler L, Moksnes H, Engebretsen L, Risberg MA. Simple decision rules can reduce reinjury risk by 84% after ACL reconstruction: the Delaware-Oslo ACL cohort study. Br J Sports Med. 2016;50(13):804-8. doi:10.1136/bjsports-2016-096031 | Fukuda TY, Fingerhut D, Moreira VC, et al. Open kinetic chain exercises in a restricted range of motion after anterior cruciate ligament reconstruction: a randomized controlled clinical trial. Am J Sports Med. 2013;41(4):788-94. doi:10.1177/0363546513476482 | Hughes L, Rosenblatt B, Haddad F, et al. Comparing the effectiveness of blood flow restriction and traditional heavy load resistance training in the post-surgery rehabilitation of anterior cruciate ligament reconstruction patients: a UK National Health Service randomised controlled trial. Sports Med. 2019;49(11):1787-1805. doi:10.1007/s40279-019-01137-2 | Rice DA, McNair PJ. Quadriceps arthrogenic muscle inhibition: neural mechanisms and treatment perspectives. Semin Arthritis Rheum. 2010;40(3):250-66. doi:10.1016/j.semarthrit.2009.10.001 | Buckthorpe M, Della Villa F. Recommendations for plyometric training after ACL reconstruction - a clinical commentary. Int J Sports Phys Ther. 2021;16(3):879-895. doi:10.26603/001c.23549'},

  tka:{id:'tka',title:'Totale Knieprothese',subtitle:'TKA revalidatie inclusief prehabilitatie, ERAS-protocol en sporthervatting',color:'#a78bfa',
    phases:[
      {label:'Preop + Dag 0–3',title:'Preoperatief & Acute Zorg',weeks:'Preop + Dag 0–3',
       evidence:'<strong>Prehabilitatie</strong> verbetert vroeg postoperatieve uitkomsten (Jakobsen et al., 2014). <strong>ERAS</strong>: mobilisatie dag 0 veilig (Kehlet & Thienpont, 2013).',
       goals:['Quadricepskracht maximaliseren','ROM: extensie 0°, flexie ≥ 110°','Patiënt educatie + functionele baseline (TUG, 6MWT, KOOS)','Dag 0: DVT-preventie, eerste stappen'],
       exercises:[
         {name:'Quadriceps setting (prehab)',params:[['Reps','15–20'],['Hold','5–10 sec'],['Freq','3×/dag']],note:'Patiënt moet uitvoering kennen vóór operatie.',cat:'kracht'},
         {name:'Enkel-pompen (dag 0)',params:[['Reps','20–30'],['Freq','elk uur']],note:'DVT-preventie. Starten in recovery room.',cat:'mobiliteit'},
         {name:'Eerste stappen (dag 0)',params:[['Timing','2–6u postop'],['Hulp','rollator + kinesist']],note:'ERAS: dag 0 mobilisatie.',cat:'mobiliteit'},
         {name:'Passieve extensie (dag 1)',params:[['Duur','15–20 min'],['Freq','3–4×/dag']],note:'PRIORITEIT. Extensiedeficit is meest invaliderende complicatie.',cat:'mobiliteit'}],
       criteria_go:['Hemodynamisch stabiel','DVT-preventie opgestart','Eerste stappen gezet'],
       criteria_stop:['Hemodynamische instabiliteit → uitstellen'],
       redflags:['DVT: kuitpijn, warmte → doppler echo','Peroneus parese → directe melding chirurg']},
      {label:'Week 1–2',title:'Vroeg Postoperatief',weeks:'Week 1–2',
       evidence:'Ziekenhuisduur gedaald naar <strong>2–3 dagen</strong> bij ERAS. <strong>Cryotherapie</strong> reduceert pijn (Adie et al., 2012). <strong>CPM niet aanbevolen</strong> (Cochrane 2014).',
       goals:['Extensie 0°','Flexie ≥ 90° einde week 2','Lopen met rollator','Trappen met hulpmiddel','VAS ≤ 4/10'],
       exercises:[
         {name:'Actief-geassisteerde knieflexie',params:[['Reps','10–15'],['Sets','3'],['Freq','3×/dag']],note:'Target: 5° meer per dag.',cat:'mobiliteit'},
         {name:'Passieve knie-extensie',params:[['Duur','15–20 min'],['Freq','4×/dag']],note:'PRIORITEIT.',cat:'mobiliteit'},
         {name:'Patella mobilisatie',params:[['Reps','10–15'],['Freq','dagelijks']],note:'Start dag 7–10 na wondsluiting.',cat:'mobiliteit'},
         {name:'Cryotherapie post-sessie',params:[['Duur','15–20 min'],['Timing','na elke sessie']],note:'IJszak met doek, niet op wond.',cat:'manueel'}],
       criteria_go:['Extensie 0°','Flexie ≥ 90°','Lopen OK','Trapvaardigheid OK'],
       criteria_stop:['Flexie < 80° na 2 wkn → MUA-overleg'],
       redflags:['MUA-indicatie bij flexie < 90° na week 6–8','Optimale timing: voor week 12']},
      {label:'Week 2–6',title:'Subacuut Herstel',weeks:'Week 2–6',
       evidence:'Ambulante kinesitherapie 3×/week superieur (Artz et al., 2015). <strong>Aquatherapie</strong> veilig vanaf week 3–4.',
       goals:['Flexie ≥ 110°','Lopen zonder hulpmiddel','Zelfstandige ADL','Fietsen 20 min'],
       exercises:[
         {name:'Stationaire fiets',params:[['Duur','15–25 min'],['Freq','dagelijks']],note:'Verlaag zadel progressief. Vereist ≥ 105° flexie.',cat:'cardio'},
         {name:'Mini-squat (0–60°)',params:[['Reps','12–15'],['Sets','3']],note:'Progressief dieper.',cat:'kracht'},
         {name:'Aquatherapie',params:[['Start','week 3–4'],['Duur','30–45 min'],['Freq','2×/week']],note:'Hydrostatische druk vermindert oedeem.',cat:'cardio'},
         {name:'Enkel-been balans',params:[['Duur','20–40 sec'],['Sets','3']],note:'Expliciete proprioceptieve training nodig post-TKA.',cat:'stabiliteit'}],
       criteria_go:['ROM 0–110°','TUG < 12 sec','5× STS zonder armen','Trappen voet-voor-voet'],
       criteria_stop:['ROM < 100° na 6 wkn → chirurg'],redflags:[]},
      {label:'Week 6–12',title:'Functioneel Herstel',weeks:'Week 6–12',
       evidence:'<strong>Progressieve weerstandstraining</strong> (70–80% 1RM) veilig + effectief (Artz et al., 2015).',
       goals:['Flexie ≥ 120°','Trappen zonder leuning','6MWT ≥ 300m','Quad LSI ≥ 70–75%'],
       exercises:[
         {name:'Progressieve weerstandstraining',params:[['Reps','8–12'],['Sets','3–4'],['Belasting','70–80% 1RM']],note:'Leg press, knie-extensie, squat, RDL. Wekelijks verhogen.',cat:'kracht'},
         {name:'Fietsen buiten',params:[['Duur','20–45 min'],['Freq','3–5×/week']],note:'Toegestaan zodra ROM > 105°.',cat:'cardio'},
         {name:'Nordic walking',params:[['Duur','20–40 min'],['Freq','3–4×/week']],note:'Reduceert kniebelasting met ~25%.',cat:'kracht'},
         {name:'Balans instabiel vlak',params:[['Vlak','BOSU / schuimmat'],['Duur','30–45 sec']],note:'Sensorimotorische training tot 12+ mnd.',cat:'stabiliteit'}],
       criteria_go:['ROM ≥ 120°','6MWT ≥ 300m','Quad LSI ≥ 70%','TUG < 10 sec'],
       criteria_stop:['Restpijn > VAS 4 na 12 wkn → neuropathisch screenen'],redflags:[]},
      {label:'Mnd 3–6+',title:'Activiteit & Langetermijn',weeks:'Maand 3–6+',
       evidence:'Krachttekort tot <strong>2 jaar</strong> zonder training (Mizner et al., 2011). Chronische pijn bij 15–20%.',
       goals:['Wandelen ≥ 45–60 min','Quad LSI ≥ 80–85%','6MWT ≥ 400m','KOOS ≥ 60–70/100'],
       exercises:[
         {name:'Dagelijks wandelen',params:[['Duur','30–60 min'],['Freq','dagelijks']],note:'Beste langetermijn-activiteit.',cat:'cardio'},
         {name:'Fietsen',params:[['Duur','30–60 min'],['Freq','3–5×/week']],note:'Aanbevolen levenslange sport.',cat:'cardio'},
         {name:'Zwemmen (crawl/rugslag)',params:[['Freq','2–3×/week']],note:'GEEN schoolslag.',cat:'cardio'},
         {name:'Krachtoefeningen onderhoud',params:[['Freq','2×/week']],note:'Sarcopenie-preventie.',cat:'kracht'}],
       criteria_go:['KOOS ≥ 70/100','6MWT ≥ leeftijdsnorm','VAS ≤ 2/10'],
       criteria_stop:['Chronische pijn > 3 mnd → pijnkliniek'],
       redflags:['Prothese-instabiliteit, klikken → orthopedisch chirurg']}
    ],
    refs:'Artz et al. (2015) — Physiotherapy after TKR: systematic review. BMC Musculoskeletal Disorders. | Jakobsen et al. (2014) — Early progressive strength training to enhance recovery after fast-track TKA. Arthritis Care Res. | Kehlet & Thienpont (2013) — Fast-track knee arthroplasty. The Knee.'},

  pfps:{id:'pfps',title:'Patellofemoraal Pijnsyndroom',subtitle:'Multifactorieel protocol met subclassificatie, heupfocus en gait retraining',color:'#f97316',
    phases:[
      {label:'Diagnostiek',title:'Diagnostiek & Subclassificatie',weeks:'Vóór behandelstart',
       evidence:'Patellofemorale pijn is een <strong>klinische diagnose</strong>; beeldvorming is in de eerste lijn niet vereist — <em>klinische redenering, ondersteund door de internationale consensusverklaring (Crossley et al., 2016 — BJSM), waarvan de afzonderlijke aanbevelingen hier niet tegen de volledige tekst zijn gelegd.</em>',
       goals:["Clarke's, patellar grind, SLS uitvoeren",'Differentiaaldiagnose uitsluiten','Subtype bepalen: heup / quad / biomechanisch / loper','Baseline Kujala + VISA-P afnemen'],
       exercises:[
         {name:"Clarke's test",params:[['Sens','matig'],['Spec','laag']],note:'Nooit als enige test.'},
         {name:'Single Leg Squat (provocatie)',params:[['ROM','30–60°'],['Observeer','valgus, bekken, romp']],note:'Gangbare provocatietest voor bewegingskwaliteit. Let op: prospectief onderzoek vindt géén verband tussen heupkracht en het ontstaan van de klacht (Rathleff et al., 2014), dus een zichtbare valgus wijst niet zonder meer op een oorzakelijk krachttekort.',cat:'test'},
         {name:'Heupabductorkracht (dynamo)',params:[['Positie','zijlig, 0° heupflexie']],note:'Wordt gebruikt om de behandeling te sturen en het verloop te objectiveren — praktijkkeuze.',cat:'test'},
         {name:'Patellatilt test',params:[['Normaal','laterale rand ≥ horizontaal']],note:'Informeert taping/orthotics keuze.',cat:'test'}],
       criteria_go:['Diagnose bevestigd','Subtype bepaald','Rode vlaggen uitgesloten'],
       criteria_stop:['Nachtpijn → RX','Ochtendstijfheid > 45 min → SpA'],
       redflags:['Nachtpijn + rustpijn: tumoraal uitsluiten','Koorts + warmte + zwelling: septische artritis → spoed']},
      {label:'Fase 1',title:'Pijnmanagement & Load',weeks:'Week 1–3',
       evidence:'<strong>Patellataping</strong> voor onmiddellijke pijnverlichting is <em>klinische redenering; de toegeschreven publicatie is in dit dossier niet geverifieerd.</em> <strong>Voetorthesen:</strong> in een RCT bij 179 deelnemers gaven kant-en-klare orthesen na zes weken meer verbetering dan vlakke inlegzolen (NNT 4), maar er was <strong>géén verschil met kinesitherapie</strong>, en orthesen bovenop kinesitherapie voegden <strong>niets toe</strong>; na 52 weken verbeterden alle groepen klinisch relevant (Collins et al., 2008 — BMJ). <em>Deelnemers werden daarbij niet geselecteerd op pronatie.</em> Belastingsmanagement blijft centraal — <em>klinische redenering.</em>',
       goals:['VAS ≤ 3/10','2-uursregel begrijpen','Activiteiten aanpassen','Eerste heup + quad activering'],
       exercises:[
         {name:'McConnell taping',params:[['Test','≥ 50% VAS-reductie']],note:'Test altijd pijneffect.',cat:'manueel'},
         {name:'Isometrische quad (60–70°)',params:[['Reps','5'],['Hold','45 sec'],['Sets','4']],note:'Isometrie werd onderzocht bij <strong>patellapeestendinopathie</strong>, niet bij patellofemorale pijn: bij 6 volleyballers daalde de pijn acuut en nam de corticale inhibitie af (Rio et al., 2015). Toepassing hier is klinische redenering.',cat:'kracht'},
         {name:'Zijlig heupabductie + clamshell',params:[['Reps','15–20'],['Sets','3'],['Freq','2×/dag']],note:'Eerste activering gluteus medius.',cat:'kracht'},
         {name:'Patiënteducatie (PNE)',params:[['Duur','15–20 min']],note:'Overbelastingsmodel en 2-uursregel bespreken. De hersteltermijn varieert sterk; noem geen vaste periode — een prognose van 6 tot 12 weken is in dit dossier niet onderbouwd.',cat:'manueel'}],
       criteria_go:['VAS ≤ 3/10','Begrip belastingsprincipes'],
       criteria_stop:['Pijn neemt toe → dosering halveren'],redflags:[]},
      {label:'Fase 2',title:'Krachtopbouw Heup + Quad',weeks:'Week 3–8',
       evidence:'<strong>Proximale training gecombineerd met quadricepstraining:</strong> sterk bewijs voor pijnvermindering en functieverbetering op korte termijn, matig bewijs op middellange termijn; matig bewijs dat proximale training vergeleken mét quadricepstraining alleen de pijn verlaagt op korte en middellange termijn (Lack et al., 2015 — BJSM; 14 studies, 7 van hoge kwaliteit). <em>Het eerder vermelde aantal van 690 deelnemers staat niet in die bron en is geschrapt.</em> <strong>Belangrijke nuance over het waarom:</strong> prospectieve studies vinden <strong>géén verband</strong> tussen isometrische heupkracht en het risico op het ontstaan van deze klacht; cross-sectioneel is de kracht bij <strong>volwassenen</strong> wél lager — bij adolescenten werd dat tekort niet gevonden. De auteurs besluiten dat verminderde heupkracht eerder een <strong>gevolg</strong> dan een oorzaak kan zijn (Rathleff et al., 2014 — BJSM). <em>Heuptraining blijft dus verdedigbaar als behandeling, maar niet als correctie van een oorzaak.</em>',
       goals:['Heup LSI ≥ 85%','Quad LSI ≥ 75%','SLS 30° zonder valgus','VAS ≤ 2/10','Kujala ≥ 70/100'],
       exercises:[
         {name:'Lateral band walk + hip thrust',params:[['Sets','3–4'],['Belasting','progressief']],note:'Kernoefening van de heuptraining in dit protocol — praktijkkeuze.',cat:'kracht'},
         {name:'Terminale knie-extensie (TKE)',params:[['Reps','15–20'],['Sets','3']],note:'Bedoeld om de mediale quadriceps aan te spreken — klinische redenering; selectieve VMO-activering is in dit dossier niet onderbouwd.',cat:'kracht'},
         {name:'Wall squat isometrisch',params:[['Hoek','60–70°'],['Hold','30–45 sec'],['Sets','4']],note:'Stop bij > VAS 4.',cat:'stabiliteit'},
         {name:'Split squat + single leg RDL',params:[['Reps','8–12/been'],['Sets','3']],note:'Gekozen om de transfer naar dagelijkse en sportieve belasting te ondersteunen — klinische redenering.',cat:'kracht'},
         {name:'Side plank + dead bug',params:[['Hold','30–60 sec'],['Sets','3']],note:'Lumbopelvische stabiliteit.',cat:'stabiliteit'}],
       criteria_go:['SLS 30° zonder valgus','Heup LSI ≥ 85%','VAS ≤ 2/10','Kujala ≥ 70/100'],
       criteria_stop:['Pijn stijgt → dosering reduceren'],redflags:[]},
      {label:'Fase 3',title:'Functioneel & Gait',weeks:'Week 6–12',
       evidence:'<strong>Looptraining:</strong> een systematische review van 28 studies vond <strong>beperkt</strong> bewijs dat zowel looptraining als proximale krachttraining gunstige uitkomsten geeft op pijn en functie, en dat alleen looptraining de piekheupadductie significant verlaagt; de conclusie betreft <strong>vrouwelijke lopers</strong> (Neal et al., 2016 — Gait Posture). <em>De review noemt geen stapfrequentieverhoging van 10% en presenteert niets als de meest bewezen interventie; die formulering is geschrapt.</em> <em>De eerder vermelde reductie van de patellofemorale compressie met 20 tot 30% is niet geverifieerd en is eveneens geschrapt.</em>',
       goals:['Jogging 30 min VAS ≤ 2/10','Plyometrisch stadium 1+2 voltooid','Quad LSI ≥ 85%','Kujala ≥ 80/100'],
       exercises:[
         {name:'Stapfrequentie verhogen (+10%)',params:[['Tool','metronoom-app'],['Target','+5–10%']],note:'Verhoog de eigen cadans met 5 tot 10% ten opzichte van de gemeten uitgangswaarde; werk met de metronoom vanaf die baseline in plaats van een vaste doelwaarde.',cat:'neuro'},
         {name:'Heup-dominante loopstijl',params:[['Cue','"push from the hip"']],note:'Cue gericht op meer heupextensie; het effect op de patellofemorale belasting is klinische redenering, niet onderbouwd in dit dossier.',cat:'neuro'},
         {name:'Loopprogressie (10%-regel)',params:[['Start','2–3 km'],['Opbouw','10%/week']],note:'2-uursregel na elke run.',cat:'cardio'},
         {name:'Bipolale → unipolale sprongen',params:[['Reps','8–10 → 6–8/been'],['Sets','3']],note:'Knietracking bij landing.',cat:'neuro'}],
       criteria_go:['Jogging 30 min VAS ≤ 2/10','SLS 45° zonder valgus','Hop LSI ≥ 90%','Kujala ≥ 80/100'],
       criteria_stop:['Pijn > VAS 3 bij sport → fase 2 consolideren'],
       redflags:['Recidief na RTS → loopvolume-monitoring activeren']}
    ],
    refs:'Rio E et al., 2015 — Br J Sports Med 49(19):1277-83 (isometrie bij patellapeestendinopathie; in dit protocol als extrapolatie gebruikt) | Lack S et al., 2015 — Br J Sports Med 49(21):1365-76 (proximale revalidatie, systematische review) | Rathleff MS et al., 2014 — Br J Sports Med 48(14):1088 (heupkracht: geen prospectief verband met het ontstaan) | Neal BS et al., 2016 — Gait Posture 45:69-82 (looptraining en biomechanica) | Collins N et al., 2008 — BMJ 337:a1735 (voetorthesen versus kinesitherapie) | Witvrouw E et al., 2000 — Am J Sports Med 28(4):480-9 (prospectieve risicofactoren) | Crossley KM et al., 2016 — Br J Sports Med 50(14):839-43 (consensusverklaring)'},

  lh:{id:'lh',title:'Lumbale Hernia',subtitle:'Conservatief en postoperatief revalidatieprotocol voor lumbale discushernia met radiculopathie',color:'#34d399',
    phases:[
      {label:'Fase 0',title:'Diagnostiek & Triage',weeks:'Week 0',
       evidence:'<strong>Beloop:</strong> in de klassieke gerandomiseerde studie bij 126 patiënten met een onzekere operatie-indicatie deed de geopereerde groep het na één jaar significant beter; na vier jaar nog steeds beter maar <strong>niet meer significant</strong>, en daarna veranderde er tot tien jaar nauwelijks iets (Weber, 1983 — Spine). <em>De veelgeciteerde uitspraak dat 90% conservatief herstelt binnen 6 tot 12 weken staat niet in die bron en is geschrapt.</em> Beeldvorming is in de eerste lijn geen standaard — <em>klinische redenering; de richtlijnverwijzing is hier niet geverifieerd.</em> <strong>Straight leg raise:</strong> gepoolde sensitiviteit 0,91 (95% BI 0,82–0,94) maar gepoolde <strong>specificiteit slechts 0,26</strong> (0,16–0,38); de gekruiste test is omgekeerd: sensitiviteit 0,29, specificiteit 0,88. De auteurs benadrukken dat de bruikbaarheid <strong>beperkt wordt door die lage specificiteit</strong> en dat alle onderzochte studies chirurgische casusreeksen buiten de eerste lijn waren (Devillé et al., 2000 — Spine). <em>De slumptest komt in die review niet voor.</em>',
       goals:['Klinische diagnose + niveau bepalen (L4–L5 vs L5–S1)','Rode vlaggen screenen','Neurologisch onderzoek: reflexen, kracht, sensibiliteit','Behandelpad: conservatief vs chirurgisch','Baseline: ODI, NRS, neurologisch'],
       exercises:[
         {name:'Straight Leg Raise (SLR)',params:[['Positief','< 70°'],['Specificiteit','hoog']],note:'Goudstandaard voor L4–L5 en L5–S1. Bragard verhoogt specificiteit.',cat:'kracht'},
         {name:'Slump test',params:[['Sens','0.84 (niet onderbouwd in dit dossier)'],['Spec','0.83 (niet onderbouwd in dit dossier)']],note:'Reproductie uitstralende pijn = positief. Dat de slumptest sensitiever is dan de SLR, is in dit dossier niet nagekeken; de slumptest komt in Devill&eacute; (2000) noch in de Cochrane-review niet voor.',cat:'test'},
         {name:'Neurologisch onderzoek',params:[['Test','reflexen, kracht, sensibiliteit']],note:'L4: kniepees + TA. L5: EHL + webspace. S1: achillespees + peroneus.',cat:'test'},
         {name:'Femoral nerve stretch (L3–L4)',params:[['Positie','buiklig, knie flecteren']],note:'Pijn voorzijde bovenbeen = positief bij hoge hernia.',cat:'test'}],
       criteria_go:['Diagnose bevestigd','Rode vlaggen uitgesloten','Behandelpad bepaald'],
       criteria_stop:['Progressieve motoruitval → chirurg binnen 24–48u'],
       redflags:['CAUDA EQUINA: blaas/darm + perineale anesthesie + bilaterale uitstraling → SPOEDOPNAME','Koorts + rugpijn + CRP hoog → spondylodiscitis → spoed','Gewichtsverlies + nachtzweten > 50j → maligniteit → oncologische screening']},
      {label:'Fase 1',title:'Acute Fase',weeks:'Week 1–3',
       evidence:'<strong>Rust:</strong> bij ACUTE aspecifieke lage rugpijn herstelden patiënten die gewone activiteit binnen de pijngrens voortzetten sneller dan met bedrust — <em>en ook sneller dan met rugmobiliserende oefeningen</em> (Malmivaara et al., 1995 — NEJM). <em>Die trial betreft geen radiculopathie; overdracht is klinische redenering.</em> <strong>Centralisatie:</strong> in een prospectieve studie centraliseerde de uitstralende pijn bij 50% van de patiënten, van wie 74% een positief discogram had — <em>dat is een diagnostische bevinding, geen effectmaat voor de McKenzie-methode</em> (Donelson et al., 1997 — Spine). <strong>Neurodynamische mobilisatie:</strong> de aangehaalde trial betreft zenuwgerelateerde <strong>NEK- en ARMpijn</strong>, niet lumbale radiculopathie; daar gaf de behandeling onmiddellijke klinisch relevante winst bovenop het advies actief te blijven (number needed to treat 2,7; 95% BI 1,7–6,5) zonder aanwijzing voor schade (Nee et al., 2012 — J Physiother). <em>Toepassing op het been is klinische redenering.</em>',
       goals:['NRS ≤ 5/10 bij activiteit','Centralisatie uitstralende pijn','Lopen 15–20 min','Ergonomische educatie'],
       exercises:[
         {name:'McKenzie extensie in lig',params:[['Reps','10'],['Sets','3–5'],['Freq','elk uur'],['Indicatie','centralisatie']],note:'NIET bij peripheralisatie. Bekken op mat, bovenlichaam omhoog duwen.',cat:'mobiliteit'},
         {name:'McKenzie flexie (knees to chest)',params:[['Reps','10'],['Sets','3'],['Indicatie','geen centralisatie']],note:'Bij flexie-responder of extensie-peripheralisatie.',cat:'mobiliteit'},
         {name:'Neurodynamische slider (n. ischiadicus)',params:[['Reps','10–15'],['Sets','3'],['Freq','2–3×/dag']],note:'Heup 90°, afwisselen knie strekken + dorsaalflexie / knie buigen + plantairflexie.',cat:'neuro'},
         {name:'Lopen (vlak, laag tempo)',params:[['Duur','10–20 min'],['Freq','dagelijks']],note:'Actief blijven = sleutelboodschap. Max VAS 5 tijdens lopen.',cat:'cardio'},
         {name:'Posturale ergonomie',params:[['Freq','dagelijks instrueren']],note:'Lordosesteun. Max 30 min zitperiode. Staan-zit-wissel.',cat:'manueel'}],
       criteria_go:['NRS ≤ 5/10 bij lopen','Centralisatie aanwezig of pijn stabiel','Lopen 15 min mogelijk'],
       criteria_stop:['Peripheralisatie → stop McKenzie extensie, overleg','Toename motoruitval → neurochirurg'],
       redflags:['Nieuwe blaas/darm problemen → cauda equina herevaluatie → spoed']},
      {label:'Fase 2',title:'Mobiliteit & Stabilisatie',weeks:'Week 3–6',
       evidence:'<strong>Motorcontroletraining:</strong> in de aangehaalde RCT (n = 39) ging het om patiënten met een ACUTE, EERSTE episode lage rugpijn, en werd specifieke oefentherapie bovenop medische zorg vergeleken met medische zorg plus normale activiteit — <em>niet met algemene oefentherapie, en niet bij radiculopathie</em>. Het recidief lag lager: 30% tegenover 84% na een jaar (Hides et al., 2001 — Spine). <strong>Neurodynamische progressie</strong> van glijden naar spannen is <em>klinische redenering; de onderliggende trial betreft nek- en armpijn (Nee et al., 2012).</em>',
       goals:['NRS ≤ 3/10 dagelijks','Actief gebruik TA (palpatie)','SLR ≥ 60° zonder uitstraling (praktijkafspraak — geen bron hanteert die drempel)','Lopen 30 min'],
       exercises:[
         {name:'Transversus abdominis (draw-in)',params:[['Reps','10'],['Hold','10 sec'],['Sets','3'],['Freq','3×/dag']],note:'"Trek navel 10% in" zonder ademinhouden. Palpatie 2 cm mediaal SIAS.',cat:'stabiliteit'},
         {name:'Multifidus isometrisch (prone)',params:[['Reps','10'],['Hold','10 sec'],['Sets','3']],note:'"Maak de spier dik zonder te bewegen." Multifidus-atrofie is aangetoond bij ACUTE lage rugpijn (Hides et al., 1994), niet bij discushernia; de overdracht is klinische redenering.',cat:'kracht'},
         {name:'Dead bug (basis)',params:[['Reps','8–10/zijde'],['Sets','3']],note:'Ruglig, 90-90. Neutrale lumbale lordose — NIET afplatten.',cat:'stabiliteit'},
         {name:'Bird dog',params:[['Reps','8–10/zijde'],['Hold','5–8 sec'],['Sets','3']],note:'Viervoet, neutrale rug. Hoge multifidus + gluteus activatie.',cat:'stabiliteit'},
         {name:'Neurodynamische tensioner',params:[['Reps','8–10'],['Sets','3'],['Indicatie','SLR > 40° pijnvrij']],note:'Knie strekken + dorsaalflexie aanhouden. Meer neuraal effect dan slider.',cat:'neuro'}],
       criteria_go:['NRS ≤ 3/10','SLR ≥ 60° (praktijkafspraak, geen brondrempel)','TA + multifidus actief','Lopen 30 min'],
       criteria_stop:['Peripheralisatie bij oefeningen → terugstap'],redflags:[]},
      {label:'Fase 3',title:'Krachttraining',weeks:'Week 6–12',
       evidence:'<strong>Belastingsopbouw — let op de richting van het bewijs.</strong> In de aangehaalde RCT bij 70 mensen met terugkerende rugpijn verbeterde de <strong>laagbelaste motorcontrolegroep</strong> méér op de gepersonaliseerde functieschaal dan de zwaarbelaste tilgroep (4,2 tegenover 2,5 punten; p &lt; 0,001), zonder verschil in pijnintensiteit of kracht (Aasa et al., 2015 — JOSPT). <em>De eerdere bewering dat progressieve krachttraining superieur is aan alleen rompstabilisatie keert die bevinding om en is geschrapt; beide benaderingen verbeterden wel binnen de groep, dus krachttraining blijft een verdedigbare klinische keuze.</em> Dat aerobe training direct pijnmodulerend werkt, is <em>klinische redenering — bij chronische pijn wisselt de richting van dat effect en treedt soms hyperalgesie op (Naugle et al., 2012).</em>',
       goals:['NRS ≤ 2/10 bij alle ADL','Deadlift met lichaamsgewicht correct','Squat 90° pijnvrij','Functionele werktaken simuleren'],
       exercises:[
         {name:'Romanian Deadlift (RDL)',params:[['Reps','10–12'],['Sets','3'],['Belasting','60–75% 1RM'],['Tempo','3-1-3']],note:'Scharnier in heup, neutrale rug. Graduele opbouw is klinische richtlijn; de belasting van 60&ndash;75% 1RM is in dit dossier niet tegen een bron gelegd. De citatie &quot;Berglund 2015&quot; is hier niet opgehaald &mdash; Berglund is tweede auteur van Aasa et al. (2015), en die trial vond net dat de LAAGbelaste groep meer verbeterde.',cat:'kracht'},
         {name:'Goblet squat / bilateraal squat',params:[['Reps','10–12'],['Sets','3'],['ROM','0–90°']],note:'Neutrale lordose behouden.',cat:'kracht'},
         {name:'Pallof press (anti-rotatie)',params:[['Reps','10–12/zijde'],['Sets','3']],note:'Hoge transversus- en oblique-activiteit.',cat:'kracht'},
         {name:"Farmer's carry",params:[['Afstand','20–40m'],['Sets','3']],note:'Functioneel tillen + dragen. Directe transfer naar werk.'},
         {name:'Aerobe training',params:[['Duur','20–40 min'],['Intensiteit','RPE 12–14'],['Freq','3–5×/week']],note:'Fietsen, zwemmen, lopen. Het pijnmodulerend effect is bij chronische pijn wisselend en kan ook toenemen (Naugle 2012).',cat:'cardio'}],
       criteria_go:['NRS ≤ 2/10','Deadlift BW technisch correct','Squat 90° pijnvrij','TSK < 37/68'],
       criteria_stop:['Uitstraling bij kracht → techniek corrigeren','TSK > 44 → fear-avoidance aanpak'],redflags:[]},
      {label:'Fase 4–5',title:'Return to Work & Preventie',weeks:'Week 8–16+',
       evidence:'<strong>Werkhervatting:</strong> de Cochrane-review van 25 trials en 4404 werknemers vindt bij ACUTE rugpijn weinig of geen verschil in verzuimduur, bij SUBACUTE rugpijn tegenstrijdig bewijs — met een mogelijke gunstige uitzondering wanneer de interventie <strong>op de werkplek</strong> plaatsvindt of een werkplekbezoek omvat (SMD -0,42; 95% BI -0,65 tot -0,18) — en bij CHRONISCHE rugpijn slechts een <strong>geringe</strong> verkorting (SMD -0,23; 95% BI -0,42 tot -0,03). Eindconclusie van de auteurs: de effectiviteit <strong>blijft onzeker</strong> (Schaafsma et al., 2013 — Cochrane). <em>De eerder vermelde verzuimreductie van 45% staat er niet in en is geschrapt.</em> <strong>Preventie:</strong> oefening mét educatie verlaagde het risico op een episode lage rugpijn (RR 0,55; 95% BI 0,41–0,74), oefening alleen RR 0,65 (0,50–0,86) (Steffens et al., 2016 — JAMA Intern Med). <em>Dat tweemaal per week krachttraining de sterkste preventieve factor zou zijn, staat daar niet in.</em>',
       goals:['RTW-plan opgesteld','Werktaken 8u tolereren','ODI < 20%','FABQ werk < 25/42','Zelfmanagement plan aangeleerd'],
       exercises:[
         {name:'Work hardening (werkgerichte training)',params:[['Vb','tillen 10–20 kg, duwen, buigen'],['Opbouw','10%/week']],note:'Simuleer werktaken. Ergonomisch advies op werkplek.',cat:'stabiliteit'},
         {name:'Tiltraining (richtlijn in dit dossier niet opgehaald)',params:[['Techniek','heupscharnieren + neutraal']],note:'Graduele blootstelling aan gevreesde belasting.',cat:'kracht'},
         {name:'Onderhoudsprogramma (2×/week)',params:[['Vb','deadlift, squat, bird dog, lopen'],['Duur','30–45 min']],note:'Minimaal maar consistent. De frequentie van 2×/week is een praktijkafspraak; Steffens et al. (2016) noemt geen frequentie.',cat:'kracht'},
         {name:'McKenzie zelfbehandeling (bij recidief)',params:[['Timing','bij eerste tekenen'],['Freq','elk uur x 10']],note:'Patiënt kent directional preference. Direct handelen.',cat:'mobiliteit'}],
       criteria_go:['ODI < 20%','FABQ werk < 25','Werkactiviteiten 8u tolereren'],
       criteria_stop:['ODI > 40% na 16 wkn → multidisciplinaire revalidatie'],
       redflags:['Nieuwe cauda equina symptomen → SPOED','Hoog chroniciteitsrisico: verhoogde FABQ, depressie → multidisciplinair (de eerder vermelde afkapwaarde 44 is in dit dossier niet onderbouwd en past niet op de werkschaal, die maximaal 42 bedraagt)']}
    ],
    refs:'Weber H, 1983 — Spine 8(2):131-40 (chirurgie versus conservatief, tien jaar opvolging) | Devillé WL et al., 2000 — Spine 25(9):1140-7 (Lasègue: sensitiviteit 0,91 maar specificiteit 0,26) | Malmivaara A et al., 1995 — N Engl J Med 332(6):351-5 (gewone activiteit bij ACUTE aspecifieke rugpijn) | Donelson R et al., 1997 — Spine 22(10):1115-22 (centralisatie als DIAGNOSTISCHE bevinding) | Hides JA et al., 2001 — Spine 26(11):E243-8 (eerste, acute episode; vergeleken met normale activiteit) | Nee RJ et al., 2012 — J Physiother 58(1):23-31 (neurale mobilisatie bij NEK- en ARMpijn) | Aasa B et al., 2015 — J Orthop Sports Phys Ther 45(2):77-85 (laagbelaste motorcontrole beter dan zwaar tillen) | Schaafsma FG et al., 2013 — Cochrane CD001822 (werkhervatting; effectiviteit onzeker) | Steffens D et al., 2016 — JAMA Intern Med 176(2):199-208 (preventie) | van der Windt DAWM et al., 2010 &mdash; Cochrane Database Syst Rev (2):CD007431 (lichamelijk onderzoek bij lumbale radiculopathie: SLR sensitiviteit 0,92 maar specificiteit 0,28) | Naugle KM et al., 2012 &mdash; J Pain 13(12):1139-50 (pijnmodulatie door oefening: bij chronische pijn wisselende richting)'},

  rc:{id:'rc',title:'Rotatorenmanchet',subtitle:'Conservatief en postoperatief protocol voor rotatorenmanchet letsel (partieel / volledig / post-OK)',color:'#f43f5e',
    phases:[
      {label:'Fase 0',title:'Diagnostiek & Classificatie',weeks:'Vóór behandelstart',
       evidence:'<strong>Klinisch onderzoek:</strong> geen enkele afzonderlijke schoudertest is diagnostisch. Gepoold voor subacromiaal impingement: Neer sensitiviteit 72% / specificiteit 60%, Hawkins-Kennedy 79% / 59%, pijnboog 53% / 76%. Combinaties van tests geven wel betere accuraatheid, maar volgens de auteurs <strong>slechts marginaal</strong> (Hegedus et al., 2012 &mdash; BJSM). <em>De eerder vermelde specificiteit van 66% voor Hawkins-Kennedy staat er niet in; die is 59%.</em> <strong>Echografie</strong> als eerste beeldvorming is <em>klinische redenering; de vergelijking met MRI is in dit dossier niet nagekeken.</em> <strong>Conservatief beleid:</strong> in een RCT bij 180 schouders met <strong>niet-traumatische supraspinatusscheuren bij oudere patiënten</strong> verschilde de Constant-score na twee jaar niet tussen kinesitherapie alleen, acromioplastiek en volledig manchetherstel (p = 0,38). <em>Belangrijke nuance die ontbrak: de scheur was na twee jaar wél significant groter zonder herstel (11,0 tegenover 4,2 mm; p &lt; 0,01) en de auteurs waarschuwen voor die progressie.</em> De trial hanteert géén grens van 1 cm en gaat niet over partiële scheuren (Kukkonen et al., 2015 &mdash; JBJS Am).',
       goals:['Identificeer aangedane pees: supraspinatus, infraspinatus, subscapularis, teres minor','Graad bepalen: tendinopathie / partieel / volledig','Behandelpad: conservatief vs chirurgisch','Scapulaire dyskinese screenen','Baseline: DASH, WORC, NRS, ROM, kracht'],
       exercises:[
         {name:'Neer impingement test',params:[['Sens','0.72 (niet onderbouwd in dit dossier)'],['Spec','0.60']],note:'Passieve elevatie schouder. Gebruik altijd in combinatie met andere testen.',cat:'test'},
         {name:'Hawkins-Kennedy test',params:[['Sens','0.79 (niet onderbouwd in dit dossier)'],['Spec','0.59']],note:'Elleboog + schouder 90°, interne rotatie. Sensitiever dan Neer.',cat:'test'},
         {name:'Empty can test (supraspinatus)',params:[['Sens','0.69 (niet onderbouwd in dit dossier)'],['Spec','0.66']],note:'Schouder 90° abductie, 30° horizontaal, interne rotatie. Weerstand op voorarm.',cat:'test'},
         {name:'External rotation lag sign (infraspinatus)',params:[['Sens','0.70 (niet onderbouwd in dit dossier)'],['Spec','0.97']],note:'Hoge specificiteit voor volledige IR-ruptuur. Arm valt terug uit maximale ER = positief.',cat:'test'},
         {name:'Lift-off test (subscapularis)',params:[['Sens','0.62 (niet onderbouwd in dit dossier)'],['Spec','0.97']],note:'Hand op lage rug, duwt weg van rug. Kan niet = subscapularis ruptuur.',cat:'test'},
         {name:'Scapulaire dyskinese screening',params:[['Test','lateral scapular slide + SICK']],note:'Asymmetrie > 1.5 cm bij 45°/90°/120° abductie = significant.',cat:'test'}],
       criteria_go:['Aangedane pees geïdentificeerd','Graad bepaald','Behandelpad gekozen','Baseline scores afgenomen'],
       criteria_stop:['Volledige ruptuur > 3 cm bij sportactieve < 55j → chirurgisch overleg','Acute traumatische avulsie → urgente chirurgische evaluatie'],
       redflags:['Axillaire zenuwuitval (deltoid parese) na schouderluxatie → spoed neurologie','Cervicale radiculopathie uitsluiten: Spurling test → cervicale pathologie','Tumorale schouder: nachtpijn + gewichtsverlies > 50j → onco-screening']},

      {label:'Fase 1',title:'Acute Fase — Pijn & ROM',weeks:'Week 0–3 (conservatief) / Week 1–4 (post-OK)',
       evidence:'<strong>Isometrische oefeningen:</strong> de aangehaalde studie onderzocht <strong>patellapees</strong>tendinopathie bij springers, niet de rotatorenmanchet (Rio et al., 2015 &mdash; BJSM). <em>Overdracht naar de schouder is klinische redenering.</em> <strong>Pendeloefeningen</strong> (Codman) en een draagdoek van 4 tot 6 weken na herstel van een volledige ruptuur zijn <em>klinische richtlijn; in dit dossier niet tegen een bron gelegd.</em>',
       goals:['NRS ≤ 4/10 in rust','Passieve ROM: elevatie ≥ 120°, ER ≥ 30°','Post-OK: sling-protocol respecteren','Scapulaire houding en bewustzijn activeren','Cervicale en thoracale mobiliteit normaal'],
       exercises:[
         {name:'Pendel-oefeningen (Codman)',params:[['Duur','3–5 min'],['Richtingen','VL, AP, cirkels'],['Freq','3–4×/dag']],note:'Voorovergebogen, arm los hangen. Geen actieve schouderspier — inertie beweegt de arm. Reduceert capsulaire druk. Veilig post-OK.',cat:'mobiliteit'},
         {name:'Passieve ROM — elevatie (tafelschuif)',params:[['ROM','0–120° progressief'],['Sets','3x10'],['Freq','2×/dag']],note:'Gezonde hand schuift aangedane arm over tafel. Geen actieve elevatie post-OK eerste 4 weken.',cat:'mobiliteit'},
         {name:'Passieve ER (stok)',params:[['ROM','naar tolerantie'],['Sets','3x10'],['Freq','2×/dag']],note:'Stok in beide handen, gezonde arm duwt aangedane in ER. Post-OK: beperkt tot chirurgale instructie.',cat:'mobiliteit'},
         {name:'Isometrische abductie (muur)',params:[['Hold','5–10 sec'],['Reps','10'],['Sets','3'],['Intensiteit','50–60% MVC']],note:'Arm 15° van lichaam, duw zijwaarts tegen muur. Pijnremmend effect.',cat:'kracht'},
         {name:'Isometrische ER + IR (neutraal)',params:[['Hold','5–10 sec'],['Reps','10'],['Sets','3']],note:'Elleboog 90°, arm langs zij. Basis RM-activering zonder beweging.',cat:'kracht'},
         {name:'Scapulaire retractie isometrisch',params:[['Hold','5 sec'],['Reps','10–15'],['Sets','3'],['Freq','3×/dag']],note:'"Kneep een potlood tussen schouderbladeren." Scapulaire stabilisatie fundament.',cat:'stabiliteit'},
         {name:'Thoracale extensie mobilisatie',params:[['Vb','thoracale extensie op rol'],['Freq','dagelijks']],note:'Thoracale hyperkyfose beperkt scapulaire upward rotation — essentieel voor schouder ROM.',cat:'mobiliteit'}],
       criteria_go:['NRS ≤ 4/10 in rust','Passieve elevatie ≥ 120°','Passieve ER ≥ 30°','Post-OK: sling-protocol afgerond','Isometrische oefeningen pijnvrij'],
       criteria_stop:['Post-OK: geen actieve beweging voor week 4–6 bij volledige ruptuurherstel','Toenemende pijn na sessie → dosering halveren'],
       redflags:['Post-OK: plots krachtverlies + pijn bij overhead → re-ruptuur → chirurg','Uitstralende pijn naar hand + tintelingen → cervicale radiculopathie']},

      {label:'Fase 2',title:'Actieve ROM & Scapulaire Controle',weeks:'Week 3–8 (cons.) / Week 4–10 (post-OK)',
       evidence:'<strong>Scapulaire stabilisatie:</strong> scapulaire dyskinese komt bij een hoog percentage van de schouderletsels voor, maar het consensusdocument stelt uitdrukkelijk dat haar rol in het ontstaan of verergeren van schouderdisfunctie <strong>niet duidelijk omschreven</strong> is — ze wordt best gezien als een mogelijke stoornis, niet als vastgestelde oorzaak (Kibler et al., 2013 &mdash; BJSM, bewijsniveau 5). <em>Het cijfer dat 68% van de schouderpatiënten serratusatrofie zou hebben, staat niet in Cools et al. (2007) en is geschrapt: dat is een EMG-studie bij 45 gezonde proefpersonen over oefenselectie.</em> Dat gesloten keten veiliger is in de vroege fase is <em>klinische redenering.</em>',
       goals:['Actieve elevatie ≥ 150° zonder schouderheffing','Actieve ER ≥ 45°','Scapulaire upward rotation normaal (30–40° bij 180°)','Serratus anterior zichtbaar actief','Full passive ROM bereikt'],
       exercises:[
         {name:'Actieve elevatie (cablepulley of zijlig)',params:[['ROM','0–150° progressief'],['Sets','3x10'],['Freq','2×/dag']],note:'Zijlig: zwaartekracht geneutraliseerd. Controleer: geen schouderheffing (upper trap dominantie).',cat:'mobiliteit'},
         {name:'Serratus anterior — wall slide',params:[['Reps','10–15'],['Sets','3'],['Positie','beide handen op muur, scapula protractie']],note:'"Duw de muur weg" met scapula. Laagste upper trap:serratus ratio van alle oefeningen.',cat:'stabiliteit'},
         {name:'Prone Y-T-W-L',params:[['Reps','10–12 elk'],['Sets','3'],['Gewicht','geen → licht (1–2 kg)']],note:'Buiklig. Y=135°, T=90°, W=ER met 90° abductie, L=ER met 90° elleboogflexie. Hoge scapulaire activiteit.',cat:'stabiliteit'},
         {name:'Wand push-up (gesloten keten)',params:[['Reps','10–15'],['Sets','3'],['Progressie','verder van muur → vloer']],note:'Hoge serratus anterior activiteit. Veilig post-OK zodra actieve beweging toegestaan.',cat:'stabiliteit'},
         {name:'IR-band oefening (elleboog 90°)',params:[['Reps','15–20'],['Sets','3'],['Band','licht → matig']],note:'Subscapularis activering. Bewuste scapulaire retractie tijdens uitvoering.',cat:'kracht'},
         {name:'ER-band oefening (elleboog 90°)',params:[['Reps','15–20'],['Sets','3'],['Band','licht → matig']],note:'Infraspinatus + teres minor. Handdoek tussen elleboog en romp voor consistente positie.',cat:'kracht'}],
       criteria_go:['Actieve elevatie ≥ 150° zonder compensatie','ER ≥ 45° actief','Scapulaire upward rotation normaal','Full passive ROM','RM-kracht LSI ≥ 60%'],
       criteria_stop:['Schouderheffing bij elevatie > 90° → upper trap dominantie aanpakken','Post-OK: agressieve stretching vermijden tot week 8'],
       redflags:[]},

      {label:'Fase 3',title:'Krachtontwikkeling RM',weeks:'Week 8–16 (cons.) / Week 10–20 (post-OK)',
       evidence:'<strong>Excentrische training:</strong> de aangehaalde studie is géén RCT maar een <strong>single-subject-opzet bij tien patiënten</strong> met subacromiaal impingement; pijn daalde bij 8 van de 10 en de Constant-score ging van 44 naar 69 punten (p = 0,008), maar de auteurs besluiten zelf dat een gerandomiseerde trial nodig is (Bernhardsson et al., 2011 &mdash; Clin Rehabil). <em>Bewijskracht dus laag.</em> <strong>Zwaar-langzame weerstand</strong> werd onderzocht aan de <strong>achillespees</strong>, niet aan de schouder (Beyer et al., 2015). <em>Ook de aanbevolen ER/IR-verhouding van 0,66 komt niet uit Cools et al. (2007); dat is klinische richtlijn.</em>',
       goals:['RM-kracht LSI ≥ 80%','ER/IR ratio ≥ 0.66','Volledige actieve ROM','Overhead activiteiten pijnvrij','DASH < 20'],
       exercises:[
         {name:'Side-lying ER (eccentrisch accent)',params:[['Reps','8–12'],['Sets','3–4'],['Tempo','2-0-4']],note:'Infraspinatus + teres minor. 4 sec eccentrisch zakken. Hoge peeskrachtadaptatie.',cat:'kracht'},
         {name:'Full can (scapular plane abductie)',params:[['Reps','10–12'],['Sets','3'],['ROM','0–120°'],['Belasting','60–75% 1RM']],note:'30° voor frontale vlak, duim omhoog. Lagere subacromiale compressie dan empty can.',cat:'kracht'},
         {name:'Prone ER (90° abductie)',params:[['Reps','10–12'],['Sets','3'],['Gewicht','licht → matig']],note:'Buiklig, schouder 90° abductie, elleboog 90°. Hoge infraspinatus + mid-trap + rhomboid activiteit.',cat:'kracht'},
         {name:'Zijwaartse abductie (scapular plane)',params:[['Reps','10–12'],['Sets','3'],['ROM','0–90°']],note:'Supraspinatus prioriteit. Stop bij 90° om subacromiale compressie te vermijden.',cat:'kracht'},
         {name:'Push-up plus',params:[['Reps','10–15'],['Sets','3'],['Progressie','knieën → tenen → instabiel']],note:'Eindfase push-up: extra protractie. Hoogste serratus anterior activiteit.',cat:'stabiliteit'},
         {name:'Diagonale PNF-patronen (D1 + D2)',params:[['Reps','10–12'],['Sets','3'],['Band','matig → zwaar']],note:'D2: flexie-abductie-ER (gooi-patroon). Functionele integratie van alle RC-componenten.',cat:'neuro'},
         {name:'Overhead press (licht)',params:[['Reps','10–12'],['Sets','3'],['ROM','90° → volledig']],note:'Pas introduceren zodra RM-kracht en scapulaire controle adequaat. Dumbbells in scapulair vlak.',cat:'kracht'}],
       criteria_go:['RM-kracht LSI ≥ 80%','ER/IR ratio ≥ 0.66','Volledige actieve ROM','DASH < 20','Overhead pijnvrij'],
       criteria_stop:['Persisterende subacromiale pijn bij overhead → scapulaire controle herbekijken','LSI stagnatie → intensiteit verhogen + isokinetisch meten'],
       redflags:[]},

      {label:'Fase 4',title:'Functioneel & Sportspecifiek',weeks:'Week 12–20+ (cons.) / Week 16–24+ (post-OK)',
       evidence:'<strong>Interval throwing program:</strong> gangbare praktijk bij bovenhandse sporters — <em>het ASMI-protocol is in dit dossier niet opgehaald.</em> <strong>Scapulaire dyskinese:</strong> de aangehaalde publicatie is een narratieve review over de SICK-scapula en de kinetische keten, zonder uitkomstgegevens (Burkhart et al., 2003 &mdash; Arthroscopy). <em>Dat correctie het herletselrisico verlaagt, kan daar niet uit worden afgeleid en is klinische redenering.</em> <strong>Terugkeer naar bovenhandse sport na 9 tot 12 maanden</strong> is een praktijkafspraak: de aangehaalde review stelt net dat er <strong>weinig wetenschappelijk bewijs</strong> bestaat om de timing van postoperatieve manchetrevalidatie te sturen en dat expert opinion daarin bepalend blijft (Van der Meijden et al., 2012 &mdash; Int J Sports Phys Ther).',
       goals:['RM-kracht LSI ≥ 90%','Sportspecifieke bewegingen zonder pijn','Overhead-sporters: interval throwing program voltooid','WOSI of WORC ≥ 80%'],
       exercises:[
         {name:'Interval Throwing Program (overhead-sporters)',params:[['Start','fase 1: 45 voet'],['Progressie','afstand + intensiteit'],['Freq','om de dag']],note:'ASMI-protocol: 45 → 60 → 90 → 120 voet. Elke fase 2× pijnvrij voor progressie.',cat:'neuro'},
         {name:'Plyometrische bal-oefeningen (med ball)',params:[['Vb','chest pass, overhead throw'],['Reps','10–15'],['Sets','3'],['Gewicht','1–3 kg']],note:'Reactieve kracht schouder-girdle. Progressie: afstand + gewicht + snelheid.',cat:'neuro'},
         {name:'Perturbatie training (onstabiele ondergrond)',params:[['Vb','push-up op BOSU, Swiss ball'],['Sets','3'],['Duur','30–45 sec']],note:'Neuromusculaire co-contractie RC. Nuttig voor contactsporten.',cat:'stabiliteit'},
         {name:'Onderhoudsprogramma (post-RTS)',params:[['Freq','2×/week'],['Vb','ER-band, prone Y, push-up plus']],note:'Levenslang onderhoud — RC-tendinopathie recidief frequent bij stop training.',cat:'kracht'}],
       criteria_go:['RM-kracht LSI ≥ 90%','Interval throwing program volledig','WORC/WOSI ≥ 80%','Pijn NRS ≤ 1/10 bij sportactiviteit'],
       criteria_stop:['Pijn bij sport > NRS 3 → fase 3 consolideren','Post-OK grote ruptuur: overhead sport uitstellen tot ≥ 9 maanden'],
       redflags:['Re-ruptuur post-OK: plots krachtverlies bij overhead → echo/MRI → chirurg','Chronische subacromiale pijn ondanks optimale kine → corticosteroïdinjectie of chirurgie herbekijken']},

      {label:'Fase 5',title:'Preventie & Langetermijn',weeks:'Mnd 4–6+',
       evidence:'<strong>Recidief bij 20 tot 40% zonder onderhoudstraining</strong> — <em>dat cijfer is in dit dossier niet tegen een bron gelegd.</em> <strong>Werkgerelateerde belasting:</strong> de aangehaalde review gaat over <strong>risicofactoren, niet over interventies</strong> — er wordt geen enkele ergonomische maatregel geëvalueerd. Wat er wel in staat: subacromiaal impingement hangt samen met krachtvereisten boven 10% MVC, tillen van meer dan 20 kg meer dan tienmaal per dag en hoge handkracht meer dan een uur per dag (OR 2,8–4,2), met repetitief werk, trillingen en werken boven schouderhoogte (OR 1,04–4,7) en met hoge psychosociale werkeisen (OR 1,5–3,19). <em>Geen van de ingesloten studies onderzocht rotatorenmanchetSCHEUREN</em> (van Rijn et al., 2010 &mdash; Scand J Work Environ Health). <strong>Slaappositie</strong> op de aangedane zijde: <em>klinische redenering, niet nagekeken.</em>',
       goals:['Zelfstandig onderhoudsprogramma 2×/week','Ergonomie werkplek geoptimaliseerd','Slaaphoudingsadvies geïntegreerd','Vroege tekenen van recidief herkennen'],
       exercises:[
         {name:'Onderhoudsprogramma RC (2×/week)',params:[['Vb','ER-band, side-lying ER, prone Y-T-W'],['Duur','20–30 min']],note:'Praktijkafspraak als minimale onderhoudsdosis; dat stoppen tot recidief leidt is klinische redenering. Integreer in sporttraining.',cat:'kracht'},
         {name:'Scapulaire controle (onderhoud)',params:[['Vb','wall slide, push-up plus'],['Freq','2×/week']],note:'Serratus anterior + lower trap. Meest vergeten onderdeel langetermijn-preventie.',cat:'stabiliteit'},
         {name:'Ergonomische werkhouding',params:[['Vb','schermhoogte, muis-positie, tilhouding']],note:'Armen niet boven schouderhoogte. Beeldscherm op ooghoogte. Max tilgewicht: 23 kg enkelvoudig.',cat:'manueel'},
         {name:'Slaaphouding advies',params:[['Advies','niet op aangedane zijde slapen']],note:'Op aangedane zijde = supraspinatus compressie + ischemie 6–8 uur/nacht. Ruglig met kussen onder arm is beste positie.',cat:'manueel'}],
       criteria_go:['Zelfstandig onderhoudsprogramma aangeleerd','Ergonomie geoptimaliseerd','Recidief-actieplan gekend'],
       criteria_stop:['Recidief zonder verbetering na 4 weken → kinesist opnieuw'],
       redflags:['Frozen shoulder ontwikkeling (stijfheid alle richtingen) → agressief aanpakken of injectie','Nieuwe axillaire neuropathie na trauma → spoed neurologie']}
    ],
    refs:'Hegedus et al. (2012) — Physical examination tests for shoulder pathology: BJSM meta-analyse. | Kukkonen et al. (2015) — Conservative vs surgical for RC tears: RCT. J Bone Joint Surg Am. | Kibler et al. (2013) — Clinical implications of scapular dyskinesis in shoulder injury. BJSM. | Cools et al. (2007) — Rehabilitation of scapular muscle balance. Am J Sports Med. | Rio et al. (2015) — Isometric contractions reduce pain in tendinopathy. BJSM. | Beyer et al. (2015) — Heavy slow resistance vs eccentric training for tendinopathy. Am J Sports Med. | Van der Meijden et al. (2012) — Rehabilitation after arthroscopic RC repair. Int J Sports Phys Ther.'},

  pt:{id:'pt',title:'Patellapees Tendinopathie',subtitle:'Conservatief revalidatieprotocol voor patellaire tendinopathie (jumper&#x27;s knee)',color:'#fb923c',
    phases:[
      {label:'Fase 0',title:'Diagnostiek & Classificatie',weeks:'Vóór behandelstart',
       evidence:'<strong>Patellapeestendinopathie is een klinische diagnose:</strong> pijn gelokaliseerd aan de onderpool van de patella en belastingsgebonden pijn die toeneemt met de eis aan de knie-extensoren. Beeldvorming kan helpen bij differentiaaldiagnostiek, maar de diagnose blijft klinisch omdat <strong>asymptomatische peesafwijkingen</strong> voorkomen bij mensen met anterieure kniepijn uit een andere bron (Malliaras et al., 2015 — JOSPT). Het <strong>continuummodel</strong> van tendinopathie is uitdrukkelijk als model ter beoordeling gepresenteerd, niet als vastgestelde pathofysiologie (Cook &amp; Purdam, 2009 — BJSM). <em>De VISA-P wordt als uitkomstmaat gebruikt, maar de aangehaalde validatiestudie betreft de VISA-A voor de ACHILLESPEES, niet de VISA-P; de drempels 80 en 90 zijn praktijkafspraken.</em> <em>De single leg decline squat als meest sensitieve test en de echografiebevindingen berusten op citaties die in dit dossier niet geverifieerd konden worden.</em> <strong>Differentiaaldiagnose:</strong> patellofemorale pijn, Osgood-Schlatter, inklemming van het vetlichaam van Hoffa, partiële peesscheur.',
       goals:['Bevestig diagnose via klinisch onderzoek (palpatie apex patella, SLDS)','VISA-P baseline afnemen','Stageclassificatie: reactief / dysrepair / degeneratief (Cook & Purdam continuum)','Belastingsniveau bepalen: provocerend volume berekenen','Differentiaaldiagnose uitsluiten','Rode vlaggen screenen'],
       exercises:[
         {name:'Single Leg Decline Squat (SLDS) — provocatietest',params:[['Helling','25°'],['ROM','60° knieflexie'],['Sens','0.78'],['Spec','0.61']],note:'Gangbare provocatietest; de diagnostische accuratesse is in dit dossier niet onderbouwd. Pijn ≥ 3/10 aan apex patella = positief. Gebruik als monitoring tool doorheen revalidatie.',cat:'test'},
         {name:'Palpatie apex patella',params:[['Positie','knie 90° flexie'],['Test','drukpijn apex']],note:'Specifieke drukpijn op apex patella bij 90° flexie. Onderscheidt van PFPS (diffuus) en Hoffa (infrapatellair).',cat:'test'},
         {name:'VISA-P score afnemen',params:[['Score','0–100'],['RTS drempel','≥ 90/100']],note:'Vragenlijst over pijn en functie; alle drempels zijn praktijkafspraken — het dossier bevat alleen de validatie van de VISA-A voor de ACHILLESPEES, niet van de VISA-P. Elke 4 weken herhalen. Minimale klinische drempelwaarde (MCID) = 13 punten.',cat:'test'}],
       criteria_go:['Diagnose patellapees tendinopathie bevestigd','VISA-P baseline afgenomen','Behandelplan opgesteld','Rode vlaggen uitgesloten'],
       criteria_stop:['Volledige peesverscheuring → spoedverwijzing chirurg','Osgood-Schlatter actief (adolescent) → aangepast protocol'],
       redflags:['Acuut pijnschot bij springen + onvermogen knie te strekken → partiële/volledige peesruptuur → spoed orthopedie','Diffuse zwelling + warmte + koorts → septische artritis/bursitis → spoed','Leeftijd < 16j + pijn tibiatuberositas → Osgood-Schlatter → röntgen','Nachtpijn + gewichtsverlies → tumoraal uitsluiten']},

      {label:'Fase 1',title:'Pijnmanagement & Isometrische Belasting',weeks:'Week 1–3',
       evidence:'<strong>Isometrische quadricepscontractie</strong> gaf bij <strong>6 volleyballers</strong> met patellapeestendinopathie een onmiddellijke pijndaling op de single-leg decline squat van 7,0 naar 0,17 (gemiddeld 6,8 op 10), die 45 minuten aanhield, met een gelijktijdige <strong>afname van de corticale inhibitie</strong> (Rio et al., 2015 — BJSM). <em>Het eerder vermelde aantal van 20 deelnemers en de 40% pijnreductie kloppen niet, en het mechanisme stond omgekeerd: de inhibitie nam af, niet toe. Zeer kleine steekproef.</em> <strong>Belastingsbeheer</strong> is de hoeksteen: het continuummodel plaatst overbelasting als drijvende kracht van reactief naar degeneratief (Cook &amp; Purdam, 2009) — <em>een model, geen vastgestelde pathofysiologie</em>. Dat compressieve krachten schadelijker zijn dan tractie en dat passieve rust contraproductief is, zijn <em>klinische redenering</em>.',
       goals:['NRS ≤ 3/10 na activiteit (24u-regel)','VISA-P ≥ baseline + 5 punten','Isometrische oefeningen pijnvrij uitvoeren','Begrip van belastingsbeheer en 24u-regel','Provocerende activiteiten aanpassen (niet stoppen)'],
       exercises:[
         {name:'Isometrische knie-extensie (leg extension machine)',params:[['Hoek','60° knieflexie'],['Hold','45 sec'],['Intensiteit','70% MVC'],['Sets','4'],['Rust','2 min'],['Freq','1× /dag of voor sport']],note:'Acute pijnreductie aangetoond in een cross-overstudie met 6 deelnemers (Rio et al., 2015); geen goudstandaard-status. Gebruik leg extension machine of weerstandsband. 60° = maximale tensiestimulus zonder compressie. Direct voor training of wedstrijd voor pijnreductie. Beoordeel pijn 24u na sessie.',cat:'kracht'},
         {name:'Isometrische wall sit',params:[['Hoek','60–70° knieflexie'],['Hold','45 sec'],['Sets','4'],['Rust','2 min'],['Freq','dagelijks']],note:'Alternatief zonder machine. Bilateraal, even gewicht op beide benen. Controleer geen anteriorpijn bij uitvoering — stop bij > NRS 4.',cat:'kracht'},
         {name:'Stationaire fiets (lage weerstand)',params:[['Duur','15–20 min'],['Weerstand','laag'],['Zadel','hoog']],note:'Hoog zadel = minder knieflexie = minder pees-compressie. Fietsen wordt in alle fasen als laagbelastend alternatief gebruikt — klinische redenering. Geen pijn tijdens activiteit.',cat:'cardio'},
         {name:'Zwemmen (crawl / rugslag)',params:[['Freq','3–4×/week']],note:'Ideale aerobe alternatieven zonder peesbelasting. GEEN schoolslag (knie-extensie kracht verhoogt peesbelasting).',cat:'cardio'},
         {name:'Patiënteducatie — tendinopathie continuum',params:[['Duur','15 min']],note:'Leg uit: reactief → dysrepair → degeneratief. Belasting is medicijn, niet de vijand. 24u-regel: pijn mag max 24u verhoogd blijven na sessie. NRS > 5 de volgende dag = dosering verlagen.',cat:'manueel'},
         {name:'24u-regel monitoring',params:[['Tool','NRS dagboek of app'],['Freq','dagelijks']],note:'Pijn na activiteit beoordelen op NRS. ≤ 3/10 volgende ochtend = dosering OK. > 5/10 = volume reduceren. Kern van load management.',cat:'manueel'}],
       criteria_go:['NRS ≤ 3/10 de ochtend na isometrische oefeningen','SLDS pijn < 4/10','Begrip belastingsbeheer aangetoond','VISA-P ≥ baseline'],
       criteria_stop:['NRS > 5/10 na oefening volgende dag → volume halveren','Pijn tijdens isometrie > 4/10 → intensiteit verlagen'],
       redflags:['Toenemende pijn ondanks conservatieve aanpak na 6 weken → echografie + orthopedisch overleg']},

      {label:'Fase 2',title:'Isotonische Krachtopbouw',weeks:'Week 3–8',
       evidence:'<strong>Zware langzame weerstandstraining bij de PATELLAPEES:</strong> in een RCT met 39 mannelijke patiënten verbeterden corticosteroidinjectie, excentrische decline squat en zware weerstandstraining alle drie na 12 weken, maar bij de opvolging na een half jaar <strong>bleef de winst behouden bij zowel de excentrische als de zware weerstandstraining</strong> en <strong>verslechterde zij na de injectie</strong>; de tevredenheid was het hoogst bij zware weerstandstraining (Kongsgaard et al., 2009 — Scand J Med Sci Sports). <em>Excentrische training is dus niet achterhaald; het verschil zit vooral in tevredenheid en therapietrouw.</em> Een vergelijkbare RCT bij de <strong>achillespees</strong> (58 patiënten) vond eveneens géén verschil in klinische uitkomst tussen beide programma&#39;s; de tevredenheid neigde na 12 weken hoger bij zware weerstandstraining (100% tegenover 80%; p = 0,052, een trend) en de therapietrouw was wél significant hoger (92% tegenover 78%) (Beyer et al., 2015 — AJSM). <em>Die studie betreft de achillespees; toepassing op de patellapees is klinische redenering.</em> De belastingsparameters (70% 1RM, tempo 3-0-3) zijn <em>praktijkafspraken</em>.',
       goals:['VISA-P ≥ 60/100','SLDS pijn ≤ 2/10','Bilateral leg press 1.5× lichaamsgewicht','Squat technisch correct met volledige ROM','NRS ≤ 3/10 na training (24u-regel)'],
       exercises:[
         {name:'Leg press bilateraal (HSR)',params:[['Reps','15 → 12 → 10 → 8 → 6'],['Sets','4'],['Tempo','3-0-3'],['Belasting','opbouw naar 80% 1RM'],['Freq','3×/week']],note:'WEEK 1–2: 15 reps licht gewicht. WEEK 3–4: 12 reps, gewicht verhogen. WEEK 5–6: 10 reps. WEEK 7–8: 8–6 reps bij 80% 1RM. Traag tempo is essentieel voor peesadaptatie (Kongsgaard et al., 2009).',cat:'kracht'},
         {name:'Squat bilateraal',params:[['Reps','8–12'],['Sets','3–4'],['Tempo','3-0-3'],['ROM','0–90°'],['Belasting','60–75% 1RM']],note:'Progressie van 45° → 60° → 90° knieflexie. Stop bij > NRS 4 aan apex patella. Geen diepe squat (> 90°) in deze fase — compressieve kracht te hoog.',cat:'kracht'},
         {name:'Excentrische decline squat',params:[['Reps','15'],['Sets','3'],['Helling','25°'],['Tempo','3 sec excentrisch'],['Belasting','lichaamsgewicht → rugzak']],note:'Alfredson-protocol aangepast. Excentrische fase (zakken) 3 sec. Concentrach omhoog komt mag met beide benen. Progressie: rugzak met gewicht toevoegen. Pijn tot NRS 4 is toegestaan.',cat:'kracht'},
         {name:'Leg press unilateraal',params:[['Reps','10–12'],['Sets','3'],['Belasting','60–70% 1RM']],note:'Progressie na bilateraal. Asymmetriecheck: aangedane zijde vs gezonde zijde. Target LSI ≥ 85%.',cat:'kracht'},
         {name:'Step-up anterieur (20 cm)',params:[['Reps','10–12'],['Sets','3']],note:'Functioneel CKC. Controleer knietracking. Progressie: hogere trede → met gewicht.',cat:'kracht'},
         {name:'Heupextensoren (RDL bilateraal)',params:[['Reps','10–12'],['Sets','3']],note:'Heup extensie kracht vermindert belasting op patellapees. RDL met neutrale rug.',cat:'kracht'}],
       criteria_go:['VISA-P ≥ 60/100','SLDS ≤ 2/10','Leg press 1.5× BW','NRS ≤ 3/10 24u na training','Squat 90° zonder > NRS 3'],
       criteria_stop:['VISA-P stijgt niet na 4 weken → intensiteit verhogen of techniek herbekijken','SLDS pijn > 4/10 → terug naar fase 1 isometrie']  ,
       redflags:[]},

      {label:'Fase 3',title:'Functionele Krachttraining & Energie-opslag',weeks:'Week 8–16',
       evidence:'<strong>Energie-opslag en -vrijgave</strong> (stretch-shortening cycle) is de kernbelasting van de pees bij springsporten, en de plyometrische opbouw verloopt van bilateraal naar unilateraal naar reactief — <em>klinische redenering; de toegeschreven publicaties zijn in dit dossier niet geverifieerd.</em> De <strong>Reactive Strength Index</strong> (spronghoogte gedeeld door contacttijd) wordt gebruikt om die capaciteit te objectiveren; <em>de drempelwaarde van 1,5 en de LSI-drempels van 85 en 90% zijn praktijkafspraken, niet met bronnen onderbouwd.</em>',
       goals:['VISA-P ≥ 75/100','Quad LSI ≥ 85%','Single leg squat 90° zonder pijn','Bilateraal springen pijnvrij','RSI ≥ 1.0 (bipodale counter movement jump)','NRS ≤ 2/10 na training'],
       exercises:[
         {name:'Bulgaarse split squat',params:[['Reps','8–10/been'],['Sets','3–4'],['Belasting','BW → dumbbells'],['Tempo','3-0-1']],note:'Hoge quad + glute belasting. Progressie: lichaamsgewicht → dumbbells → barbell. Controleer knietracking. Kernoefening voor unilaterale kracht in dit protocol — praktijkkeuze.',cat:'kracht'},
         {name:'Leg press unilateraal (zwaar)',params:[['Reps','6–8'],['Sets','4'],['Belasting','75–85% 1RM']],note:'Maximale krachtstimulus unilateraal. LSI meten: aangedaan/gezond × 100. Target ≥ 85%.',cat:'kracht'},
         {name:'Counter movement jump (CMJ) bilateraal',params:[['Sets','4–6 sprongen'],['Rust','2–3 min'],['Meting','RSI of spronghoogte']],note:'Eerste plyometrische oefening. Bilateraal, zachte landing. RSI meten met app (bijv. My Jump 2). Pijn ≤ NRS 3 tijdens én 24u na.',cat:'neuro'},
         {name:'Drop jump bilateraal',params:[['Hoogte','20 cm → 30 cm'],['Sets','3×5'],['Cue','"spring terug zo snel mogelijk"']],note:'Hogere SSC-eis dan CMJ. Korte contacttijd bewust. Progressie na pijnvrije CMJ.',cat:'neuro'},
         {name:'Unilateraal hoppen (in place)',params:[['Sets','3×10/been'],['Cue','"spring zo hoog mogelijk"']],note:'Eerste unilaterale plyometrie. Bilateraal MOET pijnvrij zijn. Stop bij > NRS 3.',cat:'neuro'},
         {name:'Rope jumping / skipping',params:[['Duur','1 min × 5'],['Rust','1 min']],note:'Progressie van bilateraal naar unilateraal skipping. Hoge SSC-eis. Introduceert sportspecifieke belasting.',cat:'cardio'}],
       criteria_go:['VISA-P ≥ 75/100','Quad LSI ≥ 85%','CMJ RSI ≥ 1.0','Unilateraal hoppen pijnvrij','NRS ≤ 2/10 24u na training'],
       criteria_stop:['RSI stijgt niet → volume verminderen, belasting verhogen','Pijn > NRS 4 bij plyometrie → terugkeer fase 2'],
       redflags:[]},

      {label:'Fase 4',title:'Sportspecifieke Training & Return to Sport',weeks:'Week 12–20+',
       evidence:'<strong>Return to sport</strong> is bij deze aandoening minder scherp gedefinieerd dan na een VKB-reconstructie. Het aangehaalde overzichtsartikel waarschuwt uitdrukkelijk voor <strong>onrealistische hersteltermijnen</strong> en voor te veel leunen op passieve behandelingen (Malliaras et al., 2015 — JOSPT); <em>concrete criteria zoals VISA-P van 90 staan er niet in en zijn praktijkafspraken.</em> <strong>Corticosteroidinjectie:</strong> in de RCT bij patellapeestendinopathie was het kortetermijneffect goed maar <strong>verslechterde de uitkomst op langere termijn</strong>, in tegenstelling tot beide oefenprogramma&#39;s (Kongsgaard et al., 2009). <em>Over PRP en over een recidiefpercentage van 20 tot 40% is in dit dossier geen bron opgehaald.</em> Onderhoud tijdens het seizoen is <em>klinische redenering</em>.',
       goals:['VISA-P ≥ 90/100','Quad LSI ≥ 90%','Single Leg Triple Hop LSI ≥ 90%','RSI ≥ 1.5 (unilateraal)','Sportspecifieke bewegingen pijnvrij','NRS ≤ 1/10 24u na wedstrijd'],
       exercises:[
         {name:'Sportspecifieke sprongtraining',params:[['Vb','approach jumps, spike jump, rebound'],['Volume','progressief 10%/week']],note:'Simuleer sportspecifieke sprong-patronen. Start met 20% van normaal trainingsvolume. Elke week 10% volume toevoegen als 24u-regel OK.',cat:'neuro'},
         {name:'Single Leg Triple Hop for Distance',params:[['Meting','3 opeenvolgende hops/been'],['LSI','≥ 90%']],note:'RTS-criterium. Meten en vergelijken beide benen. Bij LSI < 85% → nog niet klaar voor volledig trainen.',cat:'test'},
         {name:'Plyometrisch onderhoudsprogramma',params:[['Freq','2×/week'],['Vb','CMJ, drop jump, box jump'],['Volume','laag-matig']],note:'Onderhoud SSC-capaciteit ook in competitieperiode. Stoppen = snel terugval. Minimale dosis: 15–20 min, 2×/week.',cat:'neuro'},
         {name:'HSR onderhoud (in-season)',params:[['Freq','1–2×/week'],['Reps','8–10'],['Sets','3'],['Belasting','70–75% 1RM']],note:'In-season onderhoud is essentieel. Bij hoog wedstrijdvolume: 1×/week volstaat. Volledig weglaten leidt tot krachtverlies en recidief.',cat:'kracht'},
         {name:'Isometrie pre-training (bij restpijn)',params:[['Reps','4×45 sec'],['Hoek','60°'],['Timing','15–20 min voor training']],note:'Bij restpijn of hoge trainingsdag: isometrie als "pijnbuffer" voor training. Niet als vervanging van HSR. Rio et al. 2015.',cat:'kracht'}],
       criteria_go:['VISA-P ≥ 90/100','Quad LSI ≥ 90%','Triple Hop LSI ≥ 90%','Pijn ≤ NRS 1/10 dag na wedstrijd'],
       criteria_stop:['VISA-P < 80 na wedstrijd → trainingsvolume verlagen','Recidief acute pijn → terug naar fase 1–2'],
       redflags:['Acute pijnschot bij springen + krachtverlies → echografie partiële ruptuur uitsluiten','Pijn non-respons na 16+ weken optimale therapie → orthopedisch overleg: PRP, ESWT, of chirurgie']},

      {label:'Fase 5',title:'Preventie & Langetermijn',weeks:'Mnd 5+',
       evidence:'<strong>Risicofactoren — belangrijke relativering:</strong> een systematische review vond <strong>géén sterk of matig bewijs dat welke onderzochte risicofactor dan ook</strong> samenhangt met patellapeestendinopathie. Voor negen factoren was er slechts <strong>beperkt</strong> bewijs: gewicht, BMI, taille-heupverhouding, beenlengteverschil, voetbooghoogte, quadriceps- en hamstringflexibiliteit, quadricepskracht en verticale sprongprestatie (van der Worp et al., 2011 — BJSM). <em>Seizoensgebonden piekbelasting staat niet in die lijst; de bewering dat het de sterkste risicofactor is, wordt door de aangehaalde bron tegengesproken en is geschrapt.</em> <em>Ook de quadriceps-hamstringratio van 0,6, de belastingstoename van 20 tot 30% op harde ondergrond en het cijfer dat onderhoudstraining bij 70% recidief voorkomt over vijf jaar zijn niet onderbouwd — de kritische review over excentrische training bevat geen van die gegevens en besluit juist dat een specifiek protocol niet aan te bevelen valt (Visnes &amp; Bahr, 2007).</em> Periodieke screening tijdens het seizoen blijft <em>klinische redenering</em>.',
       goals:['Onderhoudsprogramma 2×/week zelfstandig','Seizoensgebonden screeningsprotocol actief','Trainingsbelasting monitoren (10%-regel)','Vroege tekenen herkennen en handelen','VISA-P ≥ 90 behouden'],
       exercises:[
         {name:'Onderhoudsprogramma (2×/week)',params:[['Vb','leg press, decline squat, CMJ'],['Duur','30 min'],['Belasting','70–75% 1RM']],note:'Minimale dosis voor peesonderhoud — praktijkafspraak. Doorgaan na het verdwijnen van de klachten is klinische redenering. Integreer in reguliere sporttraining.',cat:'kracht'},
         {name:'VISA-P screening (elke 6 weken)',params:[['Freq','elke 6 wkn in-season'],['Alarm','< 80 → aanpak']],note:'Bij daling < 80: trainingsvolume reduceren en isometrie opstarten. Vroege actie voorkomt exacerbatie.',cat:'test'},
         {name:'Pre-season krachttest',params:[['Test','leg press 1RM, single leg squat'],['Alarm','LSI < 85%']],note:'Begin van elk seizoen. Bij LSI < 85% → gerichte krachtperiode voor seizoensopstart.',cat:'test'},
         {name:'Trainingsbelasting logboek',params:[['Tool','app of notitieboek'],['Meting','sessie-RPE × duur']],note:'Session-RPE methode: intensiteit (0–10) × duur (min) = sessiebelasting. Week-tot-week stijging en acute-chronische verhouding bewaken — praktijkafspraken; de drempels van 10% en 1,5 zijn in dit dossier niet onderbouwd.',cat:'manueel'}],
       criteria_go:['VISA-P ≥ 90 behouden','Onderhoudsprogramma geïntegreerd','Recidief-actieplan gekend'],
       criteria_stop:['VISA-P < 80 → activeer fase 1–2 direct','Krachtverlies LSI < 85% → krachtcyclus herstarten'],
       redflags:['Acute ruptuur symptomen → spoed orthopedie','VISA-P progressief dalend ondanks optimale aanpak → heroverwegen diagnose of chirurgisch consult']}
    ],
    refs:'Rio E et al., 2015 — Br J Sports Med 49(19):1277-83 (isometrie bij patellapeestendinopathie; n = 6) | Kongsgaard M et al., 2009 — Scand J Med Sci Sports 19(6):790-802 (injectie, excentrisch en zwaar langzaam bij de PATELLAPEES) | Beyer R et al., 2015 — Am J Sports Med 43(7):1704-11 (zwaar langzaam versus excentrisch bij de ACHILLESPEES) | Cook JL en Purdam CR, 2009 — Br J Sports Med 43(6):409-16 (continuummodel, ter beoordeling voorgelegd) | Malliaras P et al., 2015 — J Orthop Sports Phys Ther 45(11):887-98 (diagnostiek en belastingsbeheer) | van der Worp H et al., 2011 — Br J Sports Med 45(5):446-52 (risicofactoren: geen sterk of matig bewijs) | Visnes H en Bahr R, 2007 — Br J Sports Med 41(4):217-23 (excentrische programma-inhoud) | Robinson JM et al., 2001 — Br J Sports Med 35(5):335-41 (validatie VISA-A voor de ACHILLESPEES, niet VISA-P)'},
  gmt:{id:'gmt',title:'Gluteus Med./Min. Tendinopathie',subtitle:'Greater Trochanteric Pain Syndrome — laterale heuppijn, load management, progressieve abductorkracht',color:'#14b8a6',icon:'🦴',
    phases:[
      {label:'Fase 1',title:'Pijnmanagement & Educatie',weeks:'Weken 0–2',
       evidence:'<strong>Greater Trochanteric Pain Syndrome (GTPS)</strong> wordt veroorzaakt door compressie én tensiele belasting van de gluteus medius/minimus peesinserties op de trochanter major. <strong>Compressie</strong> bij heup-adductieposities (been-over-been, liggen op aangedane zijde) is de primaire pijndriver. <strong>Isometrische oefeningen</strong> hebben een directe pijnmodulerend effect (Rio et al. 2015). Vermijd rekken van de laterale heup — dit vergroot compressie. <strong>Mellor et al. (2018)</strong> toonde aan dat educatie + oefening superieur is aan corticosteroïdinjecties op 52 weken.',
       goals:['Compressief vs. tensiel belastingsmodel uitleggen','Compressieve houdingen elimineren (been-over-been, endorotatie, liggen op aangedane zijde)','Slaapadaptatie: kussen tussen de knieën bij zijligging','Isometrische pijnmodulatie starten','Dagelijkse activiteiten handhaven binnen pijngrenzen (NRS ≤ 4)'],
       exercises:[
         {name:'Isometrische heupabductie (staand)',cat:'kracht',params:[['Weerstand','Wand / stoel'],['Duur','30–45 sec'],['Sets','3–5'],['Rust','60 sec']],note:'Sta rechtop, druk laterale knie of been tegen wand. Romp neutraal, geen heup-adductie. Pijn ≤ 3/10 NRS. Pijnmodulerend effect treedt op binnen 30–45 sec.'},
         {name:'Pelvische neutralisatie (rugligging)',cat:'stabiliteit',params:[['Reps','10–15'],['Sets','3']],note:'Rugligging, knieën gebogen. Lichte activatie transversus abdominis zonder bekkenrotatie. Voorbereiding op belasting.'},
         {name:'Isometrische heupabductie (rugligging)',cat:'kracht',params:[['Duur','20–30 sec'],['Sets','3'],['Rust','45 sec']],note:'Rugligging, benen gestrekt. Span abductoren aan alsof je benen uit elkaar wil bewegen. Geen zichtbare beweging. Pijn ≤ 3/10.'},
       ],
       criteria_go:['Pijn bij rust ≤ 2/10 NRS','Compressieve houdingen consequent vermeden','Pijneducatie begrepen en toegepast'],
       criteria_stop:['Pijn > 5/10 bij isometrische oefening → rust + verlaag intensiteit','Uitstralende pijn naar knie of lies → lumbale screening vóór voortgang'],
       redflags:['Nachtpijn zonder houdingsafhankelijkheid → uitsluiten tumor of infectie','Uitstraling L4/L5 dermatoom → lumbale hernia screenen','Zwelling + warmte + koorts → bursitis septica uitsluiten','Progressief krachtsverlies heup → neurologisch consult'],
      },
      {label:'Fase 2',title:'Isotone Opbouw',weeks:'Weken 2–8',
       evidence:'<strong>Progressief isotone heupabductietraining</strong> (Allison et al. 2016) vermindert pijn en verbetert functioneren bij GTPS. Tensiele belasting via abductie in neutrale positie is veilig en effectief. Vermijd nog steeds maximale heup-adductie/endorotatie. Start laagdrempelig in zijligging en bouw op naar belast staan. Monitor de pijnrespons 24u na elke sessie: stijging ≤ 2/10 boven uitgangsniveau is acceptabel.',
       goals:['Opbouwen isotone abductorkracht in zijligging en staand','Herstel symmetrische bekkencontrole bij stap en wandelen','Pijn stabiel of dalend tijdens én 24u na training','Terugkeer pijnvrij vlak wandelen'],
       exercises:[
         {name:'Zijliggende heupabductie',cat:'kracht',params:[['Reps','15–20'],['Sets','3'],['Rust','60 sec']],note:'Zijligging, onderste knie licht gebogen. Bovenste been opheffen tot 30–40°, neutrale heupstand (geen endorotatie). Controleer pelvische neutraliteit.'},
         {name:'Clamshell',cat:'kracht',params:[['Reps','15–20'],['Sets','3'],['Weerstand','Geen / lichte band']],note:'Zijligging, heupen 45° gebogen, knieën samen. Open bovenknie als een schelp. Voeten samen. Progressie: lichte weerstandsband.'},
         {name:'Staande heupabductie',cat:'kracht',params:[['Reps','12–15'],['Sets','3'],['Weerstand','Geen / band']],note:'Staand, been lateraal opheffen tot 30°. Romp stabiel, geen laterale rompkanteling. Progressie: weerstandsband proximaal.'},
         {name:'Gluteale brug (bilateraal)',cat:'kracht',params:[['Reps','15'],['Sets','3']],note:'Rugligging, voeten heupbreed. Bekken optillen tot neutrale heup-knie-schouder lijn. Geen hyperlordose. Activeer gluteus maximus actief.'},
         {name:'Dead Bug (heupabductie variant)',cat:'stabiliteit',params:[['Reps','8–10 p.z.'],['Sets','3']],note:'Rugligging, armen omhoog. Strek contralateraal been terwijl ipsilateraal been isometrische abductie houdt. Lumbaal contact met vloer bewaren.'},
       ],
       criteria_go:['Zijliggende abductie 15 reps zonder pijn > 3/10','Pijn 24u na training ≤ 2/10 boven uitgangswaarde','Éénbeensbalans > 10 sec zonder bekken-drop'],
       criteria_stop:['Pijn > 4/10 tijdens oefening → verlaag belasting of range','Pijnpiek > 2/10 boven uitgangswaarde > 24u → verlaag volume'],
       redflags:['Acuut pijntoename bij zeer lage belasting → avulsiefractuur trochanter major uitsluiten'],
      },
      {label:'Fase 3',title:'Krachtontwikkeling',weeks:'Weken 8–16',
       evidence:'<strong>Hoge-belasting progressieve weerstandstraining (HSR)</strong> is superieur aan stretchoefeningen voor pijnreductie én functioneel herstel bij GTPS (Mellor et al. 2018). Gecombineerde heup-extensie + abductie in functionele posities reprobeert de peesfunctie het beste. <strong>LSI ≥ 80%</strong> abductiekracht is een minimumcriterium voor progressie. Ganderton et al. (2018) bevestigt dat functionele gluteale belasting superieur is aan geen behandeling.',
       goals:['Maximale abductorkracht opbouwen (LSI ≥ 85%)','Éénbeensstabiliteit onder progressieve belasting','Pijnvrij traplopen en 30+ min wandelen','Introductie functionele patronen: squat, step-up, deadlift'],
       exercises:[
         {name:'Éénbeensstand (progressief)',cat:'stabiliteit',params:[['Duur','30–60 sec'],['Sets','3 p.z.'],['Progressie','Instabiel oppervlak']],note:'Éénbeensstand, bekken horizontaal, geen heupvalgus. Progressie: ogen dicht → instabiel oppervlak → armbewegingen toevoegen.'},
         {name:'Laterale band walk',cat:'kracht',params:[['Stappen','10–15 p.r.'],['Sets','3'],['Band','Licht → matig']],note:'Matige knieflexie, voeten parallel, stap lateraal. Romp rechtop, geen Trendelenburg. Weerstandsband proximaal knie of enkels.'},
         {name:'Step-up (excentrisch gecontroleerd)',cat:'kracht',params:[['Reps','10–12 p.z.'],['Sets','3'],['Hoogte','15–25 cm'],['Tempo','3 sec neer']],note:'Stap op plateau, excentrisch gecontroleerd naar beneden. Knietracking boven 2e teen bewaken. Progressie: hoogte en gewicht verhogen.'},
         {name:'Squat (heupbreedte)',cat:'kracht',params:[['Reps','10–12'],['Sets','3'],['Diepte','90°']],note:'Voeten heupbreed, tenen licht uitgedraaid. Controleer laterale kniestabiliteit en bekkencontrole. Progressie: goblet squat → barbell squat.'},
         {name:'Romanian Deadlift (bilateraal)',cat:'kracht',params:[['Reps','10'],['Sets','3'],['Gewicht','Licht → matig']],note:'Heupscharnierbeweging, neutrale wervelkolom, lichte knieflexie. Voel rek hamstrings. Progressie naar éénbeens RDL in fase 4.'},
         {name:'Gluteale brug (éénbeens)',cat:'kracht',params:[['Reps','10–12 p.z.'],['Sets','3']],note:'Rugligging, één voet op grond. Bekken optillen en horizontaal controleren. Geen bekkenrotatie naar vrije zijde.'},
       ],
       criteria_go:['Éénbeensstand > 30 sec zonder bekken-drop','Step-up 15 reps zonder pijn > 3/10','LSI abductiekracht ≥ 80%','Pijnvrij wandelen ≥ 30 min'],
       criteria_stop:['Pijn > 4/10 bij squat → controleer kniepositie, verlaag diepte','Bekken-drop bij éénbeensstand → terug naar bilaterale stabilisatie'],
       redflags:['Laterale kniepijn bij step-up → differentiaal ITB-syndroom (Noble compression test)'],
      },
      {label:'Fase 4',title:'Functionele Terugkeer & RTS',weeks:'Weken 16–24+',
       evidence:'<strong>Functionele terugkeer</strong> vereist progressieve blootstelling aan sport- en beroepsspecifieke activiteiten met monitoring van pijnrespons. <strong>LSI ≥ 90%</strong> abductiekracht is de RTS-drempel (Grimaldi & Fearon 2015). Plyometrische abductorbelasting en loophervatting zijn veilig na voldoende krachtherstel. <strong>Zelfmanagement</strong> (flare-up protocol) is essentieel voor langetermijnresultaten.',
       goals:['Pijnvrije terugkeer naar sport of beroepsactiviteit','LSI abductiekracht ≥ 90%','Pijnvrij hardlopen ≥ 30 min (indien van toepassing)','Flare-up zelfmanagementplan gekend en geoefend'],
       exercises:[
         {name:'Éénbeens Romanian Deadlift',cat:'kracht',params:[['Reps','8–10 p.z.'],['Sets','3–4'],['Gewicht','Matig → zwaar']],note:'Balans op één been, romp kantelen terwijl vrij been posteriorwaarts strekt. Bekken neutraal, lichte knieflexie standbeen. Progressie: gewicht toevoegen.'},
         {name:'Zijwaartse uitval (lateral lunge)',cat:'kracht',params:[['Reps','10 p.z.'],['Sets','3']],note:'Stap breed lateraal, buig knie terwijl ander been gestrekt blijft. Romp licht voorover. Progressie: gewicht toevoegen, explosieve terugkeer.'},
         {name:'Step-down (excentrisch)',cat:'kracht',params:[['Reps','10–15 p.z.'],['Sets','3'],['Tempo','3 sec neer']],note:'Sta op rand plateau, laat contralateraal been gecontroleerd zakken. Knietracking ipsilateraal controleren. Geen valgus.'},
         {name:'Laterale hop (gecontroleerd)',cat:'cardio',params:[['Reps','8–10 p.z.'],['Sets','3']],note:'Hop lateraal, land op één been met zachte knieflexie. Valgus vermijden bij landing. Alleen na pijnvrije krachtontwikkeling (fase 3).'},
         {name:'Looptraining (GMT progressief)',cat:'cardio',params:[['Start','Wandel-loop intervals'],['Progressie','10% per week']],note:'Begin op vlakke ondergrond. Progressie naar heuvels. Monitor 24u pijnrespons. Stop/verlaag indien NRS > 3/10 na 24u.'},
       ],
       criteria_go:['LSI abductiekracht ≥ 90%','Pijn ≤ 1/10 bij alle dagelijkse activiteiten','Single-leg squat zonder Trendelenburg','Hardlopen 30 min pijnvrij (indien van toepassing)'],
       criteria_stop:['Pijntoename > 2/10 > 24u na sportactiviteit → volume verlagen, niet stoppen','Flare-up tekenen → fase 3 oefeningen hervatten'],
       redflags:['Pijn bij rust refractair aan conservatief beleid → MRI overwegen (partiele ruptuur)','Nieuwe liespijn bij belasting → coxartrose uitsluiten'],
      },
    ],
    refs:'Mellor R et al. (2018) — Education plus exercise versus corticosteroid injection versus wait and see for GTPS. BMJ. | Allison K et al. (2016) — Hip abductor muscle weakness in greater trochanteric pain syndrome. Med Sci Sports Exerc. | Ganderton C et al. (2018) — Gluteal loading versus sham exercises for GTPS in postmenopausal women. J Womens Health. | Rio E et al. (2015) — Isometric exercise reduces pain in tendinopathy. BJSM. | Grimaldi A & Fearon A (2015) — Gluteal tendinopathy: pathomechanics and clinical management. J Orthop Sports Phys Ther.'},
  at:{id:'at',title:'Achillespees Tendinopathie',subtitle:'Conservatief revalidatieprotocol voor midportion en insertionele achillespees tendinopathie',color:'#e879f9',
    phases:[
      {label:'Fase 0',title:'Diagnostiek & Classificatie',weeks:'Vóór behandelstart',
       evidence:'<strong>Achillespeestendinopathie is een klinische diagnose</strong> — <em>klinische redenering; de toegeschreven citatie uit 2007 is in dit dossier niet geverifieerd.</em> <strong>Twee subtypes met verschillend beleid:</strong> midportion (2–6 cm boven de insertie) en insertioneel (aan de calcaneus). Dat onderscheid is belangrijk: bij <strong>insertionele</strong> tendinopathie had slechts <strong>32%</strong> een goed klinisch resultaat met het klassieke excentrische regime waarbij tot in volledige dorsaalflexie belast wordt, tegenover <strong>67%</strong> tevreden met een regime <strong>zonder</strong> belasting in dorsaalflexie (Jonsson et al., 2008 — BJSM; pilotstudie, 27 patiënten, korte opvolging). De <strong>VISA-A</strong> is gevalideerd voor de achillespees (Robinson et al., 2001 — BJSM); <em>de auteurs vermelden dat de vragenlijst niet diagnostisch bedoeld is en dat onbekend is of de score de prognose voorspelt — de drempels 80 en 90 zijn praktijkafspraken.</em> <em>De sensitiviteitswaarden 0,73–0,78 voor de arc sign en de Royal London Hospital-test zijn in dit dossier niet onderbouwd.</em> <strong>Differentiaaldiagnose:</strong> partiële ruptuur, Haglund-deformiteit, posterieure impingement, tendinopathie van de flexor hallucis longus.',
       goals:['Subtype bepalen: midportion vs insertioneel','VISA-A baseline afnemen','Provocatietesten uitvoeren: arc sign, Royal London, palpatie','Risicofactoren identificeren: training load, schoeisel, looptechniek','Rode vlaggen uitsluiten','Baseline functionele test: single leg heel raise'],
       exercises:[
         {name:'Arc sign',params:[['Sens','0.73 (niet onderbouwd in dit dossier)'],['Spec','0.88'],['Subtype','midportion']],note:'Patiënt in ruglig. Palpeer pijnlijke zone bij neutrale positie, dan bij dorsaal- en plantairflexie. Bij midportion tendinopathie beweegt de pijnzone mee met de pees — distinguishing van peritendinitis.',cat:'test'},
         {name:'Royal London Hospital test',params:[['Sens','0.78 (niet onderbouwd in dit dossier)'],['Spec','0.80'],['Subtype','midportion']],note:'Palpeer meest pijnlijke punt in neutrale stand. Dorsaalflexie passief toepassen: bij tendinopathie VERMINDERT pijn (pees "rekt weg" van palperende vinger). Bij partiële ruptuur blijft pijn bij dorsaalflexie.',cat:'test'},
         {name:'Palpatie achillespees',params:[['Subtype','beide'],['Lokalisatie','2–6 cm vs insertie']],note:'Midportion: maximum drukpijn 2–6 cm boven insertie. Insertioneel: maximum drukpijn OP of net boven calcaneus-insertie. Differentiatie cruciaal voor behandelkeuze.',cat:'test'},
         {name:'VISA-A score afnemen',params:[['Score','0–100'],['RTS drempel','≥ 90/100'],['MCID','10 punten']],note:'Vragenlijst over pijn en functie, gevalideerd voor de achillespees (Robinson et al., 2001). Elke 4 weken herhalen. De gehanteerde MCID van 10 punten is een praktijkafspraak en staat niet in die validatiestudie. Gratis downloadbaar via VISA scoreformulier.',cat:'test'},
         {name:'Single leg heel raise test (20 reps)',params:[['Test','maximale reps SL heel raise'],['Norm','> 25 reps gezonde zijde']],note:'Functionele baseline. Tel maximale reps tot uitputting of pijn. Vergelijk beide zijden (LSI). < 20 reps = significante zwakte.',cat:'test'}],
       criteria_go:['Subtype bepaald (midportion of insertioneel)','VISA-A baseline afgenomen','Behandelplan op maat (midportion vs insertioneel)','Rode vlaggen uitgesloten'],
       criteria_stop:['Vermoeden partiële/volledige ruptuur → echografie + orthopedisch chirurg','Thompson test positief (volledige ruptuur) → SPOED chirurgie'],
       redflags:['Thompson test positief (kalf knijpen → geen plantairflexie) → volledige achillespeesruptuur → SPOED orthopedie','Acute pijnschot bij sporten + "trap gevoel" → ruptuur tot bewijs van tegendeel','Diffuse zwelling + warmte + koorts → infectie/bursitis → spoed','Leeftijd < 18j + pijn calcaneus → apofysitis (Sever) → röntgen','Fluorochinolonen-gebruik in voorgeschiedenis → verhoogd ruptuurrisico, informeer behandelend arts']},

      {label:'Fase 1',title:'Pijnmanagement & Isometrische Belasting',weeks:'Week 1–3',
       evidence:'<strong>Isometrische belasting</strong> voor onmiddellijke pijnverlichting: de aangehaalde trial vergeleek isometrische met isotone contracties en vond significant meer onmiddellijke analgesie bij isometrie (p &lt; 0,002) — <em>maar die studie betrof 20 springatleten met PATELLApeestendinopathie, niet de achillespees</em> (Rio et al., 2017 — Clin J Sport Med). Toepassing op de kuit is <em>klinische redenering</em>. <strong>Bij het insertionele subtype</strong> wordt belasting tot in dorsaalflexie vermeden; dat is onderbouwd door het verschil van 32% tegenover 67% hierboven (Jonsson et al., 2008). Dat rekken de compressie vergroot, en het gebruik van een nachtspalk of hielverhoging van 5 tot 10 mm, zijn <em>klinische redenering — geen van deze is in dit dossier onderbouwd.</em>',
       goals:['NRS ≤ 3/10 de ochtend na activiteit (24u-regel)','VISA-A ≥ baseline','Isometrische oefeningen correct uitvoeren','Begrip van subtype-specifiek beleid','Schoeisel/hielverhoging geoptimaliseerd'],
       exercises:[
         {name:'Isometrische kuitpers (standing calf raise hold)',params:[['Positie','staand, knie gestrekt'],['Hold','45 sec'],['Intensiteit','70–80% MVC'],['Sets','4'],['Rust','2 min'],['Freq','dagelijks']],note:'Bilateraal, vlakke ondergrond. Ga zo hoog mogelijk op tenen, houd positie 45 sec. Bij midportion: mag volledige ROM. Bij insertioneel: GEEN hak lager dan neutrale positie. Directe pijnreductie. Beoordeel pijn volgende ochtend.',cat:'kracht'},
         {name:'Isometrische kuitpers (zittend — soleus)',params:[['Positie','zittend, knie 90°'],['Hold','45 sec'],['Sets','4'],['Rust','2 min']],note:'Soleus-focus: knie gebogen isoleert soleus van gastrocnemius. De soleus levert een substantieel deel van de plantairflexiekracht bij lopen — klinische redenering; het aandeel van 50% is geen bronwaarde. Bilateraal begin, unilateraal progressie.',cat:'kracht'},
         {name:'Hielverhoging (5–10 mm)',params:[['Type','hielkussentje in schoen'],['Indicatie','beide subtypes']],note:'Laagdrempelige maatregel — het effect op de peesbelasting is klinische redenering, niet onderbouwd in dit dossier. Bedoeld om de achillespeesbelasting te vermindering dorsaalflexie-eis. Beide schoenen aanpassen om bekkenscheefstand te vermijden. Dragen ook buiten revalidatie.',cat:'manueel'},
         {name:'Stationaire fiets',params:[['Duur','15–20 min'],['Weerstand','laag'],['Zadel','hoog']],note:'Veilige aerobe alternatieven. Hoog zadel = minder dorsaalflexie = minder achillespeesbelasting. GEEN loopband in deze fase.',cat:'cardio'},
         {name:'Zwemmen (crawl / rugslag)',params:[['Freq','3–4×/week']],note:'Ideaal in acute fase. Geen peesbelasting. GEEN schoolslag (plantairflexie kracht door waterresistentie).',cat:'cardio'},
         {name:'Patiënteducatie — subtype-specifiek beleid',params:[['Duur','15 min']],note:'MIDPORTION: excentrische training is backbone. INSERTIONEEL: geen excentrisch zakken onder neutraal, geen stretching, geen barvoets lopen, geen hak lager dan bal van de voet. Dit verschil is cruciaal en meest gemaakte fout.',cat:'manueel'}],
       criteria_go:['NRS ≤ 3/10 ochtend na isometrische training','VISA-A ≥ baseline','Single leg heel raise: ≥ 10 reps zonder pijn > 4/10'],
       criteria_stop:['NRS > 5/10 volgende ochtend → volume halveren','Toename zwelling of warmte → rust + herbeoordeel'],
       redflags:['Verslechtering ondanks 3 weken optimale belasting → echografie herhalen: partiële ruptuur?']},

      {label:'Fase 2',title:'Isotonische Krachtopbouw — Gastrocnemius + Soleus',weeks:'Week 3–10',
       evidence:'Het <strong>excentrische protocol van Alfredson</strong> (3 × 15 herhalingen tweemaal daags, 12 weken) is de best onderbouwde oefenvorm bij midportion-tendinopathie: een systematische review van 14 trials vond er <strong>sterk bewijs</strong> voor, met gestrekte én gebogen knie, traag tempo en belastingverhoging zodra de oefening pijnvrij is (Habets &amp; van Cingel, 2015 — Scand J Med Sci Sports). <em>Dezelfde review kon door heterogeniteit géén definitieve conclusie trekken over de meest effectieve parameters.</em> De oorspronkelijke studie was <strong>geen RCT</strong> maar een prospectieve serie van 15 recreatieve sporters; alle 15 keerden na 12 weken terug naar hun niveau van vóór het letsel, terwijl in de conventioneel behandelde vergelijkingsgroep géén enkele patiënt slaagde (Alfredson et al., 1998 — AJSM). <em>Het eerder vermelde succespercentage van 82% komt daar niet in voor.</em> <strong>Zware langzame weerstandstraining</strong> gaf in een RCT bij 58 patiënten met achillespeestendinopathie dezelfde klinische uitkomst als excentrisch, met significant hogere therapietrouw (92% tegenover 78%); de hogere tevredenheid was een trend (Beyer et al., 2015 — AJSM). <strong>Insertioneel subtype:</strong> géén hak zakken onder neutraal (Jonsson et al., 2008).',
       goals:['VISA-A ≥ 60/100','Single leg heel raise ≥ 20 reps aangedane zijde','NRS ≤ 3/10 24u na training','Gastrocnemius én soleus kracht hersteld','Lopen 20 min pijnvrij (einde fase)'],
       exercises:[
         {name:'Excentrisch heel drop — MIDPORTION (Alfredson)',params:[['Reps','15'],['Sets','3'],['Freq','2×/dag'],['Duur','12 weken'],['Knie','gestrekt (gastrocn.) + gebogen (soleus)']],note:'ENKEL BIJ MIDPORTION. Ga omhoog op beide benen, zak excentrisch af op één been TOT ONDER NEUTRAAL (hak zakt voorbij traprand). Pijn is toegestaan (NRS ≤ 5) — "train door de pijn". Gebruik traptrede of step. Knie gebogen: isoleert soleus. NRS > 7 = te veel.',cat:'kracht'},
         {name:'Heel raise op vlakke ondergrond — INSERTIONEEL',params:[['Reps','12–15'],['Sets','3'],['Tempo','3-1-3'],['Freq','3×/week']],note:'ENKEL BIJ INSERTIONEEL. Geen hak zakken ONDER neutraal — dit vergroot compressie op insertie. Concentrisch omhoog + excentrisch TERUG NAAR NEUTRAAL. Vlakke ondergrond, nooit traptrede. Bilateraal → unilateraal progressie.',cat:'kracht'},
         {name:'HSR heel raise (seated — soleus)',params:[['Reps','15 → 12 → 10 → 8'],['Sets','3–4'],['Belasting','BW → gewicht op knieën'],['Tempo','3-0-3'],['Freq','3×/week']],note:'Beide subtypes. Zittend, knie 90°. Soleus onmisbaar (50% kracht bij lopen). Progressie: bodyweight → dumbbell op knie → calf raise machine. Traag tempo essentieel.',cat:'kracht'},
         {name:'Bilateral heel raise progressie',params:[['Reps','20–25'],['Sets','3'],['Progressie','beide → één been']],note:'Volume opbouwen. Target: 25 pijnvrije reps bilateraal voor overgang naar unilateraal. Monitoring: NRS volgende ochtend.',cat:'kracht'},
         {name:'Wandelen (progressieve afstand)',params:[['Start','20 min vlak'],['Opbouw','10% per week'],['Ondergrond','vlak, goed schoeisel']],note:'Functionele progressie. Geen loopschema nog. 24u-regel strikt toepassen. Bergop wandelen: meer soleus, minder achillespeeslengte-verandering = veiliger.',cat:'cardio'}],
       criteria_go:['VISA-A ≥ 60/100','Single leg heel raise ≥ 20 reps','NRS ≤ 3/10 24u na training','Lopen 20 min pijnvrij'],
       criteria_stop:['VISA-A stijgt niet na 4 weken → intensiteit verhogen','Insertioneel: pijn bij hak zakken → stop onmiddellijk, herbekijk techniek'],
       redflags:[]},

      {label:'Fase 3',title:'Functionele Kracht & Loophervatting',weeks:'Week 8–16',
       evidence:'<strong>Doorgaan met lopen en springen onder pijnmonitoring is veilig:</strong> in een RCT met 38 patiënten waren er géén significante verschillen met een groep die die activiteiten zes weken staakte, en beide groepen verbeterden significant (VISA-A-S van 57 naar 85 respectievelijk 91 na twaalf maanden) (Silbernagel et al., 2007 — AJSM). <em>De studie toont dus dat doorgaan veilig is, niet dat het beter of noodzakelijk is.</em> De <strong>24-uursregel</strong> als leidraad is <em>klinische redenering</em>. <em>De uitspraken over voorvoetlanding, stapfrequentie, schoenzooldrop en het achtvoudige van de wandelbelasting zijn in dit dossier niet onderbouwd en zijn als bronclaim geschrapt; zij blijven bruikbaar als klinische overweging.</em>',
       goals:['VISA-A ≥ 75/100','Single leg heel raise ≥ 25 reps','Continu lopen 20–30 min pijnvrij','Looptechniek geoptimaliseerd (stapfrequentie)','NRS ≤ 3/10 24u na loopsessie'],
       exercises:[
         {name:'Loop-wandel protocol (run-walk)',params:[['Start','1 min lopen / 2 min wandelen × 8'],['Progressie','wekelijks looptijd +1 min'],['Freq','3×/week, dag rust ertussen']],note:'Week 1: 8× (1 min jog / 2 min walk). Week 2: 8× (2/2). Week 3: 8× (3/2). Enz. Pijncriterium: NRS ≤ 4 tijdens lopen + ≤ 3/10 volgende ochtend. Zachte ondergrond start.',cat:'cardio'},
         {name:'Stapfrequentie verhogen (+5–10%)',params:[['Tool','metronoom-app'],['Baseline','meten eigen cadans'],['Target','+5–10% van baseline']],note:'Hogere cadans geeft een kortere staplengte; het effect op de achillespeesbelasting is klinische redenering. Werk met een relatieve verhoging vanaf de gemeten uitgangscadans, geleidelijk over enkele weken — praktijkafspraak; de eerder aangehaalde publicatie kon niet geverifieerd worden en de vaste stapfrequenties zijn geen bronwaarden.',cat:'neuro'},
         {name:'Single leg heel raise (unilateraal, zwaar)',params:[['Reps','12–15'],['Sets','3'],['Progressie','rugzak met gewicht'],['Freq','3×/week']],note:'Kracht opbouwen naar norm: 25+ reps lichaamsgewicht, of ≥ 5 reps met 50% BW extra. LSI aangedaan vs gezond ≥ 90% voor RTS.',cat:'kracht'},
         {name:'Squat + calf raise combinatie',params:[['Reps','10–12'],['Sets','3']],note:'Functionele integratie: squat descend + calf raise bij opstaan. Simuleert loopbeweging. Knieflexie + enkeldorsaalflexie gecombineerd.',cat:'kracht'},
         {name:'Lateral bounds (bilateraal)',params:[['Sets','3×8'],['Cue','"zachte landing op voorvoet"']],note:'Eerste energie-opslag oefening. Bilateraal. Progressie naar unilateraal pas na pijnvrije bilaterale uitvoering. Achillespees absorbeert energie bij landing.',cat:'neuro'}],
       criteria_go:['VISA-A ≥ 75/100','Single leg heel raise ≥ 25 reps pijnvrij','Continu lopen 20–30 min NRS ≤ 3','Enkel LSI kracht ≥ 85%'],
       criteria_stop:['NRS > 3/10 ochtend na loopsessie → vorige week herhalen','Ochtendpijn + stijfheid > 20 min → trainingsvolume reduceren'],
       redflags:[]},

      {label:'Fase 4',title:'Sportspecifieke Training & Return to Sport',weeks:'Week 14–24+',
       evidence:'<strong>Return to sport</strong> berust hier op <em>praktijkafspraken</em>: VISA-A, krachtsymmetrie, pijnvrij sporten en een aantal eenbenige hielheffingen. <em>De toegeschreven publicatie uit 2020 is een scoping review over weerstandsoefeningen na een achillespees-RUPTUUR, niet een consensusverklaring over terugkeer naar sport bij tendinopathie; die citatie is geschrapt.</em> <em>Ook het recidiefpercentage van 20 tot 30%, de belastingsveelvouden en de tijdslijnen van 12 tot 24 weken zijn niet onderbouwd.</em> <strong>Fluorochinolonen</strong> navragen in de anamnese wegens het beschreven ruptuurrisico blijft aangewezen — <em>klinische redenering; de risicoverhouding is hier niet geverifieerd.</em>',
       goals:['VISA-A ≥ 90/100','Enkel kracht LSI ≥ 90%','Single leg heel raise ≥ 25 reps aangedane zijde','Springen en richtingsverandering pijnvrij','Volledige sportspecifieke training hervatten','NRS ≤ 1/10 24u na wedstrijd'],
       exercises:[
         {name:'Unilateraal hoppen (voor/achter, zij/zij)',params:[['Sets','3×10/been'],['Progressie','afstand en snelheid verhogen']],note:'Unilaterale energie-opslag. Zachte landing op voorvoet. Progressie: kleine hops → grotere hops → reactieve hops. Pijn ≤ NRS 3.',cat:'neuro'},
         {name:'Sprint progressie',params:[['Start','60% intensiteit × 10'],['Opbouw','10% per week'],['Freq','2×/week']],note:'Week 1: 10× 40m aan 60%. Week 2: 70%. Week 3: 80%. Week 4: 90–100%. Geen sprintwerk vóór pijnvrij lopen 30 min.',cat:'cardio'},
         {name:'Richtingsveranderingen (agility)',params:[['Vb','T-test, 5-10-5, hoek-hops'],['Progressie','snelheid verhogen']],note:'Introduceert zij-waartse peesbelas ting. Achillespees ook belast bij laterale bewegingen. Starten op lage snelheid.',cat:'neuro'},
         {name:'Sportspecifieke drills',params:[['Vb','hardlopen: intervaltraining, tempolopen'],['Vb','bal: springen, schieten, richtingsveranderingen']],note:'Sport-specifiek volume gradueel opbouwen. 10%-regel per week. 24u-regel strikt.',cat:'neuro'},
         {name:'Isometrie pre-training (bij restpijn)',params:[['Protocol','4×45 sec bij 70% MVC'],['Timing','15–20 min voor sport']],note:'Bij restpijn of een zware trainingsdag: isometrie als pijnbuffer. De onderliggende trial betreft de PATELLAPEES (Rio et al., 2017); toepassing op de kuit is klinische redenering.',cat:'kracht'}],
       criteria_go:['VISA-A ≥ 90/100','Enkel LSI ≥ 90%','Single leg heel raise ≥ 25 reps','Volledig trainen NRS ≤ 1/10 24u later'],
       criteria_stop:['VISA-A < 80 na training → volume reduceren','Acute toename pijn bij sprint → terug naar fase 3'],
       redflags:['Acute "knal" bij sprinten → Thompson test → ruptuur uitsluiten','Chronische non-respons (> 6 mnd optimale therapie) → orthopedisch overleg: ESWT, PRP, chirurgie']},

      {label:'Fase 5',title:'Preventie & Langetermijn',weeks:'Mnd 5+',
       evidence:'<strong>Onderhoudstraining</strong> op lange termijn is <em>klinische redenering; het cijfer dat 90% symptoomvrij blijft op vijf jaar is niet onderbouwd en is geschrapt.</em> <strong>Belangrijke relativering over het beloop:</strong> in een narratieve review over chronische achillestendinose wordt gesteld dat ongeveer <strong>25%</strong> van de patiënten uiteindelijk geopereerd wordt, en dat het bij niet-chirurgische behandeling aan wetenschappelijke onderbouwing ontbreekt voor de meeste voorgestelde regimes (Alfredson &amp; Lorentzon, 2000 — Sports Med). Die review meldt ook dat de aandoening het vaakst voorkomt bij recreatieve <strong>mannelijke</strong> lopers tussen 35 en 45 jaar, maar eveneens bij mensen met een zittende leefstijl. <em>De belastingsveelvouden, de rol van seizoensgebonden volumestijging als sterkste risicofactor en de toegeschreven citatie uit 1996 zijn niet onderbouwd.</em>',
       goals:['Onderhoudsprogramma 2–3×/week zelfstandig','Trainingsbelasting monitoren (10%-regel, acute:chronische ratio)','Schoeisel regelmatig controleren en vervangen','VISA-A ≥ 90 behouden','Vroege tekenen herkennen en handelen'],
       exercises:[
         {name:'Onderhoudsprogramma (2–3×/week)',params:[['Vb','heel raises, HSR calf, isometrie'],['Duur','20–25 min']],note:'Minimale dosis: 3×15 heel raises + 3×8 HSR unilateraal. Stoppen bij asymptomatisch = meest gemaakte fout. Integreer na warming-up in reguliere training.',cat:'kracht'},
         {name:'VISA-A monitoring (elke 6–8 weken)',params:[['Alarm','< 80 → actie']],note:'Bij daling onder 80: direct isometrie opstarten + trainingsvolume −20%. Vroege actie voorkomt terugval naar acute fase.',cat:'test'},
         {name:'Schoeiselcheck',params:[['Interval','elke 3–6 maanden'],['Grens','600–800 km loopafstand']],note:'Een versleten middenzool verhoogt vermoedelijk de belasting — klinische redenering; het kilometerbereik is een praktijkafspraak, geen bronwaarde. Gebruik loopapp om km bij te houden. Hak-teen drop ≥ 8mm aanbevolen bij tendinopathie-voorgeschiedenis.',cat:'manueel'},
         {name:'Trainingsbelasting logboek',params:[['Methode','sessie-RPE × duur'],['Ratio','acuut:chronisch < 1.5']],note:'Acute:chronische belastingsratio bewaken. Week-tot-week stijging max 10%. Bij ratio > 1.5 = verhoogd blessurerisico. Apps: Training Peaks, HRV4Training.',cat:'manueel'}],
       criteria_go:['VISA-A ≥ 90 behouden','Onderhoudsprogramma geïntegreerd','Schoeisel up-to-date','Recidief-actieplan gekend'],
       criteria_stop:['VISA-A < 80 → isometrie + volume reduceren direct','Krachtverlies LSI < 85% → krachtcyclus herstarten'],
       redflags:['Acute ruptuur symptomen → spoed','VISA-A progressief dalend ondanks optimale aanpak → orthopedisch overleg','Nieuw fluorochinolonen-gebruik → informeer arts over tendinopathie-voorgeschiedenis']}
    ],
    refs:'Habets B en van Cingel REH, 2015 — Scand J Med Sci Sports 25(1):3-15 (systematische review excentrische protocollen; sterk bewijs voor het Alfredson-schema) | Alfredson H et al., 1998 — Am J Sports Med 26(3):360-6 (oorspronkelijke serie, 15 sporters, GEEN RCT) | Beyer R et al., 2015 — Am J Sports Med 43(7):1704-11 (zwaar langzaam versus excentrisch bij de ACHILLESPEES) | Jonsson P et al., 2008 — Br J Sports Med 42(9):746-9 (insertioneel: 32% tegenover 67%, pilotstudie) | Silbernagel KG et al., 2007 — Am J Sports Med 35(6):897-906 (doorgaan onder pijnmonitoring is veilig) | Robinson JM et al., 2001 — Br J Sports Med 35(5):335-41 (validatie VISA-A) | Alfredson H en Lorentzon R, 2000 — Sports Med 29(2):135-46 (pathologie en beloop; circa 25% wordt geopereerd) | Rio E et al., 2017 — Clin J Sport Med 27(3):253-259 (isometrie versus isotoon bij de PATELLAPEES, hier als extrapolatie gebruikt)'},
  bureau:{id:'bureau',title:'Bureauhouding & Nekklachten',subtitle:'Revalidatie en preventie van werkgerelateerde nek-, schouder- en rugklachten (trapezius syndroom, cervicogene hoofdpijn, thoracale kyfose, acute lumbago)',color:'#60a5fa',
    phases:[
      {label:'Fase 0',title:'Diagnostiek & Subclassificatie',weeks:'Eerste contact',
       evidence:'<strong>Werkgerelateerde nekklachten</strong> komen veel voor bij beeldschermwerk — <em>de rangschikking na lage rugpijn is in dit dossier niet geverifieerd.</em> <strong>Vier subgroepen</strong> vragen een eigen aanpak: (1) trapezius myofasciaal syndroom, (2) cervicogene hoofdpijn, (3) thoracale hyperkyfose met scapulaire dyskinese, (4) acute lumbago bij bureauwerkers — <em>klinische indeling</em>. Bij <strong>cervicogene hoofdpijn</strong> is wél onderbouwd dat er meer voorwaartse hoofdhouding is en minder kracht én uithouding van de bovenste cervicale flexoren dan bij vrouwen zonder hoofdpijn (Watson &amp; Trott, 1993 — Cephalalgia; 60 vrouwen). <em>Het cijfer dat 96% van de chronische nekpijnpatiënten zwakke diepe nekflexoren zou hebben, is in dit dossier niet onderbouwd en is geschrapt.</em> Dat psychosociale factoren sterkere voorspellers zijn van chroniciteit dan biomechanische, is <em>klinische redenering; de toegeschreven publicatie is hier niet geverifieerd.</em>',
       goals:['Subgroep bepalen: trapezius / cervicogene HFK / thoracaal / lumbaal','Neurologisch screenen: uitstraling, tintelingen, kracht','Werkplek-anamnese: uren aan bureau, beeldschermhoogte, stoelinstelling','Baseline: NDI (Neck Disability Index) of Oswestry','Psychosociale screening: werk-stress, slaap, catastroferen','Rode vlaggen uitsluiten'],
       exercises:[
         {name:'Cranio-cervicale flexietest (CCFT)',params:[['Druk','22 → 26 → 30 mmHg'],['Tool','drukmanchet of stabilizer']],note:'Gangbare test voor de diepe nekflexoren; de toegeschreven publicatie is in dit dossier niet geverifieerd. Ruglig, sensormanchet onder nek (22 mmHg baseline). Licht knikken: neus naar plafond. Doel: 10 sec houden op 26 mmHg zonder compensatie van de superficiële flexoren; onder 24 mmHg als teken van zwakte. <em>Alle drukdrempels zijn praktijkafspraken — de onderliggende publicatie is in dit dossier niet geverifieerd.</em>',cat:'test'},
         {name:'Cervicale ROM meting',params:[['Vlakken','flexie, extensie, rotatie, lateraalflexie'],['Norm','rotatie ≥ 60–70°, flexie ≥ 50°']],note:'Goniometer of CROM-device. Asymmetrie rotatie > 10° = significant. Pijn bij extensie + rotatie = facetpathologie overwegen.',cat:'test'},
         {name:'Spurling test (cervicale radiculopathie)',params:[['Sens','0.50 (niet onderbouwd in dit dossier)'],['Spec','0.86']],note:'Compressie + ipsilaterale lateraalflexie + extensie. Positief bij uitstraling arm. Hoge specificiteit: positief = radiculopathie waarschijnlijk. Negatief sluit niet uit.',cat:'test'},
         {name:'NDI (Neck Disability Index)',params:[['Score','0–50'],['Matig','15–24'],['Ernstig','≥ 25']],note:'10 items over dagelijkse activiteiten. De gehanteerde MCID van 7/50 punten is een praktijkafspraak; in dit dossier niet met een bron onderbouwd. Elke 4 weken herhalen. Gratis beschikbaar.',cat:'test'},
         {name:'Werkplek-analyse',params:[['Check','scherm, stoel, muis, toetsenbord, licht']],note:'Scherm: bovenkant op ooghoogte. Stoel: voeten plat, knieën 90°, lendenkussen. Muis: elleboog 90°, dicht bij lichaam. Telefoon: NOOIT klem tussen oor en schouder.',cat:'manueel'}],
       criteria_go:['Subgroep bepaald','Rode vlaggen uitgesloten','NDI baseline afgenomen','Werkplek-anamnese voltooid'],
       criteria_stop:['Myelopathie tekenen (Hoffmann, Babinski, spasticiteit) → spoedverwijzing neurologie','Wervelkanaalvernauwing symptomen → MRI + neurochirurg'],
       redflags:['Cervicale myelopathie: klumsy hands, loopstoornissen, Hoffmann positief → spoed neurologie','Ernstige nekpijn + koorts + meningisme → meningitis → SPOED','Nekpijn na trauma (val, whiplash) + neurologische uitval → RX/CT cervicaal','Plotse ergste hoofdpijn ooit + nekstijfheid → subarachnoïdale bloeding → SPOED','Kloppende hoofdpijn + visuele stoornissen + leeftijd > 50j → arteriitis temporalis → spoed']},

      {label:'Fase 1',title:'Pijnmanagement & Ergonomie',weeks:'Week 1–3',
       evidence:'<strong>Warmte:</strong> de aangehaalde Cochrane-review gaat over <strong>lage rugpijn</strong>, niet over nekpijn, en besluit dat er onvoldoende bewijs is over koude en <strong>tegenstrijdig bewijs</strong> over het verschil tussen warmte en koude (French et al., 2006). <em>De claim dat warmte effectiever is dan koude bij nekpijn is dus dubbel ongedekt en geschrapt; warmte blijft inzetbaar als symptoomverlichting op klinische gronden.</em> <strong>Manuele therapie en oefentherapie</strong> bij cervicogene hoofdpijn: beide verlaagden na 12 maanden significant de hoofdpijnfrequentie en -intensiteit, maar de <strong>combinatie was NIET significant superieur</strong> aan elk afzonderlijk — wel had 10% meer patiënten er baat bij (Jull et al., 2002 — Spine; 200 deelnemers). <strong>Ergonomie:</strong> in een Cochrane-review van 13 trials verlaagde alleen armsteun mét een alternatieve muis de incidentie van nek- en schouderklachten (RR 0,52; 95% BI 0,27–0,99); voor de overige ergonomische maatregelen was er laag tot zeer laag bewijs van géén effect (Hoe et al., 2012). <em>Die review vergelijkt ergonomie niet met oefentherapie.</em> <strong>Extra pauzes</strong> verminderden bij data-invoerders het ongemak en de vermoeide ogen zonder productiviteitsverlies; <em>rekoefeningen tijdens die pauzes gaven géén significant effect, en het eerder vermelde percentage van 38% staat niet in de bron</em> (Galinsky et al., 2007).',
       goals:['NRS ≤ 3/10 in rust','Werkplek geoptimaliseerd (scherm, stoel, muis)','Begrip van belastings- en herstelcyclus','Bewegingspauze-routine geïntegreerd (interval is praktijkafspraak)','Eerste activering diepe nekflexoren'],
       exercises:[
         {name:'Chin tuck (cervicale retractie)',params:[['Reps','10–15'],['Hold','5–10 sec'],['Sets','3'],['Freq','3–4×/dag, ook aan bureau']],note:'PRIORITEITSOEFENING fase 1. Zittend of staand: dubbele kin maken zonder knik nek te buigen. Gevoel: lichte rek achteraan nek. Gericht op het corrigeren van de voorwaartse hoofdhouding — klinische redenering. Kan ook liggend met rol onder nek.',cat:'kracht'},
         {name:'Scapulaire retractie (shoulder blade squeeze)',params:[['Reps','10–15'],['Hold','5 sec'],['Sets','3'],['Freq','3×/dag']],note:'Zittend: schouders naar achter en omlaag trekken — "kneep een potlood tussen je schouderbladeren". Deactiveert upper trap, activeert lower trap + rhomboids. Correctie van protractiehouding.',cat:'kracht'},
         {name:'Cervicale lateraalflexie stretch (passief)',params:[['Zijde','pijnlijke zijde eerst'],['Hold','30 sec'],['Sets','2–3'],['Freq','3×/dag']],note:'Zittend, hand op hoofd, laat hoofd zijwaarts zakken. Andere hand achter stoel. Voelt rek in trapezius/SCM. NIET trekken — zwaartekracht volstaat. Combineer met diepe ademhaling.',cat:'mobiliteit'},
         {name:'Thoracale extensie op schuimrol',params:[['Positie','rol dwars onder thoracaal'],['Reps','10–15 extensies'],['Freq','2×/dag']],note:'Schuimrol dwars onder midden-thorax (T4–T8). Armen gekruist voor borst of achter hoofd. Laat borstkas zakken in extensie. In dit protocol een kernoefening voor de bureauhouding — praktijkkeuze, niet met een bron onderbouwd. Segmenteel doorwerken: rol iets opschuiven.',cat:'mobiliteit'},
         {name:'Bewegingspauze-routine (30-30-30)',params:[['Timing','elke 30 min (praktijkafspraak)'],['Duur','30 sec'],['Inhoud','3 oefeningen × 10 reps']],note:'Alarm instellen elke 30 min. Routine: chin tuck × 10 + schouderrol × 10 + thoracale extensie × 10. Totaal 90 sec. Gebruik als gewoonte-anker (bij koffiemoment, vergadering enz.).',cat:'manueel'},
         {name:'Warmteapplicatie nek/trapezius',params:[['Duur','15–20 min'],['Freq','1–2×/dag bij acute pijn']],note:'Warmtekussen of warm bad. Reduceert spierspasme. Combineer met zachte cervicale rotatie tijdens warmte. NIET bij acute ontsteking met warmte/roodheid.',cat:'manueel'}],
       criteria_go:['NRS ≤ 3/10','Werkplek geoptimaliseerd','Bewegingspauze-routine aangeleerd','Chin tuck correct uitvoerbaar'],
       criteria_stop:['Uitstraling arm + tinteling → Spurling herhalen, overweeg beeldvorming','Toename pijn na mobilisatie → manuele therapie aanpassen'],
       redflags:[]},

      {label:'Fase 2',title:'Mobiliteit & Diepe Spieractivatie',weeks:'Week 2–6',
       evidence:'<strong>Training van de diepe nekflexoren</strong> via cranio-cervicale flexie is de kern van dit protocol — <em>klinische redenering; de toegeschreven trial uit 2009 is in dit dossier niet geverifieerd.</em> <strong>Thoracale mobilisatie</strong> bij nekpijn is eveneens <em>klinische redenering; de toegeschreven trial is hier niet geverifieerd.</em> <strong>Scapulaire oefenselectie:</strong> een EMG-studie bij <strong>45 gezonde proefpersonen</strong> vergeleek 12 gangbare oefeningen en vond zijlig exorotatie, zijlig anteflexie, buiklig horizontale abductie met exorotatie en buiklig extensie het gunstigst voor de verhouding tussen bovenste en onderste trapezius (Cools et al., 2007 — AJSM). <em>Er is in die studie geen populatie van bureauwerkers met nekpijn en geen percentage van 78%; dat cijfer is geschrapt.</em> <strong>Oog-hoofdkoppeling:</strong> bij 60 patiënten met nekpijn verbeterde een propriocepsprogramma de nauwkeurigheid van het terugvinden van de hoofdpositie meer dan in de controlegroep (2,0 tegenover 0 graden; p = 0,005), met ook winst op pijn en bewegingsuitslag (Revel et al., 1994).',
       goals:['Cervicale ROM volledig herstel (rotatie ≥ 60°)','DNF kracht: CCFT ≥ 26 mmHg 10 sec','Thoracale extensie subjectief verbeterd','Scapulaire retractie automatisch bij zitten','NDI verbetering ≥ 7 punten tov baseline'],
       exercises:[
         {name:'Cranio-cervicale flexie progressie (DNF)',params:[['Druk','22 → 24 → 26 → 28 mmHg'],['Hold','10 sec'],['Reps','10'],['Sets','3'],['Freq','dagelijks']],note:'Opbouw over 4–6 weken. Week 1–2: 24 mmHg. Week 3–4: 26 mmHg. Week 5–6: 28 mmHg. Controle: geen activatie SCM of anterior scaleen. Voelbaar met vingers aan de zijkanten van de nek.',cat:'kracht'},
         {name:'Cervicale rotatie mobilisatie (actief)',params:[['ROM','vol bereik'],['Reps','10/zijde'],['Sets','3'],['Freq','2×/dag']],note:'Staand of zittend. Traag, vol bereik. Progressie: met theraband weerstand in eindpositie houden (isometrisch). Geen pijn > NRS 4.',cat:'mobiliteit'},
         {name:'Thoracale rotatie (zittend op stoel)',params:[['Reps','10/zijde'],['Sets','3']],note:'Zit op stoel, voeten op grond. Armen gekruist voor borst. Roteer thorax maximaal naar links en rechts. Mobiel segment T4–T8. Hoofd volgt mee. Combineer met uitademing bij rotatie.',cat:'mobiliteit'},
         {name:'Wall angel (muur-engel)',params:[['Reps','10–12'],['Sets','3'],['Progressie','rug aan muur → vrij staand']],note:'Rug en hoofd tegen muur. Armen in W-positie (90° elleboog). Schuif armen omhoog naar Y-positie. Behoud contact rug, ellebogen en polsen met muur. Activeert lower trap + serratus + DNF simultaan.',cat:'kracht'},
         {name:'Lower trapezius activatie (prone Y)',params:[['Reps','10–12'],['Sets','3'],['Gewicht','geen → 0.5–1 kg']],note:'Buiklig. Armen in Y-positie (135°), duimen omhoog. Hef armen van tafel — GEEN schouderheffing. Traag omhoog, trager terug. Fundament scapulaire stabilisatie.',cat:'kracht'},
         {name:'Cervicale isometrie alle richtingen',params:[['Richtingen','flex, ext, rot L/R, lat flex L/R'],['Hold','5–10 sec'],['Reps','5–8/richting'],['Sets','2']],note:'Hand tegen hoofd, hoofd drukt tegen hand (geen beweging). Alle 6 richtingen. Bouwt diepe stabilisatorkracht op zonder de bewegingsuitslag te provoceren. Start licht, rond 20–30% van de maximale contractie — praktijkafspraak.',cat:'kracht'}],
       criteria_go:['Cervicale rotatie ≥ 60° bilateraal','CCFT ≥ 26 mmHg','NDI verbetering ≥ 7 punten','Thoracale extensie verbeterd','Wall angel zonder pijn'],
       criteria_stop:['Cervicale ROM verbetert niet na 4 weken → manuele therapie intensiveren','Aanhoudende hoofdpijn → cervicogene vs spanningshoofdpijn differentiëren'],
       redflags:[]},

      {label:'Fase 3',title:'Krachtontwikkeling & Globale Stabilisatie',weeks:'Week 4–10',
       evidence:'<strong>Nek- en schoudergerichte training:</strong> in een trial van <strong>één jaar</strong> bij 549 kantoormedewerkers daalde bij wie nekpijn had de pijnintensiteit van 5,0 naar <strong>3,4</strong> met specifieke weerstandstraining en van 5,0 naar <strong>3,6</strong> met <strong>algemene</strong> fysieke training; de groep met enkel gezondheidsadvies veranderde niet (Andersen et al., 2008 — MSSE). <em>Specifieke training was dus niet superieur aan algemene fitness — beide werkten. De eerder vermelde 75% pijnreductie, de duur van zes weken en het aantal van 198 deelnemers kloppen geen van drie en zijn gecorrigeerd.</em> Let op de therapietrouw: in de <em>specifieke-trainingsgroep</em> daalde de regelmatige deelname over het jaar van 54% naar 35%; in de groep met algemene training van 31% naar 28% en in de referentiegroep van 16% naar 9%. <strong>Weerstandstraining van de bovenrug</strong> en aandacht voor het <strong>hip hinge-patroon</strong> zijn <em>klinische redenering</em>. Goede uithouding van de rugextensoren kon in een cohort van 928 personen een eerste episode rugpijn voorkomen <strong>bij mannen</strong> (Biering-Sørensen, 1984).',
       goals:['Nekrotatie kracht LSI ≥ 90%','Lateral raise zonder schouderheffing','Deadlift-patroon technisch correct','Core stabiliteit: plank ≥ 60 sec','NDI < 15 (minimale beperking)','Zelfstandig thuisoefenschema'],
       exercises:[
         {name:'Band pull-apart',params:[['Reps','15–20'],['Sets','3'],['Band','licht → matig'],['Freq','3×/week']],note:'Armen gestrekt voor, band op schouderhoogte. Trek band uit elkaar tot armen wijd. Schouders omlaag en achter. Hoge lower trap + posterior deltoid + rhomboid activatie. In dit protocol een kernoefening voor thuis — praktijkkeuze, niet met een bron onderbouwd.',cat:'kracht'},
         {name:'Face pull (kabelstation of band)',params:[['Reps','12–15'],['Sets','3'],['Ellebogen','hoog']],note:'Handen naar gezicht trekken met ellebogen hoog. Externe rotatie in eindpositie. Onderdeel van het weerstandsprogramma; in de trial van Andersen (2008) daalde de nekpijn met specifieke én met algemene training. Een effect van deze oefening afzonderlijk is niet onderzocht. Alternatief: band aan deur op gezichtshoogte.',cat:'kracht'},
         {name:'Romanian Deadlift (heup scharnier)',params:[['Reps','10–12'],['Sets','3'],['Belasting','licht begin']],note:'Heup scharnier aanleren: neutraal rug, gewicht zakken langs benen. Herstelt heup-dominante beweegstrategie. Vermindert lumbale compensatie. Start met stok om bewegingspatroon aan te leren.',cat:'kracht'},
         {name:'Plank (progressief)',params:[['Duur','20 sec → 60 sec → 90 sec'],['Sets','3'],['Progressie','knieën → tenen → instabiel']],note:'Neutrale wervelkolom (niet doorzakken of te hoog). Target: 60 sec correct voor onderhoud. Progressie: één arm/been optillen. Kernstabilisatie voor lumbale klachten.',cat:'stabiliteit'},
         {name:'Side plank',params:[['Duur','20–40 sec/zijde'],['Sets','3']],note:'Anti-lateraalflexie stabilisatie; een verband met laterale nekklachten is klinische redenering, geen bron in dit dossier. Progressie: heup omhoog/omlaag pulseren.',cat:'stabiliteit'},
         {name:'Nekrotatie met weerstand (band)',params:[['Reps','10–12/zijde'],['Sets','3'],['Band','licht']],note:'Zittend, band om hoofd via voorhoofd (of hand). Roteer tegen weerstand. Functionele nekrotatorkracht. Bilateraal gelijke kracht = doel.',cat:'kracht'},
         {name:'Doorway stretch (pectoralis minor)',params:[['Hold','30 sec'],['Sets','3'],['Positie','armen in 90°/W in deuropening']],note:'Stretch tight pectoralis minor — verkorting bij bureauhouding trekt schouders naar voor. Gecombineerd met scapulaire retractie gericht op de protractiehouding — klinische redenering.',cat:'mobiliteit'}],
       criteria_go:['Plank ≥ 60 sec','Nekrotatie kracht symmetrisch','RDL-patroon correct','NDI < 15','Band pull-apart 20 reps zonder compensatie'],
       criteria_stop:['Lumbale pijn verergert bij RDL → heupflexibiliteitsprobleem eerst aanpakken','Hoofdpijn neemt toe bij nekrotatie-training → load verminderen'],
       redflags:[]},

      {label:'Fase 4',title:'Werkplek-specifiek & Langetermijn Preventie',weeks:'Week 8+',
       evidence:'<strong>Tegenstrijdige evidentie over conservatieve behandeling:</strong> de Cochrane-review van 44 studies en 6580 deelnemers vond <strong>zeer laag bewijs dat oefeningen de pijn niet verbeterden</strong> ten opzichte van geen behandeling (SMD -0,52; 95% BI -1,08 tot 0,03), en specifieke oefeningen gaven op korte termijn zelfs méér pijn dan algemene oefeningen (SMD 0,45; 95% BI 0,14–0,75). Ergonomische interventies verlaagden de pijn niet op korte maar wél op lange termijn (SMD -0,76; 95% BI -1,35 tot -0,16). Voor gedragsmatige en overige interventies was er geen consistent effect (Verhagen et al., 2013 — Cochrane). <em>De eerdere claim dat een multimodale aanpak significant superieur is, staat niet in die review en is geschrapt; dit protocol berust dus in belangrijke mate op klinische redenering, niet op sterk bewijs.</em> <strong>Stressreductie, micro-pauzes en slaaphouding</strong> blijven zinvolle aandachtspunten — <em>klinische redenering; de percentages van 42% en 55% zijn niet onderbouwd en zijn geschrapt.</em>',
       goals:['Zelfstandig onderhoudsprogramma 3×/week','Bewegingspauze-routine geïntegreerd als gewoonte','Werkplek volledig geoptimaliseerd','Slaaphouding en kussenkeuze geoptimaliseerd','Stressmanagement strategie actief','NDI < 10 (geen/minimale beperking)'],
       exercises:[
         {name:'Onderhoudsprogramma bureauwerker (3×/week)',params:[['Duur','20–25 min'],['Vb','band pull-apart, face pull, wall angel, plank, DNF']],note:'Minimale effectieve dosis. Integreer in bestaande routine (voor werk, in lunchpauze). Praktijkafspraak: 20 min 3×/week als haalbare onderhoudsdosis. Let op: in de specifieke-trainingsgroep van Andersen (2008) daalde de regelmatige deelname over een jaar van 54% naar 35%.',cat:'kracht'},
         {name:'20-20-20 regel (ogen + nek)',params:[['Timing','elke 20 min'],['Actie','20 sec kijken op 20 voet (6m) + 5 chin tucks']],note:'Combineer oogrusten met nekontlasting. App instellen op telefoon. Gewoonte koppelen aan bestaand gedrag (koffiedrinken, na elke vergadering).',cat:'manueel'},
         {name:'Cervicale zelfmobilisatie (onderhoud)',params:[['Vb','rotatie, lateraalflexie, thoracale ext'],['Duur','5 min'],['Freq','dagelijks voor werk']],note:'Ochtend-routine van 5 min. Thoracale extensie op rol + rotatie + chin tuck. Als tandenpoetsen: dagelijks, automatisch.',cat:'mobiliteit'},
         {name:'Ergonomische checklist (maandelijks)',params:[['Items','stoel, scherm, muis, licht, telefoon']],note:'Maandelijks 5-punten check: (1) Scherm bovenkant op ooghoogte. (2) Stoel: voeten plat, knie 90°, lendenkussen. (3) Muis dicht bij toetsenbord. (4) Telefoon: headset of speaker. (5) Laptop: altijd extern scherm of verhoger.',cat:'manueel'},
         {name:'Yoga/pilates nekfocus (optioneel)',params:[['Freq','1–2×/week'],['Vb','cat-cow, child pose, thread the needle']],note:'Aanvullend op krachtoefeningen. Cat-cow: thoracale mobiliteit. Thread the needle: thoracale rotatie. Child pose: lumbale tractie. Laagdrempelig — de veronderstelde hoge therapietrouw is niet onderbouwd.',cat:'mobiliteit'},
         {name:'Stressmanagement (ademhaling + ontspanning)',params:[['Tech','4-7-8 ademhaling, progressieve relaxatie'],['Freq','dagelijks 5 min']],note:'4 sec inademen, 7 sec vasthouden, 8 sec uitademen. Bedoeld om de spierspanning te verlagen — klinische redenering, geen bron in dit dossier. Psychosociale factoren meewegen bij non-responders is klinische redenering; de rangschikking als sterkste voorspeller is in dit dossier niet onderbouwd.',cat:'manueel'}],
       criteria_go:['NDI < 10','Zelfstandig onderhoud geïntegreerd','Ergonomie volledig geoptimaliseerd','Recidief-actieplan gekend'],
       criteria_stop:['NDI blijft > 20 na 3 maanden → biopsychosociaal model herbekijken, psycholoog?','Hoofdpijn blijft → neuroloog'],
       redflags:['Nieuwe neurologische symptomen (tinteling, krachtsverlies arm) → MRI cervicaal','Progressieve nekpijn + gewichtsverlies + nachtzweten → oncologische screening']}
    ],
    refs:'Jull G et al., 2002 — Spine 27(17):1835-43 (manuele therapie en oefentherapie bij cervicogene hoofdpijn; combinatie niet superieur) | Andersen LL et al., 2008 — Med Sci Sports Exerc 40(6):983-90 (nek- en schoudertraining over één jaar; specifiek niet superieur aan algemeen) | Verhagen AP et al., 2013 — Cochrane CD008742 (conservatieve interventies; zeer laag bewijs voor oefeningen) | Hoe VCW et al., 2012 — Cochrane CD008570 (ergonomie ter preventie) | Galinsky T et al., 2007 — Am J Ind Med 50(7):519-27 (extra pauzes) | Cools AM et al., 2007 — Am J Sports Med 35(10):1744-51 (scapulaoefeningen bij gezonde proefpersonen) | Revel M et al., 1994 — Arch Phys Med Rehabil 75(8):895-9 (oog-hoofdkoppeling) | Watson DH en Trott PH, 1993 — Cephalalgia 13(4):272-84 (hoofdhouding en cervicale flexoren) | French SD et al., 2006 — Cochrane CD004750 (warmte en koude; betreft LAGE RUGPIJN, niet nekpijn)'},
  enkel:{id:'enkel',title:'Enkeldistorsie',subtitle:'Laterale enkeldistorsie — graad I, II en III (ATFL/CFL/PTFL) + chronische instabiliteit',color:'#f59e0b',
    phases:[
      {label:'Fase 0',title:'Diagnostiek & Graadclassificatie',weeks:'Dag 0–3 na letsel',
       evidence:'<strong>Laterale enkeldistorsie</strong> is de meest voorkomende sportblessure — 85% van alle enkeldistorsies, met ATFL-betrokkenheid in 70–85% van de gevallen (Doherty et al., 2014). <strong>Graadclassificatie</strong> stuurt het beleid volledig: Graad I (rek ATFL, geen laxiteit), Graad II (partiële ruptuur ATFL + evt CFL, lichte laxiteit), Graad III (volledige ruptuur ATFL + CFL, evt PTFL, duidelijke laxiteit). <strong>Ottawa Ankle Rules</strong>: botfractuur uitsluiten vóór start revalidatie — sensitiviteit 96–99% (Bachmann et al., 2003 BMJ). <strong>Anterior Drawer Test (ADT)</strong>: > 3 mm asymmetrie = ATFL-ruptuur, sensitiviteit 0.71, specificiteit 0.33 acuut (pijn/zwelling beperkt accuraatheid — herhaal na 4–7 dagen). <strong>Talar Tilt Test (TTT)</strong>: > 10° = CFL-betrokkenheid. <strong>PEACE protocol</strong> (Dubois & Esculier, BJSM 2019) vervangt RICE/PRICE voor acute fase: Protection, Elevation, Avoid anti-inflammatories, Compression, Education. <strong>Syndesmose letsel</strong> (high ankle sprain) aparte entiteit: Squeeze test + External Rotation Stress test positief — langere revalidatie (6–12 wkn).',
       goals:['Ottawa Ankle Rules toepassen — fractuur uitsluiten','Graad I/II/III classificeren via ADT en TTT (herhaal na 4–7d bij zwelling)','Syndesmose screenen: Squeeze test + ER stress test','Zwelling meten: omtrek op 1cm boven laterale malleolus','FAAM (Foot and Ankle Ability Measure) baseline afnemen','PEACE-principes toepassen vanaf moment 0','Crutch-gebruik beslissen: Graad III → krukken 2–5 dagen'],
       exercises:[
         {name:'Ottawa Ankle Rules screenen',params:[['Sens','96–99%'],['Test','palpatie malleoli + naviculare + 5e metatarsaal']],note:'Drukpijn op posterieure rand/tip laterale of mediale malleolus? Pijn over naviculare of basis 5e metatarsaal? Onvermogen belasting? → Rx verplicht. Negatief = geen fractuur → start revalidatie.',cat:'test'},
         {name:'Anterior Drawer Test',params:[['Timing','acuut + herhaling dag 4–7'],['Grens','>3mm asymmetrie = ATFL']],note:'Knie 90° flexie, enkel 20° plantairflexie. Stabiliseer tibia, trek calcaneus anterieur. Positief = ATFL-ruptuur (graad II–III). Let op: acuut beperkt door pijn en zwelling — herhaal na 4–7 dagen voor betrouwbare uitslag.',cat:'test'},
         {name:'Talar Tilt Test',params:[['Grens','>10° asymmetrie = CFL'],['Subtype','graad III bij positief']],note:'Calcaneus in inversie kantelen met enkel in neutrale positie. Vergelijk met gezonde zijde. > 5° = matig, > 10° = ernstig. CFL-betrokkenheid wijst op Graad II–III letsel.',cat:'test'},
         {name:'Squeeze test (syndesmose)',params:[['Positie','knie 90°, comprimeer fibula/tibia op kniehoogte'],['Positief','pijn distaal = syndesmose letsel']],note:'Comprimeer fibula en tibia ter hoogte van midden-kuit. Pijn ter hoogte van distale tibiofibulaire syndesmose = positief → high ankle sprain → Rx + orthopedisch overleg. Langere revalidatie (6–12 wkn).',cat:'test'},
         {name:'FAAM score (baseline)',params:[['Score','0–100%'],['RTS drempel','≥ 90% sport-subscore']],note:'Foot and Ankle Ability Measure: 21 items dagelijkse activiteiten + 8 items sport. Goudstandaard functionele uitkomstmaat voor enkeldistorsie. Elke 2–3 weken herhalen. MCID = 8 punten.',cat:'test'},
         {name:'PEACE toepassen (dag 0–3)',params:[['P','bescherming 1–3 dagen'],['E','elevatie > hart'],['A','geen NSAIDs/ijs'],['C','compressieverband'],['E','educatie actieve aanpak']],note:'P: beweging beperken 1–3 dagen, GEEN volledige immobilisatie. E: been omhoog > harthoogte. A: geen anti-inflammatoire medicatie — vermindert weefselherstel (Dubois & Esculier 2019). C: elastisch verband of brace. E: leg uit dat actieve aanpak sneller herstelt dan rust.',cat:'manueel'}],
       criteria_go:['Ottawa Rules negatief of Rx normaal','Graad bepaald','Syndesmose uitgesloten of doorverwezen','FAAM baseline afgenomen','PEACE gestart'],
       criteria_stop:['Ottawa Rules positief → Rx verplicht','Syndesmose positief → orthopedisch overleg','Graad III + instabiliteit + topsport → chirurgisch consult overwegen'],
       redflags:['Fractuur op Rx → spoed orthopedie / gips','Positieve squeeze test + ER stress test → syndesmose letsel → Rx tibia/fibula + orthopedie','Peroneus-tendon-luxatie (klap lateraal, voelbare snap bij beweging) → chirurgisch overleg','Osteochondraal defect vermoeden (disproportionele pijn, crepitus) → MRI + orthopedie','Perifere zenuwbeschadiging (n. peroneus superficialis): tinteling dorsum voet → neurologisch onderzoek']},

      {label:'Fase 1',title:'Acute Fase — PEACE + Vroege Mobilisatie',weeks:'Dag 0–7 (G-I: 3–5d · G-II: 5–7d · G-III: 7–10d)',
       evidence:'<strong>Vroege functionele behandeling</strong> is superieur aan immobilisatie voor Graad I en II — kortere RTS, betere proprioceptie, hogere patiënttevredenheid (Kerkhoffs et al., Cochrane 2002). <strong>PEACE & LOVE</strong> vervangt RICE definitief: ijs en NSAIDs onderdrukken inflammatie die noodzakelijk is voor weefselhermodellering (Dubois & Esculier, BJSM 2019). <strong>Graad III beleid</strong>: conservatief is gelijkwaardig aan chirurgie bij de meeste patiënten (Kerkhoffs et al., 2007) — functionele brace + vroege mobilisatie. <strong>Graad III uitzondering</strong>: jonge topsporter + instabiliteit + specifieke sport → chirurgisch overleg (Brostrom-Gould). <strong>Compressie</strong>: reduceert zwelling en verbetert kwaliteit van leven — semi-rigide brace of tapelast beter dan alleen bandage (Vuurberg et al., BJSM 2018). <strong>Gewichtsdragen</strong>: zo snel mogelijk, pijngeleiding.',
       goals:['Zwelling en pijn onder controle (NRS ≤ 4/10 bij lopen)','Gewichtsdragen: G-I dag 1–2 · G-II dag 2–3 · G-III dag 3–5 (met brace/krukken)','Actieve ROM beginnen: dorsaalflexie + plantairflexie pijnvrij','Proprioceptie: eerste activering','Brace/taping gekozen en aangebracht','Patiënteducatie LOVE-principes'],
       exercises:[
         {name:'Enkelpomp (actieve dorsaal-/plantairflexie)',params:[['Reps','15–20'],['Freq','elk uur'],['Positie','zittend of ruglig']],note:'Start dag 1–2. Verhoogt lymfedrainage, voorkomt stijfheid, activeert kuitspierpomp. Geen pijn > NRS 4. Graad III: start voorzichtig binnen pijnvrij bereik.',cat:'mobiliteit'},
         {name:'Alphabet oefening (actieve ROM)',params:[['Duur','2–3 min'],['Freq','3–4x/dag']],note:'Letters A t/m Z schrijven met de grote teen. Mobiliseert enkel in alle richtingen zonder belasting. Makkelijk zelfstandig thuis. Pijnvrij uitvoeren.',cat:'mobiliteit'},
         {name:'Geassisteerde dorsiflexie (handdoekstretch)',params:[['Hold','30 sec'],['Sets','3'],['Freq','2–3x/dag']],note:'Handdoek om voorvoet, licht trekken naar dorsaalflexie. Graad I/II dag 2–3. Graad III: voorzichtig na dag 5. Dorsiflexie ROM is sterkste predictor voor functionele uitkomst.',cat:'mobiliteit'},
         {name:'Belast staan (gewichtsdragen progressie)',params:[['G-I','dag 1–2 volledig'],['G-II','dag 2–3 gedeeltelijk → volledig'],['G-III','dag 3–5 met brace/krukken']],note:'Gebruik brace of Semi-rigide tapelast. Pijn > NRS 5 bij belasting → krukken 1–2 extra dagen. Graad III: Aircast of semi-rigide brace 4–6 weken. Volledige immobilisatie VERMIJDEN.',cat:'kracht'},
         {name:'Isometrische eversieoefening',params:[['Hold','5–10 sec'],['Reps','10'],['Sets','3']],note:'Hand of wand aan buitenzijde voet, duw voet naar buiten (eversie) tegen weerstand — geen beweging. Activeert peroneus brevis/longus vroeg en veilig. Peroneale spierzwakte = hoofdoorzaak recidief.',cat:'kracht'},
         {name:'Semi-rigide brace / Aircast',params:[['Graad','I: tapelast · II: semi-rigide · III: Aircast 4–6 wkn'],['Doel','mechanische stabiliteit + proprioceptie']],note:'Semi-rigide brace superieur aan elastisch verband (Vuurberg 2018). Graad III: Aircast of gelijkwaardig 4–6 weken. Brace beschermt mechanisch EN stimuleert proprioceptie via cutane afferenten.',cat:'manueel'}],
       criteria_go:['NRS ≤ 4/10 bij gewichtsdragen','Actieve ROM > 50% ten opzichte van contralateraal','Gewichtsdragen zonder krukken (G-I/II) of met brace (G-III)','Zwelling stabiliseert of neemt af'],
       criteria_stop:['Toename zwelling na oefening → belasting reduceren','Hevige pijn bij belasting G-III → krukken verlengen + orthopedisch overleg'],
       redflags:['Plotse toename zwelling met warmte + koorts → infectie/trombose → spoed','Toenemende distale tintelingen → n. peroneus compressie door zwelling → drukverband aanpassen']},

      {label:'Fase 2',title:'Subacuut — LOVE + Neuromusculaire Activatie',weeks:'Dag 5–21 (G-I: 5–14d · G-II: 7–21d · G-III: 14–28d)',
       evidence:'<strong>LOVE-principes</strong> (Load, Optimism, Vascularization, Exercise) sturen de subacute fase: geleidelijke mechanische belasting stimuleert collageen-aanmaak en weefselremodellering (Dubois & Esculier 2019). <strong>Peroneale spieractivatie</strong> is de meest kritische factor voor dynamische enkestabiliteit — zwakte aanwezig bij > 90% van patiënten met chronische instabiliteit (Doherty et al. 2014). <strong>Proprioceptietraining</strong> op instabiel vlak vermindering recidief met 47% (Hupperets et al., BMJ 2009 — RCT n=522). <strong>Manuele therapie</strong>: distale fibula-mobilisatie (anteroposterior glijding) verbetert dorsiflexie ROM + pijn acuut (Green et al., Phys Ther 2001 — RCT). <strong>SEBT (Star Excursion Balance Test)</strong>: anteromediaal bereik < 89% LSI = verhoogd recidief (Hertel & Corbett, 2019). <strong>Chronische instabiliteit (CAI)</strong>: 25–40% na eerste distorsie zonder adequate revalidatie (Gribble et al., BJSM 2016).',
       goals:['NRS ≤ 2/10 bij dagelijkse activiteiten','Volledig gewichtsdragen zonder brace (G-I/II einde fase · G-III met brace)','Dorsaalflexie ROM > 80% van contralateraal','Heel rise test: 10+ reps zonder pijn','SEBT anteromediaal LSI > 75%','Peroneus kracht: LSI > 80%'],
       exercises:[
         {name:'Kuitversterking bilateraal (heel raise)',params:[['Reps','15–20'],['Sets','3'],['Progressie','2-benen → 1-been'],['Freq','dagelijks']],note:'Start bilateraal, progressie unilateraal. Concentreer op excentrische fase (zakken 3 sec). Norm: 25+ reps unilateraal. Peroneus longus/brevis zijn meest verwaarloosde spieren bij enkeldistorsie.',cat:'kracht'},
         {name:'Weerstandsband eversie (peroneale activatie)',params:[['Reps','15'],['Sets','3'],['Band','licht → matig'],['Progressie','zittend → staand']],note:'Band om voorvoet, eversie (voet naar buiten) tegen weerstand. Traagste herstelbeweging: concentreerje op de controlefase. Peroneale reactietijd verminderd bij 90%+ distorsiepatiënten — actief trainen is essentieel.',cat:'kracht'},
         {name:'Weerstandsband dorsaalflexie',params:[['Reps','15'],['Sets','3']],note:'Band om voorvoet, dorsaalflexie (voet omhoog trekken) tegen weerstand. Tibialis anterior activatie. Gecombineerd met eversie = meest functionele combinatie voor enkelstabiliteit.',cat:'kracht'},
         {name:'Enkel-been balans op stabiel vlak',params:[['Duur','30–60 sec'],['Sets','3'],['Ogen','open → gesloten']],note:'Basis proprioceptietraining. Start 30 sec stabiel, progressie: ogen dicht, kleine heupduw, armen bewegen. NRS ≤ 3/10. Graad III: start met lichte vinger-touch aan wand voor vertrouwen.',cat:'stabiliteit'},
         {name:'Enkel-been balans op schuimmat / BOSU',params:[['Duur','30–45 sec'],['Sets','3']],note:'Instabiel vlak verhoogt proprioceptieve input aanzienlijk. Schuimmat → BOSU plat → BOSU bol. Progressie elke 3–4 sessies bij pijnvrije uitvoering. Hupperets RCT 2009: 47% recidiefreductie.',cat:'stabiliteit'},
         {name:'SEBT (Star Excursion Balance Test)',params:[['Richtingen','anterieur, posteromediaal, posterolateraal'],['Meting','cm + LSI t.o.v. gezonde zijde']],note:'Meet functionele enkestabiliteit en proprioceptie. Anteromediaal bereik < 89% LSI = verhoogd recidief (Hertel 2019). Gebruik als progressiecriteria. Meet elke 1–2 weken.',cat:'test'},
         {name:'Wandelen op oneffen terrein (progressief)',params:[['Start','vlak + brace'],['Progressie','buiten, gras, licht oneffen']],note:'Functionele belasting in variabele omgeving. Bereidt proprioceptief systeem voor op sport. Brace: Graad I/II aftellen vanaf einde fase 2. Graad III: brace 4–6 weken totaal.',cat:'cardio'}],
       criteria_go:['NRS ≤ 2/10 bij wandelen','Heel rise ≥ 15 reps unilateraal','Dorsaalflexie LSI ≥ 80%','SEBT anteromediaal LSI ≥ 80%','Volledig gewichtsdragen','Single leg balance 30 sec stabiel vlak'],
       criteria_stop:['SEBT < 70% LSI na 3 weken → proprioceptietraining intensiveren','Peroneale kracht < 70% → gerichte weerstandstraining toevoegen'],
       redflags:[]},

      {label:'Fase 3',title:'Functionele Kracht & Loophervatting',weeks:'Week 2–5 (G-I: 1–3wkn · G-II: 2–4wkn · G-III: 3–6wkn)',
       evidence:'<strong>Return to running</strong>-criteria: pijnvrij wandelen, heel rise LSI ≥ 80%, SEBT > 80% LSI (Flore et al., IJSPT 2024). <strong>Jogginghervatting</strong> op rechte lijn als eerste stap — bochten en richtingsveranderingen verhogen enkellast tot 6× lichaamsgewicht. <strong>Sportbrace</strong>: gebruik 6–12 maanden na Graad II–III — reduceert recidief met 53% (Dizon & Reyes, 2010 — meta-analyse). <strong>Peroneale kracht + reactietijd</strong>: beide moeten hersteld zijn vóór sport — reactietijd versnelt pas na 4–6 weken gerichte training (Doherty et al. 2014). <strong>Single leg heel raise norm</strong>: 25+ reps of > 80% LSI voor RTS (APTA CPG 2021). <strong>Loopbiomechanica</strong>: verhoogde inversie bij contact = meest voorkomende loopfout na distorsie — cueing belangrijk.',
       goals:['FAAM ≥ 75%','Heel rise ≥ 20 reps unilateraal','SEBT LSI ≥ 85%','Continu lopen 15–20 min pijnvrij','Bochten lopen pijnvrij','Peroneale kracht LSI ≥ 85%'],
       exercises:[
         {name:'Loophervatting (run-walk protocol)',params:[['Start','1 min jog / 2 min walk × 8'],['Progressie','wekelijks jogtijd +1 min'],['Ondergrond','vlak, stabiel']],note:'G-I: start week 1–2. G-II: week 2–3. G-III: week 3–5. Pijncriterium: NRS ≤ 3 tijdens lopen + ≤ 2/10 volgende ochtend. Sportbrace dragen bij G-II/III.',cat:'cardio'},
         {name:'Laterale shuffle (zijwaarts lopen)',params:[['Afstand','10m heen-terug'],['Sets','3–4'],['Tempo','traag → matig']],note:'Introduceert laterale belasting op enkel. Start traag, controleer inversieneiging. Progressie: snelheid verhogen, versmalde basis. Voorbereiding op richtingsveranderingen.',cat:'neuro'},
         {name:'Single leg squat (10–20 cm box)',params:[['Reps','10–12'],['Sets','3']],note:'Functionele enkel-knie-heup integratie. Controleer geen excessieve inversie van enkel bij zakken. Cue: knie recht over teen houden. Correleert met FAAM-score.',cat:'kracht'},
         {name:'Single leg heel raise (zwaar)',params:[['Reps','8–12'],['Sets','4'],['Belasting','rugzak → extra gewicht']],note:'Opbouw naar maximale kuitkracht. Norm: 25+ reps lichaamsgewicht OF 5+ reps met 30% LG extra. LSI meten elke week. Progressie van vlak naar lichte helling (meer soleus).',cat:'kracht'},
         {name:'Hop test rechtlijnig (single leg hop)',params:[['Meting','afstand cm, 3 pogingen/been'],['LSI','≥ 80%']],note:'Eerste hop-test. Bilateral symmetrie meten. < 80% LSI = nog onvoldoende voor sport. Pijn bij landing > NRS 3 = te vroeg.',cat:'test'},
         {name:'Proprioceptie dubbeltaak',params:[['Vb','enkel-been balans + bal gooien/vangen'],['Sets','3×30 sec']],note:'Voegt cognitieve lading toe aan proprioceptieve training — functioneel voor sport. Simuleert situaties waarbij aandacht verdeeld is (spel, tegenstander, bal). Aanzienlijk hogere preventieve waarde dan enkelvoudige balans.',cat:'stabiliteit'}],
       criteria_go:['FAAM ≥ 75%','Heel rise LSI ≥ 85%','SEBT LSI ≥ 85%','Continu lopen 20 min NRS ≤ 2','Single leg hop LSI ≥ 80%','Bochten lopen NRS ≤ 2'],
       criteria_stop:['Enkelzwelling na loopsessie → volume halveren en 48u rust','Pijn bij landing > NRS 3 → hop-fase uitstellen'],
       redflags:[]},

      {label:'Fase 4',title:'Sportspecifieke Training & Return to Sport',weeks:'Week 3–8 (G-I: 2–3wkn · G-II: 3–6wkn · G-III: 6–12wkn)',
       evidence:'<strong>RTS-criteria enkeldistorsie</strong> zijn criterium-gebaseerd, niet tijd-gebaseerd (APTA CPG 2021). Combinatie van kracht + proprioceptie + functionele tests voorspelt veilige RTS beter dan tijdslijn. <strong>Hop test batterij</strong>: LSI ≥ 90% op alle vier tests (single, triple, crossover, 6m timed) voor contactsport (Tassignon et al., Sports Med 2019). <strong>Side hop test (SHT)</strong>: > 100 hops in 30 sec = functionele drempel voor multidirectionele sport (Flore et al., IJSPT 2024). <strong>Sportbrace 6–12 maanden</strong>: reduceert recidief met 53% zonder prestatieverlies bij terugkeer (Dizon & Reyes 2010). <strong>Neurologisch: peroneus reac&shy;tietijd</strong>: > 70 ms na landing = verhoogd recidief — specifieke training nodig. <strong>CAI risico</strong>: 25–40% zonder adequate RTS-criteria — voornaamste vermijdbare complicatie.',
       goals:['FAAM ≥ 90%','Heel rise LSI ≥ 90%','Hop test batterij LSI ≥ 90%','Side hop test ≥ 100/30 sec','Volledige sportspecifieke training NRS ≤ 1/10','Sportbrace-gebruik gecontinueerd'],
       exercises:[
         {name:'Richtingsveranderingen (agility ladders, T-test)',params:[['Vb','T-test, 5-10-5, Illinois'],['Tempo','60% → 80% → 100%']],note:'Multidirectionele belasting. Start 60% intensiteit, verhoog per sessie. NRS ≤ 3/10 criterium. Sport-specifieke richtingsveranderingen introduceren (basketbal: layups, voetbal: korte bochten).',cat:'neuro'},
         {name:'Side hop test (SHT)',params:[['Protocol','30 cm zijwaarts, 30 sec maximale hops'],['Drempel','≥ 100 hops/30 sec']],note:'Gevalideerde RTS-test voor laterale enkestabiliteit (Flore 2024, IJSPT). Meet neuromusculaire uithouding voor multidirectionele sport. < 100 = niet klaar voor contactsport.',cat:'test'},
         {name:'Hop test batterij (4 testen)',params:[['Testen','single, triple, crossover, 6m timed hop'],['LSI drempel','≥ 90% voor RTS']],note:'Volledige hop-testbatterij vóór RTS contactsport. Meten beide benen, LSI berekenen. Tassignon 2019: combinatie van 4 tests sterkste predictor voor veilige RTS.',cat:'test'},
         {name:'Sportspecifieke drills (progressief volume)',params:[['Start','20% normaal trainingsvolume'],['Opbouw','10% per week'],['Brace','sport-brace dragen']],note:'Geleidelijke re-integratie in training. Week 1: individuele techniekdrills. Week 2: kleine groep. Week 3: volledige teamtraining. Wedstrijd pas na volledige teamtraining NRS ≤ 1/10.',cat:'neuro'},
         {name:'Preventief oefenprogramma (ANKLE protocol)',params:[['Vb','ANKLE of FIFA 11+ enkel-module'],['Freq','2×/week seizoensbegin + 1×/week in-season']],note:'Evidence-based neuromusculair preventieprogramma. Reduceert recidief met 35–50% bij consequente toepassing (Schiftan et al., 2015). Warm-up integratie. Levenslang bij recidief-risico.',cat:'stabiliteit'}],
       criteria_go:['FAAM ≥ 90%','Hop batterij LSI ≥ 90%','SHT ≥ 100/30 sec','Sportspecifieke training NRS ≤ 1/10','Brace-gebruik gecontinueerd'],
       criteria_stop:['Recidief tijdens sport → terug naar fase 2–3','FAAM < 80% na training → volume reduceren'],
       redflags:['Recidief + persisterende instabiliteit na adequate revalidatie → chronische instabiliteit (CAI) → Brostrom-Gould chirurgisch consult','Pijn + swelling na sport zonder verbetering over 8 weken → osteochondraal defect uitsluiten (MRI)']},

      {label:'Fase 5',title:'Preventie & Chronische Instabiliteit',weeks:'Mnd 3+ / langetermijn',
       evidence:'<strong>Chronische enkelinstabiliteit (CAI)</strong>: 25–40% na eerste distorsie, 50–60% na recidief (Gribble et al., BJSM 2016). Gedefinieerd als ≥ 12 maanden instabiliteitsgevoel + recidief. <strong>Primaire preventie</strong>: neuromusculair warm-up programma reduceert enkeldistorsies met 35–50% (Schiftan et al. 2015 — meta-analyse). <strong>Brace-gebruik 1 jaar</strong> na Graad II–III: 53% recidiefreductie (Dizon & Reyes 2010). <strong>SEBT-screening</strong> als jaarlijkse pre-season tool: anteromediaal < 89% = verhoogd risico (Hertel & Corbett 2019). <strong>Chirurgie (Brostrom-Gould)</strong>: geïndiceerd bij 6+ maanden optimale conservatieve therapie met aanhoudende instabiliteit + negatieve invloed op sportparticipatie. Excellent resultaat 85–90% (Vuurberg et al. 2018). <strong>CAI conservatief</strong>: intensieve proprioceptietraining + kracht 6+ maanden eerst altijd proberen.',
       goals:['Neuromusculair preventieprogramma geïntegreerd in warm-up','Jaarlijkse SEBT-screening pre-season','Brace gebruik 6–12 maanden G-II/III gecontinueerd','FAAM ≥ 90% behouden','Recidief-actieplan gekend','CAI tijdig herkennen en handelen'],
       exercises:[
         {name:'Preventief neuromusculair programma (2–3×/week)',params:[['Vb','enkel-been balans, BOSU, lateral hops, band eversie'],['Duur','10–15 min warm-up'],['Freq','elk trainingsmoment']],note:'Minimum effectieve dosis voor preventie. Integreer als warm-up vóór sport. Bij stoppen = snel terugval in proprioceptiedeficit. Hupperets 2009 RCT (n=522): 47% recidiefreductie.',cat:'stabiliteit'},
         {name:'SEBT pre-season screening (jaarlijks)',params:[['Timing','begin seizoen'],['Alarm','anteromediaal LSI < 89%']],note:'Bij LSI < 89% anteromediaal: gerichte proprioceptieperiode van 4 weken voor seizoensopstart. Eenvoudig meetinstrument met hoge predictieve validiteit voor enkeldistorsie (Hertel 2019).',cat:'test'},
         {name:'Heel raise onderhoud (2×/week)',params:[['Reps','15–20 unilateraal'],['Sets','3']],note:'Kuitkracht onderhoud is essentieel voor dynamische stabiliteit. Stoppen bij asymptomatisch leidt tot krachtverlies en verhoogd risico. Integreer na training.',cat:'kracht'},
         {name:'Brace-protocol (sport)',params:[['G-II','6 maanden brace bij sport'],['G-III','12 maanden brace bij sport'],['Type','semi-rigide of lace-up']],note:'Lace-up brace superieur aan elastisch verband en gelijkwaardig aan semi-rigide bij sportprestatie. Geen prestatievermindering aangetoond bij correcte brace. Dizon & Reyes 2010: 53% recidiefreductie.',cat:'manueel'},
         {name:'CAI-herkenning en actieplan',params:[['Signalen','instabiliteitsgevoel, frequent verzwikken, FAAM-daling']],note:'Bij ≥ 2 recidieven of persisterende instabiliteitsklachten > 12 maanden: overweeg orthopedisch consult voor Brostrom-Gould. Conservatief 6+ maanden eerst. Leg actieplan uit aan patiënt.',cat:'manueel'}],
       criteria_go:['FAAM ≥ 90% behouden','Preventieprogramma geïntegreerd','Brace gebruik correct'],
       criteria_stop:['≥ 2 recidieven ondanks preventie → CAI-diagnose + orthopedisch consult','Aanhoudende instabiliteit > 12 maanden → chirurgisch overleg Brostrom-Gould'],
       redflags:['Persisterende pijn + zwelling 3+ maanden na distorsie → osteochondraal defect (OCD) → MRI','CAI + pijnklachten zonder verbetering 6+ maanden → artroscopie overwegen','Progressieve artrose bij recidiverende distorsies → orthopedie']}
    ],
    refs:'Dubois B, Esculier JF (2019/2020) — Soft-tissue injuries simply need PEACE and LOVE. Br J Sports Med 54:72-73. | APTA Clinical Practice Guidelines (2021) — Ankle Stability and Movement Coordination Impairments: Lateral Ankle Ligament Sprains Revision. J Orthop Sports Phys Ther 51(4):CPG1-80. | Flore Z et al. (2024) — Rehabilitation Algorithm After Lateral Ankle Sprains in Professional Football. Int J Sports Phys Ther 19(7):910-922. | Hupperets MDW et al. (2009) — Effect of unsupervised home based proprioceptive training on recurrences of ankle sprain. BMJ 339:b2684 (RCT n=522). | Vuurberg G et al. (2018) — Diagnosis, treatment and prevention of ankle sprains: update of an evidence-based clinical guideline. Br J Sports Med 52(15):956. | Gribble PA et al. (2016) — Evidence review for the 2016 International Ankle Consortium consensus statement on prevalence and consequences of lateral ankle sprains. Br J Sports Med 50:1496. | Bachmann LM et al. (2003) — Accuracy of Ottawa ankle rules to exclude fractures. BMJ 326:417. | Tassignon B et al. (2019) — Criteria-based return to sport decision-making following lateral ankle sprain. Sports Med 49(4):601-619. | Dizon JMR, Reyes JJB (2010) — A systematic review on the effectiveness of external ankle supports in the prevention of inversion ankle sprains. J Sci Med Sport 13:309-317.'},
  over:{id:'over',title:'Overpronatie Syndroom',subtitle:'Flexibele platvoet en overpronatie — intrinsieke training, tibialis posterior, gaitretraining en orthesen',color:'#10b981',
    phases:[
      {label:'Fase 0',title:'Diagnostiek & Subclassificatie',weeks:'Eerste contact',
       evidence:'<strong>Overpronatie</strong> is geen diagnose op zich maar een biomechanisch fenomeen met een spectrum van presentaties. Onderscheid is essentieel: <strong>Flexibele platvoet</strong> (meest voorkomend — mediale boog herstelt bij teenstand) vs <strong>rigide platvoet</strong> (boog herstelt niet → beeldvorming + podoloog/orthopedie). <strong>Foot Posture Index-6 (FPI-6)</strong>: goudstandaard klinische maat — score ≥ +6 = geproneerd, ≥ +10 = hyperpronatie. <strong>Navicular Drop Test (NDT)</strong>: ≥ 10 mm zakking = significante pronatie (Brody 1982). <strong>Gerelateerde klachten</strong>: mediale kniepijn, PFPS, plantaire fasciitis, tibialis posterior tendinopathie, shin splints, lage rugpijn. <strong>Posterieure tibialis insufficiëntie (PTTD)</strong>: progressieve platvoet bij volwassene — aparte entiteit met chirurgisch spectrum. <strong>Gait retraining</strong> superieur aan orthesen alleen voor langetermijn (Mousavi et al., PLoS ONE 2024 — systematische review). <strong>Meest effectieve interventie</strong>: tibialis posterior versterking + iliopsoas stretch + intrinsieke voettraining gecombineerd (network meta-analyse 11 RCTs, 2024).',
       goals:['FPI-6 + Navicular Drop Test afnemen als baseline','Flexibel vs rigide onderscheiden (single heel raise test — boog herstelt = flexibel)','Gerelateerde klachten inventariseren (knie, heup, rug)','Looppatroon observeren: rearfoot eversie, toe-out, knievalgusneiging','Schoeisel en orthesen evalueren','Rode vlaggen screenen (PTTD, coalitie)'],
       exercises:[
         {name:'Foot Posture Index-6 (FPI-6)',params:[['Score','-12 tot +12'],['Normaal','0 tot +5'],['Geproneerd','≥ +6'],['Hyperpronatie','≥ +10']],note:'6 items: talauskop palpatie, supra/infra-malleolaire curvatuur, calcaneus frontaal vlak, talo-naviculaire prominentie, mediale longitudinale boog congruentie, voor/achtervoet abductie. Interrater betrouwbaar (ICC 0.70–0.89).',cat:'test'},
         {name:'Navicular Drop Test (NDT)',params:[['Meting','naviculaire hoogte zittend vs staand'],['Significatief','≥ 10 mm zakking'],['Norm','4–9 mm in gezonde volwassenen']],note:'Zittend (non-weightbearing): markeer tuberositas naviculare, meet hoogte t.o.v. grond. Herhaal staand (full weightbearing). Verschil = navicular drop. > 10mm = overpronatie. Reproduceerbaar (ICC 0.79).',cat:'test'},
         {name:'Single Heel Raise Test (SHRT)',params:[['Flexibel','boog herstelt bij op de teen gaan'],['Rigide','boog herstelt NIET'],['Grens','< 20 reps = tibialis posterior zwakte']],note:'Patiënt gaat op één voet op de teen staan. Flexibele platvoet: mediale boog verschijnt bij teen-stand. Rigide platvoet: geen boogvorming → beeldvorming overwegen. Tel maximale reps: norm > 25.',cat:'test'},
         {name:'Rearfoot eversie observatie (lopen)',params:[['Tool','observatie of videogait'],['Normaal','< 5° eversie bij initieel contact']],note:'Observeer van achter. Excessieve rearfoot eversie bij initieel contact = overpronatie. Koppel aan knievalgusneiging (dynamic knee valgus) — mediale kniepijn predictor. Eventueel met smartphone slowmotion.',cat:'test'}],
       criteria_go:['FPI-6 + NDT afgenomen','Flexibel vs rigide bepaald','Gerelateerde klachten geinventariseerd','Rode vlaggen uitgesloten'],
       criteria_stop:['Rigide platvoet → podoloog + beeldvorming (RX gewichtsdragend)','Vermoeden PTTD stadium III–IV → orthopedie'],
       redflags:['Progressieve platvoet bij volwassene met kuitpijn + zwelling mediaal → PTTD → orthopedisch overleg','Pijn subtalar bij kind/adolescent + stijve voet → tarsale coalitie → RX/CT','Acute mediale enkelpijn + voelbaar defect → tibialis posterior ruptuur → SPOED orthopedie','Neuropatische platvoet (diabetes + Charcot voet) → gespecialiseerde zorg']},

      {label:'Fase 1',title:'Intrinsieke Voetspieractivatie',weeks:'Week 1–4',
       evidence:'<strong>Short Foot Exercise (SFE)</strong> is de meest onderzochte intrinsieke voetinterventie: meta-analyse (Huang et al., IJERPH 2022, 6 RCTs, n=201) toont significante reductie navicular drop (MD: −0.23, p=0.04) en FPI-6 (MD: −0.67, p<0.0001). <strong>Progressie intrinsiek → extrinsiek</strong>: starten met intrinsieke oefeningen en dan overgaan naar extrinsiek geeft betere spiermorfologie-uitkomsten dan omgekeerd (Wetenschappers Sci Reports, 2024). <strong>Abductor hallucis</strong>: primaire dynamische boog-stabilisator — hypertrofie meetbaar na 4 weken SFE. <strong>Towel curl exercise (TCE)</strong> activeert flexor digitorum — aanvullend bij SFE. <strong>4 progressiestadia SFE</strong>: zittend met feedback → zittend zonder → dubbelzijdig staand → eenzijdig staand (Kim et al., 2019).',
       goals:['SFE correct uitvoeren in zittende positie','Bewustwording van mediale boog proprioceptie','Abductor hallucis activatie voelbaar','Handdoekrol-oefening correct uitvoeren','Patiënteducatie: intrinsieke voet is eerste lijn'],
       exercises:[
         {name:'Short Foot Exercise (SFE) — stadium 1: zittend met feedback',params:[['Reps','15'],['Sets','5'],['Freq','3×/week'],['Duur','4–6 weken per stadium']],note:'Zittend, voet plat op grond. Breng eerste metatarsale kop naar de calcaneus ZONDER de tenen te krullen (cruciale instructie). Mediale boog omhoog trekken via abductor hallucis. Gevoel: korte voet-beweging. Begin met vinger-feedback onder mediale boog. SFE reduceert NDT significant na 4 weken (Pabón-Carrasco 2020, RCT n=85).',cat:'kracht'},
         {name:'Short Foot Exercise — stadium 2: zittend zonder feedback',params:[['Reps','15'],['Sets','3'],['Freq','dagelijks']],note:'Zelfde als stadium 1 maar zonder externe feedback. Patiënt voelt de contractie zelf. Progressie zodra stadium 1 correct 3 weken uitgevoerd. Geen teen-flexie, geen kuitactivatie — puur intrinsiek.',cat:'kracht'},
         {name:'Towel Curl Exercise (TCE)',params:[['Reps','3 min'],['Sets','2'],['Materiaal','handdoek op gladde vloer']],note:'Voet plat op handdoek, kruk handdoek naar je toe met de tenen (flexor digitorum brevis + longus). Alternatieven: knikkers oppakken, handdoek oprollen. Aanvullend op SFE. TCE + SFE > SFE alleen voor navicular drop (network meta-analyse 2024).',cat:'kracht'},
         {name:'Toe spreading (abductie hallucis)',params:[['Reps','10–15'],['Hold','5 sec'],['Sets','3']],note:'Spreid alle tenen maximaal zonder kuitactivatie. Activeer specifiek abductie van de grote teen (abductor hallucis). Kan ook als warm-up voor SFE. Eenvoudig overdag te herhalen.',cat:'kracht'},
         {name:'Marble pickup (dexteriteitsvariant)',params:[['Duur','2 min/voet'],['Materiaal','knikkers of kleine objecten']],note:'Knikkers of kleine objecten oppakken met de teen naar een kommetje. Verhoogt intrinsieke coördinatie + dexteriteit. Speels en motiverend voor thuisoefening.',cat:'neuro'}],
       criteria_go:['SFE correct uitvoerbaar zittend zonder feedback','Abductor hallucis activatie voelbaar','NDT-verbetering zichtbaar (≥ 2mm reductie)','Adherentie thuisoefeningen ≥ 80%'],
       criteria_stop:['Pijn bij SFE uitvoering → techniek herzien, belasting verminderen','Geen activatie na 3 weken → EMG-biofeedback overwegen'],
       redflags:[]},

      {label:'Fase 2',title:'Extrinsieke Krachtopbouw — Tibialis Posterior & Heup',weeks:'Week 3–10',
       evidence:'<strong>Tibialis posterior</strong> is de primaire dynamische boogstabilisator — zwakte correleert sterk met navicular drop en overpronatie. <strong>Meest effectieve combinatie</strong>: tibialis posterior versterking + iliopsoas stretching + TCE = sterkste interventie voor navicular drop reductie in adult flexible flatfoot (MD: 3.32, 95% CI: 1.78–4.89, network meta-analyse Sci Reports 2024, 11 RCTs). <strong>Excentrische tibialis posterior</strong>: superieur aan concentrisch voor PTTD stadium I–II (Kulig et al., eccentrisch protocol). <strong>Heupregio</strong>: zwakke heupabductoren + externe rotatoren leiden tot compensatoire knie-valgus en verhoogde rearfoot eversie — heupgerichte oefeningen verminderen dynamische pronatie (Sánchez-Rodríguez et al., PMC 2020). <strong>Iliopsoas strakheid</strong> vergroot lumbale lordose en verplaatst het zwaartepunt anterieur — verhoogt voetpronatie indirect.',
       goals:['Tibialis posterior kracht LSI ≥ 80%','Single heel raise ≥ 20 reps aangedane zijde','Heupabductie kracht LSI ≥ 85%','NDT ≤ 8mm (of ≥ 3mm verbetering tov baseline)','Iliopsoas extensibiliteit verbeterd'],
       exercises:[
         {name:'Tibialis posterior versterking — concentrisch/excentrisch',params:[['Start','zittend inversie-plantairflexie met band'],['Progressie','staand excentrisch heel raise met inversie'],['Reps','15 → 12 → 10'],['Sets','3'],['Freq','3×/week']],note:'START: zittend, band om voorvoet, combineer plantairflexie MET inversie (supinatie) → activatie tibialis posterior selectief. PROGRESSIE: single heel raise met nadruk op supinatie bij omhoog gaan. Vergelijk met Kulig 2004: supinated single heel rise = meest selectieve TP-activatie. Excentrisch programma voor PTTD: 3×15 bilateraal → unilateraal, 12 weken.',cat:'kracht'},
         {name:'Single heel raise progressie (tibialis posterior)',params:[['Bilateraal','15–20 reps'],['Unilateraal','8–15 reps → 25 reps target'],['Belasting','BW → rugzak gewicht'],['Tempo','2-1-3 (omhoog-top-neer)']],note:'Meest functionele TP-oefening. Nadruk op inversie bij topfase (supinatie inbrengen). Norm: 25+ reps voor ontslag. Bij PTTD: excentrisch — omhoog op 2 benen, neer op 1 been. Kulig eccentrisch protocol: 3×15, 2×/dag, 12 weken.',cat:'kracht'},
         {name:'Iliopsoas stretch (Thomas positie)',params:[['Hold','30–45 sec'],['Sets','3'],['Freq','dagelijks']],note:'Ruglig op tafelrand, één been naar borst trekken (andere kant), laat het andere been zakken — voelt rek heupflexor. Strakke iliopsoas → anterieure bekken kanteling → verhoogde pronatie via kinetische keten. Combinatie TP-versterking + iliopsoas stretch = synergistisch effect (Alam et al. RCT).',cat:'mobiliteit'},
         {name:'Gastrocnemius + soleus stretch',params:[['Hold','45 sec'],['Sets','3×/zijde'],['Freq','2–3×/dag']],note:'Beperkte dorsaalflexie is een bewezen oorzaak van compensatoire overpronatie. Stretch gastrocnemius (knie gestrekt) + soleus (knie gebogen) op een traptrede. Gombault-criterium: < 10° dorsaalflexie = compensatiemechanisme actief.',cat:'mobiliteit'},
         {name:'Heupabductie en externe rotatie (weerstandsband)',params:[['Reps','15'],['Sets','3'],['Band','licht → matig']],note:'Zijlig: abductie heup met band boven knieën. Dan: staand, knie 90° gebogen, externe rotatie tegen band. Zwakke gluteus medius + externe rotatoren correleren met verhoogde knievalgusneiging EN verhoogde rearfoot eversie. Essentieel bij PFPS-gerelateerde pronatie.',cat:'kracht'},
         {name:'Gluteus medius versterking (clamshell + side-lying)',params:[['Reps','15–20'],['Sets','3'],['Progressie','band toevoegen']],note:'Zijlig, knieën 90°, voeten samen. Open het bovenste been (clamshell). Progressie: band boven knieën. Correleert met vermindering mediale kniestress bij wandelen en lopen.',cat:'kracht'}],
       criteria_go:['Single heel raise ≥ 20 reps unilateraal','Heupabductie LSI ≥ 85%','NDT ≤ 8mm','Dorsaalflexie ≥ 10° bij knie gestrekt'],
       criteria_stop:['NDT verbetert niet na 6 weken → combinatietherapie met orthesen overwegen','Tibialis posterior pijn bij belasting → PTTD uitschakelen (MRI)'],
       redflags:['Nieuwe mediale enkelpijn + crepitatie bij heel raises → tibialis posterior tendinopathie → echografie']},

      {label:'Fase 3',title:'Functionele Stabilisatie & Proprioceptie',weeks:'Week 6–14',
       evidence:'<strong>Short foot exercise + isometrische heupabductie</strong> gecombineerd: betere abductor hallucis activatie en verminderde tibialis anterior compensatie dan SFE alleen (RCT 2024, BMC Sports). <strong>Gait retraining</strong>: meest veelbelovende langetermijn-interventie — rearfoot eversie, stapbreedte en voetprogressiehoek significant verbeterd (Mousavi et al., PLoS ONE 2024 — systematische review 20+ studies). Specifieke cues die werken: "loopvoeten meer parallel" (toe-in), "zachter landen", verhoogde stapfrequentie (+5–10%). <strong>Proprioceptietraining op instabiel vlak</strong>: verbetert dynamisch evenwicht EN verlaagt rearfoot eversie tijdens gait (Hara et al., J Back Musculoskeletal 2023).',
       goals:['SFE correct uitvoerbaar staand eenzijdig (stadium 4)','SEBT anteromediaal LSI ≥ 85%','Rearfoot eversie bij lopen zichtbaar verminderd','FPI-6 verbetering ≥ 2 punten tov baseline','NDT ≤ 6mm'],
       exercises:[
         {name:'SFE stadium 3 — dubbelzijdig staand',params:[['Reps','15'],['Sets','3'],['Ogen','open → gesloten']],note:'Rechtop staan, beide voeten parallel. Voer SFE uit — mediale bogen omhoog zonder teen-flexie. Progressie: ogen dicht. Vergelijk mediale boog links/rechts. Toont overdracht naar functionele positie.',cat:'kracht'},
         {name:'SFE stadium 4 — eenzijdig staand',params:[['Reps','10–15/been'],['Sets','3'],['Progressie','instabiel vlak']],note:'Hoogste SFE-progressie. Eenzijdig staand SFE uitvoeren. Progressie: schuimmat → BOSU. Combineert intrinsieke kracht met enkelpropioceptie. Target eindstadium voor ontslagcriteria.',cat:'stabiliteit'},
         {name:'SFE + isometrische heupabductie (gecombineerd)',params:[['Reps','10'],['Hold','5 sec'],['Sets','3']],note:'Staand, band boven knieën. Voer SFE uit TERWIJL je de knieën actief tegen de band drukt (isometrische heupabductie). Verhoogt abductor hallucis activatie significant (RCT 2024). Synergie distaal-proximale ketting.',cat:'stabiliteit'},
         {name:'Gait retraining — parallelle voetstand',params:[['Cue','"Zet je voeten meer parallel"'],['Methode','spiegel of videofeedback'],['Sessies','6–8 sessies à 20 min']],note:'Toe-out looppatroon vergroot pronatie. Reductie toe-out hoek met 5–10° vermindert rearfoot eversie significant (Mousavi 2024). Gebruik vloermarkeringen of visuele feedback. Automatisering: 4–6 weken constante cueing.',cat:'neuro'},
         {name:'Gait retraining — zachter landen + hogere cadans',params:[['Cadans','+5–10% stapfrequentie'],['Cue','"Loop zacht, vermijd hielklap"'],['Tool','metronoom-app']],note:'Verhoogde cadans + softer landing verminderen impact en rearfoot eversie. Metronoom instellen op baseline + 5%. Combineer met parallelle voetstand. Progressief automatiseren over 4–6 weken.',cat:'neuro'},
         {name:'SEBT (Star Excursion Balance Test)',params:[['Richtingen','anteromediaal, posteromediaal, posterolateraal'],['LSI drempel','≥ 85%']],note:'Dynamische balans en functionele enkestabiliteit. Anteromediaal bereik correleert met tibialis posterior functie. Elke 2 weken meten als progressie-indicator.',cat:'test'}],
       criteria_go:['SFE stadium 4 correct uitvoerbaar','SEBT LSI ≥ 85%','NDT ≤ 6mm','FPI-6 verbetering ≥ 2 punten','Rearfoot eversie zichtbaar verbeterd bij lopen'],
       criteria_stop:['Functionele verbetering stagneert → orthesen evalueren als aanvulling'],
       redflags:[]},

      {label:'Fase 4',title:'Sportspecifieke Training & Preventie',weeks:'Week 10–18+',
       evidence:'<strong>Orthesen als aanvulling</strong> (niet vervanging): prefab orthesen effectief bij PFPS + overpronatie als patiënt meer dan 3° rearfoot eversie heeft (Barton et al., 2011). Orthesen creëren afhankelijkheid en zijn kostelijker — oefentherapie als eerste keuze, orthesen als bridge bij acute pijn. <strong>Minimalistisch schoeisel</strong>: stimuleert intrinsieke voetspieren bij geleidelijke transitie — abruptie transitie leidt tot stressfracturen. <strong>Loopschoeisel</strong>: motion control of stability schoenen bij persisterende hyperpronatie als tijdelijke maatregel. <strong>Jaarlijkse screening</strong> met FPI-6 + NDT bij sporters — identifcieert risico-atleten voor shin splints, PFPS en tibialis posterior problemen.',
       goals:['Sportspecifieke belasting zonder compensatoire pronatie','FPI-6 ≤ +5 of ≥ 3 punten verbetering tov baseline','NDT ≤ 5mm of ≥ 5mm verbetering','Single heel raise ≥ 25 reps','Onderhoudsprogramma zelfstandig','Schoeisel/orthesen-beleid vastgelegd'],
       exercises:[
         {name:'Sportspecifieke looptraining met gait-cues',params:[['Start','20% volume + cues actief'],['Opbouw','10%/week'],['Monitor','rearfoot eversie via video']],note:'Gait retraining-cues meenemen in sportspecifieke training. Periodieke videofeedback (smartphone achteraanzicht). Voetstand en cadans controleren bij vermoeidheid — compensatie treedt op bij moeheid.',cat:'neuro'},
         {name:'Plyometrische progressie (boog-bewust)',params:[['Start','bilateraal hoppen'],['Progressie','unilateraal → lateraal → richtingsveranderingen'],['Focus','zachte landing met actieve mediale boog']],note:'Bij iedere landing: actieve mediale boog (SFE-cue toepassen). Bilateraal pijnvrij vóór unilateraal. Progressie analoog aan enkeldistorsie plyometrie maar met boog-specifieke cue.',cat:'neuro'},
         {name:'Orthesen-beslissing (indien nodig)',params:[['Prefab','bij acute pijn of hoge activiteit']],note:'Prefab orthesen (bijv. Superfeet, Sof Sole) als tijdelijk hulpmiddel bij: acute pijn, hoge sportbelasting of onvoldoende oefenresponse. GEEN vervanging voor training. Maatorthesen overwegen bij persisterende hyperpronatie (FPI > +9) na optimale therapie. Afbouwen zodra kracht voldoende.',cat:'manueel'},
         {name:'Onderhoudsprogramma (2–3×/week)',params:[['Inhoud','SFE stadium 4, TP heel raise, heupabductie'],['Duur','20 min']],note:'Minimale dosis: SFE 3×15 + unilaterale heel raise 3×15 + clamshell 3×15. Integreren als warm-up voor sport. Stoppen = recidief. Jaarlijkse screening FPI-6 + NDT aanbevolen bij sporters.',cat:'kracht'}],
       criteria_go:['FPI-6 ≤ +5 of ≥ 3 punten verbetering','NDT ≤ 5mm','Single heel raise ≥ 25 reps','Sportspecifieke training pijnvrij'],
       criteria_stop:['Persisterende hyperpronatie FPI > +9 na optimale therapie → maatorthesen + podoloog'],
       redflags:['Toename mediaal kniepijn bij sporten + pronatie → PFPS evaluatie','Shin splints recidief → loopvolume + pronatie screen + schoeisel check','Chronische mediale enkelpijn → PTTD stadium check']}
    ],
    refs:'Mousavi SH et al. (2024) — Gait retraining targeting foot pronation: systematic review and meta-analysis. PLoS ONE 19(3):e0298646. | Huang C et al. (2022) — Short foot exercise on foot alignment in flatfoot: meta-analysis. IJERPH 19(19):11994. | Network meta-analysis (2024) — Comparing exercise therapy efficacy in adult flexible flatfoot (11 RCTs). Sci Reports. | Sánchez-Rodríguez R et al. (2020) — Modification of pronated foot posture after therapeutic exercises. IJERPH PMC7697388. | Alam F et al. (2018) — Tibialis posterior strengthening and iliopsoas stretching in pronated feet. RCT. | Kulig K et al. (2004) — Selective activation of tibialis posterior: MRI evaluation. Med Sci Sports Exerc. | Barton CJ et al. (2011) — Rearfoot eversion predicts foot orthoses efficacy in PFPS. Br J Sports Med. | Hara S et al. (2023) — Short foot exercises for flat foot deformity: systematic review. J Back Musculoskelet Rehabil.'},

  si:{id:'si',title:'Schouderinstabiliteit',subtitle:'Anterieure instabiliteit (TUBS / Bankart) en multidirectionele instabiliteit (AMBRI) — conservatief & post-chirurgisch',color:'#f472b6',
    phases:[
      {label:'Fase 1',title:'Immobilisatie & Bescherming',weeks:'Week 0–3',
       evidence:'Immobilisatie in externe rotatie toonde in kleine RCT\'s 0% recidief vs. 30% in interne rotatie (Itoi et al., 2007), maar grote RCT (Liavaag et al., 2011, n=198) toonde <strong>géén verschil</strong>. Huidig advies: neutrale sling 3–4 weken. Bij AMBRI: rust + periscapulaire activatie direct starten. N. axillaris beschadigd bij 5–14% van anterieure luxaties — vroegtijdig screenen op deltoidzwakte.',
       goals:['Pijn VAS ≤ 3/10 in rust en bij beweging','Wondgenezing en oedeem onder controle (post-OK)','Elleboog, pols en vingers: volledige ROM behouden','Periscapulaire spieractivatie initiëren','Cervicale en thoracale mobiliteit bewaren'],
       exercises:[
         {name:'Elleboogflexie/-extensie + onderarmrotatie',params:[['Reps','15–20'],['Sets','3'],['Freq','3×/dag']],note:'Sling tijdelijk af. Volledige ROM in pijnvrij bereik. Spierpomping voorkomt atrofie.',cat:'mobiliteit'},
         {name:'Pols- en vingermobilisatie',params:[['Reps','10 actief'],['Freq','elk uur']],note:'DVT-preventie + vochtresorptie. Klein maar frequent.',cat:'mobiliteit'},
         {name:'Isometrische scapulaire retractie-depressie',params:[['Hold','5–10 sec'],['Reps','10–15'],['Sets','3']],note:'Zittend, schouderbladen naar elkaar + omlaag trekken. Spierspanning bewaren tijdens immobilisatie.',cat:'kracht'},
         {name:'Codman-pendel (post-OK: na chirurgtoestemming)',params:[['Duur','2 min'],['Sets','2'],['Freq','2×/dag']],note:'Voorovergebogen, arm hangt los. Zwaartekracht-tractie ontspant kapsel. Start week 1–2.',cat:'mobiliteit'},
         {name:'Cervicale actieve rotatie en zijflexie',params:[['Reps','5–10 elk'],['Sets','2–3']],note:'Verlengte slinghouding veroorzaakt cervicale overbelasting. Dagelijks bewegen voorkomt pijn.',cat:'mobiliteit'},
         {name:'Diafragmatische ademhaling + houdingscorrectie',params:[['Duur','5 min'],['Freq','2–3×/dag']],note:'Compensatoire voorwaartse hoofdhouding in sling. Kin intrekken + thoracale extensie actief bewaken.',cat:'stabiliteit'}],
       criteria_go:['Sling 3–4 weken (post-OK) of 2–3 weken (conservatief)','Elleboog/pols volledige ROM','Isometrische scapulaire activatie zonder pijntoename','Pijn ≤ 3/10 in rust','Geen infectietekens post-OK'],
       criteria_stop:['Tekenen wondinfectie of hematoom → chirurgconsult','Neurologische uitval post-operatief'],
       redflags:['N. axillaris letsel: deltoidverlamming of gevoelsverlies laterale bovenarm → onmiddellijk chirurgconsult (5–14% incidentie na anterieure luxatie)','Wondinfectie: roodheid, warmte, pusvorming → spoedconsult','CRPS-tekenen: brandende pijn, huidveranderingen, oedeemfixatie → revalidatiearts']},
      {label:'Fase 2',title:'Vroege ROM & Scapulaire Basis',weeks:'Week 3–8',
       evidence:'Scapulaire dyskinese aanwezig bij 67% van patiënten na schouderinstabiliteit (Kibler et al., 2013). <strong>Serratus anterior</strong> is primaire stabilisator voor scapulaire upward rotation. Post-Bankart: passieve ER beperkt tot ≤ 30° tot week 6 om het anteriorkapsel te beschermen. GIRD > 20° is onafhankelijke risicofactor voor re-instabiliteit.',
       goals:['Passieve elevatie in scapulair vlak ≥ 90°','Passieve ER ≤ 30° (post-Bankart) of volledig (conservatief AMBRI)','Actieve elevatie ≥ 60° pijnvrij','Scapulaire winging verdwenen bij wall slides','IR ≥ 60° pijnvrij'],
       exercises:[
         {name:'Pendel/Codman actief',params:[['Duur','2–3 min'],['Sets','2–3'],['Freq','2×/dag']],note:'Progressief grotere cirkels. Arm volledig ontspannen laten hangen. Nooit forceren.',cat:'mobiliteit'},
         {name:'PROM elevatie in scapulair vlak (stok of kinesist)',params:[['Reps','10–15'],['Sets','2–3']],note:'Scapulair vlak = 30–40° anterieur van frontaal. Veiligst voor anteriorkapsel. Target: 90° week 4, 120° week 6.',cat:'mobiliteit'},
         {name:'AAROM elevatie met stok (gezond been helpt)',params:[['Reps','15–20'],['Sets','3']],note:'Stok in gestrekte arm vangen, gezonde arm begeleidt omhoog. Progressie naar actief-geassisteerd.',cat:'mobiliteit'},
         {name:'Scapulaire retractie + depressie met elastiek',params:[['Reps','15–20'],['Sets','3']],note:'Duimen omhoog, trekken naar heupzakken ("thumbs to pockets"). Basis periscapulaire kracht.',cat:'kracht'},
         {name:'Serratus wall slide',params:[['Reps','10–12'],['Sets','3']],note:'Onderarmen op muur, 90° elevatie. Proneer onderarm + schuif omhoog met serratus. Geen scapulaire winging. Fundamentele oefening.',cat:'kracht'},
         {name:'Side-lying IR met lichte elastiek',params:[['Reps','15–20'],['Sets','3']],note:'Elleboog 90°, roteer naar buik. Post-Bankart: ook voorzichtige ER tot ≤ 30° vanaf week 4.',cat:'kracht'},
         {name:'Thoracale extensiemobilisatie (rol of manueel)',params:[['Duur','5 min'],['Freq','dagelijks']],note:'Compensatiepatronen via thorax voorkomen bij beperkte schoudermobiliteit. Manuele therapie effectief.',cat:'mobiliteit'}],
       criteria_go:['Passieve elevatie ≥ 90°','Actieve elevatie ≥ 60° pijnvrij','IR ≥ 60°','Post-Bankart passieve ER ≤ 30° of conservatief full ER','Scapulaire winging verdwenen bij wall slides','Pijn ≤ 3/10'],
       criteria_stop:['Pijn > 5/10 bij passieve mobilisatie → trager opbouwen','Toename instabiliteitsgevoel → chirurgconsult'],
       redflags:['Acuut "losschieten" gevoel bij oefening → stop, evalueer re-luxatie radiologisch','Progressieve deltoidzwakte 1–3 maanden post-luxatie → axillaire neuropathie evalueren (EMG)']},
      {label:'Fase 3',title:'Krachtherstel & Neuromusculaire Controle',weeks:'Week 8–16',
       evidence:'<strong>ER/IR krachtverhouding ≥ 0.66</strong> is preventief voor anterieure instabiliteit (Ellenbecker & Mattalino, 1997). Asymmetrie > 20% in ER-kracht verhoogt recidiefrisico. Proprioceptieve deficieten na luxatie persisteren tot 6 maanden (Lephart et al., 1994). <strong>PNF D2-diagonalen</strong> activeren RC + deltoideus coactivatie optimaal en zijn essentieel voor neuromusculaire heropbouw.',
       goals:['Volledige actieve ROM (elevatie ≥ 170°, ER ≥ 60°, IR ≥ 70°)','ER/IR krachtverhouding ≥ 0.66','ER-krachtsasymmetrie ≤ 20%','Scapulaire upward rotation normaal bij elevatie','JPS (joint position sense) fout < 5° bij 45° abductie','Overhead bewegen zonder compensatiepatroon'],
       exercises:[
         {name:'Side-lying external rotation (dumbbell/elastiek)',params:[['Reps','12–15'],['Sets','3–4']],note:'Kussen onder bovenarm. Elleboog 90°. Prioriteitsoefening voor ER/IR ratio. Progressie: licht → matig → zwaar.',cat:'kracht'},
         {name:'Prone Y/T/W (scapulaire stabilisatoren)',params:[['Reps','10–12'],['Sets','3']],note:'Y = abductie 120° duimen omhoog. T = horizontale abductie 90°. W = abductie 90° + maximale ER. Start zonder gewicht.',cat:'kracht'},
         {name:'Prone ER in 90/90 positie',params:[['Reps','10–12'],['Sets','3']],note:'Bovenarm 90° abductie, elleboog 90°, roteer naar plafond. Teres minor + infraspinatus specifiek.',cat:'kracht'},
         {name:'Serratus push-up plus (muur → grond)',params:[['Reps','10–15'],['Sets','3']],note:'"Plus" = extra protractie op top van beweging. Progressie: muur → schuine ondersteun → grond. Serratus anterior prioriteit.',cat:'kracht'},
         {name:'PNF D2 flexie/extensie (elastiek)',params:[['Reps','12'],['Sets','3']],note:'D2 flexie: laag buiten → hoog binnen (duim omhoog). Rotatorenmanchet coactivatie in functioneel diagonaal patroon.',cat:'neuro'},
         {name:'Rhythmic stabilization (zittend/staan)',params:[['Duur','30 sec'],['Sets','3–5']],note:'Therapeut geeft alternerende lichte perturbaties van alle kanten. Reflexmatige coactivatie. Progressie: stabiele stoel → BOSU.',cat:'neuro'},
         {name:'Schouder tap in quadruped (proprioceptie)',params:[['Reps','10/zijde'],['Sets','3']],note:'Knieën + handen, één hand optillen terwijl gewicht overgedragen wordt. Gesloten keten proprioceptie.',cat:'stabiliteit'},
         {name:'Weerstandsband-rotaties bij 0° + 45° abductie',params:[['Reps','15–20'],['Sets','3']],note:'Meerdere abductiehoeken voor volledige krachtopbouw. Progressie: isotonisch → isokinetisch-achtig.',cat:'kracht'}],
       criteria_go:['Actieve elevatie ≥ 170°, ER ≥ 60°, IR ≥ 70°','ER/IR ratio ≥ 0.66','ER-asymmetrie ≤ 20%','JPS fout < 5°','Pijn ≤ 2/10 bij alle oefeningen','Geen instabiliteitsgevoel bij dagdagelijkse activiteiten'],
       criteria_stop:['ER/IR ratio < 0.60 na 14 weken → intensiveer ER-specifiek + eventueel isokinetisch testen'],
       redflags:[]},
      {label:'Fase 4',title:'Dynamische Stabilisatie & Functioneel',weeks:'Week 16–24',
       evidence:'CKC overhead oefeningen verbeteren coactivatie rotatorenmanchet effectiever dan OKC (Uhl et al., 2003). Post-Bankart return to throwing: minimum 6 maanden (Wilk et al., 2013). <strong>Rhythmic stabilization in 90/90°</strong> is de meest veeleisende proprioceptieve uitdaging voor anterieure instabiliteit en verplicht vóór overhead sport.',
       goals:['Push-up 3×10 volledig pijnvrij','Overhead press ≥ 8 kg pijnvrij','Dynamische stabilisatie in 90/90° positie stabiel (45 sec)','Sport-specifieke bewegingen geïntroduceerd','WOSI ≤ 630 (70% van normaal)'],
       exercises:[
         {name:'Push-up progressie',params:[['Reps','10–15'],['Sets','3']],note:'Knieën → grond → voet-elevated → plyometrisch. Scapulaire controle bewaken. "Plus" = serratus activatie op top.',cat:'kracht'},
         {name:'Dumbbell overhead press (licht → matig)',params:[['Reps','10–12'],['Sets','3']],note:'Start neutraal (duimen voor). < 90° abductie eerste weken. Progressie naar frontaal vlak. Stabiliteit bewaken.',cat:'kracht'},
         {name:'Lat pulldown → assisted pull-up',params:[['Reps','8–10'],['Sets','3']],note:'60% lichaamsgewicht lat pulldown → assisted → regulier pull-up. Retractie-depressie scapula bij elke rep.',cat:'kracht'},
         {name:'PNF D2 weerstand sport-specifiek (snelheid opbouwen)',params:[['Reps','12'],['Sets','3']],note:'Snelheidstoename in patroon. Ball-throwing simulatie met elastiek. Sport-specifieke hoeken en snelheden.',cat:'neuro'},
         {name:'Rhythmic stabilization 90/90° abductie',params:[['Duur','30–45 sec'],['Sets','3–5']],note:'Bovenarm 90° abductie, elleboog 90°. Therapeut geeft multidirectionele perturbaties. Moeilijkste positie voor anterieure instabiliteit.',cat:'neuro'},
         {name:'Wall ball throws (2–3 kg, 2 → 1 hand)',params:[['Reps','15–20'],['Sets','3–4']],note:'Dichtbij muur, twee handen, progressie naar één hand. Reactieve stabilisatie. Kan ook met rebound-trainer.',cat:'neuro'},
         {name:'Interval Throwing Program stap 1–3 (werpatleten)',params:[['Afstand','45 voet → 60 voet → 90 voet']],note:'Wilk et al. 2013 protocol. Enkel bij werpatleten + chirurggoedkeuring. Na minimum 6 maanden post-Bankart.',cat:'neuro'}],
       criteria_go:['Push-up 3×10 pijnvrij','Overhead press ≥ 8 kg pijnvrij','Rhythmic stabilization 90/90° stabiel 45 sec','Geen instabiliteitsgevoel bij functionele bewegingen','WOSI ≤ 630'],
       criteria_stop:['Instabiliteitsgevoel bij overhead activiteiten → terug fase 3 + heroverweeg chirurgie bij conservatief falen'],
       redflags:['Acute luxatie tijdens revalidatie → stop protocol, chirurgconsult','Persisterende instabiliteit conservatief > 6 maanden → chirurgische indicatie herbekijken (inferieure kapselshift bij AMBRI)']},
      {label:'Fase 5',title:'Return to Sport',weeks:'Mnd 6–9',
       evidence:'Recidiefpercentage post-Bankart artroscopisch: 6–10%, contactsporten 15–20% (Brophy & Marx, 2009). <strong>ISIS-score > 6</strong> (Balg & Boileau 2007) = hoog recidiefrisico → patiënt informeren. AMBRI conservatief: 80–90% goed resultaat op lange termijn (Burkhead & Rockwood, 1992). Preventief RC-onderhoudsprogramma verlaagt recidief bij sporters.',
       goals:['Krachtsasymmetrie ≤ 10% (ER, abductie)','ER/IR ratio ≥ 0.66 gehandhaafd','WOSI ≤ 420 (≥ 80% normaal)','Interval Sport Program voltooid','Sport-specifieke bewegingen pijnvrij en stabiel','Chirurgische goedkeuring (post-Bankart)'],
       exercises:[
         {name:'Interval Throwing Program compleet (werpatleten)',params:[['Fase','4–6: 120 voet → max. afstand → bullpen']],note:'Wilk et al. protocol. Minimum 6 weken voor fase 4–6. Geen pijn of vermoeidheid van schouder als criterium.',cat:'neuro'},
         {name:'Contactsport progressie (rugby, judo, vechtsporten)',params:[['Opbouw','vallen + steunen → licht contact → vol contact']],note:'Beschermingsbrace eerste seizoen overwegen bij hoog-risico sporten. Maandelijkse evaluatie eerste 6 maanden.',cat:'neuro'},
         {name:'Return to swimming (zwemmers)',params:[['Volgorde','rugslag → borstkraul → vlinderslag']],note:'Bilateraal ademhalen verplicht eerste 4 weken. Scapulaire controle bij elke slagcyclus monitoren.',cat:'cardio'},
         {name:'Preventief RC-onderhoudsprogramma (levenslang)',params:[['Freq','2–3×/week'],['Duur','20 min']],note:'Y/T/W 3×12 + ER band 3×15 + serratus push-up plus 3×10. Eerste jaar verplicht. Daarna als warm-up bij sport.',cat:'kracht'},
         {name:'ISIS-score risicobeoordeling (Balg & Boileau 2007)',params:[['Timing','vóór RTS']],note:'Score > 6 = hoog recidiefrisico bij Bankart. Patiënt informeren over recidiefkans en beschermingsmaatregelen.',cat:'test'}],
       criteria_go:['Krachtsasymmetrie ≤ 10%','ER/IR ratio ≥ 0.66','WOSI ≤ 420','Sport-specifieke bewegingen pijnvrij','Chirurgische goedkeuring','Minimum 6 mnd post-Bankart of 4 mnd conservatief AMBRI'],
       criteria_stop:['WOSI > 630 na 9 maanden → herbeoordeel conservatief vs. chirurgisch'],
       redflags:['Nieuwe luxatie bij sport → stop, heroverweeg chirurgische indicatie (ISIS-score bepalen)','AMBRI zonder voldoende verbetering na 9 maanden conservatief → inferieure kapselshift overwegen']}
    ],
    refs:'Itoi E et al. (2007) — Immobilization in external rotation reduces reluxation risk after shoulder dislocation. J Bone Joint Surg Am. | Kibler WB et al. (2013) — Clinical implications of scapular dyskinesis in shoulder injury. Br J Sports Med. | Lephart SM et al. (1994) — Proprioception after glenohumeral dislocation. J Shoulder Elbow Surg. | Balg F & Boileau P (2007) — The instability severity index score. J Bone Joint Surg Br. | Brophy RH & Marx RG (2009) — Treatment of traumatic anterior shoulder instability. Arthroscopy. | Burkhead WZ & Rockwood CA (1992) — Treatment of instability of the shoulder with an exercise program. J Bone Joint Surg Am. | Wilk KE et al. (2009) — Shoulder injuries in the overhead athlete. J Orthop Sports Phys Ther.'},

  orif:{id:'orif',title:'ORIF Distale Radius',subtitle:'Open repositie & interne fixatie van distale radiusfractuur (AO type A2–C3) — postoperatief revalidatieprotocol pols & hand',color:'#38bdf8',
    phases:[
      {label:'Fase 1',title:'Bescherming & Oedeemcontrole',weeks:'Week 0–2',
       evidence:'Volaire plaatfixatie laat <strong>vroege mobilisatie van aangrenzende gewrichten</strong> toe vanaf dag 1–3 postoperatief. Vingers en elleboog vroegtijdig mobiliseren vermindert stijfheid en oedeem significant (Souer et al. 2011). <strong>Elevatie boven hartniveau</strong> is de meest effectieve oedeemreductie in de eerste week. Pols zelf blijft in spalk (volar back-slab) of brace tot radiologische controle.',
       goals:['Oedeem en pijn controleren (NRS < 4 in rust)','ROM vingers, elleboog en schouder volledig bewaren','DVT-preventie via distale circulatie','Wondgenezing bewaken (hechting verwijdering dag 10–14)','Patiënt informeren over beschermingsfase'],
       exercises:[
         {name:'Elevatie & cryotherapie',params:[['Freq','3–5×/dag'],['Duur','15–20 min'],['Positie','pols boven hartniveau']],note:'Handdoek om ijs. Nooit ijs direct op huid. Effectiefst in eerste 72u voor oedeemreductie.',cat:'mobiliteit'},
         {name:'Vinger AROM — composite fist',params:[['Reps','20–25'],['Sets','4–6×/dag'],['Target','volledige vuist']],note:'Alle vingers tegelijk naar volledige flexie + volledige extensie. Houd 3 sec. Duim apart abductie/oppositie. Cruciaal voor peesgliding.',cat:'mobiliteit'},
         {name:'Elleboog AROM flexie/extensie',params:[['Reps','15–20'],['Sets','3×/dag']],note:'Pols in neutrale positie in spalk. Volledige elleboogflexie en extensie. Voorkomt stijfheid m. biceps en m. brachioradialis.',cat:'mobiliteit'},
         {name:'Schouder AROM (pendel + elevatie)',params:[['Reps','10–15'],['Sets','2×/dag']],note:'Gravity-assisted pendel voor schouder. Voorwaartse elevatie en abductie vrij. Schouder mag niet verwaarlosd worden bij DRF.',cat:'mobiliteit'},
         {name:'Retrograde massage hand → pols',params:[['Duur','5 min'],['Freq','3×/dag']],note:'Lymfedrainage: cirkelvormige druk van vingers richting elleboog. Zachte druk, nooit over operatiewonde. Start dag 3 postoperatief.',cat:'manueel'},
         {name:'Isometrische handknijp in spalk',params:[['Hold','5 sec'],['Reps','10'],['Sets','3×/dag']],note:'Zacht kussen of opgerolde handdoek knijpen. Alleen uitvoeren als pijnvrij (NRS < 3). Houdt intrinsieke handspieren actief.',cat:'kracht'}],
       criteria_go:['Pijn NRS < 4 in rust','Vingers volledig beweegbaar','Geen tekenen CRPS (brandende pijn, kleurverandering, allodynie)','Radiologische controle akkoord (chirurg)','Wonde gesloten, geen infectietekenen'],
       criteria_stop:['Toename oedeem na oefening','Koorts > 38.5°C (infectie vermoeden)','Nieuwe gevoelsstoornissen duim/index/middenvinger (n. medianus)','Pijn NRS > 8 in rust'],
       redflags:['Koorts + roodheid wonde → infectie → spoedreferral chirurg','Nieuwe tintelingen/gevoelsverlies duim, index, middenvinger → acuut CTS → chirurg','Blauwpaarse vingers → vasculaire complicatie → spoedreferral','Brandende pijn + allodynie + kleurverandering → CRPS type 1 → pijnkliniek']},

      {label:'Fase 2',title:'Vroege ROM Pols & Littekenzorg',weeks:'Week 2–6',
       evidence:'Na volaire plaatfixatie kan <strong>actieve polsmobilisatie starten bij week 2–3</strong>, na chirurgische controle (Quadlbauer et al. 2017). Pronosupinatie vraagt speciale aandacht: de rotatie van de onderarm is functioneel cruciaal (eten, schrijven) en herstelt trager dan flexie/extensie. <strong>Littekenmassage</strong> vanaf dag 14 (hechtingen verwijderd) vermindert adhesies en gevoeligheid significant.',
       goals:['AROM pols 50% van normaal bereiken (F/E ≥ 40°, pro/sup ≥ 60°)','Functionele vingergreep hervatten voor ADL','Litteken soepel, vlak en pijnvrij houden','Lichte ADL zonder pijn hervatten'],
       exercises:[
         {name:'Pols AROM flexie/extensie',params:[['Reps','10–15'],['Sets','4–6×/dag'],['ROM','pijnvrij bereik']],note:'Onderarm gesteund op tafel. Actieve beweging pols omhoog/omlaag. Nooit forceren. Elke week meetbaar vooruitgang verwachten.',cat:'mobiliteit'},
         {name:'Pols AROM radiale & ulnaire deviatie',params:[['Reps','10–15'],['Sets','3×/dag']],note:'Onderarm pronatie op tafel. Pols lateraal links-rechts. Vaak beperkt bij DRF door botpatroon — niet forceren.',cat:'mobiliteit'},
         {name:'Pronosupinatie AROM',params:[['Reps','10–15'],['Sets','4×/dag'],['Positie','elleboog 90°, bovenarm langs romp']],note:'Elleboog gebogen aan zij houden (korte hefboom). Handpalm omhoog → omlaag. Starten met onbelast, pijnvrij.',cat:'mobiliteit'},
         {name:'Grijpkracht — zachte putty',params:[['Reps','15–20'],['Sets','3'],['Weerstand','zacht (geel/rood)']],note:'Volledig knijpen in putty. Progressie naar harder materiaal. Grip strength herstel is bepalend voor functionele uitkomst.',cat:'kracht'},
         {name:'Pincetgreep & oppositie',params:[['Reps','15'],['Sets','3×/dag']],note:'Duim-index, duim-middenvinger, duim-ringvinger. Kleine objecten oppakken (munt, knoop). Fijne motoriek stimuleren.',cat:'kracht'},
         {name:'Littekenmassage',params:[['Duur','3–5 min'],['Freq','2×/dag'],['Start','dag 14 postoperatief']],note:'Cirkelvormige druk op litteken (niet erover). Cross-friction in 4 richtingen. Siliconen sheet als aanvulling 23u/dag. Verlaagt adhesievorming.',cat:'manueel'},
         {name:'Functionele ADL-training',params:[['Activiteiten','eten, schrijven, hygiëne'],['Nivo','licht, pijnvrij']],note:'Aangepaste grip bij eten. Lichte schrijfopdrachten. Geen zwaar tillen (> 0.5 kg). Stimuleert neuromusculaire integratie.',cat:'neuro'}],
       criteria_go:['Röntgen consolidatie ok (chirurg controle week 4–6)','Pols AROM F/E ≥ 40° actief','Pro/sup ≥ 60° actief','Pijn NRS ≤ 3 bij oefening','Litteken gesloten, geen adhesies'],
       criteria_stop:['Crepitatie of klikgeluid in pols bij beweging','Acuut zwellen pols na oefening (> 2 cm omtrek)','Toename pijn > NRS 5 na oefening (24u-regel)'],
       redflags:['Scherpe pijn bij pronosupinatie → TFCC-letsel → orthopedisch consult','Aanhoudende n. medianus klachten (CTS) → chirurgisch consult']},

      {label:'Fase 3',title:'Krachtherstel & Functionele Integratie',weeks:'Week 6–12',
       evidence:'<strong>Grip strength < 75% van contralateraal</strong> correleert sterk met functioneel verlies bij DRF (MacDermid et al. 2004). Pronosupinatie kracht herstelt het traagst (vaak pas bij 6 maanden). <strong>HSR-principes</strong> (Heavy Slow Resistance, 3×8–10RM) zijn effectiever dan lage weerstand / hoge herhaling voor botgenezing en peeskracht. Eigenoefening 2× per dag superieur aan 1× per dag in deze fase.',
       goals:['Grip strength ≥ 60% contralateraal','Volledige AROM pols (F/E ≥ 60°, pro/sup ≥ 80°)','Hervatten lichte werkactiviteiten en sport','PRWE < 40'],
       exercises:[
         {name:'Polsextensie met weerstand',params:[['Sets','3'],['Reps','10–12'],['Belasting','licht → progressief'],['Tempo','2-1-2']],note:'Onderarm op tafel, pols over rand. Dumbbell omhoog brengen. Startgewicht 0.5–1 kg. Wekelijks progressie. Eccentrische fase langzaam.',cat:'kracht'},
         {name:'Polsflexie met weerstand',params:[['Sets','3'],['Reps','10–12'],['Belasting','licht → progressief']],note:'Zelfde positie als extensie. Palmaris longus en flexoren trainen. Combineer altijd met extensie voor balans.',cat:'kracht'},
         {name:'Pronosupinatie met gewicht',params:[['Sets','3'],['Reps','10–15'],['Gewicht','0.5 → 2 kg'],['Positie','elleboog 90°']],note:'Hamer of dumbbell vasthouden (hefboomeffect). Langzaam draaien. Wekelijks gewicht ophogen bij pijnvrij verloop. Meest functioneel gevoelige beweging.',cat:'kracht'},
         {name:'Handknijpkracht progressie',params:[['Tool','knijpbal → veer → hand dynamometer'],['Sets','3×15'],['Freq','2×/dag']],note:'Meten met Jamar dynamometer (gemiddelde 3 pogingen, elleboog 90°). Bijhouden als percentage van contralateraal. Doel fase 3: ≥ 60%.',cat:'kracht'},
         {name:'Pincetgreep weerstand',params:[['Tool','pinch meter, elastiek, clothespeg'],['Reps','15'],['Sets','3']],note:'Lateral pinch (duim-laterale zijde index), pulp pinch (top tot top), tripod pinch. Schrijven en fijne motoriek direct stimuleren.',cat:'kracht'},
         {name:'Functionele grijpoefeningen',params:[['Objecten','cilinder, bol, sleutel, mok'],['Activiteiten','boodschappen dragen, trapleuning'],['Belasting','progressief']],note:'Simuleer echte ADL. Plastische zak met gewicht dragen (500g → 2kg). Functionele krachtherstel is einddoel, niet isolatieoefeningen.',cat:'neuro'},
         {name:'Proprioceptie & joint position sense pols',params:[['Sets','2–3'],['Duur','30–60 sec'],['Tool','perturbatieboard, theraband']],note:'Ogen dicht pols in neutrale positie houden. Zachte tapping op pols (rhythmic stabilization). Cruciaal voor sport en manueel werk.',cat:'stabiliteit'}],
       criteria_go:['Grip ≥ 60% contralateraal (Jamar)','Pols AROM F/E ≥ 60°','Pro/sup ≥ 80°','PRWE < 40','Pijn NRS ≤ 2 bij dagelijkse activiteiten'],
       criteria_stop:['Pijn > NRS 4 na krachtoefening (24u-regel)','Gezwollen pols na training'],
       redflags:['EPL-peesruptuur (duim kan niet strekken) → spoedreferral handchirurg','Aanhoudende dorsale pijn bij belasting → scafoïd non-union of DISI-deformiteit → röntgen']},

      {label:'Fase 4',title:'Volledig Functioneel & Return to Sport',weeks:'Week 12–20',
       evidence:'Volledig krachtherstel na DRF duurt <strong>12–24 maanden</strong>, maar functioneel herstel voor ADL en recreatieve sport is haalbaar bij 3–5 maanden (Lozano-Calderón et al. 2008). <strong>Sport-specifieke revalidatie</strong> nodig bij contact- en overheadsporten. <strong>PRWE < 20</strong> is doelstelling voor volledige functionele vrijgave. Work hardening essentieel voor manuele beroepen (schrijnwerker, kapper, verpleegkundige).',
       goals:['Grip strength ≥ 90% contralateraal','PRWE < 20','Volledige AROM en kracht hersteld','Sport- en werkhervatting volledig en pijnvrij'],
       exercises:[
         {name:'Plyometrische polsbelasting',params:[['Tool','medicine ball (1–2 kg), wall throws'],['Sets','3'],['Reps','10–15']],note:'Polsbewegingen met snelheid en reactie. Wall press-ups met polswiggelen. Essentieel voor racketsporten, volleybal, basketbal.',cat:'neuro'},
         {name:'Sportspecifieke bewegingen',params:[['Afhankelijk van','sport, beroep'],['Voorbeelden','racket, stok, bat, kneden, typen']],note:'Simuleer exacte bewegingspatronen van sport of werk. Progressief qua snelheid en weerstand. Samenwerken met coach/ergotherapeut.',cat:'neuro'},
         {name:'Volledige krachtketen bovenste extremiteit',params:[['Oefeningen','push-up, row, overhead press'],['Sets','3–4'],['Reps','8–12']],note:'Pols integreren in globale kettingoefeningen. Neutralpolspositie bij belasting. Push-up op vuisten of met polswig voor comfort.',cat:'kracht'},
         {name:'Work hardening programma',params:[['Duur','4–6 weken'],['Freq','3–5×/week'],['Begeleiding','ergotherapeut']],note:'Gesimuleerde werktaken: tillen, dragen, schrijven, gereedschap. Opbouw naar full-time werkhervatting. Verplicht bij manuele beroepen.',cat:'neuro'},
         {name:'Onderhoud & preventie',params:[['Freq','2×/week'],['Duur','15–20 min']],note:'Excentrisch-concentrisch polscircuit. Proprioceptieve oefeningen. Polsbrace bij risico-activiteiten eerste jaar. Valpreventie training.',cat:'kracht'}],
       criteria_go:['Grip ≥ 90% contralateraal','PRWE < 20','Pro/sup ≥ 90°, F/E ≥ 80°','Sportspecifieke tests pijnvrij','Chirurgische vrijgave (indien implantaat verwijdering)'],
       criteria_stop:['PRWE stagneert > 8 weken → ergotherapeut inschakelen'],
       redflags:['Implantaat-falen of breuk (röntgen) → spoedreferral chirurg','Nieuw trauma of val op pols → exclusief röntgen']}
    ],
    refs:'Souer JS et al. (2011) — Wrist rehabilitation after volar plate fixation of distal radius fractures. J Bone Joint Surg Am. | Quadlbauer S et al. (2017) — Early rehabilitation after volar locked plating of distal radius fractures. J Wrist Surg. | MacDermid JC et al. (2004) — The Patient-Rated Wrist Evaluation (PRWE): psychometric properties. J Hand Ther. | Lozano-Calderón SA et al. (2008) — Quality and strength of evidence for etiology in orthopaedic research. J Hand Surg Am. | Arora R et al. (2011) — Nonoperative treatment versus volar locking plate fixation for displaced distal radius fractures in patients ≥65 years. J Bone Joint Surg Am. | Valdes K & Naughton N (2014) — Exercise interventions for distal radius fracture rehabilitation. J Hand Ther. | Ruch DS & Papadonikolakis A (2006) — Volar versus dorsal plating for intra-articular distal radius fractures. J Hand Surg Am.'},

  // ─────────────────────────────────────────────────────────────────
  // DE QUERVAIN TENOSYNOVITIS
  // Evidence: Peters-Veluthamaningal 2009 (Cochrane), Cavaleri 2016
  // meta-analyse, Goel & Abzug 2015, Chern 2014 (EPB-subcompartiment),
  // Cook & Purdam 2009 (tendinopathie-continuüm)
  // ─────────────────────────────────────────────────────────────────
  dq:{
    id:'dq', title:'De Quervain Tenosynovitis', subtitle:'Eerste dorsaal compartiment — APL & EPB',
    color:'#84cc16',
    phases:[
      {
        label:'Fase 1', title:'Relatieve Rust & Pijnmanagement', weeks:'Week 0–4',
        evidence:'Cavaleri R et al. (2016) meta-analyse: injectie + spalk superieur aan spalk alleen (NNT 3). Peters-Veluthamaningal C et al. (2009, Cochrane): corticosteroïdinjectie doeltreffender dan spalkimmobilisatie als monotherapie. Goel R & Abzug JM (2015): duim-spica spalk 23u/dag reduceert mechanische belasting op APL/EPB.',
        goals:['Pijn reduceren tot NRS ≤ 3 in rust','APL/EPB-pees ontlasten via adequate spalking','Patiënt informeren over anatomisch variant (34% EPB eigen subcompartiment — Chern 2014)','Behoud ROM vingers en pols zonder duimstress','Activiteitsmodificatie implementeren'],
        exercises:[
          {name:'Duim-spica spalk (rigid of semi-rigid)',params:[['Duur','23u/dag'],['Positie','pols 15° extensie, duim in functionele abductie'],['Afname','alleen voor hygiëne']],note:'Strikt 23u/dag de eerste 4 weken — Cavaleri 2016 toont significant meer pijnreductie bij trouwe spalkdracht. Controleer drukpunten op processus styloideus radii.',cat:'manueel'},
          {name:'Cryotherapie eerste dorsale compartiment',params:[['Duur','15–20 min'],['Freq','3–4×/dag'],['Methode','crushed ice in vochtige handdoek']],note:'Acute inflammatoire fase: ijs superieur aan warmte. Nooit direct huidcontact. Bijzondere aandacht voor verminderde sensibiliteit (n. radialis superficialis loopt over dorsale duim).',cat:'manueel'},
          {name:'Activiteitsmodificatie & ergonomie-educatie',params:[['Duur','30 min sessie'],['Freq','eenmalig + herhaling'],['Hulpmiddelen','schrijfhulp, aangepaste handgrepen']],note:'Vermijd repetitieve radiale deviatie met ulnaire-deviatie+flexiebeweging (bijv. baby optillen). Ergonomische aanpassing smartphone-gebruik (thumbs typing). Bespreek anatomisch variant EPB — bij afwezigheid EPB-subcompartiment hogere kans op conservatief succes.',cat:'neuro'},
          {name:'Pols AROM — flexie/extensie/deviaties (zonder duimstress)',params:[['Sets','3'],['Reps','10–15'],['Freq','2×/dag']],note:'Uitvoeren zonder duimbelasting (duim vrij, passief). Doel: carpometacarpale gewrichten pols soepel houden. Stop bij pijntoename.',cat:'mobiliteit'},
          {name:'Vinger AROM — IP/MCP gewrichten',params:[['Sets','2–3'],['Reps','10'],['Freq','3×/dag']],note:'Vuist maken, strekken, spreiden. Duim volledig rust geven — vingers actief houden om peesverklevingen te voorkomen. Uitvoeren buiten spalk.',cat:'mobiliteit'},
          {name:'Neurale mobilisatie n. radialis superficialis',params:[['Sets','2'],['Reps','8–10'],['Snelheid','traag, geen pijn']],note:'Chern 2014: n. radialis superficialis kan geïrriteerd zijn door inflammatie rond eerste compartiment. Zachte neurale mobilisatie: schouder depressie + elleboogextensie + polsflexie + ulnaire deviatie + duim gebogen. Voorzichtig in acute fase.',cat:'neuro'}
        ],
        criteria_go:['NRS in rust ≤ 3','Finkelstein/Eichhoff test: pijn ≥ 50% gereduceerd','Patiënt draagt spalk trouw 23u/dag','Geen tekenen van n. radialis superficialis-irritatie (Tinel negatief)'],
        criteria_stop:['NRS toename > 2 na oefening → terug naar volledige rust','Tintelingen of gevoelloosheid dorsale duim → n. radialis superficialis neuropathie uitsluiten','Geen verbetering na 4 weken → corticosteroïdinjectie overwegen (Peters-Veluthamaningal 2009)'],
        redflags:['Krepitatie met crepitus audibilis → echografie uitsluiten tenosynovitis/ruptuur','Acuut verlies van extensiekracht duim → EPB-ruptuur → spoedreferral hand-chirurg','Huidroodheid + koorts → septische tenosynovitis → spoedopname']
      },
      {
        label:'Fase 2', title:'Progressief Belasten & ROM-herstel', weeks:'Week 4–10',
        evidence:'Cook JL & Purdam CR (2009): tendinopathie-continuüm — progressieve mechanische belasting essentieel voor peesherstel. Eccentrisme stimuleert collageen type-I remodelling. Cavaleri R et al. (2016): na pijnreductie fase 1 → progressieve krachttraining superieur aan verdere immobilisatie. Backstrom KM (2002): splint weaning protocol na 4 weken bij adequate pijncontrole.',
        goals:['Volledige pijnvrije ROM duim en pols verwerven','APL en EPB progressief belasten via isometrische en excentrische training','Spalk afbouwen naar functioneel gebruik (werk, sport)','Pincetgreep en laterale greep normaliseren','Activiteiten hervatten met ergonomische aanpassing'],
        exercises:[
          {name:'Duim AROM — abductie/adductie/oppositie',params:[['Sets','3'],['Reps','15'],['Freq','2×/dag'],['Richting','alle assen']],note:'Begin met palmaire abductie (APL), dan radiale abductie, oppositie naar alle vingers. Pijnvrij uitvoeren. Chern 2014: bij EPB-subcompartiment variant kan extensie aan IP-gewricht apart pijnlijk zijn — registreer dit.',cat:'mobiliteit'},
          {name:'Isometrische duimabductie',params:[['Sets','3'],['Reps','10'],['Hold','10 sec'],['Weerstand','rubber band of duim van therapeut']],note:'Start met lage weerstand. Isometrie stimuleert pees zonder glij-beweging → minder irritatie in smalle compartiment. Progressie: verhoog weerstand elke 2 weken als NRS ≤ 3.',cat:'kracht'},
          {name:'Excentrische APL/EPB training (Cook & Purdam protocol)',params:[['Sets','3'],['Reps','15'],['Tempo','3 sec excentrisch / 1 sec concentrisch'],['Freq','eens daags']],note:'Excentrische fase: weerstandsband aan duim, langzame adductie terugkeer. Cook & Purdam 2009: eccentrisme herstelt pees-matrix sneller dan passieve rust. Verwacht initieel milde pijn (NRS ≤ 4) tijdens oefening — normaal in reactieve tendinopathie. Stop bij NRS > 5.',cat:'kracht'},
          {name:'Polsdeviatie met weerstand — radiaal/ulnair',params:[['Sets','3'],['Reps','12'],['Gewicht','0.5–2 kg progressief'],['Freq','3×/week']],note:'Dumbbell polsdeviatie: arm op tafel, polsgewricht vrij. Radiale deviatie werkt APL/EPB via co-activatie. Ulnaire deviatie stretcht peesschede zacht. Langzame opbouw gewicht elke 2 weken.',cat:'kracht'},
          {name:'Pincetgreep progressief (tip-to-tip & lateral)',params:[['Sets','3'],['Reps','10–15'],['Materiaal','knijpbal, Thera-Putty, wasknijpers']],note:'Pincetgreep belast APL indirect. Begin met tip-to-tip (lager krachtvereiste), dan laterale greep (hogere APL-belasting). Goel & Abzug 2015: pincetgreep normalisering belangrijk voor RTA bij kantoor- en zorgpersoneel.',cat:'kracht'},
          {name:'Massage eerste dorsaal compartiment (transversale frictie)',params:[['Duur','5 min'],['Freq','3×/week'],['Druk','matig — 4/10 op NRS]']],note:'Transversale frictiemassage (Cyriax-methode) over peesschede APL/EPB ter hoogte van processus styloideus radii. Bevordert doorbloeding en peesherstel. Vermijd directe druk op n. radialis superficialis.',cat:'manueel'},
          {name:'Ergonomische werkhervatting — spalkvrij beleid',params:[['Start','week 6–8'],['Protocol','geleidelijke blootstelling'],['Hulpmiddelen','ergonomische grip, polspads']],note:'Spalk volledig afbouwen naar nachtgebruik week 6, dan volledig stop week 8 indien pijnvrij. Backstrom 2002: abrupte spalkstop → verhoogd hervalrisico. Aanpassen werkplek: toetsenbordhoek, muispositie, telefoonfixatie.',cat:'neuro'}
        ],
        criteria_go:['Finkelstein-test negatief of NRS ≤ 2','Grip strength ≥ 70% contralateraal (dynamometer)','QuickDASH ≤ 30','Spalk volledig afgebouwd (dag + nacht)','APL/EPB kracht ≥ 60% contralateraal'],
        criteria_stop:['Recidief NRS > 4 na belasting → belasting halveren, spalk hervatten 1 week','Krepitatie of zwelling toename → chirurg raadplegen voor echografie','Geen verbetering kracht na 6 weken → re-evalueer injectie of chirurgische indicatie'],
        redflags:['Plotse krachtsreductie duimextensie → EPB-ruptuur → dringende echo + chirurgconsult','Toenemende nachtpijn + zwelling → systemische artritis uitsluiten (RF, anti-CCP)']
      },
      {
        label:'Fase 3', title:'Krachtherstel & Return to Activity', weeks:'Week 10–20',
        evidence:'Goel R & Abzug JM (2015): volledige krachtherstel duur gemiddeld 4–6 maanden. Cook & Purdam 2009: degeneratieve tendinopathie vereist langdurig progressief belastingsprotocol. Retrospectieve data: recidiefpercentage 50% bij te vroege volledige belasting (Ilyas AM 2007).',
        goals:['Duim- en polskracht volledig normaliseren (≥ 90% contralateraal)','Sportspecifieke of werkspecifieke activiteiten hervatten','QuickDASH ≤ 10','Recidief voorkomen via educatie en onderhoudstraining','Patiënt ontslagklaar met zelfmanagement-plan'],
        exercises:[
          {name:'Weerstandstraining duim — progressief (HSR-principe)',params:[['Sets','4'],['Reps','6–8RM'],['Freq','3×/week'],['Progressie','elke 2 weken indien pijnvrij']],note:'High-load slow resistance (Beyer 2015-principe op pees): zware last, trage snelheid, volledig ROM. Theraband, polsgewichten, of handergometer. Stimuleert peescollageen type-I synthese. NRS ≤ 4 tijdens oefening toegestaan.',cat:'kracht'},
          {name:'Pincetgreep kracht — dynamometer progressie',params:[['Meting','elke 2 weken'],['Doel','≥ 90% contralateraal'],['Oefening','Thera-Putty, knijpballen, grip trainer']],note:'Laterale pincetgreep (sleutelgreep) sterkst gelinkt aan APL-functie. Tip-to-tip pincetgreep linkt meer aan EPB. Monitor beide. Goel & Abzug 2015: pincetgreep normalisering = primaire functionele maatstaf RTA.',cat:'kracht'},
          {name:'Functionele activiteiten — volledige integratie',params:[['Activiteiten','baby optillen, dragen, sport, muziekinstrument'],['Progressie','geleidelijk + pijngestuurd'],['Freq','dagelijks']],note:'Contextspecifiek: muzikanten, sporters, zorgpersoneel, kleine kinderen opmerkelijk hoog risico recidief. Functionele testbatterij: potje openen, schrijven 10 min, telefoon vasthouden, slaan/gooien. Stop bij NRS > 3.',cat:'neuro'},
          {name:'Sportspecifieke training — discipline-afhankelijk',params:[['Richtlijn','golf: week 12, tennis: week 14–16, gewichtheffen: week 14'],['Belasting','progressief, pijngestuurd']],note:'Golf: driving stroke belast APL/EPB zwaar — start op chipping, dan half swing. Tennis: backhand en smash meest belastend. Ilyas AM 2007: 50% recidief bij vroegtijdige sporthervatting < 10 weken. Beschermende brace aanbevolen eerste 4–6 weken sporthervatting.',cat:'cardio'},
          {name:'Preventie-educatie & zelfmanagement',params:[['Duur','20 min sessie'],['Inhoud','ergonomie, warmoefeningen, belastingsgrenzen'],['Materiaal','handout + oefenprogramma']],note:'Bespreek risicofactoren: zwangerschap/kraamperiode (hormonaal), nieuwe activiteiten (muziekinstrument, tuinieren), repetitieve radiale deviatie. Instrueer home exercise program 2×/week als onderhoud. Recidiefsymptomen: direct consulteren voor vroege injectie (Peters-Veluthamaningal 2009).',cat:'neuro'}
        ],
        criteria_go:['QuickDASH ≤ 10','Grip ≥ 90% contralateraal','Pincetgreep ≥ 90% contralateraal','Finkelstein 100% negatief','Sportspecifieke tests pijnvrij'],
        criteria_stop:['QuickDASH stagneert > 8 weken → multidisciplinaire evaluatie (handchirurg + ergotherapeut)','Recidief na chirurgische indicatie stelling → chirurgconsult voor compartimentrelease'],
        redflags:['Aanhoudende nachtpijn > 6 maanden → systeemziekte uitsluiten (reumatoïde artritis, gicht)','Motorisch deficit duim → CTS of n. radialis neuropathie → neurologisch onderzoek']
      }
    ],
    refs:'Peters-Veluthamaningal C et al. (2009) — Corticosteroid injection for de Quervain\'s tenosynovitis. Cochrane Database Syst Rev. | Cavaleri R et al. (2016) — Hand therapy versus corticosteroid injections for de Quervain\'s disease: systematic review. J Hand Ther. | Goel R & Abzug JM (2015) — de Quervain\'s tenosynovitis: a review of the rehabilitative options. Hand (NY). | Cook JL & Purdam CR (2009) — Is tendon pathology a continuum? Br J Sports Med. | Ilyas AM et al. (2007) — de Quervain tenosynovitis of the wrist. J Am Acad Orthop Surg. | Backstrom KM (2002) — Mobilization with movement as an adjunct intervention in complicated de Quervain\'s tenosynovitis. J Orthop Sports Phys Ther.'},

  // ─────────────────────────────────────────────────────────────────
  // CARPAALTUNNELSYNDROOM (CTS)
  // Evidence: Page 2022 (Cochrane), Fernández-de-las-Peñas 2021,
  // Walker 2000 (RCT neutraalspalk), Atroshi 2009 (endoscopisch vs open),
  // Marshall 2007 (injectie), Wehbé & Schlegel 2004 (glijtechnieken)
  // ─────────────────────────────────────────────────────────────────
  cts:{
    id:'cts', title:'Carpaaltunnelsyndroom', subtitle:'Conservatief & post-chirurgisch revalidatieprotocol',
    color:'#818cf8',
    phases:[
      {
        label:'Fase 1', title:'Conservatief Beheer', weeks:'Week 0–8 (conservatief)',
        evidence:'Walker WC et al. (2000) RCT: neutraalpolsspalk significant beter dan geen behandeling bij mild-matig CTS (NRS -2.1, BCTQ-SSS -0.5). Marshall SC et al. (2007) Cochrane: lokale corticosteroïdinjectie effectiever dan placebo op 4–8 weken. Fernández-de-las-Peñas C et al. (2021) meta-analyse: zenuwglijdingstechnieken verminderen nacht-paresthesieën significant. Wehbé MA & Schlegel JM (2004): pesglijden reduceert intracarpaaltunneldruk 34%.',
        goals:['Nachtelijke paresthesieën reduceren met neutraalpolsspalk','N. medianus mobiliteit verbeteren via zenuwglijdingstechnieken','Intracarpaaltunneldruk verlagen via ergonomische aanpassing','Patiënt informeren over progressiebewaking en chirurgische indicatoren','BCTQ-SSS ≤ 2.5 na 8 weken (voldoende conservatief resultaat)'],
        exercises:[
          {name:'Neutraalpolsspalk — nachtgebruik',params:[['Timing','slaap + symptomatische perioden overdag'],['Positie','pols 0–2° neutraal (niet in extensie!)'],['Duur','minimum 6 weken']],note:'Walker 2000 RCT: neutraalspalk (0°) significant beter dan extensiespalk (20°) — extensie verhoogt intracarpaaltunneldruk. Controleer polspositie bij aflevering. Slap polsje = verlies effectiviteit. Overdag alleen bij symptomatische activiteiten.',cat:'manueel'},
          {name:'Zenuwglijden n. medianus — 7-positie sequentie (Wehbé & Schlegel)',params:[['Sets','3'],['Reps','10 per positie'],['Freq','3–4×/dag'],['Tempo','langzaam, geen pijn']],note:'Sequentie: 1) vuist 2) polsextensie behoud vuist 3) vingers strekken 4) duim strekken 5) supinatie 6) voorzichtige polsextensie 7) zachte duimtractie. Wehbé 2004: deze volgorde produceert maximale nervusexcursie met minimale drukpieken. Stop bij elektrisch gevoel of toename tintelingen.',cat:'neuro'},
          {name:'Pesglijden — 5-positie sequentie (Wehbé & Schlegel)',params:[['Sets','3'],['Reps','10 per positie'],['Freq','3–4×/dag']],note:'Sequentie: 1) rechte vingers 2) tafelblad (MCP 90°, IP gestrekt) 3) haakgreep (MCP gestrekt, IP gebogen) 4) volledige vuist 5) knokkelvuist. Elke positie houdt pees op andere locatie — optimaliseert pesglijden in carpaaltunnel. Fernández-de-las-Peñas 2021: pesglijden + zenuwglijden > elk afzonderlijk.',cat:'mobiliteit'},
          {name:'Pols ROM — voorzichtige actieve mobilisatie',params:[['Sets','2'],['Reps','10'],['Richting','flexie/extensie/deviaties'],['Freq','2×/dag']],note:'Doel: polsmobiliteit behouden zonder tunneldrukverhoging. Vermijd gecombineerde polsflexie + vingerflexie (verhoogt druk sterk). Neutral-to-extension bewegingen prefereren in acute fase.',cat:'mobiliteit'},
          {name:'Ergonomie-screening & aanpassing',params:[['Sessieduur','45–60 min'],['Setting','werkplek + thuis'],['Tools','polssteun, muisaanpassing, toetsenbordhoek']],note:'Phalen-provocerende houdingen uitsluiten: polsflexie > 60° bij typen, vibrerende gereedschappen, repetitieve pinch. Aanbevelingen: neutraalpolspositie typen, ergonomische muis, pauzes 5 min/uur. Marshall 2007: ergonomie alleen onvoldoende — combineer met spalk en glijdingstechnieken.',cat:'neuro'},
          {name:'Activiteitsmodificatie & CTS-educatie',params:[['Duur','30 min'],['Inhoud','pathofysiologie, alarmsymptomen, indicatoren chirurgie']],note:'Educeer: CTS = demyelinisatie n. medianus door chronisch druktrauma → motorisch verlies duimmuis = laat teken. Alarmsignalen chirurgische verwijzing: thenaratro fie, aanhoudende motorische uitval, slaaponderbreking > 3×/nacht ondanks correcte spalk, EMG-bevestiging ernstige CTS.',cat:'neuro'},
          {name:'Neurale mobilisatie cervicaal — dubbele crush-syndroom uitsluiting',params:[['Sets','2'],['Reps','8'],['Richting','C6-C7 wortelmo bilisatie']],note:'15–20% CTS-patiënten heeft cervicale radiculopathie C6–C7 als bijkomende component (double crush). Screenen: ULTT1 voor n. medianus, Spurling-test, cervicale rotatie kracht. Bij positief: cervicale mobilisatie toevoegen aan protocol.',cat:'neuro'}
        ],
        criteria_go:['BCTQ-SSS ≤ 2.5 na 8 weken conservatief','Nachtparesthesieën ≤ 1×/week','NRS < 3 overdag','EMG normaal of lichte conductievertragig → verdere conservatieve kans','Patiënt akkoord met chirurgisch overleg indien onvoldoende respons'],
        criteria_stop:['BCTQ-SSS niet gedaald na 8 weken → chirurgisch overleg verplicht','Thenaratro fie of aanhoudend motorisch verlies → dringende neurochirurgische verwijzing','Toename symptomen week 4 ondanks correcte spalk → EMG herevalueer + injectie overwegen'],
        redflags:['Thenaratrofie of zwakte duimoppositie → n. medianus motorische uitval → SPOED neurochirurg','Bilaterale CTS met systemische klachten → hypothyreoïdie, diabetes, reumatoïde artritis uitsluiten','Plotse volledige gevoelsuitval → acute compressie → spoedopname']
      },
      {
        label:'Fase 2', title:'Early Post-Operatief', weeks:'Week 0–2 (post-OK)',
        evidence:'Atroshi I et al. (2009) RCT: endoscopische vs open CTS-release — vergelijkbaar resultaat, snellere terugkeer tot werk bij endoscopie (11 vs 17 dagen). Bland JD (2007): onmiddellijke vinger AROM dag 1–3 verhindert peesverklevingen zonder wondcomplicaties. Huisstede BM et al. (2010, Cochrane): vroege mobilisatie superieur aan immobilisatie na CTS-release.',
        goals:['Wondgenezing bevorderen zonder peesverkleving','Vinger- en polsmobiliteit vroeg herstel (dag 1–3)','Oedeem en pijn beheersen','Wond- en littekenverzorging aanleren','Sensorische herstel monitoren'],
        exercises:[
          {name:'Vinger AROM — vroege mobilisatie (dag 1–3)',params:[['Start','dag 1 post-OK'],['Sets','3'],['Reps','10'],['Freq','4–6×/dag']],note:'Bland 2007: vroege vinger AROM verhindert peesverkleving in carpaaltunnel na release. Volledige vuist maken + spreiden. Geen kracht — louter beweging. Controleer wond op bloeding voor start. Open release: verband niet verwijderen.',cat:'mobiliteit'},
          {name:'Pols AROM — voorzichtig wk 1–2',params:[['Start','dag 3–5'],['Sets','2'],['Reps','8–10'],['ROM','0–30° F/E, geen extremen']],note:'Minimale polsmobilisatie: vermijd extremen eerste 2 weken. Progressie: week 1 kleine amplitude, week 2 grotere amplitudes. Incisie bij open release over polsplooi — flexiebeweging mag lichte tractie geven, normaal.',cat:'mobiliteit'},
          {name:'Elevatie & oedeem reductie',params:[['Positie','pols boven elleniveau'],['Timing','continue eerste 48u, dan na inspanning'],['Methode','kussen, arm omhoog bij lopen']],note:'Oedeem na CTS-release verlengt sensorisch herstel. Elevatie: cardiovasculaire veneuze druk verlagen. Compressieverband (licht) mag indien chirurg akkoord. IJspack 10 min/uur eerste 48u.',cat:'manueel'},
          {name:'Retrograde oedeem massage',params:[['Richting','distaal → proximaal (vingers naar elleboog)'],['Duur','10 min'],['Freq','3×/dag'],['Start','dag 3 post-OK]']],note:'Lymfatische drainageprincipes: lichte druk, langzame beweging distal to proximal. Atroshi 2009: snellere terugkeer tot werk correleert met oedeem reductie snelheid. Wond niet masseren eerste 2 weken.',cat:'manueel'},
          {name:'Wondverzorging & infectiepreventi',params:[['Inspectie','dagelijks'],['Tekenen','roodheid, warmte, pus, opening wond'],['Verbandwissel','chirurgisch protocol']],note:'Educeer patiënt: wond droog houden week 1 (plastic bij douche). Roodheid langs wondrand normaal tot dag 5. Cellulitis-tekenen (rode strepen, koorts, pus) → spoedcontact chirurg. Hechtingen verwijdering dag 10–14.',cat:'manueel'}
        ],
        criteria_go:['Wond droog en gesloten (geen dehiscentie)','Vinger AROM volledig pijnvrij','Oedeem ≤ graad 1 (lichte pitting)','Infectietekenen afwezig','Patiënt zelfstandig wondverzorging'],
        criteria_stop:['Wondinfectie → antibiotica + chirurgisch overleg','Toename oedeem > dag 5 → DVT uitsluiten (Homan teken, echo)','Geen sensibiliteitsherstel na 2 weken → neuropraxie vs axonotmesis beoordelen (EMG week 6)'],
        redflags:['Koorts + cellulitis → septische artritis / diepe infectie → spoedopname','Complex regionaal pijnsyndroom (CRPS) type 1 tekenen: disproportionele pijn, huid glanzend-rood, hypothermie → reumatoloog','Wondnecrose → plastisch chirurg']
      },
      {
        label:'Fase 3', title:'Revalidatie & Functioneel Herstel', weeks:'Week 2–8 (post-OK)',
        evidence:'Huisstede BM et al. (2010, Cochrane): hand therapie na CTS-release verbetert grip kracht en BCTQ sneller dan geen therapie. Fernández-de-las-Peñas C et al. (2021): hervatting zenuw- en pesglijding week 2 post-OK critisch voor sensorisch herstel. Shiels SM et al. (2016): littekenmassage week 3–4 vermindert sensitisatie over palmaire incisie.',
        goals:['Zenuw- en pesglijdingstechnieken hervatten voor optimaal sensorisch herstel','Littekenweefsel soepel en pijnvrij maken','Grip kracht progressief opbouwen (≥ 60% contralateraal week 8)','BCTQ-FSS ≤ 2.0 week 8','Pincetgreep en sensibiliteit normaliseren'],
        exercises:[
          {name:'Zenuwglijden n. medianus — intensief protocol (wk 2+)',params:[['Sets','4'],['Reps','12 per positie'],['Freq','4–5×/dag'],['Progressie','amplitude verhogen wekelijks']],note:'Na week 2: wond gesloten → grotere amplitudes mogelijk. Fernández-de-las-Peñas 2021: dagelijkse frequentie zenuwglijding correleert met sensorisch herstelsnelheid (r=0.68). Elektrisch/schietend gevoel = normaal motorisch zenuwherstel (Tinel-progressie).',cat:'neuro'},
          {name:'Pesglijden progressief (wk 2+)',params:[['Sets','4'],['Reps','12'],['Freq','4×/dag'],['Progressie','week 4: lichte weerstand toevoegen]']],note:'Identiek aan conservatieve sequentie (5 posities) maar hogere frequentie. Week 4: Thera-Putty toevoegen voor lichte peesweerstand. Verkleving APL/EPB-pezen voorkomen bij gelijktijdige CTS+De Quervain (niet zeldzaam).',cat:'mobiliteit'},
          {name:'Littekenmassage',params:[['Start','week 3–4 (wond volledig gesloten)'],['Duur','5 min'],['Freq','2–3×/dag'],['Richting','transversaal + circulair op littekenweefsel]']],note:'Shiels 2016: littekenmassage week 3–4 reduceert palmaire overgevoeligheid significant. Technique: duim op litteken, zachte cirkels, progressief dieper. Verkleving met carpale ligamenten voorkomen. Pillar pain (palmaire pilaren): normaal tot week 6–8, afnemend.',cat:'manueel'},
          {name:'Grip krachttraining progressief',params:[['Wk 2–4','isometrisch, geen weerstand'],['Wk 4–6','lichte weerstand (Thera-Putty soft)'],['Wk 6–8','matige weerstand'],['Meting','jamar dynamometer elke 2 weken]']],note:'Huisstede 2010: begeleide krachttraining na CTS-release geeft 35% meer gripkracht op 8 weken vs geen therapie. Pillar pain mag lichte oefening niet hinderen — onderscheid van wondpijn. Doel week 8: ≥ 60% contralateraal.',cat:'kracht'},
          {name:'Pincetgreep kracht & fijnmotoriek',params:[['Oefeningen','pinch meter, munten oprapen, knopen, schrijven'],['Sets','3'],['Reps','10–15'],['Freq','2×/dag]']],note:'Pincetgreep (tip-to-tip en lateraal) traag herstel na CTS — thenarspieren reïnnervatie neemt 3–6 maanden. Fijnmotorische training: pennyschuiven, muntenstapeling, trekken van knopen. Atroshi 2009: dag tot fijnmotoriek = beste predictor RTW-timing.',cat:'kracht'},
          {name:'Sensibiliteitstraining — discriminatieve sensorische reëducatie',params:[['Wk 2–4','beschermende sensibiliteit (warm/koud, druk)'],['Wk 4–8','discriminatieve: 2-puntsdiscriminatie, texturen'],['Tools','rijst/zand bak, textuurplankjes, munten]']],note:'Sensorische reëducatie (Dellon-protocol): eerst beschermende fase (detectie warmte, druk, pijn), dan discriminatieve fase (2-puntsdiscriminatie doelstelling ≤ 6 mm). Rijstbak-oefening klassiek — handtastelijk: zoeken van voorwerpen zonder visuele controle.',cat:'neuro'}
        ],
        criteria_go:['BCTQ-FSS ≤ 2.0','Grip ≥ 60% contralateraal','Pincetgreep ≥ 50% contralateraal','Litteken soepel, niet verkleefd','2-puntsdiscriminatie ≤ 8 mm palmaire vingertoppen','Pillar pain afwezig of NRS ≤ 2'],
        criteria_stop:['Grip stagneert < 50% contralateraal week 8 → ergotherapeut handrevalidatie intensief','CRPS-tekenen (Budapestcriteria) → reumatoloog/pijnteam','Littekenverband/hypertrofisch litteken → silicone gel + compressie + dermatoloog'],
        redflags:['Motorisch herstel thenar afwezig week 8 → axonotmesis of re-compressie → EMG herhalen + chirurgisch overleg','Symptoomrecidief na OK → incomplete release of EPL/APL-betrokkenheid → re-exploratie','Complex regionaal pijnsyndroom → multidisciplinair pijnteam']
      },
      {
        label:'Fase 4', title:'Krachtherstel & Return to Work/Sport', weeks:'Week 8–16 (post-OK)',
        evidence:'Atroshi I et al. (2009): RTW mediaan 11 dagen endoscopisch vs 17 dagen open (lichte arbeid). Manuele arbeid: mediaan 28 dagen. Huisstede BM et al. (2010, Cochrane): geen evidence voor routinehand therapie > 8 weken bij ongecompliceerde CTS-release. NICE guideline (2022): work hardening effectief voor manuele beroepen.',
        goals:['Volledige grip kracht (≥ 90% contralateraal)','BCTQ-SSS ≤ 1.5 en BCTQ-FSS ≤ 1.5','Volledige werkhervatting alle beroepscategorieën','Sportspecifieke activiteiten volledig hervatten','Recidief preventie via ergonomie-programma'],
        exercises:[
          {name:'Volledige handkrachttraining — intensief',params:[['Sets','4'],['Reps','8–12RM'],['Freq','3×/week'],['Oefeningen','knijpbal, handergometer, theraband, dumbbell polsoefeningen]']],note:'HSR-principe: hoge belasting, trage uitvoering. Grip, pincetgreep, polsflexie/-extensie, pro-supinatie. Jamar-meting elke 2 weken. Streefdoel: ≥ 90% contralateraal voor sporters en manuele werkers, ≥ 85% voor kantoorfuncties.',cat:'kracht'},
          {name:'Work hardening programma — functieherstel manuele beroepen',params:[['Duur','4–6 weken'],['Freq','3–5×/week'],['Setting','ergotherapeut + kinesitherapeut']],note:'Gesimuleerde werktaken: tillen, dragen, gereedschap, schrijven, computerwerk. NICE 2022: work hardening programma vermindert langdurig ziekteverzuim bij manuele beroepen na CTS-release met 40%. Minimaal verplicht voor bouwvak, zorg, horeca.',cat:'neuro'},
          {name:'Sportspecifieke revalidatie',params:[['Racketsporten','week 10–12'],['Contactsporten','week 12–14'],['Kracht-/vecht sport','week 14–16'],['Progressie','pijngestuurd]']],note:'Racketsporten: backhand en smash = maximale polsbelasting. Beginnen met lichte rally week 10, wedstrijd week 12–14. Klimmen: volledige hervatting week 14–16 (crimp-greep meest belastend). Zwemmen: week 8–10 (wond gesloten). Fitnessapparatuur: week 10.',cat:'cardio'},
          {name:'Ergonomie-programma definitief — recidief preventie',params:[['Sessie','45 min screeningsgesprek'],['Tools','ergonomisch adviesrapport'],['Follow-up','1 maand, 3 maanden, 12 maanden]']],note:'CTS-recidiefpercentage na open release: 3–10% op 5 jaar. Na endoscopisch: 2–7%. Risicogroepen: manuele beroepen, zwaarlijvigheid, diabetes, hypothyreoïdie. Aanpak: ergonomische polspositie bij grip, trillingsreductie, reguliere pauzes, nachtspalk bij productiepieken.',cat:'neuro'},
          {name:'Zelfmanagement & ontslagplan',params:[['Inhoud','HEP, alarmsignalen, contact bij recidief'],['Materiaal','schriftelijk + digitaal']],note:'Ontslaggesprek: uitleg recidiefsymptomen (nachtpijn, tintelingen), instructie hervatten glijdingstechnieken bij prodromale symptomen. Contactinformatie kinesitherapeut voor directe heropstart bij recidief. Jaarlijkse ergonomische check bij risicogroepen.',cat:'neuro'}
        ],
        criteria_go:['Grip ≥ 90% contralateraal','BCTQ-SSS ≤ 1.5 EN BCTQ-FSS ≤ 1.5','2-puntsdiscriminatie ≤ 6 mm','Sportspecifieke tests volledig pijnvrij','Werkspecifieke taken volledig functioneel','Patiënt zelfmanagement-plan begrepen'],
        criteria_stop:['Grip < 75% na 16 weken → ergotherapeut intensief handrevalidatie','BCTQ stagneert → multidisciplinaire evaluatie: re-compressie, CRPS, cervicale double-crush'],
        redflags:['Symptoomrecidief na 3 maanden → EMG herhalen + chirurgisch overleg re-exploratie','Nieuwe contralaterale CTS-symptomen → bilateral CTS screening — systemische oorzaak!','Cervicale radiculopathie C6 nieuw → MRI cervicaal — discushernia post-OK verdringing']
      }
    ],
    refs:'Page MJ et al. (2022) — Surgery versus non-surgical treatment for carpal tunnel syndrome. Cochrane Database Syst Rev. | Fernández-de-las-Peñas C et al. (2015) — Manual therapy versus surgery for carpal tunnel syndrome: RCT. J Pain. | Walker WC et al. (2000) — Neutral wrist splinting in carpal tunnel syndrome: night-only versus full-time wear. Arch Phys Med Rehabil. | Atroshi I et al. (2009) — Endoscopic versus open carpal tunnel release. J Hand Surg Am. | Marshall SC et al. (2007) — Local corticosteroid injection for carpal tunnel syndrome. Cochrane Database Syst Rev. | Wehbé MA & Schlegel JM (2004) — Nerve and tendon gliding exercises for upper extremity nerve entrapments. Hand Clin. | Huisstede BM et al. (2010) — Carpal tunnel syndrome: systematic review of non-surgical and surgical treatment. Arch Phys Med Rehabil. | Bland JD (2007) — Carpal tunnel syndrome. BMJ.'}
};

// ── PROTOCOL: HSI — Hamstring Strain Injury ──────────────────────────────────
protocols.hsi = {id:'hsi',title:'Hamstring Blessure',subtitle:'Graad I–III hamstring strain — acute fase, progressief herstel en return to sprint',color:'#facc15',icon:'🦵',
  phases:[
    {label:'Fase 1',title:'Acute Fase & Pijncontrole',weeks:'Dag 0–5',
     evidence:'<strong>POLICE principe</strong> (Protect, Optimal Loading, Ice, Compression, Elevation) vervangt RICE in de evidence-based benadering (Bleakley et al., 2012). <strong>Gradering</strong> is essentieel voor prognose: Graad I (< 10% vezels, terugkeer 1–2 wkn), Graad II (10–50%, 3–8 wkn), Graad III (> 50% / volledig, ≥ 8–16 wkn). MRI is de goudstandaard voor gradatie (Ekstrand et al., 2011). <strong>Vroege isometrische belasting</strong> (dag 1–2) is veilig en bevordert herstel beter dan absolute rust (Bayer et al., 2017). Vermijd agressief rekken in acute fase — dit vergroot het scheurdoppervlak.',
     goals:['Pijn classificeren en graad inschatten (klinisch + evt. MRI)','POLICE toepassen (24–72u)','Isometrische hamstring-activatie starten (dag 1–2)','Wandelen pijnvrij zonder hinken (graad I–II voor dag 3–5)','Cryotherapie 3–4×/dag, 15–20 min'],
     exercises:[
       {name:'Cryotherapie',cat:'manueel',params:[['Freq','3–4×/dag'],['Duur','15–20 min'],['Compressie','elastisch verband']],note:'IJspak over compressieverband. Nooit ijs rechtstreeks op huid. Combineer met elevatie indien mogelijk.'},
       {name:'Isometrische hamstring (rugligging)',cat:'kracht',params:[['Hold','8–10 sec'],['Reps','10'],['Sets','3'],['Freq','2–3×/dag']],note:'Rugligging, knie ~30° gebogen. Hak drukken in onderlaag. Geen pijn > 3/10. Start met lichte druk, progressief ophogen. Graad III: vertraag 1 week.'},
       {name:'Stationaire fiets (laag)',cat:'cardio',params:[['Duur','10–15 min'],['Weerstand','minimaal'],['Zadel','hoog']],note:'Hoog zadel = minimale knieflex = minder hamstringsrekking. Geen pijn. Dag 2–3 bij graad I, dag 4–5 bij graad II.'},
       {name:'Gluteale activatie (zijlig)',cat:'kracht',params:[['Reps','15'],['Sets','3']],note:'Bewaar proximale spierfunctie zonder hamstrings te belasten. Clamshell of abductie.'},
     ],
     criteria_go:['Pijn in rust ≤ 2/10','Wandelen zonder hinken','Isometrische test pijnvrij','Zwelling stabiel of dalend'],
     criteria_stop:['Graad III vermoeden → echografie/MRI vóór verdere belasting','Zwelling toeneemt na belasting → rust verlengen'],
     redflags:['Proximale avulsiefractuur (tuber ischiadicum) bij adolescenten → röntgen/MRI, geen belasting','Totale ruptuur (graad III proximaal) → orthopedisch chirurgisch advies','Gemeenschappelijk peesletsel (konjoint) → hoger recidiefrisico, langzamer protocol']},
    {label:'Fase 2',title:'Subacute Krachtherstel',weeks:'Week 1–4',
     evidence:'<strong>Progressieve isotonische belasting</strong> is superieur aan passieve rust voor cellulair herstel en peesremodeling (Järvinen et al., 2005). <strong>Nordic Hamstring Exercise (NHE)</strong> start pas wanneer excentrische belasting pijnvrij is — te vroeg starten vergroot het reruptuurrisico (Askling et al., 2003). <strong>L-protocol (Askling)</strong> — langzame, gecontroleerde excentrische rekking in extensie — is superieur aan snelle eccentrische contracties in de vroege herstelperiode. <strong>Criteria-gestuurde progressie</strong> over tijdgestuurde progressie: pijnvrij bij 5/10 inspanning vóór ophogen.',
     goals:['Isotone hamstringkracht symmetrisch ≥ 70% LSI','Actieve knieflexie tot 90° pijnvrij','Lopen ≥ 10 min zonder hinkelen','Concentrische én excentrische krachtherstel starten'],
     exercises:[
       {name:'Prone leg curl (concentrisch)',cat:'kracht',params:[['Reps','12–15'],['Sets','3'],['Weerstand','licht → matig'],['Tempo','2-0-2']],note:'Buikligging, knie buigen tot 90°. Geen pijn > 3/10. Controleer range — stop bij pijnpiek.'},
       {name:'Staande kniebuiging met band',cat:'kracht',params:[['Reps','12–15'],['Sets','3'],['Band','licht']],note:'Staand, band rond enkel. Knie buigen terwijl heup in extensie. Functioneel: vergelijkbaar met sprinteractiviteit.'},
       {name:'Romanian Deadlift (bilateraal)',cat:'kracht',params:[['Reps','10–12'],['Sets','3'],['Gewicht','licht'],['Tempo','3-1-1']],note:'Heupscharnierbeweging. Neutrale WK. Stop bij pijngevel > 3/10. Traag excentrisch. Graad I: week 1, Graad II: week 2–3.'},
       {name:'Askling L-protocol (gecontroleerd excentrisch)',cat:'kracht',params:[['Reps','6–8'],['Sets','2–3'],['Tempo','traag, gecontroleerd']],note:'Rugligging, been actief strekken en laten zakken terwijl hamstrings excentrisch werken. GEEN snel of ballistisch. Aanhouden tot lichte trek, nooit pijn > 3/10.'},
       {name:'Fietsen progressief',cat:'cardio',params:[['Duur','20–30 min'],['Weerstand','licht → matig']],note:'Cardiovasculaire conditie behouden. Zadel geleidelijk verlagen als pijn dit toelaat.'},
     ],
     criteria_go:['Pijn tijdens oefening ≤ 3/10','Prone leg curl symmetrisch ≥ 70% LSI','Joggen 5 min pijnvrij','Geen pijn 24u na training'],
     criteria_stop:['Pijn > 4/10 bij excentrisch → terugkeer naar concentrisch','LSI hamstring < 60% na week 3 → intensifieer, herbeoordeel'],
     redflags:['Uitstralende pijn naar knie of rug → lumbale ischias screenen']},
    {label:'Fase 3',title:'Loophervatting & Excentrische Opbouw',weeks:'Week 3–8',
     evidence:'<strong>Nordic Hamstring Exercise</strong> reduceert het hamstring-herletselrisico met 51% (van der Horst et al., 2015 — RCT). Introductie op het moment dat excentrische belasting pijnvrij is op 3/10. <strong>Graded loophervatting</strong>: jogging → tempo → submaximale sprint. <strong>Snelheid is de risicofactor</strong>: hamstrings zijn meest actief bij 85–100% sprint (Dorn et al., 2012). Prematuur terugkeren naar sprint is de meest voorkomende oorzaak van recidief (Ekstrand et al., 2011). <strong>LSI ≥ 90%</strong> voor hamstringkracht is noodzakelijk voor sprinthervatting.',
     goals:['Continu joggen ≥ 20 min pijnvrij','Nordic Hamstring 3 sets × 8 reps pijnvrij','Hamstring LSI ≥ 85%','Looptechniek zonder compensatie','Submaximale sprint (70–80%) pijnvrij'],
     exercises:[
       {name:'Nordic Hamstring Exercise',cat:'kracht',params:[['Reps','6 → 8 → 10'],['Sets','2 → 3'],['Freq','2–3×/week']],note:'Knielen, enkels gefixeerd, partner. Zo traag mogelijk zakken met gestrekt lichaam. Terugkomen met armen. MCID: 3 sets × 10 bij graad II-herstel. Vermijd in eerste 2 weken.'},
       {name:'Hoge knieheffen (loopspel)',cat:'cardio',params:[['Afstand','20 m × 4–6'],['Freq','dagelijks']],note:'Loopspel: knieën optillen > 90°, hoog hakken. Loopcoördinatie en hamstingsactivatie zonder maximale snelheid.'},
       {name:'Jogging → tempo run protocol',cat:'cardio',params:[['Start','10 min jog'],['Opbouw','5 min p.week'],['Snelheid','60% → 75% max']],note:'10%-regel. Monitor 24u-respons. Geen pijn volgende ochtend. Techniek: cadans 170–180 stappen/min, geen overstriding.'},
       {name:'RDL unilateraal',cat:'kracht',params:[['Reps','8–10 p.z.'],['Sets','3'],['Gewicht','matig → zwaar']],note:'Balans op één been, contralateraal been excentrisch naar posterior. Meest hamstrings-belastende krachtoefening. Progressie: gewicht ophogen.'},
       {name:'Submaximale sprints (70–80%)',cat:'cardio',params:[['Afstand','30–40 m × 6–8'],['Rust','volledige rust']],note:'Alleen na pijnvrije jogging ≥ 20 min en Nordic pijnvrij. Geleidelijk tempo verhogen. Criteria: NRS 0/10 24u nadien.'},
     ],
     criteria_go:['Hamstring LSI ≥ 85%','Nordic 3×10 pijnvrij','Sprint 80% pijnvrij + NRS 0 volgende dag','Continu jog 20 min'],
     criteria_stop:['Pijn bij sprint → terug naar jogging','NRS > 2 volgende ochtend → volume verlagen'],
     redflags:['Recidief bij submaximale sprint → stop, MRI herhalen, chirurgisch overleg bij konjoint ruptuur']},
    {label:'Fase 4',title:'Return to Sport & Sprinthervatting',weeks:'Week 6–16',
     evidence:'<strong>Multifactorieel RTS-beslissingsmodel</strong> omvat: kracht (LSI ≥ 90%), sport-specifieke tests, psychologische gereedheid en tijdcriterium. Tijd alleen is geen voldoende criterium: vroeg RTS (< 3 wkn) heeft 30% recidief (Orchard et al., 2005). <strong>Criteria-based RTS</strong> via Askling et al. (2013): drie H-testen (H-test, Askling H, Active Stretch Test) volledig pijnvrij. <strong>10/10-regel</strong>: volledige sprint mag pas wanneer 10 looptrainingen pijnvrij waren. <strong>Nordic Hamstring onderhoud</strong>: preventief effect slechts bij doorlopen gebruik (van der Horst et al., 2015).',
     goals:['Maximale sprint (100%) pijnvrij','Hamstring LSI ≥ 90%','H-test en Askling-testen pijnvrij','Sport-specifieke drills volledig','Nordic hamstring onderhoudsprogramma gestart'],
     exercises:[
       {name:'Maximale sprints (progressief)',cat:'cardio',params:[['Opbouw','80% → 90% → 100%'],['Afstand','30–60 m'],['Rust','volledige rust per herhaling']],note:'Slechts 5–10% snelheidstoename per week. Monitor techniek (videoanalyse aanbevolen). NRS 0 na 24u = criterium voor volgende stap.'},
       {name:'Verandering van richting (COD)',cat:'neuro',params:[['Oefeningen','T-test, agility ladder'],['Weken','1–2 voor veldhervatting']],note:'Snelle richtingswisselingen belasten hamstrings extra. Introduceer na pijnvrije rechte sprint.'},
       {name:'Nordic Hamstring (onderhoud)',cat:'kracht',params:[['Reps','6–8'],['Sets','3'],['Freq','1–2×/week']],note:'Preventief programma voor de rest van het seizoen. 51% reductie van herletsel bij regelmatig gebruik.'},
       {name:'H-test (Askling)',cat:'test',params:[['LSI','≥ 90%'],['Pijn','0/10']],note:'Patiënt staand, been optillen maximaal (actieve hip flexie met gestrekte knie). Pijnvrij + ≥ 90° = RTS-criterium. Vergelijk met contralateraal.'},
     ],
     criteria_go:['Sprint 100% pijnvrij ≥ 3 sessies','Hamstring LSI ≥ 90%','H-test pijnvrij','≥ 6–8 wkn herstelperiode (graad II), ≥ 12 wkn (graad III)'],
     criteria_stop:['Pijn bij maximale sprint → terugkeren naar 80%, NHE intensifiëren'],
     redflags:['Recidief op het veld → onmiddellijk stop, MRI, chirurgisch overleg bij proximale avulsie','Derde recidief → multidisciplinaire herbeoordeling (biomechanica, trainingslast, nutritie)']}
  ],
  refs:'Ekstrand J et al. (2011) — Hamstring muscle injuries in professional football: the UEFA injury study. Am J Sports Med. | van der Horst N et al. (2015) — The preventive effect of the Nordic hamstring exercise on hamstring injuries. Am J Sports Med. | Askling CM et al. (2013) — New RTS criteria after acute hamstring injuries in male soccer players. Knee Surg Sports Traumatol Arthrosc. | Bayer ML et al. (2017) — Early versus delayed rehabilitation after acute hamstring injury in males. Orthop J Sports Med. | Dorn TW et al. (2012) — Muscular strategy shift in human running. J Exp Biol. | Bleakley CM et al. (2012) — PRICE needs updating, should we call POLICE? BJSM.'};

// ── PROTOCOL: ELB — Laterale Epicondylalgie ──────────────────────────────────
protocols.elb = {id:'elb',title:'Laterale Epicondylalgie',subtitle:'Tennis Elbow — conservatief revalidatieprotocol voor de pees-aanhechting van de extensor carpi radialis brevis',color:'#c084fc',icon:'🎾',
  phases:[
    {label:'Fase 1',title:'Pijnmanagement & Isometrische Opbouw',weeks:'Week 1–4',
     evidence:'<strong>Laterale epicondylalgie (LE)</strong> is een tendinopathie van voornamelijk de <em>extensor carpi radialis brevis</em> (ECRB) ter hoogte van de laterale epicondyl. Pathoanatomisch: degeneratief — geen primaire inflammatie (Coombes et al., 2015). <strong>Wait and see</strong> is effectief op 1 jaar (78% herstel) maar vertraagt kortetermijn herstel versus manuele therapie + oefening (Bisset et al., 2006 — Lancet). <strong>Isometrische wrist extension</strong> heeft een onmiddellijk pijnmodulerend effect, analoog aan tendinopathieprotocollen elders (Rio et al., 2015). <strong>Corticosteroïdinjecties</strong>: snelle kortetermijn pijnreductie maar inferieure lange termijn uitkomsten en hogere recidiefkans (Coombes et al., 2013 — Lancet).',
     goals:['NRS ≤ 3/10 bij dagelijkse activiteiten','Isometrische wrist extension pijnvrij uitvoeren','Knijpkracht > 50% contralateraal','Orthese correct dragen (counterforce brace of polsspalk)','Werkergonomie geëvalueerd'],
     exercises:[
       {name:'Isometrische wrist extension',cat:'kracht',params:[['Hold','30–45 sec'],['Kracht','50–70% max'],['Sets','4'],['Rust','60 sec'],['Freq','dagelijks']],note:'Zittend, onderarm op tafel, pols in neutrale positie. Druk dorsumzijde hand tegen wand of contralaterale hand. Houd 30–45 sec. Pijn ≤ 3/10. Directe pijnreductie treedt op. Elke 6u herhaalbaar indien nodig.'},
       {name:'Pols/vinger mobilisatie (actief)',cat:'mobiliteit',params:[['Reps','10–15'],['Sets','2–3'],['Richting','flexie–extensie, radiale/ulnaire deviatie']],note:'Voorzichtige actieve polsmobiliteit behouden. Geen passieve rekking van extensoren in acute fase.'},
       {name:'Counterforce brace aanleren',cat:'manueel',params:[['Positie','2–3 cm distaal van laterale epicondyl'],['Duur','bij belasting']],note:'Epicondylitisspalk reduceert ECRB-spanning. Dragen bij belastende activiteiten, niet in rust. Pols vrij laten bewegen.'},
       {name:'Neurale mobilisatie (radialis)',cat:'mobiliteit',params:[['Reps','10'],['Sets','2']],note:'Neurodynamica nervus radialis: schouderabductie 90°, elleboogextensie, pols flexie + ulnaire deviatie. Sensitisatie radiale zenuw is frequent geassocieerd met LE.'},
       {name:'Cryotherapie na activiteit',cat:'manueel',params:[['Duur','10–15 min'],['Freq','na belasting']],note:'IJsmassage over laterale epicondyl. Symptoomgericht, niet primair behandeling.'},
     ],
     criteria_go:['NRS ≤ 3/10 bij isometrische test','Knijpkracht ≥ 50% contralateraal','Begrepen belastingsmanagement (provocerende taken vermijden of aanpassen)'],
     criteria_stop:['Pijn > 5/10 bij isometrische test → verlaag kracht + duur','Zwelling + warmte → radiologisch onderzoek (avulsiefractuur, osteochondrose)'],
     redflags:['Nachtpijn zonder mechanische trigger → uitsluiten tumoreus proces of cervicale radiculopathie C6','Neurologische uitval hand/pols → EMG cervicale C6-wortelcompressie','Leeftijd < 20j → epifysaire afwijking overwegen']},
    {label:'Fase 2',title:'Excentrische & Isotone Peestraining',weeks:'Week 3–10',
     evidence:'<strong>Excentrische training van de pols-extensoren</strong> is de kern van peesremodeling. <strong>Tyler Twist (Thera-Band Flexbar)</strong>: RCT door Tyler et al. (2010, J Orthop Sports Phys Ther) toonde 81% pijnreductie versus 22% controlegroep bij 6 weken. <strong>Heavy Slow Resistance (HSR)</strong> met tragere tempo (3-1-3) minstens equivalent aan excentrisch alleen (Beyer et al., 2015 — analoog aan achillespeesdata). <strong>Kinetische ketenbenadering</strong>: schouder- en polsstabiliteit, grijpkracht en proximale spierkracht zijn frequent gedeficiënt bij LE (Coombes et al., 2015). Behandel de volle keten, niet alleen de elleboog.',
     goals:['PRTEE ≤ 40/100','Knijpkracht ≥ 75% contralateraal','Excentrische wrist extension pijnvrij','Grijpkracht dagelijkse activiteiten pijnvrij','Schouder- en polsstabilisatie genormaliseerd'],
     exercises:[
       {name:'Excentrische wrist extension (Thera-Band / dumbbell)',cat:'kracht',params:[['Reps','15'],['Sets','3'],['Tempo','3-0-3'],['Freq','2–3×/week'],['Progressie','licht → matig gewicht']],note:'Onderarm op tafel, pols over rand. Concentrisch met beide handen omhoog, excentrisch langzaam zakken met aangedane hand. Begin met 0.5 kg, progressief ophogen. Matige pijn (NRS 3–5) is acceptabel indien NRS 0 volgende ochtend.'},
       {name:'Tyler Twist (Thera-Band Flexbar)',cat:'kracht',params:[['Reps','15'],['Sets','3'],['Freq','3×/week']],note:'Houd Flexbar voor je: aangedane hand bovenaan, onderdraait pols, gezonde hand houdt vast. Extensoren excentrisch controleren bij terugkeer. 81% pijnreductie aangetoond (Tyler 2010).'},
       {name:'Pronatie/supinatie (gevarieerd)',cat:'kracht',params:[['Reps','15'],['Sets','3'],['Gewicht','licht hamer of dumbbell']],note:'Elleboog 90° gebogen, hamer langzaam proneren en supineren. Belast ECRB en supinator. Traag tempo.'},
       {name:'Wrist curl (concentrisch pols flexie)',cat:'kracht',params:[['Reps','15'],['Sets','3']],note:'Handhaving flexor-extensor balans. Niet verwaarlozen: flexorkracht is ook deficiënt bij LE.'},
       {name:'Schouderstabilisatie (scapulaire retractie)',cat:'kracht',params:[['Reps','15'],['Sets','3']],note:'Row, W-Y oefeningen. Proximate keten-optimalisatie: 35% van LE-patiënten heeft scapulaire dyskinese.'},
     ],
     criteria_go:['PRTEE ≤ 40/100','Knijpkracht ≥ 75% contralateraal','Excentrische test NRS ≤ 3 én NRS 0 volgende ochtend'],
     criteria_stop:['PRTEE stagneert 3 weken → kinesistmanipulatie elleboog overwegen (Vicenzino et al. 2007)','Knijpkracht < 50% na week 6 → echo + orthopedie bij partiële ruptuur'],
     redflags:['Acute krachtdaling pols → peesruptuur ECRB → chirurgisch consult','Geelkleuring huid ter hoogte van laterale epicondyl → post-injectie vet-atrofie']},
    {label:'Fase 3',title:'Functionele Terugkeer & Sporthervatting',weeks:'Week 8–20+',
     evidence:'<strong>Sportspecifieke progressie</strong> is essentieel bij tennissers, badmintonners en handarbeiders. <strong>Slagarmtechniek</strong>: forehand met elleboogextensie bij contact vergroot ECRB-belasting — techniekevaluatie door coach. <strong>Racketaanpassingen</strong>: groter gripformaat (3–5 mm groter), polyester naar multidraads snaren, lagere spanning (10% lager) reduceren ECRB-belasting significant (Rethnam & Tugh, 2010). <strong>Totale behandelduur</strong>: gemiddeld 6–12 maanden voor volledig herstel — langzamere peesheling dan spier. <strong>PRTEE < 20/100</strong> = functioneel herstel; < 10/100 = volledig sporthervatting.',
     goals:['PRTEE < 20/100','Knijpkracht ≥ 90% contralateraal','Sportspecifieke belasting pijnvrij (tennis, handarbeid)','Terugvalpreventie: onderhoud + ergonomie'],
     exercises:[
       {name:'Sportspecifieke drills (tennissers)',cat:'neuro',params:[['Oefening','Forehand techniek, service'],['Coach','techniekanalyse']],note:'Open stam forehand vermindert elleboogbelasting. Slagtiming en contactpunt optimaliseren. Racketaanpassing evalueren.'},
       {name:'Functionele grijptaken (handarbeiders)',cat:'neuro',params:[['Oefening','werksimulatie, gereedschapsgebruik'],['Duur','progressief van 30 → 60 → 120 min']],note:'Ergonomische aanpassing werkpost. Antivibratiehandschoenen bij trilgereedschap. Regelmatige pauzes (elke 30 min, 5 min stretch).'},
       {name:'HSR onderhoud (3-1-3)',cat:'kracht',params:[['Reps','8–10'],['Sets','3'],['Freq','2×/week']],note:'Onderhoud peeskracht. Geleidelijk belasting ophogen tot lichaamsgewicht-equivalent. Preventief effect bij langdurige belasting.'},
       {name:'Flexibiliteitsonderhoud pols/elleboog',cat:'mobiliteit',params:[['Duur','15 sec hold × 3'],['Freq','dagelijks']],note:'Zachte statische rek pols-extensoren. Niet in acute fase. Handhaving ROM als onderhoud.'},
     ],
     criteria_go:['PRTEE < 20/100','Knijpkracht ≥ 90%','Sportactiviteit ≥ 30 min pijnvrij','NRS 0 volgende ochtend na sporttraining'],
     criteria_stop:['Terugval bij sporthervatting → techniekevaluatie + 2 weken intensifieer HSR','PRTEE > 40 na 12 weken → PRP-injectie of chirurgie overwegen'],
     redflags:['Persistente klachten > 12 maanden ondanks optimale kinesitherapie → orthopedie: ECRB release, PRP, focale shockwave']},
  ],
  refs:'Bisset L et al. (2006) — Mobilisation with movement and exercise, corticosteroid injection, or wait and see for tennis elbow. Lancet. | Coombes BK et al. (2015) — Management of lateral elbow tendinopathy: one model fits all? J Orthop Sports Phys Ther. | Tyler TF et al. (2010) — Addition of isolated wrist extensor eccentric exercise to standard treatment for chronic lateral epicondylosis. J Orthop Sports Phys Ther. | Vicenzino B et al. (2007) — Specific manipulative therapy for tennis elbow. Man Ther. | Smidt N et al. (2002) — Corticosteroid injections, physiotherapy, or wait-and-see policy for lateral epicondylitis: a randomised controlled trial. Lancet.'};

// ── PROTOCOL: MTSS — Mediaal Tibiaal Stresssyndroom ──────────────────────────
protocols.mtss = {id:'mtss',title:'Shin Splints (MTSS)',subtitle:'Mediaal Tibiaal Stresssyndroom — belastingsmanagement, botremodeling en veilige loophervatting',color:'#0ea5e9',icon:'🦴',
  phases:[
    {label:'Fase 1',title:'Diagnose & Relatieve Rust',weeks:'Week 1–3',
     evidence:'<strong>MTSS</strong> (Mediaal Tibiaal Stresssyndroom) is een botstresskwetsuur van de mediale tibiaschacht waarbij periostale tractie door de soleus/FDL leidt tot botremodeling en corticale stressreactie. Differentiaaldiagnose is cruciaal: <strong>compartimentsyndroom chronisch</strong> (drukverhoging bij inspanning), <strong>tibiale stressfractuur</strong> (focale pijn vs. diffuse pijn bij MTSS) en <strong>DVT</strong>. <strong>MRI goudstandaard</strong> voor classificatie (Bhatt et al., 2020): Grade 1–2 (periostaal oedeem, 2–6 wkn), Grade 3–4 (medullair oedeem / cortex, 6–16 wkn+). Incidentie bij lopers: 13–20%. <strong>Alternatief sporten</strong> (zwemmen, fietsen) is essentieel om conditie te behouden terwijl been geneest (Winters et al., 2013).',
     goals:['Diagnose bevestigen (klinisch + MRI indien graad 3–4 suspect)','Provocerende loopactiviteit stoppen of drastisch verminderen','Alternatieve cardio starten (zwemmen/fietsen/pool running)','Pijn in rust 0/10','Risicofactoren identificeren (schoenwerk, loopvolume, voedingsdeficiëntie)'],
     exercises:[
       {name:'Zwemmen (crawl / rugslag)',cat:'cardio',params:[['Duur','30–45 min'],['Freq','4–5×/week']],note:'Geen compressiebelasting op tibia. Optimaal aerobe conditiebehoud. Geen schoolslag (plantairflexiekracht).'},
       {name:'Aquajogging (diep water)',cat:'cardio',params:[['Duur','20–40 min'],['Freq','3–4×/week'],['Materiaal','drijfriem']],note:'Simuleert loopbeweging zonder grondcontact. Behoudt loopspecifieke neuromusculaire patronen. Hartfrequentie 10–15 bpm lager dan op land.'},
       {name:'Stationaire fiets',cat:'cardio',params:[['Duur','30–45 min'],['Weerstand','matig']],note:'Minimale tibiale belasting. Goede conditiehandhaving. Zadel op correcte hoogte.'},
       {name:'Kuitversterking (zittend, soleus)',cat:'kracht',params:[['Reps','15–20'],['Sets','3'],['Belasting','licht'],['Freq','3×/week']],note:'Knie 90° gebogen isoleert soleus. Tibiale aanhechting soleus is mede-oorzaak van MTSS. Kracht opbouwen zonder loopbelasting.'},
       {name:'Voedingsscreening',cat:'manueel',params:[['Aandacht','Vitamine D, Calcium, Energiebeschikbaarheid']],note:'Lage energiebeschikbaarheid (Relative Energy Deficiency in Sport — RED-S) is sterke risicofactor, especially bij vrouwen. Vitamine D ≥ 75 nmol/L, Calcium 1000–1300 mg/dag aanbevolen.'},
     ],
     criteria_go:['Pijn bij wandelen 0/10','Hop test (enkel been) pijnvrij','Drukpijn tibia ≤ 2/10','MRI-graad ≤ 2 óf 3 weken rust MRI-grade ≤ 3'],
     criteria_stop:['Focale tibiale pijn bij palpatie (1–2 cm) → stressfractuur uitsluiten via MRI','Graad 4 MRI → volledige rust 8–12 wkn + orthopedisch consult'],
     redflags:['Tuningvork-test positief → stressfractuur tibia → MRI verplicht, geen loopactiviteit','Nachtpijn rustend aan tibia → botmetastase of osteoid osteoom uitsluiten','Compartimentdruk > 30 mmHg na inspanning → chronisch compartimentsyndroom → chirurgisch consult','Roodheid + warmte + koorts → osteomyelitis uitsluitendiagnose']},
    {label:'Fase 2',title:'Krachtopbouw & Loopvoorbereiding',weeks:'Week 3–8',
     evidence:'<strong>Tibiale beoladingscapaciteit verhogen</strong> is het kernprincipe: botten adapteren via Wolf\'s wet aan progressieve mechanische stimuli. <strong>Kuitkracht</strong>: zwakke soleus/gastrocnemius zijn geassocieerd met hogere tibiale belasting per stap (Meardon et al., 2014). <strong>Looptechniek</strong>: cadansverhoging (5–10% meer stappen/min) verlaagt tibiale belasting significant (Wille et al., 2014 — overstriding reduceert grondreactiekracht). <strong>Schoeisel</strong>: demping, correcte pasvorm en orthesen bij pronatie reduceren impact (Tenforde et al., 2013). <strong>Voetsterkte</strong>: intrinsieke voetspieren ondersteunen mediaal lengtegewelf en reduceren tibiale rotatie-stress.',
     goals:['Kuitkracht LSI ≥ 85%','Tibiale drukpijn 0/10','Wandelen ≥ 30 min pijnvrij','Looptechniek geëvalueerd (cadans, footstrike)','Loopspecifieke krachtoefeningen pijnvrij'],
     exercises:[
       {name:'Single leg heel raise (progressief)',cat:'kracht',params:[['Reps','15–25 p.z.'],['Sets','3'],['Progressie','Bilateraal → unilateraal → gewicht'],['Freq','dagelijks']],note:'Opbouwen tot 25 reps unilateraal. Tibiale aanhechting soleus trainen. Gecontroleerde excentrische fase (3 sec neer).'},
       {name:'Tibialis posterior versterking',cat:'kracht',params:[['Oefening','inversie met band'],['Reps','15'],['Sets','3']],note:'Tibialis posterior is primaire dynamische stabilisator mediaal gewelf. Zwakte → hyperpronatie → verhoogde tibiale rotatie-stress. Elastiek rond enkel, inversie weerstand.'},
       {name:'Short foot exercise',cat:'kracht',params:[['Hold','10 sec'],['Reps','10'],['Sets','3'],['Freq','dagelijks']],note:'Activeer intrinsieke voetspieren door verkorten van voet zonder tenen te buigen. Essentieel voor mediaal gewelf support. Zittend → staand → éénbeens progressie.'},
       {name:'Looptechniekevaluatie',cat:'manueel',params:[['Cadans','meten (stappen/min)'],['Target','170–180 stappen/min'],['Methode','metronoom-app']],note:'Cadans verhogen met 5–10% vermindert tibiale belasting 20–30%. Video-analyse footstrike: van hielstrike naar midfoot. Niet overhaast — geleidelijke aanpassing.'},
       {name:'Wandelprogramma (progressief)',cat:'cardio',params:[['Start','15 min vlak'],['Opbouw','5 min p.week'],['Max','45 min vóór jogging']],note:'Wandelen = eerste tibiale belastingsstap. Pijnvrij wandelen 30+ min is voorwaarde voor loophervatting. Vlakke ondergrond, goed schoeisel.'},
     ],
     criteria_go:['Tibiale drukpijn 0/10','Wandelen 30 min pijnvrij','Single leg heel raise ≥ 20 reps','Hop test pijnvrij'],
     criteria_stop:['Pijn na wandeling → meer rust, MRI herhalen','LSI kuit < 75% na week 6 → intensifieer, herbeoordeel'],
     redflags:['Heroptredende focale pijn na loophervatting → stressfractuur, MRI']},
    {label:'Fase 3',title:'Graded Loophervatting',weeks:'Week 6–14',
     evidence:'<strong>Graded exposure model</strong>: loopbelasting ophogen met maximaal 10% per week (Nielsen et al., 2012). <strong>Walk-run protocol</strong>: beginnen met loopintervals van 1 min in een wandelsessie, geleidelijk uitbreiden. <strong>Botremodeling</strong>: volledig botremodeling duurt 3–6 maanden — symptoomafwezigheid ≠ structureel herstel. <strong>Tijdcriterium</strong>: minimum 6–8 weken na klachtenstart voor loophervatting bij Grade 1–2 MRI, 10–16 weken bij Grade 3–4. <strong>Hardloopoppervlak</strong>: zacht (gras, track) voor en gedurende loophervatting — asfaltheeft 10–15× hogere grondreactiekrachten dan zacht terrein.',
     goals:['Continu joggen ≥ 20 min pijnvrij','Tibiale drukpijn 0/10 na loopsessies','Geen pijn 24u na elke loopsessie','Looptechniek cadans geoptimaliseerd','NRS 0 bij activiteit'],
     exercises:[
       {name:'Walk-run protocol (week 1–4)',cat:'cardio',params:[['Schema','1 min jog / 2 min walk × 8'],['Progressie','1 min jog / 1 min walk, dan 2/1, dan 5 min blokken'],['Freq','om de dag']],note:'Elke stap alleen als NRS 0 volgende ochtend. Pauzeer 1 week bij pijn. Zacht oppervlak. Tijdsinvestering: geduldige opbouw is de enige weg.'},
       {name:'Progressief joggen (continu)',cat:'cardio',params:[['Opbouw','10 min → 15 → 20 → 30 min'],['Freq','3×/week'],['Ondergrond','gras/track → asfalt later']],note:'Na geslaagd walk-run: overstap naar continu joggen. 10%-regel strikt. Snelheid secundair aan volume. Schoeisel check elke 600 km.'},
       {name:'Krachtkwartier (onderhoud)',cat:'kracht',params:[['Oefeningen','Heel raise, short foot, tibialis'],['Duur','15 min'],['Freq','3×/week']],note:'Preventief kracht onderhouden tijdens loopopbouw. Niet verwaarlozen als conditie terugkomt.'},
       {name:'Cadans-training met metronoom',cat:'neuro',params:[['Target','cadans + 5–10%'],['Tool','metronoom-app (Garmin, Runkeeper)']],note:'Bewuste cadansverhoging 2–4 wkn tot het automatisch wordt. Na 6 wkn bewust trainen = nieuwe looppatroon ingebakken.'},
     ],
     criteria_go:['Continu joggen 20 min pijnvrij × 3 sessies','NRS 0 volgende ochtend na elke sessie','Tibiale drukpijn 0/10'],
     criteria_stop:['NRS > 2 na jogsessie → terug naar walk-run','Recidiverende pijn → rust 1 week + MRI herhalen'],
     redflags:['Acute hevige pijn tijdens lopen → stop onmiddellijk, stressfractuur uitsluiten','Volumerecidief zonder daling → biomechanische analyse + podoloog']},
    {label:'Fase 4',title:'Volledig Sporthervatting & Preventie',weeks:'Week 10–20+',
     evidence:'<strong>Recidiefrisico</strong> bij MTSS is hoog zonder structurele preventie (Tenforde et al., 2016). <strong>Preventieplan</strong>: progressieregels (10%), adequate rust, calciuminname, goed schoeisel en kracht-onderhoud. <strong>Vrouwen</strong>: relatieve energietekort (RED-S) screenen — femaleathlete triad sterk geassocieerd met MTSS en stressfractuurrecidief (De Souza et al., 2014). <strong>Periodisering</strong>: lopers die ≥ 60 km/week lopen zonder afbouwweken hebben 4× hogere MTSS-incidentie. <strong>Schoeisel</strong>: vervangen na 600–800 km.',
     goals:['Volledig sportprogramma zonder pijn','Recidief-preventieplan actief','Kuitkracht LSI ≥ 90%','Loopvolume terug op vóór-blessure niveau'],
     exercises:[
       {name:'Volledige looptraining (sport-specifiek)',cat:'cardio',params:[['Volume','opbouw naar pre-blessure niveau'],['Afbouwweken','elke 4e week volume −30%'],['Oppervlak','variatie gras/track/weg']],note:'10%-regel blijft gelden ook in RTS-fase. Elke 4 weken een rustigere week. Niet in een keer het volledige volume hervatten.'},
       {name:'Nordic Shin (tibialis anterior)',cat:'kracht',params:[['Reps','10–15'],['Sets','3'],['Freq','2×/week']],note:'Knielen op kniepad, enkels gefixeerd. Achterover kantelen met gestrekte romp. Eccentrische tibialis anterior. Preventief effect bij lopers (analogie Nordic Hamstring).'},
       {name:'Preventief krachtkwartier (1×/week)',cat:'kracht',params:[['Oefeningen','heel raise, short foot, tibialis'],['Duur','15 min']],note:'Minimaal 1× per week voor de rest van het loopseizoen. Niet stoppen als pijn weg is.'},
       {name:'Loopjournaal bijhouden',cat:'manueel',params:[['Bijhouden','km, pijn, schoeisel, ondergrond'],['Alarm','bij pijn > 2/10 → 2 rustdagen']],note:'Data-gestuurde progressie. Lopers die een loopjournaal bijhouden hebben 40% minder overbelastingsblessures (trainervaring + data).'},
     ],
     criteria_go:['Volledig loopprogramma pijnvrij','NRS 0 na alle sessies','Kuitkracht LSI ≥ 90%','Preventieplan begrepen en actief'],
     criteria_stop:['Recidief pijn → 1 week rust + MRI + herbeoordeel volledig protocol'],
     redflags:['Derde recidief MTSS → RED-S screening, botdichtheidsmeting (DEXA), multidisciplinaire beoordeling','Stressfractuur tibia complete cortex → draagloze brace + orthopedisch consult']}
  ],
  refs:'Moen MH et al. (2009) — Medial tibial stress syndrome: a critical review. Sports Med. | Winters M et al. (2013) — The medial tibial stress syndrome: a systematic review. Open Access J Sports Med. | Bhatt R et al. (2020) — Bone stress injury of the tibia. EFORT Open Rev. | Nielsen RO et al. (2012) — Training errors and running related injuries: a systematic review. Int J Sports Phys Ther. | Tenforde AS et al. (2016) — Identifying sex-specific risk factors for stress fractures in adolescent runners. Med Sci Sports Exerc. | Wille CM et al. (2014) — Ability of ultrasonographic findings to identify individuals with medial tibial stress syndrome. J Orthop Sports Phys Ther.'};



protocols.faz = {id:'faz',title:'Facetartrose Lumbale Wervelzuil',subtitle:'Conservatief revalidatieprotocol voor lumbale facetgewricht artrose — pijnmanagement, stabilisatie en functionele krachtopbouw',color:'#d97706',icon:'🦴',
  phases:[
    {label:'Fase 0',title:'Diagnostiek & Pijnmanagement',weeks:'Week 1–3',
     goals:['NRS pijn reduceren tot ≤ 5/10 in rust','Aggraverende en verlichtende factoren identificeren','Pijneducatie: neurowetenschappelijke benadering','Pathologische bewegingspatronen doorbreken','Rode vlaggen uitsluiten'],
     exercises:[
       {name:'Diafragmatische ademhaling',params:[['Reps','10'],['Sets','3'],['Freq','3×/dag']],note:'Rug in ruglig, handen op buik. Lumbopelvische ontspanning; een effect op centrale sensitisatie is klinische redenering, niet onderbouwd in dit dossier.',cat:'neuromusculair'},
       {name:'Knie-naar-borst stretch (unilateraal)',params:[['Hold','20–30 sec'],['Sets','2–3'],['Freq','2×/dag']],note:'Trekken tot aangenaam gevoel. Verlicht facetcompressie door lichte flexie. Stop bij uitstralende pijn.',cat:'mobiliteit'},
       {name:'Supine pelvic tilt (achterwaarts)',params:[['Reps','10–15'],['Hold','3–5 sec'],['Sets','3'],['Freq','2×/dag']],note:'Rug plat drukken op onderlaag. Activeert TA passief — voorbereiding op stabilisatie.',cat:'stabiliteit'},
       {name:'Pijnvrij wandelen',params:[['Duur','10–15 min'],['Freq','2×/dag']],note:'Rustig tempo op vlakke ondergrond. Actief blijven binnen de pijngrens gaf bij acute rugpijn sneller herstel dan bedrust (Malmivaara 1995); overdracht naar facetartrose is klinische redenering. Stop bij NRS > 4/10.',cat:'cardio'},
       {name:'Warmteapplicatie lumbaal',params:[['Duur','15–20 min'],['Freq','1–2×/dag']],note:'Heatpack of warmtekussen op lumbale regio. Bedoeld om spierspanning en pijnbeleving te verlagen — klinische redenering, geen bron in dit dossier.',cat:'mobiliteit'},
       {name:'Zijlig lumbale rotatie (passief)',params:[['Reps','8–10'],['Hold','5 sec'],['Sets','2'],['Freq','1×/dag']],note:'Boven-knie naar vloer laten zakken. Segmentale mobilisatie. Stop bij radiculaire provocatie.',cat:'mobiliteit'}
     ],
     criteria_go:['NRS ≤ 5/10 in rust en bij basis-ADL','Rode vlaggen uitgesloten (fractuur, maligniteit, infectie)','Pijneducatie begrepen en geaccepteerd','Aggraverende houdingen geïdentificeerd (extensie > flexie typisch)'],
     evidence:'<strong>Facetartropathie</strong> treft <strong>tot 15%</strong> van de patiënten met chronische lage rugpijn (Cohen &amp; Raja, 2007 — Anesthesiology). <em>Het eerder vermelde bereik 15–45% staat niet in die bron en is geschrapt.</em> <strong>Pijneducatie</strong> op neurowetenschappelijke basis verbetert pijn, beperking, catastroferen en fysieke prestatie bij <strong>chronische musculoskeletale pijn</strong> — systematische review van 8 studies met narratieve synthese, <em>geen meta-analyse en zonder uitspraak over de lange termijn</em> (Louw et al., 2011). <strong>Rust is contraproductief:</strong> bij ACUTE aspecifieke rugpijn herstelden patiënten die gewone activiteit binnen de pijngrens voortzetten sneller dan met bedrust — <em>maar ook sneller dan met rugmobiliserende oefeningen</em> (Malmivaara et al., 1995 — NEJM). <em>Die trial betrof acute aspecifieke rugpijn, niet facetartrose; overdracht is klinische redenering.</em> <strong>Tegenstrijdige evidentie over manuele therapie:</strong> de Cochrane-review van 20 trials besluit dat manipulatieve therapie bij acute lage rugpijn <strong>niet effectiever is dan inerte interventies of sham</strong> (Rubinstein et al., 2012). <em>De eerdere claim van kortetermijnverlichting bij facetpijn keerde die conclusie om en is geschrapt.</em>',
    },
    {label:'Fase 1',title:'Mobiliteit & Belastingsnormalisatie',weeks:'Week 3–6',
     goals:['Lumbale ROM verbeteren in pijnvrij bereik','Ochtendstijfheid verminderen tot < 30 min','Heupflexorlengte normaliseren','Normale loopkinematica herstellen','NRS ≤ 3/10 bij mobiliserende oefeningen'],
     exercises:[
       {name:'Cat-Cow (felino)',params:[['Reps','10–15'],['Sets','3'],['Freq','2×/dag']],note:'Viervoetsstand. Trage, gecontroleerde beweging. Facetsegmenten worden cyclisch geopend en gesloten. Extensie tot pijngrens.',cat:'mobiliteit'},
       {name:'Heupflexor stretch (knieling)',params:[['Hold','30–45 sec'],['Sets','2–3 per zijde'],['Freq','2×/dag']],note:'Knieling lunge positie. Anterieure pelvis corrigeren door lichte posterieure tilt, om de lordose te verminderen — klinische redenering.',cat:'mobiliteit'},
       {name:'Prone press-up (McKenzie)',params:[['Reps','10'],['Sets','2–3'],['Freq','3×/dag']],note:'Buiklig, handpalmen naast borst. Druk op via ellebogen. Stop als uitstraling centralisatie vertoont. Enkel uitvoeren bij extensiebias-patiënten.',cat:'mobiliteit'},
       {name:'Supine lumbar rotation stretch',params:[['Hold','20 sec'],['Sets','2–3 per zijde'],['Freq','2×/dag']],note:'Ruglig, knieën gebogen, laten zakken naar zijde. Segmentale facet gapping. Stop bij pijn > NRS 3.',cat:'mobiliteit'},
       {name:'Seated hamstring stretch',params:[['Hold','30 sec'],['Sets','2–3 per zijde'],['Freq','2×/dag']],note:'Hamstringverkorting kan de bekkenstand en de lumbale belasting beïnvloeden — klinische redenering. Gebruik handdoek indien nodig.',cat:'mobiliteit'},
       {name:'Wandelen met tempoprogressie',params:[['Duur','20–30 min'],['Tempo','gemiddeld'],['Freq','dagelijks']],note:'Opbouwen per 5 min/week. Target 30 min pijnvrij wandelen einde fase. Aerobe activiteit kan pijn moduleren, maar bij chronische pijn wisselt de richting en treedt soms hyperalgesie op (Naugle 2012) — evalueer per patiënt.',cat:'cardio'}
     ],
     criteria_go:['NRS ≤ 3/10 in rust (praktijkdrempel)','Lumbale flexie tot 70° of minder dan 30% deficit vs. norm (praktijkdrempel)','Heupflexor length: Thomas test negatief of < 10° deficit (praktijkdrempel)','30 min wandelen pijnvrij','Ochtendstijfheid < 30 min (praktijkdrempel)'],
     evidence:'<strong>Lumbale mobilisatie</strong> wordt ingezet om de segmentale pijn te dempen en toegang te geven tot actieve training — <em>klinische redenering. De eerder aangehaalde trial onderzocht diclofenac en manipulatie bovenop eerstelijnszorg bij acute rugpijn en vond géén versneld herstel — diclofenac HR 1,09 (p = 0,516), manipulatie HR 1,01 (p = 0,955); die citatie is geschrapt.</em> <strong>Heupflexorverkorting</strong> en toegenomen lordose verhogen de facetbelasting — <em>klinische redenering; de toegeschreven bron is een handboek en is in dit dossier niet verifieerbaar.</em> <strong>Richtingsvoorkeur (McKenzie):</strong> in een prospectieve studie centraliseerde de uitstralende pijn bij 50% van de patiënten, van wie 74% een positief discogram had — <em>dat is een diagnostische bevinding over discogene pijn, geen effectcijfer en niet over facetgewrichten; het eerdere responspercentage van 60% is geschrapt</em> (Donelson et al., 1997 — Spine). <strong>Wandelen:</strong> een systematische review vond slechts <strong>vier</strong> bruikbare studies, waarvan de methodologisch sterkste géén effect zag; de auteurs besluiten tot laag tot matig bewijs — <em>geen meta-analyse, geen 2206 deelnemers en geen kosteneffectiviteitsanalyse</em> (Hendrick et al., 2010 — Eur Spine J).',
    },
    {label:'Fase 2',title:'Segmentale Stabilisatie',weeks:'Week 6–10',
     goals:['Transversus abdominis en multifidus activeren (palpeerbaar)','Lumbopelvische stabiliteit opbouwen','Pijnvrij 30 min wandelen consolideren','Functionele zit-sta transfers normaliseren','NRS ≤ 2/10 bij stabilisatie-oefeningen'],
     exercises:[
       {name:'TA-activatie (drawing-in manoeuvre)',params:[['Hold','10 sec'],['Reps','10'],['Sets','3'],['Freq','3×/dag']],note:'Ruglig. Navel licht intrekken — geen ademinhouden. Palpeer 2 cm mediaal van SIAS. Wordt in dit protocol als eerste stap van de stabiliteitsopbouw gebruikt (praktijkkeuze).',cat:'stabiliteit'},
       {name:'Multifidus activatie prone',params:[['Hold','10 sec'],['Reps','10'],['Sets','3'],['Freq','2×/dag']],note:'Buiklig, kussens onder buik. Licht heffen van enkel been met gestrekte knie — segmentale multifidusactivatie. Progressie: gewicht aan enkel.',cat:'neuromusculair'},
       {name:'Bird-dog',params:[['Reps','8–10 per zijde'],['Hold','5–8 sec'],['Sets','3'],['Freq','2×/dag']],note:'Viervoetsstand. Contralateraal arm + been heffen. Neutrale lumbale positie bewaren. Langzaam en gecontroleerd.',cat:'stabiliteit'},
       {name:'Dead bug',params:[['Reps','8–10 per zijde'],['Sets','3'],['Freq','2×/dag']],note:'Ruglig, 90° heup + knie. Contralateraal arm + been uitstrekken. Rug blijft contact houden met mat. Coactivatie van transversus en multifidus is de bedoeling — klinische redenering, geen EMG-bron in dit dossier.',cat:'stabiliteit'},
       {name:'Glute bridge (isometrisch)',params:[['Hold','10 sec'],['Reps','10'],['Sets','3'],['Freq','2×/dag']],note:'Ruglig, voeten plat. Bekken heffen tot neutrale lumbale positie. Activeert glutei en ontlast facetgewrichten via posterieure bekkenrotatie.',cat:'kracht'},
       {name:'Standing balance (unilateraal)',params:[['Hold','30 sec'],['Sets','3 per zijde'],['Freq','2×/dag']],note:'Stabiel oppervlak eerst, dan onstabiel. Licht geknielde standbeen. Functionele transferoefening — proprioceptieve activering.',cat:'neuromusculair'}
     ],
     criteria_go:['TA + multifidus activatie palpeerbaar en willekeurig','Bird-dog 10 reps/zijde met correcte techniek en NRS ≤ 2/10','Glute bridge 10× hold 10 sec zonder compensatie','30 min wandelen pijnvrij en consistent','Zit-sta transfer vlot en pijnvrij'],
     evidence:'<strong>Segmentale stabilisatieoefeningen</strong> bovenop medische zorg verlaagden bij patiënten met een EERSTE, acute episode lage rugpijn het recidief na één jaar tot 30% tegenover 84%, en na twee tot drie jaar tot 35% tegenover 75% (Hides et al., 2001 — Spine; n = 39). <em>De vergelijking was met medische zorg en normale activiteit, niet met algemene oefentherapie, en de populatie was acuut, niet chronisch — overdracht naar facetartrose is klinische redenering.</em> <strong>Multifidusatrofie:</strong> bij acute unilaterale rugpijn was de spierdoorsnede aan de symptomatische zijde 31 ± 8% kleiner, beperkt tot één wervelniveau (Hides et al., 1994 — Spine). <em>Dat spontaan herstel uitblijft zonder gerichte oefening staat niet in die publicatie.</em> <strong>Bird-dog, dead bug en bruggen</strong> worden gekozen om coactivatie te bereiken bij lage lumbale compressie — <em>klinische redenering; de toegeschreven handboeken zijn in dit dossier niet verifieerbaar.</em>',
    },
    {label:'Fase 3',title:'Functionele Krachtopbouw',weeks:'Week 10–16',
     goals:['Lumbale extensoren en heupstabilisatoren progressief belasten','Functionele kracht opbouwen voor ADL en werk','Sorensen test ≥ 60 sec (praktijkdrempel)','NRS ≤ 2/10 tijdens alle oefeningen','Terugkeer naar lichte sport of werkactiviteiten'],
     exercises:[
       {name:'Romanian Deadlift (RDL) — licht',params:[['Sets','3'],['Reps','10–12'],['Gewicht','licht: 40–60% 1RM'],['Freq','2×/week']],note:'Hinging pattern: neutrale rug, heupen naar achter. Begin zonder gewicht — perfect techniek. Fundament voor lumbale extensorkracht.',cat:'kracht'},
       {name:'Squat aan muur (wall squat)',params:[['Hold','30–45 sec'],['Sets','3'],['Freq','2×/week']],note:'Rug aan muur, voeten 45 cm voor. 90° knie indien pijnvrij. Hoge quad + glute activatie bij minimale lumbale belasting.',cat:'kracht'},
       {name:'Step-up (trap)',params:[['Reps','10–12 per been'],['Sets','3'],['Hoogte','20–30 cm'],['Freq','2×/week']],note:'Gewicht volledig op standbeen. Lumbopelvische stabiliteit bewaken. Progressie: hogere trede + gewicht.',cat:'kracht'},
       {name:'Pallof press (weerstandsband)',params:[['Reps','10–12'],['Sets','3 per zijde'],['Freq','2×/week']],note:'Staand zij naar ankerplaats. Anti-rotatie patterning, bedoeld om de laterale rompspieren aan te spreken — klinische redenering. Begin met lichte band.',cat:'stabiliteit'},
       {name:'Sorensen test / rugextensie prone',params:[['Hold','tot max (doel ≥ 60 sec)'],['Sets','2–3'],['Freq','2×/week']],note:'Buiklig op tafelrand, benen gefixeerd. Houd torso horizontaal. Meet uithoudingsvermogen lumbale extensoren (Biering-Sørensen, 1984). Goede rugspieruithouding kán volgens dat cohort een eerste episode rugpijn voorkomen bij mannen (de auteur formuleert het als mogelijkheid); als revalidatiedrempel is de test een praktijkafspraak.',cat:'kracht'},
       {name:'Farmers carry (boerenloop)',params:[['Afstand','20 m'],['Sets','4'],['Gewicht','licht → matig'],['Freq','2×/week']],note:'Kettlebells of dumbbells bilateraal. Lumbale stabilisatie onder axiale belasting — functionele transferoefening.',cat:'kracht'}
     ],
     criteria_go:['RDL pijnvrij met correct patroon (NRS ≤ 2/10)','Sorensen test ≥ 60 sec (praktijkdrempel)','Wall squat 45 sec zonder compensatie','Alle ADL pijnvrij uitvoerbaar','NRS ≤ 2/10 na oefensessies'],
     evidence:'<strong>Belastingsopbouw bij lage rugpijn:</strong> in een RCT bij 70 mensen met terugkerende rugpijn gaf <strong>laagbelaste motorcontroletraining</strong> een grotere verbetering van de gepersonaliseerde functieschaal dan zwaarbelast tillen (4,2 tegenover 2,5 punten), zonder verschil in pijnintensiteit of kracht (Aasa et al., 2015 — JOSPT). <em>De richting is dus omgekeerd aan de eerdere bewering dat progressieve krachttraining superieur is; er was bovendien geen rek- of algemene-oefengroep. Beide benaderingen verbeterden binnen de groep, dus krachttraining blijft verdedigbaar als klinische keuze.</em> <strong>Romanian deadlift</strong> en <strong>anti-rotatieoefeningen</strong> worden gekozen om extensoren en romp te belasten met beheersbare lumbale compressie — <em>klinische redenering.</em> <strong>Sorensen-test:</strong> een goede isometrische uithouding van de rugspieren <em>kan mogelijk</em> een EERSTE episode rugpijn voorkomen <strong>bij mannen</strong> — de auteur formuleert dit uitdrukkelijk als mogelijkheid; recidief hing vooral samen met het interval sinds de vorige episode (Biering-Sørensen, 1984 — Spine; n = 928). <em>De correlatie van 0,78 en de status van beste recidiefpredictor staan niet in die bron en zijn geschrapt.</em>',
    },
    {label:'Fase 4',title:'Activiteitsopbouw & Langetermijnbeheer',weeks:'Maand 4–6+',
     goals:['Terugkeer naar alle dagelijkse activiteiten en sport/werk','Zelfmanagementplan opstellen en actief toepassen','Ergonomisch bewustzijn verankeren','Recidief-preventieprotocol beheersen','Chronische pijnacceptatie indien nodig (ACT-principes)'],
     exercises:[
       {name:'Progressief fietsen of zwemmen',params:[['Duur','30–45 min'],['Intensiteit','matig (60–70% HFmax)'],['Freq','3–5×/week']],note:'Laagimpact aerobe training; het pijnmodulerend effect is bij chronische pijn wisselend en kan ook toenemen (Naugle 2012). Fiets: licht voorovergebogen — facetontlasting. Zwemmen: rugcrawl indien extensie-pijnvrij.',cat:'cardio'},
       {name:'Yoga rugprogramma (selectief)',params:[['Duur','30–45 min'],['Freq','2–3×/week']],note:'Child\u2019s pose, cat-cow, twisted chair (voorzichtig), sphinx. Vermijd intense rugbuiging of Sarvangasana (schouderstand) — voorzorg op basis van klinische redenering, niet met een bron onderbouwd.',cat:'mobiliteit'},
       {name:'Deadlift progressie',params:[['Sets','3–4'],['Reps','6–8'],['Freq','2×/week'],['Gewicht','60–75% 1RM progressief']],note:'Volledig hinge-patroon. Periodiseer: 3 weken opbouw, 1 week deload. Langetermijn opbouw van lumbale kracht; een effect op botdensiteit is klinische redenering, geen bron in dit dossier.',cat:'kracht'},
       {name:'Ergonomie & postuuroefeningen werk',params:[['Duur','5–10 min'],['Freq','elk uur']],note:'Micro-pauzes: 30 sec staan + 5 cat-cow elke zittende werkdag. Stabureau indien beschikbaar. Regelmatig van houding wisselen is klinische redenering; wat wél onderbouwd is als preventie, is oefening in combinatie met educatie (Steffens 2016).',cat:'neuromusculair'},
       {name:'Loopprogressie (nordic walking opt.)',params:[['Duur','30–60 min'],['Freq','dagelijks'],['Variatie','helling, terrein']],note:'Nordic walking wordt gekozen om de lumbale belasting te spreiden via de stokken — klinische redenering. Terreinvariatie activeert propriocepsis. Doel: zelfstandig actief blijven.',cat:'cardio'},
       {name:'Zelfmanagement-oefenblok (thuis)',params:[['Duur','20 min'],['Inhoud','TA-activatie + bird-dog + bridge + stretch'],['Freq','dagelijks']],note:'Condenseer het stabiliteitsprogramma naar 20 min. Volgehouden uitvoering is klinische redenering; geen bron in dit dossier onderbouwt dagelijkse uitvoering als sterkste predictor.',cat:'stabiliteit'}
     ],
     criteria_go:['Alle ADL pijnvrij of NRS ≤ 2/10','Zelfmanagementplan begrepen en actief uitgevoerd','NRS ≤ 2/10 bij sport of werk','PCS-score (Pain Catastrophizing Scale) significant gedaald','Afhankelijkheid van passieve behandeling afgebouwd'],
     evidence:'<strong>Beweging en pijn:</strong> een meta-analyse toont dat aerobe, isometrische en weerstandsoefening de experimenteel opgewekte pijn verlagen <strong>bij gezonde deelnemers</strong> (d = 0,41 tot 1,02). <strong>Tegenstrijdige evidentie:</strong> bij mensen met CHRONISCHE PIJN zijn richting en grootte sterk wisselend en treedt naast hypoalgesie ook <strong>hyperalgesie</strong> op, afhankelijk van aandoening en intensiteit; de optimale dosis kon niet bepaald worden (Naugle et al., 2012 — J Pain). <em>Het endogene opioïdmechanisme wordt daar niet onderbouwd.</em> <strong>Preventie:</strong> oefening mét educatie verlaagde het risico op een episode lage rugpijn (RR 0,55; 95% BI 0,41–0,74), oefening alleen RR 0,65 (0,50–0,86); educatie alleen, rugbanden en inlegzolen hadden géén effect — 21 trials, 30.850 deelnemers (Steffens et al., 2016 — JAMA Intern Med). <em>Dit is JAMA Internal Medicine, geen Cochrane; het eerdere n = 6133 was het aantal gevonden studies, niet deelnemers, en de 47% is geschrapt.</em> <strong>Zelfmanagement</strong> en hervatting van normale activiteit vormen samen met educatie de aanbevolen eerstelijnsbenadering (Foster et al., 2018 — Lancet). <em>Een vergelijkende effectuitspraak tegenover passieve behandeling staat er niet in.</em> <strong>Acceptatie- en waardengerichte therapie</strong> bij aanhoudende pijn met catastroferen is <em>klinische redenering; de aangehaalde studie is een ongecontroleerde effectstudie zonder vergelijkingsgroep en dateert van 2008.</em>',
    }
  ],
  scores:[],
  spiergroep:'Rug & Core'
};

protocols.sup = {id:'sup',title:'Supraspinatus Tendinopathie & Bursitis',subtitle:'Conservatief revalidatieprotocol voor supraspinatus tendinopathie en bursitis subacromialis — load management, rotatorenmanchetkracht en scapulaire controle',color:'#7c3aed',icon:'💪',
  phases:[
    {
      label:'Fase 1',
      title:'Acute fase — pijncontrole & ontlasting',
      weeks:'Week 0–2',
      goals:[
        'Pijn reduceren tot NRS ≤ 3/10 in rust en bij ADL',
        'Subacromiale ruimte ontlasten via houdingscorrectie',
        'Scapulaire depressie en retractie activeren',
        'Pendelslagen en passieve ROM behouden',
        'Patiënt informeren over belastingsbeheer en provocerende bewegingen'
      ],
      exercises:[
        {name:'Pendel oefening (Codman)',params:[['Duur','2 min'],['Richting','cirkels + voor-achter'],['Freq','3×/dag']],note:'Ontlast subacromiale ruimte via gravitatietractie. Arm hangt volledig ontspannen — geen actieve elevatie. Stopzetten bij toename pijn.',cat:'mobiliteit'},
        {name:'Scapula retractie & depressie',params:[['Sets','3'],['Reps','15'],['Hold','5 sec'],['Freq','2×/dag']],note:'Zittend of staand: trek schouderbladen naar elkaar en naar beneden. Corrigeert protractie en vermindert subacromiale compressie.',cat:'stabiliteit'},
        {name:'Isometrische externe rotatie (0°)',params:[['Sets','3'],['Reps','10'],['Hold','30–45 sec'],['Intensiteit','≤ NRS 3/10'],['Freq','2×/dag']],note:'Pijninhiberende werking bij tendinopathie — klinische redenering, geen bron in dit dossier. Elleboog 90° gebogen, onderarm tegen deurkozijn. Geen beweging — puur isometrisch.',cat:'kracht'},
        {name:'Isometrische abductie (0°)',params:[['Sets','3'],['Reps','10'],['Hold','30–45 sec'],['Intensiteit','≤ NRS 3/10'],['Freq','2×/dag']],note:'Arm langs het lichaam, druk zijwaarts tegen een muur. Activeert supraspinatus met minimale subacromiale compressie in lage hoek.',cat:'kracht'},
        {name:'Cervicale retractie (chin tuck)',params:[['Sets','3'],['Reps','15'],['Hold','5 sec'],['Freq','2×/dag']],note:'Corrigeert voorwaartse hoofdhouding die scapulaire dyskinese versterkt. Uitvoeren zittend tegen een muur.',cat:'stabiliteit'},
        {name:'Posterior capsule stretch (sleeper stretch)',params:[['Sets','3'],['Hold','30 sec'],['Zijde','aangedane zijde'],['Freq','2×/dag']],note:'Zijlig op aangedane zijde, elleboog 90°. Passief interne rotatie met contralaterale hand. Gericht op de posterieure kapselspanning — het mechanisme is niet gemeten in de aangehaalde studie, dit is klinische redenering.',cat:'mobiliteit'}
      ],
      criteria_go:[
        'Rust-NRS ≤ 2/10 gedurende ≥ 3 dagen',
        'Actieve abductie ≥ 90° met NRS ≤ 4/10',
        'Isometrische kracht pijnvrij uitvoerbaar',
        'Patiënt begrijpt belastingsprincipes en past ze toe',
        'Geen nachtpijn meer die slaap verstoort'
      ],
      evidence:'<strong>Isometrische oefeningen</strong> voor acute pijnverlichting: de aangehaalde studie betreft 6 volleyballers met <strong>patellapees</strong>tendinopathie (Rio et al., 2015 — BJSM), niet de schouder. <em>Toepassing op de rotatorenmanchet is klinische redenering — dezelfde bron wordt in deze app bij drie verschillende pezen gebruikt.</em> <strong>Scapulaire dyskinese</strong> komt volgens de internationale consensusverklaring voor bij een <strong>hoog percentage</strong> van de meeste schouderletsels, en impingementklachten worden er in het bijzonder door beïnvloed. <strong>Belangrijke nuance die ontbrak:</strong> diezelfde consensus stelt dat de exacte rol van de dyskinese bij het ontstaan of verergeren van schouderdisfunctie <strong>niet duidelijk omschreven</strong> is, en dat zij het best gezien wordt als een <strong>mogelijke</strong> stoornis (Kibler et al., 2013 — BJSM; bewijsniveau consensus). <em>Het cijfer 68% staat er niet in.</em> <strong>Posterieure strakheid:</strong> bij 22 patiënten met <strong>intern</strong> impingement hadden degenen bij wie de klachten volledig verdwenen een grotere verbetering van de posterieure strakheid dan wie restklachten hield (35 tegen 18 graden; p &lt; 0,05), terwijl de binnenrotatiebeperking géén verschil maakte (Tyler et al., 2010 — AJSM). <em>Die studie meet geen migratie van de humeruskop en geen subacromiale compressie.</em>',
    },
    {
      label:'Fase 2',
      title:'Mobiliteits- & krachtherstel',
      weeks:'Week 3–6',
      goals:[
        'Volledig actief bewogingsbereik (AROM) bereiken: elevatie ≥ 160°, ER ≥ 60°',
        'Rotatorenmanchet isotone kracht opbouwen (lichte weerstand)',
        'Scapulaire stabilisatoren versterken (serratus anterior, trapezius pars media & inferior)',
        'Pijnvrij dagelijkse activiteiten uitvoeren tot schouderhoogte',
        'Painful arc reduceren of elimineren (60–120° elevatieboog)'
      ],
      exercises:[
        {name:'Externe rotatie met theraband (elleboog bij zij)',params:[['Sets','3'],['Reps','15–20'],['Weerstand','licht'],['Tempo','2-0-2'],['Freq','2×/dag']],note:'Elleboog 90° gefixeerd aan de romp. Theraband geeft isotone belasting zonder subacromiale compressie. Verhoog weerstand enkel bij NRS ≤ 3/10.',cat:'kracht'},
        {name:'Interne rotatie met theraband',params:[['Sets','3'],['Reps','15–20'],['Weerstand','licht'],['Tempo','2-0-2'],['Freq','2×/dag']],note:'Antagonist van externe rotatoren — balans is essentieel voor centrering van humerushoofd. Uitvoeren bij NRS ≤ 3/10.',cat:'kracht'},
        {name:'Side-lying external rotation (SLER)',params:[['Sets','3'],['Reps','12–15'],['Gewicht','0,5–1 kg'],['Freq','dagelijks']],note:'Meest geïsoleerde activering van infraspinatus en teres minor. Zijlig, elleboog 90°, lichte dumbbell. Essentieel voor posterieure manchetkracht.',cat:'kracht'},
        {name:'Scapulaire wandglijdingen (wall slides)',params:[['Sets','3'],['Reps','12'],['Hoek','70° elevatie → progressief verhogen'],['Freq','dagelijks']],note:'Armen in W-positie tegen muur, glijden omhoog naar Y. Gericht op serratus anterior en onderste trapezius — praktijkkeuze; de EMG-studie in dit dossier vond géén oefening die de gewenste verhouding tussen bovenste trapezius en serratus haalde (Cools et al., 2007).',cat:'stabiliteit'},
        {name:'Prone Y–T–W oefeningen',params:[['Sets','3'],['Reps','10'],['Positie','buiklig, geen gewicht'],['Freq','dagelijks']],note:'Y = elevatie 120°, T = horizontale abductie, W = externe rotatie in abductie. Progressieve activering van scapulastabilisatoren in gesloten keten.',cat:'stabiliteit'},
        {name:'AROM elevatie in scapulaire vlak (scaption)',params:[['Sets','3'],['Reps','12–15'],['Hoek','30° voor frontaalvlak'],['Weerstand','geen → 0,5 kg'],['Freq','dagelijks']],note:'Het scapulaire vlak wordt gekozen om de subacromiale ruimte te sparen — klinische redenering; het kadaveronderzoek in dit dossier hief uitsluitend in dat vlak en vergeleek geen bewegingsvlakken. Start zonder gewicht, bouw op bij NRS ≤ 3/10 gedurende volledige boog.',cat:'kracht'}
      ],
      criteria_go:[
        'AROM elevatie ≥ 150° met NRS ≤ 3/10',
        'AROM externe rotatie ≥ 50° symmetrisch of ≤ 15° deficit',
        'Isotone ER-kracht met lichte weerstand pijnvrij (3 sets × 15 reps)',
        'Painful arc afwezig of NRS ≤ 2/10 bij actieve elevatie',
        'Scapulaire retractie/depressie stabiel bij alle oefeningen'
      ],
      evidence:'<strong>Isotone progressie</strong> na een isometrische fase is <em>klinische redenering; het continuummodel van Cook en Purdam (2009) beschrijft geen tenocytstimulatie en is uitdrukkelijk als model ter beoordeling voorgelegd.</em> <strong>Elevatie in het scapulaire vlak:</strong> kadaveronderzoek op 9 schouders toont dat het contact tussen acromion en manchetpezen het nauwst is tussen <strong>60 en 120 graden</strong> elevatie, dat de acromiohumerale afstand daalt van 11,1 mm bij 0 graden naar 5,7 mm bij 90 graden, en dat minder buitenrotatie het contact naar distaal verschuift (Flatow et al., 1994 — AJSM). <em>In die studie werd uitsluitend in het scapulaire vlak geheven; een vergelijking met het frontale of sagittale vlak ontbreekt, dus de bewering dat scaption minder contactdruk geeft dan die vlakken is niet gedekt.</em> <strong>Serratus anterior</strong> als aandachtspunt is <em>klinische redenering; de toegeschreven publicatie is een EMG-studie bij 45 GEZONDE proefpersonen over de verhouding tussen bovenste en onderste trapezius, en bevat geen voorspellerclaim.</em>',
    },
    {
      label:'Fase 3',
      title:'Rotatorenmanchet krachtopbouw',
      weeks:'Week 7–12',
      goals:[
        'Rotatorenmanchetkracht tot ≥ 80% van contralaterale zijde (handynamometer)',
        'Overhead activiteiten pijnvrij uitvoeren (kammen, grijpen boven schouderhoogte)',
        'Dynamische schoudercontrole verwerven bij functionele bewegingspatronen',
        'ER/IR krachtbalans ≥ 0,66 ratio bereiken',
        'NRS ≤ 2/10 bij alle dagelijkse activiteiten'
      ],
      exercises:[
        {name:'Shoulder press (staand, lichte dumbbell)',params:[['Sets','3'],['Reps','10–12'],['Gewicht','progressief 1–4 kg'],['Tempo','2-1-2'],['Freq','3×/week']],note:'Start met dumbbells in scapulaire vlak. Verhoog gewicht enkel wanneer NRS ≤ 3/10 gedurende volledige range. Geen barbell — theraband of dumbbell is veiliger voor initiële overheadbelasting.',cat:'kracht'},
        {name:'Kabeltrekken (lat pulldown)',params:[['Sets','3'],['Reps','10–12'],['Weerstand','matig'],['Greep','schouderbreedte'],['Freq','3×/week']],note:'Bedoeld om de depressoren van de humeruskop aan te spreken — klinische redenering; het mechanisme is niet gemeten. Verbetert rotatorenmanchet coactivatie in de sluiting van de kinetische keten.',cat:'kracht'},
        {name:'Sidelying ER met progressief gewicht',params:[['Sets','3'],['Reps','10–12'],['Gewicht','1–3 kg'],['Freq','3×/week']],note:'Progressie van fase 2 SLER. Target: 3 × 12 met 3 kg zonder pijn als drempelwaarde voor overheadhervatting.',cat:'kracht'},
        {name:'Diagonale PNF D2-patroon (theraband)',params:[['Sets','3'],['Reps','12'],['Weerstand','licht-matig'],['Richting','flexie-abductie-ER'],['Freq','3×/week']],note:'Functioneel bewegingspatroon dat meerdere rotatorenmanchetspieren simultaan activeert. Nabootsing van kammen, grijpen boven het hoofd en werpherstel.',cat:'neuromusculair'},
        {name:'Plankoefening (stabilisatie)',params:[['Sets','3'],['Hold','30–45 sec'],['Positie','standaard + varianten'],['Freq','3×/week']],note:'Gesloten keten schouderstabilisatie. Vermindert scapulaire protractie onder belasting. Progressie: plank op handen → instabiel vlak (BOSU).',cat:'stabiliteit'},
        {name:'Theraband cuban press',params:[['Sets','3'],['Reps','12'],['Weerstand','licht'],['Freq','3×/week']],note:'Gecombineerde beweging: ER in abductie → overhead press. Traint de functionele samenwerking van infraspinatus, teres minor en deltoideus in één beweging.',cat:'kracht'}
      ],
      criteria_go:[
        'ER-kracht ≥ 80% van contralaterale zijde (handynamometer)',
        'ER/IR ratio ≥ 0,66',
        'Overhead press 3 × 10 met lichaamsgewicht-gerelateerd gewicht pijnvrij',
        'NRS ≤ 2/10 bij alle dagelijkse activiteiten inclusief overhead',
        'Volledige AROM in alle vlakken zonder compensatie',
        'Scapulaire ritmesymmetrie bij actieve elevatie (klinische observatie)'
      ],
      evidence:'<strong>ER/IR-krachtverhouding</strong> van 0,66 is een gangbare <em>praktijkdrempel; de toegeschreven publicatie kon in dit dossier niet eenduidig opgehaald worden.</em> Dat progressieve overbelasting collageensynthese induceert en de peesstijfheid verbetert, is <em>klinische redenering — de toegeschreven bron is hier niet geverifieerd.</em> <strong>Scapulair ritme:</strong> de aangehaalde publicatie uit 2009 is de <em>inleiding op een consensusbijeenkomst over de scapula, geen studie naar herstel of recidiefpreventie; die claim is geschrapt.</em>',
    },
    {
      label:'Fase 4',
      title:'Functionele integratie & werkhervatting',
      weeks:'Week 13–20',
      goals:[
        'Volledige werkhervatting inclusief overhead- en repetitieve schoudertaken',
        'Sportspecifieke schouderkracht en uithoudingsvermogen opbouwen',
        'Terugval-preventieplan opstellen (ergonomie, belastingsmonitoring)',
        'Rotatorenmanchetkracht ≥ 90% contralateraal',
        'Zelfstandig onderhoudsprogramma thuis uitvoeren'
      ],
      exercises:[
        {name:'Overhead press (volledig bereik)',params:[['Sets','4'],['Reps','8–10'],['Gewicht','matig-zwaar'],['Freq','3×/week']],note:'Graduele overgang naar zwaarder gewicht en volledige overhead-range. Monitor scapulaire positie en lumbale hyperextensie. Verhoog weerstand 5–10% per 2 weken.',cat:'kracht'},
        {name:'Rowing (cable of theraband)',params:[['Sets','3'],['Reps','12–15'],['Weerstand','matig'],['Variatie','hoog-, midden-, laag-row'],['Freq','3×/week']],note:'Driedimensionale scapulastabilisatie via trekbewegingen. Variatie in rijthoek belast verschillende delen van trapezius en rhomboïden.',cat:'kracht'},
        {name:'Plyometrische wandgooien (lichte bal)',params:[['Sets','3'],['Reps','15'],['Gewicht','0,5–1 kg bal'],['Afstand','60–80 cm van muur'],['Freq','2×/week']],note:'Reactieve schouderbelasting om neuromusculaire controle en stijfheid in de kinetische keten te trainen. Essentieel voor sport- en werkhervatting bij overhead-activiteiten.',cat:'neuromusculair'},
        {name:'Ergonomie & werkplaatsaanpassing',params:[['Sessies','2–3 consultaties'],['Focus','beeldschermhoogte, muispositie, stoelinstelling'],['Freq','eenmalig + follow-up']],note:'Werkgerelateerde supraspinatus tendinopathie recidief zonder werkplaatsaanpassing is klinische redenering; het cijfer van 40% is niet onderbouwd. Documenteer aanbevelingen schriftelijk voor werkgever.',cat:'mobiliteit'},
        {name:'Uithoudings-circuit rotatorenmanchet',params:[['Sets','2'],['Reps','20–25'],['Weerstand','licht'],['Oefeningen','ER + scaption + row + press'],['Freq','2×/week']],note:'Uithoudingsvermogen wordt bij repetitieve bovenhandse arbeid nagestreefd — klinische redenering. Circuit zonder rust tussen oefeningen, 2 minuten rust tussen rondes.',cat:'kracht'},
        {name:'Thuis-onderhoudsprogramma (zelfstandig)',params:[['Duur','20 min'],['Inhoud','ER + scapulaire stabilisatie + stretch'],['Freq','3×/week']],note:'Condenseer het programma naar 4–5 kernoefeningen. Schrijf het op of geef een QR-code mee. Langetermijn-adherentie bepaalt recidiefrisico.',cat:'stabiliteit'}
      ],
      criteria_go:[
        'Rotatorenmanchetkracht ≥ 90% contralateraal (handynamometer)',
        'Werkhervatting zonder pijntoename (NRS ≤ 2/10 na werkdag)',
        'Overhead-activiteiten ≥ 30 minuten pijnvrij uitvoerbaar',
        'Zelfstandig onderhoudsprogramma correct uitgevoerd',
        'QuickDASH-score ≤ 20/100'
      ],
      evidence:'<strong>Ergonomie bij werkhervatting</strong> is <em>klinische redenering; de toegeschreven publicatie kon niet opgehaald worden en de risicoverhouding van 2,4 is niet onderbouwd.</em> Ook de vergelijking tussen uithoudings- en krachtgerichte training berust op een <em>citatie die hier niet geverifieerd is.</em> De <strong>DASH</strong> is een gevalideerde uitkomstmaat met goede betrouwbaarheid (ICC 0,96) en een responsiviteit vergelijkbaar met of beter dan gewrichtsspecifieke maten (Beaton et al., 2001 — J Hand Ther). <em>Een drempelwaarde van 20 die met subjectief volledig herstel zou samenhangen, staat daar niet in en is een praktijkafspraak.</em>',
    }
  ],
  scores:[],
  refs:'Kibler WB et al., 2013 — Br J Sports Med 47(14):877-85 (consensus scapulaire dyskinese; rol bij ontstaan niet duidelijk omschreven) | Flatow EL et al., 1994 — Am J Sports Med 22(6):779-88 (subacromiaal contact, kadaveronderzoek in het scapulaire vlak) | Tyler TF et al., 2010 — Am J Sports Med 38(1):114-9 (posterieure strakheid bij INTERN impingement) | Beaton DE et al., 2001 — J Hand Ther 14(2):128-46 (validatie DASH) | Rio E et al., 2015 — Br J Sports Med 49(19):1277-83 (isometrie bij de PATELLAPEES, hier als extrapolatie gebruikt) | Cools AM et al., 2007 — Am J Sports Med 35(10):1744-51 (scapulaoefeningen bij 45 GEZONDE proefpersonen) | Cook JL en Purdam CR, 2009 — Br J Sports Med 43(6):409-16 (continuummodel)',
  spiergroep:'Rotatorenmanchet'
};

protocols.fbl = {id:'fbl',title:'Facettaire Blokkade Lumbaal',subtitle:'Post-interventie revalidatieprotocol na lumbale facetblokkade (injectie / radiofrequente denervatie) — optimalisatie van het pijnvrije venster via progressieve belasting en stabilisatie',color:'#db2777',icon:'💉',
  phases:[
    {
      label:'Fase 1',
      title:'Post-interventie — rust & monitoring',
      weeks:'Dag 0–7',
      goals:[
        'Lokale reactie na injectie monitoren en beheersen (warmte, zwelling, tijdelijke pijntoename)',
        'Bedrust vermijden — rustige mobiliteit behouden',
        'Patiënt informeren over het verwachte verloop en het pijnvrije venster',
        'Basale lumbale mobiliteit bewaren zonder provocatie',
        'NRS documenteren als uitgangswaarde voor behandelingsrespons'
      ],
      exercises:[
        {name:'Ruglig knie-naar-borst stretch (passief)',params:[['Sets','2'],['Hold','20–30 sec'],['Zijde','bilateraal beurtelings'],['Freq','2×/dag']],note:'Milde lumbale flexie ontlast de facetgewrichten. Stoppen bij uitstralende pijn. Niet forceren — puur zwaartekracht gebruiken.',cat:'mobiliteit'},
        {name:'Enkel-pompen (circulatie)',params:[['Reps','20'],['Richting','pompen + cirkels'],['Freq','elk uur']],note:'Voorkomt veneuze stase bij beperkte activiteit. Circulatiebevordering in de eerste dagen na de injectie — praktijkafspraak.',cat:'mobiliteit'},
        {name:'Diafragmatische ademhaling',params:[['Sets','3'],['Reps','10 diepe ademhalingen'],['Positie','ruglig, knieën gebogen'],['Freq','3×/dag']],note:'Activeert transversus abdominis passief via intra-abdominale drukregulatie. Centrale pijninhibitie via vagale activering. Geen lumbale belasting.',cat:'stabiliteit'},
        {name:'Pijnvrij wandelen (kort)',params:[['Duur','5–10 min'],['Tempo','comfortabel'],['Freq','2–3×/dag']],note:'Beweging binnen de pijngrens boven rust — klinische redenering. Vermijd lang stilzitten of -staan. Stop bij NRS > 4/10 of toename uitstralende pijn.',cat:'cardio'},
        {name:'Cervicale & thoracale mobilisatie (zittend)',params:[['Sets','2'],['Reps','10'],['Bewegingen','rotatie + lateraalflexie'],['Freq','1×/dag']],note:'Globale mobiliteit bewaren zonder lumbale belasting. Correleert met ervaren welzijn en beperkt de neiging tot algehele inactiviteit.',cat:'mobiliteit'},
        {name:'Patiënteducatie: facetinjectie & verwachtingen',params:[['Duur','15–20 min'],['Inhoud','werking, venster, doelstelling kine'],['Freq','eenmalig + herhaling']],note:'Realistische verwachtingen over de duur van het pijnarme venster bevorderen de therapietrouw — klinische redenering; de toegeschreven publicatie is in dit dossier niet geverifieerd. Leg uit dat de injectie een therapeutisch venster opent, geen definitieve behandeling is.',cat:'neuromusculair'}
      ],
      criteria_go:[
        'Lokale reactie (warmte, zwelling) grotendeels geresorbeerd',
        'NRS in rust ≤ 3/10 gedurende ≥ 3 achtereenvolgende dagen',
        'Pijnvrij wandelen ≥ 15 min mogelijk',
        'Geen koorts of tekenen van infectie',
        'Patiënt akkoord met en begrip van revalidatiedoelstellingen'
      ],
      evidence:'Een <strong>facetblokkade</strong> kan een pijnarm venster openen waarin oefentherapie beter uitvoerbaar is — <em>klinische redenering; de duur van 6 tot 12 weken en de toegeschreven publicaties zijn in dit dossier niet geverifieerd.</em> Ook de aanbeveling om binnen een tot twee dagen te mobiliseren is <em>klinische redenering</em>. Wat wél vaststaat uit de audit van het facetartroseprotocol: de diagnostische blokkade is de meest aanvaarde methode maar heeft een hoog vals-positief percentage (Cohen &amp; Raja, 2007 — Anesthesiology), dus niet elke verwezen patiënt heeft werkelijk facetpijn.',
    },
    {
      label:'Fase 2',
      title:'Core activatie & lumbale stabilisatie',
      weeks:'Week 2–5',
      goals:[
        'Transversus abdominis en multifidus activeren als primaire lumbale stabilisatoren',
        'NRS bij bewegen reduceren tot ≤ 3/10',
        'Lumbale AROM in alle richtingen herstellen zonder compensatie',
        'Sedentaire tijd verminderen tot < 45 min/uur aaneengesloten',
        'Slaapkwaliteit verbeteren door nachtpijn te reduceren'
      ],
      exercises:[
        {name:'Transversus abdominis (TA) activatie',params:[['Sets','3'],['Hold','10 sec'],['Reps','10'],['Freq','2×/dag']],note:'Ruglig, knieën gebogen. Trek navel licht naar wervelkolom zonder bekken te kantelen. Adem normaal door. Basis van alle stabiliteitsoefeningen — correct uitvoeren vóór progressie.',cat:'stabiliteit'},
        {name:'Glute bridge (bilateraal)',params:[['Sets','3'],['Reps','12–15'],['Hold','2 sec boven'],['Freq','dagelijks']],note:'Activeert gluteus maximus en multifidus simultaan. Vermindert lumbale compressie door heupextensie-dominant patroon. Controleer geen lumbale hyperextensie bovenaan.',cat:'kracht'},
        {name:'Bird-dog (contralateraal)',params:[['Sets','3'],['Reps','8–10 per zijde'],['Hold','3–5 sec'],['Freq','dagelijks']],note:'Traineert anti-rotatie stabiliteit van de lumbale wervelzuil. Neutrale ruggengraat bewaren gedurende volledige beweging. Stopzetten bij compensatie met lumbale rotatie.',cat:'stabiliteit'},
        {name:'McKenzie extensie in buiklig (prone press-up)',params:[['Sets','3'],['Reps','10'],['Tempo','langzaam'],['Freq','2×/dag']],note:'Bij facetpathologie zorgvuldig dosagebeheer: stop bij toename pijn. Bij richtingsvoorkeur flexie — vervang door knie-naar-borst. Volg patiëntrespons.',cat:'mobiliteit'},
        {name:'Wandelen met progressie',params:[['Duur','15–30 min'],['Tempo','comfortabel → matig'],['Freq','dagelijks']],note:'Laagdrempelige basisinterventie; dat het de best onderbouwde interventie zou zijn, is in dit dossier niet aangetoond. Verhoog de duur met 5 min per week (praktijkafspraak). Gebruik stappenteller als objectieve maat.',cat:'cardio'},
        {name:'Zijlig heupabductie (clamshell)',params:[['Sets','3'],['Reps','15'],['Weerstand','geen → theraband'],['Freq','dagelijks']],note:'Gluteus medius-activering reduceert lumbopelvische instabiliteit. Zwakte van de heupabductoren is een consistente bevinding bij chronische lage rugpijn.',cat:'kracht'}
      ],
      criteria_go:[
        'TA-activatie correct en consistent uitvoerbaar (beoordeeld door kinesitherapeut)',
        'Bird-dog 3 × 10 per zijde met NRS ≤ 3/10',
        'Glute bridge 3 × 15 zonder lumbale compensatie',
        'Wandelen ≥ 30 min zonder significante pijntoename (NRS < 3/10 achteraf)',
        'NRS gemiddeld overdag ≤ 3/10'
      ],
      evidence:'<strong>Multifidusatrofie:</strong> bij ACUTE unilaterale rugpijn was de spierdoorsnede aan de symptomatische zijde 31 ± 8% kleiner, beperkt tot één wervelniveau (Hides et al., 1994 — Spine). <em>Het percentage van 80% bij chronische facetpijn staat in geen van beide Hides-publicaties; de trial uit 2001 betrof een EERSTE, acute episode en vergeleek met normale activiteit, niet met algemene oefentherapie.</em> <strong>Tegenstrijdige evidentie over stabilisatieoefeningen:</strong> in een RCT bij 106 patiënten met een bewegingscontrolestoornis vonden de auteurs <strong>géén meerwaarde</strong> van specifieke oefeningen boven algemene oefentherapie, op de primaire uitkomstmaat, na behandeling noch na zes of twaalf maanden; de secundaire uitkomsten toonden een kleine verbetering vlak na de behandeling die daarna vervlakte. Beide groepen verbeterden wel significant over het jaar (Saner et al., 2015 — Man Ther). <em>De app beweerde het omgekeerde.</em> <strong>Wandelen</strong> blijft een laagdrempelige basisinterventie — <em>klinische redenering; dat het het sterkste bewijsprofiel van alle interventies zou hebben, is niet onderbouwd en de toegeschreven publicatie is niet geverifieerd.</em>',
    },
    {
      label:'Fase 3',
      title:'Progressieve belasting & functionele kracht',
      weeks:'Week 6–12',
      goals:[
        'Lumbale en heupkracht opbouwen tot functioneel niveau (squat, deadlift, step-up)',
        'Werkgerelateerde en dagelijkse activiteiten pijnvrij hervatten',
        'NRS bij alle activiteiten ≤ 2/10',
        'Oswestry Disability Index (ODI) reduceren met ≥ 30% t.o.v. uitgangswaarde',
        'Cardiovasculaire conditie verbeteren via progressieve cardiotraining'
      ],
      exercises:[
        {name:'Squat bilateraal (bodyweight → gewicht)',params:[['Sets','3'],['Reps','10–12'],['Diepte','comfortabel → parallel'],['Freq','3×/week']],note:'Start met stoel-squat (squat to chair) voor veilige dosering. Controleer kniepositie over teen en neutrale lumbale curve. Verhoog diepte en gewicht gradueel.',cat:'kracht'},
        {name:'Romanian Deadlift (RDL) licht',params:[['Sets','3'],['Reps','10'],['Gewicht','licht → matig'],['Freq','3×/week']],note:'Traineert heup-gedomineerd buigpatroon — essentieel voor ADL (voorover buigen, optillen). Neutrale ruggengraat bewaren. Facetgewrichten worden minder belast bij heup-dominant vs. rug-dominant optilpatroon.',cat:'kracht'},
        {name:'Step-up anterieur (20–30 cm)',params:[['Sets','3'],['Reps','10 per been'],['Hoogte','20 → 30 cm'],['Freq','3×/week']],note:'Functionele unilaterale belasting — traptrap lopen, heuvel op. Activeert gluteus maximus en quadriceps in kinetische keten. Vermijdt direct axiaal gewicht op lumbale facetten.',cat:'kracht'},
        {name:'Plank (voorwaarts)',params:[['Sets','3'],['Hold','20–45 sec'],['Progressie','knieën → tenen → instabiel'],['Freq','3×/week']],note:'Anti-extensie stabilisatie. Minder lumbale compressie dan sit-ups. Progressie naar volle plank enkel bij NRS ≤ 2/10 gedurende volledige hold.',cat:'stabiliteit'},
        {name:'Fietsen (stationaire fiets of buiten)',params:[['Duur','20–40 min'],['Intensiteit','licht-matig (RPE 12–14)'],['Freq','3×/week']],note:'Lage lumbale compressie in fietshouding. Uitstekend voor cardiovasculaire conditie bij lage rugpijn. Pas zadelhoogte aan: heup licht hoger dan knie bij onderste stand.',cat:'cardio'},
        {name:'Pallof press (weerstandsband)',params:[['Sets','3'],['Reps','12 per zijde'],['Weerstand','licht-matig'],['Freq','3×/week']],note:'Anti-rotatie core-oefening. Hoge activering van transversus abdominis en oblique spieren bij minimale lumbale shear. Essentieel voor rotationele stabiliteit in ADL.',cat:'stabiliteit'}
      ],
      criteria_go:[
        'Squat 3 × 12 met eigen lichaamsgewicht pijnvrij (NRS ≤ 2/10)',
        'RDL met ≥ 20% lichaamsgewicht pijnvrij uitvoerbaar',
        'Plank ≥ 45 sec met NRS ≤ 2/10',
        'Fietsen ≥ 30 min zonder pijntoename',
        'ODI gereduceerd met ≥ 30% t.o.v. uitgangswaarde',
        'Werkhervatting (licht/aangepast werk) zonder significante pijntoename'
      ],
      evidence:'<strong>Progressieve weerstandstraining</strong> wordt in deze fase opgebouwd — <em>klinische redenering.</em> De toegeschreven review onderzocht iets anders: of klinische verbetering na oefentherapie samenhangt met verbetering van de getrainde eigenschap. Het antwoord was grotendeels <strong>nee</strong>, voor mobiliteit, rompkracht noch rugspieruithouding, en de auteurs stellen vast dat de effectgrootte van oefentherapie bij chronische aspecifieke lage rugpijn <strong>slechts bescheiden</strong> is (Steiger et al., 2012 — Eur Spine J; 16 studies, 1476 deelnemers). <em>Dat relativeert de verwachtingen van dit protocol.</em> Het <strong>heup-dominante tilpatroon</strong> en <strong>anti-rotatieoefeningen</strong> zijn <em>klinische redenering; de belastingsreductie van 40 tot 60% en de vergelijking met sit-ups zijn niet onderbouwd en de toegeschreven bronnen niet geverifieerd.</em>',
    },
    {
      label:'Fase 4',
      title:'Langetermijn onderhoud & terugvalpreventie',
      weeks:'Week 13–24',
      goals:[
        'Zelfstandig onderhoudsprogramma 3×/week uitvoeren zonder kinesitherapeut',
        'Volledige werkhervatting inclusief manuele arbeid of sport',
        'Recidiefpreventie via belastingsmonitoring en ergonomie',
        'ODI ≤ 20/100 (praktijkdrempel; de bron geeft een minimaal relevant verschil van circa 6 punten, geen absolute drempel)',
        'Plan opgesteld voor eventuele nieuwe interventie bij recidief (criteria bepalen)'
      ],
      exercises:[
        {name:'Krachttraining onderhoud (circuit)',params:[['Sets','3'],['Oefeningen','squat + RDL + plank + bridge'],['Freq','3×/week'],['Duur','30–40 min']],note:'Condenseer tot een efficiënt thuiscircuit. Volgehouden therapietrouw op lange termijn is klinische redenering; er is in dit dossier geen bron die dit als sterkste voorspeller onderbouwt.',cat:'kracht'},
        {name:'Looptraining of fietsen (conditie)',params:[['Duur','30–45 min'],['Intensiteit','matig (RPE 13–15)'],['Freq','3×/week']],note:'Aerobe conditie wordt nagestreefd als algemene gezondheidsmaatregel — klinische redenering; een beschermend effect tegen recidief is in dit dossier niet onderbouwd. Richtwaarde 150 min/week matige intensiteit.',cat:'cardio'},
        {name:'Ergonomie & belastingsmanagement',params:[['Sessies','1–2 follow-up'],['Focus','tillen, werkhouding, autorijden'],['Freq','herhalend']],note:'Documenteer belastingsgrenzen en herstelstrategieën schriftelijk. Een schriftelijk belastingsplan is klinische redenering; het cijfer van 35% is niet onderbouwd en is geschrapt.',cat:'mobiliteit'},
        {name:'Yoga of Pilates (groepsles)',params:[['Freq','1–2×/week'],['Type','beginners of ruggerichte les']],note:'Yoga gaf in een Cochrane-review kleine tot matige functieverbetering tegenover niet-oefencontroles, maar de pijnwinst haalde de drempel van klinische relevantie niet en het risico op toename van rugpijn lag hoger (risicoverschil 5%; 95% BI 2–8%) (Wieland et al., 2017). Bespreek dat met de patiënt. De sociale component als adherentiebevorderaar is klinische redenering.',cat:'stabiliteit'},
        {name:'Progressieve spierontspanning (Jacobson)',params:[['Duur','10–15 min'],['Freq','dagelijks of bij opflakkering']],note:'Pijnkatastrofering en centrale sensitisatie zijn risicofactoren voor recidief. Ontspanningstechnieken reduceren spierspanning en pijnbeleving bij opflakkering.',cat:'neuromusculair'},
        {name:'Pijnmonitoringsplan (zelfbeheer)',params:[['Freq','wekelijks NRS-registratie'],['Actieplan','NRS ≥ 5 → contact kinesitherapeut'],['Tool','NRS dagboek of app']],note:'Vroege herkenning van opflakkering en geprotocolleerde reactie vermijdt onnodige ernst. Geeft patiënt controle en vermindert catastrofering.',cat:'neuromusculair'}
      ],
      criteria_go:[
        'Zelfstandig onderhoudsprogramma ≥ 4 weken correct uitgevoerd',
        'ODI ≤ 20/100',
        'NRS gemiddeld ≤ 2/10 bij alle activiteiten',
        'Volledige werkhervatting zonder aanpassingen',
        'Patiënt kent criteria voor nieuwe interventie of kinesitherapie bij recidief'
      ],
      evidence:'<strong>Langdurig volgehouden oefentherapie</strong> na een facetinterventie is <em>klinische redenering; de recidiefreductie van 45% is niet onderbouwd en de toegeschreven publicatie niet geverifieerd.</em> <strong>Zelfmanagement</strong> met educatie en opvolging wordt in richtlijnen aanbevolen als eerstelijnsbenadering (Foster et al., 2018 — Lancet); <em>een vergelijkende uitspraak dat het even effectief is als doorlopende kinesitherapie staat daar niet in.</em> De <strong>Oswestry-vragenlijst</strong> wordt als uitkomstmaat gebruikt; de geverifieerde bron geeft een minimaal klinisch relevant verschil van ongeveer <strong>6 punten</strong> (Fritz &amp; Irrgang, 2001 — Phys Ther). <em>Een drempelwaarde van 20 die met volledig herstel zou samenhangen, staat er niet in.</em> <strong>Yoga:</strong> in een Cochrane-review van 12 trials gaf yoga in de negen vergelijkingen met niet-oefencontroles kleine tot matige functieverbetering, maar de pijnwinst haalde de vooraf bepaalde drempel van klinische relevantie NIET, en ten opzichte van andere oefenvormen is onzeker of er verschil is. <strong>Let op:</strong> het risico op ongewenste voorvallen — vooral <strong>toename van rugpijn</strong> — lag hoger dan bij niet-oefencontroles (risicoverschil 5%; 95% BI 2–8%), zonder ernstige voorvallen (Wieland et al., 2017 — Cochrane).',
    }
  ],
  scores:[],
  refs:'Cohen SP en Raja SN, 2007 — Anesthesiology 106(3):591-614 (diagnostiek facetpijn; hoog vals-positief percentage bij blokkade) | Saner J et al., 2015 — Man Ther 20(5):672-9 (specifieke versus algemene oefentherapie; geen meerwaarde) | Steiger F et al., 2012 — Eur Spine J 21(4):575-98 (effectgrootte oefentherapie bescheiden) | Hides JA et al., 1994 — Spine 19(2):165-72 (multifidusatrofie) | Fritz JM en Irrgang JJ, 2001 — Phys Ther 81(2):776-88 (Oswestry, minimaal klinisch relevant verschil) | Wieland LS et al., 2017 — Cochrane CD010671 (yoga; meer kans op toename rugpijn) | Foster NE et al., 2018 — Lancet 391(10137):2368-2383 (aanbevolen eerstelijnsbenadering)',
  spiergroep:'Lumbale extensoren'
};

protocols.mcl = {id:'mcl',title:'MCL Letsel Knie',subtitle:'Conservatief revalidatieprotocol voor mediaal collateraal ligamentletsel graad I–III — acute bescherming, progressieve stabilisatie en return to sport',color:'#2dd4bf',icon:'🦵',
  phases:[
    {
      label:'Fase 1',
      title:'Acute fase — bescherming & zwellingcontrole',
      weeks:'Week 0–2',
      goals:[
        'Zwelling en hemartros reduceren via PRICE-protocol',
        'Pijnvrij volledig gewicht dragen (graad I–II) of geassisteerd lopen (graad III)',
        'Knieflexie ≥ 90° en volledige extensie behouden of herwinnen',
        'Quadricepsinhibitie doorbreken via isometrische activatie',
        'Patiënt informeren over belastingsgrenzen en bracegebruik'
      ],
      exercises:[
        {name:'Quadriceps setting (isometrisch)',params:[['Sets','3'],['Hold','10 sec'],['Reps','15'],['Freq','3×/dag']],note:'Doorbreekt reflexieve quadricepsinhibitie door hemartros. Ruglig, knie gestrekt op rol. Essentieel vóór elke gewichtsdragende progressie.',cat:'kracht'},
        {name:'Enkel-pompen & beencirkels',params:[['Reps','20–30'],['Richting','pompen + cirkels'],['Freq','elk uur']],note:'Voorkomt veneuze stase en diepe veneuze trombose. Actieve pomp van het onderbeen. Prioriteit in eerste 48u.',cat:'mobiliteit'},
        {name:'Passieve knie-extensie (handdoekrol)',params:[['Hold','10–15 min'],['Positie','hiel op rol, geen kussen onder knie'],['Freq','3×/dag']],note:'Voorkomt flexiecontractuur. Handdoekrol onder hiel, knie hangt vrij. Zwaartekracht herstelt extensie. Kritisch bij graad III letsel.',cat:'mobiliteit'},
        {name:'Actief-geassisteerde knieflexie (zittend)',params:[['Sets','3'],['Reps','10'],['Bereik','0–90° comfortabel'],['Freq','2×/dag']],note:'Gebruik niet-aangedane been om aangedane knie passief te flecteren. Stop bij NRS > 4/10 of mediale spanning. Doel: 90° tegen einde week 1.',cat:'mobiliteit'},
        {name:'Stationaire fiets (laag verzet)',params:[['Duur','10–15 min'],['Weerstand','minimaal'],['Freq','dagelijks zodra 100° flexie']],note:'Beste vroege mobilisatiemodaliteit bij knieletsel. Vereist ≥ 100° flexie. Laag verzet, hoog zadel initieel. Bevordert synoviaalvloeistof circulatie.',cat:'cardio'},
        {name:'Straight Leg Raise (SLR)',params:[['Sets','3'],['Reps','15'],['Positie','ruglig, contralaterale knie gebogen'],['Freq','2×/dag']],note:'Quadricepskracht zonder kniebelasting. Essentieel overbrugging totdat knie veilig belast kan worden. Stop bij uitstralende pijn in het bovenbeen.',cat:'kracht'}
      ],
      criteria_go:[
        'Zwelling significant gereduceerd (knieodomtrek ≤ 1 cm meer dan contralateraal)',
        'Knieflexie ≥ 100° en volledige extensie (0°)',
        'Pijnvrij volledig gewicht dragen zonder hulpmiddelen (graad I–II) of met 1 kruk (graad III)',
        'SLR 3 × 15 uitvoerbaar zonder quadricepslag',
        'NRS in rust ≤ 2/10'
      ],
      evidence:'<strong>PRICE</strong> (bescherming, relatieve rust, ijs, compressie, elevatie) in de eerste 48 uur — <em>klinische redenering; er is geen bron gevonden die een effectcijfer op zwelling onderbouwt, het eerder vermelde 30–40% is geschrapt</em>. Vroege mobilisatie na MCL-letsel is gangbaar; de gecontroleerde publicatie beschrijft vroege beweging bij een volledige scheur maar vergelijkt niet met immobilisatie en rapporteert geen instabiliteitsdata — de superioriteitsuitspraak blijft dus <em>klinische redenering</em>. <strong>Quadricepsinhibitie bij gewrichtseffusie</strong> is een aangetoond mechanisme en wordt tegengegaan met isometrische oefeningen; <em>het percentage krachtverlies van 50–70% stond niet in de bron en is geschrapt</em>.',
    },
    {
      label:'Fase 2',
      title:'Vroeg herstel — kracht & proprioceptie',
      weeks:'Week 3–6',
      goals:[
        'Volledig pijnvrij gewicht dragen zonder brace of hulpmiddelen',
        'Knieflexie ≥ 120° en volledige extensie',
        'Quadricepskracht ≥ 60% van contralaterale zijde',
        'Normaal gangpatroon herstellen',
        'Basis proprioceptie en enkelvoudige balans opbouwen'
      ],
      exercises:[
        {name:'Mini-squat bilateraal (0–60°)',params:[['Sets','3'],['Reps','15'],['Diepte','0–60°'],['Freq','dagelijks']],note:'Gecontroleerde gesloten-keten kniestabilisatie. Kniepositie over teen bewaken. Geen valgusdruk. Start bij 0–45° en bouw op naar 60° bij NRS ≤ 3/10.',cat:'kracht'},
        {name:'Beenpers bilateraal',params:[['Sets','3'],['Reps','12–15'],['Hoek','70–90°'],['Weerstand','licht-matig'],['Freq','3×/week']],note:'Gesloten-keten quadriceps en gluteustraining met gecontroleerde mediale kniestress. Voeten schouderbreedte, knieën recht boven tenen.',cat:'kracht'},
        {name:'Step-up anterieur (10–15 cm)',params:[['Sets','3'],['Reps','12 per been'],['Hoogte','10 → 15 cm'],['Freq','3×/week']],note:'Unilaterale functionele belasting. Traint quadriceps en gluteus in kinetische keten. Controleer geen knieval binnenwaarts (valgus) bij afstap.',cat:'kracht'},
        {name:'Enkel-been balans (stabiel vlak)',params:[['Sets','3'],['Hold','20–30 sec'],['Ogen','open → dicht'],['Freq','dagelijks']],note:'Herstelt mediale kniepropriocepie die door MCL-rek verloren gaat. Licht gebogen knie. Progressie: ogen open → dicht → instabiel vlak.',cat:'neuromusculair'},
        {name:'Wandelen normaal gangpatroon',params:[['Duur','20–30 min'],['Tempo','comfortabel'],['Aandacht','hielstoot, kniestrekking, afzet'],['Freq','dagelijks']],note:'Gericht op herstel van normaal gangpatroon. Kinesitherapeut observeert en corrigeert antalgisch gangpatroon (valgus, flexiecontractuur).',cat:'cardio'},
        {name:'Clamshell & heupabductie zijlig',params:[['Sets','3'],['Reps','15'],['Weerstand','geen → licht'],['Freq','dagelijks']],note:'Gluteus medius-zwakte verhoogt knievalgusstress op MCL. Essentieel bijdragende factor die vaak onderschat wordt bij mediaal knieletsel.',cat:'kracht'}
      ],
      criteria_go:[
        'Volledig gewicht dragen pijnvrij, zonder brace',
        'Knieflexie ≥ 120° en extensie 0°',
        'Mini-squat 3 × 15 tot 60° pijnvrij (NRS ≤ 2/10)',
        'Enkelbeen-balans ≥ 20 sec met ogen open',
        'Normaal gangpatroon bij ganganalyse (geen antalgisch patroon)',
        'Quadricepskracht ≥ 60% contralateraal (handynamometer of functionele test)'
      ],
      evidence:'<strong>Gesloten-keten oefeningen</strong> (squat, leg press, step-up) laten de valgusbelasting beter doseren dan open-keten oefeningen — <em>klinische redenering</em>. Proprioceptieve training na bandletsel is standaardpraktijk; <em>de eerder vermelde risicoverhoging met factor 3,8 berustte op onderzoek naar VKB-proprioceptie en is geschrapt</em>. Gluteus medius-zwakte en dynamische valgus worden in de praktijk samen aangepakt — <em>klinische redenering; de aangehaalde publicatie betrof patellofemorale pijn bij lopers, niet MCL-herletsel</em>.',
    },
    {
      label:'Fase 3',
      title:'Functionele krachtsopbouw',
      weeks:'Week 7–12',
      goals:[
        'Quadricepskracht ≥ 80% van contralaterale zijde',
        'Hamstring/quadriceps ratio ≥ 0,60 bereiken',
        'Single leg squat gecontroleerd uitvoeren (10 herhalingen)',
        'Joggen op vlak terrein zonder pijn of mank lopen',
        'Zijwaartse en achterwaartse belastingen integreren'
      ],
      exercises:[
        {name:'Squat diep bilateraal (0–90°)',params:[['Sets','4'],['Reps','10–12'],['Gewicht','progressief'],['Freq','3×/week']],note:'Progressie naar volledige squatdiepte. Bewaken: kniepositie over voet, geen mediaal inknikken, neutrale lumbale curve. Verhoog gewicht 5–10% per week.',cat:'kracht'},
        {name:'Romanian Deadlift (RDL)',params:[['Sets','3'],['Reps','10'],['Gewicht','matig'],['Freq','3×/week']],note:'Hamstring eccentrische kracht opbouwen — verplicht voor H/Q ratio herstel. Neutrale ruggengraat, heup-dominant patroon. Essentieel voor kniestabiliteit.',cat:'kracht'},
        {name:'Single leg squat (10–20 cm box)',params:[['Sets','3'],['Reps','8–10 per been'],['Hoogte','10 → 20 cm'],['Freq','3×/week']],note:'Meest veeleisende unilaterale kracht- en stabiliteitstest. Bewaken: knierichting, heupneutraliteit. Enkel doorgaan bij NRS ≤ 3/10 en zonder knieval.',cat:'kracht'},
        {name:'Lateral band walk (theraband)',params:[['Sets','3'],['Reps','15 stappen per richting'],['Weerstand','licht-matig'],['Freq','3×/week']],note:'Targetgericht gluteus medius in functioneel zijwaarts bewegingspatroon. Licht gebogen knieën, band net boven enkels. Verhoog weerstand bij correcte uitvoering.',cat:'stabiliteit'},
        {name:'Jog-walk protocol',params:[['Schema','1 min jog / 2 min walk × 10'],['Freq','3×/week'],['Progressie','verhoog joggingintervals wekelijks']],note:'Graduele terugkeer naar lopen. Start op vlak oppervlak. Kinesitherapeut observeert eerste sessie op kniemechanica. Stop bij NRS > 3/10 of antalgisch patroon.',cat:'cardio'},
        {name:'Balans op instabiel vlak (BOSU / wiebelplank)',params:[['Sets','3'],['Hold','30 sec'],['Progressie','bipodiaal → unipodiaal'],['Freq','dagelijks']],note:'Verhoogde proprioceptieve en neuromusculaire uitdaging. Simuleert terrein-instabiliteit bij sport. Essentieel voor veilige sporthervatting.',cat:'neuromusculair'}
      ],
      criteria_go:[
        'Quadricepskracht ≥ 80% contralateraal (isokinetisch of handynamometer)',
        'H/Q ratio ≥ 0,60',
        'Single leg squat 3 × 10 per been pijnvrij en gecontroleerd',
        'Continu joggen ≥ 15 min zonder pijn of antalgisch patroon',
        'Klinische valgus-stresstest: geen verhoogde laxiteit t.o.v. baseline',
        'NRS ≤ 2/10 bij alle functionele activiteiten'
      ],
      evidence:'<strong>H/Q-ratio ≥ 0,60</strong> is een <em>praktijkdrempel</em>: er is geen bron gevonden die deze waarde onderbouwt. Neuromusculaire training op instabiele ondergrond wordt toegepast om de kniestabiliteit te verbeteren — <em>klinische redenering</em>; de eerder aangehaalde studie vergeleek balans- met plyometrietraining bij gezonde atletes, niet bij bandletsel. Een <strong>progressief jogprotocol</strong> bij loophervatting is eveneens <em>klinische redenering</em>, niet gedekt door recidiefcijfers.',
    },
    {
      label:'Fase 4',
      title:'Sportspecifieke training & agiliteit',
      weeks:'Week 13–18',
      goals:[
        'Richtingsverandering en pivotbewegingen pijnvrij uitvoeren',
        'Quadricepskracht ≥ 90% contralateraal',
        'Sportspecifieke drills zonder beschermingsbrace uitvoeren',
        'Psychologische gereedheid voor sporthervatting (ACL-RSI ≥ 65)',
        'Volledige loopsnelheid pijnvrij bereiken'
      ],
      exercises:[
        {name:'Shuttle run & richtingsverandering',params:[['Sets','4–6'],['Afstand','10 m'],['Schema','heen en terug × 3'],['Freq','3×/week']],note:'Bouwt vermogen voor snelle richtingsverandering. Start bij 60% snelheid, progressief naar 100%. Monitor kniemechanica bij acceleratie en afremming.',cat:'neuromusculair'},
        {name:'Zijwaartse sprongen (lateral hops)',params:[['Sets','3'],['Reps','10 per zijde'],['Breedte','30 → 60 cm'],['Freq','3×/week']],note:'Mediale kniestabiliteit testen en trainen onder plyometrische belasting. Zachte landing controleren: knie absorbeert, geen valgus. Progressieve sprongbreedte.',cat:'kracht'},
        {name:'Continu hardlopen (progressief)',params:[['Duur','20–40 min'],['Intensiteit','70–85% max snelheid'],['Freq','3–4×/week']],note:'Volledige loophervatting met progressieve intensiteit. Varieer ondergrond (gras, tartan). Monitor kniepijn 24u na training.',cat:'cardio'},
        {name:'Sportspecifieke techniektraining',params:[['Duur','30–45 min'],['Inhoud','sport-afhankelijk: traptechniek, vangtechniek, schermtechniek'],['Freq','2–3×/week']],note:'Overgang naar sportcontext. Kinesitherapeut of coach observeert kniemechanica. Pas aan op basis van specifieke sport en positie van patiënt.',cat:'neuromusculair'},
        {name:'Nordic Hamstring Curl (preventie)',params:[['Sets','3'],['Reps','6–8'],['Tempo','eccentrisch 3–4 sec'],['Freq','2×/week']],note:'Sterkste evidence voor hamstringpees- en knieletselpreventie. Moeilijk — start met gedeeltelijke bewegingsrange. Essentieel vóór sporthervatting.',cat:'kracht'},
        {name:'Proprioceptie challenge (reaktiebord / perturbatie)',params:[['Sets','3'],['Duur','30 sec per set'],['Type','reactieve perturbatie door kinesitherapeut'],['Freq','2×/week']],note:'Simuleert onverwachte kniebelasting zoals bij sport. Kinesitherapeut geeft onverwachte duw of trekt weerstandsband tijdens balansuitvoering.',cat:'neuromusculair'}
      ],
      criteria_go:[
        'Quadricepskracht ≥ 90% contralateraal',
        'Enkelvoudig been-hoptest ≥ 90% symmetrie-index (LSI)',
        'Shuttle run zonder antalgisch patroon of kniepijn',
        'ACL-RSI score ≥ 65 (psychologische gereedheid)',
        'Klinisch: geen mediale kniepijn bij valgus-stresstest',
        'Sportspecifieke drills volledig pijnvrij bij 90% intensiteit'
      ],
      evidence:'Een <strong>Limb Symmetry Index ≥ 90%</strong> op de hoptestbatterij is een breed gebruikte <em>praktijkdrempel</em> (hoptestbatterij: Barber et al., 1990). Een preventieprogramma mét de <strong>Nordic hamstringoefening</strong> halveerde in een meta-analyse van 15 studies en 8459 sporters het aantal <strong>hamstringletsels</strong> (RR 0,49; 95% BI 0,32–0,74; reductie tot 51%) — <em>dat cijfer geldt uitsluitend voor hamstringletsel, niet voor knieletsel</em> (van Dyk et al., 2019 — BJSM). Psychologische gereedheid is onderzocht na <strong>VKB-reconstructie</strong>, niet bij MCL; toepassing hier is <em>klinische redenering</em>.',
    },
    {
      label:'Fase 5',
      title:'Return to sport & recidiefpreventie',
      weeks:'Week 19–24',
      goals:[
        'Volledige, onbeperkte sporthervatting',
        'LSI ≥ 95% bij alle functionele tests',
        'Onderhoudsprogramma implementeren (kracht + proprioceptie)',
        'Recidiefpreventieplan met trainer/coach opstellen',
        'ACL-RSI ≥ 80 (volledig psychologisch klaar)'
      ],
      exercises:[
        {name:'Wedstrijdspecifieke training (volledig)',params:[['Freq','5×/week'],['Intensiteit','100%'],['Type','volledig trainingsdeelname']],note:'Volledige integratie in groepstraining. Kinesitherapeut geeft groen licht na doorstaan van alle criteria fase 4. Eerste 2 weken nog wekelijkse check-in.',cat:'cardio'},
        {name:'Onderhoud krachtcircuit knie',params:[['Sets','3'],['Oefeningen','squat + RDL + lateral hop + nordic'],['Freq','2×/week']],note:'Langetermijn onderhoud van knie- en heupkracht als bescherming tegen herletsel. Condenseer tot 20–25 minuten circuit.',cat:'kracht'},
        {name:'Nordic Hamstring onderhoud',params:[['Sets','2'],['Reps','6'],['Freq','1–2×/week (off-season)']],note:'FIFA 11+ protocol integreert Nordic als warm-up onderdeel. Aangetoond effectief als seizoensgebonden preventie bij ploegsporten.',cat:'kracht'},
        {name:'Proprioceptie circuit (wekelijks)',params:[['Duur','10 min'],['Inhoud','BOSU + perturbatie + hinkelen'],['Freq','1–2×/week']],note:'Proprioceptief onderhoud om het verhoogde herletselrisico in het eerste seizoen na MCL-letsel te verlagen.',cat:'neuromusculair'},
        {name:'Belastingsmonitoring (sRPE)',params:[['Tool','sessie RPE × duur'],['Freq','na elke training'],['Drempel','wekelijkse stijging ≤ 10%']],note:'Belasting geleidelijk opbouwen na sporthervatting. Een wekelijkse grens van 10% is een praktijkafspraak, geen bronwaarde.',cat:'stabiliteit'}
      ],
      criteria_go:[
        'Volledige wedstrijddeelname gedurende ≥ 2 weken zonder klachten',
        'LSI ≥ 95% bij enkelbeen-hoptest en drievoudige hoptest',
        'ACL-RSI ≥ 80',
        'Onderhoudsprogramma zelfstandig en correct uitgevoerd',
        'Geen mediale kniepijn bij maximale sportbelasting'
      ],
      evidence:'In de Delaware-Oslo-cohortstudie (106 pivotsporters) daalde het herletselpercentage met <strong>51% per maand uitstel</strong> tot negen maanden na de operatie, en verlaagde een <strong>symmetrischer quadricepskracht</strong> vóór terugkeer het herletselcijfer significant. Wie zakte voor de volledige testbatterij had 38,2% herletsel tegenover 5,6% bij wie slaagde, maar <em>dat verschil was niet statistisch significant (HR 0,16; p = 0,075) — de 84% uit de titel van dat artikel berust hierop</em> (Grindem et al., 2016 — BJSM). <em>Het onderzoek betreft VKB-reconstructie; overdracht naar MCL is klinische redenering.</em> <em>Er is geen bron gevonden voor een MCL-recidiefcijfer van 12–18%; dat cijfer is geschrapt.</em> Belastingsmonitoring met geleidelijke wekelijkse opbouw blijft <em>klinische redenering</em>; het eerder vermelde effect van 30% en de sRPE-drempel waren niet gedekt.',
    }
  ],
  scores:[],
  spiergroep:'Quadriceps'
};

protocols.fs = {id:'fs',title:'Frozen Shoulder',subtitle:'Adhesieve capsulitis — conservatief revalidatieprotocol met pijnmanagement, progressieve ROM en functioneel schouderherstel',color:'#6366f1',icon:'🧊',
  phases:[
    {
      label:'Fase 1',
      title:'Pijnfase — bescherming & pijncontrole',
      weeks:'Week 0–6',
      goals:[
        'Pijn reduceren naar VAS ≤ 4/10 in rust via analgetische positionering en thermale therapie',
        'Bestaande ROM behouden en verdere capsulaire contractuur vertragen',
        'Patiënt educeren over het beloop: 41% houdt na gemiddeld 4,4 jaar restklachten (Hand et al., 2008), dus geen vaste hersteltermijn beloven, verwachtingen en zelfmanagement',
        'Scapulaire houdingscontrole en bovenste trapezius ontspanning',
        'Slaapkwaliteit verbeteren door nachtpositionering en spierspanning reductie'
      ],
      exercises:[
        {name:'Pendelslingeringen (Codman)',params:[['Duur','3–5 min'],['Type','voor-achter + cirkels'],['Freq','3–4×/dag']],note:'Arm hangt vrij, romp voorovergebogen, gravitatie creëert tractie. Minimale spieractivatie — puur passief gewicht. Reduceert intra-articulaire druk. Start bij diameter 10 cm.',cat:'mobiliteit'},
        {name:'Passieve voorwaartse flexie (ruglig)',params:[['Sets','3'],['Reps','10'],['Hold','5–10 sec aan einde bereik'],['Freq','2×/dag']],note:'Ruglig, gezonde arm ondersteunt aangedane arm bij optillen. Zwaartekracht assisteert op einde bereik. Stop bij NRS > 5/10. Warm compres 15 min vóór oefening.',cat:'mobiliteit'},
        {name:'Scapulaire retractie & depressie',params:[['Sets','3'],['Reps','10–12'],['Hold','5 sec'],['Freq','2×/dag']],note:'Schouderbladen samenbrengen en omlaag drukken. Corrigeert verhoogde scapulaire stand door pijnbescherming. Essentieel om scapulothoracale ritme te bewaren.',cat:'stabiliteit'},
        {name:'Isometrische schouderoefeningen (neutrale positie)',params:[['Sets','3'],['Hold','5–8 sec'],['Reps','10 per richting'],['Freq','2×/dag']],note:'Lichte isometrische contractie in neutrale positie: flexie, abductie, exorotatie. Behoudt spierkracht zonder capsulaire stress. Stop bij NRS > 3/10.',cat:'kracht'},
        {name:'Cervicale mobilisatie & lateraalflexie nek',params:[['Sets','2'],['Reps','10 per richting'],['Tempo','langzaam'],['Freq','dagelijks']],note:'Adhesieve capsulitis gaat vaak gepaard met cervicale spierspanning (trapezius, levator scapulae). Cervicale mobilisatie verlicht referred pain naar schouder en nek.',cat:'mobiliteit'},
        {name:'Thermale therapie voor oefeningen',params:[['Duur','15–20 min warm'],['Timing','vóór oefeningen'],['Freq','dagelijks']],note:'Warmte (infrarood, warmwaterfles) verhoogt weefselrekbaarheid en kan de pijn verlichten voor aansluitende ROM-oefeningen — klinische redenering, geen bron in dit dossier.',cat:'mobiliteit'}
      ],
      criteria_go:[
        'VAS pijn in rust ≤ 4/10 gedurende ≥ 1 week aaneengesloten',
        'Voorwaartse flexie passief ≥ 90°',
        'Abductie passief ≥ 70°',
        'Patiënt begrijpt ziekteverloop en heeft realistische verwachtingen',
        'Geen rode vlaggen voor secundaire oorzaak (ongecontroleerde diabetes, tumorpijn, cervicale myelopathie)'
      ],
      evidence:'<strong>Beloop:</strong> patiënten met adhesieve capsulitis herstellen doorgaans, maar volgens een klinisch overzichtsartikel krijgen zij <strong>mogelijk nooit hun volledige bewegingsuitslag terug</strong> (Dias et al., 2005 — BMJ). <em>Het eerder vermelde herstel bij 90% binnen 18 tot 24 maanden staat daar niet in.</em> <strong>Corticosteroïdinjectie:</strong> in een placebogecontroleerde trial met 93 deelnemers verbeterden na 6 weken de twee injectiegroepen significant meer op de SPADI dan de niet-geïnjecteerde groepen (p = 0,0004), en gaf de combinatie van injectie mét kinesitherapie de grootste toename van bewegingsuitslag. <strong>Belangrijke bevindingen die in de app ontbraken:</strong> tussen kinesitherapie en placebo was er op géén enkel meetmoment verschil, op meer flexie na drie maanden na, de auteurs besluiten dat gesuperviseerde kinesitherapie <strong>alléén van beperkte werkzaamheid</strong> is, en na 12 maanden waren alle groepen in gelijke mate verbeterd (Carette et al., 2003 — Arthritis Rheum). <strong>Codman-pendels</strong> als veilige vroege mobilisatie zijn <em>klinische redenering; de toegeschreven publicatie is in dit dossier niet geverifieerd.</em>',
    },
    {
      label:'Fase 2',
      title:'Bevroren fase — capsulaire rek & ROM-progressie',
      weeks:'Week 6–16',
      goals:[
        'Voorwaartse flexie progressief vergroten tot ≥ 120° actief',
        'Exorotatie met arm langs zij herstellen tot ≥ 30°',
        'Abductie verbeteren tot ≥ 100° actief',
        'Scapulothoracaal ritme normaliseren via gerichte oefentherapie',
        'Functionele ADL-taken (haarkammen, rugwassen, aankleden) herwinnen'
      ],
      exercises:[
        {name:'Wandwandeling voorwaarts (finger ladder)',params:[['Sets','3'],['Duur','3–5 min'],['Progressie','wekelijks hogere stand markeren'],['Freq','3×/dag']],note:'Actief-geassisteerde flexie tegen wand. Vingers wandelen omhoog tot eindstand. Markeer dagelijkse maximumpositie met tape of stift. Meest gebruikte ROM-progressieoefening bij frozen shoulder.',cat:'mobiliteit'},
        {name:'Cross-body stretch (horizontale adductie)',params:[['Sets','3'],['Hold','30 sec'],['Reps','5'],['Freq','3×/dag']],note:'Aangedane arm over borst trekken met gezonde arm. Richt op posterieure capsulaire rek. Essentieel bij posterieure kapselcontractuur. Stop bij NRS > 4/10.',cat:'mobiliteit'},
        {name:'Exorotatierek (deurkozijnstrek)',params:[['Sets','3'],['Hold','30 sec'],['Reps','5'],['Freq','2–3×/dag']],note:'Arm in 90° elleboogflexie, onderarm op deurkozijn, romp draait weg. Exorotatierek op posterieure capsule. Alternatief: liggende exorotatie met stok bij meer stijfheid.',cat:'mobiliteit'},
        {name:'Sleeper stretch',params:[['Sets','3'],['Hold','30 sec'],['Positie','zijlig aangedane zijde onder'],['Freq','2×/dag']],note:'Zijlig, schouder 90° flexie, gezonde hand duwt pols naar bed (IR). Rek posterieure capsule. Start voorzichtig — stop bij schouder- of nekpijn die uitstraalt.',cat:'mobiliteit'},
        {name:'Supraspinatusversterking (lege blik)',params:[['Sets','3'],['Reps','12–15'],['Gewicht','0,5–2 kg'],['Freq','3×/week']],note:'Arm in scapulair vlak (30° voor frontaalvlak), duim naar beneden, optillen tot 90°. Richt supraspinatus en bewaakt pijnvrij bereik. Geen beweging boven pijndrempel.',cat:'kracht'},
        {name:'Pulldown met theraband (scapulaire depressie)',params:[['Sets','3'],['Reps','15'],['Weerstand','licht'],['Freq','3×/week']],note:'Band boven hoofd vastgehouden, beide handen, trekkende beweging naar beneden. Activeert lower trapezius en serratus anterior — essentieel voor scapulothoracaal ritme herstel.',cat:'stabiliteit'}
      ],
      criteria_go:[
        'Voorwaartse flexie actief ≥ 120°',
        'Abductie actief ≥ 100°',
        'Exorotatie (arm langs zij) ≥ 30°',
        'Scapulothoracaal ritme observeerbaar bij abductiebeweging',
        'ADL-functie: haar kammen en rugwassen mogelijk (met of zonder compensatie)',
        'VAS ≤ 3/10 bij dagelijkse activiteiten'
      ],
      evidence:'<strong>Tegenstrijdige evidentie — lees dit vóór u rekgericht werkt.</strong> De studie die in de app als onderbouwing van capsulaire rek stond, vond juist het <strong>omgekeerde</strong>: bij 77 patiënten haalde de groep met <strong>supervised neglect</strong> (ondersteuning en oefenen <em>binnen</em> de pijngrens) na 24 maanden in <strong>89%</strong> een normale of bijna normale pijnvrije schouderfunctie, tegenover <strong>63%</strong> in de groep met intensieve kinesitherapie inclusief passief rekken en manuele mobilisatie; 64% van de eerste groep bereikte dat al binnen 12 maanden. De auteurs besluiten dat supervised neglect <strong>betere</strong> uitkomsten geeft (Diercks &amp; Stevens, 2004 — JSES). <strong>Mobilisatiegraad:</strong> in een RCT met 100 deelnemers gaf mobilisatie in eindstandige posities meer winst op passieve abductie en buitenrotatie dan mobilisatie binnen de pijnvrije zone, maar de auteurs benadrukken dat de <strong>verschillen klein</strong> zijn en beide groepen over 12 maanden verbeterden (Vermeulen et al., 2006 — Phys Ther). <em>Die studie gaat over de graad van mobilisatie, niet over rekfrequentie of rekduur; de dosering van driemaal daags 30 seconden is een praktijkafspraak.</em> <em>Het aandeel van 80 tot 90% posterieure capsulaire contractuur berustte op een cohortstudie over INTERN impingement en is geschrapt.</em>',
    },
    {
      label:'Fase 3',
      title:'Ontdooifase — krachtsopbouw & functionele integratie',
      weeks:'Week 16–28',
      goals:[
        'Voorwaartse flexie herstellen tot ≥ 150° actief',
        'Rotatorenmanchetkracht (exo- en endorotatie) symmetrie ≥ 70% contralateraal',
        'Overhead-activiteiten integreren in dagelijkse taken',
        'Scapulaire stabiliteit bij belaste schouderbewegingen opbouwen',
        'Functionele kracht voor beroeps- of sportspecifieke activiteiten herstellen'
      ],
      exercises:[
        {name:'Exorotatie met theraband (arm langs zij)',params:[['Sets','3'],['Reps','12–15'],['Weerstand','licht → matig'],['Freq','3×/week']],note:'Elleboog gebogen 90°, handdoek tussen arm en romp, band trekt naar mediaal. Infraspinatusversterking — essentieel voor rotatorenmanchetkrachtsbalans. Progressie: weerstand verhogen, daarna arm op 45°.',cat:'kracht'},
        {name:'Endorotatie met theraband',params:[['Sets','3'],['Reps','12–15'],['Weerstand','licht → matig'],['Freq','3×/week']],note:'Band trekt naar lateraal, arm draait naar mediaal. Subscapularisversterking. Endorotatie herstelt sneller dan exorotatie bij frozen shoulder — progressie aanpassen.',cat:'kracht'},
        {name:'Roeibewegingen met theraband (horizontale abductie)',params:[['Sets','3'],['Reps','12–15'],['Hoek','horizontaal schouderhoogte'],['Freq','3×/week']],note:'Band voor borst, beide armen trekken naar achter. Activeert posterior deltoid, infraspinatus en supraspinatus. Scapulaire retractie meenemen in beweging.',cat:'kracht'},
        {name:'Wall push-up plus (serratus anterior)',params:[['Sets','3'],['Reps','12–15'],['Afstand','armslengte van wand'],['Freq','3×/week']],note:'Push-up tegen wand met extra protractiefase op einde (schouderblad naar buiten duwen). Serratus anterior-activatie — sleutelspier voor upward rotation scapula bij elevatie.',cat:'stabiliteit'},
        {name:'Actieve overhead-beweging met spiegelcontrole',params:[['Sets','3'],['Reps','10'],['Feedback','visuele controle scapulatipping'],['Freq','dagelijks']],note:'Langzame actieve elevatie met aandacht voor scapulothoracaal ritme. Spiegel of video-feedback om substitutie (scapulatipping, cervicale compensatie) te herkennen en corrigeren.',cat:'neuromusculair'},
        {name:'Functionele reikbewegingen (ADL-circuit)',params:[['Sets','2'],['Activiteiten','3–5 dagelijkse taken'],['Richtingen','voor, opzij, boven, achter'],['Freq','dagelijks']],note:'Simuleer concrete ADL: iets uit bovenkast pakken, jas aantrekken, auto sturen. Progressieve loading in functionele context. Dagboek bijhouden van bereikt bereik.',cat:'neuromusculair'}
      ],
      criteria_go:[
        'Voorwaartse flexie actief ≥ 150°',
        'Abductie actief ≥ 130°',
        'Exorotatie ≥ 50° of minder dan 20° verschil met contralateraal',
        'Exorotatiekracht ≥ 70% contralateraal (handynamometer of functionele test)',
        'Overhead-beweging mogelijk zonder significant scapulaire compensatie',
        'VAS ≤ 2/10 bij alle dagelijkse activiteiten'
      ],
      evidence:'<strong>Krachtverlies en scapulaire spieren</strong> in de bevroren fase: <em>klinische redenering — de toegeschreven citaties uit 1988, 2012 en 2011 konden in dit dossier niet opgehaald worden, en het krachtverlies van 40% na 12 weken is niet onderbouwd.</em> Functionele reiktraining in de context van dagelijkse activiteiten is eveneens <em>klinische redenering</em>. <strong>Wat wél vaststaat over de behandelrichting</strong> (zie fase 2): oefenen binnen de pijngrens gaf in vergelijkend onderzoek betere tweejaarsresultaten dan intensief rekken (Diercks &amp; Stevens, 2004).',
    },
    {
      label:'Fase 4',
      title:'Volledig herstel — kracht, coördinatie & recidiefpreventie',
      weeks:'Week 28–52+',
      goals:[
        'Volledige ROM-symmetrie (< 10° verschil alle vlakken met contralateraal)',
        'Rotatorenmanchetkracht ≥ 90% contralateraal bij handynamometer',
        'Sportspecifieke of beroepsspecifieke functie volledig hersteld',
        'Preventief onderhoudsprogramma geïmplementeerd en zelfstandig uitgevoerd',
        'DASH of SPADI ≤ 15/100 (minimale restbeperkingen)'
      ],
      exercises:[
        {name:'Overhead press met dumbbells (zittend)',params:[['Sets','3'],['Reps','10–12'],['Gewicht','progressief'],['Freq','2–3×/week']],note:'Bilaterale overhead press — integreert scapulaire rotatie, deltoid en rotatorenmanchet in functioneel overhead bewegingspatroon. Start bij 90° armhoek, bouw op naar volledige elevatie.',cat:'kracht'},
        {name:'Diagonale PNF-patronen (D1 & D2)',params:[['Sets','3'],['Reps','10 per patroon'],['Type','actief of licht weerstand'],['Freq','3×/week']],note:'D1 flexie: arm optillen over contralaterale schouder met exorotatie. D2 extensie: arm naar lateraal-caudaal met interne rotatie. Functionele coördinatie en krachtsopbouw over volledig ROM.',cat:'neuromusculair'},
        {name:'Zijlig exorotatie met dumbbell (progressief)',params:[['Sets','3'],['Reps','12–15'],['Gewicht','1 → 5 kg'],['Freq','3×/week']],note:'Specifieke infraspinatusversterking in zijlig. Eindniveau: 3–5 kg bij 15 reps = acceptabel voor ADL en preventie. Bescherm schouder bij versnelling van de beweging.',cat:'kracht'},
        {name:'Theraband high row (arm op schouderhoogte)',params:[['Sets','3'],['Reps','12'],['Positie','elleboog 90°, arm op schouderhoogte'],['Freq','3×/week']],note:'Bandroeien op schouderhoogte. Activeert posterior deltoid, infraspinatus en supraspinatus op functioneel niveau. Scapulaire retractie integreren aan einde beweging.',cat:'kracht'},
        {name:'Schouderstabilisatie in plankpositie',params:[['Sets','3'],['Hold','15–30 sec'],['Progressie','knieplank → volledig → éénarm'],['Freq','3×/week']],note:'Gesloten-keten schouderstabilisatie. Verhoogde serratus- en rotatorenmanchetactivatie. Modificeer voor laag niveau: start op knieën of aan wand. Essentieel voor manuele arbeid of sport.',cat:'stabiliteit'},
        {name:'Sportspecifieke training bovenste extremiteit',params:[['Duur','20–30 min'],['Type','sport-afhankelijk: werpen, zwemmen, tennis, klimmen'],['Freq','2–3×/week']],note:'Progressieve terugkeer naar sport- of werkspecifieke bewegingspatronen. Analyseer techniek en belastingsprofiel. Verhoog belasting met ≤ 10% per week conform 10%-regel.',cat:'neuromusculair'}
      ],
      criteria_go:[
        'ROM-verschil t.o.v. contralateraal < 10° in alle vlakken',
        'Exorotatiekracht ≥ 90% contralateraal (handynamometer)',
        'DASH of SPADI ≤ 15/100',
        'Overhead-activiteiten onbeperkt en pijnvrij mogelijk',
        'Preventief thuisprogramma geleerd en zelfstandig uitgevoerd',
        'Geen recidiefsymptomen bij follow-up 3–6 maanden na afsluiten therapie'
      ],
      evidence:'<strong>Langetermijnprognose — minder gunstig dan vaak aangenomen.</strong> Bij 269 schouders, gemiddeld 4,4 jaar na het begin van de klachten, had <strong>59%</strong> een normale of bijna normale schouder en hield <strong>41%</strong> restklachten; die waren meestal mild (94%, vooral pijn), bij 6% ernstig met functieverlies. Wie bij aanvang de ernstigste klachten had, had de slechtste prognose (p &lt; 0,001). <strong>Er waren géén recidieven</strong> (Hand et al., 2008 — JSES). <em>Het eerder vermelde volledige ROM-herstel bij 90% is daarmee te optimistisch en is geschrapt, en een preventieprogramma dat de recidiefkans met 40 tot 60% zou verlagen kan niet op deze bron steunen: er wáren geen recidieven.</em> De <strong>DASH</strong> is een gevalideerde uitkomstmaat (Beaton et al., 2001 — J Hand Ther); <em>de drempel van 10 punten is een praktijkafspraak en het tijdschrift werd in de app onjuist vermeld.</em>',
    }
  ],
  scores:[],
  refs:'Diercks RL en Stevens M, 2004 — J Shoulder Elbow Surg 13(5):499-502 (supervised neglect 89% tegenover intensieve kinesitherapie 63% na 24 maanden) | Carette S et al., 2003 — Arthritis Rheum 48(3):829-38 (injectie en kinesitherapie; kinesitherapie alleen van beperkte werkzaamheid) | Hand C et al., 2008 — J Shoulder Elbow Surg 17(2):231-6 (langetermijnuitkomst: 41% restklachten, geen recidieven) | Vermeulen HM et al., 2006 — Phys Ther 86(3):355-68 (eindstandige versus pijnvrije mobilisatie; kleine verschillen) | Dias R et al., 2005 — BMJ 331(7530):1453-6 (klinisch overzicht) | Beaton DE et al., 2001 — J Hand Ther 14(2):128-46 (validatie DASH)',
  spiergroep:'Rotatorenmanchet'
};

protocols.pa = {id:'pa',title:'Pes Anserinus Tendinopathie',subtitle:'Conservatief revalidatieprotocol voor tendinopathie en bursitis van de ganzenpoot-aanhechting — load management, hamstringkracht en mediaal kniebeleid',color:'#16a34a',icon:'🦵',
  phases:[
    {
      label:'Fase 1',
      title:'Acute fase — pijncontrole & weefselprotectie',
      weeks:'Week 0–3',
      goals:[
        'Pijn reduceren naar VAS ≤ 3/10 bij dagelijkse activiteiten via relatieve rust en PRICE',
        'Compressiebronnen elimineren: valgushouding corrigeren, gekruiste benen vermijden',
        'Quadricepskracht en heupabductorkracht behouden zonder pees te irriteren',
        'Patiënt educeren over diagnose, belastingsmanagement en activiteitenmodificatie',
        'Zwelling en lokale bursitis reduceren via koeling en ontlasting'
      ],
      exercises:[
        {name:'Quadriceps setting (isometrisch)',params:[['Sets','3'],['Hold','10 sec'],['Reps','15'],['Freq','3×/dag']],note:'Isometrische quadricepsactivatie zonder kniebuiging. Vermijdt directe belasting op pes anserinus-insertie. Essentieel om quadricepsinhibitie door pijn te doorbreken.',cat:'kracht'},
        {name:'Heupabductie zijlig (licht)',params:[['Sets','3'],['Reps','15'],['Gewicht','geen'],['Freq','2×/dag']],note:'Gluteus medius activeren zonder mediale kniestress. Vermindert valgusmoment op knie bij belasting. Lichte versie — geen weerstand in fase 1.',cat:'kracht'},
        {name:'Stationaire fiets (laag verzet)',params:[['Duur','10–15 min'],['Weerstand','minimaal'],['Zadel','hoog'],['Freq','dagelijks']],note:'Beste vroege cardiovasculaire optie: geen axiale belasting op pes anserinus. Hoog zadel vermindert knieflexiehoek en compressie aan insertie. Stop bij NRS > 3/10.',cat:'cardio'},
        {name:'Passieve hamstringrek (ruglig)',params:[['Sets','3'],['Hold','30 sec'],['Positie','knie gestrekt, been optillen'],['Freq','2×/dag']],note:'Vermindert trekspanning van semitendinosus en gracilis op insertie. Voorzichtig — stop bij NRS > 3/10 mediaal knie. Niet aggressief in acute fase.',cat:'mobiliteit'},
        {name:'Isometrische knieflexie (90°)',params:[['Sets','3'],['Hold','30 sec'],['Positie','zittend, voet tegen muur'],['Freq','2×/dag']],note:'Isometrische peesinhibitie vermindert tendinopathiepijn acuut (Rio et al., 2015). 70% MVC houden. Veilig bij acute pes anserinus-irritatie: geen excentrische component.',cat:'kracht'},
        {name:'Éénbeensbalans (statisch)',params:[['Hold','20–30 sec'],['Sets','3 per been'],['Ogen','open'],['Freq','dagelijks']],note:'Neuromusculaire activatie heupstabilisatoren. Lichte kniebending toegestaan indien pijnvrij. Stop bij VAS > 3/10 mediaal knie. Progressie: verhoog duur.',cat:'stabiliteit'}
      ],
      criteria_go:[
        'VAS ≤ 3/10 bij dagelijkse activiteiten gedurende ≥ 5 opeenvolgende dagen',
        'Palpatiepijn pes anserinus-insertie gedaald (NRS ≤ 4/10 bij druk)',
        'Stationaire fiets 15 min pijnvrij uitvoerbaar',
        'Isometrische knieflexie 3 × 30 sec pijnvrij op 70% MVC',
        'Traplopen mogelijk met VAS ≤ 4/10'
      ],
      evidence:'Pes anserinus-klachten komen vaak samen met gonartrose voor: in een echografische studie had <strong>20% van 170 knieën met symptomatische gonartrose</strong> een pes anserinus-bursitis (Uysal et al., 2014). <strong>Tegenstrijdige evidentie:</strong> een case-controlstudie vond géén verschil in gonartrose, diabetes of obesitas tussen patiënten en controles, wél een verband met <strong>valgusstand</strong> (OR 5,2; 95% BI 1,1–25,5) (Alvarez-Nemegyei et al., 2007). Isometrische oefening gaf bij <strong>patellatendinopathie</strong> een acute pijndaling van gemiddeld 6,8/10 die 45 minuten aanhield, samen met minder corticale inhibitie (Rio et al., 2015 — BJSM; n = 6); toepassing op de pes anserinus is <em>klinische redenering</em>. Relatieve rust in plaats van volledige rust is eveneens <em>klinische redenering</em>.',
    },
    {
      label:'Fase 2',
      title:'Subacuut — isotone belasting & krachtsopbouw',
      weeks:'Week 3–8',
      goals:[
        'Hamstringkracht progressief opbouwen via isotone oefeningen zonder pijnprovocatie',
        'Heupabductor- en exorotatorkracht versterken om valgusmoment te reduceren',
        'Quadricepskracht opbouwen tot ≥ 70% contralateraal',
        'Normaal gangpatroon herstellen zonder antalgisch patroon',
        'Traplopen pijnvrij (VAS ≤ 2/10)'
      ],
      exercises:[
        {name:'Liggende hamstringcurl (isotoon)',params:[['Sets','3'],['Reps','12–15'],['Gewicht','licht → matig'],['Freq','3×/week']],note:'Start met laag gewicht, focus op gecontroleerde excentrische fase (3 sec). Verhoog belasting wekelijks met 5–10% bij NRS ≤ 3/10. Vermijd forceren bij pijn aan mediale knie.',cat:'kracht'},
        {name:'Beenpers bilateraal (0–70°)',params:[['Sets','3'],['Reps','12–15'],['Hoek','0–70° flexie'],['Freq','3×/week']],note:'Gesloten-keten quadricepstraining met beperkte flexie (vermijdt compressieve piekbelasting op pes anserinus bij diep buigen). Voeten schouderbreedte, knieën neutraal boven tenen.',cat:'kracht'},
        {name:'Clamshell met weerstandsband',params:[['Sets','3'],['Reps','15–20'],['Band','licht → matig'],['Freq','3×/week']],note:'Gluteus medius versterking — essentieel voor valguskniereductie bij belasting. Heup in 60° flexie, voeten samen, bovenbeen optillen. Progressie: weerstand verhogen.',cat:'kracht'},
        {name:'Wandelen progressief',params:[['Duur','15 → 30 min'],['Ondergrond','vlak'],['Tempo','comfortabel'],['Freq','5×/week']],note:'Functioneel herstel van belasting-tolerantie. Monitor pijn 24u na loopsessie. Verhoog duur met 5 min/week. Stop bij NRS > 3/10 tijdens of na het wandelen.',cat:'cardio'},
        {name:'Step-up anterieur (10 cm)',params:[['Sets','3'],['Reps','12 per been'],['Hoogte','10 cm'],['Freq','3×/week']],note:'Functionele gesloten-keten knieoefening. Controleer kniepositie boven voet, geen mediaal inknikken. Verhoog naar 15 cm na 2 weken bij NRS ≤ 2/10.',cat:'kracht'},
        {name:'Balans op instabiel vlak (bipodiaal)',params:[['Sets','3'],['Hold','30 sec'],['Vlak','schuimmat'],['Freq','dagelijks']],note:'Proprioceptieve training heup- en kniestabilisatoren. Bipodiaal start, progressie naar licht gewicht dragen op aangedane zijde. Ogen open → gesloten als progressie.',cat:'neuromusculair'}
      ],
      criteria_go:[
        'Traplopen pijnvrij (NRS ≤ 2/10)',
        'Hamstringcurl 3 × 15 op matig gewicht zonder pijn provocatie',
        'Wandelen 30 min pijnvrij op vlakke ondergrond',
        'Kniebending tot 90° pijnvrij (actief)',
        'Éénbeen-stand ≥ 30 sec stabiel pijnvrij',
        'NRS < 2/10 bij palpatie pes anserinus-insertie'
      ],
      evidence:'<strong>Heupabductorkrachttraining</strong> wordt ingezet om de mediale kniebelasting te verlagen — <em>klinische redenering; het eerder vermelde effect van 14% op het knieadductiemoment was niet gedekt en is geschrapt</em>. Progressieve isotone opbouw met een geleidelijke belastingstoename is <em>klinische redenering</em>. <strong>Gewichtsreductie</strong> verlaagt de kniebelasting aantoonbaar: bij overgewichtige ouderen met gonartrose ging 1 kg gewichtsverlies samen met ongeveer <strong>40 N minder compressiekracht per stap</strong>, een viervoudige reductie per eenheid gewicht (Messier et al., 2005 — Arthritis Rheum). <em>Het effect van 5% gewichtsverlies op de mediale kniekracht staat niet in die bron en is geschrapt.</em>',
    },
    {
      label:'Fase 3',
      title:'Functioneel herstel — excentrische kracht & sporthervatting',
      weeks:'Week 8–16',
      goals:[
        'Hamstringkracht excentrisch opbouwen tot ≥ 80% van contralaterale zijde',
        'Squat tot 90° pijnvrij uitvoeren (bilateraal en unilateraal)',
        'Joggen en richtingsveranderingen integreren zonder pijnprovocatie',
        'Functionele ADL volledig hersteld inclusief langdurig staan en traplopen',
        'H/Q ratio ≥ 0,60 bereiken voor kniestabiliteit'
      ],
      exercises:[
        {name:'Excentrische hamstringcurl (Nordic variatie)',params:[['Sets','3'],['Reps','8–10'],['Tempo','3 sec excentrisch'],['Freq','3×/week']],note:'Eccentrische peesstimulatie — bewezen effectief bij tendinopathie (Alfredson-principe). Verhoog volume geleidelijk. Stop bij NRS > 4/10 tijdens of na oefening.',cat:'kracht'},
        {name:'Romanian Deadlift (bilateraal)',params:[['Sets','3'],['Reps','10'],['Gewicht','matig'],['Freq','3×/week']],note:'Heup-scharnier beweging met excentrische hamstringbelasting. Neutrale ruggengraat, heup-dominant. Essentieel voor H/Q ratio herstel. Pas gewicht aan op pijnrespons.',cat:'kracht'},
        {name:'Unilaterale beenpers (70–90°)',params:[['Sets','3'],['Reps','10 per been'],['Hoek','70–90°'],['Freq','3×/week']],note:'Verhoogde unilaterale kniebelasting na bilaterale basis. Bewaakt mediale kniepijn bij diepere flexie. Vergelijk links-rechts belasting als LSI-indicatie.',cat:'kracht'},
        {name:'Jog-walk protocol (vlak)',params:[['Schema','2 min jog / 1 min walk × 8'],['Freq','3×/week'],['Progressie','wekelijks jogginginterval verhogen']],note:'Graduele loophervatting. Start op vlak, zacht oppervlak. Monitor pijn tijdens én 24u na sessie. Stop bij NRS > 3/10. Helling en richtingsverandering pas in week 12+.',cat:'cardio'},
        {name:'Lateral band walk (zwaar)',params:[['Sets','3'],['Reps','20 stappen/richting'],['Band','matig-zwaar'],['Freq','3×/week']],note:'Intensieve gluteus medius training voor valgus-controle bij functionele bewegingen. Licht gebogen knieën, band boven enkels. Verhoog weerstand als 20 stappen makkelijk worden.',cat:'stabiliteit'},
        {name:'Éénbeen squat (10–20 cm box)',params:[['Sets','3'],['Reps','8–10 per been'],['Hoogte','10 → 20 cm'],['Freq','3×/week']],note:'Meest veeleisende kniebelasting — enkel introduceren bij NRS ≤ 2/10 bij alle vorige oefeningen. Bewaken: knierichting, heupneutraliteit. LSI-vergelijking links-rechts.',cat:'neuromusculair'}
      ],
      criteria_go:[
        'Hamstringkracht ≥ 80% contralateraal (handynamometer of isokinetisch)',
        'H/Q ratio ≥ 0,60',
        'Continu joggen ≥ 20 min pijnvrij (NRS ≤ 2/10 tijdens én 24u na sessie)',
        'Unilaterale beenpers 3 × 10 pijnvrij',
        'Éénbeen-squat 3 × 10 pijnvrij per been zonder knieval',
        'NRS ≤ 1/10 bij palpatie pes anserinus in rust'
      ],
      evidence:'Zwaardere <strong>excentrische belasting</strong> wordt bij tendinopathie toegepast om de peesbelastbaarheid op te bouwen — <em>klinische redenering</em>: de klassieke achillespeesstudie had geen concentrische vergelijkingsarm, onderzocht neovascularisatie niet en betrof een andere pees. <strong>H/Q-ratio ≥ 0,60</strong> is een <em>praktijkdrempel zonder gevonden bron</em>. Een gestructureerde intervalopbouw bij loophervatting is <em>klinische redenering</em>; de eerder aangehaalde publicatie is een besliskundig return-to-play-model zonder loopprotocol.',
    },
    {
      label:'Fase 4',
      title:'Return to sport & recidiefpreventie',
      weeks:'Week 16–24+',
      goals:[
        'Volledige sporthervatting zonder pijnprovocatie tijdens of na training',
        'Hamstringkracht ≥ 90% contralateraal (LSI)',
        'Preventief onderhoudsprogramma implementeren (hamstring + heupkracht)',
        'Gewichtsbeheersing en biomechanische risicofactoren blijvend aanpakken',
        'KOOS-score ≥ 85/100 of VISA-analoog < 5/100 pijn bij activiteit'
      ],
      exercises:[
        {name:'Nordic Hamstring (onderhoud)',params:[['Sets','3'],['Reps','6–8'],['Freq','2×/week'],['Timing','na opwarming']],note:'Sterkste evidence voor hamstringpeespreventie. Moeilijk — start gedeeltelijke ROM indien nodig. Levenslang onderhoud bij sporters. Integreert in warm-up protocol.',cat:'kracht'},
        {name:'Continu hardlopen (progressief)',params:[['Duur','20 → 45 min'],['Intensiteit','70 → 90%'],['Freq','3–4×/week'],['Progressie','10% /week']],note:'Volledige loophervatting met progressieve intensiteit. Varieer ondergrond. Monitor kniepijn 24u na training. 10%-regel strikt handhaven om recidief te vermijden.',cat:'cardio'},
        {name:'Sportspecifiek krachtcircuit knie',params:[['Sets','3'],['Oefeningen','RDL + nordic + legpress + lateral hop'],['Duur','25 min'],['Freq','2×/week']],note:'Onderhoudscircuit dat alle relevante spiergroepen traint in functionele kniecontext. Condenseer tot efficiënte routine die sporters kunnen integreren in training.',cat:'kracht'},
        {name:'Plyometrische progressie (hoptest)',params:[['Type','single hop → triple hop → 6m timed'],['LSI','≥ 90%'],['Freq','1×/week testen']],note:'Functionele kniestabiliteitstest én sportspecifieke peestraining. LSI ≥ 90% als RTS-criterium. Meting elke 2 weken voor objectieve progressiebewaking.',cat:'neuromusculair'},
        {name:'Dynamische balans & agiliteit',params:[['Type','Y-balance + shuttle run + zijsprongen'],['Sets','3 rondes'],['Freq','2×/week']],note:'Sportspecifieke neuromusculaire uitdaging. Y-balance norm: composite > 94% voor laag recidiefrisico. Shuttle run: bewaken op kniemechanica bij richtingsverandering.',cat:'neuromusculair'},
        {name:'Belastingsmonitoring (sRPE)',params:[['Tool','sessie-RPE × duur (AU)'],['Drempel','wekelijks ≤ 10% stijging'],['Freq','na elke training']],note:'Overbelasting is primaire trigger voor pes anserinus-recidief. Acute:chronische belastingsratio (ACWR) < 1,5 houden. Trainingslogboek bijhouden.',cat:'stabiliteit'}
      ],
      criteria_go:[
        'Hamstringkracht LSI ≥ 90% contralateraal',
        'Enkelbeen-hoptest LSI ≥ 90%',
        'Continu hardlopen ≥ 30 min pijnvrij',
        'Sportspecifieke training volledig pijnvrij bij 90% intensiteit',
        'NRS 0/10 bij palpatie pes anserinus in rust én na training',
        'Onderhoudsprogramma 2×/week zelfstandig uitgevoerd'
      ],
      evidence:'<strong>Recidiefpreventie</strong> vraagt onderhoudsbelasting op lange termijn — <em>klinische redenering; het cijfer 40–60% extra recidiefkans bij stoppen is niet onderbouwd en is geschrapt</em>. Belastingsmonitoring met geleidelijke opbouw is eveneens <em>klinische redenering</em>; de eerder vermelde ACWR-drempel van 1,5 was niet gedekt. <strong>Gewichtsreductie</strong> blijft bij obesitas met gonartrose een kernmaatregel: 1 kg gewichtsverlies gaat samen met ongeveer een viervoudige daling van de kniebelasting per stap (Messier et al., 2005 — Arthritis Rheum).',
    }
  ],
  scores:[],
  spiergroep:'Hamstrings'
};

protocols.itb = {id:'itb',title:'Iliotibiale Bandsyndroom',subtitle:'Conservatief revalidatieprotocol voor ITBS — load management, heupabductorkracht en looptechniek-correctie',color:'#ea580c',icon:'🏃',
  phases:[
    {
      label:'Fase 1',
      title:'Acute fase — pijncontrole & belastingsreductie',
      weeks:'Week 0–2',
      goals:[
        'Laterale kniepijn reduceren naar VAS ≤ 3/10 via relatieve rust en activiteitenmodificatie',
        'Compressieprovocatie elimineren: vermijd hardlopen tot noble-test negatief',
        'Loopvolume reduceren of tijdelijk vervangen door pijnvrije alternatieven',
        'Patiënt educeren over compressiemechanisme en triggerfactoren',
        'Flexibiliteit TFL en ITB voorzichtig beginnen mobiliseren'
      ],
      exercises:[
        {name:'Stationaire fiets (laag verzet)',params:[['Duur','15–20 min'],['Weerstand','minimaal'],['Freq','dagelijks']],note:'Pijnvrij cardio-alternatief voor hardlopen. Vermijdt de 30°-impingementzone van het kniegewricht. Controleer: geen laterale kniepijn bij fietsen (zadelafstelling check).',cat:'cardio'},
        {name:'TFL-rek staand (zijwaartse aanleunstrek)',params:[['Sets','3'],['Hold','30–45 sec'],['Freq','3×/dag']],note:'Klassieke ITB/TFL-rek: aangedane been achter gezonde, romp zijwaarts leunen weg van muur. Rek voelbaar lateraal heup. Niet agressief in acute fase — comfort is leidraad.',cat:'mobiliteit'},
        {name:'Heupabductie zijlig (actief)',params:[['Sets','3'],['Reps','15'],['Tempo','gecontroleerd'],['Freq','2×/dag']],note:'Activeert gluteus medius zonder belasting op knie. Essentieel: zwakke heupabductoren verhogen ITB-spanning via heupadduktiestijging tijdens loopstance. Licht gewicht of geen weerstand.',cat:'kracht'},
        {name:'Foam rolling ITB & TFL',params:[['Duur','60–90 sec per zijde'],['Druk','matig'],['Freq','1–2×/dag']],note:'Myofasciale release TFL en proximale ITB. Rol van lateral heup tot net boven knie — NIET over laterale epicondyl (pijnlijk, geen meerwaarde). Effectiever dan statische rek voor TFL-spanning (Fredericson et al., 2000).',cat:'mobiliteit'},
        {name:'Clamshell (zijlig)',params:[['Sets','3'],['Reps','15–20'],['Weerstand','geen → licht band'],['Freq','2×/dag']],note:'Geïsoleerde gluteus medius-activatie zonder kniebelasting. Heup 60° flexie, voeten samen, bovenbeen optillen. Fundament van ITBS-behandeling: correctie heupabductorzwakte.',cat:'kracht'},
        {name:'Zwemmen of aquajoggen',params:[['Duur','20–30 min'],['Type','vrije slag of aquajoggen'],['Freq','3–4×/week']],note:'Volledig onbelast cardio-alternatief voor hardlopers. Aquajoggen behoudt loopspecifieke motoriek zonder impact. Optioneel als fietsen ook pijn veroorzaakt.',cat:'cardio'}
      ],
      criteria_go:[
        'Noble-compressietest negatief of VAS ≤ 2/10 bij palpatie laterale epicondyl',
        'Traplopen pijnvrij (VAS ≤ 2/10)',
        'Fietsen 20 min pijnvrij uitvoerbaar',
        'TFL/ITB-rek 30 sec bilateraal pijnvrij uitvoerbaar',
        'VAS in rust ≤ 1/10 gedurende ≥ 3 opeenvolgende dagen'
      ],
      evidence:'Fairclough et al. (2006 — J Anat) toonden anatomisch aan dat de tractus bij circa <strong>30° knieflexie</strong> tegen de laterale femurepicondyl wordt gedrukt, dat het onderliggende vetweefsel sterk geïnnerveerd en gevasculariseerd is, en dat er in geen enkel preparaat een bursa aanwezig was. <em>De auteurs formuleren het oorzakelijke verband uitdrukkelijk als hypothese</em>, niet als vastgesteld feit. Relatieve rust en het uitschakelen van de provocerende activiteit worden aanbevolen in een <em>narratieve praktijkbeschrijving (expertniveau)</em> (Fredericson &amp; Weir, 2006 — CJSM). <em>De claim over foam rollen van de TFL berustte op onderzoek naar spierpijn bij gezonde mannen en is geschrapt.</em>',
    },
    {
      label:'Fase 2',
      title:'Risicofactoren aanpakken — heupkracht & flexibiliteit',
      weeks:'Week 2–6',
      goals:[
        'Heupabductorkracht opbouwen tot ≥ 70% van contralaterale zijde',
        'TFL-flexibiliteit en heupextensorflexibiliteit normaliseren',
        'Kernstabiliteit verbeteren voor lumbopelvische controle bij belasting',
        'Wandelen onbeperkt pijnvrij (> 45 min)',
        'Zwemmen of fietsen als hoofdcardio consolideren'
      ],
      exercises:[
        {name:'Side-lying hip abductie met weerstandsband',params:[['Sets','3'],['Reps','15–20'],['Band','licht → matig'],['Freq','3×/week']],note:'Progressie van clamshell: volledig been optillen met gestrekte knie. Verhoog weerstandsband wanneer 3×20 makkelijk worden. Kern van ITBS-krachtprogramma (Fredericson et al., 2000 — Clin J Sport Med).',cat:'kracht'},
        {name:'Heupextensie op Alle-vieren (donkey kick)',params:[['Sets','3'],['Reps','15'],['Tempo','2-1-2'],['Freq','3×/week']],note:'Gluteus maximus versterking in niet-belaste positie. Neutrale wervelkolom, knie 90°, been omhoog. Vermijdt valguspatroon dat ITB-spanning vergroot bij loopstance.',cat:'kracht'},
        {name:'Staande TFL/heupflexor rek (Thomas-positie)',params:[['Sets','3'],['Hold','45–60 sec'],['Freq','2×/dag']],note:'Rek iliopsoas en TFL in Thomas-testpositie: ruglig op tafeleinde, gezonde knie naar borst, aangedane been hangt omlaag. Diepere rek dan staande variant. Effectief bij hipflexorcontractuur.',cat:'mobiliteit'},
        {name:'Plank met heupabductie',params:[['Sets','3'],['Reps','10 per been'],['Hold','2 sec'],['Freq','3×/week']],note:'Integreert kernstabiliteit met gluteus medius-activatie. Zijplank of frontplank met been optillen. Simuleert lumbopelvische stabiliteit vereist bij loopstance. Progressie: duur verhogen.',cat:'stabiliteit'},
        {name:'Lateral band walk',params:[['Sets','3'],['Reps','20 stappen/richting'],['Band','matig'],['Freq','3×/week']],note:'Functionele gluteus medius-training in belaste positie. Band boven enkels, licht gebogen knieën. Bewaken: knie blijft boven voet, geen valgusinknikken. Meest functionele heupabductoroefening.',cat:'kracht'},
        {name:'Fietsen progressief (duur + weerstand)',params:[['Duur','20 → 45 min'],['Weerstand','laag → matig'],['Freq','4–5×/week']],note:'Cardio-basis opbouwen terwijl looptraining nog beperkt is. Verhoog duur vóór weerstand. Monitor laterale kniepijn: stop bij VAS > 2/10. Zadelhoogte optimaliseren (knie 25–35° flexie onderaan).',cat:'cardio'}
      ],
      criteria_go:[
        'Heupabductiekracht ≥ 70% contralateraal (handynamometer of functionele test)',
        'Noble-test volledig negatief',
        'Wandelen 45 min pijnvrij op vlak terrein',
        'Eénbeen-stand 30 sec stabiel pijnvrij',
        'TFL-rek 45 sec pijnvrij bilateraal uitvoerbaar',
        'VAS 0/10 bij traplopen'
      ],
      evidence:'In een <strong>case series</strong> van 24 lopers met ITBS lag het heupabductorkoppel aan de aangedane zijde lager dan aan de niet-aangedane zijde en dan bij gezonde lopers (vrouwen 7,82 versus 10,19 %BWh; mannen 6,86 versus 9,73 %BWh); na zes weken heupgerichte revalidatie waren <strong>22 van de 24 lopers pijnvrij</strong> (Fredericson et al., 2000 — CJSM). <em>Zonder controlegroep is oorzaak niet van gevolg te scheiden, en er was geen rekgroep — de eerder vermelde vergelijking 92% versus 67% is geschrapt.</em> Een systematische review van 13 studies (201 deelnemers) besluit dat een aanpak mét heupabductorversterking effectief is, met grote heterogeniteit en zonder meta-analyse (Sánchez-Alvarado et al., 2024). <em>De claim over TFL-flexibiliteit als predictor berustte op een Ober-teststudie bij gezonden en is geschrapt.</em>',
    },
    {
      label:'Fase 3',
      title:'Functioneel herstel — loophervatting & techniek',
      weeks:'Week 6–12',
      goals:[
        'Hardlopen hervatten via progressief interval-protocol zonder pijnprovocatie',
        'Heupabductorkracht ≥ 85% contralateraal',
        'Looptechniek corrigeren: stapfrequentie verhogen, heupadduktiemoment reduceren',
        'Heuveltraining en richtingsverandering pijnvrij integreren',
        'Continu hardlopen ≥ 20 min pijnvrij bereiken'
      ],
      exercises:[
        {name:'Jog-walk protocol (vlak, kort)',params:[['Schema','1 min jog / 2 min walk × 8'],['Freq','3×/week'],['Progressie','wekelijks jogginginterval +30 sec']],note:'Gestructureerde loophervatting. Start op vlak, zacht oppervlak (gras of tartan). Monitor laterale kniepijn tijdens én 24u na sessie. Stopcriterium: VAS > 3/10 tijdens lopen.',cat:'cardio'},
        {name:'Stapfrequentietraining (metronoom)',params:[['Freq_stap','180 slagen/min (cadans)'],['Duur','10–15 min'],['Hulpmiddel','metronoom-app'],['Loop_freq','2×/week']],note:'Verhoogde stapfrequentie (+5–10%) vermindert heupadduktiemoment met 20% en ITB-spanning met 15% (Heiderscheit et al., 2011). Gebruik metronoom-app. Initieel oncomfortabel — adaptatie in 3–4 sessies.',cat:'neuromusculair'},
        {name:'Single leg squat met gluteusactivatie',params:[['Sets','3'],['Reps','10–12 per been'],['Focus','knie boven voet, geen heupadduktieval'],['Freq','3×/week']],note:'Test én traint éénbeenlanding-mechanica. Spiegel of video-feedback: bewaken dat knie niet naar mediaal valt. Reproduceert loopstance-belasting. Stop bij VAS > 3/10 laterale knie.',cat:'kracht'},
        {name:'Looptechniek-drills (korte passen)',params:[['Type','high knees, butt kicks, A-skip'],['Duur','10 min'],['Freq','vóór elke loopsessie']],note:'Neuromusculaire coördinatie en stappatroon-activatie. A-skips verbeteren heupextensiekracht en rompstabiliteit. Warm-up die tegelijk ITBS-preventieve biomechanica activeert.',cat:'neuromusculair'},
        {name:'Hip thrust (bilateraal)',params:[['Sets','3'],['Reps','12–15'],['Gewicht','matig'],['Freq','3×/week']],note:'Maximale gluteus maximus-activatie in functionele positie. Schouders op bank, bekken omhoog, knieën 90°. Vermijdt kniebelasting. Bewaken: neutrale bekkenstand, niet hyperextensie lumbaal.',cat:'kracht'},
        {name:'Zijdelingse sprongen & landing',params:[['Sets','3'],['Reps','8–10/zijde'],['Focus','zachte landing, knie over voet'],['Freq','2×/week']],note:'Functionele gluteus medius-belasting bij plyometrische activiteit. Eenbeenslanding controleren: knie absorbeert, geen valgus. Pas introduceren bij NRS ≤ 2/10 bij continu lopen.',cat:'neuromusculair'}
      ],
      criteria_go:[
        'Continu hardlopen ≥ 20 min pijnvrij (VAS 0/10 tijdens én 24u na sessie)',
        'Heupabductiekracht ≥ 85% contralateraal',
        'Single leg squat 3 × 12 pijnvrij per been zonder knieval',
        'Noble-test consistent negatief ook na looptraining',
        'Cadansverhoging 5–10% succesvol aangeleerd (bevestigd door loopanalyse)',
        'Heuveltraining 15 min pijnvrij'
      ],
      evidence:'Bij 45 <strong>gezonde</strong> recreatieve lopers verlaagde een stapfrequentieverhoging van <strong>10%</strong> — niet van 5% — de piekheupadductiehoek en het bijbehorende moment (Heiderscheit et al., 2011 — MSSE); toepassing bij ITBS is <em>klinische redenering</em>. Gait retraining met feedback op heupadductie is onderzocht bij <strong>patellofemorale pijn</strong>, niet bij ITBS; <em>het eerder vermelde responspercentage van 79% is geschrapt</em>. In een cohort van 874 beginnende lopers waren er over de blootstellingsgroepen heen géén significante verschillen in letselcijfers; enkel voor afstandsgebonden letsels (waaronder ITBS) lag het risico hoger bij een opbouw van meer dan 30% over twee weken tegenover minder dan 10% (HR 1,59; 95% BI 0,96–2,66; p = 0,07 — <em>niet significant</em>) (Nielsen et al., 2014 — JOSPT).',
    },
    {
      label:'Fase 4',
      title:'Return to running & recidiefpreventie',
      weeks:'Week 12–20+',
      goals:[
        'Volledig loopvolume herstellen inclusief heuveltraining en lange duurlopen',
        'Heupabductorkracht ≥ 90% contralateraal behouden via onderhoudsprogramma',
        'Preventief trainingsprogramma integreren in wekelijkse routine',
        'Trainingsbelastingsmonitoring implementeren (10%-regel strikt)',
        'VAS 0/10 bij alle loopafstanden en terreintypen'
      ],
      exercises:[
        {name:'Continu hardlopen progressief',params:[['Opbouw','20 → 60 min'],['10%-regel','ja'],['Terrein','vlak → heuvel → trail'],['Freq','3–5×/week']],note:'Geleidelijke opbouw naar wedstrijdvolume. Heuveltraining pas introduceren na 3 weken symptoomvrij vlak lopen. Trail running vraagt extra proprioceptieve stabiliteit: afbouwen bij VAS > 1/10.',cat:'cardio'},
        {name:'Onderhoud heupkrachtcircuit',params:[['Sets','2–3'],['Oefeningen','clamshell + lateral walk + hip thrust + SLS'],['Duur','20 min'],['Freq','2×/week']],note:'Wekelijks onderhoud van gluteus medius en maximus. Belangrijkste langetermijnpreventie-strategie. Integreer in vaste trainingsroutine — vóór of na loopsessie.',cat:'kracht'},
        {name:'Nordic Hamstring & RDL (preventie)',params:[['Sets','2'],['Reps','8 nordic + 10 RDL'],['Freq','1–2×/week']],note:'Hamstring- en heupextensiepeesbescherming aanvullend op gluteusprogramma. Nordic halvering bij pijn; anders levenslang onderhoud bij sprinters en langlopende afstanden.',cat:'kracht'},
        {name:'Loopanalyse & cadansmonitoring',params:[['Tool','hardloophorloge (cadans)'],['Doel','170–180 stappen/min'],['Check','maandelijks video-analyse'],['Freq','elke loopsessie']],note:'Bewaken van aangeleerde biomechanische correcties. GPS-horloge met cadansmeting: alarm bij < 170 spm. Vermoeidheid laat in de loop veroorzaakt cadansdaling — bewust bewaken.',cat:'neuromusculair'},
        {name:'Foam rolling onderhoud',params:[['Duur','5 min TFL + laterale dij'],['Timing','post-training'],['Freq','na elke loopsessie']],note:'Preventieve myofasciale mobilisatie na training. Verhoogde TFL-spanning na lange loopsessies — directe behandeling verkort herstelperiode. Niet boven laterale epicondyl rollen.',cat:'mobiliteit'},
        {name:'Belastingsmonitoring sRPE',params:[['Tool','sessie-RPE × duur (AU)'],['ACWR','houden < 1,5'],['Freq','na elke training']],note:'Acute:chronische workload ratio (ACWR) < 1,5 is de sterkste preventieve maatregel voor overbelastingsletsel bij hardlopers (Hulin et al., 2016 — BJSM). Weeklog bijhouden.',cat:'stabiliteit'}
      ],
      criteria_go:[
        'Volledig loopvolume hersteld pijnvrij (inclusief doelafstand of doeltempo)',
        'Heupabductiekracht LSI ≥ 90%',
        'Noble-test consistent negatief na lange loopsessie (> 45 min)',
        'Onderhoudsprogramma 2×/week zelfstandig uitgevoerd',
        'ACWR < 1,5 wekelijks bewaakt',
        'VAS 0/10 tijdens én 24u na alle trainingen'
      ],
      evidence:'<strong>Recidiefpreventie</strong> vraagt onderhoud van heupkracht op lange termijn — <em>klinische redenering; het hervalcijfer van 30–40% is niet onderbouwd en is geschrapt</em>. Een hogere stapfrequentie verlaagt volgens een systematische review van 10 studies consistent de verticale verplaatsing van het massamiddelpunt, de grondreactiekracht en de energie-opname in heup, knie en enkel (Schubert et al., 2014 — Sports Health); <em>een effect per 5% cadansstijging wordt daar niet gegeven, het cijfer 14–20% is geschrapt</em>. Een geleidelijke wekelijkse volumeopbouw blijft de kernmaatregel: de bron adviseert minder dan 30% per twee weken en toont de 10%-regel niet als bewezen sterkste maatregel (Nielsen et al., 2014 — JOSPT).',
    }
  ],
  scores:[],
  spiergroep:'Gluteus medius'
};

// ── REGIO MAPPING (protocol → regio) ──
const REGIO_MAP = {
  acl:'Knie & Heup', tka:'Knie & Heup', pfps:'Knie & Heup', pt:'Knie & Heup', gmt:'Knie & Heup', hsi:'Knie & Heup', mcl:'Knie & Heup', pa:'Knie & Heup', itb:'Knie & Heup', thp:'Knie & Heup', men:'Knie & Heup', lies:'Knie & Heup',
  lh:'Lumbaal & Cervicaal', bureau:'Lumbaal & Cervicaal', faz:'Lumbaal & Cervicaal', fbl:'Lumbaal & Cervicaal',
  rc:'Schouder & Arm', si:'Schouder & Arm', elb:'Schouder & Arm', sup:'Schouder & Arm', fs:'Schouder & Arm', aslt:'Schouder & Arm',
  at:'Enkel & Voet', enkel:'Enkel & Voet', over:'Enkel & Voet', mtss:'Enkel & Voet', pfa:'Enkel & Voet',
  orif:'Pols & Hand', dq:'Pols & Hand', cts:'Pols & Hand',
};

// ── NAV INFO (badge + duurlabel per protocol; naam valt terug op protocol.title) ──
// Sidebar en bottom sheet worden hieruit gegenereerd door buildNav() in app.js.
const NAV_INFO = {
  acl:{naam:'ACL Reconstructie', badge:'VKB', duur:'9–12 mnd'},
  tka:{naam:'Totale Knieprothese', badge:'TKA', duur:'3–6 mnd'},
  pfps:{naam:'Patellofemoraal Pijn', badge:'PFPS', duur:'6–14 wkn'},
  pt:{naam:'Patellapees Tendinopathie', badge:'PT', duur:'4–20+ wkn'},
  gmt:{naam:'Gluteus Med./Min. Tendinopathie', badge:'GMT', duur:'0–24+ wkn'},
  hsi:{naam:'Hamstring Blessure', badge:'HSI', duur:'1–16+ wkn'},
  mcl:{naam:'MCL Letsel Knie', badge:'MCL', duur:'0–24 wkn'},
  pa:{naam:'Pes Anserinus Tendinopathie', badge:'PA', duur:'0–24+ wkn'},
  itb:{naam:'Iliotibiale Bandsyndroom', badge:'ITB', duur:'0–20+ wkn'},
  lh:{naam:'Lumbale Hernia', badge:'LHN', duur:'6–16 wkn'},
  bureau:{naam:'Bureauhouding &amp; Nekklachten', badge:'BNK', duur:'6–12+ wkn'},
  fbl:{naam:'Facettaire Blokkade Lumbaal', badge:'FBL', duur:'0–24 wkn'},
  faz:{naam:'Facetartrose Lumbaal', badge:'FAZ', duur:'0–10+ wkn'},
  rc:{naam:'Rotatorenmanchet', badge:'RC', duur:'4–12 mnd'},
  sup:{naam:'Supraspinatus &amp; Bursitis', badge:'SUP', duur:'0–20 wkn'},
  si:{naam:'Schouderinstabiliteit', badge:'SI', duur:'0–9 mnd'},
  elb:{naam:'Laterale Epicondylalgie', badge:'ELB', duur:'4–20+ wkn'},
  fs:{naam:'Frozen Shoulder', badge:'FS', duur:'6–52+ wkn'},
  at:{naam:'Achillespees Tendinopathie', badge:'AT', duur:'6–24+ wkn'},
  enkel:{naam:'Enkeldistorsie', badge:'LAS', duur:'1–12 wkn'},
  over:{naam:'Overpronatie Syndroom', badge:'OVP', duur:'8–18+ wkn'},
  mtss:{naam:'Shin Splints (MTSS)', badge:'MTSS', duur:'3–20+ wkn'},
  orif:{naam:'ORIF Distale Radius', badge:'DRF', duur:'0–5 mnd'},
  dq:{naam:'De Quervain Tenosynovitis', badge:'DQ', duur:'0–20 wkn'},
  cts:{naam:'Carpaaltunnelsyndroom', badge:'CTS', duur:'conservatief/post-OK'},
  thp:{naam:'Totale Heupprothese', badge:'THP', duur:'0–12+ wkn'},
  men:{naam:'Meniscusletsel', badge:'MEN', duur:'0–26+ wkn'},
  lies:{naam:'Adductor Liespijn', badge:'ADD', duur:'0–14+ wkn'},
  pfa:{naam:'Plantaire Fasciopathie', badge:'PFA', duur:'0–20+ wkn'},
  aslt:{naam:'Anterosuperieure Labrumscheur', badge:'ASL', duur:'0–24 wkn'},
};

// ── SPIERGROEP KEYWORD MAPPING ──
const SPIER_KEYWORDS = [
  {spier:'Quadriceps',               color:'#22d3ee',
   kw:['squat','kniebuig','leg press','beenpers','quadriceps','extensie knie','knie-extensie','VMO','terminal knee','wall squat','step-up','step up','lunge','uitval','beenheffen','SLR','beenpress','leg extension']},
  {spier:'Hamstrings',               color:'#f97316',
   kw:['hamstring','beenbuig','nordic','leg curl','deadlift','hip hinge','RDL','heupscharnierbeweging']},
  {spier:'Gluteus maximus',          color:'#a78bfa',
   kw:['heupbrug','brug','gluteale','bridge','hip thrust','gluteus','bilspier','heupextensie','hip extension','donkey kick','deadlift','RDL']},
  {spier:'Gluteus medius',           color:'#fb923c',
   kw:['heupabductie','clamshell','lateral walk','band walk','gluteus medius','heupstabilisatie','X-band','éénbeens']},
  {spier:'Gastrocnemius / Soleus',   color:'#4ade80',
   kw:['kuitheffen','heel raise','hielheffen','calf','gastrocnemius','soleus','plantairflexie','staan op teen','enkelpush','alfredson','eccentrisch kuit']},
  {spier:'Tibialis / Peronealen',    color:'#34d399',
   kw:['tibialis','peroneus','dorsaalflexie','enkelpropriocept','BOSU','wiebelplank','perturbatie','wiebelboard','taping enkel']},
  {spier:'Rotatorenmanchet',         color:'#f43f5e',
   kw:['rotator','RC','supraspinatus','infraspinatus','subscapularis','teres','externe rotatie','interne rotatie','ER rotatie','IR rotatie','side-lying ER','ER/IR','sleeper stretch']},
  {spier:'Deltoideus',               color:'#e879f9',
   kw:['deltoideus','schouderpress','shoulder press','zijwaartse heffing','laterale heffing','overhead press','abductie schouder','frontheffing']},
  {spier:'Trapezius / Rhomboïden',   color:'#60a5fa',
   kw:['trapezius','rhomboïd','scapulaire','retractie','row','Y-T-W','prone Y','face pull','scapula','Brugger','upper trap','lower trap','wall slide schouder','pull-apart','lat pulldown']},
  {spier:'Core / Buikspieren',       color:'#facc15',
   kw:['plank','core','buik','dead bug','crunch','pallof','McGill','hollowing','transversus','multifidus','CO-contractie','rollout','sit-up','bird dog']},
  {spier:'Lumbale extensoren',       color:'#f59e0b',
   kw:['rugextensie','erector','back extension','hyperextensie','McKenzie','roman chair','rugspier','prone extension','cobra']},
  {spier:'Heupflexoren',             color:'#818cf8',
   kw:['iliopsoas','heupflexie','hip flexor','knieheffen','marching','step march','thomas stretch','couch stretch']},
  {spier:'Cervicale spieren',        color:'#38bdf8',
   kw:['nek','cervicaal','DNF','deep neck','cranio','occipitaal','suboccipitaal','nekspier','hoofdheffing','chin tuck','nekflexie']},
  {spier:'Biceps / Triceps',         color:'#84cc16',
   kw:['biceps','triceps','elleboog','curl','arm extensie','pushdown']},
  {spier:'Polsflexoren / Extensoren',color:'#f472b6',
   kw:['polsflexie','polsextensie','wrist','deviatie','APL','EPB','polsrotatie','pronatie','supinatie','pro-supinatie','radiale','ulnaire']},
  {spier:'Intrinsieke handspieren',  color:'#94a3b8',
   kw:['grip','knijp','pinch','pincet','duim','vinger','thera-putty','rijstbak','sensibiliteit','fijnmotoriek','zenuwglijden','pesglijden']},
  {spier:'Heupabductoren / Adductoren', color:'#10b981',
   kw:['adductie','adductor','sumo','groin','lies','heup lateraal']},
];

// ── CATEGORIES ──
const CAT = {
  kracht:     {icon:'💪', label:'Kracht',      color:'#f97316'},
  mobiliteit: {icon:'🔄', label:'Mobiliteit',  color:'#22d3ee'},
  stabiliteit:{icon:'⚖', label:'Stabiliteit', color:'#a78bfa'},
  neuro:      {icon:'🧠', label:'Neuro',        color:'#34d399'},
  cardio:     {icon:'🏃', label:'Cardio',       color:'#4ade80'},
  manueel:    {icon:'🤲', label:'Manueel',      color:'#f43f5e'},
  test:       {icon:'📏', label:'Test',          color:'#facc15'},
};

// ── UITKOMSTMATEN PER PROTOCOL ──
const SCORES = {
  acl: [
    {name:'IKDC', full:'International Knee Documentation Committee', max:100, unit:'punten',
     ranges:[{label:'Normaal',min:85,max:100,color:'#22c55e'},{label:'Bijna normaal',min:65,max:84,color:'#f59e0b'},{label:'Abnormaal',min:0,max:64,color:'#ef4444'}],
     rts:'≥ 85 voor RTS', mcid:11.5},
    {name:'ACL-RSI', full:'ACL Return to Sport after Injury Scale', max:100, unit:'punten',
     ranges:[{label:'RTS-klaar',min:65,max:100,color:'#22c55e'},{label:'Matig',min:40,max:64,color:'#f59e0b'},{label:'Psychologisch niet klaar',min:0,max:39,color:'#ef4444'}],
     rts:'≥ 65 voor RTS', mcid:null},
    {name:'Quad LSI', full:'Limb Symmetry Index Quadriceps', max:100, unit:'%',
     ranges:[{label:'RTS-klaar',min:90,max:100,color:'#22c55e'},{label:'Jogging OK',min:80,max:89,color:'#f59e0b'},{label:'Onvoldoende',min:0,max:79,color:'#ef4444'}],
     rts:'≥ 90% voor RTS', mcid:null},
  ],
  tka: [
    {name:'KOOS', full:'Knee injury and Osteoarthritis Outcome Score', max:100, unit:'punten',
     ranges:[{label:'Goed',min:70,max:100,color:'#22c55e'},{label:'Matig',min:40,max:69,color:'#f59e0b'},{label:'Slecht',min:0,max:39,color:'#ef4444'}],
     rts:'≥ 70 voor functioneel herstel', mcid:10},
    {name:'6MWT', full:'6-Minute Walk Test', max:600, unit:'meter',
     ranges:[{label:'Goed',min:400,max:600,color:'#22c55e'},{label:'Matig',min:300,max:399,color:'#f59e0b'},{label:'Slecht',min:0,max:299,color:'#ef4444'}],
     rts:'≥ 400m = goed herstel', mcid:20},
  ],
  pfps: [
    {name:'Kujala', full:'Kujala Anterior Knee Pain Scale', max:100, unit:'punten',
     ranges:[{label:'Minimale klachten',min:80,max:100,color:'#22c55e'},{label:'Matige klachten',min:60,max:79,color:'#f59e0b'},{label:'Ernstige klachten',min:0,max:59,color:'#ef4444'}],
     rts:'≥ 80 voor sport', mcid:10},
  ],
  lh: [
    {name:'ODI', full:'Oswestry Disability Index', max:100, unit:'% beperking',
     ranges:[{label:'Minimaal (0–20%)',min:0,max:20,color:'#22c55e'},{label:'Matig (21–40%)',min:21,max:40,color:'#f59e0b'},{label:'Ernstig (>40%)',min:41,max:100,color:'#ef4444'}],
     rts:'< 20% voor RTW', mcid:10, invert:true},
  ],
  rc: [
    {name:'DASH', full:'Disabilities of Arm, Shoulder and Hand', max:100, unit:'punten',
     ranges:[{label:'Minimale beperking',min:0,max:20,color:'#22c55e'},{label:'Matige beperking',min:21,max:40,color:'#f59e0b'},{label:'Ernstige beperking',min:41,max:100,color:'#ef4444'}],
     rts:'< 20 voor RTS', mcid:10.2, invert:true},
    {name:'WORC', full:'Western Ontario Rotator Cuff Index', max:100, unit:'punten',
     ranges:[{label:'Goed',min:80,max:100,color:'#22c55e'},{label:'Matig',min:60,max:79,color:'#f59e0b'},{label:'Slecht',min:0,max:59,color:'#ef4444'}],
     rts:'≥ 80 voor RTS', mcid:12},
    {name:'ER/IR Ratio', full:'Externe / Interne Rotatie Krachtratio', max:100, unit:'ratio × 100',
     ranges:[{label:'Normaal (≥ 66%)',min:66,max:100,color:'#22c55e'},{label:'Matig (55–65%)',min:55,max:65,color:'#f59e0b'},{label:'Risico (< 55%)',min:0,max:54,color:'#ef4444'}],
     rts:'≥ 0.66 (66%)', mcid:null},
  ],
  pt: [
    {name:'VISA-P', full:'Victorian Institute of Sport Assessment – Patella', max:100, unit:'punten',
     ranges:[{label:'RTS-klaar',min:90,max:100,color:'#22c55e'},{label:'Sport beperkt',min:65,max:89,color:'#f59e0b'},{label:'Ernstige klachten',min:0,max:64,color:'#ef4444'}],
     rts:'≥ 90 voor volledig sporten', mcid:13},
  ],
  gmt: [
    {name:'NRS Activiteitspijn', full:'Numeric Rating Scale — pijn bij belastende activiteit (wandelen, traplopen)',
     unit:'/10', max:10, invert:true, rts:'≤ 2/10 bij alle activiteiten', mcid:'2',
     ranges:[
       {label:'Minimaal (0–2)',    min:0,  max:2,  color:'#22c55e'},
       {label:'Matig (3–5)',       min:3,  max:5,  color:'#f59e0b'},
       {label:'Ernstig (6–10)',    min:6,  max:10, color:'#ef4444'},
     ]},
    {name:'Éénbeensstabiliteit', full:'Single-leg stance tijd — maat voor bekkencontrole en gluteus medius functie',
     unit:'sec', max:60, invert:false, rts:'≥ 30 sec', mcid:'5',
     ranges:[
       {label:'Functioneel (≥ 30 sec)',     min:30, max:60, color:'#22c55e'},
       {label:'Beperkt (15–29 sec)',         min:15, max:29, color:'#f59e0b'},
       {label:'Ernstig beperkt (< 15 sec)', min:0,  max:14, color:'#ef4444'},
     ]},
  ],
  at: [
    {name:'VISA-A', full:'Victorian Institute of Sport Assessment – Achilles', max:100, unit:'punten',
     ranges:[{label:'RTS-klaar',min:90,max:100,color:'#22c55e'},{label:'Sport beperkt',min:65,max:89,color:'#f59e0b'},{label:'Ernstige klachten',min:0,max:64,color:'#ef4444'}],
     rts:'≥ 90 voor volledig sporten', mcid:10},
  ],
  enkel: [
    {name:'FAAM', full:'Foot and Ankle Ability Measure', max:100, unit:'%',
     ranges:[{label:'Minimale beperking',min:90,max:100,color:'#22c55e'},{label:'Matige beperking',min:70,max:89,color:'#f59e0b'},{label:'Ernstige beperking',min:0,max:69,color:'#ef4444'}],
     rts:'≥ 90% sport-subscore voor RTS', mcid:8},
  ],
  bureau: [
    {name:'NDI', full:'Neck Disability Index', max:50, unit:'punten',
     ranges:[{label:'Geen beperking (0–4)',min:0,max:4,color:'#22c55e'},{label:'Matig (15–24)',min:5,max:24,color:'#f59e0b'},{label:'Ernstig (≥ 25)',min:25,max:50,color:'#ef4444'}],
     rts:'< 10 voor ontslag', mcid:7, invert:true},
  ],
  si: [
    {name:'WOSI', full:'Western Ontario Shoulder Instability Index', max:2100, unit:'ptn', invert:true,
     ranges:[{label:'Minimale beperking',min:0,max:420,color:'#22c55e'},{label:'Matige beperking',min:421,max:1050,color:'#f59e0b'},{label:'Ernstige beperking',min:1051,max:2100,color:'#ef4444'}],
     rts:'≤ 420 ptn voor RTS', mcid:212},
    {name:'DASH', full:'Disabilities of the Arm, Shoulder and Hand', max:100, unit:'punten', invert:true,
     ranges:[{label:'Minimale beperking',min:0,max:20,color:'#22c55e'},{label:'Matige beperking',min:21,max:40,color:'#f59e0b'},{label:'Ernstige beperking',min:41,max:100,color:'#ef4444'}],
     rts:'< 20 voor RTS', mcid:10.2},
  ],
  orif: [
    {name:'PRWE', full:'Patient-Rated Wrist Evaluation', max:100, unit:'punten', invert:true,
     ranges:[{label:'Minimale beperking',min:0,max:20,color:'#22c55e'},{label:'Matige beperking',min:21,max:50,color:'#f59e0b'},{label:'Ernstige beperking',min:51,max:100,color:'#ef4444'}],
     rts:'< 20 voor RTS (Deel A + Deel B ÷ 2)', mcid:11.5},
    {name:'QuickDASH', full:'Disabilities of the Arm, Shoulder and Hand — kort', max:100, unit:'punten', invert:true,
     ranges:[{label:'Minimale beperking',min:0,max:20,color:'#22c55e'},{label:'Matige beperking',min:21,max:40,color:'#f59e0b'},{label:'Ernstige beperking',min:41,max:100,color:'#ef4444'}],
     rts:'< 20 voor RTS', mcid:8},
  ],
  dq: [
    {name:'QuickDASH', full:'Disabilities of the Arm, Shoulder and Hand — kort', max:100, unit:'punten', invert:true,
     ranges:[{label:'Minimale beperking',min:0,max:20,color:'#22c55e'},{label:'Matige beperking',min:21,max:40,color:'#f59e0b'},{label:'Ernstige beperking',min:41,max:100,color:'#ef4444'}],
     rts:'≤ 10 voor volledige RTA', mcid:8},
    {name:'NRS-pijn', full:'Numerieke Pijnschaal — Finkelstein-belasting', max:10, unit:'/ 10', invert:true,
     ranges:[{label:'Pijnvrij',min:0,max:2,color:'#22c55e'},{label:'Matig',min:3,max:5,color:'#f59e0b'},{label:'Ernstig',min:6,max:10,color:'#ef4444'}],
     rts:'≤ 2 bij Finkelstein-manoeuvre voor RTA', mcid:2},
  ],
  cts: [
    {name:'BCTQ-SSS', full:'Boston Carpal Tunnel Questionnaire — Symptom Severity Scale', max:5, unit:'/ 5', invert:true,
     ranges:[{label:'Minimale symptomen',min:1,max:2,color:'#22c55e'},{label:'Matige symptomen',min:2.1,max:3.5,color:'#f59e0b'},{label:'Ernstige symptomen',min:3.6,max:5,color:'#ef4444'}],
     rts:'≤ 1.5 voor chirurgisch ontslagklaar / ≤ 2.5 conservatief succes', mcid:0.74},
    {name:'BCTQ-FSS', full:'Boston Carpal Tunnel Questionnaire — Functional Status Scale', max:5, unit:'/ 5', invert:true,
     ranges:[{label:'Minimale beperking',min:1,max:2,color:'#22c55e'},{label:'Matige beperking',min:2.1,max:3.5,color:'#f59e0b'},{label:'Ernstige beperking',min:3.6,max:5,color:'#ef4444'}],
     rts:'≤ 1.5 voor volledige RTA', mcid:0.53},
  ],
  hsi: [
    {name:'Hamstring LSI', full:'Limb Symmetry Index — Hamstringkracht (handheld dynamometer of KH-ratio)', max:100, unit:'%',
     ranges:[{label:'RTS-klaar (≥ 90%)',min:90,max:100,color:'#22c55e'},{label:'Sprinthervatting (85–89%)',min:85,max:89,color:'#f59e0b'},{label:'Onvoldoende (< 85%)',min:0,max:84,color:'#ef4444'}],
     rts:'≥ 90% voor volledig RTS', mcid:null},
    {name:'NRS Pijn bij activiteit', full:'Numeric Rating Scale — pijn bij jogging of sprint', max:10, unit:'/10', invert:true,
     ranges:[{label:'Pijnvrij (0–1)',min:0,max:1,color:'#22c55e'},{label:'Matig (2–4)',min:2,max:4,color:'#f59e0b'},{label:'Ernstig (≥ 5)',min:5,max:10,color:'#ef4444'}],
     rts:'0/10 bij 100% sprint', mcid:2},
  ],
  elb: [
    {name:'PRTEE', full:'Patient-Rated Tennis Elbow Evaluation (0 = geen pijn, 100 = maximale pijn/beperking)', max:100, unit:'punten', invert:true,
     ranges:[{label:'Functioneel herstel (0–20)',min:0,max:20,color:'#22c55e'},{label:'Matige klachten (21–40)',min:21,max:40,color:'#f59e0b'},{label:'Ernstige beperking (> 40)',min:41,max:100,color:'#ef4444'}],
     rts:'< 20 voor sport / < 10 voor volledig herstel', mcid:11},
    {name:'Knijpkracht LSI', full:'Limb Symmetry Index knijpkracht (dynamometer)', max:100, unit:'%',
     ranges:[{label:'Symmetrisch (≥ 90%)',min:90,max:100,color:'#22c55e'},{label:'Matig (75–89%)',min:75,max:89,color:'#f59e0b'},{label:'Zwak (< 75%)',min:0,max:74,color:'#ef4444'}],
     rts:'≥ 90% voor volledig RTS', mcid:null},
  ],
  mtss: [
    {name:'NRS Looppijn', full:'Numeric Rating Scale — pijn bij lopen (eerste 5 min)', max:10, unit:'/10', invert:true,
     ranges:[{label:'Pijnvrij (0)',min:0,max:0,color:'#22c55e'},{label:'Acceptabel (1–3)',min:1,max:3,color:'#f59e0b'},{label:'Niet acceptabel (≥ 4)',min:4,max:10,color:'#ef4444'}],
     rts:'0/10 bij volledig loopprogramma', mcid:2},
    {name:'Single leg heel raise', full:'Maximale reps unilateraal — maat voor kuitkracht', max:40, unit:'reps', invert:false,
     ranges:[{label:'Goed (≥ 25 reps)',min:25,max:40,color:'#22c55e'},{label:'Matig (15–24)',min:15,max:24,color:'#f59e0b'},{label:'Zwak (< 15)',min:0,max:14,color:'#ef4444'}],
     rts:'≥ 25 reps voor volledig loopprogramma', mcid:5},
  ],
};


// ── KLINISCHE BESLISBOMEN ──
const BESLISBOOM = {
  acl: {
    title: 'ACL Reconstructie — Klinische beslisboom',
    stappen: [
      {
        id: 'chirurgie',
        vraag: 'Is chirurgische reconstructie geïndiceerd?',
        info: 'Indicatie op basis van leeftijd, activiteitsniveau, instabiliteit en timing.',
        opties: [
          {label: 'Ja → Reconstructie', next: 'graft', color: '#22d3ee'},
          {label: 'Nee → Conservatief', next: 'conservatief', color: '#71717a'},
        ]
      },
      {
        id: 'graft',
        vraag: 'Keuze transplantaat?',
        info: 'BPTB = sterkste fixatie, geschikt voor intensieve sport. STG = minder donormorbiditeit. QT = groeiende populariteit, hoge kracht.',
        opties: [
          {label: 'BPTB (bot-pees-bot)', advies: 'Voorkeur: topsport, hoog pivotrisico. Knieleraarspijn als nadeel.', color: '#22d3ee'},
          {label: 'STG (semitendinosus/gracilis)', advies: 'Voorkeur: meeste patiënten. Minder donormorbiditeit.', color: '#a78bfa'},
          {label: 'QT (quadricepspees)', advies: 'Revisie of voorkeur chirurg. Grote diameter, goede kracht.', color: '#34d399'},
        ]
      },
      {
        id: 'conservatief',
        vraag: 'Conservatief beleid — geschikt?',
        info: 'Coper-profiel: geen instabiliteit, hoog spiercompensatiepotentieel, lage sporteis.',
        opties: [
          {label: 'Coper-profiel aanwezig', advies: 'Start neuromusculair programma. Evalueer na 3 maanden. LSI > 90% + geen instabiliteit = succesvol conservatief beleid.', color: '#34d399'},
          {label: 'Non-coper / recidief instabiliteit', advies: 'Heroverweeg reconstructie. Langdurige instabiliteit → meniscus-/kraakbeenschade.', color: '#ef4444'},
        ]
      }
    ]
  },
  rc: {
    title: 'Rotatorenmanchet — Klinische beslisboom',
    stappen: [
      {
        id: 'type',
        vraag: 'Type rotatorenmanchet pathologie?',
        info: 'Onderscheid tendinopathie vs scheuring stuurt het beleid volledig.',
        opties: [
          {label: 'Tendinopathie (geen scheuring)', next: 'conservatief_rc', color: '#f43f5e'},
          {label: 'Partiële scheuring', next: 'partieel', color: '#f59e0b'},
          {label: 'Volledige scheuring', next: 'volledig', color: '#ef4444'},
        ]
      },
      {
        id: 'conservatief_rc',
        vraag: 'Conservatief beleid RC tendinopathie',
        info: 'Eerste keuze bij tendinopathie. 3 maanden gestructureerde kinesitherapie.',
        opties: [
          {label: 'Respons op therapie na 6–8 wkn', advies: 'Continueer protocol. Fase 2–3 opbouwen. Verwacht herstel 3–6 maanden.', color: '#22c55e'},
          {label: 'Non-respons na 8–12 wkn', advies: 'Overweeg corticosteroïdinjectie als bridge + MRI herhalen. Chirurgisch consult indien < 50j.', color: '#f59e0b'},
        ]
      },
      {
        id: 'partieel',
        vraag: 'Partiële scheuring — grootte?',
        info: 'Kukkonen RCT 2015: conservatief = chirurgisch bij < 50% dikte bij patiënten > 55j.',
        opties: [
          {label: '< 50% dikte + leeftijd > 55j', advies: 'Conservatief eerst. 3 maanden kinesitherapie. Kukkonen 2015: gelijkwaardige uitkomst.', color: '#22c55e'},
          {label: '> 50% dikte OF leeftijd < 50j + sport', advies: 'Chirurgisch overleg. Debridement vs hechting afhankelijk van locatie en kwaliteit.', color: '#f59e0b'},
        ]
      },
      {
        id: 'volledig',
        vraag: 'Volledige scheuring — kenmerken?',
        info: 'Grootte, retractie, vettige degeneratie (Goutallier) en leeftijd bepalen chirurgische haalbaarheid.',
        opties: [
          {label: 'Klein (< 1cm) + acuut + jong', advies: 'Chirurgische hechting geïndiceerd. Uitstekende resultaten bij tijdige interventie.', color: '#22d3ee'},
          {label: 'Matig (1–3cm) + chronisch', advies: 'Conservatief 3 maanden + MRI Goutallier < 2. Chirurgie bij therapiefalen of progressie.', color: '#f59e0b'},
          {label: 'Massief (> 3cm) + Goutallier ≥ 3', advies: 'Irreparabel. Geen reconstructie. Gerichte kinesitherapie (deltoid, periscapulair). Eventueel reverse prothese bij > 70j.', color: '#ef4444'},
        ]
      }
    ]
  },
  lh: {
    title: 'Lumbale Hernia — Klinische beslisboom',
    stappen: [
      {
        id: 'rode_vlag',
        vraag: 'Rode vlaggen aanwezig?',
        info: 'Cauda equina, progressieve motorische uitval en infectie vereisen spoedactie.',
        opties: [
          {label: 'Ja → spoedverwijzing', advies: 'Cauda equina (blaas/darmstoornissen + zadeldoofheid) → SPOED neurochirurgie. Motorische uitval progressief → urgente verwijzing.', color: '#ef4444'},
          {label: 'Nee → verder beoordelen', next: 'type_lh', color: '#22c55e'},
        ]
      },
      {
        id: 'type_lh',
        vraag: 'Type presentatie?',
        info: 'Radiculopathie = pijn + neurologische uitval in dermatoom. Lumbago = lokale rugpijn zonder uitstraling.',
        opties: [
          {label: 'Radiculopathie (uitstraling + tintelingen)', next: 'radiculopathie', color: '#34d399'},
          {label: 'Lumbago zonder radiculaire component', advies: 'Conservatief beleid. McKenzie evaluatie + motor control. 90% herstel < 12 weken.', color: '#71717a'},
        ]
      },
      {
        id: 'radiculopathie',
        vraag: 'Duur radiculopathie?',
        info: 'Spontaan herstel bij 75% binnen 12 weken. Chirurgie versnelt herstel maar uitkomst na 1–2 jaar gelijkwaardig (Weber 1983, Peul 2007).',
        opties: [
          {label: '< 6 weken', advies: 'Conservatief. Neurodynamica + motor control. 75% spontaan herstel. Actief blijven, geen bedrust.', color: '#22c55e'},
          {label: '6–12 weken zonder verbetering', advies: 'MRI indicatie. Overweeg epidurale infiltratie als bridge. Chirurgisch consult bij NRS > 6 of ADL-beperking.', color: '#f59e0b'},
          {label: '> 12 weken of progressieve uitval', advies: 'Chirurgisch overleg geïndiceerd. Microdiscectomie: sneller herstel, gelijkwaardige 2-jaarsuitkomst vs conservatief.', color: '#ef4444'},
        ]
      }
    ]
  },
  at: {
    title: 'Achillespees Tendinopathie — Klinische beslisboom',
    stappen: [
      {
        id: 'subtype',
        vraag: 'Subtype bepalen (cruciaal voor behandelkeuze)',
        info: 'Midportion vs insertioneel verschilt fundamenteel in behandeling. Verkeerde aanpak verergert insertioneel letsel.',
        opties: [
          {label: 'Midportion (2–6 cm boven insertie)', next: 'midportion', color: '#e879f9'},
          {label: 'Insertioneel (op calcaneus)', next: 'insertioneel', color: '#f59e0b'},
          {label: 'Onzeker → arc sign + Royal London test', advies: 'Arc sign positief = midportion. Pijn vermindert bij dorsaalflexie = midportion. Pijn OP insertie bij palpatie = insertioneel.', color: '#71717a'},
        ]
      },
      {
        id: 'midportion',
        vraag: 'Midportion — behandelrespons?',
        info: 'Alfredson excentrisch protocol: 12 weken, 2×/dag. HSR minstens gelijkwaardig met betere compliance (Beyer 2015).',
        opties: [
          {label: 'Respons op HSR/excentrisch na 8–12 wkn', advies: 'Continueer. Verwacht herstel 12–16 weken. VISA-A monitoring.', color: '#22c55e'},
          {label: 'Non-respons na 12 weken', advies: 'Overweeg ESWT (shockwave) — matige evidence. PRP: tegenstrijdig bewijs. Chirurgisch consult bij > 6 maanden.', color: '#f59e0b'},
        ]
      },
      {
        id: 'insertioneel',
        vraag: 'Insertioneel — Haglund deformiteit aanwezig?',
        info: 'Haglund = benige uitstulping calcaneus. Compressie-component domineert. Excentrisch training CONTRAPRODUCTIEF.',
        opties: [
          {label: 'Zonder Haglund', advies: 'HSR op vlakke ondergrond (GEEN hak zakken). Hielverhoging 5–10mm. Isometrie voor pijncontrole. Geen stretching.', color: '#22c55e'},
          {label: 'Met Haglund deformiteit', advies: 'Conservatief 6 maanden eerst. Hielverhoging + isometrie + HSR op vlak. Non-respons → chirurgie: Haglund resectie + pees-debridement.', color: '#f59e0b'},
        ]
      }
    ]
  },
  enkel: {
    title: 'Enkeldistorsie — Klinische beslisboom',
    stappen: [
      {
        id: 'fractuur',
        vraag: 'Ottawa Ankle Rules — Fractuur uitsluiten',
        info: 'Sens 96–99%. Verplichte eerste stap vóór start revalidatie.',
        opties: [
          {label: 'Ottawa positief → RX', advies: 'RX verplicht. Fractuur → gips/orthopedie. RX normaal → start revalidatie.',  color: '#ef4444'},
          {label: 'Ottawa negatief', next: 'syndesmose', color: '#22c55e'},
        ]
      },
      {
        id: 'syndesmose',
        vraag: 'Syndesmose letsel screenen?',
        info: 'High ankle sprain: Squeeze test + External Rotation stress test. Langere revalidatie (6–12 wkn).',
        opties: [
          {label: 'Squeeze/ER positief → syndesmose', advies: 'RX tibia/fibula. Orthopedie consult. Stabilisatie 6 weken. Revalidatie 8–12 weken.', color: '#ef4444'},
          {label: 'Negatief → laterale distorsie', next: 'graad', color: '#22c55e'},
        ]
      },
      {
        id: 'graad',
        vraag: 'Graad classifieren (ADT + TTT na 4–7 dagen)',
        info: 'ADT > 3mm asymmetrie = ATFL. TTT > 10° = CFL. Acuut beperkt door pijn — herhaal na 4–7 dagen.',
        opties: [
          {label: 'Graad I — ATFL rek, geen laxiteit', advies: 'PEACE dag 1–3. Volledig belast dag 1–2. Tapelast. RTS: 1–3 weken.', color: '#22c55e'},
          {label: 'Graad II — partiële ATFL + evt CFL', advies: 'PEACE dag 1–5. Semi-rigide brace 2–3 weken. Revalidatie 3–6 weken. Brace bij sport 6 maanden.', color: '#f59e0b'},
          {label: 'Graad III — volledige ruptuur', next: 'graad3', color: '#ef4444'},
        ]
      },
      {
        id: 'graad3',
        vraag: 'Graad III — conservatief of chirurgisch?',
        info: 'Kerkhoffs 2007: conservatief functioneel = chirurgie op 2 jaar. Chirurgie enkel bij specifieke indicatie.',
        opties: [
          {label: 'Recreatieve sporter / meeste patiënten', advies: 'Conservatief functioneel. Aircast 4–6 weken. Revalidatie 8–12 weken. Brace bij sport 12 maanden.', color: '#22c55e'},
          {label: 'Jonge topsporter + hoog instabiliteitsrisico', advies: 'Chirurgisch overleg Brostrom-Gould. Geïndiceerd bij hoog-risico pivot-sport + onvoldoende ligamentkwaliteit.', color: '#f59e0b'},
        ]
      }
    ]
  },
  pt: {
    title: 'Patellapees Tendinopathie — Klinische beslisboom',
    stappen: [
      {
        id: 'stadium',
        vraag: 'Stadium bepalen (Cook & Purdam continuum)',
        info: 'Reactief = overbelasting acuut. Dysrepair = chronisch niet-degeneratief. Degeneratief = irreversibele verandering.',
        opties: [
          {label: 'Reactief (acuut, NRS ≥ 6, SLDS zeer positief)', advies: 'Belasting DIRECT reduceren. Isometrie 4×45 sec. Geen excentrisch of plyometrie. Rust 3–5 dagen van provocerende activiteiten.', color: '#ef4444'},
          {label: 'Dysrepair (subacuut, wisselend)', next: 'respons', color: '#f59e0b'},
          {label: 'Degeneratief (chronisch > 3 mnd)', next: 'degeneratief', color: '#71717a'},
        ]
      },
      {
        id: 'respons',
        vraag: 'Respons op HSR-programma na 6–8 weken?',
        info: 'VISA-P als objectieve maat; de gehanteerde MCID van 13 punten is een praktijkafspraak. Beyer (2015) toonde hogere therapietrouw bij zware langzame weerstandstraining, maar dat onderzoek betrof de ACHILLESPEES.',
        opties: [
          {label: 'VISA-P + 13 punten of meer', advies: 'Goed verloop. Continueer HSR. Progressie naar plyometrie fase 3.', color: '#22c55e'},
          {label: 'Geen verbetering na 8 weken', advies: 'Intensiteit verhogen. Controleer belastingsbeheer (24u-regel). Overweeg ESWT. Injectie NIET aanbevolen.', color: '#f59e0b'},
        ]
      },
      {
        id: 'degeneratief',
        vraag: 'Degeneratief stadium — opties',
        info: 'Verminderde herstelpotentieel. Doel = symptoommanagement + functioneel behoud. Chirurgie zelden geïndiceerd.',
        opties: [
          {label: 'ADL-functioneel, geen topsport', advies: 'Isometrie + lage HSR als onderhoud. Belastingsbeheer prioriteit. Realistische verwachtingen stellen.', color: '#71717a'},
          {label: 'Invaliderend + topsport + > 12 mnd therapie', advies: 'Orthopedisch consult. ESWT eerst. Chirurgie (debridement) als laatste optie — beperkt evidence.', color: '#f59e0b'},
        ]
      }
    ]
  },
  si: {
    title: 'Schouderinstabiliteit — Klinische beslisboom',
    stappen: [
      {
        id: 'start',
        vraag: 'Type instabiliteit?',
        info: 'TUBS = Traumatisch, Unidirectioneel, Bankart laesie, Chirurgie overwegen. AMBRI = Atraumatisch, Multidirectioneel, Bilateraal, Rehab eerste keuze, Inferieure capsulaire shift als chirurgie.',
        opties: [
          {label: 'TUBS — traumatisch (val, sport, luxatie)', next: 'tubs_leeftijd', color: '#ef4444'},
          {label: 'AMBRI — atraumatisch / habitueel / hypermobiliteit', next: 'ambri', color: '#f59e0b'},
        ]
      },
      {
        id: 'tubs_leeftijd',
        vraag: 'Leeftijd patiënt bij eerste luxatie?',
        info: 'Recidiefkans: < 20 jr = 80–90%. 20–30 jr = 60–70%. > 30 jr = 30–50%. Balg & Boileau ISIS-score bepaalt chirurgisch risico.',
        opties: [
          {label: '< 25 jaar — hoog recidiefrisico', next: 'tubs_sport', color: '#ef4444'},
          {label: '≥ 25 jaar — matig recidiefrisico', next: 'tubs_conservatief', color: '#f59e0b'},
        ]
      },
      {
        id: 'tubs_sport',
        vraag: 'Contactsport of overhead sport met ISIS-score?',
        info: 'ISIS ≥ 6/10: vroege chirurgie aanbevolen (Balg & Boileau 2007). ISIS < 6: conservatief rehabilitatie 3–6 maanden eerst.',
        opties: [
          {label: 'Contactsport + ISIS ≥ 6', advies: 'Verwijzing orthopeed voor Bankart-repair (arthroscopisch). Preoperatieve kinesitherapie: scapulaire controle + RC-kracht. Post-op protocol fase 1 starten.', color: '#ef4444'},
          {label: 'Recreatief / ISIS < 6', next: 'tubs_conservatief', color: '#f59e0b'},
        ]
      },
      {
        id: 'tubs_conservatief',
        vraag: 'Respons op conservatief programma na 12–16 weken?',
        info: 'Burkhead & Rockwood 1992: 80% succesrate conservatief bij AMBRI; 16% bij TUBS. Controleer WOSI-score: MCID = 212 punten.',
        opties: [
          {label: 'WOSI verbeterd ≥ 212 ptn, geen recidief', advies: 'Goed verloop. Continueer protocol naar fase 4–5. RTS-criteria checken.', color: '#22c55e'},
          {label: 'Recidief luxatie of subluxatie tijdens revalidatie', advies: 'Orthopedisch consult. MRI arthro voor Bankart/HAGL/Hill-Sachs. Chirurgische stabilisatie overwegen.', color: '#ef4444'},
          {label: 'Geen verbetering, geen recidief na 4 mnd', advies: 'Intensiveer neuromusculaire training. Proprioceptieve training. Psychosociaal component evalueren. Herevalueer na 8 weken.', color: '#f59e0b'},
        ]
      },
      {
        id: 'ambri',
        vraag: 'Hypermobiliteit of gegeneraliseerde laxiteit aanwezig (Beighton ≥ 4)?',
        info: 'Gegeneraliseerde hypermobiliteit vereist aanpassing van het protocol: geen passieve rekking, focus op dynamische stabiliteit en proprioceptie.',
        opties: [
          {label: 'Beighton ≥ 4 — hypermobiel', advies: 'Geen stretching. Focus op dynamische stabilisatie, RC-cocontractie, scapulaire retractie. Lange revalidatieduur (9–12 mnd). Chirurgie zelden geïndiceerd.', color: '#f59e0b'},
          {label: 'Beighton < 4 — normale laxiteit', advies: 'Standaard AMBRI-protocol. Scapulaire controle fase 1–2. Neuromusculaire training fase 3. 6 mnd conservatief voor chirurgische beslissing.', color: '#22c55e'},
        ]
      },
    ]
  },
  orif: {
    title: 'ORIF Distale Radius — Klinische beslisboom',
    stappen: [
      {
        id: 'start',
        vraag: 'Postoperatieve complicaties aanwezig?',
        info: 'Check actief op CRPS, CTS, EPL-ruptuur en plaatproblemen. De meeste complicaties manifesteren zich in week 2–8. Vroeg opsporen verbetert uitkomst sterk.',
        opties: [
          {label: 'Brandende pijn, allodynie of kleurverandering', next: 'crps', color: '#ef4444'},
          {label: 'Nieuwe tintelingen duim/index/middenvinger', next: 'cts', color: '#f59e0b'},
          {label: 'Duim kan niet actief strekken (EPL)', advies: 'EPL-peesruptuur — complicatie van volaire plaat of haakje. Spoedreferral handchirurg. Tenodese of transplantaat nodig.', color: '#ef4444'},
          {label: 'Geen complicaties — normaal verloop', next: 'kracht', color: '#22c55e'},
        ]
      },
      {
        id: 'crps',
        vraag: 'CRPS type 1 waarschijnlijk (Budapest-criteria)?',
        info: 'Budapest-criteria: 4 symptoomcategorieën (sensorisch, vasomotorisch, sudomotorisch, motorisch/trofisch) en 2 tekencategorieën aanwezig. CRPS treedt op bij 2–8% van DRF.',
        opties: [
          {label: 'Budapest-criteria positief (≥ 3 categorieën)', advies: 'Multidisciplinair CRPS-protocol starten. Desensibilisatie + graded motor imagery. Pijnkliniek verwijzing. Revalidatie doorgaan maar aanpassen (geen forceren, pijneducatie).', color: '#ef4444'},
          {label: 'Vermoeden maar onvolledig beeld', advies: 'Laagdrempelig verwijzen reumatologie of pijnkliniek. Milde desensibilisatie starten (textuuroefeningen). Herevalueer na 2 weken.', color: '#f59e0b'},
        ]
      },
      {
        id: 'cts',
        vraag: 'Carpaaltunnelsyndroom — acuut of pre-existent?',
        info: 'Acuut postoperatief CTS (eerste 2 weken) door oedeem of hematoom vereist spoedingreep. Pre-existent CTS kan verergeren na DRF. Phalen en Tinel positief.',
        opties: [
          {label: 'Acuut (< 2 weken postoperatief), ernstig', advies: 'Spoedreferral chirurg — mogelijk oedeemdruk of hematoomdruk op n. medianus. Carpaaltunnelrelease kan nodig zijn.', color: '#ef4444'},
          {label: 'Chronisch of mild (tintelingen, nachtpijn)', advies: 'Nachtspalk in neutrale positie. Conservatief 6–8 weken. Bij uitblijven herstel: orthopedie consulteren voor carpaaltunnelrelease.', color: '#f59e0b'},
        ]
      },
      {
        id: 'kracht',
        vraag: 'Krachtherstel grip na fase 3 (week 10–12)?',
        info: 'Grip strength < 60% van contralateraal op week 12 wijst op vertraagd herstel. Oorzaken: onvoldoende training, pijnremming, CRPS subklinisch, peesadhesies.',
        opties: [
          {label: 'Grip ≥ 60% contralateraal — normaal verloop', next: 'rts', color: '#22c55e'},
          {label: 'Grip < 60% na 12 weken training', advies: 'Ergotherapeut inschakelen voor intensief handrevalidatieprogramma. HSR-principes toepassen (3×8RM). CRPS uitsluiten. Herevalueer na 4 weken.', color: '#f59e0b'},
        ]
      },
      {
        id: 'rts',
        vraag: 'Return to Sport / Work criteria gehaald?',
        info: 'PRWE < 20, grip ≥ 90% contralateraal, AROM F/E ≥ 80°, pro/sup ≥ 90°, pijnvrij bij sportspecifieke bewegingen.',
        opties: [
          {label: 'Alle criteria gehaald', advies: 'Volledige RTS/RTW. Onderhoudsprogramma 2×/week. Polsbrace bij risico-activiteiten eerste jaar. Afsluiting na 6 maanden follow-up.', color: '#22c55e'},
          {label: 'PRWE < 20 maar grip 75–89%', advies: 'Gedeeltelijke RTS voor niet-contact activiteiten. Grip training intensiveren. Herevalueer na 4 weken. Manuele beroepen: ergotherapeut work hardening.', color: '#f59e0b'},
          {label: 'Criteria niet gehaald na 5 maanden', advies: 'Multidisciplinaire evaluatie. Röntgen/CT voor botgenezing. CRPS uitsluiten. Implantaat positie controleren. Ergotherapeut inschakelen.', color: '#ef4444'},
        ]
      },
    ]
  },

  dq: {
    title: 'De Quervain Tenosynovitis — Klinische beslisboom',
    stappen: [
      {
        id: 'start',
        vraag: 'Is er anatomisch bewijs voor EPB-subcompartiment?',
        info: 'Chern TC et al. (2014): 34% van patiënten heeft EPB in apart subcompartiment van eerste dorsaal compartiment. Dit verklaart conservatief falen en vereist aparte chirurgische release. Echografisch te beoordelen.',
        opties: [
          {label: 'Geen subcompartiment (66%)', next: 'conservatief', color: '#22d3ee'},
          {label: 'EPB-subcompartiment aanwezig (34%)', next: 'subcompartiment', color: '#f59e0b'},
          {label: 'Onbekend / echo niet beschikbaar', next: 'conservatief', color: '#71717a'},
        ]
      },
      {
        id: 'conservatief',
        vraag: 'Conservatief beleid starten — respons na 6–8 weken?',
        info: 'Peters-Veluthamaningal 2009 (Cochrane): 83% succespercentage injectie + spalk bij standaard eerste compartiment. Cavaleri 2016: combinatie superieur aan elk afzonderlijk. Evalueer na 6 weken.',
        opties: [
          {label: 'Goede respons (NRS ≤ 2, QuickDASH ≤ 20)', advies: 'Verdere conservatieve revalidatie. Ga naar fase 2 protocol. Onderhoud spalk nachtgebruik week 5–8. Herevalueer maandelijks.', color: '#22c55e'},
          {label: 'Gedeeltelijke respons (NRS 3–5)', next: 'injectie', color: '#f59e0b'},
          {label: 'Geen respons / verslechtering', next: 'injectie', color: '#ef4444'},
        ]
      },
      {
        id: 'subcompartiment',
        vraag: 'EPB-subcompartiment — chirurgische indicatie direct overwegen?',
        info: 'Chern 2014: patiënten met EPB-subcompartiment hebben significant lager conservatief succespercentage (38% vs 83%). Echogeleide injectie specifiek in beide subcompartementen verhoogt succeskans.',
        opties: [
          {label: 'Echogeleide injectie beide subcompartementen', next: 'injectie_echo', color: '#a78bfa'},
          {label: 'Direct chirurgische release (actieve patiënt, manueel beroep)', next: 'chirurgie', color: '#f59e0b'},
        ]
      },
      {
        id: 'injectie',
        vraag: 'Corticosteroïdinjectie eerste compartiment — resultaat na 4–6 weken?',
        info: 'Peters-Veluthamaningal 2009: NNT = 3 voor significante pijnreductie. Triamcinolon 40 mg of methylprednisolon 40 mg in 1 ml lidocaïne 1%. Maximum 2 injecties — daarna chirurgische indicatie. Injectie blind 64% accurate plaatsing — echo-geleiding verhoogt naar 97%.',
        opties: [
          {label: 'Respons na injectie (≥ 50% pijnreductie)', next: 'revalidatie_succes', color: '#22c55e'},
          {label: 'Geen/onvoldoende respons na 2 injecties', next: 'chirurgie', color: '#ef4444'},
          {label: 'Recidief na initiële respons', next: 'chirurgie', color: '#f59e0b'},
        ]
      },
      {
        id: 'injectie_echo',
        vraag: 'Echogeleide injectie beide subcompartementen — resultaat?',
        info: 'Accurate plaatsing in beide subcompartementen (APL + EPB apart) verhoogt succeskans bij anatomisch variant tot 65%. Echo-geleiding verplicht bij bekend subcompartiment.',
        opties: [
          {label: 'Succes (≥ 50% reductie)', next: 'revalidatie_succes', color: '#22c55e'},
          {label: 'Geen succes', next: 'chirurgie', color: '#ef4444'},
        ]
      },
      {
        id: 'revalidatie_succes',
        vraag: 'Revalidatiefase na conservatief succes — protocol adherentie?',
        info: 'Ilyas AM 2007: 50% recidiefpercentage bij onvoldoende revalidatie na injectie-succes. Fase 2–3 protocol (progressieve belasting, excentrische training) essentieel voor duurzaam resultaat.',
        opties: [
          {label: 'Volledige protocol adherentie', advies: 'Volledig protocol fase 2–3 doorlopen. Recidief preventie: ergonomie + onderhoudstraining 2×/week. Ontslagklaar na QuickDASH ≤ 10 en kracht ≥ 90%.', color: '#22c55e'},
          {label: 'Onvoldoende adherentie / recidief', advies: 'Herhaal fase 1 protocol. Tweede injectie overwegen. Bespreek chirurgische optie bij 3e episode. Ergotherapeut inschakelen voor werkplekadaptatie.', color: '#f59e0b'},
        ]
      },
      {
        id: 'chirurgie',
        vraag: 'Chirurgische release eerste dorsaal compartiment — complicatierisico inschatten?',
        info: 'Standaardprocedure: longitudinale incisie boven eerste compartiment, release APL + EPB retinaculum. Bij subcompartiment: dubbele release verplicht. Hoofdcomplicaties: n. radialis superficialis letsel (7%), wondinfectie (2%), subluxatie pees (1%).',
        opties: [
          {label: 'Laag risico — geen anatomisch variant', advies: 'Ambulante ingreep lokale anesthesie. Post-OK: fase 2 protocol start dag 1–3. Werkvrijstelling: kantoor 10–14 dagen, manueel 4–6 weken. Verwacht succes > 90%.', color: '#22c55e'},
          {label: 'Hoog risico — EPB-subcompartiment aanwezig', advies: 'Verplichte dubbele release (APL EN EPB subcompartiment). Chirurg informeren over anatomisch variant. Post-OK: n. radialis superficialis monitoren. Recidief na chirurgie < 5%.', color: '#f59e0b'},
        ]
      },
    ]
  },

  cts: {
    title: 'Carpaaltunnelsyndroom — Klinische beslisboom',
    stappen: [
      {
        id: 'ernst',
        vraag: 'Wat is de ernst van het CTS op basis van kliniek en EMG?',
        info: 'Mild CTS: alleen sensorische klachten, EMG normale motorische conductie of lichte vertraging. Matig: sensorisch + nachtpijn, EMG matige vertraging. Ernstig: motorische uitval (thenaratrofie), EMG ernstige vertraging of afwezig. Page 2022 (Cochrane): chirurgie superieur aan conservatief bij matig-ernstig CTS op 12 maanden.',
        opties: [
          {label: 'Mild CTS (sensorisch, geen motorische uitval)', next: 'conservatief', color: '#22c55e'},
          {label: 'Matig CTS (nachtpijn > 3×/week, EMG matig)', next: 'conservatief_chirurg', color: '#f59e0b'},
          {label: 'Ernstig CTS (thenaratrofie, EMG ernstig)', next: 'chirurgie_dringend', color: '#ef4444'},
        ]
      },
      {
        id: 'conservatief',
        vraag: 'Conservatief beleid mild CTS — respons na 8 weken?',
        info: 'Walker 2000 RCT: neutraalspalk 8 weken + glijdingstechnieken → 60–70% symptoomreductie bij mild CTS. Marshall 2007: injectie toevoegen bij onvoldoende splintrespons. Fernández-de-las-Peñas 2021: neurodynamics significant effectief.',
        opties: [
          {label: 'Goede respons (BCTQ-SSS ≤ 2.5)', advies: 'Conservatief succes. Continueer nachtspalk 4 weken extra. Onderhoud glijdingstechnieken 2×/dag. Ergonomische aanpassing permanent. Herevalueer na 3 maanden.', color: '#22c55e'},
          {label: 'Gedeeltelijke respons (BCTQ-SSS 2.5–3.5)', next: 'injectie', color: '#f59e0b'},
          {label: 'Geen respons na 8 weken', next: 'chirurgie', color: '#ef4444'},
        ]
      },
      {
        id: 'conservatief_chirurg',
        vraag: 'Matig CTS — conservatief proberen of direct chirurgie?',
        info: 'Page 2022 (Cochrane): bij matig CTS is chirurgie superieur op 12 maanden (BCTQ-SSS -0.51 verschil). Echter: 6–8 weken conservatief beleid ethisch verantwoord als patiënt chirurgie wil uitstellen.',
        opties: [
          {label: 'Proefperiode conservatief (6–8 weken)', next: 'conservatief', color: '#f59e0b'},
          {label: 'Direct chirurgische verwijzing (voorkeur patiënt)', next: 'chirurgie', color: '#22d3ee'},
          {label: 'Overbrugging: injectie terwijl wachtend op chirurgie', next: 'injectie', color: '#a78bfa'},
        ]
      },
      {
        id: 'chirurgie_dringend',
        vraag: 'Ernstig CTS met motorische uitval — dringende chirurgische indicatie',
        info: 'Thenaratrofie = axonotmesis n. medianus → motorische reïnnervatie na release mogelijk maar onvolledig. Hoe langer gewacht, hoe minder motorisch herstel.',
        opties: [
          {label: 'Dringende chirurgische verwijzing (< 4 weken)', advies: 'SPOED: thenaratrofie = irreversibele axonotmesis bij langdurig uitstel. Verwijsbrief: "Ernstig CTS met motorische uitval — dringende release." Nachtspalk + zachte glijdingstechnieken als overbrugging.', color: '#ef4444'},
          {label: 'Afwachten na shared decision-making', advies: 'RISICO: Langer wachten vergroot kans op permanente motorische uitval thenar. Schriftelijk informeren en gedocumenteerde informed consent bij uitstel. Maximaal 4 weken wachten.', color: '#f59e0b'},
        ]
      },
      {
        id: 'injectie',
        vraag: 'Corticosteroïdinjectie carpaaltunnel — resultaat na 4–6 weken?',
        info: 'Marshall 2007 (Cochrane): lokale injectie effectiever dan placebo op 4–8 weken. Methylprednisolon 40 mg of triamcinolon 20 mg in 1 ml lidocaïne 1%. Maximum 2 injecties per jaar. Bij zwangerschap: veilig.',
        opties: [
          {label: 'Goede respons (BCTQ-SSS reductie ≥ 0.5)', next: 'conservatief', color: '#22c55e'},
          {label: 'Onvoldoende respons na 2 injecties', next: 'chirurgie', color: '#ef4444'},
          {label: 'Zwangerschap gerelateerd CTS', advies: 'CTS in zwangerschap: neutraalspalk + glijdingstechnieken + injectie veilig. 50% spontane resolutie post-partum binnen 3 maanden. Chirurgie enkel bij ernstige motorische uitval. Herevalueer 3 maanden post-partum.', color: '#a78bfa'},
        ]
      },
      {
        id: 'chirurgie',
        vraag: 'CTS-release — endoscopisch of open techniek?',
        info: 'Atroshi I et al. (2009): endoscopisch vs open — vergelijkbaar resultaat op 12 maanden. Endoscopisch: snellere RTW (11 vs 17 dagen). Open: beter zicht bij anatomische varianten of revisie.',
        opties: [
          {label: 'Endoscopische release (manuele beroepen, snelle RTW)', advies: 'Voorkeur bij: manuele beroepen, jongere actieve patiënten. RTW: 10–14 dagen lichte arbeid, 3–4 weken manueel. Post-OK: fase 2 protocol dag 1–3. Success rate 97% (Atroshi 2009).', color: '#22c55e'},
          {label: 'Open release (revisie, anatomische varianten)', advies: 'Voorkeur bij: revisie CTS, abnormale anatomie, ernstige thenaratrofie. RTW: 14–21 dagen lichte arbeid, 4–6 weken manueel. Post-OK: fase 2 protocol dag 3–5. Uitgebreid littekenmassage protocol.', color: '#f59e0b'},
        ]
      },
    ]
  },
  gmt: {
    title: 'Beslisboom — GMT / GTPS',
    stappen: [
      {id:'s1', vraag:'Wat is de primaire pijnlocatie?',
       info:'Palpeer de trochanter major. Vergelijk met anterieure heup (lies), lumbaal en laterale knie.',
       opties:[
         {label:'Laterale heup (trochanter major)', color:'#14b8a6', next:'s2'},
         {label:'Anterieure heup of lies', color:'#f59e0b', advies:'Anterieure heuppijn: overweeg FAI, coxartrose of heupflexortendinopathie. Specifieke klinische tests (FADIR, FABER) en eventueel beeldvorming aanbevolen.'},
         {label:'Laterale knie of uitstralend', color:'#f97316', advies:'Differentiaal: ITB-syndroom (Noble compression test) vs. lumbale L4/L5 radiculopathie (SLR, neurologisch onderzoek). Lumbale screening aanbevolen.'},
       ]},
      {id:'s2', vraag:'Is er compressiepijn bij de trochanter major?',
       info:'Provocatietests: zitten met gekruiste benen, liggen op aangedane zijde, been-over-been positie.',
       opties:[
         {label:'Ja — duidelijk compressiegevoelig', color:'#ef4444', next:'s3'},
         {label:'Nee — pijn enkel bij tensiele belasting', color:'#22c55e', advies:'Tensiel GTPS: start fase 2 (isotone opbouw). Focus op progressieve abductorkrachttraining.'},
       ]},
      {id:'s3', vraag:'Hoe ernstig is de huidige pijnbeleving en functionele beperking?',
       info:'NRS pijn bij activiteit. Zijn dagelijkse activiteiten ernstig beperkt?',
       opties:[
         {label:'NRS > 5 / sterk beperkt in ADL', color:'#ef4444', advies:'Acuut compressief GTPS: focus op fase 1. Isometrische pijnmodulatie (30–45 sec, 3–5 sets). Overweeg corticosteroïdinjectie bij refractaire acute fase.'},
         {label:'NRS 3–5 / matig beperkt', color:'#f59e0b', advies:'Subacuut GTPS: combineer fase 1 (educatie) met vroege fase 2 (zijliggende abductie). Monitor 24u pijnrespons.'},
         {label:'NRS < 3 / pijn voornamelijk bij sport', color:'#22c55e', advies:'Belastingsgerelateerd GTPS: start fase 3 (krachtontwikkeling). RTS-criterium: LSI ≥ 90% abductiekracht.'},
       ]},
    ],
  },
  hsi: {
    title: 'Beslisboom — Hamstring Strain Injury',
    stappen: [
      {id:'s1', vraag:'Wat is de geschatte ernst van de hamstringblessure?',
       info:'Klinische inschatting op basis van pijnintensiteit, lokalisatie, krachtverlies en mobiliteitsbeperking. MRI bevestigt de graad.',
       opties:[
         {label:'Graad I — minimale spiervezelscheur (< 10%)', color:'#22c55e', next:'s2'},
         {label:'Graad II — partïele ruptuur (10–50%)', color:'#f59e0b', next:'s2'},
         {label:'Graad III — uitgebreide ruptuur (> 50%) / totaal', color:'#ef4444', next:'s3'},
       ]},
      {id:'s2', vraag:'Is er sprake van proximale peesaantasting (konjoint pees)?',
       info:'Proximale aantasting = pijn en zwakte ter hoogte van tuber ischiadicum + uitstraling naar gluteaalregio. MRI toon aantasting konjoint pees.',
       opties:[
         {label:'Nee — pijn in buik van de spier', color:'#22c55e', advies:'Spierbuiklesie: start fase 1–2 normaal protocol. Prognose graad I: 1–2 wkn; graad II: 3–8 wkn. Criteria-gestuurd protocol.'},
         {label:'Ja — proximale peesaantasting', color:'#f59e0b', advies:'Konjoint peesletsel: langzamer protocol (extra 2–4 wkn per fase). Hoger recidiefrisico. Nordic hamstring met vertraging starten (week 4–6). Follow-up MRI aanbevolen.'},
       ]},
      {id:'s3', vraag:'Graad III — chirurgisch advies nodig?',
       info:'Totale ruptuur of proximale avulsie van de hamstring kan chirurgische indicatie hebben, especially bij actieve atleten < 40j.',
       opties:[
         {label:'Proximale avulsie tuber ischiadicum', color:'#ef4444', advies:'Chirurgisch advies obligaat. Conservatief mogelijk bij sedentaire patiënten. Chirurgisch hechten geeft betere krachtherstel bij actieve atleten (Lempainen 2009).'},
         {label:'Totale ruptuur in spierbuik', color:'#f59e0b', advies:'Meestal conservatief. Langzaam protocol: 12–20 wkn. MRI na 6 wkn. RTS pas na volledige krachtsymmetrie (LSI ≥ 90%).'},
       ]},
    ],
  },
  elb: {
    title: 'Beslisboom — Laterale Epicondylalgie',
    stappen: [
      {id:'s1', vraag:'Is de pijn lateraal (epicondyl) of mediaal (golfersarm)?',
       info:'Laterale epicondylalgie = extensor-origine (ECRB). Mediale epicondylalgie (golfersarm) = flexor-origine. Palpeer beide epicondylen.',
       opties:[
         {label:'Lateraal — tennis elbow (ECRB)', color:'#c084fc', next:'s2'},
         {label:'Mediaal — golf elbow (flexoren)', color:'#60a5fa', advies:'Mediale epicondylalgie: analoog protocol maar met polsflexie-excentrische training. Cave: ulnaire zenuwinvloedzone (tinteling ring/pink).'},
         {label:'Bilateraal of diffuus', color:'#f59e0b', advies:'Cervicale radiculopathie C6 uitsluiten. EMG + cervicale MRI overwegen. Neurologisch onderzoek.'},
       ]},
      {id:'s2', vraag:'Hoe lang bestaan de klachten al?',
       info:'Acuut (< 6 wkn) vs. subacuut (6–12 wkn) vs. chronisch (> 12 wkn) beïnvloedt therapiekeuze.',
       opties:[
         {label:'Acuut — < 6 weken', color:'#22c55e', advies:'Acuut: relatieve rust, isometrische training, counterforce brace. Wait and see 78% succes op 1 jaar (Bisset 2006). Geen agressieve stretching.'},
         {label:'Subacuut — 6–12 weken', color:'#f59e0b', advies:'Subacuut: isometrische → excentrische progressie. Manuele therapie elleboog (Mulligan/Vicenzino) toevoegen. PRTEE bijhouden.'},
         {label:'Chronisch — > 12 weken', color:'#ef4444', advies:'Chronisch: HSR-protocol (traag, zwaar), Thera-Band Flexbar. Bij stagnatie na 6 wkn optimale therapie: PRP-injectie of shockwave overwegen. Chirurgisch consult bij > 12 mnd.'},
       ]},
    ],
  },
  mtss: {
    title: 'Beslisboom — Mediaal Tibiaal Stresssyndroom',
    stappen: [
      {id:'s1', vraag:'Is de pijn diffuus mediaal tibiaal of focaal (< 2 cm)?',
       info:'MTSS = diffuus pijngebied (> 5 cm) mediaal tibia. Focale pijn < 2 cm = stressfractuur tot bewijs van tegendeel.',
       opties:[
         {label:'Diffuus (> 5 cm) — typisch MTSS', color:'#0ea5e9', next:'s2'},
         {label:'Focaal (< 2 cm) — stressfractuur suspect', color:'#ef4444', advies:'Stressfractuur: MRI verplicht. Geen loopactiviteit totdat MRI uitsluit. Graad 3–4 bot-stress: draagloze periode 6–12 wkn + orthopedisch consult.'},
         {label:'Pijn bij rust of nacht', color:'#f59e0b', advies:'Nachtpijn + tibiale pijn: tumoreus proces of osteomyelitis uitsluiten. Bloedanalyse + röntgen + eventueel MRI. Geen loopactiviteit.'},
       ]},
      {id:'s2', vraag:'Hoe ernstig is de huidige impact op loopactiviteit?',
       info:'Graderingshulp voor fase-toewijzing.',
       opties:[
         {label:'Kan nog lopen maar met pijn', color:'#f59e0b', advies:'MTSS graad 1–2 klinisch: verlaag loopvolume 50%, alternatieve cardio toevoegen. Geen complete rust — gradeerde belasting superieur (Winters 2013).'},
         {label:'Loopactiviteit volledig gestopt', color:'#ef4444', advies:'MTSS graad 2–3 klinisch: MRI overwegen (grade 3 = medullair oedeem = 8–12 wkn). Start fase 1 volledig (aquajogging, kuitkracht). Loophervatting pas na criteria fase 2.'},
         {label:'Pijn enkel bij hoge intensiteit', color:'#22c55e', advies:'MTSS mild/herstellend: skip fase 1, start fase 2. Cadansoptimalisatie + kuitkrachtprogramma. Progressieve loophervatting met 10%-regel.'},
       ]},
    ],
  },
};

// ── TESTFORMULIEREN ──
const FORMS = {
  'visa_p': {
    name: 'VISA-P',
    full: 'Victorian Institute of Sport Assessment — Patella',
    protocol: 'pt',
    max: 100,
    rts: '≥ 90 voor volledig sporten',
    intro: 'Geef aan hoe je je de afgelopen week hebt gevoeld. Geef een score van 0–10 of 0–100 per vraag zoals aangegeven.',
    vragen: [
      {id:'v1', tekst:'Hoeveel pijn heb je in je knie bij het zitten op een stoel gedurende 10 minuten?', type:'slider', min:0, max:10, links:'Ernstige pijn', rechts:'Geen pijn', gewicht:10},
      {id:'v2', tekst:'Hoeveel pijn heb je bij traplopen?', type:'slider', min:0, max:10, links:'Ernstige pijn', rechts:'Geen pijn', gewicht:10},
      {id:'v3', tekst:'Hoeveel pijn of moeilijkheden heb je bij volledig door de knieën gaan in de squatpositie?', type:'slider', min:0, max:10, links:'Niet mogelijk', rechts:'Geen pijn/moeite', gewicht:10},
      {id:'v4', tekst:'Heb je pijn tijdens het tennissen of sporten die vergelijkbare belasting vereist?', type:'slider', min:0, max:10, links:'Kan niet uitvoeren', rechts:'Geen pijn', gewicht:10},
      {id:'v5', tekst:'Heb je pijn bij het bukken of knielen?', type:'slider', min:0, max:10, links:'Kan niet', rechts:'Geen pijn', gewicht:10},
      {id:'v6', tekst:'Heb je pijn na 10 minuten sporten?', type:'slider', min:0, max:10, links:'Ernstige pijn', rechts:'Geen pijn', gewicht:10},
      {id:'v7', tekst:'Heb je pijn na 30 minuten of langer sporten?', type:'slider', min:0, max:10, links:'Ernstige pijn', rechts:'Geen pijn', gewicht:10},
      {id:'v8', tekst:'Hoe lang kun je sporten? (kies één optie)', type:'keuze', opties:[
        {label:'Geen sport mogelijk', score:0},
        {label:'Alleen lichte activiteiten', score:4},
        {label:'Sport met aanpassingen', score:14},
        {label:'Sport op lager niveau dan vóór letsel', score:19},
        {label:'Volledig op eigen niveau', score:30},
      ], gewicht:1},
    ]
  },
  'visa_a': {
    name: 'VISA-A',
    full: 'Victorian Institute of Sport Assessment — Achilles',
    protocol: 'at',
    max: 100,
    rts: '≥ 90 voor volledig sporten',
    intro: 'Beantwoord elke vraag over de afgelopen week. De pijnvragen scoren 0–10.',
    vragen: [
      {id:'v1', tekst:'Heb je pijn in de ochtend bij de eerste stappen?', type:'slider', min:0, max:10, links:'Ernstige pijn', rechts:'Geen pijn', gewicht:10},
      {id:'v2', tekst:'Heb je pijn na 30 minuten stilzitten of rusten gedurende de dag?', type:'slider', min:0, max:10, links:'Ernstige pijn', rechts:'Geen pijn', gewicht:10},
      {id:'v3', tekst:'Heb je pijn bij stretchoefeningen van de kuit?', type:'slider', min:0, max:10, links:'Ernstige pijn', rechts:'Geen pijn', gewicht:10},
      {id:'v4', tekst:'Heb je pijn bij het gaan op de tenen op één been?', type:'slider', min:0, max:10, links:'Kan niet', rechts:'Geen pijn', gewicht:10},
      {id:'v5', tekst:'Hoeveel pijnvrije enkelvoudige heel raises kun je doen op één been?', type:'slider', min:0, max:10, links:'Geen', rechts:'Meer dan 10', gewicht:10},
      {id:'v6', tekst:'Hoeveel pijn heb je bij maximale hardloopactiviteit?', type:'slider', min:0, max:10, links:'Kan niet hardlopen', rechts:'Geen pijn', gewicht:10},
      {id:'v7', tekst:'Doe je momenteel sport?', type:'keuze', opties:[
        {label:'Geen sport', score:0},
        {label:'Aangepast training', score:4},
        {label:'Volledig trainen, niet wedstrijden', score:7},
        {label:'Wedstrijden, niet op hetzelfde niveau', score:14},
        {label:'Volledig op eigen niveau', score:30},
      ], gewicht:1},
      {id:'v8', tekst:'Hoelang kun je sporten zonder pijn?', type:'keuze', opties:[
        {label:'Niet', score:0},
        {label:'1–10 min', score:7},
        {label:'11–20 min', score:14},
        {label:'21–30 min', score:18},
        {label:'Meer dan 30 min', score:21},
      ], gewicht:1},
    ]
  },
  'ikdc': {
    name: 'IKDC',
    full: 'International Knee Documentation Committee — Subjective Knee Form',
    protocol: 'acl',
    max: 100,
    rts: '≥ 85 voor RTS',
    intro: 'De volgende vragen gaan over uw symptomen en het functioneren van uw knie. Kies per vraag het best passende antwoord.',
    vragen: [
      {id:'v1', tekst:'Wat is het hoogste activiteitsniveau dat u kunt uitvoeren zonder significante kniepijn?', type:'keuze', opties:[
        {label:'Zeer zware activiteiten (springen, pivoten — voetbal, basketbal)', score:10},
        {label:'Zware activiteiten (zwaar lichamelijk werk, skiën, tennis)', score:7},
        {label:'Matige activiteiten (matig lichamelijk werk, joggen)', score:4},
        {label:'Lichte activiteiten (lopen, huishouden)', score:1},
        {label:'Niet mogelijk vanwege kniepijn', score:0},
      ]},
      {id:'v2', tekst:'Hoe erg is uw kniepijn momenteel?', type:'slider', min:0, max:10, links:'Ergste pijn', rechts:'Geen pijn', gewicht:10},
      {id:'v3', tekst:'Hoeveel stijfheid of zwelling heeft u in uw knie?', type:'keuze', opties:[
        {label:'Geen', score:10},
        {label:'Licht', score:7},
        {label:'Matig', score:4},
        {label:'Ernstig', score:1},
        {label:'Extreem', score:0},
      ]},
      {id:'v4', tekst:'Wat is het hoogste activiteitsniveau zonder significante zwelling?', type:'keuze', opties:[
        {label:'Zeer zware activiteiten', score:10},
        {label:'Zware activiteiten', score:7},
        {label:'Matige activiteiten', score:4},
        {label:'Lichte activiteiten', score:1},
        {label:'Niet mogelijk', score:0},
      ]},
      {id:'v5', tekst:'Heeft u de afgelopen 4 weken een slot- of klikgevoel in uw knie gehad?', type:'keuze', opties:[
        {label:'Nee', score:10},
        {label:'Ja', score:0},
      ]},
      {id:'v6', tekst:'Wat is het hoogste activiteitsniveau zonder doorzakken van de knie?', type:'keuze', opties:[
        {label:'Zeer zware activiteiten', score:10},
        {label:'Zware activiteiten', score:7},
        {label:'Matige activiteiten', score:4},
        {label:'Lichte activiteiten', score:1},
        {label:'Niet mogelijk', score:0},
      ]},
      {id:'v7', tekst:'Hoe ver kunt u lopen maximaal?', type:'keuze', opties:[
        {label:'Onbeperkt', score:10},
        {label:'Meer dan 16 blokken', score:7},
        {label:'4–16 blokken', score:4},
        {label:'Minder dan 4 blokken', score:1},
        {label:'Niet mogelijk', score:0},
      ]},
      {id:'v8', tekst:'Hoe goed kunt u traplopen?', type:'keuze', opties:[
        {label:'Geen moeite', score:10},
        {label:'Lichte moeite', score:7},
        {label:'Matige moeite', score:4},
        {label:'Grote moeite', score:1},
        {label:'Niet mogelijk', score:0},
      ]},
      {id:'v9', tekst:'Hoe goed kunt u hurken/door de knieën gaan?', type:'keuze', opties:[
        {label:'Geen moeite', score:10},
        {label:'Lichte moeite', score:7},
        {label:'Matige moeite', score:4},
        {label:'Grote moeite', score:1},
        {label:'Niet mogelijk', score:0},
      ]},
      {id:'v10', tekst:'Wat is uw huidige activiteitsniveau? (kies alles wat u doet)', type:'keuze', opties:[
        {label:'Werk / dagelijks leven niet beperkt', score:10},
        {label:'Recreatieve sport / lichte activiteit', score:7},
        {label:'Competitiesport op laag niveau', score:4},
        {label:'Competitiesport op hoog niveau (pivot)', score:10},
        {label:'Geen sport meer mogelijk', score:0},
      ]},
    ]
  },
  'ndi': {
    name: 'NDI',
    full: 'Neck Disability Index',
    protocol: 'bureau',
    max: 50,
    rts: '< 10 voor ontslag',
    intro: 'Deze vragenlijst is ontworpen om te meten hoeveel nekpijn uw dagelijks leven beïnvloedt. Kies per sectie de uitspraak die het best op u van toepassing is vandaag.',
    invert: true,
    vragen: [
      {id:'v1', tekst:'Sectie 1 — Intensiteit van de pijn', type:'keuze', opties:[
        {label:'Ik heb op dit moment geen pijn', score:0},
        {label:'De pijn is op dit moment heel licht', score:1},
        {label:'De pijn is op dit moment matig', score:2},
        {label:'De pijn is op dit moment redelijk ernstig', score:3},
        {label:'De pijn is op dit moment erg ernstig', score:4},
        {label:'De pijn is op dit moment zo erg als je je maar kunt voorstellen', score:5},
      ]},
      {id:'v2', tekst:'Sectie 2 — Persoonlijke verzorging (wassen, aankleden)', type:'keuze', opties:[
        {label:'Ik kan voor mezelf zorgen zonder dat dit extra pijn veroorzaakt', score:0},
        {label:'Ik kan voor mezelf zorgen maar dit veroorzaakt extra pijn', score:1},
        {label:'Het is pijnlijk voor mezelf te zorgen en ik ben traag en voorzichtig', score:2},
        {label:'Ik heb enige hulp nodig maar kan de meeste dingen zelf', score:3},
        {label:'Ik heb elke dag hulp nodig bij de meeste zorgen voor mezelf', score:4},
        {label:'Ik kleed me niet aan, was me moeilijk en blijf in bed', score:5},
      ]},
      {id:'v3', tekst:'Sectie 3 — Tillen', type:'keuze', opties:[
        {label:'Ik kan zware dingen tillen zonder extra pijn', score:0},
        {label:'Ik kan zware dingen tillen maar dit veroorzaakt extra pijn', score:1},
        {label:'Pijn verhindert me zware dingen op te tillen maar het lukt als ze goed geplaatst zijn', score:2},
        {label:'Pijn verhindert me zware dingen op te tillen maar lichte tot gemiddelde dingen gaan', score:3},
        {label:'Ik kan enkel heel lichte dingen tillen', score:4},
        {label:'Ik kan niets tillen of dragen', score:5},
      ]},
      {id:'v4', tekst:'Sectie 4 — Lezen', type:'keuze', opties:[
        {label:'Ik kan zoveel lezen als ik wil zonder nekpijn', score:0},
        {label:'Ik kan zoveel lezen als ik wil maar heb een lichte nekpijn', score:1},
        {label:'Ik kan zoveel lezen als ik wil maar heb matige nekpijn', score:2},
        {label:'Vanwege matige nekpijn kan ik niet zoveel lezen als ik wil', score:3},
        {label:'Vanwege ernstige nekpijn kan ik nauwelijks lezen', score:4},
        {label:'Ik kan helemaal niet lezen', score:5},
      ]},
      {id:'v5', tekst:'Sectie 5 — Hoofdpijn', type:'keuze', opties:[
        {label:'Ik heb helemaal geen hoofdpijn', score:0},
        {label:'Ik heb lichte hoofdpijn die niet zo vaak voorkomt', score:1},
        {label:'Ik heb matige hoofdpijn die niet zo vaak voorkomt', score:2},
        {label:'Ik heb matige hoofdpijn die regelmatig voorkomt', score:3},
        {label:'Ik heb ernstige hoofdpijn die regelmatig voorkomt', score:4},
        {label:'Ik heb bijna altijd hoofdpijn', score:5},
      ]},
      {id:'v6', tekst:'Sectie 6 — Concentratie', type:'keuze', opties:[
        {label:'Ik kan mij volledig concentreren als ik wil, zonder moeite', score:0},
        {label:'Ik kan mij volledig concentreren als ik wil, maar met een beetje moeite', score:1},
        {label:'Ik ondervind een redelijke mate van moeite bij concentratie als ik wil', score:2},
        {label:'Ik ondervind veel moeite bij concentratie als ik wil', score:3},
        {label:'Ik ondervind heel veel moeite bij concentratie als ik wil', score:4},
        {label:'Ik kan mij helemaal niet concentreren', score:5},
      ]},
      {id:'v7', tekst:'Sectie 7 — Werk', type:'keuze', opties:[
        {label:'Ik kan zoveel werken als ik wil', score:0},
        {label:'Ik kan alleen mijn gewone werk doen maar niets meer', score:1},
        {label:'Ik kan de meeste van mijn gewone taken uitvoeren maar niets meer', score:2},
        {label:'Ik kan mijn gewone werk niet doen', score:3},
        {label:'Ik kan nauwelijks werken', score:4},
        {label:'Ik kan helemaal niet werken', score:5},
      ]},
      {id:'v8', tekst:'Sectie 8 — Autorijden', type:'keuze', opties:[
        {label:'Ik kan autorijden zonder nekpijn', score:0},
        {label:'Ik kan zoveel autorijden als ik wil maar met lichte nekpijn', score:1},
        {label:'Ik kan zoveel autorijden als ik wil maar met matige nekpijn', score:2},
        {label:'Ik kan niet zoveel autorijden als ik wil vanwege matige nekpijn', score:3},
        {label:'Ik kan nauwelijks autorijden vanwege ernstige nekpijn', score:4},
        {label:'Ik kan helemaal niet autorijden', score:5},
      ]},
      {id:'v9', tekst:'Sectie 9 — Slapen', type:'keuze', opties:[
        {label:'Ik heb geen slaapproblemen', score:0},
        {label:'Mijn slaap is een beetje verstoord (minder dan 1u slaapverlies)', score:1},
        {label:'Mijn slaap is licht verstoord (1–2u slaapverlies)', score:2},
        {label:'Mijn slaap is matig verstoord (2–3u slaapverlies)', score:3},
        {label:'Mijn slaap is sterk verstoord (3–5u slaapverlies)', score:4},
        {label:'Mijn slaap is volledig verstoord (5–7u slaapverlies)', score:5},
      ]},
      {id:'v10', tekst:'Sectie 10 — Ontspanning', type:'keuze', opties:[
        {label:'Ik kan mijn hobby\'s en ontspanning beoefenen zonder nekpijn', score:0},
        {label:'Ik kan mijn hobby\'s en ontspanning beoefenen maar met wat nekpijn', score:1},
        {label:'Ik kan de meeste van mijn hobby\'s beoefenen maar niet allemaal vanwege nekpijn', score:2},
        {label:'Ik kan slechts een paar van mijn hobby\'s beoefenen vanwege nekpijn', score:3},
        {label:'Ik kan nauwelijks enige hobby of ontspanning beoefenen vanwege nekpijn', score:4},
        {label:'Ik kan geen hobby of ontspanning beoefenen', score:5},
      ]},
    ]
  },
  'faam': {
    name: 'FAAM',
    full: 'Foot and Ankle Ability Measure',
    protocol: 'enkel',
    max: 100,
    rts: '≥ 90% sport-subscore',
    intro: 'Kruis aan in hoeverre u de volgende activiteiten kunt uitvoeren vanwege uw voet en enkel. Beoordeel elke activiteit op hoe moeilijk u die vindt.',
    vragen: [
      {id:'v1', tekst:'Staan', type:'keuze', opties:[{label:'Geen moeite',score:4},{label:'Kleine moeite',score:3},{label:'Matige moeite',score:2},{label:'Grote moeite',score:1},{label:'Niet mogelijk',score:0}]},
      {id:'v2', tekst:'Lopen op vlakke ondergrond', type:'keuze', opties:[{label:'Geen moeite',score:4},{label:'Kleine moeite',score:3},{label:'Matige moeite',score:2},{label:'Grote moeite',score:1},{label:'Niet mogelijk',score:0}]},
      {id:'v3', tekst:'Lopen op oneffen terrein', type:'keuze', opties:[{label:'Geen moeite',score:4},{label:'Kleine moeite',score:3},{label:'Matige moeite',score:2},{label:'Grote moeite',score:1},{label:'Niet mogelijk',score:0}]},
      {id:'v4', tekst:'Traplopen naar boven', type:'keuze', opties:[{label:'Geen moeite',score:4},{label:'Kleine moeite',score:3},{label:'Matige moeite',score:2},{label:'Grote moeite',score:1},{label:'Niet mogelijk',score:0}]},
      {id:'v5', tekst:'Traplopen naar beneden', type:'keuze', opties:[{label:'Geen moeite',score:4},{label:'Kleine moeite',score:3},{label:'Matige moeite',score:2},{label:'Grote moeite',score:1},{label:'Niet mogelijk',score:0}]},
      {id:'v6', tekst:'Lopen op ongelijke ondergrond', type:'keuze', opties:[{label:'Geen moeite',score:4},{label:'Kleine moeite',score:3},{label:'Matige moeite',score:2},{label:'Grote moeite',score:1},{label:'Niet mogelijk',score:0}]},
      {id:'v7', tekst:'In en uit de auto stappen', type:'keuze', opties:[{label:'Geen moeite',score:4},{label:'Kleine moeite',score:3},{label:'Matige moeite',score:2},{label:'Grote moeite',score:1},{label:'Niet mogelijk',score:0}]},
      {id:'v8', tekst:'Schoenen en sokken aandoen', type:'keuze', opties:[{label:'Geen moeite',score:4},{label:'Kleine moeite',score:3},{label:'Matige moeite',score:2},{label:'Grote moeite',score:1},{label:'Niet mogelijk',score:0}]},
      {id:'v9', tekst:'Hurken', type:'keuze', opties:[{label:'Geen moeite',score:4},{label:'Kleine moeite',score:3},{label:'Matige moeite',score:2},{label:'Grote moeite',score:1},{label:'Niet mogelijk',score:0}]},
      {id:'v10', tekst:'Op de tenen gaan staan', type:'keuze', opties:[{label:'Geen moeite',score:4},{label:'Kleine moeite',score:3},{label:'Matige moeite',score:2},{label:'Grote moeite',score:1},{label:'Niet mogelijk',score:0}]},
      {id:'v11', tekst:'Rechtop staan', type:'keuze', opties:[{label:'Geen moeite',score:4},{label:'Kleine moeite',score:3},{label:'Matige moeite',score:2},{label:'Grote moeite',score:1},{label:'Niet mogelijk',score:0}]},
      {id:'v12', tekst:'Lopen gedurende 5 minuten', type:'keuze', opties:[{label:'Geen moeite',score:4},{label:'Kleine moeite',score:3},{label:'Matige moeite',score:2},{label:'Grote moeite',score:1},{label:'Niet mogelijk',score:0}]},
      {id:'v13', tekst:'Lopen gedurende 10 minuten', type:'keuze', opties:[{label:'Geen moeite',score:4},{label:'Kleine moeite',score:3},{label:'Matige moeite',score:2},{label:'Grote moeite',score:1},{label:'Niet mogelijk',score:0}]},
      {id:'v14', tekst:'Lopen gedurende 15 minuten of meer', type:'keuze', opties:[{label:'Geen moeite',score:4},{label:'Kleine moeite',score:3},{label:'Matige moeite',score:2},{label:'Grote moeite',score:1},{label:'Niet mogelijk',score:0}]},
      {id:'v_sport', tekst:'SPORT — Hardlopen', type:'keuze', sport:true, opties:[{label:'Geen moeite',score:4},{label:'Kleine moeite',score:3},{label:'Matige moeite',score:2},{label:'Grote moeite',score:1},{label:'Niet mogelijk',score:0},{label:'Niet van toepassing',score:null}]},
      {id:'v_sport2', tekst:'SPORT — Springen', type:'keuze', sport:true, opties:[{label:'Geen moeite',score:4},{label:'Kleine moeite',score:3},{label:'Matige moeite',score:2},{label:'Grote moeite',score:1},{label:'Niet mogelijk',score:0},{label:'Niet van toepassing',score:null}]},
      {id:'v_sport3', tekst:'SPORT — Richtingsveranderingen', type:'keuze', sport:true, opties:[{label:'Geen moeite',score:4},{label:'Kleine moeite',score:3},{label:'Matige moeite',score:2},{label:'Grote moeite',score:1},{label:'Niet mogelijk',score:0},{label:'Niet van toepassing',score:null}]},
    ]
  },
  'wosi': {
    name: 'WOSI',
    full: 'Western Ontario Shoulder Instability Index',
    protocol: 'si',
    max: 2100,
    rts: '≤ 420 ptn voor RTS',
    intro: 'Geef voor elke uitspraak aan hoeveel last u de afgelopen week heeft ervaren. Schuif de slider van 0 (geen last) naar 100 (maximale last). Score = som van alle 21 vragen (max 2100); lagere score = minder beperking.',
    vragen: [
      {id:'w1', tekst:'Pijn bij activiteiten boven het hoofd', type:'slider', max:100},
      {id:'w2', tekst:'Pijn door zijdelingse krachten op de schouder (b.v. bij het openen van een deur)', type:'slider', max:100},
      {id:'w3', tekst:'Pijn bij het dragen van een zwaar voorwerp', type:'slider', max:100},
      {id:'w4', tekst:'Pijn of abnormaal gevoel in de schouder tijdens sport of lichamelijke activiteit', type:'slider', max:100},
      {id:'w5', tekst:'Zwaktegevoel in de schouder', type:'slider', max:100},
      {id:'w6', tekst:'Moeite om uw arm boven het hoofd te controleren bij activiteiten', type:'slider', max:100},
      {id:'w7', tekst:'Gevoel van "lossheid" of "uit de kom gaan" in de schouder bij dagelijkse activiteiten', type:'slider', max:100},
      {id:'w8', tekst:'Moeite om aan sport of lichamelijke activiteiten deel te nemen', type:'slider', max:100},
      {id:'w9', tekst:'Moeite om mee te doen aan de sport of activiteit op uw gewenst niveau', type:'slider', max:100},
      {id:'w10', tekst:'Moeite bij het tillen van zware voorwerpen', type:'slider', max:100},
      {id:'w11', tekst:'Stijfheid in de schouder', type:'slider', max:100},
      {id:'w12', tekst:'Problemen met de schouder die uw werk beïnvloeden', type:'slider', max:100},
      {id:'w13', tekst:'Noodzaak om uw schouder te bewaken bij dagelijkse activiteiten', type:'slider', max:100},
      {id:'w14', tekst:'Pijn bij draaien of roteren van de schouder', type:'slider', max:100},
      {id:'w15', tekst:'Zorgen over de schouder bij normale dagelijkse activiteiten', type:'slider', max:100},
      {id:'w16', tekst:'Emotionele toestand beïnvloed door schouderprobleem', type:'slider', max:100},
      {id:'w17', tekst:'Frustratiegevoelens door schouderprobleem', type:'slider', max:100},
      {id:'w18', tekst:'Angst voor instabiliteit of herhaling van luxatie', type:'slider', max:100},
      {id:'w19', tekst:'Verandering van levensstijl door schouderprobleem', type:'slider', max:100},
      {id:'w20', tekst:'Problemen met vrienden/familie door schouderprobleem', type:'slider', max:100},
      {id:'w21', tekst:'Toekomstperspectief — zorgen over schouder op lange termijn', type:'slider', max:100},
    ]
  },
  'prwe': {
    name: 'PRWE',
    full: 'Patient-Rated Wrist Evaluation',
    protocol: 'orif',
    max: 150,
    rts: '≤ 20 (berekend: Deel A + Deel B ÷ 2)',
    intro: 'De PRWE meet pijn en functie van de pols. Schuif elke slider naar de waarde die het best uw afgelopen week beschrijft (0 = geen pijn/geen moeite, 10 = ergste pijn/onmogelijk). PRWE-score = Deel A (som 5 vragen) + Deel B (som 10 vragen ÷ 2) — maximumscore 100.',
    vragen: [
      {id:'pa1', tekst:'DEEL A — PIJN | Hoe erg was uw GEMIDDELDE pijn in de pols de afgelopen week?', type:'slider', max:10},
      {id:'pa2', tekst:'PIJN | Hoe erg was de ERGSTE pijn in uw pols de afgelopen week?', type:'slider', max:10},
      {id:'pa3', tekst:'PIJN | Hoe erg was pijn bij het uitvoeren van een herhalende polsactiviteit?', type:'slider', max:10},
      {id:'pa4', tekst:'PIJN | Hoe erg was pijn bij rust of activiteit waarbij de pols minder bewogen werd?', type:'slider', max:10},
      {id:'pa5', tekst:'PIJN | Hoe erg was pijn bij het dragen van een voorwerp van 5 kg?', type:'slider', max:10},
      {id:'pb1', tekst:'DEEL B — SPECIFIEKE FUNCTIE | Een deur omdraaien met een sleutel', type:'slider', max:10},
      {id:'pb2', tekst:'FUNCTIE | Een mes en vork gebruiken tijdens het eten', type:'slider', max:10},
      {id:'pb3', tekst:'FUNCTIE | Een overhemdknoop dichtmaken', type:'slider', max:10},
      {id:'pb4', tekst:'FUNCTIE | Een zware deur opentrekken', type:'slider', max:10},
      {id:'pb5', tekst:'FUNCTIE | Een pot openmaken', type:'slider', max:10},
      {id:'pb6', tekst:'FUNCTIE | Iets met de hand boven het hoofd vastmaken (bijv. haar)', type:'slider', max:10},
      {id:'pb7', tekst:'GEWONE ACTIVITEITEN | Persoonlijke verzorging (wassen, aankleden)', type:'slider', max:10},
      {id:'pb8', tekst:'GEWONE ACTIVITEITEN | Huishoudelijke taken (poetsen, koken)', type:'slider', max:10},
      {id:'pb9', tekst:'GEWONE ACTIVITEITEN | Werk of beroepsactiviteiten', type:'slider', max:10},
      {id:'pb10', tekst:'GEWONE ACTIVITEITEN | Recreatieve activiteiten of sport', type:'slider', max:10},
    ]
  },

  'bctq': {
    name: 'BCTQ',
    full: 'Boston Carpal Tunnel Questionnaire (SSS + FSS)',
    protocol: 'cts',
    max: 5,
    rts: 'SSS ≤ 1.5 en FSS ≤ 1.5 voor ontslagklaar',
    intro: 'De BCTQ bestaat uit twee delen. Deel 1 (SSS — Symptoom Ernst): hoe ernstig waren uw klachten de afgelopen 2 weken? Deel 2 (FSS — Functionele Status): hoeveel moeite had u met dagelijkse activiteiten? Kies telkens de meest passende optie (1 = geen klachten / geen moeite, 5 = ernstige klachten / onmogelijk).',
    vragen: [
      {id:'sss1', tekst:'DEEL 1 — SYMPTOMEN (SSS) | Hoe erg was de nachtelijke pijn in uw hand/pols de afgelopen 2 weken?', type:'keuze', opties:[
        {label:'Geen nachtelijke pijn', score:1},
        {label:'Milde pijn', score:2},
        {label:'Matige pijn', score:3},
        {label:'Ernstige pijn', score:4},
        {label:'Ondraaglijke pijn', score:5},
      ]},
      {id:'sss2', tekst:'SSS | Hoe vaak werd u de afgelopen 2 weken wakker door pijn in hand/pols?', type:'keuze', opties:[
        {label:'Nooit', score:1},
        {label:'Eenmaal', score:2},
        {label:'2–3 maal', score:3},
        {label:'4–5 maal', score:4},
        {label:'Meer dan 5 maal', score:5},
      ]},
      {id:'sss3', tekst:'SSS | Had u overdag pijn in uw hand/pols de afgelopen 2 weken?', type:'keuze', opties:[
        {label:'Geen pijn overdag', score:1},
        {label:'Milde pijn overdag', score:2},
        {label:'Matige pijn overdag', score:3},
        {label:'Ernstige pijn overdag', score:4},
        {label:'Ondraaglijke pijn overdag', score:5},
      ]},
      {id:'sss4', tekst:'SSS | Hoe lang duurden gemiddeld de pijnaanvallen overdag de afgelopen 2 weken?', type:'keuze', opties:[
        {label:'Geen pijn overdag', score:1},
        {label:'< 10 minuten', score:2},
        {label:'10–60 minuten', score:3},
        {label:'> 60 minuten', score:4},
        {label:'Continue pijn', score:5},
      ]},
      {id:'sss5', tekst:'SSS | Hoe vaak had u gevoelloosheid (doof gevoel) in uw hand de afgelopen 2 weken?', type:'keuze', opties:[
        {label:'Nooit', score:1},
        {label:'Milde gevoelloosheid', score:2},
        {label:'Matige gevoelloosheid', score:3},
        {label:'Ernstige gevoelloosheid', score:4},
        {label:'Continue gevoelloosheid', score:5},
      ]},
      {id:'sss6', tekst:'SSS | Hoe erg waren tintelingen in uw hand de afgelopen 2 weken?', type:'keuze', opties:[
        {label:'Geen tintelingen', score:1},
        {label:'Milde tintelingen', score:2},
        {label:'Matige tintelingen', score:3},
        {label:'Ernstige tintelingen', score:4},
        {label:'Ondraaglijke tintelingen', score:5},
      ]},
      {id:'sss7', tekst:'SSS | Hoe ernstig was de zwakte in uw hand/pols de afgelopen 2 weken?', type:'keuze', opties:[
        {label:'Geen zwakte', score:1},
        {label:'Milde zwakte', score:2},
        {label:'Matige zwakte', score:3},
        {label:'Ernstige zwakte', score:4},
        {label:'Extreme zwakte', score:5},
      ]},
      {id:'sss8', tekst:'SSS | Hoe ernstig was het tintelende gevoel in uw hand de afgelopen 2 weken?', type:'keuze', opties:[
        {label:'Geen tinteling', score:1},
        {label:'Milde tinteling', score:2},
        {label:'Matige tinteling', score:3},
        {label:'Ernstige tinteling', score:4},
        {label:'Ondraaglijke tinteling', score:5},
      ]},
      {id:'sss9', tekst:'SSS | Hoe ernstig was gevoelloosheid of tinteling \'s nachts de afgelopen 2 weken?', type:'keuze', opties:[
        {label:'Geen nachtelijke symptomen', score:1},
        {label:'Milde nachtelijke symptomen', score:2},
        {label:'Matige nachtelijke symptomen', score:3},
        {label:'Ernstige nachtelijke symptomen', score:4},
        {label:'Ondraaglijke nachtelijke symptomen', score:5},
      ]},
      {id:'sss10', tekst:'SSS | Had u moeite met kleine voorwerpen vasthouden (bijv. sleutels, pen)?', type:'keuze', opties:[
        {label:'Geen moeite', score:1},
        {label:'Lichte moeite', score:2},
        {label:'Matige moeite', score:3},
        {label:'Grote moeite', score:4},
        {label:'Onmogelijk', score:5},
      ]},
      {id:'sss11', tekst:'SSS | Had u pijn bij het maken van een vuist of knijpen?', type:'keuze', opties:[
        {label:'Geen pijn', score:1},
        {label:'Milde pijn', score:2},
        {label:'Matige pijn', score:3},
        {label:'Ernstige pijn', score:4},
        {label:'Ondraaglijke pijn', score:5},
      ]},
      {id:'fss1', tekst:'DEEL 2 — FUNCTIONELE STATUS (FSS) | Schrijven', type:'keuze', opties:[
        {label:'Geen moeite', score:1},
        {label:'Lichte moeite', score:2},
        {label:'Matige moeite', score:3},
        {label:'Grote moeite', score:4},
        {label:'Onmogelijk vanwege handsymptomen', score:5},
      ]},
      {id:'fss2', tekst:'FSS | Een knoop dichtmaken', type:'keuze', opties:[
        {label:'Geen moeite', score:1},
        {label:'Lichte moeite', score:2},
        {label:'Matige moeite', score:3},
        {label:'Grote moeite', score:4},
        {label:'Onmogelijk vanwege handsymptomen', score:5},
      ]},
      {id:'fss3', tekst:'FSS | Een boek vasthouden tijdens het lezen', type:'keuze', opties:[
        {label:'Geen moeite', score:1},
        {label:'Lichte moeite', score:2},
        {label:'Matige moeite', score:3},
        {label:'Grote moeite', score:4},
        {label:'Onmogelijk vanwege handsymptomen', score:5},
      ]},
      {id:'fss4', tekst:'FSS | Een telefoon vasthouden tijdens een gesprek', type:'keuze', opties:[
        {label:'Geen moeite', score:1},
        {label:'Lichte moeite', score:2},
        {label:'Matige moeite', score:3},
        {label:'Grote moeite', score:4},
        {label:'Onmogelijk vanwege handsymptomen', score:5},
      ]},
      {id:'fss5', tekst:'FSS | Een pot of bokaal openmaken', type:'keuze', opties:[
        {label:'Geen moeite', score:1},
        {label:'Lichte moeite', score:2},
        {label:'Matige moeite', score:3},
        {label:'Grote moeite', score:4},
        {label:'Onmogelijk vanwege handsymptomen', score:5},
      ]},
      {id:'fss6', tekst:'FSS | Boodschappen doen', type:'keuze', opties:[
        {label:'Geen moeite', score:1},
        {label:'Lichte moeite', score:2},
        {label:'Matige moeite', score:3},
        {label:'Grote moeite', score:4},
        {label:'Onmogelijk vanwege handsymptomen', score:5},
      ]},
      {id:'fss7', tekst:'FSS | Wassen en aankleden', type:'keuze', opties:[
        {label:'Geen moeite', score:1},
        {label:'Lichte moeite', score:2},
        {label:'Matige moeite', score:3},
        {label:'Grote moeite', score:4},
        {label:'Onmogelijk vanwege handsymptomen', score:5},
      ]},
      {id:'fss8', tekst:'FSS | Zware huishoudelijke taken (stofzuigen, vaat doen)', type:'keuze', opties:[
        {label:'Geen moeite', score:1},
        {label:'Lichte moeite', score:2},
        {label:'Matige moeite', score:3},
        {label:'Grote moeite', score:4},
        {label:'Onmogelijk vanwege handsymptomen', score:5},
      ]},
    ]
  }
};


// ── KLINISCHE EVALUATIEFORMULIEREN ──
const EVAL_FORMS = {

  nek: {
    id: 'nek',
    titel: 'Klinisch Onderzoek — Nek & Hoofdpijn',
    regio: 'Cervicaal / Hoofd',
    color: '#60a5fa',
    secties: [
      {
        id: 's_inspectie',
        titel: 'Inspectie',
        velden: [
          {id:'ins_houding', label:'Cervicale houding', type:'keuze3', opties:['Normaal','Forward head posture','Laterale deviatie','Hyperlordose','Kyfose']},
          {id:'ins_schouder', label:'Schoudersymmetrie', type:'keuze3', opties:['Symmetrisch','Links hoger','Rechts hoger','Protractie links','Protractie rechts']},
          {id:'ins_zwelling', label:'Zichtbare zwelling / atrofie', type:'tekst', placeholder:'Lokaliseer indien aanwezig...'},
          {id:'ins_litteken', label:'Littekens / huidafwijkingen', type:'tekst', placeholder:'Beschrijf indien aanwezig...'},
        ]
      },
      {
        id: 's_palpatie',
        titel: 'Palpatie',
        velden: [
          {id:'pal_trap_l', label:'Trapezius links — drukpijn', type:'pn'},
          {id:'pal_trap_r', label:'Trapezius rechts — drukpijn', type:'pn'},
          {id:'pal_scm_l', label:'SCM links — drukpijn', type:'pn'},
          {id:'pal_scm_r', label:'SCM rechts — drukpijn', type:'pn'},
          {id:'pal_lev_l', label:'Levator scapulae links', type:'pn'},
          {id:'pal_lev_r', label:'Levator scapulae rechts', type:'pn'},
          {id:'pal_facet', label:'Facetgewrichten (C2–C7)', type:'tekst', placeholder:'Niveau en zijde van drukpijn...'},
          {id:'pal_oc', label:'Occiput / suboccipitale spieren', type:'pn'},
          {id:'pal_warmte', label:'Lokale warmte', type:'pn'},
          {id:'pal_spasme', label:'Spierdefense / spasme', type:'tekst', placeholder:'Lokaliseer...'},
        ]
      },
      {
        id: 's_rom',
        titel: 'Actieve ROM (graden)',
        velden: [
          {id:'rom_flex', label:'Flexie', type:'rom', norm:'0–50°'},
          {id:'rom_ext', label:'Extensie', type:'rom', norm:'0–60°'},
          {id:'rom_lat_l', label:'Lateraalflexie links', type:'rom', norm:'0–45°'},
          {id:'rom_lat_r', label:'Lateraalflexie rechts', type:'rom', norm:'0–45°'},
          {id:'rom_rot_l', label:'Rotatie links', type:'rom', norm:'0–70°'},
          {id:'rom_rot_r', label:'Rotatie rechts', type:'rom', norm:'0–70°'},
          {id:'rom_pijn', label:'Pijnlijk traject / eindgevoel', type:'tekst', placeholder:'Beschrijf pijnboog, eindgevoel, kapsel/leguard...'},
        ]
      },
      {
        id: 's_passief',
        titel: 'Passieve ROM & Segmentale Mobiliteit',
        velden: [
          {id:'pas_ov_flex', label:'Overpressie flexie', type:'pn'},
          {id:'pas_ov_ext', label:'Overpressie extensie', type:'pn'},
          {id:'pas_ov_rot_l', label:'Overpressie rotatie links', type:'pn'},
          {id:'pas_ov_rot_r', label:'Overpressie rotatie rechts', type:'pn'},
          {id:'pas_segm', label:'Segmentale mobiliteitstest', type:'tekst', placeholder:'Hypomobiel/hypermobiel niveau...'},
          {id:'pas_pp', label:'Passief PA-gliding (C2–C7)', type:'tekst', placeholder:'Pijnlijk niveau, weerstand...'},
        ]
      },
      {
        id: 's_weerstand',
        titel: 'Weerstandstesten (MRC 0–5)',
        velden: [
          {id:'w_flex', label:'Flexie (DNF)', type:'mrc'},
          {id:'w_ext', label:'Extensie', type:'mrc'},
          {id:'w_lat_l', label:'Lateraalflexie links', type:'mrc'},
          {id:'w_lat_r', label:'Lateraalflexie rechts', type:'mrc'},
          {id:'w_rot_l', label:'Rotatie links', type:'mrc'},
          {id:'w_rot_r', label:'Rotatie rechts', type:'mrc'},
          {id:'w_ccft', label:'CCFT (Cranio-cervicale flexietest)', type:'tekst', placeholder:'mmHg niveau / compensatie aanwezig...'},
        ]
      },
      {
        id: 's_ortho',
        titel: 'Specifieke Orthopedische Testen',
        velden: [
          {id:'t_spurling', label:'Spurling test (radiculopathie)', type:'pn_bevinding', info:'Compressie + lateraalflexie + extensie ipsilateraal'},
          {id:'t_dist', label:'Cervicale distractietest', type:'pn_bevinding', info:'Tractie cervicaal — vermindering uitstraling = positief'},
          {id:'t_valsalva', label:'Valsalva manoeuvre', type:'pn_bevinding', info:'Positief bij drukverhoging = intrathecale pathologie'},
          {id:'t_adson', label:'Adson test (TOS)', type:'pn_bevinding', info:'Pols palperen, rotatie + extensie hoofd, inspiratie'},
          {id:'t_wright', label:'Wright test (TOS)', type:'pn_bevinding', info:'Abductie + exorotatie arm, pols palperen'},
          {id:'t_lhermitte', label:'Lhermitte teken (myelopathie)', type:'pn_bevinding', info:'Elektrisch gevoel bij flexie cervicaal'},
          {id:'t_hoffmann', label:'Hoffmann reflex', type:'pn_bevinding', info:'Nagel middenvinger aanslaan — reflexieve duim-wijsvinger flexie'},
          {id:'t_flacc', label:'Flexion-rotation test (CGH)', type:'pn_bevinding', info:'Passieve rotatie in volledige flexie — < 32° = positief CGH'},
          {id:'t_upper_flex', label:'Upper limb tension test ULTT1 (medianus)', type:'pn_bevinding', info:'Schouderabductie, elleboogextensie, polsextensie, cervicale lateraalflexie'},
          {id:'t_ultt2', label:'ULTT2 (radialis)', type:'pn_bevinding', info:'Schouderdepressie, elleboogextensie, pronatie, polsflexie'},
          {id:'t_ultt3', label:'ULTT3 (ulnaris)', type:'pn_bevinding', info:'Elleboogflexie, polsextensie, schouderabductie'},
        ]
      },
      {
        id: 's_neuro',
        titel: 'Neurologisch Onderzoek',
        velden: [
          {id:'n_c5_sens', label:'Sensibiliteit C5 (laterale bovenarm)', type:'pn'},
          {id:'n_c6_sens', label:'Sensibiliteit C6 (duim/wijsvinger)', type:'pn'},
          {id:'n_c7_sens', label:'Sensibiliteit C7 (middenvinger)', type:'pn'},
          {id:'n_c8_sens', label:'Sensibiliteit C8 (ringvinger/pink)', type:'pn'},
          {id:'n_th1_sens', label:'Sensibiliteit Th1 (mediale bovenarm)', type:'pn'},
          {id:'n_biceps', label:'Bicepsreflex (C5–C6)', type:'reflex'},
          {id:'n_brachrad', label:'Brachioradialisreflex (C6)', type:'reflex'},
          {id:'n_triceps', label:'Tricepsreflex (C7)', type:'reflex'},
          {id:'n_c5_kracht', label:'Kracht C5 — deltoid / elleboogflexie', type:'mrc'},
          {id:'n_c6_kracht', label:'Kracht C6 — polsextensie', type:'mrc'},
          {id:'n_c7_kracht', label:'Kracht C7 — elleboogextensie / polsflexie', type:'mrc'},
          {id:'n_c8_kracht', label:'Kracht C8 — vingerflexie', type:'mrc'},
          {id:'n_th1_kracht', label:'Kracht Th1 — vingerabductie', type:'mrc'},
        ]
      },
      {
        id: 's_conclusie',
        titel: 'Conclusie & Behandelplan',
        velden: [
          {id:'c_diagnose', label:'Werkhypothese / diagnose', type:'tekst_groot', placeholder:'Klinische diagnose op basis van onderzoek...'},
          {id:'c_niveau', label:'Betrokken niveau(s)', type:'tekst', placeholder:'bijv. C5-C6 links, facetgewricht C3-C4...'},
          {id:'c_bijkomend', label:'Bijkomende bevindingen', type:'tekst', placeholder:'bijv. TrP trapezius, scapulaire dyskinese...'},
          {id:'c_behandeling', label:'Behandelplan', type:'tekst_groot', placeholder:'Manuele therapie, oefentherapie, educatie...'},
          {id:'c_herevaluatie', label:'Herevaluatie gepland', type:'tekst', placeholder:'Datum / criteria...'},
          {id:'c_doorverwijzing', label:'Doorverwijzing', type:'tekst', placeholder:'Neuroloog / orthopedie / huisarts / geen...'},
        ]
      }
    ]
  },

  lage_rug: {
    id: 'lage_rug',
    titel: 'Klinisch Onderzoek — Lage Rug & Bekken',
    regio: 'Lumbaal / Sacraal / Bekken',
    color: '#34d399',
    secties: [
      {
        id: 's_inspectie',
        titel: 'Inspectie',
        velden: [
          {id:'ins_lordose', label:'Lumbale lordose', type:'keuze3', opties:['Normaal','Hyperlordose','Afgevlakt','Kyfose']},
          {id:'ins_skoliose', label:'Scoliose / deviatie', type:'keuze3', opties:['Geen','Links convex','Rechts convex','Functioneel (verdwijnt bij buiging)']},
          {id:'ins_bekken', label:'Bekkenstand', type:'keuze3', opties:['Symmetrisch','Links hoger','Rechts hoger','Anterieure kanteling','Posterieure kanteling']},
          {id:'ins_spier', label:'Spieratrofie / asymmetrie', type:'tekst', placeholder:'Lokaliseer indien aanwezig...'},
          {id:'ins_stap', label:'Looppatroon observatie', type:'tekst', placeholder:'Antalgisch, Trendelenburg, beenlengteverschil...'},
        ]
      },
      {
        id: 's_palpatie',
        titel: 'Palpatie',
        velden: [
          {id:'pal_proc_sp', label:'Processus spinosi L1–S1', type:'tekst', placeholder:'Drukpijn op niveau(s)...'},
          {id:'pal_para_l', label:'Paravertebrale musculatuur links', type:'pn'},
          {id:'pal_para_r', label:'Paravertebrale musculatuur rechts', type:'pn'},
          {id:'pal_ql_l', label:'M. quadratus lumborum links', type:'pn'},
          {id:'pal_ql_r', label:'M. quadratus lumborum rechts', type:'pn'},
          {id:'pal_sij', label:'SI-gewricht (PSIS drukpijn)', type:'tekst', placeholder:'Links / rechts / bilateraal...'},
          {id:'pal_ischias', label:'N. ischiadicus (piriformis regio)', type:'pn'},
          {id:'pal_warmte', label:'Lokale warmte lumbaal', type:'pn'},
        ]
      },
      {
        id: 's_rom',
        titel: 'Actieve ROM (graden / vingergrond afstand)',
        velden: [
          {id:'rom_flex', label:'Flexie (vingergrond-afstand)', type:'tekst', placeholder:'cm / graden...'},
          {id:'rom_ext', label:'Extensie', type:'rom', norm:'0–25°'},
          {id:'rom_lat_l', label:'Lateraalflexie links', type:'rom', norm:'0–25°'},
          {id:'rom_lat_r', label:'Lateraalflexie rechts', type:'rom', norm:'0–25°'},
          {id:'rom_rot_l', label:'Rotatie links (zittend)', type:'rom', norm:'0–30°'},
          {id:'rom_rot_r', label:'Rotatie rechts (zittend)', type:'rom', norm:'0–30°'},
          {id:'rom_schobers', label:'Schobers test', type:'tekst', placeholder:'Norm: > 5cm toename bij flexie...'},
          {id:'rom_pijn', label:'Pijnlijk traject / richting voorkeur', type:'tekst', placeholder:'Extensievoorkeur / flexievoorkeur (McKenzie)...'},
        ]
      },
      {
        id: 's_weerstand',
        titel: 'Weerstandstesten (MRC 0–5)',
        velden: [
          {id:'w_flex', label:'Romp flexie (rectus abdominis)', type:'mrc'},
          {id:'w_ext', label:'Romp extensie (erector spinae)', type:'mrc'},
          {id:'w_lat_l', label:'Lateraalflexie links', type:'mrc'},
          {id:'w_lat_r', label:'Lateraalflexie rechts', type:'mrc'},
          {id:'w_glut_max_l', label:'Gluteus maximus links', type:'mrc'},
          {id:'w_glut_max_r', label:'Gluteus maximus rechts', type:'mrc'},
          {id:'w_glut_med_l', label:'Gluteus medius links', type:'mrc'},
          {id:'w_glut_med_r', label:'Gluteus medius rechts', type:'mrc'},
          {id:'w_core', label:'Core stabiliteit (plank / holow body)', type:'tekst', placeholder:'Seconden / compensatie...'},
        ]
      },
      {
        id: 's_ortho',
        titel: 'Specifieke Orthopedische Testen',
        velden: [
          {id:'t_slr', label:'Straight Leg Raise (SLR)', type:'pn_graden', info:'Norm: pijnvrij > 70°. Positief bij uitstraling < 60°'},
          {id:'t_slr_l', label:'SLR links — hoek', type:'tekst', placeholder:'Graad bij pijnopwekking + karakter...'},
          {id:'t_slr_r', label:'SLR rechts — hoek', type:'tekst', placeholder:'Graad bij pijnopwekking + karakter...'},
          {id:'t_crossed', label:'Gekruiste SLR (Fajersztajn)', type:'pn_bevinding', info:'Uitstraling contralateraal been = ernstige discushernia'},
          {id:'t_slump', label:'Slump test', type:'pn_bevinding', info:'Positief bij reproductie uitstraling + verbetering bij cervicale extensie'},
          {id:'t_femoral', label:'Femoral nerve stretch test', type:'pn_bevinding', info:'Buiklig, knie gebogen 90° + heupextensie = L2-L3-L4'},
          {id:'t_prone_inst', label:'Prone instability test', type:'pn_bevinding', info:'Positief = pijn verbetert bij activatie extensoren'},
          {id:'t_fabere', label:'FABERE / Patrick (SI-gewricht)', type:'pn_bevinding', info:'Heup in FABERE, druk op knie = SI-pijn ipsilateraal'},
          {id:'t_fadir', label:'FADIR test (heup)', type:'pn_bevinding', info:'Flexie-Adductie-Interne rotatie = heupprobleem'},
          {id:'t_sacral_thrust', label:'Sacral thrust test (SI)', type:'pn_bevinding', info:'Druk op sacrum in buiklig = SI-provocatie'},
          {id:'t_compression', label:'SI-compressietest', type:'pn_bevinding', info:'Druk op beide SIAS naar mediaal in zijlig'},
          {id:'t_distraction', label:'SI-distractietest', type:'pn_bevinding', info:'Druk op SIAS van elkaar in ruglig'},
          {id:'t_gaenslen', label:'Gaenslen test', type:'pn_bevinding', info:'Hyperextensie heup in zijkant tafel = SI-stress'},
          {id:'t_ober', label:'Ober test (ITB)', type:'pn_bevinding', info:'Zijlig, heup in abductie-extensie laten zakken'},
          {id:'t_thomaas', label:'Thomas test (heupflexor contractuur)', type:'pn_bevinding', info:'Ruglig, knie naar borst, andere been valt niet plat = positief'},
        ]
      },
      {
        id: 's_neuro',
        titel: 'Neurologisch Onderzoek',
        velden: [
          {id:'n_l3_sens', label:'Sensibiliteit L3 (mediaal bovenbeen)', type:'pn'},
          {id:'n_l4_sens', label:'Sensibiliteit L4 (mediaal onderbeen)', type:'pn'},
          {id:'n_l5_sens', label:'Sensibiliteit L5 (dorsum voet / grote teen)', type:'pn'},
          {id:'n_s1_sens', label:'Sensibiliteit S1 (laterale voetrand / kleine teen)', type:'pn'},
          {id:'n_s2_sens', label:'Sensibiliteit S2–S4 (perineaal / zadel)', type:'pn'},
          {id:'n_patella', label:'Patellareflex (L3–L4)', type:'reflex'},
          {id:'n_achilles', label:'Achillesreflex (S1)', type:'reflex'},
          {id:'n_l4_kracht', label:'Kracht L4 — voetdorsaalflexie (tibialis anterior)', type:'mrc'},
          {id:'n_l5_kracht', label:'Kracht L5 — grote teen extensie (EHL)', type:'mrc'},
          {id:'n_s1_kracht', label:'Kracht S1 — plantairflexie (gastrocnemius)', type:'mrc'},
          {id:'n_blaas', label:'Blaas-/darmfunctie (cauda equina screening)', type:'pn'},
          {id:'n_babinski', label:'Babinski reflex', type:'pn_bevinding', info:'Positief = UMN lesie'},
        ]
      },
      {
        id: 's_conclusie',
        titel: 'Conclusie & Behandelplan',
        velden: [
          {id:'c_diagnose', label:'Werkhypothese / diagnose', type:'tekst_groot', placeholder:'bijv. LRS L5-S1 links, NSLBP, SIG disfunctie...'},
          {id:'c_classificatie', label:'Classificatie (indien van toepassing)', type:'tekst', placeholder:'bijv. McKenzie: extensieprobleem / lateraal syndroom...'},
          {id:'c_bijkomend', label:'Bijkomende bevindingen', type:'tekst', placeholder:'bijv. heupflexorverkorting, SI-disfunctie, FABERE positief...'},
          {id:'c_behandeling', label:'Behandelplan', type:'tekst_groot', placeholder:'Manuele therapie, McKenzie, motor control, EDU...'},
          {id:'c_herevaluatie', label:'Herevaluatie gepland', type:'tekst', placeholder:'Datum / criteria...'},
          {id:'c_doorverwijzing', label:'Doorverwijzing / rode vlaggen actie', type:'tekst', placeholder:'Neuroloog / orthopedie / huisarts / geen...'},
        ]
      }
    ]
  },

  knie: {
    id: 'knie',
    titel: 'Klinisch Onderzoek — Knie',
    regio: 'Kniegewricht',
    color: '#22d3ee',
    secties: [
      {
        id: 's_inspectie',
        titel: 'Inspectie',
        velden: [
          {id:'ins_axes', label:'Asafwijking', type:'keuze3', opties:['Normaal','Varus (O-benen)','Valgus (X-benen)']},
          {id:'ins_zwelling', label:'Zwelling / effusie', type:'keuze3', opties:['Geen','Lichte effusie','Matige effusie','Ernstige effusie','Extraarticulair']},
          {id:'ins_atrofie', label:'Quadricepsatrofie', type:'keuze3', opties:['Geen','Licht','Matig — omtrekmeting links/rechts']},
          {id:'ins_omtrek', label:'Omtrekmeting (10 cm boven knieschijf)', type:'tekst', placeholder:'Links: ... cm / Rechts: ... cm'},
          {id:'ins_patella', label:'Patella positie', type:'keuze3', opties:['Normaal','Alta','Baja','Laterale tilt','Mediaal verschoven']},
          {id:'ins_litteken', label:'Littekens / huidafwijkingen', type:'tekst', placeholder:'Beschrijf indien aanwezig...'},
        ]
      },
      {
        id: 's_palpatie',
        titel: 'Palpatie',
        velden: [
          {id:'pal_jl_med', label:'Mediale gewrichtsspleet', type:'pn'},
          {id:'pal_jl_lat', label:'Laterale gewrichtsspleet', type:'pn'},
          {id:'pal_mcl', label:'MCL (mediaal collateraal ligament)', type:'pn'},
          {id:'pal_lcl', label:'LCL (lateraal collateraal ligament)', type:'pn'},
          {id:'pal_patella', label:'Patella — randen / onderpool', type:'pn'},
          {id:'pal_patellapees', label:'Patellapees (apex — tibiatuberositas)', type:'pn'},
          {id:'pal_quad', label:'Quadricepspees', type:'pn'},
          {id:'pal_hoffa', label:'Hoffa vetlichaam (infrapatellair)', type:'pn'},
          {id:'pal_pes', label:'Pes anserinus', type:'pn'},
          {id:'pal_popliteus', label:'Popliteale fossa', type:'pn'},
          {id:'pal_itb', label:'IT-band (Gerdy tubercle)', type:'pn'},
          {id:'pal_effusie_patella', label:'Patelladans (effusie)', type:'pn_bevinding', info:'Positief bij > 10ml intraarticuair vocht'},
          {id:'pal_bulge', label:'Bulge sign (kleine effusie)', type:'pn_bevinding', info:'Veeg mediaal, druk lateraal — golf mediaal = positief'},
        ]
      },
      {
        id: 's_rom',
        titel: 'Actieve & Passieve ROM (graden)',
        velden: [
          {id:'rom_ext_act', label:'Actieve extensie', type:'rom', norm:'0°'},
          {id:'rom_flex_act', label:'Actieve flexie', type:'rom', norm:'135–140°'},
          {id:'rom_ext_pas', label:'Passieve extensie / hyperextensie', type:'rom', norm:'0–5°'},
          {id:'rom_flex_pas', label:'Passieve flexie', type:'rom', norm:'140–150°'},
          {id:'rom_ext_lag', label:'Extensielag (onvermogen actief te strekken)', type:'tekst', placeholder:'Graden extensielag indien aanwezig...'},
          {id:'rom_pijn', label:'Pijnlijk traject', type:'tekst', placeholder:'Arc of pain, eindgevoel, kapsel/leguard...'},
        ]
      },
      {
        id: 's_weerstand',
        titel: 'Weerstandstesten (MRC 0–5)',
        velden: [
          {id:'w_quad', label:'Quadriceps (extensie)', type:'mrc'},
          {id:'w_ham', label:'Hamstrings (flexie)', type:'mrc'},
          {id:'w_glut_med', label:'Gluteus medius (heupabductie)', type:'mrc'},
          {id:'w_gastroc', label:'Gastrocnemius / kuit', type:'mrc'},
          {id:'w_lsi_quad', label:'LSI Quadriceps (indien gemeten)', type:'tekst', placeholder:'bijv. 82% bij isokinetisch / 5RM test...'},
          {id:'w_lsi_ham', label:'LSI Hamstrings (indien gemeten)', type:'tekst', placeholder:'...'},
        ]
      },
      {
        id: 's_ortho',
        titel: 'Specifieke Orthopedische Testen',
        velden: [
          {id:'t_lachmans', label:'Lachman test (VKB)', type:'pn_bevinding', info:'Knie 20–30° flexie, anterieure schuif tibia. Eindgevoel: hard/zacht'},
          {id:'t_ant_drawer', label:'Anterior drawer test (VKB)', type:'pn_bevinding', info:'90° flexie, anterieure translatie tibia'},
          {id:'t_pivot', label:'Pivot shift test (VKB rotatie-instabiliteit)', type:'pn_bevinding', info:'Valgus + interne rotatie + extensie → subluxatie'},
          {id:'t_post_drawer', label:'Posterior drawer test (AKB)', type:'pn_bevinding', info:'90° flexie, posterieure translatie tibia'},
          {id:'t_valgus_stress', label:'Valgus stress test MCL (0° en 30°)', type:'pn_bevinding', info:'Bij 30° = geïsoleerd MCL, bij 0° = ook AKB/ACL'},
          {id:'t_varus_stress', label:'Varus stress test LCL (0° en 30°)', type:'pn_bevinding', info:'Opening lateraal = LCL insufficiëntie'},
          {id:'t_mcmurray', label:'McMurray test (meniscus)', type:'pn_bevinding', info:'Rotatie + extensie vanuit flexie. Klik/pijn = positief'},
          {id:'t_apley', label:'Apley grind test (meniscus)', type:'pn_bevinding', info:'Buiklig 90° flexie, compressie + rotatie'},
          {id:'t_thessaly', label:'Thessaly test (meniscus)', type:'pn_bevinding', info:'Éénbeenstand 20° knieflexie, rotatie van het lichaam'},
          {id:'t_clarke', label:'Clarke test / patellar grind (PFPS)', type:'pn_bevinding', info:'Druk op patella, quad aanspannen'},
          {id:'t_slds', label:'Single leg decline squat SLDS (patellapees)', type:'pn_bevinding', info:'25° helling, 60° flexie. Pijn apex = positief'},
          {id:'t_ober', label:'Ober test (IT-band)', type:'pn_bevinding', info:'Zijlig, abductie-extensie heup, laat been zakken'},
          {id:'t_noble', label:'Noble compression test (ITBS)', type:'pn_bevinding', info:'Druk 3 cm boven laterale epicondyl bij 30° flexie'},
          {id:'t_dial', label:'Dial test posterolateraal (30° en 90°)', type:'pn_bevinding', info:'Externe tibia rotatie in buiklig. > 10° asymmetrie = PLC'},
          {id:'t_squat_line', label:'Single leg squat — knietracking', type:'pn_bevinding', info:'Valgus neiging, pijn, compensatie observeren'},
        ]
      },
      {
        id: 's_neuro',
        titel: 'Neurologisch Onderzoek',
        velden: [
          {id:'n_sens_med', label:'Sensibiliteit mediaal onderbeen (n. saphenus)', type:'pn'},
          {id:'n_sens_lat', label:'Sensibiliteit lateraal onderbeen (n. peroneus)', type:'pn'},
          {id:'n_sens_dors', label:'Sensibiliteit dorsum voet', type:'pn'},
          {id:'n_patella', label:'Patellareflex (L3–L4)', type:'reflex'},
          {id:'n_achilles', label:'Achillesreflex (S1)', type:'reflex'},
          {id:'n_quad_kracht', label:'Kracht quadriceps (L3–L4)', type:'mrc'},
          {id:'n_dors_kracht', label:'Kracht dorsaalflexie (L4–L5)', type:'mrc'},
        ]
      },
      {
        id: 's_conclusie',
        titel: 'Conclusie & Behandelplan',
        velden: [
          {id:'c_diagnose', label:'Werkhypothese / diagnose', type:'tekst_groot', placeholder:'bijv. VKB-ruptuur links, mediale meniscuslaesie, PFPS rechts...'},
          {id:'c_structuren', label:'Betrokken structuren', type:'tekst', placeholder:'bijv. VKB + mediale meniscus (terrible triad)...'},
          {id:'c_stadium', label:'Stadium / graad', type:'tekst', placeholder:'bijv. graad II MCL, reactieve tendinopathie...'},
          {id:'c_behandeling', label:'Behandelplan', type:'tekst_groot', placeholder:'Conservatief / chirurgisch overleg / protocol...'},
          {id:'c_herevaluatie', label:'Herevaluatie gepland', type:'tekst', placeholder:'Datum / criteria...'},
          {id:'c_doorverwijzing', label:'Doorverwijzing', type:'tekst', placeholder:'Orthopedie / revalidatiearts / geen...'},
        ]
      }
    ]
  },

  schouder: {
    id: 'schouder',
    titel: 'Klinisch Onderzoek — Schouder',
    regio: 'Schoudergewricht / RC / AC-gewricht',
    color: '#f43f5e',
    secties: [
      {
        id: 's_inspectie',
        titel: 'Inspectie',
        velden: [
          {id:'ins_sym', label:'Schoudersymmetrie', type:'keuze3', opties:['Symmetrisch','Links hoger','Rechts hoger']},
          {id:'ins_scap', label:'Scapulapositie / winging', type:'keuze3', opties:['Normaal','Mediale winging','Laterale winging','Verhoogd','Verlaagd','Protractie']},
          {id:'ins_atrofie', label:'Spieratrofie', type:'tekst', placeholder:'Supra/infraspinatus, deltoid, trapezius...'},
          {id:'ins_zwelling', label:'Zwelling / deformiteit', type:'tekst', placeholder:'AC-gewricht, anterieur, posterolateraal...'},
          {id:'ins_litteken', label:'Littekens', type:'tekst', placeholder:'Anterieur / lateraal / posterieur...'},
        ]
      },
      {
        id: 's_palpatie',
        titel: 'Palpatie',
        velden: [
          {id:'pal_ac', label:'AC-gewricht', type:'pn'},
          {id:'pal_sc', label:'SC-gewricht', type:'pn'},
          {id:'pal_acr', label:'Anterieur acromion / subacromiale ruimte', type:'pn'},
          {id:'pal_gc', label:'Anterieur GH-gewricht', type:'pn'},
          {id:'pal_supraspinatus', label:'Supraspinatus insertie (G. tubercule)', type:'pn'},
          {id:'pal_infraspinatus', label:'Infraspinatus insertie', type:'pn'},
          {id:'pal_subscap', label:'Subscapularis (anterieur bij rotatie)', type:'pn'},
          {id:'pal_bicep', label:'Lange bicepspees (sulcus bicipitalis)', type:'pn'},
          {id:'pal_corac', label:'Coracoid process', type:'pn'},
          {id:'pal_trap', label:'Trapezius / levator scapulae', type:'pn'},
          {id:'pal_warmte', label:'Lokale warmte', type:'pn'},
        ]
      },
      {
        id: 's_rom',
        titel: 'Actieve & Passieve ROM (graden)',
        velden: [
          {id:'rom_flex_act', label:'Actieve flexie', type:'rom', norm:'0–180°'},
          {id:'rom_abd_act', label:'Actieve abductie', type:'rom', norm:'0–180°'},
          {id:'rom_er_act', label:'Actieve exorotatie (0°)', type:'rom', norm:'0–60°'},
          {id:'rom_ir_act', label:'Actieve endorotatie (achter rug)', type:'tekst', placeholder:'Niveau ruggenwervels, bijv. Th10...'},
          {id:'rom_flex_pas', label:'Passieve flexie', type:'rom', norm:'0–180°'},
          {id:'rom_abd_pas', label:'Passieve abductie', type:'rom', norm:'0–180°'},
          {id:'rom_er_pas', label:'Passieve exorotatie (90° abd)', type:'rom', norm:'0–90°'},
          {id:'rom_ir_pas', label:'Passieve endorotatie (90° abd)', type:'rom', norm:'0–70°'},
          {id:'rom_arc', label:'Painful arc (60°–120°)', type:'pn'},
          {id:'rom_scap', label:'Scapulaire ritme / dyskinese', type:'keuze3', opties:['Normaal','Type I (inferior winging)','Type II (superior tilt verstoord)','Type III (mediale winging)']},
        ]
      },
      {
        id: 's_weerstand',
        titel: 'Weerstandstesten (MRC 0–5)',
        velden: [
          {id:'w_supraspinatus', label:'Supraspinatus (abductie 90° / empty can)', type:'mrc'},
          {id:'w_infraspinatus', label:'Infraspinatus (exorotatie 0°)', type:'mrc'},
          {id:'w_subscap', label:'Subscapularis (endorotatie / lift-off)', type:'mrc'},
          {id:'w_deltoid', label:'Deltoid (abductie)', type:'mrc'},
          {id:'w_biceps', label:'Biceps (elleboogflexie)', type:'mrc'},
          {id:'w_serratus', label:'Serratus anterior (push-up plus)', type:'mrc'},
          {id:'w_lower_trap', label:'Lower trapezius (Y-positie)', type:'mrc'},
          {id:'w_er_ir_ratio', label:'ER/IR krachtverhouding (indien gemeten)', type:'tekst', placeholder:'bijv. ER/IR = 0.72 (norm ≥ 0.66)...'},
        ]
      },
      {
        id: 's_ortho',
        titel: 'Specifieke Orthopedische Testen',
        velden: [
          {id:'t_neer', label:'Neer impingement test', type:'pn_bevinding', info:'Passieve flexie met endorotatie, fixeer scapula'},
          {id:'t_hawkins', label:'Hawkins-Kennedy test', type:'pn_bevinding', info:'90° flexie + passieve endorotatie = subacromiale provocatie'},
          {id:'t_empty_can', label:'Empty can test / Jobe (supraspinatus)', type:'pn_bevinding', info:'90° abductie, 30° horizontale flex, duimen naar beneden, weerstand'},
          {id:'t_full_can', label:'Full can test (supraspinatus kracht)', type:'pn_bevinding', info:'90° abductie, duimen omhoog, weerstand'},
          {id:'t_drop_arm', label:'Drop arm test (RC ruptuur)', type:'pn_bevinding', info:'Arm laten zakken vanuit 90° abductie. Kan niet = massieve ruptuur'},
          {id:'t_lag_er', label:'Exorotatielag sign (infraspinatus ruptuur)', type:'pn_bevinding', info:'Passieve ER, loslaten — arm valt terug = lag sign positief'},
          {id:'t_lag_ir', label:'Lift-off test (subscapularis)', type:'pn_bevinding', info:'Hand achter rug, pushback — kan niet lossen = positief'},
          {id:'t_belly_press', label:'Belly press test (subscapularis)', type:'pn_bevinding', info:'Druk op buik, elleboog naar voren — endorotatie zwakte'},
          {id:'t_arc_sign', label:'Arc sign / pain arc 60–120°', type:'pn_bevinding', info:'Pijn in midrange abductie = subacromiale problematiek'},
          {id:'t_speeds', label:'Speed test (bicepspees lange kop)', type:'pn_bevinding', info:'Elleboog gestrekt, supinatie, weerstand flexie — pijn sulcus'},
          {id:'t_yergason', label:'Yergason test (bicepspees)', type:'pn_bevinding', info:'Elleboog 90° flexie, supinatie tegen weerstand — pijn sulcus'},
          {id:'t_obrien', label:"O'Brien test (SLAP / AC-gewricht)", type:'pn_bevinding', info:'90° flex, 15° ADD, endorot (duim naar beneden), weerstand, herhaal supinatie'},
          {id:'t_ac_cross', label:'Cross-body adductie test (AC-gewricht)', type:'pn_bevinding', info:'Actieve/passieve horizontale adductie — pijn AC = positief'},
          {id:'t_apprehension', label:'Apprehension test (anterieure instabiliteit)', type:'pn_bevinding', info:'90° abductie + exorotatie — angstgevoel / subluxatiegevoel'},
          {id:'t_relocation', label:'Relocation test (Jobe)', type:'pn_bevinding', info:'Posterieure druk op humerushoofd bij apprehensie positief'},
          {id:'t_sulcus', label:'Sulcus sign (inferieure instabiliteit)', type:'pn_bevinding', info:'Tractie arm naar caudaal — sulcus subacromaal'},
          {id:'t_ant_load', label:'Anterior load and shift test', type:'pn_bevinding', info:'Anterieure vertaling GH-hoofd'},
          {id:'t_scap_assist', label:'Scapular assistance test', type:'pn_bevinding', info:'Manuele opwaartse rotatie scapula bij abductie — verbetering = scapulaire dysfunctie'},
        ]
      },
      {
        id: 's_neuro',
        titel: 'Neurologisch Onderzoek',
        velden: [
          {id:'n_c5_sens', label:'Sensibiliteit C5 (laterale bovenarm)', type:'pn'},
          {id:'n_c6_sens', label:'Sensibiliteit C6 (duim / laterale onderarm)', type:'pn'},
          {id:'n_axillaris', label:'N. axillaris (laterale deltoid)', type:'pn'},
          {id:'n_biceps', label:'Bicepsreflex (C5–C6)', type:'reflex'},
          {id:'n_deltoid_kracht', label:'Kracht deltoid C5', type:'mrc'},
          {id:'n_biceps_kracht', label:'Kracht biceps C5–C6', type:'mrc'},
          {id:'n_ultt1', label:'ULTT1 — n. medianus', type:'pn_bevinding', info:'Schouderabductie + elleboogextensie + polsextensie + cervicale contralaterale flex'},
        ]
      },
      {
        id: 's_conclusie',
        titel: 'Conclusie & Behandelplan',
        velden: [
          {id:'c_diagnose', label:'Werkhypothese / diagnose', type:'tekst_groot', placeholder:'bijv. RC tendinopathie supraspinatus, partiële ATFL ruptuur...'},
          {id:'c_structuren', label:'Betrokken structuren', type:'tekst', placeholder:'bijv. supraspinatus + subacromiale bursa...'},
          {id:'c_conservatief', label:'Conservatief / chirurgisch beleid', type:'keuze3', opties:['Conservatief kinesitherapie','Chirurgisch consult aangewezen','Injectie overwegen','Watchful waiting']},
          {id:'c_behandeling', label:'Behandelplan', type:'tekst_groot', placeholder:'Scapulaire stabilisatie, RC progressie, manuele therapie...'},
          {id:'c_herevaluatie', label:'Herevaluatie gepland', type:'tekst', placeholder:'Datum / criteria...'},
          {id:'c_doorverwijzing', label:'Doorverwijzing', type:'tekst', placeholder:'Orthopedie / revalidatiearts / geen...'},
        ]
      }
    ]
  },

  bekken: {
    id: 'bekken',
    titel: 'Klinisch Onderzoek — Bekken & Heup',
    regio: 'Bekken / SI-gewricht / Heup',
    color: '#a78bfa',
    secties: [
      {
        id: 's_inspectie',
        titel: 'Inspectie',
        velden: [
          {id:'ins_stand', label:'Bekkenstand (staand)', type:'keuze3', opties:['Symmetrisch','Links hoger','Rechts hoger','Anterieure tilt','Posterieure tilt','Oblieks']},
          {id:'ins_lumbaal', label:'Lumbale lordose', type:'keuze3', opties:['Normaal','Vergroot','Verminderd']},
          {id:'ins_sias', label:'SIAS-symmetrie', type:'tekst', placeholder:'Links-rechts verschil in hoogte / diepte...'},
          {id:'ins_sips', label:'SIPS-symmetrie', type:'tekst', placeholder:'Links-rechts verschil...'},
          {id:'ins_trendelenburg', label:'Trendelenburg test (staand)', type:'pn_bevinding', info:'Bekken daalt contralateraal = gluteus medius zwakte ipsilateraal'},
          {id:'ins_looppatroon', label:'Looppatroon', type:'tekst', placeholder:'Antalgisch, Trendelenburg, beenlengteverschil...'},
          {id:'ins_beenlengte', label:'Beenlengteverschil (klinisch)', type:'tekst', placeholder:'SIAS–mediale malleolus links: ...cm / rechts: ...cm'},
        ]
      },
      {
        id: 's_palpatie',
        titel: 'Palpatie',
        velden: [
          {id:'pal_sias_l', label:'SIAS links', type:'pn'},
          {id:'pal_sias_r', label:'SIAS rechts', type:'pn'},
          {id:'pal_sips_l', label:'SIPS links', type:'pn'},
          {id:'pal_sips_r', label:'SIPS rechts', type:'pn'},
          {id:'pal_pubis', label:'Symphysis pubis', type:'pn'},
          {id:'pal_ischium', label:'Tuberositas ischii', type:'pn'},
          {id:'pal_trochanter', label:'Trochanter major (bursa)', type:'pn'},
          {id:'pal_lig_inguinal', label:'Liesband / inguinale regio', type:'pn'},
          {id:'pal_piriformis', label:'Piriformis (diep gluteaal)', type:'pn'},
          {id:'pal_tfl', label:'TFL / IT-band', type:'pn'},
          {id:'pal_add', label:'Adductoren (insertie pubis)', type:'pn'},
          {id:'pal_hamstring', label:'Hamstrings (proximale insertie)', type:'pn'},
        ]
      },
      {
        id: 's_rom',
        titel: 'Heup ROM (graden)',
        velden: [
          {id:'rom_flex_l', label:'Flexie links', type:'rom', norm:'0–125°'},
          {id:'rom_flex_r', label:'Flexie rechts', type:'rom', norm:'0–125°'},
          {id:'rom_ext_l', label:'Extensie links', type:'rom', norm:'0–20°'},
          {id:'rom_ext_r', label:'Extensie rechts', type:'rom', norm:'0–20°'},
          {id:'rom_abd_l', label:'Abductie links', type:'rom', norm:'0–45°'},
          {id:'rom_abd_r', label:'Abductie rechts', type:'rom', norm:'0–45°'},
          {id:'rom_add_l', label:'Adductie links', type:'rom', norm:'0–30°'},
          {id:'rom_add_r', label:'Adductie rechts', type:'rom', norm:'0–30°'},
          {id:'rom_er_l', label:'Exorotatie links (90° flexie)', type:'rom', norm:'0–45°'},
          {id:'rom_er_r', label:'Exorotatie rechts', type:'rom', norm:'0–45°'},
          {id:'rom_ir_l', label:'Endorotatie links (90° flexie)', type:'rom', norm:'0–45°'},
          {id:'rom_ir_r', label:'Endorotatie rechts', type:'rom', norm:'0–45°'},
          {id:'rom_pijn', label:'Pijnlijk traject / eindgevoel', type:'tekst', placeholder:'Kapsel / spier / pijn + richting...'},
        ]
      },
      {
        id: 's_weerstand',
        titel: 'Weerstandstesten (MRC 0–5)',
        velden: [
          {id:'w_glut_max_l', label:'Gluteus maximus links (extensie)', type:'mrc'},
          {id:'w_glut_max_r', label:'Gluteus maximus rechts', type:'mrc'},
          {id:'w_glut_med_l', label:'Gluteus medius links (abductie)', type:'mrc'},
          {id:'w_glut_med_r', label:'Gluteus medius rechts', type:'mrc'},
          {id:'w_add_l', label:'Adductoren links', type:'mrc'},
          {id:'w_add_r', label:'Adductoren rechts', type:'mrc'},
          {id:'w_hip_flex_l', label:'Heupflexoren links (iliopsoas)', type:'mrc'},
          {id:'w_hip_flex_r', label:'Heupflexoren rechts', type:'mrc'},
          {id:'w_er_l', label:'Exorotatoren links (piriformis)', type:'mrc'},
          {id:'w_er_r', label:'Exorotatoren rechts', type:'mrc'},
        ]
      },
      {
        id: 's_ortho',
        titel: 'Specifieke Orthopedische Testen',
        velden: [
          {id:'t_fabere', label:'FABERE / Patrick test', type:'pn_bevinding', info:'Heup in F-AB-ER-E positie, druk op knie — SI of heup'},
          {id:'t_fadir', label:'FADIR test (impingement heup)', type:'pn_bevinding', info:'Flexie 90° + Adductie + Interne rotatie — anterolaterale heuppijn'},
          {id:'t_thomas', label:'Thomas test (heupflexor contractuur)', type:'pn_bevinding', info:'Ruglig, knie naar borst, andere been — vlakt niet = contractuur'},
          {id:'t_ely', label:'Ely test (rectus femoris contractuur)', type:'pn_bevinding', info:'Buiklig, knie buigen — heup komt van tafel = positief'},
          {id:'t_ober', label:'Ober test (TFL/ITB contractuur)', type:'pn_bevinding', info:'Zijlig, heup in abductie-extensie, laten zakken — kan niet = contractuur'},
          {id:'t_sacral_thrust', label:'Sacral thrust test (SI)', type:'pn_bevinding', info:'Buiklig, druk op sacrum'},
          {id:'t_compression', label:'SI-compressietest', type:'pn_bevinding', info:'Zijlig, druk op os ilium naar mediaal'},
          {id:'t_distraction', label:'SI-distractietest', type:'pn_bevinding', info:'Ruglig, druk SIAS van elkaar'},
          {id:'t_gaenslen', label:'Gaenslen test', type:'pn_bevinding', info:'Heup hyperextensie aan tafeleinde, andere knie naar borst'},
          {id:'t_thigh_thrust', label:'Thigh thrust test (SI)', type:'pn_bevinding', info:'Ruglig, heup 90°, axiale druk door femur'},
          {id:'t_hip_scour', label:'Hip scour test (heupgewricht)', type:'pn_bevinding', info:'Circulaire beweging heup onder axiale belasting'},
          {id:'t_hip_log_roll', label:'Log roll test (heupgewricht)', type:'pn_bevinding', info:'Ruglig, interne + externe rotatie zonder gewicht — pijn = GH-gewricht'},
          {id:'t_trendelenburg', label:'Trendelenburg test (GMed)', type:'pn_bevinding', info:'Eénbeenstand — bekken daalt contralateraal = positief'},
          {id:'t_piriformis', label:'Piriformis stretch test', type:'pn_bevinding', info:'Ruglig, flexie + ADD + IR heup — diep gluteaal pijn / uitstraling'},
          {id:'t_adductor', label:'Adductor squeeze test', type:'pn_bevinding', info:'Ruglig, benen licht gebogen, samenknijpen been — liesgebied'},
          {id:'t_active_slr', label:'Active SLR test (bekkengordel)', type:'pn_bevinding', info:'Been optillen in ruglig — pijn / zwaartegevoel bekken = positief'},
        ]
      },
      {
        id: 's_neuro',
        titel: 'Neurologisch Onderzoek',
        velden: [
          {id:'n_l2_sens', label:'Sensibiliteit L2 (anterieur bovenbeen)', type:'pn'},
          {id:'n_l3_sens', label:'Sensibiliteit L3 (mediaal bovenbeen)', type:'pn'},
          {id:'n_l4_sens', label:'Sensibiliteit L4 (mediaal onderbeen)', type:'pn'},
          {id:'n_l5_sens', label:'Sensibiliteit L5 (grote teen / dorsum voet)', type:'pn'},
          {id:'n_s1_sens', label:'Sensibiliteit S1 (laterale voetrand)', type:'pn'},
          {id:'n_perineum', label:'Perineale sensibiliteit (S2–S4)', type:'pn'},
          {id:'n_patella', label:'Patellareflex (L3–L4)', type:'reflex'},
          {id:'n_achilles', label:'Achillesreflex (S1)', type:'reflex'},
          {id:'n_slr', label:'SLR test (ischiadicus)', type:'pn_bevinding', info:'Uitstraling bij < 60° = radiculopathie'},
          {id:'n_femoral_stretch', label:'Femoral nerve stretch (L2–L4)', type:'pn_bevinding', info:'Buiklig, knie gebogen + heupextensie — anterieure uitstraling'},
        ]
      },
      {
        id: 's_conclusie',
        titel: 'Conclusie & Behandelplan',
        velden: [
          {id:'c_diagnose', label:'Werkhypothese / diagnose', type:'tekst_groot', placeholder:'bijv. SIG disfunctie links, coxartrose, lieskanaalproblematiek...'},
          {id:'c_structuren', label:'Betrokken structuren', type:'tekst', placeholder:'bijv. SI-gewricht + piriformis + GMed...'},
          {id:'c_behandeling', label:'Behandelplan', type:'tekst_groot', placeholder:'Manuele therapie SI, stabilisatie bekken, heupkracht...'},
          {id:'c_herevaluatie', label:'Herevaluatie gepland', type:'tekst', placeholder:'Datum / criteria...'},
          {id:'c_doorverwijzing', label:'Doorverwijzing', type:'tekst', placeholder:'Gynaecoloog / orthopedie / revalidatiearts / geen...'},
        ]
      }
    ]
  }
};

// ── BESCHRIJVING PER PROTOCOL (kenmerken & oorzaken) ──
const BESCHRIJVING = {

  acl:{
    kenmerken:'De <strong>VKB-ruptuur</strong> presenteert typisch met een hoorbare "pop" tijdens een deceleratiebeweging, gevolgd door <strong>hemartros</strong> (80–90% bij complete ruptuur), knie-instabiliteit en acuut functieverlies. Klinisch is de <strong>Lachman-test</strong> de meest sensitieve test (sensitiviteit 87%, specificiteit 93%) (Scholten et al., 2003 — JAMA). De pivot-shifttest is pathognomonisch voor VKB-insufficiëntie. Patiënten beschrijven het kniegewricht als "doorgeven" bij richtingsverandering. <strong>MRI</strong> bevestigt de diagnose met 94% sensitiviteit en 95% specificiteit voor een complete VKB-ruptuur.',
    oorzaken:'In <strong>70% van de gevallen</strong> betreft het een non-contactmechanisme: plotse deceleratie gecombineerd met valgus-knie en interne tibiarotatie — typisch bij richtingsverandering in teamsport (Boden et al., 2000 — AJSM). <strong>Neuromusculaire risicofactoren</strong> zijn vertraagde hamstringactivatie, quadricepsdominantie en beperkte heupflexie bij landing. Anatomische factoren zijn een smallere intercondylaire inkeping en hormonale invloed (verhoogde VKB-laxiteit in luteale fase). Vrouwen hebben een <strong>2–6× hoger risico</strong> door een combinatie van neuromusculaire, hormonale en anatomische factoren (Prodromos et al., 2007 — Arthroscopy).'
  },

  tka:{
    kenmerken:'Eindstadium gonartrose gekenmerkt door <strong>ernstige gewrichtspijn bij belasting én in rust</strong>, progressieve ROM-beperking (gemiddeld flexie < 110°), crepitaties en radiologische tekenen van <strong>gewrichtsplaatsverlies, osteofytvorming en subchondrale sclerose</strong> (Kellgren-Lawrence graad III–IV). Patiënten rapporteren <strong>nachtpijn</strong>, moeite met traplopen en ernstige ADL-beperkingen. De KOOS-pijn subscore is typisch < 40/100. Varus- of valgusdeformiteit tot 15–20° is frequent aanwezig bij gevorderde artrose (NICE Guidelines, 2020).',
    oorzaken:'<strong>Primaire gonartrose</strong> (85%) ontstaat door een multifactorieel slijtageproces: <strong>leeftijd</strong> (prevalentie > 50% bij 65+), <strong>BMI</strong> (risico verhoogd ×2,6 per 5 kg/m²) en genetische predispositie (Blagojevic et al., 2010 — Osteoarthritis Cartilage). Secundaire oorzaken zijn post-traumatische artrose (meniscectomie verhoogt risico 6× — JAMA, 2017), <strong>reumatoïde artritis</strong>, infectieuze artritis en avasculaire necrose. Gewrichtskraakbeenafbraak wordt gemedieerd door pro-inflammatoire cytokinen (IL-1β, TNF-α) die chondrocytapoptose induceren en de catabolische cascade op gang brengen.'
  },

  pfps:{
    kenmerken:'<strong>Anterieure kniepijn</strong> bij activiteit (trap, hurken, fietsen, langdurig zitten — "cinema sign"), reproduceerbaar bij compressietest patella. Klinisch zijn het <strong>J-teken</strong> (laterale patelladeviatrie bij extensie), verminderde mediale patellaire glide en crepitaties frequent aanwezig. Pijnscore stijgt typisch na 20 minuten belasten. <strong>Subgroepindeling</strong> (support, pronation, flexibility, movement) wordt gebruikt om de behandelkeuze te sturen — <em>klinische redenering; de toegeschreven publicatie gaat over heupkracht als risicofactor, niet over subgroepindeling</em>. Radiologisch zelden afwijkend in vroege stadia; MRI toont soms subchondraal oedeem bij patella of trochlea.',
    oorzaken:'PFPS is <strong>multifactorieel</strong>: lokale factoren (laterale patellacompressie door strakke IT-band en MPFL), proximale factoren (<strong>verminderde kracht van heupabductoren en exorotatoren</strong> gaat samen met femuradductie en endorotatie bij belasting — <strong>let op:</strong> prospectief onderzoek vindt géén verband tussen heupkracht en het ontstaan van de klacht, zodat het krachttekort eerder gevolg dan oorzaak kan zijn; Rathleff et al., 2014), en distale factoren (overpronatie). In een prospectieve studie bij 282 studenten waren slechts vier factoren significant geassocieerd met het ontstaan: een verkorte quadriceps, een veranderde <strong>reflexresponstijd</strong> van de vastus medialis obliquus, verminderde explosieve kracht en een hypermobiele patella (Witvrouw et al., 2000 — AJSM). <em>Het gaat dus om reflextiming, niet om hypotrofie.</em> Trainingsfouten (plotse volumestijging), harde loopoppervlak, inadequaat schoeisel en biologische factoren zoals hypermobiliteit verhogen het risico. <em>De Q-hoek kwam in de hierboven genoemde prospectieve studie NIET als significante risicofactor naar voren; de drempel van 20° en de verklaring van een hogere prevalentie bij vrouwen via bekkenbreedte en Q-hoek zijn in dit dossier niet onderbouwd.</em>'
  },

  lh:{
    kenmerken:'<strong>Radiculopathie</strong> gekenmerkt door dermatomale pijn, tintelingen en/of krachtverlies in het been. L4: anteromediale onderbeen + kniepees-reflex; <strong>L5</strong>: dorsale voet, grote teen + extensiezwakte; <strong>S1</strong>: laterale voetrand, hak + achillesreflex. De <strong>Lasègue-test</strong> is gevoelig maar niet specifiek: in de Cochrane-review van van der Windt et al. (2010) bedroeg de gepoolde sensitiviteit 0,92 (95% BI 0,87–0,95) en de gepoolde <strong>specificiteit slechts 0,28</strong> (0,18–0,40), en dan nog uitsluitend in chirurgische populaties met een herniaprevalentie van 58–98%; de auteurs besluiten dat de diagnostische waarde van de meeste lichamelijke tests <strong>zwak</strong> is. <em>De eerdere vermelding van 91% bij een drempel van 60° en van Annals of Family Medicine als tijdschrift klopte niet; de review noemt geen van beide.</em> Ernstige hernia kan <strong>cauda equina syndroom</strong> veroorzaken (blaas-/darmstoornissen, perianale hypo-esthesie) — urgentie voor chirurgie. MRI toont discusherniatie met compressie van de desbetreffende zenuwwortel.',
    oorzaken:'<strong>Discusdegeneratie</strong> met afname van de waterbindingscapaciteit van de nucleus pulposus leidt tot verminderde schokabsorptie en verhoogde annulusbelasting. <strong>Herniatie</strong> treedt op bij plotse intradiscale drukstijging (Valsalva, tillen met gefixeerde wervelkolom). L4-L5 en L5-S1 zijn verantwoordelijk voor <strong>95% van lumbale herniaties</strong> — <em>dat percentage is in dit dossier niet tegen een primaire bron gelegd.</em> Risicofactoren zijn: leeftijd 35–55 jaar, mannelijk geslacht, zwaar beroep (trillingen, buigen+draaien), roken (verminderde discusperfusie) en genetische aanleg voor discusdegeneratie — <em>de toegeschreven publicatie is in dit dossier niet opgehaald</em>. Over het spontane beloop: in de studie van Weber (1983 — Spine) deed de geopereerde groep het na één jaar significant beter en na vier jaar niet meer significant beter; <em>een spontaan herstel bij 90% binnen 12 weken staat daar niet in.</em>'
  },

  rc:{
    kenmerken:'<strong>Pijnboog 60–120°</strong> bij abductie (impingement-fenomeen), nachtpijn in zijlig op aangedane zijde, zwakte bij abductie en/of exorotatie. <strong>Neer-teken</strong> (passieve elevatie in pronatie — subacromiale bursitis), <strong>Hawkins-Kennedy</strong> (elevatie 90° + interne rotatie — supraspinatusimpingement): sensitiviteit 79%, specificiteit <strong>59%</strong> (Hegedus et al., 2012 — BJSM). <em>De eerder vermelde specificiteit van 66% staat niet in die meta-analyse.</em> De auteurs besluiten dat géén enkele afzonderlijke schoudertest volstaat om een diagnose te stellen. Partieelscheuring: kracht doorgaans bewaard; <strong>complete ruptuur</strong>: drop-arm test positief, zwakte abductie > 30°. Echografie heeft accuraatheid van 84% voor partiële en complete rupturen van de rotatorenmanchet.',
    oorzaken:'<strong>Extrinsieke impingement</strong> door subacromiale ruimtereductie (osteofyten, type III acromion, bursitis) comprimeert de supraspinatuspees in de hypovasculaire "critical zone" 1 cm van de insertie. <strong>Intrinsieke tendinopathie</strong> door repetitief microtrauma bij overhead-arbeid en sport leidt tot degeneratieve collageenafbraak. Degeneratieve scheuring (> 40 jaar) treedt op in de hypovasculaire zone door accumulerende microtrauma en leeftijdsgebonden collageenafbraak. <strong>Traumatische ruptuur</strong> bij val op uitgestrekte arm of schouderdistractie komt op alle leeftijden voor. Scapulaire dyskinesie en bicepstendinopathie zijn frequent geassocieerd (Ludewig & Cook, 2000 — Phys Ther).'
  },

  pt:{
    kenmerken:'<strong>Lokale pijn infrapatellair</strong> aan de patellapeesaanhechting, reproduceerbaar bij éénbenige squat en VISA-P < 80/100. Pijn bij belasting (springen, hardlopen, trap), typisch afwezig in rust en ochtend. Klinisch: <strong>punctapijn bij palpatie</strong> van het infrapatellair punt, soms echografische verdikking en veranderde peesvascularisatie. Isometrische contracties gaven bij 6 volleyballers met deze aandoening een onmiddellijke pijndaling die 45 minuten aanhield (Rio et al., 2015); zeer kleine steekproef. <strong>Gradatie</strong>: graad I (alleen na training), II (tijdens en na), III (permanent, sport onmogelijk), IV (volledig functioneel verlies — operatieve overweging).',
    oorzaken:'<strong>Reactieve tendinopathie</strong> door plotse stijging van tensielbelasting op de pees, typisch bij "springerssporten" (volleybal, basketbal, turnen). Pathologisch leidt herhaalde overbelasting tot <strong>disorganisatie van collageen, neovascularisatie en nociceptoringroei</strong> zonder ontstekingscellen — <em>het continuummodel van Cook en Purdam (2009) beschrijft die pathologische details niet; dit is klinische redenering</em>. Mogelijke risicofactoren waarvoor slechts <strong>beperkt</strong> bewijs bestaat: gewicht, BMI, taille-heupverhouding, beenlengteverschil, voetbooghoogte, quadriceps- en hamstringflexibiliteit, quadricepskracht en verticale sprongprestatie (van der Worp et al., 2011). <em>Voor geen enkele factor was het bewijs sterk of matig. Geslacht, leeftijdsbereik en landingstechniek staan niet in die lijst.</em> <strong>Trainingsfouten</strong> met een snelle stijging van volume en intensiteit worden als belangrijkste uitlokker gezien — <em>klinische redenering; de systematische review naar risicofactoren vond géén sterk of matig bewijs voor welke onderzochte factor dan ook (van der Worp et al., 2011)</em>.'
  },

  gmt:{
    kenmerken:'<strong>Laterale heuppijn</strong> (greater trochanter regio) met mogelijke uitstraling naar het laterale bovenbeen, zelden tot onder de knie. Kenmerkend: pijn bij liggen op aangedane zijde (<strong>nachtpijn met slaapstoornis</strong>), lang staan/lopen, traplopen en het oversteken van de benen (adductiestand). <strong>Palpatiepijn</strong> ter hoogte van de trochanter major is aanwezig in 60–80% van de gevallen. Positieve <strong>FABER</strong> en Trendelenburg-test. Echografie toont tendinopathie of partiële scheuring van gluteus medius- of minimusaanhechting (Bird et al., 2001 — AJR).',
    oorzaken:'<strong>Compressiemechanisme</strong> op de pees bij adductie en interne rotatie van de heup (brede pelvis, X-been, "hip drop" bij lopen) comprimeert de gluteale pees tegen de trochanter. <strong>Hormonale factoren</strong>: postmenopauzale vrouwen hebben een 3–4× hoger risico door daling van oestrogeen-gerelateerde collagene peeskwaliteit (Segal et al., 2007 — Arthritis Rheum). Biomechanische bijdrage: zwakte gluteus medius, contralateraal bekkenverlies (Trendelenburg), langdurig zitten met benen gekruist. <strong>Degeneratieve tendinopathie</strong> door repetitieve compressie-tractie bij lopers en fietsers. Latente risicofactor: totale heupprothese (> 30% kans op laterale heuppijn post-THA).'
  },

  at:{
    kenmerken:'<strong>Pijn en stijfheid</strong> in het achillespeesgebied, typisch erger bij opstaan en na rust ("startstijfheid"), verbetert na opwarming maar keert terug na belasting. Een VISA-A onder 80 wordt als richtwaarde gebruikt — praktijkafspraak, geen diagnostische drempel. <strong>Midportion AT</strong> (2–6 cm boven insertie): fusiforme zwelling, crepitaties, positieve arc-test; <strong>insertionele AT</strong> (aan calcaneus): haakspijnboog, positieve palpatie bij enthese. De Royal London Hospital-test wordt gebruikt bij <strong>midportion</strong>-tendinopathie, waar de pijn bij dorsaalflexie juist afneemt — <em>de eerdere omschrijving als test die pijn reproduceert bij het insertionele subtype was tegenstrijdig met de oefennotitie in fase 0 en is gecorrigeerd; de testeigenschappen zijn in dit dossier niet onderbouwd.</em> <strong>Echografische verdikking</strong> en intra-tendineuze hypo-echogeniciteit kunnen de diagnose ondersteunen — <em>de drempel van 6 mm is in dit dossier niet onderbouwd, en de diagnose blijft klinisch.</em>',
    oorzaken:'<strong>Reactief-degeneratieve tendinopathie</strong> door cumulatieve overbelasting van het gastrocnemius-soleuscomplex. Als uitlokkers gelden een snelle stijging van het loopvolume, heuveltraining, harde ondergrond of schoeiselwissel — <em>klinische redenering; de drempel van 10% per week is geen bronwaarde.</em> Histologisch zijn er <strong>geen ontstekingscellen</strong>, wel toegenomen interfibrillaire glycosaminoglycanen en veranderingen in structuur en rangschikking van de collageenvezels; microdialyse bevestigde de afwezigheid van ontsteking (Alfredson & Lorentzon, 2000 — Sports Med). <em>Neovascularisatie en nociceptoringroei in het paratenon staan niet in die bron en zijn klinische redenering.</em> De aandoening komt volgens diezelfde bron het vaakst voor bij recreatieve <strong>mannelijke lopers tussen 35 en 45 jaar</strong>, maar ook bij mensen met een zittende leefstijl. Overgewicht, diabetes, genu valgum, overpronatie en fluorochinolonen worden als risicofactoren beschouwd — <em>klinische redenering; de risicoverhouding van 3 voor fluorochinolonen is in dit dossier niet onderbouwd.</em> <strong>Insertionele AT</strong> heeft andere pathomechaniek: compressie van de enthese door pronatie en retocalcaneale botimpingement (Haglund-deformiteit).'
  },

  bureau:{
    kenmerken:'<strong>Cervicogene hoofdpijn</strong> (eenzijdig, occipitaal → temporaal/frontaal), nekpijn bij rotatiebeperking, schouderspanning (trapezius superior), thoracale kyfoseversterking en sub-occipitale hypertoniciteit. Kenmerkend: klachten die toenemen naarmate de werkdag vordert en verminderen bij beweging. Bij <strong>cervicogene hoofdpijn</strong> zijn een voorwaartse hoofdhouding en verminderde kracht én uithouding van de bovenste cervicale flexoren aangetoond (Watson & Trott, 1993 — Cephalalgia; 60 vrouwen). <em>Een C1-C3-pijnreferentiepatroon staat niet in die bron.</em> <strong>Thoracic outlet syndroom</strong> (TOS) kan optreden bij chronische protractiehouding van de schouder. Tintelingen in hand en tinnitus zijn mogelijke bijkomende symptomen bij ernstig cervicogene component.',
    oorzaken:'<strong>Statische houdingsbelasting</strong> bij langdurig computerschermwerk zonder onderbreken wordt in verband gebracht met <strong>ischemische spierspanning</strong> in de sub-occipitale en cervicale spieren via lage-drempel-motorunit-rekrutering (Cinderella-hypothese) — <em>een verklarend model, in dit dossier niet met een bron onderbouwd</em>. Ook de rol van neurale sensitisatie van trigeminale en cervicale dermatomen bij chronische nociceptie is <em>klinische redenering</em>. Ergonomische risicofactoren: schermhoogte buiten ooghoogte, toetsenbord te ver, stoel zonder armleuningen. Psychosociale factoren (werkdruk, controleverlies) verhogen spierspanning via limbisch-musculaire feedback. <strong>Slaapkwaliteitsreductie</strong> verlaagt de centrale pijndrempel en vertraagt herstel.'
  },

  enkel:{
    kenmerken:'<strong>Laterale enkelpijn</strong> na inversietrauma met zwelling, hematoom en functieverlies. <strong>Ottawa Ankle Rules</strong> bepalen de fractuurnoodzaak (sensitiviteit 97%). Graad I: rekking ATFL, loopvaardig; Graad II: partieelscheuring ATFL ± CFL, instabiel lopen; Graad III: complete ruptuur ATFL + CFL ± PTFL, forse instabiliteit en gewrichtlaxiteit. <strong>Anterieure drawer-test</strong> (ATFL) heeft sensitiviteit 73%, talar tilt-test (CFL) specificiteit 90%. <strong>Chronische enkeldistabiliteit</strong> (CAI) treedt op bij 40% van de initiële distorsies na recidief of aanhoudende instabiliteit > 12 maanden.',
    oorzaken:'<strong>Plantairflexie + inversie</strong> bij landing of richtingsverandering overschrijdt de peessterkte van het ATFL (zwakste laterale ligament, ruptuur bij ~140 N). Risicofactoren: <strong>voorgeschiedenis enkeldistorsie</strong> (herletselrisico ×2,4), proprioceptief deficit, peroneale spierspanning en vermoeidheid. Cavusvoet vergroot de inversieneiging. <strong>Neuromusculaire reactietijd</strong> van peroneale spieren (> 62 ms) overschrijdt de mechanische reactietijd bij inversietrauma, waardoor actieve bescherming te laat optreedt (Konradsen & Ravn, 1990 — BJSM). Terreinoppervlak, schoeisel en vermoeidheid laat in de wedstrijd zijn additionele precipiterende factoren.'
  },

  over:{
    kenmerken:'<strong>Dynamisch gewelfverlies</strong> bij belasting met medialisatie van de talus, eversie van de calcaneus en abductie van de voorvoet ("too many toes sign"). Klinisch: verhoogde navicular drop (> 10 mm), pes planus in gewichtsdragende positie en abnormale Q-hoek. Geassocieerd met <strong>mediaal tibiale pijn</strong> (MTSS), plantaire fasciitis, PFPS en tibialis posteriorpees-insufficiëntie. <strong>Dynamische loopanalyse</strong> toont excessief pronatiemoment en een verlengde pronierende fase. In rust doorgaans normale voetstand, maar instorting bij éénbeen-stand (flexible flatfoot).',
    oorzaken:'<strong>Tibialis posterior insufficiëntie</strong> (meest voorkomende oorzaak bij volwassenen > 40 jaar): geleidelijke peesverzwakking door degeneratie leidt tot progressieve mediaallobbige instabiliteit (Johnson & Strom classificatie I–IV). <strong>Ligamentaire laxiteit</strong> (spring ligament, plantar fascia) bij jongere patiënten en hypermobielen. Obesitas verhoogt de plantaire druk ×2 en versnelt peesdegeneratie. Functionele bijdrage: <strong>zwakke intrinsieke voetspieren</strong>, gluteus medius-insufficiëntie (bekkendrop induceert voetpronatie bij lopen). Schoeisel zonder mediale ondersteuning en harde oppervlakken versnellen de progressie van het pronatiemechanisme.'
  },

  si:{
    kenmerken:'Anterieure instabiliteit (TUBS): <strong>apprehension-teken</strong> (angst/pijn bij abductie 90° + exorotatie), <strong>relocation test</strong> (pijn verdwijnt bij posterieure druk op humerushoofd), gevoel van "schouder glijdt eruit". MDI: <strong>sulcusteken</strong>, globale hyperlaxiteit, positieve load & shift in meerdere richtingen. Klinische specificiteit apprehension-test = 94% voor anterieure instabiliteit (Lo et al., 2004 — Clin Orthop). <strong>MRI-arthrogram</strong> toont een Bankart-laesie (anterieur-inferieur labrumdetachement) in 85–90% van recidiverende anterieure luxaties.',
    oorzaken:'<strong>TUBS (traumatische anterieure instabiliteit)</strong>: anterieure luxatie bij abductie-exorotatiestress → Bankart-laesie (labrumavulsie van anteroinferior glenoid) en/of Hill-Sachs-lesie (impactiefractuur posterieur humerushoofd). Herletselrisico na eerste luxatie: <strong>80–90% bij < 20 jaar</strong>, dalend naar 14% bij > 40 jaar (te Slaa et al., 2004 — JBJS). <strong>AMBRI (multidirectionele instabiliteit)</strong>: capsulaire hyperlaxiteit door bindweefselziekte (Ehlers-Danlos, Marfan) of repetitieve microtraumata (turnsters, zwemmers). Inadequate rotatorenmanchet-coactivatie als dynamische stabilisator speelt een centrale rol in de instandhouding van de instabiliteit.'
  },

  orif:{
    kenmerken:'Distale radiusfractuur met <strong>volare of dorsale kanteling, ulnaire verkorting en/of radiocarpal incongruentie</strong> die chirurgische stabilisatie vereist. AO type A2–C3 classificatie. Klinisch: <strong>pijn, zwelling, ecchymosen</strong> in de polsregio, "dinner fork deformity" bij Colles-fractuur, palmaire deformiteit bij Smith. Functieverlies: gripkracht < 30% en ROM < 50% t.o.v. contralateraal. Radiologisch operatie-indicaties: radiale verkorting > 5 mm, palmaire tilt < -10° of dorsale tilt > 20°, of intra-articulaire incongruentie > 2 mm (Handoll & Madhok, 2009 — Cochrane).',
    oorzaken:'<strong>FOOSH (fall on outstretched hand)</strong>: axiale compressie met hyperextensie — meest frequent fractuurmechanisme (> 90% van gevallen). Laag-energetisch trauma bij <strong>osteoporotische patiënten</strong> (piekincidentie vrouwen 60–75 jaar: 240/100.000/jaar). Hoog-energetisch trauma bij jongeren (val van hoogte, sport-impact). <strong>Osteoporose</strong> is de meest relevante predisponerende factor: vrouwen hebben bij 75 jaar 50% kans op een osteoporotische fractuur (IOF, 2010). Cortisonegebruik, malabsorptie, immobiliteit en diabetes verhogen het fractuurrisico additioneel. FRAX-score bepaalt het 10-jaars fractuurrisico voor preventieve strategie.'
  },

  dq:{
    kenmerken:'<strong>Radiale polspijn</strong> ter hoogte van de processus styloideus radii, gelokaliseerd in het 1e extensorcompartiment (APL en EPB-pees). Zwelling, crepitaties en drukpijn ter hoogte van de peesschede. <strong>Finkelstein-test</strong>: passieve ulnaire deviatie met ingeklemde duim reproduceert pijn (sensitiviteit 89%, specificiteit 90%). Pijn bij grepen waarbij de duim betrokken is (knijpen, optillen, vasthouden). <strong>Echografie</strong> toont verdikking van de peesschede, vloeistofaccumulatie en in ernstige gevallen intra-tendineuze laesies in APL of EPB.',
    oorzaken:'<strong>Repetitieve duim-/polsbewegingen</strong> veroorzaken stenoserende tenosynovitis in het 1e extensorcompartiment door wrijving van APL en EPB. Klassieke beroepen: <strong>kapper, muzikant, IT-personeel</strong>. <strong>Postpartum-syndroom</strong>: nieuwe moeders ontwikkelen De Quervain bij frequent optillen van de baby (ulnaire deviatie + polsextensie). Septumvariant in het 1e extensorcompartiment (aanwezig in 35% van gevallen) verhoogt wrijving en predisponeert voor symptoomontwikkeling. Hormonale factoren (zwangerschap, hypothyreoïdie) leiden tot peesschede-oedeem. Pathologisch betreft het een <strong>fibrotische remodeling</strong> zonder echt inflammatoir infiltraat (Ilyas et al., 2007 — JAAOS).'
  },

  cts:{
    kenmerken:'<strong>Nachtelijke pijn en tintelingen</strong> in het verzorgingsgebied van de n. medianus (duim, wijs- en middelvinger, radiaal ringvinger), verlichting bij schudden van de hand ("flick sign" — 93% sensitiviteit). Klinisch: positieve <strong>Phalen-test</strong> (60 sec polsflexie → paresthesieën; sensitiviteit 68%, specificiteit 73%), positieve <strong>Tinel-test</strong> bij het carpale niveau. Bij progressie: atrofie van de thenar, persisterend gevoelsverlies en knijpkrachtverlies. EMG/NCS bevestigt geleidingsvertraging van de n. medianus (distale motorlatentie > 4,5 ms als diagnostisch criterium).',
    oorzaken:'<strong>Verhoogde druk in het carpaaltunnel</strong> (normaal < 30 mmHg; bij CTS > 30 mmHg, bij polsflexie > 90 mmHg) comprimeert de n. medianus met ischemie en demyelinisatie als gevolg. Idiopathisch bij vrouwen > 50 jaar door tenosynovitis van de flexorpezen. Systemische oorzaken: <strong>diabetes</strong> (25% CTS-prevalentie), <strong>hypothyreoïdie</strong>, zwangerschap (oedeem), reumatoïde artritis en amyloïdose. Beroepsrisico: repetitieve polsbewegingen, trillingswerktuigen, geforceerde grip. <strong>Anatomische predispositie</strong>: klein carpaaltunnel-volume, persistente a. mediana. Obesitas (BMI > 30) verhoogt het risico met factor 2,5 (Becker et al., 2002 — Ann Intern Med).'
  },

  hsi:{
    kenmerken:'<strong>Plotse, hevige posterieure dijbeenpijn</strong> bij sprint (typisch in de late swing-fase), met onmiddellijk functieverlies. Palpatiepijn proximaal bij de ischiale aanhechting (graad III) of in het spierlichaam zelf. <strong>BAMIC-classificatie</strong> (MRI-gebaseerd): laag-graad (< 1/3 spierdoorsnedeverlies), hoog-graad (> 2/3), volledig. Passieve <strong>SLR met dorsaalflexie enkel</strong> is de meest gevoelige klinische test. Echografie < 48u is minder sensitief dan MRI. Herstel duurt: Graad I ≈ 1–2 weken; Graad II ≈ 4–8 weken; Graad III ≈ 8–20+ weken voor terugkeer naar sport.',
    oorzaken:'<strong>Excentrische overbelasting</strong> in de late swing-fase van de sprint — de biceps femoris lange kop is het meest aangedane spiergedeelte (81% van gevallen — Ekstrand et al., 2011 — BJSM). Risicofactoren: <strong>voorafgaande hamstringblessure</strong> (herletselrisico 2–3×), asymmetrie links-rechts kracht (H/Q ratio < 0,60), verminderde lumbopelvische stabiliteit en vermoeidheid laat in de wedstrijd. Leeftijd (> 24 jaar = verhoogd risico), overmatige trainingsbelasting (> 10% wekelijkse stijging), inadequate opwarming en lage Nordic Hamstring compliance zijn bijkomende risicofactoren. <strong>Type II spiervezeldominantie</strong> bij sprinters vergroot het excentrische overbelastingsrisico.'
  },

  elb:{
    kenmerken:'<strong>Laterale elleboogpijn</strong> bij grepen, handdruk en polsextensieactiviteiten, gelokaliseerd op de laterale epicondyl of net distaal ervan. <strong>Cozen-test</strong> (weerstand polsextensie met gestrekte elleboog — sensitiviteit 84%) en Mill-test (passieve polsflexie met gestrekte elleboog) reproduceren de klachten. Palpatiepijn ter hoogte van de ECRB-aanhechting. Karakteristiek: <strong>geen actief inflammatoir beeld</strong> maar pijnprovocatie bij functiebelasting. PRTEE-score > 30 bevestigt klinische ernst. Echografie toont hypo-echogeniciteit, calcinosen of laesies bij de ECRB-enthese (30% van gevallen).',
    oorzaken:'<strong>Tendinopathie van de extensor carpi radialis brevis</strong> (ECRB) aan de laterale epicondyl door cumulatief microtrauma. Pathologisch: geen echte inflammatie maar <strong>degeneratieve angiofibroblastische hyperplasie</strong> (Nirschl & Pettrone, 1979) met disorganisatie van collageen type III, neovascularisatie en nociceptorproliferatie. Risicofactoren: <strong>repetitieve polsextensie/supinatie</strong> (tennis backhand, computermuis, schroevendraaier), leeftijd 40–55 jaar, dominante arm. Niet-sporters vormen 60% van de gevallen: kantoorpersoneel, bouwvakkers, koks. Cervicale radiculopathie C6 kan bijdragen via neurale sensitisatie van de laterale elleboogregio.'
  },

  mtss:{
    kenmerken:'<strong>Diffuse, mediaal-tibiale pijn</strong> over het distale 2/3 van de tibia bij belasting (lopen, springen). Drukpijn over ≥ 5 cm langs de mediale tibiarand (dit onderscheidt MTSS van stressfractuur waarbij punctapijn optreedt). Pijn typisch erger bij begin training, verbetert na opwarmen en keert terug na cooling down. <strong>Röntgen normaal</strong> bij MTSS; botscan of MRI toont periostale stressreactie (graad I–II) of botstresstransmissie (graad III–IV). Stemvorktransmissietest op de tibia kan helpen bij differentiaaldiagnose met stressfractuur (sensitiviteit 75%).',
    oorzaken:'<strong>Periostaal trekstress</strong> door tibialis posterior, flexor digitorum longus en soleus aan de mediale tibiarand bij repetitieve impact. "Bone strain"-theorie: cumulatieve vermoeidheidsdeformatie overschrijdt de botremodeling-capaciteit (Moen et al., 2009 — Sports Med). Risicofactoren: <strong>plotse stijging loopvolume</strong> (> 10%/week), vrouwelijk geslacht, harde loopoppervlakken, slechte schokabsorptie van schoeisel, <strong>overpronatie</strong> (verhoogt tibiale torsiestress), lage botdensiteit en onvoldoende inname van calcium en vitamine D. Militaire rekruten bereiken een incidentie van 10–20% MTSS in de eerste 8 weken basistraining (Yates & White, 2004 — Phys Ther).'
  },

  faz:{
    kenmerken:'<strong>Lumbale pijn bij extensie, lateraalflexie en rotatie</strong> naar de aangedane zijde, verlichting bij vooroverbuigen. Typisch: ochtendstijfheid > 30 min, bilaterale of unilaterale lumbale pijn met uitstraling naar bil en bovenbeen (<strong>pseudoradiculair patroon</strong>, doorgaans niet onder de knie). De <strong>Kemp-test</strong> (extensie + rotatie + lateraalflexie ipsilateraal) kan de klacht reproduceren. <strong>Belangrijke beperking:</strong> volgens Cohen &amp; Raja (2007 — Anesthesiology) ondersteunt de literatuur NIET dat anamnese of klinisch onderzoek de diagnose facetpijn kan stellen; bovenstaande kenmerken zijn dus richtinggevend, niet bewijzend. Röntgen/CT toont facetversmalling, osteofyten en subchondrale sclerose. Een <strong>diagnostische facetblokkade</strong> is de meest aanvaarde methode, maar heeft volgens diezelfde bron een <strong>hoog vals-positief percentage</strong>. <em>De uitspraak over SPECT en de drempel van 80% pijnreductie zijn in dit dossier niet onderbouwd.</em>',
    oorzaken:'Degeneratie van de <strong>zygapofysaire gewrichten</strong> (synoviaalgewricht met hyalien kraakbeen) door cumulatieve mechanische overbelasting en veroudering. Discusdegeneratie verhoogt de facetbelasting door hogere compressiekrachten bij discushoogteverlies. <strong>Spondylolisthesis</strong> en facethypertrofie kunnen spinaalstenose veroorzaken met claudicatio als bijkomend symptoom. Predisponerende factoren volgens Cohen &amp; Raja (2007): spondylolisthesis, degeneratieve discuspathologie en hogere leeftijd. Obesitas, <strong>repetitieve extensiebelasting</strong> (bouwvakkers, gymnasten) en genetische aanleg zijn <em>klinische redenering; de leeftijdsgrens van 50 jaar is geen bronwaarde</em>. De rijke nociceptieve innervatie van het facetkapsel (mediale tak van ramus posterior) verklaart zowel de lokale als gerefereerde pijn.'
  },

  sup:{
    kenmerken:'<strong>Subacromiale pijnboog</strong> tussen 60 en 120° abductie — kadaveronderzoek toont dat het contact tussen acromion en manchetpezen juist in dat traject het nauwst is, met een acromiohumerale afstand die daalt van 11,1 mm bij 0° naar 5,7 mm bij 90° (Flatow et al., 1994 — AJSM); nachtpijn in zijlig, zwakte abductie en impingement-tekenen. <strong>Neer-test</strong> (passieve elevatie in pronatie), <strong>Hawkins-Kennedy</strong> (endorotatie bij 90° elevatie) en de <strong>lege-blik-test</strong>. <em>De sensitiviteits- en specificiteitswaarden die hier eerder stonden, zijn in dit dossier niet onderbouwd en zijn geschrapt.</em> Echografisch: hypo-echogeniciteit, peesverbreding of defect in de supraspinatuspees. Differentiatie van bursitis subacromialis: steroïdinjectie-effect en echografische vloeistofaccumulatie in de subacromiale ruimte. MRI-arthrogram voor definitieve classificatie bij chirurgische overweging.',
    oorzaken:'<strong>Outlet-impingement</strong>: de supraspinatuspees wordt gecomprimeerd tussen acromion en humerushoofd in de subacromiale ruimte (type II–III acromionmorfologie, os acromiale, AC-gewrichtsosteofyten). <strong>Hypovasculaire zone</strong>: de kritische zone nabij de insertie zou relatief slecht doorbloed zijn, waardoor belasting zonder adequate doorbloeding degeneratie bevordert — <em>klinische redenering; noch de afstand van 1 cm noch het mechanisme is in dit dossier onderbouwd.</em> Repetitieve overhead-bewegingen verhogen de subacromiale druk chronisch. <strong>Scapulaire dyskinese</strong> gaat samen met impingementklachten, maar de internationale consensusverklaring stelt dat haar rol bij het ontstaan of verergeren van schouderdisfunctie <strong>niet duidelijk omschreven</strong> is en dat zij het best als een <strong>mogelijke</strong> stoornis geldt (Kibler et al., 2013). Dat onbehandelde tendinose via partiële scheuring naar een complete ruptuur verloopt, is <em>klinische redenering</em>.'
  },

  fbl:{
    kenmerken:'Post-interventie protocol na <strong>lumbale facetblokkade</strong> (intra-articulaire corticosteroïdinjectie of mediale-tak-blokkade) of <strong>radiofrequente denervatie (RFD)</strong>. Patiënt is verwezen na een positieve diagnostische blokkade. <em>Let op: volgens Cohen &amp; Raja (2007 — Anesthesiology) is de blokkade wel de meest aanvaarde diagnostische methode, maar met een hoog vals-positief percentage; de drempel van 80% pijnreductie is in dit dossier niet onderbouwd.</em> Post-RFD: doorgaans enkele weken herstelperiode terwijl de mediale zenuwtak regenereert — <em>de tijdsindicatie is een praktijkafspraak, niet met een bron onderbouwd</em>. Pre-interventie aanwezige symptomen: extensiegerelateerde lumbale pijn, uitstraling naar bil/bovenbeen zonder neurologische uitval. <strong>VAS-daling na injectie</strong> vormt het uitgangswaarde voor revalidatieprogressie in het pijnvrije venster.',
    oorzaken:'Dezelfde etiologie als facetartrose: <strong>zygapofysaire gewrichtsdegeneratie</strong> met nociceptieve sensitisatie van de mediale tak (ramus posterior medialis L1-L5 innerveert de facetgewrichten). Indicatie voor blokkade: <strong>onvoldoende conservatieve behandelrespons</strong> (de termijn van drie maanden is een praktijkafspraak) en een klinisch facetpijnsyndroom zonder radiculopathie — <em>let op: volgens Cohen &amp; Raja (2007) kan klinisch onderzoek, de Kemp-test inbegrepen, de diagnose facetpijn niet stellen</em>. RFD coaguleert de mediale tak en onderbreekt de nociceptieve transmissie tot herbinnervatie — <em>de duurindicatie van 9 tot 18 maanden is in dit dossier niet onderbouwd</em>. <strong>Revalidatie benut het pijnvrije venster</strong> na interventie voor progressieve belasting die voordien door pijn onmogelijk was. Herhaling van RFD is mogelijk na herbinnervatie.'
  },

  mcl:{
    kenmerken:'<strong>Mediaal kniepijn en zwelling</strong> na valgus-trauma, drukpijn over het MCL-verloop (femurcondilair tot tibiale insertie). Graad I: lichte zwelling, stabiel bij valgus-stresstest in 30° flexie; Graad II: partieelscheuring, ≤ 5 mm laxiteit bij valgus in 30°; Graad III: complete ruptuur, > 5–10 mm laxiteit, positief ook in volledige extensie. <strong>Valgus-stresstest</strong> in 30° flexie: sensitiviteit 91% voor MCL-letsel (Malanga et al., 2003 — JOSPT). MRI bevestigt de graad en toont geassocieerde letsels (VKB, meniscus — "unhappy triad").',
    oorzaken:'<strong>Direct valgus-trauma</strong>: contact van laterale knie-zijde (American football tackles, ijshockey, skiletsel). Niet-contact valgus: abrupte richtingsverandering met knie in valgus + exorotatie tibia. <strong>Skiletsel</strong> is het meest voorkomende niet-contact MCL-letsel (verplicht stopfiguur in valgus = "pizza-positie"). Unhappy triad (O&#39;Donoghue, 1950): gecombineerd valgus + torsie → MCL + VKB + mediaal meniscus letsel. Risicofactoren: instabiel terrein, slechte proprioceptie, musculaire vermoeidheid laat in de wedstrijd. <strong>MCL heelt spontaan</strong> door goede bloedtoevoer: graad I in 2–4 weken, graad II in 6–8 weken, graad III in 12–16+ weken.'
  },

  pa:{
    kenmerken:'<strong>Mediaal kniepijn</strong> gelokaliseerd 2–3 cm distaal van de mediale gewrichtsspleet, ter hoogte van de aanhechting van sartorius, gracilis en semitendinosus (de drie ganzenpoot-pezen). Kenmerkend: pijn bij traplopen, opstaan uit stoel, hurken en langdurig staan. <strong>Palpatiepijn</strong> op pes anserinus-insertie is pathognomonisch. Zwelling of warmte wijst op geassocieerde bursitis. Nachtpijn is frequent, met name bij liggen op aangedane zijde. Klinisch: <strong>valgusstand</strong> van de knie vergroot de compressielast op de insertie. Differentiaaldiagnose: MCL-letsel, mediale meniscuspathologie, gonartrose (frequent co-morbide).',
    oorzaken:'<strong>Friction en compressie</strong> van de pes anserinus-bursa en -pezen door biomechanische overbelasting in het mediaal kniecompartiment. Vaak samen gezien met <strong>gonartrose</strong> (in een echografische studie 20% van 170 artroseknieën; een case-controlstudie vond echter geen verschil met controles), <strong>obesitas</strong> en <strong>diabetes mellitus</strong> — <em>beide klinische redenering: de geciteerde case-controlstudie vond juist geen verschil met controles voor obesitas, diabetes en gonartrose</em>. Atletische oorzaak: overmatig loopvolume, bergafwaarts lopen of zwemmen (borstslagstijl) — <em>klinische redenering, niet onderbouwd in dit dossier</em>. Biomechanische risicofactoren: <strong>valgusknie</strong> (wél onderbouwd, zie hieronder), hamstring- en gracilis-stijfheid en gluteus medius-zwakte — <em>de laatste twee zijn klinische redenering</em>. Valgusstand van de knie was in een case-controlstudie geassocieerd met pes anserinus-klachten (OR 5,2; 95% BI 1,1–25,5) (Alvarez-Nemegyei et al., 2007). Dat vrouwen boven de 50 disproportioneel aangedaan zijn door postmenopauzale peesveranderingen is klinische redenering, niet uit die bron.'
  },

  fs:{
    kenmerken:'<strong>Progressieve pijn en ROM-beperking van het glenohumerale gewricht</strong> met eindgraadloos kapsulair patroon: exorotatie doorgaans het sterkst beperkt (het aandeel van 50% is een praktijkindicatie, geen bronwaarde), gevolgd door abductie en endorotatie. Klinisch worden drie stadia onderscheiden: <strong>bevriezend</strong> (hevige pijn, toenemende bewegingsbeperking), <strong>bevroren</strong> (stijfheid dominant, pijn afnemend) en <strong>ontdooiend</strong> (geleidelijk herstel). <em>De tijdsvensters zijn praktijkafspraken; let op de langetermijncijfers: 41% houdt na gemiddeld 4,4 jaar restklachten (Hand et al., 2008).</em> Nachtpijn, passief kapsulair patroon positief. MRI toont verdikking van het kapsel en obliteratie van de axillaire recess. De SPADI wordt als uitkomstmaat gebruikt; de genoemde richtwaarde is een praktijkafspraak.',
    oorzaken:'<strong>Primaire (idiopathische) adhesieve capsulitis</strong>: inflammatoire fibrose van het glenohumerale kapsel en rotatorenmanchetinterval. <strong>Diabetes mellitus</strong> geldt als belangrijkste risicofactor — <em>klinische redenering; de prevalentiecijfers en het aandeel bilaterale gevallen zijn in dit dossier niet onderbouwd. Wel geverifieerd: in een cohort van 269 schouders meldde 20% bilaterale klachten (Hand et al., 2008).</em> <strong>Secundaire oorzaken</strong>: immobilisatie na trauma, rotatorenmanchetscheur, ORIF, neurologische aandoening (Parkinson, CVA, C5-radiculopathie). Systemische risicofactoren: hypothyreoïdie, hyperthyreoïdie, hypoadrenalisme. Pathomechanisme: type-1 collagenese door geactiveerde fibroblasten en mastcellen in het synoviaal kapsel, leidend tot progressieve capsulaire contractuur en obliteratie van de articulaire ruimte — klinische redenering, geen bron in dit dossier.'
  },

  itb:{
    kenmerken:'<strong>Scherpe, brandende pijn aan de laterale zijde van de knie</strong> ter hoogte van het laterale femur epicondyl (Gerdy&#39;s tubercle), typisch optredend na een vaste loopafstand of -duur (het "impingement window": 30° knieflexie). <strong>Noble Compression Test</strong> is pathognomonisch: compressie van de IT-band 2–3 cm proximaal van het laterale gewrichtsspleet bij 30° flexie reproduceert de klacht. Pijn neemt toe bij heuvelaf lopen, trap afdalen en toename loopvolume. Diffuse warmte en zwelling boven het laterale epicondyl in acute stadia. <strong>Differentiaaldiagnose</strong>: laterale meniscuspathologie, popliteus tendinopathie, LCL-letsel, proximale tibiofibulaire instabiliteit. VISA-score en NPRS bij loopactiviteit zijn primaire uitkomstmaten.',
    oorzaken:'<strong>Compressie van het vette weefsel</strong> onder de IT-band op het laterale femur epicondyl bij 30° knieflexie (Fairclough et al., 2006 — Journal of Anatomy). <strong>Biomechanische risicofactoren</strong>: contralaterale bekkendaling (Trendelenburg) bij zwakke gluteus medius, verhoogde heupinwaartse rotatie, knieewaartse adductie (dynamische valgus). <strong>Trainingsbelasting</strong>: een te snelle opbouw van het loopvolume, heuvelaf lopen en hardlopen op schuine oppervlakken zijn de primaire provocatiefactoren — <em>een drempel van 10% is klinische redenering; het onderzoek van Nielsen et al. (2014) gebruikt minder dan 10% juist als referentiegroep en adviseert minder dan 30% over twee weken</em>. <strong>Anatomisch</strong>: smalle IT-band, prominente laterale femurcondyl en beenlengteverschil — <em>klinische redenering; de drempel van 1 cm is niet onderbouwd in dit dossier</em>. <strong>Looptechniek</strong>: een hogere pasfrequentie verlaagt de belasting op knie en heup (Schubert et al., 2014 — Sports Health); een drempel van 170 spm is klinische redenering, geen bronwaarde. Dat vrouwen vaker ITBS zouden hebben door bekkenbreedte en Q-hoek is <em>klinische redenering; de verhouding 2× is niet onderbouwd in dit dossier</em>.'
  }

};

// ── MANUELE THERAPIE PER PROTOCOL ──
// Per protocol: rol van manuele therapie, technieken (fase/doel/uitvoering/dosering),
// contra-indicaties en evidentie. Gerenderd in de tab "🤲 Manuele therapie".
const MANUEEL = {};



// ── NIEUWE PROTOCOLLEN (v43) ──
protocols.thp = {id:'thp',title:'Totale Heupprothese',subtitle:'Postoperatief revalidatieprotocol na totale heupartroplastiek — vroege mobilisatie, luxatiepreventie en progressieve abductorversterking',color:'#0891b2',icon:'🦴',
  phases:[
    {
      label:'Fase 1',
      title:'Pre-operatief & hospitalisatie — dag 0–1',
      weeks:'Pre-op — Dag 0–1',
      goals:[
        'Patiënt pre-operatief educeren over ingreep, luxatiepreventie en verwacht revalidatieverloop',
        'Vroege mobilisatie realiseren: eerste transfer en stappen binnen 24 uur postoperatief (bij voorkeur dag 0)',
        'Circulatoire en respiratoire complicaties preventief aanpakken (DVT, atelectase)',
        'Veilige transfers (bed–stoel–toilet) aanleren met correcte luxatievoorzorgen',
        'Pijncontrole optimaliseren in samenwerking met het multidisciplinaire team (VAS ≤ 4/10 in rust)'
      ],
      exercises:[
        {name:'Enkelpompen (circulatie-oefening)',params:[['Reps','20–30'],['Freq','elk wakker uur'],['Tempo','vlot ritmisch']],note:'Actieve dorsi- en plantairflexie in ruglig ter activatie van de kuitspierpomp. Standaardonderdeel van de vroege mobilisatie; <em>een tromboseverlagend effect is in dit dossier niet onderbouwd</em>. Combineren met farmacologische tromboprofylaxe volgens ziekenhuisprotocol.',cat:'cardio'},
        {name:'Quadriceps setting (isometrisch)',params:[['Sets','3'],['Reps','10'],['Hold','5 sec'],['Freq','3×/dag']],note:'Knie actief in extensie duwen tegen matras. Behoudt quadricepsactivatie en beperkt artrogene inhibitie. Pijnvrij uitvoerbaar vanaf dag 0, geen luxatierisico.',cat:'kracht'},
        {name:'Gluteal setting (isometrisch)',params:[['Sets','3'],['Reps','10'],['Hold','5 sec'],['Freq','3×/dag']],note:'Bilzen aanspannen in ruglig zonder heupbeweging. Vroege activatie van gluteus maximus zonder belasting op het kapsel. Fundament voor latere abductor- en extensortraining.',cat:'kracht'},
        {name:'Transfertraining bed–stand',params:[['Reps','2–3 transfers'],['Freq','2×/dag'],['Hulpmiddel','looprek of 2 krukken']],note:'Uitstappen langs geopereerde zijde. Bij posterieure benadering: heupflexie &gt; 90°, adductie voorbij middellijn en endorotatie vermijden (klassieke luxatievoorzorgen). Bij anterieure benadering: geforceerde extensie met exorotatie vermijden.',cat:'neuromusculair'},
        {name:'Stappen met loophulpmiddel',params:[['Afstand','10–50 m'],['Steun','volledige belasting tenzij anders voorgeschreven'],['Freq','2–3×/dag']],note:'Vroege gangrevalidatie: in de meta-analyse van Guerra (2015) zat de interventiegroep in 4 van de 5 trials binnen 24 uur uit bed en liep zij in 4 van de 5 binnen 48 uur; <em>mobilisatie op de operatiedag zelf staat daar niet in en is een praktijkafspraak</em>. Volledige steunname bij primaire THP is <em>klinische redenering, af te stemmen met de operateur</em>. Symmetrische staplengte en heup-kniestrekking bewaken.',cat:'cardio'},
        {name:'Actieve heupflexie ruglig (hielslide)',params:[['Sets','2'],['Reps','10'],['ROM','tot max 90° flexie (posterieur)'],['Freq','2×/dag']],note:'Hiel over matras naar bil schuiven binnen veilige amplitude. Bij posterieure benadering strikt onder 90° flexie blijven in de eerste weken. Traag en gecontroleerd, geen combinatie met adductie of endorotatie.',cat:'mobiliteit'}
      ],
      redflags:[
        'Acute hevige liespijn met beenverkorting en exorotatie/endorotatie-standafwijking — vermoeden van prothese-luxatie: onmiddellijk arts contacteren, niet mobiliseren',
        'Unilaterale kuitzwelling, roodheid, warmte of drukpijn — vermoeden diepe veneuze trombose (DVT)',
        'Acute dyspnoe, thoracale pijn of tachycardie — vermoeden longembolie: urgentie',
        'Koorts &gt; 38,5 °C, toenemende wondroodheid, purulente wonddrainage — vermoeden prothese-infectie',
        'Nieuw neurologisch deficit (voetheffersparese, sensibiliteitsverlies) — vermoeden n. ischiadicus- of n. femoralisletsel'
      ],
      criteria_stop:[
        'Plotse mechanische pijn of hoorbare klik met bewegingsblokkade tijdens oefening — stop en screen op luxatie',
        'VAS &gt; 7/10 tijdens mobilisatie ondanks analgesie',
        'Orthostatische intolerantie: duizeligheid, bleekheid of syncope bij verticalisatie',
        'Saturatiedaling of hemodynamische instabiliteit tijdens therapie',
        'Toenemende wondlekkage na oefensessie'
      ],
      criteria_go:[
        'Zelfstandige of onder supervisie veilige transfer bed–stoel–toilet',
        'Stappen ≥ 30 m met looprek of krukken met correcte belasting',
        'Luxatievoorzorgen correct verwoord en toegepast door patiënt',
        'VAS ≤ 4/10 in rust en ≤ 6/10 bij mobilisatie',
        'Geen tekenen van DVT, infectie of neurologisch deficit',
        'Trap van 3–4 treden haalbaar met hulpmiddel (indien vereist voor thuissituatie)'
      ],
      evidence:'<strong>ERAS-programma&#39;s</strong> combineren preoperatieve educatie, opioïdsparende multimodale analgesie en vroege mobilisatie als best practice (Wainwright et al., 2019 — Acta Orthop, ERAS Society consensus). <em>Een ligduur van 1–3 dagen staat niet in dat document; de consensus stelt bovendien dat er onvoldoende bewijs is dat de keuze van chirurgische techniek op zich het bereiken van ontslagcriteria beïnvloedt.</em> <strong>Vroege mobilisatie</strong> verkortte in een meta-analyse van 5 gerandomiseerde trials (622 deelnemers) de ligduur met <strong>1,8 dagen</strong> (95% BI 1,1–2,6), zonder toename van ongunstige uitkomsten; in 4 van de 5 trials zat de interventiegroep binnen 24 uur uit bed (Guerra et al., 2015 — Clin Rehabil). <em>Diepveneuze trombose was in die review geen uitkomstmaat; de eerdere claim daarover is geschrapt.</em> <strong>Tegenstrijdige evidentie over preoperatieve educatie:</strong> de Cochrane-review van 18 trials en 1463 deelnemers besluit dat het <strong>onzeker</strong> is of educatie meerwaarde heeft boven gebruikelijke zorg voor angst, pijn of functie — alle effectschattingen waren niet significant en van lage bewijskracht. De auteurs zien het wel als een zinvolle aanvulling met weinig risico, vooral bij patiënten met angst, depressie of onrealistische verwachtingen (McDonald et al., 2014 — Cochrane). <strong>Luxatie:</strong> beslissend is de weke-delenreconstructie — posterieur zónder herstel 4,46%, mét herstel 0,49% (RR 8,21; 95% BI 4,05–16,67); mét herstel zijn de cijfers voor anterolateraal (0,70%), direct lateraal (0,43%) en posterieur (1,01%) vergelijkbaar (Kwon et al., 2006). <em>Het eerdere bereik 0,5–3% en het tijdsvenster van 6–12 weken staan niet in die bron.</em>',
    },
    {
      label:'Fase 2',
      title:'Beschermingsfase — wondheling & basisactivatie',
      weeks:'Week 0–2',
      goals:[
        'Wondheling beschermen en luxatievoorzorgen consolideren in alle ADL-situaties',
        'Zelfstandig en veilig stappen met 2 krukken binnenshuis en korte afstanden buitenshuis',
        'Actieve heupmobiliteit binnen veilige amplitude herstellen (flexie tot 90°, abductie actief)',
        'Isometrische en vroege dynamische activatie van gluteaal- en quadricepsmusculatuur',
        'Oedeem en pijn controleren: VAS ≤ 3/10 in rust tegen einde week 2'
      ],
      exercises:[
        {name:'Looptraining met 2 krukken',params:[['Afstand','progressief 50 → 300 m'],['Freq','3–4×/dag'],['Patroon','3-puntsgang, volledige belasting']],note:'Gangkwaliteit primeert op afstand: symmetrische staplengte, actieve heupextensie in terminal stance, geen Duchenne-compensatie. Buitenshuis pas bij veilige binnenhuisgang.',cat:'cardio'},
        {name:'Heupabductie in ruglig (glijdend)',params:[['Sets','3'],['Reps','10–12'],['Tempo','traag gecontroleerd'],['Freq','2×/dag']],note:'Been over matras naar buiten glijden en terug tot neutraal — niet voorbij de middellijn adduceren (posterieure voorzorg). Vroege gluteus medius-activatie in onbelaste positie, essentieel tegen postoperatieve abductorinhibitie.',cat:'kracht'},
        {name:'Staande heupextensie aan steun',params:[['Sets','3'],['Reps','10'],['ROM','beperkt, geen geforceerde extensie'],['Freq','2×/dag']],note:'Gestrekt been rustig naar achter bewegen met romp rechtop. Activeert gluteus maximus functioneel. Bij anterieure benadering amplitude beperken: geen eindstandige extensie met exorotatie in de eerste 2 weken.',cat:'kracht'},
        {name:'Staande heupabductie aan steun',params:[['Sets','3'],['Reps','10–12'],['Focus','bekken horizontaal houden'],['Freq','2×/dag']],note:'Gestrekt been zijwaarts heffen zonder rompzwaai of bekkenkanteling. Compensatie via quadratus lumborum vermijden — kwaliteit boven amplitude. Voorbereiding op belaste abductortraining in fase 3.',cat:'kracht'},
        {name:'Bruggetje (bilateraal)',params:[['Sets','3'],['Reps','10'],['Hold','3 sec'],['Freq','1–2×/dag']],note:'Bekken heffen vanuit kroksliggende positie, beide voeten steunend. Veilige gesloten-keten activatie van gluteus maximus en hamstrings zonder luxatierisico. Neutrale lumbale stand bewaken.',cat:'kracht'},
        {name:'Traplopen met kruk en leuning',params:[['Treden','1 verdieping'],['Techniek','op: gezond been eerst; af: geopereerd been eerst'],['Freq','1–2×/dag']],note:'Klassiek trappatroon aanleren voor veilige thuisfunctie. Leuning vasthouden aan één zijde, kruk contralateraal. Controle op mediale kniecollaps en Trendelenburg-daling van het bekken.',cat:'neuromusculair'}
      ],
      criteria_go:[
        'Wond gesloten en droog, geen infectietekens',
        'Zelfstandig stappen ≥ 300 m met 2 krukken, vlot en veilig ganspatroon',
        'Actieve heupflexie 80–90° pijnarm mogelijk',
        'Staande abductie en extensie 3 × 10 correct uitvoerbaar zonder rompcompensatie',
        'VAS ≤ 3/10 in rust en ≤ 5/10 bij activiteit',
        'Luxatievoorzorgen foutloos toegepast in ADL (schoenen aantrekken, in/uit auto, toilet)'
      ],
      evidence:'<strong>Vroege therapeutische oefentherapie</strong> in de eerste weken wordt afgestemd op wondheling en pijnrespons — <em>klinische redenering; de toegeschreven publicatie is in dit dossier niet geverifieerd.</em> <strong>Bewegingsrestricties:</strong> in een meta-analyse van 6 studies en 1122 ingrepen luxeerde 1,5% in de groep mét restricties tegenover 1,0% zonder; patiënten zonder restricties hervatten hun activiteiten significant sneller en waren meer tevreden (van der Weegen et al., 2016 — Clin Rehabil). <em>Dat is een systematische review met meta-analyse, geen RCT, en de bevinding geldt voor zowel de posterieure als de anterolaterale benadering.</em> De <strong>directe anterieure benadering</strong> gaf betere scores gedurende de <strong>eerste zes weken</strong>, daarna geen verschil meer met de posterieure benadering; de auteurs vinden weinig bewijs voor betere kinematiek of langetermijnuitkomsten, en melden een langere operatieduur en een steile leercurve (Meermans et al., 2017 — Bone Joint J; 42 studies, merendeels matige tot lage kwaliteit). <strong>Heupspierzwakte</strong> is in deze fase aanwezig: in een cohort van 20 patiënten bedroeg het tekort 18% preoperatief, 12% na zes maanden en 6% na twee jaar (Rasch et al., 2010 — Acta Orthop). <em>In datzelfde cohort herstelden gang en balans wél binnen zes maanden; dat abductorzwakte de belangrijkste determinant van gangasymmetrie zou zijn, volgt er niet uit en is geschrapt.</em>',
    },
    {
      label:'Fase 3',
      title:'Mobiliteit & krachtopbouw',
      weeks:'Week 2–6',
      goals:[
        'Krukgebruik progressief afbouwen: van 2 krukken naar 1 kruk naar zelfstandig stappen zonder Trendelenburg',
        'Heupmobiliteit functioneel herstellen: flexie ≥ 90–100°, volwaardige extensie voor gangcyclus',
        'Progressieve krachttraining van heupabductoren, -extensoren en quadriceps opstarten',
        'Statische en dynamische balans op één been ontwikkelen (≥ 10 sec eenbenige stand)',
        'ADL volledig zelfstandig: wassen, aankleden, huishoudelijke taken, autorijden (vanaf ± week 4–6 na akkoord chirurg)'
      ],
      exercises:[
        {name:'Stationaire fiets (hoog zadel)',params:[['Duur','10 → 25 min'],['Weerstand','licht → matig'],['Zadel','hoog (heupflexie &lt; 90°)'],['Freq','dagelijks']],note:'Vanaf ± week 2–3 wanneer wond het toelaat. Hoog zadel beperkt heupflexie en respecteert posterieure voorzorgen. Uitstekende pijnvrije mobilisatie en cardiovasculaire basistraining.',cat:'cardio'},
        {name:'Heupabductie zijlig',params:[['Sets','3'],['Reps','10–15'],['Tempo','2-1-2'],['Freq','3×/week (om de dag)']],note:'Op de niet-geopereerde zijde liggen met kussen tussen de benen (voorkomt adductie voorbij middellijn bij het gaan liggen). Gestrekt bovenste been heffen in lichte extensie — geen heupflexie-compensatie via TFL. Kernoefening tegen abductorzwakte.',cat:'kracht'},
        {name:'Mini squat (0–45°)',params:[['Sets','3'],['Reps','10–12'],['Diepte','max 45° knieflexie'],['Freq','3×/week']],note:'Gesloten-keten versterking van quadriceps en glutei met symmetrische gewichtsverdeling — weegschaal of spiegel als feedback tegen ontlastend patroon van het geopereerde been.',cat:'kracht'},
        {name:'Step-up laag (10–15 cm)',params:[['Sets','3'],['Reps','8–10 per been'],['Focus','bekken horizontaal, knie boven voet'],['Freq','3×/week']],note:'Functionele unilaterale belasting. Geopereerd been stapt op, controleer Trendelenburg-daling van het contralaterale bekken als teken van gluteus medius-insufficiëntie. Steun in de buurt voor veiligheid.',cat:'kracht'},
        {name:'Eenbenige stand (statisch)',params:[['Sets','3–5'],['Hold','10 → 30 sec'],['Steun','vingertopsteun → vrij'],['Freq','dagelijks']],note:'Proprioceptieve en abductortraining op het geopereerde been. Bekken horizontaal houden — spiegelfeedback. Progressie: ogen dicht of zachte ondergrond zodra 30 sec stabiel.',cat:'stabiliteit'},
        {name:'Heupflexormobilisatie in schredestand',params:[['Sets','3'],['Hold','20–30 sec'],['Freq','2×/dag'],['Intensiteit','zacht, pijnvrij']],note:'Voorzichtige rek van iliopsoas ter herstel van heupextensie voor de terminal stance van de gangcyclus. Bij anterieure benadering pas na week 3–4 en steeds pijnvrij doseren (voorste kapsel en wond respecteren).',cat:'mobiliteit'}
      ],
      criteria_go:[
        'Stappen zonder krukken ≥ 500 m zonder Trendelenburg of Duchenne-compensatie',
        'Actieve heupflexie ≥ 90–100° en volledige heupextensie voor normale gangcyclus',
        'Eenbenige stand ≥ 30 sec stabiel op geopereerd been met horizontaal bekken',
        'Step-up 15 cm 3 × 10 correct zonder bekkendaling',
        'Traplopen alternerend zonder steun van leuning',
        'HOOS-subschaal ADL ≥ 70/100 of duidelijk stijgende trend'
      ],
      evidence:'<strong>Progressieve weerstandstraining</strong> vanaf één week postoperatief gaf in een kleine gerandomiseerde trial (n = 24) significant meer winst in 1RM leg press en abductiekracht en in krachtontwikkelingssnelheid dan conventionele revalidatie (Husby et al., 2009 — Arch Phys Med Rehabil). <em>In diezelfde trial werden géén verschillen in gangpatroon gevonden en was traplopen geen uitkomstmaat; die claims zijn geschrapt.</em> Wat gang betreft: door een kinesitherapeut aangestuurde oefentherapie verbeterde in een meta-analyse van 5 studies (234 deelnemers) de heupabductorkracht met 16 Nm (95% BI 10–22), de loopsnelheid met 6 m/min (1–11) en de cadans met 20 stappen/min (8–32) (Coulter et al., 2013 — J Physiother). <strong>Belangrijke nuance die de app omkeerde:</strong> in diezelfde review waren de oefeningen <strong>even effectief onbegeleid thuis als onder supervisie</strong> in een ambulante setting. Het <strong>Trendelenburg-patroon</strong> wordt als klinische maat voor abductorfunctie gebruikt, maar de bron die de test standaardiseerde waarschuwt vooral voor <strong>misinterpretatie</strong>: vals-positieven door pijn en gebrekkige medewerking, vals-negatieven door compensatie met romp- en bekkenspieren (Hardcastle &amp; Nade, 1985). <em>Dat het de meest sensitieve marker zou zijn, staat er niet in.</em> <em>Een persisterend abductortekort van 20–25% tot twee jaar postoperatief is in dit dossier niet onderbouwd en is geschrapt.</em>',
    },
    {
      label:'Fase 4',
      title:'Functionele fase — kracht, gang & uithouding',
      weeks:'Week 6–12',
      goals:[
        'Heupabductor- en extensorkracht opbouwen naar ≥ 80% van de contralaterale zijde',
        'Volledig symmetrisch ganspatroon consolideren over lange afstand (&gt; 30 min wandelen)',
        'Dynamische balans en gewichtsverplaatsing trainen voor valpreventie',
        'Fysieke activiteitsniveau opbouwen: fietsen buitenshuis, zwemmen (crawl-beenslag) hervatten',
        'Werk hervatten (zittend beroep vanaf ± week 4–6; fysiek belastend beroep voorbereiden richting week 12+)'
      ],
      exercises:[
        {name:'Leg press (bilateraal → unilateraal)',params:[['Sets','3'],['Reps','10–12'],['Intensiteit','60–70% 1RM'],['Freq','2–3×/week']],note:'Gedoseerde gesloten-keten krachttraining voor quadriceps en glutei. Amplitude beperken tot 90° heupflexie. Progressie naar unilateraal wanneer bilateraal 3 × 12 vlot lukt — asymmetrie objectiveren.',cat:'kracht'},
        {name:'Lateral band walk',params:[['Sets','3'],['Reps','15 stappen per richting'],['Band','licht → matig'],['Freq','2–3×/week']],note:'Belaste gluteus medius-training in functioneel patroon. Band boven de knieën starten (minder weerstand), later boven de enkels. Romp rechtop, kleine zijwaartse stappen, knieën licht gebogen.',cat:'kracht'},
        {name:'Hip thrust / eenbenig bruggetje',params:[['Sets','3'],['Reps','8–12'],['Progressie','bilateraal → eenbenig → met gewicht'],['Freq','2–3×/week']],note:'Maximale gluteus maximus-belasting zonder hoge heupflexie. Eenbenige variant traint tegelijk bekkenstabiliteit. Neutrale lumbale stand — geen lumbale hyperextensie als compensatie.',cat:'kracht'},
        {name:'Balanstraining op instabiele ondergrond',params:[['Sets','3'],['Hold','30–45 sec'],['Ondergrond','balanskussen of foam'],['Freq','3×/week']],note:'Eenbenige stand op zachte ondergrond met dynamische opdrachten (bal gooien, hoofdrotaties). Bedoeld om de houdingscontrole te trainen — klinische redenering — belangrijk voor valpreventie bij oudere patiënten.',cat:'stabiliteit'},
        {name:'Lunges (statisch → dynamisch)',params:[['Sets','3'],['Reps','8–10 per been'],['Diepte','progressief'],['Freq','2×/week']],note:'Functionele unilaterale kracht- en stabiliteitstraining. Voorwaartse uitvalspas met rechte romp en horizontaal bekken. Pas introduceren wanneer step-up 15 cm foutloos lukt. Geen pijn in de lies toegestaan.',cat:'kracht'},
        {name:'Wandelprogramma progressief',params:[['Duur','30 → 60 min'],['Tempo','stevig doorstappen'],['Terrein','vlak → licht heuvelachtig'],['Freq','5×/week']],note:'Cardiovasculaire opbouw en botbelasting ter bevordering van botbelasting — <em>de toepassing op osseo-integratie is extrapolatie buiten de onderzochte context</em>. Nordic walking wordt vaak gekozen om tempo en symmetrie te ondersteunen met behulp van de stokken — klinische redenering.',cat:'cardio'}
      ],
      criteria_go:[
        'Heupabductiekracht ≥ 80% van contralaterale zijde (handdynamometer)',
        'Wandelen ≥ 45–60 min zonder pijn, mank lopen of nadien toenemende klachten',
        '30-seconden sta-op-test (30s CST) binnen leeftijdsnorm',
        'Timed Up and Go (TUG) &lt; 10 sec',
        'Eenbenige stand op instabiele ondergrond ≥ 30 sec stabiel',
        'Harris Hip Score ≥ 80 of HOOS-subschalen ADL en pijn ≥ 80/100'
      ],
      evidence:'Gerichte <strong>abductorversterking</strong> blijft ook na week 6 prioritair — <em>klinische redenering; het cohort dat wél geverifieerd is, toont een resterend heupkrachttekort van 6% na twee jaar (Rasch et al., 2010).</em> Een <strong>laat gestart oefenprogramma</strong> verbeterde in een gerandomiseerde trial bij patiënten 4 tot 12 maanden na de ingreep na acht weken significant de spierkracht (heupabductoren 41,2%, extensoren 47,8%, flexoren 24,4%), de <strong>houdingsstabiliteit</strong> (36,8%) en de zelfgerapporteerde functie, terwijl de controlegroep niet veranderde (Trudelle-Jackson &amp; Smith, 2004 — Arch Phys Med Rehabil; 28 deelnemers voltooiden). <em>Gangfunctie was daar geen uitkomstmaat.</em> <strong>Taakgerichte gangtraining</strong> met tempo-variatie, richtingveranderingen en obstakels is <em>klinische redenering; de toegeschreven publicatie is in dit dossier niet geverifieerd.</em> <strong>Botbelastende activiteit</strong> is gunstig voor de botgezondheid in het algemeen (Kohrt et al., 2004 — ACSM position stand); <em>toepassing op peri-prothetische botdensiteit en osseo-integratie van cementloze componenten is extrapolatie buiten de onderzochte context.</em>',
    },
    {
      label:'Fase 5',
      title:'Return to activity — sport, werk & levenslange belasting',
      weeks:'Week 12+',
      goals:[
        'Terugkeer naar recreatieve sport en volwaardige beroepsactiviteit volgens belastingsprofiel',
        'Heupabductor- en extensorkracht ≥ 90% van contralaterale zijde (LSI ≥ 90%)',
        'Low-impact sporten volwaardig hervatten: fietsen, zwemmen, wandelen, golf, doubles tennis',
        'Levenslang onderhoudsprogramma voor kracht en botgezondheid verankeren (2×/week)',
        'Patiënt educeren over prothese-levensduur, belastingskeuzes en alarmsymptomen op lange termijn'
      ],
      exercises:[
        {name:'Progressieve krachttraining onderste lidmaat',params:[['Sets','3'],['Reps','8–12'],['Intensiteit','70–80% 1RM'],['Freq','2×/week']],note:'Leg press, hip thrust, step-up en abductie tegen weerstand als vast circuit. Zware diepe squats en eindstandige heupflexie onder belasting blijven af te raden — <em>expertredenering, niet met een bron onderbouwd</em>. Levenslang onderhoud is de norm, niet een tijdelijk programma.',cat:'kracht'},
        {name:'Fietsen buitenshuis / zwemmen',params:[['Duur','45–60 min'],['Intensiteit','matig (RPE 12–14)'],['Freq','3–4×/week']],note:'Aanbevolen low-impact cardiotraining na THP. Crawl-beenslag zonder beperking; schoolslag pas hervatten bij volledige pijnvrije mobiliteit en na akkoord van de chirurg (abductie-exorotatiecomponent).',cat:'cardio'},
        {name:'Single leg squat (partieel)',params:[['Sets','3'],['Reps','8 per been'],['Diepte','tot 60° knieflexie'],['Freq','2×/week']],note:'Hoogste functionele niveau van unilaterale controle. Bekken horizontaal, knie boven voet. Objectiveert en traint restasymmetrie — video-feedback gebruiken. Alleen bij LSI abductoren ≥ 85%.',cat:'kracht'},
        {name:'Dynamische balans- en agilitydrills',params:[['Type','tandemgang, zijwaartse passen, gecontroleerde richtingsveranderingen'],['Duur','10–15 min'],['Freq','2×/week']],note:'Voorbereiding op sporthervatting en valpreventie. Lichte impact (marcheren op plaats, lage skips) mag geïntroduceerd worden; herhaalde hoge impact (loopsport op verharding) enkel na expliciet akkoord van de chirurg.',cat:'neuromusculair'},
        {name:'Sportspecifieke opbouw',params:[['Type','golf, doubles tennis, langlaufen, wandelen bergop'],['Opbouw','techniek → duur → intensiteit'],['Freq','volgens sport']],note:'Low-impact sporten worden algemeen toegelaten; intermediate-impact (doubles tennis, skiën voor ervaren skiërs) bij goede spierconditie en eerdere ervaring. High-impact sporten (contactsport, sprint, singles competitie) worden doorgaans ontraden wegens luxatie- en slijtagerisico.',cat:'neuromusculair'},
        {name:'Onderhoudscircuit heup & romp',params:[['Sets','2–3'],['Oefeningen','abductie band + hip thrust + step-up + zijplank'],['Duur','20–25 min'],['Freq','2×/week levenslang']],note:'Structureel onderhoudsprogramma tegen sluipend krachtverlies en sarcopenie. Combineren met wandel- of fietsroutine. Jaarlijkse klinische en radiografische follow-up van de prothese aanbevelen.',cat:'kracht'}
      ],
      criteria_go:[
        'LSI heupabductie en heupextensie ≥ 90% (handdynamometer)',
        'Harris Hip Score ≥ 90 en HOOS-subschaal Sport/Vrije tijd ≥ 75/100',
        'TUG &lt; 8 sec en eenbenige stand ≥ 45 sec bilateraal vergelijkbaar',
        'Doelactiviteit (sport of fysiek beroep) 3 opeenvolgende sessies zonder pijn of reactieve zwelling',
        'Zelfstandig onderhoudsprogramma 2×/week structureel ingepland',
        'Patiënt kent alarmsymptomen (startpijn, liespijn bij belasting, beenlengtegevoel) en follow-up-schema'
      ],
      evidence:'<strong>Sporthervatting</strong> na THP is hoog: in een meta-analyse van 37 studies keerden patiënten gemiddeld terug tot <strong>104%</strong> van hun sportniveau vlak vóór de operatie en <strong>82%</strong> van het niveau van vóór de klachten; de tijd tot sporthervatting bedroeg <strong>16 tot 28 weken</strong> en tot werkhervatting 1 tot 17 weken, met gemiddeld 69% werkhervatting (Hoorntje et al., 2018 — Sports Med). <em>Het eerdere “binnen 6 maanden” dekt de bovengrens van 28 weken niet, en een rangschikking van sporttakken staat niet in die bron.</em> <strong>Expertconsensus</strong> laat low-impact sport zonder beperking toe, intermediate-impact bij voorgaande ervaring, en ontraadt herhaalde high-impact belasting — <em>klinische redenering op expertniveau; de toegeschreven enquête is in dit dossier niet geverifieerd.</em> De <strong>tienjaarsoverleving van moderne prothesen boven 95%</strong> komt uit registerdata — <em>een nationaal jaarrapport, in dit dossier niet nagekeken.</em> <strong>Levenslange krachttraining en botbelastende activiteit</strong> zijn gunstig voor botgezondheid en tegen sarcopenie (Kohrt et al., 2004); <em>de specifieke bescherming tegen periprothetisch botverlies is extrapolatie.</em>',
    }
  ],
  scores:['HOOS','HHS'],
  refs:'ERAS-consensus heup- en knieartroplastiek (Wainwright et al., 2019 — Acta Orthopaedica 91(1):3-19) | Vroege mobilisatie na heup- of knieartroplastiek, systematische review (Guerra et al., 2015 — Clinical Rehabilitation 29(9):844-54) | Luxatiecijfers en chirurgische benadering, meta-analyse (Kwon et al., 2006 — Clinical Orthopaedics and Related Research 447:34-8) | Oefentherapie na THP, systematische review (Coulter et al., 2013 — Journal of Physiotherapy 59(4):219-26) | Sport- en werkhervatting na THP, systematische review (Hoorntje et al., 2018 — Sports Medicine 48(7):1695-1726)',
  spiergroep:'gluteus maximus, gluteus medius, quadriceps'
};

BESCHRIJVING.thp = {
  kenmerken:'Eindstadium <strong>coxartrose</strong> presenteert zich met liespijn (soms uitstralend naar dij en knie), <strong>startpijn en ochtendstijfheid</strong>, progressieve beperking van endorotatie en flexie (capsulair patroon) en toenemende beperking in stappen, trappen en schoenen aantrekken. Radiografisch: gewrichtsspleetversmalling, osteofyten, subchondrale sclerose en cysten (<strong>Kellgren-Lawrence graad III–IV</strong>). Indicatie voor THP: invaliderende pijn en functieverlies ondanks adequaat conservatief beleid (oefentherapie, gewichtsreductie, analgesie) conform de NICE- en KNGF-richtlijnen. Postoperatief beeld: onmiddellijke verdwijning van de artrosepijn maar tijdelijke <strong>abductorzwakte, gangasymmetrie en Trendelenburg-patroon</strong>, met een luxatierisico dat vooral bepaald wordt door de kwaliteit van de weke-delenreconstructie: posterieur zónder herstel 4,46% tegenover 0,49% mét herstel, en mét herstel zijn de cijfers voor de drie gangbare benaderingen vergelijkbaar (Kwon et al., 2006). Bij de <strong>posterieure benadering</strong> blijft de combinatie flexie-adductie-endorotatie de risicorichting — <em>klinische redenering</em>. De anterieure benadering gaf betere scores in de eerste zes weken, daarna geen verschil meer (Meermans et al., 2017 — Bone Joint J); <em>meralgia paraesthetica en voorste instabiliteit zijn klinische redenering, niet uit die bron.</em> Uitkomsten worden gevolgd met <strong>HOOS en Harris Hip Score</strong>.',
  oorzaken:'<strong>Primaire coxartrose</strong> ontstaat door multifactoriële degeneratie van het gewrichtskraakbeen met subchondrale botremodellering en synoviale laaggradige inflammatie; het levenslange risico op symptomatische heupartrose bedraagt <strong>25,3%</strong> (95% BI 21,3–29,3) tegen de leeftijd van 85 jaar (Murphy et al., 2010 — Osteoarthritis Cartilage). <strong>Opvallend in diezelfde bron:</strong> het risico verschilde niet naar geslacht, etniciteit, opleidingsniveau of eerder heupletsel, en er werd <strong>geen verband met BMI</strong> gevonden — obesitas als belangrijke risicofactor voor héúpartrose is dus niet door deze bron gedekt. Leeftijd, genetische aanleg en zware fysieke arbeid zijn <em>klinische redenering</em>. <strong>Secundaire coxartrose</strong> volgt uit femoro-acetabulair impingement (cam/pincer), <strong>heupdysplasie</strong>, avasculaire femurkopnecrose, ziekte van Perthes, epifysiolyse, inflammatoire artritis of posttraumatische incongruentie — <em>de toegeschreven publicatie is in dit dossier niet geverifieerd.</em> Prothesetypes: <strong>cementloze fixatie</strong> (osseo-integratie via poreuze of hydroxyapatiet-coating, voorkeur bij goede botkwaliteit), <strong>gecementeerde fixatie</strong> (polymethylmethacrylaat, voorkeur bij osteoporotisch bot en hogere leeftijd) en hybride combinaties; lagerkoppels variëren van metaal- of keramiek-op-<strong>highly cross-linked polyethyleen</strong> (huidige standaard) tot keramiek-op-keramiek, en <strong>dual mobility-cups</strong> reduceren het luxatierisico bij hoogrisicopatiënten (registerdata melden een tienjaarsoverleving boven 95%; <em>een nationaal jaarrapport, in dit dossier niet nagekeken</em>).'
};

protocols.men = {id:'men',title:'Meniscusletsel',subtitle:'Conservatief & postoperatief revalidatieprotocol (partiële meniscectomie APM en meniscushechting) — van acute fase tot return to sport',color:'#65a30d',icon:'🦵',
  phases:[
    {
      label:'Fase 1',
      title:'Acute / postoperatieve fase — bescherming, pijn- & zwellingcontrole',
      weeks:'Week 0–2 (APM/conservatief) | Week 0–4 (hechting)',
      goals:[
        'Pijn en effusie reduceren: VAS ≤ 3/10 in rust en stroke-test ≤ graad 1+',
        'Volledige actieve knie-extensie herstellen (0° — geen extensiedeficit tolereren)',
        'Quadricepsactivatie herwinnen: actieve quadriceps-set met volledige patellabeweging, SLR zonder extension lag',
        'Belastings- en ROM-restricties respecteren na hechting: flexie beperkt tot 90° gedurende 4 weken, partieel steunen met krukken volgens chirurgisch protocol',
        'Patiënt educeren over natuurlijk herstel, zonering (rood-rood vs wit-wit) en gefaseerde belastingsopbouw'
      ],
      exercises:[
        {name:'Quadriceps-setting (isometrisch)',params:[['Sets','3'],['Reps','15–20'],['Hold','5–10 sec'],['Freq','3–4×/dag']],note:'Handdoekrol onder de knie, quadriceps maximaal aanspannen met patellabeweging naar craniaal. Direct postoperatief starten: remt arthrogene spierinhibitie (AMI) en effusiegerelateerde quadricepsuitval. Ook conservatief eerste keuze bij pijnlijke, gezwollen knie.',cat:'kracht'},
        {name:'Heel slides (actieve flexiemobilisatie)',params:[['Sets','3'],['Reps','10–15'],['Freq','3×/dag'],['Limiet','90° na hechting (eerste 4 wk)']],note:'Ruglig, hiel over onderlaag naar zitvlak schuiven binnen pijngrens. KRITIEK na meniscushechting: flexie > 90° verhoogt de compressie- en schuifkracht op het hechtingsgebied van de posterieure hoorn — strikt limiteren tot 90° gedurende 4 weken. Na APM en conservatief: pijngestuurd vrij mobiliseren.',cat:'mobiliteit'},
        {name:'Straight leg raise (SLR)',params:[['Sets','3'],['Reps','10'],['Tempo','2-2-2'],['Freq','2–3×/dag']],note:'Gestrekt been heffen tot ± 45° zonder extension lag. Bij lag: eerst quadriceps-sets en NMES verderzetten. Veilig na zowel APM als hechting omdat de knie in extensie blijft (geen meniscale schuifbelasting).',cat:'kracht'},
        {name:'Patellamobilisaties & extensiestretch',params:[['Duur','5 min'],['Richting','craniaal/caudaal/mediolateraal'],['Freq','2×/dag']],note:'Passieve patellamobilisatie plus hielprop-extensiestretch (hiel op rol, knie vrij hangend). Volledige extensie is de eerste prioriteit: een extensiedeficit > 5° na 2 weken voorspelt persisterende functiebeperking en artrofibrose.',cat:'mobiliteit'},
        {name:'Gangrevalidatie met krukken',params:[['Belasting','APM: op geleide van pijn → vol | hechting: partieel volgens chirurg'],['Focus','symmetrisch afwikkelen, geen flexumgang'],['Freq','dagelijks']],note:'Na APM meestal onmiddellijk steunen zoals getolereerd; na hechting frequent 2–4 weken partieel steunen (protocolafhankelijk, zeker bij radiaire en wortelhechtingen strenger). Krukken pas afbouwen bij pijnvrij, symmetrisch gangpatroon zonder hinken.',cat:'neuromusculair'},
        {name:'Enkelpompen & cryotherapie',params:[['Reps','20–30 pompen/uur'],['Ijs','15–20 min'],['Freq','4–6×/dag'],['Positie','elevatie']],note:'Oedeemdrainage en tromboseprofylaxe in de eerste postoperatieve week. Cryotherapie met compressie reduceert effusie en pijnmedicatiegebruik. Conservatief: idem bij acute hydrops na traumatische scheur.',cat:'cardio'}
      ],
      redflags:[
        'Slotfenomeen (locked knee): knie kan niet volledig gestrekt worden door geluxeerd meniscusfragment — orthopedisch consult binnen enkele dagen (buckethandle-scheur)',
        'Acute hemartros binnen 2 uur na trauma: wijst op perifere (vasculaire) meniscusscheur of geassocieerd VKB-letsel — beeldvorming vereist',
        'Koorts, toenemende roodheid of warmte postoperatief: verdenking septische artritis — dringende verwijzing',
        'Kuitpijn, unilateraal pittingoedeem of positieve Homans: diepe veneuze trombose uitsluiten',
        'Progressief neurovasculair deficit (voetheffersparese, sensibiliteitsverlies) na chirurgie'
      ],
      criteria_stop:[
        'Nieuw of recidiverend slotfenomeen tijdens oefentherapie — staak flexiebelasting en contacteer verwijzer',
        'Toename effusie ≥ 1 graad op stroke-test die > 24 u aanhoudt na oefensessie — belasting één niveau terugschroeven',
        'VAS > 5/10 tijdens of > 3/10 aanhoudend 24 u na oefening',
        'Flexie > 90° of dieptekniebuigingen binnen 4 weken na meniscushechting',
        'Scherpe gewrichtsspleetpijn met wegklap-gevoel (giving way) bij belaste oefeningen'
      ],
      criteria_go:[
        'Volledige actieve extensie (0°, symmetrisch met contralateraal) bereikt',
        'Flexie ≥ 90° pijnvrij (hechting: exact binnen de 90°-limiet blijvend)',
        'SLR zonder extension lag, quadricepscontractie zichtbaar en palpabel',
        'Effusie ≤ graad 1+ op stroke-test, VAS in rust ≤ 2/10',
        'Pijnvrij stappatroon: APM zonder krukken, hechting correct partieel steunend volgens protocol',
        'Geen slotklachten of pseudo-locking tijdens ADL-activiteiten'
      ],
      evidence:'Bij <strong>niet-obstructieve meniscusscheuren</strong> (geen slotklachten) is oefentherapie een volwaardig alternatief: de <strong>ESCAPE-trial</strong> toonde bij 321 deelnemers van 45 tot 70 jaar dat kinesitherapie niet-inferieur is aan artroscopische partiële meniscectomie op de IKDC over 24 maanden, met een verschil van 3,6 punten — <em>29% van de oefengroep werd binnen die 24 maanden alsnog geopereerd</em> (van de Graaf et al., 2018 — JAMA). De <strong>FIDELITY-trial</strong> vond bij 146 patiënten van 35 tot 65 jaar met een degeneratieve mediale scheur <strong>en zonder gonartrose</strong> geen verschil tussen meniscectomie en sham-chirurgie na 12 maanden (Sihvonen et al., 2013 — N Engl J Med). Vroege <strong>quadricepsactivatie</strong> en volledig extensieherstel zijn prioritair omdat effusie via arthrogene spierinhibitie de quadriceps reflexmatig uitschakelt (Rice &amp; McNair, 2010 — Semin Arthritis Rheum). Na <strong>meniscushechting</strong> geldt een tragere progressie: flexiebeperking tot 90° en gedoseerde belasting in de eerste 4 weken — <em>praktijkprotocol; de toegeschreven narratieve review is niet tegen de volledige tekst gelegd</em> (Cavanaugh &amp; Killian, 2012). De <strong>JOSPT-praktijkrichtlijn</strong> voor meniscus- en kraakbeenletsel is het hoogste bewijsniveau in dit dossier; <em>de afzonderlijke aanbevelingen zijn hier niet tegen de volledige richtlijntekst gelegd</em> (Logerstedt et al., 2018 — JOSPT).',
    },
    {
      label:'Fase 2',
      title:'Vroege revalidatie — mobiliteit, normalisatie gang & basiskracht',
      weeks:'Week 2–6 (APM/conservatief) | Week 4–8 (hechting)',
      goals:[
        'Flexie progressief herstellen: ≥ 120° (hechting: pas na week 4 voorbij 90° opbouwen)',
        'Normaal, symmetrisch gangpatroon zonder krukken op vlak terrein en trappen',
        'Quadriceps- en hamstringkracht opbouwen in gesloten keten binnen 0–60° flexie',
        'Effusie volledig elimineren (stroke-test graad 0) bij toenemende belasting',
        'Proprioceptieve basis leggen via steunname-oefeningen op stabiele ondergrond'
      ],
      exercises:[
        {name:'Stationaire fiets (mobiliserend → licht belastend)',params:[['Duur','10 → 25 min'],['Weerstand','minimaal → licht'],['Freq','dagelijks'],['Voorwaarde','flexie ≥ 100–110°']],note:'Eerst halve omwentelingen (pendelen) tot volledige rotatie lukt. Uitstekende pijnvrije flexiemobilisator en cardio-onderhoud. Na hechting pas volledige omwentelingen vanaf week 4–6, zadel initieel hoog.',cat:'cardio'},
        {name:'Mini squat (0–60°)',params:[['Sets','3'],['Reps','12–15'],['ROM','0–60°'],['Freq','1×/dag']],note:'Gesloten-keten quadricepstraining met beperkte meniscale compressie. Dieptebeperking tot 60°: de contactdruk op de menisci neemt toe bij diepere flexie (praktijkgrens, het verloop is niet met een bron onderbouwd). Na hechting: pas starten bij volledige steunname, geen gecombineerde flexie-rotatie.',cat:'kracht'},
        {name:'Leg press (lichte belasting, 0–60°)',params:[['Sets','3'],['Reps','10–12'],['Gewicht','licht → matig'],['Freq','3×/week']],note:'Gedoseerde bilaterale krachtopbouw met controleerbare belasting. Progressie naar unilateraal wanneer bilateraal 3×12 pijnvrij en zonder effusiereactie lukt. Hechting: één week later starten dan APM en trager progresseren in gewicht.',cat:'kracht'},
        {name:'Hamstring curl (buiklig of machine)',params:[['Sets','3'],['Reps','12'],['Weerstand','licht'],['Freq','3×/week']],note:'Geïsoleerde hamstringversterking. OPGELET na hechting van de posterieure hoorn: de semimembranosus trekt via het kapsel aan het mediale achterhoorncomplex — weerstandsflexie pas later en aanvankelijk zonder gewicht (praktijkprotocol; het weeknummer is niet met een bron onderbouwd).',cat:'kracht'},
        {name:'Eénbenige stand op stabiele ondergrond',params:[['Sets','3'],['Hold','30 sec'],['Progressie','ogen dicht'],['Freq','2×/dag']],note:'Proprioceptieve heropbouw: meniscusletsel en artroscopie verstoren mechanoreceptorfunctie van kapsel en meniscusrand. Bekken horizontaal, knie licht gebogen, geen valgus. Basis voor latere balanstraining op instabiele ondergrond.',cat:'stabiliteit'},
        {name:'Heup abductie & extensie met band',params:[['Sets','3'],['Reps','15'],['Band','licht → matig'],['Freq','3×/week']],note:'Gluteus medius en maximus versterken ter controle van het dynamisch valgusmoment — proximale controle vermindert de mediale compartimentsbelasting en beschermt het (genezende) mediale meniscusweefsel bij belaste taken.',cat:'kracht'}
      ],
      criteria_go:[
        'Flexie ≥ 120° pijnvrij, extensie 0° behouden',
        'Stroke-test graad 0 (geen effusie), ook 24 u na belaste oefensessies',
        'Traplopen op- en afwaarts reciprook en pijnvrij',
        'Mini squat 0–60° 3×15 zonder gewrichtsspleetpijn',
        'Eénbenige stand 30 sec stabiel met gesloten ogen',
        'Hechting: 6–8 weken postoperatief verstreken vóór start belaste flexie voorbij 90° (chirurgische goedkeuring)'
      ],
      evidence:'<strong>Gesloten-keten oefeningen binnen 0–60°</strong> genieten de voorkeur: kadaveronderzoek toont dat het contactgebied <em>in onbelaste toestand</em> bij 90° flexie naar <strong>posterolateraal</strong> verschuift en dat de menisci het draagvlak sterk vergroten; onder belasting draagt lateraal vooral de meniscus, mediaal ongeveer gelijk verdeeld tussen meniscus en blootliggend kraakbeen (Walker &amp; Erkman, 1975 — Clin Orthop Relat Res). <em>Het eerder vermelde aandeel van 85–90% voor de posterieure hoorns staat niet in die bron en is geschrapt.</em> Bij conservatief beleid was 12 weken progressieve oefentherapie gelijkwaardig aan meniscectomie op de KOOS4 na twee jaar (verschil 0,9 punten), met <strong>betere spierkracht in de oefengroep na drie maanden</strong> — door de auteurs uitdrukkelijk beperkt tot de korte termijn; 19% stapte alsnog over naar chirurgie, zonder extra winst (Kise et al., 2016 — BMJ). Na <strong>meniscushechting</strong> is een tragere opbouw gangbaar — <em>praktijkprotocol</em>. <strong>Tegenstrijdige evidentie:</strong> een systematische review over belasten na hechting vond met beperkte belasting 70–94% goede resultaten en met onmiddellijke belasting en vroege mobilisatie 64–96%, dus géén aantoonbare meerwaarde van belastingsbeperking (VanderHave et al., 2015 — Sports Health). De gepoolde <strong>faalkans van een hechting</strong> bedraagt 21% (Eberbach et al., 2018 — KSSTA). Volledige effusieresolutie vóór krachtprogressie voorkomt persisterende <strong>quadriceps-inhibitie</strong> (Rice &amp; McNair, 2010).',
    },
    {
      label:'Fase 3',
      title:'Krachtopbouw & neuromusculaire controle',
      weeks:'Week 6–12 (APM/conservatief) | Week 8–16 (hechting)',
      goals:[
        'Quadriceps- en hamstringkracht ≥ 75–80% van contralateraal (LSI, dynamometrie)',
        'Volledige en pijnvrije ROM inclusief eindstandige flexie (hurken pas vrijgeven na hechting vanaf week 12–16)',
        'Eénbenige gesloten-keten controle tot 90° flexie zonder dynamisch valgus',
        'Neuromusculaire training op instabiele ondergrond integreren',
        'Cardiovasculaire conditie herstellen via fietsen, crosstrainer en zwemmen'
      ],
      exercises:[
        {name:'Squat progressief (0–90°)',params:[['Sets','3–4'],['Reps','8–12'],['Gewicht','lichaamsgewicht → extern belast'],['Freq','3×/week']],note:'ROM-uitbreiding naar 90° wanneer effusievrij en pijnvrij. Diepe squat (> 90°) en hurkzit pas in fase 4; na hechting ten vroegste vanaf week 12–16 wegens hoge posterieure hoorn-belasting bij diepe flexie.',cat:'kracht'},
        {name:'Bulgaarse split squat',params:[['Sets','3'],['Reps','8–10 per been'],['Tempo','3-1-1'],['Freq','2–3×/week']],note:'Unilaterale kracht en frontale-vlakcontrole. Achterste voet op bank, romp rechtop, knie boven voet. Excellente overgang naar sportspecifieke unilaterale belasting. Bewaken: geen mediale knieval, geen gewrichtsspleetpijn.',cat:'kracht'},
        {name:'Leg extension (open keten, 90–30°)',params:[['Sets','3'],['Reps','10–12'],['Gewicht','progressief'],['Freq','2–3×/week']],note:'Geïsoleerde quadricepshypertrofie — veilig voor de meniscus want open keten genereert geen relevante meniscale compressie. Effectiefste middel om persisterend quadricepsdeficit na meniscuschirurgie weg te werken.',cat:'kracht'},
        {name:'Balanstraining op instabiele ondergrond',params:[['Sets','3'],['Duur','45 sec'],['Ondergrond','kussen → BOSU'],['Freq','3×/week']],note:'Progressie van fase 2: instabiele ondergrond, dubbeltaken (bal gooien), perturbaties door therapeut. Herstelt proprioceptieve reflexactiviteit en dynamische kniestabiliteit vereist voor wend- en keerbewegingen.',cat:'stabiliteit'},
        {name:'Step-up & step-down (verhoogde box)',params:[['Sets','3'],['Reps','10 per been'],['Hoogte','15 → 25 cm'],['Freq','3×/week']],note:'Excentrische quadricepscontrole bij step-down is de sleutel tot pijnvrij trap aflopen en dalen. Video- of spiegelcontrole op bekkendaling en knievalgus. Hoogte pas verhogen bij foutloze uitvoering.',cat:'neuromusculair'},
        {name:'Romanian deadlift (RDL)',params:[['Sets','3'],['Reps','10'],['Gewicht','licht → matig'],['Freq','2×/week']],note:'Posterieure keten (hamstrings, gluteï) versterken met minimale knieflexie — meniscusvriendelijke hamstringbelasting. Heupscharnier aanleren beschermt de knie bij tillen en landen. Neutrale rug bewaken.',cat:'kracht'}
      ],
      criteria_go:[
        'Quadriceps- en hamstring-LSI ≥ 80% (handheld dynamometer of isokinetisch)',
        'Volledige symmetrische ROM zonder eindstandige gewrichtsspleetpijn',
        'Step-down 20–25 cm 3×10 foutloos zonder valgus of bekkendaling',
        'Eénbenige squat tot 60° gecontroleerd en pijnvrij',
        'Geen effusiereactie (stroke-test 0) na zware krachtsessies',
        'Hechting: minimum week 12 postoperatief bereikt vóór introductie van loop- en impactbelasting'
      ],
      evidence:'Persisterende <strong>quadriceps-zwakte</strong> is een kernprobleem na meniscectomie: vier jaar na de ingreep was de knie-extensorkracht aan de geopereerde zijde significant lager, en een sterkere quadriceps hing samen met minder pijn en betere functie en levenskwaliteit (r = 0,4 tot 0,6) (Ericsson et al., 2006 — Arthritis Rheum). <em>Het eerder vermelde krachtdeficit van 20% staat niet in die bron en is geschrapt; het tijdschrift was ook onjuist vermeld.</em> Progressieve neuromusculaire en krachttraining geeft bij degeneratieve scheuren een <strong>gelijkwaardige kniefunctie</strong> als meniscectomie en <strong>betere spierkracht</strong> op korte termijn — <em>niet een betere kniefunctie, zoals eerder vermeld</em> (Kise et al., 2016 — BMJ). Na <strong>meniscushechting</strong> wordt loopbelasting doorgaans later geïntroduceerd dan na meniscectomie — <em>praktijkprotocol; de weeknummers en de helingsduur van de rood-witte zone zijn in dit dossier niet onderbouwd</em>. <strong>Excentrische step-down training</strong> met bewegingskwaliteitsfeedback is klinische redenering; <em>de toeschrijving aan de praktijkrichtlijn is niet tegen de volledige tekst gelegd</em>.',
    },
    {
      label:'Fase 4',
      title:'Functionele & sportspecifieke training — loopheropbouw & plyometrie',
      weeks:'Week 12–20 (APM/conservatief) | Week 16–24 (hechting)',
      goals:[
        'Progressief looprogramma volbrengen: continu 30 min pijnvrij zonder effusiereactie',
        'Kracht-LSI ≥ 90% voor quadriceps en hamstrings',
        'Plyometrische belasting opbouwen: bilateraal → unilateraal, verticaal → horizontaal',
        'Wend-, keer- en versnellingspatronen sportspecifiek heraanleren',
        'Vertrouwen en psychologische gereedheid opbouwen (angst voor herletsel adresseren)'
      ],
      exercises:[
        {name:'Loopheropbouw (walk-jog protocol)',params:[['Schema','2 min jog / 2 min walk × 6 → continu 30 min'],['Progressie','≤ 10% volume/week'],['Freq','3×/week']],note:'Start bij LSI ≥ 80%, effusievrij en pijnvrij traplopen. Vlakke, zachte ondergrond. Na hechting pas vanaf week 16 en trager opbouwen. Monitor: gewrichtsspleetpijn of zwelling binnen 24 u = één stap terug.',cat:'cardio'},
        {name:'Bilaterale sprongen (box & verticaal)',params:[['Sets','3'],['Reps','8–10'],['Focus','zachte, geluidloze landing'],['Freq','2×/week']],note:'Eerste plyometrische stap: landing met heup- en kniebuiging, knieën boven voeten. Landingskwaliteit primeert op hoogte. Pas starten bij LSI ≥ 85% en foutloze step-down. Hechting: 4 weken later dan APM.',cat:'neuromusculair'},
        {name:'Unilaterale hop-progressie',params:[['Sets','3'],['Reps','6–8 per been'],['Volgorde','plaats → voorwaarts → lateraal → diagonaal'],['Freq','2×/week']],note:'Opbouw naar hoptest-batterij. Laterale en diagonale hops belasten de meniscusrand rotatoir — laatste in de progressie. Stopcriterium: gewrichtsspleetpijn, instabiliteitsgevoel of asymmetrische landing.',cat:'neuromusculair'},
        {name:'Agility-ladder & richtingsveranderingen',params:[['Duur','15 min'],['Intensiteit','50% → 90% snelheid'],['Patroon','vooraf gepland → reactief'],['Freq','2×/week']],note:'Progressief snijwerk (cutting): eerst brede bochten aan lage snelheid, dan scherpe richtingsveranderingen op signaal. Rotatie onder axiale belasting is het typische meniscale letselmechanisme — geleidelijkheid is cruciaal, zeker na hechting.',cat:'neuromusculair'},
        {name:'Zware krachttraining onderhoud',params:[['Sets','3–4'],['Reps','6–8'],['Oefeningen','squat, leg press, RDL, split squat'],['Freq','2×/week']],note:'Kracht consolideren richting LSI ≥ 90–100%. Volledige ROM nu toegestaan indien pijnvrij; diepe hurkzit na hechting pas na week 16–20 en zonder rotatiecomponent opbouwen.',cat:'kracht'},
        {name:'Sportspecifieke drills',params:[['Duur','20–30 min'],['Inhoud','baltechniek, sprintopbouw, sprong-landing in context'],['Freq','2×/week']],note:'Gecontroleerde terugkeer naar teamtraining zonder contact/competitie. Chaotische, reactieve elementen geleidelijk toevoegen. sRPE-monitoring: acute belastingspieken vermijden bij heropstart.',cat:'neuromusculair'}
      ],
      criteria_go:[
        'Continu 30 min hardlopen pijnvrij zonder effusiereactie binnen 24 u',
        'Kracht-LSI ≥ 90% quadriceps en hamstrings',
        'Hoptest-batterij (single, triple, crossover, 6m-timed) LSI ≥ 90%',
        'Richtingsveranderingen op hoge snelheid pijnvrij en zonder aarzeling',
        'IKDC-score ≥ 80 of KOOS-subschalen binnen normaalwaarden',
        'Hechting: minimum 6 maanden postoperatief vóór vrijgave pivoterende sporten (chirurgische goedkeuring)'
      ],
      evidence:'<strong>Progressieve plyometrische opbouw</strong> van bilateraal naar unilateraal en van sagittaal naar rotatoir respecteert de toenemende meniscale schuif- en rotatiebelasting — <em>klinische redenering; de toeschrijving aan de praktijkrichtlijn is niet tegen de volledige tekst gelegd</em>. Een <strong>hoptest-LSI ≥ 90%</strong> gecombineerd met kracht-LSI ≥ 90% is de gangbare testbatterij; de onderbouwing komt uit onderzoek naar <strong>VKB-reconstructie</strong>, waar een symmetrischer quadricepskracht vóór terugkeer het herletselcijfer significant verlaagde en elke maand uitstel tot negen maanden het risico met 51% deed dalen; het verschil tussen slagen en zakken voor de volledige testbatterij (5,6% tegenover 38,2%) was <em>niet significant (HR 0,16; p = 0,075)</em> (Grindem et al., 2016 — BJSM) — <em>overdracht naar meniscusletsel is klinische redenering</em>. Na <strong>geïsoleerde meniscushechting</strong> bedroeg de gemiddelde vertraging tot sporthervatting <strong>4,3 tot 6,5 maanden</strong> en keerde 89% terug naar het niveau van vóór het letsel, bij 664 patiënten in 28 studies (Eberbach et al., 2018 — KSSTA). <em>De vergelijkende tijdslijn van 7–9 weken na meniscectomie staat niet in die bron en is een praktijkprotocol.</em> <strong>Kinesiofobie</strong> en lage psychologische gereedheid meewegen is <em>klinische redenering</em>; de eerder vermelde citatie dekte die uitspraak niet.',
    },
    {
      label:'Fase 5',
      title:'Return to sport & langetermijnpreventie',
      weeks:'Week 20–26+ (APM/conservatief) | Maand 6–9 (hechting)',
      goals:[
        'Volledige, onbeperkte sporthervatting inclusief contact- en pivotsporten',
        'Kracht- en hop-LSI ≥ 95–100% behouden via onderhoudsprogramma',
        'Preventief neuromusculair programma structureel integreren (2×/week)',
        'Langetermijn kniegezondheid bewaken: gewichtsbeheer, belastingsmanagement, artrose-educatie',
        'Zelfmanagement: patiënt herkent overbelastingssignalen (effusie, gewrichtsspleetpijn) en past belasting autonoom aan'
      ],
      exercises:[
        {name:'Volledige teamtraining & competitieopbouw',params:[['Opbouw','beperkte speeltijd → volledig'],['Monitoring','effusie & pijn 24 u post'],['Freq','sportafhankelijk']],note:'Gefaseerde competitiehervatting: eerst volledige contacttraining, dan beperkte wedstrijdminuten. Na hechting pas volledig vrijgeven vanaf maand 6 (perifere longitudinale hechting) tot 9 (radiair/wortel). Effusie na sport = belastingssignaal.',cat:'neuromusculair'},
        {name:'Preventief neuromusculair programma (FIFA 11+ type)',params:[['Duur','20 min'],['Inhoud','plyo, balans, kracht, landing'],['Freq','2–3×/week als warming-up']],note:'Gestructureerde neuromusculaire warming-up reduceert knieletsels bij pivotsporters. Levenslange integratie aanbevolen na meniscusletsel gezien verhoogd risico op nieuw knieletsel en artrose.',cat:'neuromusculair'},
        {name:'Zware bilaterale & unilaterale kracht (onderhoud)',params:[['Sets','3–4'],['Reps','5–8'],['Intensiteit','75–85% 1RM'],['Freq','2×/week']],note:'Quadricepskracht op peil houden is de belangrijkste beïnvloedbare beschermfactor tegen posttraumatische artrose na meniscusletsel. Volledige ROM, inclusief diepe squat indien pijnvrij.',cat:'kracht'},
        {name:'Reactieve agility onder vermoeidheid',params:[['Duur','10–15 min'],['Timing','einde training'],['Inhoud','reactief snijwerk, duelvormen'],['Freq','1–2×/week']],note:'Letsels treden vaak op onder vermoeidheid wanneer neuromusculaire controle daalt. Reactieve wend- en keerdrills op het einde van de training bouwen vermoeidheidsresistente kniecontrole op.',cat:'neuromusculair'},
        {name:'Cardio-onderhoud met lage gewrichtsbelasting',params:[['Duur','30–45 min'],['Type','fietsen, zwemmen, crosstrainer'],['Freq','1–2×/week aanvullend']],note:'Aeroob onderhoud met minimale meniscale compressie als aanvulling op impactsport. Ondersteunt gewichtsbeheer: 1 kg gewichtsverlies gaf bij ouderen met gonartrose ongeveer een viervoudige daling van de kniebelasting per stap (Messier et al., 2005).',cat:'cardio'},
        {name:'Jaarlijkse functionele screening',params:[['Inhoud','kracht-LSI, hoptests, KOOS/IKDC'],['Freq','1×/jaar of bij klachten'],['Actie','bijsturen onderhoudsprogramma']],note:'Periodieke objectieve hertest detecteert sluipend krachtverlies of functiedaling vroegtijdig. KOOS-daling of recidiverende effusie zijn indicaties voor belastingsherziening en klinische herevaluatie.',cat:'stabiliteit'}
      ],
      criteria_go:[
        'Kracht- en hoptest-LSI ≥ 95% bij herhaalde meting',
        'Volledige trainings- en wedstrijdbelasting gedurende ≥ 4 weken zonder pijn, effusie of slotklachten',
        'IKDC ≥ 90 en KOOS Sport/Rec ≥ 85',
        'Preventief programma 2×/week zelfstandig geïntegreerd in trainingsroutine',
        'Hechting: 6–9 maanden postoperatief verstreken én chirurgische vrijgave voor onbeperkte pivotbelasting',
        'Patiënt hanteert zelfstandig belastingsmonitoring en herkent recidiefsignalen'
      ],
      evidence:'<strong>Meniscusletsel verhoogt het artroserisico substantieel:</strong> 10 tot 20 jaar na een vastgestelde VKB- of meniscusscheur heeft <strong>gemiddeld 50%</strong> van de patiënten artrose met pijn en functiebeperking (Lohmander et al., 2007 — AJSM). <strong>Tegenstrijdige evidentie:</strong> dezelfde bron stelt uitdrukkelijk dat er géén bewijs is dat hechting of reconstructie beschermt tegen het ontstaan van artrose. <strong>Meniscushechting</strong> gaf in het beperkte aantal studies met langetermijnuitkomsten wel hogere Lysholm-scores en minder radiologische degeneratie dan meniscectomie, tegenover een veel hogere heroperatiekans (16,5% en 20,7% na hechting tegenover 1,4% en 3,9% na meniscectomie); bewijsniveau 4 (Paxton et al., 2011 — Arthroscopy). <strong>Criteriumgebaseerde vrijgave</strong> boven louter tijdgebaseerde is onderbouwd bij VKB-reconstructie (Grindem et al., 2016 — BJSM) — <em>toepassing hier is klinische redenering</em>. In een meta-analyse van zes cluster-gerandomiseerde trials bij recreatieve en subelite voetballers daalde de <strong>totale letselincidentie</strong> met een risicoratio van 0,75 (95% BI 0,57–0,98). Bij pooling van enkel de <strong>vier FIFA 11+-studies</strong> bedroeg de reductie 39% (IRR 0,61; 95% BI 0,48–0,77); voor de twee studies met het oudere FIFA 11-programma werd géén effect aangetoond (IRR 0,99) (Thorborg et al., 2017 — BJSM). <em>De uitkomstmaat is dus de totale letselincidentie, niet ernstige knieletsels, en het eerder vermelde bereik 30–50% is geschrapt.</em>',
    }
  ],
  scores:['IKDC','KOOS'],
  refs:'ESCAPE-trial: oefentherapie vs APM bij niet-obstructieve meniscusscheuren (van de Graaf et al., 2018 — JAMA) | FIDELITY: APM vs sham-chirurgie bij degeneratieve scheuren (Sihvonen et al., 2013 — N Engl J Med) | Oefentherapie vs APM bij degeneratieve meniscusscheuren, 2-jaars follow-up (Kise et al., 2016 — BMJ) | Knee Pain and Mobility Impairments: Meniscal and Articular Cartilage Lesions — Clinical Practice Guideline (Logerstedt et al., 2018 — J Orthop Sports Phys Ther)',
  spiergroep:'quadriceps, hamstrings'
};

BESCHRIJVING.men = {
  kenmerken:'<strong>Gewrichtsspleetpijn</strong> mediaal of lateraal, provoceerbaar door palpatie van de gewrichtsspleet. In een meta-analyse van 18 studies had gewrichtsspleetpijn een gepoolde sensitiviteit van 63% en specificiteit van 77% (Hegedus et al., 2007 — JOSPT); <em>de eerder vermelde 83% en het aandeel van 75% zijn niet onderbouwd en geschrapt</em>. Typische anamnese: pijn bij diepe flexie, hurken en draaibewegingen op de belaste voet, <strong>slotklachten</strong> (locking bij buckethandle-scheur) of pseudo-locking, catching en giving way. Intermitterende <strong>hydrops</strong> die traag opkomt (uren) na belasting; een snel opkomende hemartros wijst eerder op een perifere vasculaire scheur of VKB-letsel — <em>klinische redenering, de tijdsgrens van twee uur is in dit dossier niet onderbouwd</em>. Provocatietests: <strong>McMurray</strong> (gepoolde sensitiviteit 70%, specificiteit 71%), <strong>Apley</strong> (60% en 70%) en de <strong>Thessaly-test</strong> op 20° flexie. <strong>De auteurs van die meta-analyse besluiten dat géén enkele afzonderlijke test een meniscusscheur accuraat diagnosticeert en dat de waarde van anamnese plus klinisch onderzoek onbekend is</strong> (Hegedus et al., 2007 — JOSPT). <em>De eerdere bewering dat clusterdiagnostiek de accuraatheid verhoogt keerde die conclusie om en is geschrapt.</em> Bij degeneratieve scheuren is de presentatie vaak sluipend zonder duidelijk trauma; MRI-bevindingen moeten klinisch gecorreleerd worden aangezien meniscusscheuren op MRI bij 50-plussers veel voorkomen zonder klachten: in het Framingham-cohort (991 deelnemers) liep de prevalentie van 19% bij vrouwen van 50–59 jaar tot 56% bij mannen van 70–90 jaar, en 61% van wie een scheur had, had de voorbije maand geen klachten (Englund et al., 2008 — N Engl J Med).',
  oorzaken:'Twee etiologische patronen: <strong>traumatische scheuren</strong> bij jonge, actieve personen door gecombineerde axiale compressie en rotatie op de gefixeerde, gebogen knie (voetbal, ski, judo — vaak longitudinaal of buckethandle, frequent geassocieerd met VKB-ruptuur — <em>klinische redenering, het aandeel van 50% is niet onderbouwd</em>), versus <strong>degeneratieve scheuren</strong> (horizontaal, complex of flap) bij 40-plussers door cumulatieve slijtage van matrixkwaliteit, vaak zonder trauma. De helingscapaciteit wordt bepaald door de vasculaire zonering: de perifere <strong>rood-rode zone</strong> (buitenste 10–25%, doorbloed via de arteriae geniculares) heeft goede helingspotentie en is hechtbaar, de avasculaire <strong>wit-witte binnenzone</strong> heelt nauwelijks (Arnoczky & Warren, 1982 — Am J Sports Med) — dit stuurt de keuze tussen hechting, partiële meniscectomie en conservatief beleid. Risicofactoren: pivotsporten, diepe knielbelasting (beroepsmatig hurken/knielen), <strong>obesitas</strong>, varus/valgus-malalignement, VKB-insufficiëntie (chronische instabiliteit verhoogt het meniscusrisico — <em>klinische redenering, de verdubbeling is niet onderbouwd</em>) en leeftijdsgebonden degeneratie. De mediale meniscus is kwetsbaarder door zijn stevigere kapselverankering en geringere mobiliteit ten opzichte van de laterale — <em>klinische redenering; de eerder toegeschreven bron bevat deze vergelijking niet</em>.'
};

protocols.pfa = {id:'pfa',title:'Plantaire Fasciopathie',subtitle:'Conservatief revalidatieprotocol voor plantaire fasciitis/hielspoor — load management, high-load krachttraining en progressieve return to running',color:'#b45309',icon:'🦶',
  phases:[
    {
      label:'Fase 1',
      title:'Pijnreductie & load management',
      weeks:'Week 0–4',
      goals:[
        'Ochtendpijn (eerste stappen) reduceren naar NPRS ≤ 3/10',
        'Provocerende belasting identificeren en tijdelijk moduleren (staand werk, loopvolume, hard schoeisel)',
        'Patiënt educeren over degeneratief karakter en belastbaarheidsprincipe — geen rust maar dosering',
        'Plantaire fascia en kuitcomplex dagelijks mobiliseren zonder pijnprovocatie',
        'Ontlastende maatregelen installeren: low-Dye taping en/of hielcup, aangepast schoeisel'
      ],
      exercises:[
        {name:'Plantaire fascia-specifieke stretch (zittend)',params:[['Sets','3'],['Hold','30 sec'],['Freq','3×/dag, eerste sessie vóór opstaan']],note:'Zittend, aangedane voet over contralaterale knie, tenen in dorsaalflexie trekken tot rek in voetzool voelbaar. Duim controleert spanning van de fascia. Uitvoeren vóór de eerste stappen (ochtend) en na langdurig zitten om de startpijn te beperken — klinische redenering; de trial toonde winst na acht weken, maar na twee jaar geen groepsverschil meer (DiGiovanni et al., 2006).',cat:'mobiliteit'},
        {name:'Kuitrek staand (gastrocnemius & soleus)',params:[['Sets','3 per variant'],['Hold','30–45 sec'],['Freq','2×/dag']],note:'Tegen muur: gestrekte knie (gastrocnemius) en gebogen knie (soleus). Beperkte enkeldorsaalflexie is de sterkste risicofactor (Riddle et al., 2003) — kuitflexibiliteit is prioritair behandeldoel. Hiel blijft op de grond.',cat:'mobiliteit'},
        {name:'Voetzoolrol over bal of flesje',params:[['Duur','2–3 min'],['Druk','matig, geen scherpe pijn'],['Freq','1–2×/dag']],note:'Zelfmassage van de plantaire fascia met tennisbal of bevroren flesje (koude-analgesie optioneel). Rollen van hiel naar voorvoet. Bedoeld als symptoomverlichting naast de belastingsopbouw — klinische redenering, geen bron in dit dossier.',cat:'mobiliteit'},
        {name:'Low-Dye taping',params:[['Duur','3–5 dagen per applicatie'],['Type','antipronatietape'],['Periode','eerste 2–4 weken']],note:'Ondersteunt de mediale longitudinale voetboog en dempt trekbelasting op de fascia-origo. Bedoeld voor kortetermijnverlichting — klinische redenering; de toegeschreven publicatie is in dit dossier niet geverifieerd. Ideaal als brug tot de krachttraining effect geeft; huidcontrole bij elke hernieuwing.',cat:'stabiliteit'},
        {name:'Short foot oefening (zittend)',params:[['Sets','3'],['Reps','10 × 5 sec hold'],['Freq','dagelijks']],note:'Voetboog actief verkorten zonder teenflexie: kop metatarsale 1 naar hiel trekken. Activeert de voetintrinsieke musculatuur (abductor hallucis) die de fascia dynamisch ontlast. Start zittend, progressie naar stand in fase 2.',cat:'neuromusculair'},
        {name:'Fietsen of zwemmen (cardio-behoud)',params:[['Duur','20–30 min'],['Intensiteit','matig'],['Freq','3–4×/week']],note:'Impactvrij cardio-alternatief tijdens de belastingsreductie van hardlopen en lang staan. Fietsen belast de fascia minimaal. Volledige rust wordt afgeraden omdat het weefsel dosering nodig heeft (klinische redenering), geen eliminatie van belasting.',cat:'cardio'}
      ],
      criteria_go:[
        'Ochtendpijn bij eerste stappen NPRS ≤ 3/10 gedurende ≥ 5 opeenvolgende dagen',
        'Palpatiepijn mediale calcaneusknobbel NPRS ≤ 4/10',
        'Wandelen 30 min met dagelijks schoeisel zonder pijntoename nadien',
        'Plantaire stretch en kuitrek correct en zelfstandig uitgevoerd',
        'Patiënt begrijpt het load management-principe en houdt een belastingsdagboek bij'
      ],
      evidence:'<strong>Ochtendpijn bij de eerste stappen</strong> wordt in dit protocol als monitoringsparameter gebruikt — <em>klinische redenering; de toegeschreven publicatie is een redactioneel commentaar over pijn tijdens oefentherapie en onderbouwt geen status als meest responsieve parameter.</em> <strong>Plantaire fascia-specifieke rek</strong> gaf na acht weken duidelijk betere resultaten dan achillespeesrek. <em>Let op de opzet:</em> na die acht weken kregen ALLE deelnemers het fascia-rekprotocol, en na twee jaar was er <strong>geen significant groepsverschil meer</strong> voor ergste pijn of pijn bij de eerste stappen; wel meldde 92% tevredenheid en 94% pijnafname (DiGiovanni et al., 2006 — JBJS Am; 66 van 82 patiënten). <strong>Low-Dye taping</strong> voor kortetermijnverlichting is <em>klinische redenering; de toegeschreven publicatie is in dit dossier niet geverifieerd.</em> De <strong>JOSPT-praktijkrichtlijn hielpijn</strong> (herziening 2014) is het hoogste bewijsniveau in dit dossier; <em>de afzonderlijke aanbevelingen zijn hier niet tegen de volledige richtlijntekst gelegd</em> (Martin et al., 2014 — JOSPT).',
    },
    {
      label:'Fase 2',
      title:'High-load krachttraining',
      weeks:'Week 4–12',
      goals:[
        'Progressieve high-load heel raise-training opbouwen volgens het Rathleff-protocol',
        'Belastbaarheid van fascia en kuit-achillescomplex structureel verhogen',
        'Ochtendpijn verder reduceren naar NPRS ≤ 2/10',
        'Voetintrinsieke kracht in belaste positie opbouwen',
        'Dagelijkse activiteiten (staand werk, wandelen > 45 min) pijnvrij normaliseren'
      ],
      exercises:[
        {name:'Heel raise met handdoek onder de tenen (Rathleff-protocol)',params:[['Sets','3 → 4–5'],['Reps','12RM → 10RM → 8RM'],['Tempo','3 sec op – 2 sec hold – 3 sec neer'],['Freq','om de dag']],note:'Kernoefening: unilaterale heel raise op traptrede met opgerolde handdoek onder de tenen. De teendorsaalflexie spant via het <strong>windlass-mechanisme</strong> de fascia maximaal aan tijdens de belasting. Progressie via rugzak met boeken/gewicht zodra 12 herhalingen vlot lukken. Pijn tot NPRS 5/10 tijdens de oefening wordt aanvaard mits de ochtendpijn de dag nadien niet toeneemt — praktijkafspraak; deze pijndrempel staat niet in de trial van Rathleff (2015).',cat:'kracht'},
        {name:'Short foot in stand → eenbenige stand',params:[['Sets','3'],['Reps','10 × 8 sec hold'],['Freq','dagelijks']],note:'Progressie van fase 1: voetboogactivatie in volledige belasting, daarna op één been. Traint abductor hallucis en flexor digitorum brevis als dynamische boogondersteuning. Bewaken: geen teenklauwen, neutrale kniestand.',cat:'neuromusculair'},
        {name:'Teenflexie met handdoek (towel curls) met gewicht',params:[['Sets','3'],['Reps','15–20'],['Gewicht','0,5–1 kg op handdoek'],['Freq','dagelijks']],note:'Handdoek met de tenen naar zich toe schrapen, verzwaard met klein gewicht. Isoleert de lange en korte teenflexoren die met de fascia de mediale boog ondersteunen. Lage belasting — aanvulling op, geen vervanging van de heel raises.',cat:'kracht'},
        {name:'Soleus squat (wall sit op voorvoet)',params:[['Sets','3'],['Hold','30–45 sec'],['Freq','3×/week']],note:'Wandzit met hielen los van de grond: isometrische soleusbelasting met gebogen knie. De soleus draagt substantieel bij aan de enkelplantairflexie tijdens de standfase (klinische redenering) en ontlast indirect de fascia. Combineerbaar met de heel raise-dagen.',cat:'kracht'},
        {name:'Excentrische kuitverlaging op trede (gestrekte knie)',params:[['Sets','3'],['Reps','12'],['Tempo','3 sec excentrisch'],['Freq','om de dag, alternerend met Rathleff']],note:'Gastrocnemiusgerichte aanvulling: opduwen met twee benen, verlagen op één been tot onder tredehoogte. Verbetert tegelijk de dorsaalflexiemobiliteit onder belasting; beperkte dorsaalflexie was in Riddle (2003) de belangrijkste risicofactor voor het ontstaan van de klacht.',cat:'kracht'},
        {name:'Wandelvolume progressief opbouwen',params:[['Opbouw','30 → 60 min'],['Progressie','≤ 10%/week'],['Monitor','ochtendpijn volgende dag']],note:'Gedoseerde herbelasting van dagelijkse gangfunctie. Ochtendpijn de volgende ochtend is het stopcriterium: stijging > 2 punten NPRS betekent één stap terug in volume. Taping afbouwen zodra 45 min wandelen pijnvrij lukt.',cat:'cardio'}
      ],
      criteria_go:[
        'Unilaterale heel raise met handdoek: 3 × 8 met externe last (rugzak ≥ 10% lichaamsgewicht) uitvoerbaar',
        'Ochtendpijn NPRS ≤ 2/10 gedurende ≥ 2 opeenvolgende weken',
        'Wandelen 60 min pijnvrij, ook op harde ondergrond',
        'Staand werk volledige werkdag zonder pijntoename nadien',
        'FFI-pijnschaal ≥ 30% verbeterd t.o.v. baseline',
        'Eenbenige stand met actieve voetboog 30 sec stabiel'
      ],
      evidence:'<strong>Zware krachttraining</strong> met unilaterale heel raises en een handdoek onder de tenen gaf na <strong>3 maanden</strong> een Foot Function Index die <strong>29 punten lager</strong> lag dan bij fascia-rek (95% BI 6–52; p = 0,016) — <em>beide groepen kregen daarbij inlegzolen</em> (Rathleff et al., 2015 — Scand J Med Sci Sports; 48 patiënten). <strong>Belangrijke nuance:</strong> na 1, 6 en 12 maanden was er <strong>geen verschil meer</strong> tussen de groepen (p &gt; 0,34), en er waren geen verschillen in enige secundaire uitkomstmaat. De winst is dus een <strong>sneller</strong> herstel, geen beter eindresultaat. De handdoek onder de tenen benut het <strong>windlass-mechanisme</strong> om de fascie tijdens de belasting op te spannen — <em>klinische redenering</em>. Dat progressieve belasting collageenremodellering stimuleert is <em>overdracht vanuit tendinopathie-onderzoek en klinische redenering.</em>',
    },
    {
      label:'Fase 3',
      title:'Functionele opbouw & dynamische belasting',
      weeks:'Week 12–20',
      goals:[
        'Kuitkracht symmetrisch: heel raise-capaciteit ≥ 90% van contralaterale zijde',
        'Elastische en plyometrische voetbelasting progressief introduceren',
        'Snelwandelen en eerste jog-intervallen pijnvrij uitvoeren',
        'Voet-enkelcontrole bij eenbenige dynamische taken normaliseren',
        'FFI-totaalscore ≥ 60% verbeterd t.o.v. baseline'
      ],
      exercises:[
        {name:'Heel raise onderhoud met externe last',params:[['Sets','4'],['Reps','8–10'],['Last','rugzak/dumbbell progressief'],['Freq','2–3×/week']],note:'Voortzetting Rathleff-protocol op onderhoudsfrequentie. Kracht is de basis waarop de plyometrische progressie rust — niet stoppen zodra de pijn daalt. Doel: unilateraal 8 herhalingen met ≥ 15% lichaamsgewicht extern.',cat:'kracht'},
        {name:'Snelwandelen → jog-walk intervallen',params:[['Schema','1 min jog / 2 min walk × 6–8'],['Ondergrond','vlak, vlak-zacht'],['Freq','3×/week'],['Progressie','joginterval wekelijks +30 sec']],note:'Eerste loopimpact na de krachtfase. Start pas bij ochtendpijn ≤ 1/10 gedurende een week. Monitoring: ochtendpijn volgende dag ≤ 2/10 en binnen 24 u terug naar baseline, anders schema één stap terug.',cat:'cardio'},
        {name:'Bilaterale pogo-sprongen (laag, elastisch)',params:[['Sets','3'],['Reps','20 contacten'],['Focus','korte grondcontacttijd, verende voet'],['Freq','2×/week']],note:'Eerste plyometrische prikkel: lage verticale huppels met stijve enkelveer. Traint de fascie en achillespees als elastisch opslagsysteem — klinische redenering; de belastingsveelvouden zijn in dit dossier niet onderbouwd. Progressie naar unilateraal in week 16–18.',cat:'neuromusculair'},
        {name:'Eenbenige balanstaken op instabiele ondergrond',params:[['Sets','3'],['Duur','30–45 sec'],['Ondergrond','kussen/balanspad'],['Freq','3×/week']],note:'Proprioceptieve voet-enkeltraining met actieve voetboog (short foot geïntegreerd). Toevoegen van hoofdrotaties of balwerpen verhoogt de moeilijkheid. Ondersteunt schokdemping bij latere loopbelasting.',cat:'stabiliteit'},
        {name:'Loopband snelwandelen met helling',params:[['Duur','15–20 min'],['Helling','4–8%'],['Tempo','stevig'],['Freq','2×/week']],note:'Hellingwandelen verhoogt de excentrisch-concentrische kuitbelasting en dorsaalflexie-excursie functioneel, als brug tussen vlak wandelen en joggen. Ochtendpijnmonitoring blijft leidend.',cat:'cardio'},
        {name:'Squat- en lunge-patroon met voetboogcontrole',params:[['Sets','3'],['Reps','10–12'],['Gewicht','matig'],['Freq','2×/week']],note:'Integratie van short foot in meergewrichtspatronen: squat en voorwaartse lunge met behoud van actieve mediale boog en knie boven voet. Herstelt de kinetische keten heup-knie-voet voor sportbelasting.',cat:'kracht'}
      ],
      criteria_go:[
        'Unilaterale heel raise-capaciteit LSI ≥ 90% (aantal herhalingen tot uitputting)',
        'Jog-walk schema tot 15 min continu joggen pijnvrij (tijdens en 24 u nadien)',
        'Ochtendpijn NPRS ≤ 1/10 gedurende ≥ 2 weken, ook na loopdagen',
        'Unilaterale pogo-sprongen 3 × 15 pijnvrij met goede voetcontrole',
        'FFI-totaalscore ≥ 60% verbeterd of < 20 punten',
        'Windlass-test (passieve teendorsaalflexie in belasting) negatief of NPRS ≤ 2/10'
      ],
      evidence:'De plantaire fascie werkt bij lopen als <strong>elastisch energieopslagsysteem</strong>; graduele plyometrische progressie is nodig om die capaciteit te herwinnen — <em>klinische redenering; de piekkrachtcijfers zijn in dit dossier niet onderbouwd en zijn geschrapt.</em> <strong>Krachtbehoud</strong> wordt in dit protocol voortgezet — <em>klinische redenering. De onderliggende trial toont juist dat het voordeel van zware krachttraining alleen op 3 maanden bestond en na 6 en 12 maanden verdwenen was; de eerdere bewering dat het effect vooral tussen 3 en 12 maanden optreedt, is daarmee in strijd en geschrapt</em> (Rathleff et al., 2015). <strong>Gestructureerde loophervatting:</strong> in een cohort van 874 beginnende lopers waren er over de blootstellingsgroepen heen géén significante verschillen in letselcijfers; enkel voor afstandsgebonden letsels lag het risico hoger bij een opbouw van meer dan 30% over twee weken tegenover minder dan 10% (HR 1,59; 95% BI 0,96–2,66; p = 0,07 — <em>niet significant</em>) (Nielsen et al., 2014 — JOSPT).',
    },
    {
      label:'Fase 4',
      title:'Return to running & sport, recidiefpreventie',
      weeks:'Week 20+',
      goals:[
        'Volledig loopvolume en/of sportspecifieke belasting pijnvrij hervatten',
        'Sprint-, sprong- en richtingsveranderingsbelasting sportspecifiek opbouwen',
        'Onderhoudsprogramma kuit- en voetkracht verankeren (≥ 1–2×/week, langdurig)',
        'Belastingsmonitoring en risicofactormanagement (gewicht, schoeisel, volume) borgen',
        'FFI < 10 punten en NPRS 0–1/10 bij alle activiteiten'
      ],
      exercises:[
        {name:'Continu hardlopen progressief',params:[['Opbouw','15 → 45–60 min'],['Progressie','≤ 10%/week'],['Terrein','vlak → gevarieerd'],['Freq','3–4×/week']],note:'Geleidelijke opbouw naar doelvolume; eerst frequentie en duur, daarna pas tempo en heuvels. <em>De 10%-regel is een praktijkafspraak — Nielsen (2014), elders in dit protocol geciteerd, adviseert minder dan 30% per twee weken en toonde geen significant verschil tussen opbouwsnelheden.</em> Nieuwe of versleten schoenen geleidelijk inlopen — klinische redenering.',cat:'cardio'},
        {name:'Sprint- en tempoloopprogressie',params:[['Sets','6–8'],['Afstand','60–80 m opbouwend naar 90% snelheid'],['Rust','volledig'],['Freq','1–2×/week']],note:'Voorvoetafzet bij hoge snelheid geeft de zwaarste belasting op de fascie — klinische redenering. Pas introduceren na 4 weken pijnvrij continu lopen. Start met opbouwlopen (progressieve acceleratie), daarna vlakke tempoherhalingen.',cat:'cardio'},
        {name:'Unilaterale sprongmatrix (hinken, bounding, zijwaarts)',params:[['Sets','3 per richting'],['Reps','8–10 contacten'],['Focus','elastisch, stille landing'],['Freq','2×/week']],note:'Sportspecifieke plyometrie in drie richtingen. Hinken voor afstand test en traint de maximale fascia-achillescapaciteit. Voor balsporters: combineren met richtingsverandering en acceleratie-deceleratie.',cat:'neuromusculair'},
        {name:'Onderhoud heel raise-programma',params:[['Sets','3'],['Reps','8–10 met last'],['Freq','1–2×/week, langdurig']],note:'Levenslange onderhoudsdosis van de Rathleff heel raise (handdoekvariant mag vereenvoudigd naar standaard heel raise met last). Onderhoud van de kuit- en voetkracht is klinische redenering; er is in dit dossier geen bron die dit als belangrijkste hervalfactor onderbouwt.',cat:'kracht'},
        {name:'Kuit- en fasciamobiliteit onderhoud',params:[['Duur','5 min'],['Timing','na training en bij stijfheidsgevoel'],['Freq','3×/week']],note:'Onderhoud van dorsaalflexiemobiliteit (kuitrek beide varianten) en plantaire stretch. Vooral relevant in periodes van volumestijging of na lange sta-dagen. Ochtendstijfheid > 2 dagen = vroegsignaal, dosering herzien.',cat:'mobiliteit'},
        {name:'Belastingsmonitoring & risicofactorcheck',params:[['Tool','weeklog volume + ochtendpijnscore'],['Check','schoeisel elke 600–800 km'],['ACWR','< 1,5'],['Freq','wekelijks']],note:'Wekelijkse zelfmonitoring: loopvolume, ochtendpijn, staduur. Bij verhoogd BMI blijft gewichtsmanagement een mede-behandeldoel; de onderbouwde drempel ligt bij 30 kg/m² (Riddle 2003). Terugkeer van startpijn gedurende meerdere opeenvolgende ochtenden: volume terugbrengen en heel raise-frequentie tijdelijk verhogen — praktijkafspraak, de percentages zijn geen bronwaarden.',cat:'stabiliteit'}
      ],
      criteria_go:[
        'Doelvolume lopen of sporthervatting op preblessureniveau, NPRS 0–1/10 tijdens en 24 u nadien',
        'Ochtendpijn afwezig (NPRS 0/10) gedurende ≥ 4 opeenvolgende weken',
        'Heel raise-capaciteit LSI ≥ 95% met externe last',
        'Unilaterale sprongtesten (hinken voor afstand) LSI ≥ 90%',
        'Onderhoudsprogramma zelfstandig geïntegreerd in weekroutine',
        'FFI < 10 punten; patiënt kent vroegsignalen en zelfmanagementstrategie'
      ],
      evidence:'<strong>Langetermijnprognose:</strong> in een cohort van 174 patiënten had <strong>80,5% na één jaar</strong> nog klachten, 50,0% na vijf jaar, 45,6% na tien jaar en 44,0% na vijftien jaar; bij de eindmeting was 54% klachtenvrij, met een gemiddelde klachtenduur van 725 dagen. De prognose was slechter voor vrouwen en bij bilaterale pijn; fasciadikte en de aanwezigheid van een hielspoor hadden géén invloed (Hansen et al., 2018 — Orthop J Sports Med). <em>Het eerdere cijfer van 40–50% na één jaar was fors te gunstig — de werkelijke prognose is ongunstiger. De auteurs stellen bovendien uitdrukkelijk dat hun opzet geen uitspraak toelaat over de doeltreffendheid van behandelstrategieën, dus de koppeling aan ontoereikende belastingsopbouw is geschrapt.</em> Volhouden van het krachtprogramma is <em>klinische redenering; de trial die eraan werd toegeschreven analyseerde therapietrouw noch herval.</em> <strong>Modificeerbare risicofactoren:</strong> dorsaalflexie van 0° of minder gaf een odds ratio van <strong>23,3</strong> (95% BI 4,3–124,4), BMI boven <strong>30</strong> kg/m² OR 5,6 (1,9–16,6) en overwegend staand werk OR 3,6 (1,3–10,1); verminderde enkeldorsaalflexie is volgens de auteurs de belangrijkste risicofactor (Riddle et al., 2003 — JBJS Am).',
    }
  ],
  scores:['FFI','NPRS'],
  refs:'Rathleff MS et al., 2015 — Scand J Med Sci Sports 25(3):e292-300 (zware krachttraining; voordeel enkel op 3 maanden) | DiGiovanni BF et al., 2006 — J Bone Joint Surg Am 88(8):1775-81 (fascia-specifieke rek, tweejaarsopvolging) | Riddle DL et al., 2003 — J Bone Joint Surg Am 85(5):872-7 (risicofactoren) | Hansen L et al., 2018 — Orthop J Sports Med 6(3) (langetermijnprognose) | McMillan AM et al., 2009 — J Foot Ankle Res 2:32 (beeldvorming) | Martin RL et al., 2014 — JOSPT 44(11):A1-33 (praktijkrichtlijn hielpijn) | Nielsen RO et al., 2014 — JOSPT 44(10):739-47 (opbouw van loopvolume)',
  spiergroep:'kuit, voetintrinsieke musculatuur'
};

BESCHRIJVING.pfa = {
  kenmerken:'<strong>Startpijn bij de eerste stappen</strong> na het opstaan of na langdurig zitten is het kenmerkende symptoom: scherpe, stekende pijn onder de hiel die na enkele minuten stappen afneemt maar terugkeert na langdurige belasting. <strong>Palpatiepijn ter hoogte van de mediale calcaneusknobbel</strong> (origo van de plantaire fascia) bevestigt de klinische diagnose; de <strong>windlass-test</strong> (passieve dorsaalflexie van de grote teen, bij voorkeur in belasting) kan de pijn reproduceren. <strong>Belangrijke beperking:</strong> de test was bij slechts 31,8% van de patiënten positief in belasting en bij 13,6% zonder belasting, terwijl geen enkele controlepersoon positief testte — zeer specifiek dus, maar weinig sensitief: een negatieve test sluit de aandoening niet uit (De Garceau et al., 2003 — Foot Ankle Int). Echografie: de fascie was bij patiënten gemiddeld 2,16 mm dikker dan bij controles (95% BI 1,60–2,71) en een dikte boven 4,0 mm was diagnostisch, zij het met een zeer breed betrouwbaarheidsinterval (OR 105,11; 95% BI 3,09–3577,28) (McMillan et al., 2009 — J Foot Ankle Res). Pijn is typisch erger op blote voeten, op harde ondergrond en na een sta- of loopdag. FFI en NPRS (ochtendpijnscore) zijn de aanbevolen uitkomstmaten. Differentiaaldiagnostisch uitsluiten: calcaneale stressfractuur (squeeze-test), Baxter-neuropathie (branderige mediale hielpijn) en S1-radiculopathie.',
  oorzaken:'<strong>Degeneratieve fasciopathie, geen inflammatie</strong>: histologisch onderzoek toont myxoïde degeneratie, collageendisorganisatie en microrupturen zonder inflammatoire cellen — vandaar de correctere term fasciose of fasciopathie in plaats van fasciitis (Lemont et al., 2003 — J Am Podiatr Med Assoc). De pathologie ontstaat door <strong>cumulatieve trekbelasting</strong> op de fascia-origo die de adaptatiecapaciteit van het weefsel overschrijdt. Belangrijkste risicofactoren: <strong>beperkte enkeldorsaalflexie</strong> (odds ratio 23,3; 95% BI 4,3–124,4 bij ≤ 0° tegenover > 10°; volgens de auteurs de belangrijkste risicofactor), <strong>BMI boven 30</strong> kg/m² (OR 5,6; 1,9–16,6) en <strong>overwegend staand werk</strong> (OR 3,6; 1,3–10,1) (Riddle et al., 2003 — J Bone Joint Surg Am). <em>De eerder vermelde BMI-drempel van 27 komt in die bron niet voor.</em> Zowel <strong>pes planus</strong> (verhoogde trekspanning via boogdaling) als <strong>pes cavus</strong> (verminderde schokabsorptie) verhogen het risico. <strong>De hielspoor: tegenstrijdige evidentie.</strong> In het langetermijncohort had een hielspoor bij aanvang géén invloed op de prognose (Hansen et al., 2018), en een anatomische review benoemt uitdrukkelijk de discrepanties in de literatuur over de aanhechting en de rol van de spoor (Kirkpatrick et al., 2017 — J Anat). <strong>Daartegenover</strong> vond een meta-analyse van 23 studies juist een sterke associatie tussen een subcalcaneale spoor en hielpijn (OR 8,52; 95% BI 4,08–17,77) (McMillan et al., 2009). De spoor is dus geen eenduidig behandeldoel, maar hem afdoen als misvatting gaat verder dan de evidentie toelaat. <em>Het prevalentiecijfer van 15–30% bij asymptomatische personen is in dit dossier niet onderbouwd en is geschrapt.</em> Bij lopers zijn trainingsfouten (plotse volumestijging, schoeiselwissel) de dominante uitlokkende factor.'
};

protocols.lies = {id:'lies',title:'Adductor-gerelateerde Liespijn',subtitle:'Conservatief revalidatieprotocol voor adductor-gerelateerde groin pain bij sporters — actieve oefentherapie volgens Hölmich met Copenhagen-progressie en criteriumgestuurde return to play',color:'#dc2626',icon:'⚽',
  phases:[
    {
      label:'Fase 1',
      title:'Acute fase — pijncontrole & belastingsmanagement',
      weeks:'Week 0–2',
      goals:[
        'Liespijn reduceren naar NPRS ≤ 3/10 bij ADL en wandelen via relatieve rust en activiteitenmodificatie',
        'Provocerende sportbelasting (sprint, kick, richtingsverandering) tijdelijk elimineren zonder volledige immobilisatie',
        'Pijnvrije isometrische adductoractivatie opstarten als analgetische en belastbaarheidsopbouwende prikkel',
        'Baseline vastleggen: adductor squeeze test (sfygmomanometer of handdynamometer) en HAGOS-score afnemen',
        'Patiënt educeren over Doha-terminologie, belastingsprincipes en het verwachte tijdspad van revalidatie'
      ],
      exercises:[
        {name:'Isometrische adductorsqueeze in ruglig (bal tussen knieën)',params:[['Sets','3–5'],['Hold','30–45 sec'],['Intensiteit','pijn ≤ 3/10 (NPRS)'],['Freq','dagelijks']],note:'Bal of vuist tussen de knieën, heupen 45° flexie. Isometrische belasting werkt analgetisch bij tendinopathie-achtige presentaties en behoudt adductorcapaciteit. Intensiteit opbouwen zodra pijn het toelaat.',cat:'kracht'},
        {name:'Isometrische adductorsqueeze met gestrekte benen (0°)',params:[['Sets','3'],['Hold','30 sec'],['Positie','bal tussen enkels'],['Freq','dagelijks']],note:'Variant met lange hefboom in 0° heupflexie — identiek aan de squeeze-testpositie. Dient tegelijk als oefening én als dagelijkse monitor: dalende squeeze-waarde of stijgende pijn signaleert overbelasting.',cat:'kracht'},
        {name:'Stationaire fiets (pijnvrij)',params:[['Duur','15–25 min'],['Weerstand','laag'],['Freq','dagelijks']],note:'Cardiovasculair onderhoud zonder adductorprovocatie. Zadel iets hoger instellen om extreme heupflexie-adductiecombinaties te vermijden. Stopcriterium: liespijn > 2/10 tijdens of na fietsen.',cat:'cardio'},
        {name:'Actieve heupmobilisatie (pijnvrij bewegingsbereik)',params:[['Sets','2'],['Reps','10–15 per richting'],['Richtingen','flexie, abductie, circumductie'],['Freq','2×/dag']],note:'Actieve, onbelaste mobilisatie binnen pijnvrije grenzen. Geen agressieve passieve adductorrek in de acute fase — rekken van pijnlijke adductoren toonde geen meerwaarde in het onderzoek van Hölmich et al. (1999).',cat:'mobiliteit'},
        {name:'Transversus abdominis / core-activatie in ruglig',params:[['Sets','3'],['Hold','10 sec'],['Reps','10'],['Freq','dagelijks']],note:'Abdominale drawing-in met neutrale lumbopelvische stand. De adductoren en abdominale musculatuur delen de aponeurotische aanhechting op het os pubis — vroege core-activatie ondersteunt de kracht-koppel rond het bekken.',cat:'stabiliteit'},
        {name:'Gluteale bruggen (bilateraal)',params:[['Sets','3'],['Reps','12–15'],['Tempo','2-1-2'],['Freq','dagelijks']],note:'Heupextensoren activeren zonder adductorprovocatie. Bekken stabiel houden, geen rotatie. Bereidt de lumbopelvische regio voor op de krachtfase. Optioneel bal tussen knieën voor lichte co-activatie adductoren.',cat:'kracht'}
      ],
      criteria_go:[
        'NPRS ≤ 2/10 bij wandelen en ADL gedurende ≥ 3 opeenvolgende dagen',
        'Adductor squeeze test uitvoerbaar met pijn ≤ 3/10 en zonder krachtsverlies nadien',
        'Palpatiepijn adductor longus-origo afgenomen (NPRS ≤ 4/10)',
        'Isometrische squeeze 45 sec vol te houden zonder pijntoename achteraf (24u-regel)',
        'Fietsen 20 min pijnvrij uitvoerbaar'
      ],
      evidence:'De <strong>Doha agreement</strong> deelt liespijn bij sporters in drie hoofdcategorieën in: (1) omschreven klinische entiteiten — adductor-, iliopsoas-, inguinaal- en pubisgerelateerd, (2) heupgerelateerde liespijn en (3) overige oorzaken. Adductorgerelateerde liespijn wordt gedefinieerd als palpatiepijn ter hoogte van de adductoren plus pijn bij weerstandsadductie (Weir et al., 2015 — BJSM; consensus van 24 experts uit 14 landen). <strong>Actieve oefentherapie</strong> is duidelijk superieur aan passieve behandeling: in de gerandomiseerde trial bij 68 sporters met langdurige klachten (mediaan 40 weken) keerden <strong>23 deelnemers</strong> uit de actieve trainingsgroep pijnvrij terug naar sport op hetzelfde niveau, tegenover <strong>4</strong> in de groep zonder actieve training (odds ratio 12,7; 95% BI 3,4–47,2), beoordeeld door een geblindeerde arts vier maanden na de behandeling (Hölmich et al., 1999 — Lancet). <em>De vaak geciteerde percentages 79% en 14% staan niet in het abstract; de aantallen wel.</em> De <strong>adductor squeeze test</strong> als belastingsmonitor is <em>klinische redenering; de toegeschreven publicatie is in dit dossier niet geverifieerd.</em> Dat volledige rust gecontra-indiceerd is, is eveneens <em>klinische redenering</em>.',
    },
    {
      label:'Fase 2',
      title:'Progressieve adductorkracht — Copenhagen-progressie',
      weeks:'Week 2–6',
      goals:[
        'Excentrische adductorkracht progressief opbouwen via de Copenhagen adduction-progressie (short lever → long lever)',
        'Adductor squeeze-waarde ≥ 80% van baseline of contralaterale referentie bereiken',
        'Lumbopelvische controle integreren met adductorbelasting in gesloten keten',
        'Wandelen onbeperkt en joggen in rechte lijn pijnvrij hervatten (NPRS ≤ 2/10)',
        'Trainingsrespons monitoren via 24-uurs pijnregel en wekelijkse squeeze-test'
      ],
      exercises:[
        {name:'Copenhagen adduction — short lever (knie op bank)',params:[['Sets','2–3'],['Reps','6–10 per zijde'],['Tempo','3 sec excentrisch'],['Freq','3×/week']],note:'Zijlig steunend op onderarm, bovenste KNIE op de bank (korte hefboom): bekken optillen en gecontroleerd zakken. Instapniveau van de Copenhagen-progressie. Spierpijn (DOMS) in de adductoren is normaal; liespijn > 3/10 op de origo niet.',cat:'kracht'},
        {name:'Copenhagen adduction — long lever (voet/enkel op bank)',params:[['Sets','3'],['Reps','8–12 per zijde'],['Tempo','3 sec excentrisch'],['Freq','3×/week']],note:'Progressie: bovenste ENKEL op de bank (lange hefboom) — sterk verhoogde adductorlast. Pas starten wanneer short lever 3×10 vlot en pijnvrij lukt. In de EMG-studie liep de piekactiviteit over de acht oefeningen uiteen van 14% tot 108%; het abstract koppelt de bovengrens niet expliciet aan deze oefening (Serner et al., 2014).',cat:'kracht'},
        {name:'Adductie in zijlig met gewicht (onderste been heffen)',params:[['Sets','3'],['Reps','12–15'],['Gewicht','0 → 2–4 kg enkelgewicht'],['Freq','3×/week']],note:'Geïsoleerde concentrische adductortraining uit het Hölmich-programma: onderste been heffen terwijl bovenste been steunt. Lagere instapdrempel dan Copenhagen — geschikt als tussenstap of op hersteldagen.',cat:'kracht'},
        {name:'Slide-outs / sliding lateral lunge',params:[['Sets','3'],['Reps','8–10 per zijde'],['Hulpmiddel','glijdoek of slider'],['Freq','3×/week']],note:'Gesloten-keten excentrische adductorbelasting: standbeen gebogen, glijbeen zijwaarts uitschuiven en terugtrekken. Traint de adductoren in verlengde positie — functioneel relevant voor de reikwijdte bij tackles en zijwaartse acties.',cat:'kracht'},
        {name:'Zijplank met adductie (onderste been op bank)',params:[['Sets','3'],['Hold','20–30 sec'],['Progressie','statisch → met heupdip'],['Freq','3×/week']],note:'Combineert laterale core-stabiliteit met isometrische adductorbelasting — de kinetische keten van romp naar adductoren als één functionele eenheid, cruciaal voor krachtoverdracht bij trapbewegingen.',cat:'stabiliteit'},
        {name:'Joggen in rechte lijn (progressief)',params:[['Duur','10 → 25 min'],['Tempo','rustig, geen versnellingen'],['Progressie','+10% volume/week'],['Freq','2–3×/week']],note:'Loophervatting op vlak terrein zonder richtingsveranderingen of tempowissels. Monitor: NPRS ≤ 2/10 tijdens het lopen én de ochtend nadien; squeeze-waarde mag niet dalen na de loopsessie.',cat:'cardio'}
      ],
      criteria_go:[
        'Copenhagen adduction long lever 3 × 10 per zijde pijnvrij uitvoerbaar',
        'Adductor squeeze-waarde ≥ 80% van baseline of contralaterale zijde, pijnvrij',
        'Joggen 25 min in rechte lijn met NPRS ≤ 2/10 tijdens én 24u na de sessie',
        'Palpatie adductor longus-origo pijnvrij of NPRS ≤ 2/10',
        'Weerstandsadductie in 0° en 45° heupflexie pijnvrij op maximale kracht',
        'HAGOS-subschaal pijn en symptomen ≥ 70/100'
      ],
      evidence:'Het <strong>actieve oefenprogramma van Hölmich</strong> — progressieve adductorversterking met abdominale en lumbopelvische training — blijft de referentiebehandeling: 23 tegenover 4 pijnvrije sporthervattingen (OR 12,7; 95% BI 3,4–47,2) bij 68 sporters (Hölmich et al., 1999 — Lancet). De <strong>Copenhagen adduction</strong> is in een EMG-studie bij 40 <strong>gezonde</strong> elitevoetballers benoemd als dynamische hoogintensieve oefening; de piekactiviteit van de adductor longus liep over de acht onderzochte oefeningen uiteen van <strong>14% tot 108%</strong> van de maximale isometrische contractie (Serner et al., 2014 — BJSM). <em>Die bovengrens geldt over alle oefeningen heen en wordt in het abstract niet expliciet aan de Copenhagen adduction toegeschreven.</em> Acht weken progressieve training met die oefening verhoogde bij 24 U19-spelers de <strong>excentrische heupadductiekracht met 35,7%</strong> (p &lt; 0,001), de abductiekracht met 20,3% en de verhouding tussen beide met 12,3%; in de controlegroep veranderde niets (Ishøi et al., 2016 — Scand J Med Sci Sports). De progressie van short naar long lever en de pijngrens van 3/10 zijn <em>praktijkafspraken</em>.',
    },
    {
      label:'Fase 3',
      title:'Sportspecifieke belasting — change of direction & sprint',
      weeks:'Week 6–10',
      goals:[
        'Richtingsveranderingen (change of direction) progressief opbouwen van submaximaal naar maximaal tempo',
        'Sprintvermogen herstellen via progressief acceleratie- en snelheidswerk (60 → 100%)',
        'Traptechniek (passing → kicking op kracht) pijnvrij heropbouwen',
        'Adductorkracht verder verhogen naar ≥ 90% Limb Symmetry Index (LSI)',
        'Chronische belasting opbouwen richting teamtrainingsvolume zonder pijnreactie (24u-regel)'
      ],
      exercises:[
        {name:'Copenhagen adduction — long lever met verzwaring',params:[['Sets','3'],['Reps','10–12 per zijde'],['Progressie','tempo trager excentrisch / partner-variant'],['Freq','2–3×/week']],note:'Onderhoud en verdere opbouw van excentrische adductorkracht parallel aan het veldwerk. Op zware velddagen reduceren naar 2 sets om cumulatieve adductorlast te bewaken (squeeze-monitor).',cat:'kracht'},
        {name:'Laterale skater jumps met stick-landing',params:[['Sets','3'],['Reps','8 per zijde'],['Focus','2 sec stabiele landing, knie boven voet'],['Freq','2×/week']],note:'Plyometrische zijwaartse afzet en landing — excentrische adductorbelasting van het afzetbeen bij frontale-vlak bewegingen. Voorbereiding op zijwaartse duels en cutting. Progressie: afstand vergroten, dan reactief zonder pauze.',cat:'neuromusculair'},
        {name:'Change of direction-parcours (45° → 90° → 180°)',params:[['Sets','4–6 herhalingen per hoek'],['Intensiteit','60% → 100% over 3 weken'],['Rust','volledig herstel tussen reps'],['Freq','2×/week']],note:'Progressie in hoek én snelheid: eerst voorgeprogrammeerde cuts op submaximaal tempo, daarna scherpere hoeken en maximale intensiteit. De plant-fase van de cut belast de adductoren excentrisch — meest voorkomende provocatie, dus laatste progressiestap.',cat:'neuromusculair'},
        {name:'Progressieve sprinttraining (acceleratie-opbouw)',params:[['Afstand','20–40 m'],['Intensiteit','60 → 80 → 100%'],['Sets','6–8 sprints'],['Freq','2×/week']],note:'Lineaire sprint vóór richtingsverandering hervatten. Geleidelijke intensiteitsopbouw per week; hoogsnelheidslopen is tevens beschermend voor de hamstrings. Volledige recuperatie tussen sprints — kwaliteit boven kwantiteit.',cat:'cardio'},
        {name:'Traptechniek progressief (pass → wreeftrap op kracht)',params:[['Volume','20 → 60 baltoetsen'],['Progressie','binnenkantpass → halflange pass → schot'],['Freq','2–3×/week']],note:'De trapbeweging is het meest adductorspecifieke gebaar: start met korte binnenkantpasses (hoge adductorlast bij binnenkant!) pas na pijnvrije wreeftrap-opbouw. Monitor liespijn bij de zwaaifase en de follow-through.',cat:'neuromusculair'},
        {name:'Reactieve agility-drills (onvoorspelbare cuts)',params:[['Duur','10–15 min'],['Type','spiegeldrill, licht- of audiosignaal'],['Intensiteit','oplopend naar wedstrijdtempo'],['Freq','1–2×/week']],note:'Niet-geanticipeerde richtingsveranderingen genereren hogere adductorpieken dan voorgeprogrammeerde cuts — laatste neuromusculaire stap vóór teamtraining. Alleen starten wanneer geplande COD op 100% pijnvrij lukt.',cat:'neuromusculair'}
      ],
      criteria_go:[
        'Sprint 40 m op 100% pijnvrij (NPRS 0–1/10), inclusief acceleratie en deceleratie',
        'Change of direction 90° en 180° op maximaal tempo pijnvrij uitvoerbaar',
        'Wreeftrap en binnenkantpass op wedstrijdkracht pijnvrij (NPRS ≤ 1/10)',
        'Adductorkracht LSI ≥ 90% (handdynamometer, excentrische squeeze)',
        'Squeeze-waarde stabiel of stijgend na sportspecifieke sessies (24u-controle)',
        'HAGOS-subschaal sport & recreatie ≥ 75/100'
      ],
      evidence:'<strong>Acute adductorletsels</strong> ontstaan vooral bij trappen en richtingsveranderingen — <em>klinische redenering; het aandeel van 91% adductor longus is in dit dossier niet geverifieerd.</em> <strong>Terugkeer naar sport:</strong> in een prospectief cohort van 81 mannelijke sporters met een acuut adductorletsel, allen behandeld met een gestandaardiseerd criteriumgestuurd oefenprogramma, bedroeg de mediane duur <strong>15 dagen</strong> tot pijnvrij, <strong>24 dagen</strong> tot afgeronde gecontroleerde sporttraining en <strong>22 dagen</strong> tot de eerste volledige teamtraining. De sterkste voorspellers van een langere terugkeer waren palpatiepijn aan de proximale adductor longus-insertie, een voelbaar defect, en op MRI een letsel op de bot-peesovergang (Serner et al., 2020 — AJSM). <em>Die studie vergelijkt géén criteriumgestuurde met tijdgestuurde terugkeer en rapporteert geen hervalcijfers; die claim is geschrapt.</em> De squeeze test als dagelijkse monitor en het achteraan plaatsen van niet-geanticipeerde richtingsveranderingen zijn <em>klinische redenering</em>.',
    },
    {
      label:'Fase 4',
      title:'Return to play & recidiefpreventie',
      weeks:'Week 10–14+',
      goals:[
        'Volledige teamtraining hervatten en progressief opbouwen naar wedstrijdminuten (gedeeltelijk → volledig)',
        'Adductorkracht LSI ≥ 95% behouden via preventief onderhoudsprogramma (Copenhagen)',
        'Trainingsbelasting monitoren (sRPE/ACWR) om belastingspieken in de opbouwweken te vermijden',
        'HAGOS-scores normaliseren (alle subschalen ≥ 80/100) en psychologische sporthervattingsbereidheid bevestigen',
        'Levenslange integratie van adductorpreventie in de wekelijkse trainingsroutine (FIFA 11+ / Copenhagen)'
      ],
      exercises:[
        {name:'Copenhagen adduction — onderhoudsdosis (preventie)',params:[['Sets','2'],['Reps','6–10 long lever per zijde'],['Timing','na training, niet vóór wedstrijd'],['Freq','1–2×/week']],note:'Preventieve onderhoudsdosis na return to play. Eén tot twee sessies per week volstaan om de verworven excentrische adductorkracht te behouden. In-season programmeren na de training om acute vermoeidheid vóór wedstrijden te vermijden.',cat:'kracht'},
        {name:'Volledige teamtraining (progressieve blootstelling)',params:[['Opbouw','50% → 75% → 100% deelname'],['Duur','2–3 weken opbouw'],['Monitor','squeeze-test 2×/week']],note:'Gefaseerde herintrede: eerst afgebakende delen (rondo, positiespel), daarna volledige duels en wedstrijdvormen. Pas volledige wedstrijdselectie na ≥ 1 week volledige, klachtenvrije teamtraining.',cat:'cardio'},
        {name:'Wedstrijdsimulatie / kleine partijvormen',params:[['Duur','2 × 15 → 2 × 30 min'],['Intensiteit','wedstrijdtempo met duelcontact'],['Freq','1–2×/week']],note:'Hoogste integrale belasting: onvoorspelbare cuts, tackles, trapacties en duels in vermoeide toestand. Vermoeidheid is een risicofactor — de laatste minuten van de simulatie zijn de meest relevante test.',cat:'neuromusculair'},
        {name:'Hip thrust & rear foot elevated split squat',params:[['Sets','3'],['Reps','8–10'],['Gewicht','progressief zwaar'],['Freq','2×/week']],note:'Globale onderste-lidmaat kracht rond de heup: sterke heupextensoren en unilaterale beenkracht verminderen de relatieve last op de adductoren bij acceleratie en deceleratie. Onderdeel van het bredere preventiekader.',cat:'kracht'},
        {name:'Belastingsmonitoring sRPE / ACWR',params:[['Tool','sessie-RPE × duur (AU)'],['ACWR','0,8–1,3 aanhouden'],['Freq','na elke training']],note:'Acute:chronische workload ratio binnen de "sweet spot" houden tijdens de kwetsbare herintredeweken. Plotse pieken in het weekvolume worden als risico gezien — klinische redenering, geen bron in dit dossier. Geleidelijkheid is de kern van preventie.',cat:'stabiliteit'},
        {name:'Squeeze-test zelfmonitoring (wekelijks)',params:[['Tool','sfygmomanometer of handdynamometer'],['Positie','45° heupflexie'],['Norm','stabiel t.o.v. individuele baseline'],['Freq','1–2×/week in-season']],note:'Structurele zelfmonitoring in-season: een significante daling van de squeeze-waarde of pijn > 2/10 is een vroeg waarschuwingssignaal — adductorvolume tijdelijk reduceren en Copenhagen-dosis aanpassen vóór klachten escaleren.',cat:'neuromusculair'}
      ],
      criteria_go:[
        'Volledige teamtraining ≥ 1 week klachtenvrij doorlopen (NPRS 0/10, squeeze stabiel)',
        'Adductorkracht LSI ≥ 95% en squeeze-waarde ≥ baseline van vóór de blessure',
        'HAGOS alle subschalen ≥ 80/100, inclusief kwaliteit van leven',
        'Wedstrijdsimulatie met duelcontact en onvoorspelbare cuts pijnvrij op wedstrijdtempo',
        'Preventief Copenhagen-onderhoudsprogramma 1–2×/week structureel ingepland',
        'Sporter rapporteert volledige psychologische bereidheid tot competitie (geen bewegingsangst)'
      ],
      evidence:'Het <strong>adductorversterkingsprogramma als preventie</strong>: in een cluster-gerandomiseerde trial met 35 ploegen en 652 spelers lag de gemiddelde seizoensprevalentie van liesklachten op <strong>13,5%</strong> (95% BI 12,3–14,7) tegenover <strong>21,3%</strong> (20,0–22,6) in de controlegroep, en was het <strong>risico</strong> om liesklachten te melden <strong>41% lager</strong> (OR 0,59; 95% BI 0,40–0,86; p = 0,008) (Harøy et al., 2019 — BJSM). <em>Het programma bestond uit één enkele oefening met drie progressieniveaus, driemaal per week in de voorbereiding en éénmaal per week tijdens het seizoen — géén integratie in het FIFA 11+-kader zoals eerder vermeld. De onderhoudsdosis van eenmaal per week is dus wél gedekt.</em> Dat eerdere liesblessure en verminderde adductorkracht de sterkste risicofactoren zijn, is <em>klinische redenering; die citatie is hier niet geverifieerd.</em> De <strong>HAGOS</strong> is gevalideerd volgens de COSMIN-standaard bij 101 patiënten (ICC 0,82–0,91); <em>let op het verschil tussen het kleinste detecteerbare verschil op groepsniveau (2,7 tot 5,2 punten) en op individueel niveau (17,7 tot 33,8 punten) — voor één patiënt is een kleine verandering dus niet interpreteerbaar</em> (Thorborg et al., 2011 — BJSM).',
    }
  ],
  scores:['HAGOS','NPRS'],
  refs:'Hölmich P et al., 1999 — Lancet 353(9151):439-43 (actieve oefentherapie, RCT; 23 tegenover 4 pijnvrije sporthervattingen) | Weir A et al., 2015 — Br J Sports Med 49(12):768-74 (Doha agreement, consensus) | Serner A et al., 2014 — Br J Sports Med 48(14):1108-14 (EMG bij 40 GEZONDE elitevoetballers) | Ishøi L et al., 2016 — Scand J Med Sci Sports 26(11):1334-1342 (Copenhagen adduction, +35,7% excentrische kracht) | Harøy J et al., 2019 — Br J Sports Med 53(3):150-157 (adductorversterking ter preventie, 41% lager risico) | Serner A et al., 2020 — Am J Sports Med 48(5):1151-1159 (prognostisch cohort acuut adductorletsel) | Thorborg K et al., 2011 — Br J Sports Med 45(6):478-91 (validatie HAGOS)',
  spiergroep:'adductoren, core / buikspieren'
};

BESCHRIJVING.lies = {
  kenmerken:'<strong>Adductor-gerelateerde liespijn</strong> volgens de Doha agreement (Weir et al., 2015 — Br J Sports Med): pijn ter hoogte van de <strong>adductor longus-origo</strong> op het os pubis, gecombineerd met palpatiepijn van de adductoren én pijnprovocatie bij weerstandsadductie. De <strong>adductor squeeze test</strong> (isometrische adductie in 0° en 45° heupflexie, gemeten met sfygmomanometer of handdynamometer) reproduceert de herkenbare pijn en objectiveert het krachtsverlies — de test wordt gebruikt als diagnostisch hulpmiddel en als belastingsmonitor — <em>de toegeschreven publicatie is in dit dossier niet opgehaald; klinische redenering</em>. Typische pijnprovocatie bij <strong>sprinten, trappen (kick) en richtingsveranderingen</strong>; in chronische gevallen ook stijfheid na training en pijn bij de eerste stappen &#39;s ochtends. De HAGOS brengt de impact op sport en levenskwaliteit in kaart. Beeldvorming is doorgaans niet vereist voor de klinische diagnose; MRI kan bij acute letsels de graad en locatie bepalen — <em>de toegeschreven publicatie uit 2015 is in dit dossier niet opgehaald. Wel geverifieerd: in een prognostisch cohort voegde MRI weinig toe aan het klinisch onderzoek voor het inschatten van de terugkeerduur (Serner et al., 2020).</em>',
  oorzaken:'<strong>Overbelasting of acuut letsel van het adductorcomplex</strong> — vooral de adductor longus (het aandeel van 91% is in dit dossier niet geverifieerd) — bij sporten met hoge adductorbelasting: voetbal, ijshockey, futsal en rugby, waar repetitief trappen, zijwaartse duels en explosieve richtingsveranderingen de adductoren excentrisch overvragen — <em>publicatie in dit dossier niet opgehaald</em>. Belangrijkste risicofactoren: <strong>eerdere liesblessure</strong>, <strong>verminderde adductorkracht</strong> en een lager niveau van sportspecifieke training; plotse pieken in trainingsbelasting (hoge acute:chronische workload) verhogen het risico bijkomend — <em>publicatie in dit dossier niet opgehaald</em>. Pathofysiologisch gaat het om een enthesopathie/tendinopathie van de gemeenschappelijke aponeurose van adductor longus en rectus abdominis op het os pubis. <strong>Differentiaaldiagnose volgens Doha</strong>: iliopsoas-gerelateerde liespijn (pijn bij weerstandsheupflexie en rek), inguinaal-gerelateerde liespijn (pijn in het lieskanaal, provocatie bij Valsalva/hoesten) en pubis-gerelateerde liespijn (drukpijn op de symfyse); daarnaast steeds heupgewricht (FAI-syndroom, labrum) en gerefereerde lumbale of viscerale pijn uitsluiten.'
};

// ── PROTOCOL: ANTEROSUPERIEURE LABRUMSCHEUR (v46) ──
protocols.aslt = {id:'aslt',title:'Anterosuperieure Labrumscheur',subtitle:'Revalidatieprotocol voor anterosuperieur labrumletsel (SLAP-extensie, pulley-laesie) — conservatief met postoperatieve tijdslijnen',color:'#2563eb',icon:'🤾',
  phases:[
    {
      label:'Fase 1',
      title:'Beschermde fase — pijncontrole & ontlasting bicepsanker',
      weeks:'Week 0–3',
      goals:[
        'NPRS ≤ 3 in rust en bij ADL onder schouderhoogte',
        'Provocatieposities vermijden: maximale abductie-exorotatie en geforceerde flexie-adductie-endorotatie',
        'Actieve scapulaire setting zonder compensatoire elevatie',
        'Behoud van cervicale, elleboog- en polsmobiliteit',
        'Educatie over belasting van het bicepsanker en slaaphouding'
      ],
      exercises:[
        {name:'Pendulaire oefeningen (Codman)',params:[['Duur','60–90 sec'],['Sets','3'],['Freq','3×/dag']],note:'Passief slingeren met ontspannen arm. Geen actieve zwaai — de romp genereert de beweging.',cat:'mobiliteit'},
        {name:'Scapulaire setting isometrisch',params:[['Reps','10'],['Hold','5 sec'],['Freq','3×/dag']],note:'Retractie en depressie zonder elevatie van de schoudergordel. Basis voor alle verdere revalidatie.',cat:'stabiliteit'},
        {name:'Isometrische ER/IR in neutrale positie',params:[['Intensiteit','20–30% MVC'],['Hold','5 sec'],['Reps','10'],['Freq','2×/dag']],note:'Arm in 0° abductie met handdoekrol in de oksel. Strikt pijnvrij — bij pijn de intensiteit halveren.',cat:'kracht'},
        {name:'Actief-geassisteerde flexie in scapulair vlak',params:[['ROM','tot 90°'],['Reps','10'],['Sets','2'],['Freq','2×/dag']],note:'Scapulair vlak (30° anteflexie) ontlast het anterosuperieure kwadrant. Niet forceren voorbij 90° in deze fase.',cat:'mobiliteit'},
        {name:'Thoracale extensiemobilisatie over rol',params:[['Reps','10'],['Sets','2'],['Freq','1×/dag']],note:'Thoracale kyfose beperkt scapulaire posterieure kanteling en verhoogt de subacromiale en anterosuperieure belasting.',cat:'mobiliteit'},
        {name:'Elleboog- en polsmobiliteit zonder bicepsbelasting',params:[['Reps','15'],['Sets','2'],['Freq','2×/dag']],note:'KRITIEK: géén weerstandsflexie van de elleboog of supinatie — beide trekken rechtstreeks aan het bicepsanker.',cat:'mobiliteit'}
      ],
      criteria_go:[
        'NPRS ≤ 3 in rust en bij ADL onder schouderhoogte',
        'Passieve flexie ≥ 120° pijnvrij',
        'Exorotatie in neutrale positie ≥ 30°',
        'Nachtpijn maximaal 1× per nacht',
        'Scapulaire setting 10× correct uitgevoerd zonder compensatie'
      ],
      criteria_stop:[
        'Pijntoename > 2 NPRS-punten die langer dan 24 uur aanhoudt na een sessie',
        'Klik- of blokkadefenomeen met acuut functieverlies',
        'Toenemende apprehensie bij abductie-exorotatie'
      ],
      redflags:[
        'Acute krachtsuitval met distale spierbuik van de biceps (Popeye-teken) — ruptuur lange bicepspees',
        'Progressieve neurologische uitval of paresthesieën in dermatoom C5–C6',
        'Sperrende pijn met apprehensie en subluxatiegevoel — glenohumerale instabiliteit',
        'Nachtpijn met koorts, gewichtsverlies of maligniteit in de voorgeschiedenis'
      ],
      evidence:'<strong>Ontlasting van het bicepsanker</strong> is in deze fase bepalend: de lange bicepspees hecht aan op het superieure labrum, waardoor weerstandsflexie van de elleboog en supinatie het letsel rechtstreeks belasten. <strong>Anterosuperieur impingement</strong> ontstaat bij flexie-adductie-endorotatie, waarbij de diepe zijde van de subscapularis en de reflectiepulley tegen de anterosuperieure glenoidrand aanschuren (Gerber &amp; Sebesta, 2000 — JSES). Bij een geassocieerde <strong>pulley-laesie</strong> (SGHL/CHL) is de bicepspees onstabiel in de sulcus; Habermeyer et al. (2004 — JSES) toonden dat deze laesies systematisch samengaan met anterosuperieure labrumpathologie. <strong>Postoperatief</strong> (SLAP-herstel of tenodese) geldt een sling gedurende 3–4 weken en verschuiven alle fasen ongeveer 2 weken; actieve elleboogflexie tegen weerstand blijft dan tot week 8 verboden.'
    },
    {
      label:'Fase 2',
      title:'ROM-herstel & scapulothoracale controle',
      weeks:'Week 3–6',
      goals:[
        'Volledige pijnvrije actieve elevatie, exorotatie geleidelijk opbouwen',
        'GIRD reduceren tot < 20° ten opzichte van contralateraal',
        'Correct scapulohumeraal ritme tot 120° elevatie',
        'Isometrische cuffbelasting op 70% MVC pijnvrij',
        'Herstel van proprioceptie in het middenbereik'
      ],
      exercises:[
        {name:'Sleeper stretch (posterieure kapsel)',params:[['Hold','30 sec'],['Reps','3'],['Freq','2×/dag']],note:'Zijlig op de aangedane zijde, scapula gefixeerd tegen de mat. Bij pijn vooraan overschakelen op cross-body adductie.',cat:'mobiliteit'},
        {name:'Cross-body adductiestretch',params:[['Hold','30 sec'],['Reps','3'],['Freq','2×/dag']],note:'Alternatief voor de sleeper stretch en beter verdragen bij anterosuperieure klachten.',cat:'mobiliteit'},
        {name:'Serratus anterior wall slide',params:[['Reps','12'],['Sets','3'],['Freq','1×/dag']],note:'Protractie aan het einde van de beweging. Serratuszwakte is een primaire oorzaak van scapulaire dyskinesie.',cat:'stabiliteit'},
        {name:'Lage rij en scapulaire retractie met elastiek',params:[['Reps','12–15'],['Sets','3'],['Belasting','licht → matig']],note:'Elleboog naast de romp. Focus op middentrapezius en rhomboïden zonder bovenste trapezius-dominantie.',cat:'kracht'},
        {name:'Exorotatie met elastiek in 0° abductie',params:[['Reps','15'],['Sets','3'],['Freq','5×/week']],note:'Handdoekrol in de oksel verhoogt de supraspinatus- en infraspinatusactivatie en beperkt compensatie.',cat:'kracht'},
        {name:'Ritmische stabilisatie in scapulair vlak (45°)',params:[['Duur','30 sec'],['Sets','3'],['Freq','3×/week']],note:'Lichte alternerende perturbaties door de therapeut. Herstelt neuromusculaire controle vóór krachtopbouw.',cat:'neuromusculair'}
      ],
      criteria_go:[
        'Actieve flexie ≥ 160° zonder pijnlijke boog',
        'Exorotatie in 45° abductie ≥ 75% van contralateraal',
        'GIRD < 20° en totale rotatiebeweging binnen 10° van contralateraal',
        'Geen zichtbare scapulaire dyskinesie bij 3×10 elevatie',
        'Exorotatiekracht ≥ 70% van contralateraal, pijnvrij getest',
        'Negatieve O&#39;Brien-test bij ADL-belasting'
      ],
      evidence:'<strong>Scapulaire revalidatie vóór krachtopbouw</strong> is de kern van deze fase: Cools et al. (2014 — Br J Sports Med) beschrijven een gefaseerde aanpak waarbij bewuste scapulaire controle voorafgaat aan belaste oefeningen, met specifieke aandacht voor de verhouding bovenste versus onderste trapezius. <strong>GIRD</strong> (glenohumeral internal rotation deficit) is een modificeerbare risicofactor: Wilk et al. (2011 — Am J Sports Med) vonden bij professionele werpers dat een GIRD ≥ 20° gepaard gaat met een 1,9× hoger blessurerisico en een deficit in totale rotatiebeweging ≥ 5° met een 2,5× hoger risico. <strong>Posterieure kapselstijfheid</strong> verplaatst het glenohumerale rotatiecentrum posterosuperieur en verhoogt daarmee de shear op het superieure labrum.'
    },
    {
      label:'Fase 3',
      title:'Progressieve kracht & begeleide bicepsbelasting',
      weeks:'Week 6–12',
      goals:[
        'ER/IR-krachtratio ≥ 0,66 herstellen',
        'Symmetrische actieve ROM inclusief exorotatie in 90° abductie',
        'Gecontroleerde herintroductie van bicepsbelasting',
        'Gesloten-keten stabiliteit boven 90° elevatie',
        'ASES-score ≥ 75'
      ],
      exercises:[
        {name:'Exorotatie/endorotatie met elastiek in 45–90° abductie',params:[['Reps','12–15'],['Sets','3'],['Freq','4×/week']],note:'Progressie van 45° naar 90° abductie zodra de 90/90-positie pijnvrij is. Excentrische fase van 3 seconden.',cat:'kracht'},
        {name:'Prone Y-T-W',params:[['Reps','10–12'],['Sets','3'],['Freq','3×/week']],note:'Y voor onderste trapezius, T voor middentrapezius, W voor retractie met exorotatie. Laag gewicht, hoge kwaliteit.',cat:'kracht'},
        {name:'Push-up plus progressie',params:[['Reps','10–12'],['Sets','3'],['Freq','3×/week']],note:'Van muur naar schuine steun naar vlak. Gesloten keten geeft co-contractie en gewrichtscompressie — gunstig bij labrumletsel.',cat:'stabiliteit'},
        {name:'Bicepscurl progressief',params:[['Start','isometrisch'],['Reps','10–12'],['Sets','3'],['Belasting','30 → 50% 1RM']],note:'Pas starten vanaf week 6 conservatief of week 8 postoperatief. Volgorde: isometrisch → concentrisch → excentrisch. Stop bij pijn > 3/10 in de sulcus.',cat:'kracht'},
        {name:'Full can in scapulair vlak',params:[['ROM','tot 90°'],['Reps','12'],['Sets','3'],['Belasting','1–3 kg']],note:'Duim omhoog. Superieur aan de empty can-variant door lagere impingementbelasting bij gelijke supraspinatusactivatie.',cat:'kracht'},
        {name:'Ritmische stabilisatie 90/90 met perturbaties',params:[['Duur','30–45 sec'],['Sets','3'],['Freq','3×/week']],note:'De 90/90-positie repliceert de late cocking-fase. Opbouwen van voorspelbare naar onvoorspelbare perturbaties.',cat:'neuromusculair'}
      ],
      criteria_go:[
        'ER/IR-krachtratio ≥ 0,66 (handheld dynamometrie)',
        'Exorotatiekracht ≥ 85% van contralateraal',
        'Volledige symmetrische ROM inclusief exorotatie in 90° abductie',
        'Pijnvrije bicepscurl 3×10 met 50% van contralaterale 1RM',
        'ASES-score ≥ 75',
        'Pijnvrije full can-test tegen weerstand'
      ],
      evidence:'De <strong>ER/IR-ratio van 0,66</strong> geldt als drempel voor evenwichtige rotatorenmanchetfunctie; een lagere ratio wijst op relatieve exorotatorzwakte en wordt geassocieerd met overbelasting van de passieve structuren, waaronder het labrum (Cools et al., 2014 — Br J Sports Med). <strong>Gesloten-ketenoefeningen</strong> genereren glenohumerale compressie en co-contractie van de cuff, wat de gewrichtsstabiliteit verhoogt zonder trekbelasting op het labrum. <strong>Herintroductie van bicepsbelasting</strong> gebeurt gefaseerd omdat de lange bicepspees via het anker rechtstreeks op de labrumletsel aangrijpt; postoperatief na SLAP-herstel wordt weerstandsbelasting van de biceps standaard uitgesteld tot week 8. Provencher et al. (2013 — Am J Sports Med) rapporteerden in een prospectieve reeks van 179 type II SLAP-herstellingen een <strong>faalpercentage van 37%</strong>, met leeftijd boven 36 jaar als sterkste voorspeller — bij oudere patiënten verdient tenodese de voorkeur boven herstel.'
    },
    {
      label:'Fase 4',
      title:'Dynamische stabiliteit, plyometrie & kinetische keten',
      weeks:'Week 12–18',
      goals:[
        'Excentrische controle bij overhead-belasting',
        'Plyometrische capaciteit boven schouderhoogte pijnvrij',
        'Integratie van heup- en rompkracht in de kinetische keten',
        'KJOC-score ≥ 80 bij overhead sporters',
        'Symmetrische Y-balance upper quarter'
      ],
      exercises:[
        {name:'Plyometrische medicijnbalworpen overhead',params:[['Reps','8–10'],['Sets','3'],['Gewicht','1–3 kg'],['Freq','2×/week']],note:'Progressie van tweehandig naar eenhandig. Korte contacttijd, focus op excentrisch opvangen.',cat:'neuromusculair'},
        {name:'Excentrische exorotatie in 90/90',params:[['Reps','10'],['Sets','3'],['Tempo','3 sec excentrisch']],note:'Repliceert de deceleratiefase van het werpen — de fase met de hoogste distractiekracht op het labrum.',cat:'kracht'},
        {name:'Pallof press en side plank met rotatie',params:[['Reps','10 per zijde'],['Sets','3'],['Freq','3×/week']],note:'Antirotatoire rompcontrole. Rompzwakte verhoogt compensatoire schouderbelasting bij overhead sporters.',cat:'stabiliteit'},
        {name:'Éénbeens Romanian deadlift',params:[['Reps','8–10 per been'],['Sets','3']],note:'Heup- en rompkracht vormen de basis van de kinetische keten; het merendeel van de werpenergie komt uit onderste extremiteit en romp.',cat:'kracht'},
        {name:'Landmine press',params:[['Reps','8–10'],['Sets','3'],['Belasting','progressief']],note:'Semi-verticale duwbeweging in het scapulair vlak — veiliger dan strikte overhead press bij anterosuperieure klachten.',cat:'kracht'},
        {name:'Oscillerende stabilisatie boven schouderhoogte',params:[['Duur','30 sec'],['Sets','3'],['Freq','3×/week']],note:'Bodyblade of vergelijkbaar. Hoogfrequente perturbaties trainen reflexmatige cuff-activatie.',cat:'neuromusculair'}
      ],
      criteria_go:[
        'KJOC-score ≥ 80 (overhead sporters)',
        'Exorotatiekracht ≥ 90% en endorotatiekracht ≥ 95% van contralateraal',
        'Pijnvrije plyometrie 3×10 boven schouderhoogte',
        'Negatieve provocatietesten: O&#39;Brien, biceps load II en Speed',
        'Y-balance upper quarter met asymmetrie ≤ 4 cm',
        'Verschil in totale rotatiebeweging < 5° ten opzichte van contralateraal'
      ],
      evidence:'<strong>De deceleratiefase van het werpen</strong> genereert distractiekrachten tot circa 1,0–1,5× het lichaamsgewicht op het glenohumerale gewricht, waarbij de lange bicepspees het superieure labrum belast — daarom is excentrische exorotatietraining in 90/90 de sleutel van deze fase. <strong>Kinetische keten</strong>: bij een correcte werpbeweging komt de meerderheid van de energie uit de onderste extremiteit en de romp; tekorten in heup- en rompcontrole verschuiven de belasting naar de schouder en verhogen het recidiefrisico. <strong>Plyometrie</strong> herstelt de stretch-shortening capaciteit die nodig is voor overhead sport en vormt de brug tussen krachttraining en sportspecifieke belasting. Bij overhead sporters is de <strong>KJOC-score</strong> (Alberta et al., 2010 — Am J Sports Med) gevoeliger voor restklachten dan algemene schoudervragenlijsten, omdat die laatste bij sporters vaak een plafondeffect vertonen.'
    },
    {
      label:'Fase 5',
      title:'Return to sport & recidiefpreventie',
      weeks:'Week 18–24',
      goals:[
        'Volledig interval throwing of interval serve programma pijnvrij doorlopen',
        'Volledige sportspecifieke belasting hervatten',
        'Onderhoudsprogramma cuff en scapula verankeren',
        'KJOC ≥ 90 en ASES ≥ 90',
        'Belastingsmonitoring geïmplementeerd'
      ],
      exercises:[
        {name:'Interval throwing program',params:[['Freq','3×/week'],['Rust','minimaal 1 dag tussen sessies'],['Progressie','fasegebaseerd']],note:'Start op 45 voet en bouw afstand op vóór intensiteit. Bij pijn één stap terugvallen, niet doorzetten.',cat:'neuromusculair'},
        {name:'Sportspecifieke techniekcorrectie',params:[['Duur','20–30 min'],['Freq','2×/week']],note:'Werp- of servemechanica met videofeedback. Hyperangulatie en late romprotatie verhogen de labrumbelasting.',cat:'neuromusculair'},
        {name:'Onderhoudsprogramma cuff en scapula',params:[['Reps','15'],['Sets','2–3'],['Freq','2×/week']],note:'Levenslang aanhouden bij overhead sporters. Compliance is de sterkste voorspeller van recidiefpreventie.',cat:'kracht'},
        {name:'Sleeper stretch onderhoud',params:[['Hold','30 sec'],['Reps','3'],['Freq','dagelijks']],note:'GIRD keert terug binnen enkele weken zonder onderhoud, zeker in het competitieseizoen.',cat:'mobiliteit'},
        {name:'Belastingsmonitoring sRPE',params:[['Freq','elke sessie'],['Doel','ACWR 0,8–1,3']],note:'Sessie-RPE × duur. De gehanteerde belastingsverhouding is een praktijkafspraak; een drempel van 1,5 is in dit dossier niet onderbouwd. Bedoeld om het blessurerisico aanzienlijk.',cat:'test'},
        {name:'Plyometrie onderhoud',params:[['Reps','8–10'],['Sets','2'],['Freq','1–2×/week']],note:'Behoudt de excentrische capaciteit tijdens het seizoen zonder extra vermoeidheid te stapelen.',cat:'neuromusculair'}
      ],
      criteria_go:[
        'KJOC-score ≥ 90 en ASES-score ≥ 90',
        'ER/IR-ratio ≥ 0,66 met exorotatiekracht ≥ 95% van contralateraal',
        'Volledig interval programma pijnvrij doorlopen',
        'GIRD < 20° en verschil in totale rotatiebeweging < 5°',
        'Geen apprehensie of pijn bij maximale abductie-exorotatie',
        'Volledige sportspecifieke training zonder klachten de volgende dag'
      ],
      evidence:'<strong>Conservatief beleid slaagt bij een aanzienlijk deel van de patiënten</strong>: Edwards et al. (2010 — Am J Sports Med) behandelden SLAP-letsels niet-operatief en zagen bij ongeveer de helft van de patiënten voldoende verbetering om chirurgie te vermijden, waarvan 71% terugkeerde naar het vorige sportniveau — een niet-operatieve proefperiode van minstens drie maanden is dus verantwoord bij niet-mechanische klachten. <strong>Criteriumgebaseerde in plaats van tijdgebaseerde return to sport</strong> is de standaard: het interval throwing program bouwt eerst afstand op en pas daarna intensiteit. <strong>Onderhoud</strong> is essentieel omdat zowel GIRD als scapulaire dyskinesie binnen weken terugkeren zonder continue training. Bij aanhoudende mechanische klachten (blokkeren, haken, pijn bij elke worp) ondanks correcte revalidatie is heroverweging van beeldvorming en chirurgisch advies aangewezen.'
    }
  ],
  scores:[],
  refs:'Gerber C &amp; Sebesta A (2000). Impingement of the deep surface of the subscapularis tendon and the reflection pulley on the anterosuperior glenoid rim. J Shoulder Elbow Surg 9(6):483-90 | Habermeyer P et al. (2004). Anterosuperior impingement of the shoulder as a result of pulley lesions: a prospective arthroscopic study. J Shoulder Elbow Surg 13(1):5-12 | Rao AG et al. (2003). Anatomical variants in the anterosuperior aspect of the glenoid labrum. J Bone Joint Surg Am 85(4):653-9 | Edwards SL et al. (2010). Nonoperative treatment of superior labrum anterior posterior tears. Am J Sports Med 38(7):1456-61 | Wilk KE et al. (2011). Correlation of glenohumeral internal rotation deficit and total rotational motion to shoulder injuries in professional baseball pitchers. Am J Sports Med 39(2):329-35 | Cools AM et al. (2014). Rehabilitation of scapular dyskinesis: from the office worker to the elite overhead athlete. Br J Sports Med 48(8):692-7 | Provencher MT et al. (2013). A prospective analysis of 179 type 2 superior labrum anterior and posterior repairs. Am J Sports Med 41(4):880-6',
  spiergroep:'Rotatorenmanchet'
};

BESCHRIJVING.aslt = {
  kenmerken:'<strong>Diepe anterosuperieure schouderpijn</strong> die typisch optreedt bij flexie-adductie-endorotatie (reiken naar de tegenovergestelde schouder, achterin de wagen grijpen) en bij maximale abductie-exorotatie bij overhead sporters. Kenmerkend zijn <strong>mechanische klachten</strong>: klikken, haken of een kortstondig blokkadegevoel, vaak samen met pijn in de sulcus intertubercularis bij bicepsbelasting. Krachtsverlies en verlies van werpsnelheid of controle (het zogenaamde dead arm-gevoel) zijn frequent bij sporters. <strong>Klinisch testen</strong>: de O&#39;Brien actieve compressietest, biceps load II, Speed- en Yergason-test en de anterior slide test; geen enkele test is op zichzelf voldoende specifiek, waardoor een testcluster in combinatie met het klachtenpatroon noodzakelijk is. <strong>Beeldvorming</strong>: MR-artrografie, bij voorkeur met ABER-positionering, is de referentiestandaard, maar kent een hoog vals-positief risico in dit specifieke kwadrant. Nachtpijn bij liggen op de aangedane zijde en pijn bij bovenhands werken zijn de meest gerapporteerde functionele beperkingen.',
  oorzaken:'<strong>Traumatisch</strong>: val op de uitgestrekte arm, plotse tractie aan de arm, geforceerde abductie-exorotatie of een onverwachte excentrische bicepscontractie. <strong>Overbelasting</strong>: repetitieve overhead-belasting bij werpers, tennissers, volleyballers en zwemmers, waarbij de distractiekrachten in de deceleratiefase het superieure labrum via het bicepsanker belasten. <strong>Anterosuperieur impingement</strong> ontstaat wanneer de diepe zijde van de subscapularispees en de reflectiepulley bij flexie-adductie-endorotatie tegen de anterosuperieure glenoidrand aanschuren (Gerber &amp; Sebesta, 2000 — JSES). Er bestaat een sterke associatie met <strong>pulley-laesies</strong> van het rotatorenmanchetinterval (SGHL/CHL) en met letsel van de bovenrand van de subscapularis; Habermeyer et al. (2004 — JSES) beschreven deze combinatie prospectief arthroscopisch. <strong>KRITIEKE VALKUIL</strong>: het anterosuperieure kwadrant is precies de zone van normale anatomische varianten — het sublabraal foramen en het Buford complex (cordvormig middelste glenohumeraal ligament met afwezig anterosuperieur labrum) komen samen bij ongeveer 13% van de schouders voor (Rao et al., 2003 — JBJS). Deze varianten worden regelmatig als scheur geïnterpreteerd, terwijl hechten of debrideren ervan een ernstige bewegingsbeperking veroorzaakt. <strong>Modificeerbare risicofactoren</strong>: GIRD, tekort in totale rotatiebeweging, scapulaire dyskinesie, verminderde exorotatorkracht en onvoldoende heup- en rompcontrole in de kinetische keten.'
};

SCORES.aslt = [
  {name:'ASES', full:'American Shoulder and Elbow Surgeons Score', max:100, unit:'punten', ranges:[
    {label:'Goed', min:90, max:100, color:'#22c55e'},
    {label:'Matig', min:70, max:89, color:'#f59e0b'},
    {label:'Slecht', min:0, max:69, color:'#ef4444'}
  ], rts:'≥ 90 voor RTS', mcid:6.4},
  {name:'KJOC', full:'Kerlan-Jobe Orthopaedic Clinic Score (overhead sporters)', max:100, unit:'punten', ranges:[
    {label:'Klachtenvrij spelend', min:90, max:100, color:'#22c55e'},
    {label:'Spelend met klachten', min:70, max:89, color:'#f59e0b'},
    {label:'Beperkt / niet spelend', min:0, max:69, color:'#ef4444'}
  ], rts:'≥ 90 voor RTS', mcid:null},
  {name:'GIRD', full:'Glenohumeral Internal Rotation Deficit (verschil met contralateraal)', max:60, unit:'graden', invert:true, ranges:[
    {label:'Normaal', min:0, max:15, color:'#22c55e'},
    {label:'Aandachtspunt', min:16, max:20, color:'#f59e0b'},
    {label:'Verhoogd risico', min:21, max:60, color:'#ef4444'}
  ], rts:'< 20° voor RTS', mcid:null}
];

// ── MANUELE THERAPIE: inhoud per protocol ──
MANUEEL.fs = {
  intro:'Bij adhesieve capsulitis heeft manuele therapie een <strong>reële en stadiumafhankelijke plaats</strong>. In de bevriezende (pijnlijke) fase is agressieve mobilisatie contraproductief en staat pijnmodulatie voorop; in de bevroren (stijve) fase is end-range mobilisatie de kernbehandeling. De regel is eenvoudig: <strong>de pijnrespons stuurt de graad</strong>, niet de gemeten ROM-beperking.',
  technieken:[
    {naam:'Glenohumerale inferieure glijmobilisatie', fase:'Fase 2–3', doel:'Rek van de inferieure kapselrecessus voor abductiewinst.', uitvoering:'Rugligging, arm in 45° abductie in scapulair vlak. Humeruskop caudaal transleren met gestabiliseerde scapula. Graad I–II bij pijndominantie, graad III–IV zodra stijfheid dominant is.', dosering:'3 × 30–60 sec, 2–3×/week', let_op:'In de bevriezende fase geen graad III–IV: dit verlengt de inflammatoire fase en verhoogt de nachtpijn.'},
    {naam:'Posterieure glijmobilisatie', fase:'Fase 2–3', doel:'Herstel van endorotatie en horizontale adductie.', uitvoering:'Rugligging, humeruskop posterieur transleren, eventueel in toenemende abductie. Combineren met eindstandige positionering voor grotere winst.', dosering:'3 × 30–60 sec, 2–3×/week', let_op:'Posterieure kapselrek geeft vaak natijd; evalueer de reactie na 24 uur.'},
    {naam:'Mobilization with Movement (Mulligan)', fase:'Fase 2–4', doel:'Onmiddellijke pijnvrije ROM-winst bij actieve elevatie.', uitvoering:'Postero-laterale glide van de humeruskop aanhouden terwijl de patiënt actief eleveert. Het pijnvrij-principe is bindend: doet het pijn, dan klopt de richting of de dosering niet.', dosering:'3 × 6–10 herhalingen', let_op:'Uitblijvende onmiddellijke verbetering is een reden om de techniek te verlaten, niet om harder te duwen.'},
    {naam:'End-range translatorische mobilisatie', fase:'Fase 3–4', doel:'Structurele kapselverlenging in de bevroren fase.', uitvoering:'Graad III–IV mobilisatie in eindstandige positie, per richting gedoseerd volgens het kapsulaire patroon (exorotatie eerst, dan abductie, dan endorotatie).', dosering:'30 min per sessie, 2×/week gedurende 12 weken', let_op:'Alleen zinvol wanneer stijfheid en niet pijn de beperkende factor is.'},
    {naam:'Thoracale mobilisatie', fase:'Alle fasen', doel:'Vergroten van de scapulothoracale bewegingsruimte bij elevatie.', uitvoering:'Mobilisatie van de midthoracale extensie en de bovenste ribben, zittend of in buiklig.', dosering:'2 × 10 herhalingen per niveau', let_op:'Bij osteoporose geen manipulatietechnieken met hoge snelheid.'},
    {naam:'Weke-delentechnieken subscapularis en pectoralis minor', fase:'Fase 2–4', doel:'Reduceren van tonus die exorotatie en posterieure kanteling beperkt.', uitvoering:'Manuele druk en dwarse mobilisatie van de axillaire rand van de subscapularis; pectoralis minor in ruglig met scapula in posterieure kanteling.', dosering:'2–3 min per structuur', let_op:'Adjuvant — vervangt de kapselmobilisatie niet.'}
  ],
  contraindicaties:[
    'Hevige nachtpijn met continue rustpijn: relatieve contra-indicatie voor graad III–IV mobilisatie (bevriezende fase)',
    'Osteoporose of langdurig corticosteroïdgebruik: geen hooggradige of manipulatieve technieken',
    'Recente fractuur, schouderprothese of rotatorenmanchetherstel binnen de beschermingsperiode',
    'Vermoeden van volledige rotatorenmanchetruptuur: niet forceren in eindstand',
    'Onverklaarde nachtpijn met systemische alarmsymptomen — eerst medische evaluatie'
  ],
  evidentie:'<strong>End-range mobilisatie overtreft mid-range mobilisatie</strong>: Vermeulen et al. (2006 — Phys Ther) vergeleken hooggradige met laaggradige mobilisatie in een gerandomiseerde studie en vonden grotere ROM- en functiewinst in de hooggradige groep bij patiënten in de stijve fase. De <strong>Cochrane-review</strong> van Page et al. (2014) besluit echter dat de bewijskracht voor manuele therapie en oefentherapie laag is en dat de combinatie op korte termijn niet superieur is aan een corticosteroïdinjectie — manuele therapie is dus een onderdeel van een breder plan, geen alleenstaande oplossing. <strong>Diabetespatiënten</strong> hebben een stijver kapsel, een tragere respons en een langer beloop; pas daarop de verwachtingen en de behandelduur aan.'
};

MANUEEL.pt = {
  intro:'Bij patellapeestendinopathie is manuele therapie <strong>uitdrukkelijk adjuvant</strong>. Progressieve krachttraining is de kerninterventie en verandert als enige de peescapaciteit; manuele therapie kan pijn tijdelijk moduleren en bijkomende beperkingen elders in de keten (enkeldorsiflexie, heupextensie) aanpakken. Wek geen verwachting van structurele peesverandering door manuele behandeling.',
  technieken:[
    {naam:'Talocrurale dorsiflexiemobilisatie', fase:'Fase 1–3', doel:'Vergroten van dorsiflexie om de patellapeesbelasting bij landen te verlagen.', uitvoering:'Anterieur-posterieure glide van de talus, bij voorkeur belast als mobilization with movement in lunge-positie.', dosering:'3 × 10 herhalingen, aansluitend belast oefenen', let_op:'Zinvol bij een weight-bearing lunge test onder circa 9–10 cm; zonder dat tekort is er geen indicatie.'},
    {naam:'Weke-delenmobilisatie quadriceps en laterale structuren', fase:'Fase 1–2', doel:'Tonusreductie en betere rekbaarheid van de quadriceps.', uitvoering:'Langzame dwarse en longitudinale mobilisatie van vastus lateralis en het laterale retinaculum, buiten de pijnlijke insertie.', dosering:'3–5 min, voorafgaand aan de oefensessie', let_op:'Niet rechtstreeks op de reactieve peesinsertie werken: dat verhoogt de prikkelbaarheid.'},
    {naam:'Patellamobilisatie', fase:'Fase 1–2', doel:'Herstel van patellaire glijding bij aangetoonde beperking.', uitvoering:'Mediale, laterale en caudale glijmobilisatie met ontspannen quadriceps in lichte knieflexie.', dosering:'2 × 20 oscillaties per richting', let_op:'Alleen bij objectief verminderde patellamobiliteit, niet routinematig.'},
    {naam:'Heupflexormobilisatie', fase:'Fase 2–3', doel:'Verbeteren van heupextensie zodat de knie minder compenseert bij afzet.', uitvoering:'Weke-delentechnieken op iliopsoas en rectus femoris, gecombineerd met actieve heupextensie.', dosering:'2–3 min per zijde', let_op:'Rectus femoris kruist beide gewrichten: te agressieve behandeling kan de kniepijn tijdelijk verhogen.'},
    {naam:'Isometrische belasting als pijnmodulatie', fase:'Fase 1–2', doel:'Directe pijndemping voorafgaand aan of in plaats van passieve technieken.', uitvoering:'Zware isometrische knie-extensie, 5 × 45 sec op circa 70% MVC. Strikt genomen geen manuele techniek, maar klinisch een effectiever alternatief.', dosering:'5 × 45 sec, 2–3×/dag bij hoge prikkelbaarheid', let_op:'Bij uitblijvend analgetisch effect de intensiteit aanpassen in plaats van de duur te verlengen.'}
  ],
  contraindicaties:[
    'Diepe dwarse frictie op een reactieve pees: geen aangetoonde meerwaarde en risico op toegenomen prikkelbaarheid',
    'Corticosteroïdinjectie in de voorbije weken: verhoogd ruptuurrisico, geen belastende of forcerende technieken',
    'Open groeischijven met apofysaire klachten (Osgood-Schlatter, Sinding-Larsen-Johansson): geen tractie of druk op de apofyse',
    'Acute peesruptuur of palpabele continuïteitsonderbreking — onmiddellijke medische verwijzing'
  ],
  evidentie:'<strong>Progressieve belasting is de kerninterventie</strong>: systematische reviews van oefenprogramma&#39;s bij patella- en achillespeestendinopathie tonen consistent effect van excentrische en heavy slow resistance-programma&#39;s, terwijl passieve modaliteiten geen structurele peesverandering bewerkstelligen (Malliaras et al., 2013 — Sports Med). Voor <strong>diepe dwarse frictie</strong> vond de Cochrane-review van Loew et al. (2014) geen klinisch relevante meerwaarde bij laterale elleboog- of knietendinopathie. Manuele therapie behoudt wel waarde voor <strong>aantoonbare bijkomende beperkingen</strong> in de kinetische keten: een dorsiflexietekort verhoogt de patellapeesbelasting bij landing en is manueel beïnvloedbaar. Zware <strong>isometrische belasting</strong> geeft bij een deel van de patiënten onmiddellijke analgesie en is klinisch bruikbaar als opstap naar belaste oefeningen, al is het effect in latere studies minder consistent dan aanvankelijk gerapporteerd.'
};

MANUEEL.acl = {
  intro:'Na VKB-reconstructie is manuele therapie <strong>ondersteunend, nooit sturend</strong>: het transplantaat wint capaciteit door progressieve belasting en krachttraining, niet door passieve technieken. De manuele bijdrage ligt bij drie concrete problemen die de oefentherapie blokkeren — het <strong>extensietekort</strong>, de <strong>patellaire en litteken-hypomobiliteit</strong> en de <strong>artrogene spierinhibitie</strong>. Een blijvend extensietekort is de belangrijkste voorspeller van een slechte langetermijnuitkomst en verdient daarom manueel de meeste aandacht.',
  technieken:[
    {naam:'Patellamobilisatie (alle richtingen)', fase:'Fase 1 — Vroeg Postoperatief tot Fase 2', doel:'Voorkomen van infrapatellair contractuursyndroom en herstel van de patellaire glijding die zowel volle extensie als flexie mogelijk maakt.', uitvoering:'Rugligging, knie in circa 0–20° flexie, quadriceps volledig ontspannen. Patella mediaal, lateraal, craniaal en caudaal transleren; caudale glide is de sleutelrichting voor flexie, craniale voor actieve extensie. Graad II–III, langzaam en oscillerend.', dosering:'2 × 20 oscillaties per richting, dagelijks in de eerste 6 weken', let_op:'Bij BPTB-transplantaat is de infrapatellaire regio het meest risicovol voor verkleving — start hier vanaf dag 1 in plaats van af te wachten.'},
    {naam:'Mobilisatie naar volledige extensie (low-load lange rek)', fase:'Fase 1–2', doel:'Bereiken van symmetrische volle extensie, inclusief de fysiologische hyperextensie van de contralaterale zijde.', uitvoering:'Buiklig met het onderbeen over de tafelrand (prone hang), of ruglig met hielsteun. De therapeut geeft een langdurige lage druk op het distale femur; geen korte krachtige eindstandige impulsen.', dosering:'3–5 × 5–10 min per dag, laag belast en pijnvrij', let_op:'Volle extensie is prioritair boven flexiewinst in fase 1. Belast de posterieure structuren niet met snelle hooggradige technieken bij een gelijktijdig gehecht meniscusletsel.'},
    {naam:'Tibiofemorale posterieure glijmobilisatie', fase:'Fase 2 — Spierherstel &amp; ROM', doel:'Herstel van de flexiecomponent van het rolglijmechanisme bij beperkte knieflexie.', uitvoering:'Rugligging of zit met de knie in de beschikbare flexie; tibia posterieur transleren ten opzichte van het femur, graad II–III, gecombineerd met actieve flexie.', dosering:'3 × 30 sec of 2 × 20 oscillaties, 2–3×/week', let_op:'Uitsluitend posterieure richting in de eerste maanden. <strong>Geen anterieure tibiaglide of anterior drawer-achtige mobilisatie</strong> in fase 1–3: dit belast het genezende transplantaat rechtstreeks.'},
    {naam:'Littekenmobilisatie portalen en donorplaats', fase:'Fase 1–2, vanaf gesloten wonde', doel:'Vermijden van adherentie van de huid en het subcutane weefsel aan de onderliggende structuren, wat de patellaire glijding beperkt.', uitvoering:'Circulaire en dwarse mobilisatie van de artroscopieportalen en, bij BPTB of QT, de donorplaats. Beginnen met huid-op-subcutis, later huid-op-pees.', dosering:'3–5 min per sessie, dagelijks door de patiënt zelf', let_op:'Pas starten na volledige wondsluiting en zonder tekenen van infectie; nooit op korstjes of hechtingen.'},
    {naam:'Weke-delentechnieken hamstrings en kuit', fase:'Fase 1–3', doel:'Tonusreductie die het extensietekort in stand houdt, en bij STG-transplantaat opvolging van de donorzone.', uitvoering:'Langzame longitudinale en dwarse mobilisatie van de mediale hamstrings en de gastrocnemiuskoppen in buiklig; bij STG voorzichtig ter hoogte van de pes anserinus.', dosering:'2–3 min per structuur, 2–3×/week', let_op:'Bij STG-oogst is de mediale hamstringregio de eerste weken prikkelbaar; werk buiten de acute pijnzone.'},
    {naam:'Oedeemtechnieken en manuele lymfedrainage', fase:'Fase 1', doel:'Reductie van effusie, die via artrogene spierinhibitie de quadricepsactivatie rechtstreeks onderdrukt.', uitvoering:'Distaal-naar-proximaal drainerende strijkingen met de knie in lichte flexie en het been in hoogstand, gecombineerd met enkelpompen en compressie.', dosering:'10–15 min, dagelijks zolang er meer dan graad 1-effusie is', let_op:'Toenemende zwelling na een belastingstoename is een <strong>doseringssignaal</strong>: pas de oefenprogressie aan in plaats van meer te draineren.'}
  ],
  contraindicaties:[
    'Anterieure tibiaglide of geforceerde anterieure translatie in de eerste maanden: rechtstreekse belasting van het genezende transplantaat',
    'Geforceerde eindstandige flexiemobilisatie bij een gelijktijdig gehechte meniscus — respecteer de chirurgische flexielimiet',
    'Actieve wondinfectie, wondlekkage of septische artritis: elke manuele behandeling stoppen en onmiddellijk medisch verwijzen',
    'Vermoeden van diepe veneuze trombose (eenzijdige kuitpijn, warmte, disproportionele zwelling): geen drainage of weke-delentechnieken vóór uitsluiting',
    'Sterk toenemende pijn en stijfheid met warmte en bewegingsangst: denk aan artrofibrose of CRPS — geen agressieve mobilisatie, wel medische herevaluatie'
  ],
  evidentie:'De kerninterventie na VKB-reconstructie is <strong>progressieve krachttraining en criteriumgestuurde belastingsopbouw</strong>; manuele therapie is een adjuvant met beperkte, doelgerichte indicaties. De <strong>klinische praktijkrichtlijn van de JOSPT</strong> voor knieletsel en -stabiliteit (Logerstedt et al., 2017 — J Orthop Sports Phys Ther) beveelt vroege ROM, gewichtsdragen en neuromusculaire training aan en positioneert manuele technieken als ondersteunend bij mobiliteitsbeperking. Een <strong>persisterend extensietekort</strong> hangt consistent samen met slechtere functionele uitkomsten en meer artrose op lange termijn (Shelbourne et al. — onderzoek naar extensieverlies na VKB-reconstructie), wat de klinische prioriteit voor extensiegerichte technieken verantwoordt. Voor <strong>patella- en littekenmobilisatie</strong> is de directe evidentie schaars en grotendeels gebaseerd op klinische redenering en kleine studies; de rationale is sterk, de bewijskracht laag. Wees dus expliciet naar de patiënt: de winst komt uit de oefeningen, de manuele therapie ruimt de obstakels op.'
};

MANUEEL.tka = {
  intro:'Na een totale knieprothese is de <strong>functionele uitkomst grotendeels bepaald door de kwaliteit van de oefentherapie en de vroege mobilisatie</strong>, niet door passieve technieken. Manuele therapie heeft niettemin een duidelijke plaats bij twee vaak onderschatte problemen: de <strong>hypomobiele patella</strong> en het <strong>adherente littekenweefsel</strong>, die samen een reële rem zetten op flexie én actieve extensie. Bij een dreigende stijve knie is tijdige herkenning belangrijker dan intensiever mobiliseren.',
  technieken:[
    {naam:'Patellamobilisatie', fase:'Week 1–2 en Week 2–6', doel:'Herstel van de patellaire glijding: caudale glide voor flexie, craniale glide voor actieve extensiecontrole.', uitvoering:'Rugligging, knie licht ondersteund in 10–20° flexie, quadriceps ontspannen. Patella caudaal, craniaal, mediaal en lateraal transleren, graad II–III, langzaam oscillerend. Bij een gepatellareseerde of vervangen patella dezelfde techniek, maar met beperktere amplitude.', dosering:'2 × 20 oscillaties per richting, 3–5×/week', let_op:'Een caudaal vastzittende patella is een veelvoorkomende, manueel goed beïnvloedbare oorzaak van vastlopende flexiewinst — meet en herevalueer dit expliciet.'},
    {naam:'Littekenmobilisatie parapatellair litteken', fase:'Week 1–2 tot Week 6–12, vanaf gesloten wonde', doel:'Voorkomen van adherentie van huid en subcutis aan de onderliggende extensorstructuren.', uitvoering:'Vanaf volledige wondsluiting: rollen, dwars verschuiven en circulair mobiliseren over de volledige littekenlengte, van oppervlakkig naar diep. Aanleren als dagelijkse zelfoefening.', dosering:'3–5 min, dagelijks', let_op:'Niet starten bij roodheid, warmte, lekkage of korstvorming. Een gespannen, verkleurd litteken met toenemende pijn vraagt medische controle vóór verdere mobilisatie.'},
    {naam:'Tibiofemorale glijmobilisatie', fase:'Week 2–6 en Week 6–12', doel:'Ondersteunen van de laatste graden flexie en extensie bij artrogene bewegingsbeperking.', uitvoering:'Posterieure tibiaglide voor flexiewinst en anterieure glide voor extensiewinst, in de beschikbare eindstand, graad III, gecombineerd met actieve beweging.', dosering:'3 × 30 sec of 2 × 20 oscillaties, 2–3×/week', let_op:'De prothese heeft een vaste geometrie: streef niet naar meer translatie dan het implantaat toelaat. Pijn met een harde, abrupte eindstand is geen mobilisatie-indicatie.'},
    {naam:'Low-load langdurige extensierek', fase:'Week 1–2 en Week 2–6', doel:'Bereiken van volledige passieve extensie, de belangrijkste determinant van een efficiënt gangpatroon.', uitvoering:'Hielsteun in ruglig of prone hang, eventueel met licht distaal gewicht. Lange duur, lage kracht, altijd binnen de pijngrens.', dosering:'3–5 × 10 min per dag', let_op:'Een extensietekort van meer dan 10° na 6 weken is een reden voor overleg met de chirurg, niet voor hardere mobilisatie.'},
    {naam:'Oedeemtechnieken en manuele lymfedrainage', fase:'Week 1–2 en Week 2–6', doel:'Reductie van de postoperatieve zwelling die pijn, quadricepsinhibitie en flexiebeperking onderhoudt.', uitvoering:'Drainerende strijkingen van distaal naar proximaal, been in hoogstand, gecombineerd met enkelpompen, compressie en cryotherapie.', dosering:'10–15 min per sessie, dagelijks in de eerste weken', let_op:'Plots toegenomen eenzijdige zwelling met kuitpijn: eerst DVT uitsluiten.'},
    {naam:'Weke-delentechnieken quadriceps, hamstrings en tractus iliotibialis', fase:'Week 2–6 en Week 6–12', doel:'Tonusreductie en verbeterde rekbaarheid van de structuren die de eindstandige flexie en extensie beperken.', uitvoering:'Langzame longitudinale en dwarse mobilisatie van vastus lateralis, tractus iliotibialis en de hamstringloges, aansluitend gevolgd door actieve beweging in de gewonnen range.', dosering:'2–3 min per structuur, 2–3×/week', let_op:'Adjuvant en van korte duur: gebruik het als opening voor de oefensessie, niet als behandeling op zich.'}
  ],
  contraindicaties:[
    'Vermoeden van periprothetische infectie (koorts, warme gezwollen knie, wondlekkage): onmiddellijk stoppen en medisch verwijzen',
    'Vermoeden van periprothetische fractuur of implantaatloslating na een val of bij plotse onbelastbaarheid: geen mobilisatie vóór beeldvorming',
    'Actieve diepe veneuze trombose of onbehandeld vermoeden daarvan: geen drainage of weke-delentechnieken',
    'Geforceerde eindstandige mobilisatie bij een harde, abrupte mechanische eindstand — dit is een implantaatgrens, geen kapselbeperking',
    'Elke techniek op een niet-gesloten of ontstoken wonde'
  ],
  evidentie:'De <strong>Cochrane-review over fysiotherapie-interventies na knieartroplastiek</strong> (Artz et al. en verwante reviews) besluit dat oefentherapie na TKA op korte termijn functie en ROM verbetert, maar dat de verschillen tussen behandelvormen op langere termijn klein zijn en de bewijskracht doorgaans laag tot matig. Voor <strong>manuele therapie als toevoeging</strong> aan een oefenprogramma is het bewijs beperkt en heterogeen; enkele kleine gerandomiseerde studies rapporteren extra ROM- en pijnwinst op korte termijn, onvoldoende om manuele therapie als kerninterventie te positioneren. De <strong>tijdige detectie van een stijve knie</strong> is klinisch relevanter dan techniekkeuze: onvoldoende flexieprogressie in de eerste 6–12 weken is een reden voor overleg met de chirurg over manipulatie onder narcose, niet voor opgedreven passieve mobilisatie. <strong>Continuous passive motion</strong> voegt volgens Cochrane geen klinisch relevante meerwaarde toe boven actieve oefentherapie. Positioneer manuele therapie dus als middel om patella-, litteken- en aangrenzende beperkingen weg te nemen zodat de patiënt kán oefenen.'
};

MANUEEL.mcl = {
  intro:'Het mediaal collateraal ligament heeft een <strong>uitstekende genezingscapaciteit</strong> en de behandeling is bijna volledig conservatief: bescherming, gedoseerde belasting en progressieve krachttraining. Manuele therapie is hier <strong>adjuvant</strong> en richt zich op de gevolgen van immobilisatie — het extensietekort, de patellaire hypomobiliteit en de tonusverhoging in de mediale keten. De belangrijkste manuele regel is negatief geformuleerd: <strong>geen valgusstress</strong> op het genezende ligament in de eerste weken.',
  technieken:[
    {naam:'Patellamobilisatie', fase:'Fase 1–2 (Acute fase tot Vroeg herstel)', doel:'Behoud van de patellaire glijding tijdens de bracheperiode, waarin de knie in beperkte range beweegt.', uitvoering:'Rugligging, knie in lichte flexie, quadriceps ontspannen. Craniale, caudale, mediale en laterale glide, graad II–III.', dosering:'2 × 20 oscillaties per richting, dagelijks tijdens de immobilisatiefase', let_op:'De brace mag hiervoor kortstondig geopend worden; de valgusbescherming blijft daarbij manueel gewaarborgd.'},
    {naam:'Mobilisatie naar volledige extensie', fase:'Fase 1–2', doel:'Vermijden van een flexiecontractuur, het meest voorkomende restprobleem na een periode in brace.', uitvoering:'Ruglig met hielsteun of prone hang, lange duur en lage kracht op het distale femur. Strikt in het sagittale vlak.', dosering:'3–5 × 5–10 min per dag', let_op:'Geen enkele extensiemobilisatie met een valguscomponent — dit belast het genezende ligament rechtstreeks.'},
    {naam:'Tibiofemorale posterieure glijmobilisatie', fase:'Fase 2–3 (Vroeg herstel tot Functionele krachtsopbouw)', doel:'Herstel van de flexie-eindstand bij artrogene beperking na immobilisatie.', uitvoering:'Zit of ruglig, tibia posterieur transleren in de beschikbare flexie, graad II–III, aansluitend actief bewegen in de gewonnen range.', dosering:'3 × 30 sec of 2 × 20 oscillaties, 2–3×/week', let_op:'Zuiver sagittale richting aanhouden; vermijd elke rotatie- of valguscomponent tot minstens 6 weken bij graad II–III.'},
    {naam:'Weke-delentechnieken mediale hamstrings, adductoren en gastrocnemius mediale kop', fase:'Fase 2–3', doel:'Tonusreductie in de mediale keten, die na een MCL-letsel vaak protectief verhoogd blijft.', uitvoering:'Langzame longitudinale en dwarse mobilisatie in buiklig en zijlig, ruim buiten de ligamentaire pijnzone gehouden.', dosering:'2–3 min per structuur, 2–3×/week', let_op:'Niet rechtstreeks over de ligamentinsertie werken zolang die drukpijnlijk is; het is de meest prikkelbare zone en de winst is er nihil.'},
    {naam:'Heupmobilisatie en gluteale weke-delentechnieken', fase:'Fase 3–4 (Functionele krachtsopbouw tot Sportspecifiek)', doel:'Verminderen van de dynamische valgusbelasting op het MCL door beperkte heupextensie of -rotatie aan te pakken.', uitvoering:'Heupextensie- en rotatiemobilisatie in buiklig of zijlig, gevolgd door gluteus medius- en maximus-activatie in gesloten keten.', dosering:'3 × 10 herhalingen per richting, aansluitend belast oefenen', let_op:'De manuele techniek opent hoogstens een venster; de valguscontrole komt uit de krachttraining en de landingstechniek.'},
    {naam:'Talocrurale dorsiflexiemobilisatie (mobilization with movement)', fase:'Fase 3–4', doel:'Vergroten van dorsiflexie om mediale kniebelasting bij landen en richtingsveranderingen te verlagen.', uitvoering:'Belast in lunge: anterieur-posterieure glide van de talus aanhouden terwijl de patiënt actief naar dorsiflexie beweegt.', dosering:'3 × 10 herhalingen, aansluitend belast oefenen', let_op:'Alleen bij een objectief tekort op de weight-bearing lunge test; het pijnvrij-principe geldt.'}
  ],
  contraindicaties:[
    'Valgusstress of valgusgerichte mobilisatie in de eerste 6 weken bij graad II–III — rechtstreekse belasting van het genezende ligament',
    'Vermoeden van gecombineerd letsel (VKB, posteromediale hoek, meniscus) of een positieve valgustest in volledige extensie: eerst medische en beeldvormende evaluatie',
    'Palpabele mediale verharding of botvorming ter hoogte van de femorale insertie (Pellegrini-Stieda): geen agressieve lokale druk of frictie',
    'Open groeischijven bij adolescenten met mediale kniepijn na een valgustrauma: eerst een fysaire fractuur uitsluiten',
    'Aanhoudende hemartros of snel toenemende effusie: geen mobilisatie vóór medische herevaluatie'
  ],
  evidentie:'Geïsoleerde MCL-letsels graad I–II genezen conservatief met uitstekende resultaten; <strong>vroege gecontroleerde mobilisatie is superieur aan immobilisatie</strong> en vormt samen met progressieve krachttraining de kerninterventie. De <strong>JOSPT-praktijkrichtlijn</strong> voor knieletsel en -stabiliteit (Logerstedt et al., 2017 — J Orthop Sports Phys Ther) ondersteunt vroege ROM, gewichtsdragen naar tolerantie en neuromusculaire training; specifieke aanbevelingen voor manuele technieken bij MCL-letsel ontbreken grotendeels. Voor <strong>diepe dwarse frictie</strong> op het ligament is er geen overtuigend bewijs van meerwaarde en bestaat het risico op verhoogde prikkelbaarheid. De manuele meerwaarde ligt daarom in het <strong>behandelen van de gevolgen van de beschermingsfase</strong> — extensietekort, patellaire hypomobiliteit, verhoogde mediale tonus — en bij het reduceren van dynamische valgus via de heup en de enkel. Communiceer dat de genezing van het ligament tijd- en belastingsgestuurd is, niet techniekgestuurd.'
};

MANUEEL.men = {
  intro:'Bij meniscusletsel bepaalt de <strong>behandelvorm de manuele speelruimte</strong>: na conservatieve behandeling of partiële meniscectomie mag vrij gemobiliseerd worden, na een meniscushechting gelden strikte flexie-, rotatie- en belastingslimieten. Manuele therapie is in alle gevallen <strong>adjuvant aan progressieve oefentherapie</strong>, die bij degeneratieve scheuren aantoonbaar even effectief is als artroscopische chirurgie. De manuele focus ligt op extensieherstel, patellaire mobiliteit en het normaliseren van het gangpatroon.',
  technieken:[
    {naam:'Patellamobilisatie', fase:'Fase 1–2 (Acute/postoperatief tot Vroege revalidatie)', doel:'Behoud van de patellaire glijding, vooral relevant tijdens de beperkte-range-periode na een hechting.', uitvoering:'Rugligging, knie in lichte flexie, quadriceps ontspannen; caudale, craniale, mediale en laterale glide, graad II–III.', dosering:'2 × 20 oscillaties per richting, dagelijks in de eerste weken', let_op:'Veilig binnen elke chirurgische restrictie — de techniek belast de meniscus niet.'},
    {naam:'Mobilisatie naar volledige extensie', fase:'Fase 1–2', doel:'Herstel van symmetrische extensie, die de belangrijkste voorwaarde is voor een normaal gangpatroon.', uitvoering:'Ruglig met hielsteun of low-load druk op het distale femur; lange duur, lage kracht, altijd pijnvrij.', dosering:'3–5 × 5–10 min per dag', let_op:'Na een radiaire of wortelhechting kan volledige extensie tijdelijk beperkt zijn op chirurgisch voorschrift — volg het operatieverslag, niet het schema.'},
    {naam:'Tibiofemorale posterieure glijmobilisatie', fase:'Fase 2–3 (Vroege revalidatie tot Krachtopbouw)', doel:'Ondersteunen van de flexieprogressie bij artrogene beperking.', uitvoering:'Tibia posterieur transleren in de beschikbare flexie, graad II–III, gevolgd door actieve flexie in de gewonnen range.', dosering:'3 × 30 sec, 2–3×/week', let_op:'Na meniscushechting: <strong>de flexielimiet van de chirurg is bindend</strong> (typisch maximaal 90° gedurende 4–6 weken) en er wordt geen tibiarotatie toegevoegd tot minstens 6–8 weken. Bij APM en conservatieve behandeling geldt deze beperking niet.'},
    {naam:'Weke-delentechnieken hamstrings, gastrocnemius en popliteus', fase:'Fase 2–3', doel:'Reductie van de protectieve tonus die de extensie beperkt en het gangpatroon in flexie houdt.', uitvoering:'Langzame longitudinale en dwarse mobilisatie in buiklig; de popliteusregio voorzichtig en met respect voor de neurovasculaire structuren in de knieholte.', dosering:'2–3 min per structuur, 2–3×/week', let_op:'Geen diepe druk in de fossa poplitea; bij een palpabele zwelling daar (Baker-cyste) eerst diagnostiek.'},
    {naam:'Oedeem- en drainagetechnieken', fase:'Fase 1', doel:'Effusiereductie, omdat zwelling via artrogene spierinhibitie de quadricepsactivatie onderdrukt en de extensie blokkeert.', uitvoering:'Distaal-naar-proximaal drainerende strijkingen met het been in hoogstand, gecombineerd met enkelpompen en compressie.', dosering:'10–15 min, dagelijks zolang er effusie is', let_op:'Recidiverende zwelling na belastingstoename is een <strong>doseringssignaal</strong> — verlaag de belasting in plaats van de drainage op te drijven.'},
    {naam:'Heup- en enkelmobilisatie', fase:'Fase 3–4 (Krachtopbouw tot Functionele/sportspecifieke training)', doel:'Wegwerken van aangrenzende beperkingen die de compressie- en rotatiebelasting op de meniscus verhogen.', uitvoering:'Talocrurale dorsiflexiemobilisatie belast in lunge en heupextensie-/rotatiemobilisatie in buiklig, telkens gevolgd door belast oefenen.', dosering:'3 × 10 herhalingen per gewricht', let_op:'Alleen bij een objectief gemeten tekort; niet routinematig toepassen.'}
  ],
  contraindicaties:[
    'Na meniscushechting: geforceerde flexie voorbij de chirurgische limiet, diepe hurk en elke tibiarotatiemobilisatie in de beschermingsperiode',
    'Echt slotfenomeen met blokkade in extensie (emmerhandvatscheur): geen mobilisatiepogingen, dringende chirurgische evaluatie',
    'Acute hemartros na trauma: eerst gecombineerd letsel (VKB, osteochondraal) uitsluiten',
    'Diepe druk in de fossa poplitea, zeker bij een palpabele zwelling of pulsatie',
    'Vermoeden van diepe veneuze trombose postoperatief: geen drainage of weke-delentechnieken vóór uitsluiting'
  ],
  evidentie:'Bij <strong>degeneratieve meniscusscheuren</strong> tonen meerdere gerandomiseerde studies dat oefentherapie niet onderdoet voor artroscopische partiële meniscectomie op middellange termijn (Katz et al., 2013 — N Engl J Med; Kise et al., 2016 — BMJ); <strong>gesuperviseerde oefentherapie is dus de eerstelijnsbehandeling</strong>, met manuele therapie als ondersteuning. Na <strong>meniscushechting</strong> zijn de postoperatieve restricties chirurgiegestuurd en variëren ze met scheurtype en fixatie; recentere reviews suggereren dat versneld belasten bij geselecteerde patiënten veilig kan zijn, maar het <strong>operatieverslag blijft leidend</strong> boven elk standaardschema. Voor manuele therapie bij meniscuspathologie is de specifieke evidentie <strong>beperkt en van lage kwaliteit</strong>: er is geen bewijs dat een techniek een scheur beïnvloedt. De verantwoorde rationale is functioneel — effusie, extensietekort, patellaire hypomobiliteit en aangrenzende beperkingen aanpakken zodat de belastingsopbouw kan doorgaan.'
};

MANUEEL.thp = {
  intro:'Na een totale heupprothese is de revalidatie primair opgebouwd rond <strong>vroege mobilisatie, gangheropbouw en progressieve abductor- en extensorversterking</strong>. Manuele therapie speelt een <strong>duidelijk beperkte, chirurgisch begrensde rol</strong>: bij een posterolaterale benadering zijn luxatievoorzorgen bindend en is directe heupmobilisatie in de beschermingsfase uitgesloten. De veilige manuele winst zit in het litteken, het weke-delencomplex rond de heup, en in de aangrenzende regio&#39;s — lage rug, bekken en knie — die het gangpatroon mee bepalen.',
  technieken:[
    {naam:'Littekenmobilisatie heuplitteken', fase:'Fase 2–3 (Beschermingsfase tot Mobiliteit &amp; krachtopbouw), vanaf gesloten wonde', doel:'Voorkomen van adherentie tussen huid, subcutis en de onderliggende spierloge, wat de heupextensie en het gangpatroon beïnvloedt.', uitvoering:'Rollen, dwars verschuiven en circulair mobiliseren over de volledige littekenlengte, van oppervlakkig naar diep; aanleren als dagelijkse zelfoefening.', dosering:'3–5 min, dagelijks', let_op:'Pas na volledige wondsluiting. Roodheid, warmte of lekkage: stoppen en medisch laten beoordelen.'},
    {naam:'Oedeemtechnieken en manuele lymfedrainage', fase:'Fase 1–2 (Hospitalisatie en Beschermingsfase)', doel:'Reductie van postoperatief oedeem in dij en onderbeen, dat pijn en bewegingsangst onderhoudt.', uitvoering:'Distaal-naar-proximaal drainerende strijkingen bij het been in lichte hoogstand, gecombineerd met enkelpompen en actieve quadriceps- en gluteusactivatie. Positionering strikt binnen de luxatievoorzorgen.', dosering:'10–15 min, dagelijks in de eerste weken', let_op:'Eenzijdige kuitpijn met warmte en disproportionele zwelling: eerst DVT uitsluiten — het risico is in deze populatie reëel.'},
    {naam:'Weke-delentechnieken gluteaal complex en tensor fasciae latae', fase:'Fase 3–4 (Mobiliteit &amp; krachtopbouw tot Functionele fase)', doel:'Tonusreductie en verbeterde rekbaarheid van de laterale heupmusculatuur, die na de ingreep vaak beschermend hypertoon en pijnlijk blijft.', uitvoering:'Zijlig op de niet-geopereerde zijde met een kussen tussen de knieën zodat de adductie-restrictie gerespecteerd blijft; langzame longitudinale mobilisatie van gluteus medius, minimus en TFL, buiten de littekenzone.', dosering:'2–3 min per structuur, 2–3×/week', let_op:'Bij een laterale of trans-gluteale benadering is de abductorloge chirurgisch aangetast: geen diepe druk in de eerste 6 weken.'},
    {naam:'Iliopsoasgerichte weke-delentechniek en heupextensiemobilisatie', fase:'Fase 4 (Functionele fase — kracht, gang &amp; uithouding)', doel:'Herstel van heupextensie in de afzetfase, cruciaal om de compensatoire lumbale extensie te verminderen.', uitvoering:'Zachte weke-delentechniek op de heupflexoren in ruglig, gevolgd door actieve heupextensie in buiklig of staand. Passieve extensiemobilisatie enkel in de late fase, langzaam en pijnvrij.', dosering:'2–3 min per structuur, aansluitend actief oefenen', let_op:'Geen combinatie van extensie met exorotatie en adductie bij een posterolaterale benadering: dit is de luxatiepositie. Diepe druk in de lies bij aanhoudende liespijn vermijden — denk aan psoasimpingement door de cup en verwijs voor evaluatie.'},
    {naam:'Lumbale en sacro-iliacale mobilisatie', fase:'Fase 3–4', doel:'Behandelen van de lumbale en SI-klachten die vaak optreden bij beenlengteverschil of veranderde bekkenkinematiek na de ingreep.', uitvoering:'Graad II–III mobilisatie van de lumbale segmenten en het SI-gewricht in zijlig of buiklig, gecombineerd met romp- en heupstabilisatie-oefeningen.', dosering:'2 × 10 herhalingen per niveau, 1–2×/week', let_op:'Geen hooggradige of manipulatieve technieken met hefboom via het geopereerde been. Bij osteoporose of oudere leeftijd sowieso geen hogesnelheidstechnieken.'}
  ],
  contraindicaties:[
    'Posterolaterale benadering: geen heupflexie voorbij 90°, geen adductie voorbij de middellijn en geen endorotatie in de beschermingsperiode; bij anterieure benadering geen geforceerde heupextensie met exorotatie — geldt voor élke passieve techniek en positionering',
    'Vermoeden van luxatie (plotse hevige pijn, beenverkorting, gedwongen rotatiestand): onmiddellijk stoppen en dringende verwijzing',
    'Vermoeden van periprothetische infectie of fractuur, of plotse onbelastbaarheid na een val: geen mobilisatie vóór medische evaluatie en beeldvorming',
    'Actieve of vermoede diepe veneuze trombose: geen drainage of weke-delentechnieken vóór uitsluiting',
    'Passieve tractie of hooggradige mobilisatie van het heupgewricht zelf: geen indicatie bij een prothese'
  ],
  evidentie:'Systematische reviews en de <strong>Cochrane-review over rehabilitatie na heupartroplastiek</strong> tonen dat gestructureerde oefentherapie na THP functie en kracht verbetert, met vooral winst bij <strong>progressieve weerstandstraining van de heupabductoren en -extensoren</strong>; de bewijskracht is matig en de effecten op lange termijn worden kleiner naarmate het spontane herstel vordert. Voor <strong>manuele therapie na THP is de specifieke evidentie schaars</strong>: er zijn geen kwaliteitsvolle studies die aantonen dat gewrichtsmobilisatie van de geopereerde heup de uitkomst verbetert, en de chirurgische voorzorgen beperken de toepasbaarheid hoe dan ook. Er is wel toenemende steun voor het loslaten van rigide, universele <strong>luxatievoorzorgen</strong> bij moderne benaderingen en implantaten (onder meer Restrepo et al. en latere reviews over posterieure voorzorgen), maar zolang de operateur restricties oplegt, zijn die bindend voor de kinesitherapeut. Positioneer manuele therapie hier dus eerlijk: waardevol voor litteken, weke delen en aangrenzende regio&#39;s, ondergeschikt aan gangheropbouw en krachttraining.'
};

MANUEEL.lh = {
  intro:'Bij een lumbale discushernia met radiculaire component is manuele therapie <strong>ondersteunend en richtingsgestuurd</strong>, nooit forcerend. De behandeling wordt gestuurd door de <strong>symptoomrespons</strong>: centralisatie van de uitstralende pijn naar proximaal is het gunstige signaal, periferalisatie is het stopteken. Manuele technieken kopen bewegingsruimte en pijnmodulatie vrij zodat actieve oefentherapie en educatie — de eigenlijke dragers van het herstel — kunnen doorgaan.',
  technieken:[
    {naam:'Richtingsgestuurde voorkeursbeweging (McKenzie-principe)', fase:'Fase 1–2', doel:'Centralisatie van de radiculaire uitstraling en herstel van de pijnvrije bewegingsrichting.', uitvoering:'Buiklig met progressieve extensie (onderarmsteun, daarna gestrekte armen), of laterale shiftcorrectie wanneer een zichtbare shift aanwezig is. De therapeut geeft manuele overdruk of segmentale stabilisatie in de richting die de klachten centraliseert.', dosering:'10 herhalingen per set, elke 2 uur herhalen op de dag', let_op:'Toename van distale uitstraling of van neurologische uitval betekent onmiddellijk stoppen — periferalisatie is geen &#39;doorwerken&#39;-signaal.'},
    {naam:'Unilaterale posteroanterieure mobilisatie (Maitland)', fase:'Fase 1–2', doel:'Segmentale pijndemping en verminderen van de reflexmatige paraspinale tonus op het aangedane niveau.', uitvoering:'Buiklig, duimen op het articulaire pilaargebied van L4–S1 aan de symptomatische zijde. Graad I–II bij hoge prikkelbaarheid, graad III pas wanneer de pijn niet meer bij de minste beweging opflakkert.', dosering:'3 × 30 sec oscillaties per niveau, 2–3×/week', let_op:'Bij hoge prikkelbaarheid start je één niveau boven of onder het symptomatische segment.'},
    {naam:'Neurodynamische glijtechniek (slider) van de n. ischiadicus', fase:'Fase 2–3', doel:'Herstel van de longitudinale glijbeweging van de zenuw zonder de mechanosensitiviteit te prikkelen.', uitvoering:'Zittend in slump- of ruglig-SLR-positie: knie-extensie combineren met gelijktijdige cervicale extensie, daarna omgekeerd. Steeds <strong>onder</strong> de symptoomdrempel blijven — de glijtechniek mag geen uitstraling opwekken.', dosering:'2–3 × 10 rustige herhalingen, 1×/dag', let_op:'Rektechnieken (tensioners) horen niet thuis in de prikkelbare fase; zij verhogen de intraneurale druk.'},
    {naam:'Lumbale tractie (manueel of mechanisch)', fase:'Fase 1–2', doel:'Tijdelijke drukverlaging op de zenuwwortel en pijnmodulatie bij hoge prikkelbaarheid.', uitvoering:'Ruglig met heupen en knieën in circa 70° flexie, intermitterende tractie met langzame opbouw. Toepassen als proefbehandeling: bij uitblijvende symptoomverandering na 2–3 sessies vervalt de indicatie.', dosering:'10–15 min, 2–3×/week als proefreeks', let_op:'De evidentie is zwak en inconsistent; presenteer tractie nooit als kernbehandeling of als &#39;terugduwen van de discus&#39;.'},
    {naam:'Mobilisatie van de heup en thoracolumbale overgang', fase:'Fase 2–3', doel:'Verminderen van compensatoire belasting op het lumbale segment via regionale interdependentie.', uitvoering:'Mobilisatie van heupextensie en -rotatie in zij- of buiklig; thoracolumbale rotatiemobilisatie zittend of in zijlig, met de lumbale wervelzuil neutraal vergrendeld.', dosering:'2 × 10 herhalingen per richting en per zijde', let_op:'De lumbale zone zelf blijft neutraal — vermijd geforceerde lumbale rotatie in de prikkelbare fase.'},
    {naam:'Weke-delentechnieken paravertebraal en gluteaal', fase:'Fase 1–3', doel:'Tonusreductie van de reflexmatig verkrampte erector spinae, quadratus lumborum en gluteus medius.', uitvoering:'Langzame longitudinale en dwarse mobilisatie in zijlig, gecombineerd met rustige ademhaling en aansluitend actieve activatie.', dosering:'3–5 min per regio, voorafgaand aan de oefensessie', let_op:'Uitgesproken adjuvant: het effect is kortdurend en heeft pas waarde wanneer er onmiddellijk actief geoefend wordt.'}
  ],
  contraindicaties:[
    'Cauda-equinasyndroom (zadelanesthesie, blaas- of stoelgangsstoornissen, bilaterale uitval) — absolute contra-indicatie en spoedverwijzing',
    'Progressieve motorische uitval (bv. toenemende voetheffersparese) of snel uitbreidend sensibiliteitsverlies — geen manuele therapie, medische herevaluatie',
    'Vermoeden van fractuur, maligniteit of spinale infectie op basis van rode vlaggen (nachtpijn, gewichtsverlies, koorts, oncologische voorgeschiedenis)',
    'Ernstige osteoporose of langdurig corticosteroïdgebruik — geen manipulatie met hoge snelheid, geen tractie met hoge belasting',
    'Periferalisatie van de symptomen onder de behandeling — techniek onmiddellijk stoppen en de richting herzien'
  ],
  evidentie:'De <strong>natuurlijke evolutie</strong> van een discushernia met radiculaire klachten is grotendeels gunstig: een aanzienlijk deel van de hernia&#39;s resorbeert spontaan en het klinische beeld verbetert bij de meerderheid conservatief, wat de terughoudendheid met forcerende technieken ondersteunt. Voor <strong>spinale manipulatie en mobilisatie</strong> bij lage rugpijn met of zonder uitstraling tonen de reviews van Rubinstein et al. (2011 en 2019 — Cochrane / BMJ) een reëel maar <strong>bescheiden</strong> effect op pijn en functie, vergelijkbaar met dat van andere aanbevolen actieve behandelingen: geen superieure interventie, wel een verdedigbare optie. <strong>Centralisatie</strong> van de symptomen tijdens herhaalde eindstandige bewegingen is een gunstige prognostische factor en een bruikbaar klinisch richtsnoer (werk in de lijn van Werneke en Hart). Voor <strong>tractie</strong> besluiten Wegner et al. (2013 — Cochrane) dat er geen overtuigend bewijs is voor een klinisch relevant effect bij lage rugpijn met of zonder ischialgie. De consistentste boodschap blijft dat manuele therapie enkel zinvol is <strong>gecombineerd met actieve oefentherapie, geruststelling en het behoud van activiteit</strong>.'
};

MANUEEL.bureau = {
  intro:'Bij werkgerelateerde nekklachten heeft manuele therapie een <strong>duidelijke plaats op korte termijn</strong>: cervicale en thoracale mobilisatie verminderen pijn en verbeteren de bewegingsuitslag sneller dan afwachten. Het effect is echter <strong>kortdurend zonder actieve component</strong> — de blijvende winst komt van krachttraining van de diepe nekflexoren en de scapulaire stabilisatoren, plus ergonomische aanpassing. Bij elke cervicale techniek geldt bovendien een expliciete veiligheidsafweging.',
  technieken:[
    {naam:'Thoracale manipulatie of mobilisatie (midthoracaal, T3–T7)', fase:'Fase 1–2', doel:'Pijnreductie en ROM-winst in de cervicale wervelzuil via regionale interdependentie, zonder cervicaal arterieel risico.', uitvoering:'Ruglig met gekruiste armen en de hand van de therapeut als steunpunt, of zittend met distractietechniek. Manipulatie met korte amplitude en hoge snelheid; bij twijfel of botkwaliteit een graad III–IV mobilisatie in buiklig.', dosering:'2–3 manipulaties of 3 × 30 sec mobilisatie, 2×/week', let_op:'Het klinisch aantrekkelijkste alternatief voor cervicale manipulatie: vergelijkbaar effect op nekpijn met een duidelijk gunstiger risicoprofiel.'},
    {naam:'Cervicale unilaterale posteroanterieure mobilisatie (Maitland)', fase:'Fase 1–3', doel:'Segmentale pijndemping en herstel van rotatie of lateroflexie op het symptomatische niveau.', uitvoering:'Buiklig, duimdruk op de articulaire pilaar van C2–C6 aan de symptomatische zijde. Graad I–II bij prikkelbaarheid, graad III–IV bij stijfheidsdominantie. Het niveau wordt bepaald door manuele segmentale palpatie en reproductie van de herkenbare pijn.', dosering:'3 × 30 sec per niveau, 2–3×/week', let_op:'Reproductie van duizeligheid, nystagmus of visusklachten is een reden om onmiddellijk te stoppen en door te verwijzen.'},
    {naam:'Cervicale traktie en occipitale distractie (C0–C2)', fase:'Fase 1–2', doel:'Pijndemping bij cervicogene hoofdpijn en ontlasting van de suboccipitale regio.', uitvoering:'Ruglig, hoofd gesteund in de handen van de therapeut, zachte longitudinale distractie; suboccipitale release met vingertoppen onder de linea nuchae. Combineren met een pijnvrije C1–C2 rotatietest.', dosering:'3 × 60 sec distractie, 2–3 min suboccipitale release', let_op:'Bij reumatoïde artritis of het syndroom van Down geen distractie of rotatietechniek op C0–C2 wegens atlantoaxiale instabiliteit.'},
    {naam:'Mobilisatie van de eerste rib en de cervicothoracale overgang', fase:'Fase 2–3', doel:'Verminderen van de spanning op de scaleni en de bovenste trapezius bij kantoorwerkers met schouderoptrekking.', uitvoering:'Zittend of in ruglig: caudale druk op de eerste rib met de cervicale wervelzuil in lichte contralaterale lateroflexie; cervicothoracale mobilisatie in extensie en rotatie.', dosering:'2 × 10 herhalingen per zijde', let_op:'Bij tekens van thoracic outlet-compressie (paresthesieën in de gehele arm bij elevatie) eerst grondig neurovasculair onderzoek.'},
    {naam:'Weke-delentechnieken bovenste trapezius, levator scapulae en pectoralis minor', fase:'Fase 1–3', doel:'Tonusreductie en verminderen van de drukgevoeligheid van de myofasciale triggerpunten die het typische kantoorpatroon dragen.', uitvoering:'Zittend of in zijlig, langzame druk en dwarse mobilisatie van de spierbuik, gevolgd door actieve scapulaire depressie en retractie. Pectoralis minor in ruglig met de scapula in posterieure kanteling.', dosering:'2–3 min per structuur, aansluitend actief oefenen', let_op:'Ischemische compressie geeft vaak kortstondige verlichting; zonder daaropvolgende belastingsopbouw keert de tonus binnen enkele dagen terug.'},
    {naam:'Mobilisatie van de thoracale extensie in zit of over de rol', fase:'Fase 2–4', doel:'Vergroten van de thoracale extensiereserve zodat de cervicale wervelzuil minder compenseert bij beeldschermwerk.', uitvoering:'Zittend met de handen achter het hoofd, therapeut geeft segmentale steun en begeleidt de extensiebeweging; alternatief in buiklig met segmentale posteroanterieure druk.', dosering:'2 × 10 herhalingen, dagelijks als thuisoefening', let_op:'Bij osteoporose of vermoeden van een wervelinzakking geen manipulatie en geen eindstandige overdruk.'}
  ],
  contraindicaties:[
    'Arteriële risicofactoren of tekens van vertebrobasilaire insufficiëntie (duizeligheid, diplopie, dysartrie, dysfagie, drop attacks, nystagmus) — geen cervicale manipulatie, doorverwijzen',
    'Reumatoïde artritis, spondylitis ankylopoetica of syndroom van Down met (vermoeden van) atlantoaxiale instabiliteit — geen cervicale rotatie- of tractietechnieken',
    'Recent cervicaal trauma of whiplash met verdenking op fractuur of ligamentair letsel (Canadian C-spine rule niet doorlopen)',
    'Myelopathietekens (gangstoornis, handongeschiktheid, hyperreflexie, teken van Hoffmann) — onmiddellijke medische evaluatie',
    'Rode vlaggen voor maligniteit of infectie, ernstige osteoporose, of recente cervicale chirurgie binnen de beschermingsperiode'
  ],
  evidentie:'Voor <strong>nekpijn</strong> tonen reviews van cervicale mobilisatie en manipulatie een <strong>klinisch relevant maar kortdurend</strong> effect op pijn en bewegingsuitslag, met een duidelijk grotere en duurzamere winst wanneer de techniek gecombineerd wordt met oefentherapie (Gross et al. — Cochrane-reeks over manipulatie en mobilisatie bij nekpijn). <strong>Thoracale manipulatie</strong> verbetert nekpijn en cervicale ROM en is daarmee een verantwoord alternatief met een gunstiger veiligheidsprofiel dan cervicale manipulatie. Het risico op een <strong>ernstig arterieel incident</strong> na cervicale manipulatie is zeldzaam maar reëel; een oorzakelijk verband met een dissectie is niet bewezen, mede omdat halspijn en hoofdpijn ook het eerste symptoom van een reeds lopende dissectie kunnen zijn (Cassidy et al., 2008 — Spine). De praktische consequentie is niet &#39;nooit doen&#39;, maar <strong>screenen, informeren, en de veiliger optie kiezen wanneer die even effectief is</strong>. Voor de duurzame uitkomst blijft <strong>krachttraining van de diepe nekflexoren en de scapulothoracale spieren</strong> de best onderbouwde interventie bij kantoorwerkers (Ylinen et al., 2003 — JAMA).'
};

MANUEEL.faz = {
  intro:'Bij lumbale facetartrose is manuele therapie <strong>symptomatisch en faciliterend</strong>: rotatoire mobilisatie en unilaterale posteroanterieure technieken verminderen de segmentale pijn en de extensiegevoeligheid, waardoor de patiënt toegang krijgt tot stabilisatie- en krachttraining. Structurele artrose verandert niet door manuele behandeling — de winst zit in <strong>belastingstolerantie en bewegingsvertrouwen</strong>. Regionale interdependentie is hier bepalend: een stijve heupextensie duwt de lumbale segmenten in extensie en onderhoudt de klachten.',
  technieken:[
    {naam:'Unilaterale posteroanterieure mobilisatie (Maitland)', fase:'Fase 0–2', doel:'Segmentale pijndemping op het symptomatische facetniveau (meestal L4–L5 of L5–S1).', uitvoering:'Buiklig met kussen onder het bekken om de lordose te verminderen. Duimdruk op de articulaire pilaar aan de pijnlijke zijde. Graad I–II bij hoge prikkelbaarheid, graad III–IV bij stijfheidsdominantie zonder nachtpijn.', dosering:'3 × 30 sec oscillaties per niveau, 2–3×/week', let_op:'Herkenbare, lokaal reproduceerbare pijn bevestigt het niveau; diffuse of uitstralende reactie vraagt heroverweging van de diagnose.'},
    {naam:'Rotatoire lumbale mobilisatie in zijlig', fase:'Fase 1–2', doel:'Herstel van de segmentale rotatie en gapping van het facetgewricht met pijnmodulatie.', uitvoering:'Zijlig met de symptomatische zijde boven, onderste been gestrekt, bovenste been in heup- en knieflexie. Segment vergrendelen van caudaal en cranieel, daarna rustige oscillerende rotatie. Optioneel een manipulatie met korte amplitude bij lage prikkelbaarheid en goede botkwaliteit.', dosering:'3 × 30 sec, of 1–2 manipulaties per sessie', let_op:'Bij osteoporose, langdurig corticosteroïdgebruik of hoge prikkelbaarheid blijf je bij mobilisatie zonder impuls.'},
    {naam:'Lumbale flexiemobilisatie en unloading in ruglig', fase:'Fase 0–1', doel:'Ontlasten van de dorsale kolom bij extensiegevoelige klachten en verkleinen van het facetcontact.', uitvoering:'Ruglig, beide knieën naar de borst met begeleide oscillatie in flexie; alternatief zittend met begeleide flexie over de knieën. De flexierichting is bij facetartrose doorgaans de verlichtende richting.', dosering:'3 × 10 rustige oscillaties, dagelijks bruikbaar als zelfmanagement', let_op:'Bij gelijktijdige discogene klachten kan flexie de symptomen juist verergeren — stuur op de individuele richtingsvoorkeur.'},
    {naam:'Mobilisatie van de heupextensie en heuprotatie', fase:'Fase 1–3', doel:'Verminderen van compensatoire lumbale extensie bij stappen en rechtstaan.', uitvoering:'Buiklig of Thomas-positie: anteroposterieure mobilisatie van de femurkop met de heup in extensie; rotatiemobilisatie in buiklig met 90° knieflexie. Aansluitend actieve heupextensie zonder lumbale uitwijking.', dosering:'3 × 30 sec per richting, 2–3×/week', let_op:'Klinisch vaak de meest renderende interventie bij facetartrose — een heupextensietekort blijft anders de lumbale belasting voeden.'},
    {naam:'Mobilisatie van de thoracolumbale overgang', fase:'Fase 1–3', doel:'Verdelen van de rotatie- en extensiebelasting over meer segmenten.', uitvoering:'Zittend of in zijlig, rotatiemobilisatie ter hoogte van T10–L1 met vergrendelde lumbale segmenten; aanvullend posteroanterieure mobilisatie in buiklig.', dosering:'2 × 10 herhalingen per richting', let_op:'Bij osteoporose geen technieken met hoge snelheid.'},
    {naam:'Weke-delentechnieken multifidus, quadratus lumborum en gluteus medius', fase:'Fase 0–2', doel:'Tonusreductie van de segmentaal verkrampte musculatuur als opstap naar actieve activatie.', uitvoering:'Zijlig of buiklig, langzame longitudinale en dwarse mobilisatie; onmiddellijk gevolgd door segmentale multifidusactivatie in dezelfde positie.', dosering:'3–5 min per regio, direct gevolgd door oefentherapie', let_op:'Losstaande weke-delenbehandeling geeft enkel kortstondige verlichting en onderhoudt passieve verwachtingen.'}
  ],
  contraindicaties:[
    'Rode vlaggen voor fractuur, maligniteit of spinale infectie (nachtpijn in rust, onverklaard gewichtsverlies, koorts, oncologische voorgeschiedenis)',
    'Ernstige osteoporose of langdurig corticosteroïdgebruik — geen manipulatie met hoge snelheid, mobilisatie met lage graad',
    'Progressieve neurologische uitval of tekens van cauda equina — spoedverwijzing, geen manuele behandeling',
    'Vermoeden van instabiele spondylolisthesis of aangetoonde segmentale instabiliteit — geen eindstandige rotatoire technieken',
    'Inflammatoire rugpijn (nachtelijke pijn, ochtendstijfheid boven één uur, goede respons op NSAID) — eerst reumatologische evaluatie'
  ],
  evidentie:'De <strong>diagnostische zekerheid</strong> bij facetartrose is beperkt: klinische tests en beeldvorming correleren zwak met de pijnbron, en degeneratieve facetveranderingen komen frequent voor bij asymptomatische personen (Brinjikji et al., 2015 — AJNR) — vermijd dus valse precisie in de communicatie met de patiënt. Voor <strong>manipulatie en mobilisatie bij chronische lage rugpijn</strong> vinden Rubinstein et al. (2019 — BMJ) een klein tot matig effect op pijn en functie, <strong>vergelijkbaar met andere aanbevolen behandelingen</strong> zoals oefentherapie; dat is een eerlijke maar bescheiden claim. De internationale richtlijnen positioneren manuele therapie daarom consequent als <strong>onderdeel van een pakket met oefentherapie en educatie</strong> (Foster et al., 2018 — The Lancet Low Back Pain Series). Praktisch betekent dit: mobiliseren om te kunnen oefenen, niet mobiliseren als behandeling op zich.'
};

MANUEEL.fbl = {
  intro:'Na een facetblokkade of radiofrequente denervatie is manuele therapie een middel om <strong>het pijnvrije venster te benutten</strong>, niet om het te creëren. De interventie levert tijdelijke analgesie; mobilisatie en weke-delentechnieken helpen de bewegingsangst en de segmentale stijfheid te doorbreken zodat de <strong>actieve stabilisatie- en krachtopbouw</strong> effectief kan starten. Zonder die actieve opvolging keren de klachten na uitdoven van het effect vrijwel steevast terug.',
  technieken:[
    {naam:'Rustige segmentale mobilisatie graad I–II', fase:'Fase 1', doel:'Pijnmodulatie en bewegingsherstel in de dagen na de interventie zonder de lokale reactie te prikkelen.', uitvoering:'Buiklig met bekkenkussen, zachte oscillerende posteroanterieure druk paravertebraal, bewust <strong>naast</strong> de injectieplaats. Combineren met rustige ademhaling en actieve bekkenkanteling.', dosering:'2 × 30 sec per niveau, vanaf dag 3–5', let_op:'De eerste 48–72 uur geen rechtstreekse druk op de punctieplaats; tijdelijke pijntoename na injectie is verwacht en geen behandelindicatie.'},
    {naam:'Unilaterale posteroanterieure mobilisatie (Maitland)', fase:'Fase 2', doel:'Herstel van segmentale mobiliteit op en rond het behandelde niveau tijdens het pijnvrije venster.', uitvoering:'Buiklig, duimdruk op de articulaire pilaar; graad III–IV mogelijk zodra de lokale reactie is uitgedoofd en de patiënt pijnvrij ligt.', dosering:'3 × 30 sec per niveau, 2×/week', let_op:'Het pijnvrije venster maskeert de normale weerstandsrespons — doseer op weefselweerstand, niet op de pijnmelding van de patiënt.'},
    {naam:'Rotatoire mobilisatie in zijlig', fase:'Fase 2–3', doel:'Herstel van de lumbale rotatiereserve die door maandenlange vermijding verloren ging.', uitvoering:'Zijlig, segment vergrendeld van boven en onder, rustige oscillerende rotatie tot in de beschikbare eindstand. Aansluitend actieve rotatiecontrole in zit of vierpuntsstand.', dosering:'3 × 30 sec per zijde, 2×/week', let_op:'Na radiofrequente denervatie is de segmentale proprioceptie tijdelijk verminderd; vermijd geforceerde eindstandige impulstechnieken.'},
    {naam:'Mobilisatie van de heup en thoracolumbale overgang', fase:'Fase 2–3', doel:'Herverdelen van de belasting zodat het behandelde segment minder extensie- en rotatiestress opvangt.', uitvoering:'Anteroposterieure femurkopmobilisatie in heupextensie; thoracolumbale rotatiemobilisatie zittend of in zijlig, met neutrale lumbale positie.', dosering:'3 × 30 sec per richting, 2–3×/week', let_op:'Bij aanhoudend heupextensietekort blijft het lumbale segment de compensatie dragen — dit is een van de meest onderschatte recidieffactoren.'},
    {naam:'Weke-delentechnieken paravertebraal en gluteaal', fase:'Fase 1–3', doel:'Tonusreductie van de chronisch overactieve erector spinae, quadratus lumborum en gluteus medius.', uitvoering:'Zijlig, langzame longitudinale en dwarse mobilisatie, gevolgd door onmiddellijke segmentale multifidusactivatie in dezelfde positie.', dosering:'3–5 min per regio, direct gevolgd door oefentherapie', let_op:'Na denervatie kan de multifidus atrofisch en moeilijk te rekruteren zijn; reken op een tragere activatieopbouw.'},
    {naam:'Manuele begeleiding van de lumbopelvische controle', fase:'Fase 3–4', doel:'Ombouwen van passieve winst naar actieve controle bij tillen, bukken en draaien.', uitvoering:'Manuele tactiele cueing van de neutrale lumbale positie tijdens hip hinge, deadlift-patroon en gecontroleerde rotatiebewegingen; de therapeut corrigeert door aanraking, niet door verbale overload.', dosering:'2–3 sets van 8–10 herhalingen binnen de oefensessie', let_op:'Vanaf deze fase verschuift het accent bewust naar belastingsopbouw; passieve technieken worden afgebouwd.'}
  ],
  contraindicaties:[
    'Tekens van lokale infectie na de interventie (toenemende roodheid, warmte, koorts, wondvocht) — geen manuele therapie, onmiddellijk medisch contact',
    'Aanhoudend of toenemend neurologisch deficit na de procedure, of tekens van cauda equina — spoedverwijzing',
    'Rechtstreekse druk of manipulatie op de punctieplaats in de eerste 48–72 uur',
    'Antistollingstherapie met hematoomvorming of uitgesproken lokale zwelling — geen diepe weke-delentechnieken',
    'Ernstige osteoporose of vermoeden van een wervelinzakking — geen technieken met hoge snelheid'
  ],
  evidentie:'Het effect van een facetblokkade of radiofrequente denervatie is <strong>tijdelijk en variabel</strong>: de analgesie is bij een deel van de patiënten uitgesproken maar dooft doorgaans na maanden uit, en de literatuur over de duurzaamheid is inconsistent. De klinisch relevante boodschap is dat de interventie vooral waarde heeft als <strong>venster voor actieve revalidatie</strong>; de gerandomiseerde studie van Leclaire et al. (2001 — Arch Phys Med Rehabil) vond na radiofrequente denervatie geen behoud van functionele winst zonder gestructureerde nabehandeling. Voor de manuele component geldt hetzelfde beeld als bij chronische lage rugpijn in het algemeen: mobilisatie en manipulatie geven een <strong>klein tot matig, kortdurend</strong> effect dat vergelijkbaar is met andere actieve behandelingen (Rubinstein et al., 2019 — BMJ). Richtlijnen adviseren daarom consequent een <strong>gecombineerde aanpak van oefentherapie, educatie en zelfmanagement</strong>, waarbij manuele therapie een instrument is en niet het plan (Foster et al., 2018 — The Lancet).'
};

MANUEEL.rc = {
  intro:'Bij rotatorenmanchetletsel is <strong>progressieve oefentherapie de kerninterventie</strong>; manuele therapie is een adjuvans dat op korte termijn pijn kan dempen en ROM kan vrijmaken zodat er beter geoefend kan worden. De winst van manuele technieken bovenop een goed oefenprogramma is bescheiden en kortdurend — communiceer dat eerlijk. Postoperatief geldt bovendien een <strong>harde beschermingsperiode</strong>: de biologische peesinheling stuurt de dosering, niet het bewegingsverlies.',
  technieken:[
    {naam:'Passieve en geassisteerde glenohumerale mobilisatie', fase:'Fase 2', doel:'Onderhouden van gewrichtsspel en pijnmodulatie zonder actieve manchetbelasting.', uitvoering:'Rugligging, arm ondersteund in scapulair vlak. Graad I–II oscillaties in caudale en posterieure richting, gevolgd door pijnvrije passieve elevatie en exorotatie binnen het toegelaten bereik.', dosering:'2–3 × 30 sec per richting, dagelijks tot 3×/week', let_op:'Postoperatief: uitsluitend binnen de door de chirurg vrijgegeven ROM-grenzen; geen eindstandige exorotatie bij een subscapularisherstel.'},
    {naam:'Posterieure kapselmobilisatie en cross-body techniek', fase:'Fase 3', doel:'Reduceren van posterieure stijfheid die de humeruskop bij elevatie antero-superieur verplaatst.', uitvoering:'Rugligging met gefixeerde scapula, posterieure translatie van de humeruskop, aansluitend horizontale adductie met manuele scapulafixatie. Combineer de mobilisatie met de rek in plaats van rekken alleen.', dosering:'3 × 30 sec, 3–5×/week', let_op:'Enkel bij objectief endorotatie- of horizontale adductietekort ten opzichte van de andere zijde; niet routinematig.'},
    {naam:'Thoracale mobilisatie en ribmobilisatie', fase:'Fase 3', doel:'Vergroten van de thoracale extensie zodat de scapula posterieur kan kantelen bij elevatie.', uitvoering:'Zittend of in buiklig, postero-anterieure mobilisatie van de midthoracale segmenten en de bovenste ribben, gekoppeld aan actieve elevatie.', dosering:'2 × 10 herhalingen per niveau', let_op:'Het effect bovenop oefentherapie is beperkt; gebruik het om een oefensessie te openen, niet als behandeling op zich.'},
    {naam:'Weke-delenbehandeling pectoralis minor en levator scapulae', fase:'Fase 3', doel:'Verlagen van tonus die de scapulaire rustpositie in protractie en anterieure kanteling houdt.', uitvoering:'Rugligging, manuele druk langs de coracoïdale insertie van de pectoralis minor met de scapula passief in posterieure kanteling; levator scapulae in zijlig.', dosering:'2–3 min per structuur', let_op:'Direct laten volgen door actieve scapulaire controle-oefeningen, anders verdwijnt de winst binnen de sessie.'},
    {naam:'Manueel weerstandswerk met begeleide humeruskopcentrering', fase:'Fase 4', doel:'Overgang van passieve mobilisatie naar gestuurde actieve manchetbelasting.', uitvoering:'Zittend of in zijlig, therapeut geeft submaximale manuele weerstand op exo- en endorotatie in 0–45° abductie, met tactiele cue op de humeruskop om anterieure translatie te vermijden.', dosering:'3 × 10 herhalingen, 2–3×/week', let_op:'Postoperatief pas na vrijgave van actieve belasting, doorgaans niet vóór week 6–12 afhankelijk van de ruptuurgrootte.'},
    {naam:'Mobilization with Movement bij pijnlijke elevatie', fase:'Fase 3', doel:'Onmiddellijke pijnvrije winst in het elevatietraject als toegangspoort tot oefening.', uitvoering:'Postero-laterale glide van de humeruskop aanhouden terwijl de patiënt actief eleveert in het scapulair vlak.', dosering:'3 × 6–10 herhalingen', let_op:'Het pijnvrij-principe is bindend: blijft de onmiddellijke verbetering uit, dan is de techniek niet geïndiceerd.'}
  ],
  contraindicaties:[
    'Postoperatief herstel binnen de beschermingsperiode: geen geforceerde eindstandige mobilisatie, geen passieve exorotatie voorbij de chirurgische limiet',
    'Vermoeden van een acute traumatische volledige ruptuur met pseudoparalyse — eerst chirurgisch advies vóór belastende technieken',
    'Corticosteroïdinjectie in de voorbije weken: geen forcerende of hooggradige technieken op de peeszone',
    'Osteoporose, langdurig corticosteroïdgebruik of botmetastasen: geen manipulatieve technieken op thorax of schoudergordel',
    'Toenemende nachtpijn met systemische alarmsymptomen of onverklaard krachtverlies — medische evaluatie primeert'
  ],
  evidentie:'De <strong>Cochrane-review</strong> van Page et al. (2016) over manuele therapie en oefentherapie bij rotatorenmanchetaandoeningen besluit dat de bewijskracht laag is en dat manuele therapie bovenop oefentherapie hooguit een klein, kortdurend effect heeft op pijn en functie. Steuri et al. (2017 — Br J Sports Med) vonden in hun meta-analyse dat <strong>oefentherapie de kerninterventie</strong> is bij subacromiale klachten, met manuele therapie als bescheiden aanvulling. De multicentrische RCT van Mintken et al. (2016 — JOSPT) toonde dat cervicothoracale manuele therapie <strong>geen meerwaarde</strong> gaf bovenop oefentherapie alleen. Postoperatief blijft de belangrijkste afweging het evenwicht tussen stijfheid en hertear: Kluczynski et al. (2015 — Am J Sports Med) rapporteerden een hoger hertearrisico bij vroege agressieve mobilisatie van grotere rupturen, wat de <strong>beschermingsperiode</strong> rechtvaardigt.'
};

MANUEEL.si = {
  intro:'Bij glenohumerale instabiliteit is manuele therapie <strong>fundamenteel anders van insteek</strong> dan bij een stijve schouder: het gewricht heeft geen mobiliteit tekort maar controle. De klassieke fout is rekken of hooggradig mobiliseren in de instabiele richting — dat verergert de laxiteit. De manuele input dient hier vooral <strong>proprioceptie, humeruskopcentrering en scapulaire controle</strong>, met kapselbehandeling enkel op aangetoonde indicatie.',
  technieken:[
    {naam:'Manuele humeruskopcentrering met tactiele facilitatie', fase:'Fase 2', doel:'Bewustwording en sturing van de humeruskoppositie tijdens actieve beweging.', uitvoering:'Zittend of in ruglig, therapeut geeft lichte postero-mediale compressie op de humeruskop terwijl de patiënt binnen een veilig traject actief eleveert of roteert. Compressie, geen translatie.', dosering:'3 × 8–10 herhalingen, 3×/week', let_op:'Nooit anterieure translatie toevoegen bij anterieure instabiliteit — de techniek is centrerend, niet mobiliserend.'},
    {naam:'Gesloten-keten proprioceptietraining met manuele perturbatie', fase:'Fase 3', doel:'Verbeteren van de reflexmatige stabilisatie via gewrichtscompressie en onvoorspelbare input.', uitvoering:'Steun op de hand tegen wand of op instabiel vlak, arm in 30–60° elevatie binnen het veilige traject. Therapeut geeft ritmische stabilisatie en onvoorspelbare perturbaties op onderarm en scapula.', dosering:'3 × 30–45 sec, 2–3×/week', let_op:'Bij multidirectionele instabiliteit start je lager in het traject en vermijd je eindstandige posities volledig.'},
    {naam:'Ritmische stabilisatie in het middentraject', fase:'Fase 3', doel:'Co-contractie van rotatorenmanchet en scapulastabilisatoren zonder eindstandige kapselbelasting.', uitvoering:'Ruglig, arm in 45–90° elevatie in scapulair vlak. Wisselende isometrische weerstand op exo- en endorotatie, alternerend en toenemend in snelheid.', dosering:'3 × 20–30 sec per positie', let_op:'Hoek pas verhogen zodra apprehension volledig afwezig is in de huidige positie.'},
    {naam:'Scapulothoracale mobilisatie en scapulasetting', fase:'Fase 2', doel:'Herstel van scapulaire positionering als basis voor glenohumerale stabiliteit.', uitvoering:'Zijlig, therapeut mobiliseert de scapula manueel in alle richtingen en begeleidt vervolgens actieve posterieure kanteling en externe rotatie van de scapula.', dosering:'2 × 10 herhalingen per richting', let_op:'Scapulaire mobilisatie is veilig; ze belast het glenohumerale kapsel niet.'},
    {naam:'Posterieure kapselbehandeling bij aangetoonde stijfheid', fase:'Fase 3', doel:'Wegnemen van een posterieure stijfheid die de kop bij elevatie anterieur duwt.', uitvoering:'Ruglig, scapula gefixeerd, posterieure glijmobilisatie graad II–III, aansluitend cross-body positionering.', dosering:'3 × 30 sec, enkel op indicatie', let_op:'Uitsluitend bij objectief gemeten posterieure stijfheid of endorotatietekort — bij multidirectionele instabiliteit zonder aangetoonde stijfheid is deze techniek gecontra-indiceerd.'},
    {naam:'Thoracale mobilisatie', fase:'Fase 2', doel:'Ruimte voor scapulaire retractie en posterieure kanteling bij elevatie.', uitvoering:'Midthoracale extensiemobilisatie in zit of buiklig, gekoppeld aan actieve elevatie.', dosering:'2 × 10 herhalingen per niveau', let_op:'Adjuvant; het stabiliteitsprobleem los je op met actieve controle, niet met mobilisatie.'}
  ],
  contraindicaties:[
    'Rekken of hooggradig mobiliseren in de instabiele richting — bij anterieure instabiliteit dus geen anterieure glide of eindstandige abductie-exorotatie',
    'Apprehension of subluxatiegevoel tijdens een techniek: onmiddellijk stoppen en het traject verkleinen',
    'Postoperatief na Bankart- of capsulaire hersteloperatie: geen mobilisatie voorbij de vrijgegeven ROM tijdens de beschermingsperiode',
    'Multidirectionele instabiliteit met gegeneraliseerde hypermobiliteit: geen enkele kapselrektechniek, ook niet posterieur zonder aangetoonde stijfheid',
    'Ongereponeerde of recidiverende luxatie met neurovasculaire uitval — dringende medische evaluatie'
  ],
  evidentie:'Bij atraumatische en multidirectionele instabiliteit is een <strong>gestructureerd oefenprogramma de eerstelijnsbehandeling</strong>: Warby et al. (2018 — Am J Sports Med) toonden in een gerandomiseerde studie klinisch relevante verbetering in functie en stabiliteit met een progressief oefenprogramma. Voor manuele therapie als aparte interventie bij instabiliteit is de evidentie <strong>schaars en van lage kwaliteit</strong>; de rationale steunt vooral op het herstel van <strong>proprioceptie en neuromusculaire controle</strong>, die na een luxatie aantoonbaar verstoord zijn. Kapselrektechnieken zijn hier eerder schadelijk dan nuttig: het probleem is capaciteit van de dynamische stabilisatoren, niet mobiliteitsverlies. Posterieure kapselbehandeling is enkel verdedigbaar bij aangetoonde posterieure stijfheid, waarvoor de combinatie van rek en gewrichtsmobilisatie effectiever bleek dan rek alleen (Manske et al., 2010 — Sports Health).'
};

MANUEEL.elb = {
  intro:'Bij laterale epicondylalgie heeft manuele therapie een <strong>duidelijker plaats dan bij de meeste tendinopathieën</strong>, vooral als pijnmodulerende opstap naar belaste oefeningen. Mobilization with movement geeft een onmiddellijke, meetbare winst in pijnvrije grijpkracht en maakt oefenen mogelijk. <strong>Progressieve krachttraining blijft echter de kerninterventie</strong>; manuele technieken zonder oefenprogramma leiden tot recidief.',
  technieken:[
    {naam:'Mulligan mobilization with movement — laterale glide elleboog', fase:'Fase 1', doel:'Onmiddellijke toename van de pijnvrije grijpkracht en pijnreductie bij grijpen.', uitvoering:'Patiënt in ruglig of zit, elleboog gestrekt en gestabiliseerd. Therapeut geeft een aanhoudende laterale glide van de ulna ten opzichte van de humerus terwijl de patiënt knijpt of de pols extendeert. Kracht en richting bijstellen tot de beweging volledig pijnvrij is.', dosering:'3 × 6–10 herhalingen, 2–3×/week', let_op:'Blijft het pijnlijk, dan is de glide-richting of -dosering fout — nooit doordrukken door de pijn heen.'},
    {naam:'Cervicale mobilisatie C5–C6', fase:'Fase 1', doel:'Behandelen van cervicale betrokkenheid die de laterale elleboogpijn onderhoudt.', uitvoering:'Buiklig, unilaterale postero-anterieure mobilisatie graad II–III op de laag-cervicale segmenten aan de aangedane zijde; herbeoordeel de pijnvrije grijpkracht meteen na de techniek.', dosering:'3 × 30–60 sec, 2×/week', let_op:'Enkel zinvol bij aangetoonde cervicale bewegingsbeperking of reproduceerbare provocatie; screen op cervicale rode vlaggen.'},
    {naam:'Thoracale mobilisatie', fase:'Fase 1', doel:'Verbeteren van de mechanische context van de bovenste kinetische keten.', uitvoering:'Midthoracale postero-anterieure mobilisatie in buiklig, gekoppeld aan actieve armelevatie.', dosering:'2 × 10 herhalingen per niveau', let_op:'Adjuvant; verwacht hier geen zelfstandig behandeleffect op de peesklacht.'},
    {naam:'Radiale neurodynamiek', fase:'Fase 1', doel:'Verminderen van mechanosensitiviteit van de nervus radialis bij een positieve ULNT2b.', uitvoering:'Ruglig, schoudergordel gedeprimeerd, elleboogextensie met pronatie en polsflexie. Werk met glijtechnieken (slider) in plaats van spanningsopbouw, ver van het symptoomgebied startend.', dosering:'2 × 10 langzame oscillaties, dagelijks als huisoefening', let_op:'Bij toename van uitstralende symptomen na de sessie de amplitude en frequentie verlagen.'},
    {naam:'Weke-delenmobilisatie extensorenmassief', fase:'Fase 1', doel:'Tonusreductie van de polsextensoren proximaal van de insertie.', uitvoering:'Langzame longitudinale en dwarse mobilisatie van de spierbuik van extensor carpi radialis brevis en longus, gecombineerd met actieve pols-flexie-extensie.', dosering:'3–5 min voorafgaand aan de oefensessie', let_op:'Vermijd de prikkelbare insertie zelf; diepe dwarse frictie op de aanhechting wordt niet aanbevolen.'},
    {naam:'Manueel begeleide isometrische en excentrische polsextensie', fase:'Fase 2', doel:'Overgang van pijnmodulatie naar peesbelasting met gecontroleerde techniek.', uitvoering:'Onderarm gesteund, therapeut doseert manuele weerstand op polsextensie: eerst isometrisch in het pijnvrije bereik, daarna langzaam excentrisch over volle amplitude.', dosering:'3 × 10–15 herhalingen, 3×/week', let_op:'Een pijnscore tot 4/10 tijdens de oefening is aanvaardbaar mits die binnen 24 uur genormaliseerd is.'}
  ],
  contraindicaties:[
    'Cyriax diepe dwarse frictie als kernbehandeling: geen aangetoonde meerwaarde en risico op toegenomen prikkelbaarheid',
    'Corticosteroïdinjectie in de voorbije weken: geen belastende of forcerende technieken op de peesaanhechting',
    'Vermoeden van radiaal tunnelsyndroom of posterieure interosseuze compressie — eerst differentiaaldiagnostisch uitklaren',
    'Cervicale radiculopathie met progressief krachtverlies of reflexuitval: medische evaluatie vóór cervicale technieken',
    'Instabiliteit van het laterale collaterale ligamentcomplex of recente elleboogfractuur — geen varusbelastende of glide-technieken'
  ],
  evidentie:'<strong>Mobilization with movement</strong> geeft een consistent en onmiddellijk effect op pijnvrije grijpkracht en drukpijndrempel; het mechanisme lijkt eerder neurofysiologisch dan mechanisch (Vicenzino et al., 2001 — Man Ther). In de RCT van Bisset et al. (2006 — BMJ) presteerde de combinatie van <strong>mobilization with movement en oefentherapie</strong> op korte termijn beter dan afwachten, en op zes en twaalf maanden beter dan een corticosteroïdinjectie, die op lange termijn juist meer recidieven gaf — een bevinding die Coombes et al. (2013 — JAMA) bevestigden. De <strong>Cochrane-review</strong> van Loew et al. (2014) vond geen klinisch relevante meerwaarde van diepe dwarse frictie bij laterale elleboogtendinopathie. <strong>Cervicale betrokkenheid</strong> is klinisch relevant: cervicale mobilisatie kan bij een subgroep de pijnvrije grijpkracht onmiddellijk verbeteren, maar dat vervangt de progressieve krachttraining niet.'
};

MANUEEL.sup = {
  intro:'Bij supraspinatustendinopathie en subacromiale bursitis is <strong>progressieve belastingsopbouw de kerninterventie</strong>; manuele therapie levert bovenop een goed oefenprogramma slechts een klein en kortdurend extra effect op pijn en ROM. De zinvolle toepassing is gericht: <strong>subacromiale ruimte, scapulaire positionering en thoracale mobiliteit</strong>, telkens onmiddellijk gevolgd door actieve oefening in het vrijgemaakte traject.',
  technieken:[
    {naam:'Caudale glenohumerale glijmobilisatie', fase:'Fase 1', doel:'Vergroten van de subacromiale ruimte en pijndemping bij elevatie.', uitvoering:'Rugligging, arm in 30–45° abductie in scapulair vlak. Caudale translatie van de humeruskop, graad I–II bij hoge prikkelbaarheid, graad III zodra pijn afneemt.', dosering:'3 × 30 sec, 2–3×/week', let_op:'Bij pijntoename tijdens de techniek verlagen naar graad I of overschakelen op actieve ontlasting.'},
    {naam:'Posterieure glijmobilisatie met cross-body positionering', fase:'Fase 2', doel:'Reduceren van posterieure stijfheid die de kop bij elevatie antero-superieur verplaatst.', uitvoering:'Ruglig met gefixeerde scapula, posterieure translatie van de humeruskop, aansluitend horizontale adductie met scapulafixatie.', dosering:'3 × 30 sec, 3–5×/week', let_op:'Enkel bij een objectief endorotatie- of horizontale adductietekort van meer dan 10–15° ten opzichte van de andere zijde.'},
    {naam:'Thoracale mobilisatie en ribmobilisatie', fase:'Fase 2', doel:'Vergroten van de thoracale extensie zodat de scapula posterieur kan kantelen bij elevatie.', uitvoering:'Zit of buiklig, postero-anterieure mobilisatie van de midthoracale segmenten en de bovenste ribben; onmiddellijk gevolgd door actieve elevatie in het nieuwe bereik.', dosering:'2 × 10 herhalingen per niveau', let_op:'Bij osteoporose enkel mobiliseren, geen hogesnelheidsmanipulatie.'},
    {naam:'Scapulaire repositionering en manuele scapulafacilitatie', fase:'Fase 2', doel:'Nagaan en beïnvloeden van de bijdrage van scapulaire positionering aan de pijn.', uitvoering:'Therapeut brengt de scapula manueel in posterieure kanteling en externe rotatie terwijl de patiënt eleveert (scapular assistance test als behandeling). Bij duidelijke pijnafname wordt dit de leidraad voor de oefenselectie.', dosering:'2 × 10 herhalingen, elke sessie', let_op:'De techniek is vooral diagnostisch sturend; de blijvende winst komt van actieve scapulacontrole-oefeningen.'},
    {naam:'Weke-delenbehandeling pectoralis minor en latissimus dorsi', fase:'Fase 2', doel:'Verlagen van tonus die de scapula in protractie en anterieure kanteling houdt.', uitvoering:'Ruglig, manuele druk op de coracoïdale insertie van de pectoralis minor met de scapula passief in posterieure kanteling; latissimus dorsi in zijlig met arm in elevatie.', dosering:'2–3 min per structuur', let_op:'Direct koppelen aan actieve elevatieoefening, anders is de winst binnen de sessie verdwenen.'},
    {naam:'Manueel gedoseerde isometrische exorotatie', fase:'Fase 3', doel:'Pijnmodulatie en opstap naar belaste manchettraining.', uitvoering:'Zit of ruglig, arm langs het lichaam met rolletje in de oksel. Therapeut geeft submaximale weerstand op exorotatie, met tactiele cue op de humeruskop.', dosering:'5 × 30–45 sec op circa 60–70% MVC', let_op:'Pijn tot 4/10 is aanvaardbaar mits genormaliseerd binnen 24 uur; anders de intensiteit verlagen.'}
  ],
  contraindicaties:[
    'Hoge prikkelbaarheid met continue rust- en nachtpijn: geen graad III–IV mobilisatie, eerst ontlasting en pijncontrole',
    'Corticosteroïdinjectie subacromiaal in de voorbije weken: geen forcerende technieken op de peeszone',
    'Vermoeden van een volledige supraspinatusruptuur met pseudoparalyse — beeldvorming en medisch advies vóór belastende technieken',
    'Osteoporose of langdurig corticosteroïdgebruik: geen manipulatieve technieken op thorax of schoudergordel',
    'Onverklaarde nachtpijn, gewichtsverlies of koorts — systemische pathologie eerst uitsluiten'
  ],
  evidentie:'De meta-analyse van Steuri et al. (2017 — Br J Sports Med) besluit dat bij subacromiale pijn <strong>oefentherapie de kerninterventie</strong> is en dat manuele therapie daar hooguit een klein bijkomend kortetermijneffect op pijn aan toevoegt. De <strong>Cochrane-review</strong> van Page et al. (2016) bevestigt dit met lage bewijskracht: manuele therapie plus oefening is niet duidelijk superieur aan oefening alleen. Mintken et al. (2016 — JOSPT) vonden in een multicentrische RCT <strong>geen meerwaarde</strong> van cervicothoracale manuele therapie bovenop oefentherapie bij schouderpijn. Chirurgische subacromiale decompressie levert eveneens geen relevante winst boven placebo of oefentherapie (Karjalainen et al., 2019 — Cochrane), wat de nadruk op <strong>belastingsopbouw en scapulaire controle</strong> verder onderbouwt. Praktische conclusie: gebruik manuele therapie als kortdurende opener, niet als behandelplan.'
};

MANUEEL.aslt = {
  intro:'Bij een anterosuperieur labrumletsel met SLAP-extensie of pulley-laesie is de leidraad van manuele therapie <strong>ontlasting van het bicepsanker</strong>. Elke techniek die tractie, distractie of gecombineerde abductie-exorotatie op het superieure labrum uitoefent, is contraproductief. De zinvolle inzet richt zich op de <strong>omgeving</strong>: thoracale mobiliteit, scapulaire controle en posterieure kapselstijfheid bij GIRD, terwijl de labrale structuur zelf tijd en gedoseerde belasting nodig heeft.',
  technieken:[
    {naam:'Thoracale extensiemobilisatie', fase:'Fase 2', doel:'Ruimte creëren voor scapulaire posterieure kanteling zodat de glenohumerale eindstand minder wordt opgezocht.', uitvoering:'Zit of buiklig, postero-anterieure mobilisatie van de midthoracale segmenten en de bovenste ribben, gekoppeld aan actieve elevatie binnen het toegelaten bereik.', dosering:'2 × 10 herhalingen per niveau, 2–3×/week', let_op:'Veilig voor het bicepsanker; bij buiklig de arm ondersteund houden om eindstandige elevatie te vermijden.'},
    {naam:'Posterieure kapselmobilisatie bij GIRD', fase:'Fase 2', doel:'Reduceren van een glenohumeraal endorotatietekort dat de kop bij werpen antero-superieur belast.', uitvoering:'Ruglig, scapula manueel gefixeerd, posterieure glijmobilisatie graad II–III met de arm in 45–90° abductie, aansluitend cross-body positionering.', dosering:'3 × 30 sec, 3–5×/week op indicatie', let_op:'Enkel bij gemeten endorotatietekort van meer dan 15–20° ten opzichte van de andere zijde; nooit combineren met tractie.'},
    {naam:'Scapulothoracale mobilisatie en scapulasetting', fase:'Fase 2', doel:'Herstel van scapulaire positionering en timing als basis voor glenohumerale controle.', uitvoering:'Zijlig, manuele mobilisatie van de scapula in alle richtingen, gevolgd door begeleide actieve posterieure kanteling en externe rotatie met tactiele cues.', dosering:'2 × 10 herhalingen per richting', let_op:'Belast het labrum niet en kan al vroeg in de beschermde fase starten.'},
    {naam:'Weke-delenbehandeling pectoralis minor en latissimus dorsi', fase:'Fase 2', doel:'Wegnemen van tonus die de scapula in protractie houdt en de exorotatie-eindstand extra belast.', uitvoering:'Ruglig, manuele druk langs de coracoïdale insertie van de pectoralis minor met de scapula in posterieure kanteling; latissimus dorsi in zijlig zonder eindstandige elevatie.', dosering:'2–3 min per structuur', let_op:'Bij de latissimusbehandeling de arm onder 120° elevatie houden om trek op het bicepsanker te vermijden.'},
    {naam:'Ritmische stabilisatie in het middentraject', fase:'Fase 3', doel:'Co-contractie van manchet en scapulastabilisatoren zonder eindstandige labrale belasting.', uitvoering:'Ruglig, arm in 45–90° elevatie in scapulair vlak, elleboog gebogen. Wisselende isometrische weerstand op exo- en endorotatie, alternerend en toenemend in snelheid.', dosering:'3 × 20–30 sec per positie, 3×/week', let_op:'De biceps mag hier niet als hoofdstabilisator meewerken: houd de elleboog ontlast en vermijd weerstand op elleboogflexie of supinatie.'},
    {naam:'Cervicothoracale weke-delenbehandeling en ademsturing', fase:'Alle fasen', doel:'Reduceren van beschermende tonus in de nek-schoudergordel bij een pijnlijke, bewaakte schouder.', uitvoering:'Zijlig of zit, manuele behandeling van levator scapulae en bovenste trapezius, gecombineerd met kostodiafragmatische ademsturing en scapuladepressie.', dosering:'3–5 min, elke sessie op indicatie', let_op:'Adjuvant voor pijnmodulatie; het beïnvloedt de labrale genezing niet.'}
  ],
  contraindicaties:[
    'Tractie- en distractietechnieken in de lange as van de humerus: belasten het bicepsanker rechtstreeks en zijn absoluut te vermijden',
    'Eindstandige abductie-exorotatie mobilisatie (werppositie) tijdens de beschermde en vroege ROM-fase',
    'Postoperatief na SLAP-herstel of tenodese: geen actieve of weerstandsbelasting op elleboogflexie en supinatie binnen de beschermingsperiode',
    'Cross-body rek zonder scapulafixatie: verplaatst de belasting naar het superieure labrum in plaats van naar het posterieure kapsel',
    'Aanhoudend klikken met blokkeringsgevoel of nieuw ontstaan krachtverlies — herevaluatie en beeldvorming vóór verdere mobilisatie'
  ],
  evidentie:'De evidentie voor manuele therapie bij labrumletsels is <strong>schaars en grotendeels indirect</strong>; er zijn geen kwaliteitsvolle gerandomiseerde studies die manuele technieken specifiek bij SLAP-letsel onderzoeken, wat betekent dat de aanpak berust op biomechanische redenering en consensus. Wat wel onderbouwd is, is het belang van <strong>GIRD en posterieure stijfheid</strong> bij overhead-atleten als risicofactor voor schouderletsel (Wilk et al., 2011 — Am J Sports Med), en de vaststelling dat de combinatie van rek en gewrichtsmobilisatie effectiever is dan rek alleen om posterieure stijfheid te verminderen (Manske et al., 2010 — Sports Health). De <strong>diagnostische onzekerheid</strong> is bovendien groot: klinische tests zoals de O&#39;Brien-test en de biceps load-tests hebben in systematische reviews een matige diagnostische accuraatheid, wat pleit voor een behandeling die vooral op prikkelbaarheid en functie stuurt. Klinische kernboodschap: <strong>ontlast het bicepsanker</strong>, behandel de omgeving en bouw de belasting progressief op.'
};

MANUEEL.orif = {
  intro:'Na plaatosteosynthese van een distale radiusfractuur is manuele therapie <strong>ondersteunend bij een actief oefenprogramma</strong>, nooit de motor van het herstel. De grootste winst zit in oedeembeheersing, littekenmobilisatie en gerichte glijmobilisatie van het radiocarpale en distale radio-ulnaire gewricht wanneer de consolidatie en de instructies van de chirurg dat toelaten. <strong>Passieve mobilisatie is geen versneller</strong>: bij pijn die niet in verhouding staat tot de ingreep denk je eerst aan een complex regionaal pijnsyndroom (CRPS) en niet aan onvoldoende gerekt kapsel.',
  technieken:[
    {naam:'Oedeembeheersing en retrograde mobilisatie', fase:'Fase 1 (week 0–2)', doel:'Reductie van hand- en polsoedeem als eerste voorwaarde voor vinger- en polsmobiliteit.', uitvoering:'Elevatie boven harthoogte, retrograde manuele lymfestimulatie van vingers naar elleboog met lichte, langzame strijkingen; aansluitend actieve composite fist als spierpomp. Eventueel compressiehandschoen of coban op de vingers.', dosering:'5–10 min per sessie, dagelijks als thuisopdracht', let_op:'Persisterend hard, glanzend oedeem met disproportionele pijn en zweet- of kleurveranderingen is een CRPS-signaal — evalueer vroeg en verwijs terug.'},
    {naam:'Littekenmobilisatie volaire benadering', fase:'Fase 2 (week 2–6)', doel:'Voorkomen van adhesies tussen litteken, flexorpezen en n. medianus.', uitvoering:'Pas starten na volledige wondsluiting. Cirkelvormige en dwarse mobilisatie van het volaire litteken met de vingertop, gecombineerd met actief flexorpeesglijden (tendon gliding) zodat de pezen onder het litteken doorbewegen.', dosering:'3–5 min, 2×/dag', let_op:'Geen tractie op een korstende of geïrriteerde wonde; bij toenemende tintelingen in de mediane distributie het volaire litteken minder agressief behandelen.'},
    {naam:'Radiocarpale glijmobilisatie', fase:'Fase 2–3 (vanaf week 4–6, na klinische en radiologische consolidatie)', doel:'Herstel van polsflexie en -extensie bij een kapsulair beperkt gewricht.', uitvoering:'Onderarm gefixeerd op de behandelbank, proximale rij carpalia dorsaal transleren voor flexiewinst en volair voor extensiewinst. Start graad I–II; graad III pas wanneer stijfheid en niet pijn de beperkende factor is.', dosering:'3 × 30 sec per richting, 2–3×/week', let_op:'Pas na expliciet akkoord van de chirurg en bewezen consolidatie; bij osteoporotisch bot en volaire plaat blijft de dosering behoudend.'},
    {naam:'Distale radio-ulnaire (DRUG) glijmobilisatie', fase:'Fase 2–3 (week 4–10)', doel:'Herstel van pronatie en supinatie, vaak de traagste en functioneel meest hinderlijke beperking.', uitvoering:'Elleboog 90° gesteund tegen de romp. Ulnakop volair transleren ten opzichte van de radius voor supinatiewinst, dorsaal voor pronatiewinst. Combineren met actief eindstandig draaien met een stok als lange hefboom.', dosering:'3 × 30 sec per richting, aansluitend 2 × 10 actieve herhalingen', let_op:'Bij een letsel van het TFCC of een niet-geconsolideerde processus styloideus ulnae geen forcerende translatie of eindstandige supinatierek.'},
    {naam:'Weke-delenmobilisatie onderarm en interosseus membraan', fase:'Fase 2–4', doel:'Verminderen van de weerstand van pro- en supinatoren en het interosseus membraan.', uitvoering:'Langzame longitudinale en dwarse mobilisatie van pronator teres, pronator quadratus, supinator en de flexor-extensormassa; nadien onmiddellijk actief pro-/supineren binnen de nieuwe bewegingsuitslag.', dosering:'3–5 min per sessie', let_op:'Vermijd diepe druk over de plaats van het osteosynthesemateriaal en over prikkelbare huidzenuwtakken (ramus superficialis n. radialis).'},
    {naam:'Elleboog- en schoudermobilisatie van de aangedane keten', fase:'Alle fasen', doel:'Voorkomen van secundaire stijfheid door immobilisatie en draagpatroon.', uitvoering:'Actieve en zachte passieve mobilisatie van elleboogextensie, schouderelevatie en thoracale extensie; bij ouderen dagelijks controleren.', dosering:'2 × 10 herhalingen per richting, dagelijks', let_op:'Secundaire schouderstijfheid is bij oudere patiënten een frequentere invaliditeitsbron dan de polsstijfheid zelf.'}
  ],
  contraindicaties:[
    'Onvoldoende consolidatie of onduidelijkheid over de fixatiestabiliteit — geen glijmobilisatie zonder akkoord van de chirurg',
    'Vermoeden van CRPS (disproportionele pijn, allodynie, kleur-, temperatuur- en zweetveranderingen): geen agressieve of pijnprovocerende mobilisatie, wel actief bewegen en verwijzing',
    'Tekenen van compressie van de n. medianus of een tendinitis/ruptuur van de m. extensor pollicis longus door prominent osteosynthesemateriaal — medische evaluatie voor verdere belasting',
    'Wondinfectie, wonddehiscentie of niet-gesloten wonde: geen littekenmobilisatie',
    'Instabiel of pijnlijk DRUG met vermoeden van TFCC-letsel: geen eindstandige supinatierek'
  ],
  evidentie:'De <strong>Cochrane-review</strong> over revalidatie na distale radiusfractuur bij volwassenen (Handoll &amp; Elliott, 2015 — Cochrane Database of Systematic Reviews) besluit dat de bewijskracht voor alle vormen van revalidatie <strong>laag tot zeer laag</strong> is en dat geen enkele modaliteit overtuigend superieur is; enkele studies suggereren zelfs dat <strong>begeleide passieve mobilisatie niet beter en mogelijk slechter is</strong> dan een goed uitgelegd actief thuisprogramma. De praktische conclusie is dus terughoudend: actief oefenen, oedeemcontrole en functionele handtaken vormen de kern, en manuele technieken worden gericht ingezet bij een aangetoonde kapsulaire of littekengebonden beperking. <strong>CRPS</strong> is de complicatie die de uitkomst het sterkst bepaalt; vroege herkenning en het vermijden van pijnprovocerende behandeling wegen zwaarder door dan eender welke mobilisatietechniek. Voor <strong>pro-/supinatie</strong> geldt klinisch dat de winst traag verloopt en dat een deel van de patiënten een blijvend tekort houdt — communiceer dat vroeg in plaats van de intensiteit op te drijven.'
};

MANUEEL.dq = {
  intro:'Bij De Quervain-tenosynovitis is de kern van de behandeling <strong>belastingsaanpassing en immobilisatie van duim en pols</strong> (spalk met duimincorporatie), niet manuele therapie. Manuele technieken hebben een <strong>ondersteunende rol</strong>: het eerste dorsale compartiment ontlasten, de spanning in de extensor pollicis brevis en abductor pollicis longus verminderen en de mobiliteit van de omliggende structuren herstellen. Neurodynamiek van de <strong>ramus superficialis n. radialis</strong> is klinisch relevant, zowel als comorbiditeit als in de differentiaaldiagnose met het Wartenberg-syndroom.',
  technieken:[
    {naam:'Belastingsanalyse en spalkbegeleiding', fase:'Fase 1', doel:'Wegnemen van de provocerende ulnaire deviatie met duimbelasting — de enige interventie met een duidelijk mechanisme.', uitvoering:'Analyse van de provocerende taken (tillen van een kind, muis- en gsm-gebruik, wringen). Pas- en draagbegeleiding van een spica-spalk die pols en MCP van de duim immobiliseert met vrije IP.', dosering:'Continu dragen 3–4 weken bij hoge prikkelbaarheid, daarna afbouwend', let_op:'Strikt genomen geen manuele techniek, maar zonder belastingsaanpassing hebben de overige technieken weinig kans; een slecht passende spalk verschuift de belasting naar de MCP.'},
    {naam:'Weke-delenmobilisatie APL en EPB proximaal van het compartiment', fase:'Fase 1–2', doel:'Tonusreductie in de spierbuiken zonder het geprikkelde compartiment te belasten.', uitvoering:'Onderarm in neutrale positie. Langzame longitudinale en dwarse mobilisatie van de spierbuiken van abductor pollicis longus en extensor pollicis brevis in het middelste derde van de onderarm, ruim proximaal van de processus styloideus radii.', dosering:'3–5 min per sessie, 2×/week', let_op:'Geen diepe dwarse frictie over de radiale styloïd zelf: op een geprikkeld compartiment verhoogt dat de klachten zonder aangetoonde meerwaarde.'},
    {naam:'Neurodynamiek ramus superficialis n. radialis', fase:'Fase 2', doel:'Herstel van de glijcapaciteit van de oppervlakkige radialistak, die over het eerste compartiment loopt en vaak mee geprikkeld is.', uitvoering:'Radialis-neurodynamische testpositie (schouderdepressie, elleboogextensie, pronatie, polsflexie en ulnaire deviatie met duimflexie), uitgevoerd als <strong>glijtechniek</strong>: proximaal component lossen terwijl distaal component wordt aangespannen en omgekeerd. Nooit als rekstand aanhouden.', dosering:'2–3 × 10 langzame oscillaties, dagelijks als thuisoefening', let_op:'Positieve neurodynamiek met paresthesieën over het dorsoradiale handdeel en zonder pijn bij de Finkelstein-test wijst richting Wartenberg-syndroom — dat vraagt een andere aanpak (compressie wegnemen, geen strakke spalk of horloge).'},
    {naam:'Carpometacarpale en scafotrapeziale mobilisatie', fase:'Fase 2–3', doel:'Verbeteren van de duimmobiliteit zodat de APL/EPB minder compenserend moeten werken.', uitvoering:'Distractie en dorsopalmaire glijmobilisatie van het CMC-1 gewricht, gecombineerd met mobilisatie van het scafotrapeziotrapezoïdale gewricht. Graad I–II bij pijn, graad III bij dominante stijfheid.', dosering:'3 × 30 sec per richting, 2×/week', let_op:'Bij gelijktijdige rhizartrose (frequent in dezelfde leeftijdsgroep) de distractie beperken en de compressie vermijden.'},
    {naam:'Radiocarpale en radio-ulnaire mobilisatie', fase:'Fase 2–3', doel:'Herstel van polsextensie en pro-/supinatie die door spalkdracht en vermijding verminderd zijn.', uitvoering:'Volair-dorsale glijmobilisatie radiocarpaal en translatie van het distale radio-ulnaire gewricht, telkens gevolgd door actief bewegen binnen de nieuwe uitslag.', dosering:'2 × 30 sec per richting na de spalkperiode', let_op:'Niet in ulnaire deviatie met duimflexie mobiliseren — dat is exact de provocatiepositie.'},
    {naam:'Excentrische en isometrische opbouw van de duimextensoren', fase:'Fase 3', doel:'Herstel van de belastbaarheid na de ontlastingsfase, ter preventie van recidief.', uitvoering:'Isometrische duimabductie tegen weerstand van de andere hand, nadien langzame excentrische duimadductie met elastiek; geleidelijk uitbreiden naar de provocerende ADL-taken.', dosering:'3 × 10 langzame herhalingen, 5 sec excentrisch, dagelijks', let_op:'Te vroeg starten reactiveert de klacht; wachten tot de Finkelstein-test niet meer scherp pijnlijk is.'}
  ],
  contraindicaties:[
    'Diepe dwarse frictie of agressieve druk over een acuut geprikkeld eerste dorsaal compartiment — verhoogt de prikkelbaarheid zonder bewezen winst',
    'Recente corticosteroïdinjectie in het compartiment: enkele weken geen belastende of frictionerende technieken (risico op peesverzwakking en subcutane atrofie of depigmentatie)',
    'Aanhoudende paresthesieën dorsoradiaal zonder tendinopathiebeeld: eerst Wartenberg-syndroom uitsluiten, geen compressieve spalk of tape',
    'Vermoeden van scafoïdletsel of rhizartrose als hoofdoorzaak van de radiale polspijn — eerst differentiaaldiagnose, geen mobilisatie op de veronderstelling van tenosynovitis',
    'Zwangerschaps- of postpartumgerelateerde vorm met sterke ontsteking: prioriteit aan ontlasting en spalk, geen forcerende rektechnieken'
  ],
  evidentie:'De <strong>evidentie voor manuele therapie bij De Quervain</strong> is beperkt en berust vooral op kleine studies en klinische redenering. Voor <strong>corticosteroïdinjectie</strong> bestaat de sterkste evidentie voor kortetermijnverbetering (Peters-Veluthamaningal et al., 2009 — Cochrane Database of Systematic Reviews), al is de bewijskracht ook daar door de kleine studieomvang beperkt. Een systematische review en meta-analyse van <strong>handtherapie versus injectie</strong> (Cavaleri et al., 2016 — Journal of Hand Therapy) vond dat de combinatie van spalken en oefentherapie met injectie betere resultaten geeft dan injectie alleen; <strong>spalken en belastingsaanpassing</strong> vormen daarmee de aantoonbare kern van het conservatieve beleid. Voor <strong>diepe dwarse frictie</strong> is er geen ondersteunende evidentie bij tendinopathie en klinisch verhoogt ze bij een geprikkeld compartiment de klachten. Wanneer de klachten na een adequaat conservatief traject van enkele maanden persisteren, is chirurgische decompressie van het eerste compartiment een redelijke stap en geen falen van de therapie.'
};

MANUEEL.cts = {
  intro:'Bij carpaaltunnelsyndroom is manuele therapie een <strong>reëel maar begrensd</strong> onderdeel van het conservatieve beleid: neurodynamische glijtechnieken van de n. medianus en mobilisatie van de carpale tunnel hebben redelijke evidentie bij <strong>mild tot matig</strong> CTS. De <strong>nachtspalk in neutrale polspositie</strong> blijft de basisbehandeling, samen met belastingsaanpassing. Bij aanhoudende sensibiliteitsuitval, motorisch verlies of thenaratrofie is chirurgische decompressie geïndiceerd — dat is een reden om te verwijzen, niet om langer manueel door te behandelen.',
  technieken:[
    {naam:'Neurodynamische glijtechniek n. medianus (nerve gliding)', fase:'Fase 1 (conservatief)', doel:'Herstel van de longitudinale glijcapaciteit van de n. medianus in de tunnel, met vermindering van paresthesieën.', uitvoering:'Zittend of in ruglig. Glijtechniek: pols in extensie terwijl de elleboog flecteert, daarna pols in flexie terwijl de elleboog extendeert — de zenuw wordt telkens aan één uiteinde ontlast. Geen eindstandige rek aanhouden.', dosering:'3 × 10 langzame herhalingen, 1–2×/dag', let_op:'Toename van tintelingen tijdens of na de oefening betekent te veel amplitude of te veel herhalingen; halveer de dosering in plaats van te stoppen.'},
    {naam:'Carpale tunnelmobilisatie (carpal bone mobilization)', fase:'Fase 1 (conservatief)', doel:'Vergroten van de transversale diameter van de tunnel en verlagen van de druk op de zenuw.', uitvoering:'Pols in neutraal, duimen op het os pisiforme en het tuberculum van het os scaphoideum. Zachte, aanhoudende separatiedruk (“shear” of carpal bone spread) om het retinaculum flexorum transversaal te belasten.', dosering:'3 × 30–60 sec, 2–3×/week, thuis dagelijks door de patiënt', let_op:'Nooit uitvoeren met de pols in flexie of extensie: dat verhoogt de tunneldruk juist.'},
    {naam:'Weke-delenmobilisatie retinaculum flexorum en thenar', fase:'Fase 1 (conservatief)', doel:'Vermindering van de weerstand van de volaire weke delen en van de tonus in de thenarmusculatuur.', uitvoering:'Langzame dwarse mobilisatie over het retinaculum flexorum en de thenareminentie, gecombineerd met actief tendon gliding van de vingerflexoren.', dosering:'3–5 min per sessie', let_op:'Geen diepe punctuele druk rechtstreeks over de zenuwloop: dat provoceert paresthesieën zonder therapeutisch doel.'},
    {naam:'Cervicale en thoracale mobilisatie bij dubbele-crush-component', fase:'Fase 1 (conservatief)', doel:'Behandelen van proximale bijdragen aan de mediane zenuwmechanica (cervicale mid- en laagcervicale segmenten, eerste rib, pectoralis minor).', uitvoering:'Segmentale mobilisatie van C5–T1, mobilisatie van de eerste rib en weke-delenwerk op de pectoralis minor en de scaleni, telkens gevolgd door hertesten van de neurodynamiek.', dosering:'2 × 10 oscillaties per niveau, 1–2×/week', let_op:'Alleen zinvol bij een aantoonbare proximale component; routinematige cervicale behandeling bij zuiver distale klachten voegt niets toe.'},
    {naam:'Littekenmobilisatie en desensitisatie na open of endoscopische release', fase:'Fase 2–3 (post-OK)', doel:'Voorkomen van adhesies en behandelen van de pijnlijke litteken- en pilaarpijn na decompressie.', uitvoering:'Vanaf volledige wondsluiting: cirkelvormige en dwarse littekenmobilisatie, aangevuld met desensitisatie via progressieve texturen. Combineren met tendon gliding en vroege neurodynamiek.', dosering:'3–5 min, 2×/dag', let_op:'Pilaarpijn aan weerszijden van het litteken is frequent en kan enkele maanden aanhouden; leg dit uit in plaats van de intensiteit op te drijven.'},
    {naam:'Progressieve grijp- en knijpkrachtopbouw', fase:'Fase 3–4 (post-OK)', doel:'Herstel van kracht en functionele belastbaarheid na de decompressie.', uitvoering:'Opbouw van zachte putty naar knijpdynamometer en functionele ADL-taken; bij thenarzwakte gerichte oppositie- en abductieoefeningen van de duim.', dosering:'3 × 10 herhalingen, dagelijks, geleidelijk zwaarder', let_op:'Na een periode van uitval keert de kracht traag terug; bij uitgesproken thenaratrofie is volledig herstel niet gegarandeerd.'}
  ],
  contraindicaties:[
    'Aanhoudende of progressieve sensibiliteitsuitval, motorische zwakte of thenaratrofie: chirurgische indicatie — geen reden om het conservatieve traject te verlengen',
    'Agressieve of eindstandige neurodynamische rek: verhoogt de intraneurale druk en de symptomen bij een reeds gecomprimeerde zenuw',
    'Mobilisatie of compressie van de carpale tunnel in polsflexie of -extensie (verhoogt de tunneldruk)',
    'Onbehandelde onderliggende oorzaak (hypothyreoïdie, reumatoïde artritis, diabetes, zwangerschapsgerelateerd oedeem, ruimte-innemend proces): eerst medisch beleid',
    'Verse operatiewonde met tekenen van infectie of dehiscentie — geen littekenmobilisatie'
  ],
  evidentie:'De <strong>Cochrane-review</strong> over oefen- en mobilisatie-interventies bij CTS (Page et al., 2012 — Cochrane Database of Systematic Reviews) besluit dat het bewijs <strong>beperkt en van lage kwaliteit</strong> is en dat geen enkele techniek overtuigend superieur bleek; de reviewauteurs vinden wel aanwijzingen voor kortetermijnwinst bij neurodynamische en mobiliserende technieken. Een gerandomiseerde studie die <strong>manuele therapie rechtstreeks met chirurgie</strong> vergeleek bij vrouwen met CTS vond gelijkwaardige functie- en pijnuitkomsten op één jaar, met snellere winst voor manuele therapie op korte termijn (Fernández-de-las-Peñas et al., 2015 — The Journal of Pain) — een bemoedigend maar op zichzelf staand resultaat dat men niet mag veralgemenen naar ernstige of langdurige compressie. Voor de <strong>nachtspalk</strong> is er eveneens Cochrane-onderbouwing van beperkte kwaliteit, maar ze blijft de goedkoopste en veiligste basismaatregel bij milde tot matige klachten. Klinisch geldt: <strong>ernstig of elektrofysiologisch uitgesproken CTS met thenaratrofie hoort bij de chirurg</strong>, en bij uitblijvende verbetering na ongeveer zes weken conservatief beleid is heroverweging van de diagnose en verwijzing aangewezen.'
};

MANUEEL.pfps = {
  intro:'Bij patellofemorale pijn is manuele therapie <strong>adjuvant en symptoomgericht</strong>. De kerninterventie is heup- en quadricepsgerichte krachttraining gecombineerd met belastingsmanagement en loopscholing; manuele technieken kunnen het venster openen waarin die training pijnvrij uitvoerbaar wordt. Wees expliciet naar de patiënt: <strong>patellamobilisatie en taping moduleren pijn kortdurend</strong>, ze corrigeren geen &#39;scheve knieschijf&#39; en veranderen de patellofemorale belasting niet blijvend.',
  technieken:[
    {naam:'Patellaire glijmobilisatie', fase:'Fase 1–2', doel:'Kortdurende pijnmodulatie en herstel van glijding bij aangetoonde bewegingsbeperking.', uitvoering:'Rugligging, knie in 0–20° flexie met volledig ontspannen quadriceps. Mediale, laterale, caudale en craniale translatie van de patella, graad I–II bij pijndominantie, graad III bij duidelijke stijfheid van het retinaculum.', dosering:'2 × 20–30 oscillaties per richting, 2–3×/week', let_op:'Alleen bij objectief verminderde patellamobiliteit of positieve patellatilt test. Routinematige toepassing bij een normaal bewegende patella heeft geen aantoonbare meerwaarde.'},
    {naam:'Mobilisatie van het laterale retinaculum en tractus-aanhechting', fase:'Fase 1–2', doel:'Reduceren van laterale trekspanning die de patella lateraal positioneert.', uitvoering:'Zijligging of ruglig, knie licht gebogen. Langzame dwarse en longitudinale weke-delenmobilisatie van het laterale retinaculum en de distale vastus lateralis, gecombineerd met passieve mediale patellaglijding.', dosering:'3–5 min per sessie, voorafgaand aan het oefenprogramma', let_op:'Kan lokaal gevoelig zijn; werk submaximaal en vermijd druk rechtstreeks op de laterale patellafacet bij prikkelbare knieën.'},
    {naam:'Heupmobilisatie in endorotatie en extensie', fase:'Fase 2–3', doel:'Wegnemen van heupmobiliteitsbeperkingen die het femur mediaal doen roteren onder de patella.', uitvoering:'Ruglig of buiklig. Postero-anterieure en laterale glijmobilisatie van het caput femoris, eventueel als mobilization with movement tijdens actieve heuprotatie of in lunge-positie.', dosering:'3 × 10 herhalingen of 3 × 30 sec, 2×/week', let_op:'Enkel bij een gemeten rotatie- of extensiebeperking. De dynamische valgus bij de single leg squat is meestal een <strong>krachtprobleem</strong>, geen mobiliteitsprobleem.'},
    {naam:'McConnell- of tapingtechniek als testinterventie', fase:'Fase 1–2', doel:'Onmiddellijke pijnreductie om belaste oefeningen mogelijk te maken.', uitvoering:'Mediale glide- en tiltcomponent aanbrengen met rigide tape, daarna onmiddellijk hertesten met de provocerende taak (squat, traplopen). Behoud alleen bij ten minste 50% pijnreductie.', dosering:'Bij pijnvrije taakuitvoering dragen tijdens oefen- en sportbelasting, 2–4 weken', let_op:'Uitdrukkelijk een tijdelijke opstap: het effect neemt af en tape mag de progressie van de krachttraining niet vervangen.'},
    {naam:'Talocrurale dorsiflexiemobilisatie', fase:'Fase 2–3', doel:'Vergroten van dorsiflexie zodat de knie minder valgus en flexie compenseert bij landen en traplopen.', uitvoering:'Anterieur-posterieure glide van de talus, bij voorkeur belast als mobilization with movement in lunge-positie met gefixeerde hiel.', dosering:'3 × 10 herhalingen, gevolgd door belast oefenen', let_op:'Zinvol bij een weight-bearing lunge test onder circa 9–10 cm; zonder dat tekort is er geen indicatie.'},
    {naam:'Weke-delenmobilisatie quadriceps en heupflexoren', fase:'Fase 1–3', doel:'Tonusreductie van rectus femoris en vastus lateralis die de patellofemorale compressie verhogen.', uitvoering:'Longitudinale en dwarse mobilisatie van de quadriceps in ruglig, iliopsoas in ruglig met gecontroleerde heupextensie, aansluitend actief bewegen in de gewonnen ROM.', dosering:'2–3 min per structuur, 2×/week', let_op:'Winst is kortdurend zonder aansluitende actieve belasting in de nieuwe bewegingsuitslag.'}
  ],
  contraindicaties:[
    'Patellaire instabiliteit met eerdere (sub)luxatie: geen laterale glijmobilisatie — dit provoceert apprehensie en instabiliteit',
    'Acute hemartros of duidelijke gewrichtszwelling: eerst intra-articulaire pathologie uitsluiten voor mobilisatie',
    'Open groeischijven met apofysaire klachten (Sinding-Larsen-Johansson, Osgood-Schlatter): geen tractie of druk op de apofyse',
    'Nachtpijn, rustpijn of onverklaarde zwelling bij een jonge patiënt — eerst medische beeldvorming',
    'Vermoeden van chondraal defect of beginnende patellofemorale artrose: geen compressieve technieken in eindstandige flexie'
  ],
  evidentie:'<strong>Oefentherapie is de best onderbouwde interventie</strong> bij patellofemorale pijn, met de sterkste effecten voor gecombineerde heup- en knietraining (Lack et al., 2015 — BJSM; Crossley et al., 2016 — BJSM consensus). De <strong>klinische richtlijn</strong> van Willy et al. (2019 — JOSPT) beveelt oefentherapie aan als kerninterventie en positioneert taping, mobilisatie en voetorthesen als aanvullende, tijdelijke maatregelen. <strong>Patellataping</strong> geeft bij een deel van de patiënten onmiddellijke pijnreductie, maar de meerwaarde bovenop oefentherapie op langere termijn is beperkt (Barton et al., 2015 — BJSM). Voor geïsoleerde <strong>patellamobilisatie</strong> is de evidentie zwak en grotendeels beperkt tot korte-termijnpijneffecten; gebruik ze doelgericht bij een aangetoonde bewegingsbeperking, niet als standaardbehandeling. <strong>Gait retraining</strong> met een verhoogde stapfrequentie verlaagt de patellofemorale gewrichtsbelasting meetbaar en is bij lopers klinisch waardevoller dan passieve technieken (Willy et al., 2012 — Clin Biomech).'
};

MANUEEL.gmt = {
  intro:'Bij gluteale tendinopathie (greater trochanteric pain syndrome) is manuele therapie <strong>strikt ondergeschikt</strong> aan educatie over compressiebelasting en progressieve abductortraining. Het pathomechanisme is <strong>compressie van de pees tegen de trochanter major bij heupadductie</strong>, gecombineerd met tensiele overbelasting. Elke techniek die de patiënt in adductie brengt — zijligging op de aangedane zijde, benen kruisen, agressief ITB-rekken — verergert precies wat je wil ontlasten.',
  technieken:[
    {naam:'Positioneringsadvies en houdingscorrectie als manuele interventie', fase:'Fase 1', doel:'Onmiddellijke decompressie van de peesinsertie in slaap- en zithouding.', uitvoering:'Manueel begeleide zijligging met kussen tussen de knieën zodat de bovenste heup neutraal blijft in plaats van in adductie zakt; zit met heupen niet gekruist en knieën heupbreedte uit elkaar; sta met gelijkmatige gewichtsverdeling zonder heup-hangen.', dosering:'Aanleren en herhalen bij elke sessie in fase 1', let_op:'Dit is klinisch de meest effectieve &#39;handeling&#39; in de eerste weken. Zonder decompressie blijft elke andere behandeling ondermaats.'},
    {naam:'Weke-delenmobilisatie van tensor fasciae latae en gluteus maximus', fase:'Fase 1–2', doel:'Tonusreductie van de structuren die via de tractus iliotibialis compressie op de trochanter genereren.', uitvoering:'Rugligging voor de TFL (net distaal van de spina iliaca anterior superior) en buik- of zijligging met kussensteun voor de gluteus maximus. Langzame longitudinale en dwarse mobilisatie, met de heup in lichte abductie.', dosering:'2–3 min per structuur, 2×/week', let_op:'Nooit in zijligging op de aangedane zijde en nooit met de heup in adductie: dat comprimeert de pees tegen de trochanter.'},
    {naam:'Lumbale en sacro-iliacale mobilisatie', fase:'Fase 1–3', doel:'Behandelen van bijkomende lumbopelvische pijnbronnen die laterale heuppijn onderhouden of nabootsen.', uitvoering:'Postero-anterieure mobilisatie van L3–L5 in buikligging (met kussen onder de buik), aangevuld met rotatiemobilisatie van de lumbale wervelzuil in zijligging op de niet-aangedane zijde.', dosering:'2 × 10 oscillaties per niveau, 1–2×/week', let_op:'Bij vermoeden van referred pain uit de lumbale wervelzuil eerst differentiëren; laterale heuppijn heeft vaak een gemengde oorsprong.'},
    {naam:'Heupmobilisatie in flexie en endorotatie (differentiaal)', fase:'Fase 2–3', doel:'Beoordelen en behandelen van coëxistente intra-articulaire heupbeperking.', uitvoering:'Rugligging, laterale en postero-anterieure glide van het caput femoris in submaximale flexie, zonder eindstandige adductie of FADIR-positie te forceren.', dosering:'3 × 30 sec, 1–2×/week', let_op:'De FADIR-positie is zowel een intra-articulaire test als een compressiepositie voor de pees: interpreteer een positieve test voorzichtig en gebruik ze niet als behandelpositie.'},
    {naam:'Isometrische heupabductie als pijnmodulatie', fase:'Fase 1–2', doel:'Analgesie en eerste belastbaarheidsopbouw bij hoge prikkelbaarheid.', uitvoering:'Staand of in ruglig met gestrekte benen, abductoren aanspannen tegen weerstand in <strong>neutrale heuppositie</strong>, nooit in adductie. Manuele weerstand laat toe de intensiteit fijn te doseren.', dosering:'3–5 × 30–45 sec op circa 70% MVC, dagelijks', let_op:'Strikt genomen geen passieve techniek, maar klinisch superieur aan passieve modaliteiten voor pijndemping bij tendinopathie.'},
    {naam:'Thoracolumbale en heupextensiemobiliteit', fase:'Fase 2–3', doel:'Verbeteren van heupextensie zodat het bekken in stand minder lateraal wegzakt.', uitvoering:'Weke-delentechnieken op iliopsoas en rectus femoris in ruglig, gecombineerd met actieve heupextensie en bekkencontrole in stand.', dosering:'2–3 min per zijde, 2×/week', let_op:'Adjuvant: bekkencontrole in eenbenige stand wordt met kracht getraind, niet met mobilisatie hersteld.'}
  ],
  contraindicaties:[
    'Elke techniek in zijligging op de aangedane zijde of met de heup in adductie: verhoogt de peescompressie tegen de trochanter major',
    'Agressief rekken van de tractus iliotibialis of de klassieke gekruiste-been-heuprek: dit is een compressiemanoeuvre, geen rekoefening',
    'Corticosteroïdinjectie in de voorbije weken: verhoogd degeneratie- en ruptuurrisico, geen belastende of drukkende technieken op de insertie',
    'Diepe druk of frictie rechtstreeks op de trochanter major bij aanwezige bursitis: verhoogt de prikkelbaarheid zonder aangetoonde meerwaarde',
    'Nachtpijn met systemische symptomen, of laterale heuppijn na een val bij een oudere patiënt — eerst fractuur en heuppathologie uitsluiten'
  ],
  evidentie:'<strong>Educatie plus progressieve oefentherapie is de referentiebehandeling</strong>: in de LEAP-studie van Mellor et al. (2018 — BMJ) was een programma van educatie over compressiebelasting en abductortraining na 8 weken en na 12 maanden superieur aan een corticosteroïdinjectie én aan afwachtend beleid. Het <strong>pathomechanisme is compressie plus tensiele belasting</strong>, niet frictie of een geïsoleerde bursitis: Grimaldi &amp; Fearon (2015 — JOSPT) beschrijven hoe adductiehoudingen de peescompressie tegen de trochanter major verhogen en waarom rektechnieken daarom contraproductief zijn. Voor <strong>manuele therapie als op zichzelf staande behandeling</strong> bij gluteale tendinopathie bestaat geen kwalitatief bewijs van meerwaarde; ze blijft beperkt tot het aanpakken van bijkomende lumbopelvische of heupbeperkingen. Praktisch betekent dit dat de <strong>houdingsaanpassing</strong> in de eerste weken meer oplevert dan om het even welke passieve techniek.'
};

MANUEEL.hsi = {
  intro:'Bij een hamstringletsel is manuele therapie <strong>fasegebonden en terughoudend</strong>. In de eerste dagen na een acuut spierletsel is de weefselreactie beschermend: agressieve massage, diepe frictie of rekken vergroot de bloeduitstorting en het litteken, en de kerninterventie is progressieve excentrische belasting met lengtecomponent. Vanaf de subacute fase heeft manuele therapie wel een reële plaats voor <strong>littekenmobiliteit, lumbopelvische bijdrage en neurodynamiek</strong> bij aanhoudende of recidiverende klachten.',
  technieken:[
    {naam:'Voorzichtige oedeem- en drainagetechnieken', fase:'Fase 1', doel:'Beperken van zwelling en hematoomuitbreiding zonder het herstellende weefsel te verstoren.', uitvoering:'Buikligging met lichte knieflexie. Zeer lichte, langzame oppervlakkige strijkingen proximaal van de letselzone naar de lies toe, in combinatie met compressie en elevatie.', dosering:'5–10 min, dagelijks in de eerste dagen', let_op:'Nooit rechtstreeks in de acute letselzone en nooit diep: in de eerste 3–5 dagen is <strong>geen druk in de spierbuik</strong> de regel.'},
    {naam:'Lumbopelvische en sacro-iliacale mobilisatie', fase:'Fase 1–2', doel:'Aanpakken van lumbopelvische bijdrage aan pijn en beschermende tonus.', uitvoering:'Postero-anterieure mobilisatie van de onderste lumbale segmenten in buikligging en rotatiemobilisatie in zijligging op de niet-aangedane zijde, zonder rek op de hamstrings.', dosering:'2 × 10 oscillaties per niveau, 2×/week', let_op:'Positionering zo kiezen dat het letsel niet passief op rek komt tijdens de mobilisatie.'},
    {naam:'Littekenmobilisatie en dwarse weke-delenmobilisatie', fase:'Fase 2–3', doel:'Bevorderen van glijden tussen spier, fascie en litteken zodra de proliferatiefase op gang is.', uitvoering:'Buikligging, knie licht gebogen. Langzame dwarse en longitudinale mobilisatie rond en over de letselzone, oplopend in diepte volgens tolerantie, aansluitend actief bewegen in de gewonnen mobiliteit.', dosering:'3–5 min, 2×/week, ten vroegste vanaf circa dag 5–7', let_op:'Pijn tijdens de techniek mag niet boven 3/10 uitkomen en er mag geen natijd van meer dan 24 uur ontstaan.'},
    {naam:'Slump-neurodynamiek (glijtechniek)', fase:'Fase 2–3', doel:'Herstel van neurale mobiliteit bij aanhoudende posterieure dijklachten of trekgevoel zonder krachtstekort.', uitvoering:'Zittend in slump-positie: nekflexie combineren met knie-extensie en dorsiflexie in een <strong>glijpatroon</strong> — de ene component ontspannen terwijl de andere aanspant. Beginnen met glijtechnieken, pas later eventueel spanningstechnieken.', dosering:'3 × 10 langzame herhalingen, dagelijks', let_op:'Relevant bij aanhoudende klachten en bij recidiverende letsels; niet toepassen in de acute fase en nooit tot in de pijn doorduwen.'},
    {naam:'Weke-delenmobilisatie heupflexoren en quadratus lumborum', fase:'Fase 2–4', doel:'Verbeteren van bekkenpositie en heupextensie zodat de hamstrings minder in verlengde stand belast worden bij sprint.', uitvoering:'Ruglig voor de iliopsoas met gecontroleerde heupextensie, zijligging voor de quadratus lumborum, aansluitend actieve heupextensie en bekkenkanteling.', dosering:'2–3 min per structuur, 1–2×/week', let_op:'Adjuvant: de bekkencontrole bij hoge snelheid wordt met kracht- en sprinttraining opgebouwd.'},
    {naam:'Mobilisatie van de thoracolumbale overgang en heup', fase:'Fase 3–4', doel:'Wegnemen van resterende ketenbeperkingen voor de sprinthervatting.', uitvoering:'Mobilisatie van de thoracolumbale extensie en rotatie in zit of buiklig, gecombineerd met heupextensiemobilisatie in buikligging.', dosering:'2 × 10 herhalingen per niveau, 1×/week', let_op:'Enkel bij aangetoonde beperking; routinematige toepassing voegt niets toe aan het RTS-traject.'}
  ],
  contraindicaties:[
    'Diepe massage, frictie of rek in de eerste 3–5 dagen na een acuut spierletsel: vergroot de bloeduitstorting en vertraagt het herstel',
    'Palpabele defect met functieverlies of uitgebreide hematoomvorming (vermoeden graad III of proximale avulsie) — eerst medische en chirurgische evaluatie',
    'Toenemende zwelling, spanning, gevoelsverlies of onhoudbare pijn: denk aan compartimentsyndroom of grote hematoomcollectie — geen manuele behandeling, wel spoedverwijzing',
    'Voorgeschiedenis van myositis ossificans of hard-elastische zwelling in het litteken: geen agressieve druk of frictie',
    'Aanhoudende diepe zitbeenpijn met neurologische uitval: eerst radiculopathie en proximale hamstringtendinopathie differentiëren'
  ],
  evidentie:'<strong>Progressieve belasting met lengtecomponent is de kerninterventie</strong>: het L-protocol van Askling et al. (2013 — BJSM) met excentrische oefeningen in verlengde stand gaf een aanzienlijk snellere terugkeer naar sport dan een conventioneel programma. Sherry &amp; Best (2004 — JOSPT) toonden dat een programma met <strong>progressieve agility- en rompstabilisatie-oefeningen</strong> een duidelijk lager recidiefpercentage gaf dan rekken en geïsoleerd versterken, wat het belang van lumbopelvische controle onderstreept. Voor <strong>preventie</strong> is de nordic hamstring exercise de best onderbouwde interventie, met een consistente reductie van het letselrisico in gepoolde analyses (van Dyk et al., 2019 — BJSM). Voor <strong>massage en frictie</strong> bij acuut spierletsel bestaat geen bewijs van versneld herstel; het argument om ze in de eerste dagen te vermijden is fysiologisch en klinisch, niet statistisch. <strong>Neurodynamiek</strong> is klinisch relevant bij de subgroep met aanhoudende of recidiverende posterieure dijklachten en een verhoogde slump-respons, al is de directe evidentie beperkt tot kleine studies.'
};

MANUEEL.pa = {
  intro:'Bij pes anserinus tendinopathie en bursitis is manuele therapie <strong>adjuvant en gericht op de omgeving van de insertie</strong>, niet op de insertie zelf. De aandoening ontstaat door een combinatie van compressie en tensiele belasting van de aanhechting van sartorius, gracilis en semitendinosus, vaak in de context van dynamische knievalgus, mediale gonartrose of een plotse belastingstoename. Kerninterventie is <strong>belastingsmanagement met progressieve hamstring- en heupabductorkracht</strong>; manuele technieken maken dat traject comfortabeler.',
  technieken:[
    {naam:'Weke-delenmobilisatie mediale hamstrings en gracilis', fase:'Fase 1–2', doel:'Tonusreductie van de spieren die trekspanning op de ganzenpoot genereren.', uitvoering:'Buik- of ruglig met knie in lichte flexie. Langzame longitudinale en dwarse mobilisatie van semitendinosus en gracilis in de <strong>spierbuik en de musculotendineuze overgang</strong>, duidelijk proximaal van de gevoelige insertie.', dosering:'3–5 min per zijde, 2×/week, voorafgaand aan de oefensessie', let_op:'Niet werken op de pijnlijke insertie zelf: dit verhoogt de prikkelbaarheid zonder aangetoonde meerwaarde.'},
    {naam:'Heupabductor- en rotatormobilisatie', fase:'Fase 1–3', doel:'Aanpakken van de proximale keten die de mediale kniebelasting bepaalt.', uitvoering:'Zijligging op de niet-aangedane zijde: weke-delentechnieken op gluteus medius en de diepe heuprotatoren, aangevuld met postero-anterieure heupmobilisatie in ruglig.', dosering:'2–3 min per structuur, 2×/week', let_op:'De dynamische valgus die de pes anserinus belast is meestal een krachtprobleem; de manuele techniek is de opwarming, de abductortraining is de behandeling.'},
    {naam:'Tibiofemorale rotatiemobilisatie', fase:'Fase 2–3', doel:'Herstel van de tibiarotatie zodat de mediale structuren minder trekspanning ondergaan bij draaibewegingen.', uitvoering:'Zittend of ruglig met knie in 30–60° flexie. Voorzichtige interne en externe rotatiemobilisatie van de tibia ten opzichte van het femur, graad II–III volgens tolerantie.', dosering:'2 × 20 oscillaties per richting, 2×/week', let_op:'Bij bekende mediale meniscuspathologie of mediale gonartrose voorzichtig doseren en niet in eindstand forceren.'},
    {naam:'Patellamobilisatie en mobilisatie van het mediale retinaculum', fase:'Fase 2–3', doel:'Aanpakken van coëxistente patellofemorale klachten die vaak samen voorkomen.', uitvoering:'Rugligging, knie licht gebogen, quadriceps ontspannen. Mediale en caudale patellaglijding, gecombineerd met weke-delenmobilisatie van het mediale retinaculum.', dosering:'2 × 20 oscillaties per richting, 2×/week', let_op:'Alleen bij aangetoonde beperking of aantoonbare patellofemorale component in het pijnpatroon.'},
    {naam:'Talocrurale dorsiflexiemobilisatie', fase:'Fase 2–3', doel:'Verlagen van het valgusmoment op de knie bij stap en landing.', uitvoering:'Anterieur-posterieure talusglide, bij voorkeur belast als mobilization with movement in lunge-positie, aansluitend belast oefenen.', dosering:'3 × 10 herhalingen, 2×/week', let_op:'Enkel bij een gemeten dorsiflexietekort (weight-bearing lunge test onder circa 9–10 cm).'},
    {naam:'Isometrische knieflexie als pijnmodulatie', fase:'Fase 1–2', doel:'Directe analgesie en eerste belastbaarheidsopbouw bij hoge prikkelbaarheid.', uitvoering:'Zittend met de voet tegen een vast punt, knie in circa 90° flexie, submaximale isometrische knieflexie tegen manuele of vaste weerstand op circa 70% MVC.', dosering:'3–5 × 30–45 sec, dagelijks bij hoge prikkelbaarheid', let_op:'Geen passieve techniek, maar klinisch bruikbaarder dan passieve modaliteiten als opstap naar isotone belasting.'}
  ],
  contraindicaties:[
    'Diepe frictie of drukmassage rechtstreeks op de gevoelige insertie of een aanwezige bursa: verhoogt de prikkelbaarheid zonder aangetoonde meerwaarde',
    'Corticosteroïdinjectie in de voorbije weken: geen belastende of drukkende technieken op de insertieregio',
    'Warme, gezwollen en rode knie met algemeen ziek zijn — septische bursitis of artritis uitsluiten voor er behandeld wordt',
    'Acuut MCL-letsel of duidelijke valgusinstabiliteit: geen valgusprovocerende of rotatiemobilisatie',
    'Onverklaarde zwelling of nachtpijn bij een oudere patiënt met bekende artrose — eerst medische evaluatie'
  ],
  evidentie:'De <strong>evidentie voor pes anserinus tendinopathie is beperkt</strong>: er zijn nauwelijks gerandomiseerde studies die specifiek deze aandoening onderzoeken, en de behandeling steunt grotendeels op extrapolatie van het bredere tendinopathie-onderzoek. Dat onderzoek is wel eenduidig: <strong>progressieve belasting</strong> verandert de peescapaciteit terwijl passieve modaliteiten dat niet doen (Cook &amp; Purdam, 2009 — BJSM; Malliaras et al., 2013 — Sports Med). Voor <strong>diepe dwarse frictie</strong> vond de Cochrane-review van Loew et al. (2014) geen klinisch relevante meerwaarde bij tendinopathie. De pes anserinus-regio komt vaak in beeld bij <strong>mediale gonartrose</strong>, waar ze eerder een bijkomende pijnbron is dan de kernpathologie; behandel in dat geval het onderliggende beeld mee. Praktisch: manuele therapie is hier een comfortmaatregel binnen een programma dat draait om <strong>belastingsmanagement, hamstringkracht en heupabductorkracht</strong>, en beloof de patiënt geen structureel effect.'
};

MANUEEL.itb = {
  intro:'Bij iliotibiale bandsyndroom moet de manuele therapie <strong>conceptueel correct</strong> zijn, en dat betekent breken met de klassieke aanpak. De tractus iliotibialis is <strong>stevig verankerd aan de femurdiafyse en niet betekenisvol rekbaar</strong>: de pijn ontstaat door <strong>compressie van het sterk geïnnerveerde vetweefsel onder de band</strong> tegen de laterale femurcondyl rond 30° knieflexie, niet door frictie van een band die heen en weer glijdt. Het klassieke ITB-rekken en agressief foam rollen op de pijnlijke zone comprimeren precies de structuur die al gecomprimeerd wordt.',
  technieken:[
    {naam:'Weke-delenmobilisatie tensor fasciae latae en gluteus maximus', fase:'Fase 1–2', doel:'Tonusreductie van de spieren die de spanning in de tractus genereren — de enige plaats waar weke-delenwerk zinvol aangrijpt.', uitvoering:'Rugligging voor de TFL, net distaal van de spina iliaca anterior superior; zijligging of buiklig voor de gluteus maximus. Langzame longitudinale en dwarse mobilisatie van de <strong>spierbuik</strong>, met de heup in lichte abductie.', dosering:'2–3 min per structuur, 2–3×/week', let_op:'Werk proximaal, in de spier, en <strong>niet</strong> op de laterale femurcondyl. Daar zit de gecomprimeerde, pijnlijke structuur.'},
    {naam:'Mobilisatie van de laterale heup en de proximale tractus (niet-rekkend)', fase:'Fase 1–2', doel:'Verbeteren van glijden tussen tractus, vastus lateralis en onderliggende fascie in de proximale dij.', uitvoering:'Zijligging op de niet-aangedane zijde met het bovenste been ondersteund in neutrale abductie. Langzame dwarse mobilisatie van de laterale dij in het proximale en middelste derde, gevolgd door actief bewegen.', dosering:'3–5 min, 2×/week', let_op:'Vermijd de distale 5–7 cm boven de laterale femurcondyl volledig zolang de Noble-test positief is.'},
    {naam:'Heupmobilisatie in extensie en endorotatie', fase:'Fase 2–3', doel:'Wegnemen van heupbeperkingen die het adductie- en interne-rotatiemoment tijdens de standfase vergroten.', uitvoering:'Buikligging voor heupextensiemobilisatie, ruglig voor postero-anterieure glide van het caput femoris in submaximale flexie, eventueel als mobilization with movement.', dosering:'3 × 30 sec of 3 × 10 herhalingen, 2×/week', let_op:'Alleen bij een gemeten beperking. Zonder objectieve bevinding is er geen indicatie.'},
    {naam:'Lumbale en sacro-iliacale mobilisatie', fase:'Fase 1–3', doel:'Behandelen van lumbopelvische bijdrage aan gluteale inhibitie en bekkencontrole.', uitvoering:'Postero-anterieure mobilisatie van de onderste lumbale segmenten in buikligging, aangevuld met rotatiemobilisatie in zijligging op de niet-aangedane zijde.', dosering:'2 × 10 oscillaties per niveau, 1–2×/week', let_op:'Adjuvant en kortdurend van effect; de bekkencontrole verbetert door abductortraining, niet door mobilisatie.'},
    {naam:'Tibiofemorale rotatie- en patellamobilisatie', fase:'Fase 2–3', doel:'Aanpakken van bijkomende laterale kniestijfheid en patellofemorale component.', uitvoering:'Ruglig, knie in 30–60° flexie. Voorzichtige tibiarotatiemobilisatie en mediale patellaglijding, gecombineerd met mobilisatie van het laterale retinaculum boven de pijnlijke compressiezone.', dosering:'2 × 20 oscillaties per richting, 2×/week', let_op:'Blijf uit de directe compressiezone; laterale kniepijn tijdens de techniek is een signaal om te stoppen, niet om door te zetten.'},
    {naam:'Talocrurale dorsiflexiemobilisatie', fase:'Fase 2–3', doel:'Verbeteren van de landings- en standfasemechanica bij lopers.', uitvoering:'Anterieur-posterieure talusglide, belast als mobilization with movement in lunge-positie, aansluitend belast oefenen en loopscholing.', dosering:'3 × 10 herhalingen, 2×/week', let_op:'Enkel bij een gemeten dorsiflexietekort; anders geen indicatie.'}
  ],
  contraindicaties:[
    'De klassieke ITB-rek (gekruiste benen, romp zijwaarts) als kernbehandeling: brengt de heup in adductie en verhoogt de compressie op de pijnlijke zone',
    'Agressief foam rollen of diepe frictie over de laterale femurcondyl: rechtstreekse compressie van het geïnnerveerde vetweefsel dat de pijn genereert',
    'Elke behandelpositie in zijligging op de aangedane zijde tijdens de prikkelbare fase',
    'Corticosteroïdinjectie in de voorbije weken: geen belastende of drukkende technieken lokaal',
    'Laterale kniepijn met slotklachten, zwelling of een traumatisch begin — eerst laterale meniscus, laterale collaterale band en tibiofemorale pathologie uitsluiten'
  ],
  evidentie:'De <strong>anatomische onderbouwing is beslissend</strong>: Fairclough et al. (2006 — J Anat) toonden dat de tractus iliotibialis stevig verankerd is aan het femur en niet over de laterale condyl heen en weer beweegt; de klinische bevinding is <strong>compressie van een rijk geïnnerveerde vetlaag</strong> bij circa 30° knieflexie, niet frictie. Falvey et al. (2010 — Scand J Med Sci Sports) rekenden voor dat de rekbaarheid van de band biomechanisch verwaarloosbaar is, wat de zin van rektechnieken en agressief rollen ondergraaft. <strong>Heupabductortraining</strong> blijft de best gedocumenteerde interventie: Fredericson et al. (2000 — Clin J Sport Med) rapporteerden hoge symptoomresolutie bij lopers na een gericht abductorprogramma, en heupabductorzwakte is een consistente bevinding bij ITBS (Niemuth et al., 2005 — Clin J Sport Med). Manuele therapie behoudt waarde voor <strong>tonusreductie van TFL en gluteus maximus en voor aantoonbare ketenbeperkingen</strong>, gecombineerd met loopvolume-management en <strong>gait retraining</strong> (verhoogde stapfrequentie, minder heupadductie). Beloof geen &#39;verlenging&#39; van de band — die claim is niet houdbaar.'
};

MANUEEL.lies = {
  intro:'Bij adductor-gerelateerde liespijn is manuele therapie <strong>een aanvulling op actieve oefentherapie, geen alternatief</strong>. Het Hölmich-programma met progressieve adductorkracht en de Copenhagen-progressie is de kerninterventie; manuele technieken kunnen de terugkeer naar sport comfortabeler en mogelijk sneller maken. Even belangrijk is de <strong>differentiatie</strong>: liespijn kan adductorgerelateerd, iliopsoasgerelateerd, inguinaal, pubisgerelateerd of afkomstig van het heupgewricht zijn, en die vier laatste vragen een ander plan.',
  technieken:[
    {naam:'Weke-delenmobilisatie adductorgroep', fase:'Fase 1–2', doel:'Tonusreductie en verbeterde rekbaarheid van adductor longus, brevis en magnus.', uitvoering:'Rugligging, heup in lichte abductie en flexie met steun onder de knie. Langzame longitudinale en dwarse mobilisatie van de <strong>spierbuik</strong>, oplopend in diepte volgens tolerantie, duidelijk distaal van de pijnlijke pubische insertie.', dosering:'3–5 min per zijde, 2×/week, voorafgaand aan het oefenprogramma', let_op:'Bij een acuut adductorletsel geen diepe druk in de eerste dagen; bij chronische klachten kan er wel dieper gewerkt worden.'},
    {naam:'Iliopsoasmobilisatie en heupflexortechnieken', fase:'Fase 1–3', doel:'Aanpakken van de vaak coëxistente iliopsoasgerelateerde component van liespijn.', uitvoering:'Rugligging, knieën opgetrokken en buik ontspannen. Langzame, voorzichtige mediale-naar-laterale mobilisatie van de iliopsoas, gecombineerd met actieve heupextensie en gecontroleerde rek in Thomas-positie.', dosering:'2–3 min per zijde, 2×/week', let_op:'Werk voorzichtig en communiceer duidelijk: de techniek is diep, abdominaal gelegen en moet worden gestaakt bij pulsatie, uitstralende of viscerale pijn.'},
    {naam:'Heupmobilisatie (caudale tractie en laterale glide)', fase:'Fase 2–3', doel:'Differentiëren en behandelen van een intra-articulaire heupcomponent.', uitvoering:'Rugligging, caudale tractie langs de as van de femurhals en laterale glijmobilisatie met een gordel, in submaximale flexie en zonder de FADIR-positie te forceren.', dosering:'3 × 30–60 sec, 2×/week', let_op:'Een positieve FADIR of beperkte endorotatie wijst op een heupgerelateerde bron: overweeg dan verdere beeldvorming in plaats van de behandeling te intensiveren.'},
    {naam:'Symfyse- en sacro-iliacale mobilisatie met bekkencontrole', fase:'Fase 2–3', doel:'Beïnvloeden van de lumbopelvische component bij gemengde liespijn.', uitvoering:'Muscle energy-technieken voor de sacro-iliacale gewrichten in ruglig (isometrische adductie- en abductiecontracties tegen manuele weerstand), aangevuld met lumbale mobilisatie in zijligging.', dosering:'3 × 5–10 sec contractie, 2 series, 1–2×/week', let_op:'Bij pubisgerelateerde pijn met uitgesproken drukpijn over de symfyse en positieve springing test: geen mobilisatie forceren, wel eerst osteïtis pubis en stressreactie overwegen.'},
    {naam:'Thoracolumbale mobiliteit en rompketen', fase:'Fase 3–4', doel:'Herstel van de rotatie- en extensiemobiliteit die nodig is voor trappen, sprinten en richtingsverandering.', uitvoering:'Mobilisatie van de thoracale rotatie in zit of zijligging en van de thoracolumbale overgang in buikligging, aansluitend actief geïntegreerd in sportspecifieke rotatiebewegingen.', dosering:'2 × 10 herhalingen per richting, 1×/week', let_op:'Voor de sporthervatting is de actieve integratie belangrijker dan de mobilisatie zelf.'},
    {naam:'Isometrische adductie met manuele weerstand als pijnmodulatie', fase:'Fase 1–2', doel:'Analgesie en gedoseerde eerste belastbaarheidsopbouw.', uitvoering:'Rugligging, heupen in circa 45° flexie, submaximale isometrische adductie tegen de handen van de therapeut of een bal, pijn hooguit 3/10. De manuele variant laat een nauwkeuriger dosering toe dan een bal alleen.', dosering:'3–5 × 30–45 sec, dagelijks', let_op:'Geen passieve techniek, maar klinisch effectiever dan passieve modaliteiten en meteen de eerste stap in het oefenprogramma.'}
  ],
  contraindicaties:[
    'Acuut adductorletsel met palpabel defect of uitgebreid hematoom: geen diepe technieken of rek in de eerste dagen — eerst graad en avulsie beoordelen',
    'Vermoeden van femorale stressfractuur of pubische stressreactie (nachtpijn, pijn bij hinkelen, focale botpijn) — geen belasting of mobilisatie, wel medische beeldvorming',
    'Vermoeden van inguinale of femorale hernia: geen diepe abdominale of inguinale technieken, wel chirurgisch nazicht',
    'Uitstralende pijn, pulsatie of viscerale klachten bij iliopsoastechnieken: onmiddellijk staken en heroriënteren',
    'Liespijn bij een kind of adolescent met mankheid en beperkte endorotatie — epifysiolyse of Perthes uitsluiten voor er behandeld wordt'
  ],
  evidentie:'<strong>Actieve oefentherapie is de referentiebehandeling</strong>: Hölmich et al. (1999 — Lancet) toonden in een gerandomiseerde studie dat een programma van actieve adductor- en rompversterking duidelijk vaker tot pijnvrije sporthervatting leidde dan een passieve behandeling met modaliteiten, rek en massage. Voor <strong>manuele therapie als aanvulling</strong> is er beperkte maar reële onderbouwing: Weir et al. (2011 — Man Ther) vergeleken een multimodale aanpak met manuele therapie tegenover oefentherapie bij langdurige adductorgerelateerde liespijn en vonden een snellere terugkeer naar sport in de manuele groep, zonder verschil in het uiteindelijke aantal succesvolle hervattingen — een klein onderzoek, dus voorzichtig te interpreteren. De <strong>Doha-consensus</strong> (Weir et al., 2015 — BJSM) legt de terminologie vast in vier entiteiten plus heupgerelateerde pijn en maakt duidelijk waarom differentiatie de eerste stap is. Voor <strong>preventie</strong> is de Copenhagen adduction exercise de best onderbouwde interventie, met aangetoonde winst in excentrische adductorkracht en een gunstig effect op liesklachten in sportpopulaties. Boodschap voor de patiënt: <strong>de kracht doet het werk</strong>, de handen maken het traject draaglijk.'
};

MANUEEL.at = {
  intro:'Bij achillespeestendinopathie is manuele therapie <strong>adjuvant, nooit de kerninterventie</strong>. Enkel progressieve belasting — isometrisch, isotonisch zwaar en nadien energie-opslaand — verandert de capaciteit van de pees; manuele technieken moduleren pijn en behandelen bijkomende beperkingen in de keten (talocrurale dorsiflexie, kuitextensibiliteit, heupextensie). <strong>Het subtype stuurt het beleid</strong>: bij de insertionele variant is compressie tegen de calcaneus het probleem, waardoor eindstandige dorsiflexierek en rek-dominante technieken contraproductief zijn.',
  technieken:[
    {naam:'Talocrurale anterieur-posterieure glijmobilisatie', fase:'Fase 2–3', doel:'Herstel van dorsiflexie zodat de kuit-pees-eenheid over een normale ROM belast kan worden.', uitvoering:'Rugligging of belast in lunge. Posterieure translatie van de talus onder de tibia, graad III. Belaste uitvoering als mobilization with movement met een niet-elastische band rond de distale tibia terwijl de patiënt de knie over de tenen brengt.', dosering:'3 × 10 herhalingen, aansluitend belast oefenen', let_op:'Indicatie is een objectief tekort op de weight-bearing lunge test (< 9–10 cm of asymmetrie > 1,5 cm); zonder tekort is er geen reden tot mobiliseren.'},
    {naam:'Weke-delenmobilisatie gastrocnemius en soleus', fase:'Fase 1–3', doel:'Tonusreductie van de kuitmusculatuur voorafgaand aan de krachtsessie.', uitvoering:'Buiklig, knie in lichte flexie. Langzame longitudinale en dwarse mobilisatie van de spierbuiken en de myotendineuze overgang, ruim boven de pijnlijke peeszone.', dosering:'3–5 min per zijde, voor de oefensessie', let_op:'Niet op de reactieve pees zelf werken — behandel spierweefsel, niet peesweefsel.'},
    {naam:'Mobilisatie van de subtalaire en midtarsale gewrichten', fase:'Fase 2–3', doel:'Verdelen van de dorsiflexie- en pronatiebeweging over de volledige voet in plaats van over de enkel alleen.', uitvoering:'Zijligging of ruglig: subtalair mediale en laterale glide, midtarsaal dorsale/plantaire glide van het naviculare en het cuboïd. Graad III, oscillerend.', dosering:'2 × 20 oscillaties per richting', let_op:'Alleen bij aangetoonde segmentale stijfheid, niet routinematig bij elke achillespeesklacht.'},
    {naam:'Neurodynamische mobilisatie n. tibialis', fase:'Fase 2–3', doel:'Uitsluiten en behandelen van een neurale component bij diffuse, brandende of nachtelijke kuitklachten.', uitvoering:'Straight leg raise met dorsiflexie en eversie als basispositie; slidertechniek via afwisselend knie-extensie en enkeldorsiflexie, ver buiten de symptoomprovocatie.', dosering:'2 × 10 sliders, dagelijks toepasbaar', let_op:'Sliders eerst; tensioners pas bij goede tolerantie. Een positieve neurodynamische test verandert de diagnose, niet enkel de techniek.'},
    {naam:'Mobilisatie van de heupextensie', fase:'Fase 3–4', doel:'Reduceren van de compensatoire kuitbelasting bij afzet tijdens lopen.', uitvoering:'Weke-delentechnieken op iliopsoas en rectus femoris, gecombineerd met actieve heupextensie in half-kniezit; eventueel posterieure-anterieure heupmobilisatie in buiklig.', dosering:'2–3 min per structuur, gevolgd door actief inoefenen', let_op:'Winst in mobiliteit die niet actief wordt ingeoefend, verdwijnt binnen enkele dagen.'},
    {naam:'Zware isometrische plantairflexie als pijnmodulatie', fase:'Fase 1–2', doel:'Directe pijndemping bij hoge prikkelbaarheid, als alternatief voor passieve technieken.', uitvoering:'Isometrische heel raise-houding tegen weerstand, 5 × 45 sec op circa 70% van de maximale inspanning. Strikt genomen geen manuele techniek, maar klinisch doorgaans effectiever dan passieve behandeling.', dosering:'5 × 45 sec, 1–2×/dag', let_op:'Bij de insertionele variant uitvoeren met de hiel op vlakke ondergrond of in lichte plantairflexie — niet over de rand van een trede.'}
  ],
  contraindicaties:[
    'Diepe dwarse frictie op een reactieve pees: geen aangetoonde meerwaarde en reële kans op toename van de prikkelbaarheid',
    'Insertionele variant: geen eindstandige dorsiflexierek of hielhang — de compressie tegen de calcaneus onderhoudt de klacht',
    'Corticosteroïdinjectie in of rond de pees in de voorbije weken: verhoogd ruptuurrisico, geen forcerende of zwaar belastende technieken',
    'Vermoeden van (partiële) achillespeesruptuur — palpabele delle, positieve Thompson-test, plots wegvallende afzetkracht: onmiddellijke medische verwijzing',
    'Fluorochinolonengebruik of inflammatoire systeemaandoening met peesbetrokkenheid: voorzichtige progressie, geen hooggradige rek'
  ],
  evidentie:'<strong>Progressieve belasting is de enige interventie met aangetoond structureel effect</strong> op de pees: excentrische programma&#39;s (Alfredson et al., 1998 — Am J Sports Med) en heavy slow resistance (Beyer et al., 2015 — Am J Sports Med) geven vergelijkbare, klinisch relevante verbetering, waarbij HSR een hogere therapietrouw haalt. Voor de <strong>insertionele variant</strong> toonden Jonsson et al. (2008 — Br J Sports Med) dat excentrische training beperkt tot een pijnvrije ROM zonder hielhang betere resultaten geeft, wat de compressiehypothese ondersteunt. Het <strong>continuümmodel</strong> van Cook en Purdam (2009 — Br J Sports Med) verklaart waarom een reactieve pees slecht reageert op mechanische prikkeling zoals diepe frictie. Overzichten van het conservatieve beleid (Silbernagel et al., 2020 — J Athl Train) plaatsen manuele therapie consequent als <strong>ondersteunende maatregel</strong> naast belastingsopbouw en belastingsmanagement, niet als zelfstandige behandeling. Manuele therapie behoudt wel waarde bij een <strong>aantoonbaar dorsiflexietekort</strong>, dat de kuitbelasting bij lopen ongunstig verdeelt.'
};

MANUEEL.enkel = {
  intro:'Na een laterale enkeldistorsie is manuele therapie <strong>een van de sterkst onderbouwde indicaties</strong> in het hele voet-enkeldomein. Een dorsiflexietekort door een verplaatste, posterieur beperkte talusglide is een frequent en manueel goed behandelbaar gevolg, en het herstel ervan is bepalend voor normale afwikkeling, hurken en landen. <strong>Vroege mobilisatie en vroege belasting</strong> presteren beter dan immobilisatie — maar pas na correcte fractuurscreening met de Ottawa Ankle Rules.',
  technieken:[
    {naam:'Talocrurale anterieur-posterieure glijmobilisatie', fase:'Fase 2–3', doel:'Herstel van de posterieure talusglide en daarmee van de dorsiflexie.', uitvoering:'Rugligging, hiel gefixeerd, distale onderbeen ondersteund. Posterieure translatie van de talus ten opzichte van de tibia, graad III–IV, in toenemende dorsiflexie. Onbelast starten, snel overgaan naar belaste uitvoering.', dosering:'3 × 30 sec of 3 × 10 oscillaties, 2–3×/week', let_op:'Dit is de kerntechniek na een distorsie. Effect steeds meten met de weight-bearing lunge test, voor en na.'},
    {naam:'Mobilization with Movement — belaste dorsiflexie (Mulligan)', fase:'Fase 2–4', doel:'Onmiddellijke, functionele dorsiflexiewinst onder belasting.', uitvoering:'Patiënt in lunge met de voet op een bankje. Niet-elastische band rond de distale tibia geeft een anterieur-posterieure tibiaglide (relatief posterieure talusglide) terwijl de patiënt de knie actief over de tenen brengt. Strikt pijnvrij.', dosering:'3 × 6–10 herhalingen, 2–3×/week', let_op:'Het pijnvrij-principe is bindend: pijn betekent verkeerde richting of dosering, niet meer kracht.'},
    {naam:'Distale tibiofibulaire mobilisatie', fase:'Fase 2–3', doel:'Herstel van de fibulapositie en -beweging bij aanhoudende laterale pijn en dorsiflexiebeperking.', uitvoering:'Rugligging, anterieur-posterieure glide van de laterale malleolus ten opzichte van de tibia, graad III, eventueel als MWM met posterieure fibulaglide tijdens actieve dorsiflexie.', dosering:'2 × 20 oscillaties', let_op:'Bij een hoog letselmechanisme (externe rotatie, dwangstand) eerst syndesmoseletsel uitsluiten met squeeze- en externe rotatietest.'},
    {naam:'Subtalaire en midtarsale mobilisatie', fase:'Fase 3–4', doel:'Herstel van in- en eversie en van een soepele afwikkeling.', uitvoering:'Zijligging: subtalaire mediale en laterale glide met distractie; midtarsaal dorsale en plantaire glide van cuboïd en naviculare. Graad III.', dosering:'2 × 20 oscillaties per richting', let_op:'Vaak onderbelicht na een distorsie, terwijl de restklachten bij hurken en op oneffen terrein hier hun oorsprong vinden.'},
    {naam:'Oedeem- en weke-delenbehandeling laterale enkel', fase:'Fase 1–2', doel:'Reductie van zwelling en van de bewegingsbeperking die daaruit volgt.', uitvoering:'Manuele lymfdrainagegerichte strijkingen distaal naar proximaal, hooghouding, gecombineerd met actieve pompoefeningen en compressie.', dosering:'5–10 min, dagelijks in de eerste week', let_op:'Ondersteunend bij de zwelling; het herstel komt van vroege belasting en actieve beweging, niet van passieve drainage.'},
    {naam:'Proprioceptieve facilitatie met manuele sturing', fase:'Fase 3–4', doel:'Overbrengen van de gewonnen mobiliteit naar actieve controle.', uitvoering:'Manuele weerstand en tactiele sturing tijdens eenbenige stand, reikoefeningen en landingen; therapeut corrigeert de kanteling van de calcaneus en de knie-over-teen-lijn.', dosering:'2 × 10 herhalingen per taak', let_op:'Mobilisatie zonder aansluitende neuromusculaire training voorkomt geen recidief; het recidiefrisico blijft de belangrijkste uitkomstmaat.'}
  ],
  contraindicaties:[
    'Positieve Ottawa Ankle Rules (drukpijn op de posterieure rand of punt van een malleolus, op os naviculare of basis MT V, of onvermogen om 4 stappen te zetten) — eerst radiografie, geen mobilisatie',
    'Vermoeden van syndesmoseletsel of maisonneuve-fractuur (proximale fibulapijn): geen forcerende technieken, medische beeldvorming',
    'Graad III-letsel binnen de beschermingsperiode: geen eindstandige inversierek of forcerende laterale technieken',
    'Aanhoudend hevige zwelling met spanningsblaren of neurovasculaire uitval — verdenking compartimentsyndroom, dringende verwijzing',
    'Osteochondraal letsel van de talus (blokkeringsgevoel, slotklachten, aanhoudende diepe pijn): mobiliseren zonder beeldvorming is niet aangewezen'
  ],
  evidentie:'<strong>Manuele mobilisatie van de talocrurale gewrichtsspleet heeft consistente ondersteuning</strong> voor het herstel van dorsiflexie na een distorsie: systematische reviews van gewrichtsmobilisatie bij acute en chronische enkelletsels rapporteren winst in dorsiflexie-ROM en pijndaling, met de sterkste effecten voor de anterieur-posterieure talusglide en mobilization with movement (Weerasekara et al., 2018 — Arch Phys Med Rehabil; Vicenzino et al., 2006 — J Orthop Sports Phys Ther). De <strong>Ottawa Ankle Rules</strong> hebben een sensitiviteit die een fractuur vrijwel uitsluit bij een negatieve test en verminderen het aantal onnodige radiografieën aanzienlijk (Bachmann et al., 2003 — BMJ); ze horen bij elk eerste contact. <strong>Vroege functionele behandeling met belasting</strong> is superieur aan immobilisatie en versnelt de werk- en sporthervatting (Kerkhoffs et al., 2012 — Br J Sports Med), en gesuperviseerde oefentherapie verlaagt het recidiefrisico. Manuele therapie is hier dus geen adjuvans van tweede rang, maar wel steeds <strong>een opstap naar actieve belasting en neuromusculaire training</strong> — de mobiliteitswinst moet binnen dezelfde sessie functioneel worden ingeoefend.'
};

MANUEEL.over = {
  intro:'Bij overpronatie is manuele therapie <strong>gericht op aangetoonde mobiliteitsbeperkingen</strong>, niet op het corrigeren van een voetstand. De klinisch relevante beperkingen zitten meestal in de eerste straal (dorsiflexie van het MTP-1 en van het eerste tarsometatarsale gewricht), in het midtarsale complex en subtalair. <strong>Wees eerlijk over de causaliteit</strong>: de relatie tussen voetstand en klachten is zwakker dan lang werd aangenomen, en de behandeling richt zich op symptomen, belastingtolerantie en controle — niet op een gemeten hoek.',
  technieken:[
    {naam:'Mobilisatie van het eerste metatarsofalangeale gewricht', fase:'Fase 1–2', doel:'Herstel van de dorsiflexie van de hallux voor een normale afzet (windlass-mechanisme).', uitvoering:'Rugligging of zit. Distractie van de proximale falanx, gevolgd door dorsale en plantaire glide, graad III, in toenemende dorsiflexie. Aansluitend actieve hallux-extensie in stand.', dosering:'3 × 30 sec of 2 × 20 oscillaties, 2–3×/week', let_op:'Minder dan circa 30–40° passieve hallux-dorsiflexie belemmert het windlass-mechanisme; check dit steeds belast, niet alleen in ruglig.'},
    {naam:'Mobilisatie van de eerste straal (TMT-1 en cuneiforme mediale)', fase:'Fase 1–3', doel:'Herstel van de plantairflexie/dorsiflexiemobiliteit van de eerste straal die de mediale steun bij afzet mee bepaalt.', uitvoering:'Fixatie van het mediale cuneiforme, dorsale en plantaire translatie van het eerste os metatarsale. Graad III, oscillerend, in beide richtingen getest en behandeld.', dosering:'2 × 20 oscillaties per richting', let_op:'Een hypermobiele eerste straal komt evenzeer voor als een stijve — test eerst, mobiliseer daarna. Bij hypermobiliteit is stabiliseren en niet mobiliseren aangewezen.'},
    {naam:'Midtarsale mobilisatie (cuboïd en naviculare)', fase:'Fase 2–3', doel:'Verdelen van de belasting over de middenvoet en verbeteren van de afwikkeling.', uitvoering:'Buiklig of zijligging. Dorsale/plantaire glide van cuboïd en naviculare met de voet in neutrale subtalaire positie; eventueel cuboïd-techniek bij lokale laterale drukpijn.', dosering:'2 × 20 oscillaties per gewricht', let_op:'Alleen bij lokale drukpijn en aangetoonde segmentale stijfheid; niet als standaardbehandeling van elke platvoet.'},
    {naam:'Subtalaire mobilisatie en positionering', fase:'Fase 2–3', doel:'Herstel van de in- en eversiemobiliteit zodat de voet actief tussen pronatie en supinatie kan schakelen.', uitvoering:'Zijligging, distractie van de calcaneus ten opzichte van de talus, gevolgd door mediale en laterale glide. Aansluitend actieve controle-oefening (short foot, hiellift in neutrale stand).', dosering:'3 × 30 sec distractie, 2 × 20 glides', let_op:'Bij een rigide platvoet (geen correctie bij tenenstand of bij Jack-test) is de mobiliteit beperkt door botstructuur — denk aan tarsale coalitie en verwijs.'},
    {naam:'Weke-delenmobilisatie tibialis posterior en peroneï', fase:'Fase 2–3', doel:'Tonusnormalisatie van de dynamische stabilisatoren van de mediale boog.', uitvoering:'Buiklig, knie in flexie. Longitudinale en dwarse mobilisatie van het spierbuikgedeelte van de tibialis posterior en van de peroneï, met aansluitende actieve activatie in belasting.', dosering:'3–5 min per zijde, gevolgd door krachtwerk', let_op:'Bij pijn en zwelling achter de mediale malleolus met een positieve single leg heel raise-test: denk aan tibialis posterior-dysfunctie, een ander en ernstiger beeld.'},
    {naam:'Mobilisatie van de talocrurale dorsiflexie', fase:'Fase 1–3', doel:'Wegnemen van een dorsiflexietekort dat compensatoire pronatie in de middenvoet uitlokt.', uitvoering:'Anterieur-posterieure talusglide, bij voorkeur belast als mobilization with movement in lunge-positie met de hiel op de grond.', dosering:'3 × 10 herhalingen, aansluitend belast oefenen', let_op:'Klinisch een van de meest relevante bevindingen: een stijve enkel dwingt de voet tot doorzakken in de middenvoet bij afwikkeling.'}
  ],
  contraindicaties:[
    'Rigide platvoet zonder correctie bij tenenstand of Jack-test — verdenking tarsale coalitie: geen forcerende mobilisatie, verwijzing voor beeldvorming',
    'Symptomatische tibialis posterior-dysfunctie met progressieve valgusstand van de hiel: geen mobiliserende insteek maar bescherming, orthese en gerichte krachttraining',
    'Gegeneraliseerde hypermobiliteit (Beighton-score hoog): mobiliseren verergert de instabiliteit — stabiliseer in plaats daarvan',
    'Accessoir os naviculare of actieve apofysitis calcanei bij kinderen: geen druk of tractie op de pijnlijke aanhechting',
    'Neuropathische voet (diabetes met sensibiliteitsverlies): grote voorzichtigheid, risico op onopgemerkt weefselletsel'
  ],
  evidentie:'De veronderstelde causale keten tussen een <strong>overpronerende voetstand en blessures is zwakker dan klassiek aangenomen</strong>: prospectief onderzoek bij beginnende lopers vond geen hoger blessurerisico bij een pronerende voetstand met neutrale schoenen (Nielsen et al., 2014 — Br J Sports Med), en een meta-analyse van voetstand als risicofactor voor overbelastingsletsel van de onderste ledematen vond hooguit een klein effect (Neal et al., 2014 — J Foot Ankle Res). Behandel dus <strong>de klacht en de belastingtolerantie</strong>, niet de hoek. Wat wél onderbouwd is: gerichte <strong>krachttraining van de intrinsieke voetspieren en de tibialis posterior</strong> verbetert functie en klachten (Kulig et al., 2009 — Phys Ther), en voetorthesen kunnen bij bepaalde klachtenbeelden pijn verminderen zonder dat een structurele standscorrectie noodzakelijk is. Manuele therapie is hier <strong>ondergeschikt en selectief</strong>: zinvol bij een aangetoonde beperking van de hallux-dorsiflexie, de eerste straal, het midtarsale complex of de enkeldorsiflexie, en telkens gevolgd door actieve inoefening.'
};

MANUEEL.mtss = {
  intro:'Mediaal tibiaal stresssyndroom is een <strong>botbelastingsprobleem</strong> — een stressreactie van de tibiale cortex bij een remodeling die achterloopt op de belasting — en geen weke-delenaandoening. Manuele therapie behandelt daarom hoogstens <strong>bijkomende beperkingen</strong> (enkeldorsiflexie, kuitextensibiliteit, heupmobiliteit); <strong>belastingsmanagement is bepalend</strong> voor het herstel. Wie hier vooral masseert en fricties geeft, behandelt het verkeerde weefsel en verliest tijd.',
  technieken:[
    {naam:'Talocrurale dorsiflexiemobilisatie', fase:'Fase 2–3', doel:'Wegnemen van een dorsiflexietekort dat de tibiale belasting bij afwikkeling en landing verhoogt.', uitvoering:'Anterieur-posterieure talusglide, onbelast graad III en vervolgens belast als mobilization with movement in lunge-positie.', dosering:'3 × 10 herhalingen, gevolgd door belast oefenen', let_op:'Indicatie enkel bij een objectief tekort op de weight-bearing lunge test; anders overslaan.'},
    {naam:'Weke-delenmobilisatie soleus en tibialis posterior', fase:'Fase 1–2', doel:'Reductie van de tonus en de drukpijn van de diepe posterieure loge langs de mediale tibiarand.', uitvoering:'Buiklig, knie in 30–45° flexie voor ontspanning van de gastrocnemius. Langzame longitudinale mobilisatie van de spierbuik, met vermijding van rechtstreekse druk op de pijnlijke tibiale periostrand.', dosering:'3–5 min per zijde, 2×/week', let_op:'Symptomatisch en kortdurend van effect. Geen diepe frictie op de tibiarand: dat provoceert het gevoelige periost zonder het botprobleem te beïnvloeden.'},
    {naam:'Kuitrekking met manuele sturing', fase:'Fase 1–3', doel:'Vergroten van de extensibiliteit van gastrocnemius en soleus als beperkende factor voor de afwikkeling.', uitvoering:'Gestrekte en gebogen knie-variant tegen de muur of op een helling; therapeut stuurt de subtalaire stand naar neutraal zodat de rek niet in de middenvoet wegvalt.', dosering:'3 × 30–45 sec per variant, dagelijks', let_op:'Rekken alleen verlaagt de tibiale belasting niet — het is een aanvulling op de opbouw van de kuitkracht, niet de behandeling.'},
    {naam:'Midtarsale en subtalaire mobilisatie', fase:'Fase 2–3', doel:'Herstel van de voetmobiliteit zodat schokdemping niet volledig op de tibia terechtkomt.', uitvoering:'Subtalaire distractie en glides in zijligging, midtarsaal dorsale/plantaire glide van naviculare en cuboïd, graad III.', dosering:'2 × 20 oscillaties per richting', let_op:'Alleen bij aangetoonde stijfheid; het effect op de klacht is indirect en bescheiden.'},
    {naam:'Heupmobilisatie en weke-delenwerk gluteus medius', fase:'Fase 2–3', doel:'Verbeteren van de proximale controle die de landingsbelasting op het onderbeen mee bepaalt.', uitvoering:'Posterieure-anterieure heupmobilisatie in buiklig, weke-delentechnieken op de gluteus medius en de tensor fasciae latae, gevolgd door actieve abductie- en eenbenige controle-oefeningen.', dosering:'2–3 min per structuur, gevolgd door krachtwerk', let_op:'De winst zit in de aansluitende actieve training, niet in de passieve techniek zelf.'},
    {naam:'Manuele sturing bij looptechniek en cadansaanpassing', fase:'Fase 3–4', doel:'Verlagen van de piekbelasting op de tibia bij de loophervatting.', uitvoering:'Tactiele sturing en manuele weerstand bij loopscholing; verhogen van de pasfrequentie met circa 5–10% en verkorten van de stap, met feedback op landingsgeluid en overstriding.', dosering:'2 × 5 min per sessie tijdens de loopopbouw', let_op:'Verandering van looppatroon vergt weken van geleidelijke gewenning en moet samengaan met een gedoseerd loopschema.'}
  ],
  contraindicaties:[
    'Verdenking tibiale stressfractuur (scherp gelokaliseerde puntpijn over enkele centimeters, nachtpijn, pijn bij hinken of bij percussie, aanhoudende pijn in rust) — geen belastende technieken, medische beeldvorming en volledige belastingsaanpassing',
    'Verdenking chronisch belastingsgebonden compartimentsyndroom (drukkende, opzwellende pijn die na een vaste inspanningsduur optreedt, met tintelingen of voetheffersverlies en snelle verdwijning bij stoppen) — verwijzing voor drukmeting; mobiliseren is zinloos',
    'Diepe frictie of sterke druk rechtstreeks op de pijnlijke mediale tibiarand: provocatie van het periost zonder therapeutisch effect',
    'Vermoeden van diepveneuze trombose bij eenzijdige zwelling, warmte en kuitpijn zonder duidelijk belastingsmechanisme — geen manuele behandeling, dringend medisch nazicht',
    'Onderliggende risicofactoren voor botfragiliteit (relatief energietekort, amenorroe, eetstoornis) — eerst medische opvolging; verdere belastingsopbouw is dan niet veilig'
  ],
  evidentie:'MTSS is een <strong>overbelastingsreactie van het bot</strong> langs de posteromediale tibiarand; beeldvorming toont periostale en medullaire signaalveranderingen op een continuüm richting stressfractuur (Moen et al., 2009 — Sports Med). Systematische reviews van behandelingen vonden <strong>geen enkele modaliteit met overtuigende meerwaarde</strong> boven relatieve rust en geleidelijke belastingsopbouw: rekken, ijs, ultrageluid en manuele technieken haalden in de beschikbare studies geen consistent effect (Winters et al., 2013 — Sports Med). De belangrijkste beïnvloedbare risicofactoren zijn een <strong>hoge en snel opgebouwde loopbelasting</strong>, een eerdere episode van MTSS, een verhoogde BMI en een grotere navicular drop (Newman et al., 2013 — Open Access J Sports Med). De klinische conclusie is helder: <strong>graded loading stuurt het herstel</strong>, en manuele therapie behandelt uitsluitend de bijkomende beperkingen die de belasting ongunstig verdelen. Het <strong>differentieel diagnostisch onderscheid</strong> met een tibiale stressfractuur (puntpijn over een klein gebied, pijn in rust of &#39;s nachts) en met chronisch belastingsgebonden compartimentsyndroom (reproduceerbare pijn na een vaste inspanningsduur, met neurologische bijverschijnselen) hoort in elke evaluatie thuis.'
};

MANUEEL.pfa = {
  intro:'Bij plantaire fasciopathie is manuele therapie <strong>een adjuvans naast progressieve, hoge belasting</strong> van de plantaire fascie en de kuit. Weke-delenmobilisatie van de fascie en de kuitmusculatuur, gecombineerd met gewrichtsmobilisatie van enkel en hallux, kan de pijn op korte termijn verlagen en de rekbaarheid verbeteren; de duurzame verandering komt van krachttraining. <strong>De klassieke hielspoor-verklaring is achterhaald</strong>: het gaat om een degeneratieve, niet-inflammatoire fasciopathie, en een calcaneale spoor komt frequent voor bij mensen zonder enige klacht.',
  technieken:[
    {naam:'Weke-delenmobilisatie van de plantaire fascie', fase:'Fase 1–2', doel:'Verminderen van de lokale drukpijn en verbeteren van de rekbaarheid van de fascie.', uitvoering:'Zit of buiklig met de hallux in dorsiflexie (windlass-positie), waardoor de fascie zich aanspant. Langzame longitudinale strijkingen en dwarse mobilisatie van mediale calcaneusaanhechting naar de voorvoet, matige druk.', dosering:'3–5 min, 2–3×/week, voor de oefensessie', let_op:'Matig doseren: te agressieve druk op de mediale calcaneale aanhechting verhoogt de ochtendpijn de dag nadien.'},
    {naam:'Kuitmobilisatie gastrocnemius en soleus', fase:'Fase 1–3', doel:'Aanpakken van de kuitstijfheid die de tractie op de fascieaanhechting verhoogt.', uitvoering:'Buiklig, knie gestrekt en vervolgens in 30° flexie om beide componenten te bereiken. Longitudinale en dwarse mobilisatie van de spierbuiken, aansluitend rek in beide knieposities.', dosering:'3–5 min per zijde plus 3 × 30–45 sec rek', let_op:'Beperkte enkeldorsiflexie is een van de best gedocumenteerde geassocieerde factoren; meet ze en volg ze op.'},
    {naam:'Fascie-specifieke rek (DiGiovanni)', fase:'Fase 1–2', doel:'Directe rek van de plantaire fascie, met de sterkste evidentie voor de ochtendpijn.', uitvoering:'Zit, het aangedane been over de andere knie. Met de hand alle tenen passief in dorsiflexie trekken tot spanning voelbaar is langs de plantaire boog; palpeer de gespannen fascie ter controle.', dosering:'10 × 10 sec, 3×/dag — eerste reeks vóór de eerste stappen uit bed', let_op:'Effectiever dan de klassieke kuitrek voor de typische opstartpijn; leer de patiënt zelf de gespannen band te voelen.'},
    {naam:'Talocrurale dorsiflexiemobilisatie', fase:'Fase 1–3', doel:'Herstel van de dorsiflexie zodat de fascie bij afwikkeling minder tractie ondergaat.', uitvoering:'Anterieur-posterieure talusglide, graad III, onbelast en aansluitend belast als mobilization with movement in lunge-positie.', dosering:'3 × 10 herhalingen, 2–3×/week', let_op:'Meten met de weight-bearing lunge test voor en na; zonder tekort geen indicatie.'},
    {naam:'Mobilisatie van het MTP-1 en de eerste straal', fase:'Fase 2–3', doel:'Herstel van de hallux-dorsiflexie die het windlass-mechanisme en de spanningsopbouw in de fascie aanstuurt.', uitvoering:'Distractie van de proximale falanx gevolgd door dorsale glide, graad III, in toenemende dorsiflexie; aansluitend actieve afzetoefening in stand.', dosering:'2 × 20 oscillaties, gevolgd door actief inoefenen', let_op:'Een beperkte hallux-dorsiflexie (hallux limitus) onderhoudt de klacht en wordt vaak over het hoofd gezien.'},
    {naam:'Taping als aanvulling bij de manuele sessie', fase:'Fase 1–2', doel:'Kortdurende pijnreductie door mechanische ondersteuning van de mediale boog.', uitvoering:'Low-dye of anti-pronatietape na de manuele behandeling, met de subtalaire stand in neutraal en de mediale boog ondersteund.', dosering:'Enkele dagen per applicatie, in de pijnlijkste fase', let_op:'Overbruggingsmaatregel met kortdurend effect; niet in de plaats van de krachtopbouw.'}
  ],
  contraindicaties:[
    'Corticosteroïdinjectie in de plantaire fascie in de voorbije weken: verhoogd risico op fascieruptuur en op vetkussenatrofie — geen forcerende technieken of diepe druk',
    'Verdenking calcaneale stressfractuur (positieve squeeze-test van de calcaneus, nachtpijn, pijn bij elke stap): geen belastende technieken, medische beeldvorming',
    'Neurologische presentatie met tintelingen, brandende pijn of nachtelijke uitstraling — verdenking compressie van de n. plantaris lateralis (Baxter) of tarsaal tunnelsyndroom: andere behandelweg',
    'Bilaterale hielpijn bij een jonge patiënt met ochtendstijfheid elders of inflammatoire rugklachten — verdenking spondyloartropathie: medische evaluatie vóór lokale behandeling',
    'Apofysitis calcanei (ziekte van Sever) bij kinderen met open groeischijf: geen tractie of druk op de apofyse'
  ],
  evidentie:'<strong>High-load krachttraining is de kerninterventie</strong>: Rathleff et al. (2015 — Scand J Med Sci Sports) toonden dat progressieve zware hiellifts met een handdoek onder de tenen (windlass-positie) na 3 maanden een duidelijk betere functiescore gaven dan een rekprotocol alleen. <strong>Fascie-specifieke rek</strong> presteert beter dan de klassieke achillespeesrek voor de typische opstartpijn (DiGiovanni et al., 2003 — J Bone Joint Surg Am), met behoud van effect op langere termijn. De <strong>klinische richtlijn voor hielpijn</strong> (Martin et al., 2014 — J Orthop Sports Phys Ther) geeft manuele therapie, rek, taping en orthesen een ondersteunende plaats naast oefentherapie en patiënteneducatie. De term <strong>fasciitis is misleidend</strong>: histologisch gaat het om degeneratieve verandering zonder relevante ontstekingscomponent, en de <strong>calcaneale spoor is geen oorzakelijke factor</strong> — hij komt frequent voor bij klachtenvrije personen en verdwijnt niet bij herstel. Manuele therapie hoort in dit beeld thuis als <strong>pijnmodulerende opstap</strong> naar belasting, met een expliciete uitleg aan de patiënt dat de herstelduur in maanden en niet in weken wordt gerekend.'
};
