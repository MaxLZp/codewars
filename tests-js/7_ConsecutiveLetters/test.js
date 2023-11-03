var assert = require('assert');

describe('Kyu 7: Consecutive letters', function () {

  function solve(s){
    let ccc = [...s].map(c => c.charCodeAt(0)).sort((l, r) => l - r);
    for (let index = 0; index < ccc.length-1; index++) {
      if (ccc[index]+1 != (ccc[index+1])) { return false;}
    }
    return true;
  }

  it("Tests", () => {
    assert.strictEqual(solve("abc"),true);
    assert.strictEqual(solve("abd"),false);
    assert.strictEqual(solve("dabc"),true);
    assert.strictEqual(solve("abbc"),false);
  })
});
