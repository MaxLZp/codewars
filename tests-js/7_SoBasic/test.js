const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: So basic', function () {

  function convertBase20ToDecimal(init){
    var result = parseInt(init, 20);
    return isNaN(result) ? -1 : result;
  }

  it('solution1', function () {
    assert.strictEqual( convertBase20ToDecimal( "1" ), 1 );
    assert.strictEqual( convertBase20ToDecimal( "A" ), 10 );
    assert.strictEqual( convertBase20ToDecimal( "K" ), -1 );
    assert.strictEqual( convertBase20ToDecimal( "50" ), 100 );
    assert.strictEqual( convertBase20ToDecimal( "JJ" ), 399 );
    assert.strictEqual( convertBase20ToDecimal( "0" ), 0 );
  });

});
