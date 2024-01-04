var assert = require('assert');

describe('Kyu 7: Functional Addition', function () {

  function add(n) {
    return (add) => (n+add);
  }

  it('solution1', function () {
    assert.equal(add(1)(3), 4, 'add one to three equals four');
    assert.equal(add(3)(3), 6, 'add three to three equals six');
  })

});
