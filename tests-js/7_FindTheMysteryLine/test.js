const chai = require('chai');
const assert = chai.assert;

describe('Kyu 7: Find the mystery line', function () {

  function findMysteryEquation(func) {
    return [func(1) - func(0), func(0)];
  }

  const delta = Math.pow(10, -7);
  it('Returns [2, 5] for y = 2x + 5', () => {
    const f = (x) => (2 * x) + 5;
    const [m, b] = findMysteryEquation(f);
    assert.approximately(2, m, delta);
    assert.approximately(5, b, delta);
  });
  it('Returns [1, 1] for y = x + 1', () => {
    const f = (x) => x + 1;
    const [m, b] = findMysteryEquation(f);
    assert.approximately(1, m, delta);
    assert.approximately(1, b, delta);
  });
  it('Returns [-1, 0] for y = -x', () => {
    const f = (x) => -1 * x;
    const [m, b] = findMysteryEquation(f);
    assert.approximately(-1, m, delta);
    assert.approximately(0, b, delta);
  })

});
