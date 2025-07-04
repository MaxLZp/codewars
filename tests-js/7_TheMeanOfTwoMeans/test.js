const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("7kyu: The mean of two means",() => {

  function getMean(arr, x, y) {
    if (x <= 1 || y <= 1 || x > arr.length || y > arr.length) {
      return -1;
    } 
    var m1 = arr.slice(0, x).reduce((c, e) => c + e) / x;
    var m2 = arr.slice(-y).reduce((c,e) => c + e) / y;

    return (m1 + m2) / 2;
  }

  it('Test', function () {
    assert.strictEqual(getMean([1,3,2,4],2,3),2.5);
    assert.strictEqual(getMean([1,3,2],2,2),2.25);
    assert.strictEqual(getMean([1,3,2,4],1,2),-1);
    assert.strictEqual(getMean([1,3,2,4],2,8),-1);
  })
});
