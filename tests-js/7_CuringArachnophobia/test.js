var assert = require('assert');

describe('Kyu 7: Curing Arachnophobia', function () {

  function drawSpider(legSize, bodySize, mouth, eye) {
    var body =
      "(".repeat(bodySize)
      + eye.repeat(Math.pow(2, bodySize) / 2)
      + mouth
      + eye.repeat(Math.pow(2, bodySize) / 2)
      + ")".repeat(bodySize);

    switch (legSize) {
      case 1: return "^"+body+"^";
      case 2: return "/\\"+body+"/\\";
      case 3: return "/╲"+body+"╱\\";
      case 4: return "╱╲"+body+"╱╲";
    }
  }

  describe('Fixed tests', () => {
    it('Tests', () => {
      assert.equal(drawSpider(1, 1, "W", "o"), "^(oWo)^")    ;
      assert.equal(drawSpider(2, 2, "w", "O"), "/\\((OOwOO))/\\");
      assert.equal(drawSpider(3, 3, "w", "0"), "/╲(((0000w0000)))╱\\");
    });
  });

});
