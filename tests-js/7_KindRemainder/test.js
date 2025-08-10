const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Kind Rem(a)inder', function () {

  function kira(a, b, c) {
    return Math.max(...a.map((e, i) => e % b[i])) % 2 == 0 ? c.toLowerCase() : c.toUpperCase();
  }

  it("Tests", () => {
    var results = kira([16, 16], [10, 5], 'Doctor');
    assert.strictEqual(results, 'doctor');
  })


});
