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
			if(isSpare(frameIndex)) {
				score += 10 + rolls[frameIndex+2];
			}else{
				score += rolls[frameIndex] + rolls[frameIndex+1];
			}
			frameIndex += 2;
		}
		return score;
	};

	let isSpare = function(frameIndex) {
		return rolls[frameIndex] + rolls[frameIndex+1] == 10;
	};
};

module.exports.Game = Game;
