let counter = 100;
const countDown = document.querySelector('.count-down');
const newElement = document.createElement("p");
const secondElement = document.createElement("p");
const body = document.querySelector('body');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const timesUp = document.querySelector('.time-is-up');
const imperial = document.querySelector('.imperial');
const cantina = document.querySelector('.cantina');
clickCounter = [];

let clicks = 0;
    function clickCount() {
        clicks += 1;
        document.querySelector(".clicks").innerHTML = `Number of clicks: ${clicks}`;
    };



newElement.innerHTML = `You've got ${counter} seconds to go!`;
secondElement.innerHTML = "Times up!";
countDown.appendChild(newElement);

var id;
start.addEventListener('click', () => {
  playAudio(cantina);
  start.classList.add('remove');
  gameboard.classList.remove('pointer-stop');
  id = setInterval(function() {
      counter--;
      if (true) {

      }
      if(counter < 0) {
        clickCounter.push(clicks);
        console.log(clickCounter);
        console.log(clicks);


        stopAudio(cantina);
        gameboard.classList.add('pointer-stop');

        function playAudio() {
          imperial.play();
        }

        playAudio();
          timesUp.classList.add('show');
          if (timesUp.classList.contains('show')) {
            gameboard.classList.add('pointer-stop');
            setTimeout(function() {
              gameboard.classList.add('pointer-stop');
            }, 100)
          }
          clearInterval(id);
      } else {
          newElement.innerHTML = "You've got " + counter.toString() + " seconds to go!";
      }
  }, 1000);
}

  );
