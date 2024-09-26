var assert = require('assert');

describe('Kyu 7: Numbers in different systems', function () {

  const sysNums = (n, sys) => {
    const nf = n.toString(sys);

    return nf == +nf ? +nf : nf;
  };

  it("Should handle manual tests", function () {
    assert.equal(sysNums(5,2), 101);
    assert.equal(sysNums(5,8), 5);
    assert.equal(sysNums(250,2), 11111010);
    assert.equal(sysNums(250,16), "fa");
    assert.equal(sysNums(135,2), 10000111);
    assert.equal(sysNums(879,8), 1557);
    assert.equal(sysNums(3894,16), "f36");
  });

});
