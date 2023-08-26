var assert = require('assert');

describe('Kyu 7: Isograms', function () {

  it('solutionOther', function () {

      String.prototype.toJadenCase = function () {
        return this.split(' ').map((word) => {
          return word.replace(/^\S/, word.split('').shift()?.toUpperCase());
        }).join(' ');
      };

    var str = "How can mirrors be real if our eyes aren't real";
    assert.equal(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

  });

});
