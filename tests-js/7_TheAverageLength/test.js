const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: The average length', function () {

  function averageLength(array) { 
    var len = Math.round(array.reduce((c, e) => c + e.length, 0) / array.length);
    return array.map(e => e[0].repeat(len)); 
  }

  function doTest(arr, expected, message) {
    assert.deepEqual(averageLength(arr), expected, `Incorrect result for array: ${JSON.stringify(arr)}\n\n`);
  }

  it("tests",function() {
    doTest(['u', 'y'], ['u', 'y'], "It should work for ['u', 'y']");
    doTest(['aa', 'bbb', 'cccc'], ['aaa', 'bbb', 'ccc'], "It should work for ['aa', 'bbb', 'cccc']");
    doTest(['aa', 'bb', 'ddd', 'eee'], ['aaa', 'bbb', 'ddd', 'eee'], "It should work for ['aa', 'bb', 'ddd', 'eee']");
  })

});
