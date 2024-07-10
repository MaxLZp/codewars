var assert = require('assert');

describe('Kyu 7: Count the Combinations', function () {

  function numCombo(arr, num){
    const sum = arr.reduce((c, e) => (c + e), 0);
    return arr.reduce((c, e) => (c + ((sum - e == num) ? 1 : 0)), 0);
  }

  it("test", () => {
    assert.equal(numCombo([2, 0, 0, 0, 1], 2), 1)
    assert.equal(numCombo([2, 0, 0, 0, 1], 1), 1)
    assert.equal(numCombo([2, 0, 0, 0, 1], 3), 3)
    assert.equal(numCombo([0, 0, 0, 0, 0], 0), 5)
    assert.equal(numCombo([0, 0, 0, 0, 1], 1), 4)
    assert.equal(numCombo([0, 0, 0, 0, 1], 2), 0)
  });

});
