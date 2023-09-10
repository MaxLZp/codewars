var assert = require('assert');

describe('Kyu 7: Digits explosion (Other)', function () {

  function explode(s) {
    return s.replace(/\d/g, d => d.repeat(d));
  }

  const tests = [
    ["312", "333122"],
    ["102269", "12222666666999999999"],
    ["0", ""],
    ["000", ""],
    ["123", "122333"]
  ];
  for(const [input, expected] of tests)
    it(JSON.stringify(input), () => assert.strictEqual(explode(input), expected));

});
