const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: White or Black?', function () {

  function mineColor(file, rank) {
    // return ' abcdefgh'.indexOf(file) % 2 == rank % 2 ? 'black' : 'white';
    return (file.charCodeAt(0) - 'a'.charCodeAt(0) + 1) % 2 == rank % 2 ? 'black' : 'white';
  }

  it("Tests", function() {
    assert.strictEqual(mineColor("a", 8), "white");
    assert.strictEqual(mineColor("b", 2), "black");
    assert.strictEqual(mineColor("f", 5), "white");
  });

});
