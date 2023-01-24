let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}

// eixo inverso, para baixo, nº positivos, para cima, nºnegativos-->
// não dá para ir em 2 direçoes opostas na mesma linha-->
addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            // bloqueia caso queira fazer o oposto na mesma linha-->
            if (lastInputDirection.y !== 0) break

            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break

            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break

            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break

            inputDirection = { x: 1, y: 0 }
            break
    }
})