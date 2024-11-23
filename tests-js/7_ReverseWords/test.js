var assert = require('assert');

describe('Kyu 7: Reverse words', function () {

  function reverseWords(str) {
    return str.replaceAll(/(\S+)/g, (word) => ( [...word].reverse().join('') ));
  }

  it("Sample tests", function() {
    assert.equal(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god', `Input: "The quick brown fox jumps over the lazy dog."`);
    assert.equal(reverseWords('apple'), 'elppa', `Input: "apple"`);
    assert.equal(reverseWords('a b c d'), 'a b c d', `Input: "a b c d"`);
    assert.equal(reverseWords('  double  spaced  words  '), '  elbuod  decaps  sdrow  ', `Input: "  double  spaced  words  "`);
  });

});

