var assert = require('assert');

describe('Kyu 7: Putting the flatMap into the JS', function () {

  Array.prototype.flatMap = function(f) {
    var res = [];
    this.map(f).forEach((arr) => (res.push(...arr)));

    return res;

    // return [].concat(...this.map(f))
    // return this.reduce((s,n)=> s.concat(f(n)), []);
  };

  it(`Tests`, function() {
    assert.deepEqual([1].flatMap(x => [x, x-1, x+2]), [1, 0, 3]);
    assert.deepEqual(['a'].flatMap(x => [x, x, x]), ['a', 'a', 'a']);
    assert.deepEqual([0, 2].flatMap(x => [x, x, x]), [0, 0, 0, 2, 2, 2]);
    assert.deepEqual([].flatMap(x => [x, x, x]), []);
    assert.deepEqual([[],[]].flatMap(x => [x, x]), [[], [], [], []]);
  });
});
