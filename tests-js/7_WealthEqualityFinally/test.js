const { assert, config } = require('chai'); 
config.truncateThreshold = 0;


describe('Kyu 7: Wealth equality, finally!', function () {
  it('solution1', function () {

    function redistributeWealth(wealth) {
      var distributes = wealth.reduce((c, e) => c + e, 0) / wealth.length;
      for (let i = 0; i < wealth.length; i++) {
        wealth[i] = distributes;
      }
    }

    const wealthEqual = [5,5,5,5,5]; // already equal
    assert.strictEqual(redistributeWealth(wealthEqual),undefined,"do not return anything");
    assert.deepEqual(wealthEqual, [5,5,5,5,5], "wealth in input array should have been unaffected");
    const wealthUnequal = [0, 10]; // unequal
    assert.strictEqual(redistributeWealth(wealthUnequal),undefined,"do not return anything");;
    assert.deepEqual(wealthUnequal, [5, 5], "wealth in input array should have been redistributed");
    const wealthSingle = [5]; // single citizen
    assert.strictEqual(redistributeWealth(wealthSingle),undefined,"do not return anything");
    assert.deepEqual(wealthSingle, [5], "wealth in input array should have been unaffected");
    const wealthFloat = [3,2,2]; // floating point result
    assert.strictEqual(redistributeWealth(wealthFloat),undefined,"do not return anything");
    assert.deepEqual(wealthFloat, [2.3333333333333335,2.3333333333333335, 2.3333333333333335], "wealth in input array should have been redistributed");

  });

});
