var assert = require('assert');

describe('Kyu 7: Alternate capitalization', function () {

  it('solution1', function () {

    function capitalize(s){
      let odds = '';
      let evens = '';
      for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (index % 2) {
          odds += element;
          evens += element.toUpperCase();
        } else {
          odds += element.toUpperCase();
          evens += element;
        }
      }
      return [odds, evens];
    };

    assert.deepEqual(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
    assert.deepEqual(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
    assert.deepEqual(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
    assert.deepEqual(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
  });

});
