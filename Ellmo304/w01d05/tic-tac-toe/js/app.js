
var user1 = "x";
var user2 = "o";

var gameClicks = 0;



var tiles = document.getElementsByClassName("tile");

//
function markTile() {
  gameClicks++;
  if (gameClicks % 2 === 0 ) this.innerHTML = ("X");
  else if (gameClicks % 2 !== 0 ) this.innerHTML = ("O");

}

for(var i = 0 ; i < tiles.length ; i++ ) {

  tiles[i].addEventListener('click', markTile);

}
