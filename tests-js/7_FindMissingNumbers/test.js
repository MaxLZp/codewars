const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Find missing numbers', function () {

  it("Solution 1", () => {

    function findMissingNumbers(arr){
      var result = [];
      for(let i = 0; i < arr.length - 1; i++) {
        for(let j = arr[i] + 1; j < arr[i+1]; j++) {
          result.push(j);
        }
      }

      return result;
    }

    assert.deepEqual(findMissingNumbers([-3,-2,1,4]), [-1,0,2,3]);
    assert.deepEqual(findMissingNumbers([-1,0,1,2,3,4]), []);
    assert.deepEqual(findMissingNumbers([]), []);
  })

});
