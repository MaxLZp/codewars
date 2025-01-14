var assert = require('assert');

describe('Kyu 7: Find the Speedcubers times!', function () {

  function cubeTimes(times) {
    var _times = times.sort((l, r) => l - r);
    var avg = _times.slice(1, -1).reduce((c,e) => c + e) / (_times.length - 2);

    return [Math.round(avg * 100) / 100, _times[0]];
  }

  it("Examples", function() {
    assert.deepEqual(cubeTimes([9.5, 7.6, 11.4, 10.5, 8.1]), [9.37, 7.6])
    assert.deepEqual(cubeTimes([13.4, 12.3, 9.5, 11.9, 20.8]), [12.53, 9.5])
    assert.deepEqual(cubeTimes([28.3, 14.5, 17.3, 8.9, 10.1]), [13.97, 8.9])
  })

});
