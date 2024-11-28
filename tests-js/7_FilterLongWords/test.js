var assert = require('assert');

describe('Kyu 7: Filter Long Words', function () {
  it('solution1', function () {

    function filterLongWords(sentence, n) {
      return sentence.split(' ').filter(w => w.length > n);
    }

    assert.deepEqual(filterLongWords("The quick brown fox jumps over the lazy dog", 4), ['quick', 'brown', 'jumps']);

  });

});
