var assert = require('assert');

describe('Kyu 7: Simple Fun #204: Smallest Integer', function () {


  it("It should works for basic tests.", function(){

    function smallestInteger(matrix) {
      const arr = [].concat(...matrix).sort();
      for (let index = 0; index < 100; index++) {
        if (!arr.includes(index)) {
          return index;
        }
      }
      return -1;
    }

    assert.equal(smallestInteger([
     [0,2],
     [5,1]]),3)

    assert.equal(smallestInteger([
     [4,5,3,21,3,8],
     [2,2,6,5,10,9],
     [7,5,6,8,2,6],
     [1,4,7,8,9,0],
     [1,3,6,5,5,1],
     [2,7,3,4,4,3]]),11)

    assert.equal(smallestInteger([
     [4,5,3,-4,3,8],
     [2,0,6,5,4,9],
     [7,5,6,8,2,6],
     [1,4,7,8,9,11],
     [1,3,10,5,5,1],
     [12,7,3,4,4,3]]),13)

    assert.equal(smallestInteger([
     [1,2],
     [3,4]]),0)

    assert.equal(smallestInteger([
     [0,1],
     [2,3]]),4)

    assert.equal(smallestInteger([[4,5,13,0,3],
     [2,6,5,10,9],
     [7,5,-6,8,6],
     [1,4,7,8,9],
     [2,3,4,44,3]]),11)

    assert.equal(smallestInteger([
    [-1,100,-1,100],
    [100,-1,100,-1],
    [-1,100,-1,100],
    [100,-1,100,-1]]),0)

    assert.equal(smallestInteger([
    [-1,-1],
    [-1,-1]]),0)

    })

});
