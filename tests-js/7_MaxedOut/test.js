var assert = require('assert');

describe('Kyu 7: Maxed Out', function () {
  it('solution1', function () {

    function maxedOut(arr) {
      var sum = arr.reduce((c, e) => c + Math.pow(e, 3), 0);
      return sum <= Number.MAX_SAFE_INTEGER ? sum : "You've pushed me to the max!";
    }

    assert.equal(maxedOut([1,2]), 9, "Should return 9");
    assert.equal(maxedOut([-530,230,5600,40,5,7200]), 548727354125, "Should return 548727354125");
    assert.equal(maxedOut([7600,32300,66700,22200,4554,323000,5555]), "You've pushed me to the max!", "Should return You've pushed me to the max!");

  });
});