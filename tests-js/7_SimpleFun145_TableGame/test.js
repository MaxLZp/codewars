var assert = require('assert');

describe('Kyu 7: Simple Fun 145: Table Game', function () {

  function tableGame(table) {
    isValid = table[1][1] == table[0][1] + table[2][1]
      && table[1][1] == table[1][0] + table[1][2]
      && table[1][1] == table[0][0] + table[0][2] + table[2][0] + table[2][2];

    return isValid ? [table[0][0], table[0][2], table[2][0], table[2][2], ] : [-1];
  }

  it("Fixed Tests", () => {
    assert.deepEqual(tableGame([
      [1,2,1],
      [2,4,2],
      [1,2,1]]),[1, 1, 1, 1])

     assert.deepEqual(tableGame([
      [3,7,4],
      [5,16,11],
      [2,9,7]]),[3, 4, 2, 7])

     assert.deepEqual(tableGame([
      [1,4,2],
      [5,10,5],
      [4,7,3]]),[-1])

     assert.deepEqual(tableGame([
      [2,4,2],
      [4,6,4],
      [2,4,2]]),[-1])

     assert.deepEqual(tableGame([
      [2,4,2],
      [4,8,4],
      [2,4,2]]),[2, 2, 2, 2])

     assert.deepEqual(tableGame([
      [1,3,2],
      [5,10,5],
      [4,7,3]]),[1, 2, 4, 3])

     assert.deepEqual(tableGame([
      [1,2,1],
      [1,2,1],
      [1,2,1]]),[-1])
  });

});
