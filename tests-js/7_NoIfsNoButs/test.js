const { strictEqual } = require('chai').assert;

describe('Kyu 7: No ifs no buts', function () {

  function noIfsNoButs(a, b) {
    // Or use Math.sign(a-b) to evaluate the sign of the difference
    switch (true) {
      case (a > b):
        return `${a} is greater than ${b}`;
      case (a < b):
        return `${a} is smaller than ${b}`;
      case (b == a):
        return `${a} is equal to ${b}`;
    }
  }

      function doTest(a, b, expected) {
      const actual = noIfsNoButs(a, b);
      strictEqual(actual, expected, `for a = ${a} and b = ${b}`);
  }

  it("Should handle manual tests", function () {
      doTest(45, 51, "45 is smaller than 51");
      doTest(1, 2, "1 is smaller than 2");
      doTest(-3, 2, "-3 is smaller than 2");
      doTest(1, 1, "1 is equal to 1");
      doTest(100, 100, "100 is equal to 100");
      doTest(100, 80, "100 is greater than 80");
      doTest(20, 19, "20 is greater than 19");
  });

});
