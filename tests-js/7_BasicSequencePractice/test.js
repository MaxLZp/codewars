const {assert} = require("chai");

describe('Kyu 7: Basic Sequence Practice', function () {

  function sumOfN(n) {
    var result = [];
    for (let i = 0, s = 0, sign = Math.sign(n), max = Math.abs(n); i <= max; i++) {
      result.push(s += i * sign);
    }
    return result;
  }

  it("Sample Tests", function() {
    assert.sameOrderedMembers(sumOfN(3), [0, 1, 3, 6]);
    assert.sameOrderedMembers(sumOfN(-4), [0, -1, -3, -6, -10]);
    assert.sameOrderedMembers(sumOfN(1), [0, 1]);
    assert.sameOrderedMembers(sumOfN(-6), [0, -1, -3, -6, -10, -15, -21]);
  });

});

describe('Kyu 7: Basic Sequence Practice. Solution 2 - recursive', function () {

  function sumOfN(n) {
    var r = [];
    recur(n, r);

    return r;
  }

  function recur(n, r = []) {
    if ( n == 0 ) { r.push(0); return 0; }

    var s = recur(n - 1 * Math.sign(n), r) + n;
    r.push(s);

    return s;
  }

  it("Sample Tests", function() {
    assert.sameOrderedMembers(sumOfN(1), [0, 1]);
    assert.sameOrderedMembers(sumOfN(3), [0, 1, 3, 6]);
    assert.sameOrderedMembers(sumOfN(-4), [0, -1, -3, -6, -10]);
    assert.sameOrderedMembers(sumOfN(-6), [0, -1, -3, -6, -10, -15, -21]);
  });

});
