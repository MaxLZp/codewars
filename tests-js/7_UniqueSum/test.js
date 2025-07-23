const { assert } = require('chai');

describe('Kyu 7: Unique Sum', function () {

  it('solution1', function () {

    function uniqueSum(lst){
      return [...new Set(lst)].reduce((c, e) => c + e, null);
    }

    assert.strictEqual(uniqueSum([1,2,3]), 6);
    assert.strictEqual(uniqueSum([1,3,8,1,8]), 12);
    assert.strictEqual(uniqueSum([-1,-1,5,2,-7]), -1);
    assert.strictEqual(uniqueSum([]), null);

  });

});
