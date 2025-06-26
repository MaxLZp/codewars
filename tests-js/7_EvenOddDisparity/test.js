var assert = require('assert');

describe('Kyu 7: Even odd disparity', function () {

  it('solution1', function () {

    function solve(a) {
      return a.reduce((c, e) => isNaN(e) ? c : (e % 2 == 0 ? c + 1 : c - 1), 0);
    };
    // function solve(a) {
    //   return a.reduce((c, e) => {
    //     if (isNaN(e)) { return c; }
    //     c += e % 2 == 0 ? 1 : -1;
    //     return c
    //   }, 0);
    // };

    assert.strictEqual(solve([0,1,2,3]),0);
    assert.strictEqual(solve([0,1,2,3,'a','b']),0);
    assert.strictEqual(solve([0, 15,'z',16,'m', 13, 14,'c', 9, 10, 13,'u', 4, 3]),0);
    assert.strictEqual(solve([13, 6, 8, 15, 4, 8, 13]),1);
    assert.strictEqual(solve([1,'a', 17, 8,'e', 3,'i', 12, 1]),-2);
    assert.strictEqual(solve([5, 15, 16, 10, 6, 4, 16, 't', 13, 'n', 14, 'k', 'n', 0, 'q', 'd', 7, 9]),2);

  });

});
