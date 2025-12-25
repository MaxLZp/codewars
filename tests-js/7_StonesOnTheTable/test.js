const { assert } = require("chai");

describe('Kyu 7: Stones on the Table', function () {

  function solve(stones) {
    var result = 0;
    for(let i = 1; i < stones.length; i++) {
      result += stones[i-1] == stones[i] ? 1 : 0;
    }

    return result;
  }

  it("example tests",()=>{
    assert.strictEqual( solve(""), 0 );
    assert.strictEqual( solve("RRGGBB"), 3 );
    assert.strictEqual( solve("RGBRGB"), 0 );
    assert.strictEqual( solve("BGRBBGGBRRR"), 4 );
    assert.strictEqual( solve("GBBBGGRRGRB"), 4 );
    assert.strictEqual( solve("GBRGGRBBBBRRGGGB"), 7 );
  });

});
