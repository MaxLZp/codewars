var assert = require('assert');

describe('Kyu 7: Training JS #42: Regular Expression--( ?: ), ( ?= ) and ( ?! )', function () {

  it("Tests", function() {

    var regex=/\d{1,3}(?=(\d{3})+$)/g;
    function addCommas(money,reg){
      return money.replace(reg,x=>x+",");
    }

    assert.equal(addCommas("$123",regex) , "$123");
    assert.equal(addCommas("$1234",regex) , "$1,234");
    assert.equal(addCommas("$12345",regex) , "$12,345");
    assert.equal(addCommas("$1234567",regex) , "$1,234,567");
    assert.equal(addCommas("$123456789",regex) , "$123,456,789");
  });

});
