const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Move Zeros', function () {

  function move_zeros(arrNum, isRight = true){
    var nonZeros = arrNum.filter(e => e != 0);
    var zeros = arrNum.length - nonZeros.length;
    
    return isRight ? [...nonZeros, ...new Array(zeros).fill(0)] : [...new Array(zeros).fill(0), ...nonZeros];
  }

  it("Solution 1. ", function() {
    assert.deepEqual( move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], true), [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);
    assert.deepEqual( move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], false), [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]);
    assert.deepEqual( move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0]), [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);    
  });


});
