var assert = require('assert');

describe('Kyu 7: Is n divisible by (...)?', function () {
  it('solution1', function () {

    assert.equal(isDivisible(3,3,4),false, '3,3,4');
    assert.equal(isDivisible(12,3,4),true, '12, 3, 4');
    assert.equal(isDivisible(8,3,4,2,5),false, '8,3,4,2,5');

    function isDivisible(){
      return [...arguments].every(element => {
        return arguments[0] % element == 0;
      });
    }

  });

});
