const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Possibilities Array', function () {

  function isAllPossibilities(x) {
    return x.every((v, i, a) => (a.includes(i)));
  }

  function doTest(x, expected) {
    const actual = isAllPossibilities(x.slice())
    assert.strictEqual(actual, expected, `isAllPossibilities(${JSON.stringify(x)})`)
  }

  it('Sample tests', () => {
    doTest([0,1,2,3], true)
    doTest([1,2,3,4], false)
  })

});
