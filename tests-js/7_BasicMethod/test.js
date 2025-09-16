const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
chai.config.truncateThreshold=0;

describe('Kyu 7: Basic method', function () {

  Array.prototype.max = function() {
    return Math.max(...this);
    // return this.some(e => isNaN(e)) ? NaN : Math.max(...this);
  }

  it("tests", () => {
    assert.equal([2,5,1,3].max(), 5);
    assert.equal([1,2,3,8,4,9,7,42,99].max(), 99);
    assert.equal([2,'5',1,3].max(), 5);
    assert.isNaN([2,5,1,'ab'].max());
  });

});
