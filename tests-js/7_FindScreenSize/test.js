var assert = require('assert');

function findScreenHeight(width, ratio) {
  return `${width}x${width/(eval(ratio.replace(':', '/')))}`;
}

describe("test4:3", function() {
  it("should return 1024x768", function(){
      assert.equal(findScreenHeight(1024,"4:3"), "1024x768");
  });
});
describe("test16:9", function() {
  it("should return 1280x720", function(){
      assert.equal(findScreenHeight(1280,"16:9"), "1280x720");
  });
});
describe("test32:9", function() {
  it("should return 3840x1080", function(){
      assert.equal(findScreenHeight(3840,"32:9"), "3840x1080");
  });
})
