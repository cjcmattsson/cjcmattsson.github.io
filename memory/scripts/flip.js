// VARIABLES

window.addEventListener('load', () => {
  gameboard.classList.add('pointer-stop');
  setTimeout(() => {
    playAudio(intro);
  }, 2100)
})

const gameboard = document.querySelector('.gameboard');
const cards = document.querySelectorAll('.card');
const restart = document.querySelector('.restart');
const success = document.querySelector('.success');
const starwarsintro = document.querySelector('.star-wars-intro');
const cardsArray = Array.from(cards);

console.log(cardsArray);

for (var i = gameboard.children.length; i >= 0; i--) {
  gameboard.appendChild(gameboard.children[Math.random() * i | 0]);
}

setTimeout(() => {
  starwarsintro.classList.add('star-wars-intro-gone')
}, 20000)

// FUNCTIONS
// PUT DATANUMBER IN ARRAY, CHECK IF SAME NUMBER
checkNumber = [];
complete = [];
let correct = 0;

function noClick() {
  if (checkNumber.length === 2) {
    gameboard.classList.add('pointer-stop');
    setTimeout(function() {
      gameboard.classList.remove('pointer-stop');
    }, 1000)
  };

  if (timesUp.classList.contains('show')) {
    gameboard.classList.add('pointer-stop');
  }
};


function checkCombo() {
  if (checkNumber.length === 2) {
    console.log("Two objects in array");
    if (checkNumber[0] === checkNumber[1]) {
      complete[0].classList.add('complete');
      complete[1].classList.add('complete');

      console.log('match!');
      complete = [];
      console.log(complete);
      checkNumber = [];
      console.log(checkNumber);
      correct++;
      console.log(correct);


    } else {
      setTimeout(function() {
        console.log('hej');
        complete[0].classList.remove('flipped-card');
        complete[1].classList.remove('flipped-card');
        checkNumber = [];
        complete = [];

      }, 1000)
    };
  };
};

// MUSIC

function playAudio(target) {
  target.play();
}
function stopAudio(target) {
  target.pause();
  target.currentTime = 0;
}

cardsArray.forEach((card) => {
  card.addEventListener('click', (event) => {
    clickCount();
    card.classList.toggle('flipped-card');

    console.log(event.target.dataset.number);
    checkNumber.push(event.target.dataset.number);
    complete.push(card);
    console.log(complete);

    checkCombo();
    noClick();

    // WHEN YOU'VE COMPLETED GAME
    if (correct === (cardsArray.length)/2) {
      gameboard.classList.add('pointer-stop');
      stopAudio(cantina);
      playAudio(ending);
      clearInterval(id);
      success.innerHTML = `<h2>YOU'VE BROUGHT PEACE</br>TO THE GALAXY!</br>AND IN ONLY ${clicks} CLICKS!</br></br>PRESS ME TO PLAY AGAIN!</h2>`
      setTimeout(function() {
        success.classList.add('show');
      }, 1000)
    };
   if (counter < 0) {
     card.removeEventListener('click', function(){});
   }
  });
});

// RESTARTING GAME BY REMOVING FLIPPED CLASSES FROM ALL THAT CONTAINS THEM
cardsArray.forEach((card) => {
  restart.addEventListener('click', () => {
    card.classList.remove('flipped-card');
    card.classList.remove('complete');
    timesUp.classList.remove('show');
    clicks = 0;
    document.querySelector(".clicks").innerHTML = `Number of clicks: 0`;
    clearInterval(id);
    counter = 45;
    newElement.innerHTML = "You've got " + counter.toString() + " seconds to go!";
    start.classList.remove('remove');
    start.classList.add('show');

    stopAudio(imperial);

    // RESHUFFEL BOARD
    setTimeout(() => {
      gameboard.classList.add('shake');
      setTimeout(() => {

        gameboard.classList.remove('shake');
      }, 1000)

    }, 1000)

    complete = [];
    checkNumber = [];
    correct = 0;
    counter = 10;

    setTimeout(() => {
      for (var i = gameboard.children.length; i >= 0; i--) {
        gameboard.appendChild(gameboard.children[Math.random() * i | 0]);
      }
    }, 500);

  });

});

cardsArray.forEach((card) => {
  success.addEventListener('click', () => {
    stopAudio(ending);
    card.classList.remove('flipped-card');
    card.classList.remove('complete');
    success.classList.remove('show');
    clicks = 0;
    document.querySelector(".clicks").innerHTML = `Number of clicks: 0`;
    clearInterval(id);
    counter = 45;
    newElement.innerHTML = "You've got " + counter.toString() + " seconds to go!";
    setTimeout(() => {
      start.classList.remove('remove');
      start.classList.add('show');
    }, 1000)

    // RESHUFFEL BOARD
    setTimeout(() => {
      gameboard.classList.add('shake');
      setTimeout(() => {

        gameboard.classList.remove('shake');
      }, 1000)

    }, 1000)

    complete = [];
    checkNumber = [];
    correct = 0;
    counter = 10;

    setTimeout(() => {
      for (var i = gameboard.children.length; i >= 0; i--) {
        gameboard.appendChild(gameboard.children[Math.random() * i | 0]);
      }
    }, 500);

  });

});
