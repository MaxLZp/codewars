var assert = require('assert');

describe('Kyu 7: Simple Fun #10: Range Bit Counting', function () {

  function rangeBitCount(a, b) {
    return Array.from({length: b - a + 1}, (v, i) => ((a + i).toString(2)))
      .reduce((c, v) => (c + ((v.match(/1/g) || []).length)), 0);
  }

  it("Fixed Tests", () => {
    assert.equal(rangeBitCount(2,7) , 11)
    assert.equal(rangeBitCount(0,1) , 1)
    assert.equal(rangeBitCount(4,4) , 1)
  });

});
