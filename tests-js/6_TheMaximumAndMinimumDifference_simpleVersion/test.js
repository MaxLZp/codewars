var assert = require('assert');

describe('Kyu 6: The maximum and minimum difference -- Simple version', function () {

  function maxAndMin(arr1,arr2){

    let min = Math.max(...arr1) > Math.max(...arr2) ? Math.max(...arr1) : Math.max(...arr2);
    let max = 0;
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        let diff = Math.abs(arr2[j] - arr1[i]);
        if (min > diff) { min = diff; }
        if (max < diff) { max = diff; }

      }

    }

    return [max, min];
  }

  it("Tests", function() {
    assert.deepEqual(maxAndMin([3,10,5],[20,7,15,8]) , [17,2])
    assert.deepEqual(maxAndMin([3],[20]) , [17,17])
    assert.deepEqual(maxAndMin([3,10,5],[3,10,5]) , [7,0])
    assert.deepEqual(maxAndMin([1,2,3,4,5],[6,7,8,9,10]) , [9,1])
  });

});
