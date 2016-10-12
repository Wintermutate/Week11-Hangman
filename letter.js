var game = require('./game.js');

// console.log(game.selectPuzzle());

function makeLetters(puzzle) {
	var output = "";
	var letters = [];
	for(i=0; i<puzzle.word.length; i++){
		// output += "_";
		letters.push(puzzle.word[i].toLowerCase())

		if (letters[i] == " ") {
			output += " "
		}
		if (true) {}
	}
	return console.log(letters);
}

makeLetters(game.selectPuzzle());