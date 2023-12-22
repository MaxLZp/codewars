var assert = require('assert');

describe('Kyu 7: Find all occurrences of an element in an array', function () {
  it('solution1', function () {
    const findAll = (array, n) => {
      var result= [];
      for (let index = 0; index < array.length; index++) {
        if (n == array[index]) { result.push(index); }
      }
      return result;
    }

    assert.deepEqual(findAll([6, 9, 3, 4, 3, 82, 11], 3), [2, 4]);
    assert.deepEqual(findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16), [1, 9]);
    assert.deepEqual(findAll([20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15, 5], 20), [0, 1, 8]);

  });

});
