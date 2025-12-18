const chai = require("chai");
const assert = chai.assert;;

describe('Kyu 7: Array Appender', function () {

  function appendArrays (arr1, arr2) {
    return [...arr1, ...arr2];
  }

  it("Should pass description examples", () => {
    assert.deepEqual(appendArrays([1,2], [2,4]), [1,2,2,4]);
    assert.deepEqual(appendArrays([1,2],[3,4]), [1,2,3,4]);
    assert.deepEqual(appendArrays(['this'],['that']), ['this','that']);
    assert.deepEqual(appendArrays(['a','B'],['c','D']), ['a','B','c','D']);
    assert.deepEqual(appendArrays([1,2], [1]), [1,2,1]);
  });

});
