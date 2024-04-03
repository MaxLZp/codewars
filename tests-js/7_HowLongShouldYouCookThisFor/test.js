var assert = require('assert');

describe('Kyu 7: How long should you cook this for?', function () {

  function cookingTime(neededPower, minutes, seconds, power) {
    var sec = Math.ceil(parseInt(neededPower) * (minutes * 60 + seconds) / parseInt(power));
    return `${Math.floor(sec / 60)} minutes ${sec % 60} seconds`;
  }

  it("Fixed Tests", () => {
    assert.strictEqual(cookingTime("600W", 4, 20, "800W"), "3 minutes 15 seconds");
    assert.strictEqual(cookingTime("800W", 3, 0, "1200W"), "2 minutes 0 seconds");
    assert.strictEqual(cookingTime("100W", 8, 45, "50W"), "17 minutes 30 seconds");
    assert.strictEqual(cookingTime("7500W", 0, 5, "600W"), "1 minutes 3 seconds");
    assert.strictEqual(cookingTime("450W", 3, 25, "950W"), "1 minutes 38 seconds");
    assert.strictEqual(cookingTime("21W", 64, 88, "25W"), "55 minutes 0 seconds");
    assert.strictEqual(cookingTime("83W", 61, 80, "26W"), "199 minutes 0 seconds");
    assert.strictEqual(cookingTime("38W", 95, 22, "12W"), "302 minutes 0 seconds");
  });

});
