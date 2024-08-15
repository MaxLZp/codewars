const { assert } = require("chai");

describe('Kyu 7: Sum even numbers', function () {

  function sumEvenNumbers(input) {
    return input.reduce((carry, el) => ((el & 1) ? carry : carry + el), 0);
  }

  it('Tests', () => {
    assert.strictEqual(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 30);
    assert.strictEqual(sumEvenNumbers([1, 2.0, 3, 4, 5, 6, 7, 8, 9, 10]), 30);
  })

});
