const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Compress sentences', function () {

  function compress(sentence) {
    var result = '';
    var dict = [];
    sentence.toLowerCase().split(' ').forEach(word => {
      var idx = dict.indexOf(word);
      if (idx < 0) {
        dict.push(word);
        idx = dict.length - 1;
      }
      result += idx;
    });

    return result;
  }

  it("Test 1", function() {
    assert.strictEqual(compress("The bumble bee"), "012")
    assert.strictEqual(compress("SILLY LITTLE BOYS silly little boys"), "012012")
    assert.strictEqual(compress("Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"), "01234567802856734")
    assert.strictEqual(compress("The number 0 is such a strange number Strangely it has zero meaning"), "012345617891011")
  });

});
