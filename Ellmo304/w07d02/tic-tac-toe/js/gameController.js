angular.module('TicTacToe')
  .controller('GameController', GameController);

function GameController() {
  this.cells = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ];

  this.player = 'X';
  this.player2 = 'O';

  this.gameClicks = 0;

  function mrClick($index) {
    if (this.cells[$index] === '') {
      this.gameClicks ++;

      if (this.gameClicks % 2 === 0) {
        this.cells[$index] = this.player2;
      } else {
        this.cells[$index] = this.player;
      }
      // checkForWin();
    }
  }





  this.mrClick = mrClick;
}
