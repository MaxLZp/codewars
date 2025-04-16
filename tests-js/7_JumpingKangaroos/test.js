const { assert } = require('chai');

describe('Kyu 7: Jumping Kangaroos', function () {

  function kangaroo(kanga1, rate1, kanga2, rate2) {
    var steps = rate1 > rate2
      ? (kanga2 - kanga1) / (rate1 - rate2)
      : (kanga1 - kanga2) / (rate2 - rate1);

    // or simply
    // var steps = (kanga1 - kanga2) / (rate2 - rate1);

    return Number.isInteger(steps) && steps >= 0;
  }

  it ("should be a correct number from example Test Case", function(){
    assert.equal(kangaroo(0,3,4,2), true)
    assert.equal(kangaroo(0,9,16,4), false)
    assert.equal(kangaroo(0,2,5,3), false)
    assert.equal(kangaroo(1571,4240,9023,4234), true)
    assert.equal(kangaroo(-1571,4240,9023,4234), false)
    assert.equal(kangaroo(-7855,4240,9023,4234), true)
    assert.equal(kangaroo(43,5,49,3), true)
    assert.equal(kangaroo(9023,4240,1571,4234), false)
    assert.equal(kangaroo(129,15,147,9), true)
    assert.equal(kangaroo(129,15,147,90), false)
    assert.equal(kangaroo(0,2,100000,1), true)
    assert.equal(kangaroo(72893, 11125, 24432, 4202), false)
    assert.equal(kangaroo(13613, 299, 65130, 73), false)
  });

});
