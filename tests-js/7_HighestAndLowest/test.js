const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Highest and Lowest', function () {

  function highAndLow(numbers){
    // var nums = numbers.split(' ').map((el) => (+el));
    var nums = numbers.split(' ').map(Number);
    return [Math.max(...nums), Math.min(...nums)].join(' ');
  }

   it("Test 1", () => {
    assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
  });
  it("Test 2", () => {
    assert.strictEqual(highAndLow("1 2 3"), "3 1");
  });

});
