var assert = require('assert');

describe('Kyu 7: List Filtering', function () {
  it('solution1', function () {
    function filter_list(l) {
      return l.filter((i) => 'string' !== typeof i);
    }

    assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
    assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
    assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');

  });

});
