const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: NATO Phonetic Alphabet', function () {
  it('solution1', function () {

    var nato = (function() {
      var letters =  {
        "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
        "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
        "G": "Golf",   "H": "Hotel",   "I": "India",
        "J": "Juliett","K": "Kilo",    "L": "Lima",
        "M": "Mike",   "N": "November","O": "Oscar",
        "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
        "S": "Sierra", "T": "Tango",   "U": "Uniform",
        "V": "Victor", "W": "Whiskey", "X": "X-ray",
        "Y": "Yankee", "Z": "Zulu"
      }

      return function(word) {
        return word.split('').map(letter => letters[letter.toUpperCase()]).join(' ');
      }
    })()

    assert.strictEqual(nato('ab'), 'Alpha Bravo');
    assert.strictEqual(nato('hi'), 'Hotel India');
    assert.strictEqual(nato('abc'), 'Alpha Bravo Charlie');
    assert.strictEqual(nato('babble'), 'Bravo Alpha Bravo Bravo Lima Echo');
    assert.strictEqual(nato('Banana'), 'Bravo Alpha November Alpha November Alpha');
  });

});
