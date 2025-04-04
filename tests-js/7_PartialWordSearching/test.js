var assert = require('assert');

describe('Kyu 7: Partial Word Searching', function () {

  it('Test', () => {

    function wordSearch(query, seq){
      var filtered = seq.filter(word => (new RegExp(query, 'i')).test(word));
      return filtered.length ? filtered : ['Empty'];
    }

    assert.deepEqual(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]);
    assert.deepEqual(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]);
    assert.deepEqual(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]), ["aB", "Abc", "zAB"]);
    assert.deepEqual(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]), ["Empty"]);

  });

});

