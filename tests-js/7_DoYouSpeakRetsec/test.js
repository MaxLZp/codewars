var assert = require('assert');

describe('Kyu 7: Do you speak retsec?', function () {

  function reverseByCenter(s){
    var len = Math.floor(s.length / 2);
    return s.replace(new RegExp(`(.{${len}})(.*)(.{${len}})`), "$3$2$1");
  }

  it("Fixed Tests", () => {
    assert.strictEqual(reverseByCenter("secret"), "retsec");
    assert.strictEqual(reverseByCenter("agent"), "nteag");
    assert.strictEqual(reverseByCenter("raw"), "war");
    assert.strictEqual(reverseByCenter("onion"), "onion");
  });

});
