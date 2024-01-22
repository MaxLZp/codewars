var assert = require('assert');

describe('Kyu 7: Substring fun', function () {
  function nthChar(words){
    return words.reduce((prev, cur, i) => ( prev+cur[i] ), '');
   }

  it('Tests', () => {
    assert.equal(nthChar([]),'');
    assert.equal(nthChar(['yoda', 'best', 'has']), 'yes');
  })

});
