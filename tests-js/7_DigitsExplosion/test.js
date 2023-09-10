var assert = require('assert');

describe('Kyu 7: Digits explosion', function () {

  function explode(s) {
    return s.split('').map((el) => {
      return el.repeat(+el);
    }).join('');
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
