var assert = require('assert');

describe('Kyu 7: Graceful Tipping', function () {

  function gracefulTipping(bill) {
    var tipped = Math.ceil(bill * 1.15);
    if (tipped < 10) {
      return tipped;
    }

    var m =(5 * Math.pow(10, (`${tipped}`.length-2)));
    return m * Math.ceil(tipped / m) ;
  }

  it("given 1.09", function() {
    assert.equal(gracefulTipping(1.09), 2);
  });

  it("given 7", function() {
    assert.equal(gracefulTipping(7), 9);
  });

  it("given 11.99", function() {
    assert.equal(gracefulTipping(11.99), 15);
  });

  it("given 86", function() {
    assert.equal(gracefulTipping(86), 100);
  });

  it("given 99", function() {
    assert.equal(gracefulTipping(99), 150);
  });

});
