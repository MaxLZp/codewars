var assert = require('assert');

describe('Kyu 7: Something \'s fishy...', function () {
  it('solution1', function () {

    function isTotal3() {
      var simpleVariable = 1;

      for (var index = 0; index < 1; index++)
      var variableInLoop = 1;

      var variableInFunction; // after or even without this line to put in global scope
      (function defineAVariable() {
        // var variableInFunction = 1; // before
        variableInFunction = 1; // after
      })();

      var result = simpleVariable + variableInLoop + variableInFunction;

      return result;
    }

    assert.equal(isTotal3(), 3);
  });

});
