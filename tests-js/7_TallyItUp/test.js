const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("Tally it up", () => {

  var scoreToTally = function(score){
    var result = 'e <br>'.repeat(Math.floor(score / 5));
    result += score % 5 ? String.fromCharCode('a'.charCodeAt(0)  - 1 + score % 5) : '';

    return result;
  }

  it("Basic Tests", () => {
    assert.equal(scoreToTally(3),'c', "Should return 'c'");
    assert.equal(scoreToTally(10),'e <br>e <br>', "Should return 'e <br>e <br>'");
    assert.equal(scoreToTally(9),'e <br>d', "Should return 'e <br>d'");
  });

});
