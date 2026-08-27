Object.assign(i18n.pt, {
  'unit.back': '← Visão geral',
  'unit.allUnits': 'Todas as unidades',
  'unit.loading': 'Carregando conteúdo da unidade…',
  'unit.notFound': 'Esta unidade ainda não está disponível. Escolha uma unidade publicada na trilha do curso.',
  'unit.safety': 'Segurança antes de tudo',
  'unit.summary': 'Resumo em campo',
  'unit.quiz': 'Teste o raciocínio',
  'unit.quizSub': 'Uma questão por vez, com explicação ao responder.',
  'unit.reviewNote': 'Progresso salvo somente neste navegador.',
  'unit.complete': 'Marcar como concluída',
  'unit.completed': '✓ Unidade concluída',
  'unit.undoComplete': 'Marcar como não concluída',
  'unit.previous': '← Unidade anterior',
  'unit.next': 'Próxima unidade →',
  'quiz.question': 'Pergunta',
  'quiz.score': 'Pontuação',
  'quiz.correct': '✓ Correto.',
  'quiz.incorrect': '✕ Reveja o destaque e a explicação.',
  'quiz.result': 'Resultado final',
  'quiz.retake': '↺ Refazer quiz',
  'quiz.retakeText': 'Você pode refazer este quiz quantas vezes quiser. O resultado não fica registrado no curso.'
});

Object.assign(i18n.en, {
  'unit.back': '← Overview',
  'unit.allUnits': 'All units',
  'unit.loading': 'Loading unit content…',
  'unit.notFound': 'This unit is not available yet. Choose a published unit from the course path.',
  'unit.safety': 'Safety comes first',
  'unit.summary': 'Field summary',
  'unit.quiz': 'Test the reasoning',
  'unit.quizSub': 'One question at a time, with an explanation after you answer.',
  'unit.reviewNote': 'Progress is saved only in this browser.',
  'unit.complete': 'Mark as complete',
  'unit.completed': '✓ Unit complete',
  'unit.undoComplete': 'Mark as incomplete',
  'unit.previous': '← Previous unit',
  'unit.next': 'Next unit →',
  'quiz.question': 'Question',
  'quiz.score': 'Score',
  'quiz.correct': '✓ Correct.',
  'quiz.incorrect': '✕ Review the highlight and explanation.',
  'quiz.result': 'Final result',
  'quiz.retake': '↺ Retake quiz',
  'quiz.retakeText': 'You can retake this quiz as many times as you want. The result is not stored in the course.'
});

let unitData = null;
let currentUnit = null;
let quizState = {};
let quizIndex = 0;

function requestedUnitId(){
  const id = Number(new URLSearchParams(window.location.search).get('unit'));
  return Number.isInteger(id) && id > 0 ? id : 1;
}

function findUnit(unitId){
  return allUnits().find(unit => Number(unit.id) === Number(unitId));
}

function loadUnit(){
  const unitId = requestedUnitId();
  currentUnit = findUnit(unitId);
  const loading = document.getElementById('unitLoading');
  if(!currentUnit || currentUnit.status !== 'available'){
    showUnitError(t('unit.notFound'));
    return;
  }
  const dataScript = document.createElement('script');
  dataScript.src = `unit${unitId}-data.js`;
  dataScript.onload = () => {
    unitData = window.CURRENT_UNIT_DATA;
    if(!unitData){
      showUnitError(t('unit.notFound'));
      return;
    }
    loading.hidden = true;
    document.getElementById('unitContent').hidden = false;
    renderUnitPage();
  };
  dataScript.onerror = () => showUnitError(t('unit.notFound'));
  document.head.appendChild(dataScript);
}

function showUnitError(message){
  const loading = document.getElementById('unitLoading');
  loading.textContent = message;
  loading.classList.add('error');
}

function renderUnitNavigation(){
  const available = allUnits().filter(unit => unit.status === 'available');
  const currentIndex = available.findIndex(unit => Number(unit.id) === Number(currentUnit.id));
  const previous = available[currentIndex - 1];
  const next = available[currentIndex + 1];
  const previousLink = document.getElementById('previousUnit');
  const nextLink = document.getElementById('nextUnit');
  if(previous){
    previousLink.href = previous.href;
    previousLink.textContent = `${t('unit.previous')}: ${previous.title[currentLang]}`;
    previousLink.hidden = false;
  } else previousLink.hidden = true;
  if(next){
    nextLink.href = next.href;
    nextLink.textContent = `${next.title[currentLang]}: ${t('unit.next')}`;
    nextLink.hidden = false;
  } else nextLink.hidden = true;
}

function renderUnitPage(){
  if(!unitData || !currentUnit) return;
  const lang = currentLang;
  document.getElementById('unitEyebrow').innerHTML = `<span class="signal-dot"></span> UNIT ${String(currentUnit.id).padStart(2,'0')} · ${currentUnit.section.title[lang]}`;
  document.getElementById('unitTitle').textContent = unitData.meta.title[lang];
  document.getElementById('unitSubtitle').textContent = unitData.meta.subtitle[lang];
  document.title = `${unitData.meta.title[lang]} · HVACR Study Base`;
  renderUnitNavigation();
  renderSafety();
  renderSummary();
  renderCompletionButton();
  renderQuiz();
}

function renderSafety(){
  document.getElementById('safetyChips').innerHTML = unitData.safety.map((item, index) => `
    <article class="safety-card"><span>⚠ 0${index + 1}</span>${item[currentLang]}</article>
  `).join('');
}

function renderSummary(){
  const container = document.getElementById('summarySections');
  container.innerHTML = unitData.sections.map(section => {
    const values = section.keyValues?.length ? `<table class="values-table"><tbody>${section.keyValues.map(value => `<tr><td>${value.label[currentLang]}</td><td>${value.value[currentLang]}</td></tr>`).join('')}</tbody></table>` : '';
    return `<article class="summary-block">
      <div class="summary-meta"><span>${section.id}</span><span>FIELD NOTE</span></div>
      <h3 class="summary-title">${section.title[currentLang]}</h3>
      <p class="summary-text">${section.text[currentLang]}</p>${values}
    </article>`;
  }).join('');
}

function renderCompletionButton(){
  const button = document.getElementById('completeUnit');
  const completed = Boolean(getProgress()[String(currentUnit.id)]?.completed);
  button.classList.toggle('is-complete', completed);
  button.textContent = completed ? t('unit.completed') : t('unit.complete');
  button.title = completed ? t('unit.undoComplete') : t('unit.complete');
  button.onclick = () => {
    setUnitCompleted(currentUnit.id, !completed);
    renderCompletionButton();
  };
}

function renderQuiz(){
  if(!unitData?.quiz?.length) return;
  if(quizIndex >= unitData.quiz.length) renderQuizSummary();
  else renderQuizQuestion(quizIndex);
  updateQuizScore();
}

function renderQuizQuestion(index){
  const question = unitData.quiz[index];
  const wrap = document.getElementById('quizList');
  wrap.innerHTML = `<article class="quiz-item" data-question="${question.id}">
    <p class="quiz-step-label">${t('quiz.question')} ${index + 1} / ${unitData.quiz.length}</p>
    <p class="quiz-question">${question.prompt[currentLang]}</p>
    <div class="quiz-options">${question.options.map(option => `<button class="quiz-option" type="button" data-value="${option.id}">${option.text[currentLang]}</button>`).join('')}</div>
    <p class="quiz-feedback"></p>
    <div class="quiz-nav"><button class="quiz-next-btn" id="quizNext" type="button" disabled>${index === unitData.quiz.length - 1 ? (currentLang === 'pt' ? 'Ver resultado →' : 'See results →') : t('unit.next')}</button></div>
  </article>`;
  const item = wrap.firstElementChild;
  const savedAnswer = quizState[question.id];
  if(savedAnswer){
    applyAnswerState(item, question, savedAnswer.picked);
    document.getElementById('quizNext').disabled = false;
  }
  item.querySelectorAll('.quiz-option').forEach(option => option.addEventListener('click', () => {
    if(quizState[question.id]) return;
    const picked = option.dataset.value;
    quizState[question.id] = { picked, correct:picked === question.correct };
    applyAnswerState(item, question, picked);
    document.getElementById('quizNext').disabled = false;
    updateQuizScore();
  }));
  document.getElementById('quizNext').addEventListener('click', () => {
    quizIndex += 1;
    renderQuiz();
    document.getElementById('quizList').scrollIntoView({block:'start'});
  });
  updateQuizProgress(index, unitData.quiz.length);
}

function applyAnswerState(item, question, picked){
  item.querySelectorAll('.quiz-option').forEach(option => {
    option.disabled = true;
    if(option.dataset.value === question.correct) option.classList.add('correct');
    if(option.dataset.value === picked && picked !== question.correct) option.classList.add('incorrect');
  });
  const isCorrect = picked === question.correct;
  item.querySelector('.quiz-feedback').textContent = `${t(isCorrect ? 'quiz.correct' : 'quiz.incorrect')} ${question.explanation[currentLang]}`;
}

function renderQuizSummary(){
  const correct = Object.values(quizState).filter(answer => answer.correct).length;
  document.getElementById('quizList').innerHTML = `<article class="quiz-item quiz-summary">
    <p class="quiz-step-label">${t('quiz.result')}</p>
    <p class="quiz-summary-score">${correct} / ${unitData.quiz.length}</p>
    <p class="quiz-summary-text">${t('quiz.retakeText')}</p>
    <button class="quiz-next-btn" type="button" id="quizRestart">${t('quiz.retake')}</button>
  </article>`;
  document.getElementById('quizRestart').addEventListener('click', () => {
    quizState = {};
    quizIndex = 0;
    renderQuiz();
  });
  updateQuizProgress(unitData.quiz.length, unitData.quiz.length);
}

function updateQuizProgress(index, total){
  document.getElementById('quizProgressFill').style.width = `${(index / total) * 100}%`;
}

function updateQuizScore(){
  const total = unitData.quiz.length;
  const answered = Object.keys(quizState).length;
  const correct = Object.values(quizState).filter(answer => answer.correct).length;
  document.getElementById('quizScore').textContent = `${t('quiz.score')}: ${correct}/${total} · ${answered}/${total}`;
}

window.renderUnitPage = renderUnitPage;
document.addEventListener('DOMContentLoaded', loadUnit);
