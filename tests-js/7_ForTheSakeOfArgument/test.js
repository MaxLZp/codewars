var assert = require('assert');

describe('Kyu 7: For the sake of argument', function () {
  var numbers = function numbers() {
    return [...arguments].every(e => typeof e === 'number');
  }
  
  it("numbers(1, 12, 3, 100)", () => {
    assert.strictEqual(numbers(1, 12, 3, 100), true);
  });

  it("numbers('1', '2', '3', '4')", () => {
    assert.strictEqual(numbers("1", "2", "3", "4"), false);
  });

  it("numbers(1)", () => {
    assert.strictEqual(numbers(1), true);
  });

  it("numbers(1, '2', [3, 4], 'a')", () => {
    assert.strictEqual(numbers(1, "2", [3, 4], "a"), false);
  });

  it("numbers(1, NaN, 3)", () => {
    assert.strictEqual(numbers(1, NaN, 3), true);
  });

  it("numbers(null)", () => {
    assert.strictEqual(numbers(null), false);
  });

});
