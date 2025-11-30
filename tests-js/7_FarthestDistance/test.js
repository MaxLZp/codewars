var assert = require('assert');

describe('Kyu 7: Farthest Distance', function () {

  function furthestDistance(arr){
    var result = 0;
    for(var i = 0; i < arr.length; i++) {
      for(var j = i+1; j < arr.length; j++) {
        result = Math.max(result, Math.sqrt((arr[i][0] - arr[j][0])**2 + (arr[i][1] -  arr[j][1])**2));
      }
    }

    return +result.toFixed(2);
  }

  it("test", () => {
    assert.equal(furthestDistance([[3,8],[10,4]]), 8.06 );
    assert.equal(furthestDistance([[1,1], [2,3], [5,5], [4,3], [3,3], [4,1], [2,2]]), 5.66);
    assert.equal(furthestDistance([[1,2], [3,8], [4,3]]), 6.32);
    assert.equal(furthestDistance([[33,33], [33,33], [33,33], [33,33], [33,33]]), 0);
  });

});
