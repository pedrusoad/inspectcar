import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public categorias = [
    {
      id: 1,
      alias: "petiscos-rapidos",
      nome: "Petiscos Rápidos"
    },
    {
      id: 2,
      alias: "caldos",
      nome: "Caldos"
    },
    {
      id: 3,
      alias: "petiscos",
      nome: "Petiscos"
    },
    {
      id: 4,
      alias: "pratos-individuais",
      nome: "Pratos Individuais"
    },
    {
      id: 5,
      alias: "pastel",
      nome: "Pastel"
    },
    {
      id: 6,
      alias: "porcoes-mistas",
      nome: "Porções Mistas"
    },
    {
      id: 7,
      alias: "panelinhas",
      nome: "Panelinhas"
    },
    {
      id: 8,
      alias: "chapas",
      nome: "Chapas"
    },
    {
      id: 9,
      alias: "porcoes-adicionais",
      nome: "Porções Adicionais"
    },
    {
      id: 10,
      alias: "pratos-especiais",
      nome: "Pratos Especiais"
    },
    {
      id: 11,
      alias: "ponto-brasaria",
      nome: "Ponto Brasaria"
    },
    {
      id: 12,
      alias: "hamburguer",
      nome: "Hamburguer"
    },
    {
      id: 13,
      alias: "sanduiches",
      nome: "Sanduíches"
    },
    {
      id: 14,
      alias: "espetinhos",
      nome: "Espetinhos"
    },
    {
      id: 15,
      alias: "cremes",
      nome: "Cremes"
    },
    {
      id: 16,
      alias: "acai",
      nome: "Açaí"
    },
    {
      id: 17,
      alias: "cervejas-600",
      nome: "Cervejas 600ml"
    },
    {
      id: 18,
      alias: "cervejas-longneck",
      nome: "Cervejas Longneck"
    },
    {
      id: 19,
      alias: "cervejas-lata",
      nome: "Cervejas Lata"
    },
    {
      id: 20,
      alias: "bebidas-diversas",
      nome: "Bebidas Diversas"
    },
    {
      id: 21,
      alias: "chopp",
      nome: "Chopp"
    },
    {
      id: 22,
      alias: "doses",
      nome: "Doses"
    },
    {
      id: 23,
      alias: "nao-alcoolicos",
      nome: "Não Alcoólicos"
    },
    {
      id: 24,
      alias: "sucos-naturais",
      nome: "Sucos Naturais"
    },
    {
      id: 25,
      alias: "drinks",
      nome: "Drinks"
    },

  ]


  public menuproducts = [

    // Petiscos Rápidos

    {
      id: 1,
      alias: "costelinha-suina",
      nome: "Costelinha Suína (600g)",
      categoria: "petiscos-rapidos",
      descricao: "Costelinha suína assada e suculenta (600g), servida com mandioca macia e tomates frescos.",
      image: "costelinha-suina.jpeg",
      valor: "59,99"
    },
    {
      id: 2,
      alias: "frios-individual",
      nome: "Frios Individual",
      categoria: "petiscos-rapidos",
      descricao: "Porção individual de frios com azeitonas selecionadas, cubos de queijo e ovos de codorna.",
      image: "frios-individual.jpeg",
      valor: "24,99"
    },
    {
      id: 3,
      alias: "tomate-palito",
      nome: "Tomate a Palito",
      categoria: "petiscos-rapidos",
      descricao: "Tomates frescos em palito, temperados com limão, sal grosso e acompanhados de azeitonas.",
      image: "tomate-palito.jpeg",
      valor: "24,99"
    },
    {
      id: 4,
      alias: "mandioca-frita-cozida",
      nome: "Mandioca Frita ou Cozida (600g)",
      categoria: "petiscos-rapidos",
      descricao: "Porção de mandioca (600g), servida frita ou cozida.",
      image: "mandioca-frita-cozida.jpeg",
      valor: "14,99"
    },

    // Caldos

    {
      id: 5,
      alias: "caldo",
      nome: "Caldo",
      categoria: "caldos",
      descricao: "Caldos saborosos, servidos bem quentinhos. Acompanham mussarela, torradas crocantes, cebolinha fresca e torresmo.",
      image: "caldo.jpeg",
      valor: "17,99",
      variedade: [
        {
          tipo: "Sabores",
          variedade: [
            {
              nome: "Frango"
            },
            {
              nome: "Feijão"
            },
            {
              nome: "Mocotó"
            }
          ]
        }
      ]
    },

    // Petiscos

    {
      id: 6,
      alias: "bolinho-arroz-mussarela",
      nome: "Bolinho de Arroz com Mussarela (15 und)",
      categoria: "petiscos",
      descricao: "Bolinho de arroz crocante por fora e recheado com mussarela.",
      image: "bolinho-arroz-mussarela.jpeg",
      valor: "36,99"
    },
    {
      id: 7,
      alias: "bolinho-mandioca-carne-seca",
      nome: "Bolinho de Mandioca com Carne Seca (12 und)",
      categoria: "petiscos",
      descricao: "Bolinho de mandioca macio e dourado, recheado com carne seca temperada.",
      image: "bolinho-mandioca-carne-seca.jpeg",
      valor: "39,99"
    },
    {
      id: 8,
      alias: "disquinho-casa-queijo-bacon",
      nome: "Disquinho da Casa (Queijo Prato e Bacon) (15 und)",
      categoria: "petiscos",
      descricao: "Disquinhos crocantes com queijo prato derretido e pedaços de bacon.",
      image: "disquinho-casa-queijo-bacon.jpeg",
      valor: "39,99"
    },
    {
      id: 9,
      alias: "pastelzinho-carne-queijo",
      nome: "Pastelzinho Carne e Queijo c/ Salada e Molho (8 und)",
      categoria: "petiscos",
      descricao: "Pastelzinhos recheados com carne e queijo, acompanhados de salada fresca e molho especial.",
      image: "pastelzinho-carne-queijo.jpeg",
      valor: "36,99"
    },
    {
      id: 10,
      alias: "cebola-empanada-crocante",
      nome: "Cebola Empanada Crocante da Casa (500g)",
      categoria: "petiscos",
      descricao: "Cebolas empanadas e douradas, crocantes por fora e macias por dentro.",
      image: "cebola-empanada-crocante.jpeg",
      valor: "36,99"
    },
    {
      id: 11,
      alias: "batata-frita",
      nome: "Batata Frita (500g)",
      categoria: "petiscos",
      descricao: "Batatas cortadas na medida certa e fritas até ficarem douradas e crocantes.",
      image: "batata-frita.jpeg",
      valor: "24,99"
    },
    {
      id: 12,
      alias: "batata-frita-mussarela",
      nome: "Batata Frita c/ Mussarela (500g)",
      categoria: "petiscos",
      descricao: "Porção de batatas crocantes cobertas com mussarela, irresistível e cheia de sabor.",
      image: "batata-frita-mussarela.jpeg",
      valor: "28,99"
    },
    {
      id: 13,
      alias: "batata-frita-especial",
      nome: "Batata Frita Especial c/ Mussarela, Cheddar e Bacon",
      categoria: "petiscos",
      descricao: "Batatas crocantes cobertas com mussarela e cheddar, finalizadas com pedaços de bacon.",
      image: "batata-frita-especial.jpeg",
      valor: "32,99"
    },
    {
      id: 14,
      alias: "tabua-frios-grande",
      nome: "Tábua de Frios Grande",
      categoria: "petiscos",
      descricao: "Seleção completa de frios com ovo de codorna, azeitonas, presunto, mussarela, tomate, queijo minas, frutas, palmito, mel e salame (100g de cada item) — perfeita para compartilhar.",
      image: "tabua-frios-grande.jpeg",
      valor: "99,99"
    },
    {
      id: 15,
      alias: "torresmo-crocante-mandioca",
      nome: "Torresmo Crocante com Mandioca",
      categoria: "petiscos",
      descricao: "Torresmos dourados e crocantes acompanhados de mandioca.",
      image: "torresmo-crocante-mandioca.jpeg",
      valor: "39,99"
    },
    {
      id: 16,
      alias: "isca-frango-empanado-tomate",
      nome: "Isca de Frango Empanado c/ Tomate (500g)",
      categoria: "petiscos",
      descricao: "Iscas de frango empanadas e crocantes, servidas com tomates frescos.",
      image: "isca-frango-empanado-tomate.jpeg",
      valor: "44,99"
    },
    {
      id: 17,
      alias: "file-tilapia",
      nome: "Filé de Tilápia (500g)",
      categoria: "petiscos",
      descricao: "Filés de tilápia dourados e macios, servidos quentinhos — opção saudável e deliciosa para qualquer refeição.",
      image: "file-tilapia.jpeg",
      valor: "59,99"
    },
    {
      id: 18,
      alias: "farofa-guariroba",
      nome: "Farofa de Guariroba (500g)",
      categoria: "petiscos",
      descricao: "Farofa de guariroba com frango, cebola, pimenta e bacon — sabor marcante e perfeito para acompanhar suas refeições.",
      image: "farofa-guariroba.jpeg",
      valor: "31,99"
    },
    {
      id: 19,
      alias: "frango-passarinho-cebola-tomate",
      nome: "Frango a Passarinho c/ Cebola e Tomate (1kg)",
      categoria: "petiscos",
      descricao: "Frango a passarinho dourado e crocante, acompanhado de cebolas e tomates frescos.",
      image: "frango-passarinho-cebola-tomate.jpeg",
      valor: "55,99"
    },
    {
      id: 20,
      alias: "dadinho-queijo-empanado",
      nome: "Dadinho de Queijo Empanado",
      categoria: "petiscos",
      descricao: "Quadradinhos de queijo empanados, crocantes por fora, cremosos por dentro.",
      image: "dadinho-queijo-empanado.jpeg",
      valor: "29,99"
    },

    // Pratos Individuais

    {
      id: 21,
      alias: "strogonoff-frango",
      nome: "Strogonoff de Frango",
      categoria: "pratos-individuais",
      descricao: "Frango macio cozido em molho cremoso, servido com arroz branco e batata palha.",
      image: "strogonoff-frango.jpeg",
      valor: "24,99"
    },
    {
      id: 22,
      alias: "file-tilapia-salada",
      nome: "Filé de Tilápia c/ Salada",
      categoria: "pratos-individuais",
      descricao: "Filé de tilápia suculento acompanhado de salada fresca com tomate, palmito e azeitonas.",
      image: "file-tilapia-salada.jpeg",
      valor: "25,99"
    },
    {
      id: 23,
      alias: "picanha-caipira",
      nome: "Picanha Caipira",
      categoria: "pratos-individuais",
      descricao: "Picanha caipira suculenta, servida com arroz ao alho, creme de milho e ovo frito.",
      image: "picanha-caipira.jpeg",
      valor: "31,99"
    },
    {
      id: 24,
      alias: "prato-da-casa",
      nome: "Prato da Casa",
      categoria: "pratos-individuais",
      descricao: "Arroz, feijão tropeiro ou caldo, ovo, bife acebolado ou filé de frango, acompanhado de batata frita e salada.",
      image: "prato-da-casa.jpeg",
      valor: "29,99"
    },
    {
      id: 25,
      alias: "file-frango-grelhado",
      nome: "Filé de Frango Grelhado",
      categoria: "pratos-individuais",
      descricao: "Filé de frango grelhado suculento, servido com macarrão ao molho de tomate.",
      image: "file-frango-grelhado.jpeg",
      valor: "24,99"
    },
    {
      id: 26,
      alias: "macarrao-gosto",
      nome: "Macarrão a Gosto",
      categoria: "pratos-individuais",
      descricao: "Macarrão preparado ao seu gosto, servido com molho especial e ingredientes frescos.",
      image: "macarrao-gosto.jpeg",
      valor: "27,99",
      variedade: [
        {
          tipo: "Escolha um Molho",
          variedade: [
            {
              nome: "Sugo"
            },
            {
              nome: "Branco"
            },
            {
              nome: "Rosé"
            },
            {
              nome: "Alho e Óleo"
            },
          ]
        },
        {
          tipo: "Escolha uma Massa",
          variedade: [
            {
              nome: "Espaguete"
            },
            {
              nome: "Penne"
            }
          ]
        },
        {
          tipo: "Escolha até 5 Ingredientes",
          variedade: [
            {
              nome: "Azeitona"
            },
            {
              nome: "Bacon"
            },
            {
              nome: "Batata Palha"
            },
            {
              nome: "Calabresa"
            },
            {
              nome: "Carne Moída"
            },
            {
              nome: "Catupiry"
            },
            {
              nome: "Cheddar"
            },
            {
              nome: "Frango"
            },
            {
              nome: "Milho"
            },
            {
              nome: "Mussarela"
            },
            {
              nome: "Palmito"
            },
            {
              nome: "Presunto"
            },
            {
              nome: "Queijo Minas"
            },
            {
              nome: "Salsicha"
            },
            {
              nome: "Tomate"
            }
          ]
        },
      ]
    },

    // Pastel

    {
      id: 27,
      alias: "pastel",
      nome: "Pastel",
      categoria: "pastel",
      descricao: "Pastel crocante recheado ao seu gosto.",
      observacao: "Adicional de recheio R$ 1,99.",
      image: "pastel.jpeg",
      valor: "12,99 | R$ 14,99",
      variedade: [
        {
          tipo: "Quantidade de Recheios",
          variedade: [
            {
              nome: "2 Sabores",
              valor: "12,99"
            },
            {
              nome: "3 Sabores",
              valor: "14,99"
            }
          ]
        },
        {
          tipo: "Recheios",
          variedade: [
            {
              nome: "Azeitona"
            },
            {
              nome: "Bacon"
            },
            {
              nome: "Batata Palha"
            },
            {
              nome: "Calabresa"
            },
            {
              nome: "Carne Moída"
            },
            {
              nome: "Catupiry"
            },
            {
              nome: "Cheddar"
            },
            {
              nome: "Frango"
            },
            {
              nome: "Mussarela"
            },
            {
              nome: "Palmito"
            },
            {
              nome: "Presunto"
            },
            {
              nome: "Queijo Minas"
            },
            {
              nome: "Salsicha"
            },
            {
              nome: "Tomate"
            }
          ]
        }
      ]
    },

    // Porções Mistas

    {
      id: 28,
      alias: "mista-do-chefe",
      nome: "Mista do Chefe",
      categoria: "porcoes-mistas",
      descricao: "Porção especial com iscas de tilápia (200g), iscas de frango (300g), camarão empanado (6 und) e cebola empanada (6 und).",
      image: "mista-do-chefe.jpeg",
      valor: "89,99"
    },
    {
      id: 29,
      alias: "mista-trio-do-boteco",
      nome: "Mista 2 Trio do Boteco",
      categoria: "porcoes-mistas",
      descricao: "Porção completa com frango acebolado (300g), contra filé acebolado (300g) e batata frita (500g), acompanhados de cebola, tomate e mussarela.",
      image: "mista-trio-do-boteco.jpeg",
      valor: "74,99"
    },
    {
      id: 30,
      alias: "mista-trio-caipira",
      nome: "Mista 6 Trio Caipira",
      categoria: "porcoes-mistas",
      descricao: "Carne de sol suculenta (500g), mandioca frita dourada (500g) e dadinhos de queijo.",
      image: "mista-trio-caipira.jpeg",
      valor: "74,99"
    },
    {
      id: 31,
      alias: "mista-sabores-do-goias",
      nome: "Mista 5 Sabores do Goiás",
      categoria: "porcoes-mistas",
      descricao: "Porção variada com disquinhos da casa (5 und), bolinhos de arroz (5 und), bolinhos de mandioca com carne seca (5 und) e batata frita (500g).",
      image: "mista-sabores-do-goias.jpeg",
      valor: "56,99"
    },
    {
      id: 32,
      alias: "combo-frango",
      nome: "Combo Frango",
      categoria: "porcoes-mistas",
      descricao: "Frango à passarinho (1kg) acompanhado de batata frita (500g).",
      image: "combo-frango.jpeg",
      valor: "69,99"
    },


    // Panelinhas

    {
      id: 33,
      alias: "panelinha-mista",
      nome: "Panelinha Mista",
      categoria: "panelinhas",
      descricao: "Serve até 4 pessoas - Arroz com carne seca, calabresa, linguiça, milho, catupiry, mussarela, palmito, tomate e azeitona.",
      image: "panelinha-mista.jpeg",
      valor: "64,99"
    },
    {
      id: 34,
      alias: "panelinha-puta-rica",
      nome: "Panelinha Puta Rica",
      categoria: "panelinhas",
      descricao: "Serve até 4 pessoas - Arroz, frango, costelinha suína, bacon, tomate, calabresa, catupiry, mussarela e banana frita.",
      image: "panelinha-puta-rica.jpeg",
      valor: "69,99"
    },
    {
      id: 35,
      alias: "panelinha-goiana",
      nome: "Panelinha Goiana",
      categoria: "panelinhas",
      descricao: "Serve até 4 pessoas - Arroz, frango, pequi, linguiça, milho, mussarela, tomate, guariroba e cheiro-verde.",
      image: "panelinha-goiana.jpeg",
      valor: "64,99"
    },
    {
      id: 36,
      alias: "panelinha-camarao",
      nome: "Panelinha de Camarão",
      categoria: "panelinhas",
      descricao: "Serve até 4 pessoas - Arroz com camarão, azeite de dendê, cebola, pimentão, mussarela, creme de leite, leite de coco e tempero da casa.",
      image: "panelinha-camarao.jpeg",
      valor: "84,99"
    },

    // Chapas

    {
      id: 37,
      alias: "contra-file-chapa",
      nome: "Contra Filé na Chapa",
      categoria: "chapas",
      descricao: "500g de Contra Filé grelhado na chapa, acompanha mandioca, coberto com cebola, tomate e queijo mussarela derretida.",
      image: "contra-file-chapa.jpeg",
      valor: "67,99"
    },
    {
      id: 38,
      alias: "picanha-chapa",
      nome: "Picanha na Chapa",
      categoria: "chapas",
      descricao: "500g de Picanha grelhada na chapa, acompanha mandioca, coberta com cebola, tomate e queijo mussarela derretida.",
      image: "picanha-chapa.jpeg",
      valor: "85,99"
    },
    {
      id: 39,
      alias: "file-mignon-chapa-completo",
      nome: "Filé Mignon na Chapa",
      categoria: "chapas",
      descricao: "500g de Filé Mignon grelhado na chapa, acompanha mandioca, coberto com cebola, tomate e queijo mussarela derretida.",
      image: "file-mignon-chapa-completo.jpeg",
      valor: "74,99"
    },

    // Porções Adicionais

    {
      id: 40,
      alias: "feijao-tropeiro",
      nome: "Feijão Tropeiro",
      categoria: "porcoes-adicionais",
      descricao: "Serve até 3 pessoas - Porção de Feijão Tropeiro.",
      image: "feijao-tropeiro.jpeg",
      valor: "14,99"
    },
    {
      id: 41,
      alias: "arroz-porcao",
      nome: "Arroz",
      categoria: "porcoes-adicionais",
      descricao: "Serve até 3 pessoas - Porção de Arroz Branco.",
      image: "arroz-porcao.jpeg",
      valor: "12,99"
    },
    {
      id: 42,
      alias: "salada-porcao",
      nome: "Salada",
      categoria: "porcoes-adicionais",
      descricao: "Serve até 3 pessoas - Porção de Salada.",
      image: "salada-porcao.jpeg",
      valor: "9,99"
    },
    {
      id: 43,
      alias: "banana-a-milanesa",
      nome: "Banana à Milanesa",
      categoria: "porcoes-adicionais",
      descricao: "3 unidades de Banana à Milanesa.",
      image: "banana-milanesa.jpeg",
      valor: "9,99"
    },
    {
      id: 44,
      alias: "farofa-carne-seca",
      nome: "Farofa de Carne Seca",
      categoria: "porcoes-adicionais",
      descricao: "Serve até 3 pessoas - Porção de Farofa com Carne Seca e temperos.",
      image: "farofa-carne-seca.jpeg",
      valor: "14,99"
    },

    // Pratos Especiais

    {
      id: 45,
      alias: "camarao-empanado",
      nome: "Camarão Empanado",
      categoria: "pratos-especiais",
      descricao: "Porção generosa de camarões frescos empanados em farinha.",
      image: "camarao-empanado.jpeg",
      valor: "64,99"
    },
    {
      id: 46,
      alias: "file-tilapia-casa",
      nome: "Filé de Tilápia da Casa",
      categoria: "pratos-especiais",
      descricao: "Filé de tilápia empanada recheada com queijo prato, acompanha molho de maracujá.",
      image: "file-tilapia-casa.jpeg",
      valor: "69,99"
    },
    {
      id: 47,
      alias: "ceviche-tilapia",
      nome: "Ceviche de Tilápia",
      categoria: "pratos-especiais",
      descricao: "Ceviche de Tilápia temperado. Acompanha chips de batata frita.",
      image: "ceviche-tilapia.jpeg",
      valor: "34,99"
    },


    // Ponto Brasaria

    {
      id: 48,
      alias: "prato-picanha-cupim",
      nome: "Picanha 500g e Cupim 500g",
      categoria: "ponto-brasaria",
      descricao: "500g de Picanha e 500g de Cupim. Acompanha Arroz Branco, Feijão Tropeiro, Vinagrete, Mandioca Cozida, Farofa de Carne Seca, Banana à Milanesa e Batata Frita.",
      image: "picanha-cupim-completo.jpeg",
      valor: "209,99"
    },
    {
      id: 49,
      alias: "prato-picanha-1kg",
      nome: "Picanha 1kg",
      categoria: "ponto-brasaria",
      descricao: "1kg de Picanha acompanhado de Arroz Branco, Feijão Tropeiro, Vinagrete, Mandioca Cozida, Farofa de Ovo, Azeitona, Presunto e Cheiro Verde.",
      image: "picanha-1kg-completo.jpeg",
      valor: "249,99"
    },
    {
      id: 50,
      alias: "carne-de-sol-brasa",
      nome: "Carne de Sol na Brasa",
      categoria: "ponto-brasaria",
      descricao: "500g de Carne de Sol grelhada na brasa. Acompanha Arroz Branco, Mandioca Cozida e Vinagrete.",
      image: "carne-de-sol-brasa.jpeg",
      valor: "84,99"
    },
    {
      id: 51,
      alias: "carne-de-sol-1kg-completo",
      nome: "Carne de Sol 1Kg",
      categoria: "ponto-brasaria",
      descricao: "1kg de Carne de Sol acompanhado de Arroz Branco, Feijão Tropeiro, Vinagrete, Mandioca Cozida, Farofa de Carne Seca, Banana à Milanesa e Batata Frita.",
      image: "carne-de-sol-1kg-completo.jpeg",
      valor: "179,99"
    },
    {
      id: 52,
      alias: "picanha-brasa-500g",
      nome: "Picanha na Brasa",
      categoria: "ponto-brasaria",
      descricao: "500g de Picanha na Brasa. Acompanha Mandioca Cozida e 2 Pães de Alho.",
      image: "picanha-brasa-500g.jpeg",
      valor: "92,99"
    },

    // Hamburguer

    {
      id: 53,
      alias: "ponto-brasa-duplo",
      nome: "Ponto Brasa Duplo",
      categoria: "hamburguer",
      descricao: "2 Hamburgueres bovinos de 120g na brasa, pão brioche, bacon, mussarela especial, cheddar, tomate e alface.",
      image: "ponto-brasa-duplo.jpeg",
      valor: "39,99"
    },
    {
      id: 54,
      alias: "brasaria-burguer-tradicional",
      nome: "Brasaria Burguer Tradicional",
      categoria: "hamburguer",
      descricao: "Hamburguer bovino 180g na brasa, pão brioche, mussarela e cheddar, tomate, alface e bacon.",
      image: "brasaria-burguer-tradicional.jpeg",
      valor: "37,99"
    },
    {
      id: 55,
      alias: "ponto-burguer",
      nome: "Ponto Burguer",
      categoria: "hamburguer",
      descricao: "2 Hamburgueres bovinos de 120g na brasa, pão brioche, bacon, mussarela especial, cheddar, tomate e alface.",
      image: "ponto-burguer.jpeg",
      valor: "34,99"
    },
    {
      id: 56,
      alias: "brasaria-kids",
      nome: "Brasaria KIDS",
      categoria: "hamburguer",
      descricao: "Hamburguer bovino de 120g na brasa, pão brioche, mussarela especial, cheddar e molho.",
      image: "brasaria-kids.jpeg",
      valor: "21,99"
    },

    // Sanduíches

    {
      id: 57,
      alias: "sanduiche-35",
      nome: "Sanduíche 35",
      categoria: "sanduiches",
      descricao: "Pão Brioche, Hamburguer 120g, molho verde, ovo, bacon, milho, presunto, Mussarela, Azeitona e Tomate.",
      image: "sanduiche-35.jpeg",
      valor: "31,99"
    },
    {
      id: 58,
      alias: "sanduiche-36",
      nome: "Sanduíche 36",
      categoria: "sanduiches",
      descricao: "Pão Brioche, Hamburguer, Ovo, Bacon, Molho verde, Mussarela, Tomate e Milho.",
      image: "sanduiche-36.jpeg",
      valor: "25,99"
    },
    {
      id: 59,
      alias: "sanduiche-37",
      nome: "Sanduíche 37",
      categoria: "sanduiches",
      descricao: "Pão Brioche, Hamburguer, Ovo, Bacon, Molho Verde, Presunto, Salsicha, Mussarela, Tomate, Milho e Batata Palha.",
      image: "sanduiche-37.jpeg",
      valor: "29,99"
    },
    {
      id: 60,
      alias: "sanduiche-38",
      nome: "Sanduíche 38",
      categoria: "sanduiches",
      descricao: "Pão Brioche, Filé de Frango, Catupiry, Mussarela, Salsicha, Ovo, Batata Palha, e Batata Frita.",
      image: "sanduiche-38.jpeg",
      valor: "28,99"
    },
    {
      id: 61,
      alias: "sanduiche-40",
      nome: "Sanduíche 40",
      categoria: "sanduiches",
      descricao: "Pão Brioche, Hamburguer, Bacon, Milho Verde, Tomate, Ovo, Mussarela, Milho e Batata com cheddar e Bacon.",
      image: "sanduiche-40.jpeg",
      valor: "32,99"
    },

    // Espetinhos

    {
      id: 62,
      espetinho: true,
      nome: "Espetinho Picanha",
      categoria: "espetinhos",
      valor: "16,00 | R$ 19,00 | R$ 26,00",
      descricao: "Delicioso espetinho de Picanha, escolha seu acompanhamento: Simples, Acompanhado ou Jantinha.",
      image: "espetinho-picanha.jpeg",
      observacao: [
        {
          nome: "Simples",
          descricao: "Espetinho e Mandioca.",
          valor: "16,00"
        },
        {
          nome: "Acompanhado",
          descricao: "Espetinho, Mandioca e Feijão Tropeiro.",
          valor: "19,00"
        },
        {
          nome: "Jantinha",
          descricao: "Espetinho, Arroz, Feijão Tropeiro, Salada e Mandioca.",
          valor: "26,00"
        }
      ],
    },
    {
      id: 63,
      espetinho: true,
      nome: "Espetinho Cupim",
      categoria: "espetinhos",
      valor: "16,00 | R$ 19,00 | R$ 26,00",
      descricao: "Delicioso espetinho de Cupim, escolha seu acompanhamento: Simples, Acompanhado ou Jantinha.",
      image: "espetinho-cupim.jpeg",
      observacao: [
        {
          nome: "Simples",
          descricao: "Espetinho e Mandioca.",
          valor: "16,00"
        },
        {
          nome: "Acompanhado",
          descricao: "Espetinho, Mandioca e Feijão Tropeiro.",
          valor: "19,00"
        },
        {
          nome: "Jantinha",
          descricao: "Espetinho, Arroz, Feijão Tropeiro, Salada e Mandioca.",
          valor: "26,00"
        }
      ],
    },
    {
      id: 64,
      espetinho: true,
      nome: "Espetinho Carne de Sol",
      categoria: "espetinhos",
      valor: "16,00 | R$ 19,00 | R$ 26,00",
      descricao: "Delicioso espetinho de Carne de Sol, escolha seu acompanhamento: Simples, Acompanhado ou Jantinha.",
      image: "espetinho-carne-sol.jpeg",
      observacao: [
        {
          nome: "Simples",
          descricao: "Espetinho e Mandioca.",
          valor: "16,00"
        },
        {
          nome: "Acompanhado",
          descricao: "Espetinho, Mandioca e Feijão Tropeiro.",
          valor: "19,00"
        },
        {
          nome: "Jantinha",
          descricao: "Espetinho, Arroz, Feijão Tropeiro, Salada e Mandioca.",
          valor: "26,00"
        }
      ],
    },
    {
      id: 65,
      espetinho: true,
      nome: "Espetinho Kafta de Frango/Bovina",
      categoria: "espetinhos",
      valor: "13,00 | R$ 16,00 | R$ 22,00",
      descricao: "Delicioso espetinho de Kafta de Frango/Bovina, escolha seu acompanhamento: Simples, Acompanhado ou Jantinha.",
      image: "espetinho-kafta.jpeg",
      observacao: [
        {
          nome: "Simples",
          descricao: "Espetinho e Mandioca.",
          valor: "13,00"
        },
        {
          nome: "Acompanhado",
          descricao: "Espetinho, Mandioca e Feijão Tropeiro.",
          valor: "16,00"
        },
        {
          nome: "Jantinha",
          descricao: "Espetinho, Arroz, Feijão Tropeiro, Salada e Mandioca.",
          valor: "22,00"
        }
      ],
    },
    {
      id: 66,
      espetinho: true,
      nome: "Espetinho Contra Filé",
      categoria: "espetinhos",
      valor: "12,00 | R$ 15,00 | R$ 22,00",
      descricao: "Delicioso espetinho de Contra Filé, escolha seu acompanhamento: Simples, Acompanhado ou Jantinha.",
      image: "espetinho-contra.jpeg",
      observacao: [
        {
          nome: "Simples",
          descricao: "Espetinho e Mandioca.",
          valor: "12,00"
        },
        {
          nome: "Acompanhado",
          descricao: "Espetinho, Mandioca e Feijão Tropeiro.",
          valor: "15,00"
        },
        {
          nome: "Jantinha",
          descricao: "Espetinho, Arroz, Feijão Tropeiro, Salada e Mandioca.",
          valor: "22,00"
        }
      ],
    },
    {
      id: 67,
      espetinho: true,
      nome: "Espetinho Lombo Suíno",
      categoria: "espetinhos",
      valor: "12,00 | R$ 15,00 | R$ 22,00",
      descricao: "Delicioso espetinho de Lombo Suíno, escolha seu acompanhamento: Simples, Acompanhado ou Jantinha.",
      image: "espetinho-lombo.jpeg",
      observacao: [
        {
          nome: "Simples",
          descricao: "Espetinho e Mandioca.",
          valor: "12,00"
        },
        {
          nome: "Acompanhado",
          descricao: "Espetinho, Mandioca e Feijão Tropeiro.",
          valor: "15,00"
        },
        {
          nome: "Jantinha",
          descricao: "Espetinho, Arroz, Feijão Tropeiro, Salada e Mandioca.",
          valor: "22,00"
        }
      ],
    },
    {
      id: 68,
      espetinho: true,
      nome: "Espetinho Asinha de Frango",
      categoria: "espetinhos",
      valor: "12,00 | R$ 15,00 | R$ 22,00",
      descricao: "Delicioso espetinho de Asinha de Frango, escolha seu acompanhamento: Simples, Acompanhado ou Jantinha.",
      image: "espetinho-asinha.jpeg",
      observacao: [
        {
          nome: "Simples",
          descricao: "Espetinho e Mandioca.",
          valor: "12,00"
        },
        {
          nome: "Acompanhado",
          descricao: "Espetinho, Mandioca e Feijão Tropeiro.",
          valor: "15,00"
        },
        {
          nome: "Jantinha",
          descricao: "Espetinho, Arroz, Feijão Tropeiro, Salada e Mandioca.",
          valor: "22,00"
        }
      ],
    },
    {
      id: 69,
      espetinho: true,
      nome: "Espetinho Coração",
      categoria: "espetinhos",
      valor: "12,00 | R$ 15,00 | R$ 22,00",
      descricao: "Delicioso espetinho de Coração, escolha seu acompanhamento: Simples, Acompanhado ou Jantinha.",
      image: "espetinho-coracao.jpeg",
      observacao: [
        {
          nome: "Simples",
          descricao: "Espetinho e Mandioca.",
          valor: "12,00"
        },
        {
          nome: "Acompanhado",
          descricao: "Espetinho, Mandioca e Feijão Tropeiro.",
          valor: "15,00"
        },
        {
          nome: "Jantinha",
          descricao: "Espetinho, Arroz, Feijão Tropeiro, Salada e Mandioca.",
          valor: "22,00"
        }
      ],
    },
    {
      id: 70,
      espetinho: true,
      nome: "Espetinho Provolone",
      categoria: "espetinhos",
      valor: "12,00 | R$ 15,00 | R$ 22,00",
      descricao: "Delicioso espetinho de Provolone, escolha seu acompanhamento: Simples, Acompanhado ou Jantinha.",
      image: "espetinho-provolone.jpeg",
      observacao: [
        {
          nome: "Simples",
          descricao: "Espetinho e Mandioca.",
          valor: "12,00"
        },
        {
          nome: "Acompanhado",
          descricao: "Espetinho, Mandioca e Feijão Tropeiro.",
          valor: "15,00"
        },
        {
          nome: "Jantinha",
          descricao: "Espetinho, Arroz, Feijão Tropeiro, Salada e Mandioca.",
          valor: "22,00"
        }
      ],
    },
    {
      id: 71,
      espetinho: true,
      nome: "Espetinho Queijo Branco",
      categoria: "espetinhos",
      valor: "12,00 | R$ 15,00 | R$ 22,00",
      descricao: "Delicioso espetinho de Queijo Branco, escolha seu acompanhamento: Simples, Acompanhado ou Jantinha.",
      image: "espetinho-queijo-branco.jpeg",
      observacao: [
        {
          nome: "Simples",
          descricao: "Espetinho e Mandioca.",
          valor: "12,00"
        },
        {
          nome: "Acompanhado",
          descricao: "Espetinho, Mandioca e Feijão Tropeiro.",
          valor: "15,00"
        },
        {
          nome: "Jantinha",
          descricao: "Espetinho, Arroz, Feijão Tropeiro, Salada e Mandioca.",
          valor: "22,00"
        }
      ],
    },
    {
      id: 72,
      espetinho: true,
      nome: "Espetinho Frango com Bacon",
      categoria: "espetinhos",
      valor: "12,00 | R$ 15,00 | R$ 22,00",
      descricao: "Delicioso espetinho de Frango com Bacon, escolha seu acompanhamento: Simples, Acompanhado ou Jantinha.",
      image: "espetinho-frango-bacon.jpeg",
      observacao: [
        {
          nome: "Simples",
          descricao: "Espetinho e Mandioca.",
          valor: "12,00"
        },
        {
          nome: "Acompanhado",
          descricao: "Espetinho, Mandioca e Feijão Tropeiro.",
          valor: "15,00"
        },
        {
          nome: "Jantinha",
          descricao: "Espetinho, Arroz, Feijão Tropeiro, Salada e Mandioca.",
          valor: "22,00"
        }
      ],
    },
    {
      id: 73,
      espetinho: true,
      nome: "Espetinho Romeu e Julieta",
      categoria: "espetinhos",
      valor: "12,00 | R$ 15,00 | R$ 20,00",
      descricao: "Delicioso espetinho de Romeu e Julieta, escolha seu acompanhamento: Simples, Acompanhado ou Jantinha.",
      image: "espetinho-romeu-julieta.jpeg",
      observacao: [
        {
          nome: "Simples",
          descricao: "Espetinho e Mandioca.",
          valor: "12,00"
        },
        {
          nome: "Acompanhado",
          descricao: "Espetinho, Mandioca e Feijão Tropeiro.",
          valor: "15,00"
        },
        {
          nome: "Jantinha",
          descricao: "Espetinho, Arroz, Feijão Tropeiro, Salada e Mandioca.",
          valor: "20,00"
        }
      ],
    },
    {
      id: 74,
      espetinho: true,
      nome: "Espetinho Pão de Alho",
      categoria: "espetinhos",
      valor: "10,00 | R$ 15,00 | R$ 20,00",
      descricao: "Delicioso espetinho de Pão de Alho, escolha seu acompanhamento: Simples, Acompanhado ou Jantinha.",
      image: "espetinho-pao-alho.jpeg",
      observacao: [
        {
          nome: "Simples",
          descricao: "Espetinho e Mandioca.",
          valor: "10,00"
        },
        {
          nome: "Acompanhado",
          descricao: "Espetinho, Mandioca e Feijão Tropeiro.",
          valor: "15,00"
        },
        {
          nome: "Jantinha",
          descricao: "Espetinho, Arroz, Feijão Tropeiro, Salada e Mandioca.",
          valor: "20,00"
        }
      ],
    },

    // Cremes

    {
      id: 75,
      alias: "creme-de-fruta-tradicional",
      nome: "Creme de Fruta (Tradicional)",
      categoria: "cremes",
      descricao: "Escolha seu sabor: Açaí, Morango ou Maracujá - Cremoso e refrescante!",
      image: "creme-de-fruta.jpeg",
      valor: "18,99"
    },
    {
      id: 76,
      alias: "creme-especial",
      nome: "Creme Especial",
      categoria: "cremes",
      descricao: "Escolha seu sabor: Açaí, Morango ou Maracujá. Acompanha Creme de Avelã e Ovomaltine - Cremoso e refrescante!",
      image: "creme-especial.jpeg",
      valor: "22,99"
    },

    // Açaí

    {
      id: 77,
      alias: "acai-no-copo",
      nome: "Açaí no Copo",
      categoria: "acai",
      descricao: "Açaí batido cremoso servido no copo, acompanhado de granola, amendoim, leite ninho, leite condensado e a fruta de sua escolha.",
      image: "açai-no-copo.jpeg",
      valor: "15,99 | R$ 19,99",
      variedade: [
        {
          tipo: "Tamanho",
          variedade: [
            {
              nome: "300ml",
              valor: "15,99"
            },
            {
              nome: "500ml",
              valor: "19,99"
            },
          ]
        },
        {
          tipo: "Fruta",
          variedade: [
            {
              nome: "Banana",
            },
            {
              nome: "Uva",
            },
            {
              nome: "Morango",
            }
          ]
        }
      ]
    },
    {
      id: 78,
      alias: "acai-com-nutella",
      nome: "Açaí com Nutella",
      categoria: "acai",
      descricao: "Açaí batido cremoso servido no copo com Nutella, acompanhado de granola, amendoim, leite ninho, leite condensado e a fruta de sua escolha.",
      image: "acai-com-nutella.jpeg",
      valor: "19,99 | R$ 25,99",
      variedade: [
        {
          tipo: "Tamanho",
          variedade: [
            {
              nome: "300ml",
              valor: "19,99"
            },
            {
              nome: "500ml",
              valor: "25,99"
            },
          ]
        },
        {
          tipo: "Fruta",
          variedade: [
            {
              nome: "Banana",
            },
            {
              nome: "Uva",
            },
            {
              nome: "Morango",
            }
          ]
        }
      ]
    },
    {
      id: 79,
      alias: "energetico-de-acai",
      nome: "Energético de Açaí 500ml",
      categoria: "acai",
      descricao: "Açaí cremoso batido com ingredientes que potencializam a energia. Perfeito para o pré ou pós-treino, ou para um impulso no seu dia.",
      image: "energetico-de-acai.jpeg",
      valor: "19,99"
    },

    // Cervejas 600ml

    {
      id: 80,
      alias: "amstel-600",
      categoria: "cervejas-600",
      nome: "Amstel 600ml",
      valor: "10,99",
      image: "amstel-600.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 81,
      alias: "heineken-600",
      categoria: "cervejas-600",
      nome: "Heineken 600ml",
      valor: "14,99",
      image: "heineken-600.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 82,
      alias: "brahma-chopp-600",
      categoria: "cervejas-600",
      nome: "Brahma chopp 600ml",
      valor: "11,99",
      image: "brahma-chopp-600.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 83,
      alias: "antarctica-600",
      categoria: "cervejas-600",
      nome: "Antárctica 600ml",
      valor: "10,99",
      image: "antarctica-600.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 84,
      alias: "antarctica-original-600",
      categoria: "cervejas-600",
      nome: "Antárctica Original 600ml",
      valor: "12,99",
      image: "antarctica-original-600.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },

    // Cervejas Longneck

    {
      id: 85,
      alias: "sol-longneck",
      categoria: "cervejas-longneck",
      nome: "Sol Longneck",
      valor: "9,99",
      image: "sol-longneck.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 86,
      alias: "heineken-longneck",
      categoria: "cervejas-longneck",
      nome: "Heineken Longneck",
      valor: "9,99",
      image: "heineken-longneck.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 87,
      alias: "heineken-zero-longneck",
      categoria: "cervejas-longneck",
      nome: "Heineken Zero Longneck",
      valor: "9,99",
      image: "heineken-zero-longneck.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 88,
      alias: "stella-longneck",
      categoria: "cervejas-longneck",
      nome: "Stella Longneck",
      valor: "9,99",
      image: "stella-longneck.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 89,
      alias: "michelob-longneck",
      categoria: "cervejas-longneck",
      nome: "Michelob Longneck",
      valor: "9,99",
      image: "michelob-longneck.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },

    // Cervejas Lata

    {
      id: 90,
      alias: "amstel-lata",
      categoria: "cervejas-lata",
      nome: "Amstel Lata",
      valor: "5,99",
      image: "amstel-lata.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 91,
      alias: "antarctica-lata",
      categoria: "cervejas-lata",
      nome: "Antárctica Lata",
      valor: "5,99",
      image: "antarctica-lata.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 92,
      alias: "brahma-chopp-lata",
      categoria: "cervejas-lata",
      nome: "Brahma Chopp Lata",
      valor: "5,99",
      image: "brahma-chopp-lata.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 93,
      alias: "brahma-zero-lata",
      categoria: "cervejas-lata",
      nome: "Brahma Zero Lata",
      valor: "7,99",
      image: "brahma-zero-lata.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },

    // Chopp

    {
      id: 94,
      alias: "chopp-amstel",
      categoria: "chopp",
      nome: "Chopp Amstel 400ml",
      valor: "9,99",
      image: "chopp-amstel.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 95,
      alias: "chopp-brahma",
      categoria: "chopp",
      nome: "Chopp Brahma 400ml",
      valor: "9,99",
      image: "chopp-brahma.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },

    // Bebidas Diversas

    {
      id: 96,
      alias: "preparo-cozumel",
      categoria: "bebidas-diversas",
      nome: "Preparo Cozumel",
      valor: "5,99",
      image: "preparo-cozumel.jpeg",
    },
    {
      id: 97,
      alias: "cozumel",
      categoria: "bebidas-diversas",
      nome: "Cozumel",
      valor: "9,99",
      image: "cozumel.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 98,
      alias: "ice",
      categoria: "bebidas-diversas",
      nome: "Ice",
      valor: "11,99",
      image: "ice.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 99,
      alias: "caldo-de-limao",
      categoria: "bebidas-diversas",
      nome: "Caldo de Limão",
      valor: "2,99",
      image: "caldo-de-limao.jpeg",
    },
    {
      id: 100,
      alias: "gatorade",
      categoria: "bebidas-diversas",
      nome: "Gatorade",
      valor: "10,99",
      image: "gatorade.jpeg",
    },

    // Doses

    {
      id: 101,
      alias: "dose-whisky-red",
      categoria: "doses",
      nome: "Dose Whisky Red",
      valor: "14,99",
      image: "dose-whisky-red.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 102,
      alias: "dose-whisky-old-par",
      categoria: "doses",
      nome: "Dose Whisky Old Par",
      valor: "17,99",
      image: "dose-whisky-old-par.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 103,
      alias: "dose-whisky-chivas",
      categoria: "doses",
      nome: "Dose Whisky Chivas",
      valor: "19,99",
      image: "dose-whisky-chivas.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 104,
      alias: "dose-whisky-jack-daniels",
      categoria: "doses",
      nome: "Dose Whisky Jack Daniels",
      valor: "19,99",
      image: "dose-whisky-jack-daniels.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 105,
      alias: "dose-vinho",
      categoria: "doses",
      nome: "Dose Vinho",
      valor: "9,99",
      image: "dose-vinho.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 106,
      alias: "dose-vodka-orloff",
      categoria: "doses",
      nome: "Dose Vodka Orloff",
      valor: "7,99",
      image: "dose-vodka-orloff.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 107,
      alias: "dose-vodka-smirnoff",
      categoria: "doses",
      nome: "Dose Vodka Smirnoff",
      valor: "9,99",
      image: "dose-vodka-smirnoff.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 108,
      alias: "dose-licor-43",
      categoria: "doses",
      nome: "Dose Licor 43",
      valor: "19,99",
      image: "dose-licor-43.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 109,
      alias: "dose-balena",
      categoria: "doses",
      nome: "Dose Balena",
      valor: "19,99",
      image: "dose-balena.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 110,
      alias: "dose-campari",
      categoria: "doses",
      nome: "Dose Campari (Gelo e Laranja)",
      valor: "9,99",
      image: "dose-campari.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 111,
      alias: "dose-lambicada",
      categoria: "doses",
      nome: "Dose Lambicada",
      valor: "3,99",
      image: "dose-lambicada.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 112,
      alias: "dose-ypioca",
      categoria: "doses",
      nome: "Dose Ypioca",
      valor: "4,99",
      image: "dose-ypioca.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 113,
      alias: "dose-seleta",
      categoria: "doses",
      nome: "Dose Seleta",
      valor: "6,99",
      image: "dose-seleta.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 114,
      alias: "dose-tequila",
      categoria: "doses",
      nome: "Dose Tequila",
      valor: "14,99",
      image: "dose-tequila.jpeg",
      descricao: "Produto para maiores de 18 anos."
    },
    {
      id: 115,
      alias: "copao",
      categoria: "doses",
      nome: "Copão",
      valor: "29,99",
      descricao: "Whisky, Energético e Gelo Saborizado. Produto para maiores de 18 anos.",
      image: "copao.jpeg",
    },

    // Sucos Naturais

    {
      id: 116,
      alias: "suco-natural-laranja",
      categoria: "sucos-naturais",
      nome: "Suco Natural Laranja 500ml",
      valor: "9,99",
      image: "suco-natural-laranja.jpeg",
    },
    {
      id: 117,
      alias: "suco-natural-laranja-morango",
      categoria: "sucos-naturais",
      nome: "Suco Natural Laranja com Morango 500ml",
      valor: "11,99",
      image: "suco-natural-laranja-morango.jpeg",
    },
    {
      id: 118,
      alias: "suco-natural-laranja-acerola",
      categoria: "sucos-naturais",
      nome: "Suco Natural Laranja com Acerola 500ml",
      valor: "11,99",
      image: "suco-natural-laranja-acerola.jpeg",
    },
    {
      id: 119,
      alias: "suco-natural-polpa",
      categoria: "sucos-naturais",
      nome: "Suco Natural Polpa",
      descricao: "Suco Natural da Polpa - Sabores Maracujá, Morango e Acerola.",
      valor: "11,99",
      image: "suco-natural-polpa.jpeg",
    },
    {
      id: 120,
      alias: "caja-na-taca",
      categoria: "sucos-naturais",
      nome: "Cajá na Taça",
      descricao: "Cajá na Taça com borda de Sal.",
      valor: "13,99",
      image: "caja-na-taca.jpeg",
    },

    // Não Alcoólicos

    {
      id: 121,
      alias: "agua-sem-gas",
      categoria: "nao-alcoolicos",
      nome: "Água sem Gás",
      valor: "2,99",
      image: "agua-sem-gas.jpeg",
    },
    {
      id: 122,
      alias: "agua-com-gas",
      categoria: "nao-alcoolicos",
      nome: "Água com Gás",
      valor: "3,99",
      image: "agua-com-gas.jpeg",
    },
    {
      id: 123,
      alias: "agua-tonica",
      categoria: "nao-alcoolicos",
      nome: "Água Tônica",
      valor: "5,99",
      image: "agua-tonica.jpeg",
    },
    {
      id: 124,
      alias: "limoneto",
      categoria: "nao-alcoolicos",
      nome: "Limoneto",
      valor: "6,99",
      image: "limoneto.jpeg",
    },
    {
      id: 125,
      alias: "refri-lata",
      categoria: "nao-alcoolicos",
      nome: "Refrigerante Lata",
      valor: "5,99",
      image: "refri-lata.jpeg",
    },
    {
      id: 126,
      alias: "refri-600",
      categoria: "nao-alcoolicos",
      nome: "Refrigerante 600ml",
      valor: "6,99",
      image: "refri-600.jpeg",
    },
    {
      id: 127,
      alias: "refri-1l",
      categoria: "nao-alcoolicos",
      nome: "Refrigerante 1L",
      valor: "9,99",
      image: "refri-1l.jpeg",
    },
    {
      id: 128,
      alias: "refri-15l",
      categoria: "nao-alcoolicos",
      nome: "Refrigerante 1,5L",
      valor: "11,99",
      image: "refri-15l.jpeg",
    },
    {
      id: 129,
      alias: "suco-1l",
      categoria: "nao-alcoolicos",
      nome: "Suco 1L",
      valor: "9,99",
      image: "suco-1l.jpeg",
    },
    {
      id: 130,
      alias: "extra-power-270",
      categoria: "nao-alcoolicos",
      nome: "Extra Power 270ml",
      valor: "11,99",
      image: "extra-power-270.jpeg",
    },
    {
      id: 131,
      alias: "redbull-250",
      categoria: "nao-alcoolicos",
      nome: "RedBull 250ml",
      valor: "14,99",
      image: "redbull-250.jpeg",
    },

    // Drinks

    {
      id: 132,
      alias: "caipirinha",
      categoria: "drinks",
      nome: "Caipirinha",
      valor: "18,99",
      descricao: "Pinga 51 com uma fruta a escolha: Limão, Maracujá ou Morango.",
      image: "caipirinha.jpeg",
    },
    {
      id: 133,
      alias: "caipiroska",
      categoria: "drinks",
      nome: "Caipiroska",
      valor: "18,99",
      descricao: "Vodka Smirnoff com uma fruta a escolha: Limão, Maracujá ou Morango.",
      image: "caipiroska.jpeg",
    },
    {
      id: 134,
      alias: "batida",
      categoria: "drinks",
      nome: "Batida",
      valor: "19,99",
      descricao: "Vodka Smirnoff com uma fruta a escolha: Limão, Maracujá ou Morango.",
      image: "batida.jpeg",
    },
    {
      id: 135,
      alias: "gin-tonica",
      categoria: "drinks",
      nome: "Gin Tônica",
      valor: "19,99",
      descricao: "Gin, Água Tônica, Limão e Especiarias.",
      image: "gin-tonica.jpeg",
    },
    {
      id: 136,
      alias: "campari-orange",
      categoria: "drinks",
      nome: "Campari Orange",
      valor: "16,99",
      descricao: "Campari, Caldo de Laranja e Gelo.",
      image: "campari-orange.jpeg",
    },
    {
      id: 137,
      alias: "gin-saborizado",
      categoria: "drinks",
      nome: "Gin Saborizado",
      valor: "24,99",
      descricao: "Gin, Chá de Frutas, Água Tônica e Especiarias.",
      image: "gin-saborizado.jpeg",
    },
    {
      id: 138,
      alias: "soda-italiana",
      categoria: "drinks",
      nome: "Soda Italiana",
      valor: "17,99",
      descricao: "Xarope de Fruta, Água Gaseificada e uma Fruta a sua escolha: Morango, Maçã Verde ou Maracujá.",
      image: "soda-italiana.jpeg",
    },
    {
      id: 139,
      alias: "lagoa-azul",
      categoria: "drinks",
      nome: "Lagoa Azul",
      valor: "20,99",
      descricao: "Curaçau Blue, Refrigerante de limão, Vodka Smirnoff e Gelo.",
      image: "lagoa-azul.jpeg",
    },
    {
      id: 140,
      alias: "moscow-mule",
      categoria: "drinks",
      nome: "Moscow Mule",
      valor: "24,99",
      descricao: "Xarope de Gengibre, Suco de Limão, Vodka Smirnoff, Espuma Cítrica e Refrigerante de Limão.",
      image: "moscow-mule.jpeg",
    },
    {
      id: 141,
      alias: "negroni",
      categoria: "drinks",
      nome: "Negroni",
      valor: "24,99",
      descricao: "Campari, Martini, Bacardi, Laranja e Gelo.",
      image: "negroni.jpeg",
    },


















































    // {
    //   id: 2,
    //   alias: "espetinhos",
    //   nome: "Espetinhos",
    //   categoria: "espetinhos",
    // },
    // {
    //   id: 3,
    //   alias: "panelinhas",
    //   nome: "Panelinhas",
    //   categoria: "panelinhas",
    // }
  ]

  public products = [
    {
      nome: "Geladeira Frost Free",
      alias: "geladeira-frost-free",
      descricao: "Geladeira com tecnologia Frost Free, ideal para conservar alimentos por mais tempo sem precisar descongelar.",
      valor: "R$ 3.200,00",
      imagens: [
        "geladeira1.jpg",
        "geladeira2.jpg",
        "geladeira_interior.jpg"
      ],
      especificacoes: [
        { label: "Capacidade", text: "450L" },
        { label: "Voltagem", text: "220V" },
        { label: "Dimensões", text: "180x70x75 cm" },
        { label: "Cor", text: "Inox" }
      ]
    },
    {
      nome: "Cama Box Queen",
      alias: "cama-box-queen",
      descricao: "Cama box tamanho queen, com colchão de molas ensacadas e tecido antialérgico.",
      valor: "R$ 1.500,00",
      imagens: [
        "cama1.jpg",
        "cama2.jpg"
      ],
      especificacoes: [
        { label: "Dimensões", text: "158x198x65 cm" },
        { label: "Material", text: "MDF" },
        { label: "Cor", text: "Cinza" }
      ]
    },
    {
      nome: "Mesa de Jantar 6 Lugares",
      alias: "mesa-jantar-6-lugares",
      descricao: "Mesa de jantar elegante, em madeira maciça, ideal para receber amigos e familiares.",
      valor: "R$ 1.200,00",
      imagens: [
        "mesa1.jpg",
        "mesa2.jpg",
        "mesa_det.jpg"
      ],
      especificacoes: [
        { label: "Material", text: "Madeira maciça" },
        { label: "Dimensões", text: "180x90x75 cm" },
        { label: "Cor", text: "Imbuia" }
      ]
    },




    {
      nome: "Geladeira Frost Free 2",
      alias: "geladeira-frost-free2",
      descricao: "Geladeira com tecnologia Frost Free, ideal para conservar alimentos por mais tempo sem precisar descongelar.",
      valor: "R$ 3.200,00",
      imagens: [
        "geladeira1.jpg",
        "geladeira2.jpg",
        "geladeira_interior.jpg"
      ],
      especificacoes: [
        { label: "Capacidade", text: "450L" },
        { label: "Voltagem", text: "220V" },
        { label: "Dimensões", text: "180x70x75 cm" },
        { label: "Cor", text: "Inox" }
      ]
    },
    {
      nome: "Cama Box Queen 2",
      alias: "cama-box-queen2",
      descricao: "Cama box tamanho queen, com colchão de molas ensacadas e tecido antialérgico.",
      valor: "R$ 1.500,00",
      imagens: [
        "cama1.jpg",
        "cama2.jpg"
      ],
      especificacoes: [
        { label: "Dimensões", text: "158x198x65 cm" },
        { label: "Material", text: "MDF" },
        { label: "Cor", text: "Cinza" }
      ]
    },
    {
      nome: "Mesa de Jantar 6 Lugares 2",
      alias: "mesa-jantar-6-lugares2",
      descricao: "Mesa de jantar elegante, em madeira maciça, ideal para receber amigos e familiares.",
      valor: "R$ 1.200,00",
      imagens: [
        "mesa1.jpg",
        "mesa2.jpg",
        "mesa_det.jpg"
      ],
      especificacoes: [
        { label: "Material", text: "Madeira maciça" },
        { label: "Dimensões", text: "180x90x75 cm" },
        { label: "Cor", text: "Imbuia" }
      ]
    }
  ];



}