const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: zero-balanced Array', function () {

  function ìsZeroBalanced(n){
    if (n.length == 0) return false;

    var copy = [...n];
    for(var i = 0; i < copy.length; i++) {
      if (copy[i]) { 
        var idx = copy.indexOf(-copy[i]);
        if (idx != -1) {
          copy[i] = null;
          copy[idx] = null;
        }
      } 
    }

    return copy.filter(e => e).length == 0;
  }

  function doTest(arr, expected) {
    const actual = ìsZeroBalanced(arr);
    assert.strictEqual(actual, expected, `Incorrect answer for array [${arr}]`);
  }

  it("Arrays with zeroes", () => {
    doTest([0, 0, 0, 0, 0, 0], true);
    doTest([0, 1, -1], true);
    doTest([0], true);
    doTest([0, 0, 0, 0, 0], true);
  });

  it("Arrays without zeroes but zero-balanced", () => {
    doTest([1, -1, 2, -2], true);
    doTest([3, -3, 5, -5, 7, -7], true);
  });

  it("Non zero-balanced arrays", () => {
    doTest([3], false);
    doTest([-3], false);
    doTest([], false);
    doTest([3, -2, -1], false);
    doTest([1, 1, -2], false);
    doTest([-1, 1, -2, 2, -2, -2, -4, 4], false);
  });

  it("Random", () => {
    doTest([-10,-4,-6,0,10,10,7,8,-10,4,3,6,0,-3,-7,10,10,4,-10,-4,1,-10,0,-1,-8], true);
  });

});
