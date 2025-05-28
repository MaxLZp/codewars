const chai = require("chai");
const assert = chai.assert;

describe('Kyu 7: Name Array Capping', function () {

  function capMe(names) {
    return names.map(e => e[0].toUpperCase() + e.substring(1).toLowerCase());
  }

  it ("should return array of capitalized names if lowercase are given", function() {
    assert.deepEqual(capMe(['johnny']), ['Johnny']);
  });

  it ("should return an array of capitalized names if uppercase strings are given", function() {
    assert.deepEqual(capMe(['RALPH', 'GEORGIA', 'CHRISTINA']), ['Ralph', 'Georgia', 'Christina']);
  });

});
