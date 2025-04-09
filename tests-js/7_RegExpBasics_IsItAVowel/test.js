
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Regexp Basics - is it a vowel?', function () {

  String.prototype.vowel = function() {
    return /^[aeiou]$/i.test(this);
  };

  it ("Test", function(){
    assert.equal(''.vowel(), false);
    assert.equal('a'.vowel(), true);
    assert.equal('E'.vowel(), true);
    assert.equal('ou'.vowel(), false);
    assert.equal('z'.vowel(), false);
    assert.equal('lol'.vowel(), false);
  });

});
