var assert = require('assert');

describe('Kyu 7: What time is it?', function () {

  it('solution1', function () {

    assert.equal(getMilitaryTime('12:00:01AM'), '00:00:01')
    assert.equal(getMilitaryTime('11:46:47PM'), '23:46:47')
    assert.equal(getMilitaryTime('01:02:03AM'), '01:02:03')

    function getMilitaryTime(input) {
      const matches = input.match(/((\d\d)(:\d\d:\d\d))([AP]M)/i);
      let hrs = +matches[2] == 12 ? 0 : +matches[2];
      if (matches[4] == 'PM') {
        hrs += 12;
      }
      return hrs < 10 ? '0'+hrs+matches[3] : hrs+matches[3];
    };
  });

});
