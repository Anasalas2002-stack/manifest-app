/* ============================================================
   SERIE DE MANIFESTACIÓN — app.js
   Todo se guarda localmente (localStorage). Nada sale de este dispositivo.
   ============================================================ */

/* ---------------- CONTENIDO POR DÍA ---------------- */
// key por getDay(): 0=domingo ... 6=sábado
const DAYS = {
  1: { // lunes
    area: 'abundancia',
    slug: 'abundancia',
    label: 'Abundancia',
    color: '#A32857',
    textOn: '#fff',
    metas: [
      'Sentirte rica y en paz',
      'Poder gastar en lo que quieras, sin culpa',
      'Ser generosa con las personas que quieres',
      'Ver tu dinero crecer y crecer, con tranquilidad',
      'Recibir $60 millones para invertir en Amaná',
      'Ganar entre $10 y $20 millones de salario',
    ],
    affirmation: 'Soy rica y estoy en paz. Mi dinero crece constantemente y gasto con libertad y generosidad, sabiendo que siempre hay más viniendo hacia mí.',
    visualization: `Es una mañana cualquiera, pero algo en ti se siente distinto: liviana, en paz. Abres tu cuenta y ves el saldo — los sesenta millones ya están ahí, invertidos en Amaná, trabajando para ti. No sientes ansiedad ni urgencia, solo una calma profunda, como si siempre hubiera sido así. Respira ese sentimiento.

Piensa en tu salario: entre diez y veinte millones llegan cada mes, con la misma naturalidad con la que llega el sol cada mañana. No te esfuerzas para que llegue, simplemente llega, y tú lo recibes con gratitud, sin culpa.

Ahora imagínate un momento cotidiano: estás en una tienda, ves algo que te gusta, y lo compras sin revisar el precio dos veces. Sientes esa libertad en el pecho. Ese mismo día le regalas algo a alguien que quieres, no porque tengas que hacerlo, sino porque puedes, y te encanta poder hacerlo. Sientes cómo tu generosidad no te vacía, te llena más.

Tu dinero crece y crece, como una planta que ya sabes que va a florecer, así que no la desentierras para revisar la raíz. Solo la riegas, y confías.

Quédate un momento en esa sensación: rica, tranquila, generosa. Así es como se siente tu vida ahora.`
  },
  2: { // martes
    area: 'propósito',
    slug: 'proposito',
    label: 'Propósito',
    color: '#840016',
    textOn: '#fff',
    metas: [
      'Que Amaná crezca e impacte a muchas personas',
      'Ser reconocida por tu trabajo',
      'Conectar con personas que comparten tu visión',
      'Aportar a la sociedad y sentirte plena',
      'Trabajar con pasión, pero desde la calma',
      'Lograr un impacto social real',
    ],
    affirmation: 'Amaná crece e impacta vidas. Soy reconocida por mi trabajo, trabajo con pasión y con calma, y las personas correctas para mi visión ya me están encontrando.',
    visualization: `Estás en un escenario, o quizás en una entrevista, hablando de Amaná. No sientes nervios, sientes orgullo tranquilo. Las palabras salen con facilidad, porque hablas de algo que ya vive dentro de ti, no de un sueño lejano.

Frente a ti hay personas que conectan de verdad con tu visión: clientas, artesanas, aliadas, gente que llega justo cuando la necesitas. No tienes que perseguir a nadie, las personas correctas te están encontrando, una y otra vez.

Sientes el impacto de tu trabajo en algo más grande que tú: en las manos de las artesanas que hacen las piezas, en las personas que usan lo que creas, en la cultura que ayudas a preservar. Eso te llena de una manera distinta al dinero, te sientes plena, útil, en tu lugar.

Y aun así, no hay prisa. Trabajas con pasión, sí, pero desde la calma, no desde el estrés. Cada decisión sale de un lugar tranquilo, no de la urgencia.

La gente reconoce tu trabajo, no porque lo busques, sino porque es innegable. Amaná crece, y tú creces con ella, con la misma paz con la que empezaste.

Quédate ahí: reconocida, en paz, con propósito.`
  },
  3: { // miércoles
    area: 'relaciones',
    slug: 'relaciones',
    label: 'Relaciones',
    color: '#9BB7D4',
    textOn: '#2B1420',
    metas: [
      'Sentir que vales y que puedes ser amada tal como eres',
      'Volver a enamorarte',
      'Una relación divertida y tranquila',
      'Un hombre honesto, divertido, obsesionado contigo',
      'Admirarse mutuamente',
      'Poner límites y hacerte tratar como una reina',
    ],
    affirmation: 'Merezco amor tal como soy. Soy una reina, pongo límites con facilidad, y un hombre honesto y divertido me admira tanto como yo a él.',
    visualization: `Estás en una cena, o quizás caminando de la mano de alguien, riéndote de algo tonto que él dijo. Es honesto, lo notas en cómo te mira, sin juegos, sin dobles intenciones. Es divertido, y contigo se relaja de una forma que pocas veces se permite con otras personas.

Te admira. No de lejos, sino de cerca: admira cómo piensas, cómo construyes tu vida, cómo tratas a los demás. Y tú lo admiras a él, sin tener que fingir que no te importa.

No hay drama. Hay una calma nueva en esto: puedes decir lo que necesitas, poner un límite si hace falta, y no pasa nada malo. Al contrario, te trata mejor por eso, como a alguien que sabe lo que vale.

Sientes que eres amada exactamente como eres, no como la versión que crees que deberías ser. Eso te permite soltar, disfrutar, reírte más fuerte, enamorarte de nuevo sin miedo.

Te ves a ti misma como una reina, no por arrogancia, sino porque así te tratas y así te tratan. Quédate en esa sensación: divertida, tranquila, admirada, en paz.`
  },
  4: { // jueves
    area: 'salud',
    slug: 'salud',
    label: 'Salud',
    color: '#F4ECC2',
    textOn: '#2B1420',
    metas: [
      'Sentirte segura con tu cuerpo',
      'Sentir belleza, fuerza y salud',
      'Tener mucha energía para disfrutar la vida',
    ],
    affirmation: 'Mi cuerpo es fuerte, hermoso y sano. Tengo la energía para disfrutar cada parte de mi vida.',
    visualization: `Sientes tu cuerpo moverse con facilidad, quizás caminando, bailando, estirándote al despertar. No hay una voz crítica revisando cada parte de ti. Solo hay una sensación de fuerza, de estar cómoda en tu propia piel.

Te ves frente a un espejo y lo que sientes no es duda, es seguridad. Ves belleza, ves salud, ves energía real, la que te permite disfrutar el día completo sin que el cansancio te lo quite.

Tu cuerpo no es un proyecto que arreglar, es tu hogar, y hoy lo sientes fuerte, sano, vivo. Cada respiración profunda te recuerda que tienes toda la energía que necesitas para lo que quieras hacer hoy: trabajar, bailar, reír, amar.

Quédate en esa sensación de vitalidad, de estar plenamente en tu cuerpo, disfrutando la vida desde ahí.`
  },
  5: { // viernes
    area: 'creencias',
    slug: 'creencias',
    label: 'Creencias',
    color: '#D8CCBB',
    textOn: '#2B1420',
    metas: [
      'Soltar la idea de que todo requiere sobre-esfuerzo',
      'Saber que puedes ser amada por un gran hombre',
      'Llevar tus proyectos desde la calma, no desde el estrés',
    ],
    affirmation: 'No necesito sobre-esforzarme para recibir lo que quiero. Puedo construir mis proyectos y ser amada por un gran hombre, todo desde la calma.',
    visualization: `Nota, por un momento, esa vieja idea de que todo tiene que costarte un esfuerzo enorme. Ahora, con cada exhalación, suéltala un poco más.

No necesitas sobre-esforzarte para recibir lo que quieres. Puedes construir Amaná, ganar dinero, ser amada por un gran hombre, todo eso puede llegar desde la calma, no desde el agotamiento.

Imagínate llevando tus proyectos como quien camina, no como quien corre. Un paso, luego otro. Las cosas se acomodan, no porque tú las empujes con fuerza, sino porque confías en que se están acomodando.

Puedes ser amada por un gran hombre sin tener que ganártelo con sacrificio. Puedes tener éxito sin quemarte. Puedes soltar la idea de que el estrés es el precio del éxito.

Respira una vez más, y deja que esa vieja creencia se sienta un poco más lejana, un poco más pequeña. En su lugar queda algo más liviano: la certeza tranquila de que ya puedes tenerlo todo, sin agotarte.`
  },
  0: { area:'integración', label:'Integración', color:'#D8CCBB', textOn:'#2B1420',
    affirmation:'Esta semana ya hice el trabajo. Hoy solo observo lo que cambió.',
    visualization:`Hoy no hay una escena nueva que construir. Solo tómate un momento para recordar la semana: los cinco enfoques que trabajaste, abundancia, propósito, relaciones, salud, creencias. Nota si algo ya se siente distinto, aunque sea pequeño. No hace falta forzar nada. Solo observa, con curiosidad, sin juzgar. Eso también es parte del proceso.`},
  6: { area:'integración', label:'Integración', color:'#D8CCBB', textOn:'#2B1420',
    affirmation:'Esta semana ya hice el trabajo. Hoy solo observo lo que cambió.',
    visualization:`Hoy no hay una escena nueva que construir. Solo tómate un momento para recordar la semana: los cinco enfoques que trabajaste, abundancia, propósito, relaciones, salud, creencias. Nota si algo ya se siente distinto, aunque sea pequeño. No hace falta forzar nada. Solo observa, con curiosidad, sin juzgar. Eso también es parte del proceso.`},
};

const SCALE_LEVELS = [
  'Alegría / Amor / Aprecio',
  'Pasión',
  'Entusiasmo / Felicidad',
  'Fe / Expectativa positiva',
  'Optimismo',
  'Esperanza',
  'Contentamiento',
  'Aburrimiento',
  'Frustración / Impaciencia',
  'Preocupación / Duda',
  'Culpa / Desánimo',
  'Miedo / Impotencia',
];

const THEORY = [
  { title:'Neville Goddard — Ley de Asunción', body:'Creas tu realidad a través de tus pensamientos y creencias. Vivir "desde el final" significa asumir el sentimiento del deseo ya cumplido, no esperar a que las circunstancias cambien primero.' },
  { title:'Abraham-Hicks — Escala emocional', body:'Cada emoción indica qué tan alineada estás con lo que quieres. La meta no es saltar a la alegría de golpe, sino encontrar un pensamiento apenas mejor que el actual, un peldaño a la vez.' },
  { title:'Joe Dispenza — Neurociencia de la repetición', body:'Cada pensamiento repetido refuerza una vía neuronal. Meditar mientras sientes emociones elevadas ayuda a instalar, literalmente, una nueva versión de ti antes de que el mundo externo cambie.' },
];

const EXERCISES = [
  { type:'breath', title:'Respiración de encendido', meta:'1 min' },
  { type:'scale', title:'Chequeo de vibración', meta:'1 min' },
  { type:'visualize', title:'Visualización desde el final', meta:'3–4 min' },
  { type:'affirm', title:'Afirmación de identidad', meta:'1 min' },
  { type:'gratitude', title:'Cierre de gratitud', meta:'1 min' },
];

const VIDEOS = [
  { id:'ffNWoefuwPM', title:'Neville Goddard — Feeling Is the Secret', sub:'La lectura clásica sobre vivir desde el sentimiento del deseo cumplido.' },
  { id:'NuHKcbuUZz8', title:'Abraham-Hicks — Sube tu escala emocional', sub:'Cómo moverte, peldaño a peldaño, hacia una vibración más alta.' },
  { id:'QDX_mQy5mXA', title:'Meditación guiada inspirada en Joe Dispenza', sub:'Relajación profunda de 10 minutos para instalar tu nueva versión.' },
];
const GUIDED_MEDITATION_ID = 'QDX_mQy5mXA'; // usado dentro del paso de visualización

const EXERCISE_ICONS = { breath:'〰️', scale:'🎚️', visualize:'✨', affirm:'💬', gratitude:'🙏' };

/* ---------------- ESTADO ---------------- */
const STORE_KEY = 'manifestacion_state_v1';

function loadState(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(raw) return JSON.parse(raw);
  }catch(e){}
  return { history:{}, voiceOn:true, rate:0.85 };
}
function saveState(){ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }

let state = loadState();
let session = { vibration:null, gratitude:['','',''] }; // temp, per open session

function fmt(d){
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function todayKey(){ return fmt(new Date()); }
function todayDay(){ return DAYS[new Date().getDay()]; }

function computeStreak(){
  const t = new Date();
  let cursor = new Date(t);
  if(!state.history[fmt(t)]) cursor.setDate(cursor.getDate()-1);
  let streak = 0;
  while(state.history[fmt(cursor)]){
    streak++;
    cursor.setDate(cursor.getDate()-1);
  }
  return streak;
}

/* ---------------- NAV ---------------- */
const screens = document.querySelectorAll('[data-screen]');
document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click', ()=>{
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.target;
    screens.forEach(s=> s.hidden = (s.id !== 'screen-'+target));
    if(target==='aspectos') renderAspectos();
    if(target==='progreso') renderProgreso();
    if(target==='biblioteca') renderBiblioteca();
  });
});

/* ---------------- RENDER: HOY ---------------- */
function renderHoy(){
  const day = todayDay();
  document.getElementById('streak-num').textContent = computeStreak();
  document.getElementById('today-date').textContent = new Date().toLocaleDateString('es-CO', { weekday:'long', day:'numeric', month:'long' });
  document.getElementById('focus-name').textContent = day.label;
  document.getElementById('focus-pill').style.background = day.color;
  document.getElementById('focus-name').style.color = day.textOn;

  const list = document.getElementById('exercise-list');
  const doneToday = !!state.history[todayKey()];
  list.innerHTML = EXERCISES.map((ex,i)=>`
    <div class="ex-row ${doneToday?'done':''}">
      <div class="ex-icon-wrap">
        <div class="ex-icon">${EXERCISE_ICONS[ex.type]}</div>
        <div class="ex-badge">${i+1}</div>
      </div>
      <div class="ex-info">
        <div class="ex-title">${ex.title}</div>
        <div class="ex-meta">${ex.meta}</div>
      </div>
      <div class="ex-check"></div>
    </div>
  `).join('');

  document.getElementById('btn-empezar').hidden = doneToday;
  document.getElementById('completed-note').hidden = !doneToday;
}

/* ---------------- RENDER: ASPECTOS ---------------- */
const ASPECT_DAY_NUMS = [1,2,3,4,5];

function renderAspectos(){
  const wrap = document.getElementById('aspect-list');
  wrap.innerHTML = ASPECT_DAY_NUMS.map(num=>{
    const d = DAYS[num];
    return `
      <div class="aspect-card" data-num="${num}">
        <button class="aspect-head">
          <span class="aspect-dot" style="background:${d.color}"></span>
          <span class="aspect-name">${d.label}</span>
          <span class="aspect-chevron">▾</span>
        </button>
        <div class="aspect-body">
          <div class="aspect-quote" style="background:${d.color}; color:${d.textOn};">"${d.affirmation}"</div>
          <div class="aspect-metas-label">Tus metas en este aspecto</div>
          <ul class="aspect-metas">${d.metas.map(m=>`<li>${m}</li>`).join('')}</ul>
          <button class="btn-aspect" style="background:${d.color}; color:${d.textOn};" data-practice="${num}">Practicar este aspecto</button>
        </div>
      </div>
    `;
  }).join('');

  wrap.querySelectorAll('.aspect-head').forEach(head=>{
    head.addEventListener('click', ()=>{
      head.closest('.aspect-card').classList.toggle('open');
    });
  });
  wrap.querySelectorAll('[data-practice]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      startFlow(DAYS[parseInt(btn.dataset.practice)]);
    });
  });
}


function renderProgreso(){
  const dates = Object.keys(state.history);
  document.getElementById('stat-streak').textContent = computeStreak();
  document.getElementById('stat-total').textContent = dates.length;

  // calendario del mes actual, lunes-primero
  const now = new Date();
  const year = now.getFullYear(), month = now.getMonth();
  const first = new Date(year, month, 1);
  const startOffset = (first.getDay()+6)%7; // lunes=0
  const daysInMonth = new Date(year, month+1, 0).getDate();

  let cells = '';
  for(let i=0;i<startOffset;i++) cells += `<div class="cal-day empty"></div>`;
  for(let d=1; d<=daysInMonth; d++){
    const dateStr = fmt(new Date(year, month, d));
    const entry = state.history[dateStr];
    if(entry){
      const areaColor = DAYS[new Date(year,month,d).getDay()].color;
      cells += `<div class="cal-day filled" style="background:${areaColor}">${d}</div>`;
    } else {
      cells += `<div class="cal-day">${d}</div>`;
    }
  }
  document.getElementById('calendar').innerHTML = cells;

  // diario de gratitud (más recientes primero)
  const journalWrap = document.getElementById('journal-list');
  const sorted = dates.sort().reverse();
  if(sorted.length===0){
    journalWrap.innerHTML = `<div class="journal-empty">Todavía no hay entradas. Completa tu primera rutina de hoy.</div>`;
  } else {
    journalWrap.innerHTML = sorted.slice(0,20).map(dateStr=>{
      const entry = state.history[dateStr];
      const niceDate = new Date(dateStr+'T12:00:00').toLocaleDateString('es-CO', { day:'numeric', month:'short' });
      const lines = (entry.gratitude||[]).filter(Boolean).join(' · ');
      return `<div class="journal-item">
        <div class="journal-date">${niceDate} — ${entry.area}</div>
        <div class="journal-text">${lines || '—'}</div>
      </div>`;
    }).join('');
  }
}

/* ---------------- RENDER: BIBLIOTECA ---------------- */
function renderBiblioteca(){
  const affWrap = document.getElementById('lib-affirmations');
  affWrap.innerHTML = [1,2,3,4,5].map(k=>{
    const d = DAYS[k];
    return `<div class="lib-item" style="border-left-color:${d.color}">
      <div class="lib-title">${d.label}</div>
      <div class="lib-body">${d.affirmation}</div>
    </div>`;
  }).join('');

  const theoWrap = document.getElementById('lib-theory');
  theoWrap.innerHTML = THEORY.map(t=>`
    <div class="lib-item">
      <div class="lib-title">${t.title}</div>
      <div class="lib-body">${t.body}</div>
    </div>
  `).join('');

  const videoWrap = document.getElementById('lib-videos');
  videoWrap.innerHTML = VIDEOS.map(v=>`
    <div class="video-card">
      <div class="video-card-title">${v.title}</div>
      <div class="video-frame">
        <iframe src="https://www.youtube-nocookie.com/embed/${v.id}" title="${v.title}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen loading="lazy"></iframe>
      </div>
      <div class="video-card-sub">${v.sub}</div>
    </div>
  `).join('');
}

/* ---------------- AJUSTES ---------------- */
const toggleVoice = document.getElementById('toggle-voice');
const rangeRate = document.getElementById('range-rate');
toggleVoice.checked = state.voiceOn;
rangeRate.value = state.rate;
toggleVoice.addEventListener('change', ()=>{ state.voiceOn = toggleVoice.checked; saveState(); });
rangeRate.addEventListener('input', ()=>{ state.rate = parseFloat(rangeRate.value); saveState(); });

document.getElementById('btn-reset').addEventListener('click', ()=>{
  if(confirm('¿Borrar toda tu racha, historial y diario? Esto no se puede deshacer.')){
    localStorage.removeItem(STORE_KEY);
    state = loadState();
    renderHoy(); renderProgreso();
  }
});

/* ---------------- VOZ ---------------- */
let esVoice = null;
const FEMALE_VOICE_HINTS = ['mónica','monica','paulina','marisol','angélica','angelica','camila','lucia','lucía','isabela','female','mujer','samantha','helena','sofía','sofia'];
const MALE_VOICE_HINTS = ['jorge','diego','juan','carlos','miguel','male','hombre'];

/* Algunos navegadores y iframes restringidos bloquean speechSynthesis y lanzan
   una excepción al solo tocarlo. Todo acceso pasa por aquí para que un bloqueo
   nunca interrumpa el renderizado de la app. */
function synth(){
  try{
    return ('speechSynthesis' in window) ? window.speechSynthesis : null;
  }catch(e){ return null; }
}

function pickVoice(){
  const s = synth();
  if(!s) { esVoice = null; return; }
  let voices = [];
  try{ voices = s.getVoices().filter(v=>v.lang && v.lang.startsWith('es')); }catch(e){ esVoice = null; return; }
  if(voices.length === 0){ esVoice = null; return; }
  const byHint = (hints)=> voices.find(v=> hints.some(h=> v.name.toLowerCase().includes(h)));
  esVoice = byHint(FEMALE_VOICE_HINTS)
    || voices.find(v=> !MALE_VOICE_HINTS.some(h=> v.name.toLowerCase().includes(h)))
    || voices[0];
}
try{
  const s0 = synth();
  if(s0){ s0.onvoiceschanged = pickVoice; pickVoice(); }
}catch(e){ /* voz no disponible: la app sigue funcionando sin ella */ }

function speak(text, onEnd){
  const s = synth();
  if(!state.voiceOn || !s){ if(onEnd) onEnd(); return null; }
  try{
    s.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'es-ES';
    if(esVoice) u.voice = esVoice;
    u.rate = state.rate || 0.85;
    if(onEnd) u.onend = onEnd;
    s.speak(u);
    return u;
  }catch(e){
    if(onEnd) onEnd();
    return null;
  }
}
function stopSpeaking(){
  const s = synth();
  if(!s) return;
  try{ s.cancel(); }catch(e){}
}

let activeAudio = null;
function stopAllVoice(){
  if(activeAudio){ try{ activeAudio.pause(); activeAudio.currentTime = 0; }catch(e){} activeAudio = null; }
  stopSpeaking();
}
/**
 * Reproduce una grabación real en assets/audio/{kind}-{slug}.mp3 si existe.
 * Si el archivo no existe o falla, cae automáticamente en la voz sintética del navegador.
 * kind: 'viz' | 'affirm'
 */
function playVoice(day, kind, text, { onProgress, onEnd, onFallback } = {}){
  stopAllVoice();
  let fellBack = false;
  const doFallback = ()=>{
    if(fellBack) return;
    fellBack = true;
    activeAudio = null;
    if(onFallback) onFallback();
    speak(text, onEnd);
  };
  let audio;
  try{
    audio = new Audio(`assets/audio/${kind}-${day.slug}.mp3`);
  }catch(e){ doFallback(); return; }
  activeAudio = audio;
  audio.addEventListener('error', doFallback);
  audio.addEventListener('timeupdate', ()=>{
    if(audio.duration && onProgress) onProgress(Math.min(100, (audio.currentTime/audio.duration)*100));
  });
  audio.addEventListener('ended', ()=>{
    if(activeAudio === audio) activeAudio = null;
    if(onEnd) onEnd();
  });
  try{
    const p = audio.play();
    if(p && p.catch) p.catch(doFallback);
  }catch(e){ doFallback(); }
}

/* ---------------- OVERLAY / FLUJO DE EJERCICIOS ---------------- */
const overlay = document.getElementById('overlay');
const overlayInner = document.getElementById('overlay-inner');
const overlayContent = document.getElementById('overlay-content');
const overlayProgress = document.getElementById('overlay-progress');
const overlayNext = document.getElementById('overlay-next');
let stepIndex = 0;
let breathTimer = null;
let flowDay = null;

document.getElementById('btn-empezar').addEventListener('click', ()=> startFlow());
document.getElementById('overlay-close').addEventListener('click', closeFlow);

function startFlow(forcedDay){
  session = { vibration:null, gratitude:['','',''], vizMode:'guion' };
  stepIndex = 0;
  flowDay = forcedDay || todayDay();
  overlay.hidden = false;
  renderStep();
}
function closeFlow(){
  clearInterval(breathTimer);
  stopAllVoice();
  overlay.hidden = true;
}

function renderStep(){
  try{ clearInterval(breathTimer); }catch(e){}
  try{ stopAllVoice(); }catch(e){}
  const day = flowDay;
  const ex = EXERCISES[stepIndex];

  try{
    overlayInner.style.setProperty('--stage-bg', day.color);
    overlayInner.style.setProperty('--stage-ink', day.textOn);
    // En días de color claro (Salud, Creencias, Relaciones) los controles blancos
    // desaparecen, así que usan la tinta oscura de la paleta.
    overlayInner.style.setProperty('--stage-chip', day.textOn === '#fff' ? '#fff' : '#2B1420');
    overlayInner.style.setProperty('--stage-chip-ink', day.textOn === '#fff' ? day.color : '#fff');
    overlayProgress.innerHTML = EXERCISES.map((_,i)=>`<span class="${i<=stepIndex?'on':''}"></span>`).join('');
    overlayNext.textContent = stepIndex === EXERCISES.length-1 ? 'Terminar' : 'Siguiente';
  }catch(e){ console.error(e); }

  if(ex.type === 'breath') safeRender(renderBreath, day);
  else if(ex.type === 'scale') safeRender(renderScale, day);
  else if(ex.type === 'visualize') safeRender(renderVisualize, day);
  else if(ex.type === 'affirm') safeRender(renderAffirm, day);
  else if(ex.type === 'gratitude') safeRender(renderGratitude, day);
}

function safeRender(fn, day){
  try{
    fn(day);
  }catch(err){
    console.error('Error al mostrar el ejercicio:', err);
    overlayContent.innerHTML = `
      <div class="ov-eyebrow">Ups</div>
      <div class="ov-title">Este paso no cargó bien</div>
      <div class="ov-body">Cierra con la ✕ y vuelve a intentar. Si se repite, dime en qué paso pasa.</div>
    `;
  }
}

function renderBreath(day){
  overlayContent.innerHTML = `
    <div class="ov-eyebrow">Paso 1 de 5</div>
    <div class="ov-title">Respiración de encendido</div>
    <div class="breath-wrap">
      <div class="breath-circle" id="breath-circle">Inhala</div>
      <div class="breath-count" id="breath-count">Ronda 1 de 4</div>
    </div>
    <div class="ov-hint">Sigue el círculo: inhala 4s, sostén 4s, exhala 6s.</div>
  `;
  let round = 1;
  const circle = document.getElementById('breath-circle');
  const countEl = document.getElementById('breath-count');
  const cycle = ()=>{
    if(round > 4){ clearInterval(breathTimer); return; }
    countEl.textContent = `Ronda ${round} de 4`;
    circle.className = 'breath-circle inhale'; circle.textContent = 'Inhala';
    setTimeout(()=>{
      circle.className = 'breath-circle hold'; circle.textContent = 'Sostén';
      setTimeout(()=>{
        circle.className = 'breath-circle exhale'; circle.textContent = 'Exhala';
        round++;
      }, 4000);
    }, 4000);
  };
  cycle();
  breathTimer = setInterval(cycle, 14000);
}

function renderScale(day){
  const last = SCALE_LEVELS.length - 1;
  overlayContent.innerHTML = `
    <div class="ov-eyebrow">Paso 2 de 5</div>
    <div class="ov-title">¿Dónde estás hoy?</div>
    <div class="scale-wrap">
      <div class="scale-track-wrap">
        <div class="scale-track"></div>
        <input type="range" class="scale-range" id="scale-range" min="0" max="${last}" step="1" value="${session.vibration ?? Math.round(last/2)}">
      </div>
      <div class="scale-info">
        <div class="scale-current" id="scale-current">Desliza para ubicarte</div>
        <div class="scale-suggest" id="scale-suggest">Arriba se siente más liviano. Abajo, más pesado. Solo sé honesta.</div>
      </div>
    </div>
  `;
  const range = document.getElementById('scale-range');
  const update = ()=>{
    const i = parseInt(range.value);
    session.vibration = i;
    document.getElementById('scale-current').textContent = SCALE_LEVELS[i];
    const hint = document.getElementById('scale-suggest');
    hint.textContent = i===0
      ? 'Estás en la cima de la escala. Solo quédate ahí.'
      : `No busques saltar hasta arriba. Solo busca sentir: "${SCALE_LEVELS[i-1]}".`;
  };
  range.addEventListener('input', update);
  if(session.vibration != null) update();
}

function renderVisualize(day){
  overlayContent.innerHTML = `
    <div class="ov-eyebrow">Paso 3 de 5</div>
    <div class="ov-title">Visualización desde el final</div>
    <div class="seg" id="viz-seg">
      <button data-mode="guion" class="${session.vizMode==='guion'?'on':''}">Tu guion</button>
      <button data-mode="video" class="${session.vizMode==='video'?'on':''}">Meditación guiada</button>
    </div>
    <div id="viz-body"></div>
  `;
  document.querySelectorAll('#viz-seg button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      session.vizMode = btn.dataset.mode;
      document.querySelectorAll('#viz-seg button').forEach(b=>b.classList.remove('on'));
      btn.classList.add('on');
      stopAllVoice();
      renderVizBody(day);
    });
  });
  renderVizBody(day);
}

function renderVizBody(day){
  const body = document.getElementById('viz-body');
  if(session.vizMode === 'video'){
    body.innerHTML = `
      <div class="video-frame" style="margin-top:2px;">
        <iframe src="https://www.youtube-nocookie.com/embed/${GUIDED_MEDITATION_ID}"
          title="Meditación guiada" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen loading="lazy"></iframe>
      </div>
      <div class="ov-hint" style="margin-top:10px;">¿No carga? <a class="video-fallback" href="https://www.youtube.com/watch?v=${GUIDED_MEDITATION_ID}" target="_blank" rel="noopener">Ábrela en YouTube ↗</a></div>
    `;
    return;
  }
  body.innerHTML = `
    <div class="audio-row">
      <button class="audio-btn" id="play-btn">▶</button>
      <div class="audio-track"><div class="audio-fill" id="audio-fill"></div></div>
    </div>
    <div class="ov-body" id="viz-text" style="max-height:28vh; overflow-y:auto; margin-top:14px;">${day.visualization.replace(/\n/g,'<br><br>')}</div>
  `;
  const btn = document.getElementById('play-btn');
  const fill = document.getElementById('audio-fill');
  let playing = false;
  let estTimer = null;

  btn.addEventListener('click', ()=>{
    if(playing){
      stopAllVoice();
      clearInterval(estTimer);
      btn.textContent = '▶';
      playing = false;
      return;
    }
    playing = true;
    btn.textContent = '⏸';
    const onFallback = ()=>{
      const estMs = day.visualization.split(/\s+/).length / (130*(state.rate||0.85)/60) * 1000;
      const start = Date.now();
      estTimer = setInterval(()=>{
        fill.style.width = Math.min(100, ((Date.now()-start)/estMs)*100) + '%';
      }, 200);
    };
    playVoice(day, 'viz', day.visualization, {
      onProgress: (pct)=>{ fill.style.width = pct+'%'; },
      onEnd: ()=>{ clearInterval(estTimer); fill.style.width = '100%'; btn.textContent = '▶'; playing = false; },
      onFallback,
    });
  });
}

function renderAffirm(day){
  overlayContent.innerHTML = `
    <div class="ov-eyebrow">Paso 4 de 5</div>
    <div class="ov-title">Afirmación de identidad</div>
    <div class="ov-body" style="font-size:19px; font-family:var(--font-display); font-weight:600; line-height:1.4;">
      "${day.affirmation}"
    </div>
    <button class="audio-btn" id="affirm-play" style="align-self:center;">▶</button>
    <div class="ov-hint">Repítela en voz alta, mínimo tres veces.</div>
  `;
  document.getElementById('affirm-play').addEventListener('click', (e)=>{
    const btn = e.currentTarget;
    btn.textContent = '⏸';
    playVoice(day, 'affirm', day.affirmation, {
      onEnd: ()=>{ btn.textContent = '▶'; },
    });
  });
}

function renderGratitude(day){
  overlayContent.innerHTML = `
    <div class="ov-eyebrow">Paso 5 de 5</div>
    <div class="ov-title">Cierre de gratitud</div>
    <div class="journal-inputs">
      <textarea id="g0" placeholder="Algo que agradeces hoy, en general...">${session.gratitude[0]}</textarea>
      <textarea id="g1" placeholder="Algo que agradeces sobre ${day.area} hoy...">${session.gratitude[1]}</textarea>
      <textarea id="g2" placeholder="Algo que esperas con ilusión...">${session.gratitude[2]}</textarea>
    </div>
  `;
  ['g0','g1','g2'].forEach((id,i)=>{
    document.getElementById(id).addEventListener('input', e=>{ session.gratitude[i] = e.target.value; });
  });
}

overlayNext.addEventListener('click', ()=>{
  if(stepIndex < EXERCISES.length-1){
    stepIndex++;
    renderStep();
  } else {
    finishSession();
  }
});

function finishSession(){
  const day = flowDay || todayDay();
  state.history[todayKey()] = {
    area: day.area,
    vibration: session.vibration,
    gratitude: session.gratitude,
  };
  saveState();
  stopAllVoice();
  clearInterval(breathTimer);
  overlay.hidden = true;
  renderHoy();
}

/* ---------------- INIT ---------------- */
renderHoy();
