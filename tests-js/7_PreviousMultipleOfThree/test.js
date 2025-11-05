const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Previous multiple of three', function () {

  const prevMultOfThree = n => {
    while(n > 0) {
      if (n % 3 == 0) {
        return n;
      }
      n = Math.floor(n / 10);
    }
    return null;
  }

  const answer = [null, null, 36, 12, 9] ;
  [1, 25, 36, 1244, 952406].forEach((q, i) =>
    it(`n = ${q}`, function() {
      assert.strictEqual( prevMultOfThree(q), answer[i] );
    }));

});
