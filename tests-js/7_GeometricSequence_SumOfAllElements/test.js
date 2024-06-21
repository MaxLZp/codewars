var assert = require('assert');

describe('Kyu 7: Geometric sequence - sum of all elements', function () {

  it("solution 1", function() {

    function GeometricSequenceSum(a, r, n) {
      return r === 1
        ? a * n
        : a * (1 - Math.pow(r, n)) / (1 - r);
    }

    assert.equal(GeometricSequenceSum(2, 3, 5), 242);
    assert.equal(GeometricSequenceSum(1, 1, 2), 2);
    assert.equal(GeometricSequenceSum(2, 2, 10), 2046);
    assert.equal(GeometricSequenceSum(1, -2, 10), -341);
    assert.equal(GeometricSequenceSum(1, 0.5, 10), 1.998046875);

    assert.equal(GeometricSequenceSum(3, 1, 12), 36);

  });

  it("solution 2", function() {

    function GeometricSequenceSum(a, r, n) {
      var sum = a;
      for (let i = 1, cur = a; i < n; i++) {
        cur *= r;
        sum += cur;
      }

      return sum;
    }

    assert.equal(GeometricSequenceSum(2, 3, 5), 242);
    assert.equal(GeometricSequenceSum(1, 1, 2), 2);
    assert.equal(GeometricSequenceSum(2, 2, 10), 2046);
    assert.equal(GeometricSequenceSum(1, -2, 10), -341);
    assert.equal(GeometricSequenceSum(1, 0.5, 10), 1.998046875);

    assert.equal(GeometricSequenceSum(3, 1, 12), 36);

  });

});
