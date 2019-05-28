let Game = function(){
	let current_score = 0;
	this.roll = function(pins) {
		current_score += pins;
	};
	this.score = function() {
		return current_score;
	};
};

module.exports.Game = Game;
