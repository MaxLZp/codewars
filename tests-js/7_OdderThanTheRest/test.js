var assert = require('assert');

describe('Kyu 7: Odder Than the Rest', function () {

  function oddOne(arr) {
    return arr.findIndex(x => x % 2 != 0);
  }
  // Mine
  // function oddOne(arr) {
  //   for(var i = 0; i < arr.length; i++) {
  //     if (Math.abs(arr[i]) % 2 == 1) { return i; }
  //   }
  //   return -1;
  // }

  assert.equal(oddOne([2,4,6,7,10]), 3);
  assert.equal(oddOne([2,16,98,10,13,78]), 4);
  assert.equal(oddOne([4,-8,98,-12,-7,90,100]), 4);
  assert.equal(oddOne([2,4,6,8]), -1);

});
