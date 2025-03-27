var assert = require('assert');

describe('Kyu 7: Its all backwards', function () {
  it('solution1', function () {

    function flipper(stringArr){
      return stringArr.map(e => e.length == 1 ? e : e.toLowerCase().replace(/(.)$/, (m => m.toUpperCase()))).reverse().join(' ');
    }

    assert.equal( flipper(['This', 'Is', 'A', 'Test']) , "tesT A iS thiS" );
    assert.equal( flipper(['This', 'Is', 'a', 'Test']) , "tesT a iS thiS" );

  });

});
