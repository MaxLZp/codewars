const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Distance from the average', function () {

	function distancesFromAverage(arr) {
		var avg = (arr.reduce((c, e) => c + e, 0) / arr.length).toFixed(2);
		return arr.map(e => avg - e);
	}

	const cases = [
		[[55, 95, 62, 36, 48], [4.2, -35.8, -2.8, 23.2, 11.2]],
		[[1, 1, 1, 1, 1], [0, 0, 0, 0, 0]],
		[[1, -1, 1, -1, 1, -1], [-1.0, 1.0, -1.0, 1.0, -1.0, 1.0]],
		[[1, -1, 1, -1, 1], [-0.8, 1.2, -0.8, 1.2, -0.8]],
		[[2, -2], [-2.0, 2.0]],
		[[1], [0]],
		[[123, -65, 32432, -353, -534], [6197.6, 6385.6, -26111.4, 6673.6, 6854.6]],
		[Array(101).fill(0).map((_, i) => i), Array(101).fill(0).map((_, i) => 50 - i)],
		[Array(1001).fill(0).map((_, i) => i), Array(1001).fill(0).map((_, i) => 500 - i)],
		[Array(100001).fill(0).map((_, i) => i), Array(100001).fill(0).map((_, i) => 50000 - i)]
	];

	cases.forEach(([input, expected]) => {
		const repr = input.length > 100 ? 'a long array' : JSON.stringify(input)
		it(`testing ${repr}`, () => {
			const actual = distancesFromAverage([...input])
			if (!Array.isArray(actual)) {
				assert.fail('expected an array.')
			}
			if (actual.length != input.length) {
				assert.fail(`expected an array of length ${input.length} but it had length ${actual.length}`)
			}
			for (let i = 0; i < input.length; i++) {
				if (!(Number.isFinite(actual[i]) && Math.abs(actual[i] - expected[i]) < 1e-9)) {
					assert.fail(`at index ${i}\ngot ${actual[i]}\nbut expected ${expected[i]}`)
				}
			}
		})
	})

});
