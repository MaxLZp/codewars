const {assert, config} = require("chai");
config.truncateThreshold = 0;

describe('Kyu 7: Running functions', function () {

  function running(lst, fn) {
    var r = [lst[0]];
    for(var i = 1; i < lst.length; i++) {
      r[i] = fn(r[i-1], lst[i]);
    }

    return r;

    // other
    // return lst.map((e, i) => lst.slice(0, i+1).reduce(fn));
  }

  const op = new function() {
    this.add = (a,b) => a + b;
    this.max = (a,b) => a >= b ? a : b;
  };

  it('solution1', function () {
    assert.deepEqual(running([1,1,1,1], op.add), [1,2,3,4]);
    assert.deepEqual(running([1,9,2,10], op.max), [1,9,9,10]);
  })

});
