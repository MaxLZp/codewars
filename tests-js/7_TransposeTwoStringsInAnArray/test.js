const strictEqual = require('chai').assert.strictEqual;

describe('Kyu 7: Transpose two strings in an array', function () {

  it("Tests", function() {

    function transposeTwoStrings (array) {
      let result = "";
      for (let i = 0, max = Math.max(array[0].length, array[1].length); i < max; i++) {
        result += array[0][i] || " ";
        result += " ";
        result += array[1][i] || " ";
        result += i < max - 1 ? "\n" : "";
      }

      return result;
    }

    function doTest(array, expected) {
      const log = `for array :\n["${array[0]}", "${array[1]}"]\n`;
      const actual = transposeTwoStrings(array);
      strictEqual(actual, expected, log);
    }

		doTest(['Hello', 'World'], "H W\ne o\nl r\nl l\no d");
		doTest(['joey', 'louise'], "j l\no o\ne u\ny i\n  s\n  e");
		doTest(['a', 'cat'], "a c\n  a\n  t");
		doTest(['cat', ''], "c  \na  \nt  ");
		doTest(['!a!a!', '?b?b'], "! ?\na b\n! ?\na b\n!  ");
  });

});
