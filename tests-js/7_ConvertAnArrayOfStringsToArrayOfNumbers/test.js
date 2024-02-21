var { assert } = require('chai');

describe('Kyu 7: Convert an array of strings to array of numbers', function () {

  it('solution1', function () {

    function toNumberArray(stringarray){
      return stringarray.map((el) => (+el));
    }

    assert.sameOrderedMembers(toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3]);

  });

  it('solution2', function () {

    function toNumberArray(stringarray){
      return stringarray.map(Number);
    }

    assert.sameOrderedMembers(toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3]);

  });

});
