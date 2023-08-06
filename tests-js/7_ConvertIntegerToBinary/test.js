var assert = require('assert');

describe('Kyu 7: ConvertIntegerToBinary', function () {

  function toBinary(n) {
    return (n >>> 0).toString(2);
  };

  it('solution1', function () {

    assert.strictEqual(toBinary(6),"110")
    assert.strictEqual(toBinary(4),"100")
    assert.strictEqual(toBinary(5),"101")
    assert.strictEqual(toBinary(-3),"11111111111111111111111111111101")
    assert.strictEqual(toBinary(-6),"11111111111111111111111111111010")
    assert.strictEqual(toBinary(-320315),"11111111111110110001110011000101")
    assert.strictEqual(toBinary(-468661),"11111111111110001101100101001011")


  });

});
