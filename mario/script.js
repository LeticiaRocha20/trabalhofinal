const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');


//a função "jump" adiciona a class "jump" no mario -->
const jump = () => {
      console.log("test")
      mario.classList.add('jump');
      setTimeout(() => {
        mario.classList.remove('jump');
      }, 500);
}

const loop =setInterval(() => {
  //SE A DISTANCIA DO TUBO (DA ESQUERDA PARA A DIREITA) FOR MENOR QUE 120PX SIGNIFICA QUE O MARIO TOCOU NO TUBO, PERDEMOS -->
   const tuboPosition = tubo.offsetLeft;
     //RETIREI O "PX" DO CONSOLE LOG PARA PODER FAZER OS CALCULOS -->
   const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

console.log(marioPosition);
//se o personagem já chegou a 140 e a altura é menor do que 80 ele bate no tubo e perde -->
   if (tuboPosition <= 140 && tuboPosition > 0 && marioPosition < 80 ) {
      tubo.style.animation = 'none';
      //o boneco fica onde bate, não regressa ao inicio -->
      tubo.style.left = `${tuboPosition}px `;
     //o boneco para no local que perde em vez de ficar atras da imagem -->
      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosition}px `;
//imagem do mario muda quando encosta no tubo -->
      mario.src = './images/game-over.png';
      //imagem do mario estava muito grande -->
      mario.style.width = '85px'
      //imagem do mario tinha uma distancia entre o personagem e o tubo -->
      mario.style.marginLeft = '60px'
   }

}, 10);


//quando clicarmos em qualquer tecla ele salta -->
document.addEventListener('keydown', jump);