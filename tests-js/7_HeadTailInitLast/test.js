const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Head, Tail, Init and Last', function () {

  it('solution1', function () {

    function head(arr) {
      return arr[0];
    }

    function tail(arr) {
      return arr.slice(1);
    }

    function init(arr) {
      // return arr.slice(0, arr.length - 1);
      return arr.slice(0, -1);
    }

    function last(arr) {
      return arr[arr.length - 1]
    }


    assert.strictEqual(head([5,1]), 5);
    assert.deepEqual(tail([1]), []);
    assert.deepEqual(init([1,5,7,9]), [1,5,7]);
    assert.strictEqual(last([7,2]), 2);
  });

});
