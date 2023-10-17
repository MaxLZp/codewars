var assert = require('assert');

describe('Kyu 7: Exclamation marks series #3: Remove all exclamation marks from sentence except at the end', function () {
  it('solution2', function () {

    function remove (string) {
      return string.replace(/!+(?!!*$)/g, '');
    }

	assert.strictEqual(remove("Hi!"), "Hi!");
	assert.strictEqual(remove("Hi!!!"), "Hi!!!");
	assert.strictEqual(remove("!Hi"), "Hi");
	assert.strictEqual(remove("!Hi!"), "Hi!");
	assert.strictEqual(remove("Hi! Hi!"), "Hi Hi!");
	assert.strictEqual(remove("Hi"), "Hi");
  });

});
