var assert = require('assert');

describe('Kyu 7: Find Duplicates', function () {
  function duplicates(arr) {
    const duplicates = new Set();
    arr.forEach((el, index, array) => {
      if (array.slice(0, index).indexOf(el) >= 0) {
        duplicates.add(el)
      }
    });
    return [...duplicates];
  }

  it("should work for no duplicates", () => {
    assert.deepEqual(duplicates([1, 2, 3, 4, 5]), [], "arr = [1, 2, 3, 4, 5]");
    assert.deepEqual(duplicates([]), [], "arr = []");
    assert.deepEqual(duplicates(['no', 'duplicates', 'here']), [], "arr = ['no', 'duplicates', 'here']");
  });
  it("should work for duplicates", () => {
    assert.deepEqual(duplicates([1, 2, 3, 4, 3]), [3], "arr = [1, 2, 3, 4, 3]");
    assert.deepEqual(duplicates([1, 2, 3, 3, 2, 1]), [3, 2, 1], "arr = [1, 2, 3, 3, 2, 1]");
    assert.deepEqual(duplicates([1, 2, 1, 2, 1, 2, 1]), [1, 2], "arr = [1, 2, 1, 2, 1, 2, 1]");
  });
  it("should work with string representations of numbers", () => {
    assert.deepEqual(duplicates([1, 2, 3, 4, '3']), [], "arr = [1, 2, 3, 4, '3']");
    assert.deepEqual(duplicates(['1', 2, 3, 3, '2', 1]), [3], "arr = ['1', 2, 3, 3, '2', 1]");
    assert.deepEqual(duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']), [4, 3, 'zut'], "arr = ['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']");
  });

});
