const { assert } = require('chai');

describe('Kyu 7: Makes the Sentence', function () {

  function makesTheSentence(characterArray, sentenceString) {
    return (characterArray.length == sentenceString.replace(/\s/g, '').length) && sentenceString.split('').every((c) => {
      var idx = characterArray.indexOf(c);
      characterArray[idx] = ' ';
      return idx >= 0;
    });
  }

  it("test", () => {
    assert.strictEqual(makesTheSentence(['D', 'u', 'c', 'k', 's', 'q', 'u', 'a', 'c', 'k', '.'], "Ducks quack."), true);
    assert.strictEqual(makesTheSentence(['S', 'h', 'e', 'a', 'd', 's', '.'], "She adds."), false);
    assert.strictEqual(makesTheSentence(['a', 'a'], "a"), false);
    assert.strictEqual(makesTheSentence(['a', 'a'], "a"), false);
    assert.strictEqual(makesTheSentence(['a','f','r','k','s','e','u','I','a','o','c','!','t','e'], "I ate four cakes!"), true);
  });

});
