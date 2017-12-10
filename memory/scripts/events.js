// Event for when user loads the page for first time.
// PLays intro music and makes the gameboard unclickable
window.addEventListener('load', () => {
  shuffelCards();
  gameboard.classList.add('pointer-stop');
  setTimeout(() => {
    playAudio(intro);
  }, 2100)
})

// Timeout to make the intro fade out after a certain amount of time
setTimeout(() => {
  starwarsintro.classList.add('star-wars-intro-gone')
}, 32000)



// Event for when user clicks to see if the 2 clicked cards matches or not
cardsArray.forEach((card) => {
  card.addEventListener('click', (event) => {
    clickCount();
    card.classList.toggle('flipped-card');

    checkNumber.push(event.target.dataset.number);
    complete.push(card);

    checkCombo();
    noClick();

    // WHEN YOU'VE COMPLETED GAME
    if (correct === (cardsArray.length) / 2) {
      gameboard.classList.add('pointer-stop');
      stopAudio(cantina);
      playAudio(ending);
      clearInterval(id);
      success.innerHTML = `<h2>YOU'VE BROUGHT PEACE</br>TO THE GALAXY!</br>AND IN ONLY ${clicks} CLICKS!</br></br>PRESS ME TO PLAY AGAIN!</h2>`
      setTimeout(function() {
        success.classList.add('show');
      }, 1000)
    };
    // This is to make board unclickable if time runs out
    if (counter < 0) {
      card.removeEventListener('click', function() {});
    }
  });
});


// Script for when user clicks start button
// Have timer start counting down
// Execute certain code when time is up

//Push the new time as the counter counts down into the text element that shows time
newElement.innerHTML = `You've got ${counter} seconds to go!`;
countDown.appendChild(newElement);


// Eventlistener for the start button. The events that triggers when user press start
var id;
start.addEventListener('click', () => {
    playAudio(cantina);
    stopAudio(intro);
    start.classList.add('remove');
    gameboard.classList.remove('pointer-stop');
    id = setInterval(function() {
      counter--;
      //This sections events triggers when the time is up, e.g when counter reaches below 0
      if (counter < 0) {
        clickCounter.push(clicks);

        stopAudio(cantina);
        gameboard.classList.add('pointer-stop');

        playAudio(imperial);

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

// Eventlistener in case of failure, eg time runs out
cardsArray.forEach((card) => {
  restart.addEventListener('click', () => {
    card.classList.remove('flipped-card');
    card.classList.remove('complete');
    timesUp.classList.remove('show');
    document.querySelector(".clicks").innerHTML = `Number of clicks: 0`;
    clearInterval(id);
    newElement.innerHTML = "You've got " + counter.toString() + " seconds to go!";
    start.classList.remove('remove');
    start.classList.add('show');

    stopAudio(imperial);

    // Have game board "shake" and then shuffelCards
    setTimeout(() => {
      gameboard.classList.add('shake');
      setTimeout(() => {
        gameboard.classList.remove('shake');
      }, 1000)
    }, 1000);

    setTimeout(shuffelCards, 500);

    // Empty arrays and reset counter, clicks and number of correct pairs
    clicks = 0;
    complete = [];
    checkNumber = [];
    correct = 0;
    counter = 45;

  });

});


// Eventlistener in case of success, eg all pairs are found before time is out
cardsArray.forEach((card) => {
  success.addEventListener('click', () => {
    stopAudio(ending);
    card.classList.remove('flipped-card');
    card.classList.remove('complete');
    success.classList.remove('show');
    document.querySelector(".clicks").innerHTML = `Number of clicks: 0`;
    clearInterval(id);
    newElement.innerHTML = "You've got " + counter.toString() + " seconds to go!";
    setTimeout(() => {
      start.classList.remove('remove');
      start.classList.add('show');
    }, 1000)

    // Have game board "shake" and then shuffelCards
    setTimeout(() => {
      gameboard.classList.add('shake');
      setTimeout(() => {
        gameboard.classList.remove('shake');
      }, 1000)
    }, 1000);

    setTimeout(shuffelCards, 500);

    // Empty arrays and reset counter, clicks and number of correct pairs
    clicks = 0;
    complete = [];
    checkNumber = [];
    correct = 0;
    counter = 45;


  });

});
