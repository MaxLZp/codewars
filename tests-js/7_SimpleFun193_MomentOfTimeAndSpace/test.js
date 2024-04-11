var assert = require('assert');

describe('Kyu 7: Simple Fun #193: Moment Of Time In Space', function () {

  it("Solution 1", () => {

    function momentOfTimeInSpace(moment) {
      var time = moment.match(/[1-9]/g) || [];
      var space = moment.length - time.length;
      time = time.reduce((c, v) => (+v + c), 0);

      var result = [false, false, false];
      result[1 + Math.sign(time - space)] = true;
      return result;
    }

    assert.deepEqual(momentOfTimeInSpace("12:30 am"),[false, false, true], '1');
    assert.deepEqual(momentOfTimeInSpace("12:02 pm"),[false, true, false], '2');
    assert.deepEqual(momentOfTimeInSpace("01:00 pm"),[true, false, false], '3');
    assert.deepEqual(momentOfTimeInSpace("11:12 am"),[false, false, true], '4');
    assert.deepEqual(momentOfTimeInSpace("05:20 pm"),[false, false, true], '5');
    assert.deepEqual(momentOfTimeInSpace("04:20 am"),[false, true, false], '6');
    assert.deepEqual(momentOfTimeInSpace("00:00 am"),[true, false, false], '7');
  });

  it("Solution 2", () => {

    function momentOfTimeInSpace(moment) {
      var time = moment.match(/[1-9]/g) || [];
      var space = moment.length - time.length;
      time = time.reduce((c, v) => (+v + c), 0);

      return [space > time, space == time, space < time];
    }

    assert.deepEqual(momentOfTimeInSpace("12:30 am"),[false, false, true], '1');
    assert.deepEqual(momentOfTimeInSpace("12:02 pm"),[false, true, false], '2');
    assert.deepEqual(momentOfTimeInSpace("01:00 pm"),[true, false, false], '3');
    assert.deepEqual(momentOfTimeInSpace("11:12 am"),[false, false, true], '4');
    assert.deepEqual(momentOfTimeInSpace("05:20 pm"),[false, false, true], '5');
    assert.deepEqual(momentOfTimeInSpace("04:20 am"),[false, true, false], '6');
    assert.deepEqual(momentOfTimeInSpace("00:00 am"),[true, false, false], '7');
  });

});
