var assert = require('assert');

describe('Kyu 7: lucky number', function () {

  it('solution1', function () {

    function isLucky(n) {
      return [...`${n}`].reduce((c, e) => (c + e), 0) % 9 == 0 ? true : false;
    }

    assert.equal(isLucky(1892376), true, "Wrong result for 1892376");
    assert.equal(isLucky(189237), false, "Wrong result for 189237");
    assert.equal(isLucky(1098), true, "Wrong result for 1098");
    assert.equal(isLucky(22869), true, "Wrong result for 22869");
    assert.equal(isLucky(0), true, "Wrong result for 0");

  });

});
