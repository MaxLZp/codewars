var assert = require('assert');

describe('Kyu 8: Remove duplicates from list', function () {
  function distinct(a) {
    return [...new Set(a)];
  }

  it(`Testing`, () => {
    assert.deepEqual(distinct([1]), [1]);
    assert.deepEqual(distinct([1,2]), [1,2]);
    assert.deepEqual(distinct([1,1,2]), [1,2]);
  });

});
