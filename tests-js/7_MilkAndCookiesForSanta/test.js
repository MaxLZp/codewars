var assert = require('assert');

describe('Kyu 7: Milk and Cookies for Santa', function () {

  function timeForMilkAndCookies(date){
    return date.getMonth() == 11 && date.getDate() == 24;
  }

  it("example tests", function() {
    var year = 2013;
    var month = 11;//Date class is 0 based, so 11 = December
    var day = 24;
    assert.equal(timeForMilkAndCookies(new Date(year, month, day)), true);

    year = 2013;
    month = 10;
    day = 24;
    assert.equal(timeForMilkAndCookies(new Date(year, month, day)), false);
  });

});
