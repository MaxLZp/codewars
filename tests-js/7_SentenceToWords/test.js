var assert = require('assert');

describe('Kyu 7: Sentence to words', function () {

  function splitSentence(s) {
    return s.split(' ');
  }

  it("Fixed Tests", () => {
    assert.deepEqual(splitSentence("hello world"), ["hello", "world"]);
  });

});
