const {assert} = require("chai");

describe('Kyu 7: Coding 3min : A*B=C', function () {

  function findAB(numbers,c) {
    for (let i = 0; i < numbers.length; i++) {
      if (c % numbers[i] == 0 || (c == 0 && numbers[i] == 0)) {
        var k = c/numbers[i];
        if (isNaN(k)) { return [numbers[i], numbers[i + 1]]; }
        var j = numbers.indexOf(k, i + 1);
        if (j >= i) {
          return [numbers[i], numbers[j]]
        }
      }
      
    }

    return null;
  }

  it("Should pass sample tests", () => {
    assert.deepEqual(findAB([1,2,3], 3), [1,3]);
    assert.deepEqual(findAB([1,2,3], 6), [2,3]);
    assert.deepEqual(findAB([1,2,3], 7), null);
    assert.deepEqual(findAB([1,2,3,6], 6), [1,6]);
    assert.deepEqual(findAB([1,2,3,4,5,6], 15), [3,5]);
    assert.deepEqual(findAB([0,0,2], 4), null);
    assert.deepEqual(findAB([0,0,2,2], 4), [2,2]);
    assert.deepEqual(findAB([-3,-2,-2,-1,0,1,2,3,4], 4), [-2,-2]);
    assert.deepEqual(findAB([-3,-2,-2,-1,0,1,2,3,4], 0), [-3,0]);
    assert.deepEqual(findAB([-3,-2,-1,0,1,2,3,4], 4), [1,4]);
    assert.deepEqual(findAB([0,1,2,3], 0), [0,1]);
    assert.deepEqual(findAB([0,0,2,3], 0), [0,0]);
  });

});
