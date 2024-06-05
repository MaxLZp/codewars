const {assert} = require("chai");

describe('Kyu 7: esreveR gnirtS', function () {

  String.prototype.reverseArr = function () {
    return [...this].reverse().join('');
  }

  String.prototype.reverse = function () {
    var res = '';
    for (let i = this.length - 1; i >= 0; i--) {
      res += this[i];
    }
    return res;
  }

  it('solution1', function () {
    assert.strictEqual("String".reverse(), "gnirtS");
    assert.strictEqual("Another string".reverse(), "gnirts rehtonA");
  });

});
