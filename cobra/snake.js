import { getInputDirection } from "./input.js"


// como o "1" do "if" é um valor muito alto criei-->
// quanto mais rápido o jogo atualizar, mais rápido a cobra anda, então coloquei 4-->
export const SNAKE_SPEED = 4

// nas coordenadas 11, 11 vai estar o corpo da cobra e vai ser só 1 quadrado-->
const snakeBody = [{
    x: 11,
    y: 11
}]

let newSegments = 0
// para a cobra se mexer, removemos o ultimo quadrado e adicionamos um á frente-->
// cobra andar direita, aumenta "x"-->
// "-2" ignora o ultimo elemento-->
export function update() {
    addSegments()

    const inputDirection = getInputDirection()

    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return position.x === segment.x && position.y === segment.y
    })
}

export function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], {
        ignoreHead: true
    })
}