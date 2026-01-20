var assert = require('assert');

describe('Kyu 7: Happy Birthday', function () {

  function wrap(height, width, length) {
    return 20 + 2 * (Math.min(height, width, length) + height + width + length);
  }

  it('solution1', function () {
    assert.strictEqual(wrap(17, 32, 11), 162);
    assert.strictEqual(wrap(13, 13, 13), 124);
    assert.strictEqual(wrap(1, 3, 1), 32);
  });

});
