var assert = require('assert');

describe('Kyu 7: Product Array (Array Series #5)', function () {

  function productArray(numbers){
    var product = numbers.reduce((c, v) => (c*v), 1);
    return numbers.map((v) => (product / v));
  }


  it(`Tests`, function() {
    assert.deepEqual(productArray([12,20]), [20,12]);
    assert.deepEqual(productArray([3,27,4,2]), [216,24,162,324]);
    assert.deepEqual(productArray([13,10,5,2,9]), [900,1170,2340,5850,1300]);
    assert.deepEqual(productArray([16,17,4,3,5,2]), [2040,1920,8160,10880,6528,16320]);
  });
});
