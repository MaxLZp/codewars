const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Boolean logic from scratch', function () {

  // const or = (a, b) => {
  //   return ((a ? 1 : 0) + (b ? 1 : 0)) != 0;
  // };

  const or = (a, b) => {
    return a ? true : !!b;
  };

  // const xor = (a, b) => {
  //   return ((a ? 1 : 0) + (b ? 1 : 0)) % 2 != 0;
  // };

  const xor = (a, b) => {
    return a ? !b : !!b;
  };

  it("Tests", function() {
    assert.equal(or(true, true), true || true);
    assert.equal(or(true, false), true || false);
    assert.equal(or(false, true), false || true);
    assert.equal(or(false, false), false || false);

    assert.equal(xor(true, true), true ^ true);
    assert.equal(xor(true, false), true ^ false);
    assert.equal(xor(false, true), false ^ true);
    assert.equal(xor(false, false), false ^ false);
  });

});
