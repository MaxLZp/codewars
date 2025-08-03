var assert = require('assert');

describe('Kyu 7: Simple Fun 67: Array Change', function () {

  function arrayChange(arr) {
    var count = 0;
    var prev = arr[0];
    for(var i = 1; i < arr.length; i++) {
      if (arr[i] <= prev) {
        count += 1 + prev - arr[i];
        prev += 1;
        continue;
      }
      prev = arr[i];
    }

    return count;
  }

  it("Fixed Tests", () => {
    assert.equal(arrayChange([1, 1, 1]),3);
    assert.equal(arrayChange([-1000, 0, -2, 0]),5);
    assert.equal(arrayChange([2, 1, 10, 1]),12);
    assert.equal(arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]),13);
  });

});
