var assert = require('assert');

describe('Kyu 7: Visible Dots On a Die', function () {
  //preload variable: dict
  const dict = {
    'D': 'disturbing',
    'M': 'mustache',
    'L': 'literal',
    'K': 'klingon',
    'J': 'joke',
    'T': 'turn',
    'I': 'ingestable',
    'N': 'newtonian',
    'G': 'gregarious',
    'C': 'confident',
    'O': 'oscillating',
    'E': 'eager',
    'W': 'weird',
    'A': 'awesome',
    'R': 'rant',
    'S': 'stylish'
  };

  var makeBackronym = function(string){
    return string.split('').map(function (letter) {
      return dict[letter.toUpperCase()];
    }).join(' ');
  };

  const testCases = [
    ['dgm', 'disturbing gregarious mustache'],
    ['lkj', 'literal klingon joke'],
    ['interesting', 'ingestable newtonian turn eager rant eager stylish turn ingestable newtonian gregarious'],
    ['codewars', 'confident oscillating disturbing eager weird awesome rant stylish'],
  ];

  for(const [input, expected] of testCases) {
    it(`Testing for ${JSON.stringify(input)}`, () => assert.strictEqual(makeBackronym(input), expected));
  }

});
