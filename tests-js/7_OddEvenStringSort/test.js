const assert = require('chai').assert

describe('Kyu 7: Odd-Even String Sort', function () {

  function sortMyString(S) {
    var odd = '';
    var even = '';
    for (let index = 0; index < S.length; index++) {
      index % 2 == 0 ? odd += S[index] : even += S[index];
    }
    return odd + ' ' + even;
  }

  it("Static Ones", function(){
    assert.strictEqual(sortMyString("CodeWars"), "CdWr oeas");
    assert.strictEqual(sortMyString("YCOLUE'VREER"), "YOU'RE CLEVER");
  });

});
