var assert = require('assert');

describe('Kyu 7: Dinner Plans', function () {

	function commonGround(s1, s2){
		var s1arr = s1.split(' ');
		var s2arr = s2.split(' ');
		var result = new Set();
		for (let index = 0; index < s2arr.length; index++) {
			if (s1arr.indexOf(s2arr[index]) >= 0) {
				result.add(s2arr[index]);
			}
		}
		return result.size > 0 ? Array.from(result).join(' ') : 'death';
	}

	it("tests", () => {
		assert.equal(commonGround("eat chicken", "eat chicken and rice"), 'eat chicken')
		assert.equal(commonGround("eat a burger and drink a coke", "drink a coke"), 'drink a coke')
		assert.equal(commonGround("i like turtles", "what are you talking about"), 'death')
	});
});
