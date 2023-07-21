var assert = require('assert');

describe('Kyu 6: Transpose of a Matrix', function () {

  function transpose(input) {
    if (input.length == 0) return [];
    if (input[0].length == 0) return [[]];
    const result = [];
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        if (!result[j]) { result[j] = []; }
        result[j].push(input[i][j]);
      }
    }
    return result;
  }

  it("should test transpose", function() {
    assert.deepEqual(
      transpose([
        [false,11,false,4,"e",18,"e",18,11],
        [true,11,15,17,true,19,18,8,5]
      ]),
      [
        [ false, true ],
        [ 11, 11 ],
        [ false, 15 ],
        [ 4, 17 ],
        [ "e", true ],
        [ 18, 19 ],
        [ "e", 18 ],
        [ 18, 8 ],
        [ 11, 5 ]
      ]
    );
    assert.deepEqual(
      transpose([]),
      []
    );
    assert.deepEqual(
      transpose([[]]),
      [[]]
    );

  });
//[[6,17,"d","c","f"],[17,"d","d","c",10],[14,17,19,20,"e"],["f","b",4,8,"f"],[11,15,19,17,"b"],[15,7,7,17,6],[8,"f",6,7,4]]
//[[15,18,true,8,7,12,6],[3,13,11,18,5,11,17],[9,"e","b","a",13,9,18],[4,5,4,5,18,10,7],[13,2,6,10,11,19,"f"],[19,"f","c","b",1,17,7],[6,"d","e",3,11,5,14],[3,"e",true,"d","b",9,16],[3,17,"b",5,3,"c",false],["b","e",16,10,12,13,15]]
});
