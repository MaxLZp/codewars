var assert = require('assert');

describe('Kyu 7: Say hello!', function () {

  function greet(name) {
    return name ? `hello ${name}!` : null;
  }

  it("Basic test", function() {
    assert.equal(greet("Niks"), "hello Niks!", "try again");
    assert.equal(greet(null), null, "try again");
  });

});
