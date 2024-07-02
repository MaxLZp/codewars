const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Bear the Freelancer', function () {

  function bearDollars(arr) {
    var map = {
      'close friend': 25,
      'friend': 50,
      'acquaintance': 100,
      'default' : 125
    };

    return arr.reduce((c, e) => {
      return c + e[0] * (+map[e[1].toLowerCase()] || map['default']);
    }, 0);
  }

  it("tests", function() {
    assert.equal(bearDollars([[10, 'Close Friend'], [3, 'Acquaintance'], [7, 'Lead from web'], [6, 'Friend'], [2, 'It came from Facebook']]), 1975);
    assert.equal(bearDollars([]), 0);
    assert.equal(bearDollars([[ 1, 'constructor' ] ]), 125);
  });

});
