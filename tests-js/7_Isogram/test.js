var assert = require('assert');

describe('Kyu 7: Isograms', function () {
  it('solution1', function () {

    assert.equal( isIsogram("Dermatoglyphics"), true );
    assert.equal( isIsogram("isogram"), true );
    assert.equal( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.equal( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.equal( isIsogram("isIsogram"), false );
    assert.equal( isIsogram(""), true, "an empty string is a valid isogram" );

    function isIsogram(str) {
      return (new Set(...(str.toLowerCase().split()))).size === str.length;
    }
  });

  it('solutionOther', function () {

    assert.equal( isIsogram("Dermatoglyphics"), true );
    assert.equal( isIsogram("isogram"), true );
    assert.equal( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.equal( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.equal( isIsogram("isIsogram"), false );
    assert.equal( isIsogram(""), true, "an empty string is a valid isogram" );

    function isIsogram(str) {
      return (new Set(str.toLowerCase())).size === str.length;
    }
  });

});
