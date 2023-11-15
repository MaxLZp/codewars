var assert = require('assert');

describe('Kyu 7: See You Next Happy Year', function () {
  it('solution1', function () {

    function nextHappyYear(year){
      while ((new Set(`${++year}`)).size < 4) { }
      return year;
    }

    assert.equal(nextHappyYear(1001),1023);
    assert.equal(nextHappyYear(1123),1203);
    assert.equal(nextHappyYear(2001),2013);
    assert.equal(nextHappyYear(2334),2340);
    assert.equal(nextHappyYear(3331),3401);
    assert.equal(nextHappyYear(1987),2013);
    assert.equal(nextHappyYear(5555),5601);
    assert.equal(nextHappyYear(7712),7801);
    assert.equal(nextHappyYear(8088),8091);
    assert.equal(nextHappyYear(8999),9012);
  })

});
