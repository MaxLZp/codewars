const chai = require('chai');
chai.config.truncateThreshold = 0;
const { strictEqual } = chai.assert;

describe('Kyu 7: Remove consecutive duplicate words', function () {

  function removeConsecutiveDuplicates(string) {
    return string.replace(/(\b\w+\b) (?=\1\b)/g, '');
  }

	function doTest(input, expected) {
		const actual = removeConsecutiveDuplicates(input);
		strictEqual(actual, expected, `for string = "${input}"\n`);
	}

	it("Fixed tests", function() {
		doTest("", "");
		doTest("alpha", "alpha");
		doTest("alpha alphaalpha alphaalphaalpha", "alpha alphaalpha alphaalphaalpha");
		doTest(
			"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta",
			"alpha beta gamma delta alpha beta gamma delta"
		);
		doTest("alpha alpha alpha alpha", "alpha");
		doTest("alpha beta alpha", "alpha beta alpha");
		doTest("alpha alphabeta alphagamma", "alpha alphabeta alphagamma");
		doTest("alpha alpha beta alpha alpha", "alpha beta alpha");
		doTest("alpha beta beta", "alpha beta");
	});

});
