var assert = require('assert');

describe('Kyu 7: Thinkful - Number Drills: Romer temperature', function () {

  /**
   * See https://en.wikipedia.org/wiki/R%C3%B8mer_scale
   *
   * @param {*} temp
   * @returns
   */
  function celsiusToRomer(temp) {
    return (temp*21/40 + 7.5);
  }

  it('Sample tests', () => {
    assert.equal(celsiusToRomer(24), 20.1);
    assert.equal(celsiusToRomer(8), 11.7);
    assert.equal(celsiusToRomer(29), 22.725);
  })


});
