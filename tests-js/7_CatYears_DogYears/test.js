var assert = require('assert');

describe('Kyu 7: Cat Years, Dog Years (2)', function () {

  var ownedCatAndDog = function(catYears, dogYears) {
    return [catYears, dogYears].map((el,i,a) => {
      if ( el <= 15) {return 1; }
      if ( el <= 24) {return 2; }
      return 2 + Math.trunc((el - 24) / (4 + i));
    });
  }

  it("one", function() {
    assert.deepEqual(ownedCatAndDog(15,15), [1,1]);
  });

  it("two", function() {
    assert.deepEqual(ownedCatAndDog(24,24), [2,2]);
  });

  it("ten", function() {
    assert.deepEqual(ownedCatAndDog(56,64), [10,10]);
  });

  it("random", function() {
    assert.deepEqual(ownedCatAndDog(29,76), [3,12]);
  });


});
