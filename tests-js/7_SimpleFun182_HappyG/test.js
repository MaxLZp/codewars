const { assert } = require('chai');

describe('Kyu 7: Simple Fun #182: Happy "g"', function () {


  it("soluttion 1", function () {

    function gHappy(str) {
      return [...str.matchAll(/g+/g)].every(e => e[0].length > 1);
    }

    function doTest(input, expected) {
      const actual = gHappy(input);
      assert.strictEqual(actual, expected, `for string "${input}"\n`);
    }

    doTest("", true);
    doTest("gg0gg3gg0gg", true);
    doTest("gog", false);
    doTest("ggg ggg g ggg", false);
    doTest("A half of a half is a quarter.", true);
    doTest("good grief", false);
    doTest("bigger is ggooder", true);
    doTest("gggggggggg", true);

    doTest("n12ggkgg3gg gggwggsggb", true);
  });

  it("soluttion 2", function () {

    function gHappy(str) {
      return str.replace(/g{2,}/g).match(/g/g) == null;
    }

    function doTest(input, expected) {
      const actual = gHappy(input);
      assert.strictEqual(actual, expected, `for string "${input}"\n`);
    }

    doTest("", true);
    doTest("gg0gg3gg0gg", true);
    doTest("gog", false);
    doTest("ggg ggg g ggg", false);
    doTest("A half of a half is a quarter.", true);
    doTest("good grief", false);
    doTest("bigger is ggooder", true);
    doTest("gggggggggg", true);

    doTest("n12ggkgg3gg gggwggsggb", true);
  });

});
