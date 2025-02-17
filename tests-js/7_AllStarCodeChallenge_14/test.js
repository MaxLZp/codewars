const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: All Star Code Challenge #14 - Find the median', function () {

  function median(array) {
    array.sort((l, r) => l - r);
    var mid = Math.floor(array.length / 2);
    return array.length % 2 == 0 ? (array[mid - 1] + array[mid]) / 2 : array[mid];
  }

  it("containAllRots",function() {
    assert.strictEqual(median([3,2,1]),2);
    assert.strictEqual(median([33,99,100,30,29,50]), 41.5);
  })

});
