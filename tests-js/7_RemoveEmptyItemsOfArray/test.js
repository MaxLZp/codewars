
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Remove Empty Items of Array', function () {

  function clean(arr) {
    return arr.filter((_, x) => x in arr);
  }

  it('Good stuff', () => {
    assert.deepEqual(clean([]), [], 'Empty Array');
    assert.deepEqual(clean(Array(500000)), [], '5000000 empty items');
    assert.deepEqual(clean([1, 2]), [1, 2], 'No empty items here');
    assert.deepEqual(clean([1, 2, , , 3, 4,]), [1, 2, 3, 4], 'Two Empty Items');
    assert.deepEqual(clean([1, 2, [],, 3]), [1, 2, [], 3], 'Sub-Arrays');
  });

  it('Works Against Falsey Values', () => {
    assert.deepEqual(clean([undefined, null, NaN, false, '', 0]), [undefined, null, NaN, false, '', 0], 'Falsey Values');
    assert.deepEqual(clean([undefined,,,, null,, NaN,, false, '', 4, 3, 2, 1, 0]), [undefined, null, NaN, false, '', 4, 3, 2, 1, 0], 'Falsey, Empty, Truthy');
  });

});
