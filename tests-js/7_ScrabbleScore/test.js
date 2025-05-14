const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe('Kyu 7: Scrabble Score', function () {

  function scrabbleScore(str){
    var $dict = {
      "E": 1,
      "A": 1,
      "I": 1,
      "O": 1,
      "N": 1,
      "R": 1,
      "T": 1,
      "L": 1,
      "S": 1,
      "U": 1,
      "D": 2,
      "G": 2,
      "B": 3,
      "C": 3,
      "M": 3,
      "P": 3,
      "F": 4,
      "H": 4,
      "V": 4,
      "W": 4,
      "Y": 4,
      "K": 5,
      "J": 8,
      "X": 8,
      "Q": 10,
      "Z": 10
    };

    return [...str].reduce((c, e) => c + ($dict[e.toUpperCase()] || 0), 0);
  }

  it("Sample Tests", function() {
    tester("", 0);
    tester('a', 1);
    tester("street", 6);
    tester(' a', 1);
    tester('f', 4);
    tester("quirky", 22)
    tester("MULTIBILLIONAIRE", 20);
    tester("st re et", 6);
    tester("alacrity", 13);
  });

  function tester(input, expected) {
    assert.strictEqual(scrabbleScore(input), expected, `for input: ${JSON.stringify(input)}\n`);
  }

});
