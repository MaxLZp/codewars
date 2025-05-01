var assert = require('assert');

describe('Kyu 7: From..To..Series #6: from 1 to arr.length-2. Find the balance points in the array', function () {

  function findBalance(arr){
    var right = arr.reduce((c,e) => c + e, 0) - arr[0] - arr[1];
    var left = arr[0];
    var result = [];
    for (let i = 1; i < arr.length - 1; i++) {
      if (Math.round(left / i) == Math.round(right / (arr.length - 1 - i))) {
        result.push(i);
      }
      left += arr[i];
      right -= arr[i+1];
    }

    return result;
  }

  it('solution1', function () {
    assert.deepEqual(findBalance([1,2,1]) , [1])
    assert.deepEqual(findBalance([1,2,3]) , [])
    assert.deepEqual(findBalance([1,2,3,2,1]) , [2])
    assert.deepEqual(findBalance([1,1,1,1,1]) , [1,2,3])
    assert.deepEqual(findBalance([1,1,2,1,1]) , [1,2,3])
    assert.deepEqual(findBalance([1,1,3,1,1]) , [2])
  })

});
