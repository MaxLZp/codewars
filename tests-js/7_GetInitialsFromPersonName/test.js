var assert = require('assert');

describe('Kyu 7: Get initials from person name', function () {

  it('solution1', function () {

    function toInitials(name) {
      return name.replace(/\b(\w)(\.*\w*)/g, (m, p1) => p1+'.');
    }

    function toInitialsVer2(name) {
      return name.match(/\b(\w)/g).map(e => e.toUpperCase()+'.').join(' ');
    }

    assert.equal(toInitials("Kerry King"), "K. K.");
    assert.equal(toInitials("Tom Araya"), "T. A.");

    assert.equal(toInitials("Robert C. Martin"), "R. C. M.");

  });

});
