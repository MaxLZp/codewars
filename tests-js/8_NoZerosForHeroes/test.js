var assert = require('assert');

describe('Kyu 8: No zeros for heros ', function () {
  it('solution1', function () {

    assert.equal(noBoringZeros(1450), 145)
    assert.equal(noBoringZeros(960000), 96)
    assert.equal(noBoringZeros(1050), 105)
    assert.equal(noBoringZeros(-1050), -105)
    assert.equal(noBoringZeros(-105), -105)
    assert.equal(noBoringZeros(0), 0)

    function noBoringZeros(n) {
      return +(n.toString().replace(/0*$/, ''));
    }
  });
});
