let Game = function(){
	let rolls = new Array(21).fill(0);
	let current_roll = 0;
	this.roll = function(pins) {
		rolls[current_roll++] = pins;
	};
	this.score = function() {
		let score = 0;
		let frameIndex = 0;
		for(let frame = 0; frame < 10; frame++) {
			score += rolls[frameIndex] + rolls[frameIndex+1];
			frameIndex += 2;
		}
		return score;
	};
};

module.exports.Game = Game;
