const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: That unites us', function () {

  function thatUnitesUs(array1, array2, n) {
    // var united = Array.from((new Set([...array1, ...array2])));
    // united.sort();
    // return united.slice(0, n);

    // or same in one line
    return Array.from(
      new Set( [...array1, ...array2].sort() )
    ).slice(0, n);
  }

  it("tests",function() {
    assert.deepEqual(thatUnitesUs(['a', 'c', 'z'], ['b', 'f', 'z'], 3), ['a', 'b', 'c']);
    assert.deepEqual(thatUnitesUs(['f', 'g', 'z'], ['c', 'f', 'g'], 3), ['c', 'f', 'g'])
    assert.deepEqual(thatUnitesUs(['f', 'g', 'z'], ['c', 'f', 'g'], 2), ['c', 'f'])
  })

});
