const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Alphabetically ordered', function () {

  function alphabetic(s) {
    for(var i = 1; i < s.length; i++) {
      if (s.charCodeAt(i) < s.charCodeAt(i-1)) {
      // or
      // if (s[i] < s[i-1]) {
        return false;
      }
    }
    return true;
  }

  function dotest(s, exp) {
    let actual = alphabetic(s);
    assert.strictEqual(actual, exp, `Testing with "${s}"`);
  }

  it('tests', function() {
    dotest("asd", false);
    dotest("codewars", false);
    dotest("door", true);
    dotest("cell", true);
    dotest("z", true);
    dotest("", true);    
  });

});
