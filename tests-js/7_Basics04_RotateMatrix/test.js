const chai = require('chai'), { deepEqual } = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Basics 04: Rotate Matrix', function () {

  function rotateMatrix(matrix) {
    var result = (new Array(matrix[0].length))
      .fill([])
      .map((v) => (new Array(matrix.length))
      .fill(0));
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        result[j][i] = matrix[i][matrix[i].length - j - 1];
      }
    }
    return result;
  }

  function doTest(input, expected) {
      const message = `for ${JSON.stringify(input)}\n\n`;
      const actual = rotateMatrix(input);
      deepEqual(actual, expected, message);
  }

  it("Sample Tests", function() {
      doTest([
          [-1, 4, 5],
          [2, 3, 4]
      ],[
          [5, 4],
          [4, 3],
          [-1, 2]
      ]);
  });

});

describe('Kyu 7: Basics 04: Rotate Matrix. Solution 2 - other.', function () {

  function rotateMatrix(arr) {
    let rev = arr.map(e => e.reverse());
    return rev[0].map((e,i) => rev.map(c => c[i]));
  }

  function doTest(input, expected) {
      const message = `for ${JSON.stringify(input)}\n\n`;
      const actual = rotateMatrix(input);
      deepEqual(actual, expected, message);
  }

  it("Sample Tests", function() {
      doTest([
          [-1, 4, 5],
          [2, 3, 4]
      ],[
          [5, 4],
          [4, 3],
          [-1, 2]
      ]);
  });

});
