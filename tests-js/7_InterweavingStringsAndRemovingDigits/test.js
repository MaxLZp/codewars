var assert = require('assert');

describe('Kyu 7: Interweaving strings and removing digits', function () {

  function interweave(s1, s2) {
    var result = '';
    for (let index = 0; index < s1.length; index++) {
      result += s1[index]+ (s2[index]||'');
    }
    return result.replace(/\d/g, '').trim();
  }

  it("Fixed Tests", () => {
    assert.equal(interweave("", ""), "");
    assert.equal(interweave("hlo", "el"), 'hello');
    assert.equal(interweave("h3lo", "el4"), 'hello');
    assert.equal(interweave("Impeprn8  upi75s itdypr2yfrS0.", "' r5ai3gasrr962ebrha a3t o am"), `I'm preparing a surprise birthday party for Sam.`);
  });

});
