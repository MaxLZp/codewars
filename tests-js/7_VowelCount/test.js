var assert = require('assert');

describe('Kyu 7: Vowel Count', function () {

  function getCount(str) {
    return str.replace(/[^aeiuo]/gi, '').length;
  }

  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });

});
