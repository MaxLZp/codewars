var assert = require('assert');

describe('Kyu 7: Extended weekends', function () {

  it('solution1', function () {
    function solve(a, b){
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sepr", "Oct", "Nov", "Dec"];

      var count = [];
      var start = new Date(a, 0);
      var end = new Date(b, 11, 31);
      while (start < end) {
        var y = start.getFullYear();
        var m = 1 + start.getMonth();
        var d = new Date(y, m, 0);
        if (d.getDate() == 31 && d.getDay() == 0) {
          count.push(months[d.getMonth()]);
        }
        start = new Date(y, m);
      }

      var length = count.length;
      return length > 0 ? [count[0], count[length-1], length] : [];
    }

    assert.deepEqual(solve(2016,2020),["Jan","May",5]);
    assert.deepEqual(solve(1900,1950),["Mar","Dec",51]);
    assert.deepEqual(solve(1800,2500),["Aug","Oct",702]);
  });

});
