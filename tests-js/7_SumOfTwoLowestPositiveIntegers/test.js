const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Sum of squares less than some number', function () {

  function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((l, r) => l - r).slice(0, 2).reduce((c, e) => c + e, 0);
  }

  it('Tests', () => {
    assert.strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
    assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
    assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
    assert.strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
    assert.strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
  })

});
