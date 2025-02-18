var assert = require('assert');

describe('Kyu 7: Recursive Ninja', () => {

  function chirp(n) {
    return n <= 1 ? 'chirp' : 'chirp-'+chirp(n-1);
  }

  it("basic test", () => {
    assert.equal(chirp(4), "chirp-chirp-chirp-chirp");
    assert.equal(chirp(2), "chirp-chirp");
  });

});
