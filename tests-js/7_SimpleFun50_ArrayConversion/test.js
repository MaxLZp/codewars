var assert = require('assert');

describe('Kyu 7: Simple Fun #50: Array Conversion', function () {

  
  it("Fixed Tests", () => {

    function arrayConversion(arr) {
      var _arr = arr;
      var i = 1;
      while (_arr.length > 1) {
        var _arrTemp = [];
  
        for(var j = 0; j < _arr.length; j += 2) {
          _arrTemp.push(i % 2 == 1 ? _arr[j] + _arr[j+1] : _arr[j] * _arr[j+1]);
        }
  
        _arr = _arrTemp;
        i++;
      }
  
      return _arr[0];
    }

    assert.equal(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]), 186, 'arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]),');
    assert.equal(arrayConversion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 64, 'arrayConversion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])');
    assert.equal(arrayConversion([3, 3, 5, 5]), 60, 'arrayConversion([3, 3, 5, 5])');

  });

  it("Fixed Tests. Recursive", () => {

    function arrayConversion(arr, i = 1) {
      if (arr.length == 1) {
        return arr[0];
      }

      var _arrTemp = [];
      for(var j = 0; j < arr.length; j += 2) {
        _arrTemp.push(i % 2 == 1 ? arr[j] + arr[j+1] : arr[j] * arr[j+1]);
      }
  
      return arrayConversion(_arrTemp, ++i);
    }

    assert.equal(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]), 186, 'arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]),');
    assert.equal(arrayConversion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 64, 'arrayConversion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])');
    assert.equal(arrayConversion([3, 3, 5, 5]), 60, 'arrayConversion([3, 3, 5, 5])');

  });

});
