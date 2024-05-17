var {assert} = require('chai');

describe('Kyu 7: Spinning Rings', function () {

  it('solution1', function () {

    function spinningRings(innerMax, outerMax) {
      var moves = 1;
      var inner = innerMax;
      var outer = 1;
      while (inner != outer) {
        inner = --inner < 0 ? innerMax : inner;
        outer = ++outer > outerMax ? 0 : outer;
        moves++;
      }
      return moves;
    };

    assert.equal(spinningRings(2, 3), 5);
    assert.equal(spinningRings(3, 2), 2);
    assert.equal(spinningRings(1, 1), 1);
    assert.equal(spinningRings(2, 2), 3);
    assert.equal(spinningRings(3, 3), 2);
  });

});
