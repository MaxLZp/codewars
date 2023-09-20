var assert = require('assert');

describe('Kyu 7: String ends with?', function () {

  it('solution1', function () {
    function solution(str, ending){
      return str.match(new RegExp(`${ending}$`, 'gi')) != null;
    }

    assert.equal(solution('abcde', 'cde'), true)
    assert.equal(solution('abcde', 'abc'), false)
    assert.equal(solution('samurai', 'ai'), true)
  });

  it('solution2', function () {
    function solution(str, ending){
      return str.endsWith(ending);
    }

    assert.equal(solution('abcde', 'cde'), true)
    assert.equal(solution('abcde', 'abc'), false)
    assert.equal(solution('samurai', 'ai'), true)
  });

});
