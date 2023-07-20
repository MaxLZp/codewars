var assert = require('assert');

describe('Kyu 7: Vampire Numbers', function () {

  function vampireTest(a, b) {
    return (`${a*b}`).split('').sort().join() === (`${a}`+`${b}`).split('').sort().join();
  }

  it("Fixed Tests", () => {
    assert.strictEqual(vampireTest(21,6), true, "Basic: 21 * 6 = 126 should return true")
    assert.strictEqual(vampireTest(204,615) , true, "Basic: 204 * 615 = 125460 should return true")
    assert.strictEqual(vampireTest(30,-51) , true, "One Negative: 30 * -51 = -1530 should return true")
    assert.strictEqual(vampireTest(-246,-510) , false, "Double Negatives: -246 * -510 = 125460 should return false (The negative signs aren't present on the product)")
    assert.strictEqual(vampireTest(2947050,8469153) , true, "Large: 2947050 * 8469153 = 24959017348650 should return true")
    assert.strictEqual(vampireTest(2947051,8469153) , false, "Large: 2947051 * 8469153 = 24959025817803 should return false")
  });

});
