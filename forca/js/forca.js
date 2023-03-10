let jogarNovamente = true;
/*6 tentativas para acertar */
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let palavras = [];

carregaListaAutomatica();

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    // console.log(palavraSecretaSorteada);
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
    
    for(i = 0; i < palavraSecretaSorteada.length; i++){  
        if(listaDinamica[i] == undefined){
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }     
        }
        else{
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }    
        }
    }   
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function mudarStyleLetra(tecla, condicao){
    if(condicao == false)
    {
        document.getElementById(tecla).style.background = "#801010";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }

    
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("UPS!", "Mais sorte para a pr??xima ... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    }
    else{
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARAB??NS!", "Voc?? adivinhou a palavra secreta !!");
        tentativas = 0;
    }
}

async function atraso(tempo){
    return new Promise(x => setTimeout(x, tempo))     
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    jogarNovamente = false;
    location.reload();
});

function listaAutomatica(){ // ativa o modo manual
    if (jogoAutomatico == true) {
        document.getElementById("jogarAutomatico").innerHTML = "<i class='bx bx-play-circle'></i>"
        palavras = [];
        jogoAutomatico = false;

        document.getElementById("abreModalAddPalavra").style.display = "block";
        document.getElementById("status").innerHTML = "Modo Manual";
    }
    else if(jogoAutomatico == false){ // ativa o modo autom??tico
        document.getElementById("jogarAutomatico").innerHTML = "<i class='bx bx-pause-circle'></i>"
        jogoAutomatico = true;

        document.getElementById("abreModalAddPalavra").style.display = "none";
        document.getElementById("status").innerHTML = "Modo Autom??tico";
        
    }
}

const modal = document.getElementById("modal-alerta");

const btnAbreModal = document.getElementById("abreModalAddPalavra");
btnAbreModal.onclick = function(){
    modal.style.display = "block";
}

const btnFechaModal = document.getElementById("fechaModal");
btnFechaModal.onclick = function(){ 
    modal.style.display = "none";
    document.getElementById("addPalavra").value = "";
    document.getElementById("addCategoria").value = ""; 
}


/*lista com a palavra secreta e a categoria */
function carregaListaAutomatica(){
    palavras = [
        palavra001 = {
            nome: "CHINA",
            categoria:"LUGARES"
        },
        palavra002 = {
            nome: "PERU",
            categoria:"LUGARES"
        },
        palavra003 = {
            nome: "INDIA",
            categoria:"LUGARES"
        },
        palavra004 = {
            nome: "INDONESIA",
            categoria:"LUGARES"
        },
        palavra005 = {
            nome: "GUATEMALA",
            categoria:"LUGARES"
        },
        palavra006 = {
            nome: "INGLATERRA",
            categoria:"LUGARES"
        },
        palavra007 = {
            nome: "PARIS",
            categoria:"LUGARES"
        },
        palavra008 = {
            nome: "EGITO",
            categoria:"LUGARES"
        },
        palavra009 = {
            nome: "MARROCOS",
            categoria:"LUGARES"
        },
        palavra010 = {
            nome: "JAPAO",
            categoria:"LUGARES"
        },
        palavra011 = {
            nome: "BICICLETA",
            categoria:"TRANSPORTE"
        },
        palavra012 = {
            nome: "CARRO",
            categoria:"TRANSPORTE"
        },
        palavra013 = {
            nome: "NAVIO",
            categoria:"TRANSPORTE"
        },
        palavra014 = {
            nome: "TELEFERICO",
            categoria:"TRANSPORTE"
        },
        palavra015 = {
            nome: "AUTOCARRO",
            categoria:"TRANSPORTE"
        },
        palavra016 = {
            nome: "CANOA",
            categoria:"TRANSPORTE"
        },
        palavra017 = {
            nome: "FOGUETAO",
            categoria:"TRANSPORTE"
        },
        palavra018 = {
            nome: "COMBOIO",
            categoria:"TRANSPORTE"
        },
        palavra019 = {
            nome: "CAIAQUE",
            categoria:"TRANSPORTE"
        },
        palavra020 = {
            nome: "FUNICULAR",
            categoria:"TRANSPORTE"
        },
        palavra021 = {
            nome: "XICARA",
            categoria:"OBJETOS"
        },
        palavra022 = {
            nome: "LAPIS",
            categoria:"OBJETOS"
        },
        palavra023 = {
            nome: "COMPUTADOR",
            categoria:"OBJETOS"
        },
        palavra024 = {
            nome: "CADERNO",
            categoria:"OBJETOS"
        },
        palavra025 = {
            nome: "CADEIRA",
            categoria:"OBJETOS"
        },
        palavra026 = {
            nome: "LAMPADA",
            categoria:"OBJETOS"
        },
        palavra027 = {
            nome: "CARREGADOR",
            categoria:"OBJETOS"
        },
        palavra028 = {
            nome: "BLOCO",
            categoria:"OBJETOS"
        },
        palavra029 = {
            nome: "RATO",
            categoria:"OBJETOS"
        },
        palavra030 = {
            nome: "TECLADO",
            categoria:"OBJETOS"
        },
        palavra031 = {
            nome: "MELANCIA",
            categoria:"ALIMENTOS"
        },
        palavra032 = {
            nome: "MANGA",
            categoria:"ALIMENTOS"
        },
        palavra033 = {
            nome: "PIZZA",
            categoria:"ALIMENTOS"
        },
        palavra034 = {
            nome: "DIOSPIRO",
            categoria:"ALIMENTOS"
        },
        palavra035 = {
            nome: "SALADA",
            categoria:"ALIMENTOS"
        },
        palavra036 = {
            nome: "ABACAXI",
            categoria:"ALIMENTOS"
        },
        palavra037 = {
            nome: "FRANCESINHA",
            categoria:"ALIMENTOS"
        },
        palavra038 = {
            nome: "COUVE",
            categoria:"ALIMENTOS"
        },
        palavra039 = {
            nome: "BETERRABA",
            categoria:"ALIMENTOS"
        },
        palavra040 = {
            nome: "GELEIA",
            categoria:"ALIMENTOS"
        },
        palavra040 = {
            nome: "FURAO",
            categoria:"ANIMAIS"
        },
        palavra041 = {
            nome: "GALINHA",
            categoria:"ANIMAIS"
        },
        palavra042 = {
            nome: "PAVAO",
            categoria:"ANIMAIS"
        },
        palavra043 = {
            nome: "GATO",
            categoria:"ANIMAIS"
        },
        palavra044 = {
            nome: "PIQUIM",
            categoria:"ANIMAIS"
        },
        palavra045 = {
            nome: "GIRAFA",
            categoria:"ANIMAIS"
        },
        palavra046 = {
            nome: "CODORNIZ",
            categoria:"ANIMAIS"
        },
        palavra047 = {
            nome: "CAO",
            categoria:"ANIMAIS"
        },
        palavra048 = {
            nome: "PEIXE",
            categoria:"ANIMAIS"
        },
        palavra049 = {
            nome: "SALAMANDRA",
            categoria:"ANIMAIS"
        },
        palavra050 = {
            nome: "HIPOPOTAMO",
            categoria:"ANIMAIS"
        },
        palavra051 = {
            nome: "A ERA DO GELO",
            categoria:"TV E CINEMA"
        },
        palavra052 = {
            nome: "HOMEM ARANHA",
            categoria:"TV E CINEMA"
        },
        palavra053 = {
            nome: "THE RAIN",
            categoria:"TV E CINEMA"
        },
        palavra054 = {
            nome: "SOMOS PORTUGAL",
            categoria:"TV E CINEMA"
        },
        palavra055 = {
            nome: "STRANGER THINGS",
            categoria:"TV E CINEMA"
        },
        palavra056 = {
            nome: "LUCIFER",
            categoria:"TV E CINEMA"
        },
        palavra057 = {
            nome: "MULHER MARAVILHA",
            categoria:"TV E CINEMA"
        },
        palavra058 = {
            nome: "O INCRIVEL HULK",
            categoria:"TV E CINEMA"
        },
        palavra059 = {
            nome: "BOB ESPONJA",
            categoria:"TV E CINEMA"
        },
        palavra060 = {
            nome: "KIM POSSIBLE",
            categoria:"TV E CINEMA"
        }
    ];
}

function adicionarPalavra(){
    let addPalavra = document.getElementById("addPalavra").value.toUpperCase();
    let addCategoria = document.getElementById("addCategoria").value.toUpperCase();

    if (isNullOrWhiteSpace(addPalavra) || isNullOrWhiteSpace(addCategoria) || addPalavra.length < 3 || addCategoria.length < 3) {
        abreModal("ATEN????O"," Palavra e/ou Categoria inv??lidos");
        return;
    }

    let palavra = {
        nome: addPalavra,
        categoria: addCategoria
    }

    palavras.push(palavra);  
    sortear();
    
    document.getElementById("addPalavra").value = "";
    document.getElementById("addCategoria").value = "";
}

function resetaTeclas(){
    let teclas = document.querySelectorAll(".teclas > button")
    teclas.forEach((x) =>{
        x.style.background = "#FFFFFF";
        x.style.color = "#8B008B";
        x.disabled = false;
    });
}





