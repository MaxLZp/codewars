const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: 99 Problems, #1: last in list', function () {

  const last = xs => xs.length ? xs[xs.length-1] : null ;

  it("should work with non-empty lists", function(){
    assert.equal( last([1,2,3]), 3, "last([1,2,3]) == 3");
  });

  it("should work with empty lists", function(){
    assert.equal( last([]), null, "last( [] ) == null");
  });

});
