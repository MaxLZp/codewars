const { assert } = require("chai");

describe('Kyu 7: Sum Array with different bases', function () {

  function sumItUp(numbersWithBases){
    return numbersWithBases.reduce((c, e) => c + parseInt(e[0], e[1]), 0);
  }

  it('Tests', () => {
    assert.equal(sumItUp([["101",2], ["10",8]]),13);
    assert.equal(sumItUp([["ABC",16], ["11",2]]),2751);
    assert.equal(sumItUp([["101",16],["7640",8],["1",9]]),4258);
  })

});
