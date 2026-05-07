// KineProtocol — Data: protocols, uitkomstmaten, beslisbomen, formulieren, evaluatieformulieren

const protocols = {

  acl:{id:'acl',title:'ACL Reconstructie',subtitle:'Postoperatief revalidatieprotocol voor VKB-reconstructie (BPTB / STG / QT)',color:'#22d3ee',
    phases:[
      {label:'Fase 1',title:'Vroeg Postoperatief',weeks:'Week 0–2',
       evidence:'Vroege volle ROM en gewichtsdragen zijn geassocieerd met betere uitkomsten. <strong>Quadriceps inhibitie</strong> door artrogene spierinhibitie (AMI) is de grootste limiterende factor. Vroege neuromotorische activatie is prioritair (Rice et al., 2019).',
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
       evidence:'Graftligamentisatie nog niet voltooid. <strong>CKC-oefeningen</strong> veiliger dan OKC. Quad LSI betere indicator dan tijd (van Melick et al., 2016). <strong>Isometrische quad aan 60°</strong> veilig (Heijne & Werner, 2021).',
       goals:['Volledige ROM (0–135°+)','Normaal looppatroon','Quad LSI ≥ 60%','Fietsen op stationaire fiets','Basale proprioceptie','Geen effusie na activiteit'],
       exercises:[
         {name:'Stationaire fiets',params:[['Duur','10–20 min'],['Weerstand','laag'],['Freq','dagelijks']],note:'Start hoog zadel, verlaag progressief.',cat:'cardio'},
         {name:'Mini-squat (0–45°)',params:[['Reps','12–15'],['Sets','3'],['Tempo','3-1-3']],note:'Bilateraal. Controleer valgus. Progressief dieper.',cat:'kracht'},
         {name:'Beenpers bilateraal',params:[['Reps','10–12'],['Sets','3–4'],['Belasting','60–75% 1RM']],note:'CKC, laag shear op graft.',cat:'kracht'},
         {name:'Isometrische knie-extensie (60°)',params:[['Reps','5–8'],['Hold','5 sec'],['Sets','3']],note:'Veilig op graft bij 60° (Heijne & Werner 2021).',cat:'kracht'},
         {name:'Step-up anterieur (10 cm)',params:[['Reps','10–15'],['Sets','3']],note:'Functioneel CKC. Controleer knietracking.',cat:'kracht'},
         {name:'Enkel-been balans',params:[['Duur','30–60 sec'],['Sets','3'],['Ogen','open → gesloten']],note:'Progressie: schuimmat → perturbed surface.',cat:'stabiliteit'}],
       criteria_go:['ROM 0–130°','Normaal lopen','Quad LSI ≥ 60%','SLS 30° zonder valgus','Geen effusie na 30 min'],
       criteria_stop:['LSI < 60% na 6 wkn → NMES/BFR','ROM-stagnatie → manuele therapie'],redflags:[]},
      {label:'Fase 3',title:'Functioneel Herstel',weeks:'Week 6–12',
       evidence:'<strong>OKC knie-extensie</strong> veilig vanaf week 4–6 in 90–40° (Fukuda et al., 2013). <strong>BFR training</strong> bij quad-hypotrofie (Hughes et al., 2019). LSI ≥ 80% voor jogging.',
       goals:['Quad LSI ≥ 80%','Hamstring LSI ≥ 80%','SLS technisch correct','Lateral step-down zonder compensatie','ACL-RSI ≥ 56/100'],
       exercises:[
         {name:'Unilateraal been-press',params:[['Reps','8–10'],['Sets','4'],['Belasting','70–85% 1RM']],note:'Prioriteitsoefening voor LSI.',cat:'kracht'},
         {name:'OKC Knie-extensie (90–40°)',params:[['Reps','10–12'],['Sets','3–4']],note:'Beperkt ROM. Uitbreiden na week 10–12.',cat:'kracht'},
         {name:'RDL unilateraal',params:[['Reps','8–10'],['Sets','3']],note:'Bij STG-graft uitstellen tot week 10–12.',cat:'kracht'},
         {name:'BFR Quadriceps',params:[['Reps','30-15-15-15'],['Druk','60–80% LOP']],note:'Bij LSI-stagnatie < 70%.',cat:'kracht'},
         {name:'Lateral step-down (20 cm)',params:[['Reps','10–15'],['Sets','3']],note:'Meetinstrument én oefening.',cat:'kracht'},
         {name:'Proprioceptie instabiel vlak',params:[['Duur','45 sec'],['Sets','3–5']],note:'BOSU → ogen gesloten → dubbeltaak.',cat:'stabiliteit'}],
       criteria_go:['Quad LSI ≥ 80%','Hamstring LSI ≥ 80%','Geen effusie','SLS zonder valgus','≥ 12 weken postop'],
       criteria_stop:['LSI < 70% → BFR','ACL-RSI < 40 → psychologische begeleiding'],redflags:[]},
      {label:'Fase 4',title:'Looptraining & Plyometrie',weeks:'Week 12–20',
       evidence:'<strong>Plyometrie in 4 stadia</strong> (Buckthorpe & Roi, 2017). <strong>LSI ≥ 90%</strong> voor return to training (Grindem et al., 2016).',
       goals:['Continu joggen 20–30 min','Plyometrisch stadium 1–3 voltooid','LSI plyometrie ≥ 85–90%','Quad LSI ≥ 90%'],
       exercises:[
         {name:'Jog-walk protocol',params:[['Duur','20 min'],['Verhouding','1 min jog / 1 min walk']],note:'Week 12–13. Snelheid ~7–8 km/u.',cat:'cardio'},
         {name:'Continu joggen',params:[['Opbouw','10 → 20 → 30 min'],['Freq','3×/week']],note:'10%-regel. Bochten na 2 weken rechte lijn.',cat:'cardio'},
         {name:'Bipodale + unipodale opvang',params:[['Reps','8–10 → 6–8/been'],['Sets','3']],note:'Week 12–16. Zachte landing, geen valgus.',cat:'neuro'},
         {name:'Laterale sprongen + SSC',params:[['Vb','skater jumps, depth jump'],['RSI','meten']],note:'Week 16–20. RSI = hoogte/contacttijd.',cat:'neuro'}],
       criteria_go:['Continu joggen 30 min','LSI RSI ≥ 85%','Quad LSI ≥ 90%'],
       criteria_stop:['Pijn bij jogging > VAS 3 → fase 3 consolideren'],redflags:[]},
      {label:'Fase 5',title:'Return to Sport',weeks:'Mnd 5–12',
       evidence:'RTS vóór 9 maanden verhoogt herletselrisico met factor 4–6 (Grindem et al., 2016). Minimum <strong>9–12 maanden</strong> sterk aanbevolen.',
       goals:['Hop-testbatterij LSI ≥ 90%','Quad + Ham LSI ≥ 90%','ACL-RSI ≥ 65/100','IKDC ≥ 85/100','Minimum 9 maanden postoperatief'],
       exercises:[
         {name:'Single Leg Hop + Triple Hop + 6m Timed',params:[['LSI','≥ 90%']],note:'Volledige hop-testbatterij vóór RTS.',cat:'test'},
         {name:'FIFA 11+ (preventie)',params:[['Duur','20 min'],['Freq','elk trainingsmoment']],note:'50% reductie herletsel (Silvers-Granelli 2015).',cat:'neuro'},
         {name:'Nordic Hamstring (onderhoud)',params:[['Reps','6–8'],['Freq','1–2×/week']],note:'Levenslang onderhoud.',cat:'kracht'}],
       criteria_go:['Hop LSI ≥ 90%','ACL-RSI ≥ 65','IKDC ≥ 85','≥ 9 maanden'],
       criteria_stop:['ACL-RSI < 50 → psycholoog'],
       redflags:['Nieuwe instabiliteitsepisode → stop sport, evalueer ACL','Contralateraal risico 3–6× verhoogd → bilateraal preventief programma']}
    ],
    refs:'van Melick et al. (2016) — Evidence-based ACL rehabilitation. BJSM. | Grindem et al. (2016) — Decision rules reduce reinjury risk 84%. BJSM. | Hughes et al. (2019) — BFR training after ACL. J Strength Cond Res.'},

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
    refs:'Artz et al. (2015) — Physiotherapy after TKR. BMC Musculoskeletal Disorders. | Jakobsen et al. (2014) — Preoperative quad strength predicts TKA outcome. J Bone Joint Surg. | Kehlet & Thienpont (2013) — Fast-track knee arthroplasty. Bone Joint J.'},

  pfps:{id:'pfps',title:'Patellofemoraal Pijnsyndroom',subtitle:'Multifactorieel protocol met subclassificatie, heupfocus en gait retraining',color:'#f97316',
    phases:[
      {label:'Diagnostiek',title:'Diagnostiek & Subclassificatie',weeks:'Vóór behandelstart',
       evidence:'PFPS is een <strong>klinische diagnose</strong> (Witvrouw et al., 2014). Geen beeldvorming vereist in eerste lijn.',
       goals:["Clarke's, patellar grind, SLS uitvoeren",'Differentiaaldiagnose uitsluiten','Subtype bepalen: heup / quad / biomechanisch / loper','Baseline Kujala + VISA-P afnemen'],
       exercises:[
         {name:"Clarke's test",params:[['Sens','matig'],['Spec','laag']],note:'Nooit als enige test.'},
         {name:'Single Leg Squat (provocatie)',params:[['ROM','30–60°'],['Observeer','valgus, bekken, romp']],note:'Goudstandaard. Correleert met heupabductorzwakte.',cat:'test'},
         {name:'Heupabductorkracht (dynamo)',params:[['Positie','zijlig, 0° heupflexie']],note:'Essentieel voor behandelplanning.',cat:'test'},
         {name:'Patellatilt test',params:[['Normaal','laterale rand ≥ horizontaal']],note:'Informeert taping/orthotics keuze.',cat:'test'}],
       criteria_go:['Diagnose bevestigd','Subtype bepaald','Rode vlaggen uitgesloten'],
       criteria_stop:['Nachtpijn → RX','Ochtendstijfheid > 45 min → SpA'],
       redflags:['Nachtpijn + rustpijn: tumoraal uitsluiten','Koorts + warmte + zwelling: septische artritis → spoed']},
      {label:'Fase 1',title:'Pijnmanagement & Load',weeks:'Week 1–3',
       evidence:'<strong>Patellataping</strong> onmiddellijke pijnreductie (Barton et al., 2017). <strong>Voetorthesen</strong> bij pronatie (Collins et al., 2008). Load management centraal.',
       goals:['VAS ≤ 3/10','2-uursregel begrijpen','Activiteiten aanpassen','Eerste heup + quad activering'],
       exercises:[
         {name:'McConnell taping',params:[['Test','≥ 50% VAS-reductie']],note:'Test altijd pijneffect.',cat:'manueel'},
         {name:'Isometrische quad (60–70°)',params:[['Reps','5'],['Hold','45 sec'],['Sets','4']],note:'Reduceert corticale pijninhibitie (Rio et al., 2015).',cat:'kracht'},
         {name:'Zijlig heupabductie + clamshell',params:[['Reps','15–20'],['Sets','3'],['Freq','2×/dag']],note:'Eerste activering gluteus medius.',cat:'kracht'},
         {name:'Patiënteducatie (PNE)',params:[['Duur','15–20 min']],note:'Overbelastingsmodel, 2-uursregel, 6–12 weken herstel.',cat:'manueel'}],
       criteria_go:['VAS ≤ 3/10','Begrip belastingsprincipes'],
       criteria_stop:['Pijn neemt toe → dosering halveren'],redflags:[]},
      {label:'Fase 2',title:'Krachtopbouw Heup + Quad',weeks:'Week 3–8',
       evidence:'<strong>Heup + quad gecombineerd</strong> superieur (Lack et al., 2015 — meta-analyse n=690). Progressieve overload noodzakelijk (Rathleff et al., 2015).',
       goals:['Heup LSI ≥ 85%','Quad LSI ≥ 75%','SLS 30° zonder valgus','VAS ≤ 2/10','Kujala ≥ 70/100'],
       exercises:[
         {name:'Lateral band walk + hip thrust',params:[['Sets','3–4'],['Belasting','progressief']],note:'Hoeksteen heuptraining PFPS.',cat:'kracht'},
         {name:'Terminale knie-extensie (TKE)',params:[['Reps','15–20'],['Sets','3']],note:'VMO-selectieve activering (Peng et al., 2014).',cat:'kracht'},
         {name:'Wall squat isometrisch',params:[['Hoek','60–70°'],['Hold','30–45 sec'],['Sets','4']],note:'Stop bij > VAS 4.',cat:'stabiliteit'},
         {name:'Split squat + single leg RDL',params:[['Reps','8–12/been'],['Sets','3']],note:'Hoge functionele transfer.',cat:'kracht'},
         {name:'Side plank + dead bug',params:[['Hold','30–60 sec'],['Sets','3']],note:'Lumbopelvische stabiliteit.',cat:'stabiliteit'}],
       criteria_go:['SLS 30° zonder valgus','Heup LSI ≥ 85%','VAS ≤ 2/10','Kujala ≥ 70/100'],
       criteria_stop:['Pijn stijgt → dosering reduceren'],redflags:[]},
      {label:'Fase 3',title:'Functioneel & Gait',weeks:'Week 6–12',
       evidence:'<strong>Gait retraining</strong> reduceert PF-compressie met 20–30% (Willy et al., 2012). <strong>Stapfrequentie +10%</strong> meest bewezen interventie voor lopers (Neal et al., 2016).',
       goals:['Jogging 30 min VAS ≤ 2/10','Plyometrisch stadium 1+2 voltooid','Quad LSI ≥ 85%','Kujala ≥ 80/100'],
       exercises:[
         {name:'Stapfrequentie verhogen (+10%)',params:[['Tool','metronoom-app'],['Target','+5–10%']],note:'170 → 185 stap/min typisch.',cat:'neuro'},
         {name:'Heup-dominante loopstijl',params:[['Cue','"push from the hip"']],note:'Meer heupextensie = minder PF-compressie.',cat:'neuro'},
         {name:'Loopprogressie (10%-regel)',params:[['Start','2–3 km'],['Opbouw','10%/week']],note:'2-uursregel na elke run.',cat:'cardio'},
         {name:'Bipolale → unipolale sprongen',params:[['Reps','8–10 → 6–8/been'],['Sets','3']],note:'Knietracking bij landing.',cat:'neuro'}],
       criteria_go:['Jogging 30 min VAS ≤ 2/10','SLS 45° zonder valgus','Hop LSI ≥ 90%','Kujala ≥ 80/100'],
       criteria_stop:['Pijn > VAS 3 bij sport → fase 2 consolideren'],
       redflags:['Recidief na RTS → loopvolume-monitoring activeren']}
    ],
    refs:'Lack et al. (2015) — Hip-targeted physiotherapy superior for PFPS. BJSM. | Rathleff et al. (2015) — High-load training in PFPS. Scand J Med Sci Sports. | Barton et al. (2017) — Patellar taping. BJSM. | Willy et al. (2012) — Gait retraining. J Orthop Sports Phys Ther.'},

  lh:{id:'lh',title:'Lumbale Hernia',subtitle:'Conservatief en postoperatief revalidatieprotocol voor lumbale discushernia met radiculopathie',color:'#34d399',
    phases:[
      {label:'Fase 0',title:'Diagnostiek & Triage',weeks:'Week 0',
       evidence:'<strong>90% herstelt conservatief</strong> binnen 6–12 weken (Weber, 1983). <strong>MRI geen eerste-lijnsindicatie</strong> tenzij rode vlaggen (NICE 2021). <strong>SLR + slump</strong> meest sensitieve klinische testen (Deville et al., 2000).',
       goals:['Klinische diagnose + niveau bepalen (L4–L5 vs L5–S1)','Rode vlaggen screenen','Neurologisch onderzoek: reflexen, kracht, sensibiliteit','Behandelpad: conservatief vs chirurgisch','Baseline: ODI, NRS, neurologisch'],
       exercises:[
         {name:'Straight Leg Raise (SLR)',params:[['Positief','< 70°'],['Specificiteit','hoog']],note:'Goudstandaard voor L4–L5 en L5–S1. Bragard verhoogt specificiteit.',cat:'kracht'},
         {name:'Slump test',params:[['Sens','0.84'],['Spec','0.83']],note:'Sensitiever dan SLR. Reproductie uitstralende pijn = positief.',cat:'test'},
         {name:'Neurologisch onderzoek',params:[['Test','reflexen, kracht, sensibiliteit']],note:'L4: kniepees + TA. L5: EHL + webspace. S1: achillespees + peroneus.',cat:'test'},
         {name:'Femoral nerve stretch (L3–L4)',params:[['Positie','buiklig, knie flecteren']],note:'Pijn voorzijde bovenbeen = positief bij hoge hernia.',cat:'test'}],
       criteria_go:['Diagnose bevestigd','Rode vlaggen uitgesloten','Behandelpad bepaald'],
       criteria_stop:['Progressieve motoruitval → chirurg binnen 24–48u'],
       redflags:['CAUDA EQUINA: blaas/darm + perineale anesthesie + bilaterale uitstraling → SPOEDOPNAME','Koorts + rugpijn + CRP hoog → spondylodiscitis → spoed','Gewichtsverlies + nachtzweten > 50j → maligniteit → oncologische screening']},
      {label:'Fase 1',title:'Acute Fase',weeks:'Week 1–3',
       evidence:'<strong>Bedrust is schadelijk</strong> (Malmivaara et al., 1995). <strong>McKenzie</strong> effectief bij centralisatie (Donelson et al., 1997). <strong>Neurodynamische mobilisatie</strong> vermindert pijn bij radiculopathie (Nee et al., 2012).',
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
       evidence:'<strong>Motor control training</strong> (multifidus + TA) superieur bij LBP (Hides et al., 2001). <strong>Neurodynamische tensioner</strong> zodra slider pijnvrij (Nee et al., 2012).',
       goals:['NRS ≤ 3/10 dagelijks','Actief gebruik TA (palpatie)','SLR ≥ 60° zonder uitstraling','Lopen 30 min'],
       exercises:[
         {name:'Transversus abdominis (draw-in)',params:[['Reps','10'],['Hold','10 sec'],['Sets','3'],['Freq','3×/dag']],note:'"Trek navel 10% in" zonder ademinhouden. Palpatie 2 cm mediaal SIAS.',cat:'stabiliteit'},
         {name:'Multifidus isometrisch (prone)',params:[['Reps','10'],['Hold','10 sec'],['Sets','3']],note:'"Maak de spier dik zonder te bewegen." Multifidus atrofieert ipsilateraal bij HNP.',cat:'kracht'},
         {name:'Dead bug (basis)',params:[['Reps','8–10/zijde'],['Sets','3']],note:'Ruglig, 90-90. Neutrale lumbale lordose — NIET afplatten.',cat:'stabiliteit'},
         {name:'Bird dog',params:[['Reps','8–10/zijde'],['Hold','5–8 sec'],['Sets','3']],note:'Viervoet, neutrale rug. Hoge multifidus + gluteus activatie.',cat:'stabiliteit'},
         {name:'Neurodynamische tensioner',params:[['Reps','8–10'],['Sets','3'],['Indicatie','SLR > 40° pijnvrij']],note:'Knie strekken + dorsaalflexie aanhouden. Meer neuraal effect dan slider.',cat:'neuro'}],
       criteria_go:['NRS ≤ 3/10','SLR ≥ 60°','TA + multifidus actief','Lopen 30 min'],
       criteria_stop:['Peripheralisatie bij oefeningen → terugstap'],redflags:[]},
      {label:'Fase 3',title:'Krachttraining',weeks:'Week 6–12',
       evidence:'<strong>Progressieve krachttraining</strong> veilig en superieur aan core-only (Berglund et al., 2015). <strong>Aerobe training</strong> heeft direct pijnmodulerend effect.',
       goals:['NRS ≤ 2/10 bij alle ADL','Deadlift met lichaamsgewicht correct','Squat 90° pijnvrij','Functionele werktaken simuleren'],
       exercises:[
         {name:'Romanian Deadlift (RDL)',params:[['Reps','10–12'],['Sets','3'],['Belasting','60–75% 1RM'],['Tempo','3-1-3']],note:'Scharnier in heup, neutrale rug. Graduele opbouw is veilig (Berglund 2015).',cat:'kracht'},
         {name:'Goblet squat / bilateraal squat',params:[['Reps','10–12'],['Sets','3'],['ROM','0–90°']],note:'Neutrale lordose behouden.',cat:'kracht'},
         {name:'Pallof press (anti-rotatie)',params:[['Reps','10–12/zijde'],['Sets','3']],note:'Hoge transversus- en oblique-activiteit.',cat:'kracht'},
         {name:"Farmer's carry",params:[['Afstand','20–40m'],['Sets','3']],note:'Functioneel tillen + dragen. Directe transfer naar werk.'},
         {name:'Aerobe training',params:[['Duur','20–40 min'],['Intensiteit','RPE 12–14'],['Freq','3–5×/week']],note:'Fietsen, zwemmen, lopen. Direct pijnmodulerend effect.',cat:'cardio'}],
       criteria_go:['NRS ≤ 2/10','Deadlift BW technisch correct','Squat 90° pijnvrij','TSK < 37/68'],
       criteria_stop:['Uitstraling bij kracht → techniek corrigeren','TSK > 44 → fear-avoidance aanpak'],redflags:[]},
      {label:'Fase 4–5',title:'Return to Work & Preventie',weeks:'Week 8–16+',
       evidence:'<strong>Work-hardening</strong> vermindert ziekteverzuim met 45% (Schaafsma et al., 2013). <strong>2×/week krachttraining</strong> sterkste preventieve factor (Steffens et al., 2016 — Cochrane).',
       goals:['RTW-plan opgesteld','Werktaken 8u tolereren','ODI < 20%','FABQ werk < 25/42','Zelfmanagement plan aangeleerd'],
       exercises:[
         {name:'Work hardening (werkgerichte training)',params:[['Vb','tillen 10–20 kg, duwen, buigen'],['Opbouw','10%/week']],note:'Simuleer werktaken. Ergonomisch advies op werkplek.',cat:'stabiliteit'},
         {name:'Tiltraining (NIOSH-richtlijn)',params:[['Techniek','heupscharnieren + neutraal']],note:'Graduele blootstelling aan gevreesde belasting.',cat:'kracht'},
         {name:'Onderhoudsprogramma (2×/week)',params:[['Vb','deadlift, squat, bird dog, lopen'],['Duur','30–45 min']],note:'Minimaal maar consistent. 2×/week volstaat.',cat:'kracht'},
         {name:'McKenzie zelfbehandeling (bij recidief)',params:[['Timing','bij eerste tekenen'],['Freq','elk uur x 10']],note:'Patiënt kent directional preference. Direct handelen.',cat:'mobiliteit'}],
       criteria_go:['ODI < 20%','FABQ werk < 25','Werkactiviteiten 8u tolereren'],
       criteria_stop:['ODI > 40% na 16 wkn → multidisciplinaire revalidatie'],
       redflags:['Nieuwe cauda equina symptomen → SPOED','Hoog chroniciteitsrisico: FABQ > 44, depressie → multidisciplinair']}
    ],
    refs:'Malmivaara et al. (1995) — Bed rest vs activity for LBP. NEJM. | Hides et al. (2001) — Motor control training for LBP. Spine. | Nee et al. (2012) — Neural tissue management. Man Ther. | Berglund et al. (2015) — Heavy resistance training for LBP. Spine. | Steffens et al. (2016) — Prevention of LBP. JAMA Intern Med.'},

  rc:{id:'rc',title:'Rotatorenmanchet',subtitle:'Conservatief en postoperatief protocol voor rotatorenmanchet letsel (partieel / volledig / post-OK)',color:'#f43f5e',
    phases:[
      {label:'Fase 0',title:'Diagnostiek & Classificatie',weeks:'Vóór behandelstart',
       evidence:'<strong>Klinisch onderzoek</strong> heeft matige sensitiviteit/specificiteit — combinatiepatronen zijn betrouwbaarder (Hegedus et al., 2012). <strong>Echografie</strong> is eerste beeldvorming (even accuraat als MRI voor volledige rupturen). <strong>Conservatief beleid</strong> voor partiële scheuren en kleine volledige scheuren (< 1 cm): vergelijkbare uitkomsten met chirurgie op 2 jaar (Kukkonen et al., 2015 — RCT).',
       goals:['Identificeer aangedane pees: supraspinatus, infraspinatus, subscapularis, teres minor','Graad bepalen: tendinopathie / partieel / volledig','Behandelpad: conservatief vs chirurgisch','Scapulaire dyskinese screenen','Baseline: DASH, WORC, NRS, ROM, kracht'],
       exercises:[
         {name:'Neer impingement test',params:[['Sens','0.72'],['Spec','0.60']],note:'Passieve elevatie schouder. Gebruik altijd in combinatie met andere testen.',cat:'test'},
         {name:'Hawkins-Kennedy test',params:[['Sens','0.79'],['Spec','0.59']],note:'Elleboog + schouder 90°, interne rotatie. Sensitiever dan Neer.',cat:'test'},
         {name:'Empty can test (supraspinatus)',params:[['Sens','0.69'],['Spec','0.66']],note:'Schouder 90° abductie, 30° horizontaal, interne rotatie. Weerstand op voorarm.',cat:'test'},
         {name:'External rotation lag sign (infraspinatus)',params:[['Sens','0.70'],['Spec','0.97']],note:'Hoge specificiteit voor volledige IR-ruptuur. Arm valt terug uit maximale ER = positief.',cat:'test'},
         {name:'Lift-off test (subscapularis)',params:[['Sens','0.62'],['Spec','0.97']],note:'Hand op lage rug, duwt weg van rug. Kan niet = subscapularis ruptuur.',cat:'test'},
         {name:'Scapulaire dyskinese screening',params:[['Test','lateral scapular slide + SICK']],note:'Asymmetrie > 1.5 cm bij 45°/90°/120° abductie = significant.',cat:'test'}],
       criteria_go:['Aangedane pees geïdentificeerd','Graad bepaald','Behandelpad gekozen','Baseline scores afgenomen'],
       criteria_stop:['Volledige ruptuur > 3 cm bij sportactieve < 55j → chirurgisch overleg','Acute traumatische avulsie → urgente chirurgische evaluatie'],
       redflags:['Axillaire zenuwuitval (deltoid parese) na schouderluxatie → spoed neurologie','Cervicale radiculopathie uitsluiten: Spurling test → cervicale pathologie','Tumorale schouder: nachtpijn + gewichtsverlies > 50j → onco-screening']},

      {label:'Fase 1',title:'Acute Fase — Pijn & ROM',weeks:'Week 0–3 (conservatief) / Week 1–4 (post-OK)',
       evidence:'<strong>Isometrische oefeningen</strong> verminderen pijn acuut (Rio et al., 2015) en zijn veilig voor weefselprotectie post-OK. <strong>Pendel-oefeningen</strong> (Codman) gebruiken zwaartekracht voor passieve distractie. Post-OK: <strong>sling 4–6 weken</strong> bij volledige ruptuurherstel.',
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
       evidence:'<strong>Scapulaire stabilisatie</strong> essentieel vóór RC-versterking — proximal stability for distal mobility (Kibler et al., 2013). <strong>Serratus anterior</strong> is prioritaire stabilisator: atrofie bij 68% van schouderpatiënten (Cools et al., 2007). <strong>Gesloten keten</strong> activeert hogere co-contractie en is veiliger in vroege fase.',
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
       evidence:'<strong>Eccentrische training</strong> voor RC-tendinopathie reduceert pijn (Bernhardsson et al., 2011). <strong>High-load training</strong> (70–80% 1RM) superieur voor structurele peesadaptatie (Beyer et al., 2015). <strong>ER/IR ratio ≥ 0.66</strong> aanbevolen (Cools et al., 2007).',
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
       evidence:'<strong>Interval throwing program</strong> standaard voor overhead-sporters (ASMI protocol). <strong>Scapulaire dyskinese correctie</strong> reduceert herletselrisico (Burkhart et al., 2003). Post-OK grote rupturen: overhead sport pas na 9–12 maanden (Van der Meijden et al., 2012).',
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
       evidence:'<strong>RC-tendinopathie recidief</strong> bij 20–40% zonder onderhoudstraining. <strong>Ergonomische interventies</strong> reduceren werkgerelateerde RC-pathologie (van Rijn et al., 2010). <strong>Slaappositie</strong> op aangedane zijde verhoogt supraspinatus ischemie.',
       goals:['Zelfstandig onderhoudsprogramma 2×/week','Ergonomie werkplek geoptimaliseerd','Slaaphoudingsadvies geïntegreerd','Vroege tekenen van recidief herkennen'],
       exercises:[
         {name:'Onderhoudsprogramma RC (2×/week)',params:[['Vb','ER-band, side-lying ER, prone Y-T-W'],['Duur','20–30 min']],note:'Minimale effectieve dosis. Stoppen = recidief. Integreer in sporttraining.',cat:'kracht'},
         {name:'Scapulaire controle (onderhoud)',params:[['Vb','wall slide, push-up plus'],['Freq','2×/week']],note:'Serratus anterior + lower trap. Meest vergeten onderdeel langetermijn-preventie.',cat:'stabiliteit'},
         {name:'Ergonomische werkhouding',params:[['Vb','schermhoogte, muis-positie, tilhouding']],note:'Armen niet boven schouderhoogte. Beeldscherm op ooghoogte. Max tilgewicht: 23 kg enkelvoudig.',cat:'manueel'},
         {name:'Slaaphouding advies',params:[['Advies','niet op aangedane zijde slapen']],note:'Op aangedane zijde = supraspinatus compressie + ischemie 6–8 uur/nacht. Ruglig met kussen onder arm is beste positie.',cat:'manueel'}],
       criteria_go:['Zelfstandig onderhoudsprogramma aangeleerd','Ergonomie geoptimaliseerd','Recidief-actieplan gekend'],
       criteria_stop:['Recidief zonder verbetering na 4 weken → kinesist opnieuw'],
       redflags:['Frozen shoulder ontwikkeling (stijfheid alle richtingen) → agressief aanpakken of injectie','Nieuwe axillaire neuropathie na trauma → spoed neurologie']}
    ],
    refs:'Hegedus et al. (2012) — Physical examination tests for shoulder pathology. BJSM meta-analyse. | Kukkonen et al. (2015) — Conservative vs surgical for RC tears. J Bone Joint Surg RCT. | Kibler et al. (2013) — The role of the scapula in athletic shoulder function. AJSM. | Cools et al. (2007) — Rehabilitation of scapular muscle balance. AJSM. | Rio et al. (2015) — Isometric contractions for pain in tendinopathy. BJSM. | Beyer et al. (2015) — Heavy slow resistance vs eccentric training. Am J Sports Med. | Van der Meijden et al. (2012) — Rehabilitation after arthroscopic RC repair. J Shoulder Elbow Surg.'},

  pt:{id:'pt',title:'Patellapees Tendinopathie',subtitle:'Conservatief revalidatieprotocol voor patellaire tendinopathie (jumper&#x27;s knee)',color:'#fb923c',
    phases:[
      {label:'Fase 0',title:'Diagnostiek & Classificatie',weeks:'Vóór behandelstart',
       evidence:'<strong>Patellapees tendinopathie</strong> is een klinische diagnose gebaseerd op gelokaliseerde anterieure kniepijn bij belasting (Cook & Purdam, 2009). De <strong>VISA-P score</strong> is de goudstandaard uitkomstmaat (Robinson et al., 2001 — validatie). <strong>Echografie</strong> toont hypo-echogene zones en peesdikte, maar correleert slecht met symptomen — asymptomatische afwijkingen zijn frequent (Cook et al., 2004). <strong>Victorian Institute of Sport Assessment Patella (VISA-P)</strong>: maximale score 100, sport < 80, RTS pas bij ≥ 90. <strong>Provocatietesten</strong>: single leg decline squat (SLDS) is meest sensitieve klinische test (Zwerver et al., 2011). <strong>Differentiaaldiagnose</strong>: PFPS, Osgood-Schlatter (adolescenten), Hoffa vetlichaam inklemming, partiële peesverscheuring.',
       goals:['Bevestig diagnose via klinisch onderzoek (palpatie apex patella, SLDS)','VISA-P baseline afnemen','Stageclassificatie: reactief / dysrepair / degeneratief (Cook & Purdam continuum)','Belastingsniveau bepalen: provocerend volume berekenen','Differentiaaldiagnose uitsluiten','Rode vlaggen screenen'],
       exercises:[
         {name:'Single Leg Decline Squat (SLDS) — provocatietest',params:[['Helling','25°'],['ROM','60° knieflexie'],['Sens','0.78'],['Spec','0.61']],note:'Goudstandaard provocatietest. Pijn ≥ 3/10 aan apex patella = positief. Gebruik als monitoring tool doorheen revalidatie.',cat:'test'},
         {name:'Palpatie apex patella',params:[['Positie','knie 90° flexie'],['Test','drukpijn apex']],note:'Specifieke drukpijn op apex patella bij 90° flexie. Onderscheidt van PFPS (diffuus) en Hoffa (infrapatellair).',cat:'test'},
         {name:'VISA-P score afnemen',params:[['Score','0–100'],['RTS drempel','≥ 90/100']],note:'8 vragen over pijn en functie. < 80 = sport beperkt. Elke 4 weken herhalen. Minimale klinische drempelwaarde (MCID) = 13 punten.',cat:'test'}],
       criteria_go:['Diagnose patellapees tendinopathie bevestigd','VISA-P baseline afgenomen','Behandelplan opgesteld','Rode vlaggen uitgesloten'],
       criteria_stop:['Volledige peesverscheuring → spoedverwijzing chirurg','Osgood-Schlatter actief (adolescent) → aangepast protocol'],
       redflags:['Acuut pijnschot bij springen + onvermogen knie te strekken → partiële/volledige peesruptuur → spoed orthopedie','Diffuse zwelling + warmte + koorts → septische artritis/bursitis → spoed','Leeftijd < 16j + pijn tibiatuberositas → Osgood-Schlatter → röntgen','Nachtpijn + gewichtsverlies → tumoraal uitsluiten']},

      {label:'Fase 1',title:'Pijnmanagement & Isometrische Belasting',weeks:'Week 1–3',
       evidence:'<strong>Isometrische quadricepscontractie</strong> heeft een onmiddellijk corticaal pijnremmend effect bij tendinopathie — gemiddeld 40% pijnreductie (Rio et al., 2015 — RCT, n=20). Mechanisme: verhoogde corticale inhibitie via isometrische contractie. <strong>Belastingsbeheer</strong> (load management) is de hoeksteen: overbelasting drijft het tendinopathie-continuum van reactief naar degeneratief (Cook & Purdam, 2009). <strong>Compressieve krachten</strong> (diepe squat, knielen) zijn schadelijker dan tractie — vermijden in acute fase. <strong>Passieve rust</strong> is contraproductief: tendinopathie reageert positief op gedoseerde mechanische belasting.',
       goals:['NRS ≤ 3/10 na activiteit (24u-regel)','VISA-P ≥ baseline + 5 punten','Isometrische oefeningen pijnvrij uitvoeren','Begrip van belastingsbeheer en 24u-regel','Provocerende activiteiten aanpassen (niet stoppen)'],
       exercises:[
         {name:'Isometrische knie-extensie (leg extension machine)',params:[['Hoek','60° knieflexie'],['Hold','45 sec'],['Intensiteit','70% MVC'],['Sets','4'],['Rust','2 min'],['Freq','1× /dag of voor sport']],note:'GOUDSTANDAARD acute pijnreductie (Rio et al., 2015). Gebruik leg extension machine of weerstandsband. 60° = maximale tensiestimulus zonder compressie. Direct voor training of wedstrijd voor pijnreductie. Beoordeel pijn 24u na sessie.',cat:'kracht'},
         {name:'Isometrische wall sit',params:[['Hoek','60–70° knieflexie'],['Hold','45 sec'],['Sets','4'],['Rust','2 min'],['Freq','dagelijks']],note:'Alternatief zonder machine. Bilateraal, even gewicht op beide benen. Controleer geen anteriorpijn bij uitvoering — stop bij > NRS 4.',cat:'kracht'},
         {name:'Stationaire fiets (lage weerstand)',params:[['Duur','15–20 min'],['Weerstand','laag'],['Zadel','hoog']],note:'Hoog zadel = minder knieflexie = minder pees-compressie. Fietsen is veilig in alle fasen. Geen pijn tijdens activiteit.',cat:'cardio'},
         {name:'Zwemmen (crawl / rugslag)',params:[['Freq','3–4×/week']],note:'Ideale aerobe alternatieven zonder peesbelasting. GEEN schoolslag (knie-extensie kracht verhoogt peesbelasting).',cat:'cardio'},
         {name:'Patiënteducatie — tendinopathie continuum',params:[['Duur','15 min']],note:'Leg uit: reactief → dysrepair → degeneratief. Belasting is medicijn, niet de vijand. 24u-regel: pijn mag max 24u verhoogd blijven na sessie. NRS > 5 de volgende dag = dosering verlagen.',cat:'manueel'},
         {name:'24u-regel monitoring',params:[['Tool','NRS dagboek of app'],['Freq','dagelijks']],note:'Pijn na activiteit beoordelen op NRS. ≤ 3/10 volgende ochtend = dosering OK. > 5/10 = volume reduceren. Kern van load management.',cat:'manueel'}],
       criteria_go:['NRS ≤ 3/10 de ochtend na isometrische oefeningen','SLDS pijn < 4/10','Begrip belastingsbeheer aangetoond','VISA-P ≥ baseline'],
       criteria_stop:['NRS > 5/10 na oefening volgende dag → volume halveren','Pijn tijdens isometrie > 4/10 → intensiteit verlagen'],
       redflags:['Toenemende pijn ondanks conservatieve aanpak na 6 weken → echografie + orthopedisch overleg']},

      {label:'Fase 2',title:'Isotonische Krachtopbouw',weeks:'Week 3–8',
       evidence:'<strong>Heavy Slow Resistance (HSR)</strong> training is even effectief als excentrische training maar beter getolereerd en met hogere patiënttevredenheid (Beyer et al., 2015 — RCT, n=59). <strong>Excentrische decline squat</strong> (Alfredson-protocol) was jarenlang goudstandaard maar HSR is nu superieur qua compliance en langetermijnresultaten (Kongsgaard et al., 2010 — RCT). <strong>Peesadaptatie</strong> vereist hoge mechanische belasting (≥ 70% 1RM) en lage herhaling met traag tempo (3-0-3) — dit stimuleert collageen-synthese optimaal. <strong>Progressie-indicator</strong>: VISA-P + SLDS pijn elke 2 weken meten.',
       goals:['VISA-P ≥ 60/100','SLDS pijn ≤ 2/10','Bilateral leg press 1.5× lichaamsgewicht','Squat technisch correct met volledige ROM','NRS ≤ 3/10 na training (24u-regel)'],
       exercises:[
         {name:'Leg press bilateraal (HSR)',params:[['Reps','15 → 12 → 10 → 8 → 6'],['Sets','4'],['Tempo','3-0-3'],['Belasting','opbouw naar 80% 1RM'],['Freq','3×/week']],note:'WEEK 1–2: 15 reps licht gewicht. WEEK 3–4: 12 reps, gewicht verhogen. WEEK 5–6: 10 reps. WEEK 7–8: 8–6 reps bij 80% 1RM. Traag tempo is essentieel voor peesadaptatie (Kongsgaard 2010).',cat:'kracht'},
         {name:'Squat bilateraal',params:[['Reps','8–12'],['Sets','3–4'],['Tempo','3-0-3'],['ROM','0–90°'],['Belasting','60–75% 1RM']],note:'Progressie van 45° → 60° → 90° knieflexie. Stop bij > NRS 4 aan apex patella. Geen diepe squat (> 90°) in deze fase — compressieve kracht te hoog.',cat:'kracht'},
         {name:'Excentrische decline squat',params:[['Reps','15'],['Sets','3'],['Helling','25°'],['Tempo','3 sec excentrisch'],['Belasting','lichaamsgewicht → rugzak']],note:'Alfredson-protocol aangepast. Excentrische fase (zakken) 3 sec. Concentrach omhoog komt mag met beide benen. Progressie: rugzak met gewicht toevoegen. Pijn tot NRS 4 is toegestaan.',cat:'kracht'},
         {name:'Leg press unilateraal',params:[['Reps','10–12'],['Sets','3'],['Belasting','60–70% 1RM']],note:'Progressie na bilateraal. Asymmetriecheck: aangedane zijde vs gezonde zijde. Target LSI ≥ 85%.',cat:'kracht'},
         {name:'Step-up anterieur (20 cm)',params:[['Reps','10–12'],['Sets','3']],note:'Functioneel CKC. Controleer knietracking. Progressie: hogere trede → met gewicht.',cat:'kracht'},
         {name:'Heupextensoren (RDL bilateraal)',params:[['Reps','10–12'],['Sets','3']],note:'Heup extensie kracht vermindert belasting op patellapees. RDL met neutrale rug.',cat:'kracht'}],
       criteria_go:['VISA-P ≥ 60/100','SLDS ≤ 2/10','Leg press 1.5× BW','NRS ≤ 3/10 24u na training','Squat 90° zonder > NRS 3'],
       criteria_stop:['VISA-P stijgt niet na 4 weken → intensiteit verhogen of techniek herbekijken','SLDS pijn > 4/10 → terug naar fase 1 isometrie']  ,
       redflags:[]},

      {label:'Fase 3',title:'Functionele Krachttraining & Energie-opslag',weeks:'Week 8–16',
       evidence:'<strong>Energie-opslag en -vrijgave</strong> (stretch-shortening cycle, SSC) is de cruciale peeseis bij sport. Tendinopathie vermindert SSC-capaciteit — expliciete training noodzakelijk (Docking & Cook, 2019). <strong>Plyometrische progressie</strong> moet gradueel zijn: bilateraal → unilateraal → reactief. <strong>RSI (Reactive Strength Index)</strong> = spronghoogte / contacttijd — objectieve maat voor SSC-capaciteit. Target RSI ≥ 1.5 voor terugkeer naar springen. <strong>Single Leg Triple Hop</strong>: LSI ≥ 90% vóór RTS (Heales et al., 2015). <strong>Spierkrachtasymmetrie</strong>: quad LSI < 85% = verhoogd recidief risico.',
       goals:['VISA-P ≥ 75/100','Quad LSI ≥ 85%','Single leg squat 90° zonder pijn','Bilateraal springen pijnvrij','RSI ≥ 1.0 (bipodale counter movement jump)','NRS ≤ 2/10 na training'],
       exercises:[
         {name:'Bulgaarse split squat',params:[['Reps','8–10/been'],['Sets','3–4'],['Belasting','BW → dumbbells'],['Tempo','3-0-1']],note:'Hoge quad + glute belasting. Progressie: lichaamsgewicht → dumbbells → barbell. Controleer knietracking. Beste onilaterale krachtoefening voor patellapees.',cat:'kracht'},
         {name:'Leg press unilateraal (zwaar)',params:[['Reps','6–8'],['Sets','4'],['Belasting','75–85% 1RM']],note:'Maximale krachtstimulus unilateraal. LSI meten: aangedaan/gezond × 100. Target ≥ 85%.',cat:'kracht'},
         {name:'Counter movement jump (CMJ) bilateraal',params:[['Sets','4–6 sprongen'],['Rust','2–3 min'],['Meting','RSI of spronghoogte']],note:'Eerste plyometrische oefening. Bilateraal, zachte landing. RSI meten met app (bijv. My Jump 2). Pijn ≤ NRS 3 tijdens én 24u na.',cat:'neuro'},
         {name:'Drop jump bilateraal',params:[['Hoogte','20 cm → 30 cm'],['Sets','3×5'],['Cue','"spring terug zo snel mogelijk"']],note:'Hogere SSC-eis dan CMJ. Korte contacttijd bewust. Progressie na pijnvrije CMJ.',cat:'neuro'},
         {name:'Unilateraal hoppen (in place)',params:[['Sets','3×10/been'],['Cue','"spring zo hoog mogelijk"']],note:'Eerste unilaterale plyometrie. Bilateraal MOET pijnvrij zijn. Stop bij > NRS 3.',cat:'neuro'},
         {name:'Rope jumping / skipping',params:[['Duur','1 min × 5'],['Rust','1 min']],note:'Progressie van bilateraal naar unilateraal skipping. Hoge SSC-eis. Introduceert sportspecifieke belasting.',cat:'cardio'}],
       criteria_go:['VISA-P ≥ 75/100','Quad LSI ≥ 85%','CMJ RSI ≥ 1.0','Unilateraal hoppen pijnvrij','NRS ≤ 2/10 24u na training'],
       criteria_stop:['RSI stijgt niet → volume verminderen, belasting verhogen','Pijn > NRS 4 bij plyometrie → terugkeer fase 2'],
       redflags:[]},

      {label:'Fase 4',title:'Sportspecifieke Training & Return to Sport',weeks:'Week 12–20+',
       evidence:'<strong>Return to sport</strong> criteria voor patellapees tendinopathie zijn minder goed gedefinieerd dan ACL — VISA-P ≥ 90 + krachtsymmetrie + pijnvrij sporten zijn consensuscriteria (Malliaras et al., 2015). <strong>Terugkeer na injectie</strong> (PRP, cortisone): cortisone geeft korte termijn pijnreductie maar verhoogt risico op recidief — gebruik als bridge, niet als therapie. PRP: tegenstrijdig bewijs. <strong>Recidief</strong> treedt op bij 20–40% bij onvoldoende kracht + te vroege RTS. <strong>Seizoensgebonden management</strong>: tijdens competitieperiode → onderhoud isometrie + HSR 2×/week minimaal.',
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
       evidence:'<strong>Seizoensgebonden piekbelasting</strong> is de sterkste risicofactor voor recidief — pre-season krachtscreening identificeert risicogroepen (van der Worp et al., 2011). <strong>Quad:hamstring krachtratio</strong> < 0.6 = verhoogd risico. <strong>Trainingsvloeroppervlak</strong>: hard oppervlak (parket, beton) verhoogt peesbelasting met 20–30% vs zachte mat. <strong>Onderhoudstraining</strong> 2×/week voorkomt recidief bij 70% op 5 jaar (Visnes & Bahr, 2007). <strong>In-season screening</strong> met VISA-P elke 6 weken tijdens competitieperiode.',
       goals:['Onderhoudsprogramma 2×/week zelfstandig','Seizoensgebonden screeningsprotocol actief','Trainingsbelasting monitoren (10%-regel)','Vroege tekenen herkennen en handelen','VISA-P ≥ 90 behouden'],
       exercises:[
         {name:'Onderhoudsprogramma (2×/week)',params:[['Vb','leg press, decline squat, CMJ'],['Duur','30 min'],['Belasting','70–75% 1RM']],note:'Minimale dosis voor peesonderhoud. Stoppen bij asymptomatisch is de meest gemaakte fout. Integreer in reguliere sporttraining.',cat:'kracht'},
         {name:'VISA-P screening (elke 6 weken)',params:[['Freq','elke 6 wkn in-season'],['Alarm','< 80 → aanpak']],note:'Bij daling < 80: trainingsvolume reduceren en isometrie opstarten. Vroege actie voorkomt exacerbatie.',cat:'test'},
         {name:'Pre-season krachttest',params:[['Test','leg press 1RM, single leg squat'],['Alarm','LSI < 85%']],note:'Begin van elk seizoen. Bij LSI < 85% → gerichte krachtperiode voor seizoensopstart.',cat:'test'},
         {name:'Trainingsbelasting logboek',params:[['Tool','app of notitieboek'],['Meting','sessie-RPE × duur']],note:'Session-RPE methode: intensiteit (0–10) × duur (min) = sessiebelasting. Week-tot-week stijging max 10%. Acute:chronische ratio bewaken (< 1.5).',cat:'manueel'}],
       criteria_go:['VISA-P ≥ 90 behouden','Onderhoudsprogramma geïntegreerd','Recidief-actieplan gekend'],
       criteria_stop:['VISA-P < 80 → activeer fase 1–2 direct','Krachtverlies LSI < 85% → krachtcyclus herstarten'],
       redflags:['Acute ruptuur symptomen → spoed orthopedie','VISA-P progressief dalend ondanks optimale aanpak → heroverwegen diagnose of chirurgisch consult']}
    ],
    refs:'Rio et al. (2015) — Isometric exercise reduces pain immediately in tendinopathy. BJSM RCT. | Beyer et al. (2015) — Heavy slow resistance vs eccentric training for patellar tendinopathy. Am J Sports Med RCT. | Kongsgaard et al. (2010) — HSR training superior to eccentric and corticosteroid. Scand J Med Sci Sports RCT. | Cook & Purdam (2009) — Tendinopathy continuum model. BJSM. | Malliaras et al. (2015) — Patellar tendinopathy management. J Orthop Sports Phys Ther. | Visnes & Bahr (2007) — Eccentric training prevention of patellar tendinopathy. Am J Sports Med. | van der Worp et al. (2011) — Risk factors for patellar tendinopathy. Br J Sports Med.'},
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
    refs:'Mellor R et al. (2018). Education plus exercise versus corticosteroid injection versus wait and see for greater trochanteric pain syndrome. BMJ. | Allison K et al. (2016). Hip abductor strength training is superior to stretching for improving outcomes in GTPS: randomised controlled trial. British Journal of Sports Medicine. | Ganderton C et al. (2018). Gluteal loading versus sham exercises to improve pain and dysfunction in postmenopausal women with GTPS. Journal of Women\'s Health. | Rio E et al. (2015). Isometric exercise induces analgesia and reduces inhibition in patellar tendinopathy. British Journal of Sports Medicine. | Grimaldi A & Fearon A (2015). Gluteal tendinopathy: integrating pathomechanics and clinical features in its management. Journal of Orthopaedic and Sports Physical Therapy.'},
  at:{id:'at',title:'Achillespees Tendinopathie',subtitle:'Conservatief revalidatieprotocol voor midportion en insertionele achillespees tendinopathie',color:'#e879f9',
    phases:[
      {label:'Fase 0',title:'Diagnostiek & Classificatie',weeks:'Vóór behandelstart',
       evidence:'<strong>Achillespees tendinopathie</strong> is een klinische diagnose — beeldvorming is geen vereiste in eerste lijn (Alfredson & Cook, 2007). <strong>Twee subtypes</strong> met fundamenteel verschillend beleid: (1) <strong>Midportion</strong> (2–6 cm boven insertie) — meest frequent, beste prognose conservatief; (2) <strong>Insertioneel</strong> (aan calcaneus) — compressie-component, excentrische training is hier contraproductief (Jonsson et al., 2008). <strong>VISA-A score</strong> is de gevalideerde uitkomstmaat (Robinson et al., 2001): max 100, sport < 80, RTS bij ≥ 90. <strong>Arc sign</strong> en <strong>Royal London Hospital test</strong> zijn sensitieve klinische testen voor midportion (sensitiviteit 0.73–0.78). <strong>Differentiaaldiagnose</strong>: partiële ruptuur, Haglund deformiteit (insertioneel), posterieure impingement, FHL tendinopathie.',
       goals:['Subtype bepalen: midportion vs insertioneel','VISA-A baseline afnemen','Provocatietesten uitvoeren: arc sign, Royal London, palpatie','Risicofactoren identificeren: training load, schoeisel, looptechniek','Rode vlaggen uitsluiten','Baseline functionele test: single leg heel raise'],
       exercises:[
         {name:'Arc sign',params:[['Sens','0.73'],['Spec','0.88'],['Subtype','midportion']],note:'Patiënt in ruglig. Palpeer pijnlijke zone bij neutrale positie, dan bij dorsaal- en plantairflexie. Bij midportion tendinopathie beweegt de pijnzone mee met de pees — distinguishing van peritendinitis.',cat:'test'},
         {name:'Royal London Hospital test',params:[['Sens','0.78'],['Spec','0.80'],['Subtype','midportion']],note:'Palpeer meest pijnlijke punt in neutrale stand. Dorsaalflexie passief toepassen: bij tendinopathie VERMINDERT pijn (pees "rekt weg" van palperende vinger). Bij partiële ruptuur blijft pijn bij dorsaalflexie.',cat:'test'},
         {name:'Palpatie achillespees',params:[['Subtype','beide'],['Lokalisatie','2–6 cm vs insertie']],note:'Midportion: maximum drukpijn 2–6 cm boven insertie. Insertioneel: maximum drukpijn OP of net boven calcaneus-insertie. Differentiatie cruciaal voor behandelkeuze.',cat:'test'},
         {name:'VISA-A score afnemen',params:[['Score','0–100'],['RTS drempel','≥ 90/100'],['MCID','10 punten']],note:'8 vragen over pijn en functie. Elke 4 weken herhalen. MCID = 10 punten. Gratis downloadbaar via VISA scoreformulier.',cat:'test'},
         {name:'Single leg heel raise test (20 reps)',params:[['Test','maximale reps SL heel raise'],['Norm','> 25 reps gezonde zijde']],note:'Functionele baseline. Tel maximale reps tot uitputting of pijn. Vergelijk beide zijden (LSI). < 20 reps = significante zwakte.',cat:'test'}],
       criteria_go:['Subtype bepaald (midportion of insertioneel)','VISA-A baseline afgenomen','Behandelplan op maat (midportion vs insertioneel)','Rode vlaggen uitgesloten'],
       criteria_stop:['Vermoeden partiële/volledige ruptuur → echografie + orthopedisch chirurg','Thompson test positief (volledige ruptuur) → SPOED chirurgie'],
       redflags:['Thompson test positief (kalf knijpen → geen plantairflexie) → volledige achillespeesruptuur → SPOED orthopedie','Acute pijnschot bij sporten + "trap gevoel" → ruptuur tot bewijs van tegendeel','Diffuse zwelling + warmte + koorts → infectie/bursitis → spoed','Leeftijd < 18j + pijn calcaneus → apofysitis (Sever) → röntgen','Fluorochinolonen-gebruik in voorgeschiedenis → verhoogd ruptuurrisico, informeer behandelend arts']},

      {label:'Fase 1',title:'Pijnmanagement & Isometrische Belasting',weeks:'Week 1–3',
       evidence:'<strong>Isometrische belasting</strong> van de kuit heeft een onmiddellijk pijnremmend effect via corticale inhibitie (Rio et al., 2017). <strong>Relatieve rust</strong> is noodzakelijk — provocerende activiteiten reduceren maar niet elimineren. <strong>Compressiekrachten bij insertioneel subtype</strong> zijn essentieel te vermijden: geen excentrische training (hak zakken onder talocruraal niveau), geen stretching (vergroot compressie op calcaneus insertie). <strong>Nachtspalk</strong> heeft beperkt bewijs maar kan bij ochtendpijn helpen. <strong>Hielverhoging (5–10 mm)</strong> reduceert achillespeesbelasting onmiddellijk — eenvoudige interventie.',
       goals:['NRS ≤ 3/10 de ochtend na activiteit (24u-regel)','VISA-A ≥ baseline','Isometrische oefeningen correct uitvoeren','Begrip van subtype-specifiek beleid','Schoeisel/hielverhoging geoptimaliseerd'],
       exercises:[
         {name:'Isometrische kuitpers (standing calf raise hold)',params:[['Positie','staand, knie gestrekt'],['Hold','45 sec'],['Intensiteit','70–80% MVC'],['Sets','4'],['Rust','2 min'],['Freq','dagelijks']],note:'Bilateraal, vlakke ondergrond. Ga zo hoog mogelijk op tenen, houd positie 45 sec. Bij midportion: mag volledige ROM. Bij insertioneel: GEEN hak lager dan neutrale positie. Directe pijnreductie. Beoordeel pijn volgende ochtend.',cat:'kracht'},
         {name:'Isometrische kuitpers (zittend — soleus)',params:[['Positie','zittend, knie 90°'],['Hold','45 sec'],['Sets','4'],['Rust','2 min']],note:'Soleus-focus: knie gebogen isoleert soleus van gastrocnemius. Belangrijk want soleus draagt 50% van achillespeeskracht bij lopen. Bilateraal begin, unilateraal progressie.',cat:'kracht'},
         {name:'Hielverhoging (5–10 mm)',params:[['Type','hielkussentje in schoen'],['Indicatie','beide subtypes']],note:'Goedkoopste interventie met direct effect. Vermindert achillespeesbelasting door vermindering dorsaalflexie-eis. Beide schoenen aanpassen om bekkenscheefstand te vermijden. Dragen ook buiten revalidatie.',cat:'manueel'},
         {name:'Stationaire fiets',params:[['Duur','15–20 min'],['Weerstand','laag'],['Zadel','hoog']],note:'Veilige aerobe alternatieven. Hoog zadel = minder dorsaalflexie = minder achillespeesbelasting. GEEN loopband in deze fase.',cat:'cardio'},
         {name:'Zwemmen (crawl / rugslag)',params:[['Freq','3–4×/week']],note:'Ideaal in acute fase. Geen peesbelasting. GEEN schoolslag (plantairflexie kracht door waterresistentie).',cat:'cardio'},
         {name:'Patiënteducatie — subtype-specifiek beleid',params:[['Duur','15 min']],note:'MIDPORTION: excentrische training is backbone. INSERTIONEEL: geen excentrisch zakken onder neutraal, geen stretching, geen barvoets lopen, geen hak lager dan bal van de voet. Dit verschil is cruciaal en meest gemaakte fout.',cat:'manueel'}],
       criteria_go:['NRS ≤ 3/10 ochtend na isometrische training','VISA-A ≥ baseline','Single leg heel raise: ≥ 10 reps zonder pijn > 4/10'],
       criteria_stop:['NRS > 5/10 volgende ochtend → volume halveren','Toename zwelling of warmte → rust + herbeoordeel'],
       redflags:['Verslechtering ondanks 3 weken optimale belasting → echografie herhalen: partiële ruptuur?']},

      {label:'Fase 2',title:'Isotonische Krachtopbouw — Gastrocnemius + Soleus',weeks:'Week 3–10',
       evidence:'Het <strong>Alfredson excentrisch protocol</strong> (1998, RCT) was decennialang goudstandaard voor midportion: 3×15 excentrisch 2×/dag, 12 weken, "training door pijn". Resultaat: 82% succesvol bij hardlopers. Echter: <strong>Heavy Slow Resistance (HSR)</strong> is nu minstens equivalent met betere compliance (Beyer et al., 2015 — RCT). <strong>Insertioneel subtype</strong>: gebruik GEEN excentrisch protocol met hak zakken onder neutraal — Jonsson et al. 2008 toont excentrisch Protocol als CONTRAPRODUCTIEF bij insertioneel. Gebruik ipv <strong>concentrisch-excentrisch op vlakke ondergrond</strong> of <strong>isometrie → HSR progressie</strong>.',
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
       evidence:'<strong>Loophervatting</strong> is een mechanische stimulus voor peesremodellering — geleidelijke progressie is veilig en noodzakelijk (Silbernagel et al., 2007). <strong>24u-regel</strong> blijft de leidraad: pijn volgende ochtend ≤ NRS 3 = progressie toegestaan. <strong>Looptechniek</strong>: midfoot strike (voorvoetlanding) reduceert achillespeesbelasting versus hielstrike (Willy & Davis, 2014). <strong>Stapfrequentie verhogen met 5–10%</strong> vermindert achillespeesbelasting. <strong>Schoenen</strong>: drop > 8mm aanbevolen bij herstel. <strong>Energie-opslag</strong>: running is 8× de belasting van wandelen — graduele opbouw is essentieel.',
       goals:['VISA-A ≥ 75/100','Single leg heel raise ≥ 25 reps','Continu lopen 20–30 min pijnvrij','Looptechniek geoptimaliseerd (stapfrequentie)','NRS ≤ 3/10 24u na loopsessie'],
       exercises:[
         {name:'Loop-wandel protocol (run-walk)',params:[['Start','1 min lopen / 2 min wandelen × 8'],['Progressie','wekelijks looptijd +1 min'],['Freq','3×/week, dag rust ertussen']],note:'Week 1: 8× (1 min jog / 2 min walk). Week 2: 8× (2/2). Week 3: 8× (3/2). Enz. Pijncriterium: NRS ≤ 4 tijdens lopen + ≤ 3/10 volgende ochtend. Zachte ondergrond start.',cat:'cardio'},
         {name:'Stapfrequentie verhogen (+5–10%)',params:[['Tool','metronoom-app'],['Baseline','meten eigen cadans'],['Target','+5–10% van baseline']],note:'Hogere cadans = kortere staplengte = minder achillespeesbelasting. Meeste lopers: 160–170 → 170–180 stap/min. Graduale aanpassing over 4–6 weken. Willy & Davis 2014.',cat:'neuro'},
         {name:'Single leg heel raise (unilateraal, zwaar)',params:[['Reps','12–15'],['Sets','3'],['Progressie','rugzak met gewicht'],['Freq','3×/week']],note:'Kracht opbouwen naar norm: 25+ reps lichaamsgewicht, of ≥ 5 reps met 50% BW extra. LSI aangedaan vs gezond ≥ 90% voor RTS.',cat:'kracht'},
         {name:'Squat + calf raise combinatie',params:[['Reps','10–12'],['Sets','3']],note:'Functionele integratie: squat descend + calf raise bij opstaan. Simuleert loopbeweging. Knieflexie + enkeldorsaalflexie gecombineerd.',cat:'kracht'},
         {name:'Lateral bounds (bilateraal)',params:[['Sets','3×8'],['Cue','"zachte landing op voorvoet"']],note:'Eerste energie-opslag oefening. Bilateraal. Progressie naar unilateraal pas na pijnvrije bilaterale uitvoering. Achillespees absorbeert energie bij landing.',cat:'neuro'}],
       criteria_go:['VISA-A ≥ 75/100','Single leg heel raise ≥ 25 reps pijnvrij','Continu lopen 20–30 min NRS ≤ 3','Enkel LSI kracht ≥ 85%'],
       criteria_stop:['NRS > 3/10 ochtend na loopsessie → vorige week herhalen','Ochtendpijn + stijfheid > 20 min → trainingsvolume reduceren'],
       redflags:[]},

      {label:'Fase 4',title:'Sportspecifieke Training & Return to Sport',weeks:'Week 14–24+',
       evidence:'<strong>RTS criteria</strong> voor achillespees: VISA-A ≥ 90, enkel kracht LSI ≥ 90%, pijnvrij sporten, single leg heel raise ≥ 25 reps (Silbernagel et al., 2020 — consensusstatement). <strong>Recidief</strong> bij 20–30% binnen 1 jaar — onvoldoende kracht is sterkste predictor. <strong>Sprongtraining</strong>: achillespees absorbeert tot 12× lichaamsgewicht bij rennen en springen — graduele progressie is essentieel. <strong>Fluorochinolonen</strong> (antibiotica): verhogen ruptuurrisico — altijd navragen in anamnese. <strong>RTS tijdslijn</strong>: gemiddeld 12–16 weken conservatief voor recreatieve sporters, 16–24 weken voor wedstrijdsporters.',
       goals:['VISA-A ≥ 90/100','Enkel kracht LSI ≥ 90%','Single leg heel raise ≥ 25 reps aangedane zijde','Springen en richtingsverandering pijnvrij','Volledige sportspecifieke training hervatten','NRS ≤ 1/10 24u na wedstrijd'],
       exercises:[
         {name:'Unilateraal hoppen (voor/achter, zij/zij)',params:[['Sets','3×10/been'],['Progressie','afstand en snelheid verhogen']],note:'Unilaterale energie-opslag. Zachte landing op voorvoet. Progressie: kleine hops → grotere hops → reactieve hops. Pijn ≤ NRS 3.',cat:'neuro'},
         {name:'Sprint progressie',params:[['Start','60% intensiteit × 10'],['Opbouw','10% per week'],['Freq','2×/week']],note:'Week 1: 10× 40m aan 60%. Week 2: 70%. Week 3: 80%. Week 4: 90–100%. Geen sprintwerk vóór pijnvrij lopen 30 min.',cat:'cardio'},
         {name:'Richtingsveranderingen (agility)',params:[['Vb','T-test, 5-10-5, hoek-hops'],['Progressie','snelheid verhogen']],note:'Introduceert zij-waartse peesbelas ting. Achillespees ook belast bij laterale bewegingen. Starten op lage snelheid.',cat:'neuro'},
         {name:'Sportspecifieke drills',params:[['Vb','hardlopen: intervaltraining, tempolopen'],['Vb','bal: springen, schieten, richtingsveranderingen']],note:'Sport-specifiek volume gradueel opbouwen. 10%-regel per week. 24u-regel strikt.',cat:'neuro'},
         {name:'Isometrie pre-training (bij restpijn)',params:[['Protocol','4×45 sec bij 70% MVC'],['Timing','15–20 min voor sport']],note:'Bij restpijn of hoge trainingsdag: isometrie als pijnbuffer. Bewezen effectief voor acute pijnreductie. Rio et al. 2017.',cat:'kracht'}],
       criteria_go:['VISA-A ≥ 90/100','Enkel LSI ≥ 90%','Single leg heel raise ≥ 25 reps','Volledig trainen NRS ≤ 1/10 24u later'],
       criteria_stop:['VISA-A < 80 na training → volume reduceren','Acute toename pijn bij sprint → terug naar fase 3'],
       redflags:['Acute "knal" bij sprinten → Thompson test → ruptuur uitsluiten','Chronische non-respons (> 6 mnd optimale therapie) → orthopedisch overleg: ESWT, PRP, chirurgie']},

      {label:'Fase 5',title:'Preventie & Langetermijn',weeks:'Mnd 5+',
       evidence:'<strong>Onderhoudstraining</strong> 2–3×/week voorkomt recidief — 90% blijft symptoomvrij op 5 jaar bij consistent onderhoud (Alfredson, 2011). <strong>Seizoensgebonden risico</strong>: abrupte toename trainingsvolume (pre-season) is sterkste risicofactor (Dye, 1996 — tissue homeostasis model). <strong>Schoeisel</strong>: versleten loopschoenen (> 600–800 km) verhogen risico — controleer regelmatig. <strong>Achillespeesbelasting</strong> bij hardlopen: 6–8× lichaamsgewicht — bij 70 kg patiënt = 420–560 kg per stap. <strong>Fluorochinolonen</strong>: bij herval altijd medicatie-anamnese herhalen.',
       goals:['Onderhoudsprogramma 2–3×/week zelfstandig','Trainingsbelasting monitoren (10%-regel, acute:chronische ratio)','Schoeisel regelmatig controleren en vervangen','VISA-A ≥ 90 behouden','Vroege tekenen herkennen en handelen'],
       exercises:[
         {name:'Onderhoudsprogramma (2–3×/week)',params:[['Vb','heel raises, HSR calf, isometrie'],['Duur','20–25 min']],note:'Minimale dosis: 3×15 heel raises + 3×8 HSR unilateraal. Stoppen bij asymptomatisch = meest gemaakte fout. Integreer na warming-up in reguliere training.',cat:'kracht'},
         {name:'VISA-A monitoring (elke 6–8 weken)',params:[['Alarm','< 80 → actie']],note:'Bij daling onder 80: direct isometrie opstarten + trainingsvolume −20%. Vroege actie voorkomt terugval naar acute fase.',cat:'test'},
         {name:'Schoeiselcheck',params:[['Interval','elke 3–6 maanden'],['Grens','600–800 km loopafstand']],note:'Versleten middenzool verhoogt impact en peesbelasting. Gebruik loopapp om km bij te houden. Hak-teen drop ≥ 8mm aanbevolen bij tendinopathie-voorgeschiedenis.',cat:'manueel'},
         {name:'Trainingsbelasting logboek',params:[['Methode','sessie-RPE × duur'],['Ratio','acuut:chronisch < 1.5']],note:'Acute:chronische belastingsratio bewaken. Week-tot-week stijging max 10%. Bij ratio > 1.5 = verhoogd blessurerisico. Apps: Training Peaks, HRV4Training.',cat:'manueel'}],
       criteria_go:['VISA-A ≥ 90 behouden','Onderhoudsprogramma geïntegreerd','Schoeisel up-to-date','Recidief-actieplan gekend'],
       criteria_stop:['VISA-A < 80 → isometrie + volume reduceren direct','Krachtverlies LSI < 85% → krachtcyclus herstarten'],
       redflags:['Acute ruptuur symptomen → spoed','VISA-A progressief dalend ondanks optimale aanpak → orthopedisch overleg','Nieuw fluorochinolonen-gebruik → informeer arts over tendinopathie-voorgeschiedenis']}
    ],
    refs:'Alfredson et al. (1998) — Heavy-load eccentric calf muscle training for chronic Achilles tendinosis. Am J Sports Med RCT. | Beyer et al. (2015) — HSR vs eccentric training for Achilles tendinopathy. Am J Sports Med RCT. | Rio et al. (2017) — Isometric exercise for tendinopathy pain relief. Br J Sports Med. | Silbernagel et al. (2007) — Continued sports activity using a pain-monitoring model. Am J Sports Med. | Jonsson et al. (2008) — New regimen for eccentric calf muscle training in insertional Achilles tendinopathy. Br J Sports Med. | Cook & Purdam (2009) — Tendinopathy continuum model. Br J Sports Med. | Silbernagel et al. (2020) — Consensus on RTS after Achilles tendon rupture. Br J Sports Med.'},
  bureau:{id:'bureau',title:'Bureauhouding & Nekklachten',subtitle:'Revalidatie en preventie van werkgerelateerde nek-, schouder- en rugklachten (trapezius syndroom, cervicogene hoofdpijn, thoracale kyfose, acute lumbago)',color:'#60a5fa',
    phases:[
      {label:'Fase 0',title:'Diagnostiek & Subclassificatie',weeks:'Eerste contact',
       evidence:'<strong>Werkgerelateerde nekklachten</strong> zijn de tweede meest voorkomende musculoskeletale aandoening na lagerugpijn (WHO, 2021). <strong>Vier subgroepen</strong> vereisen een specifieke aanpak: (1) Trapezius myofasciaal syndroom, (2) Cervicogene hoofdpijn, (3) Thoracale hyperkyfose met scapulaire dyskinese, (4) Acute lumbago bij bureauwerker. <strong>Flexion-Relaxation Phenomenon (FRP)</strong>: bij gezonde nek relaxeert de erector spinae bij volledige flexie — bij chronische klachten ontbreekt dit. <strong>Deep Neck Flexor (DNF) zwakte</strong> is aanwezig bij 96% van chronische nekpijnpatiënten (Jull et al., 2008). <strong>Psychosociale factoren</strong> (werkstress, jobontevredenheid) zijn sterkere predictoren van chroniciteit dan biomechanische factoren (Linton, 2001).',
       goals:['Subgroep bepalen: trapezius / cervicogene HFK / thoracaal / lumbaal','Neurologisch screenen: uitstraling, tintelingen, kracht','Werkplek-anamnese: uren aan bureau, beeldschermhoogte, stoelinstelling','Baseline: NDI (Neck Disability Index) of Oswestry','Psychosociale screening: werk-stress, slaap, catastroferen','Rode vlaggen uitsluiten'],
       exercises:[
         {name:'Cranio-cervicale flexietest (CCFT)',params:[['Druk','22 → 26 → 30 mmHg'],['Tool','drukmanchet of stabilizer']],note:'Goudstandaard DNF-test (Jull et al.). Ruglig, sensormanchet onder nek (22 mmHg baseline). Licht knikken: neus naar plafond. Doel: 10 sec houden op 26 mmHg zonder compensatie superficiële flexoren. < 24 mmHg = significante zwakte.',cat:'test'},
         {name:'Cervicale ROM meting',params:[['Vlakken','flexie, extensie, rotatie, lateraalflexie'],['Norm','rotatie ≥ 60–70°, flexie ≥ 50°']],note:'Goniometer of CROM-device. Asymmetrie rotatie > 10° = significant. Pijn bij extensie + rotatie = facetpathologie overwegen.',cat:'test'},
         {name:'Spurling test (cervicale radiculopathie)',params:[['Sens','0.50'],['Spec','0.86']],note:'Compressie + ipsilaterale lateraalflexie + extensie. Positief bij uitstraling arm. Hoge specificiteit: positief = radiculopathie waarschijnlijk. Negatief sluit niet uit.',cat:'test'},
         {name:'NDI (Neck Disability Index)',params:[['Score','0–50'],['Matig','15–24'],['Ernstig','≥ 25']],note:'10 items over dagelijkse activiteiten. MCID = 7/50 punten. Elke 4 weken herhalen. Gratis beschikbaar.',cat:'test'},
         {name:'Werkplek-analyse',params:[['Check','scherm, stoel, muis, toetsenbord, licht']],note:'Scherm: bovenkant op ooghoogte. Stoel: voeten plat, knieën 90°, lendenkussen. Muis: elleboog 90°, dicht bij lichaam. Telefoon: NOOIT klem tussen oor en schouder.',cat:'manueel'}],
       criteria_go:['Subgroep bepaald','Rode vlaggen uitgesloten','NDI baseline afgenomen','Werkplek-anamnese voltooid'],
       criteria_stop:['Myelopathie tekenen (Hoffmann, Babinski, spasticiteit) → spoedverwijzing neurologie','Wervelkanaalvernauwing symptomen → MRI + neurochirurg'],
       redflags:['Cervicale myelopathie: klumsy hands, loopstoornissen, Hoffmann positief → spoed neurologie','Ernstige nekpijn + koorts + meningisme → meningitis → SPOED','Nekpijn na trauma (val, whiplash) + neurologische uitval → RX/CT cervicaal','Plotse ergste hoofdpijn ooit + nekstijfheid → subarachnoïdale bloeding → SPOED','Kloppende hoofdpijn + visuele stoornissen + leeftijd > 50j → arteriitis temporalis → spoed']},

      {label:'Fase 1',title:'Pijnmanagement & Ergonomie',weeks:'Week 1–3',
       evidence:'<strong>Thermotherapie</strong> (warmte) is effectiever dan koude voor spiergebonden nekpijn — reduceert spierspasme via vasodilatatie (French et al., 2006 — Cochrane). <strong>Manuele therapie</strong> (mobilisatie C0–C2) gecombineerd met oefentherapie is superieur aan elk afzonderlijk voor cervicogene hoofdpijn (Jull et al., 2002 — RCT). <strong>Ergonomische interventie</strong> alleen onvoldoende zonder actieve oefentherapie (Hoe et al., 2012 — Cochrane). <strong>Bewegingspauzes</strong> elke 30–45 min reduceren nekpijn bij bureauwerkers met 38% (Galinsky et al., 2007). <strong>Diepe nekhoudingsspieren</strong> herstel is prioritair — superficiële compensatie (upper trap, SCM) verergert klachten.',
       goals:['NRS ≤ 3/10 in rust','Werkplek geoptimaliseerd (scherm, stoel, muis)','Begrip van belastings- en herstelcyclus','Bewegingspauze-routine geïntegreerd (elke 30–45 min)','Eerste activering diepe nekflexoren'],
       exercises:[
         {name:'Chin tuck (cervicale retractie)',params:[['Reps','10–15'],['Hold','5–10 sec'],['Sets','3'],['Freq','3–4×/dag, ook aan bureau']],note:'PRIORITEITSOEFENING fase 1. Zittend of staand: dubbele kin maken zonder knik nek te buigen. Gevoel: lichte rek achteraan nek. Corrigeert forward head posture. Kan ook liggend met rol onder nek.',cat:'kracht'},
         {name:'Scapulaire retractie (shoulder blade squeeze)',params:[['Reps','10–15'],['Hold','5 sec'],['Sets','3'],['Freq','3×/dag']],note:'Zittend: schouders naar achter en omlaag trekken — "kneep een potlood tussen je schouderbladeren". Deactiveert upper trap, activeert lower trap + rhomboids. Correctie van protractiehouding.',cat:'kracht'},
         {name:'Cervicale lateraalflexie stretch (passief)',params:[['Zijde','pijnlijke zijde eerst'],['Hold','30 sec'],['Sets','2–3'],['Freq','3×/dag']],note:'Zittend, hand op hoofd, laat hoofd zijwaarts zakken. Andere hand achter stoel. Voelt rek in trapezius/SCM. NIET trekken — zwaartekracht volstaat. Combineer met diepe ademhaling.',cat:'mobiliteit'},
         {name:'Thoracale extensie op schuimrol',params:[['Positie','rol dwars onder thoracaal'],['Reps','10–15 extensies'],['Freq','2×/dag']],note:'Schuimrol dwars onder midden-thorax (T4–T8). Armen gekruist voor borst of achter hoofd. Laat borstkas zakken in extensie. Meest impactvolle oefening voor bureauhouding. Segmenteel doorwerken: rol iets opschuiven.',cat:'mobiliteit'},
         {name:'Bewegingspauze-routine (30-30-30)',params:[['Timing','elke 30 min'],['Duur','30 sec'],['Inhoud','3 oefeningen × 10 reps']],note:'Alarm instellen elke 30 min. Routine: chin tuck × 10 + schouderrol × 10 + thoracale extensie × 10. Totaal 90 sec. Gebruik als gewoonte-anker (bij koffiemoment, vergadering enz.).',cat:'manueel'},
         {name:'Warmteapplicatie nek/trapezius',params:[['Duur','15–20 min'],['Freq','1–2×/dag bij acute pijn']],note:'Warmtekussen of warm bad. Reduceert spierspasme. Combineer met zachte cervicale rotatie tijdens warmte. NIET bij acute ontsteking met warmte/roodheid.',cat:'manueel'}],
       criteria_go:['NRS ≤ 3/10','Werkplek geoptimaliseerd','Bewegingspauze-routine aangeleerd','Chin tuck correct uitvoerbaar'],
       criteria_stop:['Uitstraling arm + tinteling → Spurling herhalen, overweeg beeldvorming','Toename pijn na mobilisatie → manuele therapie aanpassen'],
       redflags:[]},

      {label:'Fase 2',title:'Mobiliteit & Diepe Spieractivatie',weeks:'Week 2–6',
       evidence:'<strong>Deep Neck Flexor (DNF) training</strong> via cranio-cervicale flexie (lage belasting, hoge precisie) is superieur aan krachttraining voor pijnreductie en functionele verbetering bij chronische nekpijn (Jull et al., 2009 — RCT). <strong>Thoracale mobilisatie</strong> vermindert nekpijn via mechanische koppeling C-TH overgang — thoracale extensiemobilisatie geeft betere kortetermijnresultaten dan cervicale manipulatie bij nekpijn (Cleland et al., 2007 — RCT). <strong>Scapulaire stabilisatie</strong>: verminderde lower trap activatie bij 78% van bureauwerkers met nekpijn (Cools et al., 2007). <strong>Oogspier-coördinatie</strong> training verbetert cervicaal proprioceptie bij chronische nekpijn (Revel et al., 1994).',
       goals:['Cervicale ROM volledig herstel (rotatie ≥ 60°)','DNF kracht: CCFT ≥ 26 mmHg 10 sec','Thoracale extensie subjectief verbeterd','Scapulaire retractie automatisch bij zitten','NDI verbetering ≥ 7 punten tov baseline'],
       exercises:[
         {name:'Cranio-cervicale flexie progressie (DNF)',params:[['Druk','22 → 24 → 26 → 28 mmHg'],['Hold','10 sec'],['Reps','10'],['Sets','3'],['Freq','dagelijks']],note:'Opbouw over 4–6 weken. Week 1–2: 24 mmHg. Week 3–4: 26 mmHg. Week 5–6: 28 mmHg. Controle: geen activatie SCM of anterior scaleen. Voelbaar met vingers aan de zijkanten van de nek.',cat:'kracht'},
         {name:'Cervicale rotatie mobilisatie (actief)',params:[['ROM','vol bereik'],['Reps','10/zijde'],['Sets','3'],['Freq','2×/dag']],note:'Staand of zittend. Traag, vol bereik. Progressie: met theraband weerstand in eindpositie houden (isometrisch). Geen pijn > NRS 4.',cat:'mobiliteit'},
         {name:'Thoracale rotatie (zittend op stoel)',params:[['Reps','10/zijde'],['Sets','3']],note:'Zit op stoel, voeten op grond. Armen gekruist voor borst. Roteer thorax maximaal naar links en rechts. Mobiel segment T4–T8. Hoofd volgt mee. Combineer met uitademing bij rotatie.',cat:'mobiliteit'},
         {name:'Wall angel (muur-engel)',params:[['Reps','10–12'],['Sets','3'],['Progressie','rug aan muur → vrij staand']],note:'Rug en hoofd tegen muur. Armen in W-positie (90° elleboog). Schuif armen omhoog naar Y-positie. Behoud contact rug, ellebogen en polsen met muur. Activeert lower trap + serratus + DNF simultaan.',cat:'kracht'},
         {name:'Lower trapezius activatie (prone Y)',params:[['Reps','10–12'],['Sets','3'],['Gewicht','geen → 0.5–1 kg']],note:'Buiklig. Armen in Y-positie (135°), duimen omhoog. Hef armen van tafel — GEEN schouderheffing. Traag omhoog, trager terug. Fundament scapulaire stabilisatie.',cat:'kracht'},
         {name:'Cervicale isometrie alle richtingen',params:[['Richtingen','flex, ext, rot L/R, lat flex L/R'],['Hold','5–10 sec'],['Reps','5–8/richting'],['Sets','2']],note:'Hand tegen hoofd, hoofd drukt tegen hand (geen beweging). Alle 6 richtingen. Bouwt diepe stabilisatorenkracht zonder ROM-beperking te provoceren. Start licht (20–30% MVC).',cat:'kracht'}],
       criteria_go:['Cervicale rotatie ≥ 60° bilateraal','CCFT ≥ 26 mmHg','NDI verbetering ≥ 7 punten','Thoracale extensie verbeterd','Wall angel zonder pijn'],
       criteria_stop:['Cervicale ROM verbetert niet na 4 weken → manuele therapie intensiveren','Aanhoudende hoofdpijn → cervicogene vs spanningshoofdpijn differentiëren'],
       redflags:[]},

      {label:'Fase 3',title:'Krachtontwikkeling & Globale Stabilisatie',weeks:'Week 4–10',
       evidence:'<strong>Neck-specifieke training</strong> (6 weken, 3×/week) resulteert in 75% pijnreductie bij bureauwerkers met chronische nekpijn — superieur aan algemene fitness (Andersen et al., 2008 — RCT, n=198). <strong>Weerstandstraining upper back</strong> (trapezius, rhomboids, serratus) geeft directe verbetering van nekpijn via vermindering myofasciale spanning. <strong>Hip hinge patroon</strong>: zwakke glutealen + stijve heupen leiden tot compensatoire lumbale overbelasting bij bureauzitters. <strong>Rugextensoren kracht</strong> (erector spinae, multifidus) correleert invers met lagerugpijn bij bureauwerkers (Biering-Sørensen, 1984).',
       goals:['Nekrotatie kracht LSI ≥ 90%','Lateral raise zonder schouderheffing','Deadlift-patroon technisch correct','Core stabiliteit: plank ≥ 60 sec','NDI < 15 (minimale beperking)','Zelfstandig thuisoefenschema'],
       exercises:[
         {name:'Band pull-apart',params:[['Reps','15–20'],['Sets','3'],['Band','licht → matig'],['Freq','3×/week']],note:'Armen gestrekt voor, band op schouderhoogte. Trek band uit elkaar tot armen wijd. Schouders omlaag en achter. Hoge lower trap + posterior deltoid + rhomboid activatie. De beste thuisoefening voor bureauhouding.',cat:'kracht'},
         {name:'Face pull (kabelstation of band)',params:[['Reps','12–15'],['Sets','3'],['Ellebogen','hoog']],note:'Handen naar gezicht trekken met ellebogen hoog. Externe rotatie in eindpositie. Correleert sterk met verminderde nekpijn bij bureauwerkers (Andersen 2008). Alternatief: band aan deur op gezichtshoogte.',cat:'kracht'},
         {name:'Romanian Deadlift (heup scharnier)',params:[['Reps','10–12'],['Sets','3'],['Belasting','licht begin']],note:'Heup scharnier aanleren: neutraal rug, gewicht zakken langs benen. Herstelt heup-dominante beweegstrategie. Vermindert lumbale compensatie. Start met stok om bewegingspatroon aan te leren.',cat:'kracht'},
         {name:'Plank (progressief)',params:[['Duur','20 sec → 60 sec → 90 sec'],['Sets','3'],['Progressie','knieën → tenen → instabiel']],note:'Neutrale wervelkolom (niet doorzakken of te hoog). Target: 60 sec correct voor onderhoud. Progressie: één arm/been optillen. Kernstabilisatie voor lumbale klachten.',cat:'stabiliteit'},
         {name:'Side plank',params:[['Duur','20–40 sec/zijde'],['Sets','3']],note:'Anti-lateraalflexie stabilisatie. Correleert met verminderde laterale neklachten. Progressie: heup omhoog/omlaag pulseren.',cat:'stabiliteit'},
         {name:'Nekrotatie met weerstand (band)',params:[['Reps','10–12/zijde'],['Sets','3'],['Band','licht']],note:'Zittend, band om hoofd via voorhoofd (of hand). Roteer tegen weerstand. Functionele nekrotatorkracht. Bilateraal gelijke kracht = doel.',cat:'kracht'},
         {name:'Doorway stretch (pectoralis minor)',params:[['Hold','30 sec'],['Sets','3'],['Positie','armen in 90°/W in deuropening']],note:'Stretch tight pectoralis minor — verkorting bij bureauhouding trekt schouders naar voor. Gecombineerd met scapulaire retractie is dit de krachtigste correctie voor protractiehouding.',cat:'mobiliteit'}],
       criteria_go:['Plank ≥ 60 sec','Nekrotatie kracht symmetrisch','RDL-patroon correct','NDI < 15','Band pull-apart 20 reps zonder compensatie'],
       criteria_stop:['Lumbale pijn verergert bij RDL → heupflexibiliteitsprobleem eerst aanpakken','Hoofdpijn neemt toe bij nekrotatie-training → load verminderen'],
       redflags:[]},

      {label:'Fase 4',title:'Werkplek-specifiek & Langetermijn Preventie',weeks:'Week 8+',
       evidence:'<strong>Multimodale aanpak</strong> (oefening + ergonomie + gedragsverandering) is significant superieur aan enkelvoudige interventies voor werkgerelateerde nekpijn op 1 jaar (Verhagen et al., 2013 — Cochrane). <strong>Mindfulness en stressreductie</strong> reduceren werkgerelateerde nekpijn met 42% via vermindering van spierspanning door psychosociale belasting (Lauche et al., 2016). <strong>Micro-pauzes</strong> (20-20-20 regel voor ogen + 30-30-30 voor nek) verminderen recidief met 55% bij consequente toepassing. <strong>Slaaphygiene</strong>: cervicaal kussen (ergonomisch) + slaaphouding op zij met neutraal hoofd vermindert ochtendsymptomen significant.',
       goals:['Zelfstandig onderhoudsprogramma 3×/week','Bewegingspauze-routine geïntegreerd als gewoonte','Werkplek volledig geoptimaliseerd','Slaaphouding en kussenkeuze geoptimaliseerd','Stressmanagement strategie actief','NDI < 10 (geen/minimale beperking)'],
       exercises:[
         {name:'Onderhoudsprogramma bureauwerker (3×/week)',params:[['Duur','20–25 min'],['Vb','band pull-apart, face pull, wall angel, plank, DNF']],note:'Minimale effectieve dosis. Integreer in bestaande routine (voor werk, in lunchpauze). Geen grote tijdsinvestering nodig: 20 min 3×/week volstaat voor preventief effect.',cat:'kracht'},
         {name:'20-20-20 regel (ogen + nek)',params:[['Timing','elke 20 min'],['Actie','20 sec kijken op 20 voet (6m) + 5 chin tucks']],note:'Combineer oogrusten met nekontlasting. App instellen op telefoon. Gewoonte koppelen aan bestaand gedrag (koffiedrinken, na elke vergadering).',cat:'manueel'},
         {name:'Cervicale zelfmobilisatie (onderhoud)',params:[['Vb','rotatie, lateraalflexie, thoracale ext'],['Duur','5 min'],['Freq','dagelijks voor werk']],note:'Ochtend-routine van 5 min. Thoracale extensie op rol + rotatie + chin tuck. Als tandenpoetsen: dagelijks, automatisch.',cat:'mobiliteit'},
         {name:'Ergonomische checklist (maandelijks)',params:[['Items','stoel, scherm, muis, licht, telefoon']],note:'Maandelijks 5-punten check: (1) Scherm bovenkant op ooghoogte. (2) Stoel: voeten plat, knie 90°, lendenkussen. (3) Muis dicht bij toetsenbord. (4) Telefoon: headset of speaker. (5) Laptop: altijd extern scherm of verhoger.',cat:'manueel'},
         {name:'Yoga/pilates nekfocus (optioneel)',params:[['Freq','1–2×/week'],['Vb','cat-cow, child pose, thread the needle']],note:'Aanvullend op krachtoefeningen. Cat-cow: thoracale mobiliteit. Thread the needle: thoracale rotatie. Child pose: lumbale tractie. Lage drempel, hoge therapietrouw.',cat:'mobiliteit'},
         {name:'Stressmanagement (ademhaling + ontspanning)',params:[['Tech','4-7-8 ademhaling, progressieve relaxatie'],['Freq','dagelijks 5 min']],note:'4 sec inademen, 7 sec vasthouden, 8 sec uitademen. Directe vermindering trapezius-spanning. Psychosociale factoren zijn sterkste predictor van chroniciteit — dit aanpakken is essentieel bij non-responders.',cat:'manueel'}],
       criteria_go:['NDI < 10','Zelfstandig onderhoud geïntegreerd','Ergonomie volledig geoptimaliseerd','Recidief-actieplan gekend'],
       criteria_stop:['NDI blijft > 20 na 3 maanden → biopsychosociaal model herbekijken, psycholoog?','Hoofdpijn blijft → neuroloog'],
       redflags:['Nieuwe neurologische symptomen (tinteling, krachtsverlies arm) → MRI cervicaal','Progressieve nekpijn + gewichtsverlies + nachtzweten → oncologische screening']}
    ],
    refs:'Jull et al. (2009) — Therapeutic exercise for cervicogenic headache. Spine RCT. | Andersen et al. (2008) — Neck/shoulder exercises for office workers. JAMA RCT. | Cleland et al. (2007) — Thoracic manipulation for neck pain. J Orthop Sports Phys Ther. | French et al. (2006) — Superficial heat for LBP. Cochrane. | Hoe et al. (2012) — Ergonomics interventions for upper limb work disorders. Cochrane. | Verhagen et al. (2013) — Conservative interventions for neck pain in office workers. Cochrane. | Linton (2001) — Psychosocial risk factors for neck and back pain. Spine.'},
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
    refs:'Itoi E et al. (2007) — Immobilization in external rotation reduces reluxation risk after first-time shoulder dislocation. J Bone Joint Surg Am. | Kibler WB et al. (2013) — Clinical implications of scapular dyskinesis in shoulder injury. Br J Sports Med. | Lephart SM et al. (1994) — Proprioception after glenohumeral dislocation. J Shoulder Elbow Surg. | Balg F & Boileau P (2007) — The instability severity index score. J Bone Joint Surg Br. | Brophy RH & Marx RG (2009) — Treatment of traumatic anterior shoulder instability. Clin Orthop Relat Res. | Burkhead WZ & Rockwood CA (1992) — Treatment of instability of the shoulder with an exercise program. J Bone Joint Surg Am. | Wilk KE et al. (2013) — Shoulder injuries in the overhead athlete. J Orthop Sports Phys Ther.'},

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
    refs:'Souer JS et al. (2011) — Wrist rehabilitation programs after distal radius fractures. J Hand Surg Am. | Quadlbauer S et al. (2017) — Early rehabilitation after volar locked plating of distal radius fractures. J Wrist Surg. | MacDermid JC et al. (2004) — The Patient-Rated Wrist Evaluation (PRWE): psychometric properties. J Hand Ther. | Lozano-Calderón SA et al. (2008) — The quality and strength of evidence for etiology: example of carpal tunnel syndrome. J Hand Surg Am. | Lattanza LL et al. (2017) — Open vs closed reduction of distal radius fractures in elderly. J Bone Joint Surg Am. | Valdes K et al. (2012) — A comparison of conservative interventions for distal radius fracture. J Hand Ther. | Ruch DS & Papadonikolakis A (2006) — Volar versus dorsal plating in the management of intra-articular distal radius fractures. J Hand Surg Am.'},

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
    refs:'Peters-Veluthamaningal C et al. (2009) — Corticosteroid injection for de Quervain\'s tenosynovitis. Cochrane Database Syst Rev. | Cavaleri R et al. (2016) — Hand therapy versus corticosteroid injections in the treatment of de Quervain\'s disease: a systematic review and meta-analysis. J Hand Ther. | Goel R & Abzug JM (2015) — de Quervain\'s tenosynovitis: a review of the rehabilitative options. Hand (NY). | Chern TC et al. (2014) — The prevalence of a septum and its morphology in the first dorsal compartment of the wrist. J Bone Joint Surg Br. | Cook JL & Purdam CR (2009) — Is tendon pathology a continuum? A pathology model to explain the clinical presentation of load-induced tendinopathy. Br J Sports Med. | Ilyas AM et al. (2007) — de Quervain tenosynovitis of the wrist. J Am Acad Orthop Surg. | Backstrom KM (2002) — Mobilization with movement as an adjunct intervention in a patient with complicated de Quervain\'s tenosynovitis: a case report. J Orthop Sports Phys Ther.'},

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
    refs:'Page MJ et al. (2022) — Surgery for carpal tunnel syndrome. Cochrane Database Syst Rev. | Fernández-de-las-Peñas C et al. (2021) — Manual therapy versus surgery for carpal tunnel syndrome: a randomized parallel-group trial. J Pain. | Walker WC et al. (2000) — Neutral wrist splinting in carpal tunnel syndrome: a comparison of night-only versus full-time wear instructions. Arch Phys Med Rehabil. | Atroshi I et al. (2009) — Endoscopic carpal tunnel release: a prospective assessment of 255 consecutive cases. J Bone Joint Surg Am. | Marshall SC et al. (2007) — Local corticosteroid injection for carpal tunnel syndrome. Cochrane Database Syst Rev. | Wehbé MA & Schlegel JM (2004) — Nerve and tendon gliding exercises and the conservative management of carpal tunnel syndrome. J Hand Ther. | Huisstede BM et al. (2010) — Carpal tunnel syndrome: hand therapists\' view on factors associated with outcomes of nonsurgical and surgical treatment. Arch Phys Med Rehabil. | Bland JD (2007) — Carpal tunnel syndrome. BMJ. | Shiels SM et al. (2016) — Scar management after carpal tunnel release. J Hand Surg Am.'}
};

// ── REGIO MAPPING (protocol → regio) ──
const REGIO_MAP = {
  acl:'Knie & Heup', tka:'Knie & Heup', pfps:'Knie & Heup', pt:'Knie & Heup', gmt:'Knie & Heup',
  lh:'Lumbaal & Cervicaal', bureau:'Lumbaal & Cervicaal',
  rc:'Schouder & Arm', si:'Schouder & Arm',
  at:'Enkel & Voet', enkel:'Enkel & Voet', over:'Enkel & Voet',
  orif:'Pols & Hand', dq:'Pols & Hand', cts:'Pols & Hand',
};

// ── SPIERGROEP KEYWORD MAPPING ──
const SPIER_KEYWORDS = [
  {spier:'Quadriceps',               color:'#22d3ee',
   kw:['squat','kniebuig','leg press','beenpers','quadriceps','extensie knie','knie-extensie','VMO','terminal knee','wall squat','step-up','step up','lunge','uitval','beenheffen','SLR','beenpress','leg extension']},
  {spier:'Hamstrings',               color:'#f97316',
   kw:['hamstring','beenbuig','nordic','leg curl','deadlift','hip hinge','RDL','heupscharnierbeweging']},
  {spier:'Gluteus maximus',          color:'#a78bfa',
   kw:['heupbrug','bridge','hip thrust','gluteus','bilspier','heupextensie','hip extension','donkey kick','deadlift','RDL']},
  {spier:'Gluteus medius',           color:'#fb923c',
   kw:['heupabductie','abductie','clamshell','side-lying','lateral walk','band walk','gluteus medius','heupstabilisatie','X-band']},
  {spier:'Gastrocnemius / Soleus',   color:'#4ade80',
   kw:['kuitheffen','calf','gastrocnemius','soleus','plantairflexie','staan op teen','enkelpush','alfredson','eccentrisch kuit']},
  {spier:'Tibialis / Peronealen',    color:'#34d399',
   kw:['tibialis','peroneus','dorsaalflexie','enkelpropriocept','BOSU','wiebelplank','perturbatie','evenwicht','balance','wiebelboard','taping enkel']},
  {spier:'Rotatorenmanchet',         color:'#f43f5e',
   kw:['rotator','RC','supraspinatus','infraspinatus','subscapularis','teres','externe rotatie','interne rotatie','ER rotatie','IR rotatie','side-lying ER','ER/IR','sleeper stretch']},
  {spier:'Deltoideus',               color:'#e879f9',
   kw:['deltoideus','schouderpress','shoulder press','zijwaartse heffing','laterale heffing','overhead press','abductie schouder','frontheffing']},
  {spier:'Trapezius / Rhomboïden',   color:'#60a5fa',
   kw:['trapezius','rhomboïd','scapulaire','retractie','row','Y-T-W','prone Y','face pull','scapula','Brugger','upper trap','lower trap','wall slide schouder']},
  {spier:'Core / Buikspieren',       color:'#facc15',
   kw:['plank','core','buik','dead bug','crunch','pallof','McGill','hollowing','stabilisatie romp','transversus','multifidus','CO-contractie','rollout','sit-up','bird dog']},
  {spier:'Lumbale extensoren',       color:'#f59e0b',
   kw:['rugextensie','erector','back extension','hyperextensie','McKenzie','lumbaal','roman chair','rugspier','prone extension','cobra']},
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
        info: 'VISA-P als objectieve maat. MCID = 13 punten. Beyer 2015: HSR superieur voor compliance.',
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


