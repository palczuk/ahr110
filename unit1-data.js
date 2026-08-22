const UNIT1_DATA = {
  "meta": {
    "eyebrow": {
      "pt": "Unidade 01 · Seção I — Teoria do Calor",
      "en": "Unit 01 · Section I — Theory of Heat"
    },
    "title": {
      "pt": "Calor, Temperatura e Pressão",
      "en": "Heat, Temperature, and Pressure"
    },
    "subtitle": {
      "pt": "Antes de tocar em qualquer manifold, você precisa falar a língua do ofício: calor não é temperatura, temperatura não é pressão, e as três se recusam a andar sozinhas. Esta unidade é o alicerce de tudo o que vem depois.",
      "en": "Before you ever touch a manifold, you need to speak the trade's language: heat isn't temperature, temperature isn't pressure, and none of the three walk alone. This unit is the foundation everything else is built on."
    }
  },
  "safety": [
    {
      "pt": "Técnicos de HVACR lidam com temperaturas muito altas e muito baixas — use luvas e EPI adequado para reduzir o risco de lesões.",
      "en": "HVACR technicians are exposed to very high and very low temperatures — wear gloves and appropriate PPE to reduce injury risk."
    },
    {
      "pt": "Muitos fluidos usados no ofício estão pressurizados — transporte vasos de pressão na vertical e sempre presos.",
      "en": "Many fluids used in the trade are under pressure — transport pressure vessels vertically and keep them properly secured."
    },
    {
      "pt": "Garanta que todos os cilindros estejam bem tampados para evitar liberações acidentais.",
      "en": "Make sure all cylinders are properly capped to prevent accidental releases."
    },
    {
      "pt": "Confirme que os instrumentos de teste estão calibrados e operacionais antes de confiar numa leitura.",
      "en": "Confirm test instruments are properly calibrated and fully operational before trusting a reading."
    },
    {
      "pt": "Guarde os instrumentos corretamente quando não estiverem em uso, para evitar danos.",
      "en": "Store instruments properly when not in use to prevent damage."
    }
  ],
  "sections": [
    {
      "id": "1.1",
      "title": {
        "pt": "Calor, Temperatura e Pressão — a diferença que ninguém te ensina em casa",
        "en": "Heat, Temperature, and Pressure — the difference nobody teaches you at home"
      },
      "text": {
        "pt": "No dia a dia, \"quente\" e \"frio\" são só opinião — dependem do que você sentiu ontem. Numa oficina de HVACR isso não serve: você precisa de números. Frio, tecnicamente, é só a ausência de calor. E quando o assunto é diagnosticar um sistema, o técnico se apoia em três ideias que parecem sinônimas mas não são — calor (a energia em si), temperatura (o quão intenso é esse calor) e pressão (a força que o refrigerante exerce dentro do sistema, lida com um manifold). Dominar essas três palavras é o que separa \"parece que tá funcionando\" de um diagnóstico de verdade.",
        "en": "In everyday life, \"hot\" and \"cold\" are just opinions — they depend on what you felt yesterday. In an HVACR shop that doesn't cut it: you need numbers. Cold, technically, is nothing more than the absence of heat. When it's time to diagnose a system, the technician leans on three ideas that sound like synonyms but aren't — heat (the energy itself), temperature (how intense that heat is), and pressure (the force the refrigerant exerts inside the system, read with a manifold). Mastering these three words is what separates \"seems to be working\" from an actual diagnosis."
      },
      "keyValues": []
    },
    {
      "id": "1.2",
      "title": {
        "pt": "Temperatura — o nível, não a quantidade",
        "en": "Temperature — the level, not the amount"
      },
      "text": {
        "pt": "Temperatura é o nível de intensidade do calor — não confunda com a quantidade de calor armazenada em algo. Água congela a 32°F/0°C e ferve a 212°F/100°C, mas só sob condições padrão de nível do mar (29,92 pol. Hg / 14,696 psia). Suba a altitude e a água ferve mais cedo: em Denver (~5.600 pés) ferve a ~203°F; no topo do Everest, a ~167°F. No fundo dessa escala existe o zero absoluto, −460°F / −273°C, onde toda movimentação molecular teoricamente para — nunca alcançado na prática, mas a ciência já chegou a um milionésimo de grau de distância. E existem duas famílias de escala: Fahrenheit (sistema inglês, EUA) e Celsius (métrico/SI, o resto do mundo) — cada uma com sua versão \"absoluta\" (Rankine para Fahrenheit, Kelvin para Celsius).",
        "en": "Temperature is the level of heat intensity — don't confuse it with the amount of heat stored in something. Water freezes at 32°F/0°C and boils at 212°F/100°C, but only under standard sea-level conditions (29.92 in. Hg / 14.696 psia). Climb in altitude and water boils sooner: in Denver (~5,600 ft) it boils around 203°F; atop Everest, around 167°F. At the bottom of that scale sits absolute zero, −460°F / −273°C, where all molecular motion theoretically stops — never actually reached, but science has gotten within a millionth of a degree of it. And there are two scale families: Fahrenheit (English system, U.S.) and Celsius (metric/SI, the rest of the world) — each with an \"absolute\" version too (Rankine for Fahrenheit, Kelvin for Celsius)."
      },
      "keyValues": [
        {
          "label": {
            "pt": "Congelamento da água (padrão)",
            "en": "Water freezing point (standard)"
          },
          "value": {
            "pt": "32°F / 0°C",
            "en": "32°F / 0°C"
          }
        },
        {
          "label": {
            "pt": "Ebulição da água (padrão)",
            "en": "Water boiling point (standard)"
          },
          "value": {
            "pt": "212°F / 100°C",
            "en": "212°F / 100°C"
          }
        },
        {
          "label": {
            "pt": "Zero absoluto",
            "en": "Absolute zero"
          },
          "value": {
            "pt": "−460°F / −273°C / 0°R / 0°K",
            "en": "−460°F / −273°C / 0°R / 0°K"
          }
        },
        {
          "label": {
            "pt": "Fórmula °C → °F",
            "en": "°C → °F formula"
          },
          "value": {
            "pt": "°F = (1,8 × °C) + 32",
            "en": "°F = (1.8 × °C) + 32"
          }
        },
        {
          "label": {
            "pt": "Fórmula °F → °C",
            "en": "°F → °C formula"
          },
          "value": {
            "pt": "°C = (°F − 32) ÷ 1,8",
            "en": "°C = (°F − 32) ÷ 1.8"
          }
        }
      ]
    },
    {
      "id": "1.3",
      "title": {
        "pt": "Introdução ao Calor — energia que só muda de forma",
        "en": "Introduction to Heat — energy that only changes form"
      },
      "text": {
        "pt": "A primeira lei da termodinâmica é simples de enunciar e profunda na prática: energia não se cria nem se destrói, só muda de forma. \"Gerar\" calor é, na real, converter outro tipo de energia (combustível, eletricidade) em calor. Para medir a quantidade desse calor, o ofício usa o BTU (British Thermal Unit): a energia necessária para elevar 1 libra de água em 1°F. Equipamentos são avaliados em BTU/h — a taxa de transferência. Um ar-condicionado de 24.000 BTU/h remove 24.000 BTU de calor da estrutura a cada hora que roda. E o calor sempre flui do mais quente para o mais frio — quanto maior a diferença de temperatura, mais rápido esse fluxo acontece.",
        "en": "The first law of thermodynamics is simple to state and profound in practice: energy is never created or destroyed, only converted. \"Generating\" heat is really converting some other form of energy (fuel, electricity) into heat. To measure the amount of that heat, the trade uses the Btu (British thermal unit): the energy needed to raise 1 pound of water by 1°F. Equipment is rated in Btu/h — the rate of transfer. A 24,000 Btu/h air conditioner removes 24,000 Btu of heat from the structure every hour it runs. And heat always flows from warmer to cooler — the bigger the temperature difference, the faster that flow happens."
      },
      "keyValues": [
        {
          "label": {
            "pt": "1 BTU",
            "en": "1 Btu"
          },
          "value": {
            "pt": "Calor p/ elevar 1 lb de água em 1°F",
            "en": "Heat to raise 1 lb of water by 1°F"
          }
        },
        {
          "label": {
            "pt": "BTU/h",
            "en": "Btu/h"
          },
          "value": {
            "pt": "Taxa de transferência de calor (usada em plaquetas de equipamento)",
            "en": "Rate of heat transfer (used on equipment nameplates)"
          }
        },
        {
          "label": {
            "pt": "Direção do fluxo de calor",
            "en": "Direction of heat flow"
          },
          "value": {
            "pt": "Sempre do mais quente → mais frio",
            "en": "Always warmer → cooler"
          }
        }
      ]
    },
    {
      "id": "1.4",
      "title": {
        "pt": "Condução — calor de molécula em molécula",
        "en": "Conduction — heat, molecule by molecule"
      },
      "text": {
        "pt": "Condução é o calor viajando dentro de um material, de molécula para molécula — como uma barra de cobre que esquenta na outra ponta minutos depois de você colocar uma extremidade no fogo. Nem todo material conduz na mesma velocidade: cobre é excelente condutor, vidro é péssimo. É por isso que a lataria de um carro parece mais fria que um poste de madeira na mesma temperatura — o metal puxa o calor da sua mão mais rápido, criando a sensação de frio (a sensação de \"frio\" é, na real, a sensação de perder calor). Bônus técnico: bons condutores de calor costumam ser bons condutores de eletricidade também — cobre lidera nos dois, vidro é isolante nos dois.",
        "en": "Conduction is heat traveling within a material, molecule to molecule — like a copper rod that heats up at the far end minutes after you put one end in a flame. Not every material conducts at the same rate: copper is an excellent conductor, glass is a poor one. That's why a car's sheet metal feels colder than a wooden fence post at the exact same temperature — the metal pulls heat out of your hand faster, creating the sensation of cold (the feeling of \"cold\" is really the feeling of losing heat). Technical bonus: good heat conductors also tend to be good electrical conductors — copper leads on both counts, glass insulates on both."
      },
      "keyValues": [
        {
          "label": {
            "pt": "Melhor condutor (referência)",
            "en": "Best conductor (reference)"
          },
          "value": {
            "pt": "Cobre",
            "en": "Copper"
          }
        },
        {
          "label": {
            "pt": "Péssimo condutor (referência)",
            "en": "Poor conductor (reference)"
          },
          "value": {
            "pt": "Vidro",
            "en": "Glass"
          }
        }
      ]
    },
    {
      "id": "1.5",
      "title": {
        "pt": "Convecção — calor que pega carona no ar ou na água",
        "en": "Convection — heat hitching a ride on air or water"
      },
      "text": {
        "pt": "Convecção é o transporte de calor por um fluido em movimento — ar ou água. Convecção forçada usa ventiladores, sopradores ou bombas (o clássico exemplo: uma fornalha a gás puxa ar de retorno a 70°F, passa sobre o trocador de calor e devolve ar de suprimento a 130°F, empurrado pelo blower). Convecção natural não precisa de motor nenhum: ar quente se torna mais leve, sobe, e puxa ar frio para tomar seu lugar — é assim que um aquecedor de rodapé (baseboard) aquece um cômodo inteiro sem nenhuma ventoinha.",
        "en": "Convection is heat transported by a moving fluid — air or water. Forced convection uses fans, blowers, or pumps (the classic example: a gas furnace pulls 70°F return air, passes it over the heat exchanger, and delivers 130°F supply air, pushed by the blower). Natural convection needs no motor at all: heated air becomes lighter, rises, and pulls cooler air in to take its place — that's how a baseboard heater warms an entire room with no fan whatsoever."
      },
      "keyValues": [
        {
          "label": {
            "pt": "Convecção forçada",
            "en": "Forced convection"
          },
          "value": {
            "pt": "Ventilador / blower / bomba",
            "en": "Fan / blower / pump"
          }
        },
        {
          "label": {
            "pt": "Convecção natural",
            "en": "Natural convection"
          },
          "value": {
            "pt": "Ar quente sobe sozinho (mais leve)",
            "en": "Warm air rises on its own (lighter)"
          }
        }
      ]
    },
    {
      "id": "1.6",
      "title": {
        "pt": "Radiação — o único calor que atravessa o vácuo",
        "en": "Radiation — the only heat that crosses a vacuum"
      },
      "text": {
        "pt": "O Sol está a 93 milhões de milhas de distância e mesmo assim você sente o calor dele na pele — isso é radiação. É o único tipo de transferência de calor que viaja pelo espaço sem aquecer o próprio espaço, sendo absorvido só quando encontra o primeiro objeto sólido pela frente (por isso é o único que atravessa o vácuo). A intensidade cai com o quadrado da distância: dobre a distância, a intensidade sentida cai para 1/4. Aquecedores elétricos que ficam vermelho-vivo são radiação em ação — eles não aquecem o ar ao redor, aquecem os objetos sólidos que os raios encontram.",
        "en": "The sun sits 93 million miles away and yet you feel its heat on your skin — that's radiation. It's the only kind of heat transfer that travels through space without heating the space itself, getting absorbed only when it hits the first solid object in its path (which is why it's the only one that crosses a vacuum). Intensity falls off with the square of the distance: double the distance, and the intensity you feel drops to 1/4. Electric heaters that glow red-hot are radiation at work — they don't heat the surrounding air, they heat the solid objects the rays land on."
      },
      "keyValues": [
        {
          "label": {
            "pt": "Única forma que cruza o vácuo",
            "en": "Only form that crosses a vacuum"
          },
          "value": {
            "pt": "Radiação",
            "en": "Radiation"
          }
        },
        {
          "label": {
            "pt": "Regra da distância",
            "en": "Distance rule"
          },
          "value": {
            "pt": "Intensidade cai com o quadrado da distância",
            "en": "Intensity falls with the square of the distance"
          }
        }
      ]
    },
    {
      "id": "1.7",
      "title": {
        "pt": "Calor Sensível — o que o termômetro registra",
        "en": "Sensible Heat — what the thermometer registers"
      },
      "text": {
        "pt": "Sempre que a temperatura de algo muda e você consegue medir essa mudança com um termômetro, isso é calor sensível — o tipo \"óbvio\", que dá pra sentir e registrar. É o oposto direto do próximo conceito, calor latente, que engana justamente por não mexer no termômetro.",
        "en": "Whenever something's temperature changes and you can measure that change with a thermometer, that's sensible heat — the \"obvious\" kind, the one you can feel and record. It's the direct opposite of the next concept, latent heat, which is sneaky precisely because it doesn't move the thermometer at all."
      },
      "keyValues": []
    },
    {
      "id": "1.8",
      "title": {
        "pt": "Calor Latente — o calor que muda tudo, menos o termômetro",
        "en": "Latent Heat — the heat that changes everything except the thermometer"
      },
      "text": {
        "pt": "Este é o conceito que mais surpreende quem está começando: nem todo calor adicionado sobe a temperatura. Coloque água fervendo num recipiente aberto e siga adicionando calor — ela ferve mais rápido, mas a temperatura continua travada em 212°F. Esse calor \"escondido\" está mudando o estado da substância, não sua temperatura, e ganha três nomes conforme a direção: calor latente de vaporização (líquido → vapor: 970 BTU/lb para a água), calor latente de condensação (vapor → líquido: os mesmos 970 BTU/lb, liberados) e calor latente de fusão (sólido ↔ líquido: 144 BTU/lb para a água). Some tudo isso no gráfico calor×temperatura da água (0°F até virar vapor) e o total chega a 1.310 BTU por libra — e qualquer calor adicionado depois do ponto de vapor saturado vira superaquecimento, o mesmo conceito que você vai usar o tempo todo com o manifold gauge.",
        "en": "This is the concept that trips up beginners the most: not all added heat raises the temperature. Put boiling water in an open pot and keep adding heat — it boils faster, but the temperature stays locked at 212°F. That \"hidden\" heat is changing the substance's state, not its temperature, and it gets three names depending on direction: latent heat of vaporization (liquid → vapor: 970 Btu/lb for water), latent heat of condensation (vapor → liquid: the same 970 Btu/lb, released), and latent heat of fusion (solid ↔ liquid: 144 Btu/lb for water). Add it all up on water's heat-vs-temperature chart (0°F all the way to vapor) and the total comes to 1,310 Btu per pound — and any heat added past the saturated vapor point becomes superheat, the very concept you'll use constantly with a manifold gauge."
      },
      "keyValues": [
        {
          "label": {
            "pt": "Calor latente de fusão (água)",
            "en": "Latent heat of fusion (water)"
          },
          "value": {
            "pt": "144 BTU/lb",
            "en": "144 Btu/lb"
          }
        },
        {
          "label": {
            "pt": "Calor latente de vaporização (água)",
            "en": "Latent heat of vaporization (water)"
          },
          "value": {
            "pt": "970 BTU/lb (970,3 sem arredondar)",
            "en": "970 Btu/lb (970.3 unrounded)"
          }
        },
        {
          "label": {
            "pt": "Total 0°F (gelo) → vapor 212°F",
            "en": "Total 0°F ice → 212°F steam"
          },
          "value": {
            "pt": "1.310 BTU/lb",
            "en": "1,310 Btu/lb"
          }
        },
        {
          "label": {
            "pt": "Calor além do vapor saturado",
            "en": "Heat past saturated vapor"
          },
          "value": {
            "pt": "Superaquecimento (superheat)",
            "en": "Superheat"
          }
        }
      ]
    },
    {
      "id": "1.9",
      "title": {
        "pt": "Calor Específico — cada material tem seu próprio ritmo",
        "en": "Specific Heat — every material has its own rhythm"
      },
      "text": {
        "pt": "1 BTU aquece 1 libra de água em exatamente 1°F — mas isso é uma particularidade da água, não uma regra universal. Calor específico é quanto calor um material específico precisa para subir 1°F por libra. Gelo e vapor, por exemplo, só precisam de 0,5 BTU/lb/°F — sobem de temperatura duas vezes mais rápido que a água líquida. É por isso que a mesma quantidade de calor afeta cobre, aço e ar de formas completamente diferentes.",
        "en": "1 Btu heats 1 pound of water by exactly 1°F — but that's a quirk of water, not a universal rule. Specific heat is how much heat a given material needs to rise 1°F per pound. Ice and steam, for instance, only need 0.5 Btu/lb/°F — they heat up twice as fast as liquid water. That's why the same amount of heat affects copper, steel, and air in completely different ways."
      },
      "keyValues": [
        {
          "label": {
            "pt": "Água (referência)",
            "en": "Water (reference)"
          },
          "value": {
            "pt": "1,00 BTU/lb/°F",
            "en": "1.00 Btu/lb/°F"
          }
        },
        {
          "label": {
            "pt": "Gelo / Vapor",
            "en": "Ice / Steam"
          },
          "value": {
            "pt": "0,504 / 0,5 BTU/lb/°F",
            "en": "0.504 / 0.5 Btu/lb/°F"
          }
        },
        {
          "label": {
            "pt": "Ar",
            "en": "Air"
          },
          "value": {
            "pt": "0,24 BTU/lb/°F (média)",
            "en": "0.24 Btu/lb/°F (average)"
          }
        },
        {
          "label": {
            "pt": "Cobre",
            "en": "Copper"
          },
          "value": {
            "pt": "0,092 BTU/lb/°F",
            "en": "0.092 Btu/lb/°F"
          }
        },
        {
          "label": {
            "pt": "Aço",
            "en": "Steel"
          },
          "value": {
            "pt": "0,116 BTU/lb/°F",
            "en": "0.116 Btu/lb/°F"
          }
        }
      ]
    },
    {
      "id": "1.10",
      "title": {
        "pt": "Dimensionando Equipamento de Aquecimento — a fórmula que resolve tudo",
        "en": "Sizing Heating Equipment — the formula that solves it all"
      },
      "text": {
        "pt": "Junte tudo que você acabou de aprender numa única fórmula prática: Q = W × Calor Específico × ΔT, onde Q é a quantidade de calor necessária, W é o peso da substância e ΔT é a variação de temperatura. Exemplo real do livro: uma fábrica precisa aquecer 1.000 lb/h de aço de 0°F para 70°F antes de usiná-lo (calor específico do aço = 0,116). Q = 1.000 × 0,116 × 70 = 8.120 BTU/h. Essa mesma fórmula é a espinha dorsal de qualquer cálculo de carga térmica que você vai fazer daqui pra frente.",
        "en": "Pull everything you just learned into one practical formula: Q = W × Specific Heat × ΔT, where Q is the heat quantity needed, W is the weight of the substance, and ΔT is the temperature change. Real example straight from the book: a plant needs to heat 1,000 lb/h of steel from 0°F to 70°F before machining it (steel's specific heat = 0.116). Q = 1,000 × 0.116 × 70 = 8,120 Btu/h. That same formula is the backbone of every heat-load calculation you'll run from here on out."
      },
      "keyValues": [
        {
          "label": {
            "pt": "Fórmula",
            "en": "Formula"
          },
          "value": {
            "pt": "Q = W × Calor Específico × ΔT",
            "en": "Q = W × Specific Heat × ΔT"
          }
        },
        {
          "label": {
            "pt": "Exemplo (aço, 1000 lb/h, 0→70°F)",
            "en": "Example (steel, 1000 lb/h, 0→70°F)"
          },
          "value": {
            "pt": "8.120 BTU/h",
            "en": "8,120 Btu/h"
          }
        }
      ]
    },
    {
      "id": "1.11",
      "title": {
        "pt": "Pressão — força dividida por área",
        "en": "Pressure — force divided by area"
      },
      "text": {
        "pt": "Pressão é simplesmente força por unidade de área, medida em psi (libras por polegada quadrada). 1 libra apoiada em 1 pol² = 1 psi. A mesma lógica explica por que raquetes de neve funcionam: espalhar o mesmo peso numa área maior reduz a pressão exercida (uma cúbico de água de 12x12x12 pol exerce 0,433 psi no fundo; a mesma água num recipiente mais raso e largo, 24x24x3 pol, exerce só 0,108 psi — menos pressão, mesma quantidade de água).",
        "en": "Pressure is simply force per unit area, measured in psi (pounds per square inch). 1 pound resting on 1 sq. in. = 1 psi. That same logic is why snowshoes work: spreading the same weight over a larger area lowers the pressure exerted (a 12x12x12 in. cube of water exerts 0.433 psi at the bottom; the same water in a shallower, wider container — 24x24x3 in. — exerts only 0.108 psi — less pressure, same amount of water)."
      },
      "keyValues": [
        {
          "label": {
            "pt": "Definição",
            "en": "Definition"
          },
          "value": {
            "pt": "Força ÷ Área (psi)",
            "en": "Force ÷ Area (psi)"
          }
        },
        {
          "label": {
            "pt": "Peso da água",
            "en": "Weight of water"
          },
          "value": {
            "pt": "62,4 lb/ft³",
            "en": "62.4 lb/ft³"
          }
        }
      ]
    },
    {
      "id": "1.12",
      "title": {
        "pt": "Pressão Atmosférica — vivemos no fundo de um oceano de ar",
        "en": "Atmospheric Pressure — we live at the bottom of an ocean of air"
      },
      "text": {
        "pt": "A atmosfera da Terra é como um oceano de ar com peso próprio — e nós vivemos no fundo dele. Ao nível do mar, sob condições padrão, essa \"coluna de ar\" exerce 14,696 psi. Isso é medido com um barômetro (tubo de mercúrio) — ao nível do mar e 70°F, o mercúrio se estabiliza em 29,92 polegadas. Suba de altitude e essa coluna cai cerca de 1 polegada a cada 1.000 pés. É por isso que meteorologistas falam de \"sistema de baixa pressão\" (tende a chuva/nuvens) e \"alta pressão\" (tempo mais seco).",
        "en": "Earth's atmosphere is like an ocean of air with its own weight — and we live at the bottom of it. At sea level, under standard conditions, that \"column of air\" exerts 14.696 psi. It's measured with a barometer (a mercury column) — at sea level and 70°F, the mercury settles at 29.92 inches. Climb in altitude and that column drops roughly 1 inch per 1,000 feet. That's why forecasters talk about \"low-pressure systems\" (tend toward rain/clouds) and \"high pressure\" (drier weather)."
      },
      "keyValues": [
        {
          "label": {
            "pt": "Pressão atmosférica padrão (nível do mar)",
            "en": "Standard atmospheric pressure (sea level)"
          },
          "value": {
            "pt": "14,696 psi / 29,92 pol. Hg",
            "en": "14.696 psi / 29.92 in. Hg"
          }
        },
        {
          "label": {
            "pt": "Queda por altitude",
            "en": "Drop per altitude"
          },
          "value": {
            "pt": "~1 pol. Hg a cada 1.000 pés",
            "en": "~1 in. Hg per 1,000 ft"
          }
        }
      ]
    },
    {
      "id": "1.13",
      "title": {
        "pt": "Manômetros — psig, psia e o tubo de Bourdon",
        "en": "Pressure Gauges — psig, psia, and the Bourdon tube"
      },
      "text": {
        "pt": "O coração mecânico de todo manômetro de refrigeração é o tubo de Bourdon, que se deforma sob pressão e move um ponteiro. No jogo de manifold, o manômetro composto (lado de baixa) lê pressões acima E abaixo da atmosférica (inclusive vácuo); o manômetro de alta lê só positivo, geralmente até 500 psi (ou 800 nos digitais). Os dois são calibrados para zerar quando abertos à atmosfera — por isso a leitura deles é psig (pressão manométrica, relativa à atmosfera). Para saber a pressão absoluta (psia, relativa ao vácuo real), some a atmosférica: psia = psig + 14,7. Em vácuo (abaixo de 0 psig), a conversão usa polegadas de mercúrio: psia = (30 − leitura em pol. Hg) ÷ 2. Esse par psig/psia é exatamente o que sustenta os cálculos de superaquecimento e sub-resfriamento que você vai fazer na prática, unidade após unidade.",
        "en": "The mechanical heart of every refrigeration gauge is the Bourdon tube, which flexes under pressure and moves a needle. On a manifold set, the compound gauge (low side) reads pressures above AND below atmospheric (including vacuum); the high-side gauge reads positive only, usually up to 500 psi (or 800 on digital units). Both are calibrated to read zero when open to atmosphere — which is why their reading is psig (gauge pressure, relative to atmosphere). To get absolute pressure (psia, relative to a true vacuum), add atmospheric pressure: psia = psig + 14.7. In a vacuum (below 0 psig), the conversion uses inches of mercury: psia = (30 − in. Hg reading) ÷ 2. That psig/psia pair is exactly what underlies the superheat and subcooling calculations you'll be running in practice, unit after unit."
      },
      "keyValues": [
        {
          "label": {
            "pt": "psia = ",
            "en": "psia = "
          },
          "value": {
            "pt": "psig + 14,7",
            "en": "psig + 14.7"
          }
        },
        {
          "label": {
            "pt": "psia em vácuo = ",
            "en": "psia in vacuum = "
          },
          "value": {
            "pt": "(30 − pol. Hg) ÷ 2",
            "en": "(30 − in. Hg) ÷ 2"
          }
        },
        {
          "label": {
            "pt": "Faixa manômetro de alta",
            "en": "High-side gauge range"
          },
          "value": {
            "pt": "Até 500 psi (800 psi digital)",
            "en": "Up to 500 psi (800 psi digital)"
          }
        },
        {
          "label": {
            "pt": "Componente mecânico central",
            "en": "Core mechanical component"
          },
          "value": {
            "pt": "Tubo de Bourdon",
            "en": "Bourdon tube"
          }
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "prompt": {
        "pt": "Como o livro define temperatura?",
        "en": "How does the book define temperature?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "O conteúdo total de calor de uma substância",
            "en": "The total heat content of a substance"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "O nível de intensidade do calor",
            "en": "The level of heat intensity"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "A unidade britânica de calor (BTU)",
            "en": "The British unit of heat (Btu)"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "A ausência total de frio",
            "en": "The total absence of cold"
          }
        }
      ],
      "correct": "b",
      "explanation": {
        "pt": "Temperatura é o nível de intensidade do calor — não a quantidade de calor armazenada.",
        "en": "Temperature is the level of heat intensity — not the amount of heat stored."
      }
    },
    {
      "id": "q2",
      "prompt": {
        "pt": "Quais são as condições padrão sob as quais a água ferve a 212°F?",
        "en": "What are the standard conditions under which water boils at 212°F?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "14,696 psig ou 29,92 pol. Hg",
            "en": "14.696 psig or 29.92 in. Hg"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "0 psia ou 29,99 pol. Hg",
            "en": "0 psia or 29.99 in. Hg"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "0 psig ou 0,92 pol. Hg",
            "en": "0 psig or 0.92 in. Hg"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "14,696 psia ou 29,92 pol. Hg",
            "en": "14.696 psia or 29.92 in. Hg"
          }
        }
      ],
      "correct": "d",
      "explanation": {
        "pt": "Condições padrão = 14,696 psia (pressão absoluta) ou 29,92 pol. Hg ao nível do mar.",
        "en": "Standard conditions = 14.696 psia (absolute pressure) or 29.92 in. Hg at sea level."
      }
    },
    {
      "id": "q3",
      "prompt": {
        "pt": "Fahrenheit, Celsius, Rankine e Kelvin são, todas, o quê?",
        "en": "Fahrenheit, Celsius, Rankine, and Kelvin are all what?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "Escalas de temperatura",
            "en": "Temperature scales"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "Escalas de pressão",
            "en": "Pressure scales"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "Unidades de BTU",
            "en": "Btu units"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "Métodos de transferência de calor",
            "en": "Heat transfer methods"
          }
        }
      ],
      "correct": "a",
      "explanation": {
        "pt": "Todas as quatro são escalas de temperatura — duas relativas (F, C) e duas absolutas (R, K).",
        "en": "All four are temperature scales — two relative (F, C) and two absolute (R, K)."
      }
    },
    {
      "id": "q4",
      "prompt": {
        "pt": "Sob condições padrão, a água congela a quantos graus Celsius?",
        "en": "Under standard conditions, at what Celsius temperature does water freeze?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "0°C",
            "en": "0°C"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "10°C",
            "en": "10°C"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "20°C",
            "en": "20°C"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "32°C",
            "en": "32°C"
          }
        }
      ],
      "correct": "a",
      "explanation": {
        "pt": "32°F equivale a 0°C — o ponto de congelamento padrão da água.",
        "en": "32°F equals 0°C — water's standard freezing point."
      }
    },
    {
      "id": "q5",
      "prompt": {
        "pt": "A que temperatura toda movimentação molecular teoricamente para?",
        "en": "At what temperature does all molecular motion theoretically stop?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "212°F",
            "en": "212°F"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "−32°F",
            "en": "−32°F"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "−460°F",
            "en": "−460°F"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "0°F",
            "en": "0°F"
          }
        }
      ],
      "correct": "c",
      "explanation": {
        "pt": "−460°F (0° Rankine / 0° Kelvin) é o zero absoluto — teórico, nunca atingido na prática.",
        "en": "−460°F (0° Rankine / 0° Kelvin) is absolute zero — theoretical, never actually reached."
      }
    },
    {
      "id": "q6",
      "prompt": {
        "pt": "Um BTU eleva a temperatura de quê?",
        "en": "One Btu raises the temperature of what?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "1 galão de água em 1°F",
            "en": "1 gallon of water by 1°F"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "1 libra de água em 1°F",
            "en": "1 pound of water by 1°F"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "1 libra de água em 1°K",
            "en": "1 pound of water by 1°K"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "1 galão de água em 1°C",
            "en": "1 gallon of water by 1°C"
          }
        }
      ],
      "correct": "b",
      "explanation": {
        "pt": "Por definição, 1 BTU = calor necessário para elevar 1 lb de água em 1°F.",
        "en": "By definition, 1 Btu = the heat needed to raise 1 lb of water by 1°F."
      }
    },
    {
      "id": "q7",
      "prompt": {
        "pt": "Em que direção o calor flui naturalmente entre duas substâncias?",
        "en": "In which direction does heat naturally flow between two substances?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "De frio para frio",
            "en": "From cold to cold"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "De frio para quente",
            "en": "From cold to warm"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "De quente para mais quente",
            "en": "From warm to warmer"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "De quente para frio",
            "en": "From warm to cold"
          }
        }
      ],
      "correct": "d",
      "explanation": {
        "pt": "Calor sempre flui do mais quente para o mais frio — nunca o contrário sem trabalho externo.",
        "en": "Heat always flows from warmer to cooler — never the reverse without external work."
      }
    },
    {
      "id": "q8",
      "prompt": {
        "pt": "Transferência de calor molécula a molécula dentro de um material é chamada de quê?",
        "en": "Heat transfer from molecule to molecule within a material is called what?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "Radiação",
            "en": "Radiation"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "Convecção",
            "en": "Convection"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "Condução",
            "en": "Conduction"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "Evaporação",
            "en": "Evaporation"
          }
        }
      ],
      "correct": "c",
      "explanation": {
        "pt": "Condução é o calor se propagando molécula a molécula dentro do próprio material.",
        "en": "Conduction is heat propagating molecule by molecule within the material itself."
      }
    },
    {
      "id": "q9",
      "prompt": {
        "pt": "Um aumento de calor sensível causa o quê?",
        "en": "An increase in sensible heat causes what?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "Uma leitura mais alta no termômetro",
            "en": "A higher thermometer reading"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "Uma leitura mais baixa no termômetro",
            "en": "A lower thermometer reading"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "Nenhuma mudança na leitura",
            "en": "No change in the reading"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "O gelo derreter",
            "en": "Ice to melt"
          }
        }
      ],
      "correct": "a",
      "explanation": {
        "pt": "Calor sensível é, por definição, o tipo que você consegue medir com termômetro — a leitura sobe.",
        "en": "Sensible heat is, by definition, the kind you can measure with a thermometer — the reading rises."
      }
    },
    {
      "id": "q10",
      "prompt": {
        "pt": "Calor latente causa o quê?",
        "en": "Latent heat causes what?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "Uma leitura mais alta no termômetro",
            "en": "A higher thermometer reading"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "Aumento de temperatura",
            "en": "A rise in temperature"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "Uma mudança de estado",
            "en": "A change of state"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "Queda de temperatura",
            "en": "A drop in temperature"
          }
        }
      ],
      "correct": "c",
      "explanation": {
        "pt": "Calor latente muda o estado da substância (sólido↔líquido↔vapor) sem alterar a temperatura.",
        "en": "Latent heat changes the substance's state (solid↔liquid↔vapor) without changing its temperature."
      }
    },
    {
      "id": "q11",
      "prompt": {
        "pt": "Calor transferido por meio de um fluido em movimento (ar ou água) é chamado de quê?",
        "en": "Heat transferred by a moving fluid (air or water) is called what?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "Radiação",
            "en": "Radiation"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "Convecção",
            "en": "Convection"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "Condução",
            "en": "Conduction"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "Evaporação",
            "en": "Evaporation"
          }
        }
      ],
      "correct": "b",
      "explanation": {
        "pt": "Convecção depende do movimento de um fluido — forçado (ventilador) ou natural (ar quente subindo).",
        "en": "Convection depends on a moving fluid — forced (fan) or natural (warm air rising)."
      }
    },
    {
      "id": "q12",
      "prompt": {
        "pt": "Calor que viaja pelo espaço sem aquecê-lo, e aquece o primeiro objeto sólido que encontra, é chamado de quê?",
        "en": "Heat that travels through space without heating it, and heats the first solid object it strikes, is called what?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "Radiação",
            "en": "Radiation"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "Convecção",
            "en": "Convection"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "Condução",
            "en": "Conduction"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "Evaporação",
            "en": "Evaporation"
          }
        }
      ],
      "correct": "a",
      "explanation": {
        "pt": "Radiação é a única forma de transferência de calor que atravessa o vácuo sem aquecê-lo.",
        "en": "Radiation is the only heat-transfer form that crosses a vacuum without heating it."
      }
    },
    {
      "id": "q13",
      "prompt": {
        "pt": "Calor específico é a quantidade de calor necessária para elevar 1°F de 1 libra de qual substância?",
        "en": "Specific heat is the amount of heat needed to raise 1 lb of which substance by 1°F?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "Água",
            "en": "Water"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "Ar",
            "en": "Air"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "Refrigerante",
            "en": "Refrigerant"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "Qualquer substância",
            "en": "Any substance"
          }
        }
      ],
      "correct": "d",
      "explanation": {
        "pt": "Calor específico é uma propriedade de qualquer substância — cada material tem o seu próprio valor.",
        "en": "Specific heat is a property of any substance — every material has its own value."
      }
    },
    {
      "id": "q14",
      "prompt": {
        "pt": "A pressão atmosférica ao nível do mar, em condições padrão, é de quanto?",
        "en": "What is atmospheric pressure at sea level under standard conditions?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "14,696 pol. Hg, 29,92 psia",
            "en": "14.696 in. Hg, 29.92 psia"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "29,92 pol. Hg, 14,696 psia",
            "en": "29.92 in. Hg, 14.696 psia"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "0,92 pol. Hg, 0 psia",
            "en": "0.92 in. Hg, 0 psia"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "29,99 pol. Hg, 0 psia",
            "en": "29.99 in. Hg, 0 psia"
          }
        }
      ],
      "correct": "b",
      "explanation": {
        "pt": "29,92 pol. Hg equivalem a 14,696 psia — o padrão de nível do mar.",
        "en": "29.92 in. Hg equals 14.696 psia — the sea-level standard."
      }
    },
    {
      "id": "q15",
      "prompt": {
        "pt": "80°F equivale a quantos °C?",
        "en": "80°F is equivalent to how many °C?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "26,7°C",
            "en": "26.7°C"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "35,4°C",
            "en": "35.4°C"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "41,2°C",
            "en": "41.2°C"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "48,6°C",
            "en": "48.6°C"
          }
        }
      ],
      "correct": "a",
      "explanation": {
        "pt": "°C = (80 − 32) ÷ 1,8 = 26,7°C.",
        "en": "°C = (80 − 32) ÷ 1.8 = 26.7°C."
      }
    },
    {
      "id": "q16",
      "prompt": {
        "pt": "22°C equivale a quantos °F?",
        "en": "22°C is equivalent to how many °F?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "26,7°F",
            "en": "26.7°F"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "34,5°F",
            "en": "34.5°F"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "71,6°F",
            "en": "71.6°F"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "81,4°F",
            "en": "81.4°F"
          }
        }
      ],
      "correct": "c",
      "explanation": {
        "pt": "°F = (1,8 × 22) + 32 = 71,6°F.",
        "en": "°F = (1.8 × 22) + 32 = 71.6°F."
      }
    },
    {
      "id": "q17",
      "prompt": {
        "pt": "Para converter de psig para psia, você deve:",
        "en": "To convert from psig to psia, you must:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "Somar 29,92 ao psig",
            "en": "Add 29.92 to psig"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "Somar 14,696 ao psig",
            "en": "Add 14.696 to psig"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "Subtrair 0,925 do psig",
            "en": "Subtract 0.925 from psig"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "Subtrair 3,1416 do psig",
            "en": "Subtract 3.1416 from psig"
          }
        }
      ],
      "correct": "b",
      "explanation": {
        "pt": "psia = psig + 14,696 (ou 14,7 arredondado).",
        "en": "psia = psig + 14.696 (or 14.7 rounded)."
      }
    },
    {
      "id": "q18",
      "prompt": {
        "pt": "10 pol. Hg de vácuo equivalem a quantos psia?",
        "en": "10 in. Hg of vacuum is equivalent to how many psia?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "10 psia",
            "en": "10 psia"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "20 psia",
            "en": "20 psia"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "25 psia",
            "en": "25 psia"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "30 psia",
            "en": "30 psia"
          }
        }
      ],
      "correct": "a",
      "explanation": {
        "pt": "psia = (30 − 10) ÷ 2 = 10 psia.",
        "en": "psia = (30 − 10) ÷ 2 = 10 psia."
      }
    },
    {
      "id": "q19",
      "prompt": {
        "pt": "2 psia equivale a quantas polegadas de mercúrio?",
        "en": "2 psia is equivalent to how many inches of mercury?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "29 pol. Hg",
            "en": "29 in. Hg"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "28 pol. Hg",
            "en": "28 in. Hg"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "27 pol. Hg",
            "en": "27 in. Hg"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "26 pol. Hg",
            "en": "26 in. Hg"
          }
        }
      ],
      "correct": "d",
      "explanation": {
        "pt": "pol. Hg = 30 − 2×(2) = 26 pol. Hg.",
        "en": "in. Hg = 30 − 2×(2) = 26 in. Hg."
      }
    },
    {
      "id": "q20",
      "prompt": {
        "pt": "125 psig equivale a quantos psia?",
        "en": "125 psig is equivalent to how many psia?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "14,696 psia",
            "en": "14.696 psia"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "135 psia",
            "en": "135 psia"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "139,7 psia",
            "en": "139.7 psia"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "147,7 psia",
            "en": "147.7 psia"
          }
        }
      ],
      "correct": "c",
      "explanation": {
        "pt": "125 + 14,696 ≈ 139,7 psia.",
        "en": "125 + 14.696 ≈ 139.7 psia."
      }
    },
    {
      "id": "q21",
      "prompt": {
        "pt": "Um barômetro é usado para medir o quê?",
        "en": "A barometer is used to measure what?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "Pressão atmosférica",
            "en": "Atmospheric pressure"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "Pressão manométrica",
            "en": "Gauge pressure"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "Pressão absoluta do sistema",
            "en": "Absolute system pressure"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "Pressão estratosférica",
            "en": "Stratospheric pressure"
          }
        }
      ],
      "correct": "a",
      "explanation": {
        "pt": "O barômetro mede a pressão atmosférica — a base de comparação para psig.",
        "en": "A barometer measures atmospheric pressure — the reference point for psig."
      }
    },
    {
      "id": "q22",
      "prompt": {
        "pt": "Uma piscina de 20.000 galões precisa subir de 70°F para 72°F em 1 hora, com aquecedor 100% eficiente. Qual o tamanho necessário do aquecedor?",
        "en": "A 20,000-gallon pool needs to go from 70°F to 72°F in 1 hour, with a 100%-efficient heater. What size heater is needed?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "166.000 BTU/h",
            "en": "166,000 Btu/h"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "332.000 BTU/h",
            "en": "332,000 Btu/h"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "86.000 BTU/h",
            "en": "86,000 Btu/h"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "224.000 BTU/h",
            "en": "224,000 Btu/h"
          }
        }
      ],
      "correct": "b",
      "explanation": {
        "pt": "20.000 gal × 8,34 lb/gal × 2°F ≈ 333.600 BTU em 1h ≈ 332.000 BTU/h.",
        "en": "20,000 gal × 8.34 lb/gal × 2°F ≈ 333,600 Btu in 1h ≈ 332,000 Btu/h."
      }
    },
    {
      "id": "q23",
      "prompt": {
        "pt": "A mesma piscina precisa subir de 70°F para 80°F em 5 horas. Qual o tamanho do aquecedor?",
        "en": "The same pool needs to go from 70°F to 80°F in 5 hours. What size heater is needed?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "166.000 BTU/h",
            "en": "166,000 Btu/h"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "830.000 BTU/h",
            "en": "830,000 Btu/h"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "332.000 BTU/h",
            "en": "332,000 Btu/h"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "1.660.000 BTU/h",
            "en": "1,660,000 Btu/h"
          }
        }
      ],
      "correct": "c",
      "explanation": {
        "pt": "20.000 gal × 8,34 lb/gal × 10°F ≈ 1.668.000 BTU total ÷ 5h ≈ 332.000 BTU/h.",
        "en": "20,000 gal × 8.34 lb/gal × 10°F ≈ 1,668,000 Btu total ÷ 5h ≈ 332,000 Btu/h."
      }
    },
    {
      "id": "q24",
      "prompt": {
        "pt": "Qual a pressão exercida por um objeto de 50 lb apoiado numa base de 10 pol²?",
        "en": "What pressure is exerted by a 50-lb object resting on a 10 sq. in. base?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "50 psi",
            "en": "50 psi"
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "25 psi",
            "en": "25 psi"
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "10 psi",
            "en": "10 psi"
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "5 psi",
            "en": "5 psi"
          }
        }
      ],
      "correct": "d",
      "explanation": {
        "pt": "Pressão = 50 lb ÷ 10 pol² = 5 psi.",
        "en": "Pressure = 50 lb ÷ 10 sq. in. = 5 psi."
      }
    },
    {
      "id": "q25",
      "prompt": {
        "pt": "Um objeto de 100 lb exerce 200 psi para baixo. Qual a área da base?",
        "en": "A 100-lb object exerts 200 psi downward. What is the area of its base?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "pt": "0,25 pol²",
            "en": "0.25 sq. in."
          }
        },
        {
          "id": "b",
          "text": {
            "pt": "0,50 pol²",
            "en": "0.50 sq. in."
          }
        },
        {
          "id": "c",
          "text": {
            "pt": "2 pol²",
            "en": "2 sq. in."
          }
        },
        {
          "id": "d",
          "text": {
            "pt": "4 pol²",
            "en": "4 sq. in."
          }
        }
      ],
      "correct": "b",
      "explanation": {
        "pt": "Área = 100 lb ÷ 200 psi = 0,5 pol².",
        "en": "Area = 100 lb ÷ 200 psi = 0.5 sq. in."
      }
    }
  ]
};