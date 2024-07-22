var assert = require('assert');

describe('Kyu 7: Extending JavaScript Objects: Simple Math Methods', function () {

  it('solution1', function () {

    Number.prototype.add = function (n) { return this + n; }
    Number.prototype.sub = function (n) { return this - n; }
    Number.prototype.mul = function (n) { return this * n; }
    Number.prototype.div = function (n) { return this / n; }
    Number.prototype.pow = function (n) { return this ** n; }
    Number.prototype.sqr = function () { return this ** 0.5; }

    var n = 25;
    assert.equal(n.add(4), 29);
    assert.equal(n.sub(3), 22);
    assert.equal(n.mul(2), 50);
    assert.equal(n.div(5), 5);
    assert.equal(n.pow(2), 625);
    assert.equal(n.sqr(), 5);
    assert.equal(n.add(5).div(2).mul(3).sub(35).pow(2).sqr(), 10);
  });

});
