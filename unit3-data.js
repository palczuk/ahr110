const UNIT3_DATA = {
  "meta": {
    "eyebrow": {
      "pt": "Unidade 03 · Seção I — Teoria do Calor",
      "en": "Unit 03 · Section I — Theory of Heat"
    },
    "title": {
      "pt": "Refrigeração e Refrigerantes",
      "en": "Refrigeration and Refrigerants"
    },
    "subtitle": {
      "pt": "O capítulo que conecta tudo que veio antes: calor, pressão, massa e energia se juntam aqui para explicar como um sistema de refrigeração de verdade funciona — evaporador, compressor, condensador e dispositivo de expansão, além dos refrigerantes que circulam entre eles. Esta é a base de todo diagnóstico de campo que você vai fazer daqui pra frente.",
      "en": "The chapter that ties everything together: heat, pressure, mass, and energy all converge here to explain how a real refrigeration system actually works — evaporator, compressor, condenser, and metering device, plus the refrigerants that circulate between them. This is the foundation for every field diagnosis you'll make from here on out."
    }
  },
  "safety": [
    {
      "pt": "Áreas com potencial de vazamento de refrigerante devem ser adequadamente ventiladas.",
      "en": "Areas in which there is the potential for refrigerant leaks should be properly ventilated."
    },
    {
      "pt": "Precauções extras devem ser tomadas para garantir que nenhum vazamento de refrigerante ocorra perto de chama aberta.",
      "en": "Extra precautions should be taken to ensure that no refrigerant leaks occur near an open flame."
    },
    {
      "pt": "Refrigerantes são armazenados em recipientes pressurizados e devem ser manuseados com cuidado.",
      "en": "Refrigerants are stored in pressurized containers and should be handled with care."
    },
    {
      "pt": "Óculos de proteção e luvas devem ser usados ao verificar pressões do sistema ou ao trabalhar em equipamentos de ar-condicionado e refrigeração.",
      "en": "Eye protection and gloves should be worn when checking system pressures or when otherwise working on air-conditioning and refrigeration systems."
    },
    {
      "pt": "Só transfira refrigerantes de um sistema para recipientes aprovados pelo DOT.",
      "en": "Only transfer refrigerants from a system into DOT-approved containers."
    }
  ],
  "sections": [
    {
      "id": "3.1",
      "title": {
        "pt": "Categorias de Refrigeração — alta, média e baixa temperatura",
        "en": "Refrigeration Categories — high, medium, and low temperature"
      },
      "text": {
        "pt": "O termo \"refrigeração\" cobre tanto a conservação de alimentos quanto o conforto térmico (ar-condicionado) — e o princípio é sempre o mesmo: baixar a temperatura de uma substância desacelera o movimento molecular dentro dela, e é esse movimento mais lento que reduz a velocidade com que bactérias estragam o alimento. Abaixo de aproximadamente 0°F, praticamente nenhuma bactéria consegue se multiplicar. A partir daí, o livro organiza os sistemas de refrigeração em três faixas: sistemas de baixa temperatura (abaixo de 0°F, feitos para congelar produto), sistemas de média temperatura (entre 35°F e 45°F, os refrigeradores comuns, feitos para manter comida fresca) e sistemas de alta temperatura (a faixa do conforto térmico, tipicamente 68°F a 80°F — é aqui que entra o ar-condicionado). Vale lembrar que, historicamente, antes da refrigeração mecânica, as pessoas guardavam alimentos perecíveis no porão, num poço ou numa nascente — e as primeiras \"geladeiras\" eram literalmente caixas com gelo dentro (ice boxes), onde o gelo derretia absorvendo o calor da comida ao redor.",
        "en": "The term \"refrigeration\" covers both food preservation and comfort cooling (air-conditioning) — and the underlying principle is always the same: lowering a substance's temperature slows down the molecular motion inside it, and that slower motion is exactly what reduces the rate of food spoilage. Below roughly 0°F, virtually no spoilage bacteria can keep growing. From there, the book sorts refrigeration systems into three ranges: low-temperature systems (below 0°F, built to freeze product), medium-temperature systems (between 35°F and 45°F, ordinary refrigerators designed to keep food fresh), and high-temperature systems (the comfort-cooling range, typically 68°F to 80°F — this is where air-conditioning lives). Worth remembering: before mechanical refrigeration, people stored perishables in the basement, a well, or a spring — and the earliest \"refrigerators\" were literally boxes with ice in them (ice boxes), where the ice melted while absorbing heat from the food around it."
      },
      "keyValues": [
        { "label": { "pt": "Baixa temperatura", "en": "Low-temperature" }, "value": { "pt": "Abaixo de 0°F", "en": "Below 0°F" } },
        { "label": { "pt": "Média temperatura", "en": "Medium-temperature" }, "value": { "pt": "35°F a 45°F", "en": "35°F to 45°F" } },
        { "label": { "pt": "Alta temperatura (conforto)", "en": "High-temperature (comfort)" }, "value": { "pt": "68°F a 80°F", "en": "68°F to 80°F" } }
      ]
    },
    {
      "id": "3.2",
      "title": {
        "pt": "O que a Refrigeração Realmente Faz",
        "en": "What Refrigeration Actually Does"
      },
      "text": {
        "pt": "Refrigeração, na definição mais direta possível, é o processo de remover calor de onde ele não é bem-vindo e transferi-lo para onde ele não faz diferença. Numa geladeira doméstica, a sala fica entre 70°F e 90°F ao longo do ano, enquanto o compartimento de alimentos frescos precisa ficar perto de 35°F — e como o calor sempre flui naturalmente do mais quente para o mais frio, o calor da sala está constantemente tentando invadir a geladeira. Isso acontece por três caminhos: pelas paredes isoladas do gabinete (condução), toda vez que a porta é aberta (o ar frio, mais pesado, cai para fora e é substituído por ar quente que entra por cima) e quando comida ainda morna é colocada lá dentro. Por isso a regra prática: deixe a comida esfriar até a temperatura ambiente antes de guardá-la — cada grau que ela entra mais quente é calor extra que o sistema vai ter que bombear para fora depois.",
        "en": "Refrigeration, in the most direct possible definition, is the process of removing heat from a place where it isn't wanted and transferring it to a place where it makes little or no difference. In a household refrigerator, the room runs between 70°F and 90°F throughout the year, while the fresh-food compartment needs to stay near 35°F — and since heat always flows naturally from warmer to cooler, the heat in the room is constantly trying to invade the refrigerator. It gets in through three paths: through the insulated walls of the cabinet (conduction), every time the door is opened (the heavier cold air falls out and is replaced by warm air pouring in from the top), and whenever still-warm food is placed inside. Hence the practical rule: let food cool to room temperature before storing it — every degree it goes in hotter is extra heat the system will later have to pump back out."
      },
      "keyValues": [
        { "label": { "pt": "Direção do fluxo de calor", "en": "Direction of heat flow" }, "value": { "pt": "Sempre do mais quente para o mais frio", "en": "Always warmer to cooler" } },
        { "label": { "pt": "Três caminhos de infiltração de calor", "en": "Three heat-leak paths" }, "value": { "pt": "Paredes, porta aberta, alimento quente", "en": "Walls, open door, warm food" } }
      ]
    },
    {
      "id": "3.3",
      "title": {
        "pt": "Dimensionando Equipamento — a Tonelada de Refrigeração",
        "en": "Rating Refrigeration Equipment — the Ton"
      },
      "text": {
        "pt": "A capacidade dos equipamentos de refrigeração precisa de um sistema de medida padronizado para comparar produtos de fabricantes diferentes — e esse sistema, curiosamente, ainda carrega o nome de uma era pré-elétrica: a tonelada de refrigeração. A lógica vem de quando o gelo era literalmente a fonte de resfriamento. Derreter 1 lb de gelo a 32°F absorve 144 BTU (o calor latente de fusão). Uma tonelada de gelo (2.000 lb) absorve, portanto, 144 × 2.000 = 288.000 BTU. Se essa quantidade de gelo derrete em 24 horas, a taxa de transferência de calor é de 288.000 ÷ 24 = 12.000 BTU/h — e é exatamente essa taxa que define 1 tonelada de refrigeração (também expressa como 200 BTU/min). Um sistema de ar-condicionado que move calor a 24.000 BTU/h, por exemplo, é chamado de sistema de \"2 toneladas\" (24.000 ÷ 12.000 = 2).",
        "en": "Refrigeration equipment needs a standardized capacity rating system so products from different manufacturers can be compared — and that system, curiously, still carries the name of a pre-electric era: the ton of refrigeration. The logic dates back to when ice itself was the cooling source. Melting 1 lb of ice at 32°F absorbs 144 Btu (the latent heat of fusion). A ton of ice (2,000 lb) therefore absorbs 144 × 2,000 = 288,000 Btu. If that much ice melts over 24 hours, the rate of heat transfer works out to 288,000 ÷ 24 = 12,000 Btu/h — and that exact rate is what defines 1 ton of refrigeration (also expressed as 200 Btu/min). An air-conditioning system that moves heat at 24,000 Btu/h, for example, is called a \"2-ton\" system (24,000 ÷ 12,000 = 2)."
      },
      "keyValues": [
        { "label": { "pt": "Calor latente de fusão do gelo", "en": "Latent heat of fusion of ice" }, "value": { "pt": "144 BTU/lb", "en": "144 Btu/lb" } },
        { "label": { "pt": "1 tonelada de refrigeração", "en": "1 ton of refrigeration" }, "value": { "pt": "12.000 BTU/h (200 BTU/min)", "en": "12,000 Btu/h (200 Btu/min)" } },
        { "label": { "pt": "Exemplo", "en": "Example" }, "value": { "pt": "24.000 BTU/h = sistema de 2 toneladas", "en": "24,000 Btu/h = a 2-ton system" } }
      ]
    },
    {
      "id": "3.4",
      "title": {
        "pt": "Bombeando Calor Morro Acima",
        "en": "Pumping Heat Uphill"
      },
      "text": {
        "pt": "Pense no processo de refrigeração como bombear água de um vale até o topo de uma colina — é preciso trabalho e energia para isso acontecer, e essa energia precisa ser comprada. Bombear calor funciona da mesma forma: ele precisa ser empurrado \"ladeira acima\" na escala de temperatura, do compartimento gelado de 35°F até a sala de 70°F. Um sistema de ar-condicionado residencial trabalha com o mesmo princípio de um refrigerador doméstico: ele bombeia o calor de dentro da casa para fora, exatamente como a geladeira bombeia calor de dentro dela para a cozinha. E porque calor vaza continuamente para dentro da casa (assim como vaza para dentro da geladeira), o sistema precisa ter capacidade suficiente para bombear esse calor para fora mais rápido do que ele volta a entrar — senão os ocupantes vão sentir desconforto.",
        "en": "Think of the refrigeration process like pumping water from a valley up to the top of a hill — it takes work and energy to make that happen, and that energy has to be purchased. Pumping heat works the same way: it has to be pushed \"uphill\" on the temperature scale, from the 35°F cold compartment up to the 70°F room. A residential air-conditioning system runs on the same principle as a household refrigerator: it pumps heat from inside the house to the outside, exactly the way a refrigerator pumps heat from its interior into the kitchen. And because heat is continuously leaking into the house (just as it leaks into the refrigerator), the system needs enough capacity to pump that heat out faster than it leaks back in — otherwise the occupants will feel uncomfortable."
      },
      "keyValues": [
        { "label": { "pt": "Analogia", "en": "Analogy" }, "value": { "pt": "Bombear água morro acima = bombear calor", "en": "Pumping water uphill = pumping heat" } },
        { "label": { "pt": "Requisito de energia", "en": "Energy requirement" }, "value": { "pt": "Precisa ser comprada", "en": "Must be purchased" } }
      ]
    },
    {
      "id": "3.5",
      "title": {
        "pt": "Relação Temperatura/Pressão — a base de tudo",
        "en": "Temperature and Pressure Relationship — the foundation of everything"
      },
      "text": {
        "pt": "Este é, sem exagero, o conceito mais importante deste capítulo: o ponto de ebulição de um líquido não é fixo — ele muda conforme a pressão exercida sobre ele. Água pura ferve a 212°F ao nível do mar (29,92 pol. Hg / 14,696 psia). Suba uma montanha e a pressão atmosférica cai (cerca de 1 pol. Hg a cada 1.000 pés); em Denver, a ~5.000 pés, a água ferve a apenas 203,4°F. Já numa panela de pressão, elevar a pressão para cerca de 15 psi acima da atmosférica (30 psia) eleva o ponto de ebulição para 250°F. Se você conseguir controlar a pressão do vapor acima de um líquido, você controla a temperatura em que ele ferve — e é exatamente esse princípio que permite controlar as temperaturas de um sistema de refrigeração inteiro. Um experimento clássico ilustra isso: coloque água a 70°F dentro de um jarro de vidro selado com um vacuômetro, e reduza a pressão dentro do jarro até 0,739 pol. Hg — a água começa a ferver a 70°F, mesmo sem receber calor externo algum. Reduza ainda mais, até 0,248 pol. Hg (0,122 psia), e a água passa a ferver a 40°F — fria ao toque, mas fervendo. Quando esse líquido fervente é usado para absorver calor de um ambiente, chamamos essa substância de refrigerante.",
        "en": "This is, without exaggeration, the single most important concept in this chapter: a liquid's boiling point isn't fixed — it changes depending on the pressure exerted on it. Pure water boils at 212°F at sea level (29.92 in. Hg / 14.696 psia). Climb a mountain and atmospheric pressure drops (roughly 1 in. Hg per 1,000 ft); in Denver, at ~5,000 ft, water boils at just 203.4°F. In a pressure cooker, on the other hand, raising the pressure to about 15 psi above atmospheric (30 psia) raises the boiling point to 250°F. If you can control the vapor pressure above a liquid, you control the temperature at which it boils — and that exact principle is what lets a technician control the temperatures throughout an entire refrigeration system. A classic experiment illustrates this: place 70°F water inside a sealed glass jar fitted with a vacuum gauge, and lower the pressure inside the jar to 0.739 in. Hg — the water starts boiling at 70°F, with no external heat added at all. Lower it further, to 0.248 in. Hg (0.122 psia), and the water boils at 40°F — cold to the touch, yet boiling. When a boiling liquid is used this way to absorb heat from a space, we call that substance a refrigerant."
      },
      "keyValues": [
        { "label": { "pt": "Ebulição da água (nível do mar)", "en": "Water boiling (sea level)" }, "value": { "pt": "212°F a 29,92 pol. Hg", "en": "212°F at 29.92 in. Hg" } },
        { "label": { "pt": "Ebulição da água (Denver, ~5.000 pés)", "en": "Water boiling (Denver, ~5,000 ft)" }, "value": { "pt": "203,4°F a ~25 pol. Hg", "en": "203.4°F at ~25 in. Hg" } },
        { "label": { "pt": "Regra", "en": "Rule" }, "value": { "pt": "Pressão sobe → temperatura de ebulição sobe", "en": "Pressure up → boiling temperature up" } }
      ]
    },
    {
      "id": "3.6",
      "title": {
        "pt": "Os Quatro Componentes Básicos",
        "en": "The Four Basic Components"
      },
      "text": {
        "pt": "Todo sistema básico de refrigeração por compressão de vapor gira em torno de quatro componentes principais, cada um com um papel específico e indispensável: o evaporador (absorve calor para dentro do sistema), o compressor (bombeia o vapor carregado de calor, elevando sua pressão), o condensador (rejeita o calor do sistema para o ambiente externo) e o dispositivo de expansão (controla o fluxo de refrigerante para o evaporador). Esses quatro formam um ciclo fechado e repetitivo — uma vez completado, o sistema está pronto para repetir o ciclo indefinidamente, sem consumir o refrigerante.",
        "en": "Every basic vapor-compression refrigeration system revolves around four main components, each with a specific and indispensable role: the evaporator (absorbs heat into the system), the compressor (pumps the heat-laden vapor, raising its pressure), the condenser (rejects heat from the system to the outside environment), and the metering device (controls the flow of refrigerant into the evaporator). These four form a closed, repeating cycle — once one full cycle completes, the system is ready to repeat it over and over, without consuming the refrigerant."
      },
      "keyValues": [
        { "label": { "pt": "Evaporador", "en": "Evaporator" }, "value": { "pt": "Absorve calor", "en": "Absorbs heat" } },
        { "label": { "pt": "Compressor", "en": "Compressor" }, "value": { "pt": "Bombeia o vapor, eleva a pressão", "en": "Pumps the vapor, raises pressure" } },
        { "label": { "pt": "Condensador", "en": "Condenser" }, "value": { "pt": "Rejeita calor", "en": "Rejects heat" } },
        { "label": { "pt": "Dispositivo de expansão", "en": "Metering device" }, "value": { "pt": "Controla o fluxo de refrigerante", "en": "Controls refrigerant flow" } }
      ]
    },
    {
      "id": "3.7",
      "title": {
        "pt": "O Evaporador e o Superaquecimento",
        "en": "The Evaporator and Superheat"
      },
      "text": {
        "pt": "Pense no evaporador como uma \"esponja de calor\": assim como uma esponja seca absorve líquido porque tem pouca água nela, o evaporador absorve calor porque sua temperatura está mais baixa que a do meio a ser resfriado. O refrigerante entra na serpentina pela parte de baixo como uma mistura saturada — tipicamente 75% líquido e 25% vapor — e é alimentado por baixo de propósito, para garantir que nenhum líquido escape pelo topo sem antes virar vapor (líquido chegando ao compressor pode danificá-lo seriamente). Conforme flui pela serpentina absorvendo calor do ar, a proporção de vapor cresce até que, por volta de 90% do caminho, todo o líquido já virou vapor — esse é o ponto de vapor saturado. Qualquer calor absorvido depois desse ponto não gera mais vapor (já não há líquido para ferver): ele apenas aumenta a temperatura do vapor, criando superaquecimento. O superaquecimento é literalmente um seguro para o compressor — ele garante que só vapor, nunca líquido, está saindo do evaporador. O valor do superaquecimento é a diferença entre a temperatura real do refrigerante na saída do evaporador e a temperatura em que ele ferve: se o refrigerante ferve a 40°F e sai a 50°F, esse evaporador está operando com 10°F de superaquecimento.",
        "en": "Think of the evaporator as a \"heat sponge\": just as a dry sponge soaks up liquid because it holds little water, the evaporator soaks up heat because its temperature runs lower than the medium being cooled. Refrigerant enters the coil from the bottom as a saturated mixture — typically 75% liquid, 25% vapor — and it's deliberately fed from the bottom to make sure no liquid escapes out the top before turning to vapor (liquid reaching the compressor can seriously damage it). As it flows through the coil absorbing heat from the air, the vapor share grows until, about 90% of the way through, all the liquid has turned to vapor — that's the saturated vapor point. Any heat absorbed past that point doesn't create more vapor (there's no liquid left to boil): it just raises the vapor's temperature, creating superheat. Superheat is literally insurance for the compressor — it guarantees that only vapor, never liquid, is leaving the evaporator. The superheat value is the difference between the refrigerant's actual temperature at the evaporator outlet and the temperature at which it boils: if the refrigerant boils at 40°F and leaves at 50°F, that evaporator is running with 10°F of superheat."
      },
      "keyValues": [
        { "label": { "pt": "Entrada do evaporador", "en": "Evaporator inlet" }, "value": { "pt": "~75% líquido, 25% vapor", "en": "~75% liquid, 25% vapor" } },
        { "label": { "pt": "Saída do evaporador", "en": "Evaporator outlet" }, "value": { "pt": "100% vapor superaquecido", "en": "100% superheated vapor" } },
        { "label": { "pt": "Fórmula do superaquecimento", "en": "Superheat formula" }, "value": { "pt": "Temp. real na saída − Temp. de ebulição", "en": "Actual outlet temp − boiling temp" } }
      ]
    },
    {
      "id": "3.8",
      "title": {
        "pt": "O Compressor e seus Tipos",
        "en": "The Compressor and Compressor Types"
      },
      "text": {
        "pt": "O compressor é o coração do sistema — ele bombeia calor através do circuito na forma de refrigerante carregado de energia térmica. Sob condições normais, o compressor sempre recebe 100% vapor e sempre descarrega 100% vapor: ele reduz a pressão do lado de baixa (que inclui o evaporador) e aumenta a pressão do lado de alta, e é essa diferença de pressão que faz o refrigerante circular. Os três tipos mais comuns em ar-condicionado residencial e comercial leve — reciprocante, rotativo e scroll — são todos compressores de deslocamento positivo (aumentam a pressão reduzindo fisicamente o volume da câmara de compressão). O reciprocante usa um pistão dentro de um cilindro, com válvulas tipo palheta controlando a direção do fluxo. O rotativo usa um pistão giratório tipo tambor, é fisicamente menor que um reciprocante de mesma capacidade e tem poucas partes móveis. O scroll — hoje o mais usado em equipamento novo residencial e comercial leve — usa duas espirais engrenadas, uma fixa e outra orbital, comprimindo o vapor em vários estágios simultâneos; sua tolerância a um pouco de líquido entrando (as espirais podem se afastar sob pressão perigosa) o torna mais \"perdoador\" que os outros tipos. Para sistemas comerciais maiores existem ainda o centrífugo (deslocamento cinético, como um grande ventilador, usado também em motores a jato) e o parafuso (deslocamento positivo, popular em refrigeração de baixa temperatura).",
        "en": "The compressor is the heart of the system — it pumps heat through the circuit in the form of heat-laden refrigerant. Under normal conditions, the compressor always receives 100% vapor and always discharges 100% vapor: it lowers the pressure on the low side (which includes the evaporator) and raises the pressure on the high side, and that pressure difference is what makes the refrigerant flow. The three most common types in residential and light commercial air-conditioning — reciprocating, rotary, and scroll — are all positive-displacement compressors (they raise pressure by physically shrinking the volume of the compression space). The reciprocating type uses a piston inside a cylinder, with flapper-style valves controlling flow direction. The rotary type uses a rotating, drum-like piston, is physically smaller than a reciprocating unit of the same capacity, and has few moving parts. The scroll type — now the most common in newly built residential and light commercial equipment — uses two nested spirals, one fixed and one orbiting, compressing vapor in several simultaneous stages; its tolerance for a bit of liquid entering (the scrolls can separate under dangerous pressure) makes it more forgiving than the other types. For larger commercial systems there's also the centrifugal (kinetic displacement, like a large fan, also used in jet engines) and the screw compressor (positive displacement, popular in low-temperature refrigeration)."
      },
      "keyValues": [
        { "label": { "pt": "Entrada do compressor", "en": "Compressor inlet" }, "value": { "pt": "100% vapor", "en": "100% vapor" } },
        { "label": { "pt": "Saída do compressor", "en": "Compressor outlet" }, "value": { "pt": "100% vapor", "en": "100% vapor" } },
        { "label": { "pt": "Mais comum em equipamento residencial novo", "en": "Most common in new residential equipment" }, "value": { "pt": "Scroll", "en": "Scroll" } },
        { "label": { "pt": "Mais tolerante a líquido", "en": "Most forgiving of liquid" }, "value": { "pt": "Scroll", "en": "Scroll" } }
      ]
    },
    {
      "id": "3.9",
      "title": {
        "pt": "O Condensador e o Sub-resfriamento",
        "en": "The Condenser and Subcooling"
      },
      "text": {
        "pt": "O condensador é a superfície de troca de calor que rejeita tanto o calor sensível quanto o latente do sistema — na prática, ele precisa se livrar de tudo que foi absorvido no evaporador, mais o calor gerado e concentrado no próprio processo de compressão. O gás quente sai do compressor pela linha de descarga como vapor superaquecido de alta pressão (pode chegar à faixa de 200°F) e entra no topo do condensador. Dentro dele, três coisas acontecem em sequência: primeiro o gás é \"dessuperaquecido\" — perde calor sensível até atingir a temperatura de condensação (por exemplo, de 200°F até 125°F); depois ele condensa de vapor para líquido a essa temperatura constante (calor latente, a pressão e temperatura não mudam enquanto a mudança de estado acontece); e por fim, se ainda mais calor for removido do líquido 100% saturado, ele cai abaixo da temperatura de condensação — isso é sub-resfriamento. A quantidade de sub-resfriamento é a diferença entre a temperatura de condensação e a temperatura real do líquido na saída: se o refrigerante condensa a 125°F e sai a 110°F, esse condensador está operando com 15°F de sub-resfriamento.",
        "en": "The condenser is the heat-transfer surface that rejects both the sensible and latent heat from the system — in practice, it has to get rid of everything absorbed in the evaporator, plus the heat generated and concentrated during the compression process itself. Hot gas leaves the compressor through the discharge line as high-pressure superheated vapor (it can run as high as the 200°F range) and enters the top of the condenser. Inside, three things happen in sequence: first the gas is \"desuperheated\" — it loses sensible heat until it reaches the condensing temperature (say, from 200°F down to 125°F); then it condenses from vapor to liquid at that constant temperature (latent heat — pressure and temperature don't change while the state change occurs); and finally, if even more heat is removed from the now 100% saturated liquid, it drops below the condensing temperature — that's subcooling. The amount of subcooling is the difference between the condensing temperature and the liquid's actual temperature at the outlet: if the refrigerant condenses at 125°F and leaves at 110°F, that condenser is running with 15°F of subcooling."
      },
      "keyValues": [
        { "label": { "pt": "Três processos no condensador", "en": "Three processes in the condenser" }, "value": { "pt": "Dessuperaquecer → condensar → sub-resfriar", "en": "Desuperheat → condense → subcool" } },
        { "label": { "pt": "Fórmula do sub-resfriamento", "en": "Subcooling formula" }, "value": { "pt": "Temp. de condensação − Temp. real na saída", "en": "Condensing temp − actual outlet temp" } },
        { "label": { "pt": "Faixa típica de sub-resfriamento", "en": "Typical subcooling range" }, "value": { "pt": "10°F a 20°F abaixo da condensação", "en": "10°F to 20°F below condensing" } }
      ]
    },
    {
      "id": "3.10",
      "title": {
        "pt": "O Dispositivo de Expansão e o Flash Gas",
        "en": "The Metering Device and Flash Gas"
      },
      "text": {
        "pt": "Do condensador, o líquido sub-resfriado e ainda morno segue pela linha de líquido até o dispositivo de expansão — o ponto que separa o lado de alta e o lado de baixa pressão do sistema. Um tipo simples é o orifício de tamanho fixo: uma restrição minúscula, do tamanho de uma agulha de costura fina, que só deve receber líquido puro. Ao passar por essa restrição, o refrigerante sofre uma queda brusca de pressão (por exemplo, de 446 psig para 120,5 psig num sistema R-410A) e parte dele (cerca de 25%) \"flasheia\" instantaneamente para vapor — o chamado flash gas. É a mesma lógica de uma mangueira de jardim sob pressão: parte da água evapora em névoa, e essa evaporação retira calor do restante, resfriando-o. Esse flash gas resfria o líquido restante até a temperatura de ebulição do evaporador (por exemplo, 41°F) — mas é considerado uma perda de capacidade do sistema, porque esse resfriamento não acontece dentro do evaporador, onde realmente importaria para tirar calor do ambiente. Por isso, quanto mais próxima a temperatura do líquido sub-resfriado estiver da temperatura de evaporação, menos flash gas é gerado e mais eficiente o sistema fica. Além do orifício fixo, existem outros tipos de dispositivo de expansão: tubo capilar, válvula de expansão automática, válvula de expansão termostática (TXV) e válvula de expansão eletrônica.",
        "en": "From the condenser, the still-warm subcooled liquid travels through the liquid line to the metering device — the point that separates the system's high-pressure and low-pressure sides. One simple type is the fixed-bore orifice: a tiny restriction, about the size of a fine sewing needle, meant to receive only pure liquid. As the refrigerant passes through that restriction, it undergoes a sharp pressure drop (say, from 446 psig to 120.5 psig in an R-410A system), and part of it (roughly 25%) instantly \"flashes\" into vapor — what's called flash gas. It's the same logic as a garden hose under pressure: some of the water evaporates into mist, and that evaporation pulls heat from the rest, cooling it down. That flash gas cools the remaining liquid down to the evaporator's boiling temperature (say, 41°F) — but it's considered a capacity loss for the system, because that cooling didn't happen inside the evaporator, where it would actually matter for pulling heat out of the conditioned space. So the closer the subcooled liquid's temperature gets to the evaporating temperature, the less flash gas gets generated and the more efficient the system runs. Besides the fixed orifice, other metering device types include the capillary tube, the automatic expansion valve, the thermostatic expansion valve (TXV), and the electronic expansion valve."
      },
      "keyValues": [
        { "label": { "pt": "Entrada do dispositivo de expansão", "en": "Metering device inlet" }, "value": { "pt": "100% líquido sub-resfriado", "en": "100% subcooled liquid" } },
        { "label": { "pt": "Saída do dispositivo de expansão", "en": "Metering device outlet" }, "value": { "pt": "~75% líquido, 25% vapor (flash gas)", "en": "~75% liquid, 25% vapor (flash gas)" } },
        { "label": { "pt": "Tipos comuns", "en": "Common types" }, "value": { "pt": "Orifício fixo, capilar, TXV, eletrônica", "en": "Fixed orifice, capillary, TXV, electronic" } }
      ]
    },
    {
      "id": "3.11",
      "title": {
        "pt": "O Ciclo Completo, Passo a Passo",
        "en": "The Full Cycle, Point by Point"
      },
      "text": {
        "pt": "Juntando todas as peças, o ciclo básico de refrigeração se resume a quatro movimentos que se repetem indefinidamente: (1) o evaporador absorve calor para dentro do sistema, fervendo o refrigerante; (2) o compressor bombeia esse vapor carregado de calor, elevando sua pressão; (3) o condensador rejeita o calor do sistema para o ambiente externo, condensando o refrigerante de volta a líquido; (4) o dispositivo de expansão controla o fluxo desse líquido de volta para o evaporador, completando o ciclo. Num sistema real de ar-condicionado com R-410A operando a 40°F de evaporação e 125°F de condensação, por exemplo, o refrigerante sai do dispositivo de expansão a 41°F como uma mistura de 75% líquido/25% vapor, ferve completamente na serpentina do evaporador ganhando 10°F de superaquecimento (saindo a 50°F), ganha mais 10°F de superaquecimento na linha de sucção a caminho do compressor (chegando a 60°F), é comprimido e descarregado como vapor superaquecido a ~200°F, perde esse superaquecimento no condensador (dessuperaquecendo até 125°F), condensa a 125°F, e sai sub-resfriado a 105-110°F rumo ao dispositivo de expansão outra vez.",
        "en": "Putting all the pieces together, the basic refrigeration cycle boils down to four moves that repeat endlessly: (1) the evaporator absorbs heat into the system, boiling the refrigerant; (2) the compressor pumps that heat-laden vapor, raising its pressure; (3) the condenser rejects the system's heat to the outside environment, condensing the refrigerant back to liquid; (4) the metering device controls that liquid's flow back into the evaporator, completing the loop. In a real R-410A air-conditioning system running at a 40°F evaporating temperature and 125°F condensing temperature, for instance, refrigerant leaves the metering device at 41°F as a 75% liquid/25% vapor mixture, fully boils off in the evaporator coil while picking up 10°F of superheat (leaving at 50°F), picks up another 10°F of superheat in the suction line on the way to the compressor (arriving at 60°F), gets compressed and discharged as superheated vapor at roughly 200°F, loses that superheat in the condenser (desuperheating down to 125°F), condenses at 125°F, and leaves subcooled at 105–110°F headed back to the metering device."
      },
      "keyValues": [
        { "label": { "pt": "Os quatro movimentos do ciclo", "en": "The cycle's four moves" }, "value": { "pt": "Absorver → bombear → rejeitar → medir", "en": "Absorb → pump → reject → meter" } },
        { "label": { "pt": "Exemplo de temperatura de saída do compressor", "en": "Example compressor discharge temperature" }, "value": { "pt": "~200°F", "en": "~200°F" } }
      ]
    },
    {
      "id": "3.12",
      "title": {
        "pt": "Refrigerantes: história, banimentos e escolhas atuais",
        "en": "Refrigerants: History, Phase-Outs, and Today's Choices"
      },
      "text": {
        "pt": "Nem todo refrigerante que já foi popular ainda pode ser fabricado. R-12, R-22, R-500 e R-502 tiveram fabricação e importação banidas ou totalmente eliminadas ao longo das últimas décadas (R-12/R-500/R-502 desde 1996; a produção de R-22 acabou em 2020) por causa do potencial de destruição da camada de ozônio. O mercado hoje gira em torno de misturas de HFC como o R-410A (o substituto mais comum do R-22 em ar-condicionado residencial, com pressões de operação bem mais altas — nunca misture R-410A num sistema projetado para R-22, os componentes não aguentam) e o R-134a (usado em refrigeração média/alta e ar-condicionado automotivo). Cada refrigerante tem uma cor de cilindro padronizada para identificação rápida — R-22 é verde, R-410A é rosa, R-134a é azul-claro, R-404A é laranja. A próxima geração são os refrigerantes HFO (hidrofluoro-olefinas), como o HFO-1234yf (substituto de baixo GWP do R-134a em ar-condicionado automotivo) e o HFO-1234ze — ambos não destroem a camada de ozônio e têm potencial de aquecimento global drasticamente menor que seus antecessores.",
        "en": "Not every refrigerant that was once popular can still be manufactured. R-12, R-22, R-500, and R-502 have all had manufacturing and importing banned or completely phased out over the past few decades (R-12/R-500/R-502 since 1996; R-22 production ended in 2020) because of their ozone-depletion potential. Today's market centers on HFC blends like R-410A (the most common R-22 replacement in residential air-conditioning, with much higher operating pressures — never charge R-410A into a system designed for R-22, the components can't handle it) and R-134a (used in medium/high-temperature refrigeration and automotive air-conditioning). Every refrigerant has a standardized cylinder color for quick identification — R-22 is green, R-410A is rose, R-134a is light blue, R-404A is orange. The next generation is the HFO (hydrofluoro-olefin) refrigerants, such as HFO-1234yf (a low-GWP replacement for R-134a in automotive air-conditioning) and HFO-1234ze — both are ozone-safe and carry a dramatically lower global warming potential than their predecessors."
      },
      "keyValues": [
        { "label": { "pt": "R-22 (cor do cilindro)", "en": "R-22 (cylinder color)" }, "value": { "pt": "Verde", "en": "Green" } },
        { "label": { "pt": "R-410A (cor do cilindro)", "en": "R-410A (cylinder color)" }, "value": { "pt": "Rosa", "en": "Rose" } },
        { "label": { "pt": "R-134a (cor do cilindro)", "en": "R-134a (cylinder color)" }, "value": { "pt": "Azul-claro", "en": "Light blue" } },
        { "label": { "pt": "R-404A (cor do cilindro)", "en": "R-404A (cylinder color)" }, "value": { "pt": "Laranja", "en": "Orange" } },
        { "label": { "pt": "Produção de R-22 encerrada em", "en": "R-22 production ended in" }, "value": { "pt": "2020", "en": "2020" } }
      ]
    },
    {
      "id": "3.13",
      "title": {
        "pt": "Refrigerantes Precisam Ser Seguros",
        "en": "Refrigerants Must Be Safe"
      },
      "text": {
        "pt": "Refrigerantes modernos precisam ser não-tóxicos, e os equipamentos são projetados para usar a menor quantidade possível para cumprir sua função — um ar-condicionado de janela normalmente leva menos de 2 lb, e uma geladeira doméstica, apenas algumas onças. Ainda assim, como refrigerantes são mais pesados que o ar, ventilação adequada é essencial: um vazamento tende a se acumular em espaços baixos. Refrigerantes nunca devem ser expostos a chama aberta — se um vazamento chegar até um piloto de aquecedor de água a gás, por exemplo, pode gerar gases tóxicos e corrosivos capazes de queimar olhos e vias respiratórias de quem estiver no ambiente. É por isso que o livro insiste tanto em: ventilar bem áreas com risco de vazamento, redobrar o cuidado perto de chamas abertas, tratar cilindros pressurizados com cuidado, usar óculos e luvas de proteção ao verificar pressões, e só transferir refrigerante para recipientes aprovados pelo DOT.",
        "en": "Modern refrigerants need to be non-toxic, and equipment is designed to use the smallest amount possible to do its job — a window air conditioner typically holds less than 2 lb, and a household refrigerator only a few ounces. Even so, because refrigerants are heavier than air, proper ventilation is essential: a leak tends to pool in low spaces. Refrigerants should never be exposed to an open flame — if a leak reaches a gas water heater's pilot light, for instance, it can generate toxic, corrosive gases capable of burning the eyes and airways of anyone in the room. That's exactly why the book insists so heavily on: ventilating areas where leaks are possible, taking extra care near open flames, handling pressurized cylinders carefully, wearing eye protection and gloves when checking pressures, and only transferring refrigerant into DOT-approved containers."
      },
      "keyValues": [
        { "label": { "pt": "Carga típica (ar-condicionado de janela)", "en": "Typical charge (window AC)" }, "value": { "pt": "Menos de 2 lb", "en": "Less than 2 lb" } },
        { "label": { "pt": "Perigo perto de chama aberta", "en": "Danger near open flame" }, "value": { "pt": "Gases tóxicos e corrosivos", "en": "Toxic, corrosive gases" } },
        { "label": { "pt": "Recipientes aprovados", "en": "Approved containers" }, "value": { "pt": "Somente aprovados pelo DOT", "en": "DOT-approved only" } }
      ]
    },
    {
      "id": "3.14",
      "title": {
        "pt": "Detecção de Vazamentos",
        "en": "Leak Detection"
      },
      "text": {
        "pt": "Um vazamento de refrigerante precisa ser detectável, e o técnico tem várias ferramentas para isso, cada uma com seu nível de sensibilidade. A mais simples é o próprio ouvido — vazamentos grandes chiam. Detectores ultrassônicos captam o som do fluido se movendo dentro da tubulação em direção ao ponto de fuga, com o tom mudando conforme o sensor se aproxima. Solução de bolhas de sabão é prática e barata: aplicada com um pincel na junta suspeita, ela forma bolhas exatamente onde o gás escapa (em tubulações abaixo de zero, um pouco de anticongelante ajuda). O detector halide usa uma chama alimentada por acetileno ou propano para aquecer um disco de cobre — na presença de gás refrigerante clorado, a chama muda de cor (azul ou verde), sinalizando a produção de gases tóxicos, então esse detector só deve ser usado em áreas bem ventiladas. Detectores eletrônicos, portáteis e com sonda flexível, conseguem identificar vazamentos de até um quarto de onça por ano. E o sistema de luz ultravioleta usa um aditivo introduzido no refrigerante que brilha em verde-amarelo sob luz UV no ponto exato do vazamento — esse aditivo permanece no sistema, então áreas já reparadas podem ser reinspecionadas no futuro.",
        "en": "A refrigerant leak needs to be detectable, and the technician has several tools for that, each with its own sensitivity level. The simplest is your own ear — large leaks hiss. Ultrasonic detectors pick up the sound of fluid moving through the piping toward the leak point, with the pitch shifting as the sensor gets closer. Soap-bubble solution is cheap and practical: brushed onto a suspected joint, it forms bubbles right where gas is escaping (a little antifreeze helps on below-freezing lines). The halide detector uses an acetylene- or propane-fed flame to heat a copper disk — in the presence of chlorinated refrigerant gas, the flame changes color (blue or green), signaling toxic gas production, so this detector should only be used in well-ventilated areas. Electronic detectors, portable with a flexible probe, can pick up leaks as small as a quarter ounce per year. And the ultraviolet system uses an additive introduced into the refrigerant that glows yellow-green under UV light right at the leak point — that additive stays in the system, so already-repaired areas can be re-inspected later."
      },
      "keyValues": [
        { "label": { "pt": "Método mais simples", "en": "Simplest method" }, "value": { "pt": "Ouvir o chiado do vazamento", "en": "Listening for the hiss" } },
        { "label": { "pt": "Detector halide — cor de alerta", "en": "Halide detector — warning color" }, "value": { "pt": "Chama azul ou verde = gás tóxico", "en": "Blue or green flame = toxic gas" } },
        { "label": { "pt": "Sensibilidade do detector eletrônico", "en": "Electronic detector sensitivity" }, "value": { "pt": "Até ¼ onça/ano", "en": "Down to ¼ oz/year" } }
      ]
    },
    {
      "id": "3.15",
      "title": {
        "pt": "Ponto de Ebulição, Vácuo e Características de Bombeamento",
        "en": "Boiling Point, Vacuum, and Pumping Characteristics"
      },
      "text": {
        "pt": "Um bom refrigerante precisa ferver a uma temperatura baixa mesmo em pressão atmosférica, para que temperaturas de refrigeração baixas sejam alcançadas sem precisar operar em vácuo. R-410A, por exemplo, pode ferver até −61°F antes de entrar em vácuo, enquanto o antigo R-12 só chegava a −21°F. Isso importa porque, quando um sistema opera em vácuo e ocorre um vazamento, é o ar atmosférico que é puxado para dentro do sistema — não o refrigerante que vaza para fora. Engenheiros de projeto evitam, sempre que possível, refrigerantes que precisem de vácuo para ferver na temperatura desejada. Outro fator prático é a característica de bombeamento: quanta massa de refrigerante o compressor consegue mover por unidade de trabalho. A água, por exemplo, foi descartada como refrigerante prático em equipamentos pequenos justamente por isso — 1 lb de água a 40°F ocupa um volume específico de 2.445 ft³, contra apenas cerca de 0,5 ft³ para o R-410A. Isso significa que um compressor de água precisaria mover um volume gigantesco de vapor só para deslocar 1 lb de refrigerante, exigindo um equipamento absurdamente grande.",
        "en": "A good refrigerant needs to boil at a low temperature even at atmospheric pressure, so that low refrigeration temperatures can be reached without having to operate in a vacuum. R-410A, for instance, can boil as low as −61°F before going into a vacuum, while the older R-12 only got down to −21°F. This matters because, when a system operates in a vacuum and a leak occurs, it's atmospheric air that gets pulled into the system — not refrigerant leaking out. Design engineers avoid, whenever possible, refrigerants that need a vacuum to boil at the desired temperature. Another practical factor is pumping characteristics: how much refrigerant mass the compressor can move per unit of work. Water, for example, was disqualified as a practical refrigerant in small equipment for exactly this reason — 1 lb of water at 40°F has a specific volume of 2,445 ft³, compared to only about 0.5 ft³ for R-410A. That means a water-based compressor would have to move a gigantic volume of vapor just to shift 1 lb of refrigerant, requiring absurdly oversized equipment."
      },
      "keyValues": [
        { "label": { "pt": "Ponto de ebulição do R-410A antes do vácuo", "en": "R-410A boiling point before vacuum" }, "value": { "pt": "~−61°F", "en": "~−61°F" } },
        { "label": { "pt": "Ponto de ebulição do R-12 antes do vácuo", "en": "R-12 boiling point before vacuum" }, "value": { "pt": "~−21°F", "en": "~−21°F" } },
        { "label": { "pt": "Volume específico (água a 40°F)", "en": "Specific volume (water at 40°F)" }, "value": { "pt": "2.445 ft³/lb", "en": "2,445 ft³/lb" } },
        { "label": { "pt": "Volume específico (R-410A)", "en": "Specific volume (R-410A)" }, "value": { "pt": "~0,5 ft³/lb", "en": "~0.5 ft³/lb" } }
      ]
    },
    {
      "id": "3.16",
      "title": {
        "pt": "Recuperação, Reciclagem e Reprocessamento",
        "en": "Recovery, Recycling, and Reclaiming"
      },
      "text": {
        "pt": "É obrigatório por lei que técnicos recuperem — e, em alguns casos, reciclem — refrigerantes durante instalação e manutenção, para reduzir a emissão de CFCs, HCFCs e HFCs na atmosfera. Ventilar (liberar) refrigerante propositalmente para o ar é ilegal e sujeito a multas pesadas, que podem passar de $44.000, além de possível prisão. Sistemas maiores costumam ter receptores ou tanques de despejo próprios para armazenar o refrigerante durante o serviço; em sistemas menores, unidades de recuperação portáteis costumam ser necessárias. Como a tecnologia e as capacidades variam bastante entre fabricantes, as instruções específicas de cada equipamento de recuperação devem sempre ser seguidas à risca.",
        "en": "It's legally mandatory for technicians to recover — and, in some cases, recycle — refrigerants during installation and service work, to reduce the release of CFCs, HCFCs, and HFCs into the atmosphere. Intentionally venting refrigerant into the air is illegal and carries steep fines, which can exceed $44,000, plus possible imprisonment. Larger systems often have their own receivers or dump tanks to store refrigerant during service; smaller systems usually require portable recovery units. Since technology and capabilities vary quite a bit between manufacturers, each recovery unit's specific instructions must always be followed closely."
      },
      "keyValues": [
        { "label": { "pt": "Multa máxima por ventilação ilegal", "en": "Maximum fine for illegal venting" }, "value": { "pt": "Acima de $44.000", "en": "Over $44,000" } },
        { "label": { "pt": "Três processos", "en": "Three processes" }, "value": { "pt": "Recuperar, reciclar, reprocessar", "en": "Recover, recycle, reclaim" } }
      ]
    },
    {
      "id": "3.17",
      "title": {
        "pt": "Plotando o Ciclo — Diagramas Pressão/Entalpia",
        "en": "Plotting the Cycle — Pressure/Enthalpy Diagrams"
      },
      "text": {
        "pt": "O ciclo de refrigeração pode ser desenhado graficamente num diagrama pressão/entalpia: pressão (em psia) no eixo vertical, entalpia — o conteúdo total de calor por libra de refrigerante, em BTU/lb — no eixo horizontal. No meio do gráfico existe uma curva em formato de ferradura, a curva de saturação: dentro dela, o refrigerante está numa mistura de líquido e vapor; a linha da esquerda é líquido saturado (100% líquido), a linha da direita é vapor saturado (100% vapor), e as linhas diagonais entre elas indicam a \"qualidade\" — a porcentagem de vapor na mistura. Plotando um ciclo real, cinco pontos se destacam: A) saída do condensador / entrada do dispositivo de expansão; B) saída do dispositivo de expansão / entrada do evaporador; C) saída do evaporador / início da linha de sucção; D) fim da linha de sucção / entrada do compressor; E) saída do compressor / início do condensador. A diferença de entalpia entre os pontos B e C é o efeito de refrigeração líquido (NRE — net refrigeration effect): a quantidade real de calor, em BTU/lb, que cada libra de refrigerante absorve do ambiente refrigerado. Já a diferença entre os pontos A e E é o calor total de rejeição (THOR — total heat of rejection): tudo que o condensador precisa jogar fora, incluindo o calor absorvido no evaporador MAIS o calor de compressão gerado pelo próprio compressor. Refrigerantes com \"temperature glide\" (misturas zeotrópicas, como o R-407C) aparecem de forma diferente nesse diagrama: em vez de linhas de temperatura constante horizontais dentro da curva de saturação, elas ficam inclinadas — o que significa que, numa mesma pressão, existe uma faixa de temperaturas em vez de uma única temperatura fixa.",
        "en": "The refrigeration cycle can be drawn graphically on a pressure/enthalpy diagram: pressure (in psia) on the vertical axis, enthalpy — the total heat content per pound of refrigerant, in Btu/lb — on the horizontal axis. In the middle of the chart sits a horseshoe-shaped curve, the saturation curve: inside it, the refrigerant sits in a liquid/vapor mixture; the left-hand line is saturated liquid (100% liquid), the right-hand line is saturated vapor (100% vapor), and the diagonal lines between them mark \"quality\" — the percentage of vapor in the mix. Plotting an actual cycle, five points stand out: A) condenser outlet / metering device inlet; B) metering device outlet / evaporator inlet; C) evaporator outlet / start of the suction line; D) end of the suction line / compressor inlet; E) compressor outlet / start of the condenser. The enthalpy difference between points B and C is the net refrigeration effect (NRE): the actual amount of heat, in Btu/lb, that each pound of refrigerant absorbs from the conditioned space. The difference between points A and E is the total heat of rejection (THOR): everything the condenser has to dump, including the heat absorbed in the evaporator PLUS the heat of compression generated by the compressor itself. Refrigerants with \"temperature glide\" (zeotropic blends, like R-407C) show up differently on this diagram: instead of horizontal constant-temperature lines inside the saturation curve, they're angled — meaning that at any given pressure, there's a range of temperatures instead of a single fixed one."
      },
      "keyValues": [
        { "label": { "pt": "Eixos do diagrama P-E", "en": "P-E diagram axes" }, "value": { "pt": "Pressão (psia) × Entalpia (BTU/lb)", "en": "Pressure (psia) × Enthalpy (Btu/lb)" } },
        { "label": { "pt": "NRE (efeito de refrigeração líquido)", "en": "NRE (net refrigeration effect)" }, "value": { "pt": "Entalpia no ponto C − ponto B", "en": "Enthalpy at point C − point B" } },
        { "label": { "pt": "THOR (calor total de rejeição)", "en": "THOR (total heat of rejection)" }, "value": { "pt": "Entalpia no ponto E − ponto A", "en": "Enthalpy at point E − point A" } },
        { "label": { "pt": "Refrigerantes com temperature glide", "en": "Refrigerants with temperature glide" }, "value": { "pt": "Isotermas inclinadas no gráfico", "en": "Angled isotherms on the chart" } }
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "prompt": { "pt": "Um sistema de refrigeração que mantém um espaço entre 35°F e 40°F é classificado como que tipo de sistema?", "en": "A refrigeration system that maintains a space at a temperature between 35°F and 40°F would be classified as what type of system?" },
      "options": [
        { "id": "a", "text": { "pt": "Alta temperatura", "en": "High-temperature" } },
        { "id": "b", "text": { "pt": "Média temperatura", "en": "Medium-temperature" } },
        { "id": "c", "text": { "pt": "Baixa temperatura", "en": "Low-temperature" } },
        { "id": "d", "text": { "pt": "Ultra-baixa temperatura", "en": "Ultra-low-temperature" } }
      ],
      "correct": "b",
      "explanation": { "pt": "Sistemas de média temperatura mantêm produtos entre 35°F e 45°F — a faixa dos refrigeradores comuns.", "en": "Medium-temperature systems maintain products between 35°F and 45°F — the range of ordinary refrigerators." }
    },
    {
      "id": "q2",
      "prompt": { "pt": "Um sistema de refrigeração destinado a proporcionar conforto térmico é classificado como que tipo de sistema?", "en": "A refrigeration system that is intended to provide comfort cooling would be classified as what type of system?" },
      "options": [
        { "id": "a", "text": { "pt": "Alta temperatura", "en": "High-temperature" } },
        { "id": "b", "text": { "pt": "Média temperatura", "en": "Medium-temperature" } },
        { "id": "c", "text": { "pt": "Baixa temperatura", "en": "Low-temperature" } },
        { "id": "d", "text": { "pt": "Ultra-baixa temperatura", "en": "Ultra-low-temperature" } }
      ],
      "correct": "a",
      "explanation": { "pt": "Sistemas de ar-condicionado (conforto térmico) são classificados como alta temperatura.", "en": "Air-conditioning (comfort cooling) systems are classified as high-temperature." }
    },
    {
      "id": "q3",
      "prompt": { "pt": "Uma tonelada de refrigeração equivale a mover calor a que taxa?", "en": "One ton of refrigeration is the equivalent of moving heat at a rate of:" },
      "options": [
        { "id": "a", "text": { "pt": "1.200 BTU/min", "en": "1,200 Btu/min" } },
        { "id": "b", "text": { "pt": "12.000 BTU/min", "en": "12,000 Btu/min" } },
        { "id": "c", "text": { "pt": "1.200 BTU/h", "en": "1,200 Btu/h" } },
        { "id": "d", "text": { "pt": "12.000 BTU/h", "en": "12,000 Btu/h" } }
      ],
      "correct": "d",
      "explanation": { "pt": "1 tonelada de refrigeração = 12.000 BTU/h (ou 200 BTU/min).", "en": "1 ton of refrigeration = 12,000 Btu/h (or 200 Btu/min)." }
    },
    {
      "id": "q4",
      "prompt": { "pt": "O ciclo básico de refrigeração pode ser melhor descrito como um ciclo:", "en": "The basic refrigeration cycle can best be described as a:" },
      "options": [
        { "id": "a", "text": { "pt": "Não-repetitivo, de compressão de vapor", "en": "Non-repeating, vapor-compression cycle" } },
        { "id": "b", "text": { "pt": "Não-repetitivo, de combustão de vapor", "en": "Non-repeating, vapor-combustion cycle" } },
        { "id": "c", "text": { "pt": "Repetitivo, de compressão de vapor", "en": "Repeating, vapor-compression cycle" } },
        { "id": "d", "text": { "pt": "Repetitivo, de combustão de vapor", "en": "Repeating, vapor-combustion cycle" } }
      ],
      "correct": "c",
      "explanation": { "pt": "O ciclo de refrigeração se repete indefinidamente por compressão de vapor, sem consumir o refrigerante.", "en": "The refrigeration cycle repeats indefinitely through vapor compression, without consuming the refrigerant." }
    },
    {
      "id": "q5",
      "prompt": { "pt": "R-410A saturado a uma pressão de 95 psig muda de estado a que temperatura?", "en": "Saturated R-410A at a pressure of 95 psig will change state at a temperature of:" },
      "options": [
        { "id": "a", "text": { "pt": "29°F", "en": "29°F" } },
        { "id": "b", "text": { "pt": "95°F", "en": "95°F" } },
        { "id": "c", "text": { "pt": "118°F", "en": "118°F" } },
        { "id": "d", "text": { "pt": "295°F", "en": "295°F" } }
      ],
      "correct": "a",
      "explanation": { "pt": "Pela tabela de pressão/temperatura do R-410A, 95 psig corresponde a aproximadamente 29°F.", "en": "By the R-410A pressure/temperature chart, 95 psig corresponds to approximately 29°F." }
    },
    {
      "id": "q6",
      "prompt": { "pt": "A pressão de evaporação do R-22 é 76 psig e a temperatura de saída do evaporador é 58°F. Qual é o superaquecimento do evaporador?", "en": "The evaporating pressure for R-22 is 76 psig and the evaporator outlet temperature is 58°F. What is the evaporator superheat?" },
      "options": [
        { "id": "a", "text": { "pt": "13°F", "en": "13°F" } },
        { "id": "b", "text": { "pt": "45°F", "en": "45°F" } },
        { "id": "c", "text": { "pt": "58°F", "en": "58°F" } },
        { "id": "d", "text": { "pt": "132°F", "en": "132°F" } }
      ],
      "correct": "a",
      "explanation": { "pt": "76 psig corresponde a 45°F de saturação para o R-22; 58°F − 45°F = 13°F de superaquecimento.", "en": "76 psig corresponds to a 45°F saturation temperature for R-22; 58°F − 45°F = 13°F of superheat." }
    },
    {
      "id": "q7",
      "prompt": { "pt": "O estado do refrigerante na entrada do evaporador é aproximadamente:", "en": "The state of the refrigerant at the inlet of the evaporator is approximately:" },
      "options": [
        { "id": "a", "text": { "pt": "50% líquido e 50% vapor", "en": "50% liquid and 50% vapor" } },
        { "id": "b", "text": { "pt": "75% líquido e 25% vapor", "en": "75% liquid and 25% vapor" } },
        { "id": "c", "text": { "pt": "100% vapor superaquecido", "en": "100% superheated vapor" } },
        { "id": "d", "text": { "pt": "100% líquido sub-resfriado", "en": "100% subcooled liquid" } }
      ],
      "correct": "b",
      "explanation": { "pt": "O refrigerante entra no evaporador como uma mistura saturada, tipicamente 75% líquido e 25% vapor.", "en": "Refrigerant enters the evaporator as a saturated mixture, typically 75% liquid and 25% vapor." }
    },
    {
      "id": "q8",
      "prompt": { "pt": "O estado do refrigerante na saída do evaporador deveria ser:", "en": "The state of the refrigerant at the outlet of the evaporator should be:" },
      "options": [
        { "id": "a", "text": { "pt": "50% líquido e 50% vapor", "en": "50% liquid and 50% vapor" } },
        { "id": "b", "text": { "pt": "75% líquido e 25% vapor", "en": "75% liquid and 25% vapor" } },
        { "id": "c", "text": { "pt": "100% vapor superaquecido", "en": "100% superheated vapor" } },
        { "id": "d", "text": { "pt": "100% líquido sub-resfriado", "en": "100% subcooled liquid" } }
      ],
      "correct": "c",
      "explanation": { "pt": "Na saída do evaporador, todo o líquido já ferveu e o refrigerante carrega um pouco de superaquecimento.", "en": "At the evaporator outlet, all the liquid has boiled off and the refrigerant carries a bit of superheat." }
    },
    {
      "id": "q9",
      "prompt": { "pt": "O estado do refrigerante na saída do condensador deveria ser:", "en": "The state of the refrigerant at the outlet of the condenser should be:" },
      "options": [
        { "id": "a", "text": { "pt": "50% líquido e 50% vapor", "en": "50% liquid and 50% vapor" } },
        { "id": "b", "text": { "pt": "75% líquido e 25% vapor", "en": "75% liquid and 25% vapor" } },
        { "id": "c", "text": { "pt": "100% vapor superaquecido", "en": "100% superheated vapor" } },
        { "id": "d", "text": { "pt": "100% líquido sub-resfriado", "en": "100% subcooled liquid" } }
      ],
      "correct": "d",
      "explanation": { "pt": "Na saída do condensador, o refrigerante já condensou totalmente e costuma sair sub-resfriado.", "en": "At the condenser outlet, the refrigerant has fully condensed and typically leaves subcooled." }
    },
    {
      "id": "q10",
      "prompt": { "pt": "Se a temperatura de saída do evaporador num sistema R-410A é 50°F e o superaquecimento do evaporador é 10°F, qual é a pressão de evaporação do refrigerante nesse sistema?", "en": "If the evaporator outlet temperature on an R-410A system is 50°F and the evaporator superheat is 10°F, what is the evaporating pressure of the refrigerant in this system?" },
      "options": [
        { "id": "a", "text": { "pt": "143 psig", "en": "143 psig" } },
        { "id": "b", "text": { "pt": "118 psig", "en": "118 psig" } },
        { "id": "c", "text": { "pt": "84 psig", "en": "84 psig" } },
        { "id": "d", "text": { "pt": "62 psig", "en": "62 psig" } }
      ],
      "correct": "b",
      "explanation": { "pt": "Temperatura de saturação = 50°F − 10°F = 40°F, que corresponde a 118 psig para o R-410A.", "en": "Saturation temperature = 50°F − 10°F = 40°F, which corresponds to 118 psig for R-410A." }
    },
    {
      "id": "q11",
      "prompt": { "pt": "Se a pressão de evaporação era 76 psig para o R-22 e a temperatura de entrada do compressor era 65°F, qual seria o superaquecimento total entrando no compressor?", "en": "If the evaporating pressure was 76 psig for R-22 and the compressor inlet temperature was 65°F, what would be the total superheat entering the compressor?" },
      "options": [
        { "id": "a", "text": { "pt": "11°F", "en": "11°F" } },
        { "id": "b", "text": { "pt": "21°F", "en": "21°F" } },
        { "id": "c", "text": { "pt": "10°F", "en": "10°F" } },
        { "id": "d", "text": { "pt": "20°F", "en": "20°F" } }
      ],
      "correct": "d",
      "explanation": { "pt": "76 psig corresponde a 45°F de saturação; 65°F − 45°F = 20°F de superaquecimento total.", "en": "76 psig corresponds to a 45°F saturation temperature; 65°F − 45°F = 20°F of total superheat." }
    },
    {
      "id": "q12",
      "prompt": { "pt": "Quando um sistema de ar-condicionado opera em vácuo, o que é verdade?", "en": "When an air-conditioning system operates in a vacuum, which of the following is true?" },
      "options": [
        { "id": "a", "text": { "pt": "O ar vaza para fora do sistema", "en": "Air will leak out of the system" } },
        { "id": "b", "text": { "pt": "O refrigerante vaza para fora do sistema", "en": "Refrigerant will leak out of the system" } },
        { "id": "c", "text": { "pt": "O ar é puxado para dentro do sistema", "en": "Air will be pulled into the system" } },
        { "id": "d", "text": { "pt": "O refrigerante é puxado para dentro do sistema", "en": "Refrigerant will be pulled into the system" } }
      ],
      "correct": "c",
      "explanation": { "pt": "Num sistema em vácuo, um vazamento puxa o ar atmosférico para dentro, em vez de deixar o refrigerante escapar.", "en": "In a system under vacuum, a leak pulls atmospheric air in, rather than letting refrigerant escape." }
    },
    {
      "id": "q13",
      "prompt": { "pt": "A pressão de condensação é 417,4 psig para o R-410A e a temperatura de saída do condensador é 108°F. Quanto sub-resfriamento existe no condensador?", "en": "The condensing pressure is 417.4 psig for R-410A and the condenser outlet temperature is 108°F. How much subcooling is there in the condenser?" },
      "options": [
        { "id": "a", "text": { "pt": "7°F", "en": "7°F" } },
        { "id": "b", "text": { "pt": "12°F", "en": "12°F" } },
        { "id": "c", "text": { "pt": "21°F", "en": "21°F" } },
        { "id": "d", "text": { "pt": "42°F", "en": "42°F" } }
      ],
      "correct": "b",
      "explanation": { "pt": "417,4 psig corresponde a 120°F de condensação; 120°F − 108°F = 12°F de sub-resfriamento.", "en": "417.4 psig corresponds to a 120°F condensing temperature; 120°F − 108°F = 12°F of subcooling." }
    },
    {
      "id": "q14",
      "prompt": { "pt": "O dispositivo de expansão é responsável por:", "en": "The expansion device is responsible for:" },
      "options": [
        { "id": "a", "text": { "pt": "Controlar a operação do compressor", "en": "Controlling the operation of the compressor" } },
        { "id": "b", "text": { "pt": "Controlar o sub-resfriamento", "en": "Controlling the subcooling" } },
        { "id": "c", "text": { "pt": "Medir o fluxo de refrigerante para dentro do evaporador", "en": "Metering refrigerant flow into the evaporator" } },
        { "id": "d", "text": { "pt": "Armazenar refrigerante para uso futuro", "en": "Storing refrigerant for future use" } }
      ],
      "correct": "c",
      "explanation": { "pt": "O dispositivo de expansão controla e restringe o fluxo de refrigerante líquido para dentro do evaporador.", "en": "The metering device controls and restricts the flow of liquid refrigerant into the evaporator." }
    },
    {
      "id": "q15",
      "prompt": { "pt": "Um compressor operando corretamente deveria ter ____ na entrada e ____ na saída.", "en": "A properly operating compressor should have ____________ at its inlet and _____________ at its outlet." },
      "options": [
        { "id": "a", "text": { "pt": "100% vapor, 100% vapor", "en": "100% vapor, 100% vapor" } },
        { "id": "b", "text": { "pt": "100% líquido, 100% líquido", "en": "100% liquid, 100% liquid" } },
        { "id": "c", "text": { "pt": "100% vapor, 100% líquido", "en": "100% vapor, 100% liquid" } },
        { "id": "d", "text": { "pt": "100% líquido, 100% vapor", "en": "100% liquid, 100% vapor" } }
      ],
      "correct": "a",
      "explanation": { "pt": "O compressor é essencialmente uma bomba de vapor: recebe 100% vapor e descarrega 100% vapor.", "en": "The compressor is essentially a vapor pump: it takes in 100% vapor and discharges 100% vapor." }
    },
    {
      "id": "q16",
      "prompt": { "pt": "Dentre os compressores a seguir, qual é um compressor residencial tolerante à entrada de um pouco de líquido?", "en": "Of the following compressors, which is a residential compressor that is forgiving when it comes to having liquid entering it?" },
      "options": [
        { "id": "a", "text": { "pt": "O reciprocante", "en": "The reciprocating compressor" } },
        { "id": "b", "text": { "pt": "O scroll", "en": "The scroll compressor" } },
        { "id": "c", "text": { "pt": "O rotativo", "en": "The rotary compressor" } },
        { "id": "d", "text": { "pt": "O parafuso", "en": "The screw compressor" } }
      ],
      "correct": "b",
      "explanation": { "pt": "As espirais do compressor scroll podem se afastar sob pressão perigosa, tornando-o mais tolerante a líquido.", "en": "The scroll compressor's spirals can separate under dangerous pressure, making it more tolerant of liquid." }
    },
    {
      "id": "q17",
      "prompt": { "pt": "Qual das afirmações a seguir é verdadeira sobre compressores reciprocantes e rotativos?", "en": "Which of the following statements is true with regards to reciprocating and rotary compressors?" },
      "options": [
        { "id": "a", "text": { "pt": "Rotativos e reciprocantes de capacidades semelhantes têm tamanho semelhante", "en": "Rotary and reciprocating compressors with similar capacities are similarly sized" } },
        { "id": "b", "text": { "pt": "Ambos têm válvulas de sucção e descarga", "en": "Both rotary and reciprocating compressors are equipped with suction and discharge valves" } },
        { "id": "c", "text": { "pt": "Ambos podem ser abertos para manutenção", "en": "Both rotary and reciprocating compressors can be opened for service" } },
        { "id": "d", "text": { "pt": "Para capacidades semelhantes, compressores rotativos são menores que reciprocantes", "en": "For compressors with similar capacities, rotary compressors are smaller than reciprocating compressors" } }
      ],
      "correct": "d",
      "explanation": { "pt": "Compressores rotativos são fisicamente menores que reciprocantes de capacidade equivalente.", "en": "Rotary compressors are physically smaller than reciprocating compressors of equivalent capacity." }
    },
    {
      "id": "q18",
      "prompt": { "pt": "A cor padrão de identificação do cilindro de R-22 é:", "en": "The color-coding for an R-22 refrigerant cylinder is:" },
      "options": [
        { "id": "a", "text": { "pt": "Branco", "en": "White" } },
        { "id": "b", "text": { "pt": "Verde", "en": "Green" } },
        { "id": "c", "text": { "pt": "Laranja", "en": "Orange" } },
        { "id": "d", "text": { "pt": "Marrom", "en": "Brown" } }
      ],
      "correct": "b",
      "explanation": { "pt": "O cilindro de R-22 é identificado pela cor verde.", "en": "R-22 cylinders are identified by the color green." }
    },
    {
      "id": "q19",
      "prompt": { "pt": "A cor padrão de identificação do cilindro de R-404A é:", "en": "The color-coding for an R-404A refrigerant cylinder is:" },
      "options": [
        { "id": "a", "text": { "pt": "Branco", "en": "White" } },
        { "id": "b", "text": { "pt": "Verde", "en": "Green" } },
        { "id": "c", "text": { "pt": "Laranja", "en": "Orange" } },
        { "id": "d", "text": { "pt": "Marrom", "en": "Brown" } }
      ],
      "correct": "c",
      "explanation": { "pt": "O cilindro de R-404A é identificado pela cor laranja.", "en": "R-404A cylinders are identified by the color orange." }
    },
    {
      "id": "q20",
      "prompt": { "pt": "Dentre os refrigerantes a seguir, qual tem o menor potencial de aquecimento global (GWP)?", "en": "Of the following refrigerants, which has the lowest global warming potential (GWP)?" },
      "options": [
        { "id": "a", "text": { "pt": "R-410A", "en": "R-410A" } },
        { "id": "b", "text": { "pt": "R-134a", "en": "R-134a" } },
        { "id": "c", "text": { "pt": "R-407C", "en": "R-407C" } },
        { "id": "d", "text": { "pt": "R-1234yf", "en": "R-1234yf" } }
      ],
      "correct": "d",
      "explanation": { "pt": "O HFO-1234yf é um refrigerante de nova geração projetado especificamente para ter GWP muito baixo.", "en": "HFO-1234yf is a next-generation refrigerant specifically engineered for a very low GWP." }
    },
    {
      "id": "q21",
      "prompt": { "pt": "Os três processos comumente usados para descrever o manuseio de refrigerantes são:", "en": "The three processes commonly used to describe refrigerant handling are:" },
      "options": [
        { "id": "a", "text": { "pt": "Recuperar, reciclar e reprocessar", "en": "Recovering, recycling, and reclaiming" } },
        { "id": "b", "text": { "pt": "Recuperar, remover e substituir", "en": "Recovering, removing, and replacing" } },
        { "id": "c", "text": { "pt": "Remover, reciclar e substituir", "en": "Removing, recycling, and replacing" } },
        { "id": "d", "text": { "pt": "Remover, reciclar e reprocessar", "en": "Removing, recycling, and reclaiming" } }
      ],
      "correct": "a",
      "explanation": { "pt": "O manuseio legal de refrigerantes envolve recuperar, reciclar e reprocessar (reclaim).", "en": "Legal refrigerant handling involves recovering, recycling, and reclaiming." }
    },
    {
      "id": "q22",
      "prompt": { "pt": "O termo usado para quantificar a quantidade de calor absorvida no evaporador é:", "en": "The term that is used to quantify the amount of heat absorbed in the evaporator is:" },
      "options": [
        { "id": "a", "text": { "pt": "Calor total de rejeição", "en": "Total heat of rejection" } },
        { "id": "b", "text": { "pt": "Efeito de refrigeração líquido", "en": "Net refrigeration effect" } },
        { "id": "c", "text": { "pt": "Calor de compressão", "en": "Heat of compression" } },
        { "id": "d", "text": { "pt": "Expansão adiabática", "en": "Adiabatic expansion" } }
      ],
      "correct": "b",
      "explanation": { "pt": "O efeito de refrigeração líquido (NRE) mede o calor realmente absorvido do ambiente refrigerado.", "en": "The net refrigeration effect (NRE) measures the heat actually absorbed from the conditioned space." }
    },
    {
      "id": "q23",
      "prompt": { "pt": "As três regiões de um diagrama pressão/entalpia são:", "en": "The three regions on a pressure/enthalpy chart are:" },
      "options": [
        { "id": "a", "text": { "pt": "Alta pressão, baixa pressão, pressão crítica", "en": "High-pressure, low-pressure, critical pressure" } },
        { "id": "b", "text": { "pt": "Vapor superaquecido, líquido superaquecido, líquido despressurizado", "en": "Superheated vapor, superheated liquid, depressurized liquid" } },
        { "id": "c", "text": { "pt": "Vapor superaquecido, líquido sub-resfriado, saturado", "en": "Superheated vapor, subcooled liquid, saturated" } },
        { "id": "d", "text": { "pt": "Líquido de alta pressão, gás de baixa pressão, líquido de baixa pressão", "en": "High-pressure liquid, low-pressure gas, low-pressure liquid" } }
      ],
      "correct": "c",
      "explanation": { "pt": "O diagrama pressão/entalpia se divide em regiões de vapor superaquecido, líquido sub-resfriado e saturado.", "en": "The pressure/enthalpy chart divides into superheated vapor, subcooled liquid, and saturated regions." }
    },
    {
      "id": "q24",
      "prompt": { "pt": "A região em formato de ferradura no diagrama pressão/entalpia é chamada de:", "en": "The thumbprint-shaped region on the pressure/enthalpy chart is called the:" },
      "options": [
        { "id": "a", "text": { "pt": "Curva de saturação", "en": "Saturation curve" } },
        { "id": "b", "text": { "pt": "Ciclo de saturação", "en": "Saturation cycle" } },
        { "id": "c", "text": { "pt": "Curva de superaquecimento", "en": "Superheated curve" } },
        { "id": "d", "text": { "pt": "Região de superaquecimento", "en": "Superheated region" } }
      ],
      "correct": "a",
      "explanation": { "pt": "A região em formato de ferradura, onde líquido e vapor coexistem, é chamada de curva de saturação.", "en": "The horseshoe-shaped region, where liquid and vapor coexist, is called the saturation curve." }
    },
    {
      "id": "q25",
      "prompt": { "pt": "Um dos desafios de plotar um sistema R-407C num diagrama pressão/entalpia é que esse refrigerante:", "en": "One of the challenges of plotting an R-407C system on a pressure/enthalpy chart is that this refrigerant:" },
      "options": [
        { "id": "a", "text": { "pt": "É um composto único, com uma única pressão para cada temperatura", "en": "Is a single-compound refrigerant with one pressure for each temperature" } },
        { "id": "b", "text": { "pt": "Tem um temperature glide significativo", "en": "Has a significant temperature glide" } },
        { "id": "c", "text": { "pt": "É uma mistura binária de R-32 e R-125, o que o torna instável", "en": "Is a binary blend of R-32 and R-125, making it unstable" } },
        { "id": "d", "text": { "pt": "É facilmente confundido com R-134a e R-410A", "en": "Is easily mistaken for R-134a and R-410A" } }
      ],
      "correct": "b",
      "explanation": { "pt": "R-407C é uma mistura zeotrópica com temperature glide considerável, o que faz suas isotermas aparecerem inclinadas no gráfico.", "en": "R-407C is a zeotropic blend with considerable temperature glide, which makes its isotherms appear angled on the chart." }
    }
  ]
};

window.CURRENT_UNIT_DATA = UNIT3_DATA;
