var assert = require('assert');

describe('Kyu 7: Single digit', function () {

  function singleDigit(n) {
    return n < 10 ? n : singleDigit(n.toString(2).split('').reduce((c, v) => (c + +v), 0));
  }

  it("Fixed Tests", () => {
    assert.strictEqual(singleDigit(5), 5)
    assert.strictEqual(singleDigit(999), 8)
    assert.strictEqual(singleDigit(1234444123), 1)
    assert.strictEqual(singleDigit(443566), 2)
    assert.strictEqual(singleDigit(565656565), 3)
    assert.strictEqual(singleDigit(4868872), 8)
    assert.strictEqual(singleDigit(234234235), 2)
    assert.strictEqual(singleDigit(567448), 7)
    assert.strictEqual(singleDigit(1000000000), 3)
  });

});
