var assert = require('assert');

describe('Kyu 7: Mind the Gap', function () {

  function countMissingCarriages(train) {
    return train.charCodeAt(train.length-1) - 'A'.charCodeAt(0) + 1 - train.length;
  }

  it("countMissingCarriages('ABC')", function() {
    assert.equal(countMissingCarriages('ABC') , 0, "should return 0");
  });

  it("countMissingCarriages('ABD')", function() {
    assert.equal(countMissingCarriages('ABD') , 1, "should return 1");
  });

  it("countMissingCarriages('BCF')", function() {
    assert.equal(countMissingCarriages('BCF') , 3, "should return 3");
  });

});
