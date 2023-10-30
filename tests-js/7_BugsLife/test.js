var assert = require('assert');
var chai = require('chai');

describe('Kyu 7: Bugs Life', function () {

  function shortestDistance(a, b, c) {
    return Math.min(...[
      a + b + c,
      Math.sqrt(c*c + a*a) + b,
      Math.sqrt(c*c + a*a/4) + Math.sqrt(b*b + a*a/4),
      Math.sqrt(c*c + b*b/4) + Math.sqrt(a*a + b*b/4),
      Math.sqrt((a+c)*(a+c) + b*b),
      Math.sqrt((b+c)*(b+c) + a*a),
      Math.sqrt((a+b)*(a+b) + c*c),
    ]);
  }


  it("test", () => {
    chai.assert.approximately(shortestDistance(1, 2, 3), 4.242640687119285, 0.000001);
    chai.assert.approximately(shortestDistance(1, 1, 1), 2.23606797749979, 0.000001);
    chai.assert.approximately(shortestDistance(134, 191.5, 45.5), 262.47380821712477, 0.000001);
  });

});
