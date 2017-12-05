let counter = 1;
const countDown = document.querySelector('.count-down');
const newElement = document.createElement("p");
const secondElement = document.createElement("p");
const body = document.querySelector('body');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const timesUp = document.querySelector('.time-is-up');

newElement.innerHTML = `You've got ${counter} seconds to go!`;
secondElement.innerHTML = "Times up!";
countDown.appendChild(newElement);

var id;
start.addEventListener('click', () => {
  id = setInterval(function() {
      counter--;
      if(counter < 0) {

          timesUp.classList.add('show');
          clearInterval(id);
      } else {
          newElement.innerHTML = "You've got " + counter.toString() + " seconds to go!";
      }
  }, 1000);
}

  );

stop.addEventListener('click', () => {
  clearInterval(id);
  counter = 10;
  newElement.innerHTML = "You've got " + counter.toString() + " seconds to go!";
});
