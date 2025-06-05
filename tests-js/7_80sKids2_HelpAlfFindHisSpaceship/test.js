const assert = require('chai').assert;

describe('Kyu 7: 80s Kids 2: Help ALF Find His Spaceship', function () {

  function findSpaceship(map) {
    var result =[-1, -1];

    var arr = (map || '').split('\n');
    for(var i = arr.length - 1; i >= 0; i--) {
      var y = arr[i].indexOf('X');
      if (y >= 0) {
        result[0] = y;
        result[1] = arr.length - 1 - i;
        break;
      }
    }

    return result[0] == -1 ? 'Spaceship lost forever.' : result;
  }

  assert.deepEqual(findSpaceship('..........\n..........\n.......X..\n..........\n..........'), [7, 2])
  assert.deepEqual(findSpaceship('.......\nX.......'), [0, 0])
  assert.deepEqual(findSpaceship('........................'), 'Spaceship lost forever.')
  assert.deepEqual(findSpaceship(), 'Spaceship lost forever.')
  assert.deepEqual(findSpaceship('X'), [0, 0])

});
