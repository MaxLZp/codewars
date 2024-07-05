const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: A === B', function () {

  function d01(a,b){
    return !(a^b);
  }

  it("tests",function() {
    assert.strictEqual(d01(1,1), true, "Equal ");
    assert.strictEqual(d01(2,1), false, "Not equal ");
  })

});
