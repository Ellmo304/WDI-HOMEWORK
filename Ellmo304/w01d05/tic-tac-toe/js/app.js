
var user1 = "x";
var user2 = "o";

var gameClicks = 0;

var tiles = document.getElementsByClassName("tile");

var tile1 = document.getElementById("tile1");
var tile2 = document.getElementById("tile2");
var tile3 = document.getElementById("tile3");
var tile4 = document.getElementById("tile4");
var tile5 = document.getElementById("tile5");
var tile6 = document.getElementById("tile6");
var tile7 = document.getElementById("tile7");
var tile8 = document.getElementById("tile8");
var tile9 = document.getElementById("tile9");


//
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


for(var i = 0 ; i < tiles.length ; i++ ) {

  tiles[i].addEventListener('click', markTile);

}
