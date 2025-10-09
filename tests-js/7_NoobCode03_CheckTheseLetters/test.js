const { assert } = require("chai");

describe('Kyu 7: noobCode 03: CHECK THESE LETTERS... see if letters in "String 2" are present in "String 1"', function () {

  function letterCheck(arr) {
    var lc = arr[0].toLowerCase();
    return arr[1].toLowerCase().split('').every(c => lc.indexOf(c) >= 0);
  }

  it("Tests", function () {
    assert.strictEqual(letterCheck(["trances", "nectar"]), true);
    assert.strictEqual(letterCheck(["THE EYES", "they see"]), true);
    assert.strictEqual(letterCheck(["assert", "staring"]), false);
    assert.strictEqual(letterCheck(["arches", "later"]), false);
    assert.strictEqual(letterCheck(["dale", "caller"]), false);
    assert.strictEqual(letterCheck(["parses", "parsecs"]), false);
    assert.strictEqual(letterCheck(["replays", "adam"]), false);
    assert.strictEqual(letterCheck(["mastering", "streaming"]), true);
    assert.strictEqual(letterCheck(["drapes", "compadres"]), false);
    assert.strictEqual(letterCheck(["deltas", "slated"]), true);
  });

});
