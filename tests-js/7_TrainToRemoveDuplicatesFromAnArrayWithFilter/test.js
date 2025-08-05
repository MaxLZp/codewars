var assert = require('assert');

describe('Kyu 7: Train to remove duplicates from an array with filter()', function () {

  function unique(arr) {
    return arr.filter((e, i, a) => a.slice(0, i).indexOf(e) == -1);
    // or 
    // return arr.filter((x, i) => arr.indexOf(x) === i);
  }

  it("First triangle area", function() {
    assert.deepEqual(unique([4]), [4], "should return [4]");
    assert.deepEqual(unique([1,2,2,3]), [1,2,3], "should return [1,2,3]");
    assert.deepEqual(unique([ 9, 4, 8, 7, 4, 1, 7, 9, 7, 4 ]), [9, 4, 8, 7, 1], "should return [9, 4, 8, 7, 1]");
  });

});
