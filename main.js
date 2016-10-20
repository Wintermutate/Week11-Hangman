var inquirer = require('inquirer');
var displayWord = require('./word.js');
var wordArray = require('./game.js');
var makeLetter = require('./letter.js')


var game = {
	guessedLetters: [],
	currentWrd: null,
	newPuzzle: {},
	startGame : function(){		
		var randomWord = wordArray.puzzObj.selectPuzzle();
		this.newPuzzle = new displayWord.Words(randomWord);
		this.currentWrd = this.newPuzzle.makePuzzleArray();
		var puzzleDisplay = this.newPuzzle.checkLetter();
		console.log(puzzleDisplay);
		this.keepPromptingUser();
	},
	keepPromptingUser: function(){
		var self = this;
		if(this.newPuzzle.guessesRemaining > 0){
			inquirer.prompt([{
				name: "guess",
				message: "Guess a letter!"
			}]).then(function(answers){					
				if (!self.checkGuess(answers.guess)){
					console.log(self.newPuzzle.checkLetter(answers.guess));					
				}			
				self.keepPromptingUser();
			})
		}else {			
			console.log("Game Over!");
			self.resetGuesses();
		}
	},
	resetGuesses: function(){
		this.guessesRemaining = 10;
	},
	checkGuess: function(guess){
		for (i=0; i<this.guessedLetters.length; i++){
			if(guess == this.guessedLetters[i]){
				console.log("You've already entered that letter!");
				return true;
			}
		}
		this.guessedLetters.push(guess);
		return false;
	}

}

game.startGame();