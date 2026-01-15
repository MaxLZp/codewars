var assert = require('assert');

describe('Kyu 7: I guess this is a 7kyu kata #4: Find 0 and 1', function () {

  function find01(arr){
    var result = 0;
    for(var i = 1; i < arr.length - 1; i++) {
      for(var j = 1; j < arr[i].length - 1; j++) {
        var sum = arr[i - 1][j] + arr[i][j + 1] + arr[i + 1][j] + arr[i][j - 1];
        result += (arr[i][j] == 1 && sum == 0) ? 1 : 0;
        result += (arr[i][j] == 0 && sum == 4) ? 1 : 0;
      }
    }

    return result;
  }

  it('Tests', function() {
    var arr=[
      [0,1,1,0,1,1,0,1,0],
      [1,0,1,0,1,1,0,1,0],
      [0,1,1,0,0,1,0,1,0],
      [0,0,1,0,1,0,1,1,0],
      [0,0,1,0,0,1,0,1,0],
      [0,0,1,0,1,0,0,1,0],
      [0,0,1,0,0,1,0,1,0]]
      assert.equal(find01(arr) ,5)
      
      arr = [
      [1,1,1,0,1,1,0],
      [0,1,1,0,0,1,0],
      [1,1,1,0,1,1,0],
      [0,1,1,0,0,1,0],
      [1,0,0,1,0,1,1],
      [1,0,1,1,0,0,0]] 
      assert.equal(find01(arr) ,0)
      
      arr = [
      [1,0,1,0,1,0,1],
      [0,1,0,1,0,1,0],
      [1,0,1,0,1,0,1],
      [0,1,0,1,0,1,0],
      [1,0,1,0,1,0,1],
      [0,1,0,1,0,1,0]] 
      assert.equal(find01(arr) ,20)
  });

});
