const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe('Kyu 7: Return the Missing Element', function () {

  function getMissingElement(superImportantArray){
    return 9 * 10 / 2 - superImportantArray.reduce((c,e) => c + e, 0);
  }

  it("test", () => {
    assert.equal(getMissingElement( [0,5,1,3,2,9,7,6,4]), 8);
    assert.equal(getMissingElement( [9,2,4,5,7,0,8,6,1]), 3);
  });

});
