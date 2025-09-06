const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Mispelled word', function () {

    var mispelled = function(word1, word2)
    {
      // If equal, they are fine
      if (word1 === word2) return true;

      const len1 = word1.length;
      const len2 = word2.length;

      // If lengths differ by more than 1, impossible
      if (Math.abs(len1 - len2) > 1) return false;

      let i = 0, j = 0, differences = 0;

      while (i < len1 && j < len2) {
        if (word1[i] === word2[j]) {
          i++;
          j++;
        } else {
          differences++;
          if (differences > 1) return false;

          // If lengths equal → substitution case
          if (len1 === len2) {
            i++;
            j++;
          } 
          // If word1 longer → skip a char from word1
          else if (len1 > len2) {
            i++;
          } 
          // If word2 longer → skip a char from word2
          else {
            j++;
          }
        }
      }
        // Allow last char difference at end
      if (i < len1 || j < len2) differences++;

      return differences <= 1;
  }

  it("example tests", function() {
    assert.strictEqual(mispelled('versed', 'xersed'), true);
    assert.strictEqual(mispelled('versed', 'applb'), false);

    assert.strictEqual(mispelled('versed', 'v5rsed'), true);
    assert.strictEqual(mispelled('1versed', 'versed'), true);
    assert.strictEqual(mispelled('versed', 'versed1'), true);

    assert.strictEqual(mispelled('versed', 'aversed'), true);
    assert.strictEqual(mispelled('aaversed', 'versed'), false);
    assert.strictEqual(mispelled('versed', 'aaversed'), false);

    assert.strictEqual(mispelled('vertex', 'texver'), false);
  });

});
