var assert = require('assert');

describe('Kyu 8: Find Multiples of a Number ', function () {

  it('solution1', function () {

    assert.deepEqual(findMultiples(5, 25), [5, 10, 15, 20, 25])
    assert.deepEqual(findMultiples(1, 2), [1, 2])
    assert.deepEqual(findMultiples(5, 7), [5])
    assert.deepEqual(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
    assert.deepEqual(findMultiples(11, 54), [11, 22, 33, 44])

    function findMultiples(integer, limit) {
      var result = [];
      for (let i = 1; ; i++) {
        let mult = i * integer;
        if (mult > limit) {
          break;
        }
        result.push(mult);
      }
      return result;
    }
  });

  it('solution2', function () {

    assert.deepEqual(findMultiples(5, 25), [5, 10, 15, 20, 25])
    assert.deepEqual(findMultiples(1, 2), [1, 2])
    assert.deepEqual(findMultiples(5, 7), [5])
    assert.deepEqual(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
    assert.deepEqual(findMultiples(11, 54), [11, 22, 33, 44])

    function findMultiples(integer, limit) {
      var result = [];
      for (let i = integer; i<=limit ; i+=integer) {
        result.push(i);
      }
      return result;
    }
  });
});
