const { assert } = require("chai");

describe('Kyu 7: Calculate Julies Age', function () {

  it("Solution 1", function() {

    function age(x, y){
      return x*y/(y-1);
   }

    const tester = (x, y, expected) => {
      const tolerance = 1e-9;
      const actual = age(x, y);
      assert.approximately(actual, expected, tolerance, `Failed for inputs:\n- x: ${x}\n- y: ${y}\n`);
    }

    tester(6, 3, 9);
    tester(-15, 0.25, 5);

  });

});
