/*
  Nova unidade: copie este arquivo para a raiz como unit4-data.js,
  unit5-data.js e assim por diante. A página unit.html vai carregá-lo
  automaticamente a partir do parâmetro ?unit=04, ?unit=05 etc.
*/
window.CURRENT_UNIT_DATA = {
  meta: {
    eyebrow: { pt: 'Unidade 04 · Seção II', en: 'Unit 04 · Section II' },
    title: { pt: 'Título da unidade', en: 'Unit title' },
    subtitle: { pt: 'Uma frase que explica o foco da unidade.', en: 'One sentence explaining the unit focus.' }
  },
  safety: [
    { pt: 'Orientação de segurança em português.', en: 'Safety guidance in English.' }
  ],
  sections: [
    {
      id: '4.1',
      title: { pt: 'Primeiro conceito', en: 'First concept' },
      text: { pt: 'Explique com linguagem própria e conecte o tema ao trabalho em campo.', en: 'Explain in original language and connect the topic to field work.' },
      keyValues: [
        { label: { pt: 'Referência rápida', en: 'Quick reference' }, value: { pt: 'Valor ou fórmula', en: 'Value or formula' } }
      ]
    }
  ],
  quiz: [
    {
      id: 'q1',
      prompt: { pt: 'Pergunta de revisão.', en: 'Review question.' },
      options: [
        { id: 'a', text: { pt: 'Alternativa A', en: 'Option A' } },
        { id: 'b', text: { pt: 'Alternativa B', en: 'Option B' } }
      ],
      correct: 'a',
      explanation: { pt: 'Explique por que esta é a resposta correta.', en: 'Explain why this answer is correct.' }
    }
  ]
};
