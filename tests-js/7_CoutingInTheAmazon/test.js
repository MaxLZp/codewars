const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Counting in the Amazon', function () {

  function countArara(n) {
    var count = ['', 'anane', 'adak', 'adak anane', 'adak adak', 'adak adak anane', 'adak adak adak', 'adak adak adak anane', ];
    var result = 'adak adak adak adak '.repeat(n / 8) + count[n % 8];

    return result.trim();
  }

  it("Tests", function() {
    assert.equal(countArara(1),"anane");
    assert.equal(countArara(3),"adak anane");
    assert.equal(countArara(8),"adak adak adak adak");

    assert.equal(countArara(9),"adak adak adak adak anane");
    assert.equal(countArara(303),"adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak adak anane");
  });

});
