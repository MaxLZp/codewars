var assert = require('assert');

describe('Kyu 7: Simple Fun #51: Array Previous Less', function () {

  function arrayPreviousLess(arr) {
    return arr.map((v, i, a) => {
      for (let idx = i - 1; idx >= 0; idx--) {
        if (a[idx] < v) { return a[idx]; }
      }
      return -1;
    });
  }

  it("Fixed Tests", () => {
    assert.deepEqual(arrayPreviousLess([3, 5, 2, 4, 5]),[-1, 3, -1, 2, 4]);
    assert.deepEqual(arrayPreviousLess([2, 2, 1, 3, 4, 5, 5, 3]),[-1, -1, -1, 1, 3, 4, 4, 1]);
    assert.deepEqual(arrayPreviousLess([3, 2, 1]),[-1, -1, -1]);
  });

});
