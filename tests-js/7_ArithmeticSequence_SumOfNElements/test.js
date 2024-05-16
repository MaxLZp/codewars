var assert = require('assert');

describe('Kyu 7: Arithmetic sequence - sum of n elements', function () {

  function ArithmeticSequenceSum(a, r, n) {
    var result = a*n;
    for (let i = 0; i < n; i++) {
      result += r*i;
    }
    return result;
  }

  it("containAllRots",function() {
    assert.equal(ArithmeticSequenceSum(2, 3, 5), 40);
    assert.equal(ArithmeticSequenceSum(3, 2, 20), 440);
    assert.equal(ArithmeticSequenceSum(2, 2, 10), 110);
    assert.equal(ArithmeticSequenceSum(1, -2, 10), -80);
  })

});
