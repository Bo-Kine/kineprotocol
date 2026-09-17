// KINEBO — Manuele therapie: BEKKEN
// Interactief onderzoeksformulier (links/rechts), live interpretatie-hulp,
// beslisbomen (hergebruiken BESLISBOOM + openBeslisboom uit app.js) en naslag.
// Inhoud = cursus Manuele Therapie (eigen samenvatting). NIET tegen primaire
// literatuur gecontroleerd — zo ook getoond in de app.

const MTB_KLEUR = '#a78bfa';
const MTB_BRON = 'Cursusinhoud Manuele Therapie (eigen samenvatting) — niet tegen primaire literatuur gecontroleerd. De betrouwbaarheid van losse SI-testen is beperkt: redeneer altijd met clusters.';

// ── FORMULIERDEFINITIE ──
// types: lr (Li+/Re+/Beide+/Neg/n.g.), pn (Pos/Neg/n.g.), keuze (1 optie), multi (meerdere), tekst, tekst_groot
const MTB_FORM = [
  { id:'elim', titel:'1. Anamnese & eliminatie', velden:[
    {id:'klacht', label:'Klacht / pijnlocatie', type:'tekst', placeholder:'Lokalisatie, uitstraling, duur...'},
    {id:'fortin', label:'Teken van Fortin (pijn thv SIPS)', type:'lr'},
    {id:'centralisatie', label:'Centralisatie bij herhaalde bewegingen', type:'pn', info:'+ → eerder discus'},
    {id:'neuraal', label:'Slump / SLR', type:'lr', info:'+ → disco-radiculair conflict'},
    {id:'stenose', label:'Stenosekenmerken', type:'pn', info:'Pijn in extensie/stand/stappen, beter in flexie/zit'},
    {id:'listhesis', label:'Spondylolisthesis-kenmerken', type:'pn', info:'Slip thv facet, segmentale hypermobiliteit'},
    {id:'rodevlag', label:'Rode vlaggen', type:'pn', info:'Bechterew (ochtendstijfheid, jonge man), sacro-ilitis, stressfractuur, ingeklemde liesbreuk'},
  ]},
  { id:'laslett', titel:'2. Cluster van Laslett', velden:[
    {id:'l_faber', label:'FABER (Patrick) — dorsale pijn', type:'lr'},
    {id:'l_thigh', label:'Thigh thrust (posterieure schuif)', type:'lr'},
    {id:'l_gaenslen', label:'Gaenslen', type:'lr'},
    {id:'l_compressie', label:'Compressietest', type:'pn'},
    {id:'l_distractie', label:'Distractietest', type:'pn'},
  ]},
  { id:'pos', titel:'3. Positionele testen', velden:[
    {sub:'In stand'},
    {id:'st_crista', label:'Crista iliaca', type:'keuze', opties:['Gelijk','Li hoger','Re hoger']},
    {id:'st_sips', label:'SIPS', type:'keuze', opties:['Gelijk','Li hoger','Re hoger']},
    {id:'st_sias', label:'SIAS', type:'keuze', opties:['Gelijk','Li hoger','Re hoger']},
    {id:'st_troch', label:'Trochanter (functionele lengte)', type:'keuze', opties:['Gelijk','Li hoger','Re hoger']},
    {id:'st_knie', label:'Knieën', type:'multi', opties:['Normaal','Flexum li','Flexum re','Recurvatum li','Recurvatum re','Valgus','Varus']},
    {sub:'In zit'},
    {id:'zit_verschil', label:'Hoogteverschil t.o.v. stand', type:'keuze', opties:['Geen verschil','Verschil blijft','Verschil verdwijnt'], info:'Blijft → bekken · verdwijnt → BLV'},
    {sub:'In ruglig (eerst standaardiseren)'},
    {id:'rl_sias', label:'SIAS', type:'keuze', opties:['Gelijk','Li hoger','Re hoger']},
    {id:'rl_symf', label:'Symphysis pubis', type:'keuze', opties:['Gelijk','Li hoger','Re hoger']},
    {id:'rl_mall', label:'Malleolus internus (beenlengte)', type:'keuze', opties:['Gelijk','Li korter','Re korter']},
    {id:'rl_siasml', label:'Afstand SIAS–middellijn', type:'tekst', placeholder:'Verschil li/re...'},
    {sub:'In buiklig'},
    {id:'bl_sips', label:'SIPS', type:'keuze', opties:['Gelijk','Li hoger','Re hoger']},
    {id:'bl_sulcus', label:'Sulcus sacralis', type:'keuze', opties:['Symmetrisch','Li hol','Re hol','Bilateraal hol','Bilateraal vol']},
    {id:'bl_ali', label:'ALI', type:'keuze', opties:['Gelijk','Li posterior','Re posterior']},
    {id:'bl_4punt', label:'4-puntentest', type:'pn'},
  ]},
  { id:'dyn', titel:'4. Dynamische testen', velden:[
    {sub:'In stand'},
    {id:'d_rft', label:'Rompflexietest (RFT) stand', type:'lr', info:'Zijde waar SIPS stijgt = blokkade (met exo herhalen: BF uitsluiten)'},
    {id:'d_hft', label:'Gillet / Stork (HFT)', type:'lr', info:'SIPS daalt niet onder S2 = blokkade'},
    {id:'d_rucklauf', label:'Rücklauftest', type:'lr', info:'SIPS andere zijde/steunbeen stijgt = instabiliteit (duid de onderzochte zijde aan)'},
    {sub:'In zit'},
    {id:'d_rftzit', label:'Rompflexietest zit', type:'lr'},
    {id:'d_lordkyf', label:'Lordose-kyfose 1 / 2', type:'tekst', placeholder:'Bevinding...'},
    {sub:'In ruglig'},
    {id:'d_longsit', label:'Long sitting (Debrowlowsky)', type:'keuze', opties:['Symmetrisch','Li wordt langer','Re wordt langer'], info:'Kant van posterioriteit wordt langer'},
    {id:'d_ramus', label:'Test ramus pubica', type:'lr', info:'Zijde weinig mobiliteit = blokkade'},
    {id:'d_rotatie', label:'Mobiliteitstest SIG rotatie', type:'keuze', opties:['Symmetrisch','Li meer exo','Re meer exo'], info:'Meer exo → zijde torsie + blokkade'},
    {id:'d_squeeze', label:'Squeeze test', type:'lr', info:'Zijde met weinig ruimte R1–R2 = hypomobiel'},
    {id:'d_aslr', label:'Actieve SLR', type:'lr', info:'Pijn / lastig = instabiliteit'},
    {id:'d_aslr_comp', label:'ASLR: verlichting met compressie op', type:'multi', opties:['Geen','Pubis','SIAS','SIPS']},
    {id:'d_down_verl', label:'Downing verlengingstest', type:'keuze', opties:['Symmetrisch','Li verlengt niet','Re verlengt niet']},
    {id:'d_down_verk', label:'Downing verkortingstest', type:'keuze', opties:['Symmetrisch','Li verkort niet','Re verkort niet']},
    {id:'d_glij', label:'Artrokinematische glij SIG (geen glij)', type:'lr'},
    {sub:'In buiklig'},
    {id:'d_sacr_hor', label:'Mobiliteit sacrum horizontaal / verticaal', type:'keuze', opties:['Normaal','Beperkt horizontaal','Beperkt verticaal']},
    {id:'d_gapping', label:'Gapping via ilium (geen trillingen)', type:'lr'},
  ]},
  { id:'prov', titel:'5. Provocatietesten', velden:[
    {id:'p_sulcus', label:'Druk sulcus sacralis (zit)', type:'lr'},
    {id:'p_patrick_v', label:'Patrick — ventrale pijn (heup)', type:'lr'},
    {id:'p_maitland', label:'Maitland (zijlig)', type:'lr'},
    {id:'p_symf', label:'Compressie symphysis', type:'pn'},
    {id:'p_iliolumb', label:'Lig. iliolumbale', type:'lr'},
    {id:'p_sacrotub', label:'Lig. sacrotuberale', type:'lr'},
    {id:'p_sacrospin', label:'Lig. sacrospinale', type:'lr'},
    {id:'p_comp_ac', label:'Compressie sacrum antero-cefaal', type:'pn'},
    {id:'p_comp_a', label:'Compressie sacrum anterior', type:'pn'},
    {id:'p_rebound', label:'Rebound (PA L5)', type:'pn', info:'+ → verticalisatie sacrum of lumbale instabiliteit'},
    {id:'p_hyper1', label:'Hyperextensie fase 1 (onder cristarand)', type:'pn', info:'+ → heup'},
    {id:'p_hyper2', label:'Hyperextensie fase 2 (sacrum)', type:'pn', info:'+ → SIG'},
    {id:'p_hyper3', label:'Hyperextensie fase 3 (L5)', type:'pn', info:'+ → lumbosacraal'},
  ]},
  { id:'spier', titel:'6. Spieren', velden:[
    {id:'s_zwak', label:'Verminderde activiteit', type:'multi', opties:['TA','Obliquus int.','Multifidi','Gmax','Gmed post.']},
    {id:'s_over', label:'Verhoogde activiteit', type:'multi', opties:['Iliopsoas','Piriformis','Obturatorii','Coccygeus','BF','RF','Adductoren','TFL']},
    {id:'s_verkort', label:'Verkort (spierlengtetest)', type:'multi', opties:['RF li','RF re','QL li','QL re','H li','H re','RA','Psoas li','Psoas re','Piriformis li','Piriformis re']},
  ]},
  { id:'concl', titel:'7. Conclusie & plan', velden:[
    {id:'c_conclusie', label:'Conclusie', type:'tekst_groot', placeholder:'Laesie, zijde, primair/secundair...'},
    {id:'c_plan', label:'Behandelplan', type:'tekst_groot', placeholder:'Pubis → ilium → sacrum → LWVZ...'},
  ]},
];

// ── STATE ──
let mtbAns = {};
let mtbPatId = '';
let mtbTab = 'onderzoek';
const MTB_DRAFT = 'kp_mtbekken_draft';
const mtbKey = pid => 'kp_mtbekken_' + (pid || '_los');
const mtbLoad = (k, d) => { try { return JSON.parse(localStorage.getItem(k) || JSON.stringify(d)); } catch(e) { return d; } };
const mtbSave = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch(e) {} };
const mtbEsc = s => String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');

// ── SCHERM ──
function showMtBekkenScreen() {
  hideAllScreens();
  document.getElementById('screen-mt-bekken').style.display = '';
  setNav('mt-bekken');
  const d = mtbLoad(MTB_DRAFT, null);
  if (d && !Object.keys(mtbAns).length) { mtbAns = d.ans || {}; mtbPatId = d.pat || ''; }
  mtbRender();
}

function mtbSetTab(t) { mtbTab = t; mtbRender(); document.getElementById('screen-mt-bekken').scrollTop = 0; }

function mtbRender() {
  const tabs = [['onderzoek','📝 Onderzoek'],['interpretatie','🧭 Interpretatie'],['bomen','🌳 Beslisbomen'],['naslag','📖 Naslag']];
  let h = '<div style="padding:24px 20px;max-width:860px;">';
  h += '<div style="font-family:\'Instrument Serif\',serif;font-size:24px;margin-bottom:4px;">Manuele therapie — Bekken</div>';
  h += '<div style="font-size:11px;color:var(--muted);line-height:1.5;margin-bottom:14px;">' + MTB_BRON + '</div>';
  h += '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px;position:sticky;top:0;z-index:5;background:var(--bg);padding:6px 0;">';
  tabs.forEach(([id, lab]) => {
    const a = mtbTab === id;
    h += '<button onclick="mtbSetTab(\'' + id + '\')" style="flex:1;min-width:120px;padding:8px 10px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;font-family:Geist,sans-serif;border:1px solid ' + (a ? MTB_KLEUR + '66' : 'var(--border)') + ';background:' + (a ? MTB_KLEUR + '22' : 'var(--surface2)') + ';color:' + (a ? MTB_KLEUR : 'var(--muted)') + ';">' + lab + '</button>';
  });
  h += '</div><div id="mtb-body"></div></div>';
  document.getElementById('mt-bekken-root').innerHTML = h;
  const body = document.getElementById('mtb-body');
  if (mtbTab === 'onderzoek') body.innerHTML = mtbRenderOnderzoek();
  else if (mtbTab === 'interpretatie') body.innerHTML = mtbRenderInterpretatie();
  else if (mtbTab === 'bomen') body.innerHTML = mtbRenderBomen();
  else body.innerHTML = mtbRenderNaslag();
}

// ── ONDERZOEK ──
const MTB_BTN = 'padding:6px 9px;border-radius:5px;border:1px solid var(--border);background:var(--surface2);color:var(--muted);font-size:11px;font-weight:600;cursor:pointer;font-family:Geist,sans-serif;flex:1;min-width:58px;';

function mtbRenderOnderzoek() {
  const pts = (typeof loadPatients === 'function') ? loadPatients() : [];
  let h = '<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:12px 14px;margin-bottom:16px;">';
  h += '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">';
  h += '<select onchange="mtbKiesPatient(this.value)" style="flex:2;min-width:180px;background:var(--surface2);border:1px solid var(--border);border-radius:6px;padding:8px 10px;color:var(--text);font-family:Geist,sans-serif;font-size:12px;">';
  h += '<option value="">— Zonder patiënt —</option>';
  pts.forEach(p => { h += '<option value="' + mtbEsc(p.id) + '"' + (p.id === mtbPatId ? ' selected' : '') + '>' + mtbEsc(p.name) + '</option>'; });
  h += '</select>';
  h += '<button class="kmodal-action secondary" style="min-width:90px;flex:1" onclick="mtbNieuw()">＋ Nieuw</button>';
  h += '<button class="kmodal-action secondary" style="min-width:90px;flex:1;color:' + MTB_KLEUR + '" onclick="mtbOpslaan()">💾 Opslaan</button>';
  h += '<button class="kmodal-action secondary" style="min-width:90px;flex:1" onclick="mtbPrint(false)">🖨️ Print</button>';
  h += '<button class="kmodal-action secondary" style="min-width:90px;flex:1" onclick="mtbPrint(true)">📄 Blanco</button>';
  h += '</div>';
  const hist = mtbLoad(mtbKey(mtbPatId), []);
  if (hist.length) {
    h += '<div style="margin-top:10px;font-size:11px;color:var(--muted);">Eerdere onderzoeken: ';
    hist.slice().reverse().forEach((r, iRev) => {
      const i = hist.length - 1 - iRev;
      h += '<span style="display:inline-flex;gap:4px;margin:3px 6px 3px 0;"><button onclick="mtbLaad(' + i + ')" style="' + MTB_BTN + 'flex:none;min-width:0;">' + mtbEsc(r.datum) + '</button><button onclick="mtbWis(' + i + ')" title="Verwijderen" style="' + MTB_BTN + 'flex:none;min-width:0;color:#ef4444;">✕</button></span>';
    });
    h += '</div>';
  }
  h += '<div id="mtb-msg" style="font-size:11px;color:#22c55e;margin-top:6px;min-height:14px;"></div></div>';

  MTB_FORM.forEach(sec => {
    h += '<details open style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:10px 14px;margin-bottom:12px;">';
    h += '<summary style="cursor:pointer;font-size:13px;font-weight:700;color:' + MTB_KLEUR + ';padding:4px 0;">' + sec.titel + '</summary><div style="margin-top:8px;">';
    sec.velden.forEach(v => { h += v.sub ? '<div style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted2);font-family:Geist Mono,monospace;font-weight:700;margin:12px 0 6px;padding-bottom:4px;border-bottom:1px solid var(--border)">' + v.sub + '</div>' : mtbVeld(v); });
    h += '</div></details>';
  });
  h += '<button class="kmodal-action primary" style="--proto-color:' + MTB_KLEUR + ';width:100%;margin-top:4px;" onclick="mtbSetTab(\'interpretatie\')">🧭 Bekijk interpretatie-hulp</button>';
  return h;
}

function mtbOpties(v) {
  if (v.type === 'lr') return [['li','Li +'],['re','Re +'],['bi','Beide +'],['neg','Neg'],['ng','n.g.']];
  if (v.type === 'pn') return [['pos','Positief'],['neg','Negatief'],['ng','n.g.']];
  return v.opties.map(o => [o, o]);
}

function mtbVeld(v) {
  let h = '<div style="margin-bottom:12px;">';
  h += '<div style="font-size:12px;font-weight:600;margin-bottom:4px;">' + v.label + (v.info ? ' <span style="font-size:10.5px;color:var(--muted);font-weight:400;font-style:italic">— ' + v.info + '</span>' : '') + '</div>';
  if (v.type === 'tekst') {
    h += '<input type="text" value="' + mtbEsc(mtbAns[v.id]) + '" placeholder="' + mtbEsc(v.placeholder || '') + '" oninput="mtbTxt(\'' + v.id + '\',this.value)" style="width:100%;background:var(--surface2);border:1px solid var(--border);border-radius:5px;padding:7px 10px;color:var(--text);font-family:Geist,sans-serif;font-size:12px;outline:none;">';
  } else if (v.type === 'tekst_groot') {
    h += '<textarea placeholder="' + mtbEsc(v.placeholder || '') + '" oninput="mtbTxt(\'' + v.id + '\',this.value)" style="width:100%;min-height:70px;background:var(--surface2);border:1px solid var(--border);border-radius:5px;padding:7px 10px;color:var(--text);font-family:Geist,sans-serif;font-size:12px;outline:none;resize:vertical;">' + mtbEsc(mtbAns[v.id]) + '</textarea>';
  } else {
    h += '<div style="display:flex;gap:5px;flex-wrap:wrap;" id="mtbv-' + v.id + '">';
    mtbOpties(v).forEach(([val, lab], i) => {
      h += '<button data-i="' + i + '" onclick="mtbKlik(\'' + v.id + '\',' + i + ')" style="' + MTB_BTN + mtbBtnStijl(v, val) + '">' + lab + '</button>';
    });
    h += '</div>';
    if (v.type === 'lr' || v.type === 'pn') {
      h += '<input type="text" value="' + mtbEsc(mtbAns[v.id + '_nota']) + '" placeholder="Nota (optioneel)" oninput="mtbTxt(\'' + v.id + '_nota\',this.value)" style="width:100%;margin-top:5px;background:transparent;border:none;border-bottom:1px dashed var(--border);padding:3px 2px;color:var(--text);font-family:Geist,sans-serif;font-size:11px;outline:none;">';
    }
  }
  return h + '</div>';
}

function mtbBtnStijl(v, val) {
  const cur = mtbAns[v.id];
  const actief = v.type === 'multi' ? Array.isArray(cur) && cur.includes(val) : cur === val;
  if (!actief) return '';
  const pos = ['li','re','bi','pos'].includes(val);
  const neg = val === 'neg';
  const c = pos ? '#ef4444' : neg ? '#22c55e' : MTB_KLEUR;
  return 'background:' + c + '26;color:' + c + ';border-color:' + c + '80;';
}

function mtbVindVeld(id) { for (const s of MTB_FORM) { const v = s.velden.find(x => x.id === id); if (v) return v; } return null; }

function mtbKlik(id, i) {
  const v = mtbVindVeld(id); if (!v) return;
  const val = mtbOpties(v)[i][0];
  if (v.type === 'multi') {
    let arr = Array.isArray(mtbAns[id]) ? mtbAns[id].slice() : [];
    arr = arr.includes(val) ? arr.filter(x => x !== val) : arr.concat(val);
    if (arr.length) mtbAns[id] = arr; else delete mtbAns[id];
  } else {
    if (mtbAns[id] === val) delete mtbAns[id]; else mtbAns[id] = val;
  }
  const wrap = document.getElementById('mtbv-' + id);
  if (wrap) wrap.querySelectorAll('button').forEach(b => {
    const bval = mtbOpties(v)[+b.dataset.i][0];
    b.setAttribute('style', MTB_BTN + mtbBtnStijl(v, bval));
  });
  mtbDraft();
}
function mtbTxt(id, val) { if (val) mtbAns[id] = val; else delete mtbAns[id]; mtbDraft(); }
function mtbDraft() { mtbSave(MTB_DRAFT, { ans: mtbAns, pat: mtbPatId }); }
function mtbMsg(t, kleur) { const m = document.getElementById('mtb-msg'); if (m) { m.style.color = kleur || '#22c55e'; m.textContent = t; setTimeout(() => { if (m) m.textContent = ''; }, 2500); } }

function mtbKiesPatient(pid) { mtbPatId = pid; mtbDraft(); mtbRender(); }
function mtbNieuw() {
  if (Object.keys(mtbAns).length && !confirm('Huidig formulier leegmaken? Niet-opgeslagen invoer gaat verloren.')) return;
  mtbAns = {}; mtbDraft(); mtbRender();
}
function mtbOpslaan() {
  if (!Object.keys(mtbAns).length) { mtbMsg('Nog niets ingevuld.', '#f59e0b'); return; }
  const hist = mtbLoad(mtbKey(mtbPatId), []);
  const datum = new Date().toLocaleDateString('nl-BE', {day:'2-digit', month:'2-digit', year:'numeric'});
  hist.push({ datum, iso: new Date().toISOString(), ans: JSON.parse(JSON.stringify(mtbAns)) });
  mtbSave(mtbKey(mtbPatId), hist);
  mtbRender(); mtbMsg('✓ Opgeslagen (' + datum + ')');
}
function mtbLaad(i) {
  const hist = mtbLoad(mtbKey(mtbPatId), []);
  if (!hist[i]) return;
  if (Object.keys(mtbAns).length && !confirm('Huidige invoer vervangen door het onderzoek van ' + hist[i].datum + '?')) return;
  mtbAns = JSON.parse(JSON.stringify(hist[i].ans)); mtbDraft(); mtbRender(); mtbMsg('Onderzoek van ' + hist[i].datum + ' geladen');
}
function mtbWis(i) {
  const hist = mtbLoad(mtbKey(mtbPatId), []);
  if (!hist[i] || !confirm('Onderzoek van ' + hist[i].datum + ' verwijderen?')) return;
  hist.splice(i, 1); mtbSave(mtbKey(mtbPatId), hist); mtbRender();
}

// ── INTERPRETATIE-ENGINE ──
const isPos = v => ['li','re','bi','pos'].includes(v);
const zijdeVan = v => v === 'li' ? 'links' : v === 're' ? 'rechts' : null;

function mtbInterpreteer(a) {
  const out = []; // {niveau:'rood'|'oranje'|'info'|'ok', titel, tekst}
  const A = k => a[k];

  // 1. Eliminatie / rode vlaggen
  if (A('rodevlag') === 'pos') out.push({niveau:'rood', titel:'Rode vlaggen positief', tekst:'Eerst medisch uitklaren / doorverwijzen vóór manuele therapie.'});
  const elim = [];
  if (A('centralisatie') === 'pos') elim.push('centralisatie → discus');
  if (isPos(A('neuraal'))) elim.push('Slump/SLR + → disco-radiculair');
  if (A('stenose') === 'pos') elim.push('stenosekenmerken');
  if (A('listhesis') === 'pos') elim.push('spondylolisthesis-kenmerken (rebound + interpreteren met voorzichtigheid)');
  const heup = isPos(A('p_patrick_v')) || A('p_hyper1') === 'pos';
  if (heup) elim.push('heupaanwijzing (Patrick ventraal / hyperextensie fase 1) → Downing niet betrouwbaar');
  if (elim.length) out.push({niveau:'oranje', titel:'Differentiaaldiagnose nakijken', tekst: elim.join(' · ')});

  // 2. Laslett
  const lTest = ['l_faber','l_thigh','l_gaenslen','l_compressie','l_distractie'];
  const getest = lTest.filter(k => A(k) && A(k) !== 'ng').length;
  const pos = lTest.filter(k => isPos(A(k))).length;
  if (getest) {
    const plus = pos >= 3;
    out.push({niveau: plus ? 'rood' : 'ok', titel:'Cluster van Laslett: ' + pos + '/' + getest + ' positief' + (getest < 5 ? ' (' + (5 - getest) + ' niet getest)' : ''),
      tekst: plus ? 'Cluster + → SIG als pijnbron waarschijnlijker (cursus: ± 35% zekerheid).' : (getest === 5 ? 'Cluster – → pijn komt waarschijnlijk niet van het SIG (cursus: ± 92% zekerheid).' : 'Nog niet alle testen afgenomen.')});
  }

  // 3. Blokkadezijde (RFT, HFT, squeeze)
  const blokTests = [['d_rft','RFT'],['d_hft','HFT'],['d_squeeze','squeeze']];
  let li = 0, re = 0, bi = 0; const detail = [];
  blokTests.forEach(([k, n]) => { const v = A(k); if (v === 'li') { li++; detail.push(n + ' li'); } else if (v === 're') { re++; detail.push(n + ' re'); } else if (v === 'bi') { bi++; detail.push(n + ' bilateraal'); } });
  let blok = null;
  if (li > re && li >= 2) blok = 'li'; else if (re > li && re >= 2) blok = 're';
  else if (li + re === 1 && bi === 0) blok = li ? 'li' : 're';
  const rebound = A('p_rebound'), hyper = A('p_hyper2');
  const rbKnown = rebound === 'pos' || rebound === 'neg';
  const rbPos = rebound === 'pos' || (!rbKnown && hyper === 'pos');
  const rbNeg = rebound === 'neg' || (!rbKnown && hyper === 'neg');

  if (detail.length) {
    if (blok) {
      const zwak = (li + re === 1) ? ' (slechts 1 test — zwakke aanwijzing)' : '';
      out.push({niveau:'info', titel:'Blokkade vermoedelijk ' + zijdeVan(blok) + zwak, tekst:'Op basis van ' + detail.join(', ') + '.'});
    } else if (li && re) {
      out.push({niveau:'oranje', titel:'Tegenstrijdige zijde bij flexietesten', tekst: detail.join(', ') + ' → herhaal testen, controleer H/glutei/QL-invloed (RFT met exo).'});
    }
  }

  // 4. Sacrale torsie
  let torsie = null;
  if (blok && (rbPos || rbNeg)) {
    if (rbNeg) torsie = blok === 're' ? 'Li/Li' : 'Re/Re';
    else torsie = blok === 'li' ? 'Li/Re' : 'Re/Li';
    const T = MTB_TORSIE[torsie];
    const checks = [];
    if (A('bl_sulcus')) checks.push((A('bl_sulcus') === T.sulcusKeuze ? '✓' : '⚠') + ' sulcus: verwacht ' + T.sulcus + ', gevonden ' + A('bl_sulcus').toLowerCase());
    if (T.mall && A('rl_mall')) checks.push((A('rl_mall') === T.mallKeuze ? '✓' : '⚠') + ' malleolus: verwacht ' + T.mall + ', gevonden ' + A('rl_mall').toLowerCase());
    out.push({niveau:'rood', titel:'Suggestie: sacrale torsie ' + torsie, tekst: T.as + ' · blokkade ' + T.blok + ' · oorzaak ' + T.oorzaak + ' (' + T.type + ').' + (checks.length ? '<br>' + checks.join('<br>') : '<br>Controleer sulcus en malleoli ter bevestiging.') + '<br><strong>Behandeling:</strong> ' + T.beh});
  } else if (blok && !rbKnown && !hyper) {
    out.push({niveau:'info', titel:'Rebound nog invullen', tekst:'Met rebound (en hyperextensie) kan li/li–re/re onderscheiden worden van li/re–re/li.'});
  }
  if (!blok && bi >= 2) {
    if (rbNeg) out.push({niveau:'info', titel:'Suggestie: bilaterale horizontalisatie sacrum', tekst:'Flexietesten bilateraal +, rebound –. Verwacht: sulci hol, basis ventraal. Behandeling: buiklig, IN meegaan / UIT fixeren.'});
    if (rbPos) out.push({niveau:'info', titel:'Suggestie: bilaterale verticalisatie sacrum', tekst:'Flexietesten bilateraal +, rebound +. Verwacht: sulci vol, basis posterior. Behandeling: UIT meegaan / IN fixeren. Sluit lumbale instabiliteit uit.'});
  }
  if (!blok && rebound === 'pos' && bi < 2) out.push({niveau:'oranje', titel:'Rebound + zonder duidelijke blokkadezijde', tekst:'Denk aan verticalisatie sacrum of lumbale instabiliteit (anterolisthesis): gescandeerde beweging? ASLR +?'});

  // 5. Instabiliteit
  const inst = [];
  if (isPos(A('d_rucklauf'))) inst.push('Rücklauf + (' + (zijdeVan(A('d_rucklauf')) || 'bilateraal') + ')');
  if (isPos(A('d_aslr'))) inst.push('actieve SLR + (' + (zijdeVan(A('d_aslr')) || 'bilateraal') + ')');
  if (inst.length) {
    const comp = (A('d_aslr_comp') || []).filter(x => x !== 'Geen');
    const map = {Pubis:'symphysis pubis (frictie/overbelasting)', SIAS:'transversus abdominis', SIPS:'multifidi'};
    out.push({niveau:'oranje', titel:'Aanwijzing instabiliteit', tekst: inst.join(' · ') + '.' + (comp.length ? ' Verlichting bij compressie → ' + comp.map(c => map[c]).join(', ') + '.' : '') + '<br>Chronisch: eerst hypomobiliteit aanpakken, dan stabiliseren (core, lumbopelvische controle, proprioceptie). Traumatisch: rust.'});
  }

  // 6. Ilium
  const ilium = [];
  const ls = A('d_longsit');
  if (ls === 'Li wordt langer') ilium.push('Long sitting: posterorotatie ilium links');
  if (ls === 'Re wordt langer') ilium.push('Long sitting: posterorotatie ilium rechts');
  const sipsH = A('st_sips') || A('bl_sips'), siasH = A('st_sias') || A('rl_sias');
  if (sipsH && siasH && sipsH !== 'Gelijk' && siasH !== 'Gelijk') {
    const z = sipsH.startsWith('Li') ? 'links' : 'rechts';
    if (sipsH.slice(0,2) !== siasH.slice(0,2)) ilium.push('SIPS hoger + SIAS lager ' + z + ' → past bij anterorotatie ' + z + ' (of posterorotatie contralateraal)');
    else ilium.push('SIPS én SIAS hoger aan dezelfde zijde → eerder hoogteverschil/BLV dan rotatie');
  }
  if (A('zit_verschil') === 'Verschil verdwijnt') ilium.push('Verschil verdwijnt in zit → beenlengteverschil (OL)');
  if (A('zit_verschil') === 'Verschil blijft') ilium.push('Verschil blijft in zit → oorzaak in bekken');
  if (ilium.length) out.push({niveau:'info', titel:'Ilium / beenlengte', tekst: ilium.join('<br>') + '<br><em>Echt kort = anteroROT + opening · echt lang = posteroROT + sluiting · vals kort = sluiting primair · vals lang = opening primair.</em>'});

  // 7. Opening / sluiting (Downing)
  const dv = A('d_down_verl'), dk = A('d_down_verk');
  const downAfw = (dv && dv !== 'Symmetrisch') || (dk && dk !== 'Symmetrisch');
  const torsieAanw = !!torsie || !!blok || (ls && ls !== 'Symmetrisch');
  if (downAfw) {
    const t = [];
    if (dv && dv !== 'Symmetrisch') t.push(dv + ' → probleem iliacale opening (' + dv.slice(0,2).toLowerCase() + ')');
    if (dk && dk !== 'Symmetrisch') t.push(dk + ' → probleem iliacale sluiting (' + dk.slice(0,2).toLowerCase() + ')');
    t.push(heup ? '⚠ Heupaanwijzing: Downing niet betrouwbaar.' : (torsieAanw ? 'Met torsie → biomechanische component.' : 'Zonder torsie → denk aan viscerale oorzaak (caviteiten).'));
    out.push({niveau:'info', titel:'Downing afwijkend', tekst: t.join('<br>') + '<br>Opening/sluiting: enkel myotensief behandelen.'});
  }

  // 8. Behandelvoorstel
  if (torsieAanw || downAfw) {
    let pad;
    if (blok) pad = '1. Pubis → 2. Ilium musculair (opening/sluiting corrigeren, antero/postero deprogrammeren: 20 s rek, hold-relax) → 3. Ilium articulair → 4. Sacrum' + (torsie ? ' (' + torsie + ')' : '') + ' → 5. LSO/TLO';
    else if (ls && ls !== 'Symmetrisch') pad = 'Torsie zonder blokkade: 1. Pubis → 2. Ilium musculair → sacrum indien nodig. <strong>Niet manipuleren.</strong>';
    else pad = 'Geen torsie, Downing afwijkend: viscera lossen, ademhaling normaliseren, opening/sluiting corrigeren.';
    out.push({niveau:'ok', titel:'Behandelvolgorde (cursus)', tekst: pad + '<br>Sacrumnormalisatie altijd afsluiten met pompage + weefsel-re-equilibratie.'});
  }
  return out;
}

const MTB_TORSIE = {
  'Li/Li': {as:'linker torsie om linker as', blok:'rechts', oorzaak:'OL', type:'ilio-sacraal', sulcus:'re hol', sulcusKeuze:'Re hol', mall:'li korter', mallKeuze:'Li korter', beh:'myotensief — buiklig, benen 90° naar links (liggen op linker zijde), 5 s duwen → barrière opnemen, 3x.'},
  'Re/Re': {as:'rechter torsie om rechter as', blok:'links', oorzaak:'OL', type:'ilio-sacraal', sulcus:'li hol', sulcusKeuze:'Li hol', mall:'re korter', mallKeuze:'Re korter', beh:'myotensief — vanuit zit naar rechts op buik (op rechter zijde), enkels omhoog duwen → barrière opnemen, 3x.'},
  'Li/Re': {as:'linker rotatie om rechter as', blok:'links', oorzaak:'BL (bovenhandse sport/job)', type:'sacro-iliacaal', sulcus:'li vol, re hol', sulcusKeuze:'Re hol', beh:'myotensief — rechter zijlig, bovenste been gestrekt buiten de tafel, 5 s naar plafond → barrière, 3x, 2 series.'},
  'Re/Li': {as:'rechter rotatie om linker as', blok:'rechts', oorzaak:'BL (bovenhandse sport/job)', type:'sacro-iliacaal', sulcus:'re vol, li hol', sulcusKeuze:'Li hol', beh:'manipulatie — ruglig, handen in de nek (20° op linker zijde), rechter schouder naar voor, fixatie rechter crista.'},
};

function mtbRenderInterpretatie() {
  const res = mtbInterpreteer(mtbAns);
  const kl = {rood:'#ef4444', oranje:'#f59e0b', info:'#60a5fa', ok:'#22c55e'};
  let h = '<div style="background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.3);border-radius:8px;padding:10px 14px;font-size:11.5px;color:var(--muted);line-height:1.55;margin-bottom:14px;">⚠ <strong style="color:var(--text)">Hulpmiddel, geen diagnose.</strong> Suggesties volgen de regels uit de cursus en worden automatisch uit je invoer afgeleid. Weeg ze af tegen het volledige klinische beeld.</div>';
  if (!res.length) h += '<div style="padding:30px;text-align:center;color:var(--muted);font-size:13px;">Vul testen in bij <strong>Onderzoek</strong> — de interpretatie verschijnt hier automatisch.</div>';
  res.forEach(r => {
    const c = kl[r.niveau];
    h += '<div style="background:' + c + '12;border:1px solid ' + c + '44;border-left:3px solid ' + c + ';border-radius:8px;padding:12px 14px;margin-bottom:10px;">';
    h += '<div style="font-size:13px;font-weight:700;color:' + c + ';margin-bottom:4px;">' + r.titel + '</div>';
    h += '<div style="font-size:12.5px;line-height:1.6;color:var(--text)">' + r.tekst + '</div></div>';
  });
  h += '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;"><button class="kmodal-action secondary" onclick="mtbSetTab(\'onderzoek\')">← Terug naar onderzoek</button><button class="kmodal-action secondary" onclick="mtbKopieer()">📋 Kopieer samenvatting</button><button class="kmodal-action secondary" onclick="mtbSetTab(\'bomen\')">🌳 Beslisbomen</button></div>';
  return h;
}

// ── SAMENVATTING / PRINT ──
function mtbWaardeTekst(v, val) {
  if (val == null) return '';
  if (Array.isArray(val)) return val.join(', ');
  const map = {li:'Links +', re:'Rechts +', bi:'Beide +', pos:'Positief', neg:'Negatief', ng:'Niet getest'};
  return map[val] || val;
}
function mtbPatNaam() {
  const pts = (typeof loadPatients === 'function') ? loadPatients() : [];
  const p = pts.find(x => x.id === mtbPatId); return p ? p.name : '';
}
function mtbKopieer() {
  const datum = new Date().toLocaleDateString('nl-BE');
  let t = 'MT BEKKEN — ' + (mtbPatNaam() || 'onderzoek') + ' — ' + datum + '\n\n';
  MTB_FORM.forEach(s => {
    const regels = s.velden.filter(v => v.id && mtbAns[v.id] != null).map(v => '- ' + v.label + ': ' + mtbWaardeTekst(v, mtbAns[v.id]) + (mtbAns[v.id + '_nota'] ? ' (' + mtbAns[v.id + '_nota'] + ')' : ''));
    if (regels.length) t += s.titel + '\n' + regels.join('\n') + '\n\n';
  });
  const res = mtbInterpreteer(mtbAns);
  if (res.length) t += 'INTERPRETATIE-HULP\n' + res.map(r => '• ' + r.titel + ': ' + r.tekst.replace(/<br>/g, ' | ').replace(/<[^>]+>/g, '')).join('\n');
  const klaar = () => mtbMsgGlobal('✓ Gekopieerd');
  if (navigator.clipboard) navigator.clipboard.writeText(t).then(klaar).catch(() => mtbFallbackCopy(t, klaar)); else mtbFallbackCopy(t, klaar);
}
function mtbFallbackCopy(t, cb) { const ta = document.createElement('textarea'); ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch(e) {} document.body.removeChild(ta); cb(); }
function mtbMsgGlobal(t) { const b = [...document.querySelectorAll('#mtb-body .kmodal-action')].find(x => x.textContent.includes('Kopieer')); if (b) { const o = b.textContent; b.textContent = t; setTimeout(() => b.textContent = o, 2000); } }

function mtbPrint(blanco) {
  const datum = new Date().toLocaleDateString('nl-BE', {day:'2-digit', month:'2-digit', year:'numeric'});
  let h = '<h1>Manuele therapie — Bekken: onderzoek</h1>';
  h += '<div class="pf-meta">' + (blanco ? 'Patiënt: _________________________ &nbsp; Datum: _____________' : 'Patiënt: ' + mtbEsc(mtbPatNaam() || '—') + ' · ' + datum) + '</div>';
  MTB_FORM.forEach(s => {
    h += '<h2>' + s.titel + '</h2>';
    if (blanco && s.velden.some(v => v.type === 'lr')) h += '<div style="font-size:10px;color:#6b7280;margin-bottom:3px;">Aankruisen: Li + · Re + · Neg · n.g.</div>';
    s.velden.forEach(v => {
      if (v.sub) { h += '<div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#6b7280;margin:8px 0 2px;">' + v.sub + '</div>'; return; }
      const val = mtbAns[v.id], nota = mtbAns[v.id + '_nota'];
      h += '<div class="pf-ex" style="border-bottom:1px solid #e5e7eb;padding:4px 0;display:flex;gap:10px;align-items:flex-start;">';
      h += '<div style="font-weight:600;font-size:11.5px;flex:1;">' + v.label + (v.info ? '<br><span style="font-weight:400;font-size:9.5px;color:#6b7280;font-style:italic">' + v.info + '</span>' : '') + '</div>';
      if (blanco) {
        if (v.type === 'tekst' || v.type === 'tekst_groot') h += '<div style="flex:1.2;border-bottom:1px solid #d1d5db;min-height:' + (v.type === 'tekst_groot' ? 50 : 16) + 'px;"></div>';
        else h += '<div style="font-size:10.5px;flex:1.2;text-align:right;">' + mtbOpties(v).map(o => '☐ ' + o[1]).join(' &nbsp;') + '</div>';
      } else {
        const pos = isPos(val);
        h += '<div style="font-size:11px;min-width:150px;text-align:right;color:' + (pos ? '#dc2626' : val === 'neg' ? '#16a34a' : '#374151') + ';font-weight:' + (val ? 700 : 400) + ';">' + (val ? mtbEsc(mtbWaardeTekst(v, val)) : '—') + (nota ? '<br><span style="font-weight:400;color:#6b7280">' + mtbEsc(nota) + '</span>' : '') + '</div>';
      }
      h += '</div>';
    });
  });
  if (!blanco) {
    const res = mtbInterpreteer(mtbAns);
    if (res.length) {
      h += '<h2>Interpretatie-hulp (automatisch, cursusregels)</h2>';
      res.forEach(r => { h += '<div style="font-size:11px;margin:5px 0;"><strong>' + r.titel + '</strong><br>' + r.tekst + '</div>'; });
    }
  }
  h += '<div class="pf-footer">KINEBO · MT Bekken · ' + datum + ' · ' + MTB_BRON + '</div>';
  triggerPrint(h);
}

// ── BESLISBOMEN (formaat van BESLISBOOM, geopend met openBeslisboom) ──
const MTB_BOMEN = {
  mtb_torsie: {
    title: 'Bekken — Sacrale torsie & blokkadezijde',
    stappen: [
      {id:'zijde', vraag:'Aan welke zijde zijn RFT, HFT en squeeze positief?', info:'Stand: rompflexietest en Gillet/Stork · ruglig: squeeze test.',
        opties:[{label:'Links', next:'rb_li', color:'#60a5fa'},{label:'Rechts', next:'rb_re', color:'#f472b6'},{label:'Bilateraal', next:'rb_bi', color:'#a78bfa'}]},
      {id:'rb_li', vraag:'Rebound en hyperextensie?', info:'Rebound = PA-druk op L5 tot eindstand + overdruk, dan lossen.',
        opties:[
          {label:'Negatief → Re/Re', color:'#22c55e', advies:'<strong>Re/Re</strong> — rechter torsie om rechter as. <strong>Blokkade links</strong>, oorzaak OL (ilio-sacraal). Verwacht: sulcus li hol, L5 rotatie re, malleolus re korter (lig).<br><br><strong>Normalisatie:</strong> vanuit zit op tafelrand naar rechts op de buik (op rechter zijde), 90° heup- en knieflexie, vingers T tussen de enkels, andere hand palpeert linker SIG. Enkels omhoog drukken → RLX → enkels naar beneden. 3x. Linker sulcus moet voller worden.'},
          {label:'Positief → Li/Re', color:'#ef4444', advies:'<strong>Li/Re</strong> — linker rotatie om rechter as. <strong>Blokkade links</strong>, oorzaak BL (bovenhandse sport/job, sacro-iliacaal). Verwacht: sulcus li vol / re hol, basis posterior links, FTS + en ETS +.<br><br><strong>Normalisatie:</strong> P in rechter zijlig, WVZ vergrendelen via rechter arm tot bekken loodrecht. Bovenste been gestrekt naar voor buiten de tafel. Hand 1 thv SIG. P drukt been 5 s naar plafond → RLX + T brengt been naar de grond (nieuwe barrière). 3x, 2 series.'},
        ]},
      {id:'rb_re', vraag:'Rebound en hyperextensie?', info:'Rebound = PA-druk op L5 tot eindstand + overdruk, dan lossen.',
        opties:[
          {label:'Negatief → Li/Li', color:'#22c55e', advies:'<strong>Li/Li</strong> — linker torsie om linker as. <strong>Blokkade rechts</strong>, oorzaak OL (ilio-sacraal). Verwacht: sulcus re hol, L5 rotatie li, malleolus li korter (lig).<br><br><strong>Normalisatie:</strong> buiklig, hoofd naar rechts. T plooit knieën 90° en brengt benen in 90° heupflexie naar zich toe (liggen op linker zijde). Hand 1 houdt enkels vast (vinger ertussen), duim hand 2 op rechter SIG. P duwt voeten 5 s omhoog → RLX, T brengt voeten verder naar beneden. 3x. Sulci moeten voller worden.'},
          {label:'Positief → Re/Li', color:'#ef4444', advies:'<strong>Re/Li</strong> — rechter rotatie om linker as. <strong>Blokkade rechts</strong>, oorzaak BL (bovenhandse sport/job, sacro-iliacaal). Verwacht: sulcus re vol, basis posterior rechts, FTS + en ETS +.<br><br><strong>Normalisatie:</strong> P ruglig met handen in de nek (20° op linker zijde). T brengt rechter schouder naar voor (hand 1), hand 2 fixeert rechter crista, eindstandig manipuleren via hand 1.'},
        ]},
      {id:'rb_bi', vraag:'Rebound?', info:'Bilateraal positieve flexietesten wijzen op een bilaterale sacrumlaesie.',
        opties:[
          {label:'Negatief → horizontalisatie', color:'#22c55e', advies:'<strong>Bilaterale horizontalisatie sacrum.</strong> Sulci hol, basis ventraal. <strong>Behandeling:</strong> buiklig, hand onder S2 (vingers naar hoofd). IN: meegaan; eindstandig fixeren; UIT: aanhouden. Afsluiten met pompage + weefsel-re-equilibratie.'},
          {label:'Positief → verticalisatie', color:'#ef4444', advies:'<strong>Bilaterale verticalisatie sacrum</strong> (of lumbale instabiliteit/anterolisthesis uitsluiten). Sulci vol, basis posterior. <strong>Behandeling:</strong> buiklig, hand op S1 (vingers naar voeten). UIT: meegaan; eindstandig fixeren; IN: aanhouden; overdruk op het einde mogelijk. Afsluiten met pompage + weefsel-re-equilibratie.'},
        ]},
    ]
  },
  mtb_behandeling: {
    title: 'Bekken — Behandelkeuze',
    stappen: [
      {id:'torsie', vraag:'Is er een torsie aanwezig?', info:'Ilium (long sitting, positionele testen) of sacrum.',
        opties:[{label:'Ja', next:'blokkade', color:'#a78bfa'},{label:'Nee', next:'downing', color:'#71717a'}]},
      {id:'blokkade', vraag:'Is er een blokkade?', info:'RFT / HFT / squeeze positief aan één zijde.',
        opties:[
          {label:'Ja → torsie mét blokkade', color:'#ef4444', advies:'<strong>1. Pubis</strong> (myotensief of shot-gun)<br><strong>2. Ilium musculair:</strong> superpositie opening/sluiting corrigeren; antero/postero: spieren deprogrammeren (20 s statische rek), correctie via antagonisten (hold-relax)<br><strong>3. Ilium articulair:</strong> antero/postero (mobilisatie/thrust)<br><strong>4. Sacrum:</strong> torsies<br><strong>5. LSO / TLO</strong><br><br>Sacrumnormalisatie afsluiten met pompage + weefsel-re-equilibratie.'},
          {label:'Nee → torsie zonder blokkade', color:'#f59e0b', advies:'<strong>1. Pubis</strong><br><strong>2. Ilium:</strong> opening/sluiting (musculair), antero/postero (musculair)<br><strong>NIET manipuleren!</strong><br><strong>3. Sacrum</strong> indien nodig.<br><br>Een torsie van het ilium zonder SI-blokkade: musculair bepaalde ketens lossen.'},
        ]},
      {id:'downing', vraag:'Is de Downing-test afwijkend (opening/sluiting)?', info:'Enkel betrouwbaar als heupproblematiek uitgesloten is.',
        opties:[
          {label:'Ja → geen torsie, wel opening/sluiting', color:'#60a5fa', advies:'<strong>Compensatie op de viscera.</strong> Viscera lossen, ademhaling normaliseren, opening/sluiting myotensief corrigeren.'},
          {label:'Nee', color:'#71717a', advies:'Geen duidelijke bekkenlaesie volgens de cursusregels. Herbekijk de eliminatie (discus, radiculair, stenose, heup) en de LWVZ, en overweeg ligamentaire of spierprogrammatie als pijnbron.'},
        ]},
    ]
  },
  mtb_blv: {
    title: 'Bekken — Beenlengteverschil',
    stappen: [
      {id:'torsie', vraag:'Toont de antero-/posterotest een torsie?', info:'Downing + zonder torsie wijst op de caviteiten.',
        opties:[{label:'Ja, er is een torsie', next:'lengte', color:'#a78bfa'},{label:'Nee, maar Downing +', color:'#60a5fa', advies:'<strong>Probleem van de caviteiten (visceraal).</strong> Viscera lossen. Been dat verkort maar niet verlengt → sluiting → pelviale problematiek.'}]},
      {id:'lengte', vraag:'Is het been functioneel kort of lang?',
        opties:[{label:'Kort', next:'kort', color:'#f472b6'},{label:'Lang', next:'lang', color:'#22d3ee'}]},
      {id:'kort', vraag:'Wat is primair aan de korte zijde?',
        opties:[
          {label:'Anterorotatie ilium', color:'#ef4444', advies:'<strong>Echt kort been:</strong> anterorotatie + opening. Been probeert langer te worden; overprogrammatie QL + RF (verticalisatie CSI). Stretch RF en QL, Gmax + H activeren.'},
          {label:'Iliacale sluiting', color:'#f59e0b', advies:'<strong>Vals kort been:</strong> primair sluiting, secundair posterorotatie. Sluiting myotensief behandelen (iliacale sluiting 1 en 2); kijk naar adductoren en obliquus internus.'},
        ]},
      {id:'lang', vraag:'Wat is primair aan de lange zijde?',
        opties:[
          {label:'Posterorotatie ilium', color:'#ef4444', advies:'<strong>Echt lang been:</strong> posterorotatie + sluiting. Hemibekken daalt; overprogrammatie BBS + H. Stretch H en RA, RF activeren.'},
          {label:'Iliacale opening', color:'#f59e0b', advies:'<strong>Vals lang been:</strong> primair opening, secundair anterorotatie. Opening myotensief behandelen (iliacale opening 1 en 2 — niet bij heupproblematiek); kijk naar sartorius, TFL, glutei, BBS.'},
        ]},
    ]
  },
  mtb_instabiliteit: {
    title: 'Bekken — Instabiliteit',
    stappen: [
      {id:'test', vraag:'Rücklauftest of actieve SLR positief?',
        opties:[{label:'Ja', next:'comp', color:'#ef4444'},{label:'Nee', color:'#22c55e', advies:'Geen aanwijzing voor bekkeninstabiliteit op basis van deze testen. Denk bij rebound + met gescandeerde beweging nog aan lumbale instabiliteit.'}]},
      {id:'comp', vraag:'Verlicht compressie de actieve SLR?', info:'Compressie op pubis, SIAS of SIPS toevoegen.',
        opties:[
          {label:'Ja, op pubis', color:'#f59e0b', next:'oorzaak', },
          {label:'Ja, op SIAS', color:'#f59e0b', next:'oorzaak'},
          {label:'Ja, op SIPS', color:'#f59e0b', next:'oorzaak'},
          {label:'Nee', color:'#71717a', next:'oorzaak'},
        ]},
      {id:'oorzaak', vraag:'Traumatisch of chronisch?', info:'Pubis → symphysis (frictie/overbelasting) · SIAS → transversus abdominis · SIPS → multifidi.',
        opties:[
          {label:'Traumatisch', color:'#ef4444', advies:'<strong>Traumatische hypermobiliteit:</strong> complete rust, soms operatie.'},
          {label:'Chronisch', color:'#60a5fa', advies:'<strong>Chronische hypermobiliteit</strong> (hyper als reactie op hypo): <strong>1)</strong> hypomobiliteit aanpakken, <strong>2)</strong> bekken stabiliseren: core stability, lumbopelvische controle, proprioceptie. Co-contractie TA + multifidi pas bij geen pijn of zwelling; bij chronische LRP eerst fascia thoracolumbalis losmaken.'},
        ]},
    ]
  },
};
if (typeof BESLISBOOM !== 'undefined') Object.assign(BESLISBOOM, MTB_BOMEN);

function mtbRenderBomen() {
  const info = {mtb_torsie:'Van testresultaten naar type torsie, blokkadezijde en normalisatie.', mtb_behandeling:'Welke behandelvolgorde bij torsie, blokkade of opening/sluiting.', mtb_blv:'Echt of vals kort/lang been onderscheiden.', mtb_instabiliteit:'Instabiliteit bevestigen en aanpak kiezen.'};
  let h = '';
  Object.entries(MTB_BOMEN).forEach(([id, b]) => {
    h += '<div onclick="openBeslisboom(\'' + id + '\')" style="cursor:pointer;background:var(--surface);border:1px solid var(--border);border-left:3px solid ' + MTB_KLEUR + ';border-radius:10px;padding:14px 16px;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;gap:10px;">';
    h += '<div><div style="font-size:14px;font-weight:600;margin-bottom:3px;">' + b.title.replace('Bekken — ', '') + '</div><div style="font-size:12px;color:var(--muted)">' + info[id] + '</div></div><span style="color:' + MTB_KLEUR + ';font-size:18px;">→</span></div>';
  });
  h += '<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 16px;margin-top:16px;">';
  h += '<div class="slabel">Onderzoeksflow</div>';
  ['Eliminatie (discus, radiculair, stenose, heup, rode vlaggen)','Cluster van Laslett — is het SIG de pijnbron?','Positionele testen — stand, zit, ruglig, buiklig','Dynamische testen — blokkade of instabiliteit?','Provocatietesten — pijn uitlokken','Spierlengte en -programmatie','Interpretatie — ilium, sacrum, opening/sluiting, BLV','Behandeling — pubis → ilium → sacrum → LWVZ'].forEach((s, i) => {
    h += '<div style="display:flex;gap:10px;align-items:flex-start;padding:6px 0;' + (i ? 'border-top:1px solid var(--border);' : '') + '"><span style="font-family:Geist Mono,monospace;color:' + MTB_KLEUR + ';font-weight:700;min-width:18px;">' + (i + 1) + '</span><span style="font-size:12.5px;">' + s + '</span></div>';
  });
  return h + '</div>';
}

// ── NASLAG ──
function mtbTabel(kop, rijen) {
  let h = '<div style="overflow-x:auto;margin-bottom:14px;"><table style="width:100%;border-collapse:collapse;font-size:12px;">';
  h += '<tr>' + kop.map(k => '<th style="text-align:left;padding:6px 8px;background:var(--surface2);border:1px solid var(--border);font-weight:600;white-space:nowrap;">' + k + '</th>').join('') + '</tr>';
  rijen.forEach(r => { h += '<tr>' + r.map((c, i) => '<td style="padding:6px 8px;border:1px solid var(--border);vertical-align:top;' + (i === 0 ? 'color:var(--muted);' : '') + '">' + c + '</td>').join('') + '</tr>'; });
  return h + '</table></div>';
}
function mtbBlok(titel, inhoud, open) {
  return '<details' + (open ? ' open' : '') + ' style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:10px 14px;margin-bottom:10px;"><summary style="cursor:pointer;font-size:13px;font-weight:700;color:' + MTB_KLEUR + ';padding:4px 0;">' + titel + '</summary><div style="margin-top:10px;font-size:12.5px;line-height:1.6;">' + inhoud + '</div></details>';
}
function mtbLijst(items) { return '<ul style="margin:0 0 10px 18px;">' + items.map(i => '<li style="margin-bottom:5px;">' + i + '</li>').join('') + '</ul>'; }

function mtbRenderNaslag() {
  let h = '';
  h += mtbBlok('Sacrale torsies', mtbTabel(['','Li/Li','Re/Re','Li/Re','Re/Li'], [
    ['RFT · HFT · squeeze','re +','li +','li +','re +'], ['Rebound · hyperextensie','–','–','+','+'],
    ['<strong>Blokkadezijde</strong>','<strong>rechts</strong>','<strong>links</strong>','<strong>links</strong>','<strong>rechts</strong>'],
    ['Oorzaak','OL','OL','BL','BL'], ['Beweging','ilio-sacraal','ilio-sacraal','sacro-iliacaal','sacro-iliacaal'],
    ['Sulcus','re hol','li hol','li vol','re vol'], ['Malleolus (lig)','li korter','re korter','',''],
  ]) + '<div style="font-size:12px;color:var(--muted)"><strong style="color:var(--text)">De kant van de as kan nooit blokkeren.</strong> Tijdens de gang wisselt het sacrum li/li ↔ re/re; pas een probleem als het blijft hangen.</div>', true);
  h += mtbBlok('Ilium: anterorotatie vs posterorotatie', mtbTabel(['','Anterorotatie','Posterorotatie'], [
    ['CSI','verticalisatie','horizontalisatie'], ['Crista · SIPS','hoger','lager'], ['SIAS','lager','hoger'],
    ['Pubis','naar onder en achter','naar boven en voor'], ['Tuber','naar boven en achter','naar beneden en voor'],
    ['Lumbaal','lordose L4-L5 ↑','de-lordose'], ['Been in lig','langer','korter'],
    ['Actief koppel','<strong>QL + RF</strong>','<strong>RA + H</strong>'], ['Aanpak','RF, QL rekken; Gmax + H activeren','H, RA rekken; RF activeren'],
  ]) + '<div style="font-size:12px;color:var(--muted)">Iliacale torsie wordt benoemd naar de zijde van posterioriteit.</div>');
  h += mtbBlok('Ilium: opening vs sluiting', mtbTabel(['','Opening (outflare)','Sluiting (inflare)'], [
    ['Crista','lateraal-dorsaal','mediaal-caudaal'], ['Pelvis · sacrum','pelviale sluiting · verticalisatie','pelviale opening · horizontalisatie'],
    ['Bekken','smaller, acetabulum mediaal','breder, trochanter lateraal'], ['OL','valgus ↓ → functioneel langer','valgus ↑ → korter'],
    ['Spieren','sartorius, TFL, glutei, BBS','adductoren, obliquus internus'], ['Symphysis','compressie onderaan','compressie bovenaan'],
    ['Behandeling','enkel myotensief','enkel myotensief'],
  ]) + '<div style="font-size:12px;color:var(--muted)">Iliacale opening + pelviale opening → instabiliteit. Overprogrammatie schuine buikspieren → iliacale sluiting + pelviale opening → rek op BBS → incontinentie.</div>');
  h += mtbBlok('Beenlengteverschil', mtbTabel(['Type','Ilium (vet = primair)','Kenmerk'], [
    ['Echt kort','<strong>anteroROT</strong> + opening','QL + RF overgeprogrammeerd'], ['Echt lang','<strong>posteroROT</strong> + sluiting','BBS + H overgeprogrammeerd'],
    ['Vals kort','posteroROT + <strong>sluiting</strong>',''], ['Vals lang','anteroROT + <strong>opening</strong>',''],
  ]) + mtbLijst(['Downing + zonder torsie → visceraal · met torsie → biomechanisch','Been dat verkort maar niet verlengt → sluiting → pelviale problematiek','Lang been + exo → opening · kort been + exo → posterorotatie']));
  h += mtbBlok('Sacrale laesies — kenmerken', mtbTabel(['Laesie','FTZ','FTS','Rebound','Sulcus','ALI / basis'], [
    ['Bilat. horizontalisatie','bilat.','+','–','hol','basis ventraal'], ['Bilat. verticalisatie','bilat.','+','+','vol','basis posterior'],
    ['Li/Li','+ re','+','–','re hol','ALI li post.-onder; basis ant. re'], ['Re/Re','+ li','+','–','li hol','ALI re post.-onder; basis ant. li'],
    ['Li/Re','+ li','+ (ETS +)','+','li vol','ALI re ant.-boven; basis post. li'], ['Re/Li','+ re','+ (ETS +)','+','re vol','ALI li ant.-boven; basis post. re'],
    ['Unilat. anterioriteit','+ zijde ant.','(pijn)','–','hol','ALI zelfde hoogte'], ['Unilat. posterioriteit','+ zijde post.','ETS +','+','vol','ALI zelfde hoogte'],
  ]));
  h += mtbBlok('Behandelprincipes', mtbLijst([
    '<strong>Volgorde:</strong> pubis → ilium → sacrum → LWVZ (LSO/TLO)',
    '<strong>Stijf gewricht:</strong> mobilisatie in richting beperking, thrust (decompressie), MET',
    '<strong>Gecomprimeerd (ontsteking):</strong> MET, myotensieve technieken',
    '<strong>Instabiel:</strong> core stability, lumbopelvische controle, proprioceptie',
    '<strong>Sacrum:</strong> positioneren op zijde van de as; altijd afsluiten met pompage + weefsel-re-equilibratie',
    '⚠ Stretch manipulatie niet bij rugprobleem · iliacale opening 1 niet bij heupproblematiek',
  ]));
  h += mtbBlok('Technieken — pubis & ilium', mtbLijst([
    '<strong>Pubis superior (myotensief):</strong> ruglig, been in laesie van de tafel; been heffen tegen W → RLX, 2-3x → ramus caudaal',
    '<strong>Pubis inferior (myotensief):</strong> volledige heup- en knieflexie; been strekken tegen W → RLX, 2-3x → ramus craniaal',
    '<strong>Shot-gun 1 / 2:</strong> ruglig, knieën gebogen; AB (1) of AD (2) tegen W, thrust: isometrie en abrupt lossen, 3x',
    '<strong>Ilium anterior — myotensief:</strong> ruglig, voet P op SIAS T; IN + duwen → UIT + RLX, 3x (Gmax + H)',
    '<strong>Ilium anterior — articulair:</strong> mobilisatie zijlig (tuber + crista → postero-mediaal-caudaal), via horizontalisatie sacrum, thrust via gapping, thrust via sacrum 1 en 2, stretch manipulatie',
    '<strong>Ilium posterior — myotensief:</strong> ruglig schuin, heup max. E; heupflexie + lichte knie-extensie tijdens IN → UIT + RLX, 3x (RF)',
    '<strong>Ilium posterior — articulair:</strong> mobilisatie 1-2 buiklig (crista → lateraal-anterior-cefaal), thrust via gapping (E + ipsilaterale ROT), thrust 1-3, gapping 2',
    '<strong>Iliacale opening 1-2 / sluiting 1-2:</strong> myotensief, 3x, 2 series (zie cursus voor houdingen)',
  ]));
  h += '<div style="font-size:11px;color:var(--muted2);margin-top:14px;line-height:1.5;">' + MTB_BRON + '</div>';
  return h;
}
