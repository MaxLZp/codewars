var assert = require('assert');

describe('Kyu 7: Find the anonymous function in the array', function () {
  it('solution1', function () {

    var FindFunction = function(func, arr) {
      return arr.filter(func.filter((f) => ('function' === typeof f)).shift());
    }

    assert.deepEqual(FindFunction([(a=>a%2==0),9,3,1,0],[1,2,3,4]), [2,4])
    assert.deepEqual(FindFunction([9,3,(a=>a%2),1,0],[1,2,3,4]), [1,3])

  });

});
