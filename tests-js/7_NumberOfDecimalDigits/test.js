var assert = require('assert');

describe('Kyu 7: Number of Decimal Digits', function () {

    function digits(n) {
      return [...`${n}`.matchAll(new RegExp(/\d/, 'g'))].length;
    }

    const tests = [
      [0, 1],
      [9, 1],
      [66, 2],
      [12345, 5],
      [128685, 6],
      [9876543210, 10],
      [9007199254740991, 16],
    ];

    for (let [n, expected] of tests) {
      it(`${n}`, function() {
        assert.strictEqual(digits(n), expected);
      });
    }

});
