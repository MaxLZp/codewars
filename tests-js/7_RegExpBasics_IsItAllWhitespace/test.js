
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Regexp Basics - is it all whitespace?', function () {

  String.prototype.whitespace = function() {
    return /^\s*$/i.test(this);
  };

  it ("Test", function(){
    assert.strictEqual("".whitespace(), true);
    assert.strictEqual(" ".whitespace(), true);
    assert.strictEqual("\n\r\n\r".whitespace(), true);
    assert.strictEqual("a".whitespace(), false);
    assert.strictEqual("w\n".whitespace(), false);
    assert.strictEqual("\t".whitespace(), true);
    assert.strictEqual(" a\n".whitespace(), false);
    assert.strictEqual("\t \n\r\n  ".whitespace(), true);
    assert.strictEqual("\n\r\n\r ".whitespace(), true);
    assert.strictEqual("\n\r\n\r 3".whitespace(), false);
  });

});
