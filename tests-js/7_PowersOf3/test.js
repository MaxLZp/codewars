var assert = require('assert');

describe('Kyu 7: Powers of 3', function () {

  /**
   * 3**k = n
   * k = log 3(n)
   * k = ln(3) / ln(n)
   *
   * @param {*} n
   * @returns
   */
  function largestPower(n) {
    return Math.ceil(Math.log10(n)/Math.log10(3)) - 1;
  }

  // function largestPower(n) {
  //   var r = Math.log(n) / Math.log(3);
  //   var r1 = Math.floor(r);

  //   return 3**r1 == n
  //     ? Math.floor(r) - 1
  //     :  Math.floor(r);
  // }

  it('Sample tests', () => {
    assert.equal(largestPower(3), 0);
    assert.equal(largestPower(5), 1);
    assert.equal(largestPower(7), 1);
    assert.equal(largestPower(81), 3);
    assert.equal(largestPower(82), 4);
  })


});
