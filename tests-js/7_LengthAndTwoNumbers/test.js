const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Length and two values.', function () {

  function alternate(n, firstValue, secondValue){
    var result = [];
    for (let i = 0; i < n; i++) {
      result.push(i & 1 ? secondValue : firstValue);
    }

    return result;
  }

  it('small arrays', () => {
    assert.deepEqual(alternate(5, true, false), [true, false, true, false, true])
  });

  it('larger arrays', () => {
    assert.deepEqual(alternate(20, 'blue', 'red'), ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red'])
  });

  it('with 0', () => {
    assert.deepEqual(alternate(0, "lemons", "apples"), [])
  });

});
