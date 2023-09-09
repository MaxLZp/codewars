var assert = require('assert');

describe('Kyu 7: Cryptanalysis Word Patterns', function () {
  it('solution1', function () {

    assert.equal(wordPattern("hello"), "0.1.2.2.3");
    assert.equal(wordPattern("heLlo"), "0.1.2.2.3");
    assert.equal(wordPattern("helLo"), "0.1.2.2.3");
    assert.equal(wordPattern("Hippopotomonstrosesquippedaliophobia"), "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13");

    function wordPattern(word) {
      const map = [... new Set(word.toLowerCase().split(''))];
      return word.toLowerCase().split('').map(function(letter) {
        return map.indexOf(letter);
      }).join('.');
    }
  });

});
