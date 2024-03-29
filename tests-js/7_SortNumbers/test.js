var assert = require('assert');

describe('Kyu 7: Sort Numbers', function () {
  it('solution1', function () {

    assert.deepEqual(solution([1,2,3,10,5]), [1,2,3,5,10])
    assert.deepEqual(solution(null), [])
    assert.deepEqual(solution([]), [])
    assert.deepEqual(solution([20, 2, 10]), [2,10,20])
    assert.deepEqual(solution([2, 20, 10]), [2,10,20])

    function solution(nums){
      if (!nums) {return [];}
      return nums.sort((l, r) => { return l - r; });
    }
  });

});
