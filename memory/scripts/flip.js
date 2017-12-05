// VARIABLES

const gameboard = document.querySelector('.gameboard');
const cards = document.querySelectorAll('.card');
const restart = document.querySelector('.restart');
const success = document.querySelector('.success');
const cardsArray = Array.from(cards);

for (var i = gameboard.children.length; i >= 0; i--) {
  gameboard.appendChild(gameboard.children[Math.random() * i | 0]);
}

// FUNCTIONS
// PUT DATANUMBER IN ARRAY, CHECK IF SAME NUMBER
checkNumber = [];
complete = [];
let correct = 0;

function noClick() {
  if (checkNumber.length === 2) {
    gameboard.classList.add('pointer-stop');
    setTimeout(function(){
      gameboard.classList.remove('pointer-stop');
    }, 1000)
  };
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


cardsArray.forEach((card) => {
  card.addEventListener('click', (event) => {
    card.classList.toggle('flipped-card');

    console.log(event.target.dataset.number);
    checkNumber.push(event.target.dataset.number);
    complete.push(card);
    console.log(complete);

      checkCombo();
      noClick();

      // WHEN YOU'VE COMPLETED GAME
      if (correct === 8) {
        setTimeout(function() {
          // alert('GREAT SUCCES!')
          success.style.display = "block";
          // cardSuccesBox.style.display = "block";
          // const cardSuccesBox = document.querySelector('.cardSucces');
        }, 1000)
      };

    });


  // RESTARTING GAME BY REMOVING FLIPPED CLASSES FROM ALL THAT CONTAINS THEM
  restart.addEventListener('click', () => {
    card.classList.remove('flipped-card');
    card.classList.remove('flipped-card-p');
    card.classList.remove('complete');
    timesUp.classList.remove('show');
    newElement.innerHTML = "You've got " + counter.toString() + " seconds to go!";

    console.log("hej");

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

  })
})
