var assert = require('assert');

describe('Kyu 7: I\'m everywhere!', function () {

  function i(word) {
    var rules = [
      (word) => ( word == '' ),
      (word) => ( word[0] == 'I' ),
      (word) => ( (word.match(/[euioa]/ig)?.length || 0) >= (word.match(/[^euioa]/ig)?.length || 0) ),
      (word) => ( word == word.toLowerCase() ),
    ];

    return rules.some((rule) => (rule(word))) ? 'Invalid word' : `i${word}`;
  }

  it('Valid words', function() {
    assert.strictEqual(i('Phone'), 'iPhone');
    assert.strictEqual(i('World'), 'iWorld');
    assert.strictEqual(i('Human'), 'iHuman');
    assert.strictEqual(i('Programmer'), 'iProgrammer');
    assert.strictEqual(i('Fly'), 'iFly');
  });

  it('Invalid words', function() {
    assert.strictEqual(i(''),        'Invalid word');
    assert.strictEqual(i('Inspire'), 'Invalid word');
    assert.strictEqual(i('East'),    'Invalid word');
    assert.strictEqual(i('Peace'),   'Invalid word');
    assert.strictEqual(i('road'),    'Invalid word');
  });

});
