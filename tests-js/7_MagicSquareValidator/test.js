const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Magic Square Validator', function () {

  function isMagical(square){
    return (new Set(square)).size == square.length
      && (15 == parseInt(square[0]) + parseInt(square[1]) + parseInt(square[2]))
      && (15 == parseInt(square[3]) + parseInt(square[4]) + parseInt(square[5]))
      && (15 == parseInt(square[6]) + parseInt(square[7]) + parseInt(square[8]))
      && (15 == parseInt(square[0]) + parseInt(square[4]) + parseInt(square[8]))
      && (15 == parseInt(square[2]) + parseInt(square[4]) + parseInt(square[6]));
  }

  it("Sample Tests", function() {

    assert.equal(isMagical([4, 9, 2, 3, 5, 7, 8, 1, 6]), true, "This is a valid magic square")
    assert.equal(isMagical([4, 9, 2, 3, 5, 7, 8, 6, 1]), false, "Some column(s) and diagonal(s) don't sum to 15")
    assert.equal(isMagical([4, 5, 2, 3, 9, 7, 8, 1, 6]), false, "Some row(s) don't sum to 15")

    assert.equal(isMagical([5, 5, 5, 5, 5, 5, 5, 5, 5]), false, "Must contain unique values")
    assert.equal(isMagical([4, 9, 2, '<3>', 5, 7, 8, 6, 1]), false, "Contains not integer value")
    assert.equal(isMagical([[2,7,6,`<1>`,5,`<9>`,4,3,8]]), false, "Contains not integer value")

  });

});
