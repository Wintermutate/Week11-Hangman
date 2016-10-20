var makePuzzle = require('./letter.js')

exports.puzzObj = {
	puzzles: [
		{
			word: "Cthulhu",
			hint: "based on the work of American horror writer H. P. Lovecraft"
		},
		{
			word: "The Whisperer in Darkness",
			hint: "The story also introduces the Mi-go, an extraterrestrial race of fungoid creatures."
		},
		{
			word: "The Color Out of Space",
			hint: "Mysterious asteroid from space causes havoc." 
		}
	],

	selectPuzzle: function(){
		var rand = this.puzzles[Math.floor(Math.random() * this.puzzles.length)];
		return rand;
	}
}

