var assert = require('assert');

describe('Kyu 7: Count consonants', function () {

  function bingo(a) {
    const bingoNums = 'bingo'
      .split('')
      .map((c) => {return c.charCodeAt(0) - 'a'.charCodeAt(0) + 1});

    return new Set(a.filter((num) => {
      return bingoNums.indexOf(num) != -1;
    })).size == 'bingo'.length ? "WIN" : "LOSE";
  }

  it("Empty string", function() {
    assert.equal(bingo([1,2,3,4,5,6,7,8,9,10]), "LOSE");
    assert.equal(bingo([21,13,2,7,5,14,7,15,9,10]), "WIN");
  });

});
