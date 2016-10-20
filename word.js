var displayLetter = require('./letter.js');
var game = require('./game.js')

exports.Words = function(puzzle){
	this.word = puzzle.word;
	this.puzzleArray = [];
	this.guessesRemaining = 10,
	this.makePuzzleArray = function(){
		for (i=0; i<this.word.length; i++){
			var ltr = this.word.charAt(i);
			var ltrObj = new displayLetter.Letter(ltr);
			this.puzzleArray.push(ltrObj);
		}return this.puzzleArray;		
	}
	this.checkLetter = function(guessedLtr){
		var puzzleString = "";
		var letterFLag = false;
		for (i=0; i<this.puzzleArray.length; i++){
			if (guessedLtr == this.puzzleArray[i].letter){
				this.puzzleArray[i].isVisible = true;
				this.letterFLag = true;							
			} 
			puzzleString += this.puzzleArray[i].renderLetters();
		} if (!letterFLag){
			this.guessesRemaining--;
		}
		return puzzleString;
	}
}
