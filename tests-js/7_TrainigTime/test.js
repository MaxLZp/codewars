var assert = require('assert');

describe('Kyu 7: Training Time', function () {

  function shuffleIt(arr, ...swaps){
    var result = [...arr];
    swaps.forEach(([a, b]) => ([result[b], result[a]] = [result[a], result[b]]));
    return result;
  }

  it("First triangle area", function() {
    assert.deepEqual(shuffleIt([1,2,3,4,5],[1,2]) , [1,3,2,4,5]);
    assert.deepEqual(shuffleIt([1,2,3,4,5],[1,2],[3,4]) , [1,3,2,5,4]);
    assert.deepEqual(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) , [1,3,5,2,4]);
  });

});
