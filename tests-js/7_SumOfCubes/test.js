var assert = require('assert');

describe('Kyu 7: Sum of Cubes', function () {
  function sumCubes(n){
    if (n==1) {return 1;}
    return sumCubes(n-1) + Math.pow(n, 3);
  }

  it('Tests', () => {
    assert.equal(sumCubes(1), 1);
    assert.equal(sumCubes(2), 9);
    assert.equal(sumCubes(3), 36);
    assert.equal(sumCubes(4), 100);
    assert.equal(sumCubes(10), 3025);
    assert.equal(sumCubes(123), 58155876);
  })

});
