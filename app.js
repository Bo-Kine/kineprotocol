// KineProtocol — app.js v5.0 (5 protocollen)

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
    refs:'Dubois B, Esculier JF (2019/2020) — Soft-tissue injuries simply need PEACE and LOVE. Br J Sports Med 54:72-73. | APTA Clinical Practice Guidelines (2021) — Ankle Stability and Movement Coordination Impairments: Lateral Ankle Ligament Sprains Revision. J Orthop Sports Phys Ther 51(4):CPG1-80. | Flore Z et al. (2024) — Rehabilitation Algorithm After Lateral Ankle Sprains in Professional Football. Int J Sports Phys Ther 19(7):910-922. | Hupperets MDW et al. (2009) — Effect of unsupervised home based proprioceptive training on recurrences of ankle sprain. BMJ 339:b2684 (RCT n=522). | Vuurberg G et al. (2018) — Diagnosis, treatment and prevention of ankle sprains: update of an evidence-based clinical guideline. Br J Sports Med 52(15):956. | Gribble PA et al. (2016) — Evidence review for the 2016 International Ankle Consortium consensus statement on prevalence and consequences of lateral ankle sprains. Br J Sports Med 50:1496. | Bachmann LM et al. (2003) — Accuracy of Ottawa ankle rules to exclude fractures. BMJ 326:417. | Tassignon B et al. (2019) — Criteria-based return to sport decision-making following lateral ankle sprain. Sports Med 49(4):601-619. | Dizon JMR, Reyes JJB (2010) — A systematic review on the effectiveness of external ankle supports in the prevention of inversion ankle sprains. J Sci Med Sport 13:309-317.'}
};

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
};

// ── STATE ──
let currentProto = null;
let deferredPrompt = null;
let editingPatientId = null;

// ── SUPABASE CONFIG ──
const SUPA_URL = 'https://vcxlozcpxjebwbdosfbt.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjeGxvemNweGplYndiZG9zZmJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzMzYzNzAsImV4cCI6MjA5MTkxMjM3MH0.Ld1LPj08wgAnOobpvGlUHCQlnRhPY4N33epFsfFC2MI';

// ── AUTH STATE ──
let currentUser = null; // {id, email, access_token}
let syncStatus = 'idle';
let syncTimeout = null;

function getAuthHeaders() {
  const token = currentUser ? currentUser.access_token : SUPA_KEY;
  return {
    'Content-Type': 'application/json',
    'apikey': SUPA_KEY,
    'Authorization': 'Bearer ' + token
  };
}

function setSyncStatus(status, msg) {
  syncStatus = status;
  const el = document.getElementById('sync-indicator');
  if(!el) return;
  const icons = {idle:'', syncing:'⟳', ok:'✓', error:'⚠'};
  const colors = {idle:'var(--muted2)', syncing:'#f59e0b', ok:'#22c55e', error:'#ef4444'};
  el.textContent = icons[status] + (msg ? ' ' + msg : '');
  el.style.color = colors[status];
  el.style.display = status === 'idle' ? 'none' : '';
  if(status === 'ok') {
    clearTimeout(syncTimeout);
    syncTimeout = setTimeout(() => setSyncStatus('idle'), 3000);
  }
}

// ── AUTH FUNCTIONS ──
async function signIn(email, password) {
  const res = await fetch(SUPA_URL + '/auth/v1/token?grant_type=password', {
    method: 'POST',
    headers: {'Content-Type':'application/json','apikey':SUPA_KEY},
    body: JSON.stringify({email, password})
  });
  const data = await res.json();
  if(!res.ok) throw new Error(data.error_description || data.msg || 'Inloggen mislukt');
  currentUser = {id: data.user.id, email: data.user.email, access_token: data.access_token, refresh_token: data.refresh_token};
  localStorage.setItem('kp_session', JSON.stringify(currentUser));
  return currentUser;
}

async function signUp(email, password) {
  const res = await fetch(SUPA_URL + '/auth/v1/signup', {
    method: 'POST',
    headers: {'Content-Type':'application/json','apikey':SUPA_KEY},
    body: JSON.stringify({email, password})
  });
  const data = await res.json();
  if(!res.ok) throw new Error(data.error_description || data.msg || 'Registratie mislukt');
  if(data.access_token) {
    currentUser = {id: data.user.id, email: data.user.email, access_token: data.access_token, refresh_token: data.refresh_token};
    localStorage.setItem('kp_session', JSON.stringify(currentUser));
    return currentUser;
  }
  // Email confirmation required
  return null;
}

async function refreshSession() {
  const session = JSON.parse(localStorage.getItem('kp_session') || 'null');
  if(!session || !session.refresh_token) return false;
  try {
    const res = await fetch(SUPA_URL + '/auth/v1/token?grant_type=refresh_token', {
      method: 'POST',
      headers: {'Content-Type':'application/json','apikey':SUPA_KEY},
      body: JSON.stringify({refresh_token: session.refresh_token})
    });
    if(!res.ok) return false;
    const data = await res.json();
    currentUser = {id: data.user.id, email: data.user.email, access_token: data.access_token, refresh_token: data.refresh_token};
    localStorage.setItem('kp_session', JSON.stringify(currentUser));
    return true;
  } catch(e) { return false; }
}

function signOut() {
  currentUser = null;
  localStorage.removeItem('kp_session');
  localStorage.removeItem('kp_patients');
  Object.keys(localStorage).filter(k => k.startsWith('kp_scores_')).forEach(k => localStorage.removeItem(k));
  updatePatientBadge();
  showLoginScreen();
}

// ── LOGIN SCREEN ──
function showLoginScreen() {
  document.getElementById('app-wrapper').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
  document.getElementById('login-error').textContent = '';
}

function hideLoginScreen() {
  document.getElementById('app-wrapper').style.display = 'flex';
  document.getElementById('login-screen').style.display = 'none';
  // Update user indicator in topbar
  const userEl = document.getElementById('user-indicator');
  if(userEl && currentUser) {
    userEl.textContent = currentUser.email.split('@')[0];
    userEl.style.display = '';
  }
  const logoutBtn = document.getElementById('logout-btn');
  if(logoutBtn) logoutBtn.style.display = '';
}

async function handleLogin(mode) {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const errEl = document.getElementById('login-error');
  const btn = document.getElementById('login-btn');
  if(!email || !password) { errEl.textContent = 'Vul e-mail en wachtwoord in.'; return; }
  btn.textContent = '...'; btn.disabled = true;
  try {
    if(mode === 'login') {
      await signIn(email, password);
    } else {
      const result = await signUp(email, password);
      if(!result) {
        errEl.style.color = '#22c55e';
        errEl.textContent = 'Account aangemaakt! Controleer je e-mail om te bevestigen, dan kun je inloggen.';
        btn.textContent = 'Aanmelden'; btn.disabled = false;
        return;
      }
    }
    hideLoginScreen();
    await loadFromSupabase();
  } catch(e) {
    errEl.style.color = '#ef4444';
    errEl.textContent = e.message;
  }
  btn.textContent = mode === 'login' ? 'Inloggen' : 'Account aanmaken';
  btn.disabled = false;
}

function setSyncStatus(status, msg) {
  syncStatus = status;
  const el = document.getElementById('sync-indicator');
  if(!el) return;
  const icons = {idle:'', syncing:'⟳', ok:'✓', error:'⚠'};
  const colors = {idle:'var(--muted2)', syncing:'#f59e0b', ok:'#22c55e', error:'#ef4444'};
  el.textContent = icons[status] + (msg ? ' ' + msg : '');
  el.style.color = colors[status];
  el.style.display = status === 'idle' ? 'none' : '';
  if(status === 'ok') {
    clearTimeout(syncTimeout);
    syncTimeout = setTimeout(() => setSyncStatus('idle'), 3000);
  }
}

// ── PATIENTS (Supabase + localStorage fallback) ──
function loadPatients() {
  try { return JSON.parse(localStorage.getItem('kp_patients') || '[]'); } catch(e) { return []; }
}

function savePatients(pts) {
  try { localStorage.setItem('kp_patients', JSON.stringify(pts)); } catch(e) {}
  updatePatientBadge();
  if(currentUser) syncToSupabase(pts);
}

async function syncToSupabase(pts) {
  if(!currentUser) return;
  setSyncStatus('syncing', 'Opslaan...');
  try {
    const uid = currentUser.id;
    const headers = getAuthHeaders();
    // Delete and re-insert patients row for this user
    await fetch(SUPA_URL + '/rest/v1/patients?id=eq.all_' + uid, {method:'DELETE', headers});
    await fetch(SUPA_URL + '/rest/v1/patients', {
      method: 'POST',
      headers: {...headers, 'Prefer':'return=minimal'},
      body: JSON.stringify({id: 'all_' + uid, user_id: uid, data: pts})
    });
    // Sync scores
    const scoreKeys = Object.keys(localStorage).filter(k => k.startsWith('kp_scores_'));
    const scoresObj = {};
    scoreKeys.forEach(k => { try { scoresObj[k] = JSON.parse(localStorage.getItem(k)); } catch(e) {} });
    await fetch(SUPA_URL + '/rest/v1/patients?id=eq.scores_' + uid, {method:'DELETE', headers});
    await fetch(SUPA_URL + '/rest/v1/patients', {
      method: 'POST',
      headers: {...headers, 'Prefer':'return=minimal'},
      body: JSON.stringify({id: 'scores_' + uid, user_id: uid, data: scoresObj})
    });
    setSyncStatus('ok', 'Opgeslagen');
  } catch(e) {
    setSyncStatus('error', 'Sync mislukt');
    console.error('Supabase sync error:', e);
  }
}

async function loadFromSupabase() {
  if(!currentUser) return;
  setSyncStatus('syncing', 'Laden...');
  const uid = currentUser.id;
  const headers = getAuthHeaders();
  try {
    const res = await fetch(SUPA_URL + '/rest/v1/patients?id=eq.all_' + uid + '&select=data', {headers});
    if(!res.ok) throw new Error('HTTP ' + res.status);
    const rows = await res.json();
    if(rows && rows.length > 0 && rows[0].data) {
      localStorage.setItem('kp_patients', JSON.stringify(rows[0].data));
    }
    const sRes = await fetch(SUPA_URL + '/rest/v1/patients?id=eq.scores_' + uid + '&select=data', {headers});
    if(sRes.ok) {
      const sRows = await sRes.json();
      if(sRows && sRows.length > 0 && sRows[0].data) {
        Object.entries(sRows[0].data).forEach(([k,v]) => {
          try { localStorage.setItem(k, JSON.stringify(v)); } catch(e) {}
        });
      }
    }
    setSyncStatus('ok', 'Gesynchroniseerd');
    updatePatientBadge();
    const ps = document.getElementById('screen-patients');
    if(ps && ps.style.display !== 'none') renderPatientList();
  } catch(e) {
    setSyncStatus('error', 'Geen verbinding');
    console.error('Supabase load error:', e);
  }
}
function updatePatientBadge() {
  const pts = loadPatients();
  const count = pts.length;
  const badge = document.getElementById('pat-count-badge');
  const stat = document.getElementById('stat-patients');
  if(badge) { badge.textContent = count; badge.style.display = count > 0 ? '' : 'none'; }
  if(stat) stat.textContent = count;
}
function genId() { return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }
function getInitials(name) {
  return name.split(' ').filter(Boolean).map(w=>w[0].toUpperCase()).slice(0,2).join('');
}
function getProtoColor(pid) {
  const colors = {acl:'#22d3ee',tka:'#a78bfa',pfps:'#f97316',lh:'#34d399',rc:'#f43f5e',pt:'#fb923c',at:'#e879f9',bureau:'#60a5fa'};
  return colors[pid] || '#71717a';
}
function formatDate(iso) {
  if(!iso) return '';
  try { return new Date(iso).toLocaleDateString('nl-BE',{day:'2-digit',month:'2-digit',year:'numeric'}); } catch(e) { return iso; }
}
function calcAge(dob) {
  if(!dob) return null;
  const today = new Date(), birth = new Date(dob);
  let age = today.getFullYear() - birth.getFullYear();
  if(today.getMonth() < birth.getMonth() || (today.getMonth()===birth.getMonth() && today.getDate()<birth.getDate())) age--;
  return age;
}

// ── PWA INSTALL ──
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault(); deferredPrompt = e;
  document.getElementById('installBtn').classList.add('visible');
  document.getElementById('installBanner').classList.add('show');
});
window.addEventListener('appinstalled', () => {
  document.getElementById('installBtn').classList.remove('visible');
  document.getElementById('installBanner').classList.remove('show');
  deferredPrompt = null;
});
function installApp() {
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(() => { deferredPrompt = null; });
}
window.addEventListener('offline', () => document.getElementById('offlineBadge').classList.add('show'));
window.addEventListener('online', () => document.getElementById('offlineBadge').classList.remove('show'));

// ── YOUTUBE MODAL ──
function openYT(videoId, title) {
  document.getElementById('yt-title').textContent = title;
  document.getElementById('yt-frame').src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  document.getElementById('yt-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeYT() {
  document.getElementById('yt-modal').classList.remove('open');
  document.getElementById('yt-frame').src = '';
  document.body.style.overflow = '';
}

// ── NAVIGATION ──
function hideAllScreens() {
  ['screen-home','screen-proto','screen-patients','screen-patient-detail','screen-search'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.style.display = 'none';
  });
}
function setNav(id) {
  document.querySelectorAll('[id^="nav-"],[id^="bnav-"]').forEach(n => n.classList.remove('active'));
  const s = document.getElementById('nav-'+id), b = document.getElementById('bnav-'+id);
  if(s) s.classList.add('active');
  if(b) b.classList.add('active');
}
function showHome() {
  hideAllScreens();
  document.getElementById('screen-home').style.display = '';
  document.getElementById('searchInput').value = '';
  setNav('home'); currentProto = null;
}
function showProto(id) {
  const p = protocols[id]; if(!p) return;
  currentProto = p;
  hideAllScreens();
  document.getElementById('screen-proto').style.display = 'flex';
  document.getElementById('proto-breadcrumb').textContent = p.title;
  document.getElementById('proto-title').textContent = p.title;
  document.getElementById('proto-subtitle').textContent = p.subtitle;
  document.getElementById('proto-dot').style.background = p.color;
  document.documentElement.style.setProperty('--proto-color', p.color);
  // Tabs: fasen + Scores + Referenties
  const tabs = document.getElementById('proto-tabs');
  const hasScores = SCORES[id] && SCORES[id].length > 0;
  const tabsHtml = p.phases.map((ph,i) => {
    const cls = i===0 ? 'vtab active' : 'vtab';
    return '<div class="' + cls + '" onclick="showPhase(' + i + ')">' + ph.label + '</div>';
  }).join('');
  const scoresTab = hasScores ? '<div class="vtab" onclick="showScores(\'' + id + '\')"> Scores</div>' : '';
  const protoForms = Object.entries(FORMS).filter(([k,f]) => f.protocol === id);
  const formsTab = protoForms.length ? '<div class="vtab" onclick="showFormsTab(\'' + id + '\')">📝 Formulieren</div>' : '';
  const refsTab = '<div class="vtab" onclick="showRefs(\'' + id + '\')">Referenties</div>';
  tabs.innerHTML = tabsHtml + scoresTab + (typeof formsTab !== 'undefined' ? formsTab : '') + refsTab;
  renderPhase(0);
  renderTimeline(0);
  setNav(id);
  const totalFlags = p.phases.reduce((s,ph) => s + (ph.redflags ? ph.redflags.length : 0), 0);
  const rfCount = document.getElementById('rf-count');
  if(rfCount) rfCount.textContent = totalFlags;
  // Show beslisboom button if available
  const bbBtn = document.getElementById('beslisboom-btn');
  if(bbBtn) bbBtn.style.display = BESLISBOOM[id] ? 'flex' : 'none';
}
function showPhase(i) {
  document.querySelectorAll('.vtab').forEach((t,j) => t.classList.toggle('active', j===i));
  renderPhase(i);
  renderTimeline(i);
  document.getElementById('proto-body').scrollTop = 0;
}
function showRefs(id) {
  const p = protocols[id];
  const tabCount = p.phases.length + (SCORES[id]?.length ? 1 : 0);
  document.querySelectorAll('.vtab').forEach((t,j) => t.classList.toggle('active', j===tabCount));
  document.getElementById('proto-body').innerHTML = `<div class="ref-box"><div class="ref-label">Sleutelreferenties</div><div class="ref-text">${p.refs.split('|').map(r=>`<div style="margin-bottom:10px">${r.trim()}</div>`).join('')}</div></div>`;
}

// ── FASE TIJDLIJN ──
function renderTimeline(activeIdx) {
  const p = currentProto; if(!p) return;
  const tl = document.getElementById('phase-timeline'); if(!tl) return;
  // Check if a patient is linked to this protocol
  const pts = loadPatients();
  const linked = pts.find(pt => pt.protoId === p.id);
  const patPhase = linked ? (linked.phaseIndex || 0) : null;
  let html = '';
  p.phases.forEach((ph, i) => {
    const isActive = i === activeIdx;
    const isDone = patPhase !== null && i < patPhase;
    const isPatCurrent = patPhase !== null && i === patPhase;
    let cls = 'pt-dot';
    if(isActive) cls += ' active';
    if(isDone) cls += ' done';
    if(isPatCurrent && !isActive) cls += ' patient-current';
    const lineClass = isDone ? 'pt-line done' : 'pt-line';
    const label = ph.label.replace('Fase ','F').replace('Preop + Dag 0–3','Pre').replace('Diagnostiek','D0');
    html += `<div class="pt-step">
      <div style="display:flex;flex-direction:column;align-items:center;">
        <div class="${cls}" onclick="showPhase(${i})" title="${ph.label}: ${ph.title}">${i+1}</div>
        <div class="pt-label">${label}</div>
      </div>
      ${i < p.phases.length-1 ? `<div class="${lineClass}"></div>` : ''}
    </div>`;
  });
  if(linked) {
    html += `<div style="margin-left:12px;font-size:10px;color:#4ade80;font-family:Geist Mono,monospace;white-space:nowrap;align-self:flex-start;margin-top:2px">👤 ${linked.name.split(' ')[0]}</div>`;
  }
  tl.innerHTML = html;
}

// ── SCORES TAB ──
function showFormsTab(protoId) {
  const p = protocols[protoId];
  const tabCount = p.phases.length + (SCORES[protoId]?.length ? 1 : 0);
  document.querySelectorAll('.vtab').forEach((t,j) => t.classList.toggle('active', j===tabCount));
  const protoForms = Object.entries(FORMS).filter(([k,f]) => f.protocol === protoId);
  const color = p.color;
  let html = '<div class="slabel">Testformulieren — ' + p.title + '</div>';
  html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin-bottom:20px;">';
  protoForms.forEach(([formId, form]) => {
    html += '<div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:14px 16px;cursor:pointer;" onclick="openForm(\''+formId+'\',null)" onmouseover="this.style.borderColor=\'var(--border2)\'" onmouseout="this.style.borderColor=\'var(--border)\'">';
    html += '<div style="font-size:14px;font-weight:600;margin-bottom:4px;">' + form.name + '</div>';
    html += '<div style="font-size:11px;color:var(--muted);margin-bottom:10px;line-height:1.4">' + form.full + '</div>';
    html += '<div style="font-size:10.5px;color:var(--muted2);font-family:Geist Mono,monospace;margin-bottom:10px">Max: ' + form.max + ' · RTS: ' + form.rts + '</div>';
    html += '<div style="background:' + color + '22;color:' + color + ';border:1px solid ' + color + '44;padding:6px 12px;border-radius:5px;font-size:11.5px;font-weight:600;text-align:center;">📝 Formulier invullen</div>';
    html += '</div>';
  });
  html += '</div>';
  html += '<div style="font-size:12px;color:var(--muted);padding:10px 14px;background:var(--surface2);border-radius:6px;border:1px solid var(--border)">💡 Koppel een patiënt via de "👤 Koppel patiënt" knop om een ingevuld formulier automatisch aan hun dossier te koppelen.</div>';
  document.getElementById('proto-body').innerHTML = html;
  document.getElementById('proto-body').scrollTop = 0;
}

function showScores(id) {
  const p = protocols[id];
  const tabCount = p.phases.length;
  document.querySelectorAll('.vtab').forEach((t,j) => t.classList.toggle('active', j===tabCount));
  const scores = SCORES[id] || [];
  let html = `<div class="slabel">Uitkomstmaten — ${p.title}</div>`;
  html += `<div class="scores-grid">`;
  scores.forEach((sc, si) => {
    html += `<div class="score-card">
      <div class="score-name">${sc.name}</div>
      <div class="score-full">${sc.full}</div>
      <div class="score-ranges">`;
    sc.ranges.forEach(r => {
      html += `<div class="score-range">
        <div class="score-range-dot" style="background:${r.color}"></div>
        <div class="score-range-label">${r.label}</div>
        <div class="score-range-val">${r.min}–${r.max} ${sc.unit}</div>
      </div>`;
    });
    html += `</div>`;
    if(sc.rts) html += `<div style="font-size:10.5px;color:var(--muted);margin-bottom:10px;padding:5px 8px;background:var(--surface2);border-radius:4px;font-family:Geist Mono,monospace">RTS: ${sc.rts}</div>`;
    if(sc.mcid) html += `<div style="font-size:10px;color:var(--muted2);margin-bottom:10px;font-family:Geist Mono,monospace">MCID: ${sc.mcid} ${sc.unit}</div>`;
    html += `<div class="score-input-row">
      <input class="score-input" id="score-input-${si}" type="number" min="0" max="${sc.max}" placeholder="Score (0–${sc.max})">
      <button class="score-btn" onclick="calcScore('${id}',${si})">Interpreteer</button>
    </div>
    <div class="score-result" id="score-result-${si}"></div>
    </div>`;
  });
  html += `</div>`;
  document.getElementById('proto-body').innerHTML = html;
  document.getElementById('proto-body').scrollTop = 0;
}
function calcScore(protoId, si) {
  const sc = SCORES[protoId][si];
  const val = parseFloat(document.getElementById(`score-input-${si}`).value);
  const res = document.getElementById(`score-result-${si}`);
  if(isNaN(val) || val < 0 || val > sc.max) {
    res.className = 'score-result show warn';
    res.textContent = `Voer een geldige score in (0–${sc.max})`;
    return;
  }
  let matched = null;
  if(sc.invert) {
    matched = sc.ranges.find(r => val >= r.min && val <= r.max);
  } else {
    matched = sc.ranges.slice().reverse().find(r => val >= r.min && val <= r.max);
    if(!matched) matched = sc.ranges[sc.ranges.length-1];
  }
  if(!matched) matched = sc.ranges[0];
  const colorMap = {'#22c55e':'good','#f59e0b':'warn','#ef4444':'bad'};
  const cls = colorMap[matched.color] || 'warn';
  res.className = `score-result show ${cls}`;
  res.textContent = `${val} ${sc.unit} → ${matched.label}`;
  if(sc.mcid) {
    res.textContent += ` · MCID: ${sc.mcid}`;
  }
}

// ── RODE VLAGGEN MODAL ──
function openRF() {
  if(!currentProto) return;
  const p = currentProto;
  const allFlags = [];
  p.phases.forEach(ph => {
    if(ph.redflags && ph.redflags.length)
      ph.redflags.forEach(f => allFlags.push({fase: ph.label + ' — ' + ph.title, flag: f}));
  });
  document.getElementById('rf-modal-title').textContent = '🚨 Rode vlaggen — ' + p.title;
  if(!allFlags.length) {
    document.getElementById('rf-modal-body').innerHTML = '<div style="color:var(--muted);font-size:13px;padding:20px 0;text-align:center;">Geen rode vlaggen geregistreerd.</div>';
  } else {
    let html = ''; let lastFase = '';
    allFlags.forEach(({fase, flag}) => {
      if(fase !== lastFase) {
        html += `<div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted2);font-family:Geist Mono,monospace;margin:${lastFase?'16px':0} 0 6px">${fase}</div>`;
        lastFase = fase;
      }
      const urgent = flag.includes('SPOED') || flag.includes('spoed') || flag.includes('CAUDA');
      html += `<div style="display:flex;gap:10px;align-items:flex-start;padding:8px 12px;background:rgba(239,68,68,${urgent?.1:.05});border:1px solid rgba(239,68,68,${urgent?.25:.15});border-radius:5px;margin-bottom:6px;">
        <span style="color:#ef4444;font-weight:700;flex-shrink:0;font-size:${urgent?16:13}px;">${urgent?'🚨':'!'}</span>
        <span style="font-size:12.5px;color:var(--text);line-height:1.5;${urgent?'font-weight:600':''}">${flag}</span>
      </div>`;
    });
    document.getElementById('rf-modal-body').innerHTML = html;
  }
  document.getElementById('rf-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeRF() { document.getElementById('rf-modal').classList.remove('open'); document.body.style.overflow = ''; }

// ── PATIËNTENFICHE ──
let ficheScope = 'fase';
let fichePhaseIndex = 0;
function openFiche() {
  if(!currentProto) return;
  const tabs = document.querySelectorAll('.vtab');
  let activeIdx = 0;
  tabs.forEach((t,i) => { if(t.classList.contains('active')) activeIdx = i; });
  fichePhaseIndex = activeIdx < currentProto.phases.length ? activeIdx : 0;
  ficheScope = 'fase';
  renderFicheModal();
  document.getElementById('fiche-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeFiche() { document.getElementById('fiche-modal').classList.remove('open'); document.body.style.overflow = ''; }
function setFicheScope(scope) { ficheScope = scope; renderFicheModal(); }
function renderFicheModal() {
  const p = currentProto;
  const phases = ficheScope === 'all' ? p.phases : [p.phases[fichePhaseIndex]];
  document.getElementById('fiche-modal-title').textContent = '📋 ' + p.title;
  let html = `<div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap;">`;
  html += `<button onclick="setFicheScope('fase')" style="flex:1;padding:7px 10px;border-radius:6px;font-size:11.5px;font-family:Geist,sans-serif;cursor:pointer;font-weight:600;border:1px solid ${ficheScope==='fase'?'var(--proto-color)':'var(--border)'};background:${ficheScope==='fase'?'var(--surface3)':'var(--surface2)'};color:${ficheScope==='fase'?'var(--proto-color)':'var(--muted)'};">Huidige fase</button>`;
  html += `<button onclick="setFicheScope('all')" style="flex:1;padding:7px 10px;border-radius:6px;font-size:11.5px;font-family:Geist,sans-serif;cursor:pointer;font-weight:600;border:1px solid ${ficheScope==='all'?'var(--proto-color)':'var(--border)'};background:${ficheScope==='all'?'var(--surface3)':'var(--surface2)'};color:${ficheScope==='all'?'var(--proto-color)':'var(--muted)'};">Volledig protocol</button>`;
  html += `</div>`;
  if(ficheScope === 'fase') {
    html += `<div style="display:flex;gap:4px;margin-bottom:14px;overflow-x:auto;scrollbar-width:none;">`;
    p.phases.forEach((ph,i) => {
      html += `<button onclick="fichePhaseIndex=${i};renderFicheModal()" style="flex-shrink:0;padding:4px 10px;border-radius:5px;font-size:10.5px;font-family:Geist Mono,monospace;cursor:pointer;border:1px solid ${i===fichePhaseIndex?'var(--proto-color)':'var(--border)'};background:${i===fichePhaseIndex?'var(--surface3)':'var(--surface2)'};color:${i===fichePhaseIndex?'var(--text)':'var(--muted)'};">${ph.label}</button>`;
    });
    html += `</div>`;
  }
  phases.forEach(ph => {
    html += `<div style="margin-bottom:18px;">`;
    html += `<div style="background:var(--surface2);border:1px solid var(--border);border-left:3px solid var(--proto-color);border-radius:4px;padding:10px 14px;margin-bottom:10px;"><div style="font-size:12px;font-weight:700;">${ph.label} — ${ph.title}</div><div style="font-size:10.5px;color:var(--muted);font-family:Geist Mono,monospace;margin-top:2px">${ph.weeks}</div></div>`;
    if(ph.goals?.length) {
      html += `<div style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted2);font-family:Geist Mono,monospace;margin-bottom:6px;">Doelstellingen</div><ul style="list-style:none;margin-bottom:12px;">`;
      ph.goals.forEach(g => html += `<li class="fiche-goal-item">${g}</li>`);
      html += `</ul>`;
    }
    if(ph.exercises?.length) {
      html += `<div style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted2);font-family:Geist Mono,monospace;margin-bottom:6px;">Oefeningen</div>`;
      ph.exercises.forEach(ex => {
        html += `<div class="fiche-ex-row"><div style="flex:1"><div class="fiche-ex-name">${ex.name}</div>`;
        if(ex.params?.length) html += `<div class="fiche-ex-params">${ex.params.map(([k,v])=>`${k}: ${v}`).join(' · ')}</div>`;
        if(ex.note) html += `<div style="font-size:11px;color:var(--muted);margin-top:3px;line-height:1.5">${ex.note}</div>`;
        html += `</div></div>`;
      });
    }
    html += `</div>`;
  });
  html += `<div style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted2);font-family:Geist Mono,monospace;margin-bottom:6px;">Notities voor patiënt</div>`;
  html += `<textarea class="fiche-notes-area" id="fiche-notes" placeholder="Voeg persoonlijke notities toe..."></textarea>`;
  document.getElementById('fiche-modal-body').innerHTML = html;
}
function printFiche() {
  if(!currentProto) return;
  const p = currentProto;
  const phases = ficheScope === 'all' ? p.phases : [p.phases[fichePhaseIndex]];
  const notes = document.getElementById('fiche-notes')?.value || '';
  const datum = new Date().toLocaleDateString('nl-BE',{day:'2-digit',month:'2-digit',year:'numeric'});
  let html = `<h1>${p.title}</h1><div class="pf-meta">Patiëntenfiche · ${ficheScope==='all'?'Volledig protocol':phases[0].label} · ${datum}</div>`;
  phases.forEach(ph => {
    html += `<h2>${ph.label} — ${ph.title} <span style="font-weight:400;font-size:11px;color:#888">${ph.weeks}</span></h2>`;
    if(ph.goals?.length) { html += `<div style="font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:#888;margin-bottom:4px">Doelstellingen</div>`; ph.goals.forEach(g => html += `<div class="pf-goal">→ ${g}</div>`); }
    if(ph.exercises?.length) {
      html += `<div style="font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:#888;margin:10px 0 4px">Oefeningen</div>`;
      ph.exercises.forEach(ex => {
        html += `<div class="pf-ex"><div class="pf-ex-name">${ex.name}</div><div class="pf-ex-params">${ex.params?ex.params.map(([k,v])=>`${k}: ${v}`).join(' · '):''}</div></div>`;
        if(ex.note) html += `<div style="font-size:10px;color:#666;padding:2px 0 4px 8px;font-style:italic">${ex.note}</div>`;
      });
    }
  });
  if(notes) html += `<h2>Notities</h2><div class="pf-notes">${notes}</div>`;
  html += `<div class="pf-footer">KineProtocol · Evidence-based revalidatie · ${datum}</div>`;
  document.getElementById('print-fiche').innerHTML = html;
  window.print();
}
function copyFiche() {
  if(!currentProto) return;
  const p = currentProto;
  const phases = ficheScope === 'all' ? p.phases : [p.phases[fichePhaseIndex]];
  const notes = document.getElementById('fiche-notes') ? document.getElementById('fiche-notes').value : '';
  const datum = new Date().toLocaleDateString('nl-BE',{day:'2-digit',month:'2-digit',year:'numeric'});
  let text = p.title + ' — Patientenfiche (' + datum + ')\n' + '='.repeat(50) + '\n\n';
  phases.forEach(function(ph) {
    text += ph.label + ' — ' + ph.title + ' (' + ph.weeks + ')\n' + '-'.repeat(40) + '\n';
    if(ph.goals && ph.goals.length) {
      text += '\nDoelstellingen:\n';
      ph.goals.forEach(function(g) { text += '  → ' + g + '\n'; });
    }
    if(ph.exercises && ph.exercises.length) {
      text += '\nOefeningen:\n';
      ph.exercises.forEach(function(ex) {
        var params = ex.params ? ' — ' + ex.params.map(function(kv){return kv[0]+': '+kv[1];}).join(' · ') : '';
        text += '  • ' + ex.name + params + '\n';
        if(ex.note) text += '    ' + ex.note + '\n';
      });
    }
    text += '\n';
  });
  if(notes) text += 'Notities:\n' + notes + '\n\n';
  text += 'KineProtocol · ' + datum;
  navigator.clipboard.writeText(text).then(function() {
    var btn = document.querySelector('.kmodal-action.secondary');
    if(btn) { btn.textContent = '✓ Gekopieerd!'; setTimeout(function(){ btn.textContent = '📋 Kopieer tekst'; }, 2000); }
  }).catch(function() {
    var ta = document.createElement('textarea'); ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    var btn = document.querySelector('.kmodal-action.secondary');
    if(btn) { btn.textContent = '✓ Gekopieerd!'; setTimeout(function(){ btn.textContent = '📋 Kopieer tekst'; }, 2000); }
  });
}

// ── PATIËNTEN SCHERM ──
function showPatients() {
  hideAllScreens();
  document.getElementById('screen-patients').style.display = '';
  setNav('patients');
  renderPatientList();
}
function renderPatientList() {
  const pts = loadPatients();
  const container = document.getElementById('pat-list-container');
  if(!pts.length) {
    container.innerHTML = `<div class="pat-empty"><div class="pat-empty-icon">👥</div><div class="pat-empty-text">Nog geen patiënten</div><div class="pat-empty-sub">Voeg een patiënt toe om hun traject bij te houden.</div></div>`;
    return;
  }
  container.innerHTML = `<div class="pat-list">${pts.map(pt => {
    const p = protocols[pt.protoId];
    if(!p) return '';
    const color = getProtoColor(pt.protoId);
    const phaseIdx = pt.phaseIndex || 0;
    const ph = p.phases[phaseIdx];
    const progress = Math.round(((phaseIdx) / p.phases.length) * 100);
    const age = pt.dob ? calcAge(pt.dob) : null;
    const lastNote = pt.sessions && pt.sessions.length ? pt.sessions[pt.sessions.length-1].note : '';
    return `<div class="pat-card" onclick="showPatientDetail('${pt.id}')">
      <div class="pat-card-top">
        <div class="pat-avatar" style="background:${color}22;color:${color}">${getInitials(pt.name)}</div>
        <div style="flex:1">
          <div class="pat-name">${pt.name}</div>
          <div class="pat-meta">${age ? age + 'j · ' : ''}Start: ${formatDate(pt.startDate) || '—'}</div>
        </div>
        <div class="pat-proto-badge" style="background:${color}18;color:${color}">${pt.protoId.toUpperCase()}</div>
      </div>
      <div class="pat-progress">
        <div class="pat-phase-label">${ph ? ph.label + ' — ' + ph.title : '—'}</div>
        <div class="pat-progress-label">${phaseIdx+1}/${p.phases.length}</div>
      </div>
      <div class="pat-progress" style="margin-top:5px;">
        <div class="pat-progress-bar"><div class="pat-progress-fill" style="width:${progress}%;background:${color}"></div></div>
        <div class="pat-progress-label">${progress}%</div>
      </div>
      ${lastNote ? `<div class="pat-notes-preview">📝 ${lastNote}</div>` : ''}
    </div>`;
  }).join('')}</div>`;
}


// ── SCORE TRACKING PER PATIENT ──
function getPatientScores(patId) {
  try { return JSON.parse(localStorage.getItem('kp_scores_' + patId) || '{}'); } catch(e) { return {}; }
}
function savePatientScore(patId, scoreName, value, date) {
  const scores = getPatientScores(patId);
  if(!scores[scoreName]) scores[scoreName] = [];
  scores[scoreName].push({date: date || new Date().toISOString().slice(0,10), value: parseFloat(value)});
  // Sort by date
  scores[scoreName].sort((a,b) => a.date.localeCompare(b.date));
  try { localStorage.setItem('kp_scores_' + patId, JSON.stringify(scores)); } catch(e) {}
}
function deletePatientScore(patId, scoreName, idx) {
  const scores = getPatientScores(patId);
  if(scores[scoreName]) {
    scores[scoreName].splice(idx, 1);
    if(scores[scoreName].length === 0) delete scores[scoreName];
  }
  try { localStorage.setItem('kp_scores_' + patId, JSON.stringify(scores)); } catch(e) {}
  // Re-render detail
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(pt) renderPatientDetail(pt, protocols[pt.protoId]);
}
function addPatientScore(patId) {
  const scName = document.getElementById('score-track-name-' + patId);
  const scVal = document.getElementById('score-track-val-' + patId);
  const scDate = document.getElementById('score-track-date-' + patId);
  if(!scName || !scVal) return;
  const val = parseFloat(scVal.value);
  if(isNaN(val)) { scVal.focus(); return; }
  savePatientScore(patId, scName.value, val, scDate ? scDate.value : null);
  scVal.value = '';
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(pt) renderPatientDetail(pt, protocols[pt.protoId]);
}
function renderScoreSection(pt, p) {
  const scores = SCORES[p.id] || [];
  if(!scores.length) return '';
  const patScores = getPatientScores(pt.id);
  const color = getProtoColor(p.id);

  let html = '<div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);">';
  html += '<div class="slabel">Uitkomstmaten bijhouden</div>';

  scores.forEach(sc => {
    const history = patScores[sc.name] || [];
    html += '<div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:12px;">';
    html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">';
    html += '<div><div style="font-size:13px;font-weight:600;">' + sc.name + '</div>';
    html += '<div style="font-size:10.5px;color:var(--muted);font-family:Geist Mono,monospace">' + sc.full + ' · max ' + sc.max + ' · RTS: ' + sc.rts + '</div></div>';
    // Latest value badge
    if(history.length > 0) {
      const latest = history[history.length-1];
      const range = sc.ranges.slice().find(r => sc.invert ? latest.value <= r.max && latest.value >= r.min : latest.value >= r.min && latest.value <= r.max)
        || (sc.invert ? sc.ranges[0] : sc.ranges[sc.ranges.length-1]);
      html += '<div style="background:' + (range ? range.color + '22' : 'var(--surface2)') + ';border:1px solid ' + (range ? range.color + '44' : 'var(--border)') + ';color:' + (range ? range.color : 'var(--muted)') + ';padding:4px 12px;border-radius:20px;font-size:13px;font-weight:700;font-family:Geist Mono,monospace">' + latest.value + ' ' + sc.unit + '</div>';
    }
    html += '</div>';

    // Mini chart if 2+ measurements
    if(history.length >= 2) {
      html += renderMiniChart(history, sc, color);
    }

    // History table
    if(history.length > 0) {
      html += '<div style="margin-bottom:10px;">';
      html += history.map((h, idx) => {
        const range = sc.ranges.slice().find(r => sc.invert ? h.value <= r.max && h.value >= r.min : h.value >= r.min && h.value <= r.max)
          || (sc.invert ? sc.ranges[0] : sc.ranges[sc.ranges.length-1]);
        const dotColor = range ? range.color : '#71717a';
        return '<div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid var(--border);">' +
          '<div style="width:7px;height:7px;border-radius:50%;background:' + dotColor + ';flex-shrink:0"></div>' +
          '<div style="font-size:11px;color:var(--muted);font-family:Geist Mono,monospace;width:80px;flex-shrink:0">' + formatDate(h.date) + '</div>' +
          '<div style="font-size:12.5px;font-weight:600;color:' + dotColor + '">' + h.value + ' ' + sc.unit + '</div>' +
          '<div style="font-size:11px;color:var(--muted);margin-left:4px">' + (range ? range.label : '') + '</div>' +
          '<button onclick="(function(b){deletePatientScore(b.dataset.p,b.dataset.s,parseInt(b.dataset.i))})(this)" data-p="' + pt.id + '" data-s="' + sc.name + '" data-i="' + idx + '" style="margin-left:auto;background:none;border:none;color:var(--muted2);font-size:11px;cursor:pointer;padding:2px 6px;border-radius:4px;">✕</button>' +
          '</div>';
      }).join('');
      html += '</div>';
    } else {
      html += '<div style="font-size:11.5px;color:var(--muted2);padding:6px 0 10px;font-style:italic">Nog geen metingen geregistreerd.</div>';
    }

    // Add measurement form
    html += '<div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">' +
      '<input id="score-track-val-' + pt.id + '-' + sc.name + '" type="number" min="0" max="' + sc.max + '" placeholder="Score (0–' + sc.max + ')" style="flex:1;min-width:100px;background:var(--surface2);border:1px solid var(--border);border-radius:5px;padding:6px 10px;color:var(--text);font-family:Geist Mono,monospace;font-size:12px;outline:none;">' +
      '<input id="score-track-date-' + pt.id + '-' + sc.name + '" type="date" value="' + new Date().toISOString().slice(0,10) + '" style="background:var(--surface2);border:1px solid var(--border);border-radius:5px;padding:6px 10px;color:var(--text);font-family:Geist,sans-serif;font-size:12px;outline:none;">' +
      '<button onclick="(function(b){addPatientScoreByName(b.dataset.p,b.dataset.s)})(this)" data-p="' + pt.id + '" data-s="' + sc.name + '" style="background:' + color + '22;border:1px solid ' + color + '44;color:' + color + ';padding:6px 12px;border-radius:5px;font-size:12px;font-weight:600;cursor:pointer;font-family:Geist,sans-serif;white-space:nowrap;">+ Toevoegen</button>' +
      '</div>';
    html += '</div>';
  });

  html += '</div>';
  return html;
}
function addPatientScoreByName(patId, scoreName) {
  const valEl = document.getElementById('score-track-val-' + patId + '-' + scoreName);
  const dateEl = document.getElementById('score-track-date-' + patId + '-' + scoreName);
  if(!valEl) return;
  const val = parseFloat(valEl.value);
  if(isNaN(val)) { valEl.focus(); return; }
  savePatientScore(patId, scoreName, val, dateEl ? dateEl.value : null);
  valEl.value = '';
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(pt) renderPatientDetail(pt, protocols[pt.protoId]);
}
function renderMiniChart(history, sc, color) {
  const W = 280, H = 60, PAD = 8;
  const vals = history.map(h => h.value);
  const minV = Math.min(...vals, 0);
  const maxV = Math.max(...vals, sc.max);
  const range = maxV - minV || 1;
  const xStep = (W - PAD*2) / (history.length - 1 || 1);

  // Points
  const points = history.map((h, i) => ({
    x: PAD + i * xStep,
    y: H - PAD - ((h.value - minV) / range) * (H - PAD*2)
  }));

  // Polyline
  const polyline = points.map(p => p.x + ',' + p.y).join(' ');

  // RTS threshold line (first range boundary)
  const rtsVal = sc.invert ? sc.ranges[0].max : sc.ranges[0].min;
  const rtsY = H - PAD - ((rtsVal - minV) / range) * (H - PAD*2);

  let svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;height:60px;margin-bottom:8px;display:block;">';
  svg += '<rect width="' + W + '" height="' + H + '" fill="var(--surface2)" rx="4"/>';
  // RTS line
  if(rtsY >= PAD && rtsY <= H-PAD) {
    svg += '<line x1="' + PAD + '" y1="' + rtsY + '" x2="' + (W-PAD) + '" y2="' + rtsY + '" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>';
    svg += '<text x="' + (W-PAD-2) + '" y="' + (rtsY-2) + '" font-size="7" fill="#22c55e" text-anchor="end" opacity="0.7">RTS</text>';
  }
  // Area fill
  if(points.length > 1) {
    const areaPath = 'M ' + points[0].x + ' ' + (H-PAD) + ' L ' + points.map(p => p.x + ' ' + p.y).join(' L ') + ' L ' + points[points.length-1].x + ' ' + (H-PAD) + ' Z';
    svg += '<path d="' + areaPath + '" fill="' + color + '" opacity="0.12"/>';
    svg += '<polyline points="' + polyline + '" fill="none" stroke="' + color + '" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>';
  }
  // Dots
  points.forEach((p, i) => {
    svg += '<circle cx="' + p.x + '" cy="' + p.y + '" r="3" fill="' + color + '"/>';
    svg += '<text x="' + p.x + '" y="' + (H-1) + '" font-size="7" fill="var(--muted2)" text-anchor="middle" font-family="monospace">' + formatDate(history[i].date).slice(0,5) + '</text>';
  });
  svg += '</svg>';
  return svg;
}

// ── PATIËNT DETAIL ──
function showPatientDetail(patId) {
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(!pt) return;
  const p = protocols[pt.protoId];
  if(!p) return;
  hideAllScreens();
  document.getElementById('screen-patient-detail').style.display = '';
  renderPatientDetail(pt, p);
}
function renderPatientDetail(pt, p) {
  const color = getProtoColor(pt.protoId);
  const age = pt.dob ? calcAge(pt.dob) : null;
  const phaseIdx = pt.phaseIndex || 0;
  const ph = p.phases[phaseIdx];
  const sessions = pt.sessions || [];

  let html = `<div class="pat-detail-header">
    <div class="pat-detail-avatar" style="background:${color}22;color:${color}">${getInitials(pt.name)}</div>
    <div style="flex:1">
      <div class="pat-detail-name">${pt.name}</div>
      <div class="pat-detail-meta">${age ? age + ' jaar · ' : ''}${pt.dob ? formatDate(pt.dob) + ' · ' : ''}Start: ${formatDate(pt.startDate) || '—'}</div>
    </div>
    <div class="pat-detail-actions">
      <button onclick="showProto('${pt.protoId}')" style="background:${color}18;border:1px solid ${color}33;color:${color};padding:7px 12px;border-radius:6px;font-size:11.5px;cursor:pointer;font-family:Geist,sans-serif;font-weight:600;">${p.title.split(' ').slice(0,2).join(' ')} →</button>
      <button onclick="openPatNew('${pt.id}')" style="background:var(--surface2);border:1px solid var(--border);color:var(--muted);padding:7px 12px;border-radius:6px;font-size:11.5px;cursor:pointer;font-family:Geist,sans-serif;">✏️</button>
      <button onclick="deletePatient('${pt.id}')" style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.2);color:#ef4444;padding:7px 12px;border-radius:6px;font-size:11.5px;cursor:pointer;font-family:Geist,sans-serif;">🗑</button>
    </div>
  </div>
  <div style="margin-bottom:6px;cursor:pointer;font-size:11px;color:var(--muted)" onclick="showPatients()">← Terug naar patiënten</div>`;

  // Fase tijdlijn (groot)
  html += `<div class="slabel" style="margin-top:16px">Voortgang protocol</div>`;
  html += `<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;">`;
  p.phases.forEach((phase, i) => {
    const isCurrent = i === phaseIdx;
    const isDone = i < phaseIdx;
    html += `<div onclick="setPatientPhase('${pt.id}',${i})" style="display:flex;align-items:center;gap:7px;padding:8px 12px;border-radius:7px;border:1px solid ${isCurrent?color:isDone?color+'55':'var(--border)'};background:${isCurrent?color+'18':isDone?color+'08':'var(--surface2)'};cursor:pointer;transition:all .12s;">
      <div style="width:10px;height:10px;border-radius:50%;background:${isCurrent?color:isDone?color:'var(--border2)'};flex-shrink:0;${isDone?'opacity:.6':''}"></div>
      <div>
        <div style="font-size:12px;font-weight:${isCurrent?700:500};color:${isCurrent?'var(--text)':'var(--muted)'}">${phase.label}</div>
        <div style="font-size:10px;color:var(--muted2);font-family:Geist Mono,monospace">${phase.weeks}</div>
      </div>
      ${isCurrent ? `<div style="margin-left:4px;font-size:9px;background:${color};color:#000;padding:1px 6px;border-radius:8px;font-weight:700;font-family:Geist Mono,monospace">NU</div>` : ''}
      ${isDone ? `<div style="margin-left:4px;font-size:12px;opacity:.6">✓</div>` : ''}
    </div>`;
  });
  html += `</div>`;

  // Sessie log
  html += `<div class="slabel">Sessienotities</div>`;
  if(sessions.length) {
    html += `<div class="session-list">`;
    sessions.slice().reverse().forEach((s, ri) => {
      const idx = sessions.length - 1 - ri;
      html += `<div class="session-item">
        <div class="session-date">${formatDate(s.date)} · ${p.phases[s.phaseIdx]?.label || ''}</div>
        <div class="session-note">${s.note}</div>
        <div class="session-actions"><button class="session-del" onclick="deleteSession('${pt.id}',${idx})">Verwijder</button></div>
      </div>`;
    });
    html += `</div>`;
  } else {
    html += `<div style="color:var(--muted);font-size:12px;padding:12px 0;">Nog geen sessies geregistreerd.</div>`;
  }

  html += `<textarea class="add-session-area" id="new-session-text" placeholder="Sessienotitie toevoegen... (bijv. fase 2 gestart, LSI quad 74%, klachten afgenomen)"></textarea>
  <button class="add-session-btn" onclick="addSession('${pt.id}')">+ Notitie opslaan</button>`;

  // Scores section
  html += renderScoreSection(pt, p);

  // Testformulieren sectie
  var ptProtoForms = Object.entries(FORMS).filter(function(e){return e[1].protocol===p.id;});
  if(ptProtoForms.length > 0) {
    html += '<div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);">';
    html += '<div class="slabel">Testformulieren</div><div style="display:flex;gap:8px;flex-wrap:wrap;">';
    ptProtoForms.forEach(function(entry) {
      var fId=entry[0],frm=entry[1];
      html += '<button onclick="openForm(\''+fId+'\',\''+pt.id+'\''+')" style="background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.2);color:#a78bfa;padding:8px 14px;border-radius:6px;font-size:12px;cursor:pointer;font-family:Geist,sans-serif;font-weight:500;">\u{1F4DD} '+frm.name+'</button>';
    });
    html += '</div></div>';
  }
  // Export
  html += `<div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);display:flex;gap:8px;flex-wrap:wrap;">
    <button onclick="exportPatient('${pt.id}')" style="background:var(--surface2);border:1px solid var(--border);color:var(--text);padding:8px 14px;border-radius:6px;font-size:12px;cursor:pointer;font-family:Geist,sans-serif;">📄 Exporteer traject</button>
    <button onclick="printPatient('${pt.id}')" style="background:var(--surface2);border:1px solid var(--border);color:var(--text);padding:8px 14px;border-radius:6px;font-size:12px;cursor:pointer;font-family:Geist,sans-serif;">🖨 Afdrukken</button>
  </div>`;

  document.getElementById('pat-detail-body').innerHTML = html;
}
function setPatientPhase(patId, phaseIdx) {
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(!pt) return;
  pt.phaseIndex = phaseIdx;
  savePatients(pts);
  const p = protocols[pt.protoId];
  renderPatientDetail(pt, p);
}
function addSession(patId) {
  const note = document.getElementById('new-session-text')?.value?.trim();
  if(!note) return;
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(!pt) return;
  if(!pt.sessions) pt.sessions = [];
  pt.sessions.push({date: new Date().toISOString().slice(0,10), note, phaseIdx: pt.phaseIndex || 0});
  savePatients(pts);
  const p = protocols[pt.protoId];
  renderPatientDetail(pt, p);
}
function deleteSession(patId, idx) {
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(!pt || !pt.sessions) return;
  pt.sessions.splice(idx, 1);
  savePatients(pts);
  renderPatientDetail(pt, protocols[pt.protoId]);
}
function deletePatient(patId) {
  if(!confirm('Patiënt verwijderen? Dit kan niet ongedaan worden.')) return;
  const pts = loadPatients().filter(p => p.id !== patId);
  savePatients(pts);
  try { localStorage.removeItem('kp_scores_' + patId); } catch(e) {}
  // Sync deletion to Supabase
  syncToSupabase(loadPatients());
  showPatients();
}

// ── NIEUWE / BEWERK PATIËNT MODAL ──
function openPatNew(editId) {
  editingPatientId = editId || null;
  const title = editId ? 'Patiënt bewerken' : 'Nieuwe patiënt';
  document.getElementById('pat-new-title').textContent = title;
  // Fill protocol selector
  const sel = document.getElementById('pat-form-proto');
  sel.innerHTML = Object.values(protocols).map(p => `<option value="${p.id}">${p.title}</option>`).join('');
  sel.onchange = updatePhaseOptions;
  // Fill phase selector
  updatePhaseOptions();
  // Set today as default dates
  const today = new Date().toISOString().slice(0,10);
  if(!editId) {
    document.getElementById('pat-form-name').value = '';
    document.getElementById('pat-form-dob').value = '';
    document.getElementById('pat-form-start').value = today;
    document.getElementById('pat-form-phase').value = '0';
    document.getElementById('pat-form-note').value = '';
  } else {
    const pts = loadPatients();
    const pt = pts.find(p => p.id === editId);
    if(pt) {
      document.getElementById('pat-form-name').value = pt.name;
      document.getElementById('pat-form-dob').value = pt.dob || '';
      document.getElementById('pat-form-start').value = pt.startDate || today;
      document.getElementById('pat-form-proto').value = pt.protoId;
      updatePhaseOptions();
      document.getElementById('pat-form-phase').value = pt.phaseIndex || 0;
      document.getElementById('pat-form-note').value = '';
    }
  }
  document.getElementById('pat-new-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('pat-form-name').focus(), 100);
}
function closePatNew() { document.getElementById('pat-new-modal').classList.remove('open'); document.body.style.overflow = ''; }
function updatePhaseOptions() {
  const pid = document.getElementById('pat-form-proto').value;
  const p = protocols[pid];
  const sel = document.getElementById('pat-form-phase');
  if(p) sel.innerHTML = p.phases.map((ph,i) => `<option value="${i}">${ph.label} — ${ph.title}</option>`).join('');
}
function savePatient() {
  const name = document.getElementById('pat-form-name').value.trim();
  if(!name) { document.getElementById('pat-form-name').focus(); return; }
  const protoId = document.getElementById('pat-form-proto').value;
  const dob = document.getElementById('pat-form-dob').value;
  const startDate = document.getElementById('pat-form-start').value;
  const phaseIndex = parseInt(document.getElementById('pat-form-phase').value) || 0;
  const note = document.getElementById('pat-form-note').value.trim();
  const pts = loadPatients();
  if(editingPatientId) {
    const pt = pts.find(p => p.id === editingPatientId);
    if(pt) { pt.name = name; pt.dob = dob; pt.startDate = startDate; pt.protoId = protoId; pt.phaseIndex = phaseIndex; }
  } else {
    const newPt = {id: genId(), name, dob, startDate, protoId, phaseIndex, sessions: []};
    if(note) newPt.sessions.push({date: startDate || new Date().toISOString().slice(0,10), note, phaseIdx: phaseIndex});
    pts.push(newPt);
  }
  savePatients(pts);
  closePatNew();
  if(editingPatientId) {
    const pt = pts.find(p => p.id === editingPatientId);
    if(pt) showPatientDetail(pt.id);
  } else {
    showPatients();
  }
}

// ── KOPPEL PATIËNT AAN PROTOCOL ──
function openPatLink() {
  if(!currentProto) return;
  const pts = loadPatients().filter(p => p.protoId === currentProto.id);
  const body = document.getElementById('pat-link-body');
  if(!pts.length) {
    body.innerHTML = `<div style="color:var(--muted);font-size:13px;padding:12px 0;">Geen patiënten gekoppeld aan dit protocol.<br><br><button onclick="closePatLink();openPatNew()" style="background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.3);color:#4ade80;padding:8px 14px;border-radius:6px;font-size:12px;cursor:pointer;font-family:Geist,sans-serif;font-weight:600;">+ Nieuwe patiënt aanmaken</button></div>`;
  } else {
    body.innerHTML = `<div style="color:var(--muted);font-size:12px;margin-bottom:12px;">Patiënten met ${currentProto.title} protocol:</div>` +
    pts.map(pt => {
      const color = getProtoColor(pt.protoId);
      const ph = protocols[pt.protoId]?.phases[pt.phaseIndex||0];
      return `<div onclick="closePatLink();showPatientDetail('${pt.id}')" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:7px;border:1px solid var(--border);margin-bottom:8px;cursor:pointer;transition:border-color .12s;" onmouseover="this.style.borderColor='var(--border2)'" onmouseout="this.style.borderColor='var(--border)'">
        <div style="width:34px;height:34px;border-radius:50%;background:${color}22;color:${color};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700">${getInitials(pt.name)}</div>
        <div style="flex:1"><div style="font-size:13px;font-weight:600">${pt.name}</div><div style="font-size:10.5px;color:var(--muted);font-family:Geist Mono,monospace">${ph?ph.label+' · ':''} Start: ${formatDate(pt.startDate)||'—'}</div></div>
        <div style="font-size:11px;color:var(--muted)">→</div>
      </div>`;
    }).join('') +
    `<button onclick="closePatLink();openPatNew()" style="width:100%;margin-top:6px;background:rgba(74,222,128,.08);border:1px solid rgba(74,222,128,.2);color:#4ade80;padding:8px;border-radius:6px;font-size:12px;cursor:pointer;font-family:Geist,sans-serif;font-weight:500;">+ Nieuwe patiënt toevoegen</button>`;
  }
  document.getElementById('pat-link-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closePatLink() { document.getElementById('pat-link-modal').classList.remove('open'); document.body.style.overflow = ''; }

// ── EXPORT PATIËNT ──
function exportPatient(patId) {
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(!pt) return;
  const p = protocols[pt.protoId];
  const ph = p.phases[pt.phaseIndex||0];
  const age = pt.dob ? calcAge(pt.dob) : null;
  const datum = new Date().toLocaleDateString('nl-BE',{day:'2-digit',month:'2-digit',year:'numeric'});
  let text = `KINEPROTOCOL — PATIËNTENTRAJECT
${'='.repeat(50)}
`;
  text += `Patiënt:     ${pt.name}
`;
  if(age) text += `Leeftijd:    ${age} jaar (${formatDate(pt.dob)})
`;
  text += `Protocol:    ${p.title}
`;
  text += `Startdatum:  ${formatDate(pt.startDate) || '—'}
`;
  text += `Huidige fase: ${ph ? ph.label + ' — ' + ph.title : '—'}
`;
  text += `Gegenereerd: ${datum}

`;
  if(pt.sessions?.length) {
    text += `SESSIENOTITIES
${'-'.repeat(40)}
`;
    pt.sessions.forEach(s => {
      const sPh = p.phases[s.phaseIdx];
      text += `${formatDate(s.date)} · ${sPh ? sPh.label : ''}
${s.note}

`;
    });
  }
  text += `KineProtocol · ${datum}`;
  navigator.clipboard.writeText(text).then(() => alert('Gekopieerd naar klembord!')).catch(() => {
    const ta = document.createElement('textarea'); ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    alert('Gekopieerd naar klembord!');
  });
}
function printPatient(patId) {
  const pts = loadPatients();
  const pt = pts.find(p => p.id === patId);
  if(!pt) return;
  const p = protocols[pt.protoId];
  const ph = p.phases[pt.phaseIndex||0];
  const age = pt.dob ? calcAge(pt.dob) : null;
  const datum = new Date().toLocaleDateString('nl-BE',{day:'2-digit',month:'2-digit',year:'numeric'});
  let html = `<h1>Patiëntentraject — ${pt.name}</h1>`;
  html += `<div class="pf-meta">Protocol: ${p.title} · Fase: ${ph?ph.label:'—'} · Start: ${formatDate(pt.startDate)||'—'} · ${age?age+' jaar · ':''}${datum}</div>`;
  if(pt.sessions?.length) {
    html += `<h2>Sessienotities</h2>`;
    pt.sessions.forEach(s => {
      const sPh = p.phases[s.phaseIdx];
      html += `<div class="pf-ex"><div class="pf-ex-name">${formatDate(s.date)} · ${sPh?sPh.label:''}</div></div><div style="font-size:11px;color:#333;padding:2px 0 8px 8px">${s.note}</div>`;
    });
  }
  html += `<div class="pf-footer">KineProtocol · ${datum}</div>`;
  document.getElementById('print-fiche').innerHTML = html;
  window.print();
}


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
  }
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
  }
};

// ── STATE FORMULIEREN ──
let activeForm = null;
let activeFormPatId = null;
let formAnswers = {};
let beslisboomStack = [];

// ── BESLISBOOM FUNCTIES ──
function openBeslisboom(protoId) {
  const boom = BESLISBOOM[protoId];
  if(!boom) return;
  beslisboomStack = [];
  document.getElementById('bb-modal-title').textContent = boom.title;
  renderBeslisboomStap(protoId, boom.stappen[0].id);
  document.getElementById('bb-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeBeslisboom() {
  document.getElementById('bb-modal').classList.remove('open');
  document.body.style.overflow = '';
}
function renderBeslisboomStap(protoId, stapId) {
  const boom = BESLISBOOM[protoId];
  const stap = boom.stappen.find(s => s.id === stapId);
  if(!stap) return;
  beslisboomStack.push(stapId);
  const p = protocols[protoId];
  const color = p ? p.color : '#fff';
  let html = '';
  // Breadcrumb
  if(beslisboomStack.length > 1) {
    html += '<button onclick="beslisboomTerug(\'' + protoId + '\')" style="background:var(--surface2);border:1px solid var(--border);color:var(--muted);padding:5px 10px;border-radius:6px;font-size:11px;cursor:pointer;font-family:Geist,sans-serif;margin-bottom:12px;">← Terug</button>';
  }
  // Vraag
  html += '<div style="background:var(--surface2);border:1px solid var(--border);border-left:3px solid ' + color + ';border-radius:6px;padding:14px 16px;margin-bottom:14px;">';
  html += '<div style="font-size:14px;font-weight:600;margin-bottom:6px;">' + stap.vraag + '</div>';
  if(stap.info) html += '<div style="font-size:12px;color:var(--muted);line-height:1.5">' + stap.info + '</div>';
  html += '</div>';
  // Opties
  stap.opties.forEach(opt => {
    if(opt.advies) {
      // Terminal node
      html += '<div onclick="renderBeslisboomAdvies(\'' + protoId + '\',this)" data-advies="' + opt.advies.replace(/"/g,'&quot;') + '" data-color="' + opt.color + '" style="cursor:pointer;padding:12px 14px;border-radius:7px;border:2px solid ' + opt.color + '33;background:' + opt.color + '11;margin-bottom:8px;transition:all .15s;" onmouseover="this.style.background=\'' + opt.color + '22\'" onmouseout="this.style.background=\'' + opt.color + '11\'">';
      html += '<div style="display:flex;align-items:center;gap:8px;"><div style="width:10px;height:10px;border-radius:50%;background:' + opt.color + ';flex-shrink:0"></div><div style="font-size:13px;font-weight:500">' + opt.label + '</div></div></div>';
    } else if(opt.next) {
      html += '<div onclick="renderBeslisboomStap(\'' + protoId + '\',\'' + opt.next + '\')" style="cursor:pointer;padding:12px 14px;border-radius:7px;border:2px solid ' + opt.color + '33;background:' + opt.color + '11;margin-bottom:8px;transition:all .15s;" onmouseover="this.style.background=\'' + opt.color + '22\'" onmouseout="this.style.background=\'' + opt.color + '11\'">';
      html += '<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;"><div style="display:flex;align-items:center;gap:8px;"><div style="width:10px;height:10px;border-radius:50%;background:' + opt.color + ';flex-shrink:0"></div><div style="font-size:13px;font-weight:500">' + opt.label + '</div></div><span style="color:var(--muted);font-size:12px;">→</span></div></div>';
    }
  });
  document.getElementById('bb-modal-body').innerHTML = html;
}
function renderBeslisboomAdvies(protoId, el) {
  const advies = el.dataset.advies;
  const color = el.dataset.color;
  const p = protocols[protoId];
  let html = '<button onclick="beslisboomTerug(\'' + protoId + '\')" style="background:var(--surface2);border:1px solid var(--border);color:var(--muted);padding:5px 10px;border-radius:6px;font-size:11px;cursor:pointer;font-family:Geist,sans-serif;margin-bottom:12px;">← Terug</button>';
  html += '<div style="background:' + color + '15;border:2px solid ' + color + '44;border-radius:8px;padding:16px 18px;">';
  html += '<div style="font-size:12px;font-weight:700;color:' + color + ';text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;font-family:Geist Mono,monospace">Klinisch advies</div>';
  html += '<div style="font-size:13px;color:var(--text);line-height:1.6">' + advies + '</div>';
  html += '</div>';
  html += '<button onclick="closeBeslisboom()" style="width:100%;margin-top:12px;background:var(--surface2);border:1px solid var(--border);color:var(--text);padding:9px;border-radius:6px;font-size:12px;cursor:pointer;font-family:Geist,sans-serif;">Sluiten</button>';
  document.getElementById('bb-modal-body').innerHTML = html;
}
function beslisboomTerug(protoId) {
  beslisboomStack.pop(); // remove current
  const prev = beslisboomStack.pop(); // get prev (will be re-added by render)
  if(prev) renderBeslisboomStap(protoId, prev);
  else {
    const boom = BESLISBOOM[protoId];
    beslisboomStack = [];
    renderBeslisboomStap(protoId, boom.stappen[0].id);
  }
}

// ── TESTFORMULIEREN FUNCTIES ──
function openForm(formId, patId) {
  const form = FORMS[formId];
  if(!form) return;
  activeForm = formId;
  activeFormPatId = patId || null;
  formAnswers = {};
  const pts = loadPatients();
  const pt = patId ? pts.find(p => p.id === patId) : null;
  const datum = new Date().toLocaleDateString('nl-BE',{day:'2-digit',month:'2-digit',year:'numeric'});
  document.getElementById('form-modal-title').textContent = form.name + (pt ? ' — ' + pt.name : '');
  renderFormBody(form, pt, datum);
  document.getElementById('form-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeForm() {
  document.getElementById('form-modal').classList.remove('open');
  document.body.style.overflow = '';
}
function renderFormBody(form, pt, datum) {
  const color = pt ? getProtoColor(pt.protoId) : '#a78bfa';
  let html = '';
  // Header
  html += '<div style="background:var(--surface2);border:1px solid var(--border);border-radius:6px;padding:10px 14px;margin-bottom:16px;">';
  html += '<div style="font-size:13px;font-weight:600">' + form.full + '</div>';
  html += '<div style="font-size:11px;color:var(--muted);font-family:Geist Mono,monospace;margin-top:2px">Max: ' + form.max + ' punten · RTS: ' + form.rts + '</div>';
  if(pt) html += '<div style="font-size:11px;color:var(--muted);margin-top:2px">Patiënt: <strong style="color:var(--text)">' + pt.name + '</strong> · ' + datum + '</div>';
  html += '</div>';
  html += '<div style="font-size:12px;color:var(--muted);margin-bottom:14px;line-height:1.5">' + form.intro + '</div>';
  // Questions
  let sportSection = false;
  form.vragen.forEach((v, vi) => {
    if(v.sport && !sportSection) {
      sportSection = true;
      html += '<div style="font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:var(--muted2);font-family:Geist Mono,monospace;margin:14px 0 8px;padding-bottom:4px;border-bottom:1px solid var(--border)">Sportspecifieke activiteiten</div>';
    }
    html += '<div style="margin-bottom:14px;" id="q-' + v.id + '">';
    html += '<div style="font-size:12.5px;font-weight:600;margin-bottom:7px;color:var(--text)">' + (vi+1) + '. ' + v.tekst + '</div>';
    if(v.type === 'keuze') {
      html += '<div style="display:flex;flex-direction:column;gap:4px;">';
      v.opties.forEach((opt, oi) => {
        const inputId = 'inp-' + v.id + '-' + oi;
        html += '<label style="display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:5px;border:1px solid var(--border);cursor:pointer;transition:all .1s;" onmouseover="this.style.borderColor=\'var(--border2)\'" onmouseout="this.style.borderColor=\'var(--border)\'">';
        html += '<input type="radio" name="' + v.id + '" id="' + inputId + '" value="' + oi + '" onchange="setFormAnswer(\'' + v.id + '\',' + oi + ',' + JSON.stringify(opt.score) + ')" style="flex-shrink:0">';
        html += '<span style="font-size:12px">' + opt.label + '</span>';
        html += '</label>';
      });
      html += '</div>';
    } else if(v.type === 'slider') {
      html += '<div style="padding:0 4px;">';
      html += '<input type="range" min="' + v.min + '" max="' + v.max + '" value="' + Math.round(v.max/2) + '" style="width:100%;accent-color:' + color + '" oninput="updateSlider(\'' + v.id + '\',this.value,' + v.gewicht + ',\'' + color + '\')" id="slider-' + v.id + '">';
      html += '<div style="display:flex;justify-content:space-between;margin-top:3px;">';
      html += '<span style="font-size:10px;color:var(--muted)">' + v.links + '</span>';
      html += '<span id="slider-val-' + v.id + '" style="font-size:12px;font-weight:700;color:' + color + '">' + Math.round(v.max/2) + '</span>';
      html += '<span style="font-size:10px;color:var(--muted)">' + v.rechts + '</span>';
      html += '</div></div>';
      // Initialize answer
      formAnswers[v.id] = {score: Math.round(v.max/2), rawScore: Math.round(v.max/2)};
    }
    html += '</div>';
  });
  // Score preview
  html += '<div id="form-score-preview" style="background:var(--surface2);border:1px solid var(--border);border-radius:6px;padding:10px 14px;margin-top:8px;text-align:center;font-family:Geist Mono,monospace;font-size:13px;color:var(--muted)">Score: vul alle vragen in</div>';
  document.getElementById('form-modal-body').innerHTML = html;
}
function setFormAnswer(qId, optIdx, score) {
  formAnswers[qId] = {optIdx, score};
  // Highlight selected
  const label = document.querySelector('input[name="' + qId + '"]:checked')?.parentElement;
  document.querySelectorAll('input[name="' + qId + '"]').forEach(inp => {
    if(inp.parentElement) inp.parentElement.style.background = 'transparent';
  });
  if(label) label.style.background = 'var(--surface3)';
  updateFormScore();
}
function updateSlider(qId, val, gewicht, color) {
  document.getElementById('slider-val-' + qId).textContent = val;
  formAnswers[qId] = {score: parseFloat(val), rawScore: parseFloat(val)};
  updateFormScore();
}
function updateFormScore() {
  const form = FORMS[activeForm];
  if(!form) return;
  const allAnswered = form.vragen.every(v => {
    if(v.type === 'keuze' && v.opties.some(o => o.score === null)) return formAnswers[v.id] !== undefined; // optional
    return formAnswers[v.id] !== undefined;
  });
  const total = Object.values(formAnswers).reduce((s, a) => s + (a.score !== null ? (a.score || 0) : 0), 0);
  const maxPossible = form.max;
  const pct = Math.min(100, Math.round((total / maxPossible) * 100));
  const rtsVal = form.invert ? parseInt(form.rts) : parseInt(form.rts);
  const isGood = form.invert ? total <= rtsVal : total >= rtsVal;
  const scoreEl = document.getElementById('form-score-preview');
  if(scoreEl) {
    scoreEl.style.color = allAnswered ? (isGood ? '#22c55e' : '#f59e0b') : 'var(--muted)';
    scoreEl.style.borderColor = allAnswered ? (isGood ? '#22c55e44' : '#f59e0b44') : 'var(--border)';
    scoreEl.textContent = 'Huidige score: ' + total + ' / ' + maxPossible + (allAnswered ? (isGood ? ' ✓ ' + form.rts : ' — nog niet: ' + form.rts) : ' (niet volledig ingevuld)');
  }
}
function calcFormScore() {
  const form = FORMS[activeForm];
  if(!form) return {total:0, max:form?.max||100};
  const total = Object.values(formAnswers).reduce((s, a) => s + (a.score !== null ? (a.score || 0) : 0), 0);
  return {total, max: form.max};
}
function saveAndPrintForm() {
  const form = FORMS[activeForm];
  if(!form) return;
  const {total, max} = calcFormScore();
  const datum = new Date().toLocaleDateString('nl-BE',{day:'2-digit',month:'2-digit',year:'numeric'});
  const pts = loadPatients();
  const pt = activeFormPatId ? pts.find(p => p.id === activeFormPatId) : null;
  // Save score to patient
  if(pt) {
    savePatientScore(pt.id, form.name, total, new Date().toISOString().slice(0,10));
  }
  // Build print HTML
  let html = '<h1>' + form.name + ' — ' + form.full + '</h1>';
  html += '<div class="pf-meta">' + (pt ? 'Patiënt: ' + pt.name + ' · ' : '') + datum + ' · Score: ' + total + '/' + max + '</div>';
  form.vragen.forEach((v, vi) => {
    const ans = formAnswers[v.id];
    let antwoord = '—';
    if(ans !== undefined) {
      if(v.type === 'keuze') antwoord = v.opties[ans.optIdx]?.label || '—';
      else if(v.type === 'slider') antwoord = ans.score + '/' + v.max;
    }
    html += '<div class="pf-ex"><div class="pf-ex-name">' + (vi+1) + '. ' + v.tekst + '</div><div class="pf-ex-params">' + antwoord + '</div></div>';
  });
  const rtsVal = parseInt(form.rts);
  const isGood = form.invert ? total <= rtsVal : total >= rtsVal;
  html += '<div style="margin-top:12px;padding:8px 12px;border-radius:4px;background:' + (isGood?'#dcfce7':'#fef3c7') + ';border:1px solid ' + (isGood?'#86efac':'#fcd34d') + ';">';
  html += '<strong>Totaalscore: ' + total + '/' + max + '</strong> — ' + (isGood ? '✓ Drempel behaald (' + form.rts + ')' : '⚠ Drempel nog niet behaald (' + form.rts + ')') + '</div>';
  html += '<div class="pf-footer">KineProtocol · ' + datum + '</div>';
  document.getElementById('print-fiche').innerHTML = html;
  closeForm();
  setTimeout(() => window.print(), 100);
}


// ── ESC closes all modals ──
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') { closeYT(); closeRF(); closeFiche(); closePatNew(); closePatLink(); closeBeslisboom(); closeForm(); }
});

// ── RENDER PHASE ──
function renderPhase(i) {
  const ph = currentProto.phases[i];
  let html = '';
  html += `<div class="ev-box"><div class="ev-label">Evidence-basis</div><div class="ev-text">${ph.evidence}</div></div>`;
  html += `<div class="goals-box"><div class="goals-label">Doelstellingen — ${ph.title}</div><ul class="glist">${ph.goals.map(g=>`<li>${g}</li>`).join('')}</ul></div>`;
  if(ph.exercises?.length) {
    html += `<div class="slabel">Oefenprogramma</div><div class="ex-grid">`;
    ph.exercises.forEach(ex => {
      const cat = ex.cat ? CAT[ex.cat] : null;
      html += `<div class="ex-card"><div class="ex-header"><div class="ex-name">${ex.name}</div>`;
      if(cat) html += `<span class="ex-cat" style="background:${cat.color}22;color:${cat.color};border-color:${cat.color}44">${cat.icon} ${cat.label}</span>`;
      html += `</div>`;
      if(ex.params?.length) html += `<div class="ex-params">${ex.params.map(([k,v])=>`<div class="ep">${k}: <span>${v}</span></div>`).join('')}</div>`;
      if(ex.note) html += `<div class="ex-note">${ex.note}</div>`;
      if(ex.yt) html += `<button class="yt-btn" onclick="openYT('${ex.yt}','${ex.name.replace(/'/g,"'")}')">▶ Bekijk video</button>`;
      html += `</div>`;
    });
    html += `</div>`;
  }
  if(ph.criteria_go?.length || ph.criteria_stop?.length) {
    html += `<div class="slabel">Doorstroomcriteria</div><div class="criteria-grid">`;
    if(ph.criteria_go?.length) html += `<div class="cbox go"><div class="ctitle go">Vereist ✓</div><ul class="clist go">${ph.criteria_go.map(c=>`<li>${c}</li>`).join('')}</ul></div>`;
    if(ph.criteria_stop?.length) html += `<div class="cbox stop"><div class="ctitle stop">Vertraag ⚠</div><ul class="clist stop">${ph.criteria_stop.map(c=>`<li>${c}</li>`).join('')}</ul></div>`;
    html += `</div>`;
  }
  if(ph.redflags?.length) html += `<div class="rf-box"><div class="rf-label">Rode vlaggen</div><ul class="rf-list">${ph.redflags.map(r=>`<li>${r}</li>`).join('')}</ul></div>`;
  document.getElementById('proto-body').innerHTML = html;
}

// ── SEARCH ──
function handleSearch(q) {
  if(!q.trim()) {
    document.getElementById('screen-search').style.display = 'none';
    if(currentProto) document.getElementById('screen-proto').style.display = 'flex';
    else document.getElementById('screen-home').style.display = '';
    return;
  }
  hideAllScreens();
  document.getElementById('screen-search').style.display = '';
  const ql = q.toLowerCase(); let res = [];
  Object.values(protocols).forEach(p => {
    p.phases.forEach((ph, pi) => {
      ph.exercises.forEach(ex => {
        if([ex.name, ex.note||''].join(' ').toLowerCase().includes(ql))
          res.push({p, ph, pi, match: ex.name, type: 'Oefening', detail: ex.note||''});
      });
      ph.goals.forEach(g => {
        if(g.toLowerCase().includes(ql)) res.push({p, ph, pi, match: g, type: 'Doel', detail: ''});
      });
    });
  });
  const el = document.getElementById('search-results');
  if(!res.length) { el.innerHTML = `<div class="no-results">Geen resultaten voor "<strong style="color:var(--text)">${q}</strong>"</div>`; return; }
  el.innerHTML = res.map(r => `
    <div onclick="showProto('${r.p.id}');showPhase(${r.pi});" style="background:var(--surface);border:1px solid var(--border);border-radius:7px;padding:12px 14px;margin-bottom:8px;cursor:pointer;" onmouseover="this.style.borderColor='var(--border2)'" onmouseout="this.style.borderColor='var(--border)'">
      <div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;">
        <div style="width:7px;height:7px;border-radius:50%;background:${r.p.color};flex-shrink:0"></div>
        <span style="font-size:12px;font-weight:600">${r.p.title}</span>
        <span style="font-size:10px;color:var(--muted);font-family:Geist Mono,monospace;background:var(--surface2);padding:1px 6px;border-radius:3px">${r.ph.label}</span>
        <span style="font-size:10px;color:var(--muted2);font-family:Geist Mono,monospace">${r.type}</span>
      </div>
      <div style="font-size:13px">${r.match}</div>
      ${r.detail ? `<div style="font-size:11px;color:var(--muted);margin-top:3px">${r.detail.substring(0,110)}${r.detail.length>110?'...':''}</div>` : ''}
    </div>`).join('');
}

// ── SERVICE WORKER ──
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(()=>{}));
}

// ── INIT ──
async function initApp() {
  // Try to restore session
  const stored = JSON.parse(localStorage.getItem('kp_session') || 'null');
  if(stored && stored.refresh_token) {
    const ok = await refreshSession();
    if(ok) {
      hideLoginScreen();
      updatePatientBadge();
      await loadFromSupabase();
      return;
    }
  }
  // No valid session — show login
  showLoginScreen();
  updatePatientBadge();
}
initApp();
