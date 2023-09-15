var assert = require('assert');

describe('Kyu 7: Cat and Mouse - Easy Version', function () {

  it('solution1', function () {
    function catMouse(x){
      return x.match(/^C\.{4,}m$/gi) == null ? "Caught!": "Escaped!";
    }

    assert.strictEqual(catMouse('C...m'), "Caught!");
    assert.strictEqual(catMouse('C....m'), "Escaped!");
    assert.strictEqual(catMouse('C..m'), "Caught!");
    assert.strictEqual(catMouse('C.....m'), "Escaped!");
  });

});
