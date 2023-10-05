var assert = require('assert');

describe('Kyu 7: Find the stray number', function () {

  it('solution1', function () {
    function stray(numbers) {
      const unique = numbers.filter((v, i, a) => {
        return v != a[0];
      });
      return unique.length == 1 ? unique[0]: numbers[0];
    }

    assert.strictEqual(stray([1, 1, 2]), 2);
    assert.strictEqual(stray([1, 2, 1]), 2);
    assert.strictEqual(stray([2, 1, 1]), 2);
    assert.strictEqual(stray([17, 17, 3, 17, 17, 17, 17]), 3);
  });

});
