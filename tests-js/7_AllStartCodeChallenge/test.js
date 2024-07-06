var assert = require('assert');

describe('Kyu 7: All Star Code Challenge #17', function () {

  function findYear(month, dayOfWeek){
    for (let year = 2014; year <= 2050; year++) {
      if ((new Date(year, month, 1)).getDay() == dayOfWeek) {

        return year;
      }
    }

    return 0;
  }

  it("containAllRots",function() {
    assert.strictEqual(findYear(11,2), 2015);
    assert.strictEqual(findYear(4,55), 0);
  })

});
