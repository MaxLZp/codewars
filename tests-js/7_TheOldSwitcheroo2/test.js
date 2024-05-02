const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("The old switcheroo 2",() =>{

  it("Solution 1", () => {

    function encode(str) {
      return str.replace(/[a-zA-Z]/g, (v) => (v.toLowerCase().charCodeAt(0) - 96));
    }

    assert.equal(encode('abc'),'123');
    assert.equal(encode('ABCD'),'1234');
    assert.equal(encode('ZzzzZ'),'2626262626');
    assert.equal(encode('abc-#@5'),'123-#@5');
  })

  it("Solution 2", () => {

    function encode(str) {
      return str.replace(/[a-zA-Z]/g, (v) => (v.toLowerCase().charCodeAt(0) % 32));
    }

    assert.equal(encode('abc'),'123');
    assert.equal(encode('ABCD'),'1234');
    assert.equal(encode('ZzzzZ'),'2626262626');
    assert.equal(encode('abc-#@5'),'123-#@5');
  })

})
