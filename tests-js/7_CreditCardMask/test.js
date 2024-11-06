var assert = require('assert');

describe('Kyu 7: Credit Card Mask', function () {

  function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#')+`${cc.slice(-4)}`;

    // return cc.slice(-4).padStart(cc.length,'#');
    // return cc.replace(/.(?=....)/g, '#');
  }

  it('solution1', function () {

    assert.equal(maskify('4556364607935616'), '############5616');
    assert.equal(maskify('1'), '1');
    assert.equal(maskify('11111'), '#1111');

  });

});
