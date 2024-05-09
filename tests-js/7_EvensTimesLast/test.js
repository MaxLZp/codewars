var assert = require('assert');

describe('Kyu 7: Evens times last', function () {

  it('solution1', function () {
    function evenLast(numbers) {
      return numbers.reduce((c, v, i, a) => (c + (i%2 == 0 ? v : 0) * (a[a.length-1] || 0)), 0);
    }

    assert.equal(evenLast([2, 3, 4, 5]), 30)
  });

});
