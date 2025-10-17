var assert = require('assert');

describe('Kyu 7: Diagonals sum', function () {

  function sum(matrix) {
    var sum = 0;
    for(var i = 0; i < matrix.length; i++) {
      sum += matrix[i][i];
      sum += matrix[i][matrix.length - i - 1];
    }
    
    return sum;
  }

  it('0x0 test', function () {
    assert.strictEqual(sum([]), 0);
  });
  it('1x1 test', function () {
    assert.strictEqual(sum([[4]]), 8);
  });
  it('2x2 test', function () {
    assert.strictEqual(sum([[1,2], [3,4]]), 1 + 2 + 3 + 4);
  });
  it('3x3 test', function () {
    assert.strictEqual(sum([[1,2,3], [4,5,6], [7,8,9]]), 1 + 5 + 9 + 3 + 5 + 7);
  });
  it('4x4 test', function () {
    assert.strictEqual(sum([[-2,5,3,2],[9,-6,5,1],[3,2,7,3],[-1,8,-4,8]]), -2 -6 + 7 + 8 + 2 +5 + 2 -1);
  });

});
