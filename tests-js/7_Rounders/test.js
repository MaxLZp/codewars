var assert = require('assert');

describe('Kyu 7: Simple Fun #17: Rounders', function () {

  function rounders(value) {
    var p = 10;
    while(value > p) {
      value = Math.round(value / p) * p;
      p *= 10;
    }
    return value;
  }

  it("It should works for basic tests.", function(){
    assert.equal(rounders(15) , 20)
    assert.equal(rounders(1234) , 1000)
    assert.equal(rounders(1445) , 2000)
    assert.equal(rounders(14) , 10)
    assert.equal(rounders(99) , 100)
    assert.equal(rounders(10) , 10)
  })

});
