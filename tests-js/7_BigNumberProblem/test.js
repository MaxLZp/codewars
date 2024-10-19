var assert = require('assert');

describe('Kyu 7: Big number problem', function () {

  function getNumberLength(n){
    // var len = `${n}`.match(/e\+(\d+)/);
    return len = `${n}`.match(/e\+(\d+)/), len ? 1 + +len[1] : 'wrong input';
  }

  it("Basic tests", function() {
    assert.equal(getNumberLength(7005623021525000000000000000), 28)
    assert.equal(getNumberLength(5236200000000000),'wrong input')
  });

});
