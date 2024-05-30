const {assert, config} = require("chai");
config.truncateThreshold = 0;

describe('Kyu 7: Possible side lengths of a triangle excluding right triangles.', function () {

  function sideLen(x, y) {
    var result = [];
    for (let i = y-x+1; i < x+y; i++) {
      if (
        (x*x + i*i) != y*y
        &&
        (y*y + i*i) != x*x
        &&
        (y*y + x*x) != i*i
      ) {
        result.push(i);
      }
    }

    return result;
  }

  it('Sample tests', () => {

    assert.deepEqual(sideLen(1, 1), [1]);
    assert.deepEqual(sideLen(3, 4), [2, 3, 4, 6]);
    assert.deepEqual(sideLen(4, 6), [3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual(sideLen(5, 12), [8, 9, 10, 11, 12, 14, 15, 16]);
    assert.deepEqual(sideLen(8, 10), [3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "[6, 8, 10] is a right triangle");

  })

});
