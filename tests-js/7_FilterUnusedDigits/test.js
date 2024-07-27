var assert = require('assert');

describe('Kyu 7: Filter unused digits', function () {

  function unusedDigits() {
    var str = Array.from(arguments).join('');
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      .filter((n => !str.includes(n)))
      .join('');
  }

  it("Basic test", () => {
	  assert.strictEqual(unusedDigits(12, 34, 56, 78), "09")
	  assert.strictEqual(unusedDigits(2015, 8, 26), "3479")
  });

});
