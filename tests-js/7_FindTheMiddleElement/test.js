var assert = require('assert');

describe('Kyu 7: Find the middle element', function () {

  function gimme (triplet) {
    var min = Math.min(...triplet);
    var max = Math.max(...triplet);
    for (let index = 0; index < triplet.length; index++) {
      if (triplet[index] != min && triplet[index] != max) { return index; }
    }
  }

  function doTest (triplet, expected) {
    const actual = gimme(triplet);
    assert.strictEqual(actual, expected, `for [${triplet}], expected ${expected} but got ${actual}`);
  }

	it("Tests for integers", function () {
		doTest([2, 3, 1], 0);
		doTest([5, 10, 14], 1);
	});
	it("Tests for floats", function () {
		doTest([2.1, 3.2, 1.4], 0);
		doTest([5.9, 10.4, 14.2], 1);
	});
	it("Tests for negative numbers", function () {
		doTest([-2, -3, -1], 0);
		doTest([-5, -10, -14], 1);
	});
	it("Tests for mixed numbers", function () {
		doTest([-2, -3.2, 1], 0);
		doTest([-5.2, -10.6, 14], 0);
	});

});

describe('Kyu 7: Find the middle element. Solution 2', function () {

  function gimme (triplet) {
    if (
      triplet[0] > triplet[1] && triplet[0] < triplet[2]
      ||
      triplet[0] > triplet[2] && triplet[0] < triplet[1]
      ) { return 0;};
    if (
      triplet[1] > triplet[0] && triplet[1] < triplet[2]
      ||
      triplet[1] > triplet[2] && triplet[1] < triplet[0]
      ) { return 1;};
    return 2;
  }

  function doTest (triplet, expected) {
    const actual = gimme(triplet);
    assert.strictEqual(actual, expected, `for [${triplet}], expected ${expected} but got ${actual}`);
  }

	it("Tests for integers", function () {
		doTest([2, 3, 1], 0);
		doTest([5, 10, 14], 1);
	});
	it("Tests for floats", function () {
		doTest([2.1, 3.2, 1.4], 0);
		doTest([5.9, 10.4, 14.2], 1);
	});
	it("Tests for negative numbers", function () {
		doTest([-2, -3, -1], 0);
		doTest([-5, -10, -14], 1);
	});
	it("Tests for mixed numbers", function () {
		doTest([-2, -3.2, 1], 0);
		doTest([-5.2, -10.6, 14], 0);
	});

});
