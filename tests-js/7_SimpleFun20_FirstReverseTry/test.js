var assert = require('assert');

describe('Kyu 7: Simple Fun #20: First Reverse Try', function () {

  function firstReverseTry(arr) {
    if (arr.length) {
      var temp = arr[0];
      arr[0] = arr[arr.length - 1];
      arr[arr.length - 1] = temp;
    }

    return arr;
  }

  it("Fixed Tests", () => {
    assert.deepEqual( firstReverseTry([1,2,3,4,5]) , [5,2,3,4,1])
    assert.deepEqual( firstReverseTry([]) , [])
    assert.deepEqual( firstReverseTry([111]) , [111])
    assert.deepEqual( firstReverseTry([23, 54, 12, 3, 4, 56, 23, 12, 5, 324]) , [324, 54, 12, 3, 4, 56, 23, 12, 5, 23])
    assert.deepEqual( firstReverseTry([-1,1]) , [1,-1])
  });

});
