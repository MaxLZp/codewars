const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Closing in Sum', function () {

  function closingInSum(n) {
    var s = `${n}`;
    var result = 0;
    var i = 0;
    var j = s.length - 1;
    for (; i < j; i++, j--) {
      result += +`${s[i]}${s[j]}`;
    }
    if (i == j) {
      result += +s[i];
    }

    return result;
  }

  it('Simple', function () {
    assert.strictEqual(closingInSum(121n), 13);
    assert.strictEqual(closingInSum(1039n), 22);
    assert.strictEqual(closingInSum(22225555n), 100);
    assert.strictEqual(closingInSum(2520n), 72);
    assert.strictEqual(closingInSum(5332824166496569n), 331);
    assert.strictEqual(closingInSum(1979672314137318116n), 485);
    assert.strictEqual(closingInSum(1795459644013947776n), 548);
    assert.strictEqual(closingInSum(2801980378842185820n), 426);
    assert.strictEqual(closingInSum(3440584288422776554n), 430);
    assert.strictEqual(closingInSum(1985124000275401986n), 342);
  })

});
