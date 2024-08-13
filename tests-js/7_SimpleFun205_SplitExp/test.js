var assert = require('assert');

describe('Kyu 7: Simple Fun 205: Split Exp', function () {


  it("It should works for basic tests.", function(){

    function splitExp(n) {
      var result = [];

      var [p1, p2] = n.split('.');
      for (let i = 0; i < p1.length; i++) {
        if (+p1[i]) {
          result.push(p1[i] + '0'.repeat(p1.length - i - 1));
        }
      }
      if (p2) {
        for (let i = 0; i < p2.length; i++) {
          if (+p2[i]) {
            result.push('.' + '0'.repeat(i) + p2[i]);
          }
        }
      }

      return result;
    }

    assert.deepEqual(splitExp("7970521.5544"),[
      "7000000",
      "900000",
      "70000",
      "500",
      "20",
      "1",
      ".5",
      ".05",
      ".004",
      ".0004"])

     assert.deepEqual(splitExp("7496314"),[
      "7000000",
      "400000",
      "90000",
      "6000",
      "300",
      "10",
      "4"])

     assert.deepEqual(splitExp("0"),[])

     assert.deepEqual(splitExp("6"),["6"])

     assert.deepEqual(splitExp("1.0000000000"),["1"])

     assert.deepEqual(splitExp("0000000000.1"),[".1"])

     assert.deepEqual(splitExp( "0.99"),[
      ".9",
      ".09"])

     assert.deepEqual(splitExp( "1.000009"),[
      "1",
      ".000009"])

     assert.deepEqual(splitExp("1010101"),[
      "1000000",
      "10000",
      "100",
      "1"])

     assert.deepEqual(splitExp("1234567890.1234567890"),[
      "1000000000",
      "200000000",
      "30000000",
      "4000000",
      "500000",
      "60000",
      "7000",
      "800",
      "90",
      ".1",
      ".02",
      ".003",
      ".0004",
      ".00005",
      ".000006",
      ".0000007",
      ".00000008",
      ".000000009"])

    })

});
