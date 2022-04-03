const Dino = document.querySelector('.Dino');

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        console.log('Presionou espaço');
      if (!isJumping) {
        jump();
      }
    }
  }


  document.addEventListener('keyup', handleKeyUp);
console.log(Dino);