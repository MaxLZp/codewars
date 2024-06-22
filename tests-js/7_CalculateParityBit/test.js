var assert = require('assert');

describe('Kyu 7: Calculate Parity bit!', function () {

  it("Solution 1", function() {

    function checkParity(parity, bin){
      for (var i = 0, bits = 0; i < bin.length; i++) {
        bits += bin[i] == '1' ? 1 : 0;
      }
      var ex = parity == 'even' ? 0 : 1;

      return (ex == bits % 2) ? 0 : 1;
    }

    assert.equal(checkParity('even','101010'), 1);
    assert.equal(checkParity('odd','101010'), 0);
    assert.equal(checkParity('even','101011'), 0);
    assert.equal(checkParity('odd','101011'), 1);
  });

  it("Solution 2", function() {

    function checkParity(parity, bin){
      return +(parity == (bin.split('1').length % 2 == 0 ? 'even' : 'odd'));
    }

    assert.equal(checkParity('even','101010'), 1);
    assert.equal(checkParity('odd','101010'), 0);
    assert.equal(checkParity('even','101011'), 0);
    assert.equal(checkParity('odd','101011'), 1);
  });

});
