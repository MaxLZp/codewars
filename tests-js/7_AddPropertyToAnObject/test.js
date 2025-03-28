const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('Kyu 7: Add a property to an object', function () {

  function addProperty(obj, prop, value) {
    if (obj.hasOwnProperty(prop)) {
      throw Error("Property already exists");
    }

    obj[prop] = value;
  }

  var obj = {};
  before(function() {
    obj = {};
    addProperty(obj, "name", "Palle");
  });
  it("Should set the value of the property", function() {
    assert.isTrue(obj.name === "Palle");
  });
  it("Should allow setting the new property to another value", function() {
    obj.name = "Dylan";
    assert.isTrue(obj.name === "Dylan");
  });
  it("Should throw an error if the property already exists", function() {
    chai.expect(function() {
      addProperty(obj, "name", "Palle");
    }).to.throw("Property already exists");
  });

});
