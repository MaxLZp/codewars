const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Every nth array element. (Basic)', function () {

  function every(arr, interval = 1, start = 0){
    var result = [];
    for(var i = start; i < arr.length; i += interval) {
      result.push(arr[i]);
    }
    
    return result;
  }

  it("test", () => {
    assert.deepEqual(every([0,1,2,3,4]), [0,1,2,3,4])
    assert.deepEqual(every([0,1,2,3,4],1), [0,1,2,3,4])
    assert.deepEqual(every([0,1,2,3,4],2), [0,2,4])
    assert.deepEqual(every([0,1,2,3,4],3), [0,3])
    assert.deepEqual(every([0,1,2,3,4],3,1), [1,4])
  });

});
