var assert = require('assert');

describe('Kyu 7: Reverse and Invert', function () {

  function reverseInvert(array){
    return array.filter((el) => (Number.isInteger(+el)))
      .map((el) => {
        return (el >= 0 ? -1 : 1)*(`${Math.abs(el)}`.split('').reverse().join(''))
      });
  }

  it("Sample tests", function() {
    assert.deepEqual(reverseInvert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
    assert.deepEqual(reverseInvert([-10]), [1]);
    assert.deepEqual(reverseInvert([-9,-18,99]), [9,81,-99]);
    assert.deepEqual(reverseInvert([1,12,'a',3.4,87,99.9,-42,50,5.6]),[-1,-21,-78,24,-5]);
    assert.deepEqual(reverseInvert([]), []);
  });

});
