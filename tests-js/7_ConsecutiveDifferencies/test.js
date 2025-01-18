var assert = require('assert');

describe('Kyu 7: Consecutive Differences', function () {

  function differences(a) {
    if (a.length == 1) {
      return a[0];
    }

    var arr = [];
    for (let i = 1; i < a.length; i++) {
      arr.push(Math.abs(a[i] - a[i - 1]));
    }

    return differences(arr);
  }

  it("Tests", () => {
    assert.strictEqual( differences([1,2,3]), 0 );
    assert.strictEqual( differences([1,5,2,7,8,9,0]), 1 );
    assert.strictEqual( differences([2,3,1]), 1 );
    assert.strictEqual( differences([-1,2,3]), 2 );
  })
});
