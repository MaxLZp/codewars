var assert = require('assert');

describe('Kyu 7: Simple Fun #137: S2N', function () {

  function S2N(m, n) {
    var sum = 0;
    for (let num = 0; num <= m; num++) {
      for (let pow = 0; pow <= n; pow++) {
        sum += num**pow;
      }
    }

    return sum;
  }

  it("Fixed Tests", () => {
    assert.equal(S2N(2,3),20)
    assert.equal(S2N(3,5),434)
    assert.equal(S2N(10,9),1762344782)
    assert.equal(S2N(1,1),3)
    assert.equal(S2N(0,0),1)
    assert.equal(S2N(300,2),9090501)
    assert.equal(S2N(567,2),61083856)
    assert.equal(S2N(37,4),15335280)
    assert.equal(S2N(36,4),13409059)
  });

});
