// REFERENCIA H2 DO HTML->
const currentPlayer = document.querySelector(".currentPlayer");

let selected;
// PRIMEIRO JOGADOR É O "O"->
let player = "O";

// VARIÁVEL COM TODAS AS POSIÇÕES POSSIVEIS PARA TER UM VENCEDOR->
let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function init() {
  // INICIA VAZIA->
  selected = [];

  // MOSTRA QUAL É O JOGADOR, O INICIAL É O "O"->
  currentPlayer.innerHTML = `É A VEZ DO JOGADOR: ${player}`;
 // TODOS OS BOTÕES INICIAM VAZIOS->
  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

init();

function newMove(e) {
   // SE NÓS CLICARMOS POR EXEMPLO NO PRIMEIRO BOTÃO (HTML), ELE RETORNA O NÚMERO 1->
  const index = e.target.getAttribute("data-i");
   // O NUMERO DESSE BOTÃO É "SUBSTITUIDO PELO "O" OU "X"->
  e.target.innerHTML = player;
   // REMOVER O "CLICK" DO BOTÃO JÁ ESCOLHIDO PARA QUE SÓ SE POSSA CLICAR 1 VEZ EM CADA QUADRADO->
  e.target.removeEventListener("click", newMove);
   // ARMAZENA OS BOTÕES QUE JÁ FORAM SELECIONADOS NO INDEX DO BOTÃO A POSIÇÃO DO JOGADOR, O "X" OU O "O"->
  selected[index] = player;

  setTimeout(() => {
    check();
  }, [100]);

   // ALTERA A VEZ DO JOGADOR, SE TIVER O "X" É O "O" SENÃO É O "X"->
  player = player === "X" ? "O" : "X";
  currentPlayer.innerHTML = `É A VEZ DO JOGADOR: ${player}`;
}

function check() {
  let playerLastMove = player === "X" ? "O" : "X";

  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

     // VERIFICA NA LISTA SE OS JOGADORES TEM OS ITENS NA POSIÇÃO CORRETA PARA VER SE TEM VENCEDOR->
  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
       // SE TIVER UM VENCEDOR APARECE ESTA MENSAGEM->
      alert("O JOGADOR '" + playerLastMove + "' VENCEU!");
      // O JOGO INICIA->
      init();
      return;
    }
  }

   // VERIFICA SE DÁ EMPATE, VERIFICANDO SE OS 9 QUADRADOS ESTÃO PREENCHIDOS, SE SIM É EMPATE->
  if (selected.filter((item) => item).length === 9) {
     // SE DER EMPATE APARECE ESTA MENSAGEM->
    alert("DEU EMPATE!");
     // O JOGO INICIA->
    init();
    return;
  }
}
