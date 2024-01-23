var assert = require('assert');

describe('Kyu 7: String prefix and suffix', function () {
  it('solution1', function () {

    function solve(s){
      for (let i = (Math.floor(s.length / 2)); i >= 0; i--) {
        if (s.endsWith(s.substring(0, i))) {
            return i;
        }
      }
      return 0;
    }

    assert.equal(solve("abcd"),0);
    assert.equal(solve("abcda"),1);
    assert.equal(solve("abcdabc"),3);
    assert.equal(solve("abcabc"),3);
    assert.equal(solve("abcabca"),1);
    assert.equal(solve("aaaa"),2);
    assert.equal(solve("aa"),1);
    assert.equal(solve("a"),0);
  });

  it('solution2', function () {

    function solve(s){
      return s.match(/^(.*).*\1$/)[1].length;
    }

    assert.equal(solve("abcd"),0);
    assert.equal(solve("abcda"),1);
    assert.equal(solve("abcdabc"),3);
    assert.equal(solve("abcabc"),3);
    assert.equal(solve("abcabca"),1);
    assert.equal(solve("aaaa"),2);
    assert.equal(solve("aa"),1);
    assert.equal(solve("a"),0);
  });

});
