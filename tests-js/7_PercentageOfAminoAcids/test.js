var assert = require('assert');

describe('Kyu 7: Percentage of amino acids', function () {

	function aaPercentage () {
		var chain = arguments[0];
		var acids = arguments[1] || ["A", "I", "L", "M", "F", "W", "Y", "V"];
		var count = 0;

		for (let index = 0; index < chain.length; index++) {
			if (acids.includes(chain[index])) {
				count++;
			}
		}

		return Math.round(count * 100 / chain.length);
	}

	// function aaPercentage () {
	// 	var chain = [...arguments[0]];
	// 	var acids = arguments[1] || ["A", "I", "L", "M", "F", "W", "Y", "V"];
	// 	var count = chain.reduce((c, e) => ( c + (acids.includes(e) ? 1 : 0)), 0);

	// 	return Math.round(count * 100 / chain.length);
	// }

	it("sample tests", function() {
		assert.equal(aaPercentage("MSRSLLLRFLLFLLLLPPLP", ["M"]), 5);
		assert.equal(aaPercentage("MSRSLLLRFLLFLLLLPPLP", ["M", "L"]), 55);
		assert.equal(aaPercentage("MSRSLLLRFLLFLLLLPPLP", ["F", "S", "L"]), 70);
		assert.equal(aaPercentage("MSRSLLLRFLLFLLLLPPLP"), 65);
	});

});

