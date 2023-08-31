var assert = require('assert');

describe('Kyu 7: Thinkful - List and Loop Drills: Inverse Slicer', function () {

  function inverseSlice(items, a, b) {
    items.splice(a, b-a);
    return items;
  }

  describe("Testing", function(){
    it("Basic tests", function(){
      assert.deepEqual(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4), [12, 14, 55, 24]);
      assert.deepEqual(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3), [72, 55, 24]);
      assert.deepEqual(inverseSlice(['Intuition', 'is', 'a', 'poor', 'guide', 'when', 'facing', 'probabilistic', 'evidence'], 5, 13), ['Intuition', 'is', 'a', 'poor', 'guide']);
    });
  });

});
