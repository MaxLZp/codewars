var assert = require('assert');

describe('Kyu 6: All Star Code Challenge #15', function () {

  String.prototype.camelCase=function(){
    return this.split(' ').map((word) => {
      return word.replace(/^\S/, word.split('').shift()?.toUpperCase());
    }).join('');
  }

  it("Tests", function() {
    assert.strictEqual("test case".camelCase(), "TestCase");
    assert.strictEqual("camel Case method".camelCase(), "CamelCaseMethod");
    assert.strictEqual("say hello".camelCase(), "SayHello");
    assert.strictEqual("camel case word".camelCase(), "CamelCaseWord");
    assert.strictEqual("".camelCase(), "");
  });

});
