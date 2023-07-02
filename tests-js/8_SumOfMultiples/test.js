var assert = require('assert');

describe('Kyu 8: Sum of Multiples', function () {
  it('solution1', function () {

    assert.equal(sumMul(0,0),"INVALID");
    assert.equal(sumMul(2,9),20);
    assert.equal(sumMul(4,-7),"INVALID");

    function sumMul(n,m){
      if (n >= m) {return 'INVALID'; }
      let result = 0;
      for (let index = 0; index < m / n; index++) {
        result += n * index;
      }
      return result;
    }
  });
});
