const chai = require('chai');
const assert = chai.assert;

chai.config.truncateThreshold = 0;

describe('Kyu 7: Club Doorman', function () {

  // function passTheDoorMan(word){
  //   var char = word.match(/([a-z]+)\1/) || ['', ''];
  //   char = char[1];
  //   return char ? 3 * (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1) : 0;
  // }

  function passTheDoorMan(word){
    var char = word.replace(/([a-z])(?!\1)/g, '');
    return char ? 3 * (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1) : 0;
  }

  function doTest(word, expected) {
    assert.strictEqual(passTheDoorMan(word), expected, `Testing for word: ${JSON.stringify(word)}\n\n`);
  }

  it("Basic tests", function() {
    doTest("lettuce", 60);
    doTest("hill", 36);
    doTest("apple", 48);

    doTest("aple", 0);
  });

});
