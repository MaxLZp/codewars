const {assert} = require("chai");

describe('Kyu 7: Even and Odd !', function () {

  function evenAndOdd(num){
    return [
      +(`${num}`.match(/[02468]/g) || ['0']).join(''),
      +(`${num}`.match(/[13579]/g) || ['0']).join('')
    ];
  }

  it("Examples", function() {
    assert.deepEqual(evenAndOdd(126453), [264, 153], `For input 126453`);
    assert.deepEqual(evenAndOdd(3012), [2, 31], `For input 3012`);
    assert.deepEqual(evenAndOdd(4628), [4628, 0], `For input 4628`);
  });

});
