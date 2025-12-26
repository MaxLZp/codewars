var assert = require('assert');

describe('Kyu 7: Cyclops numbers', function () {

  function cyclops(n) {
    var str = n.toString(2);
    var idx = str.indexOf('0'); 
    return idx >= 0 
      && idx == str.lastIndexOf('0')
      && idx == str.length - 1 - idx;
  }

  describe('Fixed tests', () => {
    it('Tests', () => {
      assert.strictEqual(cyclops(1), false);
      assert.strictEqual(cyclops(5), true);
      assert.strictEqual(cyclops(3), false);
      assert.strictEqual(cyclops(13), false);
      assert.strictEqual(cyclops(23), false);
      assert.strictEqual(cyclops(27), true);
      assert.strictEqual(cyclops(2015), true);
      assert.strictEqual(cyclops(666), false);
      assert.strictEqual(cyclops(42), false);
    });
  });

});
