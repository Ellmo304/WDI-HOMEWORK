//variables creating gameclick counter and tiles array(so i could apply event listener)

var gameClicks = 0;

var tiles = document.getElementsByClassName("tile");

//variables setting each tile to a js element

var tile1 = document.getElementById("tile1");
var tile2 = document.getElementById("tile2");
var tile3 = document.getElementById("tile3");
var tile4 = document.getElementById("tile4");
var tile5 = document.getElementById("tile5");
var tile6 = document.getElementById("tile6");
var tile7 = document.getElementById("tile7");
var tile8 = document.getElementById("tile8");
var tile9 = document.getElementById("tile9");



//function which changes tiles when clicked to x or o depending on users turn - odd/even.
//checks for win and draw conditions

function markTile() {
  gameClicks++;
  if (gameClicks % 2 === 0 ) this.innerHTML = ("X");
  else if (gameClicks % 2 !== 0 ) this.innerHTML = ("O");

  if (tile1.innerHTML === "X" && tile2.innerHTML === "X" && tile3.innerHTML === "X" || tile4.innerHTML === "X" && tile5.innerHTML === "X" && tile6.innerHTML === "X" || tile7.innerHTML === "X" &&
  tile8.innerHTML === "X" && tile9.innerHTML === "X" || tile1.innerHTML === "X" && tile4.innerHTML === "X" && tile7.innerHTML === "X" || tile2.innerHTML === "X" && tile5.innerHTML === "X" &&
  tile8.innerHTML === "X" || tile3.innerHTML === "X" && tile6.innerHTML === "X" && tile9.innerHTML === "X" || tile1.innerHTML === "X" && tile5.innerHTML === "X" && tile9.innerHTML === "X" ||
  tile3.innerHTML === "X" && tile5.innerHTML === "X" && tile7.innerHTML === "X")
  {alert("User 2 wins!!!");}
  else if (tile1.innerHTML === "O" && tile2.innerHTML === "O" && tile3.innerHTML === "O" || tile4.innerHTML === "O" && tile5.innerHTML === "O" && tile6.innerHTML === "O" || tile7.innerHTML === "O" &&
  tile8.innerHTML === "O" && tile9.innerHTML === "O" || tile1.innerHTML === "O" && tile4.innerHTML === "O" && tile7.innerHTML === "O" || tile2.innerHTML === "O" && tile5.innerHTML === "O" &&
  tile8.innerHTML === "O" || tile3.innerHTML === "O" && tile6.innerHTML === "O" && tile9.innerHTML === "O" || tile1.innerHTML === "O" && tile5.innerHTML === "O" && tile9.innerHTML === "O" ||
  tile3.innerHTML === "O" && tile5.innerHTML === "O" && tile7.innerHTML === "O") {
    alert("User 1 wins!!!");
  }
  else if (gameClicks === 9) {
    alert("The game is a draw!!!");
  }

}

// loop listening for clicks to run marktile function

for(var i = 0 ; i < tiles.length ; i++ ) {

  tiles[i].addEventListener('click', markTile);

}




//var setting reset button to js element and function to reset the game

var clickReset = document.getElementById("resetButton").addEventListener("click", resetGame);

function resetGame() {
  alert("game reset");
  tile1.innerHTML = (""); tile2.innerHTML = (""); tile3.innerHTML = (""); tile4.innerHTML = (""); tile5.innerHTML = (""); tile6.innerHTML = (""); tile7.innerHTML = (""); tile8.innerHTML = ("");
  tile9.innerHTML = ("");
  gameClicks = 0;
for (i = 0; i < tiles.length; i++) {
tiles[i].disabled = false;}
}
