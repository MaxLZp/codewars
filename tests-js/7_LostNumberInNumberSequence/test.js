const { assert } = require("chai");

describe("Lost number in number sequence", () => {

  function findDeletedNumber(arr, mixArr) {
    return arr.reduce((c, e) => c + e, 0) - mixArr.reduce((c,e) => c + e, 0);
  }

  it("Initial Tests", () => {
    assert.strictEqual(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion');
    assert.strictEqual(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion');
    assert.strictEqual(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion');
 });

});
