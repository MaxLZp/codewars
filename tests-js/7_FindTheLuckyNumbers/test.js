var assert = require('assert');

describe('Kyu 7: Find the lucky numbers', function () {

  var filterLucky=x=>{
    return x.filter(num => {
      return String(num).indexOf('7') >= 0;
    });
  }

  it("Fixed Tests", () => {
    assert.deepEqual( filterLucky([1,2,3,4,5,6,7,68,69,70,15,17]), [7,70,17] );
    assert.deepEqual( filterLucky([71,9907,69]), [71,9907] );
  });

});
