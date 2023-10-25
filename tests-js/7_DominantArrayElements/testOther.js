var assert = require('assert');

describe('Kyu 7: Dominant array elements', function () {

  function solve(arr) {
    return arr.filter(
      (e, i) => {
        return arr.slice(i+1).every(x => x < e);
      }
    );
  }

  const tests = [
    [[16,17,14,3,14,5,2], [17,14,5,2]],
    [[92,52,93,31,89,87,77,105], [105]],
    [[75,47,42,56,13,55], [75,56,55]],
    [[67,54,27,85,66,88,31,24,49], [88,49]],
    [[76,17,25,36,29], [76,36,29]],
    [[104,18,37,9,36,47,28], [104,47,28]],
  ];

  for (let [input, expected] of tests) {
    it(`[${input}]`, function() {
      assert.deepEqual(solve(input), expected);
    });
  }
});
