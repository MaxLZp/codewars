const {assert} = require('chai');

describe('Kyu 7: Extending JavaScript Objects: Get First & Last Array Element', function () {

  Array.prototype.first = function() {
    return this[0];
  };
  Array.prototype.last = function() {
    return this[this.length-1];
  };

  it("example tests", () => {
    assert.strictEqual([2,5,7,3,4].first(), 2);
    assert.strictEqual([2,5,7,3,4].last(), 4);
    assert.strictEqual([].first(), undefined);
    assert.strictEqual([].last(), undefined);
  });
  it("methods should not mutate their input", () => {
    let xs = [0,1];
    void xs.first();
    assert.deepEqual( xs, [0,1], `.first() mutated its input` );
    void xs.last();
    assert.deepEqual( xs, [0,1], `.last() mutated its input` );
  });

});
