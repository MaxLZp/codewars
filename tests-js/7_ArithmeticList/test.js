var assert = require('assert');

describe('Kyu 7: Arithmetic List! Solution1', function () {

  var seqlist = function(first,c,l){
    const result = [];
    for (let index = 0; index < l; index++) {
      result.push(first + c*index);
    }
    return result;
  }

  it("containAllRots",function() {
    assert.deepEqual(seqlist(0,1,20),[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])
  })

});

describe('Kyu 7: Arithmetic List! Solution2', function () {

  var seqlist = function(first,c,l){
    for (var result = []; result.length < l; ) {
      result.push(first + c*result.length);
    }
    return result;
  }

  it("containAllRots",function() {
    assert.deepEqual(seqlist(0,1,20),[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])
  })

});
