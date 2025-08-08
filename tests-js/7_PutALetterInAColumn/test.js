var assert = require('assert');

describe('Kyu 7: Put a Letter in a Column', function () {

  function buildRowText(index, character) {
    var result = (new Array(9)).fill(' ');
    result[index] = character;
    return `|${result.join('|')}|`;
  }

  it(`Tests`, function() {
    assert.strictEqual(buildRowText(2, 'A'), '| | |A| | | | | | |');
    assert.strictEqual(buildRowText(0, 'A'), '|A| | | | | | | | |');
    assert.strictEqual(buildRowText(8, 'A'), '| | | | | | | | |A|');
  });
});
