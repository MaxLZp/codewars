var assert = require('assert');

describe('Kyu 7: Maximum Multiple', function () {
  it('solution1', function () {

    assert.strictEqual(maxMultiple(2,7),6);
    assert.strictEqual(maxMultiple(3,10),9);
    assert.strictEqual(maxMultiple(7,17),14);
    assert.strictEqual(maxMultiple(10,50),50);
    assert.strictEqual(maxMultiple(37,200),185);
    assert.strictEqual(maxMultiple(7,100),98);

    function maxMultiple(divisor, bound){
      for (let index = bound; index >= 0; index--) {
        if (index % divisor == 0) {
          return index;
        }
      }
      return 0;
    };
  });

  it('solution other', function () {

    assert.strictEqual(maxMultiple(2,7),6);
    assert.strictEqual(maxMultiple(3,10),9);
    assert.strictEqual(maxMultiple(7,17),14);
    assert.strictEqual(maxMultiple(10,50),50);
    assert.strictEqual(maxMultiple(37,200),185);
    assert.strictEqual(maxMultiple(7,100),98);

    function maxMultiple(divisor, bound){
      return bound - bound%divisor;
    };
  });
});
