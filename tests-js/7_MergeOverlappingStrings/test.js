var assert = require('assert');

describe('Kyu 7: Merge overlapping strings', function () {

  function mergeStrings(first, second){
    for (var i = 0; i < first.length; i++) {
      if (new RegExp('^'+first.slice(i)+'').test(second)) {
        break;
      }
    }

    return first.slice(0, i) + second;
  }

  it('"Example 1"', () => {
    const expected = 'abcdefgh'
    const actual = mergeStrings('abcde', 'cdefgh')
    assert.equal(actual, expected)
  })

  it('"Example 2"', () => {
    const expected = 'abaabab'
    const actual = mergeStrings('abaab', 'aabab')

    assert.equal(actual, expected)
  })


  function mergeStringsOther(first, second){
    // \1 matches the same text as most recently matched by the 1st capturing group
    return `${first} ${second}`.replace(/(.*) \1/, '$1');
  }

});
