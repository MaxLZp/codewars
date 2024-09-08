var assert = require('assert');

describe('Kyu 7: How much will the apples cost?', function () {

  function apples(kilos, price) {
    for (var i = kilos, discount = 0; i >= 1 && discount <= 30; i -= 2, discount += 5) {}

    return kilos*price*((100-discount)/100);
  }

  it("Fixed Tests", () => {
    assert.equal(apples(0.5, 2.98), 1.49);
    assert.equal(apples(1, 6.7), 6.365);
    assert.equal(apples(6, 2.75), 14.025);
  });

});
