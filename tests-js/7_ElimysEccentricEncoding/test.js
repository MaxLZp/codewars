const { assert } = require('chai');

describe('Kyu 7: Emily\'s Eccentric Encoding', function () {

  it("should decode the secret message", function() {
    function decode(str) {
      return str.replace(/[a-z]/g, c => String.fromCharCode('z'.charCodeAt(0) - c.charCodeAt(0) + 'a'.charCodeAt(0)) );
    }

    assert.strictEqual(decode("I dlfow orpv gl rmgviervd lm Mlmwzb nlimrmt!"), "I would like to interview on Monday morning!");
  });

});
