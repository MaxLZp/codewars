var assert = require('assert');

describe('Kyu 7: Second largest in Array', function () {
  it('solution1', function () {

    function secondLargest(array){
      return Array.isArray(array)
        ? [...new Set(array)]
          .filter((e) => (!Number.isNaN(parseInt(e))))
          .sort((l, r) => (r - l))[1]
        : undefined;
    }

    assert.equal(secondLargest([-32,11,43,55,0,11]), 43);
    assert.equal(secondLargest(null), undefined);
    assert.equal(secondLargest([5,5,5,5,5,5]), undefined);
    assert.equal(secondLargest([0, 1, '2', 3]), 2);
    assert.equal(secondLargest(['-1', 2, null, false]), -1);

    assert.equal(secondLargest([2, true, 0]), 0);
    assert.equal(secondLargest("32 11 44 56"), undefined);
  })

});
