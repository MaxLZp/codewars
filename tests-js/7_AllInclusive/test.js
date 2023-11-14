var assert = require('assert');

describe('Kyu 7: All Inclusive?', function () {

  function containAllRots(strng, arr) {
    for (let index = 0; index < strng.length; index++) {
      if (arr.indexOf(strng.slice(index) + strng.slice(0, index)) == -1) { return false; }
    }
    return true;
  }

  it("containAllRots",function() {
    assert.equal(containAllRots("", []), true)
    assert.equal(containAllRots("", ["bsjq", "qbsj"]), true)
    assert.equal(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true)
    assert.equal(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]), false)
  })

});
