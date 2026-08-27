# HVACR Study Base

Base estática e bilíngue (PT-BR / EN) para estudos de HVACR. Não há framework nem etapa de compilação: basta abrir com um servidor local simples ou publicar os arquivos em uma hospedagem estática.

## Como a nova estrutura funciona

- `index.html` é o painel inicial e o mapa do curso.
- `unit.html?unit=01` é a página única que renderiza qualquer unidade disponível.
- `units-data.js` é o mapa do curso: título, seção, status e link de cada unidade.
- `unit1-data.js`, `unit2-data.js` e `unit3-data.js` guardam somente o conteúdo de cada unidade.
- `templates/unit-data.template.js` é o modelo para a próxima unidade.
- `unit-01.html`, `unit-02.html` e `unit-03.html` permanecem como redirecionamentos para não quebrar links antigos.

## Publicar uma nova unidade

1. Copie `templates/unit-data.template.js` para a raiz e renomeie como `unit4-data.js` (ou o próximo número).
2. Preencha meta, segurança, seções, valores de referência e quiz nos dois idiomas.
3. Em `units-data.js`, altere a unidade correspondente para `"status": "available"` e defina `"href": "unit.html?unit=04"`.
4. Confira a unidade no navegador. Não é preciso criar outra página HTML nem editar `unit.js`.

## Regras de conteúdo

- Escreva resumos com linguagem própria; o site é material complementar, não reprodução do livro.
- Use números, regras e exigências regulatórias somente com fonte confiável e data de revisão.
- Dê preferência a exemplos de campo, checklists curtos e explicações que liguem causa, leitura e decisão.

## Testar localmente

Na pasta do projeto, execute `python -m http.server 8000` e abra `http://localhost:8000`.
