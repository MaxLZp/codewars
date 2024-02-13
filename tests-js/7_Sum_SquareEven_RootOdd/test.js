// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const expect = chai.expect;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");


describe('Kyu 7: Sum - Square Even, Root Odd', function () {

  const sumSquareEvenRootOdd = ns => {
    return +ns.reduce((carry, num) => {
      return num % 2 == 0 ? carry + num**2 : carry + Math.sqrt(num);
    }, 0).toFixed(2);
  };

  it('Tests', () => {
    expect(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0])).to.be.approximately(91.61, Number.EPSILON);
    expect(sumSquareEvenRootOdd([1,14,9,8,17,21])).to.be.approximately(272.71, Number.EPSILON);
  })

});
