const assert = require('assert');

describe('Kyu 7: Not all but sometimes all', function () {

  function remove(str, what) {
    var result = str;
    for (const char in what) {
      for (let i = 0; i < what[char]; i++) {
        if (! result.includes(char)) { break; }
        result = result.replace(char, '');
      }
    }

    return result;
  }

  it("Tests", function () {
    assert.equal(remove('this is a string',{'t':1, 'i':2}), 'hs s a string');
    assert.equal(remove('hello world',{'x':5, 'i':2}), 'hello world');
    assert.equal(remove('apples and bananas',{'a':50, 'n':1}), 'pples d bnns');
    assert.equal(remove('a',{'a':1, 'n':1}), '');
    assert.equal(remove('codewars',{'c':5, 'o':1, 'd':1, 'e':1, 'w':1, 'z':1, 'a':1, 'r':1, 's':1}), '');
  });

});
