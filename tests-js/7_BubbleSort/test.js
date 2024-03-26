var assert = require('assert');

describe('Kyu 7: Bubble Sort', function () {

  function bubble(arr) {
    var result = [];
    for (let j = 0; j < arr.length; j++) {
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
          [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
          result.push([...arr]);
        }
      }
    }
    return result;
  }

  it("Empty string", function() {
    let arr = [1,2,4,3];
    let sol = [[1,2,3,4]];
    assert.deepEqual(bubble(arr), sol);

    arr = [2,1,4,3]
    sol = [[1,2,4,3],[1,2,3,4]];
    assert.deepEqual(bubble(arr), sol);

    arr = [1,4,3,6,7,9,2,5,8];
    sol = [
      [1, 3, 4, 6, 7, 9, 2, 5, 8],
      [1, 3, 4, 6, 7, 2, 9, 5, 8],
      [1, 3, 4, 6, 7, 2, 5, 9, 8],
      [1, 3, 4, 6, 7, 2, 5, 8, 9],
      [1, 3, 4, 6, 2, 7, 5, 8, 9],
      [1, 3, 4, 6, 2, 5, 7, 8, 9],
      [1, 3, 4, 2, 6, 5, 7, 8, 9],
      [1, 3, 4, 2, 5, 6, 7, 8, 9],
      [1, 3, 2, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ];
    assert.deepEqual(bubble(arr), sol);
  });

});
