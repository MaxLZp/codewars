const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: 16+18=214', function () {

  function add(num1, num2) {
    var s1 = `${num1}`;
    var s2 = `${num2}`;
    s1 = s1.padStart(Math.max(s1.length, s2.length), '0');
    s2 = s2.padStart(Math.max(s1.length, s2.length), '0');
    var res = '';
    for(var i = 0; i < s1.length; i++) {
      res += `${+s1[i]+ +s2[i]}`;
    }


    return +res;
  }

  it("Real addition", () => {
    assert.strictEqual(add(2, 11), 13);
    assert.strictEqual(add(0, 1), 1);
    assert.strictEqual(add(0, 0), 0);
  });
  
  it("Silly addition", () => {
    assert.strictEqual(add(16, 18), 214);
    assert.strictEqual(add(26, 39), 515);
    assert.strictEqual(add(122, 81), 1103);
  });
  
  it("Big addition", () => {
    assert.strictEqual(add(1222, 30277), 31499);
    assert.strictEqual(add(1236, 30977), 31111013);
    assert.strictEqual(add(38810, 1383), 391193);
    assert.strictEqual(add(49999, 49999), 818181818);
  });

});
