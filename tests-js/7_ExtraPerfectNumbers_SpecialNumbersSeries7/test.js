var assert = require('assert');

describe('Kyu 7: Extra Perfect Numbers (Special Numbers Series #7)', function () {

  it('solution1', function () {
    function extraPerfect(n){
      const result = [];
      for (let index = 1; index <= n; index++) {
        if (index % 2) { result.push(index);}
      }
      return result;
    }

    assert.deepEqual(extraPerfect(3), [1,3]);
    assert.deepEqual(extraPerfect(5), [1,3,5]);
    assert.deepEqual(extraPerfect(7), [1,3,5,7]);
    assert.deepEqual(extraPerfect(28), [1,3,5,7,9,11,13,15,17,19,21,23,25,27]);
    assert.deepEqual(extraPerfect(39), [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]);
  });

});
