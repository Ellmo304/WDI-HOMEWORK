var after = new Audio("../sounds/after.wav");
var better = new Audio("../sounds/better.wav");
var doIt = new Audio("../sounds/do_it.wav");
var ever = new Audio("../sounds/ever.wav");
var faster = new Audio("../sounds/faster.wav");
var harder = new Audio("../sounds/harder.wav");
var hour = new Audio("../sounds/hour.wav");
var makeIt = new Audio("../sounds/make_it.wav");
var makesUs = new Audio("../sounds/makes_us.wav");
var moreThan = new Audio("../sounds/more_than.wav");
var never = new Audio("../sounds/never.wav");
var our = new Audio("../sounds/our.wav");
var over = new Audio("../sounds/over.wav");
var stronger = new Audio("../sounds/stronger.wav");
var workIs = new Audio("../sounds/work_is.wav");
var workIt = new Audio("../sounds/work_it.wav");


document.getElementById("after").addEventListener("click", function() {
  after.play();
});

document.getElementById("better").addEventListener("click", function() {
  better.play();
});

document.getElementById("do-it").addEventListener("click", function() {
  doIt.play();
});

document.getElementById("ever").addEventListener("click", function() {
  ever.play();
});

document.getElementById("faster").addEventListener("click", function() {
  faster.play();
});

document.getElementById("harder").addEventListener("click", function() {
  harder.play();
});

document.getElementById("hour").addEventListener("click", function() {
  hour.play();
});

document.getElementById("make-it").addEventListener("click", function() {
  makeIt.play();
});

document.getElementById("makes-us").addEventListener("click", function() {
  makesUs.play();
});

document.getElementById("more-than").addEventListener("click", function() {
  moreThan.play();
});

document.getElementById("never").addEventListener("click", function() {
  never.play();
});

document.getElementById("our").addEventListener("click", function() {
  our.play();
});

document.getElementById("over").addEventListener("click", function() {
  over.play();
});

document.getElementById("stronger").addEventListener("click", function() {
  stronger.play();
});

document.getElementById("work-is").addEventListener("click", function() {
  workIs.play();
});

document.getElementById("work-it").addEventListener("click", function() {
  workIt.play();
});


document.addEventListener('keydown', function(e){
  switch (e.key) {
  case "q": workIt.play();
  workIt.currentTime = 0;
  break;
  case "w": makeIt.play();
  makeIt.currentTime = 0;
  break;
  case "e": doIt.play();
  doIt.currentTime = 0;
  break;
  case "r": makesUs.play();
  makesUs.currentTime = 0;
  break;
  case "t": harder.play();
  harder.currentTime = 0;
  break;
  case "y": better.play();
  better.currentTime = 0;
  break;
  case "u": faster.play();
  faster.currentTime = 0;
  break;
  case "i": stronger.play();
  stronger.currentTime = 0;
  break;
  case "a": moreThan.play();
  moreThan.currentTime = 0;
  break;
  case "s": hour.play();
  hour.currentTime = 0;
  break;
  case "d": our.play();
  our.currentTime = 0;
  break;
  case "f": never.play();
  never.currentTime = 0;
  break;
  case "g": ever.play();
  ever.currentTime = 0;
  break;
  case "h": after.play();
  after.currentTime = 0;
  break;
  case "j": workIs.play();
  workIs.currentTime = 0;
  break;
  case "k": over.play();
  over.currentTime = 0;
  break;
  }
});
