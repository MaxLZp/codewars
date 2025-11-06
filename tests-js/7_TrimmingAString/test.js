const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Trimming a string', function () {

  function trim(str, size) {
    if (str.length > size) {
      size = size <= 3 ? size : size - 3;
      return str.substring(0, size) + '...';
    }
    return str;
  }

  it("Should pass sample tests", () => {
    assert.strictEqual(trim("Creating kata is fun", 14),"Creating ka...");
    assert.strictEqual(trim("He", 1),"H...");
    assert.strictEqual(trim("Code Wars is pretty rad", 50), "Code Wars is pretty rad");
  });

});
