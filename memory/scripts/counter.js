let counter = 5;
const countDown = document.querySelector('.count-down');
const newElement = document.createElement("p");
const secondElement = document.createElement("p");
const body = document.querySelector('body');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const timesUp = document.querySelector('.time-is-up');
const imperial = document.querySelector('.imperial');

newElement.innerHTML = `You've got ${counter} seconds to go!`;
secondElement.innerHTML = "Times up!";
countDown.appendChild(newElement);

var id;
start.addEventListener('click', () => {
  start.classList.add('remove');
  gameboard.classList.remove('pointer-stop');
  id = setInterval(function() {
      counter--;
      if(counter < 0) {
        gameboard.classList.add('pointer-stop');

        function playAudio() {
          imperial.play();
        }

        playAudio();
          timesUp.classList.add('show');
          if (timesUp.classList.contains('show')) {
            card.removeEventListener('click', function(){});
            gameboard.classList.add('pointer-stop');
          }
          clearInterval(id);
      } else {
          newElement.innerHTML = "You've got " + counter.toString() + " seconds to go!";
      }
  }, 1000);
}

  );
