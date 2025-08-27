var assert = require('assert');

describe('Kyu 7: Rotate for a Max', function () {

  function maxRot(n) {
    var rotated = [n];
    for(var i = 0, max = `${n}`.length; i < max; i++) {
      rotated.push(`${rotated[i]}`.slice(0, i) + `${rotated[i]}`.slice(1 + i) + (`${rotated[i]}`[i] || ''));
    }

    return Math.max(...rotated);
  }

  function testing(actual, expected) {
    assert.strictEqual(actual, expected)
  }

  it("Basic tests",function() { 
    testing(maxRot(38458215), 85821534);
    testing(maxRot(195881031), 988103115);
    testing(maxRot(896219342), 962193428);
    testing(maxRot(69418307), 94183076);

    testing(maxRot(503631047), 503631047);
  })

});
