const { strictEqual } = require('chai').assert;

describe('Kyu 7: How many consecutive numbers are needed?', function () {

  function consecutive(array) {
    return array.sort((l ,r) => l - r)
      .reduce((c, e, i, a) => i <= 0 ? c : c + e - a[i - 1] - 1, 0);
  }

  function doTest(input, expected) {
    const actual = consecutive(input.slice());
    strictEqual(actual, expected, `for array = ${JSON.stringify(input)}\n`);
  }

  it("Fixed Tests", () => {
    doTest([4, 8, 6], 2);
    doTest([1, 2, 3, 4], 0);
    doTest([], 0);
    doTest([1], 0);
  });

});
