const {assert,config} = require("chai");
config.truncateThreshold = 0;

describe('Kyu 7: Duplicate sandwich', function () {
  it('solution1', function () {

    function duplicateSandwich(a) {
      var indexes = {};
      for (var i = 0; i < a.length; i++) {
        if (a[i] in indexes) {

          return a.slice(indexes[a[i]] + 1, i);
        }
        indexes[a[i]] = i;
      }
    }

    assert.deepEqual( duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8]), [2, 3, 4, 5, 6] );
    assert.deepEqual( duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"]), ["Hello", "Example", "hello"] );
    assert.deepEqual( duplicateSandwich([0, 0]), [] );
    assert.deepEqual( duplicateSandwich( [true, false, true]), [false] );
    assert.deepEqual( duplicateSandwich("example"), "xampl" );
  });

});
