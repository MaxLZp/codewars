var assert = require('assert');

describe('Kyu 7: Plus - minus - plus - plus - ... - Count', function () {

  function catchSignChange(arr) {
    let changes = 0;
    for (let index = 1; index < arr.length; index++) {
      if ((arr[index-1] >= 0) != (arr[index] >=0)) {changes++;}
    }
    return changes;
  }

  const tests = [
    [[], 0],
    [[1,3,4,5], 0],
    [[-1,-3,-4,-5], 0],
    [[1,-3,-4,0,5], 2],
    [[-47,84,-30,-11,-5,74,77], 3],
  ];

  for (let [input, expected] of tests) {
    it(`[${input}]`, function() {
      assert.strictEqual(catchSignChange(input), expected);
    });
  }
});
