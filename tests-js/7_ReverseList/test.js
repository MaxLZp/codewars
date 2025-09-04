var assert = require('assert');

describe('Kyu 7: Reverse list', function () {

  function reverseList(arr) {
    var res = [];
    for(var i = arr.length - 1; i >= 0; i--) {
      res.push(arr[i]);
    }
    return res;
  }

  it("Sample tests", function() {
    assert.deepEqual(reverseList([]), []);
    assert.deepEqual(reverseList([1,2,3]), [3,2,1]);
  });

});
