var assert = require('assert');

describe('Kyu 7: Sexy Primes <3', function () {
  it('solution1', function () {

    function is_prime(n) {
      if (n < 2) {return false;}
      for (let index = 2; index < n; index++) {
        if (n % index == 0) { return false; }
      }
      return true;
    }

    function sexy_prime(x, y){
      if (Math.abs(x-y) != 6) {return false;}
      return is_prime(x) && is_prime(y);
    }

    assert.equal(sexy_prime(5, 11),true);
    assert.equal(sexy_prime(13, 19),true);
    assert.equal(sexy_prime(83, 89),true);
    assert.equal(sexy_prime(1, 11),false); //(1 is not a prime)
    assert.equal(sexy_prime(1, 7),false); //(1 is not a prime)
    assert.equal(sexy_prime(3, 7),false); //
    assert.equal(sexy_prime(27, 21),false); //
    assert.equal(sexy_prime(1,1),false); //
  })

});
