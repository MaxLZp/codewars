const assert = require("assert");

describe('Kyu 7: Array Info', function () {

  function arrayInfo(arr){
    if (arr.length == 0) { return 'Nothing in the array!'; }

    var result = [arr.length,0,0,0,0];
    arr.forEach(element => {
      if (`${element}`.match(/^-*\d+$/)) { result[1]++; }
      if (`${element}`.match(/^-*\d+\.\d+$/)) { result[2]++; }
      if (`${element}`.match(/^[a-z]+$/i)) { result[3]++; }
      if (`${element}`.match(/^\s+$/)) { result[4]++; }
    });

    return result.map(el => { return [el == 0 ? null : el]; })
  }

  it("Basic tests", () => {
    assert.deepEqual(arrayInfo([1,2,3.33,4,5.01,'bass','kick',' ']),[[8],[3],[2],[2],[1]]);
    assert.deepEqual(arrayInfo([0.001,2,' ']),[[3],[1],[1],[null],[1]]);
    assert.deepEqual(arrayInfo([]),'Nothing in the array!');
    assert.deepEqual(arrayInfo([' ']),[[1],[null],[null],[null],[1]]);
    assert.deepEqual(arrayInfo([{}]),[[1],[null],[null],[null],[null]]);
    assert.deepEqual(arrayInfo([' ',' ']),[[2],[null],[null],[null],[2]]);
    assert.deepEqual(arrayInfo(['jazz']),[[1],[null],[null],[1],[null]]);
    assert.deepEqual(arrayInfo([4]),[[1],[1],[null],[null],[null]]);
    assert.deepEqual(arrayInfo([3.1416]),[[1],[null],[1],[null],[null]]);
    assert.deepEqual(arrayInfo([4]),[[1],[1],[null],[null],[null]]);
    assert.deepEqual(arrayInfo([11,22,33.33,44.44,'hasan','ahmad']),[[6],[2],[2],[2],[null]]);
    assert.deepEqual(arrayInfo(['a','b','c','d',' ']),[[5],[null],[null],[4],[1]]);
    assert.deepEqual(arrayInfo([1,2,3,4,5,6,7,8,9]),[[9],[9],[null],[null],[null]]);
    assert.deepEqual(arrayInfo([1,2.23,'string',' ']),[[4],[1],[1],[1],[1]]);
    assert.deepEqual(arrayInfo([' ',' ']),[[2],[null],[null],[null],[2]]);
  });

});
