var assert = require('assert');

describe('Kyu 7: Reverse a Number', function () {

  // function reverseNumber(n) {
  //   return [...`${n}`.matchAll(/\d/g)].reverse().join('') * (n < 0 ? -1: 1);
  // }
  function reverseNumber(n) {
    return [...`${n}`.replace(/[^\d]/, '')].reverse().join('') * (n < 0 ? -1: 1);
  }

  it("Sample tests", function() {
    assert.equal(reverseNumber(123), 321)
    assert.equal(reverseNumber(-123), -321, 'Negative Numbers should be preserved')
    assert.equal(reverseNumber(1000), 1, 'Should handle numbers ending with "0"')
    assert.equal(reverseNumber(4321234), 4321234)
    assert.equal(reverseNumber(5), 5)
    assert.equal(reverseNumber(0), 0)
    assert.equal(reverseNumber(98989898), 89898989)
  });

});
