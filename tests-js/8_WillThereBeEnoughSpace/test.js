var assert = require('assert');

describe('Kyu 8: Will there be enough space?', function () {
  it('solution1', function () {

    assert.equal(enough(10, 5, 5), 0);
    assert.equal(enough(100, 60, 50), 10);
    assert.equal(enough(20, 5, 5), 0);

    function enough(cap, on, wait) {
      return wait <= cap - on ? 0 : wait - (cap-on);
    }
  });
});
