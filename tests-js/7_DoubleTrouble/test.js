var assert = require('assert');

describe('Kyu 7: Double Trouble', function () {

  function trouble(x, t){
    const result = [];
    x.forEach((e,i,a) => {
      if (i == 0 && e != t) { result.push(x[0]); return; }
      if (t != e + result[result.length-1]) { result.push(e); }
    });
    return result;
  }

  it("Fixed Tests", () => {
    assert.deepEqual(trouble([1, 3, 5, 6, 7, 4, 3],7), [1, 3, 5, 6, 7, 4]);
    assert.deepEqual(trouble([4, 1, 1, 1, 4],2), [4, 1, 4]);
    assert.deepEqual(trouble([2, 2, 2, 2, 2, 2], 4), [2]);
    assert.deepEqual(trouble([2, 6, 2], 8), [2, 2]);
  });

});
