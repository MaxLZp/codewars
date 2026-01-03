
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Regexp Basics - is it a letter?', function () {

  String.prototype.isLetter = function() {
    return /^[a-z]$/i.test(this);
  }

  it ("Test", function(){
    assert.equal("".isLetter(), false);
    assert.equal("a".isLetter(), true);
    assert.equal("X".isLetter(), true);
    assert.equal("7".isLetter(), false);
    assert.equal("*".isLetter(), false);
    assert.equal("ab".isLetter(), false);
    assert.equal("a\n".isLetter(), false);    
  });

});
