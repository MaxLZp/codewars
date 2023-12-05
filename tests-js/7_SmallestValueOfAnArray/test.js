var assert = require('assert');

describe('Kyu 7: Smallest value of an array', function () {

  it("Solution 1",function() {
    function min(arr, toReturn) {
      var min = 99999999;
      var index = -1;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
          min = arr[i];
          index = i;
        }
      }
      return toReturn == 'value' ? min : index;
    }

    assert.equal(min([1,2,3,4,5], 'value'), 1)
    assert.equal(min([1,2,3,4,5], 'index'), 0)
  })

  it("Solution 2",function() {
    function min(arr, toReturn) {
      var min = Math.min(...arr);
      return toReturn == 'value' ? min : arr.indexOf(min);
    }

    assert.equal(min([1,2,3,4,5], 'value'), 1)
    assert.equal(min([1,2,3,4,5], 'index'), 0)
  })

});
