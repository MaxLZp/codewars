const chai = require('chai'), { assert } = chai;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Jenny the youngest detective', function () {

  function missingWord(nums, str) {
    str = str.replace(/\s/g, '').toLowerCase();
    nums.sort((a, b) => a - b);
    return str.length > nums[nums.length - 1] ? nums.map(e => str[e]).join('') : 'No mission today';
  }

  it("sample tests", function() {
    doTest([0, 3, 5], "I love you", "ivy")
    doTest([7, 10, 1], "see you later", "ear")
    doTest([29, 31, 8], "The quick brown fox jumps over the lazy dog", "bay")
    doTest([12, 4, 6], "Good Morning", "No mission today")
    doTest([1, 16, 21], "A purple pig and a green donkey flew a kite in the middle of the night", "pen")
    doTest([35, 8, 20], "A song can make or ruin your day if you let it get to you", "mug")
    doTest([20, 3, 27], "I love eating toasted cheese and tuna", "vet")
    doTest([50, 4, 6], "Hi everybody", "No mission today")
  });

  function doTest(indices, string, expected) {
      const message = `indices = ${JSON.stringify(indices)}\n` +
            `string = ${JSON.stringify(string)}\n`;
      const actual = missingWord(indices, string);
      assert.strictEqual(actual, expected, message);
  }


});
