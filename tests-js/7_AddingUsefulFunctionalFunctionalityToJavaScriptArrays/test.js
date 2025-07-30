const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Adding useful functional functionality to JavaScript arrays', function () {

  Array.range = function(start, count) {
    // return [...new Array(count)].map((v, i) => i + start);
    // or
    return Array.from({length: count}, ((v, i) => i + start));
  }
  
  Array.prototype.sum = function() {
    return this.reduce((c, e) => c + e, 0);
  }

  describe("Array.range", () => {
    it("Array's first value should begin with start", () => {
      assert.deepEqual(Array.range(1,3), [1,2,3])
    })
    it("Should work for negative starts", () => {
      assert.deepEqual(Array.range(-1,1), [-1])
      assert.deepEqual(Array.range(-3,5), [-3,-2,-1,0,1])
    })
    it("Should return empty array for zero counts", () => {
      assert.deepEqual(Array.range(0,0), [])
      assert.deepEqual(Array.range(1,0), [])
    })
  })

  describe("Array.prototype.sum", () => {
    it("Empty array should sum to 0", () => {
      assert.strictEqual([].sum(), 0)
    })
    it("Should be able to add negative numbers", () => {
      assert.strictEqual([-2,-1,-5].sum(), -8)
    })
    it("Should be able to add all numbers in the array", () => {
      assert.strictEqual([-3,-2,-1,0,1,2,3].sum(), 0)
    })
  })

});
