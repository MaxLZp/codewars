var assert = require('assert');

describe('Kyu 7: Build a square', function () {

  function generateShape(integer){
    var result = '';
    for (let index = 0; index < integer - 1; index++) {
      result += '+'.repeat(integer) + '\n';
    }
    result += '+'.repeat(integer);
    return result;
  }

  it("Empty string", function() {
    assert.equal( generateShape(8) , '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++' )

  });

});
