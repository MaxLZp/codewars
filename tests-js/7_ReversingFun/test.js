var assert = require('assert');

describe('Kyu 7: Reversing Fun', function () {

  function flipNumber(n)
  {
    if (n == '') { return ''; }
    var r = n.split('').reverse().join('');
    return r[0] + flipNumber(r.slice(1));
  }

  it("Sample tests", function() {
    assert.equal(flipNumber("012"),"201");
    assert.equal(flipNumber("012345"),"504132");
    assert.equal(flipNumber("0123456789"),"9081726354");
  });

});

