var { assert } = require('chai');

describe('Kyu 7: Binary Pyramid 101', function () {

  function binaryPyramid(m,n){
    var result = 0;
    for (let i = m; i <= n; i++) {
      result += +i.toString(2);
    }

    return result.toString(2);
  }

  it("Should return something that isn't falsy", function() {
    assert.strictEqual(binaryPyramid(1,4), "1111010");
    assert.strictEqual(binaryPyramid(1,6), "101001101");
    assert.strictEqual(binaryPyramid(6,20), "1110010110100011");
    assert.strictEqual(binaryPyramid(21,60), "1100000100010001010100");
  });

});
