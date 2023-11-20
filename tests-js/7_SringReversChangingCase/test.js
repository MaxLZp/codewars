var assert = require('assert');

describe('Kyu 7: String Reversing, Changing case, etc.', function () {

  function reverseAndMirror(s1,s2) {
    function changeCase(c) {
      if (c == c.toUpperCase()) {
        return c.toLowerCase();
      }
      return c.toUpperCase();
    }
    function reverse(s) {
      let result = '';
      for (let index = s.length - 1; index >= 0; index--) {
        result += s[index];
      }
      return result;
    }

    s1 = [...s1].map(changeCase).join('');
    s2 = [...s2].map(changeCase).join('');
    return reverse(s2) + "@@@" + reverse(s1)+s1;
  }

  it("should test for some strings", function(){
    s1 = "FizZ";
    s2 = "buZZ";
    assert.equal(reverseAndMirror(s1,s2), "zzUB@@@zZIffIZz");
  });

  it("should test for some strings", function(){
    s1 = "String Reversing";
    s2 = "Changing Case";
    assert.equal(reverseAndMirror(s1,s2), "ESAc GNIGNAHc@@@GNISREVEr GNIRTssTRING rEVERSING");
  });

});
