const { assert } = require('chai')

describe('Kyu 7: Between Extremes', function () {

  function betweenExtremes(numbers) {
    return Math.max(...numbers) - Math.min(...numbers);
  }

  it('Fixed tests', () => {
    assert.strictEqual(betweenExtremes([21, 34, 54, 43, 26, 12]), 42, 'betweenExtremes([21, 34, 54, 43, 26, 12])')
    assert.strictEqual(betweenExtremes([-1, -41, -77, -100]), 99, 'betweenExtremes([-1, -41, -77, -100])')
  })

});
