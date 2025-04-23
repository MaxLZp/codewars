const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Tricky Doubles', function () {

  function trickyDoubles(n){
    return /^(\d+)\1$/.test(n) ? n : 2*n;
   }

  it("2 is not a tricky double", () => {
    assert.strictEqual(trickyDoubles(2), 4, "Incorrect answer for n = 2");
  });

  it("4 is not a tricky double", () => {
      assert.strictEqual(trickyDoubles(4), 8, "Incorrect answer for n = 4");
  });

  it("100100 is a tricky double", () => {
      assert.strictEqual(trickyDoubles(100100), 100100, "Incorrect answer for n = 100100");
  });

  it("4343 is a tricky double", () => {
      assert.strictEqual(trickyDoubles(4343), 4343, "Incorrect answer for n = 4343");
  });

  it("1234 is not a tricky double", () => {
      assert.strictEqual(trickyDoubles(1234), 2468, "Incorrect answer for n = 2468");
  });

  it("100 is not a tricky double", () => {
      assert.strictEqual(trickyDoubles(100), 200, "Incorrect answer for n = 100");
  });

});
