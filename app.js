/* ============================================================
   SERIE DE MANIFESTACIÓN — app.js
   Todo se guarda localmente (localStorage). Nada sale de este dispositivo.
   ============================================================ */

/* ---------------- CONTENIDO POR DÍA ---------------- */
// key por getDay(): 0=domingo ... 6=sábado
const DAYS = {
  1: { // lunes
    area: 'abundancia',
    label: 'Abundancia',
    color: '#A32857',
    textOn: '#fff',
    affirmation: 'Soy rica y estoy en paz. Mi dinero crece constantemente y gasto con libertad y generosidad, sabiendo que siempre hay más viniendo hacia mí.',
    visualization: `Es una mañana cualquiera, pero algo en ti se siente distinto: liviana, en paz. Abres tu cuenta y ves el saldo — los sesenta millones ya están ahí, invertidos en Amaná, trabajando para ti. No sientes ansiedad ni urgencia, solo una calma profunda, como si siempre hubiera sido así. Respira ese sentimiento.

Piensa en tu salario: entre diez y veinte millones llegan cada mes, con la misma naturalidad con la que llega el sol cada mañana. No te esfuerzas para que llegue, simplemente llega, y tú lo recibes con gratitud, sin culpa.

Ahora imagínate un momento cotidiano: estás en una tienda, ves algo que te gusta, y lo compras sin revisar el precio dos veces. Sientes esa libertad en el pecho. Ese mismo día le regalas algo a alguien que quieres, no porque tengas que hacerlo, sino porque puedes, y te encanta poder hacerlo. Sientes cómo tu generosidad no te vacía, te llena más.

Tu dinero crece y crece, como una planta que ya sabes que va a florecer, así que no la desentierras para revisar la raíz. Solo la riegas, y confías.

Quédate un momento en esa sensación: rica, tranquila, generosa. Así es como se siente tu vida ahora.`
  },
  2: { // martes
    area: 'propósito',
    label: 'Propósito',
    color: '#840016',
    textOn: '#fff',
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
    label: 'Relaciones',
    color: '#9BB7D4',
    textOn: '#2B1420',
    affirmation: 'Merezco amor tal como soy. Soy una reina, pongo límites con facilidad, y un hombre honesto y divertido me admira tanto como yo a él.',
    visualization: `Estás en una cena, o quizás caminando de la mano de alguien, riéndote de algo tonto que él dijo. Es honesto, lo notas en cómo te mira, sin juegos, sin dobles intenciones. Es divertido, y contigo se relaja de una forma que pocas veces se permite con otras personas.

Te admira. No de lejos, sino de cerca: admira cómo piensas, cómo construyes tu vida, cómo tratas a los demás. Y tú lo admiras a él, sin tener que fingir que no te importa.

No hay drama. Hay una calma nueva en esto: puedes decir lo que necesitas, poner un límite si hace falta, y no pasa nada malo. Al contrario, te trata mejor por eso, como a alguien que sabe lo que vale.

Sientes que eres amada exactamente como eres, no como la versión que crees que deberías ser. Eso te permite soltar, disfrutar, reírte más fuerte, enamorarte de nuevo sin miedo.

Te ves a ti misma como una reina, no por arrogancia, sino porque así te tratas y así te tratan. Quédate en esa sensación: divertida, tranquila, admirada, en paz.`
  },
  4: { // jueves
    area: 'salud',
    label: 'Salud',
    color: '#F4ECC2',
    textOn: '#2B1420',
    affirmation: 'Mi cuerpo es fuerte, hermoso y sano. Tengo la energía para disfrutar cada parte de mi vida.',
    visualization: `Sientes tu cuerpo moverse con facilidad, quizás caminando, bailando, estirándote al despertar. No hay una voz crítica revisando cada parte de ti. Solo hay una sensación de fuerza, de estar cómoda en tu propia piel.

Te ves frente a un espejo y lo que sientes no es duda, es seguridad. Ves belleza, ves salud, ves energía real, la que te permite disfrutar el día completo sin que el cansancio te lo quite.

Tu cuerpo no es un proyecto que arreglar, es tu hogar, y hoy lo sientes fuerte, sano, vivo. Cada respiración profunda te recuerda que tienes toda la energía que necesitas para lo que quieras hacer hoy: trabajar, bailar, reír, amar.

Quédate en esa sensación de vitalidad, de estar plenamente en tu cuerpo, disfrutando la vida desde ahí.`
  },
  5: { // viernes
    area: 'creencias',
    label: 'Creencias',
    color: '#D8CCBB',
    textOn: '#2B1420',
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
      <div class="ex-num">${i+1}</div>
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

/* ---------------- RENDER: PROGRESO ---------------- */
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
function pickVoice(){
  const voices = speechSynthesis.getVoices();
  esVoice = voices.find(v=>v.lang && v.lang.startsWith('es')) || null;
}
if('speechSynthesis' in window){
  speechSynthesis.onvoiceschanged = pickVoice;
  pickVoice();
}
function speak(text, onEnd){
  if(!state.voiceOn || !('speechSynthesis' in window)){ if(onEnd) onEnd(); return null; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'es-ES';
  if(esVoice) u.voice = esVoice;
  u.rate = state.rate || 0.85;
  if(onEnd) u.onend = onEnd;
  speechSynthesis.speak(u);
  return u;
}
function stopSpeaking(){ if('speechSynthesis' in window) speechSynthesis.cancel(); }

/* ---------------- OVERLAY / FLUJO DE EJERCICIOS ---------------- */
const overlay = document.getElementById('overlay');
const overlayInner = document.getElementById('overlay-inner');
const overlayContent = document.getElementById('overlay-content');
const overlayProgress = document.getElementById('overlay-progress');
const overlayNext = document.getElementById('overlay-next');
let stepIndex = 0;
let breathTimer = null;

document.getElementById('btn-empezar').addEventListener('click', startFlow);
document.getElementById('overlay-close').addEventListener('click', closeFlow);

function startFlow(){
  session = { vibration:null, gratitude:['','',''] };
  stepIndex = 0;
  overlay.hidden = false;
  const day = todayDay();
  overlayInner.style.setProperty('--ov-bg', day.color);
  overlayInner.style.setProperty('--ov-ink', day.textOn);
  renderStep();
}
function closeFlow(){
  clearInterval(breathTimer);
  stopSpeaking();
  overlay.hidden = true;
}

function renderStep(){
  clearInterval(breathTimer);
  stopSpeaking();
  const day = todayDay();
  const ex = EXERCISES[stepIndex];

  overlayProgress.innerHTML = EXERCISES.map((_,i)=>`<span class="${i<=stepIndex?'on':''}"></span>`).join('');
  overlayNext.textContent = stepIndex === EXERCISES.length-1 ? 'Terminar' : 'Siguiente';

  if(ex.type === 'breath') renderBreath(day);
  else if(ex.type === 'scale') renderScale(day);
  else if(ex.type === 'visualize') renderVisualize(day);
  else if(ex.type === 'affirm') renderAffirm(day);
  else if(ex.type === 'gratitude') renderGratitude(day);
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
  overlayContent.innerHTML = `
    <div class="ov-eyebrow">Paso 2 de 5</div>
    <div class="ov-title">¿Dónde estás hoy?</div>
    <div class="scale-list" id="scale-list">
      ${SCALE_LEVELS.map((lvl,i)=>`<button class="scale-item" data-i="${i}">${lvl}</button>`).join('')}
    </div>
    <div class="ov-hint" id="scale-hint">Elige la emoción más cercana a cómo te sientes ahora.</div>
  `;
  document.querySelectorAll('.scale-item').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.scale-item').forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');
      const i = parseInt(btn.dataset.i);
      session.vibration = i;
      const hint = document.getElementById('scale-hint');
      if(i===0){
        hint.textContent = 'Estás en la cima de la escala. Solo quédate ahí.';
      } else {
        hint.textContent = `No busques saltar hasta arriba. Solo busca sentir: "${SCALE_LEVELS[i-1]}".`;
      }
    });
  });
}

function renderVisualize(day){
  overlayContent.innerHTML = `
    <div class="ov-eyebrow">Paso 3 de 5</div>
    <div class="ov-title">Visualización desde el final</div>
    <div class="audio-row">
      <button class="audio-btn" id="play-btn">▶</button>
      <div class="audio-track"><div class="audio-fill" id="audio-fill"></div></div>
    </div>
    <div class="ov-body" id="viz-text" style="max-height:32vh; overflow-y:auto;">${day.visualization.replace(/\n/g,'<br><br>')}</div>
  `;
  const btn = document.getElementById('play-btn');
  const fill = document.getElementById('audio-fill');
  let playing = false;
  let progressTimer = null;
  const estMs = day.visualization.split(/\s+/).length / (130*(state.rate||0.85)/60) * 1000;

  btn.addEventListener('click', ()=>{
    if(playing){
      stopSpeaking();
      clearInterval(progressTimer);
      btn.textContent = '▶';
      playing = false;
      return;
    }
    playing = true;
    btn.textContent = '⏸';
    const start = Date.now();
    progressTimer = setInterval(()=>{
      const pct = Math.min(100, ((Date.now()-start)/estMs)*100);
      fill.style.width = pct+'%';
    }, 200);
    speak(day.visualization, ()=>{
      clearInterval(progressTimer);
      fill.style.width = '100%';
      btn.textContent = '▶';
      playing = false;
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
  document.getElementById('affirm-play').addEventListener('click', ()=> speak(day.affirmation));
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
  const day = todayDay();
  state.history[todayKey()] = {
    area: day.area,
    vibration: session.vibration,
    gratitude: session.gratitude,
  };
  saveState();
  stopSpeaking();
  clearInterval(breathTimer);
  overlay.hidden = true;
  renderHoy();
}

/* ---------------- INIT ---------------- */
renderHoy();
