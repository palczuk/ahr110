const STAGE_COLOR = {
  low:      { main: '#3fa9f5', dim: '#1f4a63', label: 'lado de baixa' },
  high:     { main: '#e2453c', dim: '#5e211d', label: 'lado de alta' },
  mixed:    { main: null,      dim: null,      label: 'baixa + alta' }, // handled specially
  amber:    { main: '#f0a63a', dim: '#4a3419', label: 'segurança / regulamentação' },
  electric: { main: '#7fd858', dim: '#2c4a1f', label: 'elétrica' }
};

const STORAGE_KEY = 'fieldcraft-ahr110-progress';

function loadProgress(){
  try{ return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch(e){ return {}; }
}
function saveProgress(p){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }catch(e){}
}

function gaugeSVG(stage, size=52){
  // A small semicircular gauge dial. Needle position encodes low/high/mixed/amber/electric.
  const s = STAGE_COLOR[stage] || STAGE_COLOR.mixed;
  let arcColor1 = '#3fa9f5', arcColor2 = '#e2453c', needleColor = '#e8edf2', needleAngle = 90;
  if(stage === 'low'){ needleAngle = 25; needleColor = s.main; }
  else if(stage === 'high'){ needleAngle = 155; needleColor = s.main; }
  else if(stage === 'amber'){ arcColor1 = '#f0a63a'; arcColor2 = '#f0a63a'; needleAngle = 90; needleColor = '#f0a63a'; }
  else if(stage === 'electric'){ arcColor1 = '#7fd858'; arcColor2 = '#7fd858'; needleAngle = 90; needleColor = '#7fd858'; }
  else { needleAngle = 90; needleColor = '#e8edf2'; } // mixed

  const cx = 26, cy = 30, r = 20;
  const rad = (deg) => (deg * Math.PI) / 180;
  const angle = 180 - needleAngle; // 0=right(high) .. 180=left(low) visual mapping
  const nx = cx + r * 0.8 * Math.cos(rad(angle));
  const ny = cy - r * 0.8 * Math.sin(rad(angle));

  return `
  <svg viewBox="0 0 52 40" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad-${stage}-${Math.random().toString(36).slice(2,7)}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${arcColor1}"/>
        <stop offset="100%" stop-color="${arcColor2}"/>
      </linearGradient>
    </defs>
    <path d="M ${cx-r} ${cy} A ${r} ${r} 0 0 1 ${cx+r} ${cy}" fill="none" stroke="#223142" stroke-width="4" stroke-linecap="round"/>
    <path d="M ${cx-r} ${cy} A ${r} ${r} 0 0 1 ${cx+r} ${cy}" fill="none" stroke="url(#grad-${stage}-x)" stroke-width="4" stroke-linecap="round" opacity="0.85"/>
    <line x1="${cx}" y1="${cy}" x2="${nx}" y2="${ny}" stroke="${needleColor}" stroke-width="2.4" stroke-linecap="round"/>
    <circle cx="${cx}" cy="${cy}" r="3" fill="${needleColor}"/>
  </svg>`;
}

function dotColor(stage){
  const s = STAGE_COLOR[stage];
  if(stage === 'mixed') return 'linear-gradient(90deg, #3fa9f5, #e2453c)';
  return s.main;
}

function el(tag, attrs={}, html=''){
  const e = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v]) => {
    if(k === 'class') e.className = v; else e.setAttribute(k, v);
  });
  if(html) e.innerHTML = html;
  return e;
}

async function init(){
  const res = await fetch('data.json');
  const data = await res.json();
  const progress = loadProgress();

  // Course info block
  document.getElementById('courseInfo').innerHTML = `
    <strong>${data.course.code} · ${data.course.title}</strong>
    ${data.course.program}<br>${data.course.hours}
  `;
  document.getElementById('courseNote').textContent = data.course.note;
  document.getElementById('progressTotal').textContent = data.topics.length;

  // Sidenav
  const navList = document.getElementById('sidenavList');
  data.topics.forEach(t => {
    const li = el('li', { class:'sidenav-item', 'data-id': t.id });
    const dotStyle = t.stage === 'mixed'
      ? `background:${dotColor('mixed')};`
      : `background:${STAGE_COLOR[t.stage].main};`;
    li.innerHTML = `
      <a class="sidenav-link" href="#topic-${t.id}" data-id="${t.id}">
        <span class="sidenav-num">${String(t.id).padStart(2,'0')}</span>
        <span class="sidenav-dot" style="${dotStyle}"></span>
        <span class="sidenav-title">${t.title}</span>
      </a>
    `;
    const check = el('button', { class:'sidenav-check' + (progress[t.id] ? ' done' : ''), 'aria-label':'Marcar como estudado', 'data-id':t.id });
    li.querySelector('.sidenav-link').appendChild(check);
    navList.appendChild(li);
  });

  // Topic cards
  const container = document.getElementById('topics');
  data.topics.forEach(t => {
    const card = el('article', { class:'topic', id:`topic-${t.id}`, 'data-search': buildSearchBlob(t) });

    const conceptsHTML = (t.concepts||[]).map(c => `
      <div class="concept-card"><h4>${c.title}</h4><p>${c.text}</p></div>
    `).join('');

    const valuesHTML = (t.keyValues||[]).map(v => `
      <tr><td>${v.label}</td><td>${v.value}</td></tr>
    `).join('');

    const toolsHTML = (t.tools||[]).map(x => `<span class="chip">${x}</span>`).join('');
    const safetyHTML = (t.safety||[]).map(x => `<span class="chip safety">⚠ ${x}</span>`).join('');

    card.innerHTML = `
      <div class="topic-head">
        <div class="topic-gauge">${gaugeSVG(t.stage)}</div>
        <div class="topic-headtext">
          <div class="topic-num">Item ${String(t.id).padStart(2,'0')} do syllabus</div>
          <h2 class="topic-title">${t.title}</h2>
          <p class="topic-ref">Referência: ${t.textbookRef}</p>
        </div>
        <button class="topic-mark-btn ${progress[t.id] ? 'done' : ''}" data-id="${t.id}">
          ${progress[t.id] ? '✓ estudado' : 'marcar estudado'}
        </button>
      </div>

      <p class="topic-overview">${t.overview}</p>

      <div class="topic-section ${(t.concepts||[]).length ? '' : 'empty'}">
        <p class="topic-section-label">Conceitos-chave</p>
        <div class="concept-grid">${conceptsHTML}</div>
      </div>

      <div class="topic-section ${(t.keyValues||[]).length ? '' : 'empty'}">
        <p class="topic-section-label">Valores &amp; referências rápidas</p>
        <table class="values-table"><tbody>${valuesHTML}</tbody></table>
      </div>

      <div class="topic-section ${(t.tools||[]).length ? '' : 'empty'}">
        <p class="topic-section-label">Ferramentas &amp; instrumentos</p>
        <div class="chip-row">${toolsHTML}</div>
      </div>

      <div class="topic-section ${(t.safety||[]).length ? '' : 'empty'}">
        <p class="topic-section-label">Segurança</p>
        <div class="chip-row">${safetyHTML}</div>
      </div>
    `;
    container.appendChild(card);
  });

  updateProgressUI(data.topics.length);
  bindMarkButtons(data.topics.length);
  bindSearch();
  bindScrollSpy(data.topics);
  bindBackToTop();
  drawRail(data.topics.length);
}

function buildSearchBlob(t){
  const parts = [
    t.title, t.overview, t.textbookRef,
    ...(t.concepts||[]).map(c => c.title + ' ' + c.text),
    ...(t.keyValues||[]).map(v => v.label + ' ' + v.value),
    ...(t.tools||[]), ...(t.safety||[])
  ];
  return parts.join(' ').toLowerCase();
}

function updateProgressUI(total){
  const progress = loadProgress();
  const done = Object.values(progress).filter(Boolean).length;
  document.getElementById('progressCount').textContent = done;
  document.getElementById('progressFill').style.width = `${(done/total)*100}%`;
}

function bindMarkButtons(total){
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.topic-mark-btn, .sidenav-check');
    if(!btn) return;
    const id = btn.getAttribute('data-id');
    const progress = loadProgress();
    progress[id] = !progress[id];
    saveProgress(progress);

    document.querySelectorAll(`.topic-mark-btn[data-id="${id}"]`).forEach(b => {
      b.classList.toggle('done', !!progress[id]);
      b.textContent = progress[id] ? '✓ estudado' : 'marcar estudado';
    });
    document.querySelectorAll(`.sidenav-check[data-id="${id}"]`).forEach(c => {
      c.classList.toggle('done', !!progress[id]);
    });
    updateProgressUI(total);
  });
}

function bindSearch(){
  const input = document.getElementById('searchInput');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll('.topic').forEach(card => {
      const match = !q || card.getAttribute('data-search').includes(q);
      card.classList.toggle('dimmed', !match);
    });
    document.querySelectorAll('.sidenav-item').forEach(item => {
      const id = item.getAttribute('data-id');
      const card = document.getElementById(`topic-${id}`);
      const match = !q || (card && card.getAttribute('data-search').includes(q));
      item.classList.toggle('dimmed', !match);
    });
  });
}

function bindScrollSpy(topics){
  const links = document.querySelectorAll('.sidenav-link');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const id = entry.target.id.replace('topic-','');
        links.forEach(l => l.classList.toggle('active', l.getAttribute('data-id') === id));
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

  topics.forEach(t => {
    const node = document.getElementById(`topic-${t.id}`);
    if(node) observer.observe(node);
  });
}

function bindBackToTop(){
  const btn = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 600);
  });
  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

function drawRail(count){
  // Decorative vertical "refrigerant line" from blue (low) to red (high),
  // running behind the sidebar column, echoing the manifold gauge motif.
  const svg = document.getElementById('railSvg');
  if(!svg) return;
  const h = document.body.scrollHeight;
  svg.setAttribute('viewBox', `0 0 40 ${h}`);
  svg.innerHTML = `
    <defs>
      <linearGradient id="railGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#3fa9f5"/>
        <stop offset="50%" stop-color="#f0a63a"/>
        <stop offset="100%" stop-color="#e2453c"/>
      </linearGradient>
    </defs>
    <line x1="20" y1="0" x2="20" y2="${h}" stroke="url(#railGrad)" stroke-width="1.5" stroke-dasharray="2 6" />
  `;
}

document.addEventListener('DOMContentLoaded', init);
