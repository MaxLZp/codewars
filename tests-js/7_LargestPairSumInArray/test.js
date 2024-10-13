const strictEqual = require("chai").assert.strictEqual;

describe('Kyu 7: Largest pair sum in array', function () {

	function largestPairSum (numbers) {
		numbers.sort((l, r) => (r - l));
		return numbers[0] + numbers[1];
	}

	function doTest (array, expected) {
		const actual = largestPairSum(array);
		strictEqual(actual, expected, `for array [${array.join(', ')}]:\n`);
	}

	it("Fixed tests", function () {
		doTest([10,14,2,23,19], 42);
		doTest([-100,-29,-24,-19,19], 0);
		doTest([1,2,3,4,6,-1,2], 10);
		doTest([-10, -8, -16, -18, -19], -18);
	});

});
