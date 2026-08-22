const LANG_KEY = 'fieldcraft-lang';

const i18n = {
  pt: {
    'brand.tagline': 'JOSIMAR PALCZUK · HVACR',
    'nav.heading': 'UNIDADES DO LIVRO',
    'nav.sub': 'Refrigeration & Air Conditioning Technology',
    'nav.companionTitle': 'AHR 110 · Companion do curso',
    'companion.eyebrow': 'Material complementar',
    'companion.sub': 'Resumo aprofundado dos itens 2–11 do syllabus da disciplina — evaporadores, compressores, manifold, evacuação, carga, recuperação, tubulação, elétrica e prep para o EPA 608.',
    'hero.eyebrow': 'Base de estudos HVACR',
    'hero.title': 'O ciclo que move<br>todo o resto.',
    'hero.sub': 'Quatro componentes, um circuito fechado, duas pressões. Entenda o ciclo de refrigeração antes de entrar em qualquer unidade do livro.',
    'cycle.title': 'O Ciclo de Refrigeração',
    'cycle.sub': 'Toque em cada componente para ver sua função no ciclo.',
    'cycle.hint': '↑ Escolha um componente acima para ver a explicação aqui.',
    'footer.line1': 'Base de estudos pessoal para o programa de HVACR — Fayetteville Technical Community College.',
    'footer.line2': 'Josimar Palczuk — material de estudo pessoal, não substitui o syllabus oficial da instituição.',
    'badge.available': 'disponível',
    'badge.planned': 'em breve',
    'cycle.evaporator.name': 'Evaporador',
    'cycle.compressor.name': 'Compressor',
    'cycle.condenser.name': 'Condensador',
    'cycle.valve.name': 'Válvula de Expansão',
    'cycle.evaporator.role': 'Lado de baixa pressão',
    'cycle.compressor.role': 'Transição baixa → alta pressão',
    'cycle.condenser.role': 'Lado de alta pressão',
    'cycle.valve.role': 'Transição alta → baixa pressão',
    'cycle.evaporator.text': 'É onde o refrigerante ferve a baixa pressão, absorvendo calor do ar (ou produto) ao redor. Entra como mistura líquido/vapor de baixa temperatura e sai como vapor de baixa pressão, idealmente com um pouco de superaquecimento — sinal de que não sobrou líquido para seguir ao compressor.',
    'cycle.compressor.text': 'Recebe o vapor de baixa pressão vindo do evaporador e o comprime, elevando sua pressão e temperatura. É a "bomba" que faz o refrigerante circular pelo sistema. Compressores nunca devem receber líquido — só vapor — por isso o controle de superaquecimento é tão importante.',
    'cycle.condenser.text': 'Recebe o vapor quente e de alta pressão do compressor e rejeita esse calor para o ambiente (ar ou água), fazendo o refrigerante condensar de volta a líquido. Sai como líquido de alta pressão, geralmente sub-resfriado alguns graus abaixo da sua temperatura de saturação.',
    'cycle.valve.text': 'O dispositivo de expansão (válvula termostática ou tubo capilar) restringe o fluxo do líquido de alta pressão, causando uma queda brusca de pressão. Esse líquido de baixa pressão entra no evaporador pronto para ferver novamente, fechando o ciclo.'
  },
  en: {
    'brand.tagline': 'JOSIMAR PALCZUK · HVACR',
    'nav.heading': 'BOOK UNITS',
    'nav.sub': 'Refrigeration & Air Conditioning Technology',
    'nav.companionTitle': 'AHR 110 · Course Companion',
    'companion.eyebrow': 'Companion material',
    'companion.sub': 'In-depth summary of syllabus items 2–11 — evaporators, compressors, manifold gauges, evacuation, charging, recovery, tubing, electrical, and EPA 608 prep.',
    'hero.eyebrow': 'HVACR study base',
    'hero.title': 'The cycle that drives<br>everything else.',
    'hero.sub': 'Four components, one closed loop, two pressures. Understand the refrigeration cycle before diving into any unit in the book.',
    'cycle.title': 'The Refrigeration Cycle',
    'cycle.sub': 'Tap each component to see its role in the cycle.',
    'cycle.hint': '↑ Pick a component above to see the explanation here.',
    'footer.line1': 'Personal study base for the HVACR program — Fayetteville Technical Community College.',
    'footer.line2': 'Josimar Palczuk — personal study material, does not replace the institution\u2019s official syllabus.',
    'badge.available': 'available',
    'badge.planned': 'coming soon',
    'cycle.evaporator.name': 'Evaporator',
    'cycle.compressor.name': 'Compressor',
    'cycle.condenser.name': 'Condenser',
    'cycle.valve.name': 'Expansion Valve',
    'cycle.evaporator.role': 'Low-pressure side',
    'cycle.compressor.role': 'Low → high pressure transition',
    'cycle.condenser.role': 'High-pressure side',
    'cycle.valve.role': 'High → low pressure transition',
    'cycle.evaporator.text': 'Where the refrigerant boils at low pressure, absorbing heat from the surrounding air (or product). It enters as a low-temperature liquid/vapor mix and leaves as low-pressure vapor, ideally carrying a bit of superheat — a sign that no liquid is left to reach the compressor.',
    'cycle.compressor.text': 'Takes in low-pressure vapor from the evaporator and compresses it, raising its pressure and temperature. It\u2019s the "pump" that keeps refrigerant circulating through the system. Compressors should never receive liquid — only vapor — which is why controlling superheat matters so much.',
    'cycle.condenser.text': 'Takes in hot, high-pressure vapor from the compressor and rejects that heat to the surroundings (air or water), condensing the refrigerant back into liquid. It leaves as high-pressure liquid, usually subcooled a few degrees below its saturation temperature.',
    'cycle.valve.text': 'The metering device (thermostatic expansion valve or capillary tube) restricts the flow of high-pressure liquid, causing a sharp pressure drop. That low-pressure liquid enters the evaporator ready to boil again, closing the loop.'
  }
};

let currentLang = localStorage.getItem(LANG_KEY) || 'pt';
let unitsData = null;
let activeNode = null;

function t(key){
  return (i18n[currentLang] && i18n[currentLang][key]) || key;
}

function applyLanguage(lang){
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.getElementById('htmlRoot').setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = t(key);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  if(unitsData) renderUnits(unitsData);
  if(activeNode) renderCycleDetail(activeNode);
  if(typeof renderUnitPage === 'function' && unitData) renderUnitPage();
}

function bindLangSwitch(){
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });
}

/* ---------- Cycle diagram ---------- */
function renderCycleDetail(node){
  activeNode = node;
  const stageColor = { evaporator:'#3fa9f5', compressor:null, condenser:'#e2453c', valve:null };
  const dot = stageColor[node] || 'linear-gradient(90deg,#3fa9f5,#e2453c)';
  const wrap = document.getElementById('cycleDetail');
  wrap.innerHTML = `
    <div class="cycle-detail-head">
      <span class="cycle-detail-dot" style="background:${dot}"></span>
      <h3 class="cycle-detail-title">${t('cycle.'+node+'.name')}</h3>
    </div>
    <p class="cycle-detail-role">${t('cycle.'+node+'.role')}</p>
    <p class="cycle-detail-text">${t('cycle.'+node+'.text')}</p>
  `;
  document.querySelectorAll('.cycle-node').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-node') === node);
  });
}

function bindCycleNodes(){
  document.querySelectorAll('.cycle-node').forEach(btn => {
    btn.addEventListener('click', () => renderCycleDetail(btn.getAttribute('data-node')));
  });
}

/* ---------- Units menu ---------- */
function renderUnits(data){
  unitsData = data;
  const wrap = document.getElementById('unitsWrap');
  wrap.innerHTML = '';
  data.sections.forEach(section => {
    const block = document.createElement('div');
    block.className = 'unit-section';
    const title = document.createElement('p');
    title.className = 'unit-section-title';
    title.textContent = section.title[currentLang];
    block.appendChild(title);

    const list = document.createElement('ol');
    list.className = 'unit-list';
    section.units.forEach(u => {
      const li = document.createElement('li');
      const isAvailable = u.status === 'available';
      const tag = isAvailable ? 'a' : 'div';
      const row = document.createElement(tag);
      row.className = 'unit-row' + (isAvailable ? '' : ' is-planned');
      if(isAvailable) row.setAttribute('href', u.href);
      row.innerHTML = `
        <span class="unit-num">${String(u.id).padStart(2,'0')}</span>
        <span class="unit-title">${u.title[currentLang]}</span>
        <span class="unit-badge">${isAvailable ? t('badge.available') : t('badge.planned')}</span>
      `;
      li.appendChild(row);
      list.appendChild(li);
    });
    block.appendChild(list);
    wrap.appendChild(block);
  });

  const noteEl = document.getElementById('unitsNote');
  if(noteEl) noteEl.textContent = data.note[currentLang];
}

function loadUnits(){
  renderUnits(UNITS_DATA);
}

document.addEventListener('DOMContentLoaded', () => {
  bindLangSwitch();
  bindCycleNodes();
  applyLanguage(currentLang);
  loadUnits();
});
