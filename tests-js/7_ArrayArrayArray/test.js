const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Array Array Array', function () {

  /**
   * Other
   */
  function explode(x) {
    return x.every(isNaN) ? 'Void!' : Array(x.reduce((c, e) => c + (+e || 0), 0)).fill(x);
  }

  /**
   * My
   */
  // function explode(x) {
  //   var _x = x.filter(e => Number.isInteger(e));

  //   return _x.length ? _x.reduce((c, e) => {
  //     for (let i = 0; i < e; i++) {
  //       c.push(x);
  //     }
  //     return c;
  //   }, []) : 'Void!';
  // }

  it("Basic tests", () => {
    assert.deepEqual(explode([9, 3]), [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]);
    assert.deepEqual(explode(['a', 3]), [['a', 3], ['a', 3], ['a', 3]] );
    assert.deepEqual(explode([6, 'c']), [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]);
    assert.deepEqual(explode(['a', 'b']), 'Void!');
    assert.deepEqual(explode(["a", 0]), []);
  });

});
