const {assert} = require("chai");

describe('Kyu 7: Can I play right now?', function () {

  function canIPlay(now,start,end) {
    return end > start
      ? (now >= start && now < end)
      : ((now >= start && now <= 24) || (now >= 0 && now < end));
  }

  it("example tests", function() {
    assert.strictEqual( canIPlay(12, 10, 14), true,  "12:00 should match to 10:00-14:00 prime-time");
    assert.strictEqual( canIPlay(12, 13, 14), false, "12:00 shouldn't match to 13:00-14:00 prime-time");
    assert.strictEqual( canIPlay(15, 12, 15), false, "15:00 shouldn't match to 12:00-15:00 prime-time");
    assert.strictEqual( canIPlay(23, 22,  1), true,  "23:00 should match to 22:00-01:00 prime-time");

    assert.strictEqual( canIPlay(20, 21,  1), false,  "20:00 shouldn't match to 21:00-01:00");
    assert.strictEqual( canIPlay(0, 22,  1), true,  "00:00 should match to 22:00-01:00 prime-time");
    assert.strictEqual( canIPlay(0, 14,  8), true,  "00:00 should match to 14:00-08:00 prime-time");
    assert.strictEqual( canIPlay(17, 20,  4), false,  "00:00 should match to 14:00-08:00 prime-time");
  });

});
