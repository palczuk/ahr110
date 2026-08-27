const LANG_KEY = 'hvacr-study-language';
const PROGRESS_KEY = 'hvacr-study-progress';

const i18n = {
  pt: {
    'a11y.skip': 'Pular para o conteúdo',
    'banner.text': 'Material de estudo pessoal, escrito em linguagem própria. Use-o como complemento — não como substituto — do livro-texto e do curso oficial.',
    'banner.cta': 'Ver livro-texto',
    'brand.tagline': 'BASE DE ESTUDOS HVACR',
    'header.roadmap': 'Trilha do curso',
    'hero.eyebrow': 'GUIA DE ESTUDO EM CAMPO',
    'hero.title': 'Entenda o ciclo.<br><span>Construa o raciocínio.</span>',
    'hero.lede': 'Uma base prática para ligar teoria, instrumentos e decisões reais de HVACR — no seu ritmo e em dois idiomas.',
    'hero.continue': 'Começar a trilha',
    'hero.explore': 'Explorar o ciclo',
    'dashboard.eyebrow': 'PAINEL DE ESTUDOS',
    'dashboard.live': 'EM ATUALIZAÇÃO',
    'dashboard.title': 'Seu mapa de progresso',
    'dashboard.completed': 'concluídas',
    'dashboard.available': 'publicadas',
    'dashboard.total': 'no mapa',
    'roadmap.eyebrow': 'PROGRAMA DE ESTUDOS',
    'roadmap.title': 'Escolha uma unidade e siga o fio.',
    'roadmap.note': 'As unidades publicadas abrem em uma página única; para criar a próxima, você adiciona somente o conteúdo.',
    'unit.available': 'abrir unidade',
    'unit.planned': 'em preparação',
    'unit.completed': 'concluída',
    'cycle.eyebrow': 'CONCEITO-BASE',
    'cycle.title': 'O circuito que sustenta todo o resto.',
    'cycle.note': 'Selecione uma etapa para revisar a função dela no ciclo.',
    'cycle.hint': 'Escolha uma das quatro etapas para ver o que muda com pressão, temperatura e estado do refrigerante.',
    'cycle.evaporator.name': 'Evaporador', 'cycle.evaporator.short': 'absorve', 'cycle.evaporator.role': 'Lado de baixa pressão',
    'cycle.evaporator.text': 'O refrigerante ferve em baixa pressão e absorve calor do ar ou produto. Ele deve deixar o evaporador como vapor, com superaquecimento suficiente para proteger o compressor.',
    'cycle.compressor.name': 'Compressor', 'cycle.compressor.short': 'eleva', 'cycle.compressor.role': 'Transição de baixa para alta',
    'cycle.compressor.text': 'Recebe vapor de baixa pressão e aumenta sua pressão e temperatura. É o componente que mantém o refrigerante em movimento — e nunca deve receber líquido.',
    'cycle.condenser.name': 'Condensador', 'cycle.condenser.short': 'rejeita', 'cycle.condenser.role': 'Lado de alta pressão',
    'cycle.condenser.text': 'Remove do sistema o calor absorvido e o calor da compressão. O vapor quente perde energia, condensa e segue como líquido de alta pressão, normalmente sub-resfriado.',
    'cycle.valve.name': 'Expansão', 'cycle.valve.short': 'dosifica', 'cycle.valve.role': 'Transição de alta para baixa',
    'cycle.valve.text': 'O dispositivo de expansão restringe o líquido de alta pressão. A queda de pressão cria uma mistura fria de líquido e vapor que entra no evaporador pronta para absorver calor outra vez.',
    'cycle.return': '← baixa pressão · retorno ao evaporador',
    'companion.eyebrow': 'EM PREPARAÇÃO',
    'companion.title': 'AHR 110 · Companion do curso',
    'companion.text': 'O módulo aprofundado volta como uma trilha própria quando o conteúdo estiver organizado e revisado. Assim não há links quebrados nem material pela metade.',
    'companion.item1': 'Priorizar segurança, instrumentos e diagnóstico',
    'companion.item2': 'Manter fontes e datas de revisão visíveis',
    'companion.item3': 'Publicar por blocos úteis de prática',
    'footer.text': 'Material complementar pessoal. Confirme requisitos e procedimentos com o curso, fabricantes e normas vigentes.',
    'progress.next': 'Próximo passo: Unidade {unit} — {title}.',
    'progress.done': 'Você concluiu todas as unidades já publicadas. Ótimo trabalho.',
    'progress.status': '{done} de {available} unidades publicadas concluídas'
  },
  en: {
    'a11y.skip': 'Skip to content',
    'banner.text': 'Personal study material written in original language. Use it as a complement — not a replacement — for the textbook and official course.',
    'banner.cta': 'View textbook',
    'brand.tagline': 'HVACR STUDY BASE',
    'header.roadmap': 'Course path',
    'hero.eyebrow': 'FIELD STUDY GUIDE',
    'hero.title': 'Understand the cycle.<br><span>Build the reasoning.</span>',
    'hero.lede': 'A practical base for connecting theory, instruments, and real HVACR decisions — at your pace and in two languages.',
    'hero.continue': 'Start the path',
    'hero.explore': 'Explore the cycle',
    'dashboard.eyebrow': 'STUDY DASHBOARD',
    'dashboard.live': 'BEING UPDATED',
    'dashboard.title': 'Your progress map',
    'dashboard.completed': 'completed',
    'dashboard.available': 'published',
    'dashboard.total': 'on the map',
    'roadmap.eyebrow': 'STUDY PROGRAM',
    'roadmap.title': 'Choose a unit and follow the thread.',
    'roadmap.note': 'Published units open in one shared page; to create the next one, you only add its content.',
    'unit.available': 'open unit',
    'unit.planned': 'in preparation',
    'unit.completed': 'completed',
    'cycle.eyebrow': 'FOUNDATION CONCEPT',
    'cycle.title': 'The circuit behind everything else.',
    'cycle.note': 'Select one stage to review its role in the cycle.',
    'cycle.hint': 'Choose one of the four stages to see what changes in refrigerant pressure, temperature, and state.',
    'cycle.evaporator.name': 'Evaporator', 'cycle.evaporator.short': 'absorbs', 'cycle.evaporator.role': 'Low-pressure side',
    'cycle.evaporator.text': 'The refrigerant boils at low pressure and absorbs heat from air or product. It should leave as vapor, with enough superheat to protect the compressor.',
    'cycle.compressor.name': 'Compressor', 'cycle.compressor.short': 'raises', 'cycle.compressor.role': 'Low-to-high transition',
    'cycle.compressor.text': 'It takes in low-pressure vapor and raises its pressure and temperature. This component keeps refrigerant moving — and should never receive liquid.',
    'cycle.condenser.name': 'Condenser', 'cycle.condenser.short': 'rejects', 'cycle.condenser.role': 'High-pressure side',
    'cycle.condenser.text': 'It rejects the heat absorbed by the system plus the heat of compression. Hot vapor loses energy, condenses, and continues as high-pressure liquid, usually subcooled.',
    'cycle.valve.name': 'Expansion', 'cycle.valve.short': 'meters', 'cycle.valve.role': 'High-to-low transition',
    'cycle.valve.text': 'The metering device restricts high-pressure liquid. The pressure drop creates a cold liquid-vapor mix that enters the evaporator ready to absorb heat again.',
    'cycle.return': '← low pressure · return to evaporator',
    'companion.eyebrow': 'IN PREPARATION',
    'companion.title': 'AHR 110 · Course Companion',
    'companion.text': 'The in-depth module returns as its own path once the material is organized and reviewed. That means no broken links or half-finished content.',
    'companion.item1': 'Prioritize safety, instruments, and diagnosis',
    'companion.item2': 'Keep sources and review dates visible',
    'companion.item3': 'Publish in useful practice-oriented blocks',
    'footer.text': 'Personal supplementary material. Confirm requirements and procedures with the course, manufacturers, and current standards.',
    'progress.next': 'Next step: Unit {unit} — {title}.',
    'progress.done': 'You have completed every published unit. Great work.',
    'progress.status': '{done} of {available} published units completed'
  }
};

let currentLang = localStorage.getItem(LANG_KEY) || 'pt';
let activeCycle = null;

function t(key){
  return i18n[currentLang]?.[key] || key;
}

function allUnits(){
  if(typeof UNITS_DATA === 'undefined') return [];
  return UNITS_DATA.sections.flatMap(section => section.units.map(unit => ({...unit, section})));
}

function getProgress(){
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; }
  catch { return {}; }
}

function setUnitCompleted(unitId, completed){
  const progress = getProgress();
  if(completed) progress[String(unitId)] = { completed:true, updatedAt:new Date().toISOString() };
  else delete progress[String(unitId)];
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  return progress;
}

function replaceTokens(text, values){
  return Object.entries(values).reduce((result, [key, value]) => result.replaceAll(`{${key}}`, value), text);
}

function applyLanguage(lang){
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    element.innerHTML = t(key);
  });
  document.querySelectorAll('.lang-btn').forEach(button => button.classList.toggle('active', button.dataset.lang === lang));
  if(document.getElementById('courseMap')) renderHomepage();
  if(activeCycle) renderCycleDetail(activeCycle);
  if(typeof window.renderUnitPage === 'function') window.renderUnitPage();
}

function bindLanguageSwitch(){
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
  });
}

function renderHomepage(){
  const map = document.getElementById('courseMap');
  if(!map || typeof UNITS_DATA === 'undefined') return;
  const progress = getProgress();
  map.innerHTML = UNITS_DATA.sections.map(section => `
    <section class="course-group">
      <h3 class="course-group-title">${section.title[currentLang]}</h3>
      <div class="unit-grid">
        ${section.units.map(unit => unitCard(unit, progress)).join('')}
      </div>
    </section>
  `).join('');
  updateDashboard(progress);
}

function unitCard(unit, progress){
  const isAvailable = unit.status === 'available';
  const isComplete = Boolean(progress[String(unit.id)]?.completed);
  const tag = isAvailable ? 'a' : 'article';
  const href = isAvailable ? ` href="${unit.href}"` : '';
  const stateLabel = isComplete ? t('unit.completed') : isAvailable ? t('unit.available') : t('unit.planned');
  const stateArrow = isAvailable ? '<b aria-hidden="true">→</b>' : '<b aria-hidden="true">·</b>';
  return `<${tag}${href} class="unit-card ${isAvailable ? 'available' : 'is-planned'} ${isComplete ? 'complete' : ''}">
    <span class="unit-number">UNIT ${String(unit.id).padStart(2,'0')}</span>
    <h3>${unit.title[currentLang]}</h3>
    <div class="unit-card-footer"><span>${stateLabel}</span>${stateArrow}</div>
  </${tag}>`;
}

function updateDashboard(progress){
  const units = allUnits();
  const available = units.filter(unit => unit.status === 'available');
  const completed = available.filter(unit => progress[String(unit.id)]?.completed);
  const next = available.find(unit => !progress[String(unit.id)]?.completed);
  const total = units.length;
  document.getElementById('availableUnits').textContent = available.length;
  document.getElementById('completedUnits').textContent = completed.length;
  document.getElementById('totalUnits').textContent = total;
  document.getElementById('progressFill').style.width = `${available.length ? (completed.length / available.length) * 100 : 0}%`;
  document.getElementById('studyStatus').textContent = replaceTokens(t('progress.status'), {done:completed.length, available:available.length});
  document.getElementById('nextUnitNote').textContent = next
    ? replaceTokens(t('progress.next'), {unit:String(next.id).padStart(2,'0'), title:next.title[currentLang]})
    : t('progress.done');
  const continueUnit = document.getElementById('continueUnit');
  if(continueUnit && next) continueUnit.href = next.href;
}

function renderCycleDetail(node){
  activeCycle = node;
  const detail = document.getElementById('cycleDetail');
  if(!detail) return;
  const colorClass = node === 'condenser' ? 'high' : node === 'evaporator' ? 'low' : 'mixed';
  detail.innerHTML = `<div class="cycle-detail-head ${colorClass}">${t(`cycle.${node}.name`)}</div>
    <p class="cycle-detail-role">${t(`cycle.${node}.role`)}</p>
    <p class="cycle-detail-text">${t(`cycle.${node}.text`)}</p>`;
  document.querySelectorAll('[data-cycle]').forEach(button => button.classList.toggle('active', button.dataset.cycle === node));
}

function bindCycle(){
  document.querySelectorAll('[data-cycle]').forEach(button => {
    button.addEventListener('click', () => renderCycleDetail(button.dataset.cycle));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  bindLanguageSwitch();
  bindCycle();
  applyLanguage(currentLang);
});
