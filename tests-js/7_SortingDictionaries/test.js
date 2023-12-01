var assert = require('assert');

describe('Kyu 7: Sorting Dictionaries', function () {

  function sortDict(dict) {
    return Object.keys(dict)
      .map((v) => {
        return [(isNaN(v) ? v : +v), dict[v]];
      }).sort((l, r) => {
        return r[1] - l[1];
      });
  }

  it ('should handle dictionaries with numbers as keys', function(){
    assert.deepEqual(sortDict({1:3,2:2,3:1}),          [[1,3],[2,2],[3,1]]);
    assert.deepEqual(sortDict({3:1,2:2,1:3}),          [[1,3],[2,2],[3,1]]);
    assert.deepEqual(sortDict({1:2,2:4,3:6}),          [[3,6],[2,4],[1,2]]);
    assert.deepEqual(sortDict({1:5,3:10,2:2,6:3,8:8}), [[3,10],[8,8],[1,5],[6,3],[2,2]]);
  });

  it ('should handle dictionaries with strings as keys', function(){
    assert.deepEqual(sortDict({'a':6,'b':2,'c':4}),    [['a',6],['c',4],['b',2]]);
    assert.deepEqual(sortDict({'aldo':6,'boris':2,'igor':6}),    [['aldo',6],['igor',6],['boris',2]]);
  });

});
