var assert = require('assert');




describe('Reduce My Fraction', () => {

  /**
   * Euklid algorithm
   *
   * @link https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%95%D0%B2%D0%BA%D0%BB%D0%B8%D0%B4%D0%B0
   *
   * @param array fraction
   * @returns array
   */
  function reduce(fraction) {
    var min = 0;
    var max = 0;
    if (fraction[0] <= fraction[1]) {
      min = fraction[0];
      max = fraction[1];
    } else {
      min = fraction[1];
      max = fraction[0];
    }

    while (min != 0 && max != 0) {
      var mint = min;
      min = max % min;
      max = mint;
    }

    var denominator = min == 0 ? max : min;
    return fraction.map((el) => (el/denominator));
  }

  const test = (input, expected, message) => {
    assert.deepEqual(reduce(input), expected, message);
  }

  it('basic tests', () => {

    const tests = [
      [[60, 20], [3, 1]],
      [[80, 120], [2, 3]],
      [[4, 2], [2, 1]],
      [[45, 120], [3, 8]],
      [[1000, 1], [1000, 1]],
      [[1, 1], [1, 1]],
    ];

    for (const [input, expected] of tests) {
      test(input, expected);
    }

  });
});
