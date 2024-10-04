var assert = require('assert');

describe('Kyu 7: Indexed capitalization', function () {

  it('solution1', function () {

    function capitalize(s,arr){
      var str = [...s];
      arr.forEach(e => e < str.length ? str[e] = str[e].toUpperCase() : '');

      return str.join('');

      //ver2.
      // return [...s].map((e, i) => (arr.includes(i) ? e.toUpperCase() : e)).join('');
    };

    assert.deepEqual(capitalize("abcdef",[1,2,5]),'aBCdeF');
    assert.deepEqual(capitalize("abcdef",[1,2,5,100]),'aBCdeF');
    assert.deepEqual(capitalize("codewars",[1,3,5,50]),'cOdEwArs');
    assert.deepEqual(capitalize("abracadabra",[2,6,9,10]),'abRacaDabRA');
    assert.deepEqual(capitalize("codewarriors",[5]),'codewArriors');
    assert.deepEqual(capitalize("indexinglessons",[0]),'Indexinglessons');

  });

});
