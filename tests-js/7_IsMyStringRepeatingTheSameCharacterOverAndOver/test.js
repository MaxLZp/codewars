const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Is my string repeating the same character over and over ?', function () {

  it('solution1', function () {

    function hasOneChar(s) {
      return s[0].repeat(s.length) == s;
    }

    // function hasOneChar(s) {
    //   return /^(.)\1*$/.test(s);
    // }

    // function hasOneChar(s) {
    //   return [...s].reduce((c, el) => c + (el == s[0] ? 0 : 1), 1) == 1;
    // }

    assert.strictEqual(hasOneChar('a'), true);
    assert.strictEqual(hasOneChar('aaaaa'), true);
    assert.strictEqual(hasOneChar('aaaab'), false);
    assert.strictEqual(hasOneChar('bbbbb'), true);
    assert.strictEqual(hasOneChar('bbabb'), false);
  });

});
