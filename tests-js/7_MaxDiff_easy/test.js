const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: max diff - easy', function () {
  it('solution1', function () {

    function maxDiff(list) {
      return list.length < 2 ? 0 : Math.max(...list) - Math.min(...list);
    };

    assert.strictEqual(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
    assert.strictEqual(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
    assert.strictEqual(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
    assert.strictEqual(maxDiff([16]), 0);
    assert.strictEqual(maxDiff([]), 0);

  });
});