var assert = require('assert');

describe('Kyu 7: Find the longest gap!', function () {

  it("Solution 1", () => {

    function gap(num) {
      return Math.max(0, ...[...Number(num).toString(2).matchAll(/0+(?=1)/g)].map((e) => e[0].length));
    }

    assert.equal(gap(9),2);
    assert.equal(gap(529),4);
    assert.equal(gap(20),1);
    assert.equal(gap(15),0);

  })

  it("Solution 2. Node8", () => {

    function gap(num) {
      return Math.max(0, ...(Number(num).toString(2).match(/0+(?=1)/g) || []).map((e) => e.length));
    }

    assert.equal(gap(9),2);
    assert.equal(gap(529),4);
    assert.equal(gap(20),1);
    assert.equal(gap(15),0);

  })

});
