const chai = require('chai'), { assert } = chai;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Simple Fun #60: Swap Diagonals', function () {

  function swapDiagonals(matrix) {
    var result = [];
    for (let i = 0; i < matrix.length; i++) {
      result.push([...matrix[i]]);
      var t = result[i][i];
      result[i][i] = result[i][result[i].length - 1 - i];
      result[i][result[i].length - 1 - i] = t;
    }
    return result;
  }

  it("Fixed Tests", () => {
    doTest([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[3, 2, 1], [4, 5, 6], [9, 8, 7]]);
    doTest([[239]], [[239]]);
    doTest([[1, 10], [100, 1000]], [[10, 1], [1000, 100]]);
    doTest([[43, 455, 32, 103], [102, 988, 298, 981], [309, 21, 53, 64], [2, 22, 35, 291]], [[103, 455, 32, 43], [102, 298, 988, 981], [309, 53, 21, 64], [291, 22, 35, 2]]);
  });

  function doTest(input, expected) {
    const message = `for matrix = [\n${input.map(row => JSON.stringify(row)).join(',\n')}\n]\n`;
    const actual = swapDiagonals(input);
    assert.deepEqual(actual, expected, message);
  }

});
