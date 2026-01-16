const { assert } = require('chai');

describe('Kyu 7: Unpacking Arguments', function () {

  function spread(func, args) {
    return func(...args);
  }

  it('solution1', function () {
    assert.strictEqual(spread(function(x, y) { return x + y; }, [1, 2]), 3);
  });

});
