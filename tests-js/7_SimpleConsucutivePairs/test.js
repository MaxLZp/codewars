var assert = require('assert');

describe('Kyu 7: Simple consecutive pairs', function () {

  function pairs(ar){
    var result = 0
      for (let i = 0; i < ar.length; i += 2) {
        result += (Math.abs(ar[i] - ar[i+1]) == 1) ? 1 : 0;
      }
      return result;
   };

  it("Fixed Tests", () => {
    assert.equal(pairs([1,2,5,8,-4,-3,7,6,5]),3);
    assert.equal(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]),2);
    assert.equal(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]),0);
    assert.equal(pairs([-55, -56, -7, -6, 56, 55, 63, 62]),4);
    assert.equal(pairs([73, 72, 8, 9, 73, 72]),3);
  });

});

describe('Kyu 7: Simple consecutive pairs. Solution 2', function () {

  function pairs(ar){
    const chunks = Array.from({length: Math.ceil(ar.length / 2)}, (v, i) => {
      return ar.slice(i*2, i*2+2);
    });
    return chunks.reduce((carry, current) => {
      if (Math.abs(current[0] - current[1]) == 1) { carry++; }
      return carry;
    }, 0);
   };

  it("Fixed Tests", () => {
    assert.equal(pairs([1,2,5,8,-4,-3,7,6,5]),3);
    assert.equal(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]),2);
    assert.equal(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]),0);
    assert.equal(pairs([-55, -56, -7, -6, 56, 55, 63, 62]),4);
    assert.equal(pairs([73, 72, 8, 9, 73, 72]),3);
  });

});
