const assert = require("assert");

describe('Kyu 7: Sum The Array', function () {

  Array.prototype.sum = function() {
    return this.reduce((c, v) => c + v, 0);
  }

  it('Tests', () => {
    var tests = [
      [[1,2,3,4], 10],
      [[2,4,6,8], 20],
      [[93, 31, 62, 103], 289],
      [[397, 403, 764, 142], 1706]]

    tests.forEach(function (x) {
      assert.equal(x[0].sum(), x[1]);
    })
  })

});
