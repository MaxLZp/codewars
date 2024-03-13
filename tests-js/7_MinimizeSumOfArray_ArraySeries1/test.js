var assert = require('assert');

describe('Kyu 7: Minimize Sum Of Array (Array Series #1) ', function () {

  function minSum(arr) {
    return arr.sort((a,b) => (a-b))
      .reduce((p, c) => (p + c * arr.pop()), 0);
  }

  it("example tests", function() {
    assert.equal(minSum([5,4,2,3]), 22);
    assert.equal(minSum([12,6,10,26,3,24]), 342);
    assert.equal(minSum([9,2,8,7,5,4,0,6]), 74);
  });

});
