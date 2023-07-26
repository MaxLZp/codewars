var assert = require('assert');

describe('Kyu 7: Two numbers are positive', function () {
  it('solution1', function () {

    assert.strictEqual(twoArePositive(2, 4, -3), true, '(2, 4, -3)');
    assert.strictEqual(twoArePositive(-4, 6, 8), true, '(-4, 6, 8)');
    assert.strictEqual(twoArePositive(4, -6, 9), true, '(4, -6, 9)');
    assert.strictEqual(twoArePositive(-4, 6, 0), false, '(4, -6, 9)');
    assert.strictEqual(twoArePositive(4, 6, 10), false, '(4, 6, 10)');
    assert.strictEqual(twoArePositive(-14, -3, -4), false, '(-14, -3, -4)');

    function twoArePositive(a, b, c) {
      return (new Array(a,b,c)).reduce((accumulator, value) => {
        return accumulator += value > 0 ? 1 : 0;
      }, 0) == 2;
    }
  });

});
