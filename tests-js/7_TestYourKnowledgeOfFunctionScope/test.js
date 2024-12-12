const { assert, config } = require("chai");
config.truncateThreshold = 0;


describe("Kyu 7: Test Your Knowledge Of Function Scope", () => {
  it("Basic Tests", () => {

    function add(a) {
      return function(b) {
        return a+b;
      }
    }

    assert.equal(add(2)(5), 7,    'Should return the addition of these invocations!')
    assert.equal(add(14)(25), 39, 'Should return the addition of these invocations!')
  });
});
