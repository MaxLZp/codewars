var assert = require('assert');

describe('Kyu 7: Sum of odd numbers', function () {

  /* The rows' start numbers are Hogben's centered polygonal numbers:
    1, 3, 7, 13, 21, 31, 43 = b[n] = n^2 - n + 1.
    <https://oeis.org/A002061>

    The sum of one row is given by:
    s[n] = n^2 + n(b[n] - 1).
    <https://www.quora.com/What-is-the-sum-of-n-consecutive-odd-integers/answer/Xavier-Dectot>

    Inline b[n]:
    s[n] = n^2 + n(n^2 - n + 1 - 1)
        = n^2 + n(n^2 - n)
        = n^2 + n^3 - n^2
        = n^3
    ... oh. */
  function rowSumOddNumbers(n) {
    return Math.pow(n , 3);
  }

  /**
   *  Version 2
   * @param {*} n
   * @returns
   */
  // function rowSumOddNumbers(n) {
  //   var nums = 0;
  //   for (let i = n - 1; i > 0; i--) {
  //     nums += i;
  //   }
  //   var first = 2 * nums + 1;
  //   return n * (first    +     first + 2 * (n - 1)) / 2;
  // }

  it('solution1', function () {
    assert.strictEqual(rowSumOddNumbers(1), 1);
    assert.strictEqual(rowSumOddNumbers(2), 8);
    assert.strictEqual(rowSumOddNumbers(3), 27);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
  });

});
