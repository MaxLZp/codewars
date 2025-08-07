const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Sum ALL the arrays!', function () {

  function arraySum(arr) {
    // return arr.reduce((c, e) => c + (e instanceof Array ? arraySum(e) : (/^\d+(\.\d+)?$/.test(e) ? e : 0)), 0);
    return arr.reduce((c, e) => c + (e instanceof Array ? arraySum(e) : (isNaN(e) ? 0 : e)), 0);
  }

  it(`Testing`, function() {
    assert.equal(arraySum([1, 2]), 3);
    assert.equal(arraySum([1, 2, 3]), 6);
    assert.equal(arraySum([1, 2, [1, 2]]), 6);
    assert.equal(arraySum([ 1, 2, 3.5]), 6.5);
    assert.equal(arraySum([ 1, 2, 'pig', 3]), 6);
  });

});
