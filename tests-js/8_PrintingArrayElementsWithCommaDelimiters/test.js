var assert = require('assert');

describe('Kyu 8: Printing Array elements with Comma delimiters', function () {


  it(`Testing`, () => {

    function printArray(array){
      return array.join();
    }

    var data = [2,4,5,2];
    assert.equal( printArray( data ), "2,4,5,2", "int test failed" );
  });

});