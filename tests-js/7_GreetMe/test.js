var assert = require('assert');

describe('Kyu 7: Greet Me', function () {

  function greet(name) {
    return `Hello ${name.toLowerCase().replace(/^./, (c) => (c.toUpperCase()))}!`;
  }

  it("Basic tests",function() {
    assert.equal(greet('riley'), 'Hello Riley!');
  })

});
