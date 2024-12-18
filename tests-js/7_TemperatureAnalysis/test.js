const { assert } = require("chai");

describe("Kyu7: Temperature analysis I", () => {

  it("Basic Tests", () => {

    function lowestTemp(t) {
      return t ? Math.min(...t.split(' ').map(Number)) : null;
      // return t ? Math.min(...t.split(' ').map(e => +e)) : null;
    }

    assert.equal(lowestTemp(''), null);
    assert.equal(lowestTemp('-1 50 -4 20 22 -7 0 10 -8'), -8);
    assert.equal(lowestTemp('18 27 -42 16 17 -43 36 45 -25 -24 19 -14'), -43);
  });

});
