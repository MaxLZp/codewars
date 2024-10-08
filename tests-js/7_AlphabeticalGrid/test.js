var assert = require('assert');

describe('Kyu 7: Alphabetical Grid', function () {

  function grid(N) {
    if (N < 0) { return null; }

    var result = '';
    const aChar = 'a'.charCodeAt(0);
    const zChar = 'z'.charCodeAt(0);
    const width = zChar - aChar + 1;
    for (let i = 0; i < N; i++) {
      for (let j = i, max = i + N; j < max; j++) {
        if (j != i && j < max) {
          result += ' ';
        }
        result += String.fromCharCode(aChar + (j % width));
      }
      if (i < N - 1) {
        result += "\n";
      }
    }

    return result;
  }

  it('Valid tests', function() {
    // assert.strictEqual(grid(0), '');
    assert.strictEqual(grid(1), 'a');
    assert.strictEqual(grid(2), 'a b\nb c');
    assert.strictEqual(grid(4), 'a b c d\nb c d e\nc d e f\nd e f g');
    assert.strictEqual(grid(6), 'a b c d e f\nb c d e f g\nc d e f g h\nd e f g h i\ne f g h i j\nf g h i j k');
  });
  it('Invalid tests', function() {
    assert.strictEqual(grid(-1), null);
    assert.strictEqual(grid(-5), null);
  });

});
