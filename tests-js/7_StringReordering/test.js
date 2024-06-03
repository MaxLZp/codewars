const chai = require('chai'), { strictEqual } = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: String Reordering', function () {

  function sentence(arrayOfObjects) {
    return arrayOfObjects
      .sort((l, r) => { return Object.keys(l)[0] - Object.keys(r)[0]})
      .map((e) => (Object.values(e)[0]))
      .join(' ');
  }

  function doTest(input, expected) {
      const actual = sentence(input.map(obj => ({...obj})));
      strictEqual(actual, expected, `for input ${JSON.stringify(input)}\n\n`);
  }

  it("Sample tests", function() {
      doTest(
          [{'1': 'dog' }, {'2': 'took'}, {'4': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}],
          'dog took Vatsan for a spin'
      );
      doTest(
          [{'3': 'Jake.'}, {'5': 'Chinatown'}, {'1': 'Forget'},{'4': 'It is'}, {'2': 'it'}],
          'Forget it Jake. It is Chinatown'
      );
      doTest([ {'3': 'vatsan!'}, {'2': 'love'}, {'1': 'I'} ], 'I love vatsan!');
      doTest([ {'0': 'Wars'}, {'-1': 'Code'} ],'Code Wars');
  });

});
