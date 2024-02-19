var assert = require('assert');

describe('Kyu 7: Sum of a sequence', function () {

  const sequenceSum = (begin, end, step) => {
    for (var index = begin, sum = 0; index <= end; index += step) {
      sum += index;
    }
    return sum;
  };

  it('Tests', () => {
    assert.strictEqual(sequenceSum(2, 6, 2), 12);
    assert.strictEqual(sequenceSum(1, 5, 1), 15);
    assert.strictEqual(sequenceSum(1, 5, 3), 5);
  })

});
