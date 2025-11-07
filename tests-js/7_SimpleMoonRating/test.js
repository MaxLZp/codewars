var assert = require('assert');

describe('Kyu 7: Simple Moon Rating', function () {

  function moonRating(rating) {
    var f = Math.floor(rating / 2);
    var r = Math.round(rating % 2);
    return ('o'.repeat(f) + (r == 2 ? 'o' : (r == 1 ? 'c' : 'x')))
      .padEnd(5, 'x')
      .substring(0, 5);
   }

  const moons = {'o':'\u{1f315}', 'c': '\u{1f317}', 'x': '\u{1f311}'}

  let results = { 
                0: 'xxxxx',
                0.6: 'cxxxx',
                1.5: 'oxxxx',
                3.9: 'ooxxx',
                5: 'oocxx',
                6: 'oooxx',
                7.2: 'ooocx',
                8.7: 'ooooc',
                10: 'ooooo'
              }

  const stringMoons = string => {
    return string.split('').map( letter => moons[letter] ).join('')
  }

  Object.keys(results).forEach( key => { 
    it(stringMoons(results[key]), function() {
      assert.equal(moonRating(Number(key)), results[key]);
    });
  });

});
