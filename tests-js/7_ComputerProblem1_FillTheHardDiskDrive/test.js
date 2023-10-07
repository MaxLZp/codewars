var assert = require('assert');

describe('Kyu 7: Computer problem series #1: Fill the Hard Disk Drive', function () {
    function save(sizes, hd) {
      let count = 0;
      let sum = 0;
      while(sum <= hd) {
        sum += sizes[count++];
      }
      return count-1;
    };

    it("save([4, 4, 4, 3, 3], 12)", () => assert.strictEqual(save([4, 4, 4, 3, 3], 12), 3));
    it("save([4, 4, 4, 3, 3], 11)", () => assert.strictEqual(save([4, 4, 4, 3, 3], 11), 2));
    it("save([4, 8, 15, 16, 23, 42], 108)", () => assert.strictEqual(save([4, 8, 15, 16, 23, 42], 108), 6));
    it("save([13], 13)", () => assert.strictEqual(save([13], 13), 1));
    it("save([1, 2, 3, 4], 250)", () => assert.strictEqual(save([1, 2, 3, 4], 250), 4));
    it("save([100], 500)", () => assert.strictEqual(save([100], 500), 1));
    it("save([11, 13, 15, 17, 19], 8)", () => assert.strictEqual(save([11, 13, 15, 17, 19], 8), 0));
    it("save([45], 12)", () => assert.strictEqual(save([45], 12), 0));
});
