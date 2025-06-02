const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Minimum Percentage of Visitors that Ate All Foods', function () {

  function minimumPercentage(foods) {
    /**
     * Inclusion-exclusion principle from set theory.
     * This formula comes from the inclusion-exclusion principle, rearranged to find the guaranteed intersection of all sets.
     */
    return Math.max(0, foods.reduce((c, e) => c + e, 0)  - 100 * (foods.length - 1));
  }

  it("Sample Tests", function() {
    assert.deepEqual(minimumPercentage([76]),              76.0);
    assert.deepEqual(minimumPercentage([50, 100]),         50.0);
    assert.deepEqual(minimumPercentage([50, 50]),           0.0);
    assert.deepEqual(minimumPercentage([100, 100, 100]),  100.0);
    assert.deepEqual(minimumPercentage([65, 80, 80, 90]),  15.0);

    assert.deepEqual(minimumPercentage([70, 70]),  40.0);
    assert.deepEqual(minimumPercentage([83, 83, 83]),  49.0);
    assert.deepEqual(minimumPercentage([67, 72, 78, 83]),  0);
    assert.deepEqual(minimumPercentage([100, 100, 100, 100, 0]),  0);
  });

});
