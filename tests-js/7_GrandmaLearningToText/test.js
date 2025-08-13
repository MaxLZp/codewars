const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Grandma learning to text', function () {

  function textin(s){
    return s.replace(/two|too|to(?!o)/gi, '2');
  }

  it("Testing for fixed tests", () => {
    assert.equal(textin('I love to text'),'I love 2 text',)
    assert.equal(textin('see you tomorrow'),'see you 2morrow',)
    assert.equal(textin('look at that octopus'),'look at that oc2pus',)
  });

});
