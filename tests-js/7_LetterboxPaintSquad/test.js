const { assert } = require("chai")

describe('Kyu 7: Letterbox Paint-Squad.', function () {

  function paintLetterboxes(start, end) {
    var result = [0,0,0,0,0,0,0,0,0,0];
    for (let i = start; i <= end; i++) {
      var str = `${i}`;
      for (let j = 0; j < str.length; j++) {
        result[+str[j]]++;
      }
    }

    return result;
  }

  it("ex", function(){
    assert.deepEqual(paintLetterboxes(125, 132), [1,9,6,3,0,1,1,1,1,1]);
  });

});
