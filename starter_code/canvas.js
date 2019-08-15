var canvas;
var secretw;

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById("hangman").getContext("2d");
  this.cnvs = document.getElementById("hangman");
  this.linelength = cnvs.width / 40;
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, this.cnvs.width, this.cnvs.height);
};

HangmanCanvas.prototype.drawLines = function() {};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {};

HangmanCanvas.prototype.drawHangman = function(shape) {};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};

HangmanCanvas.prototype.toCartesian = function(x, y) {
  return [x + this.cnvs.width / 2, y + this.cnvs.height / 2];
};

document.addEventListener("keypress", function() {});
