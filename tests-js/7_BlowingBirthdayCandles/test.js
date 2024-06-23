const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Blowing Birthday Candles', function () {

  function blowCandles(str) {
    var candles = [...str].map(Number);
    while (candles[0] === 0) {
      candles.shift();
    }

    var blows = 0;
    while (candles.length > 0) {
      candles[0] = Math.max(candles[0]-1, 0);
      if (candles.length > 1) { candles[1] = Math.max(candles[1] - 1, 0); }
      if (candles.length > 2) { candles[2] = Math.max(candles[2] - 1, 0); }
      blows++;
      while (candles.length > 0 && candles[0] === 0) {
        candles.shift();
      }
    }

    return blows;
  }

  it("Tests", function() {
    const tests = [
      ["1321", 3],
      ["0323456", 9],
      ["2113", 5],
      ["1110", 1],
      ["121", 2]
    ];

    for (const [inp, exp] of tests) {
      assert.strictEqual(blowCandles(inp), exp, `The candles are "${inp}"`);
    }
  });

});
