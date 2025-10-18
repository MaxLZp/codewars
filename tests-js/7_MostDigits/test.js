const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Most digits', function () {

  it("Solution 1.", function() {
    
    function findLongest(array){
      return array.reduce((c, e) => `${c}`.length < `${e}`.length ? e : c);
    }

    assert.equal(findLongest([1, 10, 100]), 100);
    assert.equal(findLongest([9000, 8, 800]), 9000);
    assert.equal(findLongest([8, 900, 500]), 900);
    
  });

});
