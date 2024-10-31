const { assert } = require("chai");

describe("Testing 1-2-3", () => {

  it("Basic Tests", () => {

    var number = function(array) {
      return array.map((v, i) => `${i+1}: ${v}`);
    }

    assert.deepEqual(number([]), [], 'Empty array should return empty array');
    assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');
  });

});
