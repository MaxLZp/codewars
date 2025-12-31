const { assert } = require('chai');

describe('Kyu 7: String matchup', function () {
  it('solution1', function () {

    function solve(a,b){
      return b.map(be => a.filter(ae => ae == be).length);
    }

    assert.deepEqual(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']), [2, 1, 0]);
    assert.deepEqual(solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']), [2, 1, 2]);
    assert.deepEqual(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']), [2, 0, 1]);

  });

});
