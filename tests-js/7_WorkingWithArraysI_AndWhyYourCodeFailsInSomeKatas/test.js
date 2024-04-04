var assert = require('assert');

describe('Kyu 7: Working with arrays I (and why your code fails in some katas)', function () {
  it('solution1', function () {

    // MaxL: Original Version
    function withoutLast(arr) {
      // Fix it
      arr.pop(); // removes the last element
      return arr;
    }

    /**
    * MaxL: Refactored Version
    *
    * Author's comment:
    * The lessons here were: read the docs and DON'T MUTATE THE INPUT
    * Some katas use the input after you've processed it
    * (in this case I made that on purpose), mutating it makes the tests fail, so watch out.
     */
    function withoutLast(arr) {
      arr = [...arr];
      arr.pop(); // removes the last element
      return arr;
    }

    assert.deepEqual(withoutLast([1, 2, 3, 4, 5]), [1, 2, 3, 4]);
    assert.deepEqual(withoutLast([6, 7, 8, 9]), [6, 7, 8]);
    assert.deepEqual(withoutLast([88,  9, 78, 50, 75, 93, 12]), [88, 9, 78, 50, 75, 93]);
  });

});
