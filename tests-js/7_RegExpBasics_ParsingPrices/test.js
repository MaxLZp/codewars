
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Regexp basics - parsing prices', function () {

  String.prototype.toCents = function() {
    var regExp = new RegExp(/^\$(\d+)\.(\d{2})$/);
    return regExp.test(this) ? +this.replace(regExp, '$1$2') : null;
  };

  it ("Test", function(){
    assert.strictEqual("".toCents(), null);
    assert.strictEqual("1".toCents(), null);
    assert.strictEqual("1.23".toCents(), null);
    assert.strictEqual("$1".toCents(), null);
    assert.strictEqual("$1.23".toCents(), 123);
    assert.strictEqual("$99.99".toCents(), 9999);
    assert.strictEqual("$12345678.90".toCents(), 1234567890);
    assert.strictEqual("$9.69".toCents(), 969);
    assert.strictEqual("$9.70".toCents(), 970);
    assert.strictEqual("$9.71".toCents(), 971);
    assert.strictEqual("$1.23\n".toCents(), null);
    assert.strictEqual("\n$1.23".toCents(), null);
    assert.strictEqual("$0.69".toCents(), 69);
    assert.strictEqual("$9.69$4.3.7".toCents(), null);
    assert.strictEqual("$9.692".toCents(), null);
  });

});
