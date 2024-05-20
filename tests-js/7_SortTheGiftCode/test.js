const { assert } = require('chai')

describe('Kyu 7: Sort the Gift Code', function () {

  function sortGiftCode(code){
    return code.split('').sort().join('');
  }

  it('Fixed tests', () => {
    assert.strictEqual(sortGiftCode('abcdef'), 'abcdef', "sortGiftCode('abcdef')")
    assert.strictEqual(sortGiftCode('pqksuvy'), 'kpqsuvy', "sortGiftCode('pqksuvy')")
    assert.strictEqual(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz', "sortGiftCode('zyxwvutsrqponmlkjihgfedcba')")
  })

});
