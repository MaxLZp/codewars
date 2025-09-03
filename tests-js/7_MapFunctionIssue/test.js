var assert = require('assert');

describe('Kyu 7: Map function issue', function () {

    it('solution1', function () {

      var func = function(item){
        return item % 2 ==0;
      }
    
    function map(arr, somefunction){
      if ('function' !== typeof somefunction) { return 'given argument is not a function'; }

      var result = [];
      for(el of arr) {
        if (isNaN(el)) { return 'array should contain only numbers'; }
        result.push(somefunction(el));
      }
      return result;
    }

    assert.deepEqual(map([27, 18, 5,'8', '66'],func),[ false, true, false, true, true ])
    assert.deepEqual(map([48, 33, 2, 1],'str'),'given argument is not a function')
    assert.deepEqual(map([8, 12, 't'],func), 'array should contain only numbers')
    
  });

});
