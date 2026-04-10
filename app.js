// KineProtocol — app.js v5.0 (5 protocollen)

const protocols = {

  acl:{id:'acl',title:'ACL Reconstructie',subtitle:'Postoperatief revalidatieprotocol voor VKB-reconstructie (BPTB / STG / QT)',color:'#22d3ee',
    phases:[
      {label:'Fase 1',title:'Vroeg Postoperatief',weeks:'Week 0–2',
       evidence:'Vroege volle ROM en gewichtsdragen zijn geassocieerd met betere uitkomsten. <strong>Quadriceps inhibitie</strong> door artrogene spierinhibitie (AMI) is de grootste limiterende factor. Vroege neuromotorische activatie is prioritair (Rice et al., 2019).',
       goals:['Inflammatie en pijncontrole (VAS ≤ 3/10 in rust)','Volledige extensie ROM (0°) — prioriteit boven flexie','Flexie ROM ≥ 90° aan einde fase 1','Lopen zonder krukken (indien goedgekeurd)','Eerste quadricepssamentrekking via NMES of biofeedback','Geen effusie (graad 1 max)'],
       exercises:[
         {name:'Passieve knie-extensie (handdoekrol)',params:[['Sets','3–5'],['Duur','10–15 min'],['Freq','3–4×/dag']],note:'Rol onder hiel, zwaartekracht creëert passieve extensie. Dagelijks meten.',cat:'mobiliteit'},
         {name:'Quadriceps setting (isometrisch)',params:[['Reps','10–15'],['Hold','5–10 sec'],['Sets','3'],['Freq','4–6×/dag']],note:'Knie in ~10° flexie. Eventueel NMES bij sterke inhibitie.',cat:'kracht',yt:'rnMnkQcPMzM'},
         {name:'Straight Leg Raise (SLR)',params:[['Reps','15–20'],['Sets','3'],['Freq','2–3×/dag']],note:'Enkel in dorsaalflexie, knie gestrekt. Wacht tot extensielag < 10°.',cat:'kracht',yt:'LJX9tdgFzeo'},
         {name:'Actief-geassisteerde knieflexie',params:[['Reps','10–15'],['Sets','2–3'],['Freq','2–3×/dag']],note:'Gezonde been helpt. Target: 90° einde week 1, 120° einde week 2.',cat:'mobiliteit',yt:'kHPuIh0wqwM'},
         {name:'Enkel-pompen',params:[['Reps','20–25'],['Freq','elk uur']],note:'DVT-preventie en lymfedrainage.'},
         {name:'Gluteale isometrie (zijlig)',params:[['Reps','10–12'],['Hold','5 sec'],['Sets','3']],note:'Abductie + extensie heup isometrisch.',cat:'kracht'}],
       criteria_go:['Extensie 0° of < 5° deficit','Flexie ≥ 90°','Lopen zonder hinken','Effusie graad ≤ 1','VAS ≤ 3/10','Zichtbare quadricepscontractie'],
       criteria_stop:['Toename effusie na oefening','Extensielag > 10° zonder verbetering','Koorts of warmte rond gewricht'],
       redflags:['DVT: kuitpijn, warmte, roodheid → directe doorverwijzing','Plotse pop-gevoel → graftruptuur → chirurg contacteren']},
      {label:'Fase 2',title:'Spierherstel & ROM',weeks:'Week 2–6',
       evidence:'Graftligamentisatie nog niet voltooid. <strong>CKC-oefeningen</strong> veiliger dan OKC. Quad LSI betere indicator dan tijd (van Melick et al., 2016). <strong>Isometrische quad aan 60°</strong> veilig (Heijne & Werner, 2021).',
       goals:['Volledige ROM (0–135°+)','Normaal looppatroon','Quad LSI ≥ 60%','Fietsen op stationaire fiets','Basale proprioceptie','Geen effusie na activiteit'],
       exercises:[
         {name:'Stationaire fiets',params:[['Duur','10–20 min'],['Weerstand','laag'],['Freq','dagelijks']],note:'Start hoog zadel, verlaag progressief.',cat:'cardio'},
         {name:'Mini-squat (0–45°)',params:[['Reps','12–15'],['Sets','3'],['Tempo','3-1-3']],note:'Bilateraal. Controleer valgus. Progressief dieper.',cat:'kracht',yt:'U6Oow0sNXt4'},
         {name:'Beenpers bilateraal',params:[['Reps','10–12'],['Sets','3–4'],['Belasting','60–75% 1RM']],note:'CKC, laag shear op graft.',cat:'kracht'},
         {name:'Isometrische knie-extensie (60°)',params:[['Reps','5–8'],['Hold','5 sec'],['Sets','3']],note:'Veilig op graft bij 60° (Heijne & Werner 2021).'},
         {name:'Step-up anterieur (10 cm)',params:[['Reps','10–15'],['Sets','3']],note:'Functioneel CKC. Controleer knietracking.',cat:'kracht'},
         {name:'Enkel-been balans',params:[['Duur','30–60 sec'],['Sets','3'],['Ogen','open → gesloten']],note:'Progressie: schuimmat → perturbed surface.',cat:'stabiliteit',yt:'TFKgUhrR9j4'}],
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
         {name:'Bipodale + unipodale opvang',params:[['Reps','8–10 → 6–8/been'],['Sets','3']],note:'Week 12–16. Zachte landing, geen valgus.'},
         {name:'Laterale sprongen + SSC',params:[['Vb','skater jumps, depth jump'],['RSI','meten']],note:'Week 16–20. RSI = hoogte/contacttijd.'}],
       criteria_go:['Continu joggen 30 min','LSI RSI ≥ 85%','Quad LSI ≥ 90%'],
       criteria_stop:['Pijn bij jogging > VAS 3 → fase 3 consolideren'],redflags:[]},
      {label:'Fase 5',title:'Return to Sport',weeks:'Mnd 5–12',
       evidence:'RTS vóór 9 maanden verhoogt herletselrisico met factor 4–6 (Grindem et al., 2016). Minimum <strong>9–12 maanden</strong> sterk aanbevolen.',
       goals:['Hop-testbatterij LSI ≥ 90%','Quad + Ham LSI ≥ 90%','ACL-RSI ≥ 65/100','IKDC ≥ 85/100','Minimum 9 maanden postoperatief'],
       exercises:[
         {name:'Single Leg Hop + Triple Hop + 6m Timed',params:[['LSI','≥ 90%']],note:'Volledige hop-testbatterij vóór RTS.',cat:'test'},
         {name:'FIFA 11+ (preventie)',params:[['Duur','20 min'],['Freq','elk trainingsmoment']],note:'50% reductie herletsel (Silvers-Granelli 2015).'},
         {name:'Nordic Hamstring (onderhoud)',params:[['Reps','6–8'],['Freq','1–2×/week']],note:'Levenslang onderhoud.',cat:'kracht',yt:'K_v-BqvmE5Q'}],
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
         {name:'Quadriceps setting (prehab)',params:[['Reps','15–20'],['Hold','5–10 sec'],['Freq','3×/dag']],note:'Patiënt moet uitvoering kennen vóór operatie.',cat:'kracht',yt:'rnMnkQcPMzM'},
         {name:'Enkel-pompen (dag 0)',params:[['Reps','20–30'],['Freq','elk uur']],note:'DVT-preventie. Starten in recovery room.'},
         {name:'Eerste stappen (dag 0)',params:[['Timing','2–6u postop'],['Hulp','rollator + kinesist']],note:'ERAS: dag 0 mobilisatie.'},
         {name:'Passieve extensie (dag 1)',params:[['Duur','15–20 min'],['Freq','3–4×/dag']],note:'PRIORITEIT. Extensiedeficit is meest invaliderende complicatie.'}],
       criteria_go:['Hemodynamisch stabiel','DVT-preventie opgestart','Eerste stappen gezet'],
       criteria_stop:['Hemodynamische instabiliteit → uitstellen'],
       redflags:['DVT: kuitpijn, warmte → doppler echo','Peroneus parese → directe melding chirurg']},
      {label:'Week 1–2',title:'Vroeg Postoperatief',weeks:'Week 1–2',
       evidence:'Ziekenhuisduur gedaald naar <strong>2–3 dagen</strong> bij ERAS. <strong>Cryotherapie</strong> reduceert pijn (Adie et al., 2012). <strong>CPM niet aanbevolen</strong> (Cochrane 2014).',
       goals:['Extensie 0°','Flexie ≥ 90° einde week 2','Lopen met rollator','Trappen met hulpmiddel','VAS ≤ 4/10'],
       exercises:[
         {name:'Actief-geassisteerde knieflexie',params:[['Reps','10–15'],['Sets','3'],['Freq','3×/dag']],note:'Target: 5° meer per dag.',cat:'mobiliteit',yt:'kHPuIh0wqwM'},
         {name:'Passieve knie-extensie',params:[['Duur','15–20 min'],['Freq','4×/dag']],note:'PRIORITEIT.',cat:'mobiliteit'},
         {name:'Patella mobilisatie',params:[['Reps','10–15'],['Freq','dagelijks']],note:'Start dag 7–10 na wondsluiting.',cat:'mobiliteit'},
         {name:'Cryotherapie post-sessie',params:[['Duur','15–20 min'],['Timing','na elke sessie']],note:'IJszak met doek, niet op wond.'}],
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
         {name:'Enkel-been balans',params:[['Duur','20–40 sec'],['Sets','3']],note:'Expliciete proprioceptieve training nodig post-TKA.',cat:'stabiliteit',yt:'TFKgUhrR9j4'}],
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
         {name:'Zwemmen (crawl/rugslag)',params:[['Freq','2–3×/week']],note:'GEEN schoolslag.'},
         {name:'Krachtoefeningen onderhoud',params:[['Freq','2×/week']],note:'Sarcopenie-preventie.'}],
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
         {name:'McConnell taping',params:[['Test','≥ 50% VAS-reductie']],note:'Test altijd pijneffect.',cat:'manueel',yt:'YXdQXuYjyls'},
         {name:'Isometrische quad (60–70°)',params:[['Reps','5'],['Hold','45 sec'],['Sets','4']],note:'Reduceert corticale pijninhibitie (Rio et al., 2015).'},
         {name:'Zijlig heupabductie + clamshell',params:[['Reps','15–20'],['Sets','3'],['Freq','2×/dag']],note:'Eerste activering gluteus medius.',cat:'kracht'},
         {name:'Patiënteducatie (PNE)',params:[['Duur','15–20 min']],note:'Overbelastingsmodel, 2-uursregel, 6–12 weken herstel.'}],
       criteria_go:['VAS ≤ 3/10','Begrip belastingsprincipes'],
       criteria_stop:['Pijn neemt toe → dosering halveren'],redflags:[]},
      {label:'Fase 2',title:'Krachtopbouw Heup + Quad',weeks:'Week 3–8',
       evidence:'<strong>Heup + quad gecombineerd</strong> superieur (Lack et al., 2015 — meta-analyse n=690). Progressieve overload noodzakelijk (Rathleff et al., 2015).',
       goals:['Heup LSI ≥ 85%','Quad LSI ≥ 75%','SLS 30° zonder valgus','VAS ≤ 2/10','Kujala ≥ 70/100'],
       exercises:[
         {name:'Lateral band walk + hip thrust',params:[['Sets','3–4'],['Belasting','progressief']],note:'Hoeksteen heuptraining PFPS.',cat:'kracht',yt:'SjwxrsVNG1w'},
         {name:'Terminale knie-extensie (TKE)',params:[['Reps','15–20'],['Sets','3']],note:'VMO-selectieve activering (Peng et al., 2014).',cat:'kracht'},
         {name:'Wall squat isometrisch',params:[['Hoek','60–70°'],['Hold','30–45 sec'],['Sets','4']],note:'Stop bij > VAS 4.',cat:'stabiliteit',yt:'U6Oow0sNXt4'},
         {name:'Split squat + single leg RDL',params:[['Reps','8–12/been'],['Sets','3']],note:'Hoge functionele transfer.',cat:'kracht'},
         {name:'Side plank + dead bug',params:[['Hold','30–60 sec'],['Sets','3']],note:'Lumbopelvische stabiliteit.',cat:'stabiliteit'}],
       criteria_go:['SLS 30° zonder valgus','Heup LSI ≥ 85%','VAS ≤ 2/10','Kujala ≥ 70/100'],
       criteria_stop:['Pijn stijgt → dosering reduceren'],redflags:[]},
      {label:'Fase 3',title:'Functioneel & Gait',weeks:'Week 6–12',
       evidence:'<strong>Gait retraining</strong> reduceert PF-compressie met 20–30% (Willy et al., 2012). <strong>Stapfrequentie +10%</strong> meest bewezen interventie voor lopers (Neal et al., 2016).',
       goals:['Jogging 30 min VAS ≤ 2/10','Plyometrisch stadium 1+2 voltooid','Quad LSI ≥ 85%','Kujala ≥ 80/100'],
       exercises:[
         {name:'Stapfrequentie verhogen (+10%)',params:[['Tool','metronoom-app'],['Target','+5–10%']],note:'170 → 185 stap/min typisch.',cat:'neuro'},
         {name:'Heup-dominante loopstijl',params:[['Cue','"push from the hip"']],note:'Meer heupextensie = minder PF-compressie.'},
         {name:'Loopprogressie (10%-regel)',params:[['Start','2–3 km'],['Opbouw','10%/week']],note:'2-uursregel na elke run.'},
         {name:'Bipolale → unipolale sprongen',params:[['Reps','8–10 → 6–8/been'],['Sets','3']],note:'Knietracking bij landing.'}],
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
         {name:'Straight Leg Raise (SLR)',params:[['Positief','< 70°'],['Specificiteit','hoog']],note:'Goudstandaard voor L4–L5 en L5–S1. Bragard verhoogt specificiteit.',cat:'kracht',yt:'LJX9tdgFzeo'},
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
         {name:'McKenzie extensie in lig',params:[['Reps','10'],['Sets','3–5'],['Freq','elk uur'],['Indicatie','centralisatie']],note:'NIET bij peripheralisatie. Bekken op mat, bovenlichaam omhoog duwen.',cat:'mobiliteit',yt:'Ez9IIFY6LaE'},
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
         {name:'Transversus abdominis (draw-in)',params:[['Reps','10'],['Hold','10 sec'],['Sets','3'],['Freq','3×/dag']],note:'"Trek navel 10% in" zonder ademinhouden. Palpatie 2 cm mediaal SIAS.',cat:'stabiliteit',yt:'Z9ClwVY3-B4'},
         {name:'Multifidus isometrisch (prone)',params:[['Reps','10'],['Hold','10 sec'],['Sets','3']],note:'"Maak de spier dik zonder te bewegen." Multifidus atrofieert ipsilateraal bij HNP.',cat:'kracht'},
         {name:'Dead bug (basis)',params:[['Reps','8–10/zijde'],['Sets','3']],note:'Ruglig, 90-90. Neutrale lumbale lordose — NIET afplatten.',cat:'stabiliteit',yt:'YqJCvGMsyeE'},
         {name:'Bird dog',params:[['Reps','8–10/zijde'],['Hold','5–8 sec'],['Sets','3']],note:'Viervoet, neutrale rug. Hoge multifidus + gluteus activatie.',cat:'stabiliteit',yt:'wiFNA3sqjCA'},
         {name:'Neurodynamische tensioner',params:[['Reps','8–10'],['Sets','3'],['Indicatie','SLR > 40° pijnvrij']],note:'Knie strekken + dorsaalflexie aanhouden. Meer neuraal effect dan slider.',cat:'neuro'}],
       criteria_go:['NRS ≤ 3/10','SLR ≥ 60°','TA + multifidus actief','Lopen 30 min'],
       criteria_stop:['Peripheralisatie bij oefeningen → terugstap'],redflags:[]},
      {label:'Fase 3',title:'Krachttraining',weeks:'Week 6–12',
       evidence:'<strong>Progressieve krachttraining</strong> veilig en superieur aan core-only (Berglund et al., 2015). <strong>Aerobe training</strong> heeft direct pijnmodulerend effect.',
       goals:['NRS ≤ 2/10 bij alle ADL','Deadlift met lichaamsgewicht correct','Squat 90° pijnvrij','Functionele werktaken simuleren'],
       exercises:[
         {name:'Romanian Deadlift (RDL)',params:[['Reps','10–12'],['Sets','3'],['Belasting','60–75% 1RM'],['Tempo','3-1-3']],note:'Scharnier in heup, neutrale rug. Graduele opbouw is veilig (Berglund 2015).',cat:'kracht',yt:'JCXUYuzwNrM'},
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
         {name:'Onderhoudsprogramma (2×/week)',params:[['Vb','deadlift, squat, bird dog, lopen'],['Duur','30–45 min']],note:'Minimaal maar consistent. 2×/week volstaat.'},
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
         {name:'Pendel-oefeningen (Codman)',params:[['Duur','3–5 min'],['Richtingen','VL, AP, cirkels'],['Freq','3–4×/dag']],note:'Voorovergebogen, arm los hangen. Geen actieve schouderspier — inertie beweegt de arm. Reduceert capsulaire druk. Veilig post-OK.',cat:'mobiliteit',yt:'K5hxQnOWCHU'},
         {name:'Passieve ROM — elevatie (tafelschuif)',params:[['ROM','0–120° progressief'],['Sets','3x10'],['Freq','2×/dag']],note:'Gezonde hand schuift aangedane arm over tafel. Geen actieve elevatie post-OK eerste 4 weken.',cat:'mobiliteit',yt:'kHPuIh0wqwM'},
         {name:'Passieve ER (stok)',params:[['ROM','naar tolerantie'],['Sets','3x10'],['Freq','2×/dag']],note:'Stok in beide handen, gezonde arm duwt aangedane in ER. Post-OK: beperkt tot chirurgale instructie.',cat:'mobiliteit'},
         {name:'Isometrische abductie (muur)',params:[['Hold','5–10 sec'],['Reps','10'],['Sets','3'],['Intensiteit','50–60% MVC']],note:'Arm 15° van lichaam, duw zijwaarts tegen muur. Pijnremmend effect.',cat:'kracht',yt:'D9HFMbmOe2Y'},
         {name:'Isometrische ER + IR (neutraal)',params:[['Hold','5–10 sec'],['Reps','10'],['Sets','3']],note:'Elleboog 90°, arm langs zij. Basis RM-activering zonder beweging.',cat:'kracht',yt:'bJj0yF_1Tq8'},
         {name:'Scapulaire retractie isometrisch',params:[['Hold','5 sec'],['Reps','10–15'],['Sets','3'],['Freq','3×/dag']],note:'"Kneep een potlood tussen schouderbladeren." Scapulaire stabilisatie fundament.',cat:'stabiliteit',yt:'UaB81R3pMrY'},
         {name:'Thoracale extensie mobilisatie',params:[['Vb','thoracale extensie op rol'],['Freq','dagelijks']],note:'Thoracale hyperkyfose beperkt scapulaire upward rotation — essentieel voor schouder ROM.',cat:'mobiliteit'}],
       criteria_go:['NRS ≤ 4/10 in rust','Passieve elevatie ≥ 120°','Passieve ER ≥ 30°','Post-OK: sling-protocol afgerond','Isometrische oefeningen pijnvrij'],
       criteria_stop:['Post-OK: geen actieve beweging voor week 4–6 bij volledige ruptuurherstel','Toenemende pijn na sessie → dosering halveren'],
       redflags:['Post-OK: plots krachtverlies + pijn bij overhead → re-ruptuur → chirurg','Uitstralende pijn naar hand + tintelingen → cervicale radiculopathie']},

      {label:'Fase 2',title:'Actieve ROM & Scapulaire Controle',weeks:'Week 3–8 (cons.) / Week 4–10 (post-OK)',
       evidence:'<strong>Scapulaire stabilisatie</strong> essentieel vóór RC-versterking — proximal stability for distal mobility (Kibler et al., 2013). <strong>Serratus anterior</strong> is prioritaire stabilisator: atrofie bij 68% van schouderpatiënten (Cools et al., 2007). <strong>Gesloten keten</strong> activeert hogere co-contractie en is veiliger in vroege fase.',
       goals:['Actieve elevatie ≥ 150° zonder schouderheffing','Actieve ER ≥ 45°','Scapulaire upward rotation normaal (30–40° bij 180°)','Serratus anterior zichtbaar actief','Full passive ROM bereikt'],
       exercises:[
         {name:'Actieve elevatie (cablepulley of zijlig)',params:[['ROM','0–150° progressief'],['Sets','3x10'],['Freq','2×/dag']],note:'Zijlig: zwaartekracht geneutraliseerd. Controleer: geen schouderheffing (upper trap dominantie).',cat:'mobiliteit'},
         {name:'Serratus anterior — wall slide',params:[['Reps','10–15'],['Sets','3'],['Positie','beide handen op muur, scapula protractie']],note:'"Duw de muur weg" met scapula. Laagste upper trap:serratus ratio van alle oefeningen.',cat:'stabiliteit',yt:'MRpRQ7JLX88'},
         {name:'Prone Y-T-W-L',params:[['Reps','10–12 elk'],['Sets','3'],['Gewicht','geen → licht (1–2 kg)']],note:'Buiklig. Y=135°, T=90°, W=ER met 90° abductie, L=ER met 90° elleboogflexie. Hoge scapulaire activiteit.',cat:'stabiliteit',yt:'VqXBqmDkJCk'},
         {name:'Wand push-up (gesloten keten)',params:[['Reps','10–15'],['Sets','3'],['Progressie','verder van muur → vloer']],note:'Hoge serratus anterior activiteit. Veilig post-OK zodra actieve beweging toegestaan.',cat:'stabiliteit',yt:'N_xpYoLJjIE'},
         {name:'IR-band oefening (elleboog 90°)',params:[['Reps','15–20'],['Sets','3'],['Band','licht → matig']],note:'Subscapularis activering. Bewuste scapulaire retractie tijdens uitvoering.',cat:'kracht',yt:'b85PYb8bqP8'},
         {name:'ER-band oefening (elleboog 90°)',params:[['Reps','15–20'],['Sets','3'],['Band','licht → matig']],note:'Infraspinatus + teres minor. Handdoek tussen elleboog en romp voor consistente positie.',cat:'kracht',yt:'I-MKXSB-3Xo'}],
       criteria_go:['Actieve elevatie ≥ 150° zonder compensatie','ER ≥ 45° actief','Scapulaire upward rotation normaal','Full passive ROM','RM-kracht LSI ≥ 60%'],
       criteria_stop:['Schouderheffing bij elevatie > 90° → upper trap dominantie aanpakken','Post-OK: agressieve stretching vermijden tot week 8'],
       redflags:[]},

      {label:'Fase 3',title:'Krachtontwikkeling RM',weeks:'Week 8–16 (cons.) / Week 10–20 (post-OK)',
       evidence:'<strong>Eccentrische training</strong> voor RC-tendinopathie reduceert pijn (Bernhardsson et al., 2011). <strong>High-load training</strong> (70–80% 1RM) superieur voor structurele peesadaptatie (Beyer et al., 2015). <strong>ER/IR ratio ≥ 0.66</strong> aanbevolen (Cools et al., 2007).',
       goals:['RM-kracht LSI ≥ 80%','ER/IR ratio ≥ 0.66','Volledige actieve ROM','Overhead activiteiten pijnvrij','DASH < 20'],
       exercises:[
         {name:'Side-lying ER (eccentrisch accent)',params:[['Reps','8–12'],['Sets','3–4'],['Tempo','2-0-4']],note:'Infraspinatus + teres minor. 4 sec eccentrisch zakken. Hoge peeskrachtadaptatie.',cat:'kracht',yt:'ZfnEjgVUvwk'},
         {name:'Full can (scapular plane abductie)',params:[['Reps','10–12'],['Sets','3'],['ROM','0–120°'],['Belasting','60–75% 1RM']],note:'30° voor frontale vlak, duim omhoog. Lagere subacromiale compressie dan empty can.',cat:'kracht',yt:'T4G5NrSLCmw'},
         {name:'Prone ER (90° abductie)',params:[['Reps','10–12'],['Sets','3'],['Gewicht','licht → matig']],note:'Buiklig, schouder 90° abductie, elleboog 90°. Hoge infraspinatus + mid-trap + rhomboid activiteit.',cat:'kracht',yt:'WKyHxkHOcAM'},
         {name:'Zijwaartse abductie (scapular plane)',params:[['Reps','10–12'],['Sets','3'],['ROM','0–90°']],note:'Supraspinatus prioriteit. Stop bij 90° om subacromiale compressie te vermijden.',cat:'kracht'},
         {name:'Push-up plus',params:[['Reps','10–15'],['Sets','3'],['Progressie','knieën → tenen → instabiel']],note:'Eindfase push-up: extra protractie. Hoogste serratus anterior activiteit.',cat:'stabiliteit',yt:'OE_RFQOQfhg'},
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
         {name:'Onderhoudsprogramma (post-RTS)',params:[['Freq','2×/week'],['Vb','ER-band, prone Y, push-up plus']],note:'Levenslang onderhoud — RC-tendinopathie recidief frequent bij stop training.'}],
       criteria_go:['RM-kracht LSI ≥ 90%','Interval throwing program volledig','WORC/WOSI ≥ 80%','Pijn NRS ≤ 1/10 bij sportactiviteit'],
       criteria_stop:['Pijn bij sport > NRS 3 → fase 3 consolideren','Post-OK grote ruptuur: overhead sport uitstellen tot ≥ 9 maanden'],
       redflags:['Re-ruptuur post-OK: plots krachtverlies bij overhead → echo/MRI → chirurg','Chronische subacromiale pijn ondanks optimale kine → corticosteroïdinjectie of chirurgie herbekijken']},

      {label:'Fase 5',title:'Preventie & Langetermijn',weeks:'Mnd 4–6+',
       evidence:'<strong>RC-tendinopathie recidief</strong> bij 20–40% zonder onderhoudstraining. <strong>Ergonomische interventies</strong> reduceren werkgerelateerde RC-pathologie (van Rijn et al., 2010). <strong>Slaappositie</strong> op aangedane zijde verhoogt supraspinatus ischemie.',
       goals:['Zelfstandig onderhoudsprogramma 2×/week','Ergonomie werkplek geoptimaliseerd','Slaaphoudingsadvies geïntegreerd','Vroege tekenen van recidief herkennen'],
       exercises:[
         {name:'Onderhoudsprogramma RC (2×/week)',params:[['Vb','ER-band, side-lying ER, prone Y-T-W'],['Duur','20–30 min']],note:'Minimale effectieve dosis. Stoppen = recidief. Integreer in sporttraining.'},
         {name:'Scapulaire controle (onderhoud)',params:[['Vb','wall slide, push-up plus'],['Freq','2×/week']],note:'Serratus anterior + lower trap. Meest vergeten onderdeel langetermijn-preventie.'},
         {name:'Ergonomische werkhouding',params:[['Vb','schermhoogte, muis-positie, tilhouding']],note:'Armen niet boven schouderhoogte. Beeldscherm op ooghoogte. Max tilgewicht: 23 kg enkelvoudig.',cat:'manueel'},
         {name:'Slaaphouding advies',params:[['Advies','niet op aangedane zijde slapen']],note:'Op aangedane zijde = supraspinatus compressie + ischemie 6–8 uur/nacht. Ruglig met kussen onder arm is beste positie.',cat:'manueel'}],
       criteria_go:['Zelfstandig onderhoudsprogramma aangeleerd','Ergonomie geoptimaliseerd','Recidief-actieplan gekend'],
       criteria_stop:['Recidief zonder verbetering na 4 weken → kinesist opnieuw'],
       redflags:['Frozen shoulder ontwikkeling (stijfheid alle richtingen) → agressief aanpakken of injectie','Nieuwe axillaire neuropathie na trauma → spoed neurologie']}
    ],
    refs:'Hegedus et al. (2012) — Physical examination tests for shoulder pathology. BJSM meta-analyse. | Kukkonen et al. (2015) — Conservative vs surgical for RC tears. J Bone Joint Surg RCT. | Kibler et al. (2013) — The role of the scapula in athletic shoulder function. AJSM. | Cools et al. (2007) — Rehabilitation of scapular muscle balance. AJSM. | Rio et al. (2015) — Isometric contractions for pain in tendinopathy. BJSM. | Beyer et al. (2015) — Heavy slow resistance vs eccentric training. Am J Sports Med. | Van der Meijden et al. (2012) — Rehabilitation after arthroscopic RC repair. J Shoulder Elbow Surg.'}
};

// ── CATEGORIES ──
const CAT = {
  kracht:   {icon:'💪', label:'Kracht',     color:'#f97316'},
  mobiliteit:{icon:'🔄', label:'Mobiliteit', color:'#22d3ee'},
  stabiliteit:{icon:'⚖️', label:'Stabiliteit',color:'#a78bfa'},
  neuro:    {icon:'🧠', label:'Neuro',       color:'#34d399'},
  cardio:   {icon:'🏃', label:'Cardio',      color:'#4ade80'},
  manueel:  {icon:'🤲', label:'Manueel',     color:'#f43f5e'},
  test:     {icon:'📏', label:'Test',         color:'#facc15'},
};

// ── STATE ──
let currentProto = null;
let deferredPrompt = null;

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
  if (!deferredPrompt) return;
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
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeYT(); });

// ── NAVIGATION ──
function setNav(id) {
  document.querySelectorAll('[id^="nav-"],[id^="bnav-"]').forEach(n => n.classList.remove('active'));
  const s = document.getElementById('nav-'+id);
  const b = document.getElementById('bnav-'+id);
  if(s) s.classList.add('active');
  if(b) b.classList.add('active');
}

function showHome() {
  document.getElementById('screen-home').style.display = '';
  document.getElementById('screen-proto').style.display = 'none';
  document.getElementById('screen-search').style.display = 'none';
  document.getElementById('searchInput').value = '';
  setNav('home');
  currentProto = null;
}

function showProto(id) {
  const p = protocols[id];
  if(!p) return;
  currentProto = p;
  document.getElementById('screen-home').style.display = 'none';
  document.getElementById('screen-search').style.display = 'none';
  document.getElementById('screen-proto').style.display = 'flex';
  document.getElementById('proto-breadcrumb').textContent = p.title;
  document.getElementById('proto-title').textContent = p.title;
  document.getElementById('proto-subtitle').textContent = p.subtitle;
  document.getElementById('proto-dot').style.background = p.color;
  document.documentElement.style.setProperty('--proto-color', p.color);
  const tabs = document.getElementById('proto-tabs');
  tabs.innerHTML = p.phases.map((ph,i) =>
    `<div class="vtab ${i===0?'active':''}" onclick="showPhase(${i})">${ph.label}</div>`
  ).join('') + `<div class="vtab" onclick="showRefs('${id}')">Referenties</div>`;
  renderPhase(0);
  setNav(id);
}

function showPhase(i) {
  document.querySelectorAll('.vtab').forEach((t,j) => t.classList.toggle('active', j===i));
  renderPhase(i);
  document.getElementById('proto-body').scrollTop = 0;
}

function showRefs(id) {
  const p = protocols[id];
  document.querySelectorAll('.vtab').forEach((t,j) => t.classList.toggle('active', j===p.phases.length));
  document.getElementById('proto-body').innerHTML = `<div class="ref-box"><div class="ref-label">Sleutelreferenties</div><div class="ref-text">${p.refs.split('|').map(r=>`<div style="margin-bottom:10px">${r.trim()}</div>`).join('')}</div></div>`;
}

function renderPhase(i) {
  const ph = currentProto.phases[i];
  let html = '';
  html += `<div class="ev-box"><div class="ev-label">Evidence-basis</div><div class="ev-text">${ph.evidence}</div></div>`;
  html += `<div class="goals-box"><div class="goals-label">Doelstellingen — ${ph.title}</div><ul class="glist">${ph.goals.map(g=>`<li>${g}</li>`).join('')}</ul></div>`;
  if(ph.exercises && ph.exercises.length) {
    html += `<div class="slabel">Oefenprogramma</div><div class="ex-grid">`;
    ph.exercises.forEach(ex => {
      const cat = ex.cat ? CAT[ex.cat] : null;
      html += `<div class="ex-card">`;
      // Header row: name + category badge
      html += `<div class="ex-header">`;
      html += `<div class="ex-name">${ex.name}</div>`;
      if(cat) html += `<span class="ex-cat" style="background:${cat.color}22;color:${cat.color};border-color:${cat.color}44">${cat.icon} ${cat.label}</span>`;
      html += `</div>`;
      if(ex.params && ex.params.length) {
        html += `<div class="ex-params">${ex.params.map(([k,v])=>`<div class="ep">${k}: <span>${v}</span></div>`).join('')}</div>`;
      }
      if(ex.note) html += `<div class="ex-note">${ex.note}</div>`;
      // YouTube button
      if(ex.yt) {
        html += `<button class="yt-btn" onclick="openYT('${ex.yt}','${ex.name.replace(/'/g,"\\'")}')">▶ Bekijk video</button>`;
      }
      html += `</div>`;
    });
    html += `</div>`;
  }
  if((ph.criteria_go && ph.criteria_go.length) || (ph.criteria_stop && ph.criteria_stop.length)) {
    html += `<div class="slabel">Doorstroomcriteria</div><div class="criteria-grid">`;
    if(ph.criteria_go && ph.criteria_go.length) {
      html += `<div class="cbox go"><div class="ctitle go">Vereist ✓</div><ul class="clist go">${ph.criteria_go.map(c=>`<li>${c}</li>`).join('')}</ul></div>`;
    }
    if(ph.criteria_stop && ph.criteria_stop.length) {
      html += `<div class="cbox stop"><div class="ctitle stop">Vertraag ⚠</div><ul class="clist stop">${ph.criteria_stop.map(c=>`<li>${c}</li>`).join('')}</ul></div>`;
    }
    html += `</div>`;
  }
  if(ph.redflags && ph.redflags.length) {
    html += `<div class="rf-box"><div class="rf-label">Rode vlaggen</div><ul class="rf-list">${ph.redflags.map(r=>`<li>${r}</li>`).join('')}</ul></div>`;
  }
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
  document.getElementById('screen-home').style.display = 'none';
  document.getElementById('screen-proto').style.display = 'none';
  document.getElementById('screen-search').style.display = '';
  const ql = q.toLowerCase();
  let res = [];
  Object.values(protocols).forEach(p => {
    p.phases.forEach((ph, pi) => {
      ph.exercises.forEach(ex => {
        if([ex.name, ex.note||''].join(' ').toLowerCase().includes(ql))
          res.push({p, ph, pi, match: ex.name, type: 'Oefening', detail: ex.note||'', yt: ex.yt||null});
      });
      ph.goals.forEach(g => {
        if(g.toLowerCase().includes(ql))
          res.push({p, ph, pi, match: g, type: 'Doel', detail: '', yt: null});
      });
    });
  });
  const el = document.getElementById('search-results');
  if(!res.length) {
    el.innerHTML = `<div class="no-results">Geen resultaten voor "<strong style="color:var(--text)">${q}</strong>"</div>`;
    return;
  }
  el.innerHTML = res.map(r => `
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:7px;padding:12px 14px;margin-bottom:8px;">
      <div onclick="showProto('${r.p.id}');showPhase(${r.pi});" style="cursor:pointer;">
        <div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;">
          <div style="width:7px;height:7px;border-radius:50%;background:${r.p.color};flex-shrink:0"></div>
          <span style="font-size:12px;font-weight:600">${r.p.title}</span>
          <span style="font-size:10px;color:var(--muted);font-family:'Geist Mono',monospace;background:var(--surface2);padding:1px 6px;border-radius:3px">${r.ph.label}</span>
          <span style="font-size:10px;color:var(--muted2);font-family:'Geist Mono',monospace">${r.type}</span>
        </div>
        <div style="font-size:13px">${r.match}</div>
        ${r.detail ? `<div style="font-size:11px;color:var(--muted);margin-top:3px">${r.detail.substring(0,110)}${r.detail.length>110?'...':''}</div>` : ''}
      </div>
      ${r.yt ? `<button class="yt-btn" style="margin-top:8px" onclick="openYT('${r.yt}','${r.match.replace(/'/g,"\\'")}')">▶ Bekijk video</button>` : ''}
    </div>`).join('');
}

// ── SERVICE WORKER ──
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
