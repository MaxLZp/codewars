const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Return a sorted list of objects', function () {

  function sortList (sortBy, list) {
    return list.sort((l, r) => r[sortBy] - l[sortBy]);
  }

  function doTest(input, expected) {
    const actual = evenChars(input);
    const message = `Test failed for input: "${input}"\n\n`;
    assert.deepEqual(actual, expected, message);
  }

  it('should sort the list correctly', () => {
    let sortBy = "b";
    let arr = [
          { a: 2, b: 2 },
          { a: 3, b: 40 },
          { a: 1, b: 12 }
        ];
    let expected = [
          { a: 3, b: 40 },
          { a: 1, b: 12 },
          { a: 2, b: 2 }
        ];
      assert.deepEqual(sortList(sortBy, arr), expected);
  });

});
