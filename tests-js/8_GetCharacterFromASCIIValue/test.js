var assert = require('assert');

describe('Kyu 8: get character from ASCII Value', function () {
  it('solution1', function () {

    assert.equal(getChar(55),'7')
    assert.equal(getChar(56),'8')
    assert.equal(getChar(57),'9')
    assert.equal(getChar(58),':')
    assert.equal(getChar(59),';')
    assert.equal(getChar(60),'<')
    assert.equal(getChar(61),'=')
    assert.equal(getChar(62),'>')
    assert.equal(getChar(63),'?')
    assert.equal(getChar(64),'@')
    assert.equal(getChar(65),'A')

    function getChar(char) {
      return String.fromCharCode(char);
    }
  });
});
