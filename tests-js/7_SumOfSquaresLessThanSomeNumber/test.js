const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Sum of squares less than some number', function () {

  function getNumberOfSquares(n) {
    var sum = 0;
    var num = 0;
    while(sum < n) {
      num++;
      sum += num*num;
    }

    return num - 1;
  }

  it('Tests', () => {
    assert.strictEqual(getNumberOfSquares(1), 0);
    assert.strictEqual(getNumberOfSquares(2), 1);
    assert.strictEqual(getNumberOfSquares(5), 1);
    assert.strictEqual(getNumberOfSquares(6), 2);
    assert.strictEqual(getNumberOfSquares(15), 3);
  })

});
