var assert = require('assert');

describe('Kyu 7: Number to digit tiers', function () {

  function createArrayOfTiers(num) {
    var result = [];
    for (let i = `${num}`.length - 1; i >= 0; i--) {
      result.push(`${Math.trunc(num / (10**i))}`);
    }

    return result;
  }

  it ("should return the correct array for 420", function(){
    assert.deepEqual(createArrayOfTiers(420), ["4", "42", "420"]);
  });
  it ("should return the correct array for 2017", function(){
      assert.deepEqual(createArrayOfTiers(2017), ["2", "20", "201", "2017"]);
  });

});
