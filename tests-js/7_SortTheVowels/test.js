
describe('Kyu 7: Sort the Vowels!', function () {

  const chai = require('chai'), { strictEqual } = chai.assert;
  chai.config.truncateThreshold = 0;

  function sortVowels(s) {
    return (typeof s == 'string')
      ? s.split('').map((c) => (/[aeiou]/i.test(c) ? `|${c}` : `${c}|`)).join("\n")
      : '';
  }

  function doTest(input, expected) {
      const actual = sortVowels(input);
      const message = `for input "${input}"`;
      strictEqual(actual, expected, "");
  }

  it("Sample Tests", () => {
      doTest('Codewars', 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|');
      doTest('Rnd Te5T', 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|');
      doTest(1337, '');
      doTest(undefined, '');
  });

});
