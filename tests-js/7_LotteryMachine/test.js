const { assert } = require("chai");

describe("Lottery machine", () => {

  function lottery(str){
    return [... new Set(str.match(/\d/g))].join('') || "One more run!";
  }

  it("Initial Tests", () => {
    assert.equal(lottery("wQ8Hy0y5m5oshQPeRCkG"), "805", "should return unique integer(s) or a string");
    assert.equal(lottery("ffaQtaRFKeGIIBIcSJtg"), "One more run!", "should return unique integer(s) or a string");
  });

});
