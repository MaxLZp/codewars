var assert = require('assert');

describe('Kyu 8: Bin To Decimal', function () {

  it('solution1', function () {

    [ ["1",1], ["0",0], ["1001001", 73] ].forEach( ([inp, exp]) => assert.equal( binToDec(inp), exp ) )

    function binToDec(bin){
      return parseInt(bin, 2);
    }

  });

});
