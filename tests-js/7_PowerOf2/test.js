var assert = require('assert');

describe('Kyu 7: Power of 4', function () {

  function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n));
  }

  it('Sample tests', () => {
    assert.equal(isPowerOfTwo(2), true);
    assert.equal(isPowerOfTwo(4096), true);
    assert.equal(isPowerOfTwo(5), false);
    assert.equal(isPowerOfTwo(1), true);
    assert.equal(isPowerOfTwo(536870912), true);
    assert.equal(isPowerOfTwo(0), false);
  })

});
