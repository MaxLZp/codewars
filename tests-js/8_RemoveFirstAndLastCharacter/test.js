var assert = require('assert');

describe('Kyu 8: Remove First and Last Character', function () {

  function removeChar(str){
    return str.substring(1, str.length-1);
   };

  it('Simple test', function() {
    assert.strictEqual(removeChar('eloquent'), 'loquen');
    assert.strictEqual(removeChar('country'), 'ountr');
    assert.strictEqual(removeChar('person'), 'erso');
    assert.strictEqual(removeChar('place'), 'lac');
    assert.strictEqual(removeChar('ooopsss'), 'oopss');
  });

});
