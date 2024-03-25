var assert = require('assert');

describe('Kyu 7: Is it a letter?', function () {
  it('solution1', function () {

    function isItLetter(character) {
      return /[a-zA-Z]/.test(character);
    }

    assert.strictEqual( isItLetter('a'), true, `'a' is a letter` );
    assert.strictEqual( isItLetter('1'), false, `'1' is not a letter` );

  });

});
