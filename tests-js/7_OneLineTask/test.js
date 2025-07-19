var assert = require('assert');

describe('Kyu 7: One Line Task: Area Or Perimeter', function () {
  it('solution1', function () {
    areaOrPerimeter=(l,w)=>w-l?w+w+l+l:w*l

    assert.equal(areaOrPerimeter(4 , 4) , 16);
    assert.equal(areaOrPerimeter(6 , 10) , 32);
  });

});
