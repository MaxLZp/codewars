var assert = require('assert');

describe('Kyu 7: Simple beads count', function () {

  function countRedBeads(n) {
    return (n < 2) ? 0 : (n - 1) * 2;
  }

  it("Fixed Tests", () => {
    assert.equal(countRedBeads(0), 0);
    assert.equal(countRedBeads(1), 0);
    assert.equal(countRedBeads(3), 4);
    assert.equal(countRedBeads(5), 8);
  });

});
