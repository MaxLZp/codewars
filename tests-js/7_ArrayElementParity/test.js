const assert = require("assert");

describe('Kyu 7: Array element parity', function () {

  /**
   * Someone else's solution
   * @param {int} arr
   * @returns int
   */
  function solve(arr){
    return arr.find(value => !arr.includes(-value));
  };

  // function solve(arr){
  //   var positive = 0;
  //   var negative = 0;
  //   var sum = 0;
  //   arr.forEach(e => {
  //     sum += e;
  //     if (e < 0) {
  //       negative ++;
  //     } else {
  //       positive++;
  //     }
  //   });

  //   return negative - positive == 0 ? sum : sum / Math.abs(negative - positive);
  // };

  it("Basic tests", () => {
    assert.strictEqual(solve([1,-1,2,-2,3]), 3);
    assert.strictEqual(solve([-3,1,2,3,-1,-4,-2]), -4);
    assert.strictEqual(solve([1,-1,2,-2,3,3]), 3);
    assert.strictEqual(solve([-110,110,-38,-38,-62,62,-38,-38,-38]), -38);
    assert.strictEqual(solve([-9,-105,-9,-9,-9,-9,105]), -9);
  });

});
