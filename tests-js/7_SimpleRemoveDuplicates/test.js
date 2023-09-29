var assert = require('assert');

describe('Kyu 7: Simple remove duplicates', function () {

  it("Solution 1",function() {
    function solve(arr) {
      return Array.from(new Set(arr.reverse())).reverse();
    }

    assert.deepEqual(solve([3,4,4,3,6,3]),[4,6,3]);
    assert.deepEqual(solve([1,2,1,2,1,2,3]),[1,2,3]);
    assert.deepEqual(solve([1,2,3,4]),[1,2,3,4]);
    assert.deepEqual(solve([1,1,4,5,1,2,1]),[4,5,2,1]);
    assert.deepEqual(solve([1,2,1,2,1,1,3]),[2,1,3]);
  })

  it("Solution Other",function() {
    function solve(arr) {
      return arr.filter((el, index) => {return index == arr.lastIndexOf(el); });
    }

    assert.deepEqual(solve([3,4,4,3,6,3]),[4,6,3]);
    assert.deepEqual(solve([1,2,1,2,1,2,3]),[1,2,3]);
    assert.deepEqual(solve([1,2,3,4]),[1,2,3,4]);
    assert.deepEqual(solve([1,1,4,5,1,2,1]),[4,5,2,1]);
    assert.deepEqual(solve([1,2,1,2,1,1,3]),[2,1,3]);
  })

});
