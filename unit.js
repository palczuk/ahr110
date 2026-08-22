/* Extends the shared i18n object from script.js with unit-page-only chrome strings. */
Object.assign(i18n.pt, {
  'unit.backHome': '← Voltar à página inicial',
  'unit.safety.title': 'Segurança primeiro',
  'unit.summary.title': 'Resumo',
  'unit.quiz.title': 'Quiz',
  'unit.quiz.sub': 'Baseado nas perguntas de revisão da Unidade 1 do livro-texto.',
  'quiz.correct': '✓ Correto.',
  'quiz.incorrect': '✕ Não é essa — a resposta certa está destacada.',
  'quiz.scoreLabel': 'Pontuação'
});
Object.assign(i18n.en, {
  'unit.backHome': '← Back to homepage',
  'unit.safety.title': 'Safety first',
  'unit.summary.title': 'Summary',
  'unit.quiz.title': 'Quiz',
  'unit.quiz.sub': 'Based on the Unit 1 review questions from the textbook.',
  'quiz.correct': '✓ Correct.',
  'quiz.incorrect': '✕ Not quite — the correct answer is highlighted.',
  'quiz.scoreLabel': 'Score'
});

let unitData = null;
let quizState = {}; // { qId: 'correct' | 'incorrect' }

async function loadUnitData(){
  const res = await fetch('unit1-data.json');
  unitData = await res.json();
  renderUnitPage();
}

function renderUnitPage(){
  if(!unitData) return;
  const lang = currentLang;

  document.getElementById('unitEyebrow').textContent = unitData.meta.eyebrow[lang];
  document.getElementById('unitTitle').textContent = unitData.meta.title[lang];
  document.getElementById('unitSubtitle').textContent = unitData.meta.subtitle[lang];
  document.title = `${unitData.meta.title[lang]} · Fieldcraft`;

  // Safety chips
  const safetyWrap = document.getElementById('safetyChips');
  safetyWrap.innerHTML = unitData.safety.map(s => `<span class="chip safety">⚠ ${s[lang]}</span>`).join('');

  // Summary sections
  const summaryWrap = document.getElementById('summarySections');
  const heading = summaryWrap.querySelector('.section-title');
  summaryWrap.innerHTML = '';
  summaryWrap.appendChild(heading);

  unitData.sections.forEach(sec => {
    const el = document.createElement('article');
    el.className = 'unit-section';
    const valuesHTML = (sec.keyValues && sec.keyValues.length)
      ? `<table class="values-table"><tbody>${sec.keyValues.map(v => `<tr><td>${v.label[lang]}</td><td>${v.value[lang]}</td></tr>`).join('')}</tbody></table>`
      : '';
    el.innerHTML = `
      <p class="unit-section-id">${sec.id}</p>
      <h3 class="unit-section-title">${sec.title[lang]}</h3>
      <p class="unit-section-text">${sec.text[lang]}</p>
      ${valuesHTML}
    `;
    summaryWrap.appendChild(el);
  });

  renderQuiz();
}

function renderQuiz(){
  const lang = currentLang;
  const wrap = document.getElementById('quizList');
  wrap.innerHTML = '';

  unitData.quiz.forEach(q => {
    const item = document.createElement('div');
    item.className = 'quiz-item';
    item.setAttribute('data-qid', q.id);

    const optionsHTML = q.options.map(opt => `
      <button class="quiz-option" data-value="${opt.id}">${opt.text[lang]}</button>
    `).join('');

    item.innerHTML = `
      <p class="quiz-question">${q.prompt[lang]}</p>
      <div class="quiz-options">${optionsHTML}</div>
      <p class="quiz-feedback"></p>
    `;
    wrap.appendChild(item);

    // Restore answered state if already answered
    const state = quizState[q.id];
    if(state){
      applyQuizAnswerUI(item, q, state.picked, lang);
    }
  });

  updateScoreUI();
  bindQuizOptions();
}

function applyQuizAnswerUI(item, q, picked, lang){
  item.querySelectorAll('.quiz-option').forEach(o => {
    o.disabled = true;
    if(o.getAttribute('data-value') === q.correct) o.classList.add('correct');
    if(o.getAttribute('data-value') === picked && picked !== q.correct) o.classList.add('incorrect');
  });
  const isCorrect = picked === q.correct;
  const feedback = item.querySelector('.quiz-feedback');
  feedback.textContent = `${t(isCorrect ? 'quiz.correct' : 'quiz.incorrect')} ${q.explanation[lang]}`;
}

function bindQuizOptions(){
  document.querySelectorAll('.quiz-item').forEach(item => {
    const qId = item.getAttribute('data-qid');
    const q = unitData.quiz.find(x => x.id === qId);
    item.querySelectorAll('.quiz-option').forEach(opt => {
      opt.addEventListener('click', () => {
        if(quizState[qId]) return; // already answered
        const picked = opt.getAttribute('data-value');
        quizState[qId] = { picked, correct: picked === q.correct };
        applyQuizAnswerUI(item, q, picked, currentLang);
        updateScoreUI();
      });
    });
  });
}

function updateScoreUI(){
  const total = unitData.quiz.length;
  const answered = Object.keys(quizState).length;
  const correct = Object.values(quizState).filter(s => s.correct).length;
  document.getElementById('quizScore').textContent =
    `${t('quiz.scoreLabel')}: ${correct}/${total} (${answered}/${total} ${currentLang === 'pt' ? 'respondidas' : 'answered'})`;
}

document.addEventListener('DOMContentLoaded', loadUnitData);