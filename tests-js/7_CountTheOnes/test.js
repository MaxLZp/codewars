const { expect } = require('chai');

describe('Kyu 7: Count the Ones', function () {

  function hammingWeight(x){
    var result = 0;
    do {
      result += x % 2;
      x = Math.floor(x / 2);
    } while(x > 0)

    return result;
  }

  it("should return 2 for binary number 10", () => {
    const result = hammingWeight(10);
    expect(result).to.equal(2);
  });

  it("should return 3 for binary number 21", () => {
    const result = hammingWeight(21);
    expect(result).to.equal(3);
  });

});
