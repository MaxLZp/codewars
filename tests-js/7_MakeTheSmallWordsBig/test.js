var assert = require('assert');

describe('Kyu 7: Make the small words big!', function () {

  function smallWordHelper(sentence){
    return sentence.replace(/\b(\S+)\b/g, m => m.length >= 4 ? m.replace(/[aeiou]/gi, '') : m.toUpperCase());
  }

  it("test", () => {

    assert.equal(smallWordHelper("The quick brown fox jumps over the lazy dog"),
    "THE qck brwn FOX jmps vr THE lzy DOG");

    assert.equal(smallWordHelper("I'm just a small word from a small word family"),
      "I'M jst A smll wrd frm A smll wrd fmly");
  });

});
