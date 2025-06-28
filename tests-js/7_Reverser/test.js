var assert = require('assert');

describe('Kyu 7: Reverser', function () {

  /**
   * Math.log10(n) gives the base-10 logarithm of a number.
   * The base-10 logarithm of a number tells you how many times you can divide it by 10 before you get down to 1.
   * 
   * log10(100) = 2 → because 10^2 = 100 → it has 3 digits
   * log10(999) ≈ 2.99 → still 3 digits
   * log10(1000) = 3 → 4 digits
   */
  function reverse(n){
    return n == 0 
      ? n 
      : (n % 10 ) * (Math.pow(10, Math.floor(Math.log10(n)))) + reverse(Math.floor(n / 10));
  }

  it("Sample tests", function() {
    assert.strictEqual(reverse(1234), 4321);
    assert.strictEqual(reverse(10987), 78901);
    assert.strictEqual(reverse(1020), 201);
  });

});
