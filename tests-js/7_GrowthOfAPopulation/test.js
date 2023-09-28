var assert = require('assert');

describe('Kyu 7: Growth of a Population', function () {

  function nbYear(p0, percent, aug, p) {
    let y = 0;
    while(p > p0) {
      p0 += Math.floor(p0*(percent/100)) + aug;
      ++y;
    }
    return y;
  }

  it("Basic tests",function() {
    assert.equal(nbYear(1000, 2, 50, 1200), 3);
    assert.equal(nbYear(1500, 5, 100, 5000), 15);
    assert.equal(nbYear(1500000, 2.5, 10000, 2000000), 10);
    assert.equal(nbYear(1500000, 0.25, 1000, 2000000), 94);
  })

});
