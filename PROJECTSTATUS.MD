# JOSIMAR PALCZUK — HVAC Study Guide — Status do Projeto

> **Nome oficial do Claude Project:** `JOSIMAR PALCZUK- HVAC Study guide`
>
> **Como usar este arquivo:** cole/suba este arquivo no início de qualquer conversa nova sobre o projeto (ou, melhor, coloque no Knowledge Base do Claude Project com esse nome). Ele contém tudo que já foi decidido, construído, corrigido e o que falta fazer. Sempre que uma unidade nova for concluída, **atualize este arquivo** (não crie um novo) antes de arquivar a conversa.

---

## 1. O que é o projeto

Site de estudos pessoal em HTML/CSS/JS estático (sem build tools, sem framework), hospedado no GitHub Pages, para acompanhar:

- O programa **Basic Air Conditioning, Heating & Refrigeration Certificate (C35100)** da **Fayetteville Technical Community College**.
- O livro-texto **Refrigeration & Air Conditioning Technology** (Whitman, Johnson, Tomczyk & Silberstein), usado como base de resumos + quiz, unidade por unidade.
- A disciplina **AHR 110 – Intro to Refrigeration**, que tem seu próprio módulo de aprofundamento.

O site é **bilíngue (PT-BR / EN)** com toggle no topo, e usa uma identidade visual de "manual de campo" baseada no manifold gauge (manômetro de refrigeração): azul = lado de baixa pressão, vermelho = lado de alta pressão, âmbar = segurança/regulamentação.

---

## 2. Estrutura de arquivos atual

```
fieldcraft/
├── index.html          → página inicial (ciclo de refrigeração animado + menu de unidades)
├── styles.css           → CSS compartilhado (topbar, sidenav, cores, tipografia, ciclo animado)
├── script.js             → i18n (PT/EN), lógica do ciclo de refrigeração, renderização do menu de unidades
├── units-data.js          → dados do menu de unidades (sumário do livro, bilíngue) — const UNITS_DATA = {...}
│
├── unit-01.html            → página da Unidade 1 (resumo + quiz)
├── unit-02.html            → página da Unidade 2 (resumo + quiz)
├── unit-03.html            → página da Unidade 3 (resumo + quiz)
├── unit.css                 → CSS específico das páginas de unidade (cards de resumo, quiz)
├── unit.js                   → lógica da página de unidade (renderiza resumo + quiz a partir de window.CURRENT_UNIT_DATA — genérico, não fixo em UNIT1_DATA)
├── unit1-data.js               → conteúdo da Unidade 1, bilíngue (resumos + 25 perguntas de quiz) — const UNIT1_DATA = {...}
├── unit2-data.js               → conteúdo da Unidade 2, bilíngue (resumos + 25 perguntas de quiz) — const UNIT2_DATA = {...}
├── unit3-data.js               → conteúdo da Unidade 3, bilíngue (resumos + 25 perguntas de quiz) — const UNIT3_DATA = {...}
│
└── ahr110/                      → módulo separado, aprofundamento da disciplina AHR 110 (SÓ EM PORTUGUÊS por ora)
    ├── index.html
    ├── styles.css
    ├── script.js
    └── data.json                  → conteúdo dos itens 2–11 do syllabus do AHR 110
```

**Padrão para criar as próximas unidades (Unit 4, 5...):**
1. Duplicar `unit-03.html` → `unit-04.html` (trocar o `<title>`, o `<script src="unit3-data.js">` para `unit4-data.js`, e a linha `window.CURRENT_UNIT_DATA = UNIT3_DATA;` para `UNIT4_DATA`).
2. Criar `unit4-data.js` seguindo exatamente a mesma estrutura de `unit1-data.js` / `unit2-data.js` / `unit3-data.js` (ver seção 5 abaixo).
3. Em `units-data.js`, mudar o `status` da unidade de `"planned"` para `"available"` e o `href` para `unit-04.html`.
4. **Não é mais necessário editar `unit.js`** — desde a Unidade 2, ele lê `window.CURRENT_UNIT_DATA` de forma genérica (ver seção 6, "Concluído").

---

## 3. Decisões de design (não mudar sem necessidade)

- **Paleta:** fundo quase-preto (`#0b0f14`), painéis (`#131a22`), azul lado-de-baixa (`#3fa9f5`), vermelho lado-de-alta (`#e2453c`), âmbar segurança (`#f0a63a`).
- **Tipografia:** Oswald (títulos/display), Inter (corpo de texto), IBM Plex Mono (dados técnicos, rótulos, valores).
- **Motivo visual recorrente:** manifold gauge — qualquer elemento que precise indicar "lado de baixa/alta pressão" usa esse código de cor (azul/vermelho).
- **Arquitetura de dados:** todo conteúdo textual fica em arquivos `.js` que exportam uma `const` com objeto JSON (não `fetch()` de `.json` puro — ver seção 4, bug #2, o motivo).
- **Todo texto bilíngue** é armazenado como `{ "pt": "...", "en": "..." }` em cada campo relevante do JSON — nunca strings soltas.

---

## 4. Bugs encontrados e corrigidos (não repetir)

1. **`fetch()` de JSON local não funciona ao abrir o HTML direto (`file://`)** — navegadores bloqueiam por CORS. Corrigido convertendo todo `.json` em `.js` com `const NOME = {...};`, carregado via `<script>` normal. **Lição:** nunca usar `fetch()` para dados locais neste projeto; sempre `const` em arquivo `.js`.

2. **Troca de idioma na Unit 1 não atualizava os resumos** — a função `renderUnits()` (compartilhada) tentava escrever em `#unitsNote`, um elemento que só existe em `index.html`, não em `unit-01.html`. Isso lançava um erro no meio da função `applyLanguage()`, interrompendo a execução antes de chegar na parte que re-renderiza o conteúdo da unidade. **Lição:** funções compartilhadas entre páginas com HTML ligeiramente diferente devem sempre checar `if(elemento)` antes de manipular DOM.

3. **Menu lateral com aparência diferente entre `index.html` e `unit-01.html`** — as duas páginas carregam `styles.css`, mas `unit-01.html` também carrega `unit.css`. As duas folhas de estilo tinham classes com o **mesmo nome** (`.unit-section`, `.unit-section-title`) usadas para coisas visualmente diferentes (uma no menu lateral, outra nos cards de resumo). Como `unit.css` carrega depois, suas regras vencem e "vazam" para o menu lateral. **Corrigido** renomeando as classes dos cards de resumo para `.summary-block`, `.summary-section-id`, `.summary-section-title`, `.summary-section-text`. **Lição:** ao criar CSS específico de uma página que compartilha `styles.css` com outras páginas, sempre prefixar/nomear as classes novas de forma única (ex: `summary-*` em vez de `unit-*`, que já é usado pelo menu). Antes de finalizar qualquer novo CSS, rodar um diff de nomes de classe entre os dois arquivos.

4. **Quiz em lista única enorme** — os 25 quizzes apareciam todos empilhados na tela. Corrigido reescrevendo para modo *stepper* (uma pergunta por vez, barra de progresso, botão "Próxima →", tela de resultado final com placar e botão de refazer).

5. **`unit.js` estava travado em `UNIT1_DATA`** — ao criar a Unidade 2, ficou claro que isso obrigaria a editar `unit.js` a cada unidade nova. **Corrigido** generalizando `loadUnitData()` para ler `window.CURRENT_UNIT_DATA` em vez da constante fixa. Cada `unit-0N.html` agora define essa variável logo após carregar seu `unitN-data.js` (`<script>window.CURRENT_UNIT_DATA = UNITN_DATA;</script>`) e antes de carregar `unit.js`. **Lição:** ao adicionar a Unidade 3 em diante, `unit.js` não precisa mais ser tocado.

---

## 5. Estrutura de dados de uma unidade (`unitN-data.js`)

Todo conteúdo de unidade segue este formato (ver `unit1-data.js` como referência completa):

```js
const UNITN_DATA = {
  meta: { eyebrow: {pt,en}, title: {pt,en}, subtitle: {pt,en} },
  safety: [ {pt,en}, ... ],
  sections: [
    {
      id: "N.1",
      title: {pt,en},
      text: {pt,en},              // resumo em tom "copywriter", não paráfrase mecânica do livro
      keyValues: [ {label:{pt,en}, value:{pt,en}}, ... ]  // fórmulas, números, referências rápidas
    },
    ...
  ],
  quiz: [
    {
      id: "q1",
      prompt: {pt,en},
      options: [ {id:"a", text:{pt,en}}, ... ],
      correct: "b",
      explanation: {pt,en}
    },
    ...
  ]
};
```

**Regra de copyright:** os resumos são reescritos com linguagem própria (não parafraseando frase a frase o livro), e as perguntas de quiz são reformuladas com palavras próprias a partir das perguntas de revisão do capítulo — nunca copiadas literalmente do livro-texto.

---

## 6. Concluído / Próximos passos

**Concluído:**
- [x] Generalizar `unit.js` para não depender de `UNIT1_DATA` fixo — agora lê `window.CURRENT_UNIT_DATA`, definido individualmente por cada `unit-0N.html`.
- [x] Unidade 2 (Matéria e Energia) criada — `unit-02.html` + `unit2-data.js`, 14 seções de resumo + 25 perguntas de quiz, bilíngue PT/EN.
- [x] Unidade 3 (Refrigeração e Refrigerantes) criada — `unit-03.html` + `unit3-data.js`, 17 seções de resumo + 25 perguntas de quiz, bilíngue PT/EN.
- [x] `units-data.js` atualizado — status das Unidades 2 e 3 mudado de `planned` para `available`.

**Pendências:**
- [ ] Criar `unit-04.html` + `unit4-data.js` quando o conteúdo da Unidade 4 (Práticas Gerais de Segurança) for enviado.
- [ ] Considerar traduzir o módulo AHR 110 (`ahr110/`) para bilíngue no futuro — hoje ele é só PT-BR (decisão consciente de escopo, não pendência urgente).
- [ ] Manter este arquivo (`PROJECT-STATUS.md`) atualizado a cada unidade concluída.

---

## 7. Como retomar numa conversa nova

Ao colar este arquivo numa conversa nova, diga algo como:; "Aqui está o status do projeto Fieldcraft. Vou mandar o conteúdo da Unit N agora — crie o resumo + quiz seguindo exatamente o mesmo padrão da Unit 1." E anexe o texto/PDF do capítulo do livro.