var assert = require('assert');

describe('Kyu 8: Square(n) Sum', function () {

  it('solution1', function () {

    assert.equal(squareSum([1,2]), 5);
    assert.equal(squareSum([0, 3, 4, 5]), 50);
    assert.equal(squareSum([]), 0);

    function squareSum(numbers) {
      return numbers.reduce((accumulator, number) => {
        return accumulator + Math.pow(number, 2);
      }, 0);
    }

  });

});
