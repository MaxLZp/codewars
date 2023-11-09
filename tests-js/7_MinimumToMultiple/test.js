var assert = require('assert');

describe('Kyu 7: Minimum to multiple', function () {

  const A = [
    [1, 1, 0],
    [9, 4, 1],
    [10, 6, 2],
    [60, 45, 15],
    [57, 50, 7],
    [28, 16, 4],
    [84, 80, 4],
    [129, 49, 18],
    [150, 67, 16],
    [121, 46, 17],
    [83, 81, 2],
    [89, 74, 15],
    [127105, 256245, 127105],
  ];

  it("My", function() {
    function minimum(a, x) {
      return Math.min(
        a % x,
        ((Math.floor(a/x)+1)*x) - a
      );
    }

    for (let [a,x,exp] of A) {
      assert.deepEqual(minimum(a,x), exp);
    }
  });

  it("Other", function() {
    function minimum(a, x) {
      return Math.min(
        a % x,
        x - a % x
      );
    }

    for (let [a,x,exp] of A) {
      assert.deepEqual(minimum(a,x), exp);
    }
  });

});
