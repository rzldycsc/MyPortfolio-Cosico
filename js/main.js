let score = 0;

// function to generate a random color
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// create a new shape with a random color
function createShape() {
  let shape = document.querySelector(".shape");
  let color = getRandomColor();
  shape.style.backgroundColor = color;
  shape.style.left = Math.floor(Math.random() * 450) + "px";
}

// function to check if the player's color matches the shape's color
function checkMatch() {
  let shape = document.querySelector(".shape");
  let player = document.querySelector(".player");
  if (shape.style.backgroundColor === player.style.backgroundColor) {
    score++;
    document.querySelector("#score").innerHTML = score;
    createShape();
  }
}

// move the player left or right using arrow keys
function movePlayer(e) {
  let player = document.querySelector(".player");
  if (e.keyCode == '37') {
    // left arrow
    if (player.style.left !== "0px") {
      player.style.left = parseInt(player.style.left) - 175 + "px";
    }
  }
  else if (e.keyCode == '39') {
    // right arrow
    if (player.style.left !== "350px") {
      player.style.left = parseInt(player.style.left) + 175 + "px";
    }
  }
  checkMatch();
}

// set up the game
function startGame() {
  createShape();
  document.addEventListener('keydown', movePlayer);
}

startGame();
