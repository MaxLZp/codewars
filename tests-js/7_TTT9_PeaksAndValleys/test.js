const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: T.T.T. #9: Peaks and valleys', function () {

  function peakAndValley(arr){
    var result = [];
    for (let i = 3; i < arr.length - 3; i++) {
      var sb = arr.slice(i - 3, i);
      var sa = arr.slice(i + 1, i + 4);
      if (
        (sb.every(e => e < arr[i]) && sa.every(e => e < arr[i]))
        ||
        (sb.every(e => e > arr[i]) && sa.every(e => e > arr[i]))
      ) {
        result.push(arr[i]);
      }
    }

    return result;
  }

  it( "should return trigrams for the phrase", () => {
    assert.deepEqual(peakAndValley([10,20,30,40,30,20,10,11,12,13,14,15,16,15,14,13]),[40,10,16])
    assert.deepEqual(peakAndValley([50,84,49,47,80,87,87,53,76,30,10]),[47])
    assert.deepEqual(peakAndValley([45,94,41,76,29,96,28,13,84,69,25]),[96,13])
    assert.deepEqual(peakAndValley([1,16,63,78,53,78,42,39,46,88,49,96,58,82]),[39])
    assert.deepEqual(peakAndValley([45,75,47,44,93,95,31,99,49,48,76,2,92,23,26,19,60,45,51]),[31,99,2,92,19])
    assert.deepEqual(peakAndValley([49,97,76,56,96,88,65,20,14,93,32]),[])
  });

});
