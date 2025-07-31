const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: ONE ONe One one', function () {
  it('solution1', function () {
    
    function consecutiveOnes(nums) {
      // return (nums.join('').match(/(1+)/g) || []).reduce((c, e) => c < e.length ? e.length : c, 0);

      // One-liner was too slow to pass tests
      var max = 0;
      var sum = 0;

      for (const num of nums) {
        sum += num;
        max = max > sum ? max : sum;
        if (num == 0) {
          sum = 0;
        }
      }

      return max;
    };

    assert.strictEqual(consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]), 3);
    assert.strictEqual(consecutiveOnes([1, 1, 0, 0, 1]), 2);
    assert.strictEqual(consecutiveOnes([1, 1, 1, 1, 1]), 5);
    assert.strictEqual(consecutiveOnes([0, 0, 0, 0, 0]), 0);
    assert.strictEqual(consecutiveOnes([0, 0, 0, 0, 1]), 1);

  });

});
