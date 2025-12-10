const chai   = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;


describe('Kyu 7: Format to the 2nd', function () {
  
  function printNums(...args) {
    var width = `${Math.max(...args)}`.length;
    return args.map(e => `${e}`.padStart(width, '0')).join('\n');
  }

  function doTest(args, expected){
    assert.strictEqual(printNums(...args), expected, `printNums(${args.join(", ")}) returned an incorrect answer.`)
  }
  
  it("Sample Tests", function() {
    doTest([], '')
    doTest([2], '2');
    doTest([1, 12, 34], '01\n12\n34');
    doTest([1009, 2], '1009\n0002');
  });

});
