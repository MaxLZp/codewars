const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: You Got Change?', function () {

  function giveChange(amount) {
    return [100, 50, 20, 10, 5, 1]
      .map((b) => {
        var count = Math.floor(amount / b);
        amount %= b;
        return count;
      })
      .reverse();
  }

  it("Fixed Tests", () => {
    assert.deepEqual(giveChange(365), [0,1,1,0,1,3]);
    assert.deepEqual(giveChange(217), [2,1,1,0,0,2]);
    assert.deepEqual(giveChange(8),   [3,1,0,0,0,0]);
  });

});
