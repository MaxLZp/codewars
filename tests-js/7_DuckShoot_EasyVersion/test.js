const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Duck Shoot - Easy Version', function () {
  it('solution1', function () {

    function duckShoot(ammo, aim, ducks){
      var shotDucks = Math.floor(ammo * aim);
      while(shotDucks-- > 0 ) {
        ducks = ducks.replace('2', 'X');
      }
      return ducks;
    }

    assert.strictEqual(duckShoot(4, 0.64, '|~~2~~~22~2~~22~2~~~~2~~~|'), '|~~X~~~X2~2~~22~2~~~~2~~~|');
    assert.strictEqual(duckShoot(9, 0.22, '|~~~~~~~2~2~~~|'), '|~~~~~~~X~2~~~|'); 
    assert.strictEqual(duckShoot(6, 0.41, '|~~~~~22~2~~~~~|'), '|~~~~~XX~2~~~~~|');    

  });
});
