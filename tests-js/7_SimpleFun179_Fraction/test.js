var assert = require('assert');

describe('Kyu 7: Simple Fun #179: Fraction', function () {

  function fraction(a, b) {
    var gcdv = gcd(a, b);
    return a / gcdv + b / gcdv;
  }

  function gcd(a, b) {
    if ( a == 0 ){ return b; }

    return gcd(b % a, a);
  }

  it("Fixed Tests", () => {
    assert.equal(fraction(90,120),7)
    assert.equal(fraction(2,4),3)
    assert.equal(fraction(100,1000),11)
    assert.equal(fraction(3,15),6)
    assert.equal(fraction(114,200),157)
    assert.equal(fraction(3,118),121)
  });

});
