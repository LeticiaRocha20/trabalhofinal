// variaveis criadas->
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;


// lista de palavras + categoria (objetos)->
const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES",
    },
    palavra002 = {
        nome: "EQUADOR",
        categoria: "LUGARES",
    },
    palavra003 = {
        nome: "PERU",
        categoria: "LUGARES",
    },
    palavra004 = {
        nome: "CAMBOJA",
        categoria: "LUGARES",
    },
    palavra005 = {
        nome: "ÍNDIA",
        categoria: "LUGARES",
    },
    palavra006 = {
        nome: "JORDANIA",
        categoria: "LUGARES",
    },
    palavra007 = {
        nome: "CHINA",
        categoria: "LUGARES",
    },
    palavra008 = {
        nome: "GUATEMALA",
        categoria: "LUGARES",
    },
    palavra009 = {
        nome: "EGITO",
        categoria: "LUGARES",
    },
    palavra010 = {
        nome: "MARROCOS",
        categoria: "LUGARES",
    },
    palavra011 = {
        nome: "CARRO",
        categoria: "TRANSPORTE",
    },

    palavra012 = {
        nome: "MOTO",
        categoria: "TRANSPORTE",
    },
    palavra013 = {
        nome: "NAVIO",
        categoria: "TRANSPORTE",
    },
    palavra014 = {
        nome: "JET SKI",
        categoria: "TRANSPORTE",
    },
    palavra015 = {
        nome: "COMBOIO",
        categoria: "TRANSPORTE",
    },
    palavra016 = {
        nome: "BICICLETA",
        categoria: "TRANSPORTE",
    },
    palavra017 = {
        nome: "HELICOPTERO",
        categoria: "TRANSPORTE",
    },
    palavra018 = {
        nome: "CANOA",
        categoria: "TRANSPORTE",
    },
    palavra019 = {
        nome: "AVIAO",
        categoria: "TRANSPORTE",
    },
    palavra020 = {
        nome: "DIRIGIVEL",
        categoria: "TRANSPORTE",
    },
    palavra021 = {
        nome: "FONES",
        categoria: "OBJETOS",
    },
    palavra022 = {
        nome: "CAMERA",
        categoria: "OBJETOS",
    },
    palavra023 = {
        nome: "CANETA",
        categoria: "OBJETOS",
    },
    palavra024 = {
        nome: "ALMOFADA",
        categoria: "OBJETOS",
    },
    palavra025 = {
        nome: "COMPUTADOR",
        categoria: "OBJETOS",
    },
    palavra026 = {
        nome: "COPO",
        categoria: "OBJETOS",
    },
    palavra027 = {
        nome: "TELEMOVEL",
        categoria: "OBJETOS",
    },
    palavra028 = {
        nome: "LAMPADA",
        categoria: "OBJETOS",
    },
    palavra029 = {
        nome: "NOTAS",
        categoria: "OBJETOS",
    },
    palavra030 = {
        nome: "LIVROS",
        categoria: "OBJETOS",
    },
    palavra031 = {
        nome: "BETERRABA",
        categoria: "ALIMENTOS",
    },
    palavra032 = {
        nome: "ARROZ",
        categoria: "ALIMENTOS",
    },
    palavra033 = {
        nome: "COUVE",
        categoria: "ALIMENTOS",
    },
    palavra034 = {
        nome: "MARACUJA",
        categoria: "ALIMENTOS",
    },
    palavra035 = {
        nome: "PEIXE",
        categoria: "ALIMENTOS",
    },
    palavra036 = {
        nome: "TOMATE",
        categoria: "ALIMENTOS",
    },
    palavra037 = {
        nome: "BATATAS",
        categoria: "ALIMENTOS",
    },
    palavra038 = {
        nome: "UVAS",
        categoria: "ALIMENTOS",
    },
    palavra039 = {
        nome: "DIOSPIRO",
        categoria: "ALIMENTOS",
    },
    palavra040 = {
        nome: "MELANCIA",
        categoria: "ALIMENTOS",
    },
    palavra041 = {
        nome: "AVESTRUZ",
        categoria: "ANIMAIS",
    },
    palavra042 = {
        nome: "GATO",
        categoria: "ANIMAIS",
    },
    palavra043 = {
        nome: "PAVAO",
        categoria: "ANIMAIS",
    },
    palavra044 = {
        nome: "PIQUIM",
        categoria: "ANIMAIS",
    },
    palavra045 = {
        nome: "GIRAFA",
        categoria: "ANIMAIS",
    },
    palavra046 = {
        nome: "GARNIZAS",
        categoria: "ANIMAIS",
    },
    palavra047 = {
        nome: "COELHOS",
        categoria: "ANIMAIS",
    },
    palavra048 = {
        nome: "CODORNIZES",
        categoria: "ANIMAIS",
    },
    palavra049 = {
        nome: "CAES",
        categoria: "ANIMAIS",
    },
    palavra050 = {
        nome: "GANSOS",
        categoria: "ANIMAIS",
    },
    palavra051 = {
        nome: "ROUND SIX",
        categoria: "SÉRIES",
    },
    palavra052 = {
        nome: "STRANGER THINGS",
        categoria: "SÉRIES",
    },
    palavra053 = {
        nome: "BRIDGERTON",
        categoria: "SÉRIES",
    },
    palavra054 = {
        nome: "LUCIFER",
        categoria: "SÉRIES",
    },
    palavra055 = {
        nome: "OZARK",
        categoria: "SÉRIES",
    },
    palavra056 = {
        nome: "THE WALKING DEAD",
        categoria: "SÉRIES",
    },
    palavra057 = {
        nome: "RESIDENT EVIL",
        categoria: "SÉRIES",
    },
    palavra058 = {
        nome: "COBRA KAI",
        categoria: "SÉRIES",
    },
    palavra059 = {
        nome: "ALICE IN BORDERLAND",
        categoria: "SÉRIES",
    },
    palavra060 = {
        nome: "WEDNESDAY",
        categoria: "SÉRIES",
    },
];


criarPalavraSecreta();
// criação da palavra que a pessoa vai ter que descobrir->
function criarPalavraSecreta() {
// gerar um número aleatório "math.random"->
// multipliquei por "palavras.length" (tamanho da lista)->
// como o resultado tem que ser um numero inteiro coloquei "parseInt"->
    const indexPalavras = parseInt(Math.random() * palavras.length)
// peço para o codigo me devolver o nome e a categoria que foram sorteadas no "indexPalavras"->    
    palavraSecretaSorteada = palavras [indexPalavras].nome;
    palavraSecretaCategoria = palavras [indexPalavras].categoria;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}


montarPalavraNaTela();
// aparece no nosso ecrã o nome da categoria->
// já manda para o html os 2 valores a categoria e a palavra para descobrir->
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
// como eliminei ali, deixa de aparecer a palavra secreta, no entanto não aparece o tracejado para saber a quantidade de letras->
    palavraTela.innerHTML ="";

// o "i" começa com 0 e enquanto ele for menor que o tamanho da minha palavra ele vai adicionando de 1 em 1->
    for(i = 0; i < palavraSecretaSorteada.length; i++){
// se o index da lista não tiver nenhum valor, a lista dinamica na posiçao i receba um espaço->
// se a letra existir na palavra, esta vai aparecendo no seu respetivo espaço->
        if(listaDinamica[i] == undefined){
        listaDinamica[i] = "&nbsp;"
        palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'> " + listaDinamica[i] + " </div>"
        }

// mostro a palavra toda conforme a lista dinamica->
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'> " + listaDinamica[i] + " </div>"  
        }

    }

}

// cada letra só pode ser usada 1 vez, no HTML "onclick"->
// muda a cor da tecla->
function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
// verifica se o utilizador ainda tem chances para adivinhar a palavra->
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra , false);
// verifica se a letra que a pessoa escolheu existe na palavra secreta->
        comparalistas(letra);
// as letras corretas vão aparecendo na tela->        
        montarPalavraNaTela();
    } 
}

function mudarStyleLetra(tecla){
// a tecla fica roxa->
    document.getElementById(tecla).style.background = "#c71585";
// o texto fica branco->
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra){
// para saber se a letra escolhida existe dentro da  e saber em que indice esta se situa->
    const pos = palavraSecretaSorteada.indexOf(letra)
// se a letra que for escolhida não existir dentro da palavra, diminui a quantidade de tentativas ->
    if(pos < 0){
    tentativas--
// altera a imagem da forca->
    carregaImagemForca();
    }
    else {
        for( i = 0; i < palavraSecretaSorteada.length; i++ );
        {
// se a palavra sorteada na posição i for igual a uma letra, a lista dinamica vai receber a letra->
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    let vitoria = true;
// verifica se os indices estão todos iguais->
    for( i = 0; i < palavraSecretaSorteada.length; i++ ){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
// se ele vir que uma das variaveis não é igual, ele torna a variavel "vitoria" em false ->
            vitoria = false;
        }
    }
if(vitoria == true){
// como já ganhou as tentativas ficam zeradas->
    tentativas = 0;
}
}

function carregaImagemForca(){
// são as tentativas que controlam as imagens->
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default: 
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}