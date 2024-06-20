var assert = require('assert');

describe('Kyu 7: Least Larger', function () {

  it('solution1', function () {

    function leastLarger(a,i) {
      var val = Math.max(...a);
      var idx = -1;
      a.forEach((element, ei) => {
        if (element > a[i] && element <= val) {
          val = element;
          idx = ei;
        }
      });

      return idx;
    }

    assert.strictEqual( leastLarger( [4, 1, 3, 5, 6], 0 ), 3 );
    assert.strictEqual( leastLarger( [4, 1, 3, 5, 6], 4 ), -1 );
    assert.strictEqual( leastLarger( [1, 3, 5, 2, 4], 0 ), 3 );
  });

  it('solution2', function () {

    function leastLarger(a,i) {
      var leastMax = Math.min(...a.filter((e) => e > a[i]));

      return a.indexOf(leastMax);
    }

    assert.strictEqual( leastLarger( [4, 1, 3, 5, 6], 0 ), 3 );
    assert.strictEqual( leastLarger( [4, 1, 3, 5, 6], 4 ), -1 );
    assert.strictEqual( leastLarger( [1, 3, 5, 2, 4], 0 ), 3 );
  });

});
