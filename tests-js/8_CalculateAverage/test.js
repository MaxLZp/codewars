var assert = require('assert');

describe('Kyu 8: Calculate average ', function () {
  it('solution1', function () {

    assert.equal(findAverage([1,1,1]), 1);
    assert.equal(findAverage([1,2,3]), 2);
    assert.equal(findAverage([1,2,3,4]), 2.5);

    function findAverage(array) {
      return array.reduce((elem, accumulator) => {return accumulator += elem}, 0) / (array.length || 1);
    }
  });
});
