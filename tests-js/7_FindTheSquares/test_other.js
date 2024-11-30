var assert = require('assert');

describe('Kyu 7: Find the Squares', function () {

  const findSquares = num => {
    let max = Math.ceil(num / 2);
    let min = num - max;
    return `${max*max}-${min*min}`;
  };

  it("should work for small numbers", function() {
    assert.strictEqual(findSquares(9), '25-16');
    assert.strictEqual(findSquares(5), '9-4');
  });

  it("should work for bigger numbers", function() {
    assert.strictEqual(findSquares(81), '1681-1600');
    assert.strictEqual(findSquares(25), '169-144');
  });

});
