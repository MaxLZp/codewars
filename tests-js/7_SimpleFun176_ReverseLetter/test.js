var assert = require('assert');

describe('Kyu 7: Simple Fun #176: Reverse Letter', function () {

  function reverseLetter(str) {
    return [...str.match(/[a-zA-Z]/g)].reverse().join('');
  }

  it("Fixed Tests", () => {
    assert.equal(reverseLetter("krishan"),"nahsirk")
    assert.equal(reverseLetter("ultr53o?n"),"nortlu")
    assert.equal(reverseLetter("ab23c"),"cba")
    assert.equal(reverseLetter("krish21an"),"nahsirk")
  });

});
