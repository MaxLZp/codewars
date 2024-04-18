var assert = require('assert');

describe('Kyu 7: Training JS #39: Regular Expression--"?", "*", "+" and "{}"', function () {

  var regex=/^-?9\d*0{4}$/

  it("Tests", function() {
    assert.equal(regex.test("90000") , true);
    assert.equal(regex.test("-90000") , true);
    assert.equal(regex.test("900000000") , true);
    assert.equal(regex.test("91230000") , true);
    assert.equal(regex.test("-91230000") , true);
    assert.equal(regex.test("190000") , false);
    assert.equal(regex.test("90001") , false);
    assert.equal(regex.test("9000") , false);
    assert.equal(regex.test("91230") , false);
    assert.equal(regex.test("1-90000") , false);
    assert.equal(regex.test("-90000123") , false);
  });

});
