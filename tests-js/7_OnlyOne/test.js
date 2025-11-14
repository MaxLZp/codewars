var assert = require('assert');

describe('Kyu 7: Only one', function () {

  function onlyOne() {
    return 1 == [...arguments].reduce((c,e) => c + +e, 0);
  }

  it('solution1', function () {
    assert.equal(onlyOne(true, false), true);
    
    assert.equal(onlyOne(true, true, false), false);
  });

});
