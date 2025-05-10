var assert = require('assert');

describe('Kyu 7: Digits Average', function () {

  it("Sample Tests", () => {

    function digitsAverage(input) {
      var result = `${input}`;
      while (result.length > 1) {
        var temp = '';
        for (let i = 0; i < result.length - 1; i++) {
          temp += Math.ceil((+result[i] + +result[i+1]) / 2);
        }
        result = temp;
      }

      return +result;
    }

    tester(246, 4);
    tester(89, 9);
    tester(2, 2);
    tester(245, 4);
    tester(345, 5);
    tester(346, 5);

    function tester(input, expected) {
      const actual = digitsAverage(input);
      assert.strictEqual(actual, expected, `Failed for input: ${input}\n`);
    }

  });


});
