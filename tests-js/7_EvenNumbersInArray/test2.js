var assert = require('assert');

describe('Kyu 7: Even numbers in an array', function () {

  function evenNumbers(array, number) {
    const result = [];
    for (let index = array.length - 1; index >= 0 && result.length < number ; index--) {
      if (array[index] % 2 == 0) { result.unshift(array[index]); }
    }
    return result;
  }

  it('solution2', function () {
    assert.deepEqual(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
    assert.deepEqual(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
    assert.deepEqual(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);
  });

});
