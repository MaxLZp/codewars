const { assert } = require("chai");

describe('Kyu 7: No oddities here', function () {

  function noOdds(values) {
    // return values.filter(e => ((e & 1) != 1));
    return values.filter(e => !(e % 2));
  }

  it("Tests", function () {
    assert.deepEqual(noOdds([0,1]), [0]);
    assert.deepEqual(noOdds([0,1,2,3]), [0,2]);
  });

});
