var assert = require('assert');

describe('Kyu 7: PatternCraft - Visitor', function () {

  class Marine {
    constructor() {
      this.health = 100;
    }
    accept(visitor) {
      visitor.visitLight(this);
    }
  }

  class Marauder {
    constructor() {
      this.health = 125;
    }
    accept(visitor) {
      visitor.visitArmored(this);
    }
  }

  class TankBullet {
    visitLight(unit) {
      unit.health -= 21;
    }
    visitArmored(unit) {
      unit.health -= 32;
    }
  }

  it('Visit Light', () => {
    let bullet = new TankBullet();
    let light = new Marine();

    light.accept(bullet);

    assert.equal(light.health, 100 - 21);
  });

  it('Visit Armored', () => {
    let bullet = new TankBullet();
    let armored = new Marauder();

    armored.accept(bullet);

    assert.equal(armored.health, 125 - 32);
  });
});

