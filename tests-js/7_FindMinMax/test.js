const chai = require('chai');
const assert = chai.assert;

describe('Kyu 7: Find min and max', function () {

  function getMinMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  };

  it("Sample tests", () => {
    assert.deepEqual(getMinMax([1]),[1,1]);
    assert.deepEqual(getMinMax([1,2]),[1,2]);
    assert.deepEqual(getMinMax([2,1]),[1,2]);
  })

});
