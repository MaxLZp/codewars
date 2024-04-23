var assert = require('assert');

describe('Kyu 7: Ghostbusters (whitespace removal)', function () {

  function ghostBusters(building) {
    var replaced = building.replace(/\s/g, '');
    return replaced == building ? "You just wanted my autograph didn't you?" : replaced;
  }

  it("test", function() {
    assert.ok(ghostBusters("Factor y") === "Factory", 'Nope, there may still be a ghost in the building. Try again.');
    assert.ok(ghostBusters("O  f fi ce") === "Office", 'Nope, there may still be a ghost in the building. Try again.');
    assert.ok(ghostBusters("BusStation") === "You just wanted my autograph didn't you?", 'Nope, as there were no ghosts in the BusStation you need to return a witty retort.');
  });

});
