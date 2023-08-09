var assert = require('assert');

describe('Kyu 8: Short Long Short', function () {

  it('solution1', function () {

    assert.equal(solution('45', '1'), '1451');
    assert.equal(solution('13', '200'), '1320013');
    assert.equal(solution('Soon', 'Me'), 'MeSoonMe');
    assert.equal(solution('U', 'False'), 'UFalseU');

    function solution(a, b){
      return (a.length < b.length)
        ? `${a}${b}${a}`
        : `${b}${a}${b}`;
    }

  });

});
