const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Trigrams', function () {

  function min(a, b){
    if (isNaN(a) || isNaN(b)) { return NaN; }
    a = a || 0;
    b = b || 0;

    return (a < b) ? a : b;
  }

  it("should return an empty string for the phrase shorter than 3 chars", () => {
    assert.isTrue(min(1, -2.5) === -2.5, 'Return the minimum of the two arguments');
    assert.isTrue(isNaN(min(1.5, NaN)), 'Any NaN value should return NaN');
    assert.isTrue(isNaN(min(1.5, undefined)), 'Any undefined value should return NaN');
    assert.isTrue(min(-Infinity, Infinity) === -Infinity, 'Infinity should be handled like normal numbers');
    assert.isTrue(min(null, 2.5) === 0, 'treat null as if it were 0');
  });

});
