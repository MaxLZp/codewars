var assert = require('assert');

describe('Kyu 7: Simple Fun #260: Permutation Shift', function () {


  it("It should works for basic tests.", function() {

    function permutationShift(permutation) {
      var min = Number.MAX_SAFE_INTEGER;
      var max = Number.MIN_SAFE_INTEGER;

      for (let i = 0; i < permutation.length; i++) {
        min = Math.min(min, permutation[i] - i);
        max = Math.max(max, permutation[i] - i);
      }

      return max - min;
    }

    assert.equal(permutationShift([1, 0, 2, 3]),2);
    assert.equal(permutationShift([0, 1, 2, 3, 5, 4]),2);
    assert.equal(permutationShift([5, 4, 3, 2, 1, 0]),10);
    assert.equal(permutationShift([0, 1, 2, 3, 4]),0);

  })

});
