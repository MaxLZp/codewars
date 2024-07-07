const { assert } = require('chai');

describe('Sort with a sorting array', function () {

  function sort(initialArray, sortingArray) {
    var result = new Array(initialArray.length);
    initialArray.forEach((e, i) => {
      result[sortingArray[i]] = e;
    });

    return result;
  }

  it("Sample Tests", () => {
    assert.deepEqual(sort(['x', 'y', 'z'], [1, 2, 0]), ["z", "x", "y"], "For initialArray = ['x', 'y', 'z'], sortingArray = [1, 2, 0]");
    assert.deepEqual(sort(['x', 'y', 'z'], [0, 1, 2]), ['x', 'y', 'z'], "For initialArray = ['x', 'y', 'z'], sortingArray = [0, 1, 2]");
    assert.deepEqual(sort([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]), [1, 2, 3, 4, 5], "For initialArray = [1, 2, 3, 4, 5], sortingArray = [0, 1, 2, 3, 4]");
    assert.deepEqual(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3]), [1, 3, 2, 5, 4], "For initialArray = [1, 2, 3, 4, 5], sortingArray = [0, 2, 1, 4, 3]");
  });

});
