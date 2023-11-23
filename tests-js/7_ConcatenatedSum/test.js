var assert = require('assert');

describe('Kyu 7: Concatenated Sum', function () {

  function checkConcatenatedSum(num, repeat){
    return Math.abs(num) === [...`${Math.abs(num)}`].reduce((prev, cur) => {
      return prev += 1*(cur.repeat(repeat));
    }, 0);
  }

  it("Tests", () => {
    assert.deepEqual(checkConcatenatedSum(2997,3),true)
    assert.deepEqual(checkConcatenatedSum(-2997,3),true)
  })
});
