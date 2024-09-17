var assert = require('assert');

describe('Kyu 7: Number to digit tiers. Ver2', function () {

  function createArrayOfTiers(num) {
    const numStr = `${num}`;
    return [...numStr].map((e, i) => (numStr.slice(0, i+1)));
  }

  it ("should return the correct array for 420", function(){
    assert.deepEqual(createArrayOfTiers(420), ["4", "42", "420"]);
  });
  it ("should return the correct array for 2017", function(){
      assert.deepEqual(createArrayOfTiers(2017), ["2", "20", "201", "2017"]);
  });

});
