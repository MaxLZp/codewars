var assert = require('assert');

describe('Kyu 7: Send in the Clones', function () {

  var clonewars = function(kataPerDay) {
    if (kataPerDay === 0) return [1, 0];
    if (kataPerDay === 1) return [1, 1];
    var previous = clonewars(kataPerDay - 1);
    previous[0] *= 2;
    previous[1] = previous[1] * 2 + kataPerDay;
    return previous;
  }

  it("Fixed Tests", () => {
    assert.deepEqual(clonewars(1), [1, 1]);
    assert.deepEqual(clonewars(5), [16, 57]);
    assert.deepEqual(clonewars(10), [512, 2036]);
  });

});
