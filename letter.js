exports.Letter = function(ltr) {
	this.letter = ltr,
	this.isVisible = false,
	this.renderLetters = function(){
		if (this.isVisible){
			return this.letter;
		}else if (this.letter === " "){
			return " ";
		}else{
			return " _ ";
		}
	};
	
}


