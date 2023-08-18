var assert = require('assert');

describe('Kyu 8: Double Char', function () {


  it(`Test Double Char`, () => {

    function doubleChar(str) {
      return str.split('').map((char) => {
        return `${char}${char}`;
      }).join('');
    }

    assert.equal(doubleChar("abcd"), "aabbccdd");
    assert.equal(doubleChar("Adidas"), "AAddiiddaass");
    assert.equal(doubleChar("1337"), "11333377");
    assert.equal(doubleChar("illuminati"), "iilllluummiinnaattii");
    assert.equal(doubleChar("123456"), "112233445566");
    assert.equal(doubleChar("%^&*("), "%%^^&&**((");
  });

});