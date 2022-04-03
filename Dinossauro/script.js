const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;


function handleKeyUp(event) {
    if (event.keyCode === 32) {
        console.log('Presionou espaço');
      if (!isJumping) {
        jump();
      }
    }
  }

  function jump() {
    isJumping = true; /* Parte 5  */ 
  
    let upInterval = setInterval(() => {
      if (position >= 150) {
        // Descendo
        clearInterval(upInterval);
  
        let downInterval = setInterval(() => {
          if (position <= 0) {
            clearInterval(downInterval);
            isJumping = false; /*Entrou*/ 
          } else {
            position -= 20;
            dino.style.bottom = position + 'px';
          }
        }, 20);
      } else {
        // Subindo
        position += 20;
        dino.style.bottom = position + 'px';
      }
    }, 20);
  }


  function createCactus() {
    const cactus = document.createElement('div');

    cactus.classList.add('cactus');
    background.appendChild(cactus);
    cactus.style.left = cactusPosition + 'px';
  

  document.addEventListener('keyup', handleKeyUp);

