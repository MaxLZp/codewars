const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Sum The Strings: ARRAY EDITION', function () {

  function sumArr(a,b) {
    return a.map((v, i) => (+v + +b[i]).toString());
  }

  it('Tests', () => {
    assert.deepEqual(sumArr(['4','5','6','7','8'],['1','2','3','4','5']),['5','7','9','11','13']);
    assert.deepEqual(sumArr(['34','5','200','17','6'],['27','24','14','90','16']),['61','29','214','107','22']);
  })

});
