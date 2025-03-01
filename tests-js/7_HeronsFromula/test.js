const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Heron\'s formula', function () {

  it('solution1', function () {

    function heron(a, b, c) {
      var s = (a + b + c) / 2;
      return +Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
    }

    function dotest(a, b, c, expected) {
      assert.approximately(heron(a, b, c), expected, 0.01, `With a = ${a}, b = ${b}, c = ${c}`);
    }

    dotest(3, 4, 5, 6);
    dotest(6, 8, 10, 24);

  });

});
