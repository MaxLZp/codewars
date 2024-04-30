var assert = require('assert');

describe('Kyu 7: Simple string division', function () {

  function solve(str,k){
    var kp = str.length-k;
    var nums = str.match(/\d/g) || [];
    for (let i = 0; i <= str.length - kp; i++) {
      nums.push(str.slice(i, i + kp));
    }
    return Math.max(...nums);
  }

  it("Fixed Tests", () => {
    assert.equal(solve('123',1), 23);
    assert.equal(solve('1234',1), 234);
    assert.equal(solve('1234',2), 34);
    assert.equal(solve('1234',3), 4);
  });

});
