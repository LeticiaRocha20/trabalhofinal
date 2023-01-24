// utilização do "module"- HTML-->
import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection, SNAKE_SPEED } from './snake.js'

import { update as updateFood, draw as drawFood, } from './food.js'

import { outsideGrid } from './grid.js'


const gameBoard = document.querySelector('#game-board')

let lastRenderTime = 0
let gameOver = false

requestAnimationFrame(main)

function main(currentTime) {
    if (gameOver) {
        if (confirm('VOCÊ PERDEU !!')) {
            location = '/'
        }
        return
    }

     // o jogo é em frames por seg.-->
// função imbutida já do js-->
// a cada frame a função "main" vai estar a ser executada-->

    requestAnimationFrame(main)
 //para que o jogo não rode a muitos fps, calculei o tempo e limitei-->  
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

     // temos o tempo em segundos desde a ultima renderizaçao-->
    update()
    draw()
}
// o código estava a 0,01 segundos, muito rápido então coloquei o if para por mais lento-->
 //o jogo ficou a rodar a 0,2 frames-->

//utiliza todos os valores do jogo-->
//atualizar tamanho da cobra-->
//atualizar localização comida-->
//certificar se perdemos, batemos na parede ou em nós próprios-->

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

//pega nos valores e desenha no ecrã-->
//coloca visivel todas as informaçoes do "update"-->
function draw() {
    //para que a cobra ande para a direita, sem preencher todos os quadrados-->
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)

}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
