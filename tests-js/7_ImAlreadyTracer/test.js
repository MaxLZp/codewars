var assert = require('assert');

describe('Kyu 7: I\'m already Tracer', function () {

  const TANK = [
    'D.Va',
    'Orisa',
    'Reinhardt',
    'Roadhog',
    'Winston',
    'Wrecking Ball',
    'Zarya'
  ];
  const DAMAGE = [
    'Ashe',
    'Bastion',
    'Doomfist',
    'Genji',
    'Hanzo',
    'Junkrat',
    'McCree',
    'Mei',
    'Pharah',
    'Reaper',
    'Soldier: 76',
    'Sombra',
    'Symmetra',
    'Torbjörn',
    'Tracer',
    'Widowmaker'
  ];
  const SUPPORT = [ 'Ana', 'Brigitte', 'Lúcio', 'Mercy', 'Moira', 'Zenyatta' ];

  function teamComp(heroes) {
    if (new Set(heroes).size < 6) {
      throw 'GG';
    }

    return heroes.reduce((result, hero) => {
      result[0] += TANK.filter(e => e == hero).length;
      result[1] += DAMAGE.filter(e => e == hero).length;
      result[2] += SUPPORT.filter(e => e == hero).length;

      return result;
    }, [0,0,0]);

  }

  it('Valid words', function() {
    assert.deepEqual(
      teamComp(['D.Va', 'Orisa', 'Ashe', 'Bastion', 'Ana', 'Mercy']),
      [2,2,2]
    );
    assert.deepEqual(
      teamComp(['Widowmaker', 'Tracer', 'Ashe', 'Bastion', 'Genji', 'Mercy']),
      [0,5,1]
    );
    assert.deepEqual(
      teamComp(['Reinhardt', 'Torbjörn', 'Mei', 'Pharah', 'Ana', 'Brigitte']),
      [1,3,2]
    );
  });

});
