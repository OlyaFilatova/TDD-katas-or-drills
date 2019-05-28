let Game = require("../app/bowling-game.js").Game;

describe("Test bowling game", function(){
	let game;
	beforeEach(() => {
		game = new Game();
	});
	it("Test gutter game", function(){
		rollMany(20, 0);
		expect(game.score()).toBe(0);
	});

	it("Test all ones", function(){
		rollMany(20, 1);
		expect(game.score()).toBe(20);
	});

	let rollMany = function(n, pins){
		for(let i = 0; i < n; i++) {
			game.roll(pins);
		}
	};
});
