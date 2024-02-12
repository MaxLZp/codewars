var assert = require('assert');

describe('Kyu 7: V A P O R C O D E', function () {

  function vaporcode(string) {
    return [...string.replace(/\s/g, '').toUpperCase()].join('  ');
  }

  it("Fixed Tests", () => {
    assert.strictEqual(vaporcode("Lets go to the movies"),"L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S");
    assert.strictEqual(vaporcode("Why isnt my code working"),"W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G");
  });

});
