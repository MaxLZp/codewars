const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Sorted? yes? no? how?', function () {

  function isSortedAndHow(array) {
    var asc = true;
    var desc = true;
    for(let i = 1; i < array.length; i++) {
      if (array[i] > array[i-1]) {
        desc = false;
      }
      if (array[i] < array[i-1]) {
        asc = false;
      }
    }
    
    return asc ? 'yes, ascending' : ( desc ? 'yes, descending' : 'no');
  }

  function doTest(input, expected) {
    const message = `array = ${JSON.stringify(input)}\n`;
    const actual = isSortedAndHow(input);
    assert.strictEqual(actual, expected, message);
  }

  it("Tests", () => {
    doTest([1, 3, 9, 4], 'no');
    doTest([4, 3, 1, 9], 'no');
    doTest([1, 2], 'yes, ascending');
    doTest([2, 1], 'yes, descending');
    doTest([1, 2, 3, 4], 'yes, ascending');
    doTest([1, 1, 2, 3], 'yes, ascending');
    doTest([1, 2, 3, 3], 'yes, ascending');
    doTest([4, 3, 2, 1], 'yes, descending');
    doTest([3, 3, 2, 1], 'yes, descending');
    doTest([3, 2, 1, 1], 'yes, descending');
  })

});
