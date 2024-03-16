const chai = require("chai");
chai.config.truncateThreshold = 0;
const { deepEqual } = chai.assert;

describe('Kyu 7: Slice the middle of a list backwards', function () {

  function reverseMiddle(array) {
    var middle = array.length / 2;
    return array.slice(Math.floor(middle) - 1, Math.ceil(middle) + 1).reverse();
  }

	function doTest(input, expected) {
		const log = `for array [${input.join(', ')}]\n`;
		const actual = reverseMiddle(input);
		deepEqual(actual, expected, log);
	}

	it("N = 4", function() {
		doTest([1, 2, 3, 4], [3, 2]);
	});
	it("N = 5", function() {
		doTest([1, 2, 3, 4, 5], [4, 3, 2]);
	});
	it("N = 6", function() {
		doTest([1, 2, 3, 4, 5, 6], [4, 3]);
	});
	it("N = 7", function() {
		doTest([1, 2, 3, 4, 5, 6, 7], [5, 4, 3]);
	});

});
