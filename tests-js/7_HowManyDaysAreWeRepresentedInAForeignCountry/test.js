var assert = require('assert');

describe('Kyu 7: How many days are we represented in a foreign country?', function () {

  function daysRepresented(trips){
    return Object.getOwnPropertyNames(trips.reduce((c, e) => {
      for (let i = e[0]; i <= e[1]; i++) {
        c[i] = 1;
      }
      return c;
    }, {})).length;
  }

  it("test for [[10,15], [25,35]]", function(){
    assert.equal(daysRepresented([[10,15], [25,35]]), 17);
  });

  it("test for [[2,8], [220,229], [10,16]]", function(){
    assert.equal(daysRepresented([[2,8], [220,229], [10,16]]), 24);
  });

  it("test for [[2,8], [6,16], [17,26]]", function(){
    assert.equal(daysRepresented([[2,8], [6,16], [17,26]]), 25);
  });

});