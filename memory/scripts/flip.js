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


// PUT DATANUMBER IN ARRAY, CHECK IF SAME number

checkNumber = [];
complete = [];
let counter = 0;

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
          counter++;
          console.log(counter);

            // WHEN YOU'VE COMPLETED GAME
            if (counter === 8) {
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
      counter = 0;
      setTimeout(() => {
        for (var i = gameboard.children.length; i >= 0; i--) {
          gameboard.appendChild(gameboard.children[Math.random() * i | 0]);
        }
      }, 500);

      })
  });

    restart.addEventListener('click', () => {
        gameboard.classList.toggle('gameboard-flipped');

    })
