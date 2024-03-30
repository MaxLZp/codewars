var assert = require('assert');

describe('Kyu 7: Is There an Odd Bit?', function () {
  it('solution1', function () {

    function anyOdd(x) {
      return [...x.toString(2)].reverse().some((v, i) => v == '1' && i % 2 !== 0) ? 1 : 0;
    }

    assert.strictEqual(anyOdd(2863311530), 1);
    assert.strictEqual(anyOdd(128), 1);
    assert.strictEqual(anyOdd(131), 1);
    assert.strictEqual(anyOdd(2), 1);
    assert.strictEqual(anyOdd(24082), 1);
    assert.strictEqual(anyOdd(0), 0);
    assert.strictEqual(anyOdd(85), 0);
    assert.strictEqual(anyOdd(1024), 0);
    assert.strictEqual(anyOdd(1), 0);
    assert.strictEqual(anyOdd(1365), 0);
  });

});
