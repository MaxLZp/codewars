var { assert } = require('chai');

describe('Kyu 7: String to Integer Hash', function () {
  it('solution1', function () {

    hashCode = function(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (31 * hash + str.charCodeAt(i)) | 0; // |0 forces 32-bit integer overflow
      }
      return hash;
    }

    assert.equal(hashCode("hello world"),1794106052);
    assert.equal(hashCode("hello dave"),-1605272966);
    assert.equal(hashCode("Codewars is awesome!!!"),718208364);

  });

});
