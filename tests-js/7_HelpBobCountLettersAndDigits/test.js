var assert = require('assert');

describe('Kyu 7: Help Bob count letters and digits', function () {

  it('solution1', function () {

    function countLettersAndDigits(input) {
      return input.replace(/[^a-zA-Z0-9]/g, '').length;
    }

    assert.equal(countLettersAndDigits("hel2!lo"), 6);
    assert.equal(countLettersAndDigits("n!!_ice!!123"), 7);
    assert.equal(countLettersAndDigits("1"), 1);
    assert.equal(countLettersAndDigits("?"), 0);
    assert.equal(countLettersAndDigits("12345f%%%t5t&/6"), 10);
    assert.equal(countLettersAndDigits("aBcDeFg090"), 10);
    assert.equal(countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"), 10);
  });

});
