const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Stanton measure', function () {

  function stantonMeasure(a){
    return a.filter(e => e == a.filter(e1 => 1 == e1).length).length;
  }

  it("Sample Test", () => {
    assert.deepEqual(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]),3);
  });

});
