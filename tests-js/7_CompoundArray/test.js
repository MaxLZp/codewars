const {assert} = require('chai');

describe('Kyu 7: Complete Series', function () {

  function compoundArray(a, b) {
    var result = [];
    var min = Math.min(a.length, b.length);
    for (let i = 0; i < min; i++) {
      result.push(a[i], b[i]);
    }
    result.push(...a.slice(min), ...b.slice(min));

    return result;
  }

  it("Test 1", function() {
    assert.deepEqual(compoundArray([11, 12], [21, 22, 23, 24]), [11, 21, 12, 22, 23, 24]);
    assert.deepEqual(compoundArray([2147483647,2147483646,2147483645,2147483644,2147483643], [9]), [2147483647,9,2147483646,2147483645,2147483644,2147483643]);
    assert.deepEqual(compoundArray([214,215,216,217,218], []), [214,215,216,217,218]);
    assert.deepEqual(compoundArray([], [314,315,316,317,318]), [314,315,316,317,318]);
  });

});
