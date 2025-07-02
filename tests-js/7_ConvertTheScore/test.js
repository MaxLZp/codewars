var assert = require('assert');

describe('Kyu 7: Convert the score', function () {

  function scoreboard(string) {
    var map = {
      "one": 1,
      "two": 2,
      "three": 3,
      "four": 4,
      "five": 5,
      "six": 6,
      "seven": 7,
      "eight": 8,
      "nine": 9, 
      "nil": 0
    };
    var props = Object.getOwnPropertyNames(map).join('|');

    return string.match(new RegExp(`(${props})`, 'gi')).map(e => map[e]);
  }

  it('solution1', function () {

    assert.deepEqual(scoreboard("The score is four nil"), [4,0], "Should return: [4,0]");
    assert.deepEqual(scoreboard("new score: two three"), [2,3], "Should return: [2,3]");
    assert.deepEqual(scoreboard("two two"), [2,2], "Should return: [2,2]");
    assert.deepEqual(scoreboard("Arsenal just conceded another goal, two nil"), [2,0], "Should return: [2,0]");

  });

});
