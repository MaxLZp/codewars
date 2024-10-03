var assert = require('assert');

describe('Kyu 7: Find the sum of the roots of a quadratic equation', function () {

  it('solution1', function () {

    function roots(a,b,c) {
      const d = b * b - 4 * a * c;
      if (d < 0) {
        return null;
      }

      const root1 = (-b + Math.sqrt(d)) / (2 * a);
      const root2 = (-b - Math.sqrt(d)) / (2 * a);

      return Math.round(100 * (root1 + root2)) / 100;

      // MaxL: Might work as well but has rounding issues
      // return +(-b/a).toFixed(2);
    }

    assert.equal(roots(1,-35,-23),35);
    assert.equal(roots(6,0,-24),0);
    assert.equal(roots(-5,21,0),4.2);
    assert.equal(roots(6,4,8),null);
    assert.equal(roots(1,5,-24),-5);
    assert.equal(roots(3,11,6),-3.67);
    assert.equal(roots(2,2,9),null);
    assert.equal(roots(1,-5/3.0,-26),1.67);
    assert.equal(roots(1,6,10),null);
    assert.equal(roots(7,-2,-5),0.29);
    assert.equal(roots(1,8,20),null);
    assert.equal(roots(2,3,-2),-1.5);
    assert.equal(roots(1,4,12),null);
    assert.equal(roots(3,-2,-5),0.67);
    assert.equal(roots(3,4,9),null);
    assert.equal(roots(5,4,0),-0.8);
    assert.equal(roots(4,-5,0),1.25);
    assert.equal(roots(1,4,9),null);
    assert.equal(roots(1,0,-49),0);
    assert.equal(roots(2,8,8),-4);
    assert.equal(roots(1,0,-0.16),0);
    assert.equal(roots(1,6,12),null);
    assert.equal(roots(1,0,-9),0);
    assert.equal(roots(-3,0,12),0);
    assert.equal(roots(1,3,9),null);
    assert.equal(roots(3,7,0),-2.33);
    assert.equal(roots(5,3,6),null);
    assert.equal(roots(1,4,4),-4);
    assert.equal(roots(-1,0,5.29),0);
    assert.equal(roots(1,12,36),-12);
    assert.equal(roots(1,0,-0.09),0);
    assert.equal(roots(2,5,11),null);
    assert.equal(roots(3,0,-15),0);
    assert.equal(roots(1,-3,0),3);
    assert.equal(roots(1,8,16),-8);
    assert.equal(roots(2,6,9),null);
    assert.equal(roots(-1,36,0),36);
    assert.equal(roots(5,-8,0),1.6);
    assert.equal(roots(1,5,12),null);
    assert.equal(roots(-14,0,0),0);
    assert.equal(roots(1,7,20),null);
    assert.equal(roots(1,-6,0),6);
    assert.equal(roots(1,-11,30),11);
    assert.equal(roots(1,3,12),null);
    assert.equal(roots(1,6,9),-6);

    assert.equal(roots(8, 41, 1), -5.12);

  });

});
