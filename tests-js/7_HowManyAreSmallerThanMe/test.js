var assert = require('assert');

describe('Kyu 7: How many are smaller than me', function () {
  it('solution1', function () {

    assert.deepEqual(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
    assert.deepEqual(smaller([1, 2, 3]), [0, 0, 0]);
    assert.deepEqual(smaller([1, 2, 0]), [1, 1, 0]);
    assert.deepEqual(smaller([1, 2, 1]), [0, 1, 0]);
    assert.deepEqual(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
    assert.deepEqual(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);

    function smaller(nums) {
      return nums.map((num, index, arr) => {
        return arr
          .slice(index+1)
          .filter(el => el < num)
          .length;
      });
    }
  });

});