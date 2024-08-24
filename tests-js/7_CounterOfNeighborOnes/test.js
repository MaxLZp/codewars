const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Counter of neighbor ones', function () {

  function onesCounter(input) {
    return input.join('').replace(/0+/g, '0').split('0').map((e) => (e.length)).filter((e) => (e));
    // or match and count 1's
    // return (input.join('').match(/(1+)/g)||[]).map((e) => (e.length));
  }

  it("Tests", function() {
    assert.deepEqual(onesCounter([0, 0, 0, 0, 0, 0, 0, 0]), [])
    assert.deepEqual(onesCounter([1,1,1,1,1]), [5])
    assert.deepEqual(onesCounter([1, 1, 1, 0, 0, 1, 0, 1, 1, 0]), [3, 1, 2])
    assert.deepEqual(onesCounter([0, 0, 0, 1, 0, 0, 1, 1]), [1, 2])
    assert.deepEqual(onesCounter([1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1]), [1, 2, 4, 1])
  });

});
