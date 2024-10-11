var assert = require('assert');

describe('Kyu 7: Upstream/Downstream', function () {

  function time(distance,boatSpeed,stream){
    const [, direction, speed] = stream.match(/^(D|U)[^\d]*(\d+)/);
    return direction == 'D'
      ? +(distance / (boatSpeed + +speed)).toFixed(2)
      : +(distance / (boatSpeed - +speed)).toFixed(2);
  }

  it('solution1', function () {
    assert.equal(time(24,10,"Downstream 2"),2);
    assert.equal(time(24,14,"Upstream 2"),2);
    assert.equal(time(54,28,"Downstream 3"),1.74);
    assert.equal(time(46,29,"Upstream 10"),2.42);
  });

});
