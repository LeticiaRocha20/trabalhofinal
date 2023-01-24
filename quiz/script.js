//variaveis diferenciadas//

const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");


import questions from "./questions.js";
//variavel que armazena o index da pergunta//
let currentIndex = 0;
//quantidade de respostas certas//
let questionsCorrect = 0;

btnRestart.onclick = () => {
//visivel para o utilizador//
    content.style.display = "flex";
    contentFinish.style.display = "none";
//reseta o indice e as questoes corretas//
    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
};


function nextQuestion(e) {
//se clica resposta correta ele soma mais 1 no contador //
    if ( e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
    }
//verifica se não é a ultima pergunta, carrega a proxima pergunta//
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
//se for a ultima pergunta, chama a função "finish"//
    } else {
        finish();
    }
}

function finish() {
    textFinish.innerHTML = `VOCÊ ACERTOU ${questionsCorrect} DE ${questions.length}`;
//"none" fica invisivel para o utilizador//
    content.style.display ="none";
    contentFinish.style.display = "flex";
}


function loadQuestion() {
//"currentIndex" inicia em 0 + 1 dividido pela quantidade de pergunta//
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");
    
        div.innerHTML = `
        <button class="answer" data-correct="${answer.correct}">
          ${answer.option}
        </button>
        `;
    
        answers.appendChild(div);
      });
    
      document.querySelectorAll(".answer").forEach((item) => {
//clica...proxima questao//
        item.addEventListener("click", nextQuestion);
      });
}




//vai ser chamada assim que eu carregar o documento//
loadQuestion();