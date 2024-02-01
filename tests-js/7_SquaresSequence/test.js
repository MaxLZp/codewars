var { assert } = require('chai');

describe('Kyu 7: Squares sequence', function () {

  function squares(x, n) {
    if ( n <= 0 ) { return []; }
    var result = [x];
    for (let i = 1; i < n; i++) {
      result.push(Math.pow(result[i-1], 2));
    }
    return result;
  }

  it("Examples", () => {
    assert.sameOrderedMembers(squares(2,5),[2,4,16,256,65536]);
    assert.sameOrderedMembers(squares(3,3),[3,9,81]);
    assert.sameOrderedMembers(squares(5,3),[5,25,625]);
    assert.sameOrderedMembers(squares(10,4),[10,100,10000,100000000]);
  });

  it("Should return an empty array if n<=0", () =>{
    assert.sameOrderedMembers(squares(2,0), []);
    assert.sameOrderedMembers(squares(2,-5), []);
  });

});

describe('Kyu 7: Squares sequence. Solution 2', function () {

  function squares(x, n) {
    if ( n <= 0 ) { return []; }
    var result = [];
    for (let i = 0; i < n; i++) {
      result.push(x);
      x *= x;
    }
    return result;
  }

  it("Examples", () => {
    assert.sameOrderedMembers(squares(2,5),[2,4,16,256,65536]);
    assert.sameOrderedMembers(squares(3,3),[3,9,81]);
    assert.sameOrderedMembers(squares(5,3),[5,25,625]);
    assert.sameOrderedMembers(squares(10,4),[10,100,10000,100000000]);
  });

  it("Should return an empty array if n<=0", () =>{
    assert.sameOrderedMembers(squares(2,0), []);
    assert.sameOrderedMembers(squares(2,-5), []);
  });

});
