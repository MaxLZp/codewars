const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
chai.config.truncateThreshold=0;

describe('Kyu 7: Band name generator', function () {

  function bandNameGenerator(str) {
    // Regexp to first letter match the lastmatch
    // /^([a-z])(?=[a-z]*\1$)/i
    return str.endsWith(str[0])
      ? str[0].toUpperCase() + str.slice(1) + str.slice(1)
      : 'The ' + str[0].toUpperCase() + str.slice(1);
  }

  it("Type of calculator is correct", () => {
    assert.equal(bandNameGenerator('knife'), 'The Knife');
    assert.equal(bandNameGenerator('tart'), 'Tartart');
    assert.equal(bandNameGenerator('sandles'), 'Sandlesandles');
    assert.equal(bandNameGenerator('bed'), 'The Bed');
  });

});
