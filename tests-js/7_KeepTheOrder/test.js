var assert = require('assert');

describe('Kyu 7: Keep the Order', function () {

  it("Solution 1 Tests", () => {
    function keepOrder(ary, val) {
      var
        left = 0,
        middle = Math.ceil(ary.length / 2),
        right = ary.length - 1,
        result = left;

      if (ary.length == 0) return 0;
      if (ary.length == 1) {
        return val <= ary[0] ? 0 : 1;
      }

      if (val <= ary[middle]) {
        result = left + keepOrder(ary.slice(left, middle), val);
      } else {
        result = middle + keepOrder(ary.slice(middle, right+1), val);
      }

      return result;

    }

    assert.strictEqual(keepOrder([1, 2], 1), 0);
    assert.strictEqual(keepOrder([1, 2], 2), 1);
    assert.strictEqual(keepOrder([4, 7], 5), 1);
    assert.strictEqual(keepOrder([1, 2, 3, 4, 7], 5), 4);
    assert.strictEqual(keepOrder([1, 2, 3, 4, 7], 0), 0);
    assert.strictEqual(keepOrder([1, 1, 2, 2, 2], 2), 2);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 5), 4);
    assert.strictEqual(keepOrder([1, 2, 3, 4], -1), 0);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 2), 1);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 0), 0);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 1), 0);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 2), 1);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 3), 2);
    assert.strictEqual(keepOrder([-5, -4, -2, -1, 1, 2], -2), 2);
  });

  it("Solution 2(Basic) Tests", () => {
    function keepOrder(ary, val) {
      for (let index = 0; index < ary.length; index++) {
          if (val > ary[index]) { continue; }
          return index;
      }
      return ary.length;
    }

    assert.strictEqual(keepOrder([1, 2], 1), 0);
    assert.strictEqual(keepOrder([1, 2], 2), 1);
    assert.strictEqual(keepOrder([4, 7], 5), 1);
    assert.strictEqual(keepOrder([1, 2, 3, 4, 7], 5), 4);
    assert.strictEqual(keepOrder([1, 2, 3, 4, 7], 0), 0);
    assert.strictEqual(keepOrder([1, 1, 2, 2, 2], 2), 2);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 5), 4);
    assert.strictEqual(keepOrder([1, 2, 3, 4], -1), 0);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 2), 1);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 0), 0);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 1), 0);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 2), 1);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 3), 2);
    assert.strictEqual(keepOrder([-5, -4, -2, -1, 1, 2], -2), 2);
  });

  it("Solution Other Tests", () => {
    function keepOrder(ary, val) {
      return ary.filter(a => a < val).length;
    }

    assert.strictEqual(keepOrder([1, 2], 1), 0);
    assert.strictEqual(keepOrder([1, 2], 2), 1);
    assert.strictEqual(keepOrder([4, 7], 5), 1);
    assert.strictEqual(keepOrder([1, 2, 3, 4, 7], 5), 4);
    assert.strictEqual(keepOrder([1, 2, 3, 4, 7], 0), 0);
    assert.strictEqual(keepOrder([1, 1, 2, 2, 2], 2), 2);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 5), 4);
    assert.strictEqual(keepOrder([1, 2, 3, 4], -1), 0);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 2), 1);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 0), 0);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 1), 0);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 2), 1);
    assert.strictEqual(keepOrder([1, 2, 3, 4], 3), 2);
    assert.strictEqual(keepOrder([-5, -4, -2, -1, 1, 2], -2), 2);
  });

});
