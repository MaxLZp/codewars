var assert = require('assert');

describe('Kyu 7: Sentences should start with capital letters.', function () {

  function fix(paragraph){
    return paragraph.length == 0 ? '': paragraph.split('.').filter(e => e).map(str => {
      str = str.trim();
      return (str.length == 0) ? '' : str[0].toUpperCase() + str.substr(1).toLowerCase() + '.';
    }).join(' ');
  }

  it("Fixed Tests", () => {
    assert.equal(fix(""), "");
    assert.equal(fix("hi."), "Hi.");
    assert.equal(
      fix("hello. my name is inigo montoya. you killed my father. prepare to die."),
      "Hello. My name is inigo montoya. You killed my father. Prepare to die."
    );
  });

});
