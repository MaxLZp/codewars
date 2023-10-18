var assert = require('assert');

describe('Kyu 7: String Merge!', function () {
  it('solution1', function () {

    function stringMerge(string1, string2, letter){
      return string1.substr(0, string1.indexOf(letter))
        + string2.substr(string2.indexOf(letter));
    }

    assert.equal(stringMerge("person","here", "e"), "pere");
    assert.equal(stringMerge("apowiejfoiajsf","iwahfeijouh", "j"), "apowiejouh");
    assert.equal(stringMerge("abcdefxxxyzz","abcxxxyyyxyzz", "x"), "abcdefxxxyyyxyzz");
    assert.equal(stringMerge("12345654321","123456789", "6"), "123456789");
    assert.equal(stringMerge("JiOdIdA4","oopopopoodddasdfdfsd", "d"), "JiOdddasdfdfsd");
    assert.equal(stringMerge("incredible","people", "e"), "increople");
  });

});
