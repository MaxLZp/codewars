const strictEqual = require("chai").assert.strictEqual;

function compare(s1, s2) {
  if (null == s1 || s1.match(/[^a-zA-Z]/)) {s1 = "";}
  if (null == s2 || s2.match(/[^a-zA-Z]/)) {s2 = "";}

  return [...s1.toUpperCase()].reduce(function(prev, cur) {
      return prev += cur.charCodeAt(0);
    }, 0)
    ==
    [...s2.toUpperCase()].reduce(function(prev, cur) {
      return prev += cur.charCodeAt(0);
    }, 0);

}

function doTest (s1, s2, expected) {
	const actual = compare(s1, s2);
  const quote = str => str === null ? null : `"${str}"`;
	strictEqual(actual, expected, `for strings:\n${quote(s1)}\n${quote(s2)}\n`);
}

describe('Kyu 7: Compare Strings by Sum of Chars', function () {

  it("sample tests", () => {
    doTest("AD", "BC", true);
    doTest("AD", "DD", false);
    doTest("gf", "FG", true);
    doTest("Ad", "DD", false);
    doTest("zz1", "", true);
    doTest("ZzZz", "ffPFF", true);
    doTest("kl", "lz", false);
    doTest("!!", "7476", true);
    doTest("##", "1176", true);

    doTest(null, "BC", false);
    doTest(null, null, true);
    doTest(null, "", true);
    doTest("", "", true);
  });

});
