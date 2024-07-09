var chai = require('chai');

describe('Kyu 7: String to integer conversion', function () {
  it('solution1', function () {

    function myParseInt(str) {
      return /^\s*\d+\s*$/.test(str) ? parseInt(str) : 'NaN';
    }

    chai.assert.equal(myParseInt("1"), 1);
    chai.assert.equal(myParseInt("  1 "), 1);
    chai.assert.equal(myParseInt("08"), 8);
    chai.expect(isNaN(myParseInt("5 friends")));
    chai.expect(isNaN(myParseInt("16.5")));
  });

});
