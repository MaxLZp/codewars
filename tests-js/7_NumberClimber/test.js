var assert = require('assert');

describe('Kyu 7: Number climber', function () {

  /**
   * THe solution violates "resorting or prepending" reqeuirement
  */
  function climbRev(n){
    let i = n;
    const seq = [];
    while (i >= 1) {
      seq.unshift( i );
      i = Math.floor(i/2); //i = i >> 1;
    }
    return seq;
  }

  it("Should handle manual tests", function () {
    assert.deepEqual(climbRev(1), [1]);
    assert.deepEqual(climbRev(10), [1, 2, 5, 10]);
    assert.deepEqual(climbRev(13), [1, 3, 6, 13]);
  });

});
