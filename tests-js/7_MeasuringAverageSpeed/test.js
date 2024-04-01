var assert = require('assert');

describe('Kyu 7: Measuring Average Speed', function () {

  function calculateSpeed(distance, time) {
    var _dist = distance.match(/(\d+)(\w+)/);
    var _time = time.match(/(\d+)(\w+)/);
    _dist = _dist[2] == 'm' ? _dist[1] : _dist[1]*1000;
    _time = _time[2] == 's' ? _time[1] : _time[1]*60;
    return ((+_dist / +_time) * 2.23694).toFixed(0)+'mph';
  }

  it('should return speed in mph', function(){
    assert.equal(calculateSpeed("100m", "10s"), "22mph")
    assert.equal(calculateSpeed("3km", "5min"), "22mph")
    assert.equal(calculateSpeed("35m", "293s"), "0mph")
    assert.equal(calculateSpeed("573km", "39min"), "548mph")
  });

});
