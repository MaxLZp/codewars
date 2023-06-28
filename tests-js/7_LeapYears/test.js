var assert = require('assert');

describe('Kyu 7: Leap Years', function () {
  it('solution1', function () {

    assert.equal(isLeapYear(1234), false, 'Year 1234');
    assert.equal(isLeapYear(1984), true, 'Year 1984');
    assert.equal(isLeapYear(2000), true, 'Year 2000');
    assert.equal(isLeapYear(2010), false, 'Year 2010');
    assert.equal(isLeapYear(2013), false, 'Year 2013');

    function isLeapYear(year) {
      return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    }
  });

});
