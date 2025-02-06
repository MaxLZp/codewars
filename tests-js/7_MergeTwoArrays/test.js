const { assert, config } = require('chai');
config.truncateThreshold = 0;

describe('Kyu 7: Merge two arrays', function () {

  function mergeArrays(a, b) {
    var result = [];
    for (var i = 0; i < Math.min(a.length, b.length); i++) {
      result.push(a[i]);
      result.push(b[i]);
    }
    for (; i < a.length; i++) {
      result.push(a[i]);
    }
    for (; i < b.length; i++) {
      result.push(b[i]);
    }

    return result;
  }

  // function mergeArrays(a, b) {
  //   var result = [];
  //   for (var i = 0; i < Math.max(a.length, b.length); i++) {
  //     if (i < a.length) {
  //       result.push(a[i]);
  //     }
  //     if (i < b.length) {
  //       result.push(b[i]);
  //     }
  //   }

  //   return result;
  // }

  it('"Example 1"', () => {
    assert.deepEqual(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']), [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]);
    assert.deepEqual(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]), ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]);
    assert.deepEqual(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']), [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']);
    assert.deepEqual(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]), ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']);
  })

});
