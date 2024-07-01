const { assert } = require("chai");

describe('Kyu 7: Summing a number\'s digits', function () {

  function sumDigits(number) {
    return [...`${number}`.matchAll(/\d/g)].reduce((c, cur) => (c + +cur), 0);
  }

  it('Tests', () => {
    assert.strictEqual(sumDigits(10), 1);
    assert.strictEqual(sumDigits(99), 18);
    assert.strictEqual(sumDigits(-32), 5);
  })

});
