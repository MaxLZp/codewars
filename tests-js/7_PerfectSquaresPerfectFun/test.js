var assert = require('assert');

describe('Kyu 7: Perfect squares, perfect fun', function () {
  function squareIt(int) {
    var sq = Math.sqrt(`${int}`.length);
    if (sq % 1 == 0) {
      return `${int}`.match(new RegExp('.{1,'+sq+'}', 'g')).join('\n');
    }
    return 'Not a perfect square!';
  }

	function doTest (input, expected) {
		const actual = squareIt(input);
		assert.strictEqual(actual, expected, `for ${input}\n`);
	}

	it("sample tests", function() {
		doTest(1, "1");
		doTest(222, "Not a perfect square!");
		doTest(234562342342, "Not a perfect square!");
		doTest(88989, "Not a perfect square!");
		doTest(112141568, "112\n141\n568");
		doTest(Number.MAX_SAFE_INTEGER, "9007\n1992\n5474\n0991");
	});

});

