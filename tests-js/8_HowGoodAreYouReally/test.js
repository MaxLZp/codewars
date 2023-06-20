var assert = require('assert');

describe('Kyu 8: How good are you really?', function () {

  function solve(scores, average) {
    return (scores.reduce((accumulator, current) => { return accumulator + current}, 0) / scores.length) <= average;
  }

  it("solve([2, 3], 5) should return True", function() {
    assert.strictEqual(solve([2, 3], 5), true);
  });

  it("solve([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", function() {
    assert.strictEqual(solve([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
  });

  it("solve([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False", function() {
    assert.strictEqual(solve([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
  });

  it("solve([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False", function() {
    assert.strictEqual(solve([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
  });

  it("solve([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False", function() {
    assert.strictEqual(solve([29, 55, 74, 60, 11, 90, 67, 28], 21), false);
  });

});
