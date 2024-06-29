const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Check if a triangle is an equable triangle!', function () {

  function equableTriangle(a,b,c) {
    const p = a + b + c;
    const p2 = p/2;
    const s = Math.sqrt(p2 * (p2 - a) * (p2 - b) * (p2 - c));

    return p == s;
  }

  it('solution1', function () {

    assert.equal(equableTriangle(5,12,13),true);
    assert.equal(equableTriangle(2,3,4),false);
    assert.equal(equableTriangle(6,8,10),true);
    assert.equal(equableTriangle(7,15,20),true);
    assert.equal(equableTriangle(17,17,30),false);
    assert.equal(equableTriangle(7,10,12),false);
    assert.equal(equableTriangle(6,11,12),false)
    assert.equal(equableTriangle(25,25,45),false);
    assert.equal(equableTriangle(13,37,30),false);
    assert.equal(equableTriangle(6,25,29),true);
    assert.equal(equableTriangle(10,11,18),false);
    assert.equal(equableTriangle(73,9,80),false);
    assert.equal(equableTriangle(12,35,37),false);
    assert.equal(equableTriangle(120,109,13),false);
    assert.equal(equableTriangle(9,10,17),true);
  });

});
