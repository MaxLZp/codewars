const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Valid number to 2 decimal places', function () {

  function validNumber(num){
    return /^[+-]?\d*\.\d\d$/.test(num)
  }

  it("Fixed test", function() {
    assert.strictEqual(validNumber("0.00"),true)
    assert.strictEqual(validNumber(".00"),true)
    assert.strictEqual(validNumber("-.00"),true)
    assert.strictEqual(validNumber(".30"),true)
    assert.strictEqual(validNumber("0.40"),true)
    assert.strictEqual(validNumber("34443.33"),true)


    assert.strictEqual(validNumber(".0a"),false)
    assert.strictEqual(validNumber("1.00."),false)
    assert.strictEqual(validNumber(".+00"),false)
    assert.strictEqual(validNumber("w.00"),false)
    assert.strictEqual(validNumber("..00"),false)
    assert.strictEqual(validNumber("1,00"),false)
  });

});
