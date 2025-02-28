const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Lucky Bus Ticket', function () {

  it('solution1', function () {

    function isLucky(ticket) {
      if (ticket.length != 6) {
        return false;
      }

      var sum = 0
      for (let i = 0; i < ticket.length; i++) {
        sum += i < 3 ? +ticket[i] : -1*ticket[i];
      }

      return sum == 0;
    }

    assert.strictEqual(isLucky('123321'), true)
    assert.strictEqual(isLucky('100001'), true)
    assert.strictEqual(isLucky('100200'), false)
    assert.strictEqual(isLucky('12341234'), false)
    assert.strictEqual(isLucky('12a12a'), false)
    assert.strictEqual(isLucky(''), false)

  });

});
