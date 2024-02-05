var assert = require('assert');

describe('Kyu 7: Love vs friendship', function () {

  it('solution1', function () {

    function wordsToMarks(string){
      return string.split('').reduce((carry, current) => {
        return carry += current.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
      }, 0);
    }

    assert.strictEqual(wordsToMarks("attitude"), 100);
    assert.strictEqual(wordsToMarks("friends"), 75);
    assert.strictEqual(wordsToMarks("family"), 66);
    assert.strictEqual(wordsToMarks("selfness"), 99);
    assert.strictEqual(wordsToMarks("knowledge"), 96);

  });

});
