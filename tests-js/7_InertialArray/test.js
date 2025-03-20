var assert = require('assert');

describe('Kyu 7: Inertial Array', function () {

  function isInertial(array) {
    array.sort((l,r) => l - r);
    var max = array.pop();
    var maxEven = array.findLastIndex(e => e % 2 == 0);
    var minOdd = array.findIndex(e => e % 2 != 0);

    return minOdd >= 0 && (max % 2 == 0) && maxEven < minOdd;
  }

  it('solution1', function () {
    assert.deepEqual(isInertial([11, 4, 20, 9, 2, 8]), true);

    assert.deepEqual(isInertial([11, 4, 21, 9, 2, 8]), false);
  });

});
