var assert = require('assert');

describe('Holiday V - SeaSick Snorkelling', function () {


  it("Solution 1", () => {
    function seaSick(x){
      var changes = 0;
      for (var i = 1; i < x.length; i++) {
        if (x[i] != x[i-1]) { changes++; }
      }
      return (changes / x.length <= 0.2) ? "No Problem" : "Throw Up";
    }

    assert.strictEqual(seaSick("~"), "No Problem");
    assert.strictEqual(seaSick("_~~~~~~~_~__~______~~__~~_~~"), "Throw Up");
    assert.strictEqual(seaSick("______~___~_"), "Throw Up");
  });

});
