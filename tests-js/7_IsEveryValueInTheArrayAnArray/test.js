var assert = require('assert');

describe('Kyu 7: Is every value in the array an array?', function () {
  it('solution1', function () {

    const arrCheck = value => value.every((subValue) => (subValue instanceof Array ));

    assert.strictEqual(arrCheck([]), true);
    assert.strictEqual(arrCheck([['string']]), true);
    assert.strictEqual(arrCheck([[],{}]), false);
    assert.strictEqual(arrCheck([[1],[2],[3]]), true);
    assert.strictEqual(arrCheck(['A', 'R', 'R', 'A', 'Y']), false);

  });

});
