var assert = require('assert');

describe('Kyu 8: Make UpperCase', function () {

  it('solution1', function () {

    assert.equal(solve(''), "");
    assert.equal(solve('hello'), "HELLO");
    assert.equal(solve('Hello'), "HELLO");
    assert.equal(solve('HELLO'), "HELLO");

    function solve(input) {

      return input.toUpperCase();
    }

  });

});
