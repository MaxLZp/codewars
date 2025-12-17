const { assert } = require("chai");

describe('Kyu 7: Reverse the bits in an integer', function () {

  function reverseBits(n) {
    return parseInt(n.toString(2).split('').reverse().join(''), 2);
  }

  function doTest(input, expected) {
    const message = 'for input ' + input + '\n';
    const actual = reverseBits(input);
    assert.strictEqual(actual, expected, message);
  }

  it("Sample tests", function() {
    doTest(417, 267);
    doTest(267, 417); 
    doTest(0, 0); 
    doTest(2017, 1087); 
    doTest(1023, 1023); 
    doTest(1024, 1); 
    doTest(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);   
  });

});

