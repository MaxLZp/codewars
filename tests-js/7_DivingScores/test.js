const { assert } = require("chai");

describe('Kyu 7: Diving Scores', function () {

	function scoreOfDive(scores, tariff) {
		return ([...scores].sort((l, r) => l - r)
			.slice(2, -2)
			.reduce((c, e) => (c + e), 0) * tariff
		).toFixed(2);
	  }

	it("tests", () => {
		assert.equal(scoreOfDive([7, 7.5, 8, 7.5, 6, 7, 7], 3), '64.50');
		assert.equal(scoreOfDive([5, 6.5, 5.5, 5, 6, 4.5, 6], 3.2), '52.80');
		assert.equal(scoreOfDive([7, 7, 7, 7.5, 6.5, 7, 7], 2.6), '54.60');
	});

});
