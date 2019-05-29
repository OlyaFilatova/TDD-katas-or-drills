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

	it("Test one spare", function(){
		rollSpare();
		game.roll(3);
		rollMany(17, 0);
		expect(game.score()).toBe(16);
	});

	it("Test one strike", function(){
		rollStrike();
		game.roll(3);
		game.roll(4);
		rollMany(16, 0);
		expect(game.score()).toBe(24);
	});

	it("Test perfect game", function(){
		rollMany(12, 10);
		expect(game.score()).toBe(300);
	});

	let rollMany = function(n, pins){
		for(let i = 0; i < n; i++) {
			game.roll(pins);
		}
	};
	let rollSpare = function() {
		game.roll(5);
		game.roll(5);
	};
	let rollStrike = function(){
		game.roll(10);
	};
});
