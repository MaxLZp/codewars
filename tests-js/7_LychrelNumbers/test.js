const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Lychrel numbers', function () {

  it('solution1', function () {

    function howManyIterationsNeeded(num, maxIter = 3) {
      var iter = 1;

      while(iter <= maxIter) {
        num += +[...`${num}`].reverse().join('');
        if (isPalindrome(`${num}`)) {
          return iter;
        }
        iter++;
      }

      return null;
    }

    function isPalindrome(ns) {
      var found = true;
      for(var j = 0; j < ns.length / 2; j++) {
        if (ns[j] != ns[ns.length - 1 - j]) {
          found = false;
          break;
        }
      }

      return found;
    }

    assert.equal(howManyIterationsNeeded(12), 1);
    assert.equal(howManyIterationsNeeded(55), 2);
    assert.equal(howManyIterationsNeeded(196), null);
    assert.equal(howManyIterationsNeeded(197,6), null);
    assert.equal(howManyIterationsNeeded(198,6), 5);

  });

});
