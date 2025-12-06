var assert = require('assert');

describe('Kyu 7: Get decimal part of the given number', function () {

  function getDecimal(n){
    return Math.abs(n % 1);
  }

  var assertFuzzyEquals = function(actual, expected, msg){
    var inrange = Math.abs((actual - expected)) <= 1e-7;
    assert.ok(inrange,
      msg || "Expected value near " + expected.toExponential(13) +
             ", but got " + actual.toExponential(13)
    );
  }
  it("returns decimal part from 10 as 0", function() {
    assertFuzzyEquals(getDecimal(10), 0);
  });

});
