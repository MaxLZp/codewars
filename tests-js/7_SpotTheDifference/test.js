var {assert} = require('chai');

describe('Kyu 7: Spot the Differences', function () {

  function spot(s1,s2){
    var result = [];
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] != s2[i]) {
        result.push(i);
      }
    }
    return result;
  }

  it('solution2', function () {
    assert.deepEqual(spot('abcdefg', 'abcqetg'), [3, 5], 'Whoops!');
    assert.deepEqual(spot('Hello World!', 'hello world.'), [0, 6, 11], 'Capitalization and punctuation matter!');
    assert.deepEqual(spot('FixedGrey', 'FixedGrey'), [], 'Should return [] if the strings are the same!');
  });

});
