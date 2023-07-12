var assert = require('assert');

describe('Kyu 7: Power of 4. Other', function () {

  function powerOf4(n) {
    if (!Number.isInteger(n)) return false;
    return Number.isInteger(Math.log(n)/Math.log(4));
  }

  it('Sample tests', () => {
    assert.equal(powerOf4(4), true);
    assert.equal(powerOf4(16), true, "4^4 = 16");
    assert.equal(powerOf4(1), true, "Four to the power of 0 is 1");
    assert.equal(powerOf4(20), false, "20 is not a power of 4");
    assert.equal(powerOf4(44), false, "44 is not a power of 4");
    assert.equal(powerOf4(3.1415), false);
    assert.equal(powerOf4("1"), false, "Should return false for strings");
    assert.equal(powerOf4("4"), false, "Should return false for strings");
    assert.equal(powerOf4(null), false, "Should return false for non-numbers");
    assert.equal(powerOf4(undefined), false, "Should return false for non-numbers");
    assert.equal(powerOf4(function() {}), false, "Should return false for non-numbers");
  })


});
