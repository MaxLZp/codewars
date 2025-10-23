const {assert, config} = require('chai');
config.truncateThreshold = 0;

describe('Kyu 7: Simple directions reversal', function () {

  function solve(arr) {
    var places = [];
    var directions = [];
    for (const dir of arr.reverse()) {
      var matches = dir.match(/(.*) on (.*)/)
      places.push(matches[2]);
      directions.push(matches[1]);
    }
    directions.unshift(directions.pop());

    return directions.map((e, i) => `${e == 'Right' ? 'Left' : (e == 'Left' ? 'Right' : e)} on ${places[i]}`);
  }

  it("Fixed Tests", () => {
    assert.deepEqual(solve(
        ['Begin on 3rd Blvd', 'Right on First Road', 'Left on 9th Dr']),
        ['Begin on 9th Dr', 'Right on First Road', 'Left on 3rd Blvd']);
    assert.deepEqual(solve(
        ["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]),
        ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']);
    assert.deepEqual(solve(['Begin on Road A']),['Begin on Road A']);
  });

});
