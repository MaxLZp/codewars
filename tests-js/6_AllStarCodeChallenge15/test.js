var assert = require('assert');

describe('Kyu 6: All Star Code Challenge #15', function () {

  function rotate(str){
    return [...str].map((element, index, array) => {
      array.push(array.shift());
      return array.join('');
    });
  }

  it("Tests", function() {
    var testOut = rotate("Hello");
    assert.equal(testOut.includes("elloH"), true);
    assert.equal(testOut.includes("lloHe"), true);
    assert.equal(testOut.includes("loHel"), true);
    assert.equal(testOut.includes("oHell"), true);
    assert.equal(testOut.includes("Hello"), true);
  });

});
