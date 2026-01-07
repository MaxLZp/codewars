const assert = require("assert");

describe('Kyu 7: Sum Times Tables', function () {

  function sumTimesTables(tables, min, max){
    var sum = ((min+max) / 2) * (max - min + 1);
    return tables.reduce((c, cur) => c + cur * sum, 0);
  }

  it('Tests', () => {
    assert.equal(sumTimesTables([2,3],1,3), 30);
    assert.equal(sumTimesTables([1,3,5],1,1), 9);
    assert.equal(sumTimesTables([1,3,5],1,10), 495);    
  })

});
