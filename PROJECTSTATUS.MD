# HVACR Study Base — status do projeto

## Objetivo

Material complementar de estudo para HVACR, baseado no programa de Basic Air Conditioning, Heating & Refrigeration da Fayetteville Technical Community College. O conteúdo é bilíngue (PT-BR / EN), escrito em linguagem própria e organizado para conectar teoria, instrumentos e prática em campo.

## Remodelação concluída em 2026-08-26

- A página inicial passou a funcionar como mapa de estudos, com progresso local, trilha por seções e um resumo interativo do ciclo de refrigeração.
- As unidades não têm mais páginas duplicadas. `unit.html?unit=01` renderiza a Unidade 1; o mesmo endereço funciona para qualquer nova unidade.
- As Unidades 1, 2 e 3 continuam disponíveis com seu conteúdo e quiz completos.
- Os links antigos `unit-01.html`, `unit-02.html` e `unit-03.html` redirecionam para a página nova, preservando links já compartilhados.
- O cartão quebrado do antigo Companion AHR 110 foi substituído por uma indicação honesta de “em preparação”.
- Foi criado o modelo `templates/unit-data.template.js` e um `README.md` com o fluxo de publicação de unidades futuras.

## Arquitetura atual

```
index.html                painel e mapa do curso
unit.html                 página reutilizável para todas as unidades
units-data.js             programa do curso, status e links
unitN-data.js             conteúdo bilíngue da unidade N
unit.js                   renderização genérica de conteúdo, quiz e progresso
styles.css / unit.css     estilos compartilhados e específicos da unidade
templates/                modelo para o próximo arquivo de conteúdo
```

## Próxima entrega recomendada

Criar a Unidade 4 — Práticas Gerais de Segurança. Ela é a continuação mais útil porque estabelece os hábitos que sustentam o restante de ferramentas, tubulação, evacuação, recuperação e carga.

## Checklist ao criar a próxima unidade

1. Copiar `templates/unit-data.template.js` para `unit4-data.js`.
2. Preencher o conteúdo em PT-BR e EN.
3. Alterar a Unidade 4 em `units-data.js` para `available` com `href: "unit.html?unit=04"`.
4. Conferir o fluxo da unidade, o quiz e a troca de idioma.
5. Atualizar este arquivo com a nova entrega e a fonte/data de informações regulatórias usadas.
