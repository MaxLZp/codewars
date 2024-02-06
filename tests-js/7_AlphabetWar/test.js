var assert = require('assert');

describe('Kyu 7: Alphabet war', function () {

  it('solution1', function () {
    function alphabetWar(fight) {
      var lw = {'w': 4, 'p': 3, 'b': 2, 's': 1,};
      var rw = {'m': 4, 'q': 3, 'd': 2, 'z': 1,};
      var left = fight.match(/[wpbs]/g) || [];
      var right = fight.match(/[mqdz]/g) || [];

      left = left.reduce((carry, cur) => {
        return carry += lw[cur];
      }, 0);
      right = right.reduce((carry, cur) => {
        return carry += rw[cur];
      }, 0);

      if (left > right) {return "Left side wins!";}
      if (right > left) {return "Right side wins!";}
      return "Let's fight again!";
    }

    assert.equal( alphabetWar("z") , "Right side wins!" );
    assert.equal( alphabetWar("zdqmwpbs") , "Let's fight again!" );
    assert.equal( alphabetWar("zzzzs"), "Right side wins!" );
    assert.equal( alphabetWar("wwwwww"), "Left side wins!" );
  });

  it('solution2', function () {
    function alphabetWar(fight) {
      var lw = {'w': 4, 'p': 3, 'b': 2, 's': 1,};
      var rw = {'m': 4, 'q': 3, 'd': 2, 'z': 1,};
      var left = 0;
      var right = 0;
      [...fight].forEach((value) => {
        if (value.match(/[wpbs]/)) { left += lw[value]; };
        if (value.match(/[mqdz]/)) { right += rw[value]; };
      });

      if (left > right) {return "Left side wins!";}
      if (right > left) {return "Right side wins!";}
      return "Let's fight again!";
    }

    assert.equal( alphabetWar("z") , "Right side wins!" );
    assert.equal( alphabetWar("zdqmwpbs") , "Let's fight again!" );
    assert.equal( alphabetWar("zzzzs"), "Right side wins!" );
    assert.equal( alphabetWar("wwwwww"), "Left side wins!" );
  });

});
