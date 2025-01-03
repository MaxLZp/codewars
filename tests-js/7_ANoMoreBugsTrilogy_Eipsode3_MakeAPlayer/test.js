const chai = require("chai");
const assert = chai.assert;;

describe('Kyu 7: A (no more) bugs trilogy: Episode 3 - Make a Player', function () {

  function Player() {
    this.name = arguments[0] || '';
    this.position = arguments[1] || '';
    this.age = arguments[2] || 0;
    this.dribbling = arguments[3] || 0;
    this.pass = arguments[4] || 0;
    this.shoot = arguments[5] || 0;
  }

  it('should create a player', function (){
    var myPlayer = new Player('Player', 'Right Winger', 25, 75, 90, 65)
    assert.equal(myPlayer.name, 'Player')
    assert.equal(myPlayer.position, 'Right Winger')
    assert.equal(myPlayer.age, 25)
    assert.equal(myPlayer.dribbling, 75)
    assert.equal(myPlayer.pass, 90)
    assert.equal(myPlayer.shoot, 65)
  })

});
