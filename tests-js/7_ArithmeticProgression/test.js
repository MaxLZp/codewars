var assert = require('assert');

describe('Kyu 7: Arithmetic progression', function () {

  function arithmeticSequenceElements(a, d, n) {
    var arr = [];
    for (let i = 0, num = a; i < n; i++, num += d) {
      arr.push(num);
    }

    return arr.join(', ');
  }

  it("Basic test cases", () => {
    assert.strictEqual(arithmeticSequenceElements(1, 2, 5), "1, 3, 5, 7, 9");
    assert.strictEqual(arithmeticSequenceElements(1, 0, 5), "1, 1, 1, 1, 1");
    assert.strictEqual(arithmeticSequenceElements(1, -3, 10), "1, -2, -5, -8, -11, -14, -17, -20, -23, -26");
    assert.strictEqual(arithmeticSequenceElements(100, -10, 10), "100, 90, 80, 70, 60, 50, 40, 30, 20, 10");
  });

});
