var assert = require('assert');

describe('Kyu 7: Pairs of integers from 0 to n', function () {

  function generatePairs(n) {
    var result = [];
    for (let i = 0; i <= n; i++) {
      for (let j = i; j <= n; j++) {
        result.push([i,j]);
      }
    }

    return result;
  }

  it("Testing for fixed tests", () => {
    assert.deepEqual(generatePairs(2), [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]);
  });

});

