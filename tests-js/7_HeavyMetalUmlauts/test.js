const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: Help Bob count letters and digits', function () {

  it('solution1', function () {

    function heavyMetalUmlauts(boringText) {
      return boringText.replace(/[aoueiy]/gi, c => {
        const map = {
          "A": "Ä", "E": "Ë", "I": "Ï",
          "O": "Ö", "U": "Ü", "Y": "Ÿ",
          "a": "ä", "e": "ë", "i": "ï",
          "o": "ö", "u": "ü", "y": "ÿ"
        };
        return map[c];
      });
    }

    assert.strictEqual(heavyMetalUmlauts("Announcing the Macbook Air Guitar"), "Ännöüncïng thë Mäcböök Äïr Güïtär");
    assert.strictEqual(heavyMetalUmlauts("Facebook introduces new heavy metal reaction buttons"), "Fäcëböök ïntrödücës nëw hëävÿ mëtäl rëäctïön büttöns");
    assert.strictEqual(heavyMetalUmlauts("Strong sales of Google's VR Metalheadsets send tech stock prices soaring"), "Ströng sälës öf Gööglë's VR Mëtälhëädsëts sënd tëch stöck prïcës söärïng");
    assert.strictEqual(heavyMetalUmlauts("Vegan Black Metal Chef hits the big time on Amazon TV"), "Vëgän Bläck Mëtäl Chëf hïts thë bïg tïmë ön Ämäzön TV");

  });

});
