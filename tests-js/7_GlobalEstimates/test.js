var assert = require('assert');

describe('Kyu 7: Global estimates', function () {

  function globalEstimate( estimates ) {
    return estimates.reduce(([c0, c1, c2], [min, max]) => {
      return [c0 + min, c1 + (min + max) / 2, c2 + max];
    }, [0, 0, 0]);
  }

  it("test", function() {  [
    [[[1, 2], [3, 4]], [4, 5, 6]],
    [[[0, 1], [0, 10]], [0, 5.5, 11]],
    [[[0, 0], [0, 0]], [0, 0, 0]],
    [[[1, 1], ], [1, 1, 1]],
    [[[1, 3], [1, 4], [1, 5]], [3, 7.5, 12]]
  ].forEach( ([est,ans]) => assert.deepEqual( globalEstimate(est), ans) )});

});
