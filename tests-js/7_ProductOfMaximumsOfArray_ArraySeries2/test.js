var assert = require('assert');

describe('Kyu 7: Product Of Maximums Of Array (Array Series #2)', function () {

  function maxProduct(numbers, size){
    return numbers.sort((l, r) => (r-l)).slice(0,size).reduce((c, v) => (c*v), 1);
  }


  it(`Tests`, function() {
    assert.equal(maxProduct([4,3,5], 2), 20);
    assert.equal(maxProduct([10,8,7,9], 3), 720);
    assert.equal(maxProduct([8,6,4,6], 3), 288);
    assert.equal(maxProduct([10,2,3,8,1,10,4], 5), 9600);
    assert.equal(maxProduct([13,12,-27,-302,25,37,133,155,-14], 5), 247895375);
    assert.equal(maxProduct([-4,-27,-15,-6,-1], 2), 4);
    assert.equal(maxProduct([-17,-8,-102,-309], 2), 136);
    assert.equal(maxProduct([10,3,-27,-1], 3), -30);
    assert.equal(maxProduct([14,29,-28,39,-16,-48], 4), -253344);
    assert.equal(maxProduct([1], 1), 1);
  });
});
