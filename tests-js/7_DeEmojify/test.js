const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: De-Emojify', function () {

	function deEmojify(emojiString) {
		var result = emojiString;
		var map = [
			{ emoji: ':)', num: 0 },
			{ emoji: ':D', num: 1 },
			{ emoji: '>(', num: 2 },
			{ emoji: '>:C', num: 3 },
			{ emoji: ':/', num: 4 },
			{ emoji: ':|', num: 5 },
			{ emoji: ':O', num: 6 },
			{ emoji: ';)', num: 7 },
			{ emoji: '^.^', num: 8 },
			{ emoji: ':(', num: 9 },
		];
		map.forEach((e) => {
			var re = new RegExp(e.emoji.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")+'\\s?', 'g');
			result = result.replaceAll(re, e.num);
		});

		return result.replaceAll(/\d+\s?/g, (d) => (String.fromCharCode(+d)));
	}

	it("tests", () => {
		assert.strictEqual(deEmojify(":D :) :/  :D :) :|"), "hi");
		assert.strictEqual(deEmojify(";) >(  :D :) :D  :D :) ^.^  :D :) ^.^  :D :D :D  >:C >(  :D :D :(  :D :D :D  :D :D :/  :D :) ^.^  :D :) :)  >:C >:C"), "Hello world!");
		assert.strictEqual(deEmojify(":)"), "\x00");
	});

});
