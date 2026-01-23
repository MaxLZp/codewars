const assert = require('chai').assert;

describe('Kyu 7: How many times should I go?', function () {

  function howManyTimes(annualPrice, individualPrice) {
    return Math.ceil(annualPrice / individualPrice);
  }

  it("test for [[10,15], [25,35]]", function(){
    assert.strictEqual(howManyTimes(40,15), 3);
    assert.strictEqual(howManyTimes(30,10), 3);
    assert.strictEqual(howManyTimes(80,15), 6);
  });

});