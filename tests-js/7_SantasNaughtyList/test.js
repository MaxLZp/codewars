var assert = require('assert');

describe('Kyu 7: Santa\'s Naughty List', function () {

  function findChildren(santasList, children) {
    return Array.from(new Set(children))
      .filter((c) => ( santasList.find((se) => (se == c)) != undefined ))
      .sort();
  }

  it("Basic test", function() {
    assert.deepEqual(findChildren(["Jason", "Jackson", "Jordan", "Johnny"], ["Jason", "Jordan", "Jennifer"]), ["Jason", "Jordan"]);
  });
  it("Capitalization test", function() {
    assert.deepEqual(findChildren(["jASon", "JAsoN", "JaSON", "jasON"], ["JasoN", "jASOn", "JAsoN", "jASon", "JASON"]), ["JAsoN", "jASon"]);
  });
  it("Sorting test", function() {
    assert.deepEqual(findChildren(["Jason", "James", "Johnson"], ["Jason", "James", "JJ"]), ["James", "Jason"]);
  });

});
