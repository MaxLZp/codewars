var assert = require('assert');

describe('Kyu 7: Every archer has its arrows', function () {

  function ensureEven(n) {
    return Math.round(n/2) * 2;
  }

  it("should test for something", function() {
    assert.equal(ensureEven(1 + 1), 2);
    assert.equal(ensureEven(0.49), 0);
    assert.equal(ensureEven(1), 2);
    assert.equal(ensureEven(1.346), 2);
    assert.equal(ensureEven(2), 2);
    assert.equal(ensureEven(4), 4);
    assert.equal(ensureEven(0), 0);
    assert.equal(ensureEven(-0.5), 0);
    assert.equal(ensureEven(-1.34), -2);
  });

});
