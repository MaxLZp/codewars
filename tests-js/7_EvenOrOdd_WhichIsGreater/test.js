const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Even or Odd - Which is Greater?', function () {

  function evenOrOdd(str) {
    var sum = [...str].reduce((carry, num) => {
      return carry += +num % 2 == 0 ? +num : -1 * +num;
    }, 0);

    if (sum < 0) {
      return 'Odd is greater than Even';
    } else if (sum > 0) {
      return 'Even is greater than Odd';
    }
    return 'Even and Odd are the same';
  }

  it('solution1', function () {
    assert.strictEqual(evenOrOdd('12'), 'Even is greater than Odd');
    assert.strictEqual(evenOrOdd('123'), 'Odd is greater than Even');
    assert.strictEqual(evenOrOdd('112'), 'Even and Odd are the same');
  });

});
