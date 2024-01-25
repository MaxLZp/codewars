var assert = require('assert');

describe('Kyu 7: Square Roots: Approximation', function () {
  function approxRoot(n) {
    var base = Math.floor(Math.sqrt(n));
    if (n == base*base) { return base; }
    var base1 = base+1;
    return +(base + ((n - base*base) / (base1*base1 - base*base))).toFixed(2);
  }

  it("Description cases", function() {
    assert.equal(approxRoot(400), 20)
    assert.equal(approxRoot(401), 20.02)
    assert.equal(approxRoot(2), 1.33)
  });

  it("More examples", function() {
    assert.equal(approxRoot(4), 2)
    assert.equal(approxRoot(5), 2 + (5 - 4) / (9 - 4))
    assert.equal(approxRoot(6), 2 + (6 - 4) / (9 - 4))
    assert.equal(approxRoot(7), 2 + (7 - 4) / (9 - 4))
    assert.equal(approxRoot(8), 2 + (8 - 4) / (9 - 4))
    assert.equal(approxRoot(9), 3)
  });

});
