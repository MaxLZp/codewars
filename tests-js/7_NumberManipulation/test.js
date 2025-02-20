const chai = require('chai');
const assert = chai.assert;

chai.config.truncateThreshold = 0;

describe('Kyu 7: Number Manipulation I (Easy)', function () {

  function manipulate(num) {
    var top = Math.pow(10, Math.ceil(`${num}`.length / 2))

    return Math.trunc(num / top) * top;
  }

  function doTest(num, expected) {
    assert.strictEqual(manipulate(num), expected, `Incorrect result for num = ${num}\n\n`);
  }

  it("Should handle manual tests", function () {
    doTest(192827764920, 192827000000);
    doTest(838473, 838000);
    doTest(8173648710293847, 8173648700000000);
  });

});
