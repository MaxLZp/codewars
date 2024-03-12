var assert = require('assert');

describe('Kyu 7: Misleading Signs', function () {

  function gaslighting(shirtWord,yourWord,friendsLetters) {
    var re = RegExp('[^'+friendsLetters+']', 'g');
    return shirtWord.replace(re, '_') != yourWord.replace(re, '_');
  };

  it("example tests", function() {
    assert.strictEqual( gaslighting("snack","snake","c"), true, `gaslighting("snack","snake","c")` );
    assert.strictEqual( gaslighting("snake","snack","c"), true, `gaslighting("snake","snack","c")` );
    assert.strictEqual( gaslighting("snack","snack","snack"), false, `gaslighting("snack","snack","snack")` );
    assert.strictEqual( gaslighting("ping","pong","png"), false, `gaslighting("ping","pong","png")` );
    assert.strictEqual( gaslighting("ping","pong","i"), true, `gaslighting("ping","pong","i")` );
    assert.strictEqual( gaslighting("khp","qpk","ib"), false, `gaslighting("khp","qpk","ib")` );
  });

});
