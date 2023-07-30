var assert = require('assert');

describe('Kyu 6: Detect Pangram', function () {

  function isPangram(string){
    return (new Set(string.replace(/[^a-z]/i, '').split(''))).size >= ('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
  }

  it("test1", () => {
    var string = "The quick brown fox jumps over the lazy dog."
    assert.strictEqual(isPangram(string), true)
  })

  it("test2", () => {
    var string = "This is not a pangram."
    assert.strictEqual(isPangram(string), false)
  });
});
