var assert = require('assert');

describe('Kyu 7: Difference Of Squares', function () {

	function differenceOfSquares(n){
		var sum = squaresSum = 0;
		for (let index = 1; index <= n; index++) {
			sum += index;
			squaresSum += index*index;
		}
		return sum*sum - squaresSum;
	}

	it("tests", () => {
		assert.equal(differenceOfSquares(5), 170)
		assert.equal(differenceOfSquares(10), 2640)
		assert.equal(differenceOfSquares(100), 25164150)
	});

});
