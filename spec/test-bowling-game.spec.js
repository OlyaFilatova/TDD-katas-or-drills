let Game = require("../app/bowling-game.js").Game;

describe("Test bowling game", function(){
	let game;
	beforeEach(() => {
		game = new Game();
	});
	it("Test gutter game", function(){
		for(let i = 0; i < 20; i++) {
			game.roll(0);
		}
		expect(game.score()).toBe(0);
	});

	it("Test all ones", function(){
		for(let i = 0; i < 20; i++) {
			game.roll(1);
		}
		expect(game.score()).toBe(20);
	});
});
