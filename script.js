const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');

//a função "jump" adiciona a class "jump" no mario -->
const jump = () => {
      mario.classList.add('jump');
      setTimeout(() => {
        mario.classList.remove('jump');
      }, 500);
}

const loop =setInterval(() => {
  //SE A DISTANCIA DO TUBO (DA ESQUERDA PARA A DIREITA) FOR MENOR QUE 120PX SIGNIFICA QUE O MARIO TOCOU NO TUBO, PERDEMOS -->
   const tuboPosition = tubo.offsetLeft;
   if (tuboPosition <= 140 ) {
      tubo.style.animation = 'none';
      //o boneco fica onde bate, não regressa ao inicio -->
      tubo.style.left = `${tuboPosition}px `;
   }

}, 10);


//quando clicarmos em qualquer tecla ele salta -->
document.addEventListener('Keydown', jump);