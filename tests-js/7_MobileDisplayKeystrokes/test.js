var assert = require('assert');

describe('Kyu 7: Mobile Display Keystrokes', function () {

  function mobileKeyboard(str){
    let keystrokes = 0;
    const keys = [
      '1',
      '2abc',
      '3def',
      '4ghi',
      '5jkl',
      '6mno',
      '7pqrs',
      '8tuv',
      '9wxyz',
      '*',
      '0',
      '#',
    ];
    keystrokes = [...str].reduce(function(prev, cur) {

      for (let index = 0; index < keys.length; index++) {
        const pos = keys[index].indexOf(cur);
        if (pos !== -1) {
          return prev + pos + 1;
        }
      }
      return prev;

    }, keystrokes);
    return keystrokes;
  }

  it("Should work for test cases", function(){
    assert.equal(mobileKeyboard(""), 0);
    assert.equal(mobileKeyboard("123"), 3);
    assert.equal(mobileKeyboard("codewars"), 26);
    assert.equal(mobileKeyboard("zruf"),16);
    assert.equal(mobileKeyboard("thisisasms"), 37);
    assert.equal(mobileKeyboard("longwordwhichdontreallymakessense"),107);
  })
});
