var assert = require('assert');

describe('Kyu 7: Sum of angles', function () {

  function angle(n) {
    return 180 * (n - 2);
  }

  it('Tests', () => {
    assert.strictEqual(angle(3), 180);
    assert.strictEqual(angle(4), 360);
  })

});
