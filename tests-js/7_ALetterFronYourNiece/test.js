const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Kyu 7: A Letter from Your Niece', function () {

  function nonsense(str) {
    return str.toLowerCase()
      .replace(/trex|raptor/g, '')
      .replace(/[0-4]/g, substring => ["a", "e", "i", "o", "u"][+substring])
      .replace(/ i /g, ' I ')
      .replace(/^./, substring => substring.toUpperCase())
      .replace(/([^\.])$/, '$1.')
      ;
  }

  it('Valid tests', function() {
    assert.strictEqual(nonsense("d2n3S04Rs 0r1 c33L."),
    "Dinosaurs are cool.")

    assert.strictEqual(nonsense("h1Ll3 Wtrex3raptorRLD"),
    "Hello world.")

    assert.strictEqual(nonsense("i think therefore i am"),
    "I think therefore I am.")
  });

});
