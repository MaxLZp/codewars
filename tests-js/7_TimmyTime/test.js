var assert = require('assert');

describe('Kyu 7: Timmy Time', function () {

  function changeTime(input, delta) {
    var d = new Date(`2000-01-01T${input}:00`);
    var dm = new Date(d.valueOf() + delta * 60000);

    return `${dm.getHours().toString().padStart(2, '0')}:${dm.getMinutes().toString().padStart(2, '0')}`;
  }

  it('increase by one minute for am time', function () {
      var input = '08:15';
      var model = changeTime(input, 1);

      assert.equal(model, '08:16');
  });

  it('decrease by one minute for am time', function () {
      var input = '08:15';
      var model = changeTime(input, -1);

      assert.equal(model, '08:14');
  });

});
