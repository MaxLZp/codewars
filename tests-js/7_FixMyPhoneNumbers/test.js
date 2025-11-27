var assert = require('assert');

describe('Kyu 7: Fix My Phone Numbers!', function () {

  function isItANum(str) {
    str = str.replace(/[^\d]/g, '');
    return str.length == 11 && str[0] == '0' ? str : "Not a phone number";
  }

  it("Tests", () => {
    assert.equal(isItANum("S:)0207ERGQREG88349F82!efRF)"), "02078834982");
    assert.equal(isItANum("sjfniebienvr12312312312ehfWh"), "Not a phone number");
    assert.equal(isItANum("0192387415456"), "Not a phone number");
    assert.equal(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"), "02084564165");
    assert.equal(isItANum("stop calling me no I have never been in an accident"), "Not a phone number");
  });

});
