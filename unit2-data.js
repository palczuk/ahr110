const UNIT2_DATA = {
  "meta": {
    "eyebrow": {
      "pt": "Unidade 02 · Seção I — Teoria do Calor",
      "en": "Unit 02 · Section I — Theory of Heat"
    },
    "title": {
      "pt": "Matéria e Energia",
      "en": "Matter and Energy"
    },
    "subtitle": {
      "pt": "Antes de calcular carga térmica ou dimensionar um motor, você precisa entender do que as coisas são feitas e como a energia se move entre elas. Esta unidade cobre massa, densidade, as leis dos gases e os fundamentos de trabalho, potência e energia elétrica — a caixa de ferramentas matemática por trás de cada cálculo que vem depois.",
      "en": "Before you can calculate a heat load or size a motor, you need to understand what things are made of and how energy moves between them. This unit covers mass, density, the gas laws, and the fundamentals of work, power, and electrical energy — the mathematical toolbox behind every calculation that follows."
    }
  },
  "safety": [
    {
      "pt": "Dispositivos que consomem energia podem causar lesões — sempre desenergize bombas, motores e outros equipamentos elétricos antes de trabalhar neles.",
      "en": "Power-consuming devices have the potential to cause injury — always de-energize pumps, motors, and other electrical devices before working on them."
    },
    {
      "pt": "Ao medir pressões, confirme que seus instrumentos de teste estão totalmente operacionais e devidamente calibrados antes de confiar numa leitura.",
      "en": "When measuring pressures, be sure your test instruments are fully operational and properly calibrated before trusting a reading."
    },
    {
      "pt": "Vazamentos de propano se acumulam perto do piso — por ser mais pesado que o ar — criando risco real de incêndio em porões e espaços baixos com pouca ventilação.",
      "en": "Propane leaks pool near the floor — since it's heavier than air — creating a real fire hazard in basements and low, poorly ventilated spaces."
    },
    {
      "pt": "Ao levantar equipamentos pesados, como um compressor, use técnica correta de levantamento para evitar lesões nas costas.",
      "en": "When lifting heavy equipment, such as a compressor, use proper lifting technique to avoid back injury."
    }
  ],
  "sections": [
    {
      "id": "2.1",
      "title": {
        "pt": "Matéria — os três jeitos que ela empurra",
        "en": "Matter — the three ways it pushes back"
      },
      "text": {
        "pt": "Matéria é qualquer coisa que ocupa lugar no espaço e tem massa — da água que sai do dreno do evaporador ao próprio ar que passa pela serpentina. O livro reconhece três estados no dia a dia do técnico: sólido, líquido e vapor (gás), e cada um se comporta de um jeito completamente diferente quando o assunto é pressão. Um sólido só empurra para baixo, na direção da gravidade. Um líquido empurra para baixo E para os lados — pense na água pressionando as paredes de um cano, com a pressão aumentando quanto mais fundo você vai. Já um gás não respeita direção nenhuma: ele se expande até preencher totalmente o recipiente, empurrando igualmente pra cima, pra baixo e pros lados. Essa diferença de comportamento é o motivo pelo qual o refrigerante se comporta de forma tão distinta dentro do evaporador (onde ferve e vira vapor) e dentro da linha de líquido (onde empurra as paredes do tubo como líquido).",
        "en": "Matter is anything that occupies space and has mass — from the condensate dripping out of an evaporator drain to the air moving across a coil. For a technician's day-to-day work, the book recognizes three states: solid, liquid, and vapor (gas), and each behaves completely differently when it comes to pressure. A solid only pushes downward, in the direction of gravity. A liquid pushes downward AND outward — think of water pressing against the walls of a pipe, with pressure increasing the deeper you go. A gas, on the other hand, respects no single direction at all: it expands to completely fill its container, pushing equally upward, downward, and outward. That behavioral difference is exactly why refrigerant acts so differently inside the evaporator (where it boils into vapor) versus inside the liquid line (where it presses against the tubing walls as a liquid)."
      },
      "keyValues": [
        { "label": { "pt": "Sólido", "en": "Solid" }, "value": { "pt": "Pressão apenas para baixo", "en": "Pressure downward only" } },
        { "label": { "pt": "Líquido", "en": "Liquid" }, "value": { "pt": "Pressão para baixo e para os lados", "en": "Pressure downward and outward" } },
        { "label": { "pt": "Gás / Vapor", "en": "Gas / Vapor" }, "value": { "pt": "Pressão em todas as direções", "en": "Pressure in all directions" } }
      ]
    },
    {
      "id": "2.2",
      "title": {
        "pt": "Massa e Peso — a mesma matéria, forças diferentes",
        "en": "Mass and Weight — same matter, different forces"
      },
      "text": {
        "pt": "Massa e peso parecem sinônimos no dia a dia, mas na oficina são coisas bem diferentes. Massa é a quantidade de matéria que existe num objeto — uma propriedade que não muda, não importa onde você esteja. Peso é a força que a gravidade exerce sobre essa massa (Peso = Massa × Gravidade), e por isso PODE mudar dependendo de onde o objeto está. O exemplo clássico: um astronauta pesa muito menos na Lua do que na Terra, porque a gravidade lunar é mais fraca — mas a massa dele, a quantidade de matéria no corpo, continua exatamente a mesma nos dois lugares. Na prática de HVACR você quase sempre trabalha com peso (a balança de carga de refrigerante mede peso, por exemplo), mas entender a diferença evita confusão na hora de aplicar fórmulas de física que dependem de massa, não de peso.",
        "en": "Mass and weight sound like synonyms in everyday speech, but in the shop they're quite different things. Mass is the amount of matter that exists in an object — a property that doesn't change no matter where you are. Weight is the force gravity exerts on that mass (Weight = Mass × Gravity), and because of that it CAN change depending on where the object sits. The classic example: an astronaut weighs far less on the Moon than on Earth, because lunar gravity is weaker — yet the astronaut's mass, the actual amount of matter in their body, stays exactly the same in both places. In HVACR practice you almost always work with weight (a refrigerant charging scale measures weight, for instance), but understanding the difference keeps you from getting tripped up when a physics formula calls for mass, not weight."
      },
      "keyValues": [
        { "label": { "pt": "Fórmula", "en": "Formula" }, "value": { "pt": "Peso = Massa × Gravidade", "en": "Weight = Mass × Gravity" } },
        { "label": { "pt": "O que não muda com a gravidade", "en": "What doesn't change with gravity" }, "value": { "pt": "Massa", "en": "Mass" } }
      ]
    },
    {
      "id": "2.3",
      "title": {
        "pt": "Densidade — o quão compacta é a matéria",
        "en": "Density — how packed the matter is"
      },
      "text": {
        "pt": "Densidade é a relação entre o peso de uma substância e o volume que ela ocupa (lb/ft³) — basicamente, o quão \"compacta\" é a matéria. A referência universal é a água: 62,4 lb/ft³. Qualquer coisa menos densa que isso flutua nela (madeira, gelo, óleo); qualquer coisa mais densa afunda (ferro, cobre, a maioria dos metais). Esse número também explica por que o gelo flutua na água líquida — mesma substância, mas o gelo é ligeiramente menos denso — e por que o óleo de compressor tende a se acumular no fundo ou boiar por cima de um refrigerante líquido, dependendo de qual dos dois é mais denso.",
        "en": "Density is the relationship between a substance's weight and the volume it occupies (lb/ft³) — basically, how \"packed\" the matter is. The universal reference is water: 62.4 lb/ft³. Anything less dense than that floats in it (wood, ice, oil); anything denser sinks (iron, copper, most metals). That number also explains why ice floats on liquid water — same substance, but ice is slightly less dense — and why compressor oil tends to settle at the bottom of, or float on top of, liquid refrigerant, depending on which of the two is denser."
      },
      "keyValues": [
        { "label": { "pt": "Densidade da água", "en": "Density of water" }, "value": { "pt": "62,4 lb/ft³", "en": "62.4 lb/ft³" } },
        { "label": { "pt": "Regra de flutuação", "en": "Floating rule" }, "value": { "pt": "Menos denso que a água flutua", "en": "Less dense than water floats" } }
      ]
    },
    {
      "id": "2.4",
      "title": {
        "pt": "Gravidade Específica — comparando tudo com a água",
        "en": "Specific Gravity — measuring everything against water"
      },
      "text": {
        "pt": "Gravidade específica (ou densidade relativa) é um número sem unidade que compara a densidade de qualquer substância com a densidade da água: Gravidade Específica = Densidade da Substância ÷ 62,4 lb/ft³. A regra de ouro é simples — acima de 1, afunda na água; abaixo de 1, flutua. É uma ferramenta rápida de comparação: em vez de decorar a densidade exata de cada material em lb/ft³, você guarda só um número relativo. Alumínio, por exemplo, tem densidade de 171 lb/ft³, o que dá uma gravidade específica de 2,74 — ou seja, é quase 3 vezes mais denso que a água.",
        "en": "Specific gravity (or relative density) is a unitless number that compares any substance's density to the density of water: Specific Gravity = Density of the Substance ÷ 62.4 lb/ft³. The golden rule is simple — above 1, it sinks in water; below 1, it floats. It's a fast comparison tool: instead of memorizing every material's exact density in lb/ft³, you just carry around one relative number. Aluminum, for example, has a density of 171 lb/ft³, which works out to a specific gravity of 2.74 — meaning it's almost three times denser than water."
      },
      "keyValues": [
        { "label": { "pt": "Fórmula", "en": "Formula" }, "value": { "pt": "GE = Densidade ÷ 62,4 lb/ft³", "en": "SG = Density ÷ 62.4 lb/ft³" } },
        { "label": { "pt": "GE > 1", "en": "SG > 1" }, "value": { "pt": "Afunda na água", "en": "Sinks in water" } },
        { "label": { "pt": "GE < 1", "en": "SG < 1" }, "value": { "pt": "Flutua na água", "en": "Floats in water" } }
      ]
    },
    {
      "id": "2.5",
      "title": {
        "pt": "Volume Específico — o inverso da densidade, com peso prático",
        "en": "Specific Volume — density's inverse, with real-world weight"
      },
      "text": {
        "pt": "Volume específico é o inverso exato da densidade: em vez de perguntar \"quanto pesa 1 ft³?\", você pergunta \"quanto espaço ocupa 1 libra?\" (ft³/lb). Densidade e volume específico sempre se multiplicam dando 1 — se você sabe um, calcula o outro na hora. Esse conceito ganha peso prático quando o assunto são gases combustíveis: o gás natural tem volume específico médio de cerca de 22 ft³/lb (gravidade específica ≈ 0,6) — mais leve que o ar (≈13,33 ft³/lb) — por isso tende a subir e se dissipar em caso de vazamento. O propano é o oposto: volume específico de só 8,62 ft³/lb (gravidade específica ≈ 1,6), mais pesado que o ar, o que faz com que se acumule perto do chão em vazamentos — um risco real de incêndio em porões e espaços baixos. Para quem projeta equipamento HVACR, o volume específico do ar também dita o dimensionamento de motores de ventilador, compressores e bombas: mover um gás mais \"inchado\" (maior volume específico) exige mais capacidade de deslocamento do que mover a mesma massa de um gás mais denso.",
        "en": "Specific volume is the exact inverse of density: instead of asking \"how much does 1 ft³ weigh?\", you ask \"how much space does 1 pound take up?\" (ft³/lb). Density and specific volume always multiply out to 1 — know one, and you can calculate the other instantly. This concept becomes very practical with fuel gases: natural gas has an average specific volume of about 22 ft³/lb (specific gravity ≈ 0.6) — lighter than air (≈13.33 ft³/lb) — which is why it tends to rise and dissipate in a leak. Propane is the opposite: a specific volume of just 8.62 ft³/lb (specific gravity ≈ 1.6), heavier than air, which makes it pool near the floor during a leak — a real fire hazard in basements and low spaces. For equipment designers, the specific volume of air also drives the sizing of fan motors, compressors, and pumps: moving a \"puffier\" gas (higher specific volume) demands more displacement capacity than moving the same mass of a denser one."
      },
      "keyValues": [
        { "label": { "pt": "Fórmula", "en": "Formula" }, "value": { "pt": "Volume Específico = 1 ÷ Densidade", "en": "Specific Volume = 1 ÷ Density" } },
        { "label": { "pt": "Gás natural", "en": "Natural gas" }, "value": { "pt": "≈22 ft³/lb (GE ≈0,6) — mais leve que o ar", "en": "≈22 ft³/lb (SG ≈0.6) — lighter than air" } },
        { "label": { "pt": "Propano", "en": "Propane" }, "value": { "pt": "≈8,62 ft³/lb (GE ≈1,6) — mais pesado que o ar", "en": "≈8.62 ft³/lb (SG ≈1.6) — heavier than air" } },
        { "label": { "pt": "Ar (referência)", "en": "Air (reference)" }, "value": { "pt": "≈13,33 ft³/lb", "en": "≈13.33 ft³/lb" } }
      ]
    },
    {
      "id": "2.6",
      "title": {
        "pt": "Leis dos Gases — a matemática dentro do compressor",
        "en": "Gas Laws — the math inside the compressor"
      },
      "text": {
        "pt": "As leis dos gases são a matemática por trás de tudo que acontece dentro de um compressor, e a regra de ouro para usá-las é: SEMPRE em escalas absolutas — pressão em psia, temperatura em Rankine (°F + 460) ou Kelvin. A Lei de Boyle diz que, a temperatura constante, pressão e volume andam em direções opostas (P₁V₁ = P₂V₂): dobre a pressão, o volume cai pela metade. A Lei de Charles tem duas versões — a pressão constante, volume e temperatura andam juntos (V₁/T₁ = V₂/T₂); a volume constante, pressão e temperatura andam juntos (P₁/T₁ = P₂/T₂). A Lei Geral dos Gases Perfeitos combina as duas, permitindo que pressão, volume e temperatura mudem ao mesmo tempo (P₁V₁/T₁ = P₂V₂/T₂) — é essa fórmula que resolve o problema clássico do compressor: gás comprimido do ponto morto inferior ao superior, com pressão, volume E temperatura mudando simultaneamente. Por fim, a Lei de Dalton diz que, numa mistura de gases que não reagem entre si, a pressão total é só a soma das pressões parciais de cada gás (Ptotal = P1 + P2 + ... + Pn).",
        "en": "The gas laws are the math behind everything happening inside a compressor, and the golden rule for using them is: ALWAYS work in absolute scales — pressure in psia, temperature in Rankine (°F + 460) or Kelvin. Boyle's Law says that at constant temperature, pressure and volume move in opposite directions (P₁V₁ = P₂V₂): double the pressure, and volume drops by half. Charles' Law comes in two flavors — at constant pressure, volume and temperature move together (V₁/T₁ = V₂/T₂); at constant volume, pressure and temperature move together (P₁/T₁ = P₂/T₂). The General Gas Law combines both, letting pressure, volume, and temperature all change at once (P₁V₁/T₁ = P₂V₂/T₂) — that's the formula that solves the classic compressor problem: gas compressed from bottom dead center to top dead center, with pressure, volume, AND temperature all shifting simultaneously. Finally, Dalton's Law states that in a mixture of non-reacting gases, the total pressure is simply the sum of each gas's partial pressure (Ptotal = P1 + P2 + ... + Pn)."
      },
      "keyValues": [
        { "label": { "pt": "Lei de Boyle", "en": "Boyle's Law" }, "value": { "pt": "P₁V₁ = P₂V₂ (T constante)", "en": "P₁V₁ = P₂V₂ (constant T)" } },
        { "label": { "pt": "Lei de Charles (P constante)", "en": "Charles' Law (constant P)" }, "value": { "pt": "V₁/T₁ = V₂/T₂", "en": "V₁/T₁ = V₂/T₂" } },
        { "label": { "pt": "Lei de Charles (V constante)", "en": "Charles' Law (constant V)" }, "value": { "pt": "P₁/T₁ = P₂/T₂", "en": "P₁/T₁ = P₂/T₂" } },
        { "label": { "pt": "Lei Geral dos Gases", "en": "General Gas Law" }, "value": { "pt": "P₁V₁/T₁ = P₂V₂/T₂", "en": "P₁V₁/T₁ = P₂V₂/T₂" } },
        { "label": { "pt": "Lei de Dalton", "en": "Dalton's Law" }, "value": { "pt": "Ptotal = P1 + P2 + ... + Pn", "en": "Ptotal = P1 + P2 + ... + Pn" } },
        { "label": { "pt": "Regra de ouro", "en": "Golden rule" }, "value": { "pt": "Sempre use psia e Rankine/Kelvin", "en": "Always use psia and Rankine/Kelvin" } }
      ]
    },
    {
      "id": "2.7",
      "title": {
        "pt": "Energia — tudo começa no Sol",
        "en": "Energy — it all starts with the Sun"
      },
      "text": {
        "pt": "Toda a energia que movimenta o setor de HVACR tem, em última instância, uma única origem: o Sol. A partir daí, ela chega até o equipamento por caminhos diretos ou indiretos. Um caminho direto é a queima de combustível virando calor imediatamente, como o gás natural sendo queimado dentro de uma fornalha. Um caminho indireto envolve várias conversões em sequência — gás natural gera vapor numa usina, o vapor gira uma turbina, a turbina gera eletricidade, e essa eletricidade finalmente vira calor numa resistência elétrica. Cada etapa dessas conversões perde um pouco de eficiência, e é justamente por isso que aquecimento elétrico direto costuma ser mais caro para o consumidor do que queimar o combustível localmente.",
        "en": "All the energy that powers the HVACR trade ultimately traces back to a single source: the Sun. From there, it reaches equipment through either a direct or indirect path. A direct path is fuel burning and turning straight into heat, like natural gas being combusted inside a furnace. An indirect path involves several conversions in sequence — natural gas generates steam at a power plant, the steam spins a turbine, the turbine generates electricity, and that electricity finally becomes heat inside a resistance element. Every one of those conversion steps loses a bit of efficiency, which is exactly why direct electric heating tends to cost the consumer more than burning the fuel locally."
      },
      "keyValues": [
        { "label": { "pt": "Fonte primária de toda energia", "en": "Primary source of all energy" }, "value": { "pt": "O Sol", "en": "The Sun" } },
        { "label": { "pt": "Caminho direto (exemplo)", "en": "Direct path (example)" }, "value": { "pt": "Gás natural → calor na fornalha", "en": "Natural gas → heat in furnace" } },
        { "label": { "pt": "Caminho indireto (exemplo)", "en": "Indirect path (example)" }, "value": { "pt": "Gás → vapor → turbina → eletricidade → calor", "en": "Gas → steam → turbine → electricity → heat" } }
      ]
    },
    {
      "id": "2.8",
      "title": {
        "pt": "Conservação da Energia — nada desaparece sem deixar rastro",
        "en": "Conservation of Energy — nothing vanishes without a trace"
      },
      "text": {
        "pt": "A lei da conservação de energia é uma das ideias mais poderosas da física, e ela é simples de enunciar: energia não pode ser criada nem destruída, só convertida de uma forma para outra. Isso importa na prática porque garante que toda energia que entra num sistema pode ser contabilizada em algum lugar — nada \"desaparece\". A energia química armazenada em combustíveis fósseis (óleo, gás, carvão) e em baterias é liberada por reação química e convertida em calor ou trabalho mecânico; ela não surge do nada nem some sem deixar rastro. Para o técnico, esse princípio é a base de qualquer auditoria energética: se um sistema consome X BTU de combustível mas entrega muito menos de aquecimento útil, a diferença não sumiu — ela virou perda (calor pela chaminé, ineficiência de queima, perdas de distribuição).",
        "en": "The law of conservation of energy is one of physics' most powerful ideas, and it's simple to state: energy can neither be created nor destroyed, only converted from one form to another. This matters in practice because it guarantees that every unit of energy entering a system can be accounted for somewhere — nothing \"disappears\". Chemical energy stored in fossil fuels (oil, gas, coal) and in batteries is released through chemical reaction and converted into heat or mechanical work; it doesn't spring from nowhere and it doesn't vanish without a trace. For a technician, this principle is the backbone of any energy audit: if a system consumes X Btu of fuel but delivers far less useful heating, that difference hasn't disappeared — it became loss (heat up the flue, combustion inefficiency, distribution losses)."
      },
      "keyValues": [
        { "label": { "pt": "Princípio", "en": "Principle" }, "value": { "pt": "Energia não se cria nem se destrói, só se transforma", "en": "Energy is neither created nor destroyed, only transformed" } },
        { "label": { "pt": "Energia química (exemplos)", "en": "Chemical energy (examples)" }, "value": { "pt": "Óleo, gás, carvão, baterias", "en": "Oil, gas, coal, batteries" } }
      ]
    },
    {
      "id": "2.9",
      "title": {
        "pt": "Energia Térmica — onde a Unidade 1 e a Unidade 2 se encontram",
        "en": "Thermal Energy — where Unit 1 and Unit 2 meet"
      },
      "text": {
        "pt": "Aqui a Unidade 1 e a Unidade 2 se encontram: temperatura é a intensidade do calor, enquanto calor (energia térmica) é a energia total que vem do movimento das moléculas de uma substância. E o fluxo é sempre numa única direção — do mais quente para o mais frio, nunca ao contrário, mesmo quando as duas temperaturas envolvidas estão abaixo de zero. Se uma substância está a 175°F e outra a 125°F, o calor flui da mais quente (175°F) para a mais fria (125°F) — o mesmo raciocínio vale se fossem −175°F e −125°F. Essa transferência só para completamente em um único ponto teórico: o zero absoluto, −460°F, onde todo movimento molecular cessa.",
        "en": "Here Unit 1 and Unit 2 meet: temperature is the intensity of heat, while heat (thermal energy) is the total energy coming from the molecular motion within a substance. And the flow always goes in a single direction — from warmer to cooler, never the reverse, even when both temperatures involved are below zero. If one substance sits at 175°F and another at 125°F, heat flows from the warmer one (175°F) to the cooler one (125°F) — the same logic holds even if they were −175°F and −125°F. That transfer only stops completely at one theoretical point: absolute zero, −460°F, where all molecular motion ceases."
      },
      "keyValues": [
        { "label": { "pt": "Direção do fluxo de calor", "en": "Direction of heat flow" }, "value": { "pt": "Sempre do mais quente para o mais frio", "en": "Always warmer to cooler" } },
        { "label": { "pt": "Ponto onde o movimento molecular cessa", "en": "Point where molecular motion stops" }, "value": { "pt": "Zero absoluto, −460°F", "en": "Absolute zero, −460°F" } }
      ]
    },
    {
      "id": "2.10",
      "title": {
        "pt": "Energia no Magnetismo — como um motor realmente gira",
        "en": "Energy in Magnetism — how a motor actually spins"
      },
      "text": {
        "pt": "Todo motor elétrico do seu sistema — do ventilador do evaporador ao compressor — depende de um único fenômeno físico: corrente elétrica fluindo por um fio gera um campo magnético ao redor dele. Dentro de um motor, vários desses campos magnéticos são organizados estrategicamente para interagir entre si, atraindo e repelindo o rotor de forma contínua e controlada. É essa interação magnética que converte energia elétrica em energia mecânica — o giro do eixo que aciona compressores, bombas e ventiladores. Entender esse princípio básico é o primeiro passo antes de estudar motores PSC, capacitores de partida e diagramas elétricos mais adiante no curso.",
        "en": "Every electric motor in your system — from the evaporator fan to the compressor itself — depends on one single physical phenomenon: electric current flowing through a wire generates a magnetic field around it. Inside a motor, many of these magnetic fields are strategically arranged to interact with each other, continuously and controllably attracting and repelling the rotor. That magnetic interaction is what converts electrical energy into mechanical energy — the shaft rotation that drives compressors, pumps, and fans. Understanding this basic principle is the first step before studying PSC motors, start capacitors, and wiring diagrams later in the course."
      },
      "keyValues": [
        { "label": { "pt": "Fenômeno-base", "en": "Underlying phenomenon" }, "value": { "pt": "Corrente elétrica gera campo magnético", "en": "Electric current generates a magnetic field" } },
        { "label": { "pt": "Conversão de energia", "en": "Energy conversion" }, "value": { "pt": "Elétrica → Mecânica (via magnetismo)", "en": "Electrical → Mechanical (via magnetism)" } }
      ]
    },
    {
      "id": "2.11",
      "title": {
        "pt": "Comprando Energia — a moeda de troca em BTU",
        "en": "Purchase of Energy — the Btu exchange rate"
      },
      "text": {
        "pt": "Quando você compra energia — seja gás natural, óleo combustível ou eletricidade — está pagando por uma quantidade específica de conteúdo calórico, e cada fonte tem sua própria \"moeda de troca\" em BTU. O gás natural rende, em média, cerca de 1.000 BTU por pé cúbico. O óleo combustível nº 2 (o mais comum em aquecimento residencial) rende cerca de 139.000 BTU por galão. Já a eletricidade tem uma conversão fixa e universal: 1 kWh = 3.413 BTU — não importa a concessionária, essa equivalência não muda, porque é física pura (a definição do próprio kWh), não uma tarifa.",
        "en": "When you buy energy — whether natural gas, fuel oil, or electricity — you're paying for a specific amount of heat content, and each source has its own \"exchange rate\" in Btu. Natural gas yields, on average, about 1,000 Btu per cubic foot. No. 2 fuel oil (the most common choice for residential heating) yields about 139,000 Btu per gallon. Electricity, meanwhile, has a fixed, universal conversion: 1 kWh = 3,413 Btu — no matter the utility company, that equivalence never changes, because it's pure physics (the definition of the kWh itself), not a rate."
      },
      "keyValues": [
        { "label": { "pt": "Gás natural", "en": "Natural gas" }, "value": { "pt": "≈1.000 BTU/ft³", "en": "≈1,000 Btu/ft³" } },
        { "label": { "pt": "Óleo combustível nº 2", "en": "No. 2 fuel oil" }, "value": { "pt": "≈139.000 BTU/galão", "en": "≈139,000 Btu/gallon" } },
        { "label": { "pt": "Eletricidade", "en": "Electricity" }, "value": { "pt": "1 kWh = 3.413 BTU", "en": "1 kWh = 3,413 Btu" } }
      ]
    },
    {
      "id": "2.12",
      "title": {
        "pt": "Energia Usada como Trabalho — força vezes distância, nada de tempo",
        "en": "Energy Used as Work — force times distance, no time involved"
      },
      "text": {
        "pt": "Trabalho, em física, tem uma definição bem mais estreita do que no dia a dia: é força aplicada multiplicada pela distância percorrida (Trabalho = Força × Distância), medido em pé-libras (ft-lb). O detalhe que mais gera confusão: trabalho NÃO depende do tempo. Levantar um compressor de 300 lb por 4 pés gasta exatamente 1.200 ft-lb de trabalho, seja você fazendo isso em 2 segundos ou em 2 minutos — a quantidade de trabalho realizado é idêntica. O que muda com o tempo não é o trabalho, é a potência necessária para realizá-lo.",
        "en": "Work, in physics, has a much narrower definition than in everyday speech: it's force applied multiplied by the distance traveled (Work = Force × Distance), measured in foot-pounds (ft-lb). The detail that trips people up the most: work does NOT depend on time. Lifting a 300-lb compressor 4 feet takes exactly 1,200 ft-lb of work, whether you do it in 2 seconds or 2 minutes — the amount of work performed is identical either way. What changes with time isn't the work itself, it's the power required to do it."
      },
      "keyValues": [
        { "label": { "pt": "Fórmula", "en": "Formula" }, "value": { "pt": "Trabalho = Força (lb) × Distância (ft)", "en": "Work = Force (lb) × Distance (ft)" } },
        { "label": { "pt": "Unidade", "en": "Unit" }, "value": { "pt": "pé-libra (ft-lb)", "en": "foot-pound (ft-lb)" } },
        { "label": { "pt": "Exemplo (300 lb, 4 ft)", "en": "Example (300 lb, 4 ft)" }, "value": { "pt": "1.200 ft-lb", "en": "1,200 ft-lb" } }
      ]
    },
    {
      "id": "2.13",
      "title": {
        "pt": "Potência — agora o tempo entra na conta",
        "en": "Power — now time enters the equation"
      },
      "text": {
        "pt": "Se trabalho não depende do tempo, potência é exatamente o oposto: é a taxa com que esse trabalho é realizado, medida em pé-libras por minuto (ft-lb/min). É aqui que o tempo finalmente entra na conta. A unidade prática mais usada no ofício é o horsepower (hp), definido como 1 hp = 33.000 ft-lb/min. Para calcular horsepower você precisa de três informações: a força aplicada (em libras), a distância percorrida (em pés) e o tempo gasto (em minutos) — junte as três e você tem a taxa completa de trabalho realizado.",
        "en": "If work doesn't depend on time, power is exactly the opposite: it's the rate at which that work gets done, measured in foot-pounds per minute (ft-lb/min). This is where time finally enters the equation. The most common practical unit in the trade is horsepower (hp), defined as 1 hp = 33,000 ft-lb/min. To calculate horsepower you need three pieces of information: the force applied (in pounds), the distance traveled (in feet), and the time it took (in minutes) — combine all three and you get the full rate of work performed."
      },
      "keyValues": [
        { "label": { "pt": "Definição", "en": "Definition" }, "value": { "pt": "Taxa de trabalho por tempo", "en": "Rate of work per time" } },
        { "label": { "pt": "1 horsepower (hp) =", "en": "1 horsepower (hp) =" }, "value": { "pt": "33.000 ft-lb/min", "en": "33,000 ft-lb/min" } },
        { "label": { "pt": "Três grandezas necessárias", "en": "Three quantities needed" }, "value": { "pt": "Força, distância, tempo", "en": "Force, distance, time" } }
      ]
    },
    {
      "id": "2.14",
      "title": {
        "pt": "Potência Elétrica — o Watt e a ponte com o horsepower",
        "en": "Electrical Power — the Watt and the bridge to horsepower"
      },
      "text": {
        "pt": "No mundo elétrico, a unidade base de potência é o watt (W), com 1 kW = 1.000 W. A ponte entre o mundo mecânico (horsepower) e o mundo elétrico (watts) é uma conversão fixa: 1 hp = 746 W. Duas fórmulas resolvem praticamente qualquer conversão de energia elétrica em calor que você vai precisar em campo: para transformar quilowatts em BTU/h, multiplique por 3.413 (kW × 3.413 = BTU/h); para o caminho inverso, divida o BTU/h por 3.413. Um aquecedor elétrico de 12 kW, por exemplo, entrega 12 × 3.413 = 40.956 BTU/h — é assim que você compara, na mesma unidade, um aquecedor elétrico com uma fornalha a gás.",
        "en": "In the electrical world, the base unit of power is the watt (W), with 1 kW = 1,000 W. The bridge between the mechanical world (horsepower) and the electrical world (watts) is a fixed conversion: 1 hp = 746 W. Two formulas handle practically every electrical-to-heat conversion you'll need in the field: to turn kilowatts into Btu/h, multiply by 3,413 (kW × 3,413 = Btu/h); for the reverse, divide Btu/h by 3,413. A 12-kW electric heater, for instance, delivers 12 × 3,413 = 40,956 Btu/h — that's how you compare an electric heater against a gas furnace using the same unit."
      },
      "keyValues": [
        { "label": { "pt": "1 kW =", "en": "1 kW =" }, "value": { "pt": "1.000 W", "en": "1,000 W" } },
        { "label": { "pt": "1 hp =", "en": "1 hp =" }, "value": { "pt": "746 W", "en": "746 W" } },
        { "label": { "pt": "kW → BTU/h", "en": "kW → Btu/h" }, "value": { "pt": "kW × 3.413", "en": "kW × 3,413" } },
        { "label": { "pt": "BTU/h → kW", "en": "Btu/h → kW" }, "value": { "pt": "BTU/h ÷ 3.413", "en": "Btu/h ÷ 3,413" } }
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "prompt": { "pt": "Segundo o livro, matéria é definida como qualquer substância que:", "en": "According to the book, matter is defined as any substance that:" },
      "options": [
        { "id": "a", "text": { "pt": "Tem cor", "en": "Has color" } },
        { "id": "b", "text": { "pt": "Ocupa espaço e possui massa", "en": "Occupies space and has mass" } },
        { "id": "c", "text": { "pt": "Tem textura", "en": "Has texture" } },
        { "id": "d", "text": { "pt": "Tem temperatura", "en": "Has temperature" } }
      ],
      "correct": "b",
      "explanation": { "pt": "Matéria é qualquer substância que ocupa lugar no espaço e possui massa.", "en": "Matter is any substance that occupies space and has mass." }
    },
    {
      "id": "q2",
      "prompt": { "pt": "Sólido, líquido e gás são chamados de:", "en": "Solid, liquid, and gas are known as:" },
      "options": [
        { "id": "a", "text": { "pt": "Leis dos gases", "en": "Gas laws" } },
        { "id": "b", "text": { "pt": "Volumes específicos", "en": "Specific volumes" } },
        { "id": "c", "text": { "pt": "Estados da matéria", "en": "States of matter" } },
        { "id": "d", "text": { "pt": "Combustíveis fósseis", "en": "Fossil fuels" } }
      ],
      "correct": "c",
      "explanation": { "pt": "Sólido, líquido e gás são os três estados mais comuns da matéria.", "en": "Solid, liquid, and gas are the most common states of matter." }
    },
    {
      "id": "q3",
      "prompt": { "pt": "Em que direção um sólido exerce força?", "en": "In what direction does a solid exert force?" },
      "options": [
        { "id": "a", "text": { "pt": "Para fora", "en": "Outward" } },
        { "id": "b", "text": { "pt": "Para cima", "en": "Upward" } },
        { "id": "c", "text": { "pt": "Para baixo", "en": "Downward" } },
        { "id": "d", "text": { "pt": "Para fora, para cima e para baixo", "en": "Outward, upward, and downward" } }
      ],
      "correct": "c",
      "explanation": { "pt": "Um sólido exerce força apenas para baixo, na direção da gravidade.", "en": "A solid exerts force only downward, in the direction of gravity." }
    },
    {
      "id": "q4",
      "prompt": { "pt": "Em que direção(ões) um líquido exerce força?", "en": "In what direction(s) does a liquid exert force?" },
      "options": [
        { "id": "a", "text": { "pt": "Para fora", "en": "Outward" } },
        { "id": "b", "text": { "pt": "Para cima", "en": "Upward" } },
        { "id": "c", "text": { "pt": "Para baixo", "en": "Downward" } },
        { "id": "d", "text": { "pt": "Para baixo e para fora", "en": "Downward and outward" } }
      ],
      "correct": "d",
      "explanation": { "pt": "Um líquido exerce força para baixo e para os lados (para fora), proporcional à profundidade.", "en": "A liquid exerts force downward and outward, proportional to depth." }
    },
    {
      "id": "q5",
      "prompt": { "pt": "Em que direção o vapor (gás) exerce pressão?", "en": "In what direction does vapor (gas) exert pressure?" },
      "options": [
        { "id": "a", "text": { "pt": "Para fora", "en": "Outward" } },
        { "id": "b", "text": { "pt": "Para cima", "en": "Upward" } },
        { "id": "c", "text": { "pt": "Para baixo", "en": "Downward" } },
        { "id": "d", "text": { "pt": "Para fora, para cima e para baixo", "en": "Outward, upward, and downward" } }
      ],
      "correct": "d",
      "explanation": { "pt": "Um gás preenche totalmente o recipiente, exercendo pressão igualmente em todas as direções.", "en": "A gas completely fills its container, exerting pressure equally in every direction." }
    },
    {
      "id": "q6",
      "prompt": { "pt": "O peso por unidade de volume de uma substância é chamado de:", "en": "The weight per unit volume of a substance is called:" },
      "options": [
        { "id": "a", "text": { "pt": "Massa", "en": "Mass" } },
        { "id": "b", "text": { "pt": "Densidade", "en": "Density" } },
        { "id": "c", "text": { "pt": "Trabalho", "en": "Work" } },
        { "id": "d", "text": { "pt": "Gravidade específica", "en": "Specific gravity" } }
      ],
      "correct": "b",
      "explanation": { "pt": "Densidade é definida como o peso por unidade de volume (lb/ft³).", "en": "Density is defined as weight per unit volume (lb/ft³)." }
    },
    {
      "id": "q7",
      "prompt": { "pt": "A densidade de uma substância comparada com a densidade da água é conhecida como:", "en": "The density of a substance compared to the density of water is known as:" },
      "options": [
        { "id": "a", "text": { "pt": "Gravidade específica", "en": "Specific gravity" } },
        { "id": "b", "text": { "pt": "Volume específico", "en": "Specific volume" } },
        { "id": "c", "text": { "pt": "Massa", "en": "Mass" } },
        { "id": "d", "text": { "pt": "Peso", "en": "Weight" } }
      ],
      "correct": "a",
      "explanation": { "pt": "Gravidade específica compara a densidade de qualquer substância com a densidade da água (62,4 lb/ft³).", "en": "Specific gravity compares any substance's density to the density of water (62.4 lb/ft³)." }
    },
    {
      "id": "q8",
      "prompt": { "pt": "O volume ocupado por 1 libra de um fluido é conhecido como:", "en": "The volume occupied by 1 pound of a fluid is known as:" },
      "options": [
        { "id": "a", "text": { "pt": "Gravidade específica", "en": "Specific gravity" } },
        { "id": "b", "text": { "pt": "Volume específico", "en": "Specific volume" } },
        { "id": "c", "text": { "pt": "Massa", "en": "Mass" } },
        { "id": "d", "text": { "pt": "Peso", "en": "Weight" } }
      ],
      "correct": "b",
      "explanation": { "pt": "Volume específico é o espaço (ft³) ocupado por 1 libra de um fluido.", "en": "Specific volume is the space (ft³) occupied by 1 pound of a fluid." }
    },
    {
      "id": "q9",
      "prompt": { "pt": "A densidade do tungstênio é 1.210 lb/ft³. Qual é o seu volume específico?", "en": "Tungsten has a density of 1,210 lb/ft³. What is its specific volume?" },
      "options": [
        { "id": "a", "text": { "pt": "0,0826 ft³/lb", "en": "0.0826 ft³/lb" } },
        { "id": "b", "text": { "pt": "0,00826 lb/ft³", "en": "0.00826 lb/ft³" } },
        { "id": "c", "text": { "pt": "0,000826 lb/ft³", "en": "0.000826 lb/ft³" } },
        { "id": "d", "text": { "pt": "0,000826 ft³/lb", "en": "0.000826 ft³/lb" } }
      ],
      "correct": "d",
      "explanation": { "pt": "Volume específico = 1 ÷ densidade = 1 ÷ 1.210 ≈ 0,000826 ft³/lb.", "en": "Specific volume = 1 ÷ density = 1 ÷ 1,210 ≈ 0.000826 ft³/lb." }
    },
    {
      "id": "q10",
      "prompt": { "pt": "O volume específico do latão vermelho é 0,001865 ft³/lb. Qual é a sua densidade?", "en": "Red brass has a specific volume of 0.001865 ft³/lb. What is its density?" },
      "options": [
        { "id": "a", "text": { "pt": "53,61 lb/ft³", "en": "53.61 lb/ft³" } },
        { "id": "b", "text": { "pt": "56,19 lb/ft³", "en": "56.19 lb/ft³" } },
        { "id": "c", "text": { "pt": "536,19 lb/ft³", "en": "536.19 lb/ft³" } },
        { "id": "d", "text": { "pt": "536,19 ft³/lb", "en": "536.19 ft³/lb" } }
      ],
      "correct": "c",
      "explanation": { "pt": "Densidade = 1 ÷ volume específico = 1 ÷ 0,001865 ≈ 536,19 lb/ft³.", "en": "Density = 1 ÷ specific volume = 1 ÷ 0.001865 ≈ 536.19 lb/ft³." }
    },
    {
      "id": "q11",
      "prompt": { "pt": "O alumínio tem densidade de 171 lb/ft³. Qual é a sua gravidade específica?", "en": "Aluminum has a density of 171 lb/ft³. What is its specific gravity?" },
      "options": [
        { "id": "a", "text": { "pt": "2,74", "en": "2.74" } },
        { "id": "b", "text": { "pt": "27,4", "en": "27.4" } },
        { "id": "c", "text": { "pt": "4,72", "en": "4.72" } },
        { "id": "d", "text": { "pt": "47,2", "en": "47.2" } }
      ],
      "correct": "a",
      "explanation": { "pt": "GE = 171 ÷ 62,4 ≈ 2,74.", "en": "SG = 171 ÷ 62.4 ≈ 2.74." }
    },
    {
      "id": "q12",
      "prompt": { "pt": "Quatro libras de um gás ocupam 10 ft³. Qual é a sua densidade?", "en": "Four pounds of a gas occupy 10 ft³. What is its density?" },
      "options": [
        { "id": "a", "text": { "pt": "0,4 ft³/lb", "en": "0.4 ft³/lb" } },
        { "id": "b", "text": { "pt": "0,4 lb/ft³", "en": "0.4 lb/ft³" } },
        { "id": "c", "text": { "pt": "4,0 lb/ft³", "en": "4.0 lb/ft³" } },
        { "id": "d", "text": { "pt": "4,0 ft³/lb", "en": "4.0 ft³/lb" } }
      ],
      "correct": "b",
      "explanation": { "pt": "Densidade = peso ÷ volume = 4 ÷ 10 = 0,4 lb/ft³.", "en": "Density = weight ÷ volume = 4 ÷ 10 = 0.4 lb/ft³." }
    },
    {
      "id": "q13",
      "prompt": { "pt": "Qual lei afirma que o volume de um gás varia inversamente com a pressão absoluta, mantida a temperatura constante?", "en": "Whose law states that the volume of a gas varies inversely with absolute pressure, as long as temperature stays constant?" },
      "options": [
        { "id": "a", "text": { "pt": "Lei de Charles", "en": "Charles' Law" } },
        { "id": "b", "text": { "pt": "Lei de Boyle", "en": "Boyle's Law" } },
        { "id": "c", "text": { "pt": "Lei de Newton", "en": "Newton's Law" } },
        { "id": "d", "text": { "pt": "Lei de Dalton", "en": "Dalton's Law" } }
      ],
      "correct": "b",
      "explanation": { "pt": "A Lei de Boyle governa a relação inversa entre pressão e volume à temperatura constante.", "en": "Boyle's Law governs the inverse relationship between pressure and volume at constant temperature." }
    },
    {
      "id": "q14",
      "prompt": { "pt": "A pressão constante, como o volume de um gás varia com a temperatura absoluta?", "en": "At constant pressure, how does a gas's volume vary with absolute temperature?" },
      "options": [
        { "id": "a", "text": { "pt": "Expande ao aquecer ou ao resfriar", "en": "Expands when heated or cooled" } },
        { "id": "b", "text": { "pt": "Permanece constante", "en": "Remains constant" } },
        { "id": "c", "text": { "pt": "Expande ao resfriar ou contrai ao aquecer", "en": "Expands when cooled or contracts when heated" } },
        { "id": "d", "text": { "pt": "Expande ao aquecer ou contrai ao resfriar", "en": "Expands when heated or contracts when cooled" } }
      ],
      "correct": "d",
      "explanation": { "pt": "Pela Lei de Charles, a pressão constante, volume e temperatura absoluta variam na mesma direção.", "en": "By Charles' Law, at constant pressure, volume and absolute temperature vary in the same direction." }
    },
    {
      "id": "q15",
      "prompt": { "pt": "Qual lei afirma que a pressão total de uma mistura confinada de gases é a soma das pressões de cada gás na mistura?", "en": "Whose law states that the total pressure of a confined mixture of gases is the sum of the pressures of each gas in the mixture?" },
      "options": [
        { "id": "a", "text": { "pt": "Charles", "en": "Charles" } },
        { "id": "b", "text": { "pt": "Boyle", "en": "Boyle" } },
        { "id": "c", "text": { "pt": "Newton", "en": "Newton" } },
        { "id": "d", "text": { "pt": "Dalton", "en": "Dalton" } }
      ],
      "correct": "d",
      "explanation": { "pt": "A Lei de Dalton das pressões parciais soma a contribuição de cada gás na mistura.", "en": "Dalton's Law of partial pressures sums the contribution of each gas in the mixture." }
    },
    {
      "id": "q16",
      "prompt": { "pt": "Quais são os dois tipos de energia mais usados/considerados na indústria de HVACR?", "en": "What are the two types of energy most frequently used or considered in this industry?" },
      "options": [
        { "id": "a", "text": { "pt": "Solar e combustíveis fósseis", "en": "Solar and fossil fuels" } },
        { "id": "b", "text": { "pt": "Nuclear e eólica", "en": "Nuclear and wind" } },
        { "id": "c", "text": { "pt": "Nuclear e solar", "en": "Nuclear and solar" } },
        { "id": "d", "text": { "pt": "Eólica e solar", "en": "Wind and solar" } }
      ],
      "correct": "a",
      "explanation": { "pt": "Solar e combustíveis fósseis são as duas fontes de energia mais consideradas no setor.", "en": "Solar and fossil fuels are the two energy sources most considered in the trade." }
    },
    {
      "id": "q17",
      "prompt": { "pt": "A taxa de tempo em que o trabalho é realizado é chamada de:", "en": "The time rate of doing work is called:" },
      "options": [
        { "id": "a", "text": { "pt": "Peso", "en": "Weight" } },
        { "id": "b", "text": { "pt": "Distância", "en": "Distance" } },
        { "id": "c", "text": { "pt": "Potência", "en": "Power" } },
        { "id": "d", "text": { "pt": "Força", "en": "Force" } }
      ],
      "correct": "c",
      "explanation": { "pt": "Potência é, por definição, a taxa de tempo em que o trabalho é realizado.", "en": "Power is, by definition, the time rate of doing work." }
    },
    {
      "id": "q18",
      "prompt": { "pt": "Força multiplicada por distância é usada para determinar:", "en": "Force multiplied by distance is used to determine:" },
      "options": [
        { "id": "a", "text": { "pt": "Peso", "en": "Weight" } },
        { "id": "b", "text": { "pt": "Trabalho", "en": "Work" } },
        { "id": "c", "text": { "pt": "Potência", "en": "Power" } },
        { "id": "d", "text": { "pt": "Volume", "en": "Volume" } }
      ],
      "correct": "b",
      "explanation": { "pt": "Trabalho = Força × Distância.", "en": "Work = Force × Distance." }
    },
    {
      "id": "q19",
      "prompt": { "pt": "Um compressor de ar-condicionado pesando 300 lb precisa ser levantado 4 pés para ser montado numa base. Quanto trabalho, em ft-lb, deve ser realizado?", "en": "An air-conditioning compressor weighing 300 lb has to be lifted 4 ft to be mounted on a base. How much work, in ft-lb, must be done?" },
      "options": [
        { "id": "a", "text": { "pt": "12.000 lb/ft³", "en": "12,000 lb/ft³" } },
        { "id": "b", "text": { "pt": "1.200 ft³/lb", "en": "1,200 ft³/lb" } },
        { "id": "c", "text": { "pt": "120 pé-libras", "en": "120 foot-pounds" } },
        { "id": "d", "text": { "pt": "1.200 pé-libras", "en": "1,200 foot-pounds" } }
      ],
      "correct": "d",
      "explanation": { "pt": "Trabalho = 300 lb × 4 ft = 1.200 ft-lb.", "en": "Work = 300 lb × 4 ft = 1,200 ft-lb." }
    },
    {
      "id": "q20",
      "prompt": { "pt": "Quantos watts de energia elétrica equivalem a 1 hp?", "en": "How many watts of electrical energy are equal to 1 hp?" },
      "options": [
        { "id": "a", "text": { "pt": "1.492", "en": "1,492" } },
        { "id": "b", "text": { "pt": "746", "en": "746" } },
        { "id": "c", "text": { "pt": "74,6", "en": "74.6" } },
        { "id": "d", "text": { "pt": "373", "en": "373" } }
      ],
      "correct": "b",
      "explanation": { "pt": "1 hp = 746 W — a conversão fixa entre potência mecânica e elétrica.", "en": "1 hp = 746 W — the fixed conversion between mechanical and electrical power." }
    },
    {
      "id": "q21",
      "prompt": { "pt": "Qual unidade de energia a concessionária cobra do consumidor?", "en": "What unit of energy does the power company charge the consumer for?" },
      "options": [
        { "id": "a", "text": { "pt": "Quilowatt-hora", "en": "Kilowatt-hour" } },
        { "id": "b", "text": { "pt": "Watt-hora", "en": "Watt-hour" } },
        { "id": "c", "text": { "pt": "BTU/h", "en": "Btu/h" } },
        { "id": "d", "text": { "pt": "Therm", "en": "Therm" } }
      ],
      "correct": "a",
      "explanation": { "pt": "A concessionária cobra em kWh (quilowatt-hora), a unidade padrão de energia elétrica consumida.", "en": "The power company charges in kWh (kilowatt-hour), the standard unit of consumed electrical energy." }
    },
    {
      "id": "q22",
      "prompt": { "pt": "Se 3.000 ft³ de ar passam por uma serpentina de evaporador e são resfriados de 75°F para 55°F, qual é o volume de ar, em ft³, saindo da serpentina?", "en": "If 3,000 ft³ of air crosses an evaporator coil and is cooled from 75°F to 55°F, what is the volume of air, in ft³, leaving the coil?" },
      "options": [
        { "id": "a", "text": { "pt": "2.887,8 ft³", "en": "2,887.8 ft³" } },
        { "id": "b", "text": { "pt": "28,7 ft³", "en": "28.7 ft³" } },
        { "id": "c", "text": { "pt": "288,7 ft³", "en": "288.7 ft³" } },
        { "id": "d", "text": { "pt": "1.392,2 ft³", "en": "1,392.2 ft³" } }
      ],
      "correct": "a",
      "explanation": { "pt": "Pela Lei de Charles: V₂ = V₁ × (T₂/T₁ em Rankine) = 3.000 × (515/535) ≈ 2.887,8 ft³.", "en": "By Charles' Law: V₂ = V₁ × (T₂/T₁ in Rankine) = 3,000 × (515/535) ≈ 2,887.8 ft³." }
    },
    {
      "id": "q23",
      "prompt": { "pt": "Um gás é comprimido dentro do cilindro de um compressor. No ponto morto inferior, o gás está a 10 psig, 65°F e 10,5 pol³. Após a compressão, no ponto morto superior, o gás está a 180°F e ocupa 1,5 pol³. Qual é a nova pressão do gás, em psig?", "en": "A gas is compressed inside a compressor cylinder. At bottom dead center, the gas is at 10 psig, 65°F, and 10.5 in³. After compression, at top dead center, the gas is at 180°F and occupies 1.5 in³. What is the gas's new pressure, in psig?" },
      "options": [
        { "id": "a", "text": { "pt": "196", "en": "196" } },
        { "id": "b", "text": { "pt": "19,6", "en": "19.6" } },
        { "id": "c", "text": { "pt": "1,96", "en": "1.96" } },
        { "id": "d", "text": { "pt": "1.960", "en": "1,960" } }
      ],
      "correct": "a",
      "explanation": { "pt": "Usando a Lei Geral dos Gases com psia e Rankine, P₂ ≈ 210,8 psia − 14,7 ≈ 196 psig.", "en": "Using the General Gas Law with psia and Rankine, P₂ ≈ 210.8 psia − 14.7 ≈ 196 psig." }
    },
    {
      "id": "q24",
      "prompt": { "pt": "Quantos BTU/h seriam produzidos por um aquecedor elétrico de 12 kW?", "en": "How many Btu/h would be produced by a 12-kW electric heater?" },
      "options": [
        { "id": "a", "text": { "pt": "4.095 BTU/h", "en": "4,095 Btu/h" } },
        { "id": "b", "text": { "pt": "40.956 BTU/h", "en": "40,956 Btu/h" } },
        { "id": "c", "text": { "pt": "400.956 BTU/h", "en": "400,956 Btu/h" } },
        { "id": "d", "text": { "pt": "495 BTU/h", "en": "495 Btu/h" } }
      ],
      "correct": "b",
      "explanation": { "pt": "12 kW × 3.413 = 40.956 BTU/h.", "en": "12 kW × 3,413 = 40,956 Btu/h." }
    },
    {
      "id": "q25",
      "prompt": { "pt": "Quantos BTU de calor podem ser produzidos por 4 kWh de eletricidade?", "en": "How many Btu of heat can be produced by 4 kWh of electricity?" },
      "options": [
        { "id": "a", "text": { "pt": "136.520 BTU", "en": "136,520 Btu" } },
        { "id": "b", "text": { "pt": "136 BTU", "en": "136 Btu" } },
        { "id": "c", "text": { "pt": "1.365 BTU", "en": "1,365 Btu" } },
        { "id": "d", "text": { "pt": "13.652 BTU", "en": "13,652 Btu" } }
      ],
      "correct": "d",
      "explanation": { "pt": "4 kWh × 3.413 = 13.652 BTU.", "en": "4 kWh × 3,413 = 13,652 Btu." }
    }
  ]
};

window.CURRENT_UNIT_DATA = UNIT2_DATA;
