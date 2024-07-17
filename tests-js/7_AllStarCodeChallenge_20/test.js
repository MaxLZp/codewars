const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: All Star Code Challenge #20', function () {

  function addArrays(array1, array2) {
    if (array1.length != array2.length) {
      throw new Error('Length mismatch');
    }

    return array1.map((e, i) => (e + array2[i]));
  }

  it("containAllRots",function() {
    assert.Throw(() => (addArrays([1,2,3],[4,5])), 'Length mismatch');
    assert.deepEqual(addArrays([1,2],[4,5]),[5,7]);
    assert.deepEqual(addArrays(["a"],["b"]),["ab"], "Should work with strings as well");

  })

});
