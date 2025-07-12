const chai = require('chai'), { assert } = chai;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Playing with Sets : Union', function () {

  function union(s1, s2){
      return new Set([...s1, ...s2]);
  }

  const A = new Set([1,2]), B = new Set([2,3]), C = new Set([1,2,3]);
  const EMPTY = new Set;

  it("A union A", function(){
      assert.deepEqual(union(A,A), A);
  });

  it("A union B", function() {
      assert.deepEqual(union(A, B), C);
      assert.deepEqual(union(B, A), C);
  });

  it("empty Set", function() {
      assert.deepEqual(union(A, EMPTY), A);
      assert.deepEqual(union(EMPTY, EMPTY), EMPTY);
  });

});

