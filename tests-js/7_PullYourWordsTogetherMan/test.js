var assert = require('assert');

describe('Kyu 7: Pull your words together, man!', function () {

  function sentencify(words) {
    return `${words.join(' ').replace(/^\w/, c => c.toUpperCase())}.`;
  }

  it("It should work for some examples.", () => {
    assert.strictEqual(sentencify(["i", "am", "an", "AI"]), "I am an AI.");
    assert.strictEqual(sentencify(["yes"]), "Yes.");
    assert.strictEqual(sentencify(["FIELDS", "of", "CORN", "are", "to", "be", "sown"]), "FIELDS of CORN are to be sown.");
    assert.strictEqual(sentencify(["i'm", "afraid", "I", "can't", "let", "you", "do", "that"]), "I'm afraid I can't let you do that.");
  });
  it("It should work for tricky sentences.", () => {
    assert.strictEqual(sentencify(["let", "there", "be", "light"]), "Let there be light.");
    assert.strictEqual(sentencify(["any", "other", "characters,,,", "should", "be", "ignored"]), "Any other characters,,, should be ignored.");
    assert.strictEqual(sentencify(["extra", "stuff\"''", "stays"]), "Extra stuff\"'' stays.");
  });
});
