var rockPaperScissors = rockPaperScissors || {};

rockPaperScissors.init = function() {

this.userScore = 0;
this.aiScore = 0;
this.randomIndex = Math.floor(Math.random() * 3);
this.choices = ["rock", "paper", "scissors"];
this.computerChoice = this.choices[this.randomIndex];
document.getElementById("humanScore").innerHTML = (this.userScore);
document.getElementById("computerScore").innerHTML = (this.aiScore);

this.initEventListeners();
};

document.getElementById("player").innerHTML = "Click either rock, paper or scissors to play!";


rockPaperScissors.playAgain = function() {
document.getElementById("player").innerHTML = "Choose again to keep going!";
this.randomIndex = Math.floor(Math.random() * 3);
this.computerChoice = this.choices[this.randomIndex];
document.getElementById("rock").disabled = false;
document.getElementById("paper").disabled = false;
document.getElementById("scissors").disabled = false;
console.log(this.computerChoice);
};

rockPaperScissors.playGame = function() {

  document.getElementById("player").innerHTML = "You choose " + this.id;
  switch (true) {
    case this.id === "rock" && this.computerChoice === "scissors" :
    document.getElementById("player").innerHTML = "Computer chose scissors, you win :)";
    this.userScore = (this.userScore + 10);
    break;
    case this.id === "rock" && this.computerChoice === "paper" :
    document.getElementById("player").innerHTML = "Computer chose paper, you lose :(";
    this.aiScore = (this.aiScore + 10);
    break;
    case this.id === "paper" && this.computerChoice === "rock":
    document.getElementById("player").innerHTML = "Computer chose rock, you win :)";
    this.userScore = (this.userScore + 10);
    break;
    case this.id === "paper" && this.computerChoice === "scissors":
    document.getElementById("player").innerHTML = "Computer chose scissors, you lose :(";
    this.aiScore = (this.aiScore + 10);
    break;
    case this.id === "scissors" && this.computerChoice === "paper" :
    document.getElementById("player").innerHTML = "Computer chose paper, you win :)";
    this.userScore = (this.userScore + 10);
    break;
    case this.id === "scissors" && this.computerChoice === "rock":
    document.getElementById("player").innerHTML = "Computer chose rock, you lose :(";
    this.aiScore = (this.aiScore + 10);
    break;
    default: document.getElementById("player").innerHTML = "Computer chose the same as you! The round is a draw!!";
  }
  document.getElementById("humanScore").innerHTML = (this.userScore);
  document.getElementById("computerScore").innerHTML = (this.aiScore);
  setTimeout(this.playAgain, 2000);
};

rockPaperScissors.initEventListeners = function() {
document.getElementById("rock").addEventListener("click", this.playGame.bind(this));
document.getElementById("paper").addEventListener("click", this.playGame.bind(this));
document.getElementById("scissors").addEventListener("click", this.playGame.bind(this));
};




rockPaperScissors.clickLock = function() {
document.getElementById("rock").disabled = true;
document.getElementById("paper").disabled = true;
document.getElementById("scissors").disabled = true;
};

rockPaperScissors.init();
