var assert = require('assert');

describe('Kyu 7: Every archer has its arrows', function () {

  function archersReady(archers){
    return archers.length ? archers.every(arrows => arrows >= 5) : false;
  }

  it('solution1', function () {
    assert.equal(archersReady([]), false, "Should handle no archers");
    assert.equal(archersReady([1, 2, 3, 4]), false, "Should handle unprepared archers");
    assert.equal(archersReady([5, 6, 7, 8]), true, "Should handle prepared archers");
    assert.equal(archersReady([1, 2, 3, 4, 5, 6, 7, 8]), false, "Should handle mixed archers");
  });

});
