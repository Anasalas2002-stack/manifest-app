const DREAMS_KEY = 'manifestacion_dreams_v1';
const STAGE_START_KEY = 'manifestacion_stage_start_v1';

const DREAM_AREAS = [
  { id: 'abundancia', label: 'Abundancia', color: '#f59bb9' },
  { id: 'proposito', label: 'Propósito', color: '#ecb96d' },
  { id: 'relaciones', label: 'Relaciones', color: '#c8a7eb' },
  { id: 'salud', label: 'Salud', color: '#89c9de' },
  { id: 'creencias', label: 'Creencias', color: '#9ad5b5' }
];

const STAGE_DEFS = [
  {
    weeks: 'Semanas 1–2',
    title: 'Etapa 1 · Claridad',
    text: 'Nombrar lo que deseas con emoción y permitir que la visión se vuelva nítida.',
    actions: [
      'Escribe 1 o 2 sueños por área.',
      'Elige una imagen o sensación que represente tu visón.',
      'Practica la rutina sin exigirte resultados inmediatos.'
    ],
    gradient: 'linear-gradient(135deg, #f6c3d1 0%, #f7d6a4 100%)'
  },
  {
    weeks: 'Semanas 3–4',
    title: 'Etapa 2 · Alineación',
    text: 'Habitar la sensación del deseo cumplido y dejar entrar la confianza.',
    actions: [
      'Vuelve a leer tus sueños en voz alta.',
      'Observa qué emociones aparecen al imaginarlos.',
      'Elige una acción pequeña que se sienta coherente con tu versión futura.'
    ],
    gradient: 'linear-gradient(135deg, #c3dff8 0%, #d2c0f0 100%)'
  },
  {
    weeks: 'Semanas 5–8',
    title: 'Etapa 3 · Encarnación',
    text: 'Convertir la visión en decisiones prácticas, sostenibles y consistentes.',
    actions: [
      'Haz una acción concreta por área cada semana.',
      'Registra señales, avances y pequeñas evidencias.',
      'Celebra la diferencia entre “lo que quiero” y “lo que ya estoy creando”.'
    ],
    gradient: 'linear-gradient(135deg, #a9e0d9 0%, #a3c8ee 100%)'
  },
  {
    weeks: 'Desde la semana 9',
    title: 'Etapa 4 · Integración',
    text: 'Mantener la identidad elegida con calma, presencia y gratitud.',
    actions: [
      'Revisa tus sueños o imágenes con más suavidad.',
      'Mantén la práctica sin presión ni perfeccionismo.',
      'Deja que lo que ya se hizo forme parte de tu nueva realidad.'
    ],
    gradient: 'linear-gradient(135deg, #f3b8a6 0%, #d1b6ef 100%)'
  }
];

function ensureStageStart() {
  const existing = localStorage.getItem(STAGE_START_KEY);
  if (!existing) {
    localStorage.setItem(STAGE_START_KEY, new Date().toISOString());
  }
}

function getStageIndex() {
  ensureStageStart();
  const start = new Date(localStorage.getItem(STAGE_START_KEY));
  const weeks = Math.floor((Date.now() - start.getTime()) / 604800000);

  if (weeks < 2) return 0;
  if (weeks < 4) return 1;
  if (weeks < 8) return 2;
  return 3;
}

function loadDreams() {
  try {
    return JSON.parse(localStorage.getItem(DREAMS_KEY)) || {};
  } catch (error) {
    return {};
  }
}

function saveDreams(dreams) {
  localStorage.setItem(DREAMS_KEY, JSON.stringify(dreams));
}

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));
}

function renderDreams() {
  const root = document.getElementById('dreams-content');
  if (!root) return;

  const dreams = loadDreams();
  const currentStageIndex = getStageIndex();
  const currentStage = STAGE_DEFS[currentStageIndex];

  root.innerHTML = `
    <div class="stage-card" style="background:${currentStage.gradient};">
      <div class="stage-kicker">Stages de manifestation · ${currentStage.weeks}</div>
      <h3>${currentStage.title}</h3>
      <p>${currentStage.text}</p>
      <div class="stage-progress">
        ${STAGE_DEFS.map((stage, index) => `<span class="${index <= currentStageIndex ? 'active' : ''}"></span>`).join('')}
      </div>
      <ul>
        ${currentStage.actions.map(action => `<li>${action}</li>`).join('')}
      </ul>
    </div>

    <div class="dream-notice">Tus sueños y fotos se guardan solo en este dispositivo.</div>

    <div class="dream-grid">
      ${DREAM_AREAS.map(area => createDreamArea(area, dreams)).join('')}
    </div>
  `;

  root.querySelectorAll('[data-dream-form]').forEach(form => {
    form.addEventListener('submit', handleDreamSubmit);
  });

  root.querySelectorAll('[data-photo]').forEach(input => {
    input.addEventListener('change', handlePhotoSelection);
  });

  root.querySelectorAll('[data-delete]').forEach(button => {
    button.addEventListener('click', () => {
      const [areaId, slot] = button.dataset.delete.split(':');
      const dreams = loadDreams();
      if (!dreams[areaId]) return;
      delete dreams[areaId][Number(slot)];
      saveDreams(dreams);
      renderDreams();
    });
  });
}

function createDreamArea(area, dreams) {
  const entries = dreams[area.id] || [];

  const slots = [0, 1].map(slot => {
    const entry = entries[slot] || {};

    if (entry.text) {
      return `
        <article class="dream-card">
          <div class="dream-card-head">
            <span class="dream-dot" style="background:${area.color}"></span>
            <span>${area.label} · Sueño ${slot + 1}</span>
            <button class="dream-delete" type="button" data-delete="${area.id}:${slot}" aria-label="Eliminar sueño">×</button>
          </div>
          <p class="dream-text">${escapeHtml(entry.text)}</p>
          ${entry.image ? `<img class="dream-image" src="${entry.image}" alt="Sueño de ${area.label}">` : ''}
        </article>
      `;
    }

    return `
      <article class="dream-card">
        <div class="dream-card-head">
          <span class="dream-dot" style="background:${area.color}"></span>
          <span>${area.label} · Sueño ${slot + 1}</span>
        </div>
        <form data-dream-form="${area.id}:${slot}">
          <textarea name="text" maxlength="280" placeholder="¿Qué quieres sentir o vivir en ${area.label.toLowerCase()}?"></textarea>
          <input data-photo="${area.id}:${slot}" type="file" accept="image/*">
          <button type="submit" class="dream-save">Guardar sueño</button>
        </form>
      </article>
    `;
  }).join('');

  return `
    <div class="dream-area">
      <h3>${area.label}</h3>
      ${slots}
    </div>
  `;
}

function handleDreamSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const [areaId, slot] = form.dataset.dreamForm.split(':');
  const text = form.querySelector('textarea').value.trim();
  const image = form.dataset.image || '';

  if (!text) return;

  const dreams = loadDreams();
  dreams[areaId] = dreams[areaId] || [];
  dreams[areaId][Number(slot)] = { text, image };
  saveDreams(dreams);
  renderDreams();
}

function handlePhotoSelection(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const form = event.target.closest('form');
    if (form) {
      form.dataset.image = reader.result;
    }
  };
  reader.readAsDataURL(file);
}

function addDreamsTab() {
  const nav = document.getElementById('tabbar');
  if (!nav || nav.querySelector('[data-target="suenos"]')) return;

  const button = document.createElement('button');
  button.className = 'tab';
  button.dataset.target = 'suenos';
  button.innerHTML = '<span class="tab-dot"></span>Sueños';

  button.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('[data-screen]').forEach(screen => {
      screen.hidden = screen.id !== 'screen-suenos';
    });
    renderDreams();
  });

  nav.appendChild(button);
}

function addDreamsScreen() {
  if (document.getElementById('screen-suenos')) return;

  const screen = document.createElement('section');
  screen.id = 'screen-suenos';
  screen.className = 'screen';
  screen.dataset.screen = '';
  screen.hidden = true;
  screen.innerHTML = '<header class="top top--simple"><h2 class="screen-title">Sueños</h2></header><div id="dreams-content"></div>';

  const nav = document.getElementById('tabbar');
  if (nav) {
    document.getElementById('app').insertBefore(screen, nav);
  } else {
    document.getElementById('app').appendChild(screen);
  }
}

addDreamsScreen();
addDreamsTab();
renderDreams();
