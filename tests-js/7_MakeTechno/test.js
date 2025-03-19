var assert = require('assert');

describe('Kyu 7: Make techno.', function () {

  function perc (mins) {
    if (mins < 1 || mins > 100 || isNaN(mins)) {
      return "invalid track time";
    }

    return [
      `${Math.round(mins * 120)} kicks`,
      `${Math.round(mins * 120 / 4 * 8)} hihats`,
      `${Math.round(mins * 120 / 4 * 2)} claps`,
    ];
  };

  it("test", () => {
    assert.deepEqual(perc (3), ["360 kicks", "720 hihats", "180 claps"])
    assert.deepEqual(perc (99.9999), ["12000 kicks", "24000 hihats", "6000 claps"])
    assert.deepEqual(perc ("a"), "invalid track time")
    assert.deepEqual(perc (113.567), "invalid track time")
    assert.notDeepEqual(perc (5), "invalid track time")
    assert.notDeepEqual(perc (0.1), ["4 kicks", "8 hihats", "2 claps"])

    assert.notDeepEqual(perc (19.21), ["2305 kicks", "4608 hihats", "1152 claps"])
  });

});
