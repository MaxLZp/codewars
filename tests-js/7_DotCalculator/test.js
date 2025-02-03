const strictEqual = require("chai").assert.strictEqual;

describe('Kyu 7: Dot Calculator', function () {

  function dotCalculator (equation) {
    var match = equation.match(/(\.+) ([+\-*]|\/\/) (\.+)/);
    if (match == null) { return ""; }
    var count = 0;
    switch(match[2]) {
      case '+': count = match[1].length + match[3].length; break;
      case '-': count = match[1].length - match[3].length; break;
      case '*': count = match[1].length * match[3].length; break;
      case '//': count = match[1].length / match[3].length; break;
    }

    return '.'.repeat(count);
  }

  function doTest (string, expected) {
    const actual = dotCalculator(string);
    strictEqual(actual, expected, `for string:\n"${string}"\n`);
  }

  it("Fixed Tests", () => {
		doTest("..... + ...............", "....................");
		doTest("..... - ...", "..");
		doTest("..... - .", "....");
		doTest("..... * ...", "...............");
		doTest("..... * ..", "..........");
		doTest("..... // ..", "..");
		doTest("..... // .", ".....");
		doTest(". // ..", "");
		doTest(". - .", "");
  });

});
