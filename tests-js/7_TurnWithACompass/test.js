const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Turn with a Compass', function () {

  function direction(facing, turn){
    var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    var facingIndex = directions.indexOf(facing);
    directions = [...directions.slice(facingIndex), ...directions.slice(0, facingIndex)];
    var steps = (turn / 45) % directions.length;

    return directions[steps >= 0 ? steps : directions.length + steps];
  }

  it("should pass basic tests", function(){
    assert.strictEqual(direction("S", 180),  "N");
    assert.strictEqual(direction("SE", -45), "E");
    assert.strictEqual(direction("W", 495),  "NE");
    assert.strictEqual(direction("N", -450),  "W");
  });

});
