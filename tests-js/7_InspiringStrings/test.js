var assert = require("chai").assert;

describe('Kyu 7: Inspiring Strings', function () {

  function longestWord(stringOfWords) {
    return stringOfWords.split(' ').reduce((c, v) => ( c = c.length > v.length ? c : v ));
  }

  it('"lonely"',        () => assert.strictEqual(longestWord('lonely') , 'lonely'))
  it('"a pair"',        () => assert.strictEqual(longestWord('a pair') , 'pair'))
  it('"a b c d e fgh"', () => assert.strictEqual(longestWord('a b c d e fgh') , 'fgh'))
  it('"one two three"', () => assert.strictEqual(longestWord('one two three') , 'three'))
  it('"red blue grey"', () => assert.strictEqual(longestWord('red blue grey') , 'grey'))

});
