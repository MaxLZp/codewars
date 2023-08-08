var assert = require('chai').assert;

describe('Kyu 7: Three sticks', function () {

  function maxlen(l1, l2) {
    let max = Math.max(l1, l2);
    let min = Math.min(l1, l2);
    if (max >= min * 3) { return max / 3; }
    if (max >= min * 2) { return min; }
    return max / 2;
  }

  it('solution1', function () {
    assert.closeTo(maxlen(5, 12), 5, 1e-9, '(5, 12)');
    assert.closeTo(maxlen(12, 5), 5, 1e-9, '(12, 5)');
    assert.closeTo(maxlen(5, 17), 5.666666666666667, 1e-9, '(5, 17)');
    assert.closeTo(maxlen(60.482071517537406, 15.18407183522219), 5, 20.160690505845803, '(60., 15.)');
  });

});
