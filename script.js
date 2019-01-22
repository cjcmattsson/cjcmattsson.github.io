const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

// Game board unit
const box = 32;

// Loading images (background and snake snack)
const ground = new Image();
ground.src = "ground.png";

const snack = new Image();
snack.src = "food.png";

// Loading sounds
let dead = new Audio();
let eat = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";

// Creating the snake
let snake = [];

snake[0] = {
  x : 9 * box,
  y : 10 * box
};

// Creating the food, randomizing psoition
let food = {
  x : Math.floor(Math.random()*17 + 1) * box,
  y : Math.floor(Math.random()*15 + 3) * box
}

// Score variable
let score = 0;


//control the snake

let d;

document.addEventListener("keydown", direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";

    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";

    } else if(key == 40 && d != "UP"){
        d = "DOWN";
    }
}

// cheack collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}


// Painting the canvas
draw = () => {

  ctx.drawImage(ground,0,0);

  for (var i = 0; i < snake.length; i++) {
    ctx.fillStyle = (i==0) ? "green" : "white";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);

    ctx.strokeStyle = "gren";
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }

  ctx.drawImage(snack,food.x,food.y);

  // old head position
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  // Direction to send snake
  if (d == "LEFT") snakeX -= box;
  if (d == "UP") snakeY -= box;
  if (d == "RIGHT") snakeX += box;
  if (d == "DOWN") snakeY += box;


  // EAUTING THE SNACK
  if (snakeX == food.x && snakeY == food.y) {
    score ++;
    eat.play();
    food = {
      x : Math.floor(Math.random()*17 + 1) * box,
      y : Math.floor(Math.random()*15 + 3) * box,
    }
  } else {
        // remove the tail
        snake.pop();
    }

    // add new head
    let newHead = {
      x: snakeX,
      y: snakeY,
    }


    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
      dead.play();
      clearInterval(game);
}

snake.unshift(newHead);

  ctx.fillStyle = "white";
  ctx.font = "38px Changa One";
  ctx.fillText(score, 2*box, 1.6*box);

}

// IF SNAKE HITS ISELF
// collision = (newHead, snake) => {
//   for (var i = 0; i < snake.length; i++) {
//     if (newHead.x == snake[i].x && newHead.y == snake[i].y) {
//         return true;
//     }
//   }
//   return false;
// }

// Drawing the canvas every 100ms
let game = setInterval(draw, 100);
