var {assert} = require('chai');

describe('Kyu 7: Password validator', function () {

  it('Test', () => {

    function password(str) {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(str);
    }

    assert.strictEqual(password("Abcd1234"), true);
    assert.strictEqual(password("Abcd123"), false);
    assert.strictEqual(password("abcd1234"), false);
    assert.strictEqual(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"), true);
    assert.strictEqual(password("ABCD1234"), false);
    assert.strictEqual(password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"), true);
    assert.strictEqual(password("!@#$%^&*()-_+={}[]|\:;?/>.<,"), false);

  });

});

