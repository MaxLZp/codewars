const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
chai.config.truncateThreshold=0;

describe('Kyu 7: Basic JS - Calculating averages', function () {

  var Calculator = {
    average: function() {
      var args = [...arguments];
      return (args.reduce((c, e) => c + e, 0)) / (args.length || 1);
    }
  };

  let eps = 1E-5;
  it("Type of calculator is correct", () => {
    expect(typeof Calculator).to.be.oneOf(['object', 'function']);
  });
  it("Works for some examples", () => {
    expect(Calculator.average(3,4,5)).to.be.approximately(4, eps);
    expect(Calculator.average(3,4,5,6,7,8,9,8,7,6,5,4,3)).to.be.approximately(5.769230769230769, eps);
    expect(Calculator.average()).to.be.equal(0, 'Calculator.average() (no arguments) should result in 0');
  });

});
