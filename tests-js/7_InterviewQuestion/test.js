var assert = require('assert');

describe('Kyu 7: Factorial', function () {

  function factorial(n) {
    if (n < 0 || n >12) { throw "Invalid argument"; }
    return (n === 0) ? 1 : n*factorial(n-1);
  }

  it("Fixed Tests", () => {
    assert.equal(factorial(0), 1, "factorial for 0 is 1");
    assert.equal(factorial(1), 1, "factorial for 1 is 1");
    assert.equal(factorial(2), 2, "factorial for 2 is 2");
    assert.equal(factorial(3), 6, "factorial for 3 is 6");
  });

});
