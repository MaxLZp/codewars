const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Chain me', function () {

  function chain(input, fs) {
    return fs.reduce((c, f) => f(c), input);
  }

  it("test", () => {
    function add(x) {
      return x + 10;
    }

    function mult(x) {
      return x * 30;
    }

    assert.equal(chain(2, [add, mult]), 360, "Error: chain function does not work");
  });

});
