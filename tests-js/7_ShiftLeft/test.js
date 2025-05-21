var assert = require('assert');

describe('Kyu 7: Shift Left', function () {

  it('solution1', function () {

    function shiftLeft(s, t){
      var revS = [...s].reverse();
      var revT = [...t].reverse();
      for (var i = 0; i < Math.min(revS.length, revT.length) && revS[i] == revT[i]; i++) {}
      return revS.length + revT.length - 2*i;
    }

    assert.equal(shiftLeft("test", "west"), 2);
    assert.equal(shiftLeft("test", "yes"), 7);
    assert.equal(shiftLeft("b", "ab"), 1);

  });

});
