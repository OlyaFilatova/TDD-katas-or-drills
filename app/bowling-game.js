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
			if (isStrike(frameIndex)) {
				score += 10 + strikeBonus(frameIndex);
				frameIndex++;
			} else if(isSpare(frameIndex)) {
				score += 10 + spareBonus(frameIndex);
				frameIndex += 2;
			}else{
				score += sumOfPinsInFrame(frameIndex);
				frameIndex += 2;
			}
		}
		return score;
	};

	let isSpare = function(frameIndex) {
		return rolls[frameIndex] + rolls[frameIndex+1] == 10;
	};
	let isStrike = function(frameIndex) {
		return rolls[frameIndex] == 10;
	};
	let spareBonus = function(frameIndex) {
		return rolls[frameIndex + 2];
	};
	let strikeBonus = function(frameIndex){
		return rolls[frameIndex + 1] + rolls[frameIndex + 2];
	};
	let sumOfPinsInFrame = function(frameIndex) {
		return rolls[frameIndex] + rolls[frameIndex+1];
	};
};

module.exports.Game = Game;
