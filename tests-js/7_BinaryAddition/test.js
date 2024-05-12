var chai = require('chai');

describe('Kyu 7: Binary Addition', function () {

  function addBinary(a,b) {
    return (a+b).toString(2);
  }

  var results1 = addBinary(1,2);
  it("Should return something that isn't falsy", function() {
    chai.expect(results1, "Something is wrong, no results!");
  });
  it("Should return \"11\"", function() {
    chai.assert.equal(results1, "11");
  });

});
