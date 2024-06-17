const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Beginner Series #3 Sum of Numbers', function () {

  function getSum(a, b) {
    var sum = 0;
    for (let i = Math.min(a, b), max = Math.max(a,b); i <= max; i++) {
      sum += i;
    }

    return sum;
  }

  it("Testing for fixed tests", function() {
    assert.strictEqual(getSum(0,-1), -1);
    assert.strictEqual(getSum(0, 1),  1);
    assert.strictEqual(getSum(2, 2),  2);
  });



  /**
   * Arythmetic progression
   * @param {int} a
   * @param {int} b
   * @returns int
   */
  function getSumA(a, b) {
    return (Math.max(a, b) - Math.min(a, b) + 1)*(a + b)/2;
  }

  it("Testing for fixed tests", function() {
    assert.strictEqual(getSumA(0,-1), -1);
    assert.strictEqual(getSumA(0, 1),  1);
    assert.strictEqual(getSumA(2, 2),  2);
  });

});
