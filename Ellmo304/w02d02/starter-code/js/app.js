var userScore = 0;

var aiScore = 0;


var choices = ["rock", "paper", "scissors"];

document.getElementById("player").innerHTML = "Click either rock, paper or scissors to play!";

  var randomIndex = Math.floor(Math.random() * 3);
  var choices = ["rock", "paper", "scissors"];

  var computerChoice = choices[randomIndex];



console.log(computerChoice);

var playAgain = function() {
document.getElementById("player").innerHTML = "Choose again to keep going!";
randomIndex = Math.floor(Math.random() * 3);
computerChoice = choices[randomIndex];
console.log(computerChoice);
};

var playGame = function() {

  document.getElementById("player").innerHTML = "You choose " + this.id;
  switch (true) {
    case this.id === "rock" && computerChoice === "scissors" :
    document.getElementById("player").innerHTML = "Computer chose scissors, you win :)";
    userScore = (userScore + 10);
    break;
    case this.id === "rock" && computerChoice === "paper" :
    document.getElementById("player").innerHTML = "Computer chose paper, you lose :(";
    aiScore = (aiScore + 10);
    break;
    case this.id === "paper" && computerChoice === "rock":
    document.getElementById("player").innerHTML = "Computer chose rock, you win :)";
    userScore = (userScore + 10);
    break;
    case this.id === "paper" && computerChoice === "scissors":
    document.getElementById("player").innerHTML = "Computer chose scissors, you lose :(";
    aiScore = (aiScore + 10);
    break;
    case this.id === "scissors" && computerChoice === "paper" :
    document.getElementById("player").innerHTML = "Computer chose paper, you win :)";
    userScore = (userScore + 10);
    break;
    case this.id === "scissors" && computerChoice === "rock":
    document.getElementById("player").innerHTML = "Computer chose rock, you lose :(";
    aiScore = (aiScore + 10);
    break;
    default: document.getElementById("player").innerHTML = "Computer chose the same as you! The round is a draw!!";
  }
  document.getElementById("humanScore").innerHTML = (userScore);
  document.getElementById("computerScore").innerHTML = (aiScore);
  setTimeout(playAgain, 5000);
};


document.getElementById("humanScore").innerHTML = (userScore);
document.getElementById("computerScore").innerHTML = (aiScore);

document.getElementById("rock").addEventListener("click", playGame);
document.getElementById("paper").addEventListener("click", playGame);
document.getElementById("scissors").addEventListener("click", playGame);
