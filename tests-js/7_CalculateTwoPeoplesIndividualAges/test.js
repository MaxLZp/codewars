const { assert } = require("chai");

describe('Kyu 7: Calculate Two Peoples Individual Ages', function () {

  it("Solution 1", function() {

    function getAges(sum, difference){
      if (sum < 0 || difference < 0 || sum < difference) {
        return null;
      }
      var first = ((sum - difference) / 2);
      var second = sum - first;

      return [second, first];
    };

    it ("it returns 14,10 when passed 24,4", function(){
      assert.deepEqual(getAges(24,4), [14,10]);
    });
    it ("it returns null when passed 63,-14", function(){
      assert.deepEqual(getAges(63,-14), null);
    });

  });

});
