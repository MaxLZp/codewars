var assert = require('assert');

describe('Kyu 7: Sum of Odd Cubed Numbers', function () {

  it('solution1', function () {
    function cubeOdd(arr) {
      if (arr.some((e) => (isNaN(e)))) { return undefined; }
      return arr.reduce((c, v) => ( (v % 2 != 0) ? c + Math.pow(v, 3) : c ), 0);
    }

    assert.equal(cubeOdd([1, 2, 3, 4]), 28);
    assert.equal(cubeOdd([-3,-2,2,3]), 0);
    assert.equal(cubeOdd(["a",12,9,"z",42]), undefined);
  });

});
