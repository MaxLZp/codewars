var assert = require('assert');

describe('Kyu 7: Numbers with d occurences of digit d', function () {

  function isDd(n) {
    var n = `${n}`;
    var map = {};
    for(var i = 0; i < n.length; i++) {
      if (!map[n[i]]) {
        map[n[i]] = 0;
      }
      map[n[i]] += 1;
    }

    for (const key in map) {
      if (key == map[key]) {
        return true;
      }
    }
    return false;
  }

  it("Should handle manual tests", function () {
    assert.equal(isDd(664444309), true);
    assert.equal(isDd(122), true);
    assert.equal(isDd(30313), true);
    assert.equal(isDd(5023011), false);
    assert.equal(isDd(9081231), false);
  });

});
