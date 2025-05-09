const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Return a string\'s even characters.', function () {

  function evenChars(string) {
    if (string.length < 2 || string.length > 100) {
      return "invalid string";
    }

    var result = [];
    for (let i = 1; i < string.length; i += 2) {
      result.push(string[i]);
    }
    return result;
  }

  function doTest(input, expected) {
    const actual = evenChars(input);
    const message = `Test failed for input: "${input}"\n\n`;
    assert.deepEqual(actual, expected, message);
  }

  it("Should work for valid strings", function() {
    doTest("1234", ["2", "4"]);
    doTest(";;;--", [";", "-"]);
    doTest("abcdefghijklm", ["b", "d", "f", "h", "j", "l"]);
  });

  it("Should work for invalid strings", function() {
    doTest("aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva", "invalid string");
    doTest("a", "invalid string");
    doTest("", "invalid string");
  });

});
