// All varables and arrays goes here

// Variables for selecting certain HTML-elements

const gameboard = document.querySelector('.gameboard'); // The entire gameboard
const cards = document.querySelectorAll('.card'); // All cards, nodeList
const cardsArray = Array.from(cards); //Array from the nodeList of cards-variable
const restart = document.querySelector('.restart'); //The restart button, if user fails
const timesUp = document.querySelector('.time-is-up'); //The box that appears when user fails
const success = document.querySelector('.success'); // Successbutton, if user completes game in time
const starwarsintro = document.querySelector('.star-wars-intro'); // The intro text
const countDown = document.querySelector('.count-down'); // The clock, the 45s countdown
const newElement = document.createElement("p"); //The text that shows you remaining time
const body = document.querySelector('body'); //The body-element
const start = document.querySelector('.start'); //The start-button, to start each game
const imperial = document.querySelector('.imperial'); //The "you loose"-music
const cantina = document.querySelector('.cantina'); //The music that plays during game-play
const ending = document.querySelector('.ending'); //The "you win"-music
const intro = document.querySelector('.intro'); //The intro music, as text goes up

// Variables that are supposed to change depending on the users interaction
// and depending on the time that remains

let counter = 45; //Counter, this is the time the user gets to complete the game
clickCounter = []; //Array for ammounts of click the user does
let clicks = 0; //Variable that gets pushed into clickCounter Array when the game is completed


checkNumber = []; // Array to push the clicked card dataset into, to compare if a match or not
complete = []; //Array to push the HTML-element from the card that is clicked to compare if match
let correct = 0; // Number of correct answers, which increases if the user finds matches
