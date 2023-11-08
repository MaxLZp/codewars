var assert = require('assert');

describe('Kyu 7: Cut array into smaller parts', function () {

  it('solution1', function () {

    function makeParts(arr, chunkSize) {
      const result = [];
      while (arr.length > 0) {
        result.push(arr.splice(0, chunkSize));
      }
      return result;
    }

    assert.deepEqual(makeParts([1,2,3,4,5], 2), [[1,2],[3,4],[5]]);
    assert.deepEqual(makeParts([1,2,3], 1), [[1],[2],[3]]);
    assert.deepEqual(makeParts([1,2,3,4,5], 10), [[1,2,3,4,5]]);
  });

});
