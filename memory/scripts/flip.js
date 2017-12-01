// FLIPPING CARDS

const gameboard = document.querySelector('.gameboard');

for (var i = gameboard.children.length; i >= 0; i--) {
       gameboard.appendChild(gameboard.children[Math.random() * i | 0]);
     }

const cards = document.querySelectorAll('.card');

const cardsArray = Array.from(cards);

cardsArray.forEach( (card) => {

  card.addEventListener('click', (event) => {
    card.classList.toggle('flipped-card');
    card.classList.toggle('flipped-card-p');

    console.log(event.target.dataset.number);
  });
})


// PUT DATANUMBER IN ARRAY, CHECK IF SAME NUMBER

checkNumber = [];
complete = [];
let correct = 0;

  cardsArray.forEach((card) => {
    card.addEventListener('click', (event) => {
      checkNumber.push(event.target.dataset.number);
      complete.push(card);
      console.log(complete);
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

            // WHEN YOU'VE COMPLETED GAME
            if (correct === 8) {
            setTimeout(function() {
              alert('GREAT SUCCES!')
              }, 1000)
            }

        } else {
          setTimeout(function() {
            console.log('hej');
            complete[0].classList.remove('flipped-card');
            complete[0].classList.remove('flipped-card-p');
            complete[1].classList.remove('flipped-card');
            complete[1].classList.remove('flipped-card-p');
            checkNumber = [];
            complete = [];

          }, 1500)
        }
      };
    });
  })


  // RESTARTING GAME BY REMOVING FLIPPED CLASSES FROM ALL THAT CONTAINS THEM

  const restart = document.querySelector('.restart');


  cardsArray.forEach((card) => {
    restart.addEventListener('click', () => {
      card.classList.remove('flipped-card');
      card.classList.remove('flipped-card-p');
      card.classList.remove('complete');

      complete = [];
      checkNumber = [];
      correct = 0;

      setTimeout(() => {
        for (var i = gameboard.children.length; i >= 0; i--) {
          gameboard.appendChild(gameboard.children[Math.random() * i | 0]);
        }
      }, 500);

      })
  });




  // TIMER
  const start = document.querySelector('.start');
  const abort = document.querySelector('.abort');
  const clock = document.querySelector('.clock');
  const sentence = document.querySelector('.sentence-text');


  start.addEventListener('click', countDown);
    let count = 61;
    var myVar = setInterval(function(){ countDown() }, 1000);

    function countDown () {
      count--;
      clock.innerHTML = count;
        if (count === 50) {
        sentence.innerHTML = 'Clock is ticking!';
      } else if (count === 40) {
        sentence.innerHTML = 'Get a move on!!';
      } else if (count === 30) {
        sentence.innerHTML = 'Wow, you really are slow';
      } else if (count === 20) {
        sentence.innerHTML = 'Time is running out!';
      } else if (count === 10) {
        sentence.innerHTML = 'Your gonna lose this';
      } else if (count === 0) {
        sentence.innerHTML = 'Time is up';
        clearInterval(myVar);
      }
      // console.log(count);
    };

abort.addEventListener('click', ()=> {
  clearInterval(myVar);
  clock.innerHTML = '60';
  let count = 61;
})



    // RESTART COUNTER AND GAME

    function stopCount () {
      clearTimeout(count);
    }

    restart.addEventListener('click', () => {

        // STOP PREVIOUS COUNTER

        function countDown() { };
        stopCount();

        // RESTART TIMER
        count = 61;
        countDown();

        // RESHUFFEL BOARD
        gameboard.classList.add('shake');
        setTimeout(() => {

          gameboard.classList.remove('shake');
        }, 1000)

    })
