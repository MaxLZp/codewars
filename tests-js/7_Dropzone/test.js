const {assert,config} = require("chai"); 
config.truncateThreshold = 0;

describe('Kyu 7: Dropzone', function () {

  function dropzone(fire, dropzones) {
    var minDist = Number.MAX_VALUE;
    var zoneIdx = -1;
    dropzones.forEach((zone, idx) => {
      var dist = Math.sqrt( Math.abs(zone[0] - fire[0])**2 + Math.abs(zone[1] - fire[1])**2 );
      if (dist < minDist) {
        minDist = dist;
        zoneIdx = idx;
      }
    })

    return dropzones[zoneIdx];
  }

  it("description example test", function() {
    assert.deepEqual( dropzone( [1,1], [[0,1],[1,0],[2,2]] ), [0,1] );
  });
  it("more example tests", function() {
    assert.deepEqual( dropzone( [6,8], [[3,2],[6,1],[7,9]] ), [7,9] );
    assert.deepEqual( dropzone( [9,2], [[1,4],[9,9],[5,5]] ), [5,5] );
  });

});
