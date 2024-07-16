var assert = require('assert');

describe('Kyu 7: Apparently-Modifying Strings', function () {

  it("solution 1",function() {

    function apparently(string) {
      return string.replace(/\band apparently\b/g, 'and')
        .replace(/\bbut apparently\b/g, 'but')
        .replace(/\band\b/g, 'and apparently')
        .replace(/\bbut\b/g, 'but apparently');
    }

    assert.equal(apparently('It was great and I have never been on live television before but sometimes I dont watch this.'), 'It was great and apparently I have never been on live television before but apparently sometimes I dont watch this.');
    assert.equal(apparently('and'), 'and apparently');
    assert.equal(apparently('apparently'), 'apparently');

    assert.equal(apparently('but but but and and and'), 'but apparently but apparently but apparently and apparently and apparently and apparently');
    assert.equal(apparently('but the bread and butter apparently brand apparently'), 'but apparently the bread and apparently butter apparently brand apparently');
  })

  it("solution 2",function() {

    function apparently(string) {
      return string.replace(/\b(but|and)\b(\sapparently\b)?/g, '$1 apparently');
    }

    assert.equal(apparently('It was great and I have never been on live television before but sometimes I dont watch this.'), 'It was great and apparently I have never been on live television before but apparently sometimes I dont watch this.');
    assert.equal(apparently('and'), 'and apparently');
    assert.equal(apparently('apparently'), 'apparently');

    assert.equal(apparently('but but but and and and'), 'but apparently but apparently but apparently and apparently and apparently and apparently');
    assert.equal(apparently('but the bread and butter apparently brand apparently'), 'but apparently the bread and apparently butter apparently brand apparently');
  })

});

