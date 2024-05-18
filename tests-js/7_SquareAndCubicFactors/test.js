const {assert,config} = require("chai");
config.truncateThreshold = 0;

describe('Kyu 7: Square and Cubic Factors', function () {

  function factors(n) {
    var result = [[], []];
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % Math.pow(i, 2) === 0) { result[0].push(i); }
      if (n % Math.pow(i, 3) === 0) { result[1].push(i); }
    }
    return result;
  }

  it("Description cases", function() {
    assert.deepEqual( factors(1), [[], []], `factors(1)` );
    assert.deepEqual( factors(4), [[2], []], `factors(4)` );
    assert.deepEqual( factors(16), [[2, 4], [2]], `factors(16)` );
    assert.deepEqual( factors(81), [[3, 9], [3]], `factors(81)` );
  })
  it("More cases", function() {
    assert.deepEqual( factors(80), [[2, 4], [2]], `factors(80)` );
    assert.deepEqual( factors(100),[[2, 5, 10], []], `factors(100)` );
    assert.deepEqual( factors(5), [[], []], `factors(5)` );
    assert.deepEqual( factors(120), [[2], [2]], `factors(120)` );
    assert.deepEqual( factors(18), [[3], []], `factors(18)` );
    assert.deepEqual( factors(8), [[2], [2]], `factors(8)` );
  });

});

