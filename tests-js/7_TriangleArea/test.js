var assert = require('assert');

describe('Kyu 7: Triangle area', function () {

  function tArea(tStr) {
    const split = tStr.split(/\n/g);
    split.pop();
    split.shift();
    return (split.length - 1) * split.pop().replace(/\./g, '').length / 2;
  }

  it("First triangle area", function() {
    assert.equal(tArea('\n.\n. .\n'), 0.5)
  });

  it("Second triangle area", function() {
    assert.equal(tArea('\n.\n. .\n. . .\n'), 2)
  });

  it("Third triangle area", function() {
    assert.equal(tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n'), 32)
  });

  it("Forth triangle area", function() {
    assert.equal(tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n'), 8)
  });

});
