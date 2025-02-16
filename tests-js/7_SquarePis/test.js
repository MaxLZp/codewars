const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Square Pis', function () {

  function squarePi(digits){
    var pi = '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'
    var sum = 0;
    for (let index = 0; index < digits; index++) {
      sum += pi[index] ** 2;
    }
    return Math.ceil(Math.sqrt(sum));
  }

  it("fixedTest", function() {
    assert.deepEqual(squarePi(5), 8);
  });
  it("fixedTest", function() {
    assert.deepEqual(squarePi(10), 15);
  });

});
