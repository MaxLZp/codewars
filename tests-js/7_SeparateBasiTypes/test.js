var assert = require('assert');

describe('Kyu 7: Separate basic types', function () {

  function separateTypes(input) {
    return input.reduce((c, e) => {
      var type = typeof e;
      c[type] ? c[type].push(e) : c[type] = [e];

      return c;
    }, {});
  }

  it("given ['a', 1, 2, false, 'b']", function() {
    assert.deepEqual(separateTypes(['a', 1, 2, false, 'b']), {number: [1, 2],  string: ['a', 'b'], boolean: [false]});
  });

  it("given ['a', 1, 2 ]", function() {
    assert.deepEqual(separateTypes(['a', 1, 2 ]), {number: [1, 2],  string: ['a']});
  });

});
