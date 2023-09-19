var assert = require('assert');

describe('Kyu 7: Ones and Zeros', function () {
  it('solution1', function () {
    const binaryArrayToNumber = arr => {
      return parseInt(arr.join(''), 2);
    };

    assert.equal(binaryArrayToNumber([0,0,0,1]), 1);
    assert.equal(binaryArrayToNumber([0,0,1,0]), 2);
    assert.equal(binaryArrayToNumber([1,1,1,1]), 15);
    assert.equal(binaryArrayToNumber([0,1,1,0]), 6);
  });

});
