const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Move 10', function () {

  function moveTen(s) {
    return [...s].map(e => {
      const ec = e.charCodeAt(0) + 10;
      const zc = 'z'.charCodeAt(0);
      return String.fromCharCode(ec > zc ? 'a'.charCodeAt(0) - 1 + ec % zc : ec);
    }).join('');
  }

  it("Solution 1. ", function() {
    assert.strictEqual(moveTen("testcase"), "docdmkco");
    assert.strictEqual(moveTen("codewars"), "mynogkbc");
    assert.strictEqual(moveTen("exampletesthere"), "ohkwzvodocdrobo");
  });


});
