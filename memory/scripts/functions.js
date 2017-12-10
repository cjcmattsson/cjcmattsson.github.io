// All functions used in the scripts are presented below


// Function to shuffel all cards
function shuffelCards() {
  for (var i = gameboard.children.length; i >= 0; i--) {
    gameboard.appendChild(gameboard.children[Math.random() * i | 0]);
  }
};

// Function that counts the click the user does on the cards.
function clickCount() {
  clicks += 1;
  document.querySelector(".clicks").innerHTML = `Number of clicks: ${clicks}`;
};

// Function that stops the user from clicking more that 2 cards at a time
// and prevents the user from clicking any card after the time is up
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

// Function to check if the 2 pressed cards are a match or not
// Execute certain code depending on above statement is true or false
function checkCombo() {
  if (checkNumber.length === 2) {
    if (checkNumber[0] === checkNumber[1]) {
      complete[0].classList.add('complete');
      complete[1].classList.add('complete');
      complete = [];
      checkNumber = [];
      correct++;
    } else {
      setTimeout(function() {
        complete[0].classList.remove('flipped-card');
        complete[1].classList.remove('flipped-card');
        checkNumber = [];
        complete = [];
      }, 1000)
    };
  };
};


// MUSIC
// Function to have certain track start playing
function playAudio(target) {
  target.play();
};

// Function to have certain track stop from playing
// and resetting the track to
function stopAudio(target) {
  target.pause();
  target.currentTime = 0;
};
