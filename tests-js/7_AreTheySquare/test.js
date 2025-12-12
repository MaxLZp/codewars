const chai = require("chai");
const assert = chai.assert;;

describe('Kyu 7: Are they square?', function () {

  var isSquare = function(arr){
    return arr.length ? arr.every(e => Math.sqrt(e)% 1 == 0) : undefined;
  }

  it("Should pass description examples", () => {
    assert.equal(isSquare([1, 4, 9, 16, 25, 36]), true);
    assert.equal(isSquare([1, 2, 3, 4, 5, 6]), false);
    assert.equal(isSquare([]), undefined);
    assert.equal(isSquare([1, 2, 4, 15]), false); 
  });

});
