/* Extends the shared i18n object from script.js with unit-page-only strings. */
Object.assign(i18n.pt, {
  'unit.backHome': '← Voltar à página inicial',
  'unit.eyebrow': 'Unidade 01 · Seção I — Teoria do Calor',
  'unit.title': 'Calor e Pressão',
  'unit.subtitle': 'Espaço reservado para o resumo desta unidade. Preencha as seções abaixo conforme avança no livro.',
  'unit.summary.title': 'Resumo',
  'unit.summary.todo': '📝 Ainda não preenchido. Substitua este bloco pelos seus próprios resumos: conceitos-chave, fórmulas, tabelas e anotações de aula desta unidade.',
  'unit.quiz.title': 'Quiz',
  'unit.quiz.sub': 'Modelo de pergunta — duplique o bloco .quiz-item no HTML para adicionar mais.',
  'unit.quiz.q1': '1. O que acontece com a temperatura de um refrigerante em ebulição enquanto a pressão permanece constante?',
  'unit.quiz.q1a': 'Ela sobe continuamente',
  'unit.quiz.q1b': 'Ela permanece constante (temperatura de saturação)',
  'unit.quiz.q1c': 'Ela cai continuamente',
  'quiz.correct': '✓ Correto.',
  'quiz.incorrect': '✕ Não é essa. Tente novamente ou revise o resumo acima.'
});
Object.assign(i18n.en, {
  'unit.backHome': '← Back to homepage',
  'unit.eyebrow': 'Unit 01 · Section I — Theory of Heat',
  'unit.title': 'Heat and Pressure',
  'unit.subtitle': 'Placeholder for this unit\u2019s summary. Fill in the sections below as you work through the book.',
  'unit.summary.title': 'Summary',
  'unit.summary.todo': '📝 Not filled in yet. Replace this block with your own summaries: key concepts, formulas, tables, and class notes for this unit.',
  'unit.quiz.title': 'Quiz',
  'unit.quiz.sub': 'Sample question — duplicate the .quiz-item block in the HTML to add more.',
  'unit.quiz.q1': '1. What happens to a boiling refrigerant\u2019s temperature while pressure stays constant?',
  'unit.quiz.q1a': 'It keeps rising',
  'unit.quiz.q1b': 'It stays constant (saturation temperature)',
  'unit.quiz.q1c': 'It keeps dropping',
  'quiz.correct': '✓ Correct.',
  'quiz.incorrect': '✕ Not quite. Try again or review the summary above.'
});

function bindQuiz(){
  document.querySelectorAll('.quiz-item').forEach(item => {
    const answer = item.getAttribute('data-answer');
    const feedback = item.querySelector('.quiz-feedback');
    item.querySelectorAll('.quiz-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const isCorrect = opt.getAttribute('data-value') === answer;
        item.querySelectorAll('.quiz-option').forEach(o => {
          o.disabled = true;
          if(o.getAttribute('data-value') === answer) o.classList.add('correct');
        });
        if(!isCorrect) opt.classList.add('incorrect');
        feedback.textContent = t(isCorrect ? 'quiz.correct' : 'quiz.incorrect');
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', bindQuiz);