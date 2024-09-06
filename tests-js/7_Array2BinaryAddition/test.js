const assert = require("assert");

describe('Kyu 7: Array2Binary addition', function () {

  function arr2bin(arr){
    var sum = 0;
    for (const iterator of arr) {
      if (! Number.isInteger(iterator)) {
        return false;
      }
      sum += iterator;
    }

    return sum.toString(2);
  }

  it("Should pass description examples", () => {
    assert.equal(arr2bin([1,2]), "11")
    assert.equal(arr2bin([1,2,3,4,5]), "1111")
    assert.equal(arr2bin([1,10,100,1000]), "10001010111")
    assert.equal(arr2bin([1,2,true]), false)
    assert.equal(arr2bin([1,2,'a']), false)
  });

});
