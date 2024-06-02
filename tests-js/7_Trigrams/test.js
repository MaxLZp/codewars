const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Trigrams', function () {

  function trigrams( phrase ) {
    let res = '';
    for (let i = 3; i <= phrase.length; i++) {
      res += ' ' + (phrase.slice(i - 3, i).replace(/\s/g, '_'))
    }
    return res.trim();
  }

  it( "should return trigrams for the phrase", () => {
    assert.strictEqual(trigrams("the quick red"), "the he_ e_q _qu qui uic ick ck_ k_r _re red");
  });

  it( "should return trigrams for random phrase", () => {
    assert.strictEqual(trigrams("n wvAEy A u Iy F CC "), "n_w _wv wvA vAE AEy Ey_ y_A _A_ A_u _u_ u_I _Iy Iy_ y_F _F_ F_C _CC CC_");
  });

  it("should return an empty string for the phrase shorter than 3 chars", () => {
      assert.strictEqual( trigrams("no"), "" )
  });

});
