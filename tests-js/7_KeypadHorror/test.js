const { assert } = require('chai');

describe('Kyu 7: Keypad horror', function () {

  it("Solution 1 Tests", () => {

    function computerToPhone(numbers) {
      return numbers.replace(/[123789]/g, (digit) => digit > 6 ? digit - 6 : +digit + 6);
    }

    doTest("0789456123", "0123456789");
    doTest("000", "000");
    doTest("94561", "34567");
    doTest("", "");


    function doTest(input, expected) {
        const message = `for input = ${JSON.stringify(input)}\n`;
        const actual = computerToPhone(input);
        assert.strictEqual(actual, expected, message);
    }
  });

});
