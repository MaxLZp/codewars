var assert = require('assert');

describe('Kyu 7: Hit Count', function () {

  function counterEffect(hitCount) {
    return [...hitCount].map((num) => {
      const res = [];
      for (let index = 0; index <= +num; index++) {
        res.push(index);
      }
      return res;
    });
   }

  it("Fixed Tests", () => {
    assert.deepEqual(counterEffect("1250"), [[0,1],[0,1,2],[0,1,2,3,4,5],[0]]);
    assert.deepEqual(counterEffect("0050"), [[0],[0],[0,1,2,3,4,5],[0]]);
    assert.deepEqual(counterEffect("0000"), [[0],[0],[0],[0]]);
  });

});
