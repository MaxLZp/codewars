var assert = require('assert');

describe('Kyu 7: Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark', function () {

  it('solution1', function () {

    function remove (string) {
      return string.split(' ').filter(e => (e.match(/!/g) || []).length != 1).join(' ');
    }

	function doTest(input, expected) {
		const actual = remove(input);
		assert.strictEqual(actual, expected, `for string:\n"${input}"\n`);
	}

	doTest("Hi!", "");
	doTest("Hi! Hi!", "");
	doTest("Hi! Hi! Hi!", "");
	doTest("Hi Hi! Hi!", "Hi");
	doTest("Hi! !Hi Hi!", "");
	doTest("Hi! Hi!! Hi!", "Hi!!");
	doTest("Hi! !Hi! Hi!", "!Hi!");
  });

});
