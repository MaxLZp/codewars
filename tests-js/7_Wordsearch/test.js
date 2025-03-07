const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Wordsearch', function () {

  it('solution1', function () {

    function wordSearch(word, text){
      return (new RegExp(`\\b${word}\\b`, 'i')).test(text);
    }

    const myText = "what makes the desert beautiful, said the little prince is that somewhere it hides a well";

    assert.equal(wordSearch("desert",myText),true);
    assert.equal(wordSearch("blue",myText),false);
    assert.equal(wordSearch("well",myText),true);
    assert.equal(wordSearch("house",myText),false);
    assert.equal(wordSearch("beautiful",myText),true);
    assert.equal(wordSearch("prince",myText),true);
    assert.equal(wordSearch("le prince",myText),false);

  });

});
