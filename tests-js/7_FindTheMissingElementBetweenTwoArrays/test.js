var {assert} = require('chai');

describe('Kyu 7: Find the missing element between two arrays', function () {

  function findMissing(arr1, arr2) {
    return arr1.reduce((c,e) => (c+e), 0) - arr2.reduce((c,e) => (c+e), 0);
  }

  it('Basic tests', function () {
    assert.strictEqual(findMissing([1, 2, 3], [1, 3]), 2, 'findMissing([1, 2, 3], [1, 3])')
    assert.strictEqual(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]), 8, 'findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2])')
    assert.strictEqual(findMissing([7], []), 7, 'findMissing([7], [])')
    assert.strictEqual(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]), 3, 'findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4])')
    assert.strictEqual(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]), 0, 'findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0])')
  })

});
