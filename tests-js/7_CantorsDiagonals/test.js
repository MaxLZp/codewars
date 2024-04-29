var assert = require('assert');

describe('Kyu 7: Cantor\'s Diagonals', function () {

  function cantor(nestedList) {
    return nestedList.map((v,i) => (v[i] == 0 ? 1 : 0));
  }

  it("Example 1", function() {
    assert.deepEqual(cantor([[0, 0], [1, 1]]), [1, 0])
  })
  it("Example 2", function() {
    assert.deepEqual(cantor([[1, 1], [0, 0]]), [0, 1])
  })
  it("Example 3", function() {
    assert.deepEqual(cantor([[0, 1], [1, 0]]), [1, 1])
  })
  it("Example 4", function() {
    assert.deepEqual(cantor([[0, 0, 0], [1, 1, 1], [0, 1, 0]]), [1, 0, 1])
  })
  it("Example 5", function() {
    assert.deepEqual(cantor([[1, 0, 0], [0, 1, 0], [0, 0, 1]]), [0, 0, 0])
  })

});
