const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Consecutive items", function() {

  function consecutive(arr, a, b) {
    for (let index = 0; index < arr.length-1; index++) {
      if (arr[index] == a) { return arr[index+1] == b; }
      if (arr[index] == b) { return arr[index+1] == a; }
    }
    return false;
  }

  it("Test 1", function() {
    assert.deepEqual(consecutive([1, 3, 5, 7], 3, 7), false);
  });
  it("Test 2", function() {
    assert.deepEqual(consecutive([1, 3, 5, 7], 3, 1), true);
  });
  it("Test 3", function() {
    assert.deepEqual(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4), true);
  });

});
