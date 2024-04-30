var assert = require('assert');

describe('Kyu 7: Integer Difference', function () {
  it('solution1', function () {

    const intDiff = (arr, n) => {
      var count = 0;
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i+1; j < arr.length; j++) {
          if (Math.abs(arr[j] - arr[i]) == n) { count++; }
        }
      }
      return count;
    }

    assert.equal(intDiff([1, 1, 5, 6, 9, 16, 27], 4), 3);
    assert.equal(intDiff([1, 1, 3, 3], 2), 4);

  });

});
