let Game = function(){
	let rolls = new Array(21).fill(0);
	let current_roll = 0;
	this.roll = function(pins) {
		rolls[current_roll++] = pins;
	};
	this.score = function() {
		let score = 0;
		for(let i = 0; i < 21; i++) {
			score += rolls[i];
		}
		return score;
	};
};

module.exports.Game = Game;
