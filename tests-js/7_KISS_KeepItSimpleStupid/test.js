var assert = require('assert');

describe('Kyu 7: KISS - Keep It Simple Stupid', function () {

  it("Solution 1 Tests", () => {

    function isKiss(words) {
      var w = words.match(/[\w]+/gi);

      return w.every(e => e.length <= w.length) ? 'Good work Joe!' : 'Keep It Simple Stupid';
    }

    assert.equal(isKiss('Joe had a bad day'), "Good work Joe!");
    assert.equal(isKiss('Joe had some bad days'), "Good work Joe!");
    assert.equal(isKiss('Joe is having no fun'), "Keep It Simple Stupid");
    assert.equal(isKiss('Sometimes joe cries for hours'), "Keep It Simple Stupid");

  });

});
