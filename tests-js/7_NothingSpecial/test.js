const assert = require('assert');

describe('Kyu 7: Nothing special', function () {

  function nothingSpecial(str) {
    if (typeof str !== 'string') { return 'Not a string!'; }
    return str.replace(/[^A-Za-z0-9\s]/g, '');
  }

  it("Tests", function () {
    assert.equal(nothingSpecial("Hello World!"), "Hello World");
    assert.equal(nothingSpecial("%^Take le$ft ##quad%r&a&nt"), "Take left quadrant");
    assert.equal(nothingSpecial("M$$$$$$$y ally!!!!!"), "My ally");
    assert.equal(nothingSpecial(25), "Not a string!");
    assert.equal(nothingSpecial("_KJCTuo"), "KJCTuo");
    assert.equal(nothingSpecial("' S]r(2	(y%nF=<"), " Sr2\tynF");
  });

});
