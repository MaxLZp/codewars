const {assert, config} = require('chai')
config.truncateThreshold = 0

describe('Kyu 7: Number Pairs', function () {

  function getLargerNumbers(a, b) {
    return a.map((e, i) => Math.max(e, b[i]));
  }

  const doTest = (a, b, expected) => {
    const actual = getLargerNumbers(a.slice(), b.slice())
    assert.deepEqual(actual, expected, `getLargerNumbers([${a}], [${b}])`)
  }

  it("Testing for fixed tests", () => {
    doTest([13, 64, 15, 17, 88], [23, 14, 53, 17, 80], [23, 64, 53, 17, 88])
    doTest([34, -64, 15, 17, 88], [23, 14, 53, 17, 80], [34, 14, 53, 17, 88])
  });

});
