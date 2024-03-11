var assert = require('assert');

describe('Kyu 7: Scrolling Text', function () {

  function scrollingText(text){
    var txt = text.toUpperCase();
    return [...txt].map((v, i, a) => {
      return txt.slice(i)+txt.slice(0, i);
    });
  }

  it('tests', function () {
    assert.deepEqual(scrollingText("abc"), ["ABC","BCA","CAB"])
  });

});
