const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe('Kyu 7: Return substring instance count', function () {

  function solution(fullText, search) {
    return (fullText.match(new RegExp(`${search}`, 'g')) || []).length;
  }

  function doTest(fullText, search, expected) {
    assert.strictEqual(solution(fullText, search), expected);
  }

  const testCases = [
    ["abcdeb", "b", 2],
    ["abcdeb", "a", 1],
    ["ccddeeccddeecc", "cc", 3],
    ["aabb", "cc", 0],
    ["bbaa", "a", 2],
    ["abab", "a", 2],
    ["abcdefdvbhibjkb", "b", 4],
    ["abccded", "cc", 1],
    ["abccded", "d", 2],

    // overlaps
    ["aaabbbccc", "bb", 1],
    [",,,..239,,,,,.,", ",,", 3],
  ];

  for (let [fullText, search, expected] of testCases) {
    it(`solution("${fullText}", "${search}")`, function() {
      doTest(fullText, search, expected);
    });
  }

});
