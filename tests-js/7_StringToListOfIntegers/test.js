const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Kyu 7: String to list of integers",() => {

  function stringToIntArray(s){
    return s.split(',').filter(e => e).map(e => parseInt(e));
  }

  function doTest(input, expected) {
    assert.deepEqual(stringToIntArray(input), expected, `stringToIntArray("${input}") returned an incorrect answer\n\n`);
  }

  it('Basic tests', () => {
    doTest("1,2,3,4,5", [1, 2, 3, 4, 5]);
    doTest("21,12,23,34,45", [21, 12, 23, 34, 45]);
    doTest("-1,-2,3,-4,-5", [-1, -2, 3, -4, -5]);
    doTest("1,2,3,,,4,,5,,,", [1, 2, 3, 4, 5]);
    doTest(",,,,,1,2,3,,,4,,5,,,", [1, 2, 3, 4, 5]);
    doTest("", []);
    doTest(",,,,,,,", []);
  })

})

