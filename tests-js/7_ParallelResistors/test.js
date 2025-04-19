var assert = require('assert');

describe('Kyu 7: Parallel resistors', function () {

  it('Test', () => {

    function resistor_parallel() {
      return 1 / [...arguments].reduce((c, i) => c + 1/i, 0) ;
    }

    assert.equal(resistor_parallel(20, 20), 10.0)
    assert.equal(resistor_parallel(20, 20, 40), 8.0)

  });

});

