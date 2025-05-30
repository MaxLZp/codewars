const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Magic Sum of 3s', function () {

  function magicSum(numbers) {
    return numbers.reduce((c, e) => c + (e & 1 && /3/.test(e) ? e : 0), 0);
  }

  it("Sample Tests", function() {

    assert.equal(magicSum([3]), 3);
    assert.equal(magicSum([3, 13]), 16);
    assert.equal(magicSum([30, 34, 330]), 0);
    assert.equal(magicSum([3, 12, 5, 8, 30, 13]), 16);
    assert.equal(magicSum([]), 0, 'Calling the function with an empty array should return 0 as a sum.');

  });

});
