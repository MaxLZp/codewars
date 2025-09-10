const { assert } = require('chai');

describe('Kyu 7: Alternate Square Sum', function () {

  it('solution1', function () {

    function alternateSqSum(arr){
      return arr.reduce((c, e, i) => c + (i%2 == 1 ? e**2 : e), 0);
    }

    assert.strictEqual(alternateSqSum([]),0);
    assert.strictEqual(alternateSqSum([1,2,3,4,5]),29);
    assert.strictEqual(alternateSqSum([-1,0,-3,0,-5,3]),0);
    assert.strictEqual(alternateSqSum([-1,2,-3,4,-5]),11);
 
  });

});
