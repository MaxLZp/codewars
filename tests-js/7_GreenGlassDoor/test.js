var assert = require('assert');

describe('Kyu 7: Green Glass Door', function () {

  function stepThroughWith(s) {
    return /([a-z])\1/i.test(s);
  }

  it("Basic tests",function() {
    assert.equal(stepThroughWith("moon"), true);
    assert.equal(stepThroughWith("test"), false);
    assert.equal(stepThroughWith("glasses"), true);
    assert.equal(stepThroughWith("airplane"), false);
    assert.equal(stepThroughWith("free"), true);
    assert.equal(stepThroughWith("branch"), false);
    assert.equal(stepThroughWith("aardvark"), true);
    assert.equal(stepThroughWith("anteater"), false);
  })

});
