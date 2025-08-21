const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
chai.config.truncateThreshold=0;

describe('Kyu 7: Basic Calculator', function () {

  function calculate(num1, operation, num2) {
    switch(operation) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num2 != 0 ? num1 / num2 : null;
      default: return null;
    }
  }

  it("tests", () => {
    assert.equal(calculate(3.2,"+", 8), 11.2, "3.2 + 8 = 11.2")
    assert.equal(calculate(3.2,"-", 8), -4.8, "3.2 - 8 = -4.8")
    assert.equal(calculate(3.2,"/", 8), 0.4, "3.2 / 8 = .4")
    assert.equal(calculate(3.2,"*", 8), 25.6, "3.2 * 8 = 25.6")
    assert.equal(calculate(-3,"+", 0), -3, "-3 + 0 = -3")
    assert.equal(calculate(-3,"-", 0), -3, "-3 - 0 = -3")
    assert.equal(calculate(-3,"/", 0), null, "-3 / 0 = null")
    assert.equal(calculate(-3,"*", 0), 0, "-3 * 0 = 0")
    assert.equal(calculate(-3,"w", 0), null, "-3 w 0 = null")
  });

});
