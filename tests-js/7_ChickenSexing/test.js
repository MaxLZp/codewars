const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Chicken Sexing', function () {

  function correctness(bobsDecisions, expertDecisions) {
    return bobsDecisions.reduce((c, bobsDecision, i) => {
      if (bobsDecision == expertDecisions[i]) {
        c += 1;
      } else if (bobsDecision == '?' || expertDecisions[i] == '?') {
        c += 0.5;
      }
      return c;
    }, 0);
  }

  it('solution1', function () {
    assert.equal(correctness(['M', '?', 'M'], ['M', 'F', '?']), 2, 'guessed')
  });

});
