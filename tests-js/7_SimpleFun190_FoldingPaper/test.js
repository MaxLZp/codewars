const { assert } = require('chai');

describe('Kyu 7: Simple Fun #190: Folding Paper', function () {


  it("soluttion 1", function () {

    function folding(a, b) {
      return (a == b) ? 1 : 1 + folding(Math.min(a, b), Math.max(a, b) - Math.min(a,b));
    }

    assert.strictEqual(folding(2, 1), 2, "For a = 2, b = 1");
    assert.strictEqual(folding(10, 7), 6, "For a = 10, b = 7");
    assert.strictEqual(folding(3, 1), 3, "For a = 3, b = 1");
    assert.strictEqual(folding(4, 1), 4, "For a = 4, b = 1");
    assert.strictEqual(folding(3, 2), 3, "For a = 3, b = 2");
    assert.strictEqual(folding(4, 2), 2, "For a = 4, b = 2");
    assert.strictEqual(folding(1000, 700), 6, "For a = 1000, b = 700");
    assert.strictEqual(folding(1000, 999), 1000, "For a = 1000, b = 999");
  });

});
