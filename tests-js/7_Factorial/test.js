var assert = require('assert');

describe('Kyu 7: Filter the number', function () {
  it('solution1', function () {
    var filterString = function(value) {
      return +value.replace(/[\D]/g, '');
      // return +value.replace(/[a-zA-Z]/g, '');
    }

    assert.strictEqual(filterString("123"), 123, `For the input "123"`);
    assert.strictEqual(filterString("a1b2c3"), 123, `For the input "a1b2c3"`);
    assert.strictEqual(filterString("aa1bb2cc3dd"), 123, `For the input "aa1bb2cc3dd"`);

  });

});
