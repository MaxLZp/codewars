var assert = require('assert');

describe('Kyu 7: Exclamation marks series #3: Remove all exclamation marks from sentence except at the end', function () {
  it('solution1', function () {

    function remove (string) {
      return string.replaceAll(new RegExp(/\!*/, 'g'), '') + string.match(/\!*$/)[0];
    }


		assert.strictEqual(remove("Hi!"), "Hi!");
		assert.strictEqual(remove("Hi!!!"), "Hi!!!");
		assert.strictEqual(remove("!Hi"), "Hi");
		assert.strictEqual(remove("!Hi!"), "Hi!");
		assert.strictEqual(remove("Hi! Hi!"), "Hi Hi!");
		assert.strictEqual(remove("Hi"), "Hi");
  });

});
