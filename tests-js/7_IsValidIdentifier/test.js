var assert = require('assert');

describe('Kyu 7: Is valid identifier?', function () {

  function isValid(idn) {
    return /^[a-z_$][a-z\d_$]*$/i.test(idn);
  }

  it("should return true for valid identifiers", function () {
    assert.equal(isValid("okay_ok1"), true, "Wrong result for 'okay_ok1'");
    assert.equal(isValid("$ok"), true, "Wrong result for '$ok'");
    assert.equal(isValid("___"), true, "Wrong result for '___'");
    assert.equal(isValid("str_STR"), true, "Wrong result for 'str_STR'");
    assert.equal(isValid("myIdentf"), true, "Wrong result for 'myIdentf'");
  });

  it("should return false for invalid identifiers", function () {
    assert.equal(isValid("1ok0okay"), false, "Wrong result for '1ok0okay'");
    assert.equal(isValid("!Ok"), false, "Wrong result for '!Ok'");
    assert.equal(isValid(""), false, "Wrong result for an empty string");
    assert.equal(isValid("str-str"), false, "Wrong result for 'str-str'");
    assert.equal(isValid("no no"), false, "Wrong result for 'no no'");
  });

});
